"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const tsUtils_1 = require("./tsUtils");
const util_1 = require("./util");
// tslint:disable:arrow-parens
class UpdateChanges {
    /**
     * Create a new base schematic to apply changes
     * @param rootPath Root folder for the schematic to read configs, pass __dirname
     */
    constructor(rootPath, host, context) {
        this.rootPath = rootPath;
        this.host = host;
        this.context = context;
        this.conditionFunctions = new Map();
        this._templateFiles = [];
        this._tsFiles = [];
        this._sassFiles = [];
        this.workspace = util_1.getWorkspace(host);
        this.sourcePaths = util_1.getProjectPaths(this.workspace);
        this.selectorChanges = this.loadConfig('selectors.json');
        this.classChanges = this.loadConfig('classes.json');
        this.outputChanges = this.loadConfig('outputs.json');
        this.inputChanges = this.loadConfig('inputs.json');
        this.themePropsChanges = this.loadConfig('theme-props.json');
        this.importsChanges = this.loadConfig('imports.json');
    }
    get templateFiles() {
        if (!this._templateFiles.length) {
            // https://github.com/angular/devkit/blob/master/packages/angular_devkit/schematics/src/tree/filesystem.ts
            this.sourceDirsVisitor((fulPath, entry) => {
                if (fulPath.endsWith('component.html')) {
                    this._templateFiles.push(entry.path);
                }
            });
        }
        return this._templateFiles;
    }
    get tsFiles() {
        if (!this._tsFiles.length) {
            this.sourceDirsVisitor((fulPath, entry) => {
                if (fulPath.endsWith('.ts')) {
                    this._tsFiles.push(entry.path);
                }
            });
        }
        return this._tsFiles;
    }
    /** Sass (both .scss and .sass) files in the project being updagraded. */
    get sassFiles() {
        if (!this._sassFiles.length) {
            // files can be outside the app prefix, so start from sourceRoot
            // also ignore schematics `styleext` as Sass can be used regardless
            const sourceDirs = util_1.getProjects(this.workspace).map(x => x.sourceRoot).filter(x => x);
            this.sourceDirsVisitor((fulPath, entry) => {
                if (fulPath.endsWith('.scss') || fulPath.endsWith('.sass')) {
                    this._sassFiles.push(entry.path);
                }
            }, sourceDirs);
        }
        return this._sassFiles;
    }
    /** Apply configured changes to the Host Tree */
    applyChanges() {
        if (this.selectorChanges && this.selectorChanges.changes.length) {
            for (const entryPath of this.templateFiles) {
                this.updateSelectors(entryPath);
            }
        }
        if (this.outputChanges && this.outputChanges.changes.length) {
            for (const entryPath of this.templateFiles) {
                this.updateBindings(entryPath, this.outputChanges);
            }
        }
        if (this.inputChanges && this.inputChanges.changes.length) {
            for (const entryPath of this.templateFiles) {
                this.updateBindings(entryPath, this.inputChanges, BindingType.input);
            }
        }
        /** TS files */
        if (this.classChanges && this.classChanges.changes.length) {
            for (const entryPath of this.tsFiles) {
                this.updateClasses(entryPath);
            }
        }
        /** Sass files */
        if (this.themePropsChanges && this.themePropsChanges.changes.length) {
            for (const entryPath of this.sassFiles) {
                this.updateThemeProps(entryPath);
            }
        }
        if (this.importsChanges && this.importsChanges.changes.length) {
            for (const entryPath of this.tsFiles) {
                this.updateImports(entryPath);
            }
        }
    }
    /** Add condition funtion. */
    addCondition(conditionName, callback) {
        this.conditionFunctions.set(conditionName, callback);
    }
    updateSelectors(entryPath) {
        let fileContent = this.host.read(entryPath).toString();
        let overwrite = false;
        for (const change of this.selectorChanges.changes) {
            let searchPttrn = change.type === 'component' ? '<' : '';
            searchPttrn += change.selector;
            if (fileContent.indexOf(searchPttrn) !== -1) {
                fileContent = this.applySelectorChange(fileContent, change);
                overwrite = true;
            }
        }
        if (overwrite) {
            this.host.overwrite(entryPath, fileContent);
        }
    }
    applySelectorChange(fileContent, change) {
        let regSource;
        let replace;
        switch (change.type) {
            case 'component':
                if (change.remove) {
                    regSource = String.raw `\<${change.selector}[\s\S]*?\<\/${change.selector}\>`;
                    replace = '';
                }
                else {
                    regSource = String.raw `\<(\/?)${change.selector}`;
                    replace = `<$1${change.replaceWith}`;
                }
                break;
            case 'directive':
                if (change.remove) {
                    // Group match (\2) as variable as it looks like octal escape (error in strict)
                    regSource = String.raw `\s*?\[?${change.selector}\]?(=(["']).*?${'\\2'}(?=\s|\>))?`;
                    replace = '';
                }
                else {
                    regSource = change.selector;
                    replace = change.replaceWith;
                }
                break;
            default:
                break;
        }
        fileContent = fileContent.replace(new RegExp(regSource, 'g'), replace);
        return fileContent;
    }
    updateClasses(entryPath) {
        let fileContent = this.host.read(entryPath).toString();
        let overwrite = false;
        for (const change of this.classChanges.changes) {
            if (fileContent.indexOf(change.name) !== -1) {
                const positions = tsUtils_1.getIdentifierPositions(fileContent, change.name);
                // loop backwards to preserve positions
                for (let i = positions.length; i--;) {
                    const pos = positions[i];
                    fileContent = fileContent.slice(0, pos.start) + change.replaceWith + fileContent.slice(pos.end);
                }
                overwrite = true;
            }
        }
        if (overwrite) {
            this.host.overwrite(entryPath, fileContent);
        }
    }
    updateBindings(entryPath, bindChanges, type = BindingType.output) {
        let fileContent = this.host.read(entryPath).toString();
        let overwrite = false;
        for (const change of bindChanges.changes) {
            if (fileContent.indexOf(change.owner.selector) === -1 || fileContent.indexOf(change.name) === -1) {
                continue;
            }
            let base;
            let replace;
            let groups = 1;
            let searchPattern;
            if (type === BindingType.output) {
                base = String.raw `\(${change.name}\)=(["'])`;
                replace = `(${change.replaceWith})=$1`;
            }
            else {
                // Match both bound - [name] - and regular - name
                base = String.raw `(\s\[?)${change.name}(\s*\]?=)(["'])`;
                replace = String.raw `$1${change.replaceWith}$2$3`;
                groups = 3;
            }
            let reg = new RegExp(base, 'g');
            if (change.remove || change.moveBetweenElementTags) {
                // Group match (\1) as variable as it looks like octal escape (error in strict)
                reg = new RegExp(String.raw `\s*${base}.*?${'\\' + groups}(?=\s|\>)`, 'g');
                replace = '';
            }
            switch (change.owner.type) {
                case 'component':
                    searchPattern = String.raw `\<${change.owner.selector}[^\>]*\>`;
                    break;
                case 'directive':
                    searchPattern = String.raw `\<[^\>]*[\s\[]${change.owner.selector}[^\>]*\>`;
                    break;
            }
            const matches = fileContent.match(new RegExp(searchPattern, 'g'));
            for (const match of matches) {
                if (!this.areConditionsFulfiled(match, change.conditions)) {
                    continue;
                }
                if (change.moveBetweenElementTags) {
                    const moveMatch = match.match(reg);
                    fileContent = this.copyPropertyValueBetweenElementTags(fileContent, match, moveMatch);
                }
                fileContent = fileContent.replace(match, match.replace(reg, replace));
            }
            overwrite = true;
        }
        if (overwrite) {
            this.host.overwrite(entryPath, fileContent);
        }
    }
    updateThemeProps(entryPath) {
        let fileContent = this.host.read(entryPath).toString();
        let overwrite = false;
        for (const change of this.themePropsChanges.changes) {
            if (fileContent.indexOf(change.owner) !== -1) {
                /** owner-func:( * ); */
                const searchPattern = String.raw `${change.owner}\([\s\S]+?\);`;
                const matches = fileContent.match(new RegExp(searchPattern, 'g'));
                if (!matches) {
                    continue;
                }
                for (const match of matches) {
                    if (match.indexOf(change.name)) {
                        const name = change.name.replace('$', '\\$');
                        const reg = new RegExp(String.raw `^\s*${name}:`);
                        const opening = `${change.owner}(`;
                        const closing = /\s*\);$/.exec(match).pop();
                        const body = match.substr(opening.length, match.length - opening.length - closing.length);
                        let params = this.splitFunctionProps(body);
                        params = params.reduce((arr, param) => {
                            if (reg.test(param)) {
                                if (!change.remove) {
                                    arr.push(param.replace(change.name, change.replaceWith));
                                }
                            }
                            else {
                                arr.push(param);
                            }
                            return arr;
                        }, []);
                        fileContent = fileContent.replace(match, opening + params.join(',') + closing);
                        overwrite = true;
                    }
                }
            }
        }
        if (overwrite) {
            this.host.overwrite(entryPath, fileContent);
        }
    }
    updateImports(entryPath) {
        let fileContent = this.host.read(entryPath).toString();
        let overwrite = false;
        for (const change of this.importsChanges.changes) {
            if (fileContent.indexOf(change.name) === -1) {
                continue;
            }
            const replace = util_1.escapeRegExp(change.replaceWith);
            const base = util_1.escapeRegExp(change.name);
            const reg = new RegExp(base, 'g');
            fileContent = fileContent.replace(reg, replace);
            overwrite = true;
        }
        if (overwrite) {
            this.host.overwrite(entryPath, fileContent);
        }
    }
    loadConfig(configJson) {
        const filePath = path.join(this.rootPath, 'changes', configJson);
        if (fs.existsSync(filePath)) {
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
    }
    areConditionsFulfiled(match, conditions) {
        if (conditions) {
            for (const condition of conditions) {
                if (this.conditionFunctions && this.conditionFunctions.has(condition)) {
                    const callback = this.conditionFunctions.get(condition);
                    if (callback && !callback(match)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    copyPropertyValueBetweenElementTags(fileContent, ownerMatch, propertyMatchArray) {
        if (ownerMatch && propertyMatchArray && propertyMatchArray.length > 0) {
            const propMatch = propertyMatchArray[0].trim();
            const propValueMatch = propMatch.match(new RegExp(`=(["'])(.+?)${'\\1'}`));
            if (propValueMatch && propValueMatch.length > 0) {
                const propValue = propValueMatch[propValueMatch.length - 1];
                if (propMatch.startsWith('[')) {
                    return fileContent.replace(ownerMatch, ownerMatch + `{{${propValue}}}`);
                }
                else {
                    return fileContent.replace(ownerMatch, ownerMatch + propValue);
                }
            }
        }
        return fileContent;
    }
    sourceDirsVisitor(visitor, dirs = this.sourcePaths) {
        for (const sourcePath of dirs) {
            const srcDir = this.host.getDir(sourcePath);
            srcDir.visit(visitor);
        }
    }
    /**
     * Safe split by `','`, considering possible inner function calls. E.g.:
     * ```
     * prop: inner-func(),
     * prop2: inner2(inner-param: 3, inner-param: inner-func(..))
     * ```
     */
    splitFunctionProps(body) {
        const parts = [];
        let lastIndex = 0;
        let level = 0;
        for (let i = 0; i < body.length; i++) {
            const char = body[i];
            switch (char) {
                case '(':
                    level++;
                    break;
                case ')':
                    level--;
                    break;
                case ',':
                    if (!level) {
                        parts.push(body.substring(lastIndex, i));
                        lastIndex = i + 1;
                    }
                    break;
                default:
                    break;
            }
        }
        parts.push(body.substring(lastIndex));
        return parts;
    }
}
exports.UpdateChanges = UpdateChanges;
var BindingType;
(function (BindingType) {
    BindingType[BindingType["output"] = 0] = "output";
    BindingType[BindingType["input"] = 1] = "input";
})(BindingType = exports.BindingType || (exports.BindingType = {}));

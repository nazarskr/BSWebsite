"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const config_1 = require("@schematics/angular/utility/config");
const workspace_models_1 = require("@schematics/angular/utility/workspace-models");
const resetPackage = { 'minireset.css': '~0.0.4' };
exports.cssImport = 'node_modules/minireset.css/minireset.css';
exports.scssImport = `// CSS Reset, comment out if not required or using a different module\n`
    + `@import '~minireset.css/minireset';\n`;
function addResetCss(host) {
    const config = config_1.getWorkspace(host);
    const project = config.projects[config.defaultProject];
    let addPackage;
    const styleExts = ['scss', 'sass', 'css', 'less', 'styl'];
    const styleExt = styleExts.find(ext => host.exists(path.posix.join(project.sourceRoot, `styles.${ext}`)));
    if (!styleExt) {
        return false;
    }
    const stylesFile = path.posix.join(project.sourceRoot, `styles.${styleExt}`);
    switch (styleExt) {
        case 'sass':
        case 'scss':
            let content = host.read(stylesFile).toString();
            if (content.indexOf(`~minireset.css/minireset`) === -1) {
                content = exports.scssImport + content;
                host.overwrite(stylesFile, content);
                addPackage = resetPackage;
            }
            break;
        case 'css':
        case 'less':
        case 'styl':
            if (!project.architect ||
                !project.architect.build ||
                project.projectType !== workspace_models_1.ProjectType.Application) {
                return false;
            }
            if (project.architect.build.options.styles) {
                project.architect.build.options.styles =
                    [exports.cssImport, ...project.architect.build.options.styles];
            }
            else {
                project.architect.build.options.styles = [exports.cssImport];
            }
            host.overwrite(config_1.getWorkspacePath(host), JSON.stringify(config, null, 2));
            addPackage = resetPackage;
            break;
        default:
            break;
    }
    if (addPackage) {
        const targetFile = 'package.json';
        if (host.exists(targetFile)) {
            const pkgJson = JSON.parse(host.read(targetFile).toString());
            pkgJson.dependencies = Object.assign({}, addPackage, pkgJson.dependencies);
            host.overwrite(targetFile, JSON.stringify(pkgJson, null, 2) + '\n');
            return true;
        }
    }
    return false;
}
exports.addResetCss = addResetCss;

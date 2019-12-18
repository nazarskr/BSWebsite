import { SchematicContext, Tree } from '@angular-devkit/schematics';
import { WorkspaceSchema } from '@schematics/angular/utility/workspace-models';
import { ClassChanges, BindingChanges, SelectorChange, SelectorChanges, ThemePropertyChanges, ImportsChanges } from './schema';
export declare class UpdateChanges {
    private rootPath;
    private host;
    private context?;
    protected workspace: WorkspaceSchema;
    protected sourcePaths: string[];
    protected classChanges: ClassChanges;
    protected outputChanges: BindingChanges;
    protected inputChanges: BindingChanges;
    protected selectorChanges: SelectorChanges;
    protected themePropsChanges: ThemePropertyChanges;
    protected importsChanges: ImportsChanges;
    protected conditionFunctions: Map<string, Function>;
    private _templateFiles;
    readonly templateFiles: string[];
    private _tsFiles;
    readonly tsFiles: string[];
    private _sassFiles;
    /** Sass (both .scss and .sass) files in the project being updagraded. */
    readonly sassFiles: string[];
    /**
     * Create a new base schematic to apply changes
     * @param rootPath Root folder for the schematic to read configs, pass __dirname
     */
    constructor(rootPath: string, host: Tree, context?: SchematicContext);
    /** Apply configured changes to the Host Tree */
    applyChanges(): void;
    /** Add condition funtion. */
    addCondition(conditionName: string, callback: (ownerMatch: string) => boolean): void;
    protected updateSelectors(entryPath: string): void;
    protected applySelectorChange(fileContent: string, change: SelectorChange): string;
    protected updateClasses(entryPath: string): void;
    protected updateBindings(entryPath: string, bindChanges: BindingChanges, type?: BindingType): void;
    protected updateThemeProps(entryPath: string): void;
    protected updateImports(entryPath: string): void;
    private loadConfig;
    private areConditionsFulfiled;
    private copyPropertyValueBetweenElementTags;
    private sourceDirsVisitor;
    /**
     * Safe split by `','`, considering possible inner function calls. E.g.:
     * ```
     * prop: inner-func(),
     * prop2: inner2(inner-param: 3, inner-param: inner-func(..))
     * ```
     */
    private splitFunctionProps;
}
export declare enum BindingType {
    output = 0,
    input = 1
}

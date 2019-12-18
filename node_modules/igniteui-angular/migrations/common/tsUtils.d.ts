/** Returns an source file */
export declare function getIdentifierPositions(sourceText: string, name: string): Array<{
    start: number;
    end: number;
}>;
/** Returns the positions of import from module string literals  */
export declare function getImportModulePositions(sourceText: string, startsWith: string): Array<{
    start: number;
    end: number;
}>;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ExcelFolderTypes = {
    RootExcelFolder: 0,
    RootRelsExcelFolder: 1,
    DocPropsExcelFolder: 2,
    XLExcelFolder: 3,
    XLRelsExcelFolder: 4,
    ThemeExcelFolder: 5,
    WorksheetsExcelFolder: 6,
    WorksheetsRelsExcelFolder: 7,
    TablesExcelFolder: 8,
};
export { ExcelFolderTypes };
ExcelFolderTypes[ExcelFolderTypes.RootExcelFolder] = 'RootExcelFolder';
ExcelFolderTypes[ExcelFolderTypes.RootRelsExcelFolder] = 'RootRelsExcelFolder';
ExcelFolderTypes[ExcelFolderTypes.DocPropsExcelFolder] = 'DocPropsExcelFolder';
ExcelFolderTypes[ExcelFolderTypes.XLExcelFolder] = 'XLExcelFolder';
ExcelFolderTypes[ExcelFolderTypes.XLRelsExcelFolder] = 'XLRelsExcelFolder';
ExcelFolderTypes[ExcelFolderTypes.ThemeExcelFolder] = 'ThemeExcelFolder';
ExcelFolderTypes[ExcelFolderTypes.WorksheetsExcelFolder] = 'WorksheetsExcelFolder';
ExcelFolderTypes[ExcelFolderTypes.WorksheetsRelsExcelFolder] = 'WorksheetsRelsExcelFolder';
ExcelFolderTypes[ExcelFolderTypes.TablesExcelFolder] = 'TablesExcelFolder';
/** @enum {number} */
const ExcelFileTypes = {
    RootRelsFile: 0,
    AppFile: 1,
    CoreFile: 2,
    WorkbookRelsFile: 3,
    ThemeFile: 4,
    WorksheetFile: 5,
    StyleFile: 6,
    WorkbookFile: 7,
    ContentTypesFile: 8,
    SharedStringsFile: 9,
    WorksheetRelsFile: 10,
    TablesFile: 11,
};
export { ExcelFileTypes };
ExcelFileTypes[ExcelFileTypes.RootRelsFile] = 'RootRelsFile';
ExcelFileTypes[ExcelFileTypes.AppFile] = 'AppFile';
ExcelFileTypes[ExcelFileTypes.CoreFile] = 'CoreFile';
ExcelFileTypes[ExcelFileTypes.WorkbookRelsFile] = 'WorkbookRelsFile';
ExcelFileTypes[ExcelFileTypes.ThemeFile] = 'ThemeFile';
ExcelFileTypes[ExcelFileTypes.WorksheetFile] = 'WorksheetFile';
ExcelFileTypes[ExcelFileTypes.StyleFile] = 'StyleFile';
ExcelFileTypes[ExcelFileTypes.WorkbookFile] = 'WorkbookFile';
ExcelFileTypes[ExcelFileTypes.ContentTypesFile] = 'ContentTypesFile';
ExcelFileTypes[ExcelFileTypes.SharedStringsFile] = 'SharedStringsFile';
ExcelFileTypes[ExcelFileTypes.WorksheetRelsFile] = 'WorksheetRelsFile';
ExcelFileTypes[ExcelFileTypes.TablesFile] = 'TablesFile';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZW51bXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4Y2VsL2V4Y2VsLWVudW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlJLGtCQUFlO0lBQ2Ysc0JBQW1CO0lBQ25CLHNCQUFtQjtJQUNuQixnQkFBYTtJQUNiLG9CQUFpQjtJQUNqQixtQkFBZ0I7SUFDaEIsd0JBQXFCO0lBQ3JCLDRCQUF5QjtJQUN6QixvQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0lBTWpCLGVBQVk7SUFDWixVQUFPO0lBQ1AsV0FBUTtJQUNSLG1CQUFnQjtJQUNoQixZQUFTO0lBQ1QsZ0JBQWE7SUFDYixZQUFTO0lBQ1QsZUFBWTtJQUNaLG1CQUFnQjtJQUNoQixvQkFBaUI7SUFDakIscUJBQWlCO0lBQ2pCLGNBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGVudW0gRXhjZWxGb2xkZXJUeXBlcyB7XG4gICAgUm9vdEV4Y2VsRm9sZGVyLFxuICAgIFJvb3RSZWxzRXhjZWxGb2xkZXIsXG4gICAgRG9jUHJvcHNFeGNlbEZvbGRlcixcbiAgICBYTEV4Y2VsRm9sZGVyLFxuICAgIFhMUmVsc0V4Y2VsRm9sZGVyLFxuICAgIFRoZW1lRXhjZWxGb2xkZXIsXG4gICAgV29ya3NoZWV0c0V4Y2VsRm9sZGVyLFxuICAgIFdvcmtzaGVldHNSZWxzRXhjZWxGb2xkZXIsXG4gICAgVGFibGVzRXhjZWxGb2xkZXJcbn1cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZW51bSBFeGNlbEZpbGVUeXBlcyB7XG4gICAgUm9vdFJlbHNGaWxlLFxuICAgIEFwcEZpbGUsXG4gICAgQ29yZUZpbGUsXG4gICAgV29ya2Jvb2tSZWxzRmlsZSxcbiAgICBUaGVtZUZpbGUsXG4gICAgV29ya3NoZWV0RmlsZSxcbiAgICBTdHlsZUZpbGUsXG4gICAgV29ya2Jvb2tGaWxlLFxuICAgIENvbnRlbnRUeXBlc0ZpbGUsXG4gICAgU2hhcmVkU3RyaW5nc0ZpbGUsXG4gICAgV29ya3NoZWV0UmVsc0ZpbGUsXG4gICAgVGFibGVzRmlsZVxufVxuIl19
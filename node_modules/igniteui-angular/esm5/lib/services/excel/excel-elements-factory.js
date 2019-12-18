/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExcelFileTypes, ExcelFolderTypes } from './excel-enums';
import { AppFile, ContentTypesFile, CoreFile, RootRelsFile, SharedStringsFile, StyleFile, TablesFile, ThemeFile, WorkbookFile, WorkbookRelsFile, WorksheetFile, WorksheetRelsFile } from './excel-files';
import { DocPropsExcelFolder, RootExcelFolder, RootRelsExcelFolder, TablesExcelFolder, ThemeExcelFolder, WorksheetsExcelFolder, WorksheetsRelsExcelFolder, XLExcelFolder, XLRelsExcelFolder } from './excel-folders';
/**
 * @hidden
 */
var /**
 * @hidden
 */
ExcelElementsFactory = /** @class */ (function () {
    function ExcelElementsFactory() {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    ExcelElementsFactory.getExcelFolder = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case ExcelFolderTypes.RootExcelFolder:
                return new RootExcelFolder();
            case ExcelFolderTypes.RootRelsExcelFolder:
                return new RootRelsExcelFolder();
            case ExcelFolderTypes.DocPropsExcelFolder:
                return new DocPropsExcelFolder();
            case ExcelFolderTypes.XLExcelFolder:
                return new XLExcelFolder();
            case ExcelFolderTypes.XLRelsExcelFolder:
                return new XLRelsExcelFolder();
            case ExcelFolderTypes.ThemeExcelFolder:
                return new ThemeExcelFolder();
            case ExcelFolderTypes.WorksheetsExcelFolder:
                return new WorksheetsExcelFolder();
            case ExcelFolderTypes.WorksheetsRelsExcelFolder:
                return new WorksheetsRelsExcelFolder();
            case ExcelFolderTypes.TablesExcelFolder:
                return new TablesExcelFolder();
            default:
                throw new Error('Unknown excel folder type!');
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    ExcelElementsFactory.getExcelFile = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case ExcelFileTypes.RootRelsFile:
                return new RootRelsFile();
            case ExcelFileTypes.AppFile:
                return new AppFile();
            case ExcelFileTypes.CoreFile:
                return new CoreFile();
            case ExcelFileTypes.WorkbookRelsFile:
                return new WorkbookRelsFile();
            case ExcelFileTypes.ThemeFile:
                return new ThemeFile();
            case ExcelFileTypes.WorksheetFile:
                return new WorksheetFile();
            case ExcelFileTypes.StyleFile:
                return new StyleFile();
            case ExcelFileTypes.WorkbookFile:
                return new WorkbookFile();
            case ExcelFileTypes.ContentTypesFile:
                return new ContentTypesFile();
            case ExcelFileTypes.SharedStringsFile:
                return new SharedStringsFile();
            case ExcelFileTypes.WorksheetRelsFile:
                return new WorksheetRelsFile();
            case ExcelFileTypes.TablesFile:
                return new TablesFile();
            default:
                throw Error('Unknown excel file type!');
        }
    };
    return ExcelElementsFactory;
}());
/**
 * @hidden
 */
export { ExcelElementsFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZWxlbWVudHMtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhjZWwvZXhjZWwtZWxlbWVudHMtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILGNBQWMsRUFDZCxnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNILE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLFlBQVksRUFDWixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDSCxtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLHFCQUFxQixFQUNyQix5QkFBeUIsRUFDekIsYUFBYSxFQUNiLGlCQUFpQixFQUNwQixNQUFNLGlCQUFpQixDQUFDOzs7O0FBUXpCOzs7O0lBQUE7SUF5REEsQ0FBQzs7Ozs7SUF2RGlCLG1DQUFjOzs7O0lBQTVCLFVBQTZCLElBQXNCO1FBQy9DLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUNqQyxPQUFPLElBQUksZUFBZSxFQUFFLENBQUM7WUFDakMsS0FBSyxnQkFBZ0IsQ0FBQyxtQkFBbUI7Z0JBQ3JDLE9BQU8sSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3JDLEtBQUssZ0JBQWdCLENBQUMsbUJBQW1CO2dCQUNyQyxPQUFPLElBQUksbUJBQW1CLEVBQUUsQ0FBQztZQUNyQyxLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUMvQixLQUFLLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDbkMsT0FBTyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDbkMsS0FBSyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7Z0JBQ2xDLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xDLEtBQUssZ0JBQWdCLENBQUMscUJBQXFCO2dCQUN2QyxPQUFRLElBQUkscUJBQXFCLEVBQUUsQ0FBQztZQUN4QyxLQUFLLGdCQUFnQixDQUFDLHlCQUF5QjtnQkFDM0MsT0FBTyxJQUFJLHlCQUF5QixFQUFFLENBQUM7WUFDM0MsS0FBSyxnQkFBZ0IsQ0FBQyxpQkFBaUI7Z0JBQ25DLE9BQU8sSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1lBQ25DO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUNyRDtJQUNMLENBQUM7Ozs7O0lBRWEsaUNBQVk7Ozs7SUFBMUIsVUFBMkIsSUFBb0I7UUFDM0MsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLGNBQWMsQ0FBQyxZQUFZO2dCQUM1QixPQUFRLElBQUksWUFBWSxFQUFFLENBQUM7WUFDL0IsS0FBSyxjQUFjLENBQUMsT0FBTztnQkFDdkIsT0FBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQzFCLEtBQUssY0FBYyxDQUFDLFFBQVE7Z0JBQ3hCLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMxQixLQUFLLGNBQWMsQ0FBQyxnQkFBZ0I7Z0JBQ2hDLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xDLEtBQUssY0FBYyxDQUFDLFNBQVM7Z0JBQ3pCLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMzQixLQUFLLGNBQWMsQ0FBQyxhQUFhO2dCQUM3QixPQUFPLElBQUksYUFBYSxFQUFFLENBQUM7WUFDL0IsS0FBSyxjQUFjLENBQUMsU0FBUztnQkFDekIsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQzNCLEtBQUssY0FBYyxDQUFDLFlBQVk7Z0JBQzVCLE9BQU8sSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUM5QixLQUFLLGNBQWMsQ0FBQyxnQkFBZ0I7Z0JBQ2hDLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xDLEtBQUssY0FBYyxDQUFDLGlCQUFpQjtnQkFDakMsT0FBTyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDbkMsS0FBSyxjQUFjLENBQUMsaUJBQWlCO2dCQUNqQyxPQUFPLElBQUksaUJBQWlCLEVBQUUsQ0FBQztZQUNuQyxLQUFLLGNBQWMsQ0FBQyxVQUFVO2dCQUMxQixPQUFPLElBQUksVUFBVSxFQUFFLENBQUM7WUFDNUI7Z0JBQ0ksTUFBTSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUF6REQsSUF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEV4Y2VsRmlsZVR5cGVzLFxuICAgIEV4Y2VsRm9sZGVyVHlwZXNcbn0gZnJvbSAnLi9leGNlbC1lbnVtcyc7XG5cbmltcG9ydCB7XG4gICAgQXBwRmlsZSxcbiAgICBDb250ZW50VHlwZXNGaWxlLFxuICAgIENvcmVGaWxlLFxuICAgIFJvb3RSZWxzRmlsZSxcbiAgICBTaGFyZWRTdHJpbmdzRmlsZSxcbiAgICBTdHlsZUZpbGUsXG4gICAgVGFibGVzRmlsZSxcbiAgICBUaGVtZUZpbGUsXG4gICAgV29ya2Jvb2tGaWxlLFxuICAgIFdvcmtib29rUmVsc0ZpbGUsXG4gICAgV29ya3NoZWV0RmlsZSxcbiAgICBXb3Jrc2hlZXRSZWxzRmlsZVxufSBmcm9tICcuL2V4Y2VsLWZpbGVzJztcblxuaW1wb3J0IHtcbiAgICBEb2NQcm9wc0V4Y2VsRm9sZGVyLFxuICAgIFJvb3RFeGNlbEZvbGRlcixcbiAgICBSb290UmVsc0V4Y2VsRm9sZGVyLFxuICAgIFRhYmxlc0V4Y2VsRm9sZGVyLFxuICAgIFRoZW1lRXhjZWxGb2xkZXIsXG4gICAgV29ya3NoZWV0c0V4Y2VsRm9sZGVyLFxuICAgIFdvcmtzaGVldHNSZWxzRXhjZWxGb2xkZXIsXG4gICAgWExFeGNlbEZvbGRlcixcbiAgICBYTFJlbHNFeGNlbEZvbGRlclxufSBmcm9tICcuL2V4Y2VsLWZvbGRlcnMnO1xuXG5pbXBvcnQge1xuICAgIElFeGNlbEZpbGUsXG4gICAgSUV4Y2VsRm9sZGVyXG59IGZyb20gJy4vZXhjZWwtaW50ZXJmYWNlcyc7XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgRXhjZWxFbGVtZW50c0ZhY3Rvcnkge1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRFeGNlbEZvbGRlcih0eXBlOiBFeGNlbEZvbGRlclR5cGVzKTogSUV4Y2VsRm9sZGVyIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuUm9vdEV4Y2VsRm9sZGVyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUm9vdEV4Y2VsRm9sZGVyKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuUm9vdFJlbHNFeGNlbEZvbGRlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJvb3RSZWxzRXhjZWxGb2xkZXIoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGb2xkZXJUeXBlcy5Eb2NQcm9wc0V4Y2VsRm9sZGVyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9jUHJvcHNFeGNlbEZvbGRlcigpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZvbGRlclR5cGVzLlhMRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBYTEV4Y2VsRm9sZGVyKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuWExSZWxzRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBYTFJlbHNFeGNlbEZvbGRlcigpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZvbGRlclR5cGVzLlRoZW1lRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUaGVtZUV4Y2VsRm9sZGVyKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuV29ya3NoZWV0c0V4Y2VsRm9sZGVyOlxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IFdvcmtzaGVldHNFeGNlbEZvbGRlcigpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZvbGRlclR5cGVzLldvcmtzaGVldHNSZWxzRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3Jrc2hlZXRzUmVsc0V4Y2VsRm9sZGVyKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuVGFibGVzRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUYWJsZXNFeGNlbEZvbGRlcigpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZXhjZWwgZm9sZGVyIHR5cGUhJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEV4Y2VsRmlsZSh0eXBlOiBFeGNlbEZpbGVUeXBlcyk6IElFeGNlbEZpbGUge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuUm9vdFJlbHNGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IFJvb3RSZWxzRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5BcHBGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IEFwcEZpbGUoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuQ29yZUZpbGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb3JlRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5Xb3JrYm9va1JlbHNGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV29ya2Jvb2tSZWxzRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5UaGVtZUZpbGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUaGVtZUZpbGUoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuV29ya3NoZWV0RmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmtzaGVldEZpbGUoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuU3R5bGVGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3R5bGVGaWxlKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRmlsZVR5cGVzLldvcmtib29rRmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmtib29rRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5Db250ZW50VHlwZXNGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGVudFR5cGVzRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5TaGFyZWRTdHJpbmdzRmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNoYXJlZFN0cmluZ3NGaWxlKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRmlsZVR5cGVzLldvcmtzaGVldFJlbHNGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV29ya3NoZWV0UmVsc0ZpbGUoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuVGFibGVzRmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRhYmxlc0ZpbGUoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Vua25vd24gZXhjZWwgZmlsZSB0eXBlIScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExcelFileTypes, ExcelFolderTypes } from './excel-enums';
/**
 * @hidden
 */
export class RootExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return '';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        return [ExcelFileTypes.ContentTypesFile];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        return [
            ExcelFolderTypes.RootRelsExcelFolder,
            ExcelFolderTypes.DocPropsExcelFolder,
            ExcelFolderTypes.XLExcelFolder
        ];
    }
}
/**
 * @hidden
 */
export class RootRelsExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return '_rels';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        return [ExcelFileTypes.RootRelsFile];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        return [];
    }
}
/**
 * @hidden
 */
export class DocPropsExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return 'docProps';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        return [
            ExcelFileTypes.AppFile,
            ExcelFileTypes.CoreFile
        ];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        return [];
    }
}
/**
 * @hidden
 */
export class XLExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return 'xl';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        /** @type {?} */
        const retVal = [
            ExcelFileTypes.StyleFile,
            ExcelFileTypes.WorkbookFile
        ];
        if (!data.isEmpty) {
            retVal.push(ExcelFileTypes.SharedStringsFile);
        }
        return retVal;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        /** @type {?} */
        const retVal = [
            ExcelFolderTypes.XLRelsExcelFolder,
            ExcelFolderTypes.ThemeExcelFolder,
            ExcelFolderTypes.WorksheetsExcelFolder
        ];
        if (!data.isEmpty && data.options.exportAsTable) {
            retVal.push(ExcelFolderTypes.TablesExcelFolder);
        }
        return retVal;
    }
}
/**
 * @hidden
 */
export class XLRelsExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return '_rels';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        return [ExcelFileTypes.WorkbookRelsFile];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        return [];
    }
}
/**
 * @hidden
 */
export class ThemeExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return 'theme';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        return [ExcelFileTypes.ThemeFile];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        return [];
    }
}
/**
 * @hidden
 */
export class WorksheetsExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return 'worksheets';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        return [ExcelFileTypes.WorksheetFile];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        return data.isEmpty || !data.options.exportAsTable ? [] : [ExcelFolderTypes.WorksheetsRelsExcelFolder];
    }
}
/**
 * @hidden
 */
export class TablesExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return 'tables';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        return [ExcelFileTypes.TablesFile];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        return [];
    }
}
/**
 * @hidden
 */
export class WorksheetsRelsExcelFolder {
    /**
     * @return {?}
     */
    get folderName() {
        return '_rels';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFiles(data) {
        return [ExcelFileTypes.WorksheetRelsFile];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childFolders(data) {
        return [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZm9sZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhjZWwvZXhjZWwtZm9sZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILGNBQWMsRUFDZCxnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7Ozs7QUFNdkIsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDeEIsSUFBVyxVQUFVO1FBQ2pCLE9BQVEsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBbUI7UUFDMUIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQW1CO1FBQzVCLE9BQU87WUFDSCxnQkFBZ0IsQ0FBQyxtQkFBbUI7WUFDcEMsZ0JBQWdCLENBQUMsbUJBQW1CO1lBQ3BDLGdCQUFnQixDQUFDLGFBQWE7U0FDakMsQ0FBQztJQUNOLENBQUM7Q0FDSjs7OztBQUdELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDNUIsSUFBVyxVQUFVO1FBQ2pCLE9BQVEsT0FBTyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQW1CO1FBQzFCLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBbUI7UUFDNUIsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0NBQ0o7Ozs7QUFHRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBQzVCLElBQVcsVUFBVTtRQUNqQixPQUFRLFVBQVUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFtQjtRQUMxQixPQUFPO1lBQ0gsY0FBYyxDQUFDLE9BQU87WUFDdEIsY0FBYyxDQUFDLFFBQVE7U0FDMUIsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFD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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBFeGNlbEZpbGVUeXBlcyxcbiAgICBFeGNlbEZvbGRlclR5cGVzXG59IGZyb20gJy4vZXhjZWwtZW51bXMnO1xuXG5pbXBvcnQgeyBJRXhjZWxGb2xkZXIgfSBmcm9tICcuL2V4Y2VsLWludGVyZmFjZXMnO1xuaW1wb3J0IHsgV29ya3NoZWV0RGF0YSB9IGZyb20gJy4vd29ya3NoZWV0LWRhdGEnO1xuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFJvb3RFeGNlbEZvbGRlciBpbXBsZW1lbnRzIElFeGNlbEZvbGRlciB7XG4gICAgcHVibGljIGdldCBmb2xkZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gICcnO1xuICAgIH1cblxuICAgIGNoaWxkRmlsZXMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW0V4Y2VsRmlsZVR5cGVzLkNvbnRlbnRUeXBlc0ZpbGVdO1xuICAgIH1cblxuICAgIGNoaWxkRm9sZGVycyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBFeGNlbEZvbGRlclR5cGVzLlJvb3RSZWxzRXhjZWxGb2xkZXIsXG4gICAgICAgICAgICBFeGNlbEZvbGRlclR5cGVzLkRvY1Byb3BzRXhjZWxGb2xkZXIsXG4gICAgICAgICAgICBFeGNlbEZvbGRlclR5cGVzLlhMRXhjZWxGb2xkZXJcbiAgICAgICAgXTtcbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgUm9vdFJlbHNFeGNlbEZvbGRlciBpbXBsZW1lbnRzIElFeGNlbEZvbGRlciB7XG4gICAgcHVibGljIGdldCBmb2xkZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gICdfcmVscyc7XG4gICAgfVxuXG4gICAgY2hpbGRGaWxlcyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbRXhjZWxGaWxlVHlwZXMuUm9vdFJlbHNGaWxlXTtcbiAgICB9XG5cbiAgICBjaGlsZEZvbGRlcnMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIERvY1Byb3BzRXhjZWxGb2xkZXIgaW1wbGVtZW50cyBJRXhjZWxGb2xkZXIge1xuICAgIHB1YmxpYyBnZXQgZm9sZGVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICAnZG9jUHJvcHMnO1xuICAgIH1cblxuICAgIGNoaWxkRmlsZXMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgRXhjZWxGaWxlVHlwZXMuQXBwRmlsZSxcbiAgICAgICAgICAgIEV4Y2VsRmlsZVR5cGVzLkNvcmVGaWxlXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgY2hpbGRGb2xkZXJzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBYTEV4Y2VsRm9sZGVyIGltcGxlbWVudHMgSUV4Y2VsRm9sZGVyIHtcbiAgICBwdWJsaWMgZ2V0IGZvbGRlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAgJ3hsJztcbiAgICB9XG5cbiAgICBjaGlsZEZpbGVzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgY29uc3QgcmV0VmFsID0gW1xuICAgICAgICAgICAgRXhjZWxGaWxlVHlwZXMuU3R5bGVGaWxlLFxuICAgICAgICAgICAgRXhjZWxGaWxlVHlwZXMuV29ya2Jvb2tGaWxlXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKCFkYXRhLmlzRW1wdHkpIHtcbiAgICAgICAgICAgIHJldFZhbC5wdXNoKEV4Y2VsRmlsZVR5cGVzLlNoYXJlZFN0cmluZ3NGaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgfVxuXG4gICAgY2hpbGRGb2xkZXJzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgY29uc3QgcmV0VmFsID0gW1xuICAgICAgICAgICAgRXhjZWxGb2xkZXJUeXBlcy5YTFJlbHNFeGNlbEZvbGRlcixcbiAgICAgICAgICAgIEV4Y2VsRm9sZGVyVHlwZXMuVGhlbWVFeGNlbEZvbGRlcixcbiAgICAgICAgICAgIEV4Y2VsRm9sZGVyVHlwZXMuV29ya3NoZWV0c0V4Y2VsRm9sZGVyXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKCFkYXRhLmlzRW1wdHkgJiYgZGF0YS5vcHRpb25zLmV4cG9ydEFzVGFibGUpIHtcbiAgICAgICAgICAgIHJldFZhbC5wdXNoKEV4Y2VsRm9sZGVyVHlwZXMuVGFibGVzRXhjZWxGb2xkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFZhbDtcbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgWExSZWxzRXhjZWxGb2xkZXIgaW1wbGVtZW50cyBJRXhjZWxGb2xkZXIge1xuICAgIHB1YmxpYyBnZXQgZm9sZGVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICAnX3JlbHMnO1xuICAgIH1cblxuICAgIGNoaWxkRmlsZXMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW0V4Y2VsRmlsZVR5cGVzLldvcmtib29rUmVsc0ZpbGVdO1xuICAgIH1cblxuICAgIGNoaWxkRm9sZGVycyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgVGhlbWVFeGNlbEZvbGRlciBpbXBsZW1lbnRzIElFeGNlbEZvbGRlciB7XG4gICAgcHVibGljIGdldCBmb2xkZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gICd0aGVtZSc7XG4gICAgfVxuXG4gICAgY2hpbGRGaWxlcyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbRXhjZWxGaWxlVHlwZXMuVGhlbWVGaWxlXTtcbiAgICB9XG5cbiAgICBjaGlsZEZvbGRlcnMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtzaGVldHNFeGNlbEZvbGRlciBpbXBsZW1lbnRzIElFeGNlbEZvbGRlciB7XG4gICAgcHVibGljIGdldCBmb2xkZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gICd3b3Jrc2hlZXRzJztcbiAgICB9XG5cbiAgICBjaGlsZEZpbGVzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtFeGNlbEZpbGVUeXBlcy5Xb3Jrc2hlZXRGaWxlXTtcbiAgICB9XG5cbiAgICBjaGlsZEZvbGRlcnMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5pc0VtcHR5IHx8ICFkYXRhLm9wdGlvbnMuZXhwb3J0QXNUYWJsZSA/IFtdIDogW0V4Y2VsRm9sZGVyVHlwZXMuV29ya3NoZWV0c1JlbHNFeGNlbEZvbGRlcl07XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlc0V4Y2VsRm9sZGVyIGltcGxlbWVudHMgSUV4Y2VsRm9sZGVyIHtcbiAgICBwdWJsaWMgZ2V0IGZvbGRlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAndGFibGVzJztcbiAgICB9XG5cbiAgICBjaGlsZEZpbGVzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtFeGNlbEZpbGVUeXBlcy5UYWJsZXNGaWxlXTtcbiAgICB9XG5cbiAgICBjaGlsZEZvbGRlcnMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtzaGVldHNSZWxzRXhjZWxGb2xkZXIgaW1wbGVtZW50cyBJRXhjZWxGb2xkZXIge1xuICAgIHB1YmxpYyBnZXQgZm9sZGVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdfcmVscyc7XG4gICAgfVxuXG4gICAgY2hpbGRGaWxlcyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbRXhjZWxGaWxlVHlwZXMuV29ya3NoZWV0UmVsc0ZpbGVdO1xuICAgIH1cblxuICAgIGNoaWxkRm9sZGVycyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iXX0=
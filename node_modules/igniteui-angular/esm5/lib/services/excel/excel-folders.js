/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExcelFileTypes, ExcelFolderTypes } from './excel-enums';
/**
 * @hidden
 */
var /**
 * @hidden
 */
RootExcelFolder = /** @class */ (function () {
    function RootExcelFolder() {
    }
    Object.defineProperty(RootExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    RootExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [ExcelFileTypes.ContentTypesFile];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RootExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [
            ExcelFolderTypes.RootRelsExcelFolder,
            ExcelFolderTypes.DocPropsExcelFolder,
            ExcelFolderTypes.XLExcelFolder
        ];
    };
    return RootExcelFolder;
}());
/**
 * @hidden
 */
export { RootExcelFolder };
/**
 * @hidden
 */
var /**
 * @hidden
 */
RootRelsExcelFolder = /** @class */ (function () {
    function RootRelsExcelFolder() {
    }
    Object.defineProperty(RootRelsExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return '_rels';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    RootRelsExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [ExcelFileTypes.RootRelsFile];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RootRelsExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [];
    };
    return RootRelsExcelFolder;
}());
/**
 * @hidden
 */
export { RootRelsExcelFolder };
/**
 * @hidden
 */
var /**
 * @hidden
 */
DocPropsExcelFolder = /** @class */ (function () {
    function DocPropsExcelFolder() {
    }
    Object.defineProperty(DocPropsExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return 'docProps';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    DocPropsExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [
            ExcelFileTypes.AppFile,
            ExcelFileTypes.CoreFile
        ];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DocPropsExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [];
    };
    return DocPropsExcelFolder;
}());
/**
 * @hidden
 */
export { DocPropsExcelFolder };
/**
 * @hidden
 */
var /**
 * @hidden
 */
XLExcelFolder = /** @class */ (function () {
    function XLExcelFolder() {
    }
    Object.defineProperty(XLExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return 'xl';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    XLExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var retVal = [
            ExcelFileTypes.StyleFile,
            ExcelFileTypes.WorkbookFile
        ];
        if (!data.isEmpty) {
            retVal.push(ExcelFileTypes.SharedStringsFile);
        }
        return retVal;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    XLExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var retVal = [
            ExcelFolderTypes.XLRelsExcelFolder,
            ExcelFolderTypes.ThemeExcelFolder,
            ExcelFolderTypes.WorksheetsExcelFolder
        ];
        if (!data.isEmpty && data.options.exportAsTable) {
            retVal.push(ExcelFolderTypes.TablesExcelFolder);
        }
        return retVal;
    };
    return XLExcelFolder;
}());
/**
 * @hidden
 */
export { XLExcelFolder };
/**
 * @hidden
 */
var /**
 * @hidden
 */
XLRelsExcelFolder = /** @class */ (function () {
    function XLRelsExcelFolder() {
    }
    Object.defineProperty(XLRelsExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return '_rels';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    XLRelsExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [ExcelFileTypes.WorkbookRelsFile];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    XLRelsExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [];
    };
    return XLRelsExcelFolder;
}());
/**
 * @hidden
 */
export { XLRelsExcelFolder };
/**
 * @hidden
 */
var /**
 * @hidden
 */
ThemeExcelFolder = /** @class */ (function () {
    function ThemeExcelFolder() {
    }
    Object.defineProperty(ThemeExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return 'theme';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    ThemeExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [ExcelFileTypes.ThemeFile];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ThemeExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [];
    };
    return ThemeExcelFolder;
}());
/**
 * @hidden
 */
export { ThemeExcelFolder };
/**
 * @hidden
 */
var /**
 * @hidden
 */
WorksheetsExcelFolder = /** @class */ (function () {
    function WorksheetsExcelFolder() {
    }
    Object.defineProperty(WorksheetsExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return 'worksheets';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    WorksheetsExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [ExcelFileTypes.WorksheetFile];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    WorksheetsExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.isEmpty || !data.options.exportAsTable ? [] : [ExcelFolderTypes.WorksheetsRelsExcelFolder];
    };
    return WorksheetsExcelFolder;
}());
/**
 * @hidden
 */
export { WorksheetsExcelFolder };
/**
 * @hidden
 */
var /**
 * @hidden
 */
TablesExcelFolder = /** @class */ (function () {
    function TablesExcelFolder() {
    }
    Object.defineProperty(TablesExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return 'tables';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    TablesExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [ExcelFileTypes.TablesFile];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TablesExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [];
    };
    return TablesExcelFolder;
}());
/**
 * @hidden
 */
export { TablesExcelFolder };
/**
 * @hidden
 */
var /**
 * @hidden
 */
WorksheetsRelsExcelFolder = /** @class */ (function () {
    function WorksheetsRelsExcelFolder() {
    }
    Object.defineProperty(WorksheetsRelsExcelFolder.prototype, "folderName", {
        get: /**
         * @return {?}
         */
        function () {
            return '_rels';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    WorksheetsRelsExcelFolder.prototype.childFiles = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [ExcelFileTypes.WorksheetRelsFile];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    WorksheetsRelsExcelFolder.prototype.childFolders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [];
    };
    return WorksheetsRelsExcelFolder;
}());
/**
 * @hidden
 */
export { WorksheetsRelsExcelFolder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZm9sZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhjZWwvZXhjZWwtZm9sZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILGNBQWMsRUFDZCxnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7Ozs7QUFNdkI7Ozs7SUFBQTtJQWdCQSxDQUFDO0lBZkcsc0JBQVcsdUNBQVU7Ozs7UUFBckI7WUFDSSxPQUFRLEVBQUUsQ0FBQztRQUNmLENBQUM7OztPQUFBOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxJQUFtQjtRQUMxQixPQUFPLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxzQ0FBWTs7OztJQUFaLFVBQWEsSUFBbUI7UUFDNUIsT0FBTztZQUNILGdCQUFnQixDQUFDLG1CQUFtQjtZQUNwQyxnQkFBZ0IsQ0FBQyxtQkFBbUI7WUFDcEMsZ0JBQWdCLENBQUMsYUFBYTtTQUNqQyxDQUFDO0lBQ04sQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQzs7Ozs7Ozs7QUFHRDs7OztJQUFBO0lBWUEsQ0FBQztJQVhHLHNCQUFXLDJDQUFVOzs7O1FBQXJCO1lBQ0ksT0FBUSxPQUFPLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLElBQW1CO1FBQzFCLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsSUFBbUI7UUFDNUIsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7Ozs7Ozs7QUFHRDs7OztJQUFBO0lBZUEsQ0FBQztJQWRHLHNCQUFXLDJDQUFVOzs7O1FBQXJCO1lBQ0ksT0FBUSxV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QVpELElBWUM7Ozs7Ozs7O0FBR0Q7Ozs7SUFBQTtJQVlBLENBQUM7SUFYRyxzQkFBVyx5Q0FBVTs7OztRQUFyQjtZQUNJLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxJQUFtQjtRQUMxQixPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsd0NBQVk7Ozs7SUFBWixVQUFhLElBQW1CO1FBQzVCLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7Ozs7O0FBR0Q7Ozs7SUFBQTtJQVlBLENBQUM7SUFYRyxzQkFBVyxpREFBVTs7OztRQUFyQjtZQUNJLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7OztPQUFBOzs7OztJQUVELDhDQUFVOzs7O0lBQVYsVUFBVyxJQUFtQjtRQUMxQixPQUFPLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxnREFBWTs7OztJQUFaLFVBQWEsSUFBbUI7UUFDNUIsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRXhjZWxGaWxlVHlwZXMsXG4gICAgRXhjZWxGb2xkZXJUeXBlc1xufSBmcm9tICcuL2V4Y2VsLWVudW1zJztcblxuaW1wb3J0IHsgSUV4Y2VsRm9sZGVyIH0gZnJvbSAnLi9leGNlbC1pbnRlcmZhY2VzJztcbmltcG9ydCB7IFdvcmtzaGVldERhdGEgfSBmcm9tICcuL3dvcmtzaGVldC1kYXRhJztcblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBSb290RXhjZWxGb2xkZXIgaW1wbGVtZW50cyBJRXhjZWxGb2xkZXIge1xuICAgIHB1YmxpYyBnZXQgZm9sZGVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICAnJztcbiAgICB9XG5cbiAgICBjaGlsZEZpbGVzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtFeGNlbEZpbGVUeXBlcy5Db250ZW50VHlwZXNGaWxlXTtcbiAgICB9XG5cbiAgICBjaGlsZEZvbGRlcnMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgRXhjZWxGb2xkZXJUeXBlcy5Sb290UmVsc0V4Y2VsRm9sZGVyLFxuICAgICAgICAgICAgRXhjZWxGb2xkZXJUeXBlcy5Eb2NQcm9wc0V4Y2VsRm9sZGVyLFxuICAgICAgICAgICAgRXhjZWxGb2xkZXJUeXBlcy5YTEV4Y2VsRm9sZGVyXG4gICAgICAgIF07XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFJvb3RSZWxzRXhjZWxGb2xkZXIgaW1wbGVtZW50cyBJRXhjZWxGb2xkZXIge1xuICAgIHB1YmxpYyBnZXQgZm9sZGVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICAnX3JlbHMnO1xuICAgIH1cblxuICAgIGNoaWxkRmlsZXMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW0V4Y2VsRmlsZVR5cGVzLlJvb3RSZWxzRmlsZV07XG4gICAgfVxuXG4gICAgY2hpbGRGb2xkZXJzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBEb2NQcm9wc0V4Y2VsRm9sZGVyIGltcGxlbWVudHMgSUV4Y2VsRm9sZGVyIHtcbiAgICBwdWJsaWMgZ2V0IGZvbGRlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAgJ2RvY1Byb3BzJztcbiAgICB9XG5cbiAgICBjaGlsZEZpbGVzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIEV4Y2VsRmlsZVR5cGVzLkFwcEZpbGUsXG4gICAgICAgICAgICBFeGNlbEZpbGVUeXBlcy5Db3JlRmlsZVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNoaWxkRm9sZGVycyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgWExFeGNlbEZvbGRlciBpbXBsZW1lbnRzIElFeGNlbEZvbGRlciB7XG4gICAgcHVibGljIGdldCBmb2xkZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gICd4bCc7XG4gICAgfVxuXG4gICAgY2hpbGRGaWxlcyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGNvbnN0IHJldFZhbCA9IFtcbiAgICAgICAgICAgIEV4Y2VsRmlsZVR5cGVzLlN0eWxlRmlsZSxcbiAgICAgICAgICAgIEV4Y2VsRmlsZVR5cGVzLldvcmtib29rRmlsZVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmICghZGF0YS5pc0VtcHR5KSB7XG4gICAgICAgICAgICByZXRWYWwucHVzaChFeGNlbEZpbGVUeXBlcy5TaGFyZWRTdHJpbmdzRmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgIH1cblxuICAgIGNoaWxkRm9sZGVycyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGNvbnN0IHJldFZhbCA9IFtcbiAgICAgICAgICAgIEV4Y2VsRm9sZGVyVHlwZXMuWExSZWxzRXhjZWxGb2xkZXIsXG4gICAgICAgICAgICBFeGNlbEZvbGRlclR5cGVzLlRoZW1lRXhjZWxGb2xkZXIsXG4gICAgICAgICAgICBFeGNlbEZvbGRlclR5cGVzLldvcmtzaGVldHNFeGNlbEZvbGRlclxuICAgICAgICBdO1xuXG4gICAgICAgIGlmICghZGF0YS5pc0VtcHR5ICYmIGRhdGEub3B0aW9ucy5leHBvcnRBc1RhYmxlKSB7XG4gICAgICAgICAgICByZXRWYWwucHVzaChFeGNlbEZvbGRlclR5cGVzLlRhYmxlc0V4Y2VsRm9sZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFhMUmVsc0V4Y2VsRm9sZGVyIGltcGxlbWVudHMgSUV4Y2VsRm9sZGVyIHtcbiAgICBwdWJsaWMgZ2V0IGZvbGRlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAgJ19yZWxzJztcbiAgICB9XG5cbiAgICBjaGlsZEZpbGVzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtFeGNlbEZpbGVUeXBlcy5Xb3JrYm9va1JlbHNGaWxlXTtcbiAgICB9XG5cbiAgICBjaGlsZEZvbGRlcnMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFRoZW1lRXhjZWxGb2xkZXIgaW1wbGVtZW50cyBJRXhjZWxGb2xkZXIge1xuICAgIHB1YmxpYyBnZXQgZm9sZGVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICAndGhlbWUnO1xuICAgIH1cblxuICAgIGNoaWxkRmlsZXMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW0V4Y2VsRmlsZVR5cGVzLlRoZW1lRmlsZV07XG4gICAgfVxuXG4gICAgY2hpbGRGb2xkZXJzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXRzRXhjZWxGb2xkZXIgaW1wbGVtZW50cyBJRXhjZWxGb2xkZXIge1xuICAgIHB1YmxpYyBnZXQgZm9sZGVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICAnd29ya3NoZWV0cyc7XG4gICAgfVxuXG4gICAgY2hpbGRGaWxlcyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbRXhjZWxGaWxlVHlwZXMuV29ya3NoZWV0RmlsZV07XG4gICAgfVxuXG4gICAgY2hpbGRGb2xkZXJzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuaXNFbXB0eSB8fCAhZGF0YS5vcHRpb25zLmV4cG9ydEFzVGFibGUgPyBbXSA6IFtFeGNlbEZvbGRlclR5cGVzLldvcmtzaGVldHNSZWxzRXhjZWxGb2xkZXJdO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZXNFeGNlbEZvbGRlciBpbXBsZW1lbnRzIElFeGNlbEZvbGRlciB7XG4gICAgcHVibGljIGdldCBmb2xkZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3RhYmxlcyc7XG4gICAgfVxuXG4gICAgY2hpbGRGaWxlcyhkYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIHJldHVybiBbRXhjZWxGaWxlVHlwZXMuVGFibGVzRmlsZV07XG4gICAgfVxuXG4gICAgY2hpbGRGb2xkZXJzKGRhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXRzUmVsc0V4Y2VsRm9sZGVyIGltcGxlbWVudHMgSUV4Y2VsRm9sZGVyIHtcbiAgICBwdWJsaWMgZ2V0IGZvbGRlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnX3JlbHMnO1xuICAgIH1cblxuICAgIGNoaWxkRmlsZXMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW0V4Y2VsRmlsZVR5cGVzLldvcmtzaGVldFJlbHNGaWxlXTtcbiAgICB9XG5cbiAgICBjaGlsZEZvbGRlcnMoZGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIl19
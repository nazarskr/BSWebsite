/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ExcelStrings } from './excel-strings';
/**
 * @hidden
 */
var /**
 * @hidden
 */
RootRelsFile = /** @class */ (function () {
    function RootRelsFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    RootRelsFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        folder.file('.rels', ExcelStrings.getRels());
    };
    return RootRelsFile;
}());
/**
 * @hidden
 */
export { RootRelsFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
AppFile = /** @class */ (function () {
    function AppFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    AppFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        folder.file('app.xml', ExcelStrings.getApp());
    };
    return AppFile;
}());
/**
 * @hidden
 */
export { AppFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
CoreFile = /** @class */ (function () {
    function CoreFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    CoreFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        folder.file('core.xml', ExcelStrings.getCore());
    };
    return CoreFile;
}());
/**
 * @hidden
 */
export { CoreFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
WorkbookRelsFile = /** @class */ (function () {
    function WorkbookRelsFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    WorkbookRelsFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        /** @type {?} */
        var hasSharedStrings = worksheetData.isEmpty === false;
        folder.file('workbook.xml.rels', ExcelStrings.getWorkbookRels(hasSharedStrings));
    };
    return WorkbookRelsFile;
}());
/**
 * @hidden
 */
export { WorkbookRelsFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
ThemeFile = /** @class */ (function () {
    function ThemeFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    ThemeFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        folder.file('theme1.xml', ExcelStrings.getTheme());
    };
    return ThemeFile;
}());
/**
 * @hidden
 */
export { ThemeFile };
/**
 * @hidden
 */
var WorksheetFile = /** @class */ (function () {
    function WorksheetFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    WorksheetFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        /** @type {?} */
        var sheetData = [];
        /** @type {?} */
        var cols = [];
        /** @type {?} */
        var dimension;
        /** @type {?} */
        var dictionary = worksheetData.dataDictionary;
        /** @type {?} */
        var freezePane = '';
        /** @type {?} */
        var maxOutlineLevel = 0;
        if (worksheetData.isEmpty) {
            sheetData.push('<sheetData/>');
            dimension = 'A1';
        }
        else {
            sheetData.push('<sheetData>');
            /** @type {?} */
            var height = worksheetData.options.rowHeight;
            /** @type {?} */
            var rowHeight = height ? ' ht="' + height + '" customHeight="1"' : '';
            sheetData.push("<row r=\"1\"" + rowHeight + ">");
            for (var i = 0; i < worksheetData.columnCount; i++) {
                /** @type {?} */
                var column = ExcelStrings.getExcelColumn(i) + 1;
                /** @type {?} */
                var value = dictionary.saveValue(worksheetData.keys[i], i, true);
                sheetData.push("<c r=\"" + column + "\" t=\"s\"><v>" + value + "</v></c>");
            }
            sheetData.push('</row>');
            for (var i = 1; i < worksheetData.rowCount; i++) {
                if (!worksheetData.isTreeGridData) {
                    sheetData.push("<row r=\"" + (i + 1) + "\"" + rowHeight + ">");
                }
                else {
                    /** @type {?} */
                    var rowData = worksheetData.data[i - 1].originalRowData;
                    /** @type {?} */
                    var sCollapsed = (!rowData.expanded) ? '' : (rowData.expanded === true) ? '' : " collapsed=\"1\"";
                    /** @type {?} */
                    var sHidden = (rowData.parent && this.hasCollapsedParent(rowData)) ? " hidden=\"1\"" : '';
                    /** @type {?} */
                    var rowOutlineLevel = rowData.level ? rowData.level : 0;
                    /** @type {?} */
                    var sOutlineLevel = rowOutlineLevel > 0 ? " outlineLevel=\"" + rowOutlineLevel + "\"" : '';
                    maxOutlineLevel = maxOutlineLevel < rowOutlineLevel ? rowOutlineLevel : maxOutlineLevel;
                    sheetData.push("<row r=\"" + (i + 1) + "\"" + rowHeight + sOutlineLevel + sCollapsed + sHidden + ">");
                }
                for (var j = 0; j < worksheetData.columnCount; j++) {
                    /** @type {?} */
                    var cellData = WorksheetFile.getCellData(worksheetData, i, j);
                    sheetData.push(cellData);
                }
                sheetData.push('</row>');
            }
            sheetData.push('</sheetData>');
            dimension = 'A1:' + ExcelStrings.getExcelColumn(worksheetData.columnCount - 1) + worksheetData.rowCount;
            cols.push('<cols>');
            for (var i = 0; i < worksheetData.columnCount; i++) {
                /** @type {?} */
                var width = dictionary.columnWidths[i];
                // Use the width provided in the options if it exists
                /** @type {?} */
                var widthInTwips = worksheetData.options.columnWidth ?
                    worksheetData.options.columnWidth :
                    Math.max(((width / 96) * 14.4), WorksheetFile.MIN_WIDTH);
                cols.push("<col min=\"" + (i + 1) + "\" max=\"" + (i + 1) + "\" width=\"" + widthInTwips + "\" customWidth=\"1\"/>");
            }
            cols.push('</cols>');
            if (worksheetData.indexOfLastPinnedColumn !== -1 &&
                !worksheetData.options.ignorePinning &&
                !worksheetData.options.ignoreColumnsOrder) {
                /** @type {?} */
                var frozenColumnCount = worksheetData.indexOfLastPinnedColumn + 1;
                /** @type {?} */
                var firstCell = ExcelStrings.getExcelColumn(frozenColumnCount) + '1';
                freezePane = "<pane xSplit=\"" + frozenColumnCount + "\" topLeftCell=\"" + firstCell + "\" activePane=\"topRight\" state=\"frozen\"/>";
            }
        }
        /** @type {?} */
        var hasTable = !worksheetData.isEmpty && worksheetData.options.exportAsTable;
        folder.file('sheet1.xml', ExcelStrings.getSheetXML(dimension, freezePane, cols.join(''), sheetData.join(''), hasTable, worksheetData.isTreeGridData, maxOutlineLevel));
    };
    /**
     * @private
     * @param {?} rowData
     * @return {?}
     */
    WorksheetFile.prototype.hasCollapsedParent = /**
     * @private
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        /** @type {?} */
        var result = !rowData.parent.expanded;
        while (rowData.parent) {
            result = result || !rowData.parent.expanded;
            rowData = rowData.parent;
        }
        return result;
    };
    /* tslint:disable member-ordering */
    /* tslint:disable member-ordering */
    /**
     * @private
     * @param {?} worksheetData
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    WorksheetFile.getCellData = /* tslint:disable member-ordering */
    /**
     * @private
     * @param {?} worksheetData
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (worksheetData, row, column) {
        /** @type {?} */
        var dictionary = worksheetData.dataDictionary;
        /** @type {?} */
        var columnName = ExcelStrings.getExcelColumn(column) + (row + 1);
        /** @type {?} */
        var columnHeader = worksheetData.keys[column];
        /** @type {?} */
        var rowData = worksheetData.data[row - 1].rowData;
        /** @type {?} */
        var cellValue = worksheetData.isSpecialData ? rowData : rowData[columnHeader];
        if (cellValue === undefined || cellValue === null) {
            return "<c r=\"" + columnName + "\" s=\"1\"/>";
        }
        else {
            /** @type {?} */
            var savedValue = dictionary.saveValue(cellValue, column, false);
            /** @type {?} */
            var isSavedAsString = savedValue !== -1;
            /** @type {?} */
            var value = isSavedAsString ? savedValue : cellValue;
            /** @type {?} */
            var type = isSavedAsString ? " t=\"s\"" : '';
            /** @type {?} */
            var format = isSavedAsString ? '' : " s=\"1\"";
            return "<c r=\"" + columnName + "\"" + type + format + "><v>" + value + "</v></c>";
        }
    };
    WorksheetFile.MIN_WIDTH = 8.34;
    return WorksheetFile;
}());
export { WorksheetFile };
if (false) {
    /**
     * @type {?}
     * @private
     */
    WorksheetFile.MIN_WIDTH;
}
/**
 * @hidden
 */
var /**
 * @hidden
 */
StyleFile = /** @class */ (function () {
    function StyleFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    StyleFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        folder.file('styles.xml', ExcelStrings.getStyles(worksheetData.dataDictionary && worksheetData.dataDictionary.hasNonStringValues));
    };
    return StyleFile;
}());
/**
 * @hidden
 */
export { StyleFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
WorkbookFile = /** @class */ (function () {
    function WorkbookFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    WorkbookFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        folder.file('workbook.xml', ExcelStrings.getWorkbook());
    };
    return WorkbookFile;
}());
/**
 * @hidden
 */
export { WorkbookFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
ContentTypesFile = /** @class */ (function () {
    function ContentTypesFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    ContentTypesFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        folder.file('[Content_Types].xml', ExcelStrings.getContentTypesXML(!worksheetData.isEmpty, worksheetData.options.exportAsTable));
    };
    return ContentTypesFile;
}());
/**
 * @hidden
 */
export { ContentTypesFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
SharedStringsFile = /** @class */ (function () {
    function SharedStringsFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    SharedStringsFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        var e_1, _a;
        /** @type {?} */
        var dict = worksheetData.dataDictionary;
        /** @type {?} */
        var sortedValues = dict.getKeys();
        /** @type {?} */
        var sharedStrings = new Array(sortedValues.length);
        try {
            for (var sortedValues_1 = tslib_1.__values(sortedValues), sortedValues_1_1 = sortedValues_1.next(); !sortedValues_1_1.done; sortedValues_1_1 = sortedValues_1.next()) {
                var value = sortedValues_1_1.value;
                sharedStrings[dict.getSanitizedValue(value)] = '<si><t>' + value + '</t></si>';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sortedValues_1_1 && !sortedValues_1_1.done && (_a = sortedValues_1.return)) _a.call(sortedValues_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        folder.file('sharedStrings.xml', ExcelStrings.getSharedStringXML(dict.stringsCount, sortedValues.length, sharedStrings.join('')));
    };
    return SharedStringsFile;
}());
/**
 * @hidden
 */
export { SharedStringsFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
TablesFile = /** @class */ (function () {
    function TablesFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    TablesFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        /** @type {?} */
        var columnCount = worksheetData.columnCount;
        /** @type {?} */
        var lastColumn = ExcelStrings.getExcelColumn(columnCount - 1) + worksheetData.rowCount;
        /** @type {?} */
        var dimension = 'A1:' + lastColumn;
        /** @type {?} */
        var values = worksheetData.keys;
        /** @type {?} */
        var sortString = '';
        /** @type {?} */
        var tableColumns = '<tableColumns count="' + columnCount + '">';
        for (var i = 0; i < columnCount; i++) {
            /** @type {?} */
            var value = values[i];
            tableColumns += '<tableColumn id="' + (i + 1) + '" name="' + value + '"/>';
        }
        tableColumns += '</tableColumns>';
        if (worksheetData.sort) {
            /** @type {?} */
            var sortingExpression = worksheetData.sort;
            /** @type {?} */
            var sc = ExcelStrings.getExcelColumn(values.indexOf(sortingExpression.fieldName));
            /** @type {?} */
            var dir = sortingExpression.dir - 1;
            sortString = "<sortState ref=\"A2:" + lastColumn + "\"><sortCondition descending=\"" + dir + "\" ref=\"" + sc + "1:" + sc + "15\"/></sortState>";
        }
        folder.file('table1.xml', ExcelStrings.getTablesXML(dimension, tableColumns, sortString));
    };
    return TablesFile;
}());
/**
 * @hidden
 */
export { TablesFile };
/**
 * @hidden
 */
var /**
 * @hidden
 */
WorksheetRelsFile = /** @class */ (function () {
    function WorksheetRelsFile() {
    }
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    WorksheetRelsFile.prototype.writeElement = /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, worksheetData) {
        folder.file('sheet1.xml.rels', ExcelStrings.getWorksheetRels());
    };
    return WorksheetRelsFile;
}());
/**
 * @hidden
 */
export { WorksheetRelsFile };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZmlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4Y2VsL2V4Y2VsLWZpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBUS9DOzs7O0lBQUE7SUFJQSxDQUFDOzs7Ozs7SUFIVSxtQ0FBWTs7Ozs7SUFBbkIsVUFBb0IsTUFBYSxFQUFFLGFBQTRCO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7OztBQUtEOzs7O0lBQUE7SUFJQSxDQUFDOzs7Ozs7SUFIVSw4QkFBWTs7Ozs7SUFBbkIsVUFBb0IsTUFBYSxFQUFFLGFBQTRCO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7O0FBS0Q7Ozs7SUFBQTtJQUlBLENBQUM7Ozs7OztJQUhVLCtCQUFZOzs7OztJQUFuQixVQUFvQixNQUFhLEVBQUUsYUFBNEI7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7QUFLRDs7OztJQUFBO0lBS0EsQ0FBQzs7Ozs7O0lBSlUsdUNBQVk7Ozs7O0lBQW5CLFVBQW9CLE1BQWEsRUFBRSxhQUE0Qjs7WUFDckQsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLE9BQU8sS0FBSyxLQUFLO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1C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ZXMnO1xuaW1wb3J0IHsgRXhjZWxTdHJpbmdzIH0gZnJvbSAnLi9leGNlbC1zdHJpbmdzJztcbmltcG9ydCB7IFdvcmtzaGVldERhdGEgfSBmcm9tICcuL3dvcmtzaGVldC1kYXRhJztcblxuaW1wb3J0ICogYXMgSlNaaXAgZnJvbSAnanN6aXAvZGlzdC9qc3ppcCc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUm9vdFJlbHNGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGZvbGRlci5maWxlKCcucmVscycsIEV4Y2VsU3RyaW5ncy5nZXRSZWxzKCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGZvbGRlci5maWxlKCdhcHAueG1sJywgRXhjZWxTdHJpbmdzLmdldEFwcCgpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29yZUZpbGUgaW1wbGVtZW50cyBJRXhjZWxGaWxlIHtcbiAgICBwdWJsaWMgd3JpdGVFbGVtZW50KGZvbGRlcjogSlNaaXAsIHdvcmtzaGVldERhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgZm9sZGVyLmZpbGUoJ2NvcmUueG1sJywgRXhjZWxTdHJpbmdzLmdldENvcmUoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtib29rUmVsc0ZpbGUgaW1wbGVtZW50cyBJRXhjZWxGaWxlIHtcbiAgICBwdWJsaWMgd3JpdGVFbGVtZW50KGZvbGRlcjogSlNaaXAsIHdvcmtzaGVldERhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgY29uc3QgaGFzU2hhcmVkU3RyaW5ncyA9IHdvcmtzaGVldERhdGEuaXNFbXB0eSA9PT0gZmFsc2U7XG4gICAgICAgIGZvbGRlci5maWxlKCd3b3JrYm9vay54bWwucmVscycsIEV4Y2VsU3RyaW5ncy5nZXRXb3JrYm9va1JlbHMoaGFzU2hhcmVkU3RyaW5ncykpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaGVtZUZpbGUgaW1wbGVtZW50cyBJRXhjZWxGaWxlIHtcbiAgICBwdWJsaWMgd3JpdGVFbGVtZW50KGZvbGRlcjogSlNaaXAsIHdvcmtzaGVldERhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgZm9sZGVyLmZpbGUoJ3RoZW1lMS54bWwnLCBFeGNlbFN0cmluZ3MuZ2V0VGhlbWUoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtzaGVldEZpbGUgaW1wbGVtZW50cyBJRXhjZWxGaWxlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBNSU5fV0lEVEggPSA4LjM0O1xuXG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGNvbnN0IHNoZWV0RGF0YSA9IFtdO1xuICAgICAgICBjb25zdCBjb2xzID0gW107XG4gICAgICAgIGxldCBkaW1lbnNpb246IHN0cmluZztcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IHdvcmtzaGVldERhdGEuZGF0YURpY3Rpb25hcnk7XG4gICAgICAgIGxldCBmcmVlemVQYW5lID0gJyc7XG4gICAgICAgIGxldCBtYXhPdXRsaW5lTGV2ZWwgPSAwO1xuXG4gICAgICAgIGlmICh3b3Jrc2hlZXREYXRhLmlzRW1wdHkpIHtcbiAgICAgICAgICAgIHNoZWV0RGF0YS5wdXNoKCc8c2hlZXREYXRhLz4nKTtcbiAgICAgICAgICAgIGRpbWVuc2lvbiA9ICdBMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGVldERhdGEucHVzaCgnPHNoZWV0RGF0YT4nKTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICB3b3Jrc2hlZXREYXRhLm9wdGlvbnMucm93SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgcm93SGVpZ2h0ID0gaGVpZ2h0ID8gJyBodD1cIicgKyBoZWlnaHQgKyAnXCIgY3VzdG9tSGVpZ2h0PVwiMVwiJyA6ICcnO1xuXG4gICAgICAgICAgICBzaGVldERhdGEucHVzaChgPHJvdyByPVwiMVwiJHtyb3dIZWlnaHR9PmApO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jrc2hlZXREYXRhLmNvbHVtbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBFeGNlbFN0cmluZ3MuZ2V0RXhjZWxDb2x1bW4oaSkgKyAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGljdGlvbmFyeS5zYXZlVmFsdWUod29ya3NoZWV0RGF0YS5rZXlzW2ldLCBpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzaGVldERhdGEucHVzaChgPGMgcj1cIiR7Y29sdW1ufVwiIHQ9XCJzXCI+PHY+JHt2YWx1ZX08L3Y+PC9jPmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hlZXREYXRhLnB1c2goJzwvcm93PicpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHdvcmtzaGVldERhdGEucm93Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghd29ya3NoZWV0RGF0YS5pc1RyZWVHcmlkRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBzaGVldERhdGEucHVzaChgPHJvdyByPVwiJHsoaSArIDEpfVwiJHtyb3dIZWlnaHR9PmApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0RhdGEgPSB3b3Jrc2hlZXREYXRhLmRhdGFbaSAtIDFdLm9yaWdpbmFsUm93RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc0NvbGxhcHNlZCA9ICghcm93RGF0YS5leHBhbmRlZCkgPyAnJyA6IChyb3dEYXRhLmV4cGFuZGVkID09PSB0cnVlKSA/ICcnIDogYCBjb2xsYXBzZWQ9XCIxXCJgO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzSGlkZGVuID0gKHJvd0RhdGEucGFyZW50ICYmIHRoaXMuaGFzQ29sbGFwc2VkUGFyZW50KHJvd0RhdGEpKSA/IGAgaGlkZGVuPVwiMVwiYCA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dPdXRsaW5lTGV2ZWwgPSByb3dEYXRhLmxldmVsID8gcm93RGF0YS5sZXZlbCA6IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNPdXRsaW5lTGV2ZWwgPSByb3dPdXRsaW5lTGV2ZWwgPiAwID8gYCBvdXRsaW5lTGV2ZWw9XCIke3Jvd091dGxpbmVMZXZlbH1cImAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgbWF4T3V0bGluZUxldmVsID0gbWF4T3V0bGluZUxldmVsIDwgcm93T3V0bGluZUxldmVsID8gcm93T3V0bGluZUxldmVsIDogbWF4T3V0bGluZUxldmVsO1xuXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0RGF0YS5wdXNoKGA8cm93IHI9XCIkeyhpICsgMSl9XCIke3Jvd0hlaWdodH0ke3NPdXRsaW5lTGV2ZWx9JHtzQ29sbGFwc2VkfSR7c0hpZGRlbn0+YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd29ya3NoZWV0RGF0YS5jb2x1bW5Db3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxEYXRhID0gV29ya3NoZWV0RmlsZS5nZXRDZWxsRGF0YSh3b3Jrc2hlZXREYXRhLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgc2hlZXREYXRhLnB1c2goY2VsbERhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGVldERhdGEucHVzaCgnPC9yb3c+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGVldERhdGEucHVzaCgnPC9zaGVldERhdGE+Jyk7XG4gICAgICAgICAgICBkaW1lbnNpb24gPSAnQTE6JyArIEV4Y2VsU3RyaW5ncy5nZXRFeGNlbENvbHVtbih3b3Jrc2hlZXREYXRhLmNvbHVtbkNvdW50IC0gMSkgKyB3b3Jrc2hlZXREYXRhLnJvd0NvdW50O1xuXG4gICAgICAgICAgICBjb2xzLnB1c2goJzxjb2xzPicpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmtzaGVldERhdGEuY29sdW1uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZGljdGlvbmFyeS5jb2x1bW5XaWR0aHNbaV07XG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoZSB3aWR0aCBwcm92aWRlZCBpbiB0aGUgb3B0aW9ucyBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aEluVHdpcHMgPSB3b3Jrc2hlZXREYXRhLm9wdGlvbnMuY29sdW1uV2lkdGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0RGF0YS5vcHRpb25zLmNvbHVtbldpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KCgod2lkdGggLyA5NikgKiAxNC40KSwgV29ya3NoZWV0RmlsZS5NSU5fV0lEVEgpO1xuXG4gICAgICAgICAgICAgICAgY29scy5wdXNoKGA8Y29sIG1pbj1cIiR7KGkgKyAxKX1cIiBtYXg9XCIkeyhpICsgMSl9XCIgd2lkdGg9XCIke3dpZHRoSW5Ud2lwc31cIiBjdXN0b21XaWR0aD1cIjFcIi8+YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbHMucHVzaCgnPC9jb2xzPicpO1xuXG4gICAgICAgICAgICBpZiAod29ya3NoZWV0RGF0YS5pbmRleE9mTGFzdFBpbm5lZENvbHVtbiAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICAhd29ya3NoZWV0RGF0YS5vcHRpb25zLmlnbm9yZVBpbm5pbmcgJiZcbiAgICAgICAgICAgICAgICAhd29ya3NoZWV0RGF0YS5vcHRpb25zLmlnbm9yZUNvbHVtbnNPcmRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyb3plbkNvbHVtbkNvdW50ID0gd29ya3NoZWV0RGF0YS5pbmRleE9mTGFzdFBpbm5lZENvbHVtbiArIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RDZWxsID0gRXhjZWxTdHJpbmdzLmdldEV4Y2VsQ29sdW1uKGZyb3plbkNvbHVtbkNvdW50KSArICcxJztcbiAgICAgICAgICAgICAgICBmcmVlemVQYW5lID0gYDxwYW5lIHhTcGxpdD1cIiR7ZnJvemVuQ29sdW1uQ291bnR9XCIgdG9wTGVmdENlbGw9XCIke2ZpcnN0Q2VsbH1cIiBhY3RpdmVQYW5lPVwidG9wUmlnaHRcIiBzdGF0ZT1cImZyb3plblwiLz5gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc1RhYmxlID0gIXdvcmtzaGVldERhdGEuaXNFbXB0eSAmJiB3b3Jrc2hlZXREYXRhLm9wdGlvbnMuZXhwb3J0QXNUYWJsZTtcblxuICAgICAgICBmb2xkZXIuZmlsZSgnc2hlZXQxLnhtbCcsXG4gICAgICAgICAgICAgICAgICAgIEV4Y2VsU3RyaW5ncy5nZXRTaGVldFhNTChkaW1lbnNpb24sIGZyZWV6ZVBhbmUsIGNvbHMuam9pbignJyksIHNoZWV0RGF0YS5qb2luKCcnKSwgaGFzVGFibGUsXG4gICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldERhdGEuaXNUcmVlR3JpZERhdGEsIG1heE91dGxpbmVMZXZlbCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFzQ29sbGFwc2VkUGFyZW50KHJvd0RhdGEpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICFyb3dEYXRhLnBhcmVudC5leHBhbmRlZDtcbiAgICAgICAgd2hpbGUgKHJvd0RhdGEucGFyZW50KSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgIXJvd0RhdGEucGFyZW50LmV4cGFuZGVkO1xuICAgICAgICAgICAgcm93RGF0YSA9IHJvd0RhdGEucGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLyogdHNsaW50OmRpc2FibGUgbWVtYmVyLW9yZGVyaW5nICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q2VsbERhdGEod29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSwgcm93OiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IHdvcmtzaGVldERhdGEuZGF0YURpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0IGNvbHVtbk5hbWUgPSBFeGNlbFN0cmluZ3MuZ2V0RXhjZWxDb2x1bW4oY29sdW1uKSArIChyb3cgKyAxKTtcbiAgICAgICAgY29uc3QgY29sdW1uSGVhZGVyID0gd29ya3NoZWV0RGF0YS5rZXlzW2NvbHVtbl07XG5cbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IHdvcmtzaGVldERhdGEuZGF0YVtyb3cgLSAxXS5yb3dEYXRhO1xuXG4gICAgICAgIGNvbnN0IGNlbGxWYWx1ZSA9IHdvcmtzaGVldERhdGEuaXNTcGVjaWFsRGF0YSA/IHJvd0RhdGEgOiByb3dEYXRhW2NvbHVtbkhlYWRlcl07XG5cbiAgICAgICAgaWYgKGNlbGxWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGNlbGxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGA8YyByPVwiJHtjb2x1bW5OYW1lfVwiIHM9XCIxXCIvPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzYXZlZFZhbHVlID0gZGljdGlvbmFyeS5zYXZlVmFsdWUoY2VsbFZhbHVlLCBjb2x1bW4sIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2F2ZWRBc1N0cmluZyA9IHNhdmVkVmFsdWUgIT09IC0xO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlzU2F2ZWRBc1N0cmluZyA/IHNhdmVkVmFsdWUgOiBjZWxsVmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gaXNTYXZlZEFzU3RyaW5nID8gYCB0PVwic1wiYCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gaXNTYXZlZEFzU3RyaW5nID8gJycgOiBgIHM9XCIxXCJgO1xuXG4gICAgICAgICAgICByZXR1cm4gYDxjIHI9XCIke2NvbHVtbk5hbWV9XCIke3R5cGV9JHtmb3JtYXR9Pjx2PiR7dmFsdWV9PC92PjwvYz5gO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIHRzbGludDplbmFibGUgbWVtYmVyLW9yZGVyaW5nICovXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU3R5bGVGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGZvbGRlci5maWxlKCdzdHlsZXMueG1sJywgRXhjZWxTdHJpbmdzLmdldFN0eWxlcyh3b3Jrc2hlZXREYXRhLmRhdGFEaWN0aW9uYXJ5ICYmIHdvcmtzaGVldERhdGEuZGF0YURpY3Rpb25hcnkuaGFzTm9uU3RyaW5nVmFsdWVzKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtib29rRmlsZSBpbXBsZW1lbnRzIElFeGNlbEZpbGUge1xuICAgIHB1YmxpYyB3cml0ZUVsZW1lbnQoZm9sZGVyOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICBmb2xkZXIuZmlsZSgnd29ya2Jvb2sueG1sJywgRXhjZWxTdHJpbmdzLmdldFdvcmtib29rKCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZW50VHlwZXNGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGZvbGRlci5maWxlKCdbQ29udGVudF9UeXBlc10ueG1sJywgRXhjZWxTdHJpbmdzLmdldENvbnRlbnRUeXBlc1hNTCghd29ya3NoZWV0RGF0YS5pc0VtcHR5LCB3b3Jrc2hlZXREYXRhLm9wdGlvbnMuZXhwb3J0QXNUYWJsZSkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGFyZWRTdHJpbmdzRmlsZSBpbXBsZW1lbnRzIElFeGNlbEZpbGUge1xuICAgIHB1YmxpYyB3cml0ZUVsZW1lbnQoZm9sZGVyOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICBjb25zdCBkaWN0ID0gd29ya3NoZWV0RGF0YS5kYXRhRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3Qgc29ydGVkVmFsdWVzID0gZGljdC5nZXRLZXlzKCk7XG4gICAgICAgIGNvbnN0IHNoYXJlZFN0cmluZ3MgPSBuZXcgQXJyYXk8c3RyaW5nPihzb3J0ZWRWYWx1ZXMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHNvcnRlZFZhbHVlcykge1xuICAgICAgICAgICAgc2hhcmVkU3RyaW5nc1tkaWN0LmdldFNhbml0aXplZFZhbHVlKHZhbHVlKV0gPSAnPHNpPjx0PicgKyB2YWx1ZSArICc8L3Q+PC9zaT4nO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9sZGVyLmZpbGUoJ3NoYXJlZFN0cmluZ3MueG1sJywgRXhjZWxTdHJpbmdzLmdldFNoYXJlZFN0cmluZ1hNTChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Quc3RyaW5nc0NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkVmFsdWVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZFN0cmluZ3Muam9pbignJykpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlc0ZpbGUgaW1wbGVtZW50cyBJRXhjZWxGaWxlIHtcbiAgICBwdWJsaWMgd3JpdGVFbGVtZW50KGZvbGRlcjogSlNaaXAsIHdvcmtzaGVldERhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgY29uc3QgY29sdW1uQ291bnQgPSB3b3Jrc2hlZXREYXRhLmNvbHVtbkNvdW50O1xuICAgICAgICBjb25zdCBsYXN0Q29sdW1uID0gRXhjZWxTdHJpbmdzLmdldEV4Y2VsQ29sdW1uKGNvbHVtbkNvdW50IC0gMSkgKyB3b3Jrc2hlZXREYXRhLnJvd0NvdW50O1xuICAgICAgICBjb25zdCBkaW1lbnNpb24gPSAnQTE6JyArIGxhc3RDb2x1bW47XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHdvcmtzaGVldERhdGEua2V5cztcbiAgICAgICAgbGV0IHNvcnRTdHJpbmcgPSAnJztcblxuICAgICAgICBsZXQgdGFibGVDb2x1bW5zID0gJzx0YWJsZUNvbHVtbnMgY291bnQ9XCInICsgY29sdW1uQ291bnQgKyAnXCI+JztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICB2YWx1ZXNbaV07XG4gICAgICAgICAgICB0YWJsZUNvbHVtbnMgKz0gJzx0YWJsZUNvbHVtbiBpZD1cIicgKyAoaSArIDEpICsgJ1wiIG5hbWU9XCInICsgdmFsdWUgKyAnXCIvPic7XG4gICAgICAgIH1cblxuICAgICAgICB0YWJsZUNvbHVtbnMgKz0gJzwvdGFibGVDb2x1bW5zPic7XG5cbiAgICAgICAgaWYgKHdvcmtzaGVldERhdGEuc29ydCkge1xuICAgICAgICAgICAgY29uc3Qgc29ydGluZ0V4cHJlc3Npb24gPSB3b3Jrc2hlZXREYXRhLnNvcnQ7XG4gICAgICAgICAgICBjb25zdCBzYyA9IEV4Y2VsU3RyaW5ncy5nZXRFeGNlbENvbHVtbih2YWx1ZXMuaW5kZXhPZihzb3J0aW5nRXhwcmVzc2lvbi5maWVsZE5hbWUpKTtcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHNvcnRpbmdFeHByZXNzaW9uLmRpciAtIDE7XG4gICAgICAgICAgICBzb3J0U3RyaW5nID0gYDxzb3J0U3RhdGUgcmVmPVwiQTI6JHtsYXN0Q29sdW1ufVwiPjxzb3J0Q29uZGl0aW9uIGRlc2NlbmRpbmc9XCIke2Rpcn1cIiByZWY9XCIke3NjfTE6JHtzY30xNVwiLz48L3NvcnRTdGF0ZT5gO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9sZGVyLmZpbGUoJ3RhYmxlMS54bWwnLCBFeGNlbFN0cmluZ3MuZ2V0VGFibGVzWE1MKGRpbWVuc2lvbiwgdGFibGVDb2x1bW5zLCBzb3J0U3RyaW5nKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtzaGVldFJlbHNGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGZvbGRlci5maWxlKCdzaGVldDEueG1sLnJlbHMnLCBFeGNlbFN0cmluZ3MuZ2V0V29ya3NoZWV0UmVscygpKTtcbiAgICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExcelStrings } from './excel-strings';
/**
 * @hidden
 */
export class RootRelsFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        folder.file('.rels', ExcelStrings.getRels());
    }
}
/**
 * @hidden
 */
export class AppFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        folder.file('app.xml', ExcelStrings.getApp());
    }
}
/**
 * @hidden
 */
export class CoreFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        folder.file('core.xml', ExcelStrings.getCore());
    }
}
/**
 * @hidden
 */
export class WorkbookRelsFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        /** @type {?} */
        const hasSharedStrings = worksheetData.isEmpty === false;
        folder.file('workbook.xml.rels', ExcelStrings.getWorkbookRels(hasSharedStrings));
    }
}
/**
 * @hidden
 */
export class ThemeFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        folder.file('theme1.xml', ExcelStrings.getTheme());
    }
}
/**
 * @hidden
 */
export class WorksheetFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        /** @type {?} */
        const sheetData = [];
        /** @type {?} */
        const cols = [];
        /** @type {?} */
        let dimension;
        /** @type {?} */
        const dictionary = worksheetData.dataDictionary;
        /** @type {?} */
        let freezePane = '';
        /** @type {?} */
        let maxOutlineLevel = 0;
        if (worksheetData.isEmpty) {
            sheetData.push('<sheetData/>');
            dimension = 'A1';
        }
        else {
            sheetData.push('<sheetData>');
            /** @type {?} */
            const height = worksheetData.options.rowHeight;
            /** @type {?} */
            const rowHeight = height ? ' ht="' + height + '" customHeight="1"' : '';
            sheetData.push(`<row r="1"${rowHeight}>`);
            for (let i = 0; i < worksheetData.columnCount; i++) {
                /** @type {?} */
                const column = ExcelStrings.getExcelColumn(i) + 1;
                /** @type {?} */
                const value = dictionary.saveValue(worksheetData.keys[i], i, true);
                sheetData.push(`<c r="${column}" t="s"><v>${value}</v></c>`);
            }
            sheetData.push('</row>');
            for (let i = 1; i < worksheetData.rowCount; i++) {
                if (!worksheetData.isTreeGridData) {
                    sheetData.push(`<row r="${(i + 1)}"${rowHeight}>`);
                }
                else {
                    /** @type {?} */
                    const rowData = worksheetData.data[i - 1].originalRowData;
                    /** @type {?} */
                    const sCollapsed = (!rowData.expanded) ? '' : (rowData.expanded === true) ? '' : ` collapsed="1"`;
                    /** @type {?} */
                    const sHidden = (rowData.parent && this.hasCollapsedParent(rowData)) ? ` hidden="1"` : '';
                    /** @type {?} */
                    const rowOutlineLevel = rowData.level ? rowData.level : 0;
                    /** @type {?} */
                    const sOutlineLevel = rowOutlineLevel > 0 ? ` outlineLevel="${rowOutlineLevel}"` : '';
                    maxOutlineLevel = maxOutlineLevel < rowOutlineLevel ? rowOutlineLevel : maxOutlineLevel;
                    sheetData.push(`<row r="${(i + 1)}"${rowHeight}${sOutlineLevel}${sCollapsed}${sHidden}>`);
                }
                for (let j = 0; j < worksheetData.columnCount; j++) {
                    /** @type {?} */
                    const cellData = WorksheetFile.getCellData(worksheetData, i, j);
                    sheetData.push(cellData);
                }
                sheetData.push('</row>');
            }
            sheetData.push('</sheetData>');
            dimension = 'A1:' + ExcelStrings.getExcelColumn(worksheetData.columnCount - 1) + worksheetData.rowCount;
            cols.push('<cols>');
            for (let i = 0; i < worksheetData.columnCount; i++) {
                /** @type {?} */
                const width = dictionary.columnWidths[i];
                // Use the width provided in the options if it exists
                /** @type {?} */
                const widthInTwips = worksheetData.options.columnWidth ?
                    worksheetData.options.columnWidth :
                    Math.max(((width / 96) * 14.4), WorksheetFile.MIN_WIDTH);
                cols.push(`<col min="${(i + 1)}" max="${(i + 1)}" width="${widthInTwips}" customWidth="1"/>`);
            }
            cols.push('</cols>');
            if (worksheetData.indexOfLastPinnedColumn !== -1 &&
                !worksheetData.options.ignorePinning &&
                !worksheetData.options.ignoreColumnsOrder) {
                /** @type {?} */
                const frozenColumnCount = worksheetData.indexOfLastPinnedColumn + 1;
                /** @type {?} */
                const firstCell = ExcelStrings.getExcelColumn(frozenColumnCount) + '1';
                freezePane = `<pane xSplit="${frozenColumnCount}" topLeftCell="${firstCell}" activePane="topRight" state="frozen"/>`;
            }
        }
        /** @type {?} */
        const hasTable = !worksheetData.isEmpty && worksheetData.options.exportAsTable;
        folder.file('sheet1.xml', ExcelStrings.getSheetXML(dimension, freezePane, cols.join(''), sheetData.join(''), hasTable, worksheetData.isTreeGridData, maxOutlineLevel));
    }
    /**
     * @private
     * @param {?} rowData
     * @return {?}
     */
    hasCollapsedParent(rowData) {
        /** @type {?} */
        let result = !rowData.parent.expanded;
        while (rowData.parent) {
            result = result || !rowData.parent.expanded;
            rowData = rowData.parent;
        }
        return result;
    }
    /* tslint:disable member-ordering */
    /**
     * @private
     * @param {?} worksheetData
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    static getCellData(worksheetData, row, column) {
        /** @type {?} */
        const dictionary = worksheetData.dataDictionary;
        /** @type {?} */
        const columnName = ExcelStrings.getExcelColumn(column) + (row + 1);
        /** @type {?} */
        const columnHeader = worksheetData.keys[column];
        /** @type {?} */
        const rowData = worksheetData.data[row - 1].rowData;
        /** @type {?} */
        const cellValue = worksheetData.isSpecialData ? rowData : rowData[columnHeader];
        if (cellValue === undefined || cellValue === null) {
            return `<c r="${columnName}" s="1"/>`;
        }
        else {
            /** @type {?} */
            const savedValue = dictionary.saveValue(cellValue, column, false);
            /** @type {?} */
            const isSavedAsString = savedValue !== -1;
            /** @type {?} */
            const value = isSavedAsString ? savedValue : cellValue;
            /** @type {?} */
            const type = isSavedAsString ? ` t="s"` : '';
            /** @type {?} */
            const format = isSavedAsString ? '' : ` s="1"`;
            return `<c r="${columnName}"${type}${format}><v>${value}</v></c>`;
        }
    }
}
WorksheetFile.MIN_WIDTH = 8.34;
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
export class StyleFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        folder.file('styles.xml', ExcelStrings.getStyles(worksheetData.dataDictionary && worksheetData.dataDictionary.hasNonStringValues));
    }
}
/**
 * @hidden
 */
export class WorkbookFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        folder.file('workbook.xml', ExcelStrings.getWorkbook());
    }
}
/**
 * @hidden
 */
export class ContentTypesFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        folder.file('[Content_Types].xml', ExcelStrings.getContentTypesXML(!worksheetData.isEmpty, worksheetData.options.exportAsTable));
    }
}
/**
 * @hidden
 */
export class SharedStringsFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        /** @type {?} */
        const dict = worksheetData.dataDictionary;
        /** @type {?} */
        const sortedValues = dict.getKeys();
        /** @type {?} */
        const sharedStrings = new Array(sortedValues.length);
        for (const value of sortedValues) {
            sharedStrings[dict.getSanitizedValue(value)] = '<si><t>' + value + '</t></si>';
        }
        folder.file('sharedStrings.xml', ExcelStrings.getSharedStringXML(dict.stringsCount, sortedValues.length, sharedStrings.join('')));
    }
}
/**
 * @hidden
 */
export class TablesFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        /** @type {?} */
        const columnCount = worksheetData.columnCount;
        /** @type {?} */
        const lastColumn = ExcelStrings.getExcelColumn(columnCount - 1) + worksheetData.rowCount;
        /** @type {?} */
        const dimension = 'A1:' + lastColumn;
        /** @type {?} */
        const values = worksheetData.keys;
        /** @type {?} */
        let sortString = '';
        /** @type {?} */
        let tableColumns = '<tableColumns count="' + columnCount + '">';
        for (let i = 0; i < columnCount; i++) {
            /** @type {?} */
            const value = values[i];
            tableColumns += '<tableColumn id="' + (i + 1) + '" name="' + value + '"/>';
        }
        tableColumns += '</tableColumns>';
        if (worksheetData.sort) {
            /** @type {?} */
            const sortingExpression = worksheetData.sort;
            /** @type {?} */
            const sc = ExcelStrings.getExcelColumn(values.indexOf(sortingExpression.fieldName));
            /** @type {?} */
            const dir = sortingExpression.dir - 1;
            sortString = `<sortState ref="A2:${lastColumn}"><sortCondition descending="${dir}" ref="${sc}1:${sc}15"/></sortState>`;
        }
        folder.file('table1.xml', ExcelStrings.getTablesXML(dimension, tableColumns, sortString));
    }
}
/**
 * @hidden
 */
export class WorksheetRelsFile {
    /**
     * @param {?} folder
     * @param {?} worksheetData
     * @return {?}
     */
    writeElement(folder, worksheetData) {
        folder.file('sheet1.xml.rels', ExcelStrings.getWorksheetRels());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZmlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4Y2VsL2V4Y2VsLWZpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFRL0MsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUNkLFlBQVksQ0FBQyxNQUFhLEVBQUUsYUFBNEI7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNKOzs7O0FBS0QsTUFBTSxPQUFPLE9BQU87Ozs7OztJQUNULFlBQVksQ0FBQyxNQUFhLEVBQUUsYUFBNEI7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNKOzs7O0FBS0QsTUFBTSxPQUFPLFFBQVE7Ozs7OztJQUNWLFlBQVksQ0FBQyxNQUFhLEVBQUUsYUFBNEI7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNKOzs7O0FBS0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBQ2xCLFlBQVksQ0FBQyxNQUFhLEVBQUUsYUFBNEI7O2NBQ3JELGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxPQUFPLEtBQUssS0FBSztRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Q0FDSjs7OztBQUtELE1BQU0sT0FBTyxTQUFTOzs7Ozs7SUFDWCxZQUFZLENBQUMsTUFBYSxFQUFFLGFBQTRCO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDSjs7OztBQUtELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFHZixZQUFZLENBQUMsTUFBYSxFQUFFLGFBQTRCOztjQUNyRCxTQUFTLEdBQUcsRUFBRTs7Y0FDZCxJQUFJLEdBQUcsRUFBRTs7WUFDWCxTQUFpQjs7Y0FDZixVQUFVLEdBQUcsYUFBYSxDQUFDLGNBQWM7O1lBQzNDLFVBQVUsR0FBRyxFQUFFOztZQUNmLGVBQWUsR0FBRyxDQUFDO1FBRXZCLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9CLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTTtZQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O2tCQUN4QixNQUFNLEdBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTOztrQkFDekMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUV2RSxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTs7c0JBQzFDLE1BQU0sR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7O3NCQUMzQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBQ2xFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxNQUFNLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQzthQUNoRTtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO29CQUMvQixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07OzBCQUNHLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlOzswQkFDbkQsVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjs7MEJBQzNGLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTs7MEJBQ25GLGVBQWUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzswQkFDbkQsYUFBYSxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDckYsZUFBZSxHQUFHLGVBQWUsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO29CQUV4RixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxHQUFHLGFBQWEsR0FBRyxVQUFVLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztpQkFDN0Y7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7OzBCQUMxQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDL0QsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDNUI7Z0JBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1QjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0IsU0FBUyxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUV4RyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFOztzQkFDMUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7c0JBRWxDLFlBQVksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNwQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFFNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLFlBQVkscUJBQXFCLENBQUMsQ0FBQzthQUNqRztZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFckIsSUFBSSxhQUFhLENBQUMsdUJBQXVCLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYTtnQkFDcEMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFOztzQkFDckMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLHVCQUF1QixHQUFHLENBQUM7O3NCQUM3RCxTQUFTLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUc7Z0JBQ3RFLFVBQVUsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQixTQUFTLDBDQUEwQyxDQUFDO2FBQ3hIO1NBQ0o7O2NBQ0ssUUFBUSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWE7UUFFOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQ1osWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQzNGLGFBQWEsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxPQUFPOztZQUMxQixNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDckMsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ25CLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUM1QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUM1QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBNEIsRUFBRSxHQUFXLEVBQUUsTUFBYzs7Y0FDMUUsVUFBVSxHQUFHLGFBQWEsQ0FBQyxjQUFjOztjQUN6QyxVQUFVLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7O2NBQzVELFlBQVksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Y0FFekMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU87O2NBRTdDLFNBQVMsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFFL0UsSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDL0MsT0FBTyxTQUFTLFVBQVUsV0FBVyxDQUFDO1NBQ3pDO2FBQU07O2tCQUNHLFVBQVUsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDOztrQkFDM0QsZUFBZSxHQUFHLFVBQVUsS0FBSyxDQUFDLENBQUM7O2tCQUVuQyxLQUFLLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7O2tCQUNoRCxJQUFJLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2tCQUN0QyxNQUFNLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVE7WUFFOUMsT0FBTyxTQUFTLFVBQVUsSUFBSSxJQUFJLEdBQUcsTUFBTSxPQUFPLEtBQUssVUFBVSxDQUFDO1NBQ3JFO0lBQ0wsQ0FBQzs7QUE1R2MsdUJBQVMsR0FBRyxJQUFJLENBQUM7Ozs7OztJQUFoQyx3QkFBZ0M7Ozs7O0FBbUhwQyxNQUFNLE9BQU8sU0FBUzs7Ozs7O0lBQ1gsWUFBWSxDQUFDLE1BQWEsRUFBRSxhQUE0QjtRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxjQUFjLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDdkksQ0FBQztDQUNKOzs7O0FBS0QsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUNkLFlBQVksQ0FBQyxNQUFhLEVBQUUsYUFBNEI7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNKOzs7O0FBS0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBQ2xCLFlBQVksQ0FBQyxNQUFhLEVBQUUsYUFBNEI7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNySSxDQUFDO0NBQ0o7Ozs7QUFLRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFDbkIsWUFBWSxDQUFDLE1BQWEsRUFBRSxhQUE0Qjs7Y0FDckQsSUFBSSxHQUFHLGFBQWEsQ0FBQyxjQUFjOztjQUNuQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTs7Y0FDN0IsYUFBYSxHQUFHLElBQUksS0FBSyxDQUFTLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFNUQsS0FBSyxNQUFNLEtBQUssSUFBSSxZQUFZLEVBQUU7WUFDOUIsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQ2xGO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsa0JBQWtCLENBQ2hELElBQUksQ0FBQyxZQUFZLEVBQ2pCLFlBQVksQ0FBQyxNQUFNLEVBQ25CLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDMUIsQ0FBQztJQUNsQixDQUFDO0NBQ0o7Ozs7QUFLRCxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBQ1osWUFBWSxDQUFDLE1BQWEsRUFBRSxhQUE0Qjs7Y0FDckQsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXOztjQUN2QyxVQUFVLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVE7O2NBQ2xGLFNBQVMsR0FBRyxLQUFLLEdBQUcsVUFBVTs7Y0FDOUIsTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJOztZQUM3QixVQUFVLEdBQUcsRUFBRTs7WUFFZixZQUFZLEdBQUcsdUJBQXVCLEdBQUcsV0FBVyxHQUFHLElBQUk7UUFDL0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzVCLEtBQUssR0FBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFlBQVksSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUM5RTtRQUVELFlBQVksSUFBSSxpQkFBaUIsQ0FBQztRQUVsQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUU7O2tCQUNkLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxJQUFJOztrQkFDdEMsRUFBRSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7a0JBQzdFLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQyxVQUFVLEdBQUcsc0JBQXNCLFVBQVUsZ0NBQWdDLEdBQUcsVUFBVSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsQ0FBQztTQUMxSDtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7Q0FDSjs7OztBQUtELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUNuQixZQUFZLENBQUMsTUFBYSxFQUFFLGFBQTRCO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRXhjZWxGaWxlIH0gZnJvbSAnLi9leGNlbC1pbnRlcmZhY2VzJztcbmltcG9ydCB7IEV4Y2VsU3RyaW5ncyB9IGZyb20gJy4vZXhjZWwtc3RyaW5ncyc7XG5pbXBvcnQgeyBXb3Jrc2hlZXREYXRhIH0gZnJvbSAnLi93b3Jrc2hlZXQtZGF0YSc7XG5cbmltcG9ydCAqIGFzIEpTWmlwIGZyb20gJ2pzemlwL2Rpc3QvanN6aXAnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvb3RSZWxzRmlsZSBpbXBsZW1lbnRzIElFeGNlbEZpbGUge1xuICAgIHB1YmxpYyB3cml0ZUVsZW1lbnQoZm9sZGVyOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICBmb2xkZXIuZmlsZSgnLnJlbHMnLCBFeGNlbFN0cmluZ3MuZ2V0UmVscygpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQXBwRmlsZSBpbXBsZW1lbnRzIElFeGNlbEZpbGUge1xuICAgIHB1YmxpYyB3cml0ZUVsZW1lbnQoZm9sZGVyOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICBmb2xkZXIuZmlsZSgnYXBwLnhtbCcsIEV4Y2VsU3RyaW5ncy5nZXRBcHAoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvcmVGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGZvbGRlci5maWxlKCdjb3JlLnhtbCcsIEV4Y2VsU3RyaW5ncy5nZXRDb3JlKCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBXb3JrYm9va1JlbHNGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGNvbnN0IGhhc1NoYXJlZFN0cmluZ3MgPSB3b3Jrc2hlZXREYXRhLmlzRW1wdHkgPT09IGZhbHNlO1xuICAgICAgICBmb2xkZXIuZmlsZSgnd29ya2Jvb2sueG1sLnJlbHMnLCBFeGNlbFN0cmluZ3MuZ2V0V29ya2Jvb2tSZWxzKGhhc1NoYXJlZFN0cmluZ3MpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVGhlbWVGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGZvbGRlci5maWxlKCd0aGVtZTEueG1sJywgRXhjZWxTdHJpbmdzLmdldFRoZW1lKCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXRGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgTUlOX1dJRFRIID0gOC4zNDtcblxuICAgIHB1YmxpYyB3cml0ZUVsZW1lbnQoZm9sZGVyOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICBjb25zdCBzaGVldERhdGEgPSBbXTtcbiAgICAgICAgY29uc3QgY29scyA9IFtdO1xuICAgICAgICBsZXQgZGltZW5zaW9uOiBzdHJpbmc7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSB3b3Jrc2hlZXREYXRhLmRhdGFEaWN0aW9uYXJ5O1xuICAgICAgICBsZXQgZnJlZXplUGFuZSA9ICcnO1xuICAgICAgICBsZXQgbWF4T3V0bGluZUxldmVsID0gMDtcblxuICAgICAgICBpZiAod29ya3NoZWV0RGF0YS5pc0VtcHR5KSB7XG4gICAgICAgICAgICBzaGVldERhdGEucHVzaCgnPHNoZWV0RGF0YS8+Jyk7XG4gICAgICAgICAgICBkaW1lbnNpb24gPSAnQTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hlZXREYXRhLnB1c2goJzxzaGVldERhdGE+Jyk7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAgd29ya3NoZWV0RGF0YS5vcHRpb25zLnJvd0hlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHJvd0hlaWdodCA9IGhlaWdodCA/ICcgaHQ9XCInICsgaGVpZ2h0ICsgJ1wiIGN1c3RvbUhlaWdodD1cIjFcIicgOiAnJztcblxuICAgICAgICAgICAgc2hlZXREYXRhLnB1c2goYDxyb3cgcj1cIjFcIiR7cm93SGVpZ2h0fT5gKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29ya3NoZWV0RGF0YS5jb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gRXhjZWxTdHJpbmdzLmdldEV4Y2VsQ29sdW1uKGkpICsgMTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpY3Rpb25hcnkuc2F2ZVZhbHVlKHdvcmtzaGVldERhdGEua2V5c1tpXSwgaSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2hlZXREYXRhLnB1c2goYDxjIHI9XCIke2NvbHVtbn1cIiB0PVwic1wiPjx2PiR7dmFsdWV9PC92PjwvYz5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoZWV0RGF0YS5wdXNoKCc8L3Jvdz4nKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB3b3Jrc2hlZXREYXRhLnJvd0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXdvcmtzaGVldERhdGEuaXNUcmVlR3JpZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hlZXREYXRhLnB1c2goYDxyb3cgcj1cIiR7KGkgKyAxKX1cIiR7cm93SGVpZ2h0fT5gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dEYXRhID0gd29ya3NoZWV0RGF0YS5kYXRhW2kgLSAxXS5vcmlnaW5hbFJvd0RhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNDb2xsYXBzZWQgPSAoIXJvd0RhdGEuZXhwYW5kZWQpID8gJycgOiAocm93RGF0YS5leHBhbmRlZCA9PT0gdHJ1ZSkgPyAnJyA6IGAgY29sbGFwc2VkPVwiMVwiYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc0hpZGRlbiA9IChyb3dEYXRhLnBhcmVudCAmJiB0aGlzLmhhc0NvbGxhcHNlZFBhcmVudChyb3dEYXRhKSkgPyBgIGhpZGRlbj1cIjFcImAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93T3V0bGluZUxldmVsID0gcm93RGF0YS5sZXZlbCA/IHJvd0RhdGEubGV2ZWwgOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzT3V0bGluZUxldmVsID0gcm93T3V0bGluZUxldmVsID4gMCA/IGAgb3V0bGluZUxldmVsPVwiJHtyb3dPdXRsaW5lTGV2ZWx9XCJgIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIG1heE91dGxpbmVMZXZlbCA9IG1heE91dGxpbmVMZXZlbCA8IHJvd091dGxpbmVMZXZlbCA/IHJvd091dGxpbmVMZXZlbCA6IG1heE91dGxpbmVMZXZlbDtcblxuICAgICAgICAgICAgICAgICAgICBzaGVldERhdGEucHVzaChgPHJvdyByPVwiJHsoaSArIDEpfVwiJHtyb3dIZWlnaHR9JHtzT3V0bGluZUxldmVsfSR7c0NvbGxhcHNlZH0ke3NIaWRkZW59PmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdvcmtzaGVldERhdGEuY29sdW1uQ291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsRGF0YSA9IFdvcmtzaGVldEZpbGUuZ2V0Q2VsbERhdGEod29ya3NoZWV0RGF0YSwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHNoZWV0RGF0YS5wdXNoKGNlbGxEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hlZXREYXRhLnB1c2goJzwvcm93PicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hlZXREYXRhLnB1c2goJzwvc2hlZXREYXRhPicpO1xuICAgICAgICAgICAgZGltZW5zaW9uID0gJ0ExOicgKyBFeGNlbFN0cmluZ3MuZ2V0RXhjZWxDb2x1bW4od29ya3NoZWV0RGF0YS5jb2x1bW5Db3VudCAtIDEpICsgd29ya3NoZWV0RGF0YS5yb3dDb3VudDtcblxuICAgICAgICAgICAgY29scy5wdXNoKCc8Y29scz4nKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jrc2hlZXREYXRhLmNvbHVtbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGRpY3Rpb25hcnkuY29sdW1uV2lkdGhzW2ldO1xuICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgd2lkdGggcHJvdmlkZWQgaW4gdGhlIG9wdGlvbnMgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGhJblR3aXBzID0gd29ya3NoZWV0RGF0YS5vcHRpb25zLmNvbHVtbldpZHRoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldERhdGEub3B0aW9ucy5jb2x1bW5XaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgoKHdpZHRoIC8gOTYpICogMTQuNCksIFdvcmtzaGVldEZpbGUuTUlOX1dJRFRIKTtcblxuICAgICAgICAgICAgICAgIGNvbHMucHVzaChgPGNvbCBtaW49XCIkeyhpICsgMSl9XCIgbWF4PVwiJHsoaSArIDEpfVwiIHdpZHRoPVwiJHt3aWR0aEluVHdpcHN9XCIgY3VzdG9tV2lkdGg9XCIxXCIvPmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2xzLnB1c2goJzwvY29scz4nKTtcblxuICAgICAgICAgICAgaWYgKHdvcmtzaGVldERhdGEuaW5kZXhPZkxhc3RQaW5uZWRDb2x1bW4gIT09IC0xICYmXG4gICAgICAgICAgICAgICAgIXdvcmtzaGVldERhdGEub3B0aW9ucy5pZ25vcmVQaW5uaW5nICYmXG4gICAgICAgICAgICAgICAgIXdvcmtzaGVldERhdGEub3B0aW9ucy5pZ25vcmVDb2x1bW5zT3JkZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcm96ZW5Db2x1bW5Db3VudCA9IHdvcmtzaGVldERhdGEuaW5kZXhPZkxhc3RQaW5uZWRDb2x1bW4gKyAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2VsbCA9IEV4Y2VsU3RyaW5ncy5nZXRFeGNlbENvbHVtbihmcm96ZW5Db2x1bW5Db3VudCkgKyAnMSc7XG4gICAgICAgICAgICAgICAgZnJlZXplUGFuZSA9IGA8cGFuZSB4U3BsaXQ9XCIke2Zyb3plbkNvbHVtbkNvdW50fVwiIHRvcExlZnRDZWxsPVwiJHtmaXJzdENlbGx9XCIgYWN0aXZlUGFuZT1cInRvcFJpZ2h0XCIgc3RhdGU9XCJmcm96ZW5cIi8+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYXNUYWJsZSA9ICF3b3Jrc2hlZXREYXRhLmlzRW1wdHkgJiYgd29ya3NoZWV0RGF0YS5vcHRpb25zLmV4cG9ydEFzVGFibGU7XG5cbiAgICAgICAgZm9sZGVyLmZpbGUoJ3NoZWV0MS54bWwnLFxuICAgICAgICAgICAgICAgICAgICBFeGNlbFN0cmluZ3MuZ2V0U2hlZXRYTUwoZGltZW5zaW9uLCBmcmVlemVQYW5lLCBjb2xzLmpvaW4oJycpLCBzaGVldERhdGEuam9pbignJyksIGhhc1RhYmxlLFxuICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXREYXRhLmlzVHJlZUdyaWREYXRhLCBtYXhPdXRsaW5lTGV2ZWwpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhc0NvbGxhcHNlZFBhcmVudChyb3dEYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAhcm93RGF0YS5wYXJlbnQuZXhwYW5kZWQ7XG4gICAgICAgIHdoaWxlIChyb3dEYXRhLnBhcmVudCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8ICFyb3dEYXRhLnBhcmVudC5leHBhbmRlZDtcbiAgICAgICAgICAgIHJvd0RhdGEgPSByb3dEYXRhLnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qIHRzbGludDpkaXNhYmxlIG1lbWJlci1vcmRlcmluZyAqL1xuICAgIHByaXZhdGUgc3RhdGljIGdldENlbGxEYXRhKHdvcmtzaGVldERhdGE6IFdvcmtzaGVldERhdGEsIHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSB3b3Jrc2hlZXREYXRhLmRhdGFEaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCBjb2x1bW5OYW1lID0gRXhjZWxTdHJpbmdzLmdldEV4Y2VsQ29sdW1uKGNvbHVtbikgKyAocm93ICsgMSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbkhlYWRlciA9IHdvcmtzaGVldERhdGEua2V5c1tjb2x1bW5dO1xuXG4gICAgICAgIGNvbnN0IHJvd0RhdGEgPSB3b3Jrc2hlZXREYXRhLmRhdGFbcm93IC0gMV0ucm93RGF0YTtcblxuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSB3b3Jrc2hlZXREYXRhLmlzU3BlY2lhbERhdGEgPyByb3dEYXRhIDogcm93RGF0YVtjb2x1bW5IZWFkZXJdO1xuXG4gICAgICAgIGlmIChjZWxsVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBjZWxsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBgPGMgcj1cIiR7Y29sdW1uTmFtZX1cIiBzPVwiMVwiLz5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2F2ZWRWYWx1ZSA9IGRpY3Rpb25hcnkuc2F2ZVZhbHVlKGNlbGxWYWx1ZSwgY29sdW1uLCBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBpc1NhdmVkQXNTdHJpbmcgPSBzYXZlZFZhbHVlICE9PSAtMTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpc1NhdmVkQXNTdHJpbmcgPyBzYXZlZFZhbHVlIDogY2VsbFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGlzU2F2ZWRBc1N0cmluZyA/IGAgdD1cInNcImAgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IGlzU2F2ZWRBc1N0cmluZyA/ICcnIDogYCBzPVwiMVwiYDtcblxuICAgICAgICAgICAgcmV0dXJuIGA8YyByPVwiJHtjb2x1bW5OYW1lfVwiJHt0eXBlfSR7Zm9ybWF0fT48dj4ke3ZhbHVlfTwvdj48L2M+YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiB0c2xpbnQ6ZW5hYmxlIG1lbWJlci1vcmRlcmluZyAqL1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0eWxlRmlsZSBpbXBsZW1lbnRzIElFeGNlbEZpbGUge1xuICAgIHB1YmxpYyB3cml0ZUVsZW1lbnQoZm9sZGVyOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICBmb2xkZXIuZmlsZSgnc3R5bGVzLnhtbCcsIEV4Y2VsU3RyaW5ncy5nZXRTdHlsZXMod29ya3NoZWV0RGF0YS5kYXRhRGljdGlvbmFyeSAmJiB3b3Jrc2hlZXREYXRhLmRhdGFEaWN0aW9uYXJ5Lmhhc05vblN0cmluZ1ZhbHVlcykpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBXb3JrYm9va0ZpbGUgaW1wbGVtZW50cyBJRXhjZWxGaWxlIHtcbiAgICBwdWJsaWMgd3JpdGVFbGVtZW50KGZvbGRlcjogSlNaaXAsIHdvcmtzaGVldERhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgZm9sZGVyLmZpbGUoJ3dvcmtib29rLnhtbCcsIEV4Y2VsU3RyaW5ncy5nZXRXb3JrYm9vaygpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGVudFR5cGVzRmlsZSBpbXBsZW1lbnRzIElFeGNlbEZpbGUge1xuICAgIHB1YmxpYyB3cml0ZUVsZW1lbnQoZm9sZGVyOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICBmb2xkZXIuZmlsZSgnW0NvbnRlbnRfVHlwZXNdLnhtbCcsIEV4Y2VsU3RyaW5ncy5nZXRDb250ZW50VHlwZXNYTUwoIXdvcmtzaGVldERhdGEuaXNFbXB0eSwgd29ya3NoZWV0RGF0YS5vcHRpb25zLmV4cG9ydEFzVGFibGUpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU2hhcmVkU3RyaW5nc0ZpbGUgaW1wbGVtZW50cyBJRXhjZWxGaWxlIHtcbiAgICBwdWJsaWMgd3JpdGVFbGVtZW50KGZvbGRlcjogSlNaaXAsIHdvcmtzaGVldERhdGE6IFdvcmtzaGVldERhdGEpIHtcbiAgICAgICAgY29uc3QgZGljdCA9IHdvcmtzaGVldERhdGEuZGF0YURpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0IHNvcnRlZFZhbHVlcyA9IGRpY3QuZ2V0S2V5cygpO1xuICAgICAgICBjb25zdCBzaGFyZWRTdHJpbmdzID0gbmV3IEFycmF5PHN0cmluZz4oc29ydGVkVmFsdWVzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBzb3J0ZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHNoYXJlZFN0cmluZ3NbZGljdC5nZXRTYW5pdGl6ZWRWYWx1ZSh2YWx1ZSldID0gJzxzaT48dD4nICsgdmFsdWUgKyAnPC90Pjwvc2k+JztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvbGRlci5maWxlKCdzaGFyZWRTdHJpbmdzLnhtbCcsIEV4Y2VsU3RyaW5ncy5nZXRTaGFyZWRTdHJpbmdYTUwoXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWN0LnN0cmluZ3NDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFZhbHVlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWRTdHJpbmdzLmpvaW4oJycpKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZXNGaWxlIGltcGxlbWVudHMgSUV4Y2VsRmlsZSB7XG4gICAgcHVibGljIHdyaXRlRWxlbWVudChmb2xkZXI6IEpTWmlwLCB3b3Jrc2hlZXREYXRhOiBXb3Jrc2hlZXREYXRhKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkNvdW50ID0gd29ya3NoZWV0RGF0YS5jb2x1bW5Db3VudDtcbiAgICAgICAgY29uc3QgbGFzdENvbHVtbiA9IEV4Y2VsU3RyaW5ncy5nZXRFeGNlbENvbHVtbihjb2x1bW5Db3VudCAtIDEpICsgd29ya3NoZWV0RGF0YS5yb3dDb3VudDtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gJ0ExOicgKyBsYXN0Q29sdW1uO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB3b3Jrc2hlZXREYXRhLmtleXM7XG4gICAgICAgIGxldCBzb3J0U3RyaW5nID0gJyc7XG5cbiAgICAgICAgbGV0IHRhYmxlQ29sdW1ucyA9ICc8dGFibGVDb2x1bW5zIGNvdW50PVwiJyArIGNvbHVtbkNvdW50ICsgJ1wiPic7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgdmFsdWVzW2ldO1xuICAgICAgICAgICAgdGFibGVDb2x1bW5zICs9ICc8dGFibGVDb2x1bW4gaWQ9XCInICsgKGkgKyAxKSArICdcIiBuYW1lPVwiJyArIHZhbHVlICsgJ1wiLz4nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFibGVDb2x1bW5zICs9ICc8L3RhYmxlQ29sdW1ucz4nO1xuXG4gICAgICAgIGlmICh3b3Jrc2hlZXREYXRhLnNvcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRpbmdFeHByZXNzaW9uID0gd29ya3NoZWV0RGF0YS5zb3J0O1xuICAgICAgICAgICAgY29uc3Qgc2MgPSBFeGNlbFN0cmluZ3MuZ2V0RXhjZWxDb2x1bW4odmFsdWVzLmluZGV4T2Yoc29ydGluZ0V4cHJlc3Npb24uZmllbGROYW1lKSk7XG4gICAgICAgICAgICBjb25zdCBkaXIgPSBzb3J0aW5nRXhwcmVzc2lvbi5kaXIgLSAxO1xuICAgICAgICAgICAgc29ydFN0cmluZyA9IGA8c29ydFN0YXRlIHJlZj1cIkEyOiR7bGFzdENvbHVtbn1cIj48c29ydENvbmRpdGlvbiBkZXNjZW5kaW5nPVwiJHtkaXJ9XCIgcmVmPVwiJHtzY30xOiR7c2N9MTVcIi8+PC9zb3J0U3RhdGU+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvbGRlci5maWxlKCd0YWJsZTEueG1sJywgRXhjZWxTdHJpbmdzLmdldFRhYmxlc1hNTChkaW1lbnNpb24sIHRhYmxlQ29sdW1ucywgc29ydFN0cmluZykpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXRSZWxzRmlsZSBpbXBsZW1lbnRzIElFeGNlbEZpbGUge1xuICAgIHB1YmxpYyB3cml0ZUVsZW1lbnQoZm9sZGVyOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSkge1xuICAgICAgICBmb2xkZXIuZmlsZSgnc2hlZXQxLnhtbC5yZWxzJywgRXhjZWxTdHJpbmdzLmdldFdvcmtzaGVldFJlbHMoKSk7XG4gICAgfVxufVxuIl19
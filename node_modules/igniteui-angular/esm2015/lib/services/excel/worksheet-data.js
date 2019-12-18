/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportUtilities } from '../exporter-common/export-utilities';
import { WorksheetDataDictionary } from './worksheet-data-dictionary';
/**
 * @hidden
 */
export class WorksheetData {
    /**
     * @param {?} _data
     * @param {?} options
     * @param {?} indexOfLastPinnedColumn
     * @param {?} sort
     * @param {?=} isTreeGridData
     */
    constructor(_data, options, indexOfLastPinnedColumn, sort, isTreeGridData = false) {
        this._data = _data;
        this.options = options;
        this.indexOfLastPinnedColumn = indexOfLastPinnedColumn;
        this.sort = sort;
        this.isTreeGridData = isTreeGridData;
        this.initializeData();
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get columnCount() {
        return this._columnCount;
    }
    /**
     * @return {?}
     */
    get rowCount() {
        return this._rowCount;
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return !this.rowCount || !this._columnCount;
    }
    /**
     * @return {?}
     */
    get keys() {
        return this._keys;
    }
    /**
     * @return {?}
     */
    get isSpecialData() {
        return this._isSpecialData;
    }
    /**
     * @return {?}
     */
    get dataDictionary() {
        return this._dataDictionary;
    }
    /**
     * @private
     * @return {?}
     */
    initializeData() {
        if (!this._data || this._data.length === 0) {
            return;
        }
        /** @type {?} */
        const actualData = this._data.map((item) => item.rowData);
        this._keys = ExportUtilities.getKeysFromData(actualData);
        if (this._keys.length === 0) {
            return;
        }
        this._isSpecialData = ExportUtilities.isSpecialData(actualData);
        this._columnCount = this._keys.length;
        this._rowCount = this._data.length + 1;
        this._dataDictionary = new WorksheetDataDictionary(this._columnCount, this.options.columnWidth);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    WorksheetData.prototype._columnCount;
    /**
     * @type {?}
     * @private
     */
    WorksheetData.prototype._rowCount;
    /**
     * @type {?}
     * @private
     */
    WorksheetData.prototype._dataDictionary;
    /**
     * @type {?}
     * @private
     */
    WorksheetData.prototype._keys;
    /**
     * @type {?}
     * @private
     */
    WorksheetData.prototype._isSpecialData;
    /**
     * @type {?}
     * @private
     */
    WorksheetData.prototype._data;
    /** @type {?} */
    WorksheetData.prototype.options;
    /** @type {?} */
    WorksheetData.prototype.indexOfLastPinnedColumn;
    /** @type {?} */
    WorksheetData.prototype.sort;
    /** @type {?} */
    WorksheetData.prototype.isTreeGridData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4Y2VsL3dvcmtzaGVldC1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFHdEUsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7O0lBT3RCLFlBQW9CLEtBQVksRUFBUyxPQUFnQyxFQUFTLHVCQUF1QixFQUN0RixJQUFTLEVBQVMsaUJBQWlCLEtBQUs7UUFEdkMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQVMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFBO1FBQ3RGLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUN2RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBVyxXQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFXLE9BQU87UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBVyxjQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVPLGNBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDVjs7Y0FFSyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekQsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEcsQ0FBQztDQUNKOzs7Ozs7SUExREcscUNBQTZCOzs7OztJQUM3QixrQ0FBMEI7Ozs7O0lBQzFCLHdDQUFpRDs7Ozs7SUFDakQsOEJBQXdCOzs7OztJQUN4Qix1Q0FBZ0M7Ozs7O0lBRXBCLDhCQUFvQjs7SUFBRSxnQ0FBdUM7O0lBQUUsZ0RBQThCOztJQUM3Riw2QkFBZ0I7O0lBQUUsdUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwb3J0VXRpbGl0aWVzIH0gZnJvbSAnLi4vZXhwb3J0ZXItY29tbW9uL2V4cG9ydC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnMgfSBmcm9tICcuL2V4Y2VsLWV4cG9ydGVyLW9wdGlvbnMnO1xuaW1wb3J0IHsgV29ya3NoZWV0RGF0YURpY3Rpb25hcnkgfSBmcm9tICcuL3dvcmtzaGVldC1kYXRhLWRpY3Rpb25hcnknO1xuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtzaGVldERhdGEge1xuICAgIHByaXZhdGUgX2NvbHVtbkNvdW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcm93Q291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kYXRhRGljdGlvbmFyeTogV29ya3NoZWV0RGF0YURpY3Rpb25hcnk7XG4gICAgcHJpdmF0ZSBfa2V5czogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBfaXNTcGVjaWFsRGF0YTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGE6IGFueVtdLCBwdWJsaWMgb3B0aW9uczogSWd4RXhjZWxFeHBvcnRlck9wdGlvbnMsIHB1YmxpYyBpbmRleE9mTGFzdFBpbm5lZENvbHVtbixcbiAgICAgICAgICAgICAgICBwdWJsaWMgc29ydDogYW55LCBwdWJsaWMgaXNUcmVlR3JpZERhdGEgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVEYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNvbHVtbkNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5Db3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHJvd0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3dDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5yb3dDb3VudCB8fCAhdGhpcy5fY29sdW1uQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBrZXlzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1NwZWNpYWxEYXRhKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTcGVjaWFsRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFEaWN0aW9uYXJ5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YURpY3Rpb25hcnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplRGF0YSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhIHx8IHRoaXMuX2RhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3R1YWxEYXRhID0gdGhpcy5fZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ucm93RGF0YSk7XG5cbiAgICAgICAgdGhpcy5fa2V5cyA9IEV4cG9ydFV0aWxpdGllcy5nZXRLZXlzRnJvbURhdGEoYWN0dWFsRGF0YSk7XG4gICAgICAgIGlmICh0aGlzLl9rZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNTcGVjaWFsRGF0YSA9IEV4cG9ydFV0aWxpdGllcy5pc1NwZWNpYWxEYXRhKGFjdHVhbERhdGEpO1xuXG4gICAgICAgIHRoaXMuX2NvbHVtbkNvdW50ID0gdGhpcy5fa2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3Jvd0NvdW50ID0gdGhpcy5fZGF0YS5sZW5ndGggKyAxO1xuXG4gICAgICAgIHRoaXMuX2RhdGFEaWN0aW9uYXJ5ID0gbmV3IFdvcmtzaGVldERhdGFEaWN0aW9uYXJ5KHRoaXMuX2NvbHVtbkNvdW50LCB0aGlzLm9wdGlvbnMuY29sdW1uV2lkdGgpO1xuICAgIH1cbn1cbiJdfQ==
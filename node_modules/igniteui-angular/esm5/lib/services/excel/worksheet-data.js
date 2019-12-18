/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportUtilities } from '../exporter-common/export-utilities';
import { WorksheetDataDictionary } from './worksheet-data-dictionary';
/**
 * @hidden
 */
var /**
 * @hidden
 */
WorksheetData = /** @class */ (function () {
    function WorksheetData(_data, options, indexOfLastPinnedColumn, sort, isTreeGridData) {
        if (isTreeGridData === void 0) { isTreeGridData = false; }
        this._data = _data;
        this.options = options;
        this.indexOfLastPinnedColumn = indexOfLastPinnedColumn;
        this.sort = sort;
        this.isTreeGridData = isTreeGridData;
        this.initializeData();
    }
    Object.defineProperty(WorksheetData.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksheetData.prototype, "columnCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columnCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksheetData.prototype, "rowCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksheetData.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.rowCount || !this._columnCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksheetData.prototype, "keys", {
        get: /**
         * @return {?}
         */
        function () {
            return this._keys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksheetData.prototype, "isSpecialData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSpecialData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksheetData.prototype, "dataDictionary", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataDictionary;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    WorksheetData.prototype.initializeData = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._data || this._data.length === 0) {
            return;
        }
        /** @type {?} */
        var actualData = this._data.map(function (item) { return item.rowData; });
        this._keys = ExportUtilities.getKeysFromData(actualData);
        if (this._keys.length === 0) {
            return;
        }
        this._isSpecialData = ExportUtilities.isSpecialData(actualData);
        this._columnCount = this._keys.length;
        this._rowCount = this._data.length + 1;
        this._dataDictionary = new WorksheetDataDictionary(this._columnCount, this.options.columnWidth);
    };
    return WorksheetData;
}());
/**
 * @hidden
 */
export { WorksheetData };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4Y2VsL3dvcmtzaGVldC1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFHdEU7Ozs7SUFPSSx1QkFBb0IsS0FBWSxFQUFTLE9BQWdDLEVBQVMsdUJBQXVCLEVBQ3RGLElBQVMsRUFBUyxjQUFzQjtRQUF0QiwrQkFBQSxFQUFBLHNCQUFzQjtRQUR2QyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFBUyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQUE7UUFDdEYsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQVcsK0JBQUk7Ozs7UUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNDQUFXOzs7O1FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsbUNBQVE7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxrQ0FBTzs7OztRQUFsQjtZQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLCtCQUFJOzs7O1FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3Q0FBYTs7OztRQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlDQUFjOzs7O1FBQXpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBOzs7OztJQUVPLHNDQUFjOzs7O0lBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDVjs7WUFFSyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQztRQUV6RCxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDOzs7Ozs7Ozs7O0lBMURHLHFDQUE2Qjs7Ozs7SUFDN0Isa0NBQTBCOzs7OztJQUMxQix3Q0FBaUQ7Ozs7O0lBQ2pELDhCQUF3Qjs7Ozs7SUFDeEIsdUNBQWdDOzs7OztJQUVwQiw4QkFBb0I7O0lBQUUsZ0NBQXVDOztJQUFFLGdEQUE4Qjs7SUFDN0YsNkJBQWdCOztJQUFFLHVDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydFV0aWxpdGllcyB9IGZyb20gJy4uL2V4cG9ydGVyLWNvbW1vbi9leHBvcnQtdXRpbGl0aWVzJztcbmltcG9ydCB7IElneEV4Y2VsRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnLi9leGNlbC1leHBvcnRlci1vcHRpb25zJztcbmltcG9ydCB7IFdvcmtzaGVldERhdGFEaWN0aW9uYXJ5IH0gZnJvbSAnLi93b3Jrc2hlZXQtZGF0YS1kaWN0aW9uYXJ5JztcblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXREYXRhIHtcbiAgICBwcml2YXRlIF9jb2x1bW5Db3VudDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3Jvd0NvdW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZGF0YURpY3Rpb25hcnk6IFdvcmtzaGVldERhdGFEaWN0aW9uYXJ5O1xuICAgIHByaXZhdGUgX2tleXM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgX2lzU3BlY2lhbERhdGE6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhOiBhbnlbXSwgcHVibGljIG9wdGlvbnM6IElneEV4Y2VsRXhwb3J0ZXJPcHRpb25zLCBwdWJsaWMgaW5kZXhPZkxhc3RQaW5uZWRDb2x1bW4sXG4gICAgICAgICAgICAgICAgcHVibGljIHNvcnQ6IGFueSwgcHVibGljIGlzVHJlZUdyaWREYXRhID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjb2x1bW5Db3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByb3dDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm93Q291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMucm93Q291bnQgfHwgIXRoaXMuX2NvbHVtbkNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQga2V5cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNTcGVjaWFsRGF0YSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU3BlY2lhbERhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhRGljdGlvbmFyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFEaWN0aW9uYXJ5O1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZURhdGEoKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0YSB8fCB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0dWFsRGF0YSA9IHRoaXMuX2RhdGEubWFwKChpdGVtKSA9PiBpdGVtLnJvd0RhdGEpO1xuXG4gICAgICAgIHRoaXMuX2tleXMgPSBFeHBvcnRVdGlsaXRpZXMuZ2V0S2V5c0Zyb21EYXRhKGFjdHVhbERhdGEpO1xuICAgICAgICBpZiAodGhpcy5fa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzU3BlY2lhbERhdGEgPSBFeHBvcnRVdGlsaXRpZXMuaXNTcGVjaWFsRGF0YShhY3R1YWxEYXRhKTtcblxuICAgICAgICB0aGlzLl9jb2x1bW5Db3VudCA9IHRoaXMuX2tleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yb3dDb3VudCA9IHRoaXMuX2RhdGEubGVuZ3RoICsgMTtcblxuICAgICAgICB0aGlzLl9kYXRhRGljdGlvbmFyeSA9IG5ldyBXb3Jrc2hlZXREYXRhRGljdGlvbmFyeSh0aGlzLl9jb2x1bW5Db3VudCwgdGhpcy5vcHRpb25zLmNvbHVtbldpZHRoKTtcbiAgICB9XG59XG4iXX0=
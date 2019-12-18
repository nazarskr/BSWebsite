/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportUtilities } from '../exporter-common/export-utilities';
/**
 * @hidden
 */
var WorksheetDataDictionary = /** @class */ (function () {
    function WorksheetDataDictionary(columnCount, columnWidth) {
        this.hasNonStringValues = false;
        this._dictionary = {};
        this._widthsDictionary = {};
        this._counter = 0;
        this.dirtyKeyCollections();
        this._calculateColumnWidth = !columnWidth;
        this._columnWidths = new Array(columnCount);
        this._columnTypeInfo = new Array(columnCount);
        if (!this._calculateColumnWidth) {
            this._columnWidths.fill(columnWidth);
        }
        this.stringsCount = 0;
    }
    Object.defineProperty(WorksheetDataDictionary.prototype, "columnWidths", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columnWidths;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} column
     * @param {?} isHeader
     * @return {?}
     */
    WorksheetDataDictionary.prototype.saveValue = /**
     * @param {?} value
     * @param {?} column
     * @param {?} isHeader
     * @return {?}
     */
    function (value, column, isHeader) {
        if (this._columnTypeInfo[column] === undefined && isHeader === false) {
            this._columnTypeInfo[column] = typeof value === 'string' ||
                typeof value === 'boolean' ||
                value instanceof Date;
        }
        /** @type {?} */
        var sanitizedValue = '';
        /** @type {?} */
        var isSavedAsString = this._columnTypeInfo[column] || isHeader;
        if (isSavedAsString) {
            sanitizedValue = this.sanitizeValue(value);
            if (this._dictionary[sanitizedValue] === undefined) {
                this._dictionary[sanitizedValue] = this._counter++;
                this.dirtyKeyCollections();
            }
            this.stringsCount++;
        }
        else {
            this.hasNonStringValues = true;
        }
        if (this._calculateColumnWidth) {
            /** @type {?} */
            var width = this.getTextWidth(value);
            /** @type {?} */
            var maxWidth = Math.max(this._columnWidths[column] || 0, width);
            this._columnWidths[column] = maxWidth;
        }
        return isSavedAsString ? this.getSanitizedValue(sanitizedValue) : -1;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    WorksheetDataDictionary.prototype.getValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.getSanitizedValue(this.sanitizeValue(value));
    };
    /**
     * @param {?} sanitizedValue
     * @return {?}
     */
    WorksheetDataDictionary.prototype.getSanitizedValue = /**
     * @param {?} sanitizedValue
     * @return {?}
     */
    function (sanitizedValue) {
        return this._dictionary[sanitizedValue];
    };
    /**
     * @return {?}
     */
    WorksheetDataDictionary.prototype.getKeys = /**
     * @return {?}
     */
    function () {
        if (!this._keysAreValid) {
            this._keys = Object.keys(this._dictionary);
            this._keysAreValid = true;
        }
        return this._keys;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    WorksheetDataDictionary.prototype.getTextWidth = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this._widthsDictionary[value] === undefined) {
            /** @type {?} */
            var context = this.getContext();
            /** @type {?} */
            var metrics = context.measureText(value);
            this._widthsDictionary[value] = metrics.width + WorksheetDataDictionary.TEXT_PADDING;
        }
        return this._widthsDictionary[value];
    };
    /**
     * @private
     * @return {?}
     */
    WorksheetDataDictionary.prototype.getContext = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._context) {
            /** @type {?} */
            var canvas = document.createElement('canvas');
            this._context = canvas.getContext('2d');
            this._context.font = WorksheetDataDictionary.DEFAULT_FONT;
        }
        return this._context;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    WorksheetDataDictionary.prototype.sanitizeValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (ExportUtilities.hasValue(value) === false) {
            return '';
        }
        else {
            /** @type {?} */
            var stringValue = String(value);
            return stringValue.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
        }
    };
    /**
     * @private
     * @return {?}
     */
    WorksheetDataDictionary.prototype.dirtyKeyCollections = /**
     * @private
     * @return {?}
     */
    function () {
        this._keysAreValid = false;
    };
    WorksheetDataDictionary.DEFAULT_FONT = '11pt Calibri';
    WorksheetDataDictionary.TEXT_PADDING = 5;
    return WorksheetDataDictionary;
}());
export { WorksheetDataDictionary };
if (false) {
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.DEFAULT_FONT;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.TEXT_PADDING;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._dictionary;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._widthsDictionary;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._sortedKeysByValue;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._sortedKeysByValueAreValid;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._keys;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._keysAreValid;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._counter;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._calculateColumnWidth;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._columnWidths;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._context;
    /**
     * @type {?}
     * @private
     */
    WorksheetDataDictionary.prototype._columnTypeInfo;
    /** @type {?} */
    WorksheetDataDictionary.prototype.hasNonStringValues;
    /** @type {?} */
    WorksheetDataDictionary.prototype.stringsCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWRhdGEtZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhjZWwvd29ya3NoZWV0LWRhdGEtZGljdGlvbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBR3RFO0lBdUJJLGlDQUFZLFdBQW1CLEVBQUUsV0FBbUI7UUFKN0MsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBSzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQVMsV0FBVyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBVSxXQUFXLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFXLGlEQUFZOzs7O1FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7Ozs7O0lBRU0sMkNBQVM7Ozs7OztJQUFoQixVQUFpQixLQUFVLEVBQUUsTUFBYyxFQUFFLFFBQWlCO1FBQzFELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtZQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVE7Z0JBQ3hCLE9BQU8sS0FBSyxLQUFLLFNBQVM7Z0JBQzFCLEtBQUssWUFBWSxJQUFJLENBQUM7U0FDekQ7O1lBRUcsY0FBYyxHQUFHLEVBQUU7O1lBQ2pCLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVE7UUFFaEUsSUFBSSxlQUFlLEVBQUU7WUFDakIsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzlCO1lBRUQsSUFBSSxDQUFDLFlBQVksRUFBRyxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7O2dCQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7O2dCQUNoQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDekM7UUFFRCxPQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUVNLDBDQUFROzs7O0lBQWYsVUFBZ0IsS0FBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFTSxtREFBaUI7Ozs7SUFBeEIsVUFBeUIsY0FBc0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFTSx5Q0FBTzs7O0lBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVPLDhDQUFZOzs7OztJQUFwQixVQUFxQixLQUFVO1FBQzNCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsRUFBRTs7Z0JBQ3ZDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFOztnQkFDM0IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDLFlBQVksQ0FBQztTQUN4RjtRQUVELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8sNENBQVU7Ozs7SUFBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7Z0JBQ1YsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQyxZQUFZLENBQUM7U0FDN0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRU8sK0NBQWE7Ozs7O0lBQXJCLFVBQXNCLEtBQVU7UUFDNUIsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUMzQyxPQUFPLEVBQUUsQ0FBQztTQUNiO2FBQU07O2dCQUNHLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pDLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO2lCQUN4QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztpQkFDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7aUJBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO2lCQUN2QixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxxREFBbUI7Ozs7SUFBM0I7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBL0hjLG9DQUFZLEdBQUcsY0FBYyxDQUFDO0lBQzlCLG9DQUFZLEdBQUcsQ0FBQyxDQUFDO0lBK0hwQyw4QkFBQztDQUFBLEFBaklELElBaUlDO1NBaklZLHVCQUF1Qjs7Ozs7O0lBQ2hDLHFDQUE2Qzs7Ozs7SUFDN0MscUNBQWdDOzs7OztJQUVoQyw4Q0FBeUI7Ozs7O0lBQ3pCLG9EQUErQjs7Ozs7SUFFL0IscURBQXFDOzs7OztJQUNyQyw2REFBNEM7Ozs7O0lBRTVDLHdDQUF3Qjs7Ozs7SUFDeEIsZ0RBQStCOzs7OztJQUUvQiwyQ0FBeUI7Ozs7O0lBQ3pCLHdEQUF1Qzs7Ozs7SUFDdkMsZ0RBQWdDOzs7OztJQUNoQywyQ0FBc0I7Ozs7O0lBRXRCLGtEQUFtQzs7SUFDbkMscURBQWtDOztJQUVsQywrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHBvcnRVdGlsaXRpZXMgfSBmcm9tICcuLi9leHBvcnRlci1jb21tb24vZXhwb3J0LXV0aWxpdGllcyc7XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgV29ya3NoZWV0RGF0YURpY3Rpb25hcnkge1xuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfRk9OVCA9ICcxMXB0IENhbGlicmknO1xuICAgIHByaXZhdGUgc3RhdGljIFRFWFRfUEFERElORyA9IDU7XG5cbiAgICBwcml2YXRlIF9kaWN0aW9uYXJ5OiBhbnk7XG4gICAgcHJpdmF0ZSBfd2lkdGhzRGljdGlvbmFyeTogYW55O1xuXG4gICAgcHJpdmF0ZSBfc29ydGVkS2V5c0J5VmFsdWU6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgX3NvcnRlZEtleXNCeVZhbHVlQXJlVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9rZXlzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIF9rZXlzQXJlVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9jb3VudGVyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ29sdW1uV2lkdGg6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfY29sdW1uV2lkdGhzOiBudW1iZXJbXTtcbiAgICBwcml2YXRlIF9jb250ZXh0OiBhbnk7XG5cbiAgICBwcml2YXRlIF9jb2x1bW5UeXBlSW5mbzogYm9vbGVhbltdO1xuICAgIHB1YmxpYyBoYXNOb25TdHJpbmdWYWx1ZXMgPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdHJpbmdzQ291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbHVtbkNvdW50OiBudW1iZXIsIGNvbHVtbldpZHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGljdGlvbmFyeSA9IHt9O1xuICAgICAgICB0aGlzLl93aWR0aHNEaWN0aW9uYXJ5ID0ge307XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmRpcnR5S2V5Q29sbGVjdGlvbnMoKTtcblxuICAgICAgICB0aGlzLl9jYWxjdWxhdGVDb2x1bW5XaWR0aCA9ICFjb2x1bW5XaWR0aDtcbiAgICAgICAgdGhpcy5fY29sdW1uV2lkdGhzID0gbmV3IEFycmF5PG51bWJlcj4oY29sdW1uQ291bnQpO1xuICAgICAgICB0aGlzLl9jb2x1bW5UeXBlSW5mbyA9IG5ldyBBcnJheTxib29sZWFuPihjb2x1bW5Db3VudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jYWxjdWxhdGVDb2x1bW5XaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uV2lkdGhzLmZpbGwoY29sdW1uV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdHJpbmdzQ291bnQgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29sdW1uV2lkdGhzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uV2lkdGhzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlVmFsdWUodmFsdWU6IGFueSwgY29sdW1uOiBudW1iZXIsIGlzSGVhZGVyOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbHVtblR5cGVJbmZvW2NvbHVtbl0gPT09IHVuZGVmaW5lZCAmJiBpc0hlYWRlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtblR5cGVJbmZvW2NvbHVtbl0gPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzYW5pdGl6ZWRWYWx1ZSA9ICcnO1xuICAgICAgICBjb25zdCBpc1NhdmVkQXNTdHJpbmcgPSB0aGlzLl9jb2x1bW5UeXBlSW5mb1tjb2x1bW5dIHx8IGlzSGVhZGVyO1xuXG4gICAgICAgIGlmIChpc1NhdmVkQXNTdHJpbmcpIHtcbiAgICAgICAgICAgIHNhbml0aXplZFZhbHVlID0gdGhpcy5zYW5pdGl6ZVZhbHVlKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2RpY3Rpb25hcnlbc2FuaXRpemVkVmFsdWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWN0aW9uYXJ5W3Nhbml0aXplZFZhbHVlXSA9IHRoaXMuX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnR5S2V5Q29sbGVjdGlvbnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdHJpbmdzQ291bnQgKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhc05vblN0cmluZ1ZhbHVlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY2FsY3VsYXRlQ29sdW1uV2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRUZXh0V2lkdGgodmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbWF4V2lkdGggPSBNYXRoLm1heCh0aGlzLl9jb2x1bW5XaWR0aHNbY29sdW1uXSB8fCAwLCB3aWR0aCk7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW5XaWR0aHNbY29sdW1uXSA9IG1heFdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzU2F2ZWRBc1N0cmluZyA/IHRoaXMuZ2V0U2FuaXRpemVkVmFsdWUoc2FuaXRpemVkVmFsdWUpIDogLTE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTYW5pdGl6ZWRWYWx1ZSh0aGlzLnNhbml0aXplVmFsdWUodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2FuaXRpemVkVmFsdWUoc2FuaXRpemVkVmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaWN0aW9uYXJ5W3Nhbml0aXplZFZhbHVlXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0S2V5cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGlmICghdGhpcy5fa2V5c0FyZVZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlzID0gT2JqZWN0LmtleXModGhpcy5fZGljdGlvbmFyeSk7XG4gICAgICAgICAgICB0aGlzLl9rZXlzQXJlVmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUZXh0V2lkdGgodmFsdWU6IGFueSk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl93aWR0aHNEaWN0aW9uYXJ5W3ZhbHVlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl93aWR0aHNEaWN0aW9uYXJ5W3ZhbHVlXSA9IG1ldHJpY3Mud2lkdGggKyBXb3Jrc2hlZXREYXRhRGljdGlvbmFyeS5URVhUX1BBRERJTkc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGhzRGljdGlvbmFyeVt2YWx1ZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb250ZXh0KCk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5fY29udGV4dCkge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LmZvbnQgPSBXb3Jrc2hlZXREYXRhRGljdGlvbmFyeS5ERUZBVUxUX0ZPTlQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhbml0aXplVmFsdWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChFeHBvcnRVdGlsaXRpZXMuaGFzVmFsdWUodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ1ZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRpcnR5S2V5Q29sbGVjdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2tleXNBcmVWYWxpZCA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==
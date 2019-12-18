/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportUtilities } from '../exporter-common/export-utilities';
/**
 * @hidden
 */
export class WorksheetDataDictionary {
    /**
     * @param {?} columnCount
     * @param {?} columnWidth
     */
    constructor(columnCount, columnWidth) {
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
    /**
     * @return {?}
     */
    get columnWidths() {
        return this._columnWidths;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @param {?} isHeader
     * @return {?}
     */
    saveValue(value, column, isHeader) {
        if (this._columnTypeInfo[column] === undefined && isHeader === false) {
            this._columnTypeInfo[column] = typeof value === 'string' ||
                typeof value === 'boolean' ||
                value instanceof Date;
        }
        /** @type {?} */
        let sanitizedValue = '';
        /** @type {?} */
        const isSavedAsString = this._columnTypeInfo[column] || isHeader;
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
            const width = this.getTextWidth(value);
            /** @type {?} */
            const maxWidth = Math.max(this._columnWidths[column] || 0, width);
            this._columnWidths[column] = maxWidth;
        }
        return isSavedAsString ? this.getSanitizedValue(sanitizedValue) : -1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getValue(value) {
        return this.getSanitizedValue(this.sanitizeValue(value));
    }
    /**
     * @param {?} sanitizedValue
     * @return {?}
     */
    getSanitizedValue(sanitizedValue) {
        return this._dictionary[sanitizedValue];
    }
    /**
     * @return {?}
     */
    getKeys() {
        if (!this._keysAreValid) {
            this._keys = Object.keys(this._dictionary);
            this._keysAreValid = true;
        }
        return this._keys;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getTextWidth(value) {
        if (this._widthsDictionary[value] === undefined) {
            /** @type {?} */
            const context = this.getContext();
            /** @type {?} */
            const metrics = context.measureText(value);
            this._widthsDictionary[value] = metrics.width + WorksheetDataDictionary.TEXT_PADDING;
        }
        return this._widthsDictionary[value];
    }
    /**
     * @private
     * @return {?}
     */
    getContext() {
        if (!this._context) {
            /** @type {?} */
            const canvas = document.createElement('canvas');
            this._context = canvas.getContext('2d');
            this._context.font = WorksheetDataDictionary.DEFAULT_FONT;
        }
        return this._context;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    sanitizeValue(value) {
        if (ExportUtilities.hasValue(value) === false) {
            return '';
        }
        else {
            /** @type {?} */
            const stringValue = String(value);
            return stringValue.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
        }
    }
    /**
     * @private
     * @return {?}
     */
    dirtyKeyCollections() {
        this._keysAreValid = false;
    }
}
WorksheetDataDictionary.DEFAULT_FONT = '11pt Calibri';
WorksheetDataDictionary.TEXT_PADDING = 5;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWRhdGEtZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhjZWwvd29ya3NoZWV0LWRhdGEtZGljdGlvbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBR3RFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBdUJoQyxZQUFZLFdBQW1CLEVBQUUsV0FBbUI7UUFKN0MsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBSzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQVMsV0FBVyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBVSxXQUFXLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQVcsWUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVNLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBYyxFQUFFLFFBQWlCO1FBQzFELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtZQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVE7Z0JBQ3hCLE9BQU8sS0FBSyxLQUFLLFNBQVM7Z0JBQzFCLEtBQUssWUFBWSxJQUFJLENBQUM7U0FDekQ7O1lBRUcsY0FBYyxHQUFHLEVBQUU7O2NBQ2pCLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVE7UUFFaEUsSUFBSSxlQUFlLEVBQUU7WUFDakIsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzlCO1lBRUQsSUFBSSxDQUFDLFlBQVksRUFBRyxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7O2tCQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7O2tCQUNoQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDekM7UUFFRCxPQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLGNBQXNCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRU0sT0FBTztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQVU7UUFDM0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxFQUFFOztrQkFDdkMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7O2tCQUMzQixPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsdUJBQXVCLENBQUMsWUFBWSxDQUFDO1NBQ3hGO1FBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7O2tCQUNWLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUMsWUFBWSxDQUFDO1NBQzdEO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxLQUFVO1FBQzVCLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDM0MsT0FBTyxFQUFFLENBQUM7U0FDYjthQUFNOztrQkFDRyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQyxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztpQkFDeEIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7aUJBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2lCQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztpQkFDdkIsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7Ozs7O0lBRU8sbUJBQW1CO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7O0FBL0hjLG9DQUFZLEdBQUcsY0FBYyxDQUFDO0FBQzlCLG9DQUFZLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7SUFEaEMscUNBQTZDOzs7OztJQUM3QyxxQ0FBZ0M7Ozs7O0lBRWhDLDhDQUF5Qjs7Ozs7SUFDekIsb0RBQStCOzs7OztJQUUvQixxREFBcUM7Ozs7O0lBQ3JDLDZEQUE0Qzs7Ozs7SUFFNUMsd0NBQXdCOzs7OztJQUN4QixnREFBK0I7Ozs7O0lBRS9CLDJDQUF5Qjs7Ozs7SUFDekIsd0RBQXVDOzs7OztJQUN2QyxnREFBZ0M7Ozs7O0lBQ2hDLDJDQUFzQjs7Ozs7SUFFdEIsa0RBQW1DOztJQUNuQyxxREFBa0M7O0lBRWxDLCtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydFV0aWxpdGllcyB9IGZyb20gJy4uL2V4cG9ydGVyLWNvbW1vbi9leHBvcnQtdXRpbGl0aWVzJztcblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXREYXRhRGljdGlvbmFyeSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9GT05UID0gJzExcHQgQ2FsaWJyaSc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgVEVYVF9QQURESU5HID0gNTtcblxuICAgIHByaXZhdGUgX2RpY3Rpb25hcnk6IGFueTtcbiAgICBwcml2YXRlIF93aWR0aHNEaWN0aW9uYXJ5OiBhbnk7XG5cbiAgICBwcml2YXRlIF9zb3J0ZWRLZXlzQnlWYWx1ZTogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBfc29ydGVkS2V5c0J5VmFsdWVBcmVWYWxpZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX2tleXM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgX2tleXNBcmVWYWxpZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jYWxjdWxhdGVDb2x1bW5XaWR0aDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9jb2x1bW5XaWR0aHM6IG51bWJlcltdO1xuICAgIHByaXZhdGUgX2NvbnRleHQ6IGFueTtcblxuICAgIHByaXZhdGUgX2NvbHVtblR5cGVJbmZvOiBib29sZWFuW107XG4gICAgcHVibGljIGhhc05vblN0cmluZ1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0cmluZ3NDb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY29sdW1uQ291bnQ6IG51bWJlciwgY29sdW1uV2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kaWN0aW9uYXJ5ID0ge307XG4gICAgICAgIHRoaXMuX3dpZHRoc0RpY3Rpb25hcnkgPSB7fTtcbiAgICAgICAgdGhpcy5fY291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuZGlydHlLZXlDb2xsZWN0aW9ucygpO1xuXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUNvbHVtbldpZHRoID0gIWNvbHVtbldpZHRoO1xuICAgICAgICB0aGlzLl9jb2x1bW5XaWR0aHMgPSBuZXcgQXJyYXk8bnVtYmVyPihjb2x1bW5Db3VudCk7XG4gICAgICAgIHRoaXMuX2NvbHVtblR5cGVJbmZvID0gbmV3IEFycmF5PGJvb2xlYW4+KGNvbHVtbkNvdW50KTtcblxuICAgICAgICBpZiAoIXRoaXMuX2NhbGN1bGF0ZUNvbHVtbldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW5XaWR0aHMuZmlsbChjb2x1bW5XaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0cmluZ3NDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjb2x1bW5XaWR0aHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5XaWR0aHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVWYWx1ZSh2YWx1ZTogYW55LCBjb2x1bW46IG51bWJlciwgaXNIZWFkZXI6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fY29sdW1uVHlwZUluZm9bY29sdW1uXSA9PT0gdW5kZWZpbmVkICYmIGlzSGVhZGVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uVHlwZUluZm9bY29sdW1uXSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNhbml0aXplZFZhbHVlID0gJyc7XG4gICAgICAgIGNvbnN0IGlzU2F2ZWRBc1N0cmluZyA9IHRoaXMuX2NvbHVtblR5cGVJbmZvW2NvbHVtbl0gfHwgaXNIZWFkZXI7XG5cbiAgICAgICAgaWYgKGlzU2F2ZWRBc1N0cmluZykge1xuICAgICAgICAgICAgc2FuaXRpemVkVmFsdWUgPSB0aGlzLnNhbml0aXplVmFsdWUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZGljdGlvbmFyeVtzYW5pdGl6ZWRWYWx1ZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpY3Rpb25hcnlbc2FuaXRpemVkVmFsdWVdID0gdGhpcy5fY291bnRlcisrO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlydHlLZXlDb2xsZWN0aW9ucygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0cmluZ3NDb3VudCArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzTm9uU3RyaW5nVmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jYWxjdWxhdGVDb2x1bW5XaWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFRleHRXaWR0aCh2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBtYXhXaWR0aCA9IE1hdGgubWF4KHRoaXMuX2NvbHVtbldpZHRoc1tjb2x1bW5dIHx8IDAsIHdpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbldpZHRoc1tjb2x1bW5dID0gbWF4V2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNTYXZlZEFzU3RyaW5nID8gdGhpcy5nZXRTYW5pdGl6ZWRWYWx1ZShzYW5pdGl6ZWRWYWx1ZSkgOiAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VmFsdWUodmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNhbml0aXplZFZhbHVlKHRoaXMuc2FuaXRpemVWYWx1ZSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTYW5pdGl6ZWRWYWx1ZShzYW5pdGl6ZWRWYWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpY3Rpb25hcnlbc2FuaXRpemVkVmFsdWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRLZXlzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgaWYgKCF0aGlzLl9rZXlzQXJlVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9kaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgIHRoaXMuX2tleXNBcmVWYWxpZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRleHRXaWR0aCh2YWx1ZTogYW55KTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoc0RpY3Rpb25hcnlbdmFsdWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoc0RpY3Rpb25hcnlbdmFsdWVdID0gbWV0cmljcy53aWR0aCArIFdvcmtzaGVldERhdGFEaWN0aW9uYXJ5LlRFWFRfUEFERElORztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aHNEaWN0aW9uYXJ5W3ZhbHVlXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbnRleHQoKTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZm9udCA9IFdvcmtzaGVldERhdGFEaWN0aW9uYXJ5LkRFRkFVTFRfRk9OVDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2FuaXRpemVWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKEV4cG9ydFV0aWxpdGllcy5oYXNWYWx1ZSh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nVmFsdWUucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGlydHlLZXlDb2xsZWN0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fa2V5c0FyZVZhbGlkID0gZmFsc2U7XG4gICAgfVxufVxuIl19
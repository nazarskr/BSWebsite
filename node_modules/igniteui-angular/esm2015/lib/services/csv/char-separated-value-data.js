/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportUtilities } from '../exporter-common/export-utilities';
/**
 * @hidden
 */
export class CharSeparatedValueData {
    /**
     * @param {?} _data
     * @param {?} valueDelimiter
     */
    constructor(_data, valueDelimiter) {
        this._data = _data;
        this._headerRecord = '';
        this._dataRecords = '';
        this._eor = '\r\n';
        this._escapeCharacters = ['\r', '\n', '\r\n'];
        this._delimiterLength = 1;
        this._isSpecialData = false;
        this.setDelimiter(valueDelimiter);
    }
    /**
     * @return {?}
     */
    prepareData() {
        if (!this._data || this._data.length === 0) {
            return '';
        }
        /** @type {?} */
        const keys = ExportUtilities.getKeysFromData(this._data);
        if (keys.length === 0) {
            return '';
        }
        this._isSpecialData = ExportUtilities.isSpecialData(this._data);
        this._escapeCharacters.push(this._delimiter);
        this._headerRecord = this.processHeaderRecord(keys, this._escapeCharacters);
        this._dataRecords = this.processDataRecords(this._data, keys, this._escapeCharacters);
        return this._headerRecord + this._dataRecords;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} escapeChars
     * @return {?}
     */
    processField(value, escapeChars) {
        /** @type {?} */
        let safeValue = ExportUtilities.hasValue(value) ? String(value) : '';
        if (escapeChars.some((v) => safeValue.includes(v))) {
            safeValue = `"${safeValue}"`;
        }
        return safeValue + this._delimiter;
    }
    /**
     * @private
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    processHeaderRecord(keys, escapeChars) {
        /** @type {?} */
        let recordData = '';
        for (const keyName of keys) {
            recordData += this.processField(keyName, this._escapeCharacters);
        }
        return recordData.slice(0, -this._delimiterLength) + this._eor;
    }
    /**
     * @private
     * @param {?} record
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    processRecord(record, keys, escapeChars) {
        /** @type {?} */
        let recordData = '';
        for (const keyName of keys) {
            /** @type {?} */
            const value = (record[keyName] !== undefined) ? record[keyName] : this._isSpecialData ? record : '';
            recordData += this.processField(value, this._escapeCharacters);
        }
        return recordData.slice(0, -this._delimiterLength) + this._eor;
    }
    /**
     * @private
     * @param {?} currentData
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    processDataRecords(currentData, keys, escapeChars) {
        /** @type {?} */
        let dataRecords = '';
        for (const row of currentData) {
            dataRecords += this.processRecord(row, keys, escapeChars);
        }
        return dataRecords;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setDelimiter(value) {
        this._delimiter = value;
        this._delimiterLength = value.length;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CharSeparatedValueData.prototype._headerRecord;
    /**
     * @type {?}
     * @private
     */
    CharSeparatedValueData.prototype._dataRecords;
    /**
     * @type {?}
     * @private
     */
    CharSeparatedValueData.prototype._eor;
    /**
     * @type {?}
     * @private
     */
    CharSeparatedValueData.prototype._delimiter;
    /**
     * @type {?}
     * @private
     */
    CharSeparatedValueData.prototype._escapeCharacters;
    /**
     * @type {?}
     * @private
     */
    CharSeparatedValueData.prototype._delimiterLength;
    /**
     * @type {?}
     * @private
     */
    CharSeparatedValueData.prototype._isSpecialData;
    /**
     * @type {?}
     * @private
     */
    CharSeparatedValueData.prototype._data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhci1zZXBhcmF0ZWQtdmFsdWUtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY3N2L2NoYXItc2VwYXJhdGVkLXZhbHVlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUt0RSxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQVMvQixZQUFvQixLQUFZLEVBQUUsY0FBc0I7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQVJ4QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBRWQsc0JBQWlCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUczQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sRUFBRSxDQUFDO1NBQ2I7O2NBRUssSUFBSSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFD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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHBvcnRVdGlsaXRpZXMgfSBmcm9tICcuLi9leHBvcnRlci1jb21tb24vZXhwb3J0LXV0aWxpdGllcyc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ2hhclNlcGFyYXRlZFZhbHVlRGF0YSB7XG4gICAgcHJpdmF0ZSBfaGVhZGVyUmVjb3JkID0gJyc7XG4gICAgcHJpdmF0ZSBfZGF0YVJlY29yZHMgPSAnJztcbiAgICBwcml2YXRlIF9lb3IgPSAnXFxyXFxuJztcbiAgICBwcml2YXRlIF9kZWxpbWl0ZXI7XG4gICAgcHJpdmF0ZSBfZXNjYXBlQ2hhcmFjdGVycyA9IFsnXFxyJywgJ1xcbicsICdcXHJcXG4nXTtcbiAgICBwcml2YXRlIF9kZWxpbWl0ZXJMZW5ndGggPSAxO1xuICAgIHByaXZhdGUgX2lzU3BlY2lhbERhdGEgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGE6IGFueVtdLCB2YWx1ZURlbGltaXRlcjogc3RyaW5nKSAge1xuICAgICAgICB0aGlzLnNldERlbGltaXRlcih2YWx1ZURlbGltaXRlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHByZXBhcmVEYXRhKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGEgfHwgdGhpcy5fZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleXMgPSBFeHBvcnRVdGlsaXRpZXMuZ2V0S2V5c0Zyb21EYXRhKHRoaXMuX2RhdGEpO1xuXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNTcGVjaWFsRGF0YSA9IEV4cG9ydFV0aWxpdGllcy5pc1NwZWNpYWxEYXRhKHRoaXMuX2RhdGEpO1xuICAgICAgICB0aGlzLl9lc2NhcGVDaGFyYWN0ZXJzLnB1c2godGhpcy5fZGVsaW1pdGVyKTtcblxuICAgICAgICB0aGlzLl9oZWFkZXJSZWNvcmQgPSB0aGlzLnByb2Nlc3NIZWFkZXJSZWNvcmQoa2V5cywgdGhpcy5fZXNjYXBlQ2hhcmFjdGVycyk7XG4gICAgICAgIHRoaXMuX2RhdGFSZWNvcmRzID0gdGhpcy5wcm9jZXNzRGF0YVJlY29yZHModGhpcy5fZGF0YSwga2V5cywgdGhpcy5fZXNjYXBlQ2hhcmFjdGVycyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlclJlY29yZCArIHRoaXMuX2RhdGFSZWNvcmRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJvY2Vzc0ZpZWxkKHZhbHVlLCBlc2NhcGVDaGFycyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBzYWZlVmFsdWUgPSBFeHBvcnRVdGlsaXRpZXMuaGFzVmFsdWUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICcnO1xuICAgICAgICBpZiAoZXNjYXBlQ2hhcnMuc29tZSgodikgPT4gc2FmZVZhbHVlLmluY2x1ZGVzKHYpKSkge1xuICAgICAgICAgICAgc2FmZVZhbHVlID0gYFwiJHtzYWZlVmFsdWV9XCJgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzYWZlVmFsdWUgKyB0aGlzLl9kZWxpbWl0ZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcm9jZXNzSGVhZGVyUmVjb3JkKGtleXMsIGVzY2FwZUNoYXJzKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlY29yZERhdGEgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBrZXlOYW1lIG9mIGtleXMpIHtcbiAgICAgICAgICAgIHJlY29yZERhdGEgKz0gdGhpcy5wcm9jZXNzRmllbGQoa2V5TmFtZSwgdGhpcy5fZXNjYXBlQ2hhcmFjdGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVjb3JkRGF0YS5zbGljZSgwLCAtdGhpcy5fZGVsaW1pdGVyTGVuZ3RoKSArIHRoaXMuX2VvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByb2Nlc3NSZWNvcmQocmVjb3JkLCBrZXlzLCBlc2NhcGVDaGFycyk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZWNvcmREYXRhID0gJyc7XG4gICAgICAgIGZvciAoY29uc3Qga2V5TmFtZSBvZiBrZXlzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHJlY29yZFtrZXlOYW1lXSAhPT0gdW5kZWZpbmVkKSA/IHJlY29yZFtrZXlOYW1lXSA6IHRoaXMuX2lzU3BlY2lhbERhdGEgPyByZWNvcmQgOiAnJztcbiAgICAgICAgICAgIHJlY29yZERhdGEgKz0gdGhpcy5wcm9jZXNzRmllbGQodmFsdWUsIHRoaXMuX2VzY2FwZUNoYXJhY3RlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZERhdGEuc2xpY2UoMCwgLXRoaXMuX2RlbGltaXRlckxlbmd0aCkgKyB0aGlzLl9lb3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcm9jZXNzRGF0YVJlY29yZHMoY3VycmVudERhdGEsIGtleXMsIGVzY2FwZUNoYXJzKSB7XG4gICAgICAgIGxldCBkYXRhUmVjb3JkcyA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiBjdXJyZW50RGF0YSkge1xuICAgICAgICAgICAgZGF0YVJlY29yZHMgKz0gdGhpcy5wcm9jZXNzUmVjb3JkKHJvdywga2V5cywgZXNjYXBlQ2hhcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFSZWNvcmRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVsaW1pdGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2RlbGltaXRlciA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9kZWxpbWl0ZXJMZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ExportUtilities } from '../exporter-common/export-utilities';
/**
 * @hidden
 */
var /**
 * @hidden
 */
CharSeparatedValueData = /** @class */ (function () {
    function CharSeparatedValueData(_data, valueDelimiter) {
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
    CharSeparatedValueData.prototype.prepareData = /**
     * @return {?}
     */
    function () {
        if (!this._data || this._data.length === 0) {
            return '';
        }
        /** @type {?} */
        var keys = ExportUtilities.getKeysFromData(this._data);
        if (keys.length === 0) {
            return '';
        }
        this._isSpecialData = ExportUtilities.isSpecialData(this._data);
        this._escapeCharacters.push(this._delimiter);
        this._headerRecord = this.processHeaderRecord(keys, this._escapeCharacters);
        this._dataRecords = this.processDataRecords(this._data, keys, this._escapeCharacters);
        return this._headerRecord + this._dataRecords;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} escapeChars
     * @return {?}
     */
    CharSeparatedValueData.prototype.processField = /**
     * @private
     * @param {?} value
     * @param {?} escapeChars
     * @return {?}
     */
    function (value, escapeChars) {
        /** @type {?} */
        var safeValue = ExportUtilities.hasValue(value) ? String(value) : '';
        if (escapeChars.some(function (v) { return safeValue.includes(v); })) {
            safeValue = "\"" + safeValue + "\"";
        }
        return safeValue + this._delimiter;
    };
    /**
     * @private
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    CharSeparatedValueData.prototype.processHeaderRecord = /**
     * @private
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    function (keys, escapeChars) {
        var e_1, _a;
        /** @type {?} */
        var recordData = '';
        try {
            for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var keyName = keys_1_1.value;
                recordData += this.processField(keyName, this._escapeCharacters);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return recordData.slice(0, -this._delimiterLength) + this._eor;
    };
    /**
     * @private
     * @param {?} record
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    CharSeparatedValueData.prototype.processRecord = /**
     * @private
     * @param {?} record
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    function (record, keys, escapeChars) {
        var e_2, _a;
        /** @type {?} */
        var recordData = '';
        try {
            for (var keys_2 = tslib_1.__values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var keyName = keys_2_1.value;
                /** @type {?} */
                var value = (record[keyName] !== undefined) ? record[keyName] : this._isSpecialData ? record : '';
                recordData += this.processField(value, this._escapeCharacters);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_a = keys_2.return)) _a.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return recordData.slice(0, -this._delimiterLength) + this._eor;
    };
    /**
     * @private
     * @param {?} currentData
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    CharSeparatedValueData.prototype.processDataRecords = /**
     * @private
     * @param {?} currentData
     * @param {?} keys
     * @param {?} escapeChars
     * @return {?}
     */
    function (currentData, keys, escapeChars) {
        var e_3, _a;
        /** @type {?} */
        var dataRecords = '';
        try {
            for (var currentData_1 = tslib_1.__values(currentData), currentData_1_1 = currentData_1.next(); !currentData_1_1.done; currentData_1_1 = currentData_1.next()) {
                var row = currentData_1_1.value;
                dataRecords += this.processRecord(row, keys, escapeChars);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (currentData_1_1 && !currentData_1_1.done && (_a = currentData_1.return)) _a.call(currentData_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return dataRecords;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CharSeparatedValueData.prototype.setDelimiter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._delimiter = value;
        this._delimiterLength = value.length;
    };
    return CharSeparatedValueData;
}());
/**
 * @hidden
 */
export { CharSeparatedValueData };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhci1zZXBhcmF0ZWQtdmFsdWUtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY3N2L2NoYXItc2VwYXJhdGVkLXZhbHVlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7QUFLdEU7Ozs7SUFTSSxnQ0FBb0IsS0FBWSxFQUFFLGNBQXNCO1FBQXBDLFVBQUssR0FBTCxLQUFLLENBQU87UUFSeEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUVkLHNCQUFpQixHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRU0sNENBQVc7OztJQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QyxPQUFPLEVBQUUsQ0FBQztTQUNiOztZQUVLLElBQUksR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENB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QUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUExRUQsSUEwRUM7Ozs7Ozs7Ozs7SUF6RUcsK0NBQTJCOzs7OztJQUMzQiw4Q0FBMEI7Ozs7O0lBQzFCLHNDQUFzQjs7Ozs7SUFDdEIsNENBQW1COzs7OztJQUNuQixtREFBaUQ7Ozs7O0lBQ2pELGtEQUE2Qjs7Ozs7SUFDN0IsZ0RBQStCOzs7OztJQUVuQix1Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHBvcnRVdGlsaXRpZXMgfSBmcm9tICcuLi9leHBvcnRlci1jb21tb24vZXhwb3J0LXV0aWxpdGllcyc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ2hhclNlcGFyYXRlZFZhbHVlRGF0YSB7XG4gICAgcHJpdmF0ZSBfaGVhZGVyUmVjb3JkID0gJyc7XG4gICAgcHJpdmF0ZSBfZGF0YVJlY29yZHMgPSAnJztcbiAgICBwcml2YXRlIF9lb3IgPSAnXFxyXFxuJztcbiAgICBwcml2YXRlIF9kZWxpbWl0ZXI7XG4gICAgcHJpdmF0ZSBfZXNjYXBlQ2hhcmFjdGVycyA9IFsnXFxyJywgJ1xcbicsICdcXHJcXG4nXTtcbiAgICBwcml2YXRlIF9kZWxpbWl0ZXJMZW5ndGggPSAxO1xuICAgIHByaXZhdGUgX2lzU3BlY2lhbERhdGEgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGE6IGFueVtdLCB2YWx1ZURlbGltaXRlcjogc3RyaW5nKSAge1xuICAgICAgICB0aGlzLnNldERlbGltaXRlcih2YWx1ZURlbGltaXRlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHByZXBhcmVEYXRhKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGEgfHwgdGhpcy5fZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleXMgPSBFeHBvcnRVdGlsaXRpZXMuZ2V0S2V5c0Zyb21EYXRhKHRoaXMuX2RhdGEpO1xuXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNTcGVjaWFsRGF0YSA9IEV4cG9ydFV0aWxpdGllcy5pc1NwZWNpYWxEYXRhKHRoaXMuX2RhdGEpO1xuICAgICAgICB0aGlzLl9lc2NhcGVDaGFyYWN0ZXJzLnB1c2godGhpcy5fZGVsaW1pdGVyKTtcblxuICAgICAgICB0aGlzLl9oZWFkZXJSZWNvcmQgPSB0aGlzLnByb2Nlc3NIZWFkZXJSZWNvcmQoa2V5cywgdGhpcy5fZXNjYXBlQ2hhcmFjdGVycyk7XG4gICAgICAgIHRoaXMuX2RhdGFSZWNvcmRzID0gdGhpcy5wcm9jZXNzRGF0YVJlY29yZHModGhpcy5fZGF0YSwga2V5cywgdGhpcy5fZXNjYXBlQ2hhcmFjdGVycyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlclJlY29yZCArIHRoaXMuX2RhdGFSZWNvcmRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJvY2Vzc0ZpZWxkKHZhbHVlLCBlc2NhcGVDaGFycyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBzYWZlVmFsdWUgPSBFeHBvcnRVdGlsaXRpZXMuaGFzVmFsdWUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICcnO1xuICAgICAgICBpZiAoZXNjYXBlQ2hhcnMuc29tZSgodikgPT4gc2FmZVZhbHVlLmluY2x1ZGVzKHYpKSkge1xuICAgICAgICAgICAgc2FmZVZhbHVlID0gYFwiJHtzYWZlVmFsdWV9XCJgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzYWZlVmFsdWUgKyB0aGlzLl9kZWxpbWl0ZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcm9jZXNzSGVhZGVyUmVjb3JkKGtleXMsIGVzY2FwZUNoYXJzKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlY29yZERhdGEgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBrZXlOYW1lIG9mIGtleXMpIHtcbiAgICAgICAgICAgIHJlY29yZERhdGEgKz0gdGhpcy5wcm9jZXNzRmllbGQoa2V5TmFtZSwgdGhpcy5fZXNjYXBlQ2hhcmFjdGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVjb3JkRGF0YS5zbGljZSgwLCAtdGhpcy5fZGVsaW1pdGVyTGVuZ3RoKSArIHRoaXMuX2VvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByb2Nlc3NSZWNvcmQocmVjb3JkLCBrZXlzLCBlc2NhcGVDaGFycyk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZWNvcmREYXRhID0gJyc7XG4gICAgICAgIGZvciAoY29uc3Qga2V5TmFtZSBvZiBrZXlzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHJlY29yZFtrZXlOYW1lXSAhPT0gdW5kZWZpbmVkKSA/IHJlY29yZFtrZXlOYW1lXSA6IHRoaXMuX2lzU3BlY2lhbERhdGEgPyByZWNvcmQgOiAnJztcbiAgICAgICAgICAgIHJlY29yZERhdGEgKz0gdGhpcy5wcm9jZXNzRmllbGQodmFsdWUsIHRoaXMuX2VzY2FwZUNoYXJhY3RlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZERhdGEuc2xpY2UoMCwgLXRoaXMuX2RlbGltaXRlckxlbmd0aCkgKyB0aGlzLl9lb3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcm9jZXNzRGF0YVJlY29yZHMoY3VycmVudERhdGEsIGtleXMsIGVzY2FwZUNoYXJzKSB7XG4gICAgICAgIGxldCBkYXRhUmVjb3JkcyA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiBjdXJyZW50RGF0YSkge1xuICAgICAgICAgICAgZGF0YVJlY29yZHMgKz0gdGhpcy5wcm9jZXNzUmVjb3JkKHJvdywga2V5cywgZXNjYXBlQ2hhcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFSZWNvcmRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVsaW1pdGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2RlbGltaXRlciA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9kZWxpbWl0ZXJMZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgfVxufVxuIl19
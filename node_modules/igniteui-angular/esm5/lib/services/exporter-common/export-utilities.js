/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
var /**
 * @hidden
 */
ExportUtilities = /** @class */ (function () {
    function ExportUtilities() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ExportUtilities.getKeysFromData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var length = data.length;
        if (length === 0) {
            return [];
        }
        /** @type {?} */
        var dataEntry = data[0];
        /** @type {?} */
        var dataEntryMiddle = data[Math.floor(length / 2)];
        /** @type {?} */
        var dataEntryLast = data[length - 1];
        /** @type {?} */
        var keys1 = Object.keys(dataEntry);
        /** @type {?} */
        var keys2 = Object.keys(dataEntryMiddle);
        /** @type {?} */
        var keys3 = Object.keys(dataEntryLast);
        /** @type {?} */
        var keys = new Set(keys1.concat(keys2).concat(keys3));
        return !ExportUtilities.isSpecialData(data) ? Array.from(keys) : ['Column 1'];
    };
    /**
     * @param {?} blob
     * @param {?} fileName
     * @return {?}
     */
    ExportUtilities.saveBlobToFile = /**
     * @param {?} blob
     * @param {?} fileName
     * @return {?}
     */
    function (blob, fileName) {
        /** @type {?} */
        var a = document.createElement('a');
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        }
        else {
            /** @type {?} */
            var url = window.URL.createObjectURL(blob);
            a.download = fileName;
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }
    };
    /**
     * @param {?} s
     * @return {?}
     */
    ExportUtilities.stringToArrayBuffer = /**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        /** @type {?} */
        var buf = new ArrayBuffer(s.length);
        /** @type {?} */
        var view = new Uint8Array(buf);
        for (var i = 0; i !== s.length; ++i) {
            /* tslint:disable no-bitwise */
            view[i] = s.charCodeAt(i) & 0xFF;
            /* tslint:enable no-bitwise */
        }
        return buf;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ExportUtilities.isSpecialData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var dataEntry = data[0];
        return (typeof dataEntry === 'string' ||
            typeof dataEntry === 'number' ||
            dataEntry instanceof Date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ExportUtilities.hasValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && value !== null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ExportUtilities.isNullOrWhitespaces = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === undefined || value === null || !value.trim();
    };
    return ExportUtilities;
}());
/**
 * @hidden
 */
export { ExportUtilities };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LXV0aWxpdGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXItY29tbW9uL2V4cG9ydC11dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7SUE2REEsQ0FBQzs7Ozs7SUE1RGlCLCtCQUFlOzs7O0lBQTdCLFVBQThCLElBQVc7O1lBQy9CLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMxQixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNiOztZQUVLLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUNuQixlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztZQUM5QyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1lBRWhDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFDOUIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDOztZQUNwQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O1lBRWxDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RCxPQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxVQUFVLENBQUUsQ0FBQztJQUNwRixDQUFDOzs7Ozs7SUFFYSw4QkFBYzs7Ozs7SUFBNUIsVUFBNkIsSUFBVSxFQUFFLFFBQVE7O1lBQ3ZDLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUNyQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2RCxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNyRDthQUFNOztnQkFDRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXRCLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDOzs7OztJQUVhLG1DQUFtQjs7OztJQUFqQyxVQUFrQyxDQUFTOztZQUNqQyxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFDL0IsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNqQywrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLDhCQUE4QjtTQUNqQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFYSw2QkFBYTs7OztJQUEzQixVQUE0QixJQUFXOztZQUM3QixTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUTtZQUM3QixPQUFPLFNBQVMsS0FBSyxRQUFRO1lBQzdCLFNBQVMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVhLHdCQUFROzs7O0lBQXRCLFVBQXVCLEtBQVU7UUFDN0IsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFYSxtQ0FBbUI7Ozs7SUFBakMsVUFBa0MsS0FBYTtRQUMzQyxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4cG9ydFV0aWxpdGllcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXRLZXlzRnJvbURhdGEoZGF0YTogYW55W10pIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGFFbnRyeSA9IGRhdGFbMF07XG4gICAgICAgIGNvbnN0IGRhdGFFbnRyeU1pZGRsZSA9IGRhdGFbTWF0aC5mbG9vcihsZW5ndGggLyAyKV07XG4gICAgICAgIGNvbnN0IGRhdGFFbnRyeUxhc3QgPSBkYXRhW2xlbmd0aCAtIDFdO1xuXG4gICAgICAgIGNvbnN0IGtleXMxID0gT2JqZWN0LmtleXMoZGF0YUVudHJ5KTtcbiAgICAgICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhkYXRhRW50cnlNaWRkbGUpO1xuICAgICAgICBjb25zdCBrZXlzMyA9IE9iamVjdC5rZXlzKGRhdGFFbnRyeUxhc3QpO1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KGtleXMxLmNvbmNhdChrZXlzMikuY29uY2F0KGtleXMzKSk7XG5cbiAgICAgICAgcmV0dXJuICFFeHBvcnRVdGlsaXRpZXMuaXNTcGVjaWFsRGF0YShkYXRhKSA/IEFycmF5LmZyb20oa2V5cykgOiBbICdDb2x1bW4gMScgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNhdmVCbG9iVG9GaWxlKGJsb2I6IEJsb2IsIGZpbGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJsb2IsIGZpbGVOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgYS5kb3dubG9hZCA9IGZpbGVOYW1lO1xuXG4gICAgICAgICAgICBhLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgYS5jbGljaygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0cmluZ1RvQXJyYXlCdWZmZXIoczogc3RyaW5nKTogQXJyYXlCdWZmZXIge1xuICAgICAgICBjb25zdCBidWYgPSBuZXcgQXJyYXlCdWZmZXIocy5sZW5ndGgpO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlIG5vLWJpdHdpc2UgKi9cbiAgICAgICAgICAgIHZpZXdbaV0gPSBzLmNoYXJDb2RlQXQoaSkgJiAweEZGO1xuICAgICAgICAgICAgLyogdHNsaW50OmVuYWJsZSBuby1iaXR3aXNlICovXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzU3BlY2lhbERhdGEoZGF0YTogYW55W10pOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGF0YUVudHJ5ID0gZGF0YVswXTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZGF0YUVudHJ5ID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhRW50cnkgPT09ICdudW1iZXInIHx8XG4gICAgICAgICAgICAgICAgZGF0YUVudHJ5IGluc3RhbmNlb2YgRGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBoYXNWYWx1ZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNOdWxsT3JXaGl0ZXNwYWNlcyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8ICF2YWx1ZS50cmltKCk7XG4gICAgfVxufVxuIl19
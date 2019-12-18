/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
export class ExportUtilities {
    /**
     * @param {?} data
     * @return {?}
     */
    static getKeysFromData(data) {
        /** @type {?} */
        const length = data.length;
        if (length === 0) {
            return [];
        }
        /** @type {?} */
        const dataEntry = data[0];
        /** @type {?} */
        const dataEntryMiddle = data[Math.floor(length / 2)];
        /** @type {?} */
        const dataEntryLast = data[length - 1];
        /** @type {?} */
        const keys1 = Object.keys(dataEntry);
        /** @type {?} */
        const keys2 = Object.keys(dataEntryMiddle);
        /** @type {?} */
        const keys3 = Object.keys(dataEntryLast);
        /** @type {?} */
        const keys = new Set(keys1.concat(keys2).concat(keys3));
        return !ExportUtilities.isSpecialData(data) ? Array.from(keys) : ['Column 1'];
    }
    /**
     * @param {?} blob
     * @param {?} fileName
     * @return {?}
     */
    static saveBlobToFile(blob, fileName) {
        /** @type {?} */
        const a = document.createElement('a');
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        }
        else {
            /** @type {?} */
            const url = window.URL.createObjectURL(blob);
            a.download = fileName;
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }
    }
    /**
     * @param {?} s
     * @return {?}
     */
    static stringToArrayBuffer(s) {
        /** @type {?} */
        const buf = new ArrayBuffer(s.length);
        /** @type {?} */
        const view = new Uint8Array(buf);
        for (let i = 0; i !== s.length; ++i) {
            /* tslint:disable no-bitwise */
            view[i] = s.charCodeAt(i) & 0xFF;
            /* tslint:enable no-bitwise */
        }
        return buf;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    static isSpecialData(data) {
        /** @type {?} */
        const dataEntry = data[0];
        return (typeof dataEntry === 'string' ||
            typeof dataEntry === 'number' ||
            dataEntry instanceof Date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static hasValue(value) {
        return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static isNullOrWhitespaces(value) {
        return value === undefined || value === null || !value.trim();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LXV0aWxpdGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXItY29tbW9uL2V4cG9ydC11dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBTyxlQUFlOzs7OztJQUNqQixNQUFNLENBQUMsZUFBZSxDQUFDLElBQVc7O2NBQy9CLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMxQixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNiOztjQUVLLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztjQUNuQixlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztjQUM5QyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O2NBRWhDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Y0FDOUIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDOztjQUNwQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O2NBRWxDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RCxPQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxVQUFVLENBQUUsQ0FBQztJQUNwRixDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQVUsRUFBRSxRQUFROztjQUN2QyxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDckMsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckQ7YUFBTTs7a0JBQ0csR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUM1QyxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUV0QixDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBUzs7Y0FDakMsR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7O2NBQy9CLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDakMsK0JBQStCO1lBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqQyw4QkFBOEI7U0FDakM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFXOztjQUM3QixTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUTtZQUM3QixPQUFPLFNBQVMsS0FBSyxRQUFRO1lBQzdCLFNBQVMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVTtRQUM3QixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFhO1FBQzNDLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xFLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHBvcnRVdGlsaXRpZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0S2V5c0Zyb21EYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhRW50cnkgPSBkYXRhWzBdO1xuICAgICAgICBjb25zdCBkYXRhRW50cnlNaWRkbGUgPSBkYXRhW01hdGguZmxvb3IobGVuZ3RoIC8gMildO1xuICAgICAgICBjb25zdCBkYXRhRW50cnlMYXN0ID0gZGF0YVtsZW5ndGggLSAxXTtcblxuICAgICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKGRhdGFFbnRyeSk7XG4gICAgICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMoZGF0YUVudHJ5TWlkZGxlKTtcbiAgICAgICAgY29uc3Qga2V5czMgPSBPYmplY3Qua2V5cyhkYXRhRW50cnlMYXN0KTtcblxuICAgICAgICBjb25zdCBrZXlzID0gbmV3IFNldChrZXlzMS5jb25jYXQoa2V5czIpLmNvbmNhdChrZXlzMykpO1xuXG4gICAgICAgIHJldHVybiAhRXhwb3J0VXRpbGl0aWVzLmlzU3BlY2lhbERhdGEoZGF0YSkgPyBBcnJheS5mcm9tKGtleXMpIDogWyAnQ29sdW1uIDEnIF07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzYXZlQmxvYlRvRmlsZShibG9iOiBCbG9iLCBmaWxlTmFtZSkge1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihibG9iLCBmaWxlTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZTtcblxuICAgICAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICAgIGEuY2xpY2soKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzdHJpbmdUb0FycmF5QnVmZmVyKHM6IHN0cmluZyk6IEFycmF5QnVmZmVyIHtcbiAgICAgICAgY29uc3QgYnVmID0gbmV3IEFycmF5QnVmZmVyKHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZSBuby1iaXR3aXNlICovXG4gICAgICAgICAgICB2aWV3W2ldID0gcy5jaGFyQ29kZUF0KGkpICYgMHhGRjtcbiAgICAgICAgICAgIC8qIHRzbGludDplbmFibGUgbm8tYml0d2lzZSAqL1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc1NwZWNpYWxEYXRhKGRhdGE6IGFueVtdKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRhdGFFbnRyeSA9IGRhdGFbMF07XG4gICAgICAgIHJldHVybiAodHlwZW9mIGRhdGFFbnRyeSA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YUVudHJ5ID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgICAgICAgIGRhdGFFbnRyeSBpbnN0YW5jZW9mIERhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaGFzVmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzTnVsbE9yV2hpdGVzcGFjZXModmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhdmFsdWUudHJpbSgpO1xuICAgIH1cbn1cbiJdfQ==
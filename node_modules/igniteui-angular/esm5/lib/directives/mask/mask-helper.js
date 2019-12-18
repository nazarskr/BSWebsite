/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @hidden
 * @type {?}
 */
export var MASK_FLAGS = ['C', '&', 'a', 'A', '?', 'L', '9', '0', '#'];
/**
 * @hidden
 * @type {?}
 */
export var KEYS = {
    Ctrl: 17,
    Z: 90,
    Y: 89,
    X: 88,
    BACKSPACE: 8,
    DELETE: 46
};
/**
 * @hidden
 */
var /**
 * @hidden
 */
MaskHelper = /** @class */ (function () {
    function MaskHelper() {
    }
    Object.defineProperty(MaskHelper.prototype, "cursor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cursor;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @return {?}
     */
    MaskHelper.prototype.parseValueByMask = /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @return {?}
     */
    function (value, maskOptions, cursor) {
        /** @type {?} */
        var inputValue = value;
        /** @type {?} */
        var mask = maskOptions.format;
        /** @type {?} */
        var literals = this.getMaskLiterals(mask);
        /** @type {?} */
        var literalKeys = Array.from(literals.keys());
        /** @type {?} */
        var nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        if (inputValue.length < mask.length) { // BACKSPACE, DELETE
            if (inputValue === '' && cursor === -1) {
                this._cursor = 0;
                return this.parseValueByMaskOnInit(value, maskOptions);
            } // workaround for IE 'x' button
            if (nonLiteralIndeces.indexOf(cursor + 1) !== -1) {
                inputValue = this.insertCharAt(inputValue, cursor + 1, maskOptions.promptChar);
                this._cursor = cursor + 1;
            }
            else {
                inputValue = this.insertCharAt(inputValue, cursor + 1, mask[cursor + 1]);
                this._cursor = cursor + 1;
                for (var i = this._cursor; i < 0; i--) {
                    if (literalKeys.indexOf(this._cursor) !== -1) {
                        this._cursor--;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        else {
            /** @type {?} */
            var char = inputValue[cursor];
            /** @type {?} */
            var isCharValid = this.validateCharOnPostion(char, cursor, mask);
            if (nonLiteralIndeces.indexOf(cursor) !== -1) {
                inputValue = this.replaceCharAt(inputValue, cursor, '');
                if (isCharValid) {
                    inputValue = this.replaceCharAt(inputValue, cursor, char);
                    this._cursor = cursor + 1;
                }
                else {
                    this._cursor = cursor;
                }
            }
            else {
                inputValue = this.replaceCharAt(inputValue, cursor, '');
                this._cursor = ++cursor;
                for (var i = cursor; i < mask.length; i++) {
                    if (literalKeys.indexOf(this._cursor) !== -1) {
                        this._cursor = ++cursor;
                    }
                    else {
                        isCharValid = this.validateCharOnPostion(char, cursor, mask);
                        if (isCharValid) {
                            inputValue = this.replaceCharAt(inputValue, cursor, char);
                            this._cursor = ++cursor;
                            break;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
        return inputValue;
    };
    /**
     * @param {?} maskOptions
     * @return {?}
     */
    MaskHelper.prototype.parseMask = /**
     * @param {?} maskOptions
     * @return {?}
     */
    function (maskOptions) {
        var _this = this;
        var e_1, _a;
        /** @type {?} */
        var outputVal = '';
        /** @type {?} */
        var mask = maskOptions.format;
        /** @type {?} */
        var literals = this.getMaskLiterals(mask);
        try {
            for (var mask_1 = tslib_1.__values(mask), mask_1_1 = mask_1.next(); !mask_1_1.done; mask_1_1 = mask_1.next()) {
                var maskSym = mask_1_1.value;
                outputVal += maskOptions.promptChar;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (mask_1_1 && !mask_1_1.done && (_a = mask_1.return)) _a.call(mask_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        literals.forEach(function (val, key) {
            outputVal = _this.replaceCharAt(outputVal, key, val);
        });
        return outputVal;
    };
    /**
     * @param {?} inputVal
     * @param {?} maskOptions
     * @return {?}
     */
    MaskHelper.prototype.parseValueByMaskOnInit = /**
     * @param {?} inputVal
     * @param {?} maskOptions
     * @return {?}
     */
    function (inputVal, maskOptions) {
        var _this = this;
        var e_2, _a, e_3, _b;
        /** @type {?} */
        var outputVal = '';
        /** @type {?} */
        var value = '';
        /** @type {?} */
        var mask = maskOptions.format;
        /** @type {?} */
        var literals = this.getMaskLiterals(mask);
        /** @type {?} */
        var literalKeys = Array.from(literals.keys());
        /** @type {?} */
        var nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        /** @type {?} */
        var literalValues = Array.from(literals.values());
        if (inputVal != null) {
            value = inputVal.toString();
        }
        try {
            for (var mask_2 = tslib_1.__values(mask), mask_2_1 = mask_2.next(); !mask_2_1.done; mask_2_1 = mask_2.next()) {
                var maskSym = mask_2_1.value;
                outputVal += maskOptions.promptChar;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (mask_2_1 && !mask_2_1.done && (_a = mask_2.return)) _a.call(mask_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        literals.forEach(function (val, key) {
            outputVal = _this.replaceCharAt(outputVal, key, val);
        });
        if (!value) {
            return outputVal;
        }
        /** @type {?} */
        var nonLiteralValues = this.getNonLiteralValues(value, literalValues);
        for (var i = 0; i < nonLiteralValues.length; i++) {
            /** @type {?} */
            var char = nonLiteralValues[i];
            /** @type {?} */
            var isCharValid = this.validateCharOnPostion(char, nonLiteralIndeces[i], mask);
            if (!isCharValid && char !== maskOptions.promptChar) {
                nonLiteralValues[i] = maskOptions.promptChar;
            }
        }
        if (nonLiteralValues.length > nonLiteralIndeces.length) {
            nonLiteralValues.splice(nonLiteralIndeces.length);
        }
        /** @type {?} */
        var pos = 0;
        try {
            for (var nonLiteralValues_1 = tslib_1.__values(nonLiteralValues), nonLiteralValues_1_1 = nonLiteralValues_1.next(); !nonLiteralValues_1_1.done; nonLiteralValues_1_1 = nonLiteralValues_1.next()) {
                var nonLiteralValue = nonLiteralValues_1_1.value;
                /** @type {?} */
                var char = nonLiteralValue;
                outputVal = this.replaceCharAt(outputVal, nonLiteralIndeces[pos++], char);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (nonLiteralValues_1_1 && !nonLiteralValues_1_1.done && (_b = nonLiteralValues_1.return)) _b.call(nonLiteralValues_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return outputVal;
    };
    /**
     * @param {?} value
     * @param {?} maskOptions
     * @return {?}
     */
    MaskHelper.prototype.restoreValueFromMask = /**
     * @param {?} value
     * @param {?} maskOptions
     * @return {?}
     */
    function (value, maskOptions) {
        var e_4, _a;
        /** @type {?} */
        var outputVal = '';
        /** @type {?} */
        var mask = maskOptions.format;
        /** @type {?} */
        var literals = this.getMaskLiterals(mask);
        /** @type {?} */
        var literalValues = Array.from(literals.values());
        try {
            for (var value_1 = tslib_1.__values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                var val = value_1_1.value;
                if (literalValues.indexOf(val) === -1) {
                    if (val !== maskOptions.promptChar) {
                        outputVal += val;
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return outputVal;
    };
    /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @param {?} selection
     * @return {?}
     */
    MaskHelper.prototype.parseValueByMaskUponSelection = /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @param {?} selection
     * @return {?}
     */
    function (value, maskOptions, cursor, selection) {
        /** @type {?} */
        var isCharValid;
        /** @type {?} */
        var inputValue = value;
        /** @type {?} */
        var char = inputValue[cursor];
        /** @type {?} */
        var mask = maskOptions.format;
        /** @type {?} */
        var literals = this.getMaskLiterals(mask);
        /** @type {?} */
        var literalKeys = Array.from(literals.keys());
        /** @type {?} */
        var nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        if (!this.data) {
            this._cursor = cursor < 0 ? ++cursor : cursor;
            if (nonLiteralIndeces.indexOf(this._cursor) !== -1) {
                isCharValid = this.validateCharOnPostion(char, this._cursor, mask);
                inputValue = isCharValid ? this.replaceCharAt(inputValue, this._cursor++, char) :
                    inputValue = this.replaceCharAt(inputValue, this._cursor++, maskOptions.promptChar);
                selection--;
                if (selection > 0) {
                    for (var i = 0; i < selection; i++) {
                        cursor++;
                        inputValue = nonLiteralIndeces.indexOf(cursor) !== -1 ?
                            this.insertCharAt(inputValue, cursor, maskOptions.promptChar) :
                            this.insertCharAt(inputValue, cursor, mask[cursor]);
                    }
                }
            }
            else {
                inputValue = this.replaceCharAt(inputValue, this._cursor, mask[this._cursor]);
                this._cursor++;
                selection--;
                /** @type {?} */
                var isMarked = false;
                if (selection > 0) {
                    cursor = this._cursor;
                    for (var i = 0; i < selection; i++) {
                        if (nonLiteralIndeces.indexOf(cursor) !== -1) {
                            isCharValid = this.validateCharOnPostion(char, cursor, mask);
                            if (isCharValid && !isMarked) {
                                inputValue = this.insertCharAt(inputValue, cursor, char);
                                cursor++;
                                this._cursor++;
                                isMarked = true;
                            }
                            else {
                                inputValue = this.insertCharAt(inputValue, cursor, maskOptions.promptChar);
                                cursor++;
                            }
                        }
                        else {
                            inputValue = this.insertCharAt(inputValue, cursor, mask[cursor]);
                            if (cursor === this._cursor) {
                                this._cursor++;
                            }
                            cursor++;
                        }
                    }
                }
            }
        }
        else {
            if (inputValue === '' && cursor === -1) {
                this._cursor = 0;
                return this.parseValueByMaskOnInit(value, maskOptions);
            } // workaround for IE 'x' button
            if (this._cursor < 0) {
                this._cursor++;
                cursor++;
            }
            cursor++;
            this._cursor = cursor;
            for (var i = 0; i < selection; i++) {
                if (nonLiteralIndeces.indexOf(cursor) !== -1) {
                    inputValue = this.insertCharAt(inputValue, cursor, maskOptions.promptChar);
                    cursor++;
                }
                else {
                    inputValue = this.insertCharAt(inputValue, cursor, mask[cursor]);
                    cursor++;
                }
            }
        }
        return inputValue;
    };
    /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @param {?} clipboardData
     * @param {?} selection
     * @return {?}
     */
    MaskHelper.prototype.parseValueByMaskUponCopyPaste = /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @param {?} clipboardData
     * @param {?} selection
     * @return {?}
     */
    function (value, maskOptions, cursor, clipboardData, selection) {
        var e_5, _a;
        /** @type {?} */
        var inputValue = value;
        /** @type {?} */
        var mask = maskOptions.format;
        /** @type {?} */
        var literals = this.getMaskLiterals(mask);
        /** @type {?} */
        var literalKeys = Array.from(literals.keys());
        /** @type {?} */
        var nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        /** @type {?} */
        var selectionEnd = cursor + selection;
        this._cursor = cursor;
        try {
            for (var clipboardData_1 = tslib_1.__values(clipboardData), clipboardData_1_1 = clipboardData_1.next(); !clipboardData_1_1.done; clipboardData_1_1 = clipboardData_1.next()) {
                var clipboardSym = clipboardData_1_1.value;
                /** @type {?} */
                var char = clipboardSym;
                if (this._cursor > mask.length) {
                    return inputValue;
                }
                if (nonLiteralIndeces.indexOf(this._cursor) !== -1) {
                    /** @type {?} */
                    var isCharValid = this.validateCharOnPostion(char, this._cursor, mask);
                    if (isCharValid) {
                        inputValue = this.replaceCharAt(inputValue, this._cursor++, char);
                    }
                }
                else {
                    for (var i = cursor; i < mask.length; i++) {
                        if (literalKeys.indexOf(this._cursor) !== -1) {
                            this._cursor++;
                        }
                        else {
                            /** @type {?} */
                            var isCharValid = this.validateCharOnPostion(char, this._cursor, mask);
                            if (isCharValid) {
                                inputValue = this.replaceCharAt(inputValue, this._cursor++, char);
                            }
                            break;
                        }
                    }
                }
                selection--;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (clipboardData_1_1 && !clipboardData_1_1.done && (_a = clipboardData_1.return)) _a.call(clipboardData_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (selection > 0) {
            for (var i = this._cursor; i < selectionEnd; i++) {
                if (literalKeys.indexOf(this._cursor) !== -1) {
                    this._cursor++;
                }
                else {
                    inputValue = this.replaceCharAt(inputValue, this._cursor++, maskOptions.promptChar);
                }
            }
        }
        return inputValue;
    };
    /**
     * @private
     * @param {?} inputChar
     * @param {?} position
     * @param {?} mask
     * @return {?}
     */
    MaskHelper.prototype.validateCharOnPostion = /**
     * @private
     * @param {?} inputChar
     * @param {?} position
     * @param {?} mask
     * @return {?}
     */
    function (inputChar, position, mask) {
        /** @type {?} */
        var regex;
        /** @type {?} */
        var isValid;
        /** @type {?} */
        var letterOrDigitRegEx = '[\\d\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z]';
        /** @type {?} */
        var letterDigitOrSpaceRegEx = '[\\d\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z\\u0020]';
        /** @type {?} */
        var letterRegEx = '[\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z]';
        /** @type {?} */
        var letteSpaceRegEx = '[\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z\\u0020]';
        /** @type {?} */
        var digitRegEx = '[\\d]';
        /** @type {?} */
        var digitSpaceRegEx = '[\\d\\u0020]';
        /** @type {?} */
        var digitSpecialRegEx = '[\\d-\\+]';
        switch (mask.charAt(position)) {
            case 'C':
                isValid = inputChar !== '';
                break;
            case '&':
                regex = new RegExp('[\\u0020]');
                isValid = !regex.test(inputChar);
                break;
            case 'a':
                regex = new RegExp(letterDigitOrSpaceRegEx);
                isValid = regex.test(inputChar);
                break;
            case 'A':
                regex = new RegExp(letterOrDigitRegEx);
                isValid = regex.test(inputChar);
                break;
            case '?':
                regex = new RegExp(letteSpaceRegEx);
                isValid = regex.test(inputChar);
                break;
            case 'L':
                regex = new RegExp(letterRegEx);
                isValid = regex.test(inputChar);
                break;
            case '0':
                regex = new RegExp(digitRegEx);
                isValid = regex.test(inputChar);
                break;
            case '9':
                regex = new RegExp(digitSpaceRegEx);
                isValid = regex.test(inputChar);
                break;
            case '#':
                regex = new RegExp(digitSpecialRegEx);
                isValid = regex.test(inputChar);
                break;
            default: {
                isValid = null;
            }
        }
        return isValid;
    };
    /**
     * @private
     * @param {?} strValue
     * @param {?} index
     * @param {?} char
     * @return {?}
     */
    MaskHelper.prototype.replaceCharAt = /**
     * @private
     * @param {?} strValue
     * @param {?} index
     * @param {?} char
     * @return {?}
     */
    function (strValue, index, char) {
        if (strValue !== undefined) {
            return strValue.substring(0, index) + char + strValue.substring(index + 1);
        }
    };
    /**
     * @private
     * @param {?} strValue
     * @param {?} index
     * @param {?} char
     * @return {?}
     */
    MaskHelper.prototype.insertCharAt = /**
     * @private
     * @param {?} strValue
     * @param {?} index
     * @param {?} char
     * @return {?}
     */
    function (strValue, index, char) {
        if (strValue !== undefined) {
            return strValue.substring(0, index) + char + strValue.substring(index);
        }
    };
    /**
     * @private
     * @param {?} mask
     * @return {?}
     */
    MaskHelper.prototype.getMaskLiterals = /**
     * @private
     * @param {?} mask
     * @return {?}
     */
    function (mask) {
        /** @type {?} */
        var literals = new Map();
        for (var i = 0; i < mask.length; i++) {
            /** @type {?} */
            var char = mask.charAt(i);
            if (MASK_FLAGS.indexOf(char) === -1) {
                literals.set(i, char);
            }
        }
        return literals;
    };
    /**
     * @private
     * @param {?} mask
     * @param {?} literalKeys
     * @return {?}
     */
    MaskHelper.prototype.getNonLiteralIndeces = /**
     * @private
     * @param {?} mask
     * @param {?} literalKeys
     * @return {?}
     */
    function (mask, literalKeys) {
        /** @type {?} */
        var nonLiteralsIndeces = new Array();
        for (var i = 0; i < mask.length; i++) {
            if (literalKeys.indexOf(i) === -1) {
                nonLiteralsIndeces.push(i);
            }
        }
        return nonLiteralsIndeces;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} literalValues
     * @return {?}
     */
    MaskHelper.prototype.getNonLiteralValues = /**
     * @private
     * @param {?} value
     * @param {?} literalValues
     * @return {?}
     */
    function (value, literalValues) {
        var e_6, _a;
        /** @type {?} */
        var nonLiteralValues = new Array();
        try {
            for (var value_2 = tslib_1.__values(value), value_2_1 = value_2.next(); !value_2_1.done; value_2_1 = value_2.next()) {
                var val = value_2_1.value;
                if (literalValues.indexOf(val) === -1) {
                    nonLiteralValues.push(val);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (value_2_1 && !value_2_1.done && (_a = value_2.return)) _a.call(value_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return nonLiteralValues;
    };
    return MaskHelper;
}());
/**
 * @hidden
 */
export { MaskHelper };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MaskHelper.prototype._cursor;
    /** @type {?} */
    MaskHelper.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFzay9tYXNrLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQSxNQUFNLEtBQU8sVUFBVSxHQUFHLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7Ozs7O0FBS3pFLE1BQU0sS0FBTyxJQUFJLEdBQUc7SUFDaEIsSUFBSSxFQUFHLEVBQUU7SUFDVCxDQUFDLEVBQUcsRUFBRTtJQUNOLENBQUMsRUFBRyxFQUFFO0lBQ04sQ0FBQyxFQUFHLEVBQUU7SUFDTixTQUFTLEVBQUcsQ0FBQztJQUNiLE1BQU0sRUFBRyxFQUFFO0NBQ1o7Ozs7QUFNSDs7OztJQUFBO0lBMlhBLENBQUM7SUF6WEcsc0JBQVcsOEJBQU07Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7Ozs7SUFHTSxxQ0FBZ0I7Ozs7OztJQUF2QixVQUF3QixLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU07O1lBQzFDLFVBQVUsR0FBVyxLQUFLOztZQUN4QixJQUFJLEdBQVcsV0FBVyxDQUFDLE1BQU07O1lBQ2pDLFFBQVEsR0FBd0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7O1lBQzFELFdBQVcsR0FBYSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDbkQsaUJBQWlCLEdBQWEsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUM7UUFFaEYsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxvQkFBb0I7WUFDdkQsSUFBSSxVQUFVLEtB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QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDOUI7YUFDSjs7Ozs7Ozs7O1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBM1hELElBMlhDOzs7Ozs7Ozs7O0lBMVhHLDZCQUFnQjs7SUFJaEIsMEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBNQVNLX0ZMQUdTID0gWyAnQycsICcmJywgJ2EnLCAnQScsICc/JywgJ0wnLCAnOScsICcwJywgJyMnIF07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgS0VZUyA9IHtcbiAgICBDdHJsIDogMTcsXG4gICAgWiA6IDkwLFxuICAgIFkgOiA4OSxcbiAgICBYIDogODgsXG4gICAgQkFDS1NQQUNFIDogOCxcbiAgICBERUxFVEUgOiA0NlxuICB9O1xuXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTWFza0hlbHBlciB7XG4gICAgcHJpdmF0ZSBfY3Vyc29yO1xuICAgIHB1YmxpYyBnZXQgY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3Vyc29yO1xuICAgIH1cbiAgICBwdWJsaWMgZGF0YTogYm9vbGVhbjtcblxuICAgIHB1YmxpYyBwYXJzZVZhbHVlQnlNYXNrKHZhbHVlLCBtYXNrT3B0aW9ucywgY3Vyc29yKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWU6IHN0cmluZyA9IHZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrOiBzdHJpbmcgPSBtYXNrT3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxzOiBNYXA8bnVtYmVyLCBzdHJpbmc+ID0gdGhpcy5nZXRNYXNrTGl0ZXJhbHMobWFzayk7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxLZXlzOiBudW1iZXJbXSA9IEFycmF5LmZyb20obGl0ZXJhbHMua2V5cygpKTtcbiAgICAgICAgY29uc3Qgbm9uTGl0ZXJhbEluZGVjZXM6IG51bWJlcltdID0gdGhpcy5nZXROb25MaXRlcmFsSW5kZWNlcyhtYXNrLCBsaXRlcmFsS2V5cyk7XG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUubGVuZ3RoIDwgbWFzay5sZW5ndGgpIHsgLy8gQkFDS1NQQUNFLCBERUxFVEVcbiAgICAgICAgICAgIGlmIChpbnB1dFZhbHVlID09PSAnJyAmJiBjdXJzb3IgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVZhbHVlQnlNYXNrT25Jbml0KHZhbHVlLCBtYXNrT3B0aW9ucyk7XG4gICAgICAgICAgICB9IC8vIHdvcmthcm91bmQgZm9yIElFICd4JyBidXR0b25cblxuICAgICAgICAgICAgaWYgKG5vbkxpdGVyYWxJbmRlY2VzLmluZGV4T2YoY3Vyc29yICsgMSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMuaW5zZXJ0Q2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciArIDEsIG1hc2tPcHRpb25zLnByb21wdENoYXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvciA9IGN1cnNvciArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLmluc2VydENoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IgKyAxLCBtYXNrW2N1cnNvciArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSBjdXJzb3IgKyAxO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9jdXJzb3I7IGkgPCAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpdGVyYWxLZXlzLmluZGV4T2YodGhpcy5fY3Vyc29yKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvci0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gaW5wdXRWYWx1ZVtjdXJzb3JdO1xuICAgICAgICAgICAgbGV0IGlzQ2hhclZhbGlkID0gdGhpcy52YWxpZGF0ZUNoYXJPblBvc3Rpb24oY2hhciwgY3Vyc29yLCBtYXNrKTtcbiAgICAgICAgICAgIGlmIChub25MaXRlcmFsSW5kZWNlcy5pbmRleE9mKGN1cnNvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMucmVwbGFjZUNoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFyVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMucmVwbGFjZUNoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsIGNoYXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSBjdXJzb3IgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLnJlcGxhY2VDaGFyQXQoaW5wdXRWYWx1ZSwgY3Vyc29yLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yID0gKytjdXJzb3I7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnNvcjsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpdGVyYWxLZXlzLmluZGV4T2YodGhpcy5fY3Vyc29yKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvciA9ICsrY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGFyVmFsaWQgPSB0aGlzLnZhbGlkYXRlQ2hhck9uUG9zdGlvbihjaGFyLCBjdXJzb3IsIG1hc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hhclZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMucmVwbGFjZUNoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsIGNoYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvciA9ICsrY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXJzZU1hc2sobWFza09wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgICBsZXQgb3V0cHV0VmFsID0gJyc7XG4gICAgICAgIGNvbnN0IG1hc2s6IHN0cmluZyA9IG1hc2tPcHRpb25zLmZvcm1hdDtcbiAgICAgICAgY29uc3QgbGl0ZXJhbHM6IE1hcDxudW1iZXIsIHN0cmluZz4gPSB0aGlzLmdldE1hc2tMaXRlcmFscyhtYXNrKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG1hc2tTeW0gb2YgbWFzaykge1xuICAgICAgICAgICAgb3V0cHV0VmFsICs9IG1hc2tPcHRpb25zLnByb21wdENoYXI7XG4gICAgICAgIH1cblxuICAgICAgICBsaXRlcmFscy5mb3JFYWNoKCh2YWw6IHN0cmluZywga2V5OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIG91dHB1dFZhbCA9IHRoaXMucmVwbGFjZUNoYXJBdChvdXRwdXRWYWwsIGtleSwgdmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dFZhbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2VWYWx1ZUJ5TWFza09uSW5pdChpbnB1dFZhbCwgbWFza09wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgICBsZXQgb3V0cHV0VmFsID0gJyc7XG4gICAgICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgICAgICBjb25zdCBtYXNrOiBzdHJpbmcgPSBtYXNrT3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxzOiBNYXA8bnVtYmVyLCBzdHJpbmc+ID0gdGhpcy5nZXRNYXNrTGl0ZXJhbHMobWFzayk7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxLZXlzOiBudW1iZXJbXSA9IEFycmF5LmZyb20obGl0ZXJhbHMua2V5cygpKTtcbiAgICAgICAgY29uc3Qgbm9uTGl0ZXJhbEluZGVjZXM6IG51bWJlcltdID0gdGhpcy5nZXROb25MaXRlcmFsSW5kZWNlcyhtYXNrLCBsaXRlcmFsS2V5cyk7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxWYWx1ZXM6IHN0cmluZ1tdID0gQXJyYXkuZnJvbShsaXRlcmFscy52YWx1ZXMoKSk7XG5cbiAgICAgICAgaWYgKGlucHV0VmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gaW5wdXRWYWwudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgbWFza1N5bSBvZiBtYXNrKSB7XG4gICAgICAgICAgICBvdXRwdXRWYWwgKz0gbWFza09wdGlvbnMucHJvbXB0Q2hhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpdGVyYWxzLmZvckVhY2goKHZhbDogc3RyaW5nLCBrZXk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgb3V0cHV0VmFsID0gdGhpcy5yZXBsYWNlQ2hhckF0KG91dHB1dFZhbCwga2V5LCB2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0VmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9uTGl0ZXJhbFZhbHVlczogc3RyaW5nW10gPSB0aGlzLmdldE5vbkxpdGVyYWxWYWx1ZXModmFsdWUsIGxpdGVyYWxWYWx1ZXMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9uTGl0ZXJhbFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IG5vbkxpdGVyYWxWYWx1ZXNbaV07XG4gICAgICAgICAgICBjb25zdCBpc0NoYXJWYWxpZCA9IHRoaXMudmFsaWRhdGVDaGFyT25Qb3N0aW9uKGNoYXIsIG5vbkxpdGVyYWxJbmRlY2VzW2ldLCBtYXNrKTtcblxuICAgICAgICAgICAgaWYgKCFpc0NoYXJWYWxpZCAmJiBjaGFyICE9PSBtYXNrT3B0aW9ucy5wcm9tcHRDaGFyKSB7XG4gICAgICAgICAgICAgICAgbm9uTGl0ZXJhbFZhbHVlc1tpXSA9IG1hc2tPcHRpb25zLnByb21wdENoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9uTGl0ZXJhbFZhbHVlcy5sZW5ndGggPiBub25MaXRlcmFsSW5kZWNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5vbkxpdGVyYWxWYWx1ZXMuc3BsaWNlKG5vbkxpdGVyYWxJbmRlY2VzLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBub25MaXRlcmFsVmFsdWUgb2Ygbm9uTGl0ZXJhbFZhbHVlcykge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IG5vbkxpdGVyYWxWYWx1ZTtcbiAgICAgICAgICAgIG91dHB1dFZhbCA9IHRoaXMucmVwbGFjZUNoYXJBdChvdXRwdXRWYWwsIG5vbkxpdGVyYWxJbmRlY2VzW3BvcysrXSwgY2hhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0VmFsO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXN0b3JlVmFsdWVGcm9tTWFzayh2YWx1ZSwgbWFza09wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgICBsZXQgb3V0cHV0VmFsID0gJyc7XG4gICAgICAgIGNvbnN0IG1hc2s6IHN0cmluZyA9IG1hc2tPcHRpb25zLmZvcm1hdDtcbiAgICAgICAgY29uc3QgbGl0ZXJhbHM6IE1hcDxudW1iZXIsIHN0cmluZz4gPSB0aGlzLmdldE1hc2tMaXRlcmFscyhtYXNrKTtcbiAgICAgICAgY29uc3QgbGl0ZXJhbFZhbHVlczogc3RyaW5nW10gPSBBcnJheS5mcm9tKGxpdGVyYWxzLnZhbHVlcygpKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGxpdGVyYWxWYWx1ZXMuaW5kZXhPZih2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgIT09IG1hc2tPcHRpb25zLnByb21wdENoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0VmFsICs9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0VmFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXJzZVZhbHVlQnlNYXNrVXBvblNlbGVjdGlvbih2YWx1ZSwgbWFza09wdGlvbnMsIGN1cnNvciwgc2VsZWN0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGlzQ2hhclZhbGlkOiBib29sZWFuO1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZTogc3RyaW5nID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IGNoYXI6IHN0cmluZyA9IGlucHV0VmFsdWVbY3Vyc29yXTtcbiAgICAgICAgY29uc3QgbWFzazogc3RyaW5nID0gbWFza09wdGlvbnMuZm9ybWF0O1xuICAgICAgICBjb25zdCBsaXRlcmFsczogTWFwPG51bWJlciwgc3RyaW5nPiA9IHRoaXMuZ2V0TWFza0xpdGVyYWxzKG1hc2spO1xuICAgICAgICBjb25zdCBsaXRlcmFsS2V5czogbnVtYmVyW10gPSBBcnJheS5mcm9tKGxpdGVyYWxzLmtleXMoKSk7XG4gICAgICAgIGNvbnN0IG5vbkxpdGVyYWxJbmRlY2VzOiBudW1iZXJbXSA9IHRoaXMuZ2V0Tm9uTGl0ZXJhbEluZGVjZXMobWFzaywgbGl0ZXJhbEtleXMpO1xuXG4gICAgICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSBjdXJzb3IgPCAwID8gKytjdXJzb3IgOiBjdXJzb3I7XG4gICAgICAgICAgICBpZiAobm9uTGl0ZXJhbEluZGVjZXMuaW5kZXhPZih0aGlzLl9jdXJzb3IpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlzQ2hhclZhbGlkID0gdGhpcy52YWxpZGF0ZUNoYXJPblBvc3Rpb24oY2hhciwgdGhpcy5fY3Vyc29yLCBtYXNrKTtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gaXNDaGFyVmFsaWQgPyB0aGlzLnJlcGxhY2VDaGFyQXQoaW5wdXRWYWx1ZSwgdGhpcy5fY3Vyc29yKyssIGNoYXIpIDpcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMucmVwbGFjZUNoYXJBdChpbnB1dFZhbHVlLCB0aGlzLl9jdXJzb3IrKywgbWFza09wdGlvbnMucHJvbXB0Q2hhcik7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLS07XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb247IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gbm9uTGl0ZXJhbEluZGVjZXMuaW5kZXhPZihjdXJzb3IpICE9PSAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRDaGFyQXQoaW5wdXRWYWx1ZSwgY3Vyc29yLCBtYXNrT3B0aW9ucy5wcm9tcHRDaGFyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRDaGFyQXQoaW5wdXRWYWx1ZSwgY3Vyc29yLCBtYXNrW2N1cnNvcl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5yZXBsYWNlQ2hhckF0KGlucHV0VmFsdWUsIHRoaXMuX2N1cnNvciwgbWFza1t0aGlzLl9jdXJzb3JdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IrKztcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24tLTtcbiAgICAgICAgICAgICAgICBsZXQgaXNNYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLl9jdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub25MaXRlcmFsSW5kZWNlcy5pbmRleE9mKGN1cnNvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGFyVmFsaWQgPSB0aGlzLnZhbGlkYXRlQ2hhck9uUG9zdGlvbihjaGFyLCBjdXJzb3IsIG1hc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NoYXJWYWxpZCAmJiAhaXNNYXJrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMuaW5zZXJ0Q2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciwgY2hhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXJrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLmluc2VydENoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsIG1hc2tPcHRpb25zLnByb21wdENoYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLmluc2VydENoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsIG1hc2tbY3Vyc29yXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvciA9PT0gdGhpcy5fY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbnB1dFZhbHVlID09PSAnJyAmJiBjdXJzb3IgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVZhbHVlQnlNYXNrT25Jbml0KHZhbHVlLCBtYXNrT3B0aW9ucyk7XG4gICAgICAgICAgICB9IC8vIHdvcmthcm91bmQgZm9yIElFICd4JyBidXR0b25cblxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnNvciA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IrKztcbiAgICAgICAgICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgdGhpcy5fY3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb247IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChub25MaXRlcmFsSW5kZWNlcy5pbmRleE9mKGN1cnNvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLmluc2VydENoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsIG1hc2tPcHRpb25zLnByb21wdENoYXIpO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5pbnNlcnRDaGFyQXQoaW5wdXRWYWx1ZSwgY3Vyc29yLCBtYXNrW2N1cnNvcl0pO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2VWYWx1ZUJ5TWFza1Vwb25Db3B5UGFzdGUodmFsdWUsIG1hc2tPcHRpb25zLCBjdXJzb3IsIGNsaXBib2FyZERhdGEsIHNlbGVjdGlvbik6IHN0cmluZyB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlOiBzdHJpbmcgPSB2YWx1ZTtcbiAgICAgICAgY29uc3QgbWFzazogc3RyaW5nID0gbWFza09wdGlvbnMuZm9ybWF0O1xuICAgICAgICBjb25zdCBsaXRlcmFsczogTWFwPG51bWJlciwgc3RyaW5nPiA9IHRoaXMuZ2V0TWFza0xpdGVyYWxzKG1hc2spO1xuICAgICAgICBjb25zdCBsaXRlcmFsS2V5czogbnVtYmVyW10gPSBBcnJheS5mcm9tKGxpdGVyYWxzLmtleXMoKSk7XG4gICAgICAgIGNvbnN0IG5vbkxpdGVyYWxJbmRlY2VzOiBudW1iZXJbXSA9IHRoaXMuZ2V0Tm9uTGl0ZXJhbEluZGVjZXMobWFzaywgbGl0ZXJhbEtleXMpO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVuZCA9IGN1cnNvciArIHNlbGVjdGlvbjtcblxuICAgICAgICB0aGlzLl9jdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgIGZvciAoY29uc3QgY2xpcGJvYXJkU3ltIG9mIGNsaXBib2FyZERhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBjbGlwYm9hcmRTeW07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3IgPiBtYXNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9uTGl0ZXJhbEluZGVjZXMuaW5kZXhPZih0aGlzLl9jdXJzb3IpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2hhclZhbGlkID0gdGhpcy52YWxpZGF0ZUNoYXJPblBvc3Rpb24oY2hhciwgdGhpcy5fY3Vyc29yLCBtYXNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFyVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMucmVwbGFjZUNoYXJBdChpbnB1dFZhbHVlLCB0aGlzLl9jdXJzb3IrKywgY2hhcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY3Vyc29yOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGl0ZXJhbEtleXMuaW5kZXhPZih0aGlzLl9jdXJzb3IpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yKys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0NoYXJWYWxpZCA9IHRoaXMudmFsaWRhdGVDaGFyT25Qb3N0aW9uKGNoYXIsIHRoaXMuX2N1cnNvciwgbWFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGFyVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5yZXBsYWNlQ2hhckF0KGlucHV0VmFsdWUsIHRoaXMuX2N1cnNvcisrLCBjaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxlY3Rpb24tLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fY3Vyc29yOyBpIDwgc2VsZWN0aW9uRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGl0ZXJhbEtleXMuaW5kZXhPZih0aGlzLl9jdXJzb3IpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IrKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5yZXBsYWNlQ2hhckF0KGlucHV0VmFsdWUsIHRoaXMuX2N1cnNvcisrLCBtYXNrT3B0aW9ucy5wcm9tcHRDaGFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlQ2hhck9uUG9zdGlvbihpbnB1dENoYXI6IHN0cmluZywgcG9zaXRpb246IG51bWJlciwgbWFzazogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCByZWdleDogUmVnRXhwO1xuICAgICAgICBsZXQgaXNWYWxpZDogYm9vbGVhbjtcbiAgICAgICAgY29uc3QgbGV0dGVyT3JEaWdpdFJlZ0V4ID0gJ1tcXFxcZFxcXFx1MDBDMC1cXFxcdTFGRkZcXFxcdTJDMDAtXFxcXHVEN0ZGYS16QS1aXSc7XG4gICAgICAgIGNvbnN0IGxldHRlckRpZ2l0T3JTcGFjZVJlZ0V4ID0gJ1tcXFxcZFxcXFx1MDBDMC1cXFxcdTFGRkZcXFxcdTJDMDAtXFxcXHVEN0ZGYS16QS1aXFxcXHUwMDIwXSc7XG4gICAgICAgIGNvbnN0IGxldHRlclJlZ0V4ID0gJ1tcXFxcdTAwQzAtXFxcXHUxRkZGXFxcXHUyQzAwLVxcXFx1RDdGRmEtekEtWl0nO1xuICAgICAgICBjb25zdCBsZXR0ZVNwYWNlUmVnRXggPSAnW1xcXFx1MDBDMC1cXFxcdTFGRkZcXFxcdTJDMDAtXFxcXHVEN0ZGYS16QS1aXFxcXHUwMDIwXSc7XG4gICAgICAgIGNvbnN0IGRpZ2l0UmVnRXggPSAnW1xcXFxkXSc7XG4gICAgICAgIGNvbnN0IGRpZ2l0U3BhY2VSZWdFeCA9ICdbXFxcXGRcXFxcdTAwMjBdJztcbiAgICAgICAgY29uc3QgZGlnaXRTcGVjaWFsUmVnRXggPSAnW1xcXFxkLVxcXFwrXSc7XG5cbiAgICAgICAgc3dpdGNoIChtYXNrLmNoYXJBdChwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpbnB1dENoYXIgIT09ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnJic6XG4gICAgICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXHUwMDIwXScpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSAhcmVnZXgudGVzdChpbnB1dENoYXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKGxldHRlckRpZ2l0T3JTcGFjZVJlZ0V4KTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gcmVnZXgudGVzdChpbnB1dENoYXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKGxldHRlck9yRGlnaXRSZWdFeCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHJlZ2V4LnRlc3QoaW5wdXRDaGFyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz8nOlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChsZXR0ZVNwYWNlUmVnRXgpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSByZWdleC50ZXN0KGlucHV0Q2hhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAobGV0dGVyUmVnRXgpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSByZWdleC50ZXN0KGlucHV0Q2hhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoZGlnaXRSZWdFeCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHJlZ2V4LnRlc3QoaW5wdXRDaGFyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzknOlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChkaWdpdFNwYWNlUmVnRXgpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSByZWdleC50ZXN0KGlucHV0Q2hhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoZGlnaXRTcGVjaWFsUmVnRXgpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSByZWdleC50ZXN0KGlucHV0Q2hhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG4gICAgcHJpdmF0ZSByZXBsYWNlQ2hhckF0KHN0clZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGNoYXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzdHJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyVmFsdWUuc3Vic3RyaW5nKDAsIGluZGV4KSArIGNoYXIgKyBzdHJWYWx1ZS5zdWJzdHJpbmcoaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGluc2VydENoYXJBdChzdHJWYWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjaGFyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoc3RyVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0clZhbHVlLnN1YnN0cmluZygwLCBpbmRleCkgKyBjaGFyICsgc3RyVmFsdWUuc3Vic3RyaW5nKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldE1hc2tMaXRlcmFscyhtYXNrOiBzdHJpbmcpOiBNYXA8bnVtYmVyLCBzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgbGl0ZXJhbHMgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IG1hc2suY2hhckF0KGkpO1xuICAgICAgICAgICAgaWYgKE1BU0tfRkxBR1MuaW5kZXhPZihjaGFyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsaXRlcmFscy5zZXQoaSwgY2hhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGl0ZXJhbHM7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0Tm9uTGl0ZXJhbEluZGVjZXMobWFzazogc3RyaW5nLCBsaXRlcmFsS2V5czogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IG5vbkxpdGVyYWxzSW5kZWNlczogbnVtYmVyW10gPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChsaXRlcmFsS2V5cy5pbmRleE9mKGkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIG5vbkxpdGVyYWxzSW5kZWNlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vbkxpdGVyYWxzSW5kZWNlcztcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXROb25MaXRlcmFsVmFsdWVzKHZhbHVlOiBzdHJpbmcsIGxpdGVyYWxWYWx1ZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBub25MaXRlcmFsVmFsdWVzOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobGl0ZXJhbFZhbHVlcy5pbmRleE9mKHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbm9uTGl0ZXJhbFZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9uTGl0ZXJhbFZhbHVlcztcbiAgICB9XG59XG4iXX0=
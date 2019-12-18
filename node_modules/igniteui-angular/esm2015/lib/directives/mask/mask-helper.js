/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 * @type {?}
 */
export const MASK_FLAGS = ['C', '&', 'a', 'A', '?', 'L', '9', '0', '#'];
/**
 * @hidden
 * @type {?}
 */
export const KEYS = {
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
export class MaskHelper {
    /**
     * @return {?}
     */
    get cursor() {
        return this._cursor;
    }
    /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @return {?}
     */
    parseValueByMask(value, maskOptions, cursor) {
        /** @type {?} */
        let inputValue = value;
        /** @type {?} */
        const mask = maskOptions.format;
        /** @type {?} */
        const literals = this.getMaskLiterals(mask);
        /** @type {?} */
        const literalKeys = Array.from(literals.keys());
        /** @type {?} */
        const nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
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
                for (let i = this._cursor; i < 0; i--) {
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
            const char = inputValue[cursor];
            /** @type {?} */
            let isCharValid = this.validateCharOnPostion(char, cursor, mask);
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
                for (let i = cursor; i < mask.length; i++) {
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
    }
    /**
     * @param {?} maskOptions
     * @return {?}
     */
    parseMask(maskOptions) {
        /** @type {?} */
        let outputVal = '';
        /** @type {?} */
        const mask = maskOptions.format;
        /** @type {?} */
        const literals = this.getMaskLiterals(mask);
        for (const maskSym of mask) {
            outputVal += maskOptions.promptChar;
        }
        literals.forEach((val, key) => {
            outputVal = this.replaceCharAt(outputVal, key, val);
        });
        return outputVal;
    }
    /**
     * @param {?} inputVal
     * @param {?} maskOptions
     * @return {?}
     */
    parseValueByMaskOnInit(inputVal, maskOptions) {
        /** @type {?} */
        let outputVal = '';
        /** @type {?} */
        let value = '';
        /** @type {?} */
        const mask = maskOptions.format;
        /** @type {?} */
        const literals = this.getMaskLiterals(mask);
        /** @type {?} */
        const literalKeys = Array.from(literals.keys());
        /** @type {?} */
        const nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        /** @type {?} */
        const literalValues = Array.from(literals.values());
        if (inputVal != null) {
            value = inputVal.toString();
        }
        for (const maskSym of mask) {
            outputVal += maskOptions.promptChar;
        }
        literals.forEach((val, key) => {
            outputVal = this.replaceCharAt(outputVal, key, val);
        });
        if (!value) {
            return outputVal;
        }
        /** @type {?} */
        const nonLiteralValues = this.getNonLiteralValues(value, literalValues);
        for (let i = 0; i < nonLiteralValues.length; i++) {
            /** @type {?} */
            const char = nonLiteralValues[i];
            /** @type {?} */
            const isCharValid = this.validateCharOnPostion(char, nonLiteralIndeces[i], mask);
            if (!isCharValid && char !== maskOptions.promptChar) {
                nonLiteralValues[i] = maskOptions.promptChar;
            }
        }
        if (nonLiteralValues.length > nonLiteralIndeces.length) {
            nonLiteralValues.splice(nonLiteralIndeces.length);
        }
        /** @type {?} */
        let pos = 0;
        for (const nonLiteralValue of nonLiteralValues) {
            /** @type {?} */
            const char = nonLiteralValue;
            outputVal = this.replaceCharAt(outputVal, nonLiteralIndeces[pos++], char);
        }
        return outputVal;
    }
    /**
     * @param {?} value
     * @param {?} maskOptions
     * @return {?}
     */
    restoreValueFromMask(value, maskOptions) {
        /** @type {?} */
        let outputVal = '';
        /** @type {?} */
        const mask = maskOptions.format;
        /** @type {?} */
        const literals = this.getMaskLiterals(mask);
        /** @type {?} */
        const literalValues = Array.from(literals.values());
        for (const val of value) {
            if (literalValues.indexOf(val) === -1) {
                if (val !== maskOptions.promptChar) {
                    outputVal += val;
                }
            }
        }
        return outputVal;
    }
    /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @param {?} selection
     * @return {?}
     */
    parseValueByMaskUponSelection(value, maskOptions, cursor, selection) {
        /** @type {?} */
        let isCharValid;
        /** @type {?} */
        let inputValue = value;
        /** @type {?} */
        const char = inputValue[cursor];
        /** @type {?} */
        const mask = maskOptions.format;
        /** @type {?} */
        const literals = this.getMaskLiterals(mask);
        /** @type {?} */
        const literalKeys = Array.from(literals.keys());
        /** @type {?} */
        const nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        if (!this.data) {
            this._cursor = cursor < 0 ? ++cursor : cursor;
            if (nonLiteralIndeces.indexOf(this._cursor) !== -1) {
                isCharValid = this.validateCharOnPostion(char, this._cursor, mask);
                inputValue = isCharValid ? this.replaceCharAt(inputValue, this._cursor++, char) :
                    inputValue = this.replaceCharAt(inputValue, this._cursor++, maskOptions.promptChar);
                selection--;
                if (selection > 0) {
                    for (let i = 0; i < selection; i++) {
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
                let isMarked = false;
                if (selection > 0) {
                    cursor = this._cursor;
                    for (let i = 0; i < selection; i++) {
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
            for (let i = 0; i < selection; i++) {
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
    }
    /**
     * @param {?} value
     * @param {?} maskOptions
     * @param {?} cursor
     * @param {?} clipboardData
     * @param {?} selection
     * @return {?}
     */
    parseValueByMaskUponCopyPaste(value, maskOptions, cursor, clipboardData, selection) {
        /** @type {?} */
        let inputValue = value;
        /** @type {?} */
        const mask = maskOptions.format;
        /** @type {?} */
        const literals = this.getMaskLiterals(mask);
        /** @type {?} */
        const literalKeys = Array.from(literals.keys());
        /** @type {?} */
        const nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        /** @type {?} */
        const selectionEnd = cursor + selection;
        this._cursor = cursor;
        for (const clipboardSym of clipboardData) {
            /** @type {?} */
            const char = clipboardSym;
            if (this._cursor > mask.length) {
                return inputValue;
            }
            if (nonLiteralIndeces.indexOf(this._cursor) !== -1) {
                /** @type {?} */
                const isCharValid = this.validateCharOnPostion(char, this._cursor, mask);
                if (isCharValid) {
                    inputValue = this.replaceCharAt(inputValue, this._cursor++, char);
                }
            }
            else {
                for (let i = cursor; i < mask.length; i++) {
                    if (literalKeys.indexOf(this._cursor) !== -1) {
                        this._cursor++;
                    }
                    else {
                        /** @type {?} */
                        const isCharValid = this.validateCharOnPostion(char, this._cursor, mask);
                        if (isCharValid) {
                            inputValue = this.replaceCharAt(inputValue, this._cursor++, char);
                        }
                        break;
                    }
                }
            }
            selection--;
        }
        if (selection > 0) {
            for (let i = this._cursor; i < selectionEnd; i++) {
                if (literalKeys.indexOf(this._cursor) !== -1) {
                    this._cursor++;
                }
                else {
                    inputValue = this.replaceCharAt(inputValue, this._cursor++, maskOptions.promptChar);
                }
            }
        }
        return inputValue;
    }
    /**
     * @private
     * @param {?} inputChar
     * @param {?} position
     * @param {?} mask
     * @return {?}
     */
    validateCharOnPostion(inputChar, position, mask) {
        /** @type {?} */
        let regex;
        /** @type {?} */
        let isValid;
        /** @type {?} */
        const letterOrDigitRegEx = '[\\d\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z]';
        /** @type {?} */
        const letterDigitOrSpaceRegEx = '[\\d\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z\\u0020]';
        /** @type {?} */
        const letterRegEx = '[\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z]';
        /** @type {?} */
        const letteSpaceRegEx = '[\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z\\u0020]';
        /** @type {?} */
        const digitRegEx = '[\\d]';
        /** @type {?} */
        const digitSpaceRegEx = '[\\d\\u0020]';
        /** @type {?} */
        const digitSpecialRegEx = '[\\d-\\+]';
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
    }
    /**
     * @private
     * @param {?} strValue
     * @param {?} index
     * @param {?} char
     * @return {?}
     */
    replaceCharAt(strValue, index, char) {
        if (strValue !== undefined) {
            return strValue.substring(0, index) + char + strValue.substring(index + 1);
        }
    }
    /**
     * @private
     * @param {?} strValue
     * @param {?} index
     * @param {?} char
     * @return {?}
     */
    insertCharAt(strValue, index, char) {
        if (strValue !== undefined) {
            return strValue.substring(0, index) + char + strValue.substring(index);
        }
    }
    /**
     * @private
     * @param {?} mask
     * @return {?}
     */
    getMaskLiterals(mask) {
        /** @type {?} */
        const literals = new Map();
        for (let i = 0; i < mask.length; i++) {
            /** @type {?} */
            const char = mask.charAt(i);
            if (MASK_FLAGS.indexOf(char) === -1) {
                literals.set(i, char);
            }
        }
        return literals;
    }
    /**
     * @private
     * @param {?} mask
     * @param {?} literalKeys
     * @return {?}
     */
    getNonLiteralIndeces(mask, literalKeys) {
        /** @type {?} */
        const nonLiteralsIndeces = new Array();
        for (let i = 0; i < mask.length; i++) {
            if (literalKeys.indexOf(i) === -1) {
                nonLiteralsIndeces.push(i);
            }
        }
        return nonLiteralsIndeces;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} literalValues
     * @return {?}
     */
    getNonLiteralValues(value, literalValues) {
        /** @type {?} */
        const nonLiteralValues = new Array();
        for (const val of value) {
            if (literalValues.indexOf(val) === -1) {
                nonLiteralValues.push(val);
            }
        }
        return nonLiteralValues;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MaskHelper.prototype._cursor;
    /** @type {?} */
    MaskHelper.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFzay9tYXNrLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE1BQU0sT0FBTyxVQUFVLEdBQUcsQ0FBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTs7Ozs7QUFLekUsTUFBTSxPQUFPLElBQUksR0FBRztJQUNoQixJQUFJLEVBQUcsRUFBRTtJQUNULENBQUMsRUFBRyxFQUFFO0lBQ04sQ0FBQyxFQUFHLEVBQUU7SUFDTixDQUFDLEVBQUcsRUFBRTtJQUNOLFNBQVMsRUFBRyxDQUFDO0lBQ2IsTUFBTSxFQUFHLEVBQUU7Q0FDWjs7OztBQU1ILE1BQU0sT0FBTyxVQUFVOzs7O0lBRW5CLElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBR00sZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNOztZQUMxQyxVQUFVLEdBQVcsS0FBSzs7Y0FDeEIsSUFBSSxHQUFXLFdBQVcsQ0FBQyxNQUFNOztjQUNqQyxRQUFRLEdBQXdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDOztjQUMxRCxXQUFXLEdBQWEsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7O2NBQ25ELGlCQUFpQixHQUFhLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDO1FBRWhGLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsb0JBQW9CO1lBQ3ZELElBQUksVUFBVSxLQUFLLEVBQUUsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFD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Y0FDdEQsa0JBQWtCLEdBQWEsSUFBSSxLQUFLLEVBQUU7UUFFaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUNPLG1CQUFtQixDQUFDLEtBQWEsRUFBRSxhQUF1Qjs7Y0FDeEQsZ0JBQWdCLEdBQWEsSUFBSSxLQUFLLEVBQUU7UUFFOUMsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztDQUNKOzs7Ozs7SUExWEcsNkJBQWdCOztJQUloQiwwQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IE1BU0tfRkxBR1MgPSBbICdDJywgJyYnLCAnYScsICdBJywgJz8nLCAnTCcsICc5JywgJzAnLCAnIycgXTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBLRVlTID0ge1xuICAgIEN0cmwgOiAxNyxcbiAgICBaIDogOTAsXG4gICAgWSA6IDg5LFxuICAgIFggOiA4OCxcbiAgICBCQUNLU1BBQ0UgOiA4LFxuICAgIERFTEVURSA6IDQ2XG4gIH07XG5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXNrSGVscGVyIHtcbiAgICBwcml2YXRlIF9jdXJzb3I7XG4gICAgcHVibGljIGdldCBjdXJzb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJzb3I7XG4gICAgfVxuICAgIHB1YmxpYyBkYXRhOiBib29sZWFuO1xuXG4gICAgcHVibGljIHBhcnNlVmFsdWVCeU1hc2sodmFsdWUsIG1hc2tPcHRpb25zLCBjdXJzb3IpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZTogc3RyaW5nID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2s6IHN0cmluZyA9IG1hc2tPcHRpb25zLmZvcm1hdDtcbiAgICAgICAgY29uc3QgbGl0ZXJhbHM6IE1hcDxudW1iZXIsIHN0cmluZz4gPSB0aGlzLmdldE1hc2tMaXRlcmFscyhtYXNrKTtcbiAgICAgICAgY29uc3QgbGl0ZXJhbEtleXM6IG51bWJlcltdID0gQXJyYXkuZnJvbShsaXRlcmFscy5rZXlzKCkpO1xuICAgICAgICBjb25zdCBub25MaXRlcmFsSW5kZWNlczogbnVtYmVyW10gPSB0aGlzLmdldE5vbkxpdGVyYWxJbmRlY2VzKG1hc2ssIGxpdGVyYWxLZXlzKTtcblxuICAgICAgICBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPCBtYXNrLmxlbmd0aCkgeyAvLyBCQUNLU1BBQ0UsIERFTEVURVxuICAgICAgICAgICAgaWYgKGlucHV0VmFsdWUgPT09ICcnICYmIGN1cnNvciA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVmFsdWVCeU1hc2tPbkluaXQodmFsdWUsIG1hc2tPcHRpb25zKTtcbiAgICAgICAgICAgIH0gLy8gd29ya2Fyb3VuZCBmb3IgSUUgJ3gnIGJ1dHRvblxuXG4gICAgICAgICAgICBpZiAobm9uTGl0ZXJhbEluZGVjZXMuaW5kZXhPZihjdXJzb3IgKyAxKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5pbnNlcnRDaGFyQXQoaW5wdXRWYWx1ZSwgY3Vyc29yICsgMSwgbWFza09wdGlvbnMucHJvbXB0Q2hhcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yID0gY3Vyc29yICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMuaW5zZXJ0Q2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciArIDEsIG1hc2tbY3Vyc29yICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvciA9IGN1cnNvciArIDE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2N1cnNvcjsgaSA8IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGl0ZXJhbEtleXMuaW5kZXhPZih0aGlzLl9jdXJzb3IpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yLS07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBpbnB1dFZhbHVlW2N1cnNvcl07XG4gICAgICAgICAgICBsZXQgaXNDaGFyVmFsaWQgPSB0aGlzLnZhbGlkYXRlQ2hhck9uUG9zdGlvbihjaGFyLCBjdXJzb3IsIG1hc2spO1xuICAgICAgICAgICAgaWYgKG5vbkxpdGVyYWxJbmRlY2VzLmluZGV4T2YoY3Vyc29yKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5yZXBsYWNlQ2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciwgJycpO1xuICAgICAgICAgICAgICAgIGlmIChpc0NoYXJWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5yZXBsYWNlQ2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciwgY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvciA9IGN1cnNvciArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMucmVwbGFjZUNoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSArK2N1cnNvcjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY3Vyc29yOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGl0ZXJhbEtleXMuaW5kZXhPZih0aGlzLl9jdXJzb3IpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yID0gKytjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NoYXJWYWxpZCA9IHRoaXMudmFsaWRhdGVDaGFyT25Qb3N0aW9uKGNoYXIsIGN1cnNvciwgbWFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGFyVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5yZXBsYWNlQ2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciwgY2hhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yID0gKytjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlTWFzayhtYXNrT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBvdXRwdXRWYWwgPSAnJztcbiAgICAgICAgY29uc3QgbWFzazogc3RyaW5nID0gbWFza09wdGlvbnMuZm9ybWF0O1xuICAgICAgICBjb25zdCBsaXRlcmFsczogTWFwPG51bWJlciwgc3RyaW5nPiA9IHRoaXMuZ2V0TWFza0xpdGVyYWxzKG1hc2spO1xuXG4gICAgICAgIGZvciAoY29uc3QgbWFza1N5bSBvZiBtYXNrKSB7XG4gICAgICAgICAgICBvdXRwdXRWYWwgKz0gbWFza09wdGlvbnMucHJvbXB0Q2hhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpdGVyYWxzLmZvckVhY2goKHZhbDogc3RyaW5nLCBrZXk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgb3V0cHV0VmFsID0gdGhpcy5yZXBsYWNlQ2hhckF0KG91dHB1dFZhbCwga2V5LCB2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0VmFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXJzZVZhbHVlQnlNYXNrT25Jbml0KGlucHV0VmFsLCBtYXNrT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBvdXRwdXRWYWwgPSAnJztcbiAgICAgICAgbGV0IHZhbHVlID0gJyc7XG4gICAgICAgIGNvbnN0IG1hc2s6IHN0cmluZyA9IG1hc2tPcHRpb25zLmZvcm1hdDtcbiAgICAgICAgY29uc3QgbGl0ZXJhbHM6IE1hcDxudW1iZXIsIHN0cmluZz4gPSB0aGlzLmdldE1hc2tMaXRlcmFscyhtYXNrKTtcbiAgICAgICAgY29uc3QgbGl0ZXJhbEtleXM6IG51bWJlcltdID0gQXJyYXkuZnJvbShsaXRlcmFscy5rZXlzKCkpO1xuICAgICAgICBjb25zdCBub25MaXRlcmFsSW5kZWNlczogbnVtYmVyW10gPSB0aGlzLmdldE5vbkxpdGVyYWxJbmRlY2VzKG1hc2ssIGxpdGVyYWxLZXlzKTtcbiAgICAgICAgY29uc3QgbGl0ZXJhbFZhbHVlczogc3RyaW5nW10gPSBBcnJheS5mcm9tKGxpdGVyYWxzLnZhbHVlcygpKTtcblxuICAgICAgICBpZiAoaW5wdXRWYWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSBpbnB1dFZhbC50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBtYXNrU3ltIG9mIG1hc2spIHtcbiAgICAgICAgICAgIG91dHB1dFZhbCArPSBtYXNrT3B0aW9ucy5wcm9tcHRDaGFyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGl0ZXJhbHMuZm9yRWFjaCgodmFsOiBzdHJpbmcsIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBvdXRwdXRWYWwgPSB0aGlzLnJlcGxhY2VDaGFyQXQob3V0cHV0VmFsLCBrZXksIHZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXRWYWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub25MaXRlcmFsVmFsdWVzOiBzdHJpbmdbXSA9IHRoaXMuZ2V0Tm9uTGl0ZXJhbFZhbHVlcyh2YWx1ZSwgbGl0ZXJhbFZhbHVlcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub25MaXRlcmFsVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gbm9uTGl0ZXJhbFZhbHVlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2hhclZhbGlkID0gdGhpcy52YWxpZGF0ZUNoYXJPblBvc3Rpb24oY2hhciwgbm9uTGl0ZXJhbEluZGVjZXNbaV0sIG1hc2spO1xuXG4gICAgICAgICAgICBpZiAoIWlzQ2hhclZhbGlkICYmIGNoYXIgIT09IG1hc2tPcHRpb25zLnByb21wdENoYXIpIHtcbiAgICAgICAgICAgICAgICBub25MaXRlcmFsVmFsdWVzW2ldID0gbWFza09wdGlvbnMucHJvbXB0Q2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub25MaXRlcmFsVmFsdWVzLmxlbmd0aCA+IG5vbkxpdGVyYWxJbmRlY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgbm9uTGl0ZXJhbFZhbHVlcy5zcGxpY2Uobm9uTGl0ZXJhbEluZGVjZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwb3MgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IG5vbkxpdGVyYWxWYWx1ZSBvZiBub25MaXRlcmFsVmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gbm9uTGl0ZXJhbFZhbHVlO1xuICAgICAgICAgICAgb3V0cHV0VmFsID0gdGhpcy5yZXBsYWNlQ2hhckF0KG91dHB1dFZhbCwgbm9uTGl0ZXJhbEluZGVjZXNbcG9zKytdLCBjaGFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXRWYWw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3RvcmVWYWx1ZUZyb21NYXNrKHZhbHVlLCBtYXNrT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBvdXRwdXRWYWwgPSAnJztcbiAgICAgICAgY29uc3QgbWFzazogc3RyaW5nID0gbWFza09wdGlvbnMuZm9ybWF0O1xuICAgICAgICBjb25zdCBsaXRlcmFsczogTWFwPG51bWJlciwgc3RyaW5nPiA9IHRoaXMuZ2V0TWFza0xpdGVyYWxzKG1hc2spO1xuICAgICAgICBjb25zdCBsaXRlcmFsVmFsdWVzOiBzdHJpbmdbXSA9IEFycmF5LmZyb20obGl0ZXJhbHMudmFsdWVzKCkpO1xuXG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobGl0ZXJhbFZhbHVlcy5pbmRleE9mKHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbWFza09wdGlvbnMucHJvbXB0Q2hhcikge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRWYWwgKz0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXRWYWw7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlVmFsdWVCeU1hc2tVcG9uU2VsZWN0aW9uKHZhbHVlLCBtYXNrT3B0aW9ucywgY3Vyc29yLCBzZWxlY3Rpb24pOiBzdHJpbmcge1xuICAgICAgICBsZXQgaXNDaGFyVmFsaWQ6IGJvb2xlYW47XG4gICAgICAgIGxldCBpbnB1dFZhbHVlOiBzdHJpbmcgPSB2YWx1ZTtcbiAgICAgICAgY29uc3QgY2hhcjogc3RyaW5nID0gaW5wdXRWYWx1ZVtjdXJzb3JdO1xuICAgICAgICBjb25zdCBtYXNrOiBzdHJpbmcgPSBtYXNrT3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxzOiBNYXA8bnVtYmVyLCBzdHJpbmc+ID0gdGhpcy5nZXRNYXNrTGl0ZXJhbHMobWFzayk7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxLZXlzOiBudW1iZXJbXSA9IEFycmF5LmZyb20obGl0ZXJhbHMua2V5cygpKTtcbiAgICAgICAgY29uc3Qgbm9uTGl0ZXJhbEluZGVjZXM6IG51bWJlcltdID0gdGhpcy5nZXROb25MaXRlcmFsSW5kZWNlcyhtYXNrLCBsaXRlcmFsS2V5cyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnNvciA9IGN1cnNvciA8IDAgPyArK2N1cnNvciA6IGN1cnNvcjtcbiAgICAgICAgICAgIGlmIChub25MaXRlcmFsSW5kZWNlcy5pbmRleE9mKHRoaXMuX2N1cnNvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaXNDaGFyVmFsaWQgPSB0aGlzLnZhbGlkYXRlQ2hhck9uUG9zdGlvbihjaGFyLCB0aGlzLl9jdXJzb3IsIG1hc2spO1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSBpc0NoYXJWYWxpZCA/IHRoaXMucmVwbGFjZUNoYXJBdChpbnB1dFZhbHVlLCB0aGlzLl9jdXJzb3IrKywgY2hhcikgOlxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5yZXBsYWNlQ2hhckF0KGlucHV0VmFsdWUsIHRoaXMuX2N1cnNvcisrLCBtYXNrT3B0aW9ucy5wcm9tcHRDaGFyKTtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24tLTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGlvbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSBub25MaXRlcmFsSW5kZWNlcy5pbmRleE9mKGN1cnNvcikgIT09IC0xID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydENoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsIG1hc2tPcHRpb25zLnByb21wdENoYXIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydENoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsIG1hc2tbY3Vyc29yXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLnJlcGxhY2VDaGFyQXQoaW5wdXRWYWx1ZSwgdGhpcy5fY3Vyc29yLCBtYXNrW3RoaXMuX2N1cnNvcl0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvcisrO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi0tO1xuICAgICAgICAgICAgICAgIGxldCBpc01hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMuX2N1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb247IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vbkxpdGVyYWxJbmRlY2VzLmluZGV4T2YoY3Vyc29yKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NoYXJWYWxpZCA9IHRoaXMudmFsaWRhdGVDaGFyT25Qb3N0aW9uKGNoYXIsIGN1cnNvciwgbWFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hhclZhbGlkICYmICFpc01hcmtlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5pbnNlcnRDaGFyQXQoaW5wdXRWYWx1ZSwgY3Vyc29yLCBjaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hcmtlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMuaW5zZXJ0Q2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciwgbWFza09wdGlvbnMucHJvbXB0Q2hhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMuaW5zZXJ0Q2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciwgbWFza1tjdXJzb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yID09PSB0aGlzLl9jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlucHV0VmFsdWUgPT09ICcnICYmIGN1cnNvciA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVmFsdWVCeU1hc2tPbkluaXQodmFsdWUsIG1hc2tPcHRpb25zKTtcbiAgICAgICAgICAgIH0gLy8gd29ya2Fyb3VuZCBmb3IgSUUgJ3gnIGJ1dHRvblxuXG4gICAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvcisrO1xuICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Vyc29yKys7XG4gICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGlvbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vbkxpdGVyYWxJbmRlY2VzLmluZGV4T2YoY3Vyc29yKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHRoaXMuaW5zZXJ0Q2hhckF0KGlucHV0VmFsdWUsIGN1cnNvciwgbWFza09wdGlvbnMucHJvbXB0Q2hhcik7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLmluc2VydENoYXJBdChpbnB1dFZhbHVlLCBjdXJzb3IsIG1hc2tbY3Vyc29yXSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXJzZVZhbHVlQnlNYXNrVXBvbkNvcHlQYXN0ZSh2YWx1ZSwgbWFza09wdGlvbnMsIGN1cnNvciwgY2xpcGJvYXJkRGF0YSwgc2VsZWN0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWU6IHN0cmluZyA9IHZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrOiBzdHJpbmcgPSBtYXNrT3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxzOiBNYXA8bnVtYmVyLCBzdHJpbmc+ID0gdGhpcy5nZXRNYXNrTGl0ZXJhbHMobWFzayk7XG4gICAgICAgIGNvbnN0IGxpdGVyYWxLZXlzOiBudW1iZXJbXSA9IEFycmF5LmZyb20obGl0ZXJhbHMua2V5cygpKTtcbiAgICAgICAgY29uc3Qgbm9uTGl0ZXJhbEluZGVjZXM6IG51bWJlcltdID0gdGhpcy5nZXROb25MaXRlcmFsSW5kZWNlcyhtYXNrLCBsaXRlcmFsS2V5cyk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uRW5kID0gY3Vyc29yICsgc2VsZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuX2N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgZm9yIChjb25zdCBjbGlwYm9hcmRTeW0gb2YgY2xpcGJvYXJkRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IGNsaXBib2FyZFN5bTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnNvciA+IG1hc2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub25MaXRlcmFsSW5kZWNlcy5pbmRleE9mKHRoaXMuX2N1cnNvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNDaGFyVmFsaWQgPSB0aGlzLnZhbGlkYXRlQ2hhck9uUG9zdGlvbihjaGFyLCB0aGlzLl9jdXJzb3IsIG1hc2spO1xuICAgICAgICAgICAgICAgIGlmIChpc0NoYXJWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdGhpcy5yZXBsYWNlQ2hhckF0KGlucHV0VmFsdWUsIHRoaXMuX2N1cnNvcisrLCBjaGFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjdXJzb3I7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXRlcmFsS2V5cy5pbmRleE9mKHRoaXMuX2N1cnNvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3IrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2hhclZhbGlkID0gdGhpcy52YWxpZGF0ZUNoYXJPblBvc3Rpb24oY2hhciwgdGhpcy5fY3Vyc29yLCBtYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NoYXJWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLnJlcGxhY2VDaGFyQXQoaW5wdXRWYWx1ZSwgdGhpcy5fY3Vyc29yKyssIGNoYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGVjdGlvbi0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9jdXJzb3I7IGkgPCBzZWxlY3Rpb25FbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXRlcmFsS2V5cy5pbmRleE9mKHRoaXMuX2N1cnNvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvcisrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB0aGlzLnJlcGxhY2VDaGFyQXQoaW5wdXRWYWx1ZSwgdGhpcy5fY3Vyc29yKyssIG1hc2tPcHRpb25zLnByb21wdENoYXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRhdGVDaGFyT25Qb3N0aW9uKGlucHV0Q2hhcjogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyLCBtYXNrOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlZ2V4OiBSZWdFeHA7XG4gICAgICAgIGxldCBpc1ZhbGlkOiBib29sZWFuO1xuICAgICAgICBjb25zdCBsZXR0ZXJPckRpZ2l0UmVnRXggPSAnW1xcXFxkXFxcXHUwMEMwLVxcXFx1MUZGRlxcXFx1MkMwMC1cXFxcdUQ3RkZhLXpBLVpdJztcbiAgICAgICAgY29uc3QgbGV0dGVyRGlnaXRPclNwYWNlUmVnRXggPSAnW1xcXFxkXFxcXHUwMEMwLVxcXFx1MUZGRlxcXFx1MkMwMC1cXFxcdUQ3RkZhLXpBLVpcXFxcdTAwMjBdJztcbiAgICAgICAgY29uc3QgbGV0dGVyUmVnRXggPSAnW1xcXFx1MDBDMC1cXFxcdTFGRkZcXFxcdTJDMDAtXFxcXHVEN0ZGYS16QS1aXSc7XG4gICAgICAgIGNvbnN0IGxldHRlU3BhY2VSZWdFeCA9ICdbXFxcXHUwMEMwLVxcXFx1MUZGRlxcXFx1MkMwMC1cXFxcdUQ3RkZhLXpBLVpcXFxcdTAwMjBdJztcbiAgICAgICAgY29uc3QgZGlnaXRSZWdFeCA9ICdbXFxcXGRdJztcbiAgICAgICAgY29uc3QgZGlnaXRTcGFjZVJlZ0V4ID0gJ1tcXFxcZFxcXFx1MDAyMF0nO1xuICAgICAgICBjb25zdCBkaWdpdFNwZWNpYWxSZWdFeCA9ICdbXFxcXGQtXFxcXCtdJztcblxuICAgICAgICBzd2l0Y2ggKG1hc2suY2hhckF0KHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlucHV0Q2hhciAhPT0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcmJzpcbiAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcdTAwMjBdJyk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9ICFyZWdleC50ZXN0KGlucHV0Q2hhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAobGV0dGVyRGlnaXRPclNwYWNlUmVnRXgpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSByZWdleC50ZXN0KGlucHV0Q2hhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAobGV0dGVyT3JEaWdpdFJlZ0V4KTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gcmVnZXgudGVzdChpbnB1dENoYXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKGxldHRlU3BhY2VSZWdFeCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHJlZ2V4LnRlc3QoaW5wdXRDaGFyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChsZXR0ZXJSZWdFeCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHJlZ2V4LnRlc3QoaW5wdXRDaGFyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChkaWdpdFJlZ0V4KTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gcmVnZXgudGVzdChpbnB1dENoYXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnOSc6XG4gICAgICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKGRpZ2l0U3BhY2VSZWdFeCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHJlZ2V4LnRlc3QoaW5wdXRDaGFyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyMnOlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChkaWdpdFNwZWNpYWxSZWdFeCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHJlZ2V4LnRlc3QoaW5wdXRDaGFyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cbiAgICBwcml2YXRlIHJlcGxhY2VDaGFyQXQoc3RyVmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgY2hhcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHN0clZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJWYWx1ZS5zdWJzdHJpbmcoMCwgaW5kZXgpICsgY2hhciArIHN0clZhbHVlLnN1YnN0cmluZyhpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaW5zZXJ0Q2hhckF0KHN0clZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGNoYXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzdHJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyVmFsdWUuc3Vic3RyaW5nKDAsIGluZGV4KSArIGNoYXIgKyBzdHJWYWx1ZS5zdWJzdHJpbmcoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TWFza0xpdGVyYWxzKG1hc2s6IHN0cmluZyk6IE1hcDxudW1iZXIsIHN0cmluZz4ge1xuICAgICAgICBjb25zdCBsaXRlcmFscyA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gbWFzay5jaGFyQXQoaSk7XG4gICAgICAgICAgICBpZiAoTUFTS19GTEFHUy5pbmRleE9mKGNoYXIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGxpdGVyYWxzLnNldChpLCBjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXRlcmFscztcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXROb25MaXRlcmFsSW5kZWNlcyhtYXNrOiBzdHJpbmcsIGxpdGVyYWxLZXlzOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3Qgbm9uTGl0ZXJhbHNJbmRlY2VzOiBudW1iZXJbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpdGVyYWxLZXlzLmluZGV4T2YoaSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbm9uTGl0ZXJhbHNJbmRlY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9uTGl0ZXJhbHNJbmRlY2VzO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5vbkxpdGVyYWxWYWx1ZXModmFsdWU6IHN0cmluZywgbGl0ZXJhbFZhbHVlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IG5vbkxpdGVyYWxWYWx1ZXM6IHN0cmluZ1tdID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChsaXRlcmFsVmFsdWVzLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBub25MaXRlcmFsVmFsdWVzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub25MaXRlcmFsVmFsdWVzO1xuICAgIH1cbn1cbiJdfQ==
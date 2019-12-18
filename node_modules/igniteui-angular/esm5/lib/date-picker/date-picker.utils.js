/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isIE } from '../core/utils';
/** @enum {string} */
var DateState = {
    Valid: 'valid',
    Invalid: 'invalid',
};
export { DateState };
/** @enum {string} */
var FormatDesc = {
    Numeric: 'numeric',
    TwoDigits: '2-digit',
};
/** @enum {string} */
var DateChars = {
    YearChar: 'y',
    MonthChar: 'M',
    DayChar: 'd',
};
/** @enum {string} */
var DateParts = {
    Day: 'day',
    Month: 'month',
    Year: 'year',
};
/**
 * @hidden
 * @abstract
 */
var DatePickerUtil = /** @class */ (function () {
    function DatePickerUtil() {
    }
    /**
     * This method generates date parts structure based on editor mask and locale.
     * @param maskValue: string
     * @param locale: string
     * @returns array containing information about date parts - type, position, format
     */
    /**
     * This method generates date parts structure based on editor mask and locale.
     * @param {?} maskValue
     * @param {?=} locale
     * @return {?} array containing information about date parts - type, position, format
     */
    DatePickerUtil.parseDateFormat = /**
     * This method generates date parts structure based on editor mask and locale.
     * @param {?} maskValue
     * @param {?=} locale
     * @return {?} array containing information about date parts - type, position, format
     */
    function (maskValue, locale) {
        if (locale === void 0) { locale = DatePickerUtil.DEFAULT_LOCALE; }
        /** @type {?} */
        var dateStruct = [];
        if (maskValue === undefined && !isIE()) {
            dateStruct = DatePickerUtil.getDefaultLocaleMask(locale);
        }
        else {
            /** @type {?} */
            var mask = (maskValue) ? maskValue : DatePickerUtil.SHORT_DATE_MASK;
            /** @type {?} */
            var maskArray = Array.from(mask);
            /** @type {?} */
            var monthInitPosition = mask.indexOf("M" /* MonthChar */);
            /** @type {?} */
            var dayInitPosition = mask.indexOf("d" /* DayChar */);
            /** @type {?} */
            var yearInitPosition = mask.indexOf("y" /* YearChar */);
            if (yearInitPosition !== -1) {
                dateStruct.push({
                    type: "year" /* Year */,
                    initialPosition: yearInitPosition,
                    formatType: DatePickerUtil.getYearFormatType(mask)
                });
            }
            if (monthInitPosition !== -1) {
                dateStruct.push({
                    type: "month" /* Month */,
                    initialPosition: monthInitPosition,
                    formatType: DatePickerUtil.getMonthFormatType(mask)
                });
            }
            if (dayInitPosition !== -1) {
                dateStruct.push({
                    type: "day" /* Day */,
                    initialPosition: dayInitPosition,
                    formatType: DatePickerUtil.getDayFormatType(mask)
                });
            }
            for (var i = 0; i < maskArray.length; i++) {
                if (!DatePickerUtil.isDateChar(maskArray[i])) {
                    dateStruct.push({
                        type: DatePickerUtil.SEPARATOR,
                        initialPosition: i,
                        value: maskArray[i]
                    });
                }
            }
            dateStruct.sort(function (a, b) { return a.initialPosition - b.initialPosition; });
            DatePickerUtil.fillDatePartsPositions(dateStruct);
        }
        return dateStruct;
    };
    /**
     * This method generates input mask based on date parts.
     * @param dateStruct array
     * @returns input mask
     */
    /**
     * This method generates input mask based on date parts.
     * @param {?} dateStruct array
     * @return {?} input mask
     */
    DatePickerUtil.getInputMask = /**
     * This method generates input mask based on date parts.
     * @param {?} dateStruct array
     * @return {?} input mask
     */
    function (dateStruct) {
        /** @type {?} */
        var inputMask = [];
        for (var i = 0; i < dateStruct.length; i++) {
            if (dateStruct[i].type === DatePickerUtil.SEPARATOR) {
                inputMask.push(dateStruct[i].value);
            }
            else if (dateStruct[i].type === "day" /* Day */ || dateStruct[i].type === "month" /* Month */) {
                inputMask.push('00');
            }
            else if (dateStruct[i].type === "year" /* Year */) {
                switch (dateStruct[i].formatType) {
                    case "numeric" /* Numeric */: {
                        inputMask.push('0000');
                        break;
                    }
                    case "2-digit" /* TwoDigits */: {
                        inputMask.push('00');
                        break;
                    }
                }
            }
        }
        return inputMask.join('');
    };
    /**
     * This method generates editor mask.
     * @param dateStruct
     * @returns editor mask
     */
    /**
     * This method generates editor mask.
     * @param {?} dateStruct
     * @return {?} editor mask
     */
    DatePickerUtil.getMask = /**
     * This method generates editor mask.
     * @param {?} dateStruct
     * @return {?} editor mask
     */
    function (dateStruct) {
        /** @type {?} */
        var mask = [];
        for (var i = 0; i < dateStruct.length; i++) {
            switch (dateStruct[i].formatType) {
                case "numeric" /* Numeric */: {
                    if (dateStruct[i].type === "day" /* Day */) {
                        mask.push('d');
                    }
                    else if (dateStruct[i].type === "month" /* Month */) {
                        mask.push('M');
                    }
                    else {
                        mask.push('yyyy');
                    }
                    break;
                }
                case "2-digit" /* TwoDigits */: {
                    if (dateStruct[i].type === "day" /* Day */) {
                        mask.push('dd');
                    }
                    else if (dateStruct[i].type === "month" /* Month */) {
                        mask.push('MM');
                    }
                    else {
                        mask.push('yy');
                    }
                }
            }
            if (dateStruct[i].type === DatePickerUtil.SEPARATOR) {
                mask.push(dateStruct[i].value);
            }
        }
        return mask.join('');
    };
    /**
     * This method parses an input string base on date parts and returns a date and its validation state.
     * @param dateFormatParts
     * @param prevDateValue
     * @param inputValue
     * @returns object containing a date and its validation state
     */
    /**
     * This method parses an input string base on date parts and returns a date and its validation state.
     * @param {?} dateFormatParts
     * @param {?} prevDateValue
     * @param {?} inputValue
     * @return {?} object containing a date and its validation state
     */
    DatePickerUtil.parseDateArray = /**
     * This method parses an input string base on date parts and returns a date and its validation state.
     * @param {?} dateFormatParts
     * @param {?} prevDateValue
     * @param {?} inputValue
     * @return {?} object containing a date and its validation state
     */
    function (dateFormatParts, prevDateValue, inputValue) {
        /** @type {?} */
        var dayStr = DatePickerUtil.getDayValueFromInput(dateFormatParts, inputValue);
        /** @type {?} */
        var monthStr = DatePickerUtil.getMonthValueFromInput(dateFormatParts, inputValue);
        /** @type {?} */
        var yearStr = DatePickerUtil.getYearValueFromInput(dateFormatParts, inputValue);
        /** @type {?} */
        var yearFormat = DatePickerUtil.getDateFormatPart(dateFormatParts, "year" /* Year */).formatType;
        /** @type {?} */
        var day = (dayStr !== '') ? parseInt(dayStr, 10) : 1;
        /** @type {?} */
        var month = (monthStr !== '') ? parseInt(monthStr, 10) - 1 : 0;
        /** @type {?} */
        var year;
        if (yearStr === '') {
            year = (yearFormat === "2-digit" /* TwoDigits */) ? '00' : '2000';
        }
        else {
            year = yearStr;
        }
        /** @type {?} */
        var yearPrefix;
        if (prevDateValue) {
            /** @type {?} */
            var originalYear = prevDateValue.getFullYear().toString();
            if (originalYear.length === 4) {
                yearPrefix = originalYear.substring(0, 2);
            }
        }
        else {
            yearPrefix = '20';
        }
        /** @type {?} */
        var fullYear = (yearFormat === "2-digit" /* TwoDigits */) ? yearPrefix.concat(year) : year;
        if ((month < 0) || (month > 11) || (month === NaN)) {
            return { state: "invalid" /* Invalid */, value: inputValue };
        }
        if ((day < 1) || (day > DatePickerUtil.daysInMonth(fullYear, month + 1)) || (day === NaN)) {
            return { state: "invalid" /* Invalid */, value: inputValue };
        }
        return { state: "valid" /* Valid */, date: new Date(fullYear, month, day) };
    };
    /**
     * @param {?} mask
     * @return {?}
     */
    DatePickerUtil.maskToPromptChars = /**
     * @param {?} mask
     * @return {?}
     */
    function (mask) {
        /** @type {?} */
        var result = mask.replace(/0|L/g, DatePickerUtil.PROMPT_CHAR);
        return result;
    };
    /**
     * This method replaces prompt chars with empty string.
     * @param value
     */
    /**
     * This method replaces prompt chars with empty string.
     * @param {?} value
     * @return {?}
     */
    DatePickerUtil.trimUnderlines = /**
     * This method replaces prompt chars with empty string.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var result = value.replace(/_/g, '');
        return result;
    };
    /**
     * This method is used for spinning date parts.
     * @param dateFormatParts
     * @param inputValue
     * @param position
     * @param delta
     * @param isSpinLoop
     * @return modified text input
     */
    /**
     * This method is used for spinning date parts.
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?} position
     * @param {?} delta
     * @param {?} isSpinLoop
     * @return {?} modified text input
     */
    DatePickerUtil.getModifiedDateInput = /**
     * This method is used for spinning date parts.
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?} position
     * @param {?} delta
     * @param {?} isSpinLoop
     * @return {?} modified text input
     */
    function (dateFormatParts, inputValue, position, delta, isSpinLoop) {
        /** @type {?} */
        var datePart = DatePickerUtil.getDatePartOnPosition(dateFormatParts, position);
        /** @type {?} */
        var datePartType = datePart.type;
        /** @type {?} */
        var datePartFormatType = datePart.formatType;
        /** @type {?} */
        var newValue;
        /** @type {?} */
        var datePartValue = DatePickerUtil.getDateValueFromInput(dateFormatParts, datePartType, inputValue);
        newValue = parseInt(datePartValue, 10);
        /** @type {?} */
        var maxValue;
        /** @type {?} */
        var minValue;
        /** @type {?} */
        var minMax = DatePickerUtil.getMinMaxValue(dateFormatParts, datePart, inputValue);
        minValue = minMax.min;
        maxValue = minMax.max;
        if (isNaN(newValue)) {
            if (minValue === 'infinite') {
                newValue = 2000;
            }
            else {
                newValue = minValue;
            }
        }
        /** @type {?} */
        var tempValue = newValue;
        tempValue += delta;
        // Infinite loop for full years
        if (maxValue === 'infinite' && minValue === 'infinite') {
            newValue = tempValue;
        }
        if (isSpinLoop) {
            if (tempValue > maxValue) {
                tempValue = minValue;
            }
            if (tempValue < minValue) {
                tempValue = maxValue;
            }
            newValue = tempValue;
        }
        else {
            if (tempValue <= maxValue && tempValue >= minValue) {
                newValue = tempValue;
            }
        }
        /** @type {?} */
        var startIdx = datePart.position[0];
        /** @type {?} */
        var endIdx = datePart.position[1];
        /** @type {?} */
        var start = inputValue.slice(0, startIdx);
        /** @type {?} */
        var end = inputValue.slice(endIdx, inputValue.length);
        /** @type {?} */
        var changedPart;
        /** @type {?} */
        var prefix = DatePickerUtil.getNumericFormatPrefix(datePartFormatType);
        changedPart = (newValue < 10) ? "" + prefix + newValue : "" + newValue;
        return "" + start + changedPart + end;
    };
    /**
     * This method returns date input with prompt chars.
     * @param dateFormatParts
     * @param date
     * @param inputValue
     * @returns date input including prompt chars
     */
    /**
     * This method returns date input with prompt chars.
     * @param {?} dateFormatParts
     * @param {?} date
     * @param {?} inputValue
     * @return {?} date input including prompt chars
     */
    DatePickerUtil.addPromptCharsEditMode = /**
     * This method returns date input with prompt chars.
     * @param {?} dateFormatParts
     * @param {?} date
     * @param {?} inputValue
     * @return {?} date input including prompt chars
     */
    function (dateFormatParts, date, inputValue) {
        /** @type {?} */
        var dateArray = Array.from(inputValue);
        for (var i = 0; i < dateFormatParts.length; i++) {
            if (dateFormatParts[i].formatType === "numeric" /* Numeric */) {
                if ((dateFormatParts[i].type === "day" /* Day */ && date.getDate() < 10)
                    || (dateFormatParts[i].type === "month" /* Month */ && date.getMonth() + 1 < 10)) {
                    dateArray.splice(dateFormatParts[i].position[0], 0, DatePickerUtil.PROMPT_CHAR);
                    dateArray.join('');
                }
            }
        }
        return dateArray.join('');
    };
    /**
     * This method checks if date input is done.
     * @param dateFormatParts
     * @param input
     * @returns input completeness
     */
    /**
     * This method checks if date input is done.
     * @param {?} dateFormatParts
     * @param {?} input
     * @return {?} input completeness
     */
    DatePickerUtil.checkForCompleteDateInput = /**
     * This method checks if date input is done.
     * @param {?} dateFormatParts
     * @param {?} input
     * @return {?} input completeness
     */
    function (dateFormatParts, input) {
        /** @type {?} */
        var dayValue = DatePickerUtil.getDayValueFromInput(dateFormatParts, input);
        /** @type {?} */
        var monthValue = DatePickerUtil.getMonthValueFromInput(dateFormatParts, input);
        /** @type {?} */
        var yearValue = DatePickerUtil.getYearValueFromInput(dateFormatParts, input);
        /** @type {?} */
        var dayStr = DatePickerUtil.getDayValueFromInput(dateFormatParts, input, false);
        /** @type {?} */
        var monthStr = DatePickerUtil.getMonthValueFromInput(dateFormatParts, input, false);
        if (DatePickerUtil.isFullInput(dayValue, dayStr)
            && DatePickerUtil.isFullInput(monthValue, monthStr)
            && DatePickerUtil.isFullYearInput(dateFormatParts, yearValue)) {
            return 'complete';
        }
        else if (dayValue === '' && monthValue === '' && yearValue === '') {
            return 'empty';
        }
        else if (dayValue === '' || monthValue === '' || yearValue === '') {
            return 'partial';
        }
        return '';
    };
    /**
     * @private
     * @param {?} format
     * @return {?}
     */
    DatePickerUtil.getYearFormatType = /**
     * @private
     * @param {?} format
     * @return {?}
     */
    function (format) {
        switch (format.match(new RegExp("y" /* YearChar */, 'g')).length) {
            case 1: {
                // y (2020)
                return "numeric" /* Numeric */;
            }
            case 4: {
                // yyyy (2020)
                return "numeric" /* Numeric */;
            }
            case 2: {
                // yy (20)
                return "2-digit" /* TwoDigits */;
            }
        }
    };
    /**
     * @private
     * @param {?} format
     * @return {?}
     */
    DatePickerUtil.getMonthFormatType = /**
     * @private
     * @param {?} format
     * @return {?}
     */
    function (format) {
        switch (format.match(new RegExp("M" /* MonthChar */, 'g')).length) {
            case 1: {
                // M (8)
                return "numeric" /* Numeric */;
            }
            case 2: {
                // MM (08)
                return "2-digit" /* TwoDigits */;
            }
        }
    };
    /**
     * @private
     * @param {?} format
     * @return {?}
     */
    DatePickerUtil.getDayFormatType = /**
     * @private
     * @param {?} format
     * @return {?}
     */
    function (format) {
        switch (format.match(new RegExp("d" /* DayChar */, 'g')).length) {
            case 1: {
                // d (6)
                return "numeric" /* Numeric */;
            }
            case 2: {
                // dd (06)
                return "2-digit" /* TwoDigits */;
            }
        }
    };
    /**
     * @private
     * @param {?} locale
     * @return {?}
     */
    DatePickerUtil.getDefaultLocaleMask = /**
     * @private
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        /** @type {?} */
        var dateStruct = [];
        /** @type {?} */
        var formatter = new Intl.DateTimeFormat(locale);
        /** @type {?} */
        var formatToParts = formatter.formatToParts(new Date());
        for (var i = 0; i < formatToParts.length; i++) {
            if (formatToParts[i].type === DatePickerUtil.SEPARATOR) {
                dateStruct.push({
                    type: DatePickerUtil.SEPARATOR,
                    value: formatToParts[i].value
                });
            }
            else {
                dateStruct.push({
                    type: formatToParts[i].type,
                });
            }
        }
        /** @type {?} */
        var formatterOptions = formatter.resolvedOptions();
        for (var i = 0; i < dateStruct.length; i++) {
            switch (dateStruct[i].type) {
                case "day" /* Day */: {
                    dateStruct[i].formatType = formatterOptions.day;
                    break;
                }
                case "month" /* Month */: {
                    dateStruct[i].formatType = formatterOptions.month;
                    break;
                }
                case "year" /* Year */: {
                    dateStruct[i].formatType = formatterOptions.month;
                    break;
                }
            }
        }
        DatePickerUtil.fillDatePartsPositions(dateStruct);
        return dateStruct;
    };
    /**
     * @private
     * @param {?} char
     * @return {?}
     */
    DatePickerUtil.isDateChar = /**
     * @private
     * @param {?} char
     * @return {?}
     */
    function (char) {
        return (char === "y" /* YearChar */ || char === "M" /* MonthChar */ || char === "d" /* DayChar */);
    };
    /**
     * @private
     * @param {?} formatType
     * @return {?}
     */
    DatePickerUtil.getNumericFormatPrefix = /**
     * @private
     * @param {?} formatType
     * @return {?}
     */
    function (formatType) {
        switch (formatType) {
            case "2-digit" /* TwoDigits */: {
                return '0';
            }
            case "numeric" /* Numeric */: {
                return DatePickerUtil.PROMPT_CHAR;
            }
        }
    };
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} datePart
     * @param {?} inputValue
     * @return {?}
     */
    DatePickerUtil.getMinMaxValue = /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} datePart
     * @param {?} inputValue
     * @return {?}
     */
    function (dateFormatParts, datePart, inputValue) {
        /** @type {?} */
        var maxValue;
        /** @type {?} */
        var minValue;
        switch (datePart.type) {
            case "month" /* Month */: {
                minValue = 1;
                maxValue = DatePickerUtil.NUMBER_OF_MONTHS;
                break;
            }
            case "day" /* Day */: {
                minValue = 1;
                maxValue = DatePickerUtil.daysInMonth(DatePickerUtil.getFullYearFromString(DatePickerUtil.getDateFormatPart(dateFormatParts, "year" /* Year */), inputValue), parseInt(DatePickerUtil.getMonthValueFromInput(dateFormatParts, inputValue), 10));
                break;
            }
            case "year" /* Year */: {
                if (datePart.formatType === "2-digit" /* TwoDigits */) {
                    minValue = 0;
                    maxValue = 99;
                }
                else {
                    // Infinite loop
                    minValue = 'infinite';
                    maxValue = 'infinite';
                }
                break;
            }
        }
        return { min: minValue, max: maxValue };
    };
    /**
     * @private
     * @param {?} fullYear
     * @param {?} month
     * @return {?}
     */
    DatePickerUtil.daysInMonth = /**
     * @private
     * @param {?} fullYear
     * @param {?} month
     * @return {?}
     */
    function (fullYear, month) {
        return new Date(fullYear, month, 0).getDate();
    };
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} type
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    DatePickerUtil.getDateValueFromInput = /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} type
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    function (dateFormatParts, type, inputValue, trim) {
        if (trim === void 0) { trim = true; }
        /** @type {?} */
        var partPosition = DatePickerUtil.getDateFormatPart(dateFormatParts, type).position;
        /** @type {?} */
        var result = inputValue.substring(partPosition[0], partPosition[1]);
        return (trim) ? DatePickerUtil.trimUnderlines(result) : result;
    };
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    DatePickerUtil.getDayValueFromInput = /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    function (dateFormatParts, inputValue, trim) {
        if (trim === void 0) { trim = true; }
        return DatePickerUtil.getDateValueFromInput(dateFormatParts, "day" /* Day */, inputValue, trim);
    };
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    DatePickerUtil.getMonthValueFromInput = /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    function (dateFormatParts, inputValue, trim) {
        if (trim === void 0) { trim = true; }
        return DatePickerUtil.getDateValueFromInput(dateFormatParts, "month" /* Month */, inputValue, trim);
    };
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    DatePickerUtil.getYearValueFromInput = /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    function (dateFormatParts, inputValue, trim) {
        if (trim === void 0) { trim = true; }
        return DatePickerUtil.getDateValueFromInput(dateFormatParts, "year" /* Year */, inputValue, trim);
    };
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} type
     * @return {?}
     */
    DatePickerUtil.getDateFormatPart = /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} type
     * @return {?}
     */
    function (dateFormatParts, type) {
        /** @type {?} */
        var result = dateFormatParts.filter(function (datePart) { return (datePart.type === type); })[0];
        return result;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} input
     * @return {?}
     */
    DatePickerUtil.isFullInput = /**
     * @private
     * @param {?} value
     * @param {?} input
     * @return {?}
     */
    function (value, input) {
        return (value !== '' && input.length === 2 && input.charAt(1) !== DatePickerUtil.PROMPT_CHAR);
    };
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} value
     * @return {?}
     */
    DatePickerUtil.isFullYearInput = /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} value
     * @return {?}
     */
    function (dateFormatParts, value) {
        switch (DatePickerUtil.getDateFormatPart(dateFormatParts, "year" /* Year */).formatType) {
            case "numeric" /* Numeric */: {
                return (value !== '' && value.length === 4);
            }
            case "2-digit" /* TwoDigits */: {
                return (value !== '' && value.length === 2);
            }
            default: {
                return false;
            }
        }
    };
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} position
     * @return {?}
     */
    DatePickerUtil.getDatePartOnPosition = /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} position
     * @return {?}
     */
    function (dateFormatParts, position) {
        /** @type {?} */
        var result = dateFormatParts.filter(function (element) {
            return element.position[0] <= position && position <= element.position[1] && element.type !== DatePickerUtil.SEPARATOR;
        })[0];
        return result;
    };
    /**
     * @private
     * @param {?} yearPart
     * @param {?} inputValue
     * @return {?}
     */
    DatePickerUtil.getFullYearFromString = /**
     * @private
     * @param {?} yearPart
     * @param {?} inputValue
     * @return {?}
     */
    function (yearPart, inputValue) {
        return parseInt(inputValue.substring(yearPart.position[0], yearPart.position[1]), 10);
    };
    /**
     * @private
     * @param {?} dateArray
     * @return {?}
     */
    DatePickerUtil.fillDatePartsPositions = /**
     * @private
     * @param {?} dateArray
     * @return {?}
     */
    function (dateArray) {
        /** @type {?} */
        var currentPos = 0;
        for (var i = 0; i < dateArray.length; i++) {
            // Day|Month part positions
            if (dateArray[i].type === "day" /* Day */ || dateArray[i].type === "month" /* Month */) {
                // Offset 2 positions for number
                dateArray[i].position = [currentPos, currentPos + 2];
                currentPos += 2;
            }
            else if (dateArray[i].type === "year" /* Year */) {
                // Year part positions
                switch (dateArray[i].formatType) {
                    case "numeric" /* Numeric */: {
                        // Offset 4 positions for full year
                        dateArray[i].position = [currentPos, currentPos + 4];
                        currentPos += 4;
                        break;
                    }
                    case "2-digit" /* TwoDigits */: {
                        // Offset 2 positions for short year
                        dateArray[i].position = [currentPos, currentPos + 2];
                        currentPos += 2;
                        break;
                    }
                }
            }
            else if (dateArray[i].type === DatePickerUtil.SEPARATOR) {
                // Separator positions
                dateArray[i].position = [currentPos, currentPos + 1];
                currentPos++;
            }
        }
    };
    DatePickerUtil.SHORT_DATE_MASK = 'MM/dd/yy';
    DatePickerUtil.SEPARATOR = 'literal';
    DatePickerUtil.NUMBER_OF_MONTHS = 12;
    DatePickerUtil.PROMPT_CHAR = '_';
    DatePickerUtil.DEFAULT_LOCALE = 'en';
    return DatePickerUtil;
}());
export { DatePickerUtil };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatePickerUtil.SHORT_DATE_MASK;
    /**
     * @type {?}
     * @private
     */
    DatePickerUtil.SEPARATOR;
    /**
     * @type {?}
     * @private
     */
    DatePickerUtil.NUMBER_OF_MONTHS;
    /**
     * @type {?}
     * @private
     */
    DatePickerUtil.PROMPT_CHAR;
    /**
     * @type {?}
     * @private
     */
    DatePickerUtil.DEFAULT_LOCALE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIudXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFRakMsT0FBUSxPQUFPO0lBQ2YsU0FBVSxTQUFTOzs7OztJQU9uQixTQUFVLFNBQVM7SUFDbkIsV0FBWSxTQUFTOzs7O0lBT3JCLFVBQVcsR0FBRztJQUNkLFdBQVksR0FBRztJQUNmLFNBQVUsR0FBRzs7OztJQU9iLEtBQU0sS0FBSztJQUNYLE9BQVEsT0FBTztJQUNmLE1BQU8sTUFBTTs7Ozs7O0FBTWpCO0lBQUE7SUFnZ0JBLENBQUM7SUF6Zkc7Ozs7O09BS0c7Ozs7Ozs7SUFDVyw4QkFBZTs7Ozs7O0lBQTdCLFVBQThCLFNBQWlCLEVBQUUsTUFBOEM7UUFBOUMsdUJBQUEsRUFBQSxTQUFpQixjQUFjLENBQUMsY0FBYzs7WUFDdkYsVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDcEMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1RDthQUFNOztnQkFDRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZTs7Z0JBQy9ELFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Z0JBQzVCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQjs7Z0JBQ3JELGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxtQkFBbUI7O2dCQUNqRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxvQkFBb0I7WUFFekQsSUFBSSxn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LENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3JELFVBQVUsSUFBSSxDQUFDLENBQUM7d0JBQ2hCLE1BQU07cUJBQ1Q7aUJBQ0o7YUFDSjtpQkFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLFNBQVMsRUFBRTtnQkFDdkQsc0JBQXNCO2dCQUN0QixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckQsVUFBVSxFQUFFLENBQUM7YUFDaEI7U0FDSjtJQUNMLENBQUM7SUE5ZnVCLDhCQUFlLEdBQUcsVUFBVSxDQUFDO0lBQzdCLHdCQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ3RCLCtCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUN0QiwwQkFBVyxHQUFHLEdBQUcsQ0FBQztJQUNsQiw2QkFBYyxHQUFHLElBQUksQ0FBQztJQTJmbEQscUJBQUM7Q0FBQSxBQWhnQkQsSUFnZ0JDO1NBaGdCcUIsY0FBYzs7Ozs7O0lBQ2hDLCtCQUFxRDs7Ozs7SUFDckQseUJBQThDOzs7OztJQUM5QyxnQ0FBOEM7Ozs7O0lBQzlDLDJCQUEwQzs7Ozs7SUFDMUMsOEJBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgZW51bSBpcyB1c2VkIHRvIGtlZXAgdGhlIGRhdGUgdmFsaWRhdGlvbiByZXN1bHQuXG4gKlxuICpAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIERhdGVTdGF0ZSB7XG4gICAgVmFsaWQgPSAndmFsaWQnLFxuICAgIEludmFsaWQgPSAnaW52YWxpZCcsXG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbmNvbnN0IGVudW0gRm9ybWF0RGVzYyB7XG4gICAgTnVtZXJpYyA9ICdudW1lcmljJyxcbiAgICBUd29EaWdpdHMgPSAnMi1kaWdpdCdcbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuY29uc3QgZW51bSBEYXRlQ2hhcnMge1xuICAgIFllYXJDaGFyID0gJ3knLFxuICAgIE1vbnRoQ2hhciA9ICdNJyxcbiAgICBEYXlDaGFyID0gJ2QnXG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbmNvbnN0IGVudW0gRGF0ZVBhcnRzIHtcbiAgICBEYXkgPSAnZGF5JyxcbiAgICBNb250aCA9ICdtb250aCcsXG4gICAgWWVhciA9ICd5ZWFyJ1xufVxuXG4vKipcbiAqQGhpZGRlblxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZVBpY2tlclV0aWwge1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNIT1JUX0RBVEVfTUFTSyA9ICdNTS9kZC95eSc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU0VQQVJBVE9SID0gJ2xpdGVyYWwnO1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5VTUJFUl9PRl9NT05USFMgPSAxMjtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBQUk9NUFRfQ0hBUiA9ICdfJztcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0xPQ0FMRSA9ICdlbic7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBnZW5lcmF0ZXMgZGF0ZSBwYXJ0cyBzdHJ1Y3R1cmUgYmFzZWQgb24gZWRpdG9yIG1hc2sgYW5kIGxvY2FsZS5cbiAgICAgKiBAcGFyYW0gbWFza1ZhbHVlOiBzdHJpbmdcbiAgICAgKiBAcGFyYW0gbG9jYWxlOiBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBhcnJheSBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IGRhdGUgcGFydHMgLSB0eXBlLCBwb3NpdGlvbiwgZm9ybWF0XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZURhdGVGb3JtYXQobWFza1ZhbHVlOiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nID0gRGF0ZVBpY2tlclV0aWwuREVGQVVMVF9MT0NBTEUpOiBhbnlbXSB7XG4gICAgICAgIGxldCBkYXRlU3RydWN0ID0gW107XG4gICAgICAgIGlmIChtYXNrVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhaXNJRSgpKSB7XG4gICAgICAgICAgICBkYXRlU3RydWN0ID0gRGF0ZVBpY2tlclV0aWwuZ2V0RGVmYXVsdExvY2FsZU1hc2sobG9jYWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2sgPSAobWFza1ZhbHVlKSA/IG1hc2tWYWx1ZSA6IERhdGVQaWNrZXJVdGlsLlNIT1JUX0RBVEVfTUFTSztcbiAgICAgICAgICAgIGNvbnN0IG1hc2tBcnJheSA9IEFycmF5LmZyb20obWFzayk7XG4gICAgICAgICAgICBjb25zdCBtb250aEluaXRQb3NpdGlvbiA9IG1hc2suaW5kZXhPZihEYXRlQ2hhcnMuTW9udGhDaGFyKTtcbiAgICAgICAgICAgIGNvbnN0IGRheUluaXRQb3NpdGlvbiA9IG1hc2suaW5kZXhPZihEYXRlQ2hhcnMuRGF5Q2hhcik7XG4gICAgICAgICAgICBjb25zdCB5ZWFySW5pdFBvc2l0aW9uID0gbWFzay5pbmRleE9mKERhdGVDaGFycy5ZZWFyQ2hhcik7XG5cbiAgICAgICAgICAgIGlmICh5ZWFySW5pdFBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGRhdGVTdHJ1Y3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGVQYXJ0cy5ZZWFyLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsUG9zaXRpb246IHllYXJJbml0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFR5cGU6IERhdGVQaWNrZXJVdGlsLmdldFllYXJGb3JtYXRUeXBlKG1hc2spXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb250aEluaXRQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBkYXRlU3RydWN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRlUGFydHMuTW9udGgsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxQb3NpdGlvbjogbW9udGhJbml0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFR5cGU6IERhdGVQaWNrZXJVdGlsLmdldE1vbnRoRm9ybWF0VHlwZShtYXNrKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF5SW5pdFBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGRhdGVTdHJ1Y3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGVQYXJ0cy5EYXksXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxQb3NpdGlvbjogZGF5SW5pdFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXRUeXBlOiBEYXRlUGlja2VyVXRpbC5nZXREYXlGb3JtYXRUeXBlKG1hc2spXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFEYXRlUGlja2VyVXRpbC5pc0RhdGVDaGFyKG1hc2tBcnJheVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVN0cnVjdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGVQaWNrZXJVdGlsLlNFUEFSQVRPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxQb3NpdGlvbjogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtYXNrQXJyYXlbaV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRlU3RydWN0LnNvcnQoKGEsIGIpID0+IGEuaW5pdGlhbFBvc2l0aW9uIC0gYi5pbml0aWFsUG9zaXRpb24pO1xuICAgICAgICAgICAgRGF0ZVBpY2tlclV0aWwuZmlsbERhdGVQYXJ0c1Bvc2l0aW9ucyhkYXRlU3RydWN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZVN0cnVjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBnZW5lcmF0ZXMgaW5wdXQgbWFzayBiYXNlZCBvbiBkYXRlIHBhcnRzLlxuICAgICAqIEBwYXJhbSBkYXRlU3RydWN0IGFycmF5XG4gICAgICogQHJldHVybnMgaW5wdXQgbWFza1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5wdXRNYXNrKGRhdGVTdHJ1Y3Q6IGFueVtdKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaW5wdXRNYXNrID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0ZVN0cnVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGVTdHJ1Y3RbaV0udHlwZSA9PT0gRGF0ZVBpY2tlclV0aWwuU0VQQVJBVE9SKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRNYXNrLnB1c2goZGF0ZVN0cnVjdFtpXS52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVTdHJ1Y3RbaV0udHlwZSA9PT0gRGF0ZVBhcnRzLkRheSB8fCBkYXRlU3RydWN0W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5Nb250aCkge1xuICAgICAgICAgICAgICAgIGlucHV0TWFzay5wdXNoKCcwMCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlU3RydWN0W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChkYXRlU3RydWN0W2ldLmZvcm1hdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGb3JtYXREZXNjLk51bWVyaWM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TWFzay5wdXNoKCcwMDAwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZvcm1hdERlc2MuVHdvRGlnaXRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1hc2sucHVzaCgnMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dE1hc2suam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgZ2VuZXJhdGVzIGVkaXRvciBtYXNrLlxuICAgICAqIEBwYXJhbSBkYXRlU3RydWN0XG4gICAgICogQHJldHVybnMgZWRpdG9yIG1hc2tcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldE1hc2soZGF0ZVN0cnVjdDogYW55W10pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBtYXNrID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0ZVN0cnVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3dpdGNoIChkYXRlU3RydWN0W2ldLmZvcm1hdFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZvcm1hdERlc2MuTnVtZXJpYzoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZVN0cnVjdFtpXS50eXBlID09PSBEYXRlUGFydHMuRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrLnB1c2goJ2QnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlU3RydWN0W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5Nb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzay5wdXNoKCdNJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrLnB1c2goJ3l5eXknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBGb3JtYXREZXNjLlR3b0RpZ2l0czoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZVN0cnVjdFtpXS50eXBlID09PSBEYXRlUGFydHMuRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrLnB1c2goJ2RkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZVN0cnVjdFtpXS50eXBlID09PSBEYXRlUGFydHMuTW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2sucHVzaCgnTU0nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2sucHVzaCgneXknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGVTdHJ1Y3RbaV0udHlwZSA9PT0gRGF0ZVBpY2tlclV0aWwuU0VQQVJBVE9SKSB7XG4gICAgICAgICAgICAgICAgbWFzay5wdXNoKGRhdGVTdHJ1Y3RbaV0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hc2suam9pbignJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHBhcnNlcyBhbiBpbnB1dCBzdHJpbmcgYmFzZSBvbiBkYXRlIHBhcnRzIGFuZCByZXR1cm5zIGEgZGF0ZSBhbmQgaXRzIHZhbGlkYXRpb24gc3RhdGUuXG4gICAgICogQHBhcmFtIGRhdGVGb3JtYXRQYXJ0c1xuICAgICAqIEBwYXJhbSBwcmV2RGF0ZVZhbHVlXG4gICAgICogQHBhcmFtIGlucHV0VmFsdWVcbiAgICAgKiBAcmV0dXJucyBvYmplY3QgY29udGFpbmluZyBhIGRhdGUgYW5kIGl0cyB2YWxpZGF0aW9uIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZURhdGVBcnJheShkYXRlRm9ybWF0UGFydHM6IGFueVtdLCBwcmV2RGF0ZVZhbHVlOiBEYXRlLCBpbnB1dFZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCBkYXlTdHIgPSBEYXRlUGlja2VyVXRpbC5nZXREYXlWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIGlucHV0VmFsdWUpO1xuICAgICAgICBjb25zdCBtb250aFN0ciA9IERhdGVQaWNrZXJVdGlsLmdldE1vbnRoVmFsdWVGcm9tSW5wdXQoZGF0ZUZvcm1hdFBhcnRzLCBpbnB1dFZhbHVlKTtcbiAgICAgICAgY29uc3QgeWVhclN0ciA9IERhdGVQaWNrZXJVdGlsLmdldFllYXJWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIGlucHV0VmFsdWUpO1xuICAgICAgICBjb25zdCB5ZWFyRm9ybWF0ID0gRGF0ZVBpY2tlclV0aWwuZ2V0RGF0ZUZvcm1hdFBhcnQoZGF0ZUZvcm1hdFBhcnRzLCBEYXRlUGFydHMuWWVhcikuZm9ybWF0VHlwZTtcbiAgICAgICAgY29uc3QgZGF5ID0gKGRheVN0ciAhPT0gJycpID8gcGFyc2VJbnQoZGF5U3RyLCAxMCkgOiAxO1xuICAgICAgICBjb25zdCBtb250aCA9IChtb250aFN0ciAhPT0gJycpID8gcGFyc2VJbnQobW9udGhTdHIsIDEwKSAtIDEgOiAwO1xuXG4gICAgICAgIGxldCB5ZWFyO1xuICAgICAgICBpZiAoeWVhclN0ciA9PT0gJycpIHtcbiAgICAgICAgICAgIHllYXIgPSAoeWVhckZvcm1hdCA9PT0gRm9ybWF0RGVzYy5Ud29EaWdpdHMpID8gJzAwJyA6ICcyMDAwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXIgPSB5ZWFyU3RyO1xuICAgICAgICB9XG4gICAgICAgIGxldCB5ZWFyUHJlZml4O1xuICAgICAgICBpZiAocHJldkRhdGVWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxZZWFyID0gcHJldkRhdGVWYWx1ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxZZWFyLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHllYXJQcmVmaXggPSBvcmlnaW5hbFllYXIuc3Vic3RyaW5nKDAsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhclByZWZpeCA9ICcyMCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnVsbFllYXIgPSAoeWVhckZvcm1hdCA9PT0gRm9ybWF0RGVzYy5Ud29EaWdpdHMpID8geWVhclByZWZpeC5jb25jYXQoeWVhcikgOiB5ZWFyO1xuXG4gICAgICAgIGlmICgobW9udGggPCAwKSB8fCAobW9udGggPiAxMSkgfHwgKG1vbnRoID09PSBOYU4pKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0ZTogRGF0ZVN0YXRlLkludmFsaWQsIHZhbHVlOiBpbnB1dFZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKGRheSA8IDEpIHx8IChkYXkgPiBEYXRlUGlja2VyVXRpbC5kYXlzSW5Nb250aChmdWxsWWVhciwgbW9udGggKyAxKSkgfHwgKGRheSA9PT0gTmFOKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdGU6IERhdGVTdGF0ZS5JbnZhbGlkLCB2YWx1ZTogaW5wdXRWYWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3RhdGU6IERhdGVTdGF0ZS5WYWxpZCwgZGF0ZTogbmV3IERhdGUoZnVsbFllYXIsIG1vbnRoLCBkYXkpIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXNrVG9Qcm9tcHRDaGFycyhtYXNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBtYXNrLnJlcGxhY2UoLzB8TC9nLCBEYXRlUGlja2VyVXRpbC5QUk9NUFRfQ0hBUik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmVwbGFjZXMgcHJvbXB0IGNoYXJzIHdpdGggZW1wdHkgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdHJpbVVuZGVybGluZXModmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlLnJlcGxhY2UoL18vZywgJycpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgZm9yIHNwaW5uaW5nIGRhdGUgcGFydHMuXG4gICAgICogQHBhcmFtIGRhdGVGb3JtYXRQYXJ0c1xuICAgICAqIEBwYXJhbSBpbnB1dFZhbHVlXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIGRlbHRhXG4gICAgICogQHBhcmFtIGlzU3Bpbkxvb3BcbiAgICAgKiBAcmV0dXJuIG1vZGlmaWVkIHRleHQgaW5wdXRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldE1vZGlmaWVkRGF0ZUlucHV0KGRhdGVGb3JtYXRQYXJ0czogYW55W10sXG4gICAgICAgIGlucHV0VmFsdWU6IHN0cmluZyxcbiAgICAgICAgcG9zaXRpb246IG51bWJlcixcbiAgICAgICAgZGVsdGE6IG51bWJlcixcbiAgICAgICAgaXNTcGluTG9vcDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRhdGVQYXJ0ID0gRGF0ZVBpY2tlclV0aWwuZ2V0RGF0ZVBhcnRPblBvc2l0aW9uKGRhdGVGb3JtYXRQYXJ0cywgcG9zaXRpb24pO1xuICAgICAgICBjb25zdCBkYXRlUGFydFR5cGUgPSBkYXRlUGFydC50eXBlO1xuICAgICAgICBjb25zdCBkYXRlUGFydEZvcm1hdFR5cGUgPSBkYXRlUGFydC5mb3JtYXRUeXBlO1xuICAgICAgICBsZXQgbmV3VmFsdWU7XG5cbiAgICAgICAgY29uc3QgZGF0ZVBhcnRWYWx1ZSA9IERhdGVQaWNrZXJVdGlsLmdldERhdGVWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIGRhdGVQYXJ0VHlwZSwgaW5wdXRWYWx1ZSk7XG4gICAgICAgIG5ld1ZhbHVlID0gcGFyc2VJbnQoZGF0ZVBhcnRWYWx1ZSwgMTApO1xuXG4gICAgICAgIGxldCBtYXhWYWx1ZSwgbWluVmFsdWU7XG4gICAgICAgIGNvbnN0IG1pbk1heCA9IERhdGVQaWNrZXJVdGlsLmdldE1pbk1heFZhbHVlKGRhdGVGb3JtYXRQYXJ0cywgZGF0ZVBhcnQsIGlucHV0VmFsdWUpO1xuICAgICAgICBtaW5WYWx1ZSA9IG1pbk1heC5taW47XG4gICAgICAgIG1heFZhbHVlID0gbWluTWF4Lm1heDtcblxuICAgICAgICBpZiAoaXNOYU4obmV3VmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAobWluVmFsdWUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IDIwMDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gbWluVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0ZW1wVmFsdWUgKz0gZGVsdGE7XG5cbiAgICAgICAgLy8gSW5maW5pdGUgbG9vcCBmb3IgZnVsbCB5ZWFyc1xuICAgICAgICBpZiAobWF4VmFsdWUgPT09ICdpbmZpbml0ZScgJiYgbWluVmFsdWUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGVtcFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU3Bpbkxvb3ApIHtcbiAgICAgICAgICAgIGlmICh0ZW1wVmFsdWUgPiBtYXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IG1pblZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlbXBWYWx1ZSA8IG1pblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gbWF4VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRlbXBWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0ZW1wVmFsdWUgPD0gbWF4VmFsdWUgJiYgdGVtcFZhbHVlID49IG1pblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0ZW1wVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydElkeCA9IGRhdGVQYXJ0LnBvc2l0aW9uWzBdO1xuICAgICAgICBjb25zdCBlbmRJZHggPSBkYXRlUGFydC5wb3NpdGlvblsxXTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbnB1dFZhbHVlLnNsaWNlKDAsIHN0YXJ0SWR4KTtcbiAgICAgICAgY29uc3QgZW5kID0gaW5wdXRWYWx1ZS5zbGljZShlbmRJZHgsIGlucHV0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgbGV0IGNoYW5nZWRQYXJ0OiBzdHJpbmc7XG5cbiAgICAgICAgY29uc3QgcHJlZml4ID0gRGF0ZVBpY2tlclV0aWwuZ2V0TnVtZXJpY0Zvcm1hdFByZWZpeChkYXRlUGFydEZvcm1hdFR5cGUpO1xuICAgICAgICBjaGFuZ2VkUGFydCA9IChuZXdWYWx1ZSA8IDEwKSA/IGAke3ByZWZpeH0ke25ld1ZhbHVlfWAgOiBgJHtuZXdWYWx1ZX1gO1xuXG4gICAgICAgIHJldHVybiBgJHtzdGFydH0ke2NoYW5nZWRQYXJ0fSR7ZW5kfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBkYXRlIGlucHV0IHdpdGggcHJvbXB0IGNoYXJzLlxuICAgICAqIEBwYXJhbSBkYXRlRm9ybWF0UGFydHNcbiAgICAgKiBAcGFyYW0gZGF0ZVxuICAgICAqIEBwYXJhbSBpbnB1dFZhbHVlXG4gICAgICogQHJldHVybnMgZGF0ZSBpbnB1dCBpbmNsdWRpbmcgcHJvbXB0IGNoYXJzXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhZGRQcm9tcHRDaGFyc0VkaXRNb2RlKGRhdGVGb3JtYXRQYXJ0czogYW55W10sIGRhdGU6IERhdGUsIGlucHV0VmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRhdGVBcnJheSA9IEFycmF5LmZyb20oaW5wdXRWYWx1ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0ZUZvcm1hdFBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZUZvcm1hdFBhcnRzW2ldLmZvcm1hdFR5cGUgPT09IEZvcm1hdERlc2MuTnVtZXJpYykge1xuICAgICAgICAgICAgICAgIGlmICgoZGF0ZUZvcm1hdFBhcnRzW2ldLnR5cGUgPT09IERhdGVQYXJ0cy5EYXkgJiYgZGF0ZS5nZXREYXRlKCkgPCAxMClcbiAgICAgICAgICAgICAgICAgICAgfHwgKGRhdGVGb3JtYXRQYXJ0c1tpXS50eXBlID09PSBEYXRlUGFydHMuTW9udGggJiYgZGF0ZS5nZXRNb250aCgpICsgMSA8IDEwKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlQXJyYXkuc3BsaWNlKGRhdGVGb3JtYXRQYXJ0c1tpXS5wb3NpdGlvblswXSwgMCwgRGF0ZVBpY2tlclV0aWwuUFJPTVBUX0NIQVIpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlQXJyYXkuam9pbignJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlQXJyYXkuam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgY2hlY2tzIGlmIGRhdGUgaW5wdXQgaXMgZG9uZS5cbiAgICAgKiBAcGFyYW0gZGF0ZUZvcm1hdFBhcnRzXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnMgaW5wdXQgY29tcGxldGVuZXNzXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjaGVja0ZvckNvbXBsZXRlRGF0ZUlucHV0KGRhdGVGb3JtYXRQYXJ0czogYW55W10sIGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkYXlWYWx1ZSA9IERhdGVQaWNrZXJVdGlsLmdldERheVZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgaW5wdXQpO1xuICAgICAgICBjb25zdCBtb250aFZhbHVlID0gRGF0ZVBpY2tlclV0aWwuZ2V0TW9udGhWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIGlucHV0KTtcbiAgICAgICAgY29uc3QgeWVhclZhbHVlID0gRGF0ZVBpY2tlclV0aWwuZ2V0WWVhclZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgaW5wdXQpO1xuICAgICAgICBjb25zdCBkYXlTdHIgPSBEYXRlUGlja2VyVXRpbC5nZXREYXlWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIGlucHV0LCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IG1vbnRoU3RyID0gRGF0ZVBpY2tlclV0aWwuZ2V0TW9udGhWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIGlucHV0LCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKERhdGVQaWNrZXJVdGlsLmlzRnVsbElucHV0KGRheVZhbHVlLCBkYXlTdHIpXG4gICAgICAgICAgICAmJiBEYXRlUGlja2VyVXRpbC5pc0Z1bGxJbnB1dChtb250aFZhbHVlLCBtb250aFN0cilcbiAgICAgICAgICAgICYmIERhdGVQaWNrZXJVdGlsLmlzRnVsbFllYXJJbnB1dChkYXRlRm9ybWF0UGFydHMsIHllYXJWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnY29tcGxldGUnO1xuICAgICAgICB9IGVsc2UgaWYgKGRheVZhbHVlID09PSAnJyAmJiBtb250aFZhbHVlID09PSAnJyAmJiB5ZWFyVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VtcHR5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlWYWx1ZSA9PT0gJycgfHwgbW9udGhWYWx1ZSA9PT0gJycgfHwgeWVhclZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuICdwYXJ0aWFsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0WWVhckZvcm1hdFR5cGUoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdC5tYXRjaChuZXcgUmVnRXhwKERhdGVDaGFycy5ZZWFyQ2hhciwgJ2cnKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICAvLyB5ICgyMDIwKVxuICAgICAgICAgICAgICAgIHJldHVybiBGb3JtYXREZXNjLk51bWVyaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDQ6IHtcbiAgICAgICAgICAgICAgICAvLyB5eXl5ICgyMDIwKVxuICAgICAgICAgICAgICAgIHJldHVybiBGb3JtYXREZXNjLk51bWVyaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgICAgICAvLyB5eSAoMjApXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm1hdERlc2MuVHdvRGlnaXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TW9udGhGb3JtYXRUeXBlKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQubWF0Y2gobmV3IFJlZ0V4cChEYXRlQ2hhcnMuTW9udGhDaGFyLCAnZycpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgIC8vIE0gKDgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm1hdERlc2MuTnVtZXJpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIC8vIE1NICgwOClcbiAgICAgICAgICAgICAgICByZXR1cm4gRm9ybWF0RGVzYy5Ud29EaWdpdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXREYXlGb3JtYXRUeXBlKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQubWF0Y2gobmV3IFJlZ0V4cChEYXRlQ2hhcnMuRGF5Q2hhciwgJ2cnKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICAvLyBkICg2KVxuICAgICAgICAgICAgICAgIHJldHVybiBGb3JtYXREZXNjLk51bWVyaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgICAgICAvLyBkZCAoMDYpXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm1hdERlc2MuVHdvRGlnaXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RGVmYXVsdExvY2FsZU1hc2sobG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZVN0cnVjdCA9IFtdO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUpO1xuICAgICAgICBjb25zdCBmb3JtYXRUb1BhcnRzID0gZm9ybWF0dGVyLmZvcm1hdFRvUGFydHMobmV3IERhdGUoKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0VG9QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZvcm1hdFRvUGFydHNbaV0udHlwZSA9PT0gRGF0ZVBpY2tlclV0aWwuU0VQQVJBVE9SKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVN0cnVjdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0ZVBpY2tlclV0aWwuU0VQQVJBVE9SLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0VG9QYXJ0c1tpXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlU3RydWN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmb3JtYXRUb1BhcnRzW2ldLnR5cGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IGZvcm1hdHRlci5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRlU3RydWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGVTdHJ1Y3RbaV0udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRGF0ZVBhcnRzLkRheToge1xuICAgICAgICAgICAgICAgICAgICBkYXRlU3RydWN0W2ldLmZvcm1hdFR5cGUgPSBmb3JtYXR0ZXJPcHRpb25zLmRheTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgRGF0ZVBhcnRzLk1vbnRoOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVTdHJ1Y3RbaV0uZm9ybWF0VHlwZSA9IGZvcm1hdHRlck9wdGlvbnMubW9udGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIERhdGVQYXJ0cy5ZZWFyOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVTdHJ1Y3RbaV0uZm9ybWF0VHlwZSA9IGZvcm1hdHRlck9wdGlvbnMubW9udGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBEYXRlUGlja2VyVXRpbC5maWxsRGF0ZVBhcnRzUG9zaXRpb25zKGRhdGVTdHJ1Y3QpO1xuICAgICAgICByZXR1cm4gZGF0ZVN0cnVjdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpc0RhdGVDaGFyKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPT09IERhdGVDaGFycy5ZZWFyQ2hhciB8fCBjaGFyID09PSBEYXRlQ2hhcnMuTW9udGhDaGFyIHx8IGNoYXIgPT09IERhdGVDaGFycy5EYXlDaGFyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXROdW1lcmljRm9ybWF0UHJlZml4KGZvcm1hdFR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBGb3JtYXREZXNjLlR3b0RpZ2l0czoge1xuICAgICAgICAgICAgICAgIHJldHVybiAnMCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEZvcm1hdERlc2MuTnVtZXJpYzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlUGlja2VyVXRpbC5QUk9NUFRfQ0hBUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldE1pbk1heFZhbHVlKGRhdGVGb3JtYXRQYXJ0czogYW55W10sIGRhdGVQYXJ0LCBpbnB1dFZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBsZXQgbWF4VmFsdWUsIG1pblZhbHVlO1xuICAgICAgICBzd2l0Y2ggKGRhdGVQYXJ0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBhcnRzLk1vbnRoOiB7XG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gRGF0ZVBpY2tlclV0aWwuTlVNQkVSX09GX01PTlRIUztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgRGF0ZVBhcnRzLkRheToge1xuICAgICAgICAgICAgICAgIG1pblZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IERhdGVQaWNrZXJVdGlsLmRheXNJbk1vbnRoKFxuICAgICAgICAgICAgICAgICAgICBEYXRlUGlja2VyVXRpbC5nZXRGdWxsWWVhckZyb21TdHJpbmcoRGF0ZVBpY2tlclV0aWwuZ2V0RGF0ZUZvcm1hdFBhcnQoZGF0ZUZvcm1hdFBhcnRzLCBEYXRlUGFydHMuWWVhciksIGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChEYXRlUGlja2VyVXRpbC5nZXRNb250aFZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgaW5wdXRWYWx1ZSksIDEwKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIERhdGVQYXJ0cy5ZZWFyOiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVQYXJ0LmZvcm1hdFR5cGUgPT09IEZvcm1hdERlc2MuVHdvRGlnaXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWUgPSA5OTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbmZpbml0ZSBsb29wXG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlID0gJ2luZmluaXRlJztcbiAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWUgPSAnaW5maW5pdGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBtaW46IG1pblZhbHVlLCBtYXg6IG1heFZhbHVlIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGF5c0luTW9udGgoZnVsbFllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShmdWxsWWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXREYXRlVmFsdWVGcm9tSW5wdXQoZGF0ZUZvcm1hdFBhcnRzOiBhbnlbXSwgdHlwZTogRGF0ZVBhcnRzLCBpbnB1dFZhbHVlOiBzdHJpbmcsIHRyaW06IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcGFydFBvc2l0aW9uID0gRGF0ZVBpY2tlclV0aWwuZ2V0RGF0ZUZvcm1hdFBhcnQoZGF0ZUZvcm1hdFBhcnRzLCB0eXBlKS5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaW5wdXRWYWx1ZS5zdWJzdHJpbmcocGFydFBvc2l0aW9uWzBdLCBwYXJ0UG9zaXRpb25bMV0pO1xuICAgICAgICByZXR1cm4gKHRyaW0pID8gRGF0ZVBpY2tlclV0aWwudHJpbVVuZGVybGluZXMocmVzdWx0KSA6IHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXREYXlWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHM6IGFueVtdLCBpbnB1dFZhbHVlOiBzdHJpbmcsIHRyaW06IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIERhdGVQaWNrZXJVdGlsLmdldERhdGVWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIERhdGVQYXJ0cy5EYXksIGlucHV0VmFsdWUsIHRyaW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldE1vbnRoVmFsdWVGcm9tSW5wdXQoZGF0ZUZvcm1hdFBhcnRzOiBhbnlbXSwgaW5wdXRWYWx1ZTogc3RyaW5nLCB0cmltOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBEYXRlUGlja2VyVXRpbC5nZXREYXRlVmFsdWVGcm9tSW5wdXQoZGF0ZUZvcm1hdFBhcnRzLCBEYXRlUGFydHMuTW9udGgsIGlucHV0VmFsdWUsIHRyaW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldFllYXJWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHM6IGFueVtdLCBpbnB1dFZhbHVlOiBzdHJpbmcsIHRyaW06IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIERhdGVQaWNrZXJVdGlsLmdldERhdGVWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIERhdGVQYXJ0cy5ZZWFyLCBpbnB1dFZhbHVlLCB0cmltKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXREYXRlRm9ybWF0UGFydChkYXRlRm9ybWF0UGFydHM6IGFueVtdLCB0eXBlOiBEYXRlUGFydHMpOiBhbnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRlRm9ybWF0UGFydHMuZmlsdGVyKChkYXRlUGFydCkgPT4gKGRhdGVQYXJ0LnR5cGUgPT09IHR5cGUpKVswXTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpc0Z1bGxJbnB1dCh2YWx1ZTogYW55LCBpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodmFsdWUgIT09ICcnICYmIGlucHV0Lmxlbmd0aCA9PT0gMiAmJiBpbnB1dC5jaGFyQXQoMSkgIT09IERhdGVQaWNrZXJVdGlsLlBST01QVF9DSEFSKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpc0Z1bGxZZWFySW5wdXQoZGF0ZUZvcm1hdFBhcnRzOiBhbnlbXSwgdmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBzd2l0Y2ggKERhdGVQaWNrZXJVdGlsLmdldERhdGVGb3JtYXRQYXJ0KGRhdGVGb3JtYXRQYXJ0cywgRGF0ZVBhcnRzLlllYXIpLmZvcm1hdFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRm9ybWF0RGVzYy5OdW1lcmljOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPT0gJycgJiYgdmFsdWUubGVuZ3RoID09PSA0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgRm9ybWF0RGVzYy5Ud29EaWdpdHM6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHZhbHVlICE9PSAnJyAmJiB2YWx1ZS5sZW5ndGggPT09IDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERhdGVQYXJ0T25Qb3NpdGlvbihkYXRlRm9ybWF0UGFydHM6IGFueVtdLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGVGb3JtYXRQYXJ0cy5maWx0ZXIoKGVsZW1lbnQpID0+XG4gICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uWzBdIDw9IHBvc2l0aW9uICYmIHBvc2l0aW9uIDw9IGVsZW1lbnQucG9zaXRpb25bMV0gJiYgZWxlbWVudC50eXBlICE9PSBEYXRlUGlja2VyVXRpbC5TRVBBUkFUT1IpWzBdO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldEZ1bGxZZWFyRnJvbVN0cmluZyh5ZWFyUGFydCwgaW5wdXRWYWx1ZSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dFZhbHVlLnN1YnN0cmluZyh5ZWFyUGFydC5wb3NpdGlvblswXSwgeWVhclBhcnQucG9zaXRpb25bMV0pLCAxMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmlsbERhdGVQYXJ0c1Bvc2l0aW9ucyhkYXRlQXJyYXk6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gRGF5fE1vbnRoIHBhcnQgcG9zaXRpb25zXG4gICAgICAgICAgICBpZiAoZGF0ZUFycmF5W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5EYXkgfHwgZGF0ZUFycmF5W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5Nb250aCkge1xuICAgICAgICAgICAgICAgIC8vIE9mZnNldCAyIHBvc2l0aW9ucyBmb3IgbnVtYmVyXG4gICAgICAgICAgICAgICAgZGF0ZUFycmF5W2ldLnBvc2l0aW9uID0gW2N1cnJlbnRQb3MsIGN1cnJlbnRQb3MgKyAyXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVBcnJheVtpXS50eXBlID09PSBEYXRlUGFydHMuWWVhcikge1xuICAgICAgICAgICAgICAgIC8vIFllYXIgcGFydCBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGVBcnJheVtpXS5mb3JtYXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRm9ybWF0RGVzYy5OdW1lcmljOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPZmZzZXQgNCBwb3NpdGlvbnMgZm9yIGZ1bGwgeWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUFycmF5W2ldLnBvc2l0aW9uID0gW2N1cnJlbnRQb3MsIGN1cnJlbnRQb3MgKyA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRm9ybWF0RGVzYy5Ud29EaWdpdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9mZnNldCAyIHBvc2l0aW9ucyBmb3Igc2hvcnQgeWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUFycmF5W2ldLnBvc2l0aW9uID0gW2N1cnJlbnRQb3MsIGN1cnJlbnRQb3MgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlQXJyYXlbaV0udHlwZSA9PT0gRGF0ZVBpY2tlclV0aWwuU0VQQVJBVE9SKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VwYXJhdG9yIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgIGRhdGVBcnJheVtpXS5wb3NpdGlvbiA9IFtjdXJyZW50UG9zLCBjdXJyZW50UG9zICsgMV07XG4gICAgICAgICAgICAgICAgY3VycmVudFBvcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isIE } from '../core/utils';
/** @enum {string} */
const DateState = {
    Valid: 'valid',
    Invalid: 'invalid',
};
export { DateState };
/** @enum {string} */
const FormatDesc = {
    Numeric: 'numeric',
    TwoDigits: '2-digit',
};
/** @enum {string} */
const DateChars = {
    YearChar: 'y',
    MonthChar: 'M',
    DayChar: 'd',
};
/** @enum {string} */
const DateParts = {
    Day: 'day',
    Month: 'month',
    Year: 'year',
};
/**
 * @hidden
 * @abstract
 */
export class DatePickerUtil {
    /**
     * This method generates date parts structure based on editor mask and locale.
     * @param {?} maskValue
     * @param {?=} locale
     * @return {?} array containing information about date parts - type, position, format
     */
    static parseDateFormat(maskValue, locale = DatePickerUtil.DEFAULT_LOCALE) {
        /** @type {?} */
        let dateStruct = [];
        if (maskValue === undefined && !isIE()) {
            dateStruct = DatePickerUtil.getDefaultLocaleMask(locale);
        }
        else {
            /** @type {?} */
            const mask = (maskValue) ? maskValue : DatePickerUtil.SHORT_DATE_MASK;
            /** @type {?} */
            const maskArray = Array.from(mask);
            /** @type {?} */
            const monthInitPosition = mask.indexOf("M" /* MonthChar */);
            /** @type {?} */
            const dayInitPosition = mask.indexOf("d" /* DayChar */);
            /** @type {?} */
            const yearInitPosition = mask.indexOf("y" /* YearChar */);
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
            for (let i = 0; i < maskArray.length; i++) {
                if (!DatePickerUtil.isDateChar(maskArray[i])) {
                    dateStruct.push({
                        type: DatePickerUtil.SEPARATOR,
                        initialPosition: i,
                        value: maskArray[i]
                    });
                }
            }
            dateStruct.sort((a, b) => a.initialPosition - b.initialPosition);
            DatePickerUtil.fillDatePartsPositions(dateStruct);
        }
        return dateStruct;
    }
    /**
     * This method generates input mask based on date parts.
     * @param {?} dateStruct array
     * @return {?} input mask
     */
    static getInputMask(dateStruct) {
        /** @type {?} */
        const inputMask = [];
        for (let i = 0; i < dateStruct.length; i++) {
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
    }
    /**
     * This method generates editor mask.
     * @param {?} dateStruct
     * @return {?} editor mask
     */
    static getMask(dateStruct) {
        /** @type {?} */
        const mask = [];
        for (let i = 0; i < dateStruct.length; i++) {
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
    }
    /**
     * This method parses an input string base on date parts and returns a date and its validation state.
     * @param {?} dateFormatParts
     * @param {?} prevDateValue
     * @param {?} inputValue
     * @return {?} object containing a date and its validation state
     */
    static parseDateArray(dateFormatParts, prevDateValue, inputValue) {
        /** @type {?} */
        const dayStr = DatePickerUtil.getDayValueFromInput(dateFormatParts, inputValue);
        /** @type {?} */
        const monthStr = DatePickerUtil.getMonthValueFromInput(dateFormatParts, inputValue);
        /** @type {?} */
        const yearStr = DatePickerUtil.getYearValueFromInput(dateFormatParts, inputValue);
        /** @type {?} */
        const yearFormat = DatePickerUtil.getDateFormatPart(dateFormatParts, "year" /* Year */).formatType;
        /** @type {?} */
        const day = (dayStr !== '') ? parseInt(dayStr, 10) : 1;
        /** @type {?} */
        const month = (monthStr !== '') ? parseInt(monthStr, 10) - 1 : 0;
        /** @type {?} */
        let year;
        if (yearStr === '') {
            year = (yearFormat === "2-digit" /* TwoDigits */) ? '00' : '2000';
        }
        else {
            year = yearStr;
        }
        /** @type {?} */
        let yearPrefix;
        if (prevDateValue) {
            /** @type {?} */
            const originalYear = prevDateValue.getFullYear().toString();
            if (originalYear.length === 4) {
                yearPrefix = originalYear.substring(0, 2);
            }
        }
        else {
            yearPrefix = '20';
        }
        /** @type {?} */
        const fullYear = (yearFormat === "2-digit" /* TwoDigits */) ? yearPrefix.concat(year) : year;
        if ((month < 0) || (month > 11) || (month === NaN)) {
            return { state: "invalid" /* Invalid */, value: inputValue };
        }
        if ((day < 1) || (day > DatePickerUtil.daysInMonth(fullYear, month + 1)) || (day === NaN)) {
            return { state: "invalid" /* Invalid */, value: inputValue };
        }
        return { state: "valid" /* Valid */, date: new Date(fullYear, month, day) };
    }
    /**
     * @param {?} mask
     * @return {?}
     */
    static maskToPromptChars(mask) {
        /** @type {?} */
        const result = mask.replace(/0|L/g, DatePickerUtil.PROMPT_CHAR);
        return result;
    }
    /**
     * This method replaces prompt chars with empty string.
     * @param {?} value
     * @return {?}
     */
    static trimUnderlines(value) {
        /** @type {?} */
        const result = value.replace(/_/g, '');
        return result;
    }
    /**
     * This method is used for spinning date parts.
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?} position
     * @param {?} delta
     * @param {?} isSpinLoop
     * @return {?} modified text input
     */
    static getModifiedDateInput(dateFormatParts, inputValue, position, delta, isSpinLoop) {
        /** @type {?} */
        const datePart = DatePickerUtil.getDatePartOnPosition(dateFormatParts, position);
        /** @type {?} */
        const datePartType = datePart.type;
        /** @type {?} */
        const datePartFormatType = datePart.formatType;
        /** @type {?} */
        let newValue;
        /** @type {?} */
        const datePartValue = DatePickerUtil.getDateValueFromInput(dateFormatParts, datePartType, inputValue);
        newValue = parseInt(datePartValue, 10);
        /** @type {?} */
        let maxValue;
        /** @type {?} */
        let minValue;
        /** @type {?} */
        const minMax = DatePickerUtil.getMinMaxValue(dateFormatParts, datePart, inputValue);
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
        let tempValue = newValue;
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
        const startIdx = datePart.position[0];
        /** @type {?} */
        const endIdx = datePart.position[1];
        /** @type {?} */
        const start = inputValue.slice(0, startIdx);
        /** @type {?} */
        const end = inputValue.slice(endIdx, inputValue.length);
        /** @type {?} */
        let changedPart;
        /** @type {?} */
        const prefix = DatePickerUtil.getNumericFormatPrefix(datePartFormatType);
        changedPart = (newValue < 10) ? `${prefix}${newValue}` : `${newValue}`;
        return `${start}${changedPart}${end}`;
    }
    /**
     * This method returns date input with prompt chars.
     * @param {?} dateFormatParts
     * @param {?} date
     * @param {?} inputValue
     * @return {?} date input including prompt chars
     */
    static addPromptCharsEditMode(dateFormatParts, date, inputValue) {
        /** @type {?} */
        const dateArray = Array.from(inputValue);
        for (let i = 0; i < dateFormatParts.length; i++) {
            if (dateFormatParts[i].formatType === "numeric" /* Numeric */) {
                if ((dateFormatParts[i].type === "day" /* Day */ && date.getDate() < 10)
                    || (dateFormatParts[i].type === "month" /* Month */ && date.getMonth() + 1 < 10)) {
                    dateArray.splice(dateFormatParts[i].position[0], 0, DatePickerUtil.PROMPT_CHAR);
                    dateArray.join('');
                }
            }
        }
        return dateArray.join('');
    }
    /**
     * This method checks if date input is done.
     * @param {?} dateFormatParts
     * @param {?} input
     * @return {?} input completeness
     */
    static checkForCompleteDateInput(dateFormatParts, input) {
        /** @type {?} */
        const dayValue = DatePickerUtil.getDayValueFromInput(dateFormatParts, input);
        /** @type {?} */
        const monthValue = DatePickerUtil.getMonthValueFromInput(dateFormatParts, input);
        /** @type {?} */
        const yearValue = DatePickerUtil.getYearValueFromInput(dateFormatParts, input);
        /** @type {?} */
        const dayStr = DatePickerUtil.getDayValueFromInput(dateFormatParts, input, false);
        /** @type {?} */
        const monthStr = DatePickerUtil.getMonthValueFromInput(dateFormatParts, input, false);
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
    }
    /**
     * @private
     * @param {?} format
     * @return {?}
     */
    static getYearFormatType(format) {
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
    }
    /**
     * @private
     * @param {?} format
     * @return {?}
     */
    static getMonthFormatType(format) {
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
    }
    /**
     * @private
     * @param {?} format
     * @return {?}
     */
    static getDayFormatType(format) {
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
    }
    /**
     * @private
     * @param {?} locale
     * @return {?}
     */
    static getDefaultLocaleMask(locale) {
        /** @type {?} */
        const dateStruct = [];
        /** @type {?} */
        const formatter = new Intl.DateTimeFormat(locale);
        /** @type {?} */
        const formatToParts = formatter.formatToParts(new Date());
        for (let i = 0; i < formatToParts.length; i++) {
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
        const formatterOptions = formatter.resolvedOptions();
        for (let i = 0; i < dateStruct.length; i++) {
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
    }
    /**
     * @private
     * @param {?} char
     * @return {?}
     */
    static isDateChar(char) {
        return (char === "y" /* YearChar */ || char === "M" /* MonthChar */ || char === "d" /* DayChar */);
    }
    /**
     * @private
     * @param {?} formatType
     * @return {?}
     */
    static getNumericFormatPrefix(formatType) {
        switch (formatType) {
            case "2-digit" /* TwoDigits */: {
                return '0';
            }
            case "numeric" /* Numeric */: {
                return DatePickerUtil.PROMPT_CHAR;
            }
        }
    }
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} datePart
     * @param {?} inputValue
     * @return {?}
     */
    static getMinMaxValue(dateFormatParts, datePart, inputValue) {
        /** @type {?} */
        let maxValue;
        /** @type {?} */
        let minValue;
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
    }
    /**
     * @private
     * @param {?} fullYear
     * @param {?} month
     * @return {?}
     */
    static daysInMonth(fullYear, month) {
        return new Date(fullYear, month, 0).getDate();
    }
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} type
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    static getDateValueFromInput(dateFormatParts, type, inputValue, trim = true) {
        /** @type {?} */
        const partPosition = DatePickerUtil.getDateFormatPart(dateFormatParts, type).position;
        /** @type {?} */
        const result = inputValue.substring(partPosition[0], partPosition[1]);
        return (trim) ? DatePickerUtil.trimUnderlines(result) : result;
    }
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    static getDayValueFromInput(dateFormatParts, inputValue, trim = true) {
        return DatePickerUtil.getDateValueFromInput(dateFormatParts, "day" /* Day */, inputValue, trim);
    }
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    static getMonthValueFromInput(dateFormatParts, inputValue, trim = true) {
        return DatePickerUtil.getDateValueFromInput(dateFormatParts, "month" /* Month */, inputValue, trim);
    }
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} inputValue
     * @param {?=} trim
     * @return {?}
     */
    static getYearValueFromInput(dateFormatParts, inputValue, trim = true) {
        return DatePickerUtil.getDateValueFromInput(dateFormatParts, "year" /* Year */, inputValue, trim);
    }
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} type
     * @return {?}
     */
    static getDateFormatPart(dateFormatParts, type) {
        /** @type {?} */
        const result = dateFormatParts.filter((datePart) => (datePart.type === type))[0];
        return result;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} input
     * @return {?}
     */
    static isFullInput(value, input) {
        return (value !== '' && input.length === 2 && input.charAt(1) !== DatePickerUtil.PROMPT_CHAR);
    }
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} value
     * @return {?}
     */
    static isFullYearInput(dateFormatParts, value) {
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
    }
    /**
     * @private
     * @param {?} dateFormatParts
     * @param {?} position
     * @return {?}
     */
    static getDatePartOnPosition(dateFormatParts, position) {
        /** @type {?} */
        const result = dateFormatParts.filter((element) => element.position[0] <= position && position <= element.position[1] && element.type !== DatePickerUtil.SEPARATOR)[0];
        return result;
    }
    /**
     * @private
     * @param {?} yearPart
     * @param {?} inputValue
     * @return {?}
     */
    static getFullYearFromString(yearPart, inputValue) {
        return parseInt(inputValue.substring(yearPart.position[0], yearPart.position[1]), 10);
    }
    /**
     * @private
     * @param {?} dateArray
     * @return {?}
     */
    static fillDatePartsPositions(dateArray) {
        /** @type {?} */
        let currentPos = 0;
        for (let i = 0; i < dateArray.length; i++) {
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
    }
}
DatePickerUtil.SHORT_DATE_MASK = 'MM/dd/yy';
DatePickerUtil.SEPARATOR = 'literal';
DatePickerUtil.NUMBER_OF_MONTHS = 12;
DatePickerUtil.PROMPT_CHAR = '_';
DatePickerUtil.DEFAULT_LOCALE = 'en';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIudXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFRakMsT0FBUSxPQUFPO0lBQ2YsU0FBVSxTQUFTOzs7OztJQU9uQixTQUFVLFNBQVM7SUFDbkIsV0FBWSxTQUFTOzs7O0lBT3JCLFVBQVcsR0FBRztJQUNkLFdBQVksR0FBRztJQUNmLFNBQVUsR0FBRzs7OztJQU9iLEtBQU0sS0FBSztJQUNYLE9BQVEsT0FBTztJQUNmLE1BQU8sTUFBTTs7Ozs7O0FBTWpCLE1BQU0sT0FBZ0IsY0FBYzs7Ozs7OztJQWF6QixNQUFNLENBQUMsZUFBZSxDQUFDLFNBQWlCLEVBQUUsU0FBaUIsY0FBYyxDQUFDLGNBQWM7O1lBQ3ZGLFVBQVUsR0FBRyxFQUFFO1FBQ25CLElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3BDLFVBQVUsR0FBRyxjQUFjLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUQ7YUFBTTs7a0JBQ0csSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLGVBQWU7O2tCQUMvRCxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O2tCQUM1QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxxQkFBcUI7O2tCQUNyRCxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sbUJBQW1COztrQkFDakQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sb0JBQW9CO1lBRXpELElBQUksZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pCLFVBQVUsQ0FB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LENBQUM7Z0JBQ3JELFVBQVUsRUFBRSxDQUFDO2FBQ2hCO1NBQ0o7SUFDTCxDQUFDOztBQTlmdUIsOEJBQWUsR0FBRyxVQUFVLENBQUM7QUFDN0Isd0JBQVMsR0FBRyxTQUFTLENBQUM7QUFDdEIsK0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLDBCQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLDZCQUFjLEdBQUcsSUFBSSxDQUFDOzs7Ozs7SUFKOUMsK0JBQXFEOzs7OztJQUNyRCx5QkFBOEM7Ozs7O0lBQzlDLGdDQUE4Qzs7Ozs7SUFDOUMsMkJBQTBDOzs7OztJQUMxQyw4QkFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5cbi8qKlxuICogVGhpcyBlbnVtIGlzIHVzZWQgdG8ga2VlcCB0aGUgZGF0ZSB2YWxpZGF0aW9uIHJlc3VsdC5cbiAqXG4gKkBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gRGF0ZVN0YXRlIHtcbiAgICBWYWxpZCA9ICd2YWxpZCcsXG4gICAgSW52YWxpZCA9ICdpbnZhbGlkJyxcbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuY29uc3QgZW51bSBGb3JtYXREZXNjIHtcbiAgICBOdW1lcmljID0gJ251bWVyaWMnLFxuICAgIFR3b0RpZ2l0cyA9ICcyLWRpZ2l0J1xufVxuXG4vKipcbiAqQGhpZGRlblxuICovXG5jb25zdCBlbnVtIERhdGVDaGFycyB7XG4gICAgWWVhckNoYXIgPSAneScsXG4gICAgTW9udGhDaGFyID0gJ00nLFxuICAgIERheUNoYXIgPSAnZCdcbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuY29uc3QgZW51bSBEYXRlUGFydHMge1xuICAgIERheSA9ICdkYXknLFxuICAgIE1vbnRoID0gJ21vbnRoJyxcbiAgICBZZWFyID0gJ3llYXInXG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRlUGlja2VyVXRpbCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU0hPUlRfREFURV9NQVNLID0gJ01NL2RkL3l5JztcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTRVBBUkFUT1IgPSAnbGl0ZXJhbCc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTlVNQkVSX09GX01PTlRIUyA9IDEyO1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBST01QVF9DSEFSID0gJ18nO1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTE9DQUxFID0gJ2VuJztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGdlbmVyYXRlcyBkYXRlIHBhcnRzIHN0cnVjdHVyZSBiYXNlZCBvbiBlZGl0b3IgbWFzayBhbmQgbG9jYWxlLlxuICAgICAqIEBwYXJhbSBtYXNrVmFsdWU6IHN0cmluZ1xuICAgICAqIEBwYXJhbSBsb2NhbGU6IHN0cmluZ1xuICAgICAqIEByZXR1cm5zIGFycmF5IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgZGF0ZSBwYXJ0cyAtIHR5cGUsIHBvc2l0aW9uLCBmb3JtYXRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlRGF0ZUZvcm1hdChtYXNrVmFsdWU6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcgPSBEYXRlUGlja2VyVXRpbC5ERUZBVUxUX0xPQ0FMRSk6IGFueVtdIHtcbiAgICAgICAgbGV0IGRhdGVTdHJ1Y3QgPSBbXTtcbiAgICAgICAgaWYgKG1hc2tWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICFpc0lFKCkpIHtcbiAgICAgICAgICAgIGRhdGVTdHJ1Y3QgPSBEYXRlUGlja2VyVXRpbC5nZXREZWZhdWx0TG9jYWxlTWFzayhsb2NhbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWFzayA9IChtYXNrVmFsdWUpID8gbWFza1ZhbHVlIDogRGF0ZVBpY2tlclV0aWwuU0hPUlRfREFURV9NQVNLO1xuICAgICAgICAgICAgY29uc3QgbWFza0FycmF5ID0gQXJyYXkuZnJvbShtYXNrKTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoSW5pdFBvc2l0aW9uID0gbWFzay5pbmRleE9mKERhdGVDaGFycy5Nb250aENoYXIpO1xuICAgICAgICAgICAgY29uc3QgZGF5SW5pdFBvc2l0aW9uID0gbWFzay5pbmRleE9mKERhdGVDaGFycy5EYXlDaGFyKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXJJbml0UG9zaXRpb24gPSBtYXNrLmluZGV4T2YoRGF0ZUNoYXJzLlllYXJDaGFyKTtcblxuICAgICAgICAgICAgaWYgKHllYXJJbml0UG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVN0cnVjdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0ZVBhcnRzLlllYXIsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxQb3NpdGlvbjogeWVhckluaXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0VHlwZTogRGF0ZVBpY2tlclV0aWwuZ2V0WWVhckZvcm1hdFR5cGUobWFzaylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vbnRoSW5pdFBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGRhdGVTdHJ1Y3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGVQYXJ0cy5Nb250aCxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uOiBtb250aEluaXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0VHlwZTogRGF0ZVBpY2tlclV0aWwuZ2V0TW9udGhGb3JtYXRUeXBlKG1hc2spXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXlJbml0UG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVN0cnVjdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0ZVBhcnRzLkRheSxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uOiBkYXlJbml0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFR5cGU6IERhdGVQaWNrZXJVdGlsLmdldERheUZvcm1hdFR5cGUobWFzaylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIURhdGVQaWNrZXJVdGlsLmlzRGF0ZUNoYXIobWFza0FycmF5W2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlU3RydWN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0ZVBpY2tlclV0aWwuU0VQQVJBVE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1hc2tBcnJheVtpXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGVTdHJ1Y3Quc29ydCgoYSwgYikgPT4gYS5pbml0aWFsUG9zaXRpb24gLSBiLmluaXRpYWxQb3NpdGlvbik7XG4gICAgICAgICAgICBEYXRlUGlja2VyVXRpbC5maWxsRGF0ZVBhcnRzUG9zaXRpb25zKGRhdGVTdHJ1Y3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlU3RydWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGdlbmVyYXRlcyBpbnB1dCBtYXNrIGJhc2VkIG9uIGRhdGUgcGFydHMuXG4gICAgICogQHBhcmFtIGRhdGVTdHJ1Y3QgYXJyYXlcbiAgICAgKiBAcmV0dXJucyBpbnB1dCBtYXNrXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnB1dE1hc2soZGF0ZVN0cnVjdDogYW55W10pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBpbnB1dE1hc2sgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRlU3RydWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZVN0cnVjdFtpXS50eXBlID09PSBEYXRlUGlja2VyVXRpbC5TRVBBUkFUT1IpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE1hc2sucHVzaChkYXRlU3RydWN0W2ldLnZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZVN0cnVjdFtpXS50eXBlID09PSBEYXRlUGFydHMuRGF5IHx8IGRhdGVTdHJ1Y3RbaV0udHlwZSA9PT0gRGF0ZVBhcnRzLk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRNYXNrLnB1c2goJzAwJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVTdHJ1Y3RbaV0udHlwZSA9PT0gRGF0ZVBhcnRzLlllYXIpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGVTdHJ1Y3RbaV0uZm9ybWF0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEZvcm1hdERlc2MuTnVtZXJpYzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRNYXNrLnB1c2goJzAwMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRm9ybWF0RGVzYy5Ud29EaWdpdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TWFzay5wdXNoKCcwMCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0TWFzay5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBnZW5lcmF0ZXMgZWRpdG9yIG1hc2suXG4gICAgICogQHBhcmFtIGRhdGVTdHJ1Y3RcbiAgICAgKiBAcmV0dXJucyBlZGl0b3IgbWFza1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TWFzayhkYXRlU3RydWN0OiBhbnlbXSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRlU3RydWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGVTdHJ1Y3RbaV0uZm9ybWF0VHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRm9ybWF0RGVzYy5OdW1lcmljOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlU3RydWN0W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5EYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2sucHVzaCgnZCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVTdHJ1Y3RbaV0udHlwZSA9PT0gRGF0ZVBhcnRzLk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrLnB1c2goJ00nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2sucHVzaCgneXl5eScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIEZvcm1hdERlc2MuVHdvRGlnaXRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlU3RydWN0W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5EYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2sucHVzaCgnZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlU3RydWN0W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5Nb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzay5wdXNoKCdNTScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzay5wdXNoKCd5eScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0ZVN0cnVjdFtpXS50eXBlID09PSBEYXRlUGlja2VyVXRpbC5TRVBBUkFUT1IpIHtcbiAgICAgICAgICAgICAgICBtYXNrLnB1c2goZGF0ZVN0cnVjdFtpXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFzay5qb2luKCcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcGFyc2VzIGFuIGlucHV0IHN0cmluZyBiYXNlIG9uIGRhdGUgcGFydHMgYW5kIHJldHVybnMgYSBkYXRlIGFuZCBpdHMgdmFsaWRhdGlvbiBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gZGF0ZUZvcm1hdFBhcnRzXG4gICAgICogQHBhcmFtIHByZXZEYXRlVmFsdWVcbiAgICAgKiBAcGFyYW0gaW5wdXRWYWx1ZVxuICAgICAqIEByZXR1cm5zIG9iamVjdCBjb250YWluaW5nIGEgZGF0ZSBhbmQgaXRzIHZhbGlkYXRpb24gc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlRGF0ZUFycmF5KGRhdGVGb3JtYXRQYXJ0czogYW55W10sIHByZXZEYXRlVmFsdWU6IERhdGUsIGlucHV0VmFsdWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IGRheVN0ciA9IERhdGVQaWNrZXJVdGlsLmdldERheVZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgaW5wdXRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG1vbnRoU3RyID0gRGF0ZVBpY2tlclV0aWwuZ2V0TW9udGhWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIGlucHV0VmFsdWUpO1xuICAgICAgICBjb25zdCB5ZWFyU3RyID0gRGF0ZVBpY2tlclV0aWwuZ2V0WWVhclZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgaW5wdXRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IHllYXJGb3JtYXQgPSBEYXRlUGlja2VyVXRpbC5nZXREYXRlRm9ybWF0UGFydChkYXRlRm9ybWF0UGFydHMsIERhdGVQYXJ0cy5ZZWFyKS5mb3JtYXRUeXBlO1xuICAgICAgICBjb25zdCBkYXkgPSAoZGF5U3RyICE9PSAnJykgPyBwYXJzZUludChkYXlTdHIsIDEwKSA6IDE7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKG1vbnRoU3RyICE9PSAnJykgPyBwYXJzZUludChtb250aFN0ciwgMTApIC0gMSA6IDA7XG5cbiAgICAgICAgbGV0IHllYXI7XG4gICAgICAgIGlmICh5ZWFyU3RyID09PSAnJykge1xuICAgICAgICAgICAgeWVhciA9ICh5ZWFyRm9ybWF0ID09PSBGb3JtYXREZXNjLlR3b0RpZ2l0cykgPyAnMDAnIDogJzIwMDAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhciA9IHllYXJTdHI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHllYXJQcmVmaXg7XG4gICAgICAgIGlmIChwcmV2RGF0ZVZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFllYXIgPSBwcmV2RGF0ZVZhbHVlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFllYXIubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgeWVhclByZWZpeCA9IG9yaWdpbmFsWWVhci5zdWJzdHJpbmcoMCwgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFyUHJlZml4ID0gJzIwJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmdWxsWWVhciA9ICh5ZWFyRm9ybWF0ID09PSBGb3JtYXREZXNjLlR3b0RpZ2l0cykgPyB5ZWFyUHJlZml4LmNvbmNhdCh5ZWFyKSA6IHllYXI7XG5cbiAgICAgICAgaWYgKChtb250aCA8IDApIHx8IChtb250aCA+IDExKSB8fCAobW9udGggPT09IE5hTikpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXRlOiBEYXRlU3RhdGUuSW52YWxpZCwgdmFsdWU6IGlucHV0VmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoZGF5IDwgMSkgfHwgKGRheSA+IERhdGVQaWNrZXJVdGlsLmRheXNJbk1vbnRoKGZ1bGxZZWFyLCBtb250aCArIDEpKSB8fCAoZGF5ID09PSBOYU4pKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0ZTogRGF0ZVN0YXRlLkludmFsaWQsIHZhbHVlOiBpbnB1dFZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBzdGF0ZTogRGF0ZVN0YXRlLlZhbGlkLCBkYXRlOiBuZXcgRGF0ZShmdWxsWWVhciwgbW9udGgsIGRheSkgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hc2tUb1Byb21wdENoYXJzKG1hc2s6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG1hc2sucmVwbGFjZSgvMHxML2csIERhdGVQaWNrZXJVdGlsLlBST01QVF9DSEFSKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXBsYWNlcyBwcm9tcHQgY2hhcnMgd2l0aCBlbXB0eSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB0cmltVW5kZXJsaW5lcyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUucmVwbGFjZSgvXy9nLCAnJyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBmb3Igc3Bpbm5pbmcgZGF0ZSBwYXJ0cy5cbiAgICAgKiBAcGFyYW0gZGF0ZUZvcm1hdFBhcnRzXG4gICAgICogQHBhcmFtIGlucHV0VmFsdWVcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gZGVsdGFcbiAgICAgKiBAcGFyYW0gaXNTcGluTG9vcFxuICAgICAqIEByZXR1cm4gbW9kaWZpZWQgdGV4dCBpbnB1dFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TW9kaWZpZWREYXRlSW5wdXQoZGF0ZUZvcm1hdFBhcnRzOiBhbnlbXSxcbiAgICAgICAgaW5wdXRWYWx1ZTogc3RyaW5nLFxuICAgICAgICBwb3NpdGlvbjogbnVtYmVyLFxuICAgICAgICBkZWx0YTogbnVtYmVyLFxuICAgICAgICBpc1NwaW5Mb29wOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGF0ZVBhcnQgPSBEYXRlUGlja2VyVXRpbC5nZXREYXRlUGFydE9uUG9zaXRpb24oZGF0ZUZvcm1hdFBhcnRzLCBwb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGRhdGVQYXJ0VHlwZSA9IGRhdGVQYXJ0LnR5cGU7XG4gICAgICAgIGNvbnN0IGRhdGVQYXJ0Rm9ybWF0VHlwZSA9IGRhdGVQYXJ0LmZvcm1hdFR5cGU7XG4gICAgICAgIGxldCBuZXdWYWx1ZTtcblxuICAgICAgICBjb25zdCBkYXRlUGFydFZhbHVlID0gRGF0ZVBpY2tlclV0aWwuZ2V0RGF0ZVZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgZGF0ZVBhcnRUeXBlLCBpbnB1dFZhbHVlKTtcbiAgICAgICAgbmV3VmFsdWUgPSBwYXJzZUludChkYXRlUGFydFZhbHVlLCAxMCk7XG5cbiAgICAgICAgbGV0IG1heFZhbHVlLCBtaW5WYWx1ZTtcbiAgICAgICAgY29uc3QgbWluTWF4ID0gRGF0ZVBpY2tlclV0aWwuZ2V0TWluTWF4VmFsdWUoZGF0ZUZvcm1hdFBhcnRzLCBkYXRlUGFydCwgaW5wdXRWYWx1ZSk7XG4gICAgICAgIG1pblZhbHVlID0gbWluTWF4Lm1pbjtcbiAgICAgICAgbWF4VmFsdWUgPSBtaW5NYXgubWF4O1xuXG4gICAgICAgIGlmIChpc05hTihuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChtaW5WYWx1ZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gMjAwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBtaW5WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGVtcFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRlbXBWYWx1ZSArPSBkZWx0YTtcblxuICAgICAgICAvLyBJbmZpbml0ZSBsb29wIGZvciBmdWxsIHllYXJzXG4gICAgICAgIGlmIChtYXhWYWx1ZSA9PT0gJ2luZmluaXRlJyAmJiBtaW5WYWx1ZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB0ZW1wVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTcGluTG9vcCkge1xuICAgICAgICAgICAgaWYgKHRlbXBWYWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gbWluVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVtcFZhbHVlIDwgbWluVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBtYXhWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGVtcFZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRlbXBWYWx1ZSA8PSBtYXhWYWx1ZSAmJiB0ZW1wVmFsdWUgPj0gbWluVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRlbXBWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0SWR4ID0gZGF0ZVBhcnQucG9zaXRpb25bMF07XG4gICAgICAgIGNvbnN0IGVuZElkeCA9IGRhdGVQYXJ0LnBvc2l0aW9uWzFdO1xuICAgICAgICBjb25zdCBzdGFydCA9IGlucHV0VmFsdWUuc2xpY2UoMCwgc3RhcnRJZHgpO1xuICAgICAgICBjb25zdCBlbmQgPSBpbnB1dFZhbHVlLnNsaWNlKGVuZElkeCwgaW5wdXRWYWx1ZS5sZW5ndGgpO1xuICAgICAgICBsZXQgY2hhbmdlZFBhcnQ6IHN0cmluZztcblxuICAgICAgICBjb25zdCBwcmVmaXggPSBEYXRlUGlja2VyVXRpbC5nZXROdW1lcmljRm9ybWF0UHJlZml4KGRhdGVQYXJ0Rm9ybWF0VHlwZSk7XG4gICAgICAgIGNoYW5nZWRQYXJ0ID0gKG5ld1ZhbHVlIDwgMTApID8gYCR7cHJlZml4fSR7bmV3VmFsdWV9YCA6IGAke25ld1ZhbHVlfWA7XG5cbiAgICAgICAgcmV0dXJuIGAke3N0YXJ0fSR7Y2hhbmdlZFBhcnR9JHtlbmR9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGRhdGUgaW5wdXQgd2l0aCBwcm9tcHQgY2hhcnMuXG4gICAgICogQHBhcmFtIGRhdGVGb3JtYXRQYXJ0c1xuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHBhcmFtIGlucHV0VmFsdWVcbiAgICAgKiBAcmV0dXJucyBkYXRlIGlucHV0IGluY2x1ZGluZyBwcm9tcHQgY2hhcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFkZFByb21wdENoYXJzRWRpdE1vZGUoZGF0ZUZvcm1hdFBhcnRzOiBhbnlbXSwgZGF0ZTogRGF0ZSwgaW5wdXRWYWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGF0ZUFycmF5ID0gQXJyYXkuZnJvbShpbnB1dFZhbHVlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRlRm9ybWF0UGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRlRm9ybWF0UGFydHNbaV0uZm9ybWF0VHlwZSA9PT0gRm9ybWF0RGVzYy5OdW1lcmljKSB7XG4gICAgICAgICAgICAgICAgaWYgKChkYXRlRm9ybWF0UGFydHNbaV0udHlwZSA9PT0gRGF0ZVBhcnRzLkRheSAmJiBkYXRlLmdldERhdGUoKSA8IDEwKVxuICAgICAgICAgICAgICAgICAgICB8fCAoZGF0ZUZvcm1hdFBhcnRzW2ldLnR5cGUgPT09IERhdGVQYXJ0cy5Nb250aCAmJiBkYXRlLmdldE1vbnRoKCkgKyAxIDwgMTApKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVBcnJheS5zcGxpY2UoZGF0ZUZvcm1hdFBhcnRzW2ldLnBvc2l0aW9uWzBdLCAwLCBEYXRlUGlja2VyVXRpbC5QUk9NUFRfQ0hBUik7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVBcnJheS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGVBcnJheS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBjaGVja3MgaWYgZGF0ZSBpbnB1dCBpcyBkb25lLlxuICAgICAqIEBwYXJhbSBkYXRlRm9ybWF0UGFydHNcbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKiBAcmV0dXJucyBpbnB1dCBjb21wbGV0ZW5lc3NcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrRm9yQ29tcGxldGVEYXRlSW5wdXQoZGF0ZUZvcm1hdFBhcnRzOiBhbnlbXSwgaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRheVZhbHVlID0gRGF0ZVBpY2tlclV0aWwuZ2V0RGF5VmFsdWVGcm9tSW5wdXQoZGF0ZUZvcm1hdFBhcnRzLCBpbnB1dCk7XG4gICAgICAgIGNvbnN0IG1vbnRoVmFsdWUgPSBEYXRlUGlja2VyVXRpbC5nZXRNb250aFZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgaW5wdXQpO1xuICAgICAgICBjb25zdCB5ZWFyVmFsdWUgPSBEYXRlUGlja2VyVXRpbC5nZXRZZWFyVmFsdWVGcm9tSW5wdXQoZGF0ZUZvcm1hdFBhcnRzLCBpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRheVN0ciA9IERhdGVQaWNrZXJVdGlsLmdldERheVZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgaW5wdXQsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbW9udGhTdHIgPSBEYXRlUGlja2VyVXRpbC5nZXRNb250aFZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgaW5wdXQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoRGF0ZVBpY2tlclV0aWwuaXNGdWxsSW5wdXQoZGF5VmFsdWUsIGRheVN0cilcbiAgICAgICAgICAgICYmIERhdGVQaWNrZXJVdGlsLmlzRnVsbElucHV0KG1vbnRoVmFsdWUsIG1vbnRoU3RyKVxuICAgICAgICAgICAgJiYgRGF0ZVBpY2tlclV0aWwuaXNGdWxsWWVhcklucHV0KGRhdGVGb3JtYXRQYXJ0cywgeWVhclZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuICdjb21wbGV0ZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5VmFsdWUgPT09ICcnICYmIG1vbnRoVmFsdWUgPT09ICcnICYmIHllYXJWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiAnZW1wdHknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheVZhbHVlID09PSAnJyB8fCBtb250aFZhbHVlID09PSAnJyB8fCB5ZWFyVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRZZWFyRm9ybWF0VHlwZShmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Lm1hdGNoKG5ldyBSZWdFeHAoRGF0ZUNoYXJzLlllYXJDaGFyLCAnZycpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgIC8vIHkgKDIwMjApXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm1hdERlc2MuTnVtZXJpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNDoge1xuICAgICAgICAgICAgICAgIC8vIHl5eXkgKDIwMjApXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm1hdERlc2MuTnVtZXJpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIC8vIHl5ICgyMClcbiAgICAgICAgICAgICAgICByZXR1cm4gRm9ybWF0RGVzYy5Ud29EaWdpdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRNb250aEZvcm1hdFR5cGUoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdC5tYXRjaChuZXcgUmVnRXhwKERhdGVDaGFycy5Nb250aENoYXIsICdnJykpLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgLy8gTSAoOClcbiAgICAgICAgICAgICAgICByZXR1cm4gRm9ybWF0RGVzYy5OdW1lcmljO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgLy8gTU0gKDA4KVxuICAgICAgICAgICAgICAgIHJldHVybiBGb3JtYXREZXNjLlR3b0RpZ2l0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERheUZvcm1hdFR5cGUoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdC5tYXRjaChuZXcgUmVnRXhwKERhdGVDaGFycy5EYXlDaGFyLCAnZycpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgIC8vIGQgKDYpXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm1hdERlc2MuTnVtZXJpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIC8vIGRkICgwNilcbiAgICAgICAgICAgICAgICByZXR1cm4gRm9ybWF0RGVzYy5Ud29EaWdpdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXREZWZhdWx0TG9jYWxlTWFzayhsb2NhbGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlU3RydWN0ID0gW107XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSk7XG4gICAgICAgIGNvbnN0IGZvcm1hdFRvUGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0VG9QYXJ0cyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXRUb1BhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0VG9QYXJ0c1tpXS50eXBlID09PSBEYXRlUGlja2VyVXRpbC5TRVBBUkFUT1IpIHtcbiAgICAgICAgICAgICAgICBkYXRlU3RydWN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRlUGlja2VyVXRpbC5TRVBBUkFUT1IsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXRUb1BhcnRzW2ldLnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGVTdHJ1Y3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGZvcm1hdFRvUGFydHNbaV0udHlwZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0gZm9ybWF0dGVyLnJlc29sdmVkT3B0aW9ucygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGVTdHJ1Y3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0ZVN0cnVjdFtpXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRlUGFydHMuRGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVTdHJ1Y3RbaV0uZm9ybWF0VHlwZSA9IGZvcm1hdHRlck9wdGlvbnMuZGF5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRlUGFydHMuTW9udGg6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVN0cnVjdFtpXS5mb3JtYXRUeXBlID0gZm9ybWF0dGVyT3B0aW9ucy5tb250aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgRGF0ZVBhcnRzLlllYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVN0cnVjdFtpXS5mb3JtYXRUeXBlID0gZm9ybWF0dGVyT3B0aW9ucy5tb250aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIERhdGVQaWNrZXJVdGlsLmZpbGxEYXRlUGFydHNQb3NpdGlvbnMoZGF0ZVN0cnVjdCk7XG4gICAgICAgIHJldHVybiBkYXRlU3RydWN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGlzRGF0ZUNoYXIoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoY2hhciA9PT0gRGF0ZUNoYXJzLlllYXJDaGFyIHx8IGNoYXIgPT09IERhdGVDaGFycy5Nb250aENoYXIgfHwgY2hhciA9PT0gRGF0ZUNoYXJzLkRheUNoYXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldE51bWVyaWNGb3JtYXRQcmVmaXgoZm9ybWF0VHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEZvcm1hdERlc2MuVHdvRGlnaXRzOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgRm9ybWF0RGVzYy5OdW1lcmljOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVQaWNrZXJVdGlsLlBST01QVF9DSEFSO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TWluTWF4VmFsdWUoZGF0ZUZvcm1hdFBhcnRzOiBhbnlbXSwgZGF0ZVBhcnQsIGlucHV0VmFsdWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCBtYXhWYWx1ZSwgbWluVmFsdWU7XG4gICAgICAgIHN3aXRjaCAoZGF0ZVBhcnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBEYXRlUGFydHMuTW9udGg6IHtcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgPSBEYXRlUGlja2VyVXRpbC5OVU1CRVJfT0ZfTU9OVEhTO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBEYXRlUGFydHMuRGF5OiB7XG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gRGF0ZVBpY2tlclV0aWwuZGF5c0luTW9udGgoXG4gICAgICAgICAgICAgICAgICAgIERhdGVQaWNrZXJVdGlsLmdldEZ1bGxZZWFyRnJvbVN0cmluZyhEYXRlUGlja2VyVXRpbC5nZXREYXRlRm9ybWF0UGFydChkYXRlRm9ybWF0UGFydHMsIERhdGVQYXJ0cy5ZZWFyKSwgaW5wdXRWYWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KERhdGVQaWNrZXJVdGlsLmdldE1vbnRoVmFsdWVGcm9tSW5wdXQoZGF0ZUZvcm1hdFBhcnRzLCBpbnB1dFZhbHVlKSwgMTApKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgRGF0ZVBhcnRzLlllYXI6IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZVBhcnQuZm9ybWF0VHlwZSA9PT0gRm9ybWF0RGVzYy5Ud29EaWdpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IDk5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluZmluaXRlIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsdWUgPSAnaW5maW5pdGUnO1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9ICdpbmZpbml0ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG1pbjogbWluVmFsdWUsIG1heDogbWF4VmFsdWUgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBkYXlzSW5Nb250aChmdWxsWWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGZ1bGxZZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERhdGVWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHM6IGFueVtdLCB0eXBlOiBEYXRlUGFydHMsIGlucHV0VmFsdWU6IHN0cmluZywgdHJpbTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwYXJ0UG9zaXRpb24gPSBEYXRlUGlja2VyVXRpbC5nZXREYXRlRm9ybWF0UGFydChkYXRlRm9ybWF0UGFydHMsIHR5cGUpLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpbnB1dFZhbHVlLnN1YnN0cmluZyhwYXJ0UG9zaXRpb25bMF0sIHBhcnRQb3NpdGlvblsxXSk7XG4gICAgICAgIHJldHVybiAodHJpbSkgPyBEYXRlUGlja2VyVXRpbC50cmltVW5kZXJsaW5lcyhyZXN1bHQpIDogcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERheVZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0czogYW55W10sIGlucHV0VmFsdWU6IHN0cmluZywgdHJpbTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRGF0ZVBpY2tlclV0aWwuZ2V0RGF0ZVZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgRGF0ZVBhcnRzLkRheSwgaW5wdXRWYWx1ZSwgdHJpbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TW9udGhWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHM6IGFueVtdLCBpbnB1dFZhbHVlOiBzdHJpbmcsIHRyaW06IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIERhdGVQaWNrZXJVdGlsLmdldERhdGVWYWx1ZUZyb21JbnB1dChkYXRlRm9ybWF0UGFydHMsIERhdGVQYXJ0cy5Nb250aCwgaW5wdXRWYWx1ZSwgdHJpbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0WWVhclZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0czogYW55W10sIGlucHV0VmFsdWU6IHN0cmluZywgdHJpbTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRGF0ZVBpY2tlclV0aWwuZ2V0RGF0ZVZhbHVlRnJvbUlucHV0KGRhdGVGb3JtYXRQYXJ0cywgRGF0ZVBhcnRzLlllYXIsIGlucHV0VmFsdWUsIHRyaW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERhdGVGb3JtYXRQYXJ0KGRhdGVGb3JtYXRQYXJ0czogYW55W10sIHR5cGU6IERhdGVQYXJ0cyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGVGb3JtYXRQYXJ0cy5maWx0ZXIoKGRhdGVQYXJ0KSA9PiAoZGF0ZVBhcnQudHlwZSA9PT0gdHlwZSkpWzBdO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGlzRnVsbElucHV0KHZhbHVlOiBhbnksIGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAhPT0gJycgJiYgaW5wdXQubGVuZ3RoID09PSAyICYmIGlucHV0LmNoYXJBdCgxKSAhPT0gRGF0ZVBpY2tlclV0aWwuUFJPTVBUX0NIQVIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGlzRnVsbFllYXJJbnB1dChkYXRlRm9ybWF0UGFydHM6IGFueVtdLCB2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHN3aXRjaCAoRGF0ZVBpY2tlclV0aWwuZ2V0RGF0ZUZvcm1hdFBhcnQoZGF0ZUZvcm1hdFBhcnRzLCBEYXRlUGFydHMuWWVhcikuZm9ybWF0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBGb3JtYXREZXNjLk51bWVyaWM6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHZhbHVlICE9PSAnJyAmJiB2YWx1ZS5sZW5ndGggPT09IDQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBGb3JtYXREZXNjLlR3b0RpZ2l0czoge1xuICAgICAgICAgICAgICAgIHJldHVybiAodmFsdWUgIT09ICcnICYmIHZhbHVlLmxlbmd0aCA9PT0gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RGF0ZVBhcnRPblBvc2l0aW9uKGRhdGVGb3JtYXRQYXJ0czogYW55W10sIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0ZUZvcm1hdFBhcnRzLmZpbHRlcigoZWxlbWVudCkgPT5cbiAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb25bMF0gPD0gcG9zaXRpb24gJiYgcG9zaXRpb24gPD0gZWxlbWVudC5wb3NpdGlvblsxXSAmJiBlbGVtZW50LnR5cGUgIT09IERhdGVQaWNrZXJVdGlsLlNFUEFSQVRPUilbMF07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RnVsbFllYXJGcm9tU3RyaW5nKHllYXJQYXJ0LCBpbnB1dFZhbHVlKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0VmFsdWUuc3Vic3RyaW5nKHllYXJQYXJ0LnBvc2l0aW9uWzBdLCB5ZWFyUGFydC5wb3NpdGlvblsxXSksIDEwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmaWxsRGF0ZVBhcnRzUG9zaXRpb25zKGRhdGVBcnJheTogYW55W10pOiB2b2lkIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBEYXl8TW9udGggcGFydCBwb3NpdGlvbnNcbiAgICAgICAgICAgIGlmIChkYXRlQXJyYXlbaV0udHlwZSA9PT0gRGF0ZVBhcnRzLkRheSB8fCBkYXRlQXJyYXlbaV0udHlwZSA9PT0gRGF0ZVBhcnRzLk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgLy8gT2Zmc2V0IDIgcG9zaXRpb25zIGZvciBudW1iZXJcbiAgICAgICAgICAgICAgICBkYXRlQXJyYXlbaV0ucG9zaXRpb24gPSBbY3VycmVudFBvcywgY3VycmVudFBvcyArIDJdO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZUFycmF5W2ldLnR5cGUgPT09IERhdGVQYXJ0cy5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgLy8gWWVhciBwYXJ0IHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0ZUFycmF5W2ldLmZvcm1hdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGb3JtYXREZXNjLk51bWVyaWM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9mZnNldCA0IHBvc2l0aW9ucyBmb3IgZnVsbCB5ZWFyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlQXJyYXlbaV0ucG9zaXRpb24gPSBbY3VycmVudFBvcywgY3VycmVudFBvcyArIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvcyArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGb3JtYXREZXNjLlR3b0RpZ2l0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2Zmc2V0IDIgcG9zaXRpb25zIGZvciBzaG9ydCB5ZWFyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlQXJyYXlbaV0ucG9zaXRpb24gPSBbY3VycmVudFBvcywgY3VycmVudFBvcyArIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvcyArPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVBcnJheVtpXS50eXBlID09PSBEYXRlUGlja2VyVXRpbC5TRVBBUkFUT1IpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXBhcmF0b3IgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgZGF0ZUFycmF5W2ldLnBvc2l0aW9uID0gW2N1cnJlbnRQb3MsIGN1cnJlbnRQb3MgKyAxXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19
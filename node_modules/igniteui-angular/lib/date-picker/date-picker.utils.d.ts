/**
 * This enum is used to keep the date validation result.
 *
 *@hidden
 */
export declare const enum DateState {
    Valid = "valid",
    Invalid = "invalid"
}
/**
 *@hidden
 */
export declare abstract class DatePickerUtil {
    private static readonly SHORT_DATE_MASK;
    private static readonly SEPARATOR;
    private static readonly NUMBER_OF_MONTHS;
    private static readonly PROMPT_CHAR;
    private static readonly DEFAULT_LOCALE;
    /**
     * This method generates date parts structure based on editor mask and locale.
     * @param maskValue: string
     * @param locale: string
     * @returns array containing information about date parts - type, position, format
     */
    static parseDateFormat(maskValue: string, locale?: string): any[];
    /**
     * This method generates input mask based on date parts.
     * @param dateStruct array
     * @returns input mask
     */
    static getInputMask(dateStruct: any[]): string;
    /**
     * This method generates editor mask.
     * @param dateStruct
     * @returns editor mask
     */
    static getMask(dateStruct: any[]): string;
    /**
     * This method parses an input string base on date parts and returns a date and its validation state.
     * @param dateFormatParts
     * @param prevDateValue
     * @param inputValue
     * @returns object containing a date and its validation state
     */
    static parseDateArray(dateFormatParts: any[], prevDateValue: Date, inputValue: string): any;
    static maskToPromptChars(mask: string): string;
    /**
     * This method replaces prompt chars with empty string.
     * @param value
     */
    static trimUnderlines(value: string): string;
    /**
     * This method is used for spinning date parts.
     * @param dateFormatParts
     * @param inputValue
     * @param position
     * @param delta
     * @param isSpinLoop
     * @return modified text input
     */
    static getModifiedDateInput(dateFormatParts: any[], inputValue: string, position: number, delta: number, isSpinLoop: boolean): string;
    /**
     * This method returns date input with prompt chars.
     * @param dateFormatParts
     * @param date
     * @param inputValue
     * @returns date input including prompt chars
     */
    static addPromptCharsEditMode(dateFormatParts: any[], date: Date, inputValue: string): string;
    /**
     * This method checks if date input is done.
     * @param dateFormatParts
     * @param input
     * @returns input completeness
     */
    static checkForCompleteDateInput(dateFormatParts: any[], input: string): string;
    private static getYearFormatType;
    private static getMonthFormatType;
    private static getDayFormatType;
    private static getDefaultLocaleMask;
    private static isDateChar;
    private static getNumericFormatPrefix;
    private static getMinMaxValue;
    private static daysInMonth;
    private static getDateValueFromInput;
    private static getDayValueFromInput;
    private static getMonthValueFromInput;
    private static getYearValueFromInput;
    private static getDateFormatPart;
    private static isFullInput;
    private static isFullYearInput;
    private static getDatePartOnPosition;
    private static getFullYearFromString;
    private static fillDatePartsPositions;
}

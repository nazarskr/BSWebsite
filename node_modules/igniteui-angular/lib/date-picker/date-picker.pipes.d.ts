import { PipeTransform } from '@angular/core';
import { IDatePicker } from './date-picker.common';
/**
 * @hidden
 */
export declare class DatePickerDisplayValuePipe implements PipeTransform {
    private _datePicker;
    constructor(_datePicker: IDatePicker);
    transform(value: any, args?: any): any;
}
/**
 * @hidden
 */
export declare class DatePickerInputValuePipe implements PipeTransform {
    private _datePicker;
    constructor(_datePicker: IDatePicker);
    transform(value: any, args?: any): any;
}

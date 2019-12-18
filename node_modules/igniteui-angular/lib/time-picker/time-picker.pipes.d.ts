import { PipeTransform } from '@angular/core';
import { IgxTimePickerBase } from './time-picker.common';
/**
 * Formats `IgxTimePickerComponent` display value according to the `format` property,
 * when the input element loses focus.
 **/
export declare class TimeDisplayFormatPipe implements PipeTransform {
    private timePicker;
    constructor(timePicker: IgxTimePickerBase);
    transform(value: any): string;
}
/**
 * Formats `IgxTimePickerComponent` display value according to the `format` property,
 * when the input element gets focus.
 **/
export declare class TimeInputFormatPipe implements PipeTransform {
    private timePicker;
    constructor(timePicker: IgxTimePickerBase);
    transform(value: any): string;
}

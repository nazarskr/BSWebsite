/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, Inject } from '@angular/core';
import { IGX_DATE_PICKER_COMPONENT } from './date-picker.common';
import { DatePickerUtil } from './date-picker.utils';
/**
 * @hidden
 */
export class DatePickerDisplayValuePipe {
    /**
     * @param {?} _datePicker
     */
    constructor(_datePicker) {
        this._datePicker = _datePicker;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (value !== '') {
            if (value === DatePickerUtil.maskToPromptChars(this._datePicker.inputMask)) {
                return '';
            }
            this._datePicker.rawDateString = value;
            return DatePickerUtil.trimUnderlines(value);
        }
        return '';
    }
}
DatePickerDisplayValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'displayValue'
            },] }
];
/** @nocollapse */
DatePickerDisplayValuePipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_DATE_PICKER_COMPONENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatePickerDisplayValuePipe.prototype._datePicker;
}
/**
 * @hidden
 */
export class DatePickerInputValuePipe {
    /**
     * @param {?} _datePicker
     */
    constructor(_datePicker) {
        this._datePicker = _datePicker;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (this._datePicker.invalidDate !== '') {
            return this._datePicker.invalidDate;
        }
        else {
            if (this._datePicker.value === null || this._datePicker.value === undefined) {
                return DatePickerUtil.maskToPromptChars(this._datePicker.inputMask);
            }
            else {
                return DatePickerUtil.addPromptCharsEditMode(this._datePicker.dateFormatParts, this._datePicker.value, value);
            }
        }
    }
}
DatePickerInputValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'inputValue'
            },] }
];
/** @nocollapse */
DatePickerInputValuePipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_DATE_PICKER_COMPONENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatePickerInputValuePipe.prototype._datePicker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBUXJELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFDbkMsWUFBdUQsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDOzs7Ozs7SUFDcEYsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFVO1FBQzVCLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNkLElBQUksS0FBSyxLQUFLLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN4RSxPQUFPLEVBQUUsQ0FBQzthQUNiO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLE9BQU8sY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7O1lBZEosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxjQUFjO2FBQ3ZCOzs7OzRDQUVnQixNQUFNLFNBQUMseUJBQXlCOzs7Ozs7O0lBQWpDLGlEQUFtRTs7Ozs7QUFtQm5GLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDakMsWUFBdUQsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDOzs7Ozs7SUFDcEYsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFVO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEtBQUssRUFBRSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7U0FDdkM7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDekUsT0FBTyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDSCxPQUFPLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqSDtTQUNKO0lBQ0wsQ0FBQzs7O1lBZkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxZQUFZO2FBQ3JCOzs7OzRDQUVnQixNQUFNLFNBQUMseUJBQXlCOzs7Ozs7O0lBQWpDLCtDQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUdYX0RBVEVfUElDS0VSX0NPTVBPTkVOVCwgSURhdGVQaWNrZXIgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbW1vbic7XG5pbXBvcnQgeyBEYXRlUGlja2VyVXRpbCB9IGZyb20gJy4vZGF0ZS1waWNrZXIudXRpbHMnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdkaXNwbGF5VmFsdWUnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJEaXNwbGF5VmFsdWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoQEluamVjdChJR1hfREFURV9QSUNLRVJfQ09NUE9ORU5UKSBwcml2YXRlIF9kYXRlUGlja2VyOiBJRGF0ZVBpY2tlcikgeyB9XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IERhdGVQaWNrZXJVdGlsLm1hc2tUb1Byb21wdENoYXJzKHRoaXMuX2RhdGVQaWNrZXIuaW5wdXRNYXNrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RhdGVQaWNrZXIucmF3RGF0ZVN0cmluZyA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIERhdGVQaWNrZXJVdGlsLnRyaW1VbmRlcmxpbmVzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdpbnB1dFZhbHVlJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VySW5wdXRWYWx1ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KElHWF9EQVRFX1BJQ0tFUl9DT01QT05FTlQpIHByaXZhdGUgX2RhdGVQaWNrZXI6IElEYXRlUGlja2VyKSB7IH1cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLl9kYXRlUGlja2VyLmludmFsaWREYXRlICE9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVQaWNrZXIuaW52YWxpZERhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0ZVBpY2tlci52YWx1ZSA9PT0gbnVsbCB8fCB0aGlzLl9kYXRlUGlja2VyLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZVBpY2tlclV0aWwubWFza1RvUHJvbXB0Q2hhcnModGhpcy5fZGF0ZVBpY2tlci5pbnB1dE1hc2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZVBpY2tlclV0aWwuYWRkUHJvbXB0Q2hhcnNFZGl0TW9kZSh0aGlzLl9kYXRlUGlja2VyLmRhdGVGb3JtYXRQYXJ0cywgdGhpcy5fZGF0ZVBpY2tlci52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
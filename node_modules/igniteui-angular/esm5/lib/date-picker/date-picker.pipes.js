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
var DatePickerDisplayValuePipe = /** @class */ (function () {
    function DatePickerDisplayValuePipe(_datePicker) {
        this._datePicker = _datePicker;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    DatePickerDisplayValuePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (value !== '') {
            if (value === DatePickerUtil.maskToPromptChars(this._datePicker.inputMask)) {
                return '';
            }
            this._datePicker.rawDateString = value;
            return DatePickerUtil.trimUnderlines(value);
        }
        return '';
    };
    DatePickerDisplayValuePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'displayValue'
                },] }
    ];
    /** @nocollapse */
    DatePickerDisplayValuePipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_DATE_PICKER_COMPONENT,] }] }
    ]; };
    return DatePickerDisplayValuePipe;
}());
export { DatePickerDisplayValuePipe };
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
var DatePickerInputValuePipe = /** @class */ (function () {
    function DatePickerInputValuePipe(_datePicker) {
        this._datePicker = _datePicker;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    DatePickerInputValuePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
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
    };
    DatePickerInputValuePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'inputValue'
                },] }
    ];
    /** @nocollapse */
    DatePickerInputValuePipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_DATE_PICKER_COMPONENT,] }] }
    ]; };
    return DatePickerInputValuePipe;
}());
export { DatePickerInputValuePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatePickerInputValuePipe.prototype._datePicker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBS3JEO0lBSUksb0NBQXVELFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQzs7Ozs7O0lBQ3BGLDhDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFDNUIsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ2QsSUFBSSxLQUFLLEtBQUssY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3hFLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDdkMsT0FBTyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOztnQkFkSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGNBQWM7aUJBQ3ZCOzs7O2dEQUVnQixNQUFNLFNBQUMseUJBQXlCOztJQVdqRCxpQ0FBQztDQUFBLEFBZkQsSUFlQztTQVpZLDBCQUEwQjs7Ozs7O0lBQ3ZCLGlEQUFtRTs7Ozs7QUFnQm5GO0lBSUksa0NBQXVELFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQzs7Ozs7O0lBQ3BGLDRDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFDNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsS0FBSyxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztTQUN2QzthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN6RSxPQUFPLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3ZFO2lCQUFNO2dCQUNILE9BQU8sY0FBYyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2pIO1NBQ0o7SUFDTCxDQUFDOztnQkFmSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLFlBQVk7aUJBQ3JCOzs7O2dEQUVnQixNQUFNLFNBQUMseUJBQXlCOztJQVlqRCwrQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBYlksd0JBQXdCOzs7Ozs7SUFDckIsK0NBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJR1hfREFURV9QSUNLRVJfQ09NUE9ORU5ULCBJRGF0ZVBpY2tlciB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tbW9uJztcbmltcG9ydCB7IERhdGVQaWNrZXJVdGlsIH0gZnJvbSAnLi9kYXRlLXBpY2tlci51dGlscyc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2Rpc3BsYXlWYWx1ZSdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckRpc3BsYXlWYWx1ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KElHWF9EQVRFX1BJQ0tFUl9DT01QT05FTlQpIHByaXZhdGUgX2RhdGVQaWNrZXI6IElEYXRlUGlja2VyKSB7IH1cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gRGF0ZVBpY2tlclV0aWwubWFza1RvUHJvbXB0Q2hhcnModGhpcy5fZGF0ZVBpY2tlci5pbnB1dE1hc2spKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZGF0ZVBpY2tlci5yYXdEYXRlU3RyaW5nID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZVBpY2tlclV0aWwudHJpbVVuZGVybGluZXModmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2lucHV0VmFsdWUnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJJbnB1dFZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSUdYX0RBVEVfUElDS0VSX0NPTVBPTkVOVCkgcHJpdmF0ZSBfZGF0ZVBpY2tlcjogSURhdGVQaWNrZXIpIHsgfVxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuX2RhdGVQaWNrZXIuaW52YWxpZERhdGUgIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZVBpY2tlci5pbnZhbGlkRGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRlUGlja2VyLnZhbHVlID09PSBudWxsIHx8IHRoaXMuX2RhdGVQaWNrZXIudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlUGlja2VyVXRpbC5tYXNrVG9Qcm9tcHRDaGFycyh0aGlzLl9kYXRlUGlja2VyLmlucHV0TWFzayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlUGlja2VyVXRpbC5hZGRQcm9tcHRDaGFyc0VkaXRNb2RlKHRoaXMuX2RhdGVQaWNrZXIuZGF0ZUZvcm1hdFBhcnRzLCB0aGlzLl9kYXRlUGlja2VyLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
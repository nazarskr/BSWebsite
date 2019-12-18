/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostBinding, HostListener, ElementRef, Injectable } from '@angular/core';
import { range, Calendar } from '../calendar';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
/** @type {?} */
let NEXT_ID = 0;
export class CalendarHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 1 }
        };
    }
}
CalendarHammerConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    CalendarHammerConfig.prototype.overrides;
}
export class IgxYearsViewComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        /**
         * Sets/gets the `id` of the years view.
         * If not set, the `id` will have value `"igx-years-view-0"`.
         * ```html
         * <igx-years-view id = "my-years-view"></igx-years-view>
         * ```
         * ```typescript
         * let yearsViewId =  this.yearsView.id;
         * ```
         * \@memberof IgxCalendarComponent
         */
        this.id = `igx-years-view-${NEXT_ID++}`;
        /**
         * Gets/sets the selected date of the years view.
         * By default it is the current date.
         * ```html
         * <igx-years-view [date]="myDate"></igx-years-view>
         * ```
         * ```typescript
         * let date =  this.yearsView.date;
         * ```
         * \@memberof IgxYearsViewComponent
         */
        this.date = new Date();
        /**
         * Emits an event when a selection is made in the years view.
         * Provides reference the `date` property in the `IgxYearsViewComponent`.
         * ```html
         * <igx-years-view (onSelection)="onSelection($event)"></igx-years-view>
         * ```
         * \@memberof IgxYearsViewComponent
         */
        this.onSelection = new EventEmitter();
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        this.styleClass = true;
        /**
         * The default `tabindex` attribute for the component.
         *
         * @hidden
         */
        this.tabindex = 0;
        /**
         * @hidden
         */
        this._locale = 'en';
        /**
         * @hidden
         */
        this._yearFormat = 'numeric';
        /**
         * @hidden
         */
        this._onTouchedCallback = () => { };
        /**
         * @hidden
         */
        this._onChangeCallback = () => { };
        this.initYearFormatter();
        this._calendarModel = new Calendar();
    }
    /**
     * Gets the year format option of the years view.
     * ```typescript
     * let yearFormat = this.yearsView.yearFormat.
     * ```
     * @return {?}
     */
    get yearFormat() {
        return this._yearFormat;
    }
    /**
     * Sets the year format option of the years view.
     * ```html
     * <igx-years-view [yearFormat]="numeric"></igx-years-view>
     * ```
     * \@memberof IgxYearsViewComponent
     * @param {?} value
     * @return {?}
     */
    set yearFormat(value) {
        this._yearFormat = value;
        this.initYearFormatter();
    }
    /**
     * Gets the `locale` of the years view.
     * Default value is `"en"`.
     * ```typescript
     * let locale =  this.yearsView.locale;
     * ```
     * \@memberof IgxYearsViewComponent
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
     * Sets the `locale` of the years view.
     * Expects a valid BCP 47 language tag.
     * Default value is `"en"`.
     * ```html
     * <igx-years-view [locale]="de"></igx-years-view>
     * ```
     * \@memberof IgxYearsViewComponent
     * @param {?} value
     * @return {?}
     */
    set locale(value) {
        this._locale = value;
        this.initYearFormatter();
    }
    /**
     * Returns an array of date objects which are then used to properly
     * render the years.
     *
     * Used in the template of the component.
     *
     * @hidden
     * @return {?}
     */
    get decade() {
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const start = this.date.getFullYear() - 3;
        /** @type {?} */
        const end = this.date.getFullYear() + 4;
        for (const year of range(start, end)) {
            result.push(new Date(year, this.date.getMonth(), this.date.getDate()));
        }
        return result;
    }
    /**
     * Returns the locale representation of the year in the years view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    formattedYear(value) {
        if (this.formatView) {
            return this._formatterYear.format(value);
        }
        return `${value.getFullYear()}`;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    selectYear(event) {
        this.date = event;
        this.onSelection.emit(this.date);
        this._onChangeCallback(this.date);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    scroll(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const delta = event.deltaY < 0 ? -1 : 1;
        this.generateYearRange(delta);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    pan(event) {
        /** @type {?} */
        const delta = event.deltaY < 0 ? 1 : -1;
        this.generateYearRange(delta);
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    yearTracker(index, item) {
        return `${item.getFullYear()}}`;
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.date = value;
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowDown(event) {
        event.preventDefault();
        event.stopPropagation();
        this.generateYearRange(1);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowUp(event) {
        event.preventDefault();
        event.stopPropagation();
        this.generateYearRange(-1);
    }
    /**
     * @hidden
     * @return {?}
     */
    onKeydownEnter() {
        this.onSelection.emit(this.date);
        this._onChangeCallback(this.date);
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    initYearFormatter() {
        this._formatterYear = new Intl.DateTimeFormat(this._locale, { year: this.yearFormat });
    }
    /**
     * @hidden
     * @private
     * @param {?} delta
     * @return {?}
     */
    generateYearRange(delta) {
        /** @type {?} */
        const currentYear = new Date().getFullYear();
        if ((delta > 0 && this.date.getFullYear() - currentYear >= 95) ||
            (delta < 0 && currentYear - this.date.getFullYear() >= 95)) {
            return;
        }
        this.date = this._calendarModel.timedelta(this.date, 'year', delta);
    }
}
IgxYearsViewComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: IgxYearsViewComponent,
                        multi: true
                    },
                    {
                        provide: HAMMER_GESTURE_CONFIG,
                        useClass: CalendarHammerConfig
                    }
                ],
                selector: 'igx-years-view',
                template: "<div class=\"igx-calendar__body\">\n    <div class=\"igx-calendar__body-column\" (wheel)=\"scroll($event)\" (pan)=\"pan($event)\">\n        <span [igxCalendarYear]=\"year\" [date]=\"date\" (onYearSelection)=\"selectYear($event)\" *ngFor=\"let year of decade; trackBy: yearTracker\">\n            {{ formattedYear(year) }}\n        </span>\n    </div>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxYearsViewComponent.ctorParameters = () => [
    { type: ElementRef }
];
IgxYearsViewComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    date: [{ type: Input }],
    yearFormat: [{ type: Input }],
    locale: [{ type: Input }],
    formatView: [{ type: Input }],
    onSelection: [{ type: Output }],
    styleClass: [{ type: HostBinding, args: ['class.igx-calendar',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    onKeydownArrowDown: [{ type: HostListener, args: ['keydown.arrowdown', ['$event'],] }],
    onKeydownArrowUp: [{ type: HostListener, args: ['keydown.arrowup', ['$event'],] }],
    onKeydownEnter: [{ type: HostListener, args: ['keydown.enter',] }]
};
if (false) {
    /**
     * Sets/gets the `id` of the years view.
     * If not set, the `id` will have value `"igx-years-view-0"`.
     * ```html
     * <igx-years-view id = "my-years-view"></igx-years-view>
     * ```
     * ```typescript
     * let yearsViewId =  this.yearsView.id;
     * ```
     * \@memberof IgxCalendarComponent
     * @type {?}
     */
    IgxYearsViewComponent.prototype.id;
    /**
     * Gets/sets the selected date of the years view.
     * By default it is the current date.
     * ```html
     * <igx-years-view [date]="myDate"></igx-years-view>
     * ```
     * ```typescript
     * let date =  this.yearsView.date;
     * ```
     * \@memberof IgxYearsViewComponent
     * @type {?}
     */
    IgxYearsViewComponent.prototype.date;
    /**
     * Gets/sets whether the view should be rendered
     * according to the locale and yearFormat, if any.
     * @type {?}
     */
    IgxYearsViewComponent.prototype.formatView;
    /**
     * Emits an event when a selection is made in the years view.
     * Provides reference the `date` property in the `IgxYearsViewComponent`.
     * ```html
     * <igx-years-view (onSelection)="onSelection($event)"></igx-years-view>
     * ```
     * \@memberof IgxYearsViewComponent
     * @type {?}
     */
    IgxYearsViewComponent.prototype.onSelection;
    /**
     * The default css class applied to the component.
     *
     * @hidden
     * @type {?}
     */
    IgxYearsViewComponent.prototype.styleClass;
    /**
     * The default `tabindex` attribute for the component.
     *
     * @hidden
     * @type {?}
     */
    IgxYearsViewComponent.prototype.tabindex;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxYearsViewComponent.prototype._formatterYear;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxYearsViewComponent.prototype._locale;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxYearsViewComponent.prototype._yearFormat;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxYearsViewComponent.prototype._calendarModel;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxYearsViewComponent.prototype._onTouchedCallback;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxYearsViewComponent.prototype._onChangeCallback;
    /** @type {?} */
    IgxYearsViewComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhcnMtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL3llYXJzLXZpZXcveWVhcnMtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFFbkYsT0FBTyxHQUFHLENBQUM7QUFHZixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQW1CO0lBRDdEOztRQUVXLGNBQVMsR0FBRztZQUNmLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRTtTQUM5RCxDQUFDO0lBQ04sQ0FBQzs7O1lBTEEsVUFBVTs7OztJQUVQLHlDQUVFOztBQWtCTixNQUFNLE9BQU8scUJBQXFCOzs7O0lBb0s5QixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7Ozs7Ozs7Ozs7O1FBckoxQixPQUFFLEdBQUcsa0JBQWtCLE9BQU8sRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztRQWNuQyxTQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7O1FBb0VsQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7OztRQVF2QyxlQUFVLEdBQUcsSUFBSSxDQUFDOzs7Ozs7UUFRbEIsYUFBUSxH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Qjs7Ozs7O0lBd0R6QiwyQ0FDMkI7Ozs7Ozs7Ozs7SUFVM0IsNENBQzhDOzs7Ozs7O0lBTzlDLDJDQUN5Qjs7Ozs7OztJQU96Qix5Q0FDb0I7Ozs7OztJQXlCcEIsK0NBQTRCOzs7Ozs7SUFLNUIsd0NBQXVCOzs7Ozs7SUFLdkIsNENBQWdDOzs7Ozs7SUFLaEMsK0NBQWlDOzs7Ozs7SUFLakMsbURBQW1EOzs7Ozs7SUFJbkQsa0RBQXlEOztJQUU3QyxtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZSwgQ2FsZW5kYXIgfSBmcm9tICcuLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgICBwdWJsaWMgb3ZlcnJpZGVzID0ge1xuICAgICAgICBwYW46IHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMLCB0aHJlc2hvbGQ6IDEgfVxuICAgIH07XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBJZ3hZZWFyc1ZpZXdDb21wb25lbnQsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgICAgICAgICB1c2VDbGFzczogQ2FsZW5kYXJIYW1tZXJDb25maWdcbiAgICAgICAgfVxuICAgIF0sXG4gICAgc2VsZWN0b3I6ICdpZ3gteWVhcnMtdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICd5ZWFycy12aWV3LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hZZWFyc1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIHllYXJzIHZpZXcuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgd2lsbCBoYXZlIHZhbHVlIGBcImlneC15ZWFycy12aWV3LTBcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gteWVhcnMtdmlldyBpZCA9IFwibXkteWVhcnMtdmlld1wiPjwvaWd4LXllYXJzLXZpZXc+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB5ZWFyc1ZpZXdJZCA9ICB0aGlzLnllYXJzVmlldy5pZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2FsZW5kYXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC15ZWFycy12aWV3LSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIHNlbGVjdGVkIGRhdGUgb2YgdGhlIHllYXJzIHZpZXcuXG4gICAgICogQnkgZGVmYXVsdCBpdCBpcyB0aGUgY3VycmVudCBkYXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXllYXJzLXZpZXcgW2RhdGVdPVwibXlEYXRlXCI+PC9pZ3gteWVhcnMtdmlldz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGRhdGUgPSAgdGhpcy55ZWFyc1ZpZXcuZGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4WWVhcnNWaWV3Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB5ZWFyIGZvcm1hdCBvcHRpb24gb2YgdGhlIHllYXJzIHZpZXcuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB5ZWFyRm9ybWF0ID0gdGhpcy55ZWFyc1ZpZXcueWVhckZvcm1hdC5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgeWVhckZvcm1hdCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5feWVhckZvcm1hdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB5ZWFyIGZvcm1hdCBvcHRpb24gb2YgdGhlIHllYXJzIHZpZXcuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gteWVhcnMtdmlldyBbeWVhckZvcm1hdF09XCJudW1lcmljXCI+PC9pZ3gteWVhcnMtdmlldz5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4WWVhcnNWaWV3Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCB5ZWFyRm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5feWVhckZvcm1hdCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmluaXRZZWFyRm9ybWF0dGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGxvY2FsZWAgb2YgdGhlIHllYXJzIHZpZXcuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgXCJlblwiYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxvY2FsZSA9ICB0aGlzLnllYXJzVmlldy5sb2NhbGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFllYXJzVmlld0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBsb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgbG9jYWxlYCBvZiB0aGUgeWVhcnMgdmlldy5cbiAgICAgKiBFeHBlY3RzIGEgdmFsaWQgQkNQIDQ3IGxhbmd1YWdlIHRhZy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBcImVuXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXllYXJzLXZpZXcgW2xvY2FsZV09XCJkZVwiPjwvaWd4LXllYXJzLXZpZXc+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFllYXJzVmlld0NvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5pdFllYXJGb3JtYXR0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgd2hldGhlciB0aGUgdmlldyBzaG91bGQgYmUgcmVuZGVyZWRcbiAgICAgKiBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsZSBhbmQgeWVhckZvcm1hdCwgaWYgYW55LlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdFZpZXc6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGEgc2VsZWN0aW9uIGlzIG1hZGUgaW4gdGhlIHllYXJzIHZpZXcuXG4gICAgICogUHJvdmlkZXMgcmVmZXJlbmNlIHRoZSBgZGF0ZWAgcHJvcGVydHkgaW4gdGhlIGBJZ3hZZWFyc1ZpZXdDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXllYXJzLXZpZXcgKG9uU2VsZWN0aW9uKT1cIm9uU2VsZWN0aW9uKCRldmVudClcIj48L2lneC15ZWFycy12aWV3PlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hZZWFyc1ZpZXdDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjc3MgY2xhc3MgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyJylcbiAgICBwdWJsaWMgc3R5bGVDbGFzcyA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGRhdGUgb2JqZWN0cyB3aGljaCBhcmUgdGhlbiB1c2VkIHRvIHByb3Blcmx5XG4gICAgICogcmVuZGVyIHRoZSB5ZWFycy5cbiAgICAgKlxuICAgICAqIFVzZWQgaW4gdGhlIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGRlY2FkZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpIC0gMztcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCkgKyA0O1xuXG4gICAgICAgIGZvciAoY29uc3QgeWVhciBvZiByYW5nZShzdGFydCwgZW5kKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IERhdGUoeWVhciwgdGhpcy5kYXRlLmdldE1vbnRoKCksIHRoaXMuZGF0ZS5nZXREYXRlKCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZm9ybWF0dGVyWWVhcjogYW55O1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbG9jYWxlID0gJ2VuJztcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3llYXJGb3JtYXQgPSAnbnVtZXJpYyc7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jYWxlbmRhck1vZGVsOiBDYWxlbmRhcjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaW5pdFllYXJGb3JtYXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fY2FsZW5kYXJNb2RlbCA9IG5ldyBDYWxlbmRhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxvY2FsZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgeWVhciBpbiB0aGUgeWVhcnMgdmlldy5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZm9ybWF0dGVkWWVhcih2YWx1ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1hdFZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXR0ZXJZZWFyLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlLmdldEZ1bGxZZWFyKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0WWVhcihldmVudCkge1xuICAgICAgICB0aGlzLmRhdGUgPSBldmVudDtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQodGhpcy5kYXRlKTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgZGVsdGEgPSBldmVudC5kZWx0YVkgPCAwID8gLTEgOiAxO1xuICAgICAgICB0aGlzLmdlbmVyYXRlWWVhclJhbmdlKGRlbHRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFuKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gZXZlbnQuZGVsdGFZIDwgMCA/IDEgOiAtMTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJSYW5nZShkZWx0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodjogRGF0ZSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgeWVhclRyYWNrZXIoaW5kZXgsIGl0ZW0pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7aXRlbS5nZXRGdWxsWWVhcigpfX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFyUmFuZ2UoMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3d1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJSYW5nZSgtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInKVxuICAgIHB1YmxpYyBvbktleWRvd25FbnRlcigpIHtcbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KHRoaXMuZGF0ZSk7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRZZWFyRm9ybWF0dGVyKCkge1xuICAgICAgICB0aGlzLl9mb3JtYXR0ZXJZZWFyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5fbG9jYWxlLCB7IHllYXI6IHRoaXMueWVhckZvcm1hdCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlWWVhclJhbmdlKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKChkZWx0YSA+IDAgJiYgdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCkgLSBjdXJyZW50WWVhciA+PSA5NSkgfHxcbiAgICAgICAgICAgIChkZWx0YSA8IDAgJiYgY3VycmVudFllYXIgLSB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSA+PSA5NSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLl9jYWxlbmRhck1vZGVsLnRpbWVkZWx0YSh0aGlzLmRhdGUsICd5ZWFyJywgZGVsdGEpO1xuICAgIH1cbn1cbiJdfQ==
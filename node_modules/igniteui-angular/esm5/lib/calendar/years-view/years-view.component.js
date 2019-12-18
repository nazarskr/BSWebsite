/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, HostBinding, HostListener, ElementRef, Injectable } from '@angular/core';
import { range, Calendar } from '../calendar';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
/** @type {?} */
var NEXT_ID = 0;
var CalendarHammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarHammerConfig, _super);
    function CalendarHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 1 }
        };
        return _this;
    }
    CalendarHammerConfig.decorators = [
        { type: Injectable }
    ];
    return CalendarHammerConfig;
}(HammerGestureConfig));
export { CalendarHammerConfig };
if (false) {
    /** @type {?} */
    CalendarHammerConfig.prototype.overrides;
}
var IgxYearsViewComponent = /** @class */ (function () {
    function IgxYearsViewComponent(el) {
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
        this.id = "igx-years-view-" + NEXT_ID++;
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
        this._onTouchedCallback = function () { };
        /**
         * @hidden
         */
        this._onChangeCallback = function () { };
        this.initYearFormatter();
        this._calendarModel = new Calendar();
    }
    Object.defineProperty(IgxYearsViewComponent.prototype, "yearFormat", {
        /**
         * Gets the year format option of the years view.
         * ```typescript
         * let yearFormat = this.yearsView.yearFormat.
         * ```
         */
        get: /**
         * Gets the year format option of the years view.
         * ```typescript
         * let yearFormat = this.yearsView.yearFormat.
         * ```
         * @return {?}
         */
        function () {
            return this._yearFormat;
        },
        /**
         * Sets the year format option of the years view.
         * ```html
         * <igx-years-view [yearFormat]="numeric"></igx-years-view>
         * ```
         * @memberof IgxYearsViewComponent
         */
        set: /**
         * Sets the year format option of the years view.
         * ```html
         * <igx-years-view [yearFormat]="numeric"></igx-years-view>
         * ```
         * \@memberof IgxYearsViewComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._yearFormat = value;
            this.initYearFormatter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxYearsViewComponent.prototype, "locale", {
        /**
         * Gets the `locale` of the years view.
         * Default value is `"en"`.
         * ```typescript
         * let locale =  this.yearsView.locale;
         * ```
         * @memberof IgxYearsViewComponent
         */
        get: /**
         * Gets the `locale` of the years view.
         * Default value is `"en"`.
         * ```typescript
         * let locale =  this.yearsView.locale;
         * ```
         * \@memberof IgxYearsViewComponent
         * @return {?}
         */
        function () {
            return this._locale;
        },
        /**
         * Sets the `locale` of the years view.
         * Expects a valid BCP 47 language tag.
         * Default value is `"en"`.
         * ```html
         * <igx-years-view [locale]="de"></igx-years-view>
         * ```
         * @memberof IgxYearsViewComponent
         */
        set: /**
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
        function (value) {
            this._locale = value;
            this.initYearFormatter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxYearsViewComponent.prototype, "decade", {
        /**
         * Returns an array of date objects which are then used to properly
         * render the years.
         *
         * Used in the template of the component.
         *
         * @hidden
         */
        get: /**
         * Returns an array of date objects which are then used to properly
         * render the years.
         *
         * Used in the template of the component.
         *
         * @hidden
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var result = [];
            /** @type {?} */
            var start = this.date.getFullYear() - 3;
            /** @type {?} */
            var end = this.date.getFullYear() + 4;
            try {
                for (var _b = tslib_1.__values(range(start, end)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var year = _c.value;
                    result.push(new Date(year, this.date.getMonth(), this.date.getDate()));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the locale representation of the year in the years view.
     *
     * @hidden
     */
    /**
     * Returns the locale representation of the year in the years view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxYearsViewComponent.prototype.formattedYear = /**
     * Returns the locale representation of the year in the years view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.formatView) {
            return this._formatterYear.format(value);
        }
        return "" + value.getFullYear();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxYearsViewComponent.prototype.selectYear = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.date = event;
        this.onSelection.emit(this.date);
        this._onChangeCallback(this.date);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxYearsViewComponent.prototype.scroll = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var delta = event.deltaY < 0 ? -1 : 1;
        this.generateYearRange(delta);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxYearsViewComponent.prototype.pan = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var delta = event.deltaY < 0 ? 1 : -1;
        this.generateYearRange(delta);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxYearsViewComponent.prototype.registerOnChange = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxYearsViewComponent.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    IgxYearsViewComponent.prototype.yearTracker = /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.getFullYear() + "}";
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxYearsViewComponent.prototype.writeValue = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this.date = value;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxYearsViewComponent.prototype.onKeydownArrowDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.generateYearRange(1);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxYearsViewComponent.prototype.onKeydownArrowUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.generateYearRange(-1);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxYearsViewComponent.prototype.onKeydownEnter = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.onSelection.emit(this.date);
        this._onChangeCallback(this.date);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxYearsViewComponent.prototype.initYearFormatter = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        this._formatterYear = new Intl.DateTimeFormat(this._locale, { year: this.yearFormat });
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} delta
     * @return {?}
     */
    IgxYearsViewComponent.prototype.generateYearRange = /**
     * @hidden
     * @private
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        /** @type {?} */
        var currentYear = new Date().getFullYear();
        if ((delta > 0 && this.date.getFullYear() - currentYear >= 95) ||
            (delta < 0 && currentYear - this.date.getFullYear() >= 95)) {
            return;
        }
        this.date = this._calendarModel.timedelta(this.date, 'year', delta);
    };
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
    IgxYearsViewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return IgxYearsViewComponent;
}());
export { IgxYearsViewComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhcnMtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL3llYXJzLXZpZXcveWVhcnMtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBRW5GLE9BQU8sR0FBRyxDQUFDO0FBRWY7SUFDMEMsZ0RBQW1CO0lBRDdEO1FBQUEscUVBS0M7UUFIVSxlQUFTLEdBQUc7WUFDZixHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7U0FDOUQsQ0FBQzs7SUFDTixDQUFDOztnQkFMQSxVQUFVOztJQUtYLDJCQUFDO0NBQUEsQUFMRCxDQUMwQyxtQkFBbUIsR0FJNUQ7U0FKWSxvQkFBb0I7OztJQUM3Qix5Q0FFRTs7QUFHTjtJQW1MSSwrQkFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7Ozs7Ozs7Ozs7OztRQXJKMUIsT0FBRSxHQUFHLG9CQUFrQixPQUFPLEVBQUksQ0FBQzs7Ozs7Ozs7Ozs7O1FBY25DLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7UUFvRWxCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7O1FBUXZDLGVBQVUsR0FBRyxJQUFJ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QUUsSUFBSTt5QkFDZDt3QkFDRDs0QkFDSSxPQUFPLEVBQUUscUJBQXFCOzRCQUM5QixRQUFRLEVBQUUsb0JBQW9CO3lCQUNqQztxQkFDSjtvQkFDRCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixvWEFBd0M7aUJBQzNDOzs7O2dCQTVCMkUsVUFBVTs7O3FCQTBDakYsV0FBVyxTQUFDLFNBQVMsY0FDckIsS0FBSzt1QkFjTCxLQUFLOzZCQVNMLEtBQUs7eUJBeUJMLEtBQUs7NkJBdUJMLEtBQUs7OEJBV0wsTUFBTTs2QkFRTixXQUFXLFNBQUMsb0JBQW9COzJCQVFoQyxXQUFXLFNBQUMsZUFBZTtxQ0FtSTNCLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzttQ0FXNUMsWUFBWSxTQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDO2lDQVcxQyxZQUFZLFNBQUMsZUFBZTs7SUF5QmpDLDRCQUFDO0NBQUEsQUFqVEQsSUFpVEM7U0FsU1kscUJBQXFCOzs7Ozs7Ozs7Ozs7OztJQWE5QixtQ0FFMEM7Ozs7Ozs7Ozs7Ozs7SUFhMUMscUNBQ3lCOzs7Ozs7SUF3RHpCLDJDQUMyQjs7Ozs7Ozs7OztJQVUzQiw0Q0FDOEM7Ozs7Ozs7SUFPOUMsMkNBQ3lCOzs7Ozs7O0lBT3pCLHlDQUNvQjs7Ozs7O0lBeUJwQiwrQ0FBNEI7Ozs7OztJQUs1Qix3Q0FBdUI7Ozs7OztJQUt2Qiw0Q0FBZ0M7Ozs7OztJQUtoQywrQ0FBaUM7Ozs7OztJQUtqQyxtREFBbUQ7Ozs7OztJQUluRCxrREFBeUQ7O0lBRTdDLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlLCBDYWxlbmRhciB9IGZyb20gJy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICAgIHB1YmxpYyBvdmVycmlkZXMgPSB7XG4gICAgICAgIHBhbjogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwsIHRocmVzaG9sZDogMSB9XG4gICAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IElneFllYXJzVmlld0NvbXBvbmVudCxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBDYWxlbmRhckhhbW1lckNvbmZpZ1xuICAgICAgICB9XG4gICAgXSxcbiAgICBzZWxlY3RvcjogJ2lneC15ZWFycy12aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3llYXJzLXZpZXcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneFllYXJzVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgeWVhcnMgdmlldy5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCB3aWxsIGhhdmUgdmFsdWUgYFwiaWd4LXllYXJzLXZpZXctMFwiYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC15ZWFycy12aWV3IGlkID0gXCJteS15ZWFycy12aWV3XCI+PC9pZ3gteWVhcnMtdmlldz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHllYXJzVmlld0lkID0gIHRoaXMueWVhcnNWaWV3LmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDYWxlbmRhckNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LXllYXJzLXZpZXctJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgc2VsZWN0ZWQgZGF0ZSBvZiB0aGUgeWVhcnMgdmlldy5cbiAgICAgKiBCeSBkZWZhdWx0IGl0IGlzIHRoZSBjdXJyZW50IGRhdGUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gteWVhcnMtdmlldyBbZGF0ZV09XCJteURhdGVcIj48L2lneC15ZWFycy12aWV3PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZGF0ZSA9ICB0aGlzLnllYXJzVmlldy5kYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hZZWFyc1ZpZXdDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHllYXIgZm9ybWF0IG9wdGlvbiBvZiB0aGUgeWVhcnMgdmlldy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHllYXJGb3JtYXQgPSB0aGlzLnllYXJzVmlldy55ZWFyRm9ybWF0LlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB5ZWFyRm9ybWF0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl95ZWFyRm9ybWF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHllYXIgZm9ybWF0IG9wdGlvbiBvZiB0aGUgeWVhcnMgdmlldy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC15ZWFycy12aWV3IFt5ZWFyRm9ybWF0XT1cIm51bWVyaWNcIj48L2lneC15ZWFycy12aWV3PlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hZZWFyc1ZpZXdDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHllYXJGb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl95ZWFyRm9ybWF0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5pdFllYXJGb3JtYXR0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgbG9jYWxlYCBvZiB0aGUgeWVhcnMgdmlldy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBcImVuXCJgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbG9jYWxlID0gIHRoaXMueWVhcnNWaWV3LmxvY2FsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4WWVhcnNWaWV3Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGBsb2NhbGVgIG9mIHRoZSB5ZWFycyB2aWV3LlxuICAgICAqIEV4cGVjdHMgYSB2YWxpZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYFwiZW5cImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gteWVhcnMtdmlldyBbbG9jYWxlXT1cImRlXCI+PC9pZ3gteWVhcnMtdmlldz5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4WWVhcnNWaWV3Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sb2NhbGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pbml0WWVhckZvcm1hdHRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB3aGV0aGVyIHRoZSB2aWV3IHNob3VsZCBiZSByZW5kZXJlZFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgbG9jYWxlIGFuZCB5ZWFyRm9ybWF0LCBpZiBhbnkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0VmlldzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZSBpbiB0aGUgeWVhcnMgdmlldy5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2UgdGhlIGBkYXRlYCBwcm9wZXJ0eSBpbiB0aGUgYElneFllYXJzVmlld0NvbXBvbmVudGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gteWVhcnMtdmlldyAob25TZWxlY3Rpb24pPVwib25TZWxlY3Rpb24oJGV2ZW50KVwiPjwvaWd4LXllYXJzLXZpZXc+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFllYXJzVmlld0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXInKVxuICAgIHB1YmxpYyBzdHlsZUNsYXNzID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGB0YWJpbmRleGAgYXR0cmlidXRlIGZvciB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIHRhYmluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZGF0ZSBvYmplY3RzIHdoaWNoIGFyZSB0aGVuIHVzZWQgdG8gcHJvcGVybHlcbiAgICAgKiByZW5kZXIgdGhlIHllYXJzLlxuICAgICAqXG4gICAgICogVXNlZCBpbiB0aGUgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgZGVjYWRlKCk6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCkgLSAzO1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSArIDQ7XG5cbiAgICAgICAgZm9yIChjb25zdCB5ZWFyIG9mIHJhbmdlKHN0YXJ0LCBlbmQpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChuZXcgRGF0ZSh5ZWFyLCB0aGlzLmRhdGUuZ2V0TW9udGgoKSwgdGhpcy5kYXRlLmdldERhdGUoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9mb3JtYXR0ZXJZZWFyOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9sb2NhbGUgPSAnZW4nO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfeWVhckZvcm1hdCA9ICdudW1lcmljJztcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2NhbGVuZGFyTW9kZWw6IENhbGVuZGFyO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pbml0WWVhckZvcm1hdHRlcigpO1xuICAgICAgICB0aGlzLl9jYWxlbmRhck1vZGVsID0gbmV3IENhbGVuZGFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbG9jYWxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB5ZWFyIGluIHRoZSB5ZWFycyB2aWV3LlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBmb3JtYXR0ZWRZZWFyKHZhbHVlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0Vmlldykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdHRlclllYXIuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dmFsdWUuZ2V0RnVsbFllYXIoKX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RZZWFyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGV2ZW50O1xuXG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdCh0aGlzLmRhdGUpO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBkZWx0YSA9IGV2ZW50LmRlbHRhWSA8IDAgPyAtMSA6IDE7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFyUmFuZ2UoZGVsdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwYW4oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBldmVudC5kZWx0YVkgPCAwID8gMSA6IC0xO1xuICAgICAgICB0aGlzLmdlbmVyYXRlWWVhclJhbmdlKGRlbHRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2OiBEYXRlKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB5ZWFyVHJhY2tlcihpbmRleCwgaXRlbSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHtpdGVtLmdldEZ1bGxZZWFyKCl9fWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2Rvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd0Rvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJSYW5nZSgxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3VwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmdlbmVyYXRlWWVhclJhbmdlKC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbnRlcicpXG4gICAgcHVibGljIG9uS2V5ZG93bkVudGVyKCkge1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQodGhpcy5kYXRlKTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdFllYXJGb3JtYXR0ZXIoKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdHRlclllYXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLl9sb2NhbGUsIHsgeWVhcjogdGhpcy55ZWFyRm9ybWF0IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVZZWFyUmFuZ2UoZGVsdGE6IG51bWJlcikge1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICBpZiAoKGRlbHRhID4gMCAmJiB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSAtIGN1cnJlbnRZZWFyID49IDk1KSB8fFxuICAgICAgICAgICAgKGRlbHRhIDwgMCAmJiBjdXJyZW50WWVhciAtIHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpID49IDk1KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuX2NhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMuZGF0ZSwgJ3llYXInLCBkZWx0YSk7XG4gICAgfVxufVxuIl19
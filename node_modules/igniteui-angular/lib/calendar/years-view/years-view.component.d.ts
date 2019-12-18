import { EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { HammerGestureConfig } from '@angular/platform-browser';
export declare class CalendarHammerConfig extends HammerGestureConfig {
    overrides: {
        pan: {
            direction: number;
            threshold: number;
        };
    };
}
export declare class IgxYearsViewComponent implements ControlValueAccessor {
    el: ElementRef;
    /**
     * Sets/gets the `id` of the years view.
     * If not set, the `id` will have value `"igx-years-view-0"`.
     * ```html
     * <igx-years-view id = "my-years-view"></igx-years-view>
     * ```
     * ```typescript
     * let yearsViewId =  this.yearsView.id;
     * ```
     * @memberof IgxCalendarComponent
     */
    id: string;
    /**
     * Gets/sets the selected date of the years view.
     * By default it is the current date.
     * ```html
     * <igx-years-view [date]="myDate"></igx-years-view>
     * ```
     * ```typescript
     * let date =  this.yearsView.date;
     * ```
     * @memberof IgxYearsViewComponent
     */
    date: Date;
    /**
     * Gets the year format option of the years view.
     * ```typescript
     * let yearFormat = this.yearsView.yearFormat.
     * ```
     */
    /**
    * Sets the year format option of the years view.
    * ```html
    * <igx-years-view [yearFormat]="numeric"></igx-years-view>
    * ```
    * @memberof IgxYearsViewComponent
    */
    yearFormat: string;
    /**
     * Gets the `locale` of the years view.
     * Default value is `"en"`.
     * ```typescript
     * let locale =  this.yearsView.locale;
     * ```
     * @memberof IgxYearsViewComponent
     */
    /**
    * Sets the `locale` of the years view.
    * Expects a valid BCP 47 language tag.
    * Default value is `"en"`.
    * ```html
    * <igx-years-view [locale]="de"></igx-years-view>
    * ```
    * @memberof IgxYearsViewComponent
    */
    locale: string;
    /**
     * Gets/sets whether the view should be rendered
     * according to the locale and yearFormat, if any.
     */
    formatView: boolean;
    /**
     * Emits an event when a selection is made in the years view.
     * Provides reference the `date` property in the `IgxYearsViewComponent`.
     * ```html
     * <igx-years-view (onSelection)="onSelection($event)"></igx-years-view>
     * ```
     * @memberof IgxYearsViewComponent
     */
    onSelection: EventEmitter<Date>;
    /**
     * The default css class applied to the component.
     *
     * @hidden
     */
    styleClass: boolean;
    /**
     * The default `tabindex` attribute for the component.
     *
     * @hidden
     */
    tabindex: number;
    /**
     * Returns an array of date objects which are then used to properly
     * render the years.
     *
     * Used in the template of the component.
     *
     * @hidden
     */
    readonly decade: number[];
    /**
     *@hidden
     */
    private _formatterYear;
    /**
     *@hidden
     */
    private _locale;
    /**
     *@hidden
     */
    private _yearFormat;
    /**
     *@hidden
     */
    private _calendarModel;
    /**
     *@hidden
     */
    private _onTouchedCallback;
    /**
     *@hidden
     */
    private _onChangeCallback;
    constructor(el: ElementRef);
    /**
     * Returns the locale representation of the year in the years view.
     *
     * @hidden
     */
    formattedYear(value: Date): string;
    /**
     *@hidden
     */
    selectYear(event: any): void;
    /**
     *@hidden
     */
    scroll(event: any): void;
    /**
     *@hidden
     */
    pan(event: any): void;
    /**
     * @hidden
     */
    registerOnChange(fn: (v: Date) => void): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: () => void): void;
    /**
     * @hidden
     */
    yearTracker(index: any, item: any): string;
    /**
     * @hidden
     */
    writeValue(value: Date): void;
    /**
     * @hidden
     */
    onKeydownArrowDown(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownArrowUp(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownEnter(): void;
    /**
     *@hidden
     */
    private initYearFormatter;
    /**
     *@hidden
     */
    private generateYearRange;
}

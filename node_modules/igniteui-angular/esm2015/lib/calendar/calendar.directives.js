/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This file contains all the directives used by the @link IgxCalendarComponent.
 * Except for the directives which are used for templating the calendar itself
 * you should generally not use them directly.
 * @preferred
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef, ElementRef, NgZone } from '@angular/core';
import { fromEvent, Subject, interval } from 'rxjs';
import { takeUntil, debounce, tap } from 'rxjs/operators';
/**
 * @hidden
 */
export class IgxCalendarYearDirective {
    constructor() {
        this.onYearSelection = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get defaultCSS() {
        return !this.isCurrentYear;
    }
    /**
     * @return {?}
     */
    get currentCSS() {
        return this.isCurrentYear;
    }
    /**
     * @return {?}
     */
    get isCurrentYear() {
        return this.date.getFullYear() === this.value.getFullYear();
    }
    /**
     * @return {?}
     */
    onClick() {
        this.onYearSelection.emit(this.value);
    }
}
IgxCalendarYearDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCalendarYear]'
            },] }
];
IgxCalendarYearDirective.propDecorators = {
    value: [{ type: Input, args: ['igxCalendarYear',] }],
    date: [{ type: Input }],
    onYearSelection: [{ type: Output }],
    defaultCSS: [{ type: HostBinding, args: ['class.igx-calendar__year',] }],
    currentCSS: [{ type: HostBinding, args: ['class.igx-calendar__year--current',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    IgxCalendarYearDirective.prototype.value;
    /** @type {?} */
    IgxCalendarYearDirective.prototype.date;
    /** @type {?} */
    IgxCalendarYearDirective.prototype.onYearSelection;
}
export class IgxCalendarMonthDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.onMonthSelection = new EventEmitter();
        this.tabindex = 0;
    }
    /**
     * @return {?}
     */
    get defaultCSS() {
        return !this.isCurrentMonth;
    }
    /**
     * @return {?}
     */
    get currentCSS() {
        return this.isCurrentMonth;
    }
    /**
     * @return {?}
     */
    get isCurrentMonth() {
        return this.date.getMonth() === this.value.getMonth();
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        const date = new Date(this.value.getFullYear(), this.value.getMonth(), this.date.getDate());
        this.onMonthSelection.emit(date);
    }
}
IgxCalendarMonthDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCalendarMonth]'
            },] }
];
/** @nocollapse */
IgxCalendarMonthDirective.ctorParameters = () => [
    { type: ElementRef }
];
IgxCalendarMonthDirective.propDecorators = {
    value: [{ type: Input, args: ['igxCalendarMonth',] }],
    date: [{ type: Input }],
    index: [{ type: Input }],
    onMonthSelection: [{ type: Output }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    defaultCSS: [{ type: HostBinding, args: ['class.igx-calendar__month',] }],
    currentCSS: [{ type: HostBinding, args: ['class.igx-calendar__month--current',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    IgxCalendarMonthDirective.prototype.value;
    /** @type {?} */
    IgxCalendarMonthDirective.prototype.date;
    /** @type {?} */
    IgxCalendarMonthDirective.prototype.index;
    /** @type {?} */
    IgxCalendarMonthDirective.prototype.onMonthSelection;
    /** @type {?} */
    IgxCalendarMonthDirective.prototype.tabindex;
    /** @type {?} */
    IgxCalendarMonthDirective.prototype.elementRef;
}
/**
 * @hidden
 */
export class IgxCalendarHeaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxCalendarHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCalendarHeader]'
            },] }
];
/** @nocollapse */
IgxCalendarHeaderTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxCalendarHeaderTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
export class IgxCalendarSubheaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxCalendarSubheaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCalendarSubheader]'
            },] }
];
/** @nocollapse */
IgxCalendarSubheaderTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxCalendarSubheaderTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
export class IgxCalendarScrollMonthDirective {
    /**
     * @param {?} element
     * @param {?} zone
     */
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        /**
         * @hidden
         */
        this.destroy$ = new Subject();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        fromEvent(this.element.nativeElement, 'keyup').pipe(debounce(() => interval(100)), takeUntil(this.destroy$)).subscribe((event) => {
            this.stopScroll(event);
        });
        this.zone.runOutsideAngular(() => {
            fromEvent(this.element.nativeElement, 'keydown').pipe(tap((event) => {
                if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }), debounce(() => interval(100)), takeUntil(this.destroy$)).subscribe((event) => {
                if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
                    this.zone.run(() => this.startScroll(true));
                }
            });
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * @hidden
     * @return {?}
     */
    onMouseDown() {
        this.startScroll();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        this.stopScroll(event);
    }
}
IgxCalendarScrollMonthDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCalendarScrollMonth]'
            },] }
];
/** @nocollapse */
IgxCalendarScrollMonthDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
IgxCalendarScrollMonthDirective.propDecorators = {
    startScroll: [{ type: Input }],
    stopScroll: [{ type: Input }],
    onMouseDown: [{ type: HostListener, args: ['mousedown',] }],
    onMouseUp: [{ type: HostListener, args: ['mouseup', ['$event'],] }]
};
if (false) {
    /**
     * A callback function to be invoked when month increment/decrement starts.
     * @hidden
     * @type {?}
     */
    IgxCalendarScrollMonthDirective.prototype.startScroll;
    /**
     * A callback function to be invoked when month increment/decrement stops.
     * @hidden
     * @type {?}
     */
    IgxCalendarScrollMonthDirective.prototype.stopScroll;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarScrollMonthDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxCalendarScrollMonthDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxCalendarScrollMonthDirective.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXIuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxVQUFVLEVBR1YsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVMxRCxNQUFNLE9BQU8sd0JBQXdCO0lBSHJDO1FBWVcsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBb0J0RCxDQUFDOzs7O0lBbEJHLElBQ1csVUFBVTtRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFDVyxVQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFHTSxPQUFPO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQS9CSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjthQUNoQzs7O29CQUdJLEtBQUssU0FBQyxpQkFBaUI7bUJBR3ZCLEtBQUs7OEJBR0wsTUFBTTt5QkFHTixXQUFXLFNBQUMsMEJBQTBCO3lCQUt0QyxXQUFXLFNBQUMsbUNBQW1DO3NCQVMvQyxZQUFZLFNBQUMsT0FBTzs7OztJQXZCckIseUNBQ21COztJQUVuQix3Q0FDa0I7O0lBRWxCLG1EQUNrRDs7QUF5QnRELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFtQ2xDLFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF2QmxDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFHNUMsYUFBUSxHQUFHLENBQUMsQ0FBQztJQW9Cd0IsQ0FBQzs7OztJQWxCN0MsSUFDVyxVQUFVO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxJQUNXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFXLGNBQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFLTSxPQUFPOztjQUNKLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQTVDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjthQUNqQzs7OztZQWhERyxVQUFVOzs7b0JBbURULEtBQUssU0FBQyxrQkFBa0I7bUJBR3hCLEtBQUs7b0JBR0wsS0FBSzsrQkFHTCxNQUFNO3VCQUdOLFdBQVcsU0FBQyxlQUFlO3lCQUczQixXQUFXLFNBQUMsMkJBQTJCO3lCQUt2QyxXQUFXLFNBQUMsb0NBQW9DO3NCQWVoRCxZQUFZLFNBQUMsT0FBTzs7OztJQW5DckIsMENBQ21COztJQUVuQix5Q0FDa0I7O0lBRWxCLDBDQUNhOztJQUViLHFEQUNtRDs7SUFFbkQsNkNBQ29COztJQW9CUiwrQ0FBNkI7Ozs7O0FBZTdDLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7SUFFM0MsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBRyxDQUFDOzs7WUFMcEQsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7YUFDbEM7Ozs7WUFuR0csV0FBVzs7OztJQXNHQyxzREFBaUM7Ozs7O0FBU2pELE1BQU0sT0FBTyxxQ0FBcUM7Ozs7SUFDOUMsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBRyxDQUFDOzs7WUFKcEQsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7Ozs7WUE5R0csV0FBVzs7OztJQWdIQyx5REFBaUM7Ozs7O0FBU2pELE1BQU0sT0FBTywrQkFBK0I7Ozs7O0lBcUJ4QyxZQUFvQixPQUFtQixFQUFVLElBQVk7UUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7Ozs7UUFGckQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFdUIsQ0FBQzs7Ozs7SUFLM0QsZUFBZTtRQUVsQixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNqRCxHQUFHLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7Z0JBQ3pCLElBQUksS0FBSyxDQUFDLEdBQUcsb0JBQWUsSUFBSSxLQUFLLENBQUMsR0FBRyw4QkFBa0IsSUFBSSxLQUFLLENBQUMsR0FBRyx3QkFBZSxFQUFFO29CQUNyRixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDM0I7WUFDTCxDQUFDLENBQUMsRUFDRixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLEtBQUssQ0FBQyxHQUFHLG9CQUFlLElBQUksS0FBSyxDQUFDLEdBQUcsOEJBQWtCLElBQUksS0FBSyxDQUFDLEdBQUcsd0JBQWUsRUFBRTtvQkFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDOzs7OztJQUtNLFdBQVc7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBTU0sV0FBVztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFNTSxTQUFTLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUEvRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwwQkFBMEI7YUFDdkM7Ozs7WUF2SEcsVUFBVTtZQUdWLE1BQU07OzswQkEySEwsS0FBSzt5QkFPTCxLQUFLOzBCQW9ETCxZQUFZLFNBQUMsV0FBVzt3QkFReEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7SUFuRW5DLHNEQUM4Qzs7Ozs7O0lBTTlDLHFEQUNzQzs7Ozs7O0lBS3RDLG1EQUEwQzs7Ozs7SUFFOUIsa0RBQTJCOzs7OztJQUFFLCtDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZGlyZWN0aXZlcyB1c2VkIGJ5IHRoZSBAbGluayBJZ3hDYWxlbmRhckNvbXBvbmVudC5cbiAqIEV4Y2VwdCBmb3IgdGhlIGRpcmVjdGl2ZXMgd2hpY2ggYXJlIHVzZWQgZm9yIHRlbXBsYXRpbmcgdGhlIGNhbGVuZGFyIGl0c2VsZlxuICogeW91IHNob3VsZCBnZW5lcmFsbHkgbm90IHVzZSB0aGVtIGRpcmVjdGx5LlxuICogQHByZWZlcnJlZFxuICovXG5pbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBFbGVtZW50UmVmLFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgT25EZXN0cm95LFxuICAgIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZGVib3VuY2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneENhbGVuZGFyWWVhcl0nXG59KVxuZXhwb3J0IGNsYXNzIElneENhbGVuZGFyWWVhckRpcmVjdGl2ZSB7XG5cbiAgICBASW5wdXQoJ2lneENhbGVuZGFyWWVhcicpXG4gICAgcHVibGljIHZhbHVlOiBEYXRlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGF0ZTogRGF0ZTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblllYXJTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYWxlbmRhcl9feWVhcicpXG4gICAgcHVibGljIGdldCBkZWZhdWx0Q1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDdXJyZW50WWVhcjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYWxlbmRhcl9feWVhci0tY3VycmVudCcpXG4gICAgcHVibGljIGdldCBjdXJyZW50Q1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0N1cnJlbnRZZWFyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNDdXJyZW50WWVhcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLnZhbHVlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIHB1YmxpYyBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLm9uWWVhclNlbGVjdGlvbi5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q2FsZW5kYXJNb250aF0nXG59KVxuZXhwb3J0IGNsYXNzIElneENhbGVuZGFyTW9udGhEaXJlY3RpdmUge1xuXG4gICAgQElucHV0KCdpZ3hDYWxlbmRhck1vbnRoJylcbiAgICBwdWJsaWMgdmFsdWU6IERhdGU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkYXRlOiBEYXRlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW5kZXg7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Nb250aFNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIHRhYmluZGV4ID0gMDtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19tb250aCcpXG4gICAgcHVibGljIGdldCBkZWZhdWx0Q1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDdXJyZW50TW9udGg7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXJfX21vbnRoLS1jdXJyZW50JylcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ3VycmVudE1vbnRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNDdXJyZW50TW9udGgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuZ2V0TW9udGgoKSA9PT0gdGhpcy52YWx1ZS5nZXRNb250aCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIHB1YmxpYyBvbkNsaWNrKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy52YWx1ZS5nZXRGdWxsWWVhcigpLCB0aGlzLnZhbHVlLmdldE1vbnRoKCksIHRoaXMuZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICB0aGlzLm9uTW9udGhTZWxlY3Rpb24uZW1pdChkYXRlKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDYWxlbmRhckhlYWRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIElneENhbGVuZGFySGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q2FsZW5kYXJTdWJoZWFkZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYWxlbmRhclN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDYWxlbmRhclNjcm9sbE1vbnRoXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FsZW5kYXJTY3JvbGxNb250aERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiBtb250aCBpbmNyZW1lbnQvZGVjcmVtZW50IHN0YXJ0cy5cbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3RhcnRTY3JvbGw6IChrZXlkb3duPzogYm9vbGVhbikgPT4ge307XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiBtb250aCBpbmNyZW1lbnQvZGVjcmVtZW50IHN0b3BzLlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzdG9wU2Nyb2xsOiAoZXZlbnQ6IGFueSkgPT4ge307XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcbiAgICAgICAgICAgIGRlYm91bmNlKCgpID0+IGludGVydmFsKDEwMCkpLFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgICkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9wU2Nyb2xsKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nKS5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRSB8fCBldmVudC5rZXkgPT09IEtFWVMuU1BBQ0VfSUUgfHwgZXZlbnQua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSgoKSA9PiBpbnRlcnZhbCgxMDApKSxcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IEtFWVMuU1BBQ0UgfHwgZXZlbnQua2V5ID09PSBLRVlTLlNQQUNFX0lFIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuc3RhcnRTY3JvbGwodHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKVxuICAgIHB1YmxpYyBvbk1vdXNlRG93bigpIHtcbiAgICAgICAgdGhpcy5zdGFydFNjcm9sbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbChldmVudCk7XG4gICAgfVxufVxuIl19
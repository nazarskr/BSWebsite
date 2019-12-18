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
var IgxCalendarYearDirective = /** @class */ (function () {
    function IgxCalendarYearDirective() {
        this.onYearSelection = new EventEmitter();
    }
    Object.defineProperty(IgxCalendarYearDirective.prototype, "defaultCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isCurrentYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarYearDirective.prototype, "currentCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isCurrentYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarYearDirective.prototype, "isCurrentYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.getFullYear() === this.value.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxCalendarYearDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.onYearSelection.emit(this.value);
    };
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
    return IgxCalendarYearDirective;
}());
export { IgxCalendarYearDirective };
if (false) {
    /** @type {?} */
    IgxCalendarYearDirective.prototype.value;
    /** @type {?} */
    IgxCalendarYearDirective.prototype.date;
    /** @type {?} */
    IgxCalendarYearDirective.prototype.onYearSelection;
}
var IgxCalendarMonthDirective = /** @class */ (function () {
    function IgxCalendarMonthDirective(elementRef) {
        this.elementRef = elementRef;
        this.onMonthSelection = new EventEmitter();
        this.tabindex = 0;
    }
    Object.defineProperty(IgxCalendarMonthDirective.prototype, "defaultCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isCurrentMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarMonthDirective.prototype, "currentCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isCurrentMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarMonthDirective.prototype, "isCurrentMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.getMonth() === this.value.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarMonthDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxCalendarMonthDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = new Date(this.value.getFullYear(), this.value.getMonth(), this.date.getDate());
        this.onMonthSelection.emit(date);
    };
    IgxCalendarMonthDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCalendarMonth]'
                },] }
    ];
    /** @nocollapse */
    IgxCalendarMonthDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return IgxCalendarMonthDirective;
}());
export { IgxCalendarMonthDirective };
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
var IgxCalendarHeaderTemplateDirective = /** @class */ (function () {
    function IgxCalendarHeaderTemplateDirective(template) {
        this.template = template;
    }
    IgxCalendarHeaderTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCalendarHeader]'
                },] }
    ];
    /** @nocollapse */
    IgxCalendarHeaderTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxCalendarHeaderTemplateDirective;
}());
export { IgxCalendarHeaderTemplateDirective };
if (false) {
    /** @type {?} */
    IgxCalendarHeaderTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
var IgxCalendarSubheaderTemplateDirective = /** @class */ (function () {
    function IgxCalendarSubheaderTemplateDirective(template) {
        this.template = template;
    }
    IgxCalendarSubheaderTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCalendarSubheader]'
                },] }
    ];
    /** @nocollapse */
    IgxCalendarSubheaderTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxCalendarSubheaderTemplateDirective;
}());
export { IgxCalendarSubheaderTemplateDirective };
if (false) {
    /** @type {?} */
    IgxCalendarSubheaderTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
var IgxCalendarScrollMonthDirective = /** @class */ (function () {
    function IgxCalendarScrollMonthDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        /**
         * @hidden
         */
        this.destroy$ = new Subject();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxCalendarScrollMonthDirective.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(this.element.nativeElement, 'keyup').pipe(debounce(function () { return interval(100); }), takeUntil(this.destroy$)).subscribe(function (event) {
            _this.stopScroll(event);
        });
        this.zone.runOutsideAngular(function () {
            fromEvent(_this.element.nativeElement, 'keydown').pipe(tap(function (event) {
                if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }), debounce(function () { return interval(100); }), takeUntil(_this.destroy$)).subscribe(function (event) {
                if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
                    _this.zone.run(function () { return _this.startScroll(true); });
                }
            });
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxCalendarScrollMonthDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxCalendarScrollMonthDirective.prototype.onMouseDown = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.startScroll();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxCalendarScrollMonthDirective.prototype.onMouseUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.stopScroll(event);
    };
    IgxCalendarScrollMonthDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCalendarScrollMonth]'
                },] }
    ];
    /** @nocollapse */
    IgxCalendarScrollMonthDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IgxCalendarScrollMonthDirective.propDecorators = {
        startScroll: [{ type: Input }],
        stopScroll: [{ type: Input }],
        onMouseDown: [{ type: HostListener, args: ['mousedown',] }],
        onMouseUp: [{ type: HostListener, args: ['mouseup', ['$event'],] }]
    };
    return IgxCalendarScrollMonthDirective;
}());
export { IgxCalendarScrollMonthDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXIuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxVQUFVLEVBR1YsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU0xRDtJQUFBO1FBWVcsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBb0J0RCxDQUFDO0lBbEJHLHNCQUNXLGdEQUFVOzs7O1FBRHJCO1lBRUksT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFDVyxnREFBVTs7OztRQURyQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG1EQUFhOzs7O1FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEUsQ0FBQzs7O09BQUE7Ozs7SUFHTSwwQ0FBTzs7O0lBRGQ7UUFFSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBL0JKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzs7O3dCQUdJLEtB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Q0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0kscURBQVc7Ozs7SUFBbEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFFSSxxREFBVzs7OztJQURsQjtRQUVJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUVJLG1EQUFTOzs7OztJQURoQixVQUNpQixLQUFpQjtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQS9FSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtpQkFDdkM7Ozs7Z0JBdkhHLFVBQVU7Z0JBR1YsTUFBTTs7OzhCQTJITCxLQUFLOzZCQU9MLEtBQUs7OEJBb0RMLFlBQVksU0FBQyxXQUFXOzRCQVF4QixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQUl2QyxzQ0FBQztDQUFBLEFBaEZELElBZ0ZDO1NBN0VZLCtCQUErQjs7Ozs7OztJQU14QyxzREFDOEM7Ozs7OztJQU05QyxxREFDc0M7Ozs7OztJQUt0QyxtREFBMEM7Ozs7O0lBRTlCLGtEQUEyQjs7Ozs7SUFBRSwrQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhbGwgdGhlIGRpcmVjdGl2ZXMgdXNlZCBieSB0aGUgQGxpbmsgSWd4Q2FsZW5kYXJDb21wb25lbnQuXG4gKiBFeGNlcHQgZm9yIHRoZSBkaXJlY3RpdmVzIHdoaWNoIGFyZSB1c2VkIGZvciB0ZW1wbGF0aW5nIHRoZSBjYWxlbmRhciBpdHNlbGZcbiAqIHlvdSBzaG91bGQgZ2VuZXJhbGx5IG5vdCB1c2UgdGhlbSBkaXJlY3RseS5cbiAqIEBwcmVmZXJyZWRcbiAqL1xuaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgRWxlbWVudFJlZixcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIE9uRGVzdHJveSxcbiAgICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlYm91bmNlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDYWxlbmRhclllYXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYWxlbmRhclllYXJEaXJlY3RpdmUge1xuXG4gICAgQElucHV0KCdpZ3hDYWxlbmRhclllYXInKVxuICAgIHB1YmxpYyB2YWx1ZTogRGF0ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRhdGU6IERhdGU7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25ZZWFyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXJfX3llYXInKVxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ3VycmVudFllYXI7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXJfX3llYXItLWN1cnJlbnQnKVxuICAgIHB1YmxpYyBnZXQgY3VycmVudENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDdXJyZW50WWVhcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzQ3VycmVudFllYXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy52YWx1ZS5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBwdWJsaWMgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5vblllYXJTZWxlY3Rpb24uZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneENhbGVuZGFyTW9udGhdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYWxlbmRhck1vbnRoRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgnaWd4Q2FsZW5kYXJNb250aCcpXG4gICAgcHVibGljIHZhbHVlOiBEYXRlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGF0ZTogRGF0ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGV4O1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTW9udGhTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYWxlbmRhcl9fbW9udGgnKVxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ3VycmVudE1vbnRoO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19tb250aC0tY3VycmVudCcpXG4gICAgcHVibGljIGdldCBjdXJyZW50Q1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0N1cnJlbnRNb250aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzQ3VycmVudE1vbnRoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlLmdldE1vbnRoKCkgPT09IHRoaXMudmFsdWUuZ2V0TW9udGgoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBwdWJsaWMgb25DbGljaygpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWUuZ2V0RnVsbFllYXIoKSwgdGhpcy52YWx1ZS5nZXRNb250aCgpLCB0aGlzLmRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgdGhpcy5vbk1vbnRoU2VsZWN0aW9uLmVtaXQoZGF0ZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q2FsZW5kYXJIZWFkZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYWxlbmRhckhlYWRlclRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneENhbGVuZGFyU3ViaGVhZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FsZW5kYXJTdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q2FsZW5kYXJTY3JvbGxNb250aF0nXG59KVxuZXhwb3J0IGNsYXNzIElneENhbGVuZGFyU2Nyb2xsTW9udGhEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gbW9udGggaW5jcmVtZW50L2RlY3JlbWVudCBzdGFydHMuXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHN0YXJ0U2Nyb2xsOiAoa2V5ZG93bj86IGJvb2xlYW4pID0+IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gbW9udGggaW5jcmVtZW50L2RlY3JlbWVudCBzdG9wcy5cbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3RvcFNjcm9sbDogKGV2ZW50OiBhbnkpID0+IHt9O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLnBpcGUoXG4gICAgICAgICAgICBkZWJvdW5jZSgoKSA9PiBpbnRlcnZhbCgxMDApKSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNjcm9sbChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdrZXlkb3duJykucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IEtFWVMuU1BBQ0UgfHwgZXZlbnQua2V5ID09PSBLRVlTLlNQQUNFX0lFIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZGVib3VuY2UoKCkgPT4gaW50ZXJ2YWwoMTAwKSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBLRVlTLlNQQUNFIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRV9JRSB8fCBldmVudC5rZXkgPT09IEtFWVMuRU5URVIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLnN0YXJ0U2Nyb2xsKHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJylcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oKSB7XG4gICAgICAgIHRoaXMuc3RhcnRTY3JvbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLnN0b3BTY3JvbGwoZXZlbnQpO1xuICAgIH1cbn1cbiJdfQ==
/**
 * This file contains all the directives used by the @link IgxCalendarComponent.
 * Except for the directives which are used for templating the calendar itself
 * you should generally not use them directly.
 * @preferred
 */
import { EventEmitter, TemplateRef, ElementRef, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
/**
 * @hidden
 */
export declare class IgxCalendarYearDirective {
    value: Date;
    date: Date;
    onYearSelection: EventEmitter<Date>;
    readonly defaultCSS: boolean;
    readonly currentCSS: boolean;
    readonly isCurrentYear: boolean;
    onClick(): void;
}
export declare class IgxCalendarMonthDirective {
    elementRef: ElementRef;
    value: Date;
    date: Date;
    index: any;
    onMonthSelection: EventEmitter<Date>;
    tabindex: number;
    readonly defaultCSS: boolean;
    readonly currentCSS: boolean;
    readonly isCurrentMonth: boolean;
    readonly nativeElement: any;
    constructor(elementRef: ElementRef);
    onClick(): void;
}
/**
 * @hidden
 */
export declare class IgxCalendarHeaderTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
/**
 * @hidden
 */
export declare class IgxCalendarSubheaderTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
/**
 * @hidden
 */
export declare class IgxCalendarScrollMonthDirective implements AfterViewInit, OnDestroy {
    private element;
    private zone;
    /**
     * A callback function to be invoked when month increment/decrement starts.
     * @hidden
     */
    startScroll: (keydown?: boolean) => {};
    /**
     * A callback function to be invoked when month increment/decrement stops.
     * @hidden
     */
    stopScroll: (event: any) => {};
    /**
     * @hidden
     */
    private destroy$;
    constructor(element: ElementRef, zone: NgZone);
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    onMouseDown(): void;
    /**
     * @hidden
     */
    onMouseUp(event: MouseEvent): void;
}

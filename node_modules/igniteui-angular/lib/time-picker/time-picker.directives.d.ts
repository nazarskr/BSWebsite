/**
 * This file contains all the directives used by the @link IgxTimePickerComponent.
 * You should generally not use them directly.
 * @preferred
 */
import { ElementRef, TemplateRef } from '@angular/core';
import { IgxTimePickerBase } from './time-picker.common';
/** @hidden */
export declare class IgxItemListDirective {
    timePicker: IgxTimePickerBase;
    private elementRef;
    type: string;
    isActive: boolean;
    constructor(timePicker: IgxTimePickerBase, elementRef: ElementRef);
    tabindex: number;
    readonly defaultCSS: boolean;
    readonly hourCSS: boolean;
    readonly minuteCSS: boolean;
    readonly ampmCSS: boolean;
    onFocus(): void;
    onBlur(): void;
    private nextItem;
    private prevItem;
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
    onKeydownArrowRight(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownArrowLeft(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownEnter(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownEscape(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onHover(): void;
    /**
     * @hidden
     */
    onScroll(event: any): void;
    /**
     * @hidden
     */
    onPanMove(event: any): void;
}
/**
 * @hidden
 */
export declare class IgxHourItemDirective {
    timePicker: IgxTimePickerBase;
    private itemList;
    value: string;
    readonly defaultCSS: boolean;
    readonly selectedCSS: boolean;
    readonly activeCSS: boolean;
    readonly isSelectedHour: boolean;
    constructor(timePicker: IgxTimePickerBase, itemList: IgxItemListDirective);
    onClick(item: any): void;
}
/**
 * @hidden
 */
export declare class IgxMinuteItemDirective {
    timePicker: IgxTimePickerBase;
    private itemList;
    value: string;
    readonly defaultCSS: boolean;
    readonly selectedCSS: boolean;
    readonly activeCSS: boolean;
    readonly isSelectedMinute: boolean;
    constructor(timePicker: IgxTimePickerBase, itemList: IgxItemListDirective);
    onClick(item: any): void;
}
/**
 * @hidden
 */
export declare class IgxAmPmItemDirective {
    timePicker: IgxTimePickerBase;
    private itemList;
    value: string;
    readonly defaultCSS: boolean;
    readonly selectedCSS: boolean;
    readonly activeCSS: boolean;
    readonly isSelectedAmPm: boolean;
    constructor(timePicker: IgxTimePickerBase, itemList: IgxItemListDirective);
    onClick(item: any): void;
}
/**
 * This directive should be used to mark which ng-template will be used from IgxTimePicker when re-templating its input group.
 */
export declare class IgxTimePickerTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
/**
 * This directive can be used to add custom action buttons to the dropdownb/dialog.
 */
export declare class IgxTimePickerActionsDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}

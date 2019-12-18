/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This file contains all the directives used by the @link IgxTimePickerComponent.
 * You should generally not use them directly.
 * @preferred
 */
import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, TemplateRef } from '@angular/core';
import { IGX_TIME_PICKER_COMPONENT } from './time-picker.common';
import { InteractionMode } from '../core/enums';
/**
 * @hidden
 */
export class IgxItemListDirective {
    /**
     * @param {?} timePicker
     * @param {?} elementRef
     */
    constructor(timePicker, elementRef) {
        this.timePicker = timePicker;
        this.elementRef = elementRef;
        this.tabindex = 0;
    }
    /**
     * @return {?}
     */
    get defaultCSS() {
        return true;
    }
    /**
     * @return {?}
     */
    get hourCSS() {
        return this.type === 'hourList';
    }
    /**
     * @return {?}
     */
    get minuteCSS() {
        return this.type === 'minuteList';
    }
    /**
     * @return {?}
     */
    get ampmCSS() {
        return this.type === 'ampmList';
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.isActive = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.isActive = false;
    }
    /**
     * @private
     * @return {?}
     */
    nextItem() {
        switch (this.type) {
            case 'hourList': {
                this.timePicker.nextHour();
                break;
            }
            case 'minuteList': {
                this.timePicker.nextMinute();
                break;
            }
            case 'ampmList': {
                this.timePicker.nextAmPm();
                break;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    prevItem() {
        switch (this.type) {
            case 'hourList': {
                this.timePicker.prevHour();
                break;
            }
            case 'minuteList': {
                this.timePicker.prevMinute();
                break;
            }
            case 'ampmList': {
                this.timePicker.prevAmPm();
                break;
            }
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowDown(event) {
        event.preventDefault();
        this.nextItem();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowUp(event) {
        event.preventDefault();
        this.prevItem();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowRight(event) {
        event.preventDefault();
        /** @type {?} */
        const listName = ((/** @type {?} */ (event.target))).className;
        if (listName.indexOf('hourList') !== -1 && this.timePicker.minuteList) {
            this.timePicker.minuteList.nativeElement.focus();
        }
        else if ((listName.indexOf('hourList') !== -1 || listName.indexOf('minuteList') !== -1) && this.timePicker.ampmList) {
            this.timePicker.ampmList.nativeElement.focus();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowLeft(event) {
        event.preventDefault();
        /** @type {?} */
        const listName = ((/** @type {?} */ (event.target))).className;
        if (listName.indexOf('ampmList') !== -1 && this.timePicker.minuteList) {
            this.timePicker.minuteList.nativeElement.focus();
        }
        else if ((listName.indexOf('ampmList') !== -1 || listName.indexOf('minuteList') !== -1) && this.timePicker.hourList) {
            this.timePicker.hourList.nativeElement.focus();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownEnter(event) {
        event.preventDefault();
        if (this.timePicker.mode === InteractionMode.DropDown) {
            this.timePicker.close();
            return;
        }
        this.timePicker.okButtonClick();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownEscape(event) {
        event.preventDefault();
        this.timePicker.cancelButtonClick();
    }
    /**
     * @hidden
     * @return {?}
     */
    onHover() {
        this.elementRef.nativeElement.focus();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.deltaY > 0) {
            this.nextItem();
        }
        else if (event.deltaY < 0) {
            this.prevItem();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onPanMove(event) {
        if (event.deltaY < 0) {
            this.nextItem();
        }
        else if (event.deltaY > 0) {
            this.prevItem();
        }
    }
}
IgxItemListDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxItemList]'
            },] }
];
/** @nocollapse */
IgxItemListDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] },
    { type: ElementRef }
];
IgxItemListDirective.propDecorators = {
    type: [{ type: Input, args: ['igxItemList',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    defaultCSS: [{ type: HostBinding, args: ['class.igx-time-picker__column',] }],
    hourCSS: [{ type: HostBinding, args: ['class.igx-time-picker__hourList',] }],
    minuteCSS: [{ type: HostBinding, args: ['class.igx-time-picker__minuteList',] }],
    ampmCSS: [{ type: HostBinding, args: ['class.igx-time-picker__ampmList',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onKeydownArrowDown: [{ type: HostListener, args: ['keydown.arrowdown', ['$event'],] }],
    onKeydownArrowUp: [{ type: HostListener, args: ['keydown.arrowup', ['$event'],] }],
    onKeydownArrowRight: [{ type: HostListener, args: ['keydown.arrowright', ['$event'],] }],
    onKeydownArrowLeft: [{ type: HostListener, args: ['keydown.arrowleft', ['$event'],] }],
    onKeydownEnter: [{ type: HostListener, args: ['keydown.enter', ['$event'],] }],
    onKeydownEscape: [{ type: HostListener, args: ['keydown.escape', ['$event'],] }],
    onHover: [{ type: HostListener, args: ['mouseover',] }],
    onScroll: [{ type: HostListener, args: ['wheel', ['$event'],] }],
    onPanMove: [{ type: HostListener, args: ['panmove', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    IgxItemListDirective.prototype.type;
    /** @type {?} */
    IgxItemListDirective.prototype.isActive;
    /** @type {?} */
    IgxItemListDirective.prototype.tabindex;
    /** @type {?} */
    IgxItemListDirective.prototype.timePicker;
    /**
     * @type {?}
     * @private
     */
    IgxItemListDirective.prototype.elementRef;
}
/**
 * @hidden
 */
export class IgxHourItemDirective {
    /**
     * @param {?} timePicker
     * @param {?} itemList
     */
    constructor(timePicker, itemList) {
        this.timePicker = timePicker;
        this.itemList = itemList;
    }
    /**
     * @return {?}
     */
    get defaultCSS() {
        return true;
    }
    /**
     * @return {?}
     */
    get selectedCSS() {
        return this.isSelectedHour;
    }
    /**
     * @return {?}
     */
    get activeCSS() {
        return this.isSelectedHour && this.itemList.isActive;
    }
    /**
     * @return {?}
     */
    get isSelectedHour() {
        return this.timePicker.selectedHour === this.value;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        if (item !== '') {
            this.timePicker.scrollHourIntoView(item);
        }
    }
}
IgxHourItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxHourItem]'
            },] }
];
/** @nocollapse */
IgxHourItemDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] },
    { type: IgxItemListDirective }
];
IgxHourItemDirective.propDecorators = {
    value: [{ type: Input, args: ['igxHourItem',] }],
    defaultCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item',] }],
    selectedCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--selected',] }],
    activeCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--active',] }],
    onClick: [{ type: HostListener, args: ['click', ['value'],] }]
};
if (false) {
    /** @type {?} */
    IgxHourItemDirective.prototype.value;
    /** @type {?} */
    IgxHourItemDirective.prototype.timePicker;
    /**
     * @type {?}
     * @private
     */
    IgxHourItemDirective.prototype.itemList;
}
/**
 * @hidden
 */
export class IgxMinuteItemDirective {
    /**
     * @param {?} timePicker
     * @param {?} itemList
     */
    constructor(timePicker, itemList) {
        this.timePicker = timePicker;
        this.itemList = itemList;
    }
    /**
     * @return {?}
     */
    get defaultCSS() {
        return true;
    }
    /**
     * @return {?}
     */
    get selectedCSS() {
        return this.isSelectedMinute;
    }
    /**
     * @return {?}
     */
    get activeCSS() {
        return this.isSelectedMinute && this.itemList.isActive;
    }
    /**
     * @return {?}
     */
    get isSelectedMinute() {
        return this.timePicker.selectedMinute === this.value;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        if (item !== '') {
            this.timePicker.scrollMinuteIntoView(item);
        }
    }
}
IgxMinuteItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxMinuteItem]'
            },] }
];
/** @nocollapse */
IgxMinuteItemDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] },
    { type: IgxItemListDirective }
];
IgxMinuteItemDirective.propDecorators = {
    value: [{ type: Input, args: ['igxMinuteItem',] }],
    defaultCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item',] }],
    selectedCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--selected',] }],
    activeCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--active',] }],
    onClick: [{ type: HostListener, args: ['click', ['value'],] }]
};
if (false) {
    /** @type {?} */
    IgxMinuteItemDirective.prototype.value;
    /** @type {?} */
    IgxMinuteItemDirective.prototype.timePicker;
    /**
     * @type {?}
     * @private
     */
    IgxMinuteItemDirective.prototype.itemList;
}
/**
 * @hidden
 */
export class IgxAmPmItemDirective {
    /**
     * @param {?} timePicker
     * @param {?} itemList
     */
    constructor(timePicker, itemList) {
        this.timePicker = timePicker;
        this.itemList = itemList;
    }
    /**
     * @return {?}
     */
    get defaultCSS() {
        return true;
    }
    /**
     * @return {?}
     */
    get selectedCSS() {
        return this.isSelectedAmPm;
    }
    /**
     * @return {?}
     */
    get activeCSS() {
        return this.isSelectedAmPm && this.itemList.isActive;
    }
    /**
     * @return {?}
     */
    get isSelectedAmPm() {
        return this.timePicker.selectedAmPm === this.value;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        if (item !== '') {
            this.timePicker.scrollAmPmIntoView(item);
        }
    }
}
IgxAmPmItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxAmPmItem]'
            },] }
];
/** @nocollapse */
IgxAmPmItemDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] },
    { type: IgxItemListDirective }
];
IgxAmPmItemDirective.propDecorators = {
    value: [{ type: Input, args: ['igxAmPmItem',] }],
    defaultCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item',] }],
    selectedCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--selected',] }],
    activeCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--active',] }],
    onClick: [{ type: HostListener, args: ['click', ['value'],] }]
};
if (false) {
    /** @type {?} */
    IgxAmPmItemDirective.prototype.value;
    /** @type {?} */
    IgxAmPmItemDirective.prototype.timePicker;
    /**
     * @type {?}
     * @private
     */
    IgxAmPmItemDirective.prototype.itemList;
}
/**
 * This directive should be used to mark which ng-template will be used from IgxTimePicker when re-templating its input group.
 */
export class IgxTimePickerTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxTimePickerTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxTimePickerTemplate]'
            },] }
];
/** @nocollapse */
IgxTimePickerTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxTimePickerTemplateDirective.prototype.template;
}
/**
 * This directive can be used to add custom action buttons to the dropdownb/dialog.
 */
export class IgxTimePickerActionsDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxTimePickerActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxTimePickerActions]'
            },] }
];
/** @nocollapse */
IgxTimePickerActionsDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxTimePickerActionsDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvdGltZS1waWNrZXIvdGltZS1waWNrZXIuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTWhELE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBTzdCLFlBQ08sVUFBNkIsRUFDeEIsVUFBc0I7UUFEM0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUczQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBSGtCLENBQUM7Ozs7SUFLdkMsSUFDSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELElBQ0ksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELElBQ0ksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELElBQ0ksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7SUFDcEMsQ0FBQzs7OztJQUdNLE9BQU87UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDOzs7O0lBR00sTUFBTTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sUUFBUTtR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SSxDQUFDLEtBQUssQ0FBQztJQUN2RCxDQUFDOzs7OztJQU9NLE9BQU8sQ0FBQyxJQUFJO1FBQ2YsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7OztZQXBDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7YUFDNUI7Ozs7NENBeUJnQixNQUFNLFNBQUMseUJBQXlCO1lBRXZCLG9CQUFvQjs7O29CQXhCekMsS0FBSyxTQUFDLGFBQWE7eUJBR25CLFdBQVcsU0FBQyw2QkFBNkI7MEJBS3pDLFdBQVcsU0FBQyx1Q0FBdUM7d0JBS25ELFdBQVcsU0FBQyxxQ0FBcUM7c0JBYWpELFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7Ozs7SUExQmhDLHFDQUNxQjs7SUFxQlQsMENBQ3dCOzs7OztJQUNoQyx3Q0FBc0M7Ozs7O0FBZ0I5QyxNQUFNLE9BQU8sOEJBQThCOzs7O0lBQ3ZDLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUksQ0FBQzs7O1lBSnJELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUseUJBQXlCO2FBQ3RDOzs7O1lBMVVHLFdBQVc7Ozs7SUE0VUMsa0RBQWlDOzs7OztBQVNqRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0lBQ3RDLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUksQ0FBQzs7O1lBSnJELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2FBQ3JDOzs7O1lBcFZHLFdBQVc7Ozs7SUFzVkMsaURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYWxsIHRoZSBkaXJlY3RpdmVzIHVzZWQgYnkgdGhlIEBsaW5rIElneFRpbWVQaWNrZXJDb21wb25lbnQuXG4gKiBZb3Ugc2hvdWxkIGdlbmVyYWxseSBub3QgdXNlIHRoZW0gZGlyZWN0bHkuXG4gKiBAcHJlZmVycmVkXG4gKi9cbmltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElHWF9USU1FX1BJQ0tFUl9DT01QT05FTlQsIElneFRpbWVQaWNrZXJCYXNlIH0gZnJvbSAnLi90aW1lLXBpY2tlci5jb21tb24nO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb25Nb2RlIH0gZnJvbSAnLi4vY29yZS9lbnVtcyc7XG5cbi8qKiBAaGlkZGVuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hJdGVtTGlzdF0nXG59KVxuZXhwb3J0IGNsYXNzIElneEl0ZW1MaXN0RGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgnaWd4SXRlbUxpc3QnKVxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KElHWF9USU1FX1BJQ0tFUl9DT01QT05FTlQpXG4gICAgcHVibGljIHRpbWVQaWNrZXI6IElneFRpbWVQaWNrZXJCYXNlLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2NvbHVtbicpXG4gICAgZ2V0IGRlZmF1bHRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19ob3VyTGlzdCcpXG4gICAgZ2V0IGhvdXJDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdob3VyTGlzdCc7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX21pbnV0ZUxpc3QnKVxuICAgIGdldCBtaW51dGVDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdtaW51dGVMaXN0JztcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10aW1lLXBpY2tlcl9fYW1wbUxpc3QnKVxuICAgIGdldCBhbXBtQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnYW1wbUxpc3QnO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgICBwdWJsaWMgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gICAgcHVibGljIG9uQmx1cigpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dEl0ZW0oKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdob3VyTGlzdCc6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIubmV4dEhvdXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZUxpc3QnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLm5leHRNaW51dGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2FtcG1MaXN0Jzoge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5uZXh0QW1QbSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmV2SXRlbSgpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2hvdXJMaXN0Jzoge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5wcmV2SG91cigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnbWludXRlTGlzdCc6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIucHJldk1pbnV0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnYW1wbUxpc3QnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLnByZXZBbVBtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2Rvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd0Rvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLm5leHRJdGVtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3d1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnByZXZJdGVtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dyaWdodCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93UmlnaHQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAobGlzdE5hbWUuaW5kZXhPZignaG91ckxpc3QnKSAhPT0gLTEgJiYgdGhpcy50aW1lUGlja2VyLm1pbnV0ZUxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5taW51dGVMaXN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmICgobGlzdE5hbWUuaW5kZXhPZignaG91ckxpc3QnKSAhPT0gLTEgfHwgbGlzdE5hbWUuaW5kZXhPZignbWludXRlTGlzdCcpICE9PSAtMSkgJiYgdGhpcy50aW1lUGlja2VyLmFtcG1MaXN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIuYW1wbUxpc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dsZWZ0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dMZWZ0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKGxpc3ROYW1lLmluZGV4T2YoJ2FtcG1MaXN0JykgIT09IC0xICYmIHRoaXMudGltZVBpY2tlci5taW51dGVMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIubWludXRlTGlzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGxpc3ROYW1lLmluZGV4T2YoJ2FtcG1MaXN0JykgIT09IC0xIHx8IGxpc3ROYW1lLmluZGV4T2YoJ21pbnV0ZUxpc3QnKSAhPT0gLTEpICYmIHRoaXMudGltZVBpY2tlci5ob3VyTGlzdCkge1xuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLmhvdXJMaXN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93bikge1xuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lUGlja2VyLm9rQnV0dG9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25Fc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnRpbWVQaWNrZXIuY2FuY2VsQnV0dG9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJylcbiAgICBwdWJsaWMgb25Ib3ZlcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignd2hlZWwnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblNjcm9sbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0SXRlbSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJldkl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdwYW5tb3ZlJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25QYW5Nb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRJdGVtKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2SXRlbSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4SG91ckl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hIb3VySXRlbURpcmVjdGl2ZSB7XG5cbiAgICBASW5wdXQoJ2lneEhvdXJJdGVtJylcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19pdGVtJylcbiAgICBnZXQgZGVmYXVsdENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2l0ZW0tLXNlbGVjdGVkJylcbiAgICBnZXQgc2VsZWN0ZWRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWRIb3VyO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19pdGVtLS1hY3RpdmUnKVxuICAgIGdldCBhY3RpdmVDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWRIb3VyICYmIHRoaXMuaXRlbUxpc3QuaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgZ2V0IGlzU2VsZWN0ZWRIb3VyKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lUGlja2VyLnNlbGVjdGVkSG91ciA9PT0gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KElHWF9USU1FX1BJQ0tFUl9DT01QT05FTlQpXG4gICAgcHVibGljIHRpbWVQaWNrZXI6IElneFRpbWVQaWNrZXJCYXNlLFxuICAgICAgICBwcml2YXRlIGl0ZW1MaXN0OiBJZ3hJdGVtTGlzdERpcmVjdGl2ZSkgeyB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsndmFsdWUnXSlcbiAgICBwdWJsaWMgb25DbGljayhpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLnNjcm9sbEhvdXJJbnRvVmlldyhpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneE1pbnV0ZUl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hNaW51dGVJdGVtRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgnaWd4TWludXRlSXRlbScpXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10aW1lLXBpY2tlcl9faXRlbScpXG4gICAgZ2V0IGRlZmF1bHRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19pdGVtLS1zZWxlY3RlZCcpXG4gICAgZ2V0IHNlbGVjdGVkQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkTWludXRlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19pdGVtLS1hY3RpdmUnKVxuICAgIGdldCBhY3RpdmVDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWRNaW51dGUgJiYgdGhpcy5pdGVtTGlzdC5pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNTZWxlY3RlZE1pbnV0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVBpY2tlci5zZWxlY3RlZE1pbnV0ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KElHWF9USU1FX1BJQ0tFUl9DT01QT05FTlQpXG4gICAgcHVibGljIHRpbWVQaWNrZXI6IElneFRpbWVQaWNrZXJCYXNlLFxuICAgICAgICBwcml2YXRlIGl0ZW1MaXN0OiBJZ3hJdGVtTGlzdERpcmVjdGl2ZSkgeyB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsndmFsdWUnXSlcbiAgICBwdWJsaWMgb25DbGljayhpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLnNjcm9sbE1pbnV0ZUludG9WaWV3KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4QW1QbUl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hBbVBtSXRlbURpcmVjdGl2ZSB7XG5cbiAgICBASW5wdXQoJ2lneEFtUG1JdGVtJylcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19pdGVtJylcbiAgICBnZXQgZGVmYXVsdENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2l0ZW0tLXNlbGVjdGVkJylcbiAgICBnZXQgc2VsZWN0ZWRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWRBbVBtO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19pdGVtLS1hY3RpdmUnKVxuICAgIGdldCBhY3RpdmVDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWRBbVBtICYmIHRoaXMuaXRlbUxpc3QuaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgZ2V0IGlzU2VsZWN0ZWRBbVBtKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lUGlja2VyLnNlbGVjdGVkQW1QbSA9PT0gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KElHWF9USU1FX1BJQ0tFUl9DT01QT05FTlQpXG4gICAgcHVibGljIHRpbWVQaWNrZXI6IElneFRpbWVQaWNrZXJCYXNlLFxuICAgICAgICBwcml2YXRlIGl0ZW1MaXN0OiBJZ3hJdGVtTGlzdERpcmVjdGl2ZSkgeyB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsndmFsdWUnXSlcbiAgICBwdWJsaWMgb25DbGljayhpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLnNjcm9sbEFtUG1JbnRvVmlldyhpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBzaG91bGQgYmUgdXNlZCB0byBtYXJrIHdoaWNoIG5nLXRlbXBsYXRlIHdpbGwgYmUgdXNlZCBmcm9tIElneFRpbWVQaWNrZXIgd2hlbiByZS10ZW1wbGF0aW5nIGl0cyBpbnB1dCBncm91cC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4VGltZVBpY2tlclRlbXBsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4VGltZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGFkZCBjdXN0b20gYWN0aW9uIGJ1dHRvbnMgdG8gdGhlIGRyb3Bkb3duYi9kaWFsb2cuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFRpbWVQaWNrZXJBY3Rpb25zXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4VGltZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iXX0=
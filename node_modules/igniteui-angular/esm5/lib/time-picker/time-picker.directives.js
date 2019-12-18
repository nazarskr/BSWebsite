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
var IgxItemListDirective = /** @class */ (function () {
    function IgxItemListDirective(timePicker, elementRef) {
        this.timePicker = timePicker;
        this.elementRef = elementRef;
        this.tabindex = 0;
    }
    Object.defineProperty(IgxItemListDirective.prototype, "defaultCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxItemListDirective.prototype, "hourCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === 'hourList';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxItemListDirective.prototype, "minuteCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === 'minuteList';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxItemListDirective.prototype, "ampmCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === 'ampmList';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxItemListDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.isActive = true;
    };
    /**
     * @return {?}
     */
    IgxItemListDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
    };
    /**
     * @private
     * @return {?}
     */
    IgxItemListDirective.prototype.nextItem = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    IgxItemListDirective.prototype.prevItem = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxItemListDirective.prototype.onKeydownArrowDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.nextItem();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxItemListDirective.prototype.onKeydownArrowUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.prevItem();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxItemListDirective.prototype.onKeydownArrowRight = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var listName = ((/** @type {?} */ (event.target))).className;
        if (listName.indexOf('hourList') !== -1 && this.timePicker.minuteList) {
            this.timePicker.minuteList.nativeElement.focus();
        }
        else if ((listName.indexOf('hourList') !== -1 || listName.indexOf('minuteList') !== -1) && this.timePicker.ampmList) {
            this.timePicker.ampmList.nativeElement.focus();
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
    IgxItemListDirective.prototype.onKeydownArrowLeft = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var listName = ((/** @type {?} */ (event.target))).className;
        if (listName.indexOf('ampmList') !== -1 && this.timePicker.minuteList) {
            this.timePicker.minuteList.nativeElement.focus();
        }
        else if ((listName.indexOf('ampmList') !== -1 || listName.indexOf('minuteList') !== -1) && this.timePicker.hourList) {
            this.timePicker.hourList.nativeElement.focus();
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
    IgxItemListDirective.prototype.onKeydownEnter = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (this.timePicker.mode === InteractionMode.DropDown) {
            this.timePicker.close();
            return;
        }
        this.timePicker.okButtonClick();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxItemListDirective.prototype.onKeydownEscape = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.timePicker.cancelButtonClick();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxItemListDirective.prototype.onHover = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxItemListDirective.prototype.onScroll = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.deltaY > 0) {
            this.nextItem();
        }
        else if (event.deltaY < 0) {
            this.prevItem();
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
    IgxItemListDirective.prototype.onPanMove = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.deltaY < 0) {
            this.nextItem();
        }
        else if (event.deltaY > 0) {
            this.prevItem();
        }
    };
    IgxItemListDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxItemList]'
                },] }
    ];
    /** @nocollapse */
    IgxItemListDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] },
        { type: ElementRef }
    ]; };
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
    return IgxItemListDirective;
}());
export { IgxItemListDirective };
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
var IgxHourItemDirective = /** @class */ (function () {
    function IgxHourItemDirective(timePicker, itemList) {
        this.timePicker = timePicker;
        this.itemList = itemList;
    }
    Object.defineProperty(IgxHourItemDirective.prototype, "defaultCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHourItemDirective.prototype, "selectedCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSelectedHour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHourItemDirective.prototype, "activeCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSelectedHour && this.itemList.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHourItemDirective.prototype, "isSelectedHour", {
        get: /**
         * @return {?}
         */
        function () {
            return this.timePicker.selectedHour === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    IgxHourItemDirective.prototype.onClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item !== '') {
            this.timePicker.scrollHourIntoView(item);
        }
    };
    IgxHourItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxHourItem]'
                },] }
    ];
    /** @nocollapse */
    IgxHourItemDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] },
        { type: IgxItemListDirective }
    ]; };
    IgxHourItemDirective.propDecorators = {
        value: [{ type: Input, args: ['igxHourItem',] }],
        defaultCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item',] }],
        selectedCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--selected',] }],
        activeCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--active',] }],
        onClick: [{ type: HostListener, args: ['click', ['value'],] }]
    };
    return IgxHourItemDirective;
}());
export { IgxHourItemDirective };
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
var IgxMinuteItemDirective = /** @class */ (function () {
    function IgxMinuteItemDirective(timePicker, itemList) {
        this.timePicker = timePicker;
        this.itemList = itemList;
    }
    Object.defineProperty(IgxMinuteItemDirective.prototype, "defaultCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMinuteItemDirective.prototype, "selectedCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSelectedMinute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMinuteItemDirective.prototype, "activeCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSelectedMinute && this.itemList.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMinuteItemDirective.prototype, "isSelectedMinute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.timePicker.selectedMinute === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    IgxMinuteItemDirective.prototype.onClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item !== '') {
            this.timePicker.scrollMinuteIntoView(item);
        }
    };
    IgxMinuteItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxMinuteItem]'
                },] }
    ];
    /** @nocollapse */
    IgxMinuteItemDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] },
        { type: IgxItemListDirective }
    ]; };
    IgxMinuteItemDirective.propDecorators = {
        value: [{ type: Input, args: ['igxMinuteItem',] }],
        defaultCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item',] }],
        selectedCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--selected',] }],
        activeCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--active',] }],
        onClick: [{ type: HostListener, args: ['click', ['value'],] }]
    };
    return IgxMinuteItemDirective;
}());
export { IgxMinuteItemDirective };
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
var IgxAmPmItemDirective = /** @class */ (function () {
    function IgxAmPmItemDirective(timePicker, itemList) {
        this.timePicker = timePicker;
        this.itemList = itemList;
    }
    Object.defineProperty(IgxAmPmItemDirective.prototype, "defaultCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAmPmItemDirective.prototype, "selectedCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSelectedAmPm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAmPmItemDirective.prototype, "activeCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSelectedAmPm && this.itemList.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAmPmItemDirective.prototype, "isSelectedAmPm", {
        get: /**
         * @return {?}
         */
        function () {
            return this.timePicker.selectedAmPm === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    IgxAmPmItemDirective.prototype.onClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item !== '') {
            this.timePicker.scrollAmPmIntoView(item);
        }
    };
    IgxAmPmItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxAmPmItem]'
                },] }
    ];
    /** @nocollapse */
    IgxAmPmItemDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] },
        { type: IgxItemListDirective }
    ]; };
    IgxAmPmItemDirective.propDecorators = {
        value: [{ type: Input, args: ['igxAmPmItem',] }],
        defaultCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item',] }],
        selectedCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--selected',] }],
        activeCSS: [{ type: HostBinding, args: ['class.igx-time-picker__item--active',] }],
        onClick: [{ type: HostListener, args: ['click', ['value'],] }]
    };
    return IgxAmPmItemDirective;
}());
export { IgxAmPmItemDirective };
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
var IgxTimePickerTemplateDirective = /** @class */ (function () {
    function IgxTimePickerTemplateDirective(template) {
        this.template = template;
    }
    IgxTimePickerTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxTimePickerTemplate]'
                },] }
    ];
    /** @nocollapse */
    IgxTimePickerTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxTimePickerTemplateDirective;
}());
export { IgxTimePickerTemplateDirective };
if (false) {
    /** @type {?} */
    IgxTimePickerTemplateDirective.prototype.template;
}
/**
 * This directive can be used to add custom action buttons to the dropdownb/dialog.
 */
var IgxTimePickerActionsDirective = /** @class */ (function () {
    function IgxTimePickerActionsDirective(template) {
        this.template = template;
    }
    IgxTimePickerActionsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxTimePickerActions]'
                },] }
    ];
    /** @nocollapse */
    IgxTimePickerActionsDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxTimePickerActionsDirective;
}());
export { IgxTimePickerActionsDirective };
if (false) {
    /** @type {?} */
    IgxTimePickerActionsDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvdGltZS1waWNrZXIvdGltZS1waWNrZXIuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBR2hEO0lBVUksOEJBQ08sVUFBNkIsRUFDeEIsVUFBc0I7UUFEM0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUczQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBSGtCLENBQUM7SUFLdkMsc0JBQ0ksNENBQVU7Ozs7UUFEZDtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0kseUNBQU87Ozs7UUFEWDtZQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSwyQ0FBUzs7OztRQURiO1lBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHlDQUFPOzs7O1FBRFg7WUFFSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBOzs7O0lBR00sc0NBQU87OztJQURkO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7OztJQUdNLHFDQUFNOzs7SUFEYjtRQUVJLElBQUks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TyxDQUFDOztJQU1wQywyQkFBQztDQUFBLEFBckNELElBcUNDO1NBbENZLG9CQUFvQjs7O0lBRTdCLHFDQUNxQjs7SUFxQlQsMENBQ3dCOzs7OztJQUNoQyx3Q0FBc0M7Ozs7O0FBYTlDO0lBSUksd0NBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUksQ0FBQzs7Z0JBSnJELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO2lCQUN0Qzs7OztnQkExVUcsV0FBVzs7SUE2VWYscUNBQUM7Q0FBQSxBQUxELElBS0M7U0FGWSw4QkFBOEI7OztJQUMzQixrREFBaUM7Ozs7O0FBTWpEO0lBSUksdUNBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUksQ0FBQzs7Z0JBSnJELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2lCQUNyQzs7OztnQkFwVkcsV0FBVzs7SUF1VmYsb0NBQUM7Q0FBQSxBQUxELElBS0M7U0FGWSw2QkFBNkI7OztJQUMxQixpREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhbGwgdGhlIGRpcmVjdGl2ZXMgdXNlZCBieSB0aGUgQGxpbmsgSWd4VGltZVBpY2tlckNvbXBvbmVudC5cbiAqIFlvdSBzaG91bGQgZ2VuZXJhbGx5IG5vdCB1c2UgdGhlbSBkaXJlY3RseS5cbiAqIEBwcmVmZXJyZWRcbiAqL1xuaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5qZWN0LFxuICAgIElucHV0LFxuICAgIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUdYX1RJTUVfUElDS0VSX0NPTVBPTkVOVCwgSWd4VGltZVBpY2tlckJhc2UgfSBmcm9tICcuL3RpbWUtcGlja2VyLmNvbW1vbic7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1vZGUgfSBmcm9tICcuLi9jb3JlL2VudW1zJztcblxuLyoqIEBoaWRkZW4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEl0ZW1MaXN0XSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4SXRlbUxpc3REaXJlY3RpdmUge1xuXG4gICAgQElucHV0KCdpZ3hJdGVtTGlzdCcpXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcblxuICAgIHB1YmxpYyBpc0FjdGl2ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSUdYX1RJTUVfUElDS0VSX0NPTVBPTkVOVClcbiAgICBwdWJsaWMgdGltZVBpY2tlcjogSWd4VGltZVBpY2tlckJhc2UsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10aW1lLXBpY2tlcl9fY29sdW1uJylcbiAgICBnZXQgZGVmYXVsdENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2hvdXJMaXN0JylcbiAgICBnZXQgaG91ckNTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2hvdXJMaXN0JztcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10aW1lLXBpY2tlcl9fbWludXRlTGlzdCcpXG4gICAgZ2V0IG1pbnV0ZUNTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ21pbnV0ZUxpc3QnO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19hbXBtTGlzdCcpXG4gICAgZ2V0IGFtcG1DU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdhbXBtTGlzdCc7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICAgIHB1YmxpYyBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgICBwdWJsaWMgb25CbHVyKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZXh0SXRlbSgpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2hvdXJMaXN0Jzoge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5uZXh0SG91cigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnbWludXRlTGlzdCc6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIubmV4dE1pbnV0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnYW1wbUxpc3QnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLm5leHRBbVBtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXZJdGVtKCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaG91ckxpc3QnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLnByZXZIb3VyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdtaW51dGVMaXN0Jzoge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5wcmV2TWludXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdhbXBtTGlzdCc6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIucHJldkFtUG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93ZG93bicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMubmV4dEl0ZW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3VwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMucHJldkl0ZW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3JpZ2h0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dSaWdodChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmIChsaXN0TmFtZS5pbmRleE9mKCdob3VyTGlzdCcpICE9PSAtMSAmJiB0aGlzLnRpbWVQaWNrZXIubWludXRlTGlzdCkge1xuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLm1pbnV0ZUxpc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKChsaXN0TmFtZS5pbmRleE9mKCdob3VyTGlzdCcpICE9PSAtMSB8fCBsaXN0TmFtZS5pbmRleE9mKCdtaW51dGVMaXN0JykgIT09IC0xKSAmJiB0aGlzLnRpbWVQaWNrZXIuYW1wbUxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5hbXBtTGlzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2xlZnQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd0xlZnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAobGlzdE5hbWUuaW5kZXhPZignYW1wbUxpc3QnKSAhPT0gLTEgJiYgdGhpcy50aW1lUGlja2VyLm1pbnV0ZUxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5taW51dGVMaXN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmICgobGlzdE5hbWUuaW5kZXhPZignYW1wbUxpc3QnKSAhPT0gLTEgfHwgbGlzdE5hbWUuaW5kZXhPZignbWludXRlTGlzdCcpICE9PSAtMSkgJiYgdGhpcy50aW1lUGlja2VyLmhvdXJMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIuaG91ckxpc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25FbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRyb3BEb3duKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVQaWNrZXIub2tCdXR0b25DbGljaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkVzY2FwZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMudGltZVBpY2tlci5jYW5jZWxCdXR0b25DbGljaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKVxuICAgIHB1YmxpYyBvbkhvdmVyKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd3aGVlbCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uU2Nyb2xsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRJdGVtKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2SXRlbSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3Bhbm1vdmUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblBhbk1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMubmV4dEl0ZW0oKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZJdGVtKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hIb3VySXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIElneEhvdXJJdGVtRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgnaWd4SG91ckl0ZW0nKVxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2l0ZW0nKVxuICAgIGdldCBkZWZhdWx0Q1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10aW1lLXBpY2tlcl9faXRlbS0tc2VsZWN0ZWQnKVxuICAgIGdldCBzZWxlY3RlZENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZEhvdXI7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2l0ZW0tLWFjdGl2ZScpXG4gICAgZ2V0IGFjdGl2ZUNTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZEhvdXIgJiYgdGhpcy5pdGVtTGlzdC5pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNTZWxlY3RlZEhvdXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVQaWNrZXIuc2VsZWN0ZWRIb3VyID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSUdYX1RJTUVfUElDS0VSX0NPTVBPTkVOVClcbiAgICBwdWJsaWMgdGltZVBpY2tlcjogSWd4VGltZVBpY2tlckJhc2UsXG4gICAgICAgIHByaXZhdGUgaXRlbUxpc3Q6IElneEl0ZW1MaXN0RGlyZWN0aXZlKSB7IH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyd2YWx1ZSddKVxuICAgIHB1YmxpYyBvbkNsaWNrKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIuc2Nyb2xsSG91ckludG9WaWV3KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4TWludXRlSXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIElneE1pbnV0ZUl0ZW1EaXJlY3RpdmUge1xuXG4gICAgQElucHV0KCdpZ3hNaW51dGVJdGVtJylcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRpbWUtcGlja2VyX19pdGVtJylcbiAgICBnZXQgZGVmYXVsdENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2l0ZW0tLXNlbGVjdGVkJylcbiAgICBnZXQgc2VsZWN0ZWRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWRNaW51dGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2l0ZW0tLWFjdGl2ZScpXG4gICAgZ2V0IGFjdGl2ZUNTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZE1pbnV0ZSAmJiB0aGlzLml0ZW1MaXN0LmlzQWN0aXZlO1xuICAgIH1cblxuICAgIGdldCBpc1NlbGVjdGVkTWludXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lUGlja2VyLnNlbGVjdGVkTWludXRlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSUdYX1RJTUVfUElDS0VSX0NPTVBPTkVOVClcbiAgICBwdWJsaWMgdGltZVBpY2tlcjogSWd4VGltZVBpY2tlckJhc2UsXG4gICAgICAgIHByaXZhdGUgaXRlbUxpc3Q6IElneEl0ZW1MaXN0RGlyZWN0aXZlKSB7IH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyd2YWx1ZSddKVxuICAgIHB1YmxpYyBvbkNsaWNrKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIuc2Nyb2xsTWludXRlSW50b1ZpZXcoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hBbVBtSXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIElneEFtUG1JdGVtRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgnaWd4QW1QbUl0ZW0nKVxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2l0ZW0nKVxuICAgIGdldCBkZWZhdWx0Q1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10aW1lLXBpY2tlcl9faXRlbS0tc2VsZWN0ZWQnKVxuICAgIGdldCBzZWxlY3RlZENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZEFtUG07XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGltZS1waWNrZXJfX2l0ZW0tLWFjdGl2ZScpXG4gICAgZ2V0IGFjdGl2ZUNTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZEFtUG0gJiYgdGhpcy5pdGVtTGlzdC5pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNTZWxlY3RlZEFtUG0oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVQaWNrZXIuc2VsZWN0ZWRBbVBtID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSUdYX1RJTUVfUElDS0VSX0NPTVBPTkVOVClcbiAgICBwdWJsaWMgdGltZVBpY2tlcjogSWd4VGltZVBpY2tlckJhc2UsXG4gICAgICAgIHByaXZhdGUgaXRlbUxpc3Q6IElneEl0ZW1MaXN0RGlyZWN0aXZlKSB7IH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyd2YWx1ZSddKVxuICAgIHB1YmxpYyBvbkNsaWNrKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIuc2Nyb2xsQW1QbUludG9WaWV3KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIHNob3VsZCBiZSB1c2VkIHRvIG1hcmsgd2hpY2ggbmctdGVtcGxhdGUgd2lsbCBiZSB1c2VkIGZyb20gSWd4VGltZVBpY2tlciB3aGVuIHJlLXRlbXBsYXRpbmcgaXRzIGlucHV0IGdyb3VwLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hUaW1lUGlja2VyVGVtcGxhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUaW1lUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gYWRkIGN1c3RvbSBhY3Rpb24gYnV0dG9ucyB0byB0aGUgZHJvcGRvd25iL2RpYWxvZy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4VGltZVBpY2tlckFjdGlvbnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUaW1lUGlja2VyQWN0aW9uc0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiJdfQ==
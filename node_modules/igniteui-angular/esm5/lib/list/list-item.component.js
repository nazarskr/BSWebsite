/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { IgxListPanState, IgxListBase } from './list.common';
import { HammerGesturesManager } from '../core/touch';
/**
 * The Ignite UI List Item component is a container intended for row items in the Ignite UI for Angular List component.
 *
 * Example:
 * ```html
 * <igx-list>
 *   <igx-list-item isHeader="true">Contacts</igx-list-item>
 *   <igx-list-item *ngFor="let contact of contacts">
 *     <span class="name">{{ contact.name }}</span>
 *     <span class="phone">{{ contact.phone }}</span>
 *   </igx-list-item>
 * </igx-list>
 * ```
 */
var IgxListItemComponent = /** @class */ (function () {
    function IgxListItemComponent(list, elementRef, _renderer) {
        this.list = list;
        this.elementRef = elementRef;
        this._renderer = _renderer;
        /**
         * @hidden
         */
        this._panState = IgxListPanState.NONE;
        /**
         * @hidden
         */
        this.panOffset = 0;
        /**
         * @hidden
         */
        this._index = null;
        /**
         * @hidden
         */
        this.lastPanDir = IgxListPanState.NONE;
        /**
         * Sets/gets whether the `list item` is hidden.
         * By default the `hidden` value is `false`.
         * ```html
         * <igx-list-item [hidden] = "true">Hidden Item</igx-list-item>
         * ```
         * ```typescript
         * let isHidden =  this.listItem.hidden;
         * ```
         * \@memberof IgxListItemComponent
         */
        this.hidden = false;
        /**
         * Gets the `touch-action` style of the `list item`.
         * ```typescript
         * let touchAction = this.listItem.touchAction;
         * ```
         */
        this.touchAction = 'pan-y';
    }
    Object.defineProperty(IgxListItemComponent.prototype, "role", {
        /**
         * Gets the `role` attribute of the `list item`.
         * ```typescript
         * let itemRole =  this.listItem.role;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Gets the `role` attribute of the `list item`.
         * ```typescript
         * let itemRole =  this.listItem.role;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return this.isHeader ? 'separator' : 'listitem';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "headerStyle", {
        /**
         * Indicates whether `list item` should have header style.
         * ```typescript
         * let headerStyle =  this.listItem.headerStyle;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Indicates whether `list item` should have header style.
         * ```typescript
         * let headerStyle =  this.listItem.headerStyle;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return this.isHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "innerStyle", {
        /**
         * Applies the inner style of the `list item` if the item is not counted as header.
         * ```typescript
         * let innerStyle =  this.listItem.innerStyle;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Applies the inner style of the `list item` if the item is not counted as header.
         * ```typescript
         * let innerStyle =  this.listItem.innerStyle;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return !this.isHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "display", {
        /**
         * Returns string value which describes the display mode of the `list item`.
         * ```typescript
         * let isHidden = this.listItem.display;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Returns string value which describes the display mode of the `list item`.
         * ```typescript
         * let isHidden = this.listItem.display;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return this.hidden ? 'none' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} evt
     * @return {?}
     */
    IgxListItemComponent.prototype.clicked = /**
     * @hidden
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        this.list.onItemClicked.emit({ item: this, event: evt, direction: this.lastPanDir });
        this.lastPanDir = IgxListPanState.NONE;
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    IgxListItemComponent.prototype.panStart = /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    IgxListItemComponent.prototype.panMove = /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }
        /** @type {?} */
        var isPanningToLeft = ev.deltaX < 0;
        if (isPanningToLeft && this.isTrue(this.list.allowLeftPanning)) {
            this.showLeftPanTemplate();
            this.setContentElementLeft(Math.max(this.maxLeft, ev.deltaX));
        }
        else if (!isPanningToLeft && this.isTrue(this.list.allowRightPanning)) {
            this.showRightPanTemplate();
            this.setContentElementLeft(Math.min(this.maxRight, ev.deltaX));
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    IgxListItemComponent.prototype.panEnd = /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }
        // the translation offset of the current list item content
        /** @type {?} */
        var relativeOffset = this.panOffset;
        /** @type {?} */
        var widthTriggeringGrip = this.width * this.list.panEndTriggeringThreshold;
        if (relativeOffset === 0) {
            return; // no panning has occured
        }
        /** @type {?} */
        var dir = relativeOffset > 0 ? IgxListPanState.RIGHT : IgxListPanState.LEFT;
        this.lastPanDir = dir;
        /** @type {?} */
        var oldPanState = this._panState;
        if (Math.abs(relativeOffset) < widthTriggeringGrip) {
            this.setContentElementLeft(0);
            this._panState = IgxListPanState.NONE;
            this.hideLeftAndRightPanTemplates();
            return;
        }
        /** @type {?} */
        var args = { item: this, direction: dir, keepItem: false };
        if (dir === IgxListPanState.LEFT) {
            this.list.onLeftPan.emit(args);
        }
        else {
            this.list.onRightPan.emit(args);
        }
        if (args.keepItem === true) {
            this.setContentElementLeft(0);
            this._panState = IgxListPanState.NONE;
        }
        else {
            if (dir === IgxListPanState.LEFT) {
                this.setContentElementLeft(this.maxLeft);
                this._panState = IgxListPanState.LEFT;
            }
            else {
                this.setContentElementLeft(this.maxRight);
                this._panState = IgxListPanState.RIGHT;
            }
        }
        if (oldPanState !== this._panState) {
            /** @type {?} */
            var args2 = { oldState: oldPanState, newState: this._panState, item: this };
            this.list.onPanStateChange.emit(args2);
        }
        this.hideLeftAndRightPanTemplates();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxListItemComponent.prototype.showLeftPanTemplate = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        this.setLeftAndRightTemplatesVisibility('visible', 'hidden');
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxListItemComponent.prototype.showRightPanTemplate = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        this.setLeftAndRightTemplatesVisibility('hidden', 'visible');
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxListItemComponent.prototype.hideLeftAndRightPanTemplates = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.setLeftAndRightTemplatesVisibility('hidden', 'hidden');
        }, 500);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} leftVisibility
     * @param {?} rightVisibility
     * @return {?}
     */
    IgxListItemComponent.prototype.setLeftAndRightTemplatesVisibility = /**
     * @hidden
     * @private
     * @param {?} leftVisibility
     * @param {?} rightVisibility
     * @return {?}
     */
    function (leftVisibility, rightVisibility) {
        if (this.leftPanningTemplateElement && this.leftPanningTemplateElement.nativeElement) {
            this.leftPanningTemplateElement.nativeElement.style.visibility = leftVisibility;
        }
        if (this.rightPanningTemplateElement && this.rightPanningTemplateElement.nativeElement) {
            this.rightPanningTemplateElement.nativeElement.style.visibility = rightVisibility;
        }
    };
    Object.defineProperty(IgxListItemComponent.prototype, "panState", {
        /**
         * Gets the `panState` of a `list item`.
         * ```typescript
         * let itemPanState =  this.listItem.panState;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Gets the `panState` of a `list item`.
         * ```typescript
         * let itemPanState =  this.listItem.panState;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return this._panState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "index", {
        /**
         * Gets the `index` of a `list item`.
         * ```typescript
         * let itemIndex =  this.listItem.index;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Gets the `index` of a `list item`.
         * ```typescript
         * let itemIndex =  this.listItem.index;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return this._index !== null ? this._index : this.list.children.toArray().indexOf(this);
        },
        /**
         * Sets the `index` of the `list item`.
         * ```typescript
         * this.listItem.index = index;
         * ```
         * @memberof IgxListItemComponent
         */
        set: /**
         * Sets the `index` of the `list item`.
         * ```typescript
         * this.listItem.index = index;
         * ```
         * \@memberof IgxListItemComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "element", {
        /**
         * Returns an element reference to the list item.
         * ```typescript
         * let listItemElement =  this.listItem.element.
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Returns an element reference to the list item.
         * ```typescript
         * let listItemElement =  this.listItem.element.
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "contentElement", {
        /**
         * Returns a reference container which contains the list item's content.
         * ```typescript
         * let listItemContainer =  this.listItem.contentElement.
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Returns a reference container which contains the list item's content.
         * ```typescript
         * let listItemContainer =  this.listItem.contentElement.
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var candidates = this.element.getElementsByClassName('igx-list__item-content');
            return (candidates && candidates.length > 0) ? candidates[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "context", {
        /**
         * Returns the `context` object which represents the `template context` binding into the `list item container`
         * by providing the `$implicit` declaration which is the `IgxListItemComponent` itself.
         * ```typescript
         * let listItemComponent = this.listItem.context;
         * ```
         */
        get: /**
         * Returns the `context` object which represents the `template context` binding into the `list item container`
         * by providing the `$implicit` declaration which is the `IgxListItemComponent` itself.
         * ```typescript
         * let listItemComponent = this.listItem.context;
         * ```
         * @return {?}
         */
        function () {
            return {
                $implicit: this
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "width", {
        /**
         * Gets the width of a `list item`.
         * ```typescript
         * let itemWidth = this.listItem.width;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Gets the width of a `list item`.
         * ```typescript
         * let itemWidth = this.listItem.width;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            if (this.element) {
                return this.element.offsetWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "maxLeft", {
        /**
         * Gets the maximum left position of the `list item`.
         * ```typescript
         * let maxLeft = this.listItem.maxLeft;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Gets the maximum left position of the `list item`.
         * ```typescript
         * let maxLeft = this.listItem.maxLeft;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return -this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListItemComponent.prototype, "maxRight", {
        /**
         * Gets the maximum right position of the `list item`.
         * ```typescript
         * let maxRight = this.listItem.maxRight;
         * ```
         * @memberof IgxListItemComponent
         */
        get: /**
         * Gets the maximum right position of the `list item`.
         * ```typescript
         * let maxRight = this.listItem.maxRight;
         * ```
         * \@memberof IgxListItemComponent
         * @return {?}
         */
        function () {
            return this.width;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxListItemComponent.prototype.setContentElementLeft = /**
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.panOffset = value;
        this.contentElement.style.transform = 'translateX(' + value + 'px)';
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxListItemComponent.prototype.isTrue = /**
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof (value) === 'boolean') {
            return value;
        }
        else {
            return value === 'true';
        }
    };
    IgxListItemComponent.decorators = [
        { type: Component, args: [{
                    providers: [HammerGesturesManager],
                    selector: 'igx-list-item',
                    template: "   \n<div *ngIf=\"!isHeader && list.listItemLeftPanningTemplate != null\" #leftPanningTmpl class=\"igx-list__item-right\"\n    [style.width.px]=\"this.element.offsetWidth\" [style.height.px]=\"this.element.offsetHeight\">\n    <ng-container *ngTemplateOutlet=\"list.listItemLeftPanningTemplate.template; context: context\">\n    </ng-container>\n</div>\n\n<div *ngIf=\"!isHeader && list.listItemRightPanningTemplate != null\" #rightPanningTmpl class=\"igx-list__item-left\"\n    [style.width.px]=\"this.element.offsetWidth\" [style.height.px]=\"this.element.offsetHeight\">\n    <ng-container *ngTemplateOutlet=\"list.listItemRightPanningTemplate.template; context: context\">\n    </ng-container>\n</div>\n\n<ng-template #itemsContent>\n    <ng-content></ng-content>\n</ng-template>\n\n<ng-template #itemThumbnails>\n    <div class=\"igx-list__item-thumbnail\">\n        <ng-content select=\"[igxListThumbnail], igx-list__item-thumbnail, igx-avatar\"></ng-content>\n    </div>\n</ng-template>\n\n<ng-template #itemLines>\n    <div class=\"igx-list__item-lines\">\n        <ng-content select=\"[igxListLine], .igx-list__item-lines, [igxListLineTitle], [igxListLineSubTitle], .igx-list__item-line-title, .igx-list__item-line-subtitle\"></ng-content>\n    </div>\n</ng-template>\n\n<ng-template #itemActions>\n    <div class=\"igx-list__item-actions\">\n        <ng-content select=\"[igxListAction], .igx-list__item-actions\"></ng-content>\n    </div>\n</ng-template>\n\n    \n<ng-container *ngIf=\"isHeader\">\n    <ng-container *ngTemplateOutlet=\"itemsContent\"></ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"!isHeader\">\n    <div class=\"igx-list__item-content\">\n        <ng-container *ngTemplateOutlet=\"itemThumbnails\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"itemLines\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"itemActions\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"itemsContent\"></ng-container>\n    </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    IgxListItemComponent.ctorParameters = function () { return [
        { type: IgxListBase },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    IgxListItemComponent.propDecorators = {
        leftPanningTemplateElement: [{ type: ViewChild, args: ['leftPanningTmpl', { static: false },] }],
        rightPanningTemplateElement: [{ type: ViewChild, args: ['rightPanningTmpl', { static: false },] }],
        isHeader: [{ type: Input }],
        hidden: [{ type: Input }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        ariaLabel: [{ type: HostBinding, args: ['attr.aria-label',] }],
        touchAction: [{ type: HostBinding, args: ['style.touch-action',] }],
        headerStyle: [{ type: HostBinding, args: ['class.igx-list__header',] }],
        innerStyle: [{ type: HostBinding, args: ['class.igx-list__item-base',] }],
        display: [{ type: HostBinding, args: ['style.display',] }],
        clicked: [{ type: HostListener, args: ['click', ['$event'],] }],
        panStart: [{ type: HostListener, args: ['panstart', ['$event'],] }],
        panMove: [{ type: HostListener, args: ['panmove', ['$event'],] }],
        panEnd: [{ type: HostListener, args: ['panend', ['$event'],] }],
        index: [{ type: Input }]
    };
    return IgxListItemComponent;
}());
export { IgxListItemComponent };
if (false) {
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxListItemComponent.prototype._panState;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxListItemComponent.prototype.panOffset;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxListItemComponent.prototype._index;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxListItemComponent.prototype.lastPanDir;
    /**
     * Provides a reference to the template's base element shown when left panning a list item.
     * ```typescript
     * const leftPanTmpl = this.listItem.leftPanningTemplateElement;
     * ```
     * @type {?}
     */
    IgxListItemComponent.prototype.leftPanningTemplateElement;
    /**
     * Provides a reference to the template's base element shown when right panning a list item.
     * ```typescript
     * const rightPanTmpl = this.listItem.rightPanningTemplateElement;
     * ```
     * @type {?}
     */
    IgxListItemComponent.prototype.rightPanningTemplateElement;
    /**
     * Sets/gets whether the `list item` is a header.
     * ```html
     * <igx-list-item [isHeader] = "true">Header</igx-list-item>
     * ```
     * ```typescript
     * let isHeader =  this.listItem.isHeader;
     * ```
     * \@memberof IgxListItemComponent
     * @type {?}
     */
    IgxListItemComponent.prototype.isHeader;
    /**
     * Sets/gets whether the `list item` is hidden.
     * By default the `hidden` value is `false`.
     * ```html
     * <igx-list-item [hidden] = "true">Hidden Item</igx-list-item>
     * ```
     * ```typescript
     * let isHidden =  this.listItem.hidden;
     * ```
     * \@memberof IgxListItemComponent
     * @type {?}
     */
    IgxListItemComponent.prototype.hidden;
    /**
     * Sets/gets the `aria-label` attribute of the `list item`.
     * ```typescript
     * this.listItem.ariaLabel = "Item1";
     * ```
     * ```typescript
     * let itemAriaLabel = this.listItem.ariaLabel;
     * ```
     * \@memberof IgxListItemComponent
     * @type {?}
     */
    IgxListItemComponent.prototype.ariaLabel;
    /**
     * Gets the `touch-action` style of the `list item`.
     * ```typescript
     * let touchAction = this.listItem.touchAction;
     * ```
     * @type {?}
     */
    IgxListItemComponent.prototype.touchAction;
    /** @type {?} */
    IgxListItemComponent.prototype.list;
    /**
     * @type {?}
     * @private
     */
    IgxListItemComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxListItemComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbGlzdC9saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0gsZUFBZSxFQUVmLFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWdCdEQ7SUE4Q0ksOEJBQ1csSUFBaUIsRUFDaEIsVUFBc0IsRUFDdEIsU0FBb0I7UUFGckIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7UUF0Q3hCLGNBQVMsR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQzs7OztRQUtsRCxjQUFTLEdBQUcsQ0FBQyxDQUFDOzs7O1FBS2QsV0FBTSxHQUFXLElBQUksQ0FBQzs7OztRQUt0QixlQUFVLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O1FBbURuQyxXQUFNLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O1FBa0NmLGdCQUFXLEdBQUcsT0FBTyxDQUFDO0lBN0Q3QixDQUFDO0lBb0NELHNCQUNXLHNDQUFJO1FBUmY7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUErQkQsc0JBQ0ksNkNBQVc7UUFSZjs7Ozs7O1dBTUc7Ozs7Ozs7OztR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Ozs7Ozs7SUF3QnRCLHlDQUN5Qjs7Ozs7Ozs7SUFRekIsMkNBQzZCOztJQWhFekIsb0NBQXdCOzs7OztJQUN4QiwwQ0FBOEI7Ozs7O0lBQzlCLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgUmVuZGVyZXIyLFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBJZ3hMaXN0UGFuU3RhdGUsXG4gICAgSUxpc3RDaGlsZCxcbiAgICBJZ3hMaXN0QmFzZVxufSBmcm9tICcuL2xpc3QuY29tbW9uJztcblxuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZXNNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS90b3VjaCc7XG5cbi8qKlxuICogVGhlIElnbml0ZSBVSSBMaXN0IEl0ZW0gY29tcG9uZW50IGlzIGEgY29udGFpbmVyIGludGVuZGVkIGZvciByb3cgaXRlbXMgaW4gdGhlIElnbml0ZSBVSSBmb3IgQW5ndWxhciBMaXN0IGNvbXBvbmVudC5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1saXN0PlxuICogICA8aWd4LWxpc3QtaXRlbSBpc0hlYWRlcj1cInRydWVcIj5Db250YWN0czwvaWd4LWxpc3QtaXRlbT5cbiAqICAgPGlneC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGNvbnRhY3Qgb2YgY29udGFjdHNcIj5cbiAqICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj57eyBjb250YWN0Lm5hbWUgfX08L3NwYW4+XG4gKiAgICAgPHNwYW4gY2xhc3M9XCJwaG9uZVwiPnt7IGNvbnRhY3QucGhvbmUgfX08L3NwYW4+XG4gKiAgIDwvaWd4LWxpc3QtaXRlbT5cbiAqIDwvaWd4LWxpc3Q+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbSGFtbWVyR2VzdHVyZXNNYW5hZ2VyXSxcbiAgICBzZWxlY3RvcjogJ2lneC1saXN0LWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJZ3hMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIElMaXN0Q2hpbGQge1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcGFuU3RhdGU6IElneExpc3RQYW5TdGF0ZSA9IElneExpc3RQYW5TdGF0ZS5OT05FO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwYW5PZmZzZXQgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsYXN0UGFuRGlyID0gSWd4TGlzdFBhblN0YXRlLk5PTkU7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgdGVtcGxhdGUncyBiYXNlIGVsZW1lbnQgc2hvd24gd2hlbiBsZWZ0IHBhbm5pbmcgYSBsaXN0IGl0ZW0uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGxlZnRQYW5UbXBsID0gdGhpcy5saXN0SXRlbS5sZWZ0UGFubmluZ1RlbXBsYXRlRWxlbWVudDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdsZWZ0UGFubmluZ1RtcGwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgbGVmdFBhbm5pbmdUZW1wbGF0ZUVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgdGVtcGxhdGUncyBiYXNlIGVsZW1lbnQgc2hvd24gd2hlbiByaWdodCBwYW5uaW5nIGEgbGlzdCBpdGVtLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCByaWdodFBhblRtcGwgPSB0aGlzLmxpc3RJdGVtLnJpZ2h0UGFubmluZ1RlbXBsYXRlRWxlbWVudDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdyaWdodFBhbm5pbmdUbXBsJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHJpZ2h0UGFubmluZ1RlbXBsYXRlRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbGlzdDogSWd4TGlzdEJhc2UsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBgbGlzdCBpdGVtYCBpcyBhIGhlYWRlci5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1saXN0LWl0ZW0gW2lzSGVhZGVyXSA9IFwidHJ1ZVwiPkhlYWRlcjwvaWd4LWxpc3QtaXRlbT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzSGVhZGVyID0gIHRoaXMubGlzdEl0ZW0uaXNIZWFkZXI7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNIZWFkZXI6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgYGxpc3QgaXRlbWAgaXMgaGlkZGVuLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIGBoaWRkZW5gIHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbGlzdC1pdGVtIFtoaWRkZW5dID0gXCJ0cnVlXCI+SGlkZGVuIEl0ZW08L2lneC1saXN0LWl0ZW0+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0hpZGRlbiA9ICB0aGlzLmxpc3RJdGVtLmhpZGRlbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoaWRkZW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGByb2xlYCBhdHRyaWJ1dGUgb2YgdGhlIGBsaXN0IGl0ZW1gLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXRlbVJvbGUgPSAgdGhpcy5saXN0SXRlbS5yb2xlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgZ2V0IHJvbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSGVhZGVyID8gJ3NlcGFyYXRvcicgOiAnbGlzdGl0ZW0nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvZiB0aGUgYGxpc3QgaXRlbWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubGlzdEl0ZW0uYXJpYUxhYmVsID0gXCJJdGVtMVwiO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXRlbUFyaWFMYWJlbCA9IHRoaXMubGlzdEl0ZW0uYXJpYUxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsJylcbiAgICBwdWJsaWMgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgdG91Y2gtYWN0aW9uYCBzdHlsZSBvZiB0aGUgYGxpc3QgaXRlbWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0b3VjaEFjdGlvbiA9IHRoaXMubGlzdEl0ZW0udG91Y2hBY3Rpb247XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS50b3VjaC1hY3Rpb24nKVxuICAgIHB1YmxpYyB0b3VjaEFjdGlvbiA9ICdwYW4teSc7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBgbGlzdCBpdGVtYCBzaG91bGQgaGF2ZSBoZWFkZXIgc3R5bGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBoZWFkZXJTdHlsZSA9ICB0aGlzLmxpc3RJdGVtLmhlYWRlclN0eWxlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWxpc3RfX2hlYWRlcicpXG4gICAgZ2V0IGhlYWRlclN0eWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hlYWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBpbm5lciBzdHlsZSBvZiB0aGUgYGxpc3QgaXRlbWAgaWYgdGhlIGl0ZW0gaXMgbm90IGNvdW50ZWQgYXMgaGVhZGVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaW5uZXJTdHlsZSA9ICB0aGlzLmxpc3RJdGVtLmlubmVyU3R5bGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGlzdF9faXRlbS1iYXNlJylcbiAgICBnZXQgaW5uZXJTdHlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzSGVhZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgc3RyaW5nIHZhbHVlIHdoaWNoIGRlc2NyaWJlcyB0aGUgZGlzcGxheSBtb2RlIG9mIHRoZSBgbGlzdCBpdGVtYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzSGlkZGVuID0gdGhpcy5saXN0SXRlbS5kaXNwbGF5O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gICAgZ2V0IGRpc3BsYXkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlkZGVuID8gJ25vbmUnIDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIGNsaWNrZWQoZXZ0KSB7XG4gICAgICAgIHRoaXMubGlzdC5vbkl0ZW1DbGlja2VkLmVtaXQoeyBpdGVtOiB0aGlzLCBldmVudDogZXZ0LCBkaXJlY3Rpb246IHRoaXMubGFzdFBhbkRpciB9KTtcbiAgICAgICAgdGhpcy5sYXN0UGFuRGlyID0gSWd4TGlzdFBhblN0YXRlLk5PTkU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigncGFuc3RhcnQnLCBbJyRldmVudCddKVxuICAgIHBhblN0YXJ0KGV2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVHJ1ZSh0aGlzLmlzSGVhZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1RydWUodGhpcy5saXN0LmFsbG93TGVmdFBhbm5pbmcpICYmICF0aGlzLmlzVHJ1ZSh0aGlzLmxpc3QuYWxsb3dSaWdodFBhbm5pbmcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdwYW5tb3ZlJywgWyckZXZlbnQnXSlcbiAgICBwYW5Nb3ZlKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVHJ1ZSh0aGlzLmlzSGVhZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1RydWUodGhpcy5saXN0LmFsbG93TGVmdFBhbm5pbmcpICYmICF0aGlzLmlzVHJ1ZSh0aGlzLmxpc3QuYWxsb3dSaWdodFBhbm5pbmcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNQYW5uaW5nVG9MZWZ0ID0gZXYuZGVsdGFYIDwgMDtcbiAgICAgICAgaWYgKGlzUGFubmluZ1RvTGVmdCAmJiB0aGlzLmlzVHJ1ZSh0aGlzLmxpc3QuYWxsb3dMZWZ0UGFubmluZykpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRQYW5UZW1wbGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50RWxlbWVudExlZnQoTWF0aC5tYXgodGhpcy5tYXhMZWZ0LCBldi5kZWx0YVgpKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNQYW5uaW5nVG9MZWZ0ICYmIHRoaXMuaXNUcnVlKHRoaXMubGlzdC5hbGxvd1JpZ2h0UGFubmluZykpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0UGFuVGVtcGxhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudEVsZW1lbnRMZWZ0KE1hdGgubWluKHRoaXMubWF4UmlnaHQsIGV2LmRlbHRhWCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigncGFuZW5kJywgWyckZXZlbnQnXSlcbiAgICBwYW5FbmQoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUcnVlKHRoaXMuaXNIZWFkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVHJ1ZSh0aGlzLmxpc3QuYWxsb3dMZWZ0UGFubmluZykgJiYgIXRoaXMuaXNUcnVlKHRoaXMubGlzdC5hbGxvd1JpZ2h0UGFubmluZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZSB0cmFuc2xhdGlvbiBvZmZzZXQgb2YgdGhlIGN1cnJlbnQgbGlzdCBpdGVtIGNvbnRlbnRcbiAgICAgICAgY29uc3QgcmVsYXRpdmVPZmZzZXQgPSB0aGlzLnBhbk9mZnNldDtcbiAgICAgICAgY29uc3Qgd2lkdGhUcmlnZ2VyaW5nR3JpcCA9IHRoaXMud2lkdGggKiB0aGlzLmxpc3QucGFuRW5kVHJpZ2dlcmluZ1RocmVzaG9sZDtcblxuICAgICAgICBpZiAocmVsYXRpdmVPZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gbm8gcGFubmluZyBoYXMgb2NjdXJlZFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlyID0gcmVsYXRpdmVPZmZzZXQgPiAwID8gSWd4TGlzdFBhblN0YXRlLlJJR0hUIDogSWd4TGlzdFBhblN0YXRlLkxFRlQ7XG4gICAgICAgIHRoaXMubGFzdFBhbkRpciA9IGRpcjtcblxuICAgICAgICBjb25zdCBvbGRQYW5TdGF0ZSA9IHRoaXMuX3BhblN0YXRlO1xuICAgICAgICBpZiAoTWF0aC5hYnMocmVsYXRpdmVPZmZzZXQpIDwgd2lkdGhUcmlnZ2VyaW5nR3JpcCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50RWxlbWVudExlZnQoMCk7XG4gICAgICAgICAgICB0aGlzLl9wYW5TdGF0ZSA9IElneExpc3RQYW5TdGF0ZS5OT05FO1xuICAgICAgICAgICAgdGhpcy5oaWRlTGVmdEFuZFJpZ2h0UGFuVGVtcGxhdGVzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzID0geyBpdGVtOiB0aGlzLCBkaXJlY3Rpb246IGRpciwga2VlcEl0ZW06IGZhbHNlfTtcblxuICAgICAgICBpZiAoZGlyID09PSBJZ3hMaXN0UGFuU3RhdGUuTEVGVCkge1xuICAgICAgICAgICAgdGhpcy5saXN0Lm9uTGVmdFBhbi5lbWl0KGFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saXN0Lm9uUmlnaHRQYW4uZW1pdChhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmtlZXBJdGVtID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnRFbGVtZW50TGVmdCgwKTtcbiAgICAgICAgICAgIHRoaXMuX3BhblN0YXRlID0gSWd4TGlzdFBhblN0YXRlLk5PTkU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlyID09PSBJZ3hMaXN0UGFuU3RhdGUuTEVGVCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudEVsZW1lbnRMZWZ0KHRoaXMubWF4TGVmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFuU3RhdGUgPSBJZ3hMaXN0UGFuU3RhdGUuTEVGVDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50RWxlbWVudExlZnQodGhpcy5tYXhSaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFuU3RhdGUgPSBJZ3hMaXN0UGFuU3RhdGUuUklHSFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2xkUGFuU3RhdGUgIT09IHRoaXMuX3BhblN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzMiA9IHsgb2xkU3RhdGU6IG9sZFBhblN0YXRlLCBuZXdTdGF0ZTogdGhpcy5fcGFuU3RhdGUsIGl0ZW06IHRoaXMgfTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5vblBhblN0YXRlQ2hhbmdlLmVtaXQoYXJnczIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZUxlZnRBbmRSaWdodFBhblRlbXBsYXRlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvd0xlZnRQYW5UZW1wbGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRMZWZ0QW5kUmlnaHRUZW1wbGF0ZXNWaXNpYmlsaXR5KCd2aXNpYmxlJywgJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvd1JpZ2h0UGFuVGVtcGxhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0TGVmdEFuZFJpZ2h0VGVtcGxhdGVzVmlzaWJpbGl0eSgnaGlkZGVuJywgJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGhpZGVMZWZ0QW5kUmlnaHRQYW5UZW1wbGF0ZXMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRMZWZ0QW5kUmlnaHRUZW1wbGF0ZXNWaXNpYmlsaXR5KCdoaWRkZW4nLCAnaGlkZGVuJyk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRMZWZ0QW5kUmlnaHRUZW1wbGF0ZXNWaXNpYmlsaXR5KGxlZnRWaXNpYmlsaXR5LCByaWdodFZpc2liaWxpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMubGVmdFBhbm5pbmdUZW1wbGF0ZUVsZW1lbnQgJiYgdGhpcy5sZWZ0UGFubmluZ1RlbXBsYXRlRWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQYW5uaW5nVGVtcGxhdGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IGxlZnRWaXNpYmlsaXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0UGFubmluZ1RlbXBsYXRlRWxlbWVudCAmJiB0aGlzLnJpZ2h0UGFubmluZ1RlbXBsYXRlRWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0UGFubmluZ1RlbXBsYXRlRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSByaWdodFZpc2liaWxpdHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgcGFuU3RhdGVgIG9mIGEgYGxpc3QgaXRlbWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpdGVtUGFuU3RhdGUgPSAgdGhpcy5saXN0SXRlbS5wYW5TdGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBhblN0YXRlKCk6IElneExpc3RQYW5TdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYW5TdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgaW5kZXhgIG9mIGEgYGxpc3QgaXRlbWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpdGVtSW5kZXggPSAgdGhpcy5saXN0SXRlbS5pbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4ICE9PSBudWxsID8gdGhpcy5faW5kZXggOiB0aGlzLmxpc3QuY2hpbGRyZW4udG9BcnJheSgpLmluZGV4T2YodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYGluZGV4YCBvZiB0aGUgYGxpc3QgaXRlbWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubGlzdEl0ZW0uaW5kZXggPSBpbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5kZXggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGVsZW1lbnQgcmVmZXJlbmNlIHRvIHRoZSBsaXN0IGl0ZW0uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsaXN0SXRlbUVsZW1lbnQgPSAgdGhpcy5saXN0SXRlbS5lbGVtZW50LlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgY29udGFpbmVyIHdoaWNoIGNvbnRhaW5zIHRoZSBsaXN0IGl0ZW0ncyBjb250ZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGlzdEl0ZW1Db250YWluZXIgPSAgdGhpcy5saXN0SXRlbS5jb250ZW50RWxlbWVudC5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRlbnRFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lneC1saXN0X19pdGVtLWNvbnRlbnQnKTtcbiAgICAgICAgcmV0dXJuIChjYW5kaWRhdGVzICYmIGNhbmRpZGF0ZXMubGVuZ3RoID4gMCkgPyBjYW5kaWRhdGVzWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBgY29udGV4dGAgb2JqZWN0IHdoaWNoIHJlcHJlc2VudHMgdGhlIGB0ZW1wbGF0ZSBjb250ZXh0YCBiaW5kaW5nIGludG8gdGhlIGBsaXN0IGl0ZW0gY29udGFpbmVyYFxuICAgICAqIGJ5IHByb3ZpZGluZyB0aGUgYCRpbXBsaWNpdGAgZGVjbGFyYXRpb24gd2hpY2ggaXMgdGhlIGBJZ3hMaXN0SXRlbUNvbXBvbmVudGAgaXRzZWxmLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGlzdEl0ZW1Db21wb25lbnQgPSB0aGlzLmxpc3RJdGVtLmNvbnRleHQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb250ZXh0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB3aWR0aCBvZiBhIGBsaXN0IGl0ZW1gLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXRlbVdpZHRoID0gdGhpcy5saXN0SXRlbS53aWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbWF4aW11bSBsZWZ0IHBvc2l0aW9uIG9mIHRoZSBgbGlzdCBpdGVtYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG1heExlZnQgPSB0aGlzLmxpc3RJdGVtLm1heExlZnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBtYXhMZWZ0KCkge1xuICAgICAgICByZXR1cm4gLXRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbWF4aW11bSByaWdodCBwb3NpdGlvbiBvZiB0aGUgYGxpc3QgaXRlbWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBtYXhSaWdodCA9IHRoaXMubGlzdEl0ZW0ubWF4UmlnaHQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBtYXhSaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRDb250ZW50RWxlbWVudExlZnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhbk9mZnNldCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB2YWx1ZSArICdweCknO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgaXNUcnVlKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
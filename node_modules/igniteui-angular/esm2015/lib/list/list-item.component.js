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
export class IgxListItemComponent {
    /**
     * @param {?} list
     * @param {?} elementRef
     * @param {?} _renderer
     */
    constructor(list, elementRef, _renderer) {
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
    /**
     * Gets the `role` attribute of the `list item`.
     * ```typescript
     * let itemRole =  this.listItem.role;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get role() {
        return this.isHeader ? 'separator' : 'listitem';
    }
    /**
     * Indicates whether `list item` should have header style.
     * ```typescript
     * let headerStyle =  this.listItem.headerStyle;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get headerStyle() {
        return this.isHeader;
    }
    /**
     * Applies the inner style of the `list item` if the item is not counted as header.
     * ```typescript
     * let innerStyle =  this.listItem.innerStyle;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get innerStyle() {
        return !this.isHeader;
    }
    /**
     * Returns string value which describes the display mode of the `list item`.
     * ```typescript
     * let isHidden = this.listItem.display;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get display() {
        return this.hidden ? 'none' : '';
    }
    /**
     * @hidden
     * @param {?} evt
     * @return {?}
     */
    clicked(evt) {
        this.list.onItemClicked.emit({ item: this, event: evt, direction: this.lastPanDir });
        this.lastPanDir = IgxListPanState.NONE;
    }
    /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    panStart(ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }
    }
    /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    panMove(ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }
        /** @type {?} */
        const isPanningToLeft = ev.deltaX < 0;
        if (isPanningToLeft && this.isTrue(this.list.allowLeftPanning)) {
            this.showLeftPanTemplate();
            this.setContentElementLeft(Math.max(this.maxLeft, ev.deltaX));
        }
        else if (!isPanningToLeft && this.isTrue(this.list.allowRightPanning)) {
            this.showRightPanTemplate();
            this.setContentElementLeft(Math.min(this.maxRight, ev.deltaX));
        }
    }
    /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    panEnd(ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }
        // the translation offset of the current list item content
        /** @type {?} */
        const relativeOffset = this.panOffset;
        /** @type {?} */
        const widthTriggeringGrip = this.width * this.list.panEndTriggeringThreshold;
        if (relativeOffset === 0) {
            return; // no panning has occured
        }
        /** @type {?} */
        const dir = relativeOffset > 0 ? IgxListPanState.RIGHT : IgxListPanState.LEFT;
        this.lastPanDir = dir;
        /** @type {?} */
        const oldPanState = this._panState;
        if (Math.abs(relativeOffset) < widthTriggeringGrip) {
            this.setContentElementLeft(0);
            this._panState = IgxListPanState.NONE;
            this.hideLeftAndRightPanTemplates();
            return;
        }
        /** @type {?} */
        const args = { item: this, direction: dir, keepItem: false };
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
            const args2 = { oldState: oldPanState, newState: this._panState, item: this };
            this.list.onPanStateChange.emit(args2);
        }
        this.hideLeftAndRightPanTemplates();
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    showLeftPanTemplate() {
        this.setLeftAndRightTemplatesVisibility('visible', 'hidden');
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    showRightPanTemplate() {
        this.setLeftAndRightTemplatesVisibility('hidden', 'visible');
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    hideLeftAndRightPanTemplates() {
        setTimeout(() => {
            this.setLeftAndRightTemplatesVisibility('hidden', 'hidden');
        }, 500);
    }
    /**
     * @hidden
     * @private
     * @param {?} leftVisibility
     * @param {?} rightVisibility
     * @return {?}
     */
    setLeftAndRightTemplatesVisibility(leftVisibility, rightVisibility) {
        if (this.leftPanningTemplateElement && this.leftPanningTemplateElement.nativeElement) {
            this.leftPanningTemplateElement.nativeElement.style.visibility = leftVisibility;
        }
        if (this.rightPanningTemplateElement && this.rightPanningTemplateElement.nativeElement) {
            this.rightPanningTemplateElement.nativeElement.style.visibility = rightVisibility;
        }
    }
    /**
     * Gets the `panState` of a `list item`.
     * ```typescript
     * let itemPanState =  this.listItem.panState;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get panState() {
        return this._panState;
    }
    /**
     * Gets the `index` of a `list item`.
     * ```typescript
     * let itemIndex =  this.listItem.index;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get index() {
        return this._index !== null ? this._index : this.list.children.toArray().indexOf(this);
    }
    /**
     * Sets the `index` of the `list item`.
     * ```typescript
     * this.listItem.index = index;
     * ```
     * \@memberof IgxListItemComponent
     * @param {?} value
     * @return {?}
     */
    set index(value) {
        this._index = value;
    }
    /**
     * Returns an element reference to the list item.
     * ```typescript
     * let listItemElement =  this.listItem.element.
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get element() {
        return this.elementRef.nativeElement;
    }
    /**
     * Returns a reference container which contains the list item's content.
     * ```typescript
     * let listItemContainer =  this.listItem.contentElement.
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get contentElement() {
        /** @type {?} */
        const candidates = this.element.getElementsByClassName('igx-list__item-content');
        return (candidates && candidates.length > 0) ? candidates[0] : null;
    }
    /**
     * Returns the `context` object which represents the `template context` binding into the `list item container`
     * by providing the `$implicit` declaration which is the `IgxListItemComponent` itself.
     * ```typescript
     * let listItemComponent = this.listItem.context;
     * ```
     * @return {?}
     */
    get context() {
        return {
            $implicit: this
        };
    }
    /**
     * Gets the width of a `list item`.
     * ```typescript
     * let itemWidth = this.listItem.width;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get width() {
        if (this.element) {
            return this.element.offsetWidth;
        }
    }
    /**
     * Gets the maximum left position of the `list item`.
     * ```typescript
     * let maxLeft = this.listItem.maxLeft;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get maxLeft() {
        return -this.width;
    }
    /**
     * Gets the maximum right position of the `list item`.
     * ```typescript
     * let maxRight = this.listItem.maxRight;
     * ```
     * \@memberof IgxListItemComponent
     * @return {?}
     */
    get maxRight() {
        return this.width;
    }
    /**
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    setContentElementLeft(value) {
        this.panOffset = value;
        this.contentElement.style.transform = 'translateX(' + value + 'px)';
    }
    /**
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    isTrue(value) {
        if (typeof (value) === 'boolean') {
            return value;
        }
        else {
            return value === 'true';
        }
    }
}
IgxListItemComponent.decorators = [
    { type: Component, args: [{
                providers: [HammerGesturesManager],
                selector: 'igx-list-item',
                template: "   \n<div *ngIf=\"!isHeader && list.listItemLeftPanningTemplate != null\" #leftPanningTmpl class=\"igx-list__item-right\"\n    [style.width.px]=\"this.element.offsetWidth\" [style.height.px]=\"this.element.offsetHeight\">\n    <ng-container *ngTemplateOutlet=\"list.listItemLeftPanningTemplate.template; context: context\">\n    </ng-container>\n</div>\n\n<div *ngIf=\"!isHeader && list.listItemRightPanningTemplate != null\" #rightPanningTmpl class=\"igx-list__item-left\"\n    [style.width.px]=\"this.element.offsetWidth\" [style.height.px]=\"this.element.offsetHeight\">\n    <ng-container *ngTemplateOutlet=\"list.listItemRightPanningTemplate.template; context: context\">\n    </ng-container>\n</div>\n\n<ng-template #itemsContent>\n    <ng-content></ng-content>\n</ng-template>\n\n<ng-template #itemThumbnails>\n    <div class=\"igx-list__item-thumbnail\">\n        <ng-content select=\"[igxListThumbnail], igx-list__item-thumbnail, igx-avatar\"></ng-content>\n    </div>\n</ng-template>\n\n<ng-template #itemLines>\n    <div class=\"igx-list__item-lines\">\n        <ng-content select=\"[igxListLine], .igx-list__item-lines, [igxListLineTitle], [igxListLineSubTitle], .igx-list__item-line-title, .igx-list__item-line-subtitle\"></ng-content>\n    </div>\n</ng-template>\n\n<ng-template #itemActions>\n    <div class=\"igx-list__item-actions\">\n        <ng-content select=\"[igxListAction], .igx-list__item-actions\"></ng-content>\n    </div>\n</ng-template>\n\n    \n<ng-container *ngIf=\"isHeader\">\n    <ng-container *ngTemplateOutlet=\"itemsContent\"></ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"!isHeader\">\n    <div class=\"igx-list__item-content\">\n        <ng-container *ngTemplateOutlet=\"itemThumbnails\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"itemLines\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"itemActions\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"itemsContent\"></ng-container>\n    </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
IgxListItemComponent.ctorParameters = () => [
    { type: IgxListBase },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbGlzdC9saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0gsZUFBZSxFQUVmLFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQXNCdEQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBd0M3QixZQUNXLElBQWlCLEVBQ2hCLFVBQXNCLEVBQ3RCLFNBQW9CO1FBRnJCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFXOzs7O1FBdEN4QixjQUFTLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7Ozs7UUFLbEQsY0FBUyxHQUFHLENBQUMsQ0FBQzs7OztRQUtkLFdBQU0sR0FBVyxJQUFJLENBQUM7Ozs7UUFLdEIsZUFBVSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztRQW1EbkMsV0FBTSxHQUFHLEtBQUssQ0FBQzs7Ozs7OztRQWtDZixnQkFBVyxHQUFHLE9BQU8sQ0FBQztJQTdEN0IsQ0FBQzs7Ozs7Ozs7O0lBb0NELElBQ1csSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDcEQsQ0FBQzs7Ozs7Ozs7O0lBK0JELElBQ0ksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEs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QUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkFhbkMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFxQmxDLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBNkdqQyxLQUFLOzs7Ozs7OztJQXJTTix5Q0FBMEQ7Ozs7OztJQUsxRCx5Q0FBc0I7Ozs7OztJQUt0QixzQ0FBOEI7Ozs7OztJQUs5QiwwQ0FBMEM7Ozs7Ozs7O0lBUTFDLDBEQUNrQzs7Ozs7Ozs7SUFRbEMsMkRBQ21DOzs7Ozs7Ozs7Ozs7SUFrQm5DLHdDQUN5Qjs7Ozs7Ozs7Ozs7OztJQWF6QixzQ0FDc0I7Ozs7Ozs7Ozs7OztJQXdCdEIseUNBQ3lCOzs7Ozs7OztJQVF6QiwyQ0FDNkI7O0lBaEV6QixvQ0FBd0I7Ozs7O0lBQ3hCLDBDQUE4Qjs7Ozs7SUFDOUIseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBSZW5kZXJlcjIsXG4gICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIElneExpc3RQYW5TdGF0ZSxcbiAgICBJTGlzdENoaWxkLFxuICAgIElneExpc3RCYXNlXG59IGZyb20gJy4vbGlzdC5jb21tb24nO1xuXG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlc01hbmFnZXIgfSBmcm9tICcuLi9jb3JlL3RvdWNoJztcblxuLyoqXG4gKiBUaGUgSWduaXRlIFVJIExpc3QgSXRlbSBjb21wb25lbnQgaXMgYSBjb250YWluZXIgaW50ZW5kZWQgZm9yIHJvdyBpdGVtcyBpbiB0aGUgSWduaXRlIFVJIGZvciBBbmd1bGFyIExpc3QgY29tcG9uZW50LlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWxpc3Q+XG4gKiAgIDxpZ3gtbGlzdC1pdGVtIGlzSGVhZGVyPVwidHJ1ZVwiPkNvbnRhY3RzPC9pZ3gtbGlzdC1pdGVtPlxuICogICA8aWd4LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgY29udGFjdCBvZiBjb250YWN0c1wiPlxuICogICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7IGNvbnRhY3QubmFtZSB9fTwvc3Bhbj5cbiAqICAgICA8c3BhbiBjbGFzcz1cInBob25lXCI+e3sgY29udGFjdC5waG9uZSB9fTwvc3Bhbj5cbiAqICAgPC9pZ3gtbGlzdC1pdGVtPlxuICogPC9pZ3gtbGlzdD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBwcm92aWRlcnM6IFtIYW1tZXJHZXN0dXJlc01hbmFnZXJdLFxuICAgIHNlbGVjdG9yOiAnaWd4LWxpc3QtaXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICdsaXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIElneExpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgSUxpc3RDaGlsZCB7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9wYW5TdGF0ZTogSWd4TGlzdFBhblN0YXRlID0gSWd4TGlzdFBhblN0YXRlLk5PTkU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHBhbk9mZnNldCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGxhc3RQYW5EaXIgPSBJZ3hMaXN0UGFuU3RhdGUuTk9ORTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgcmVmZXJlbmNlIHRvIHRoZSB0ZW1wbGF0ZSdzIGJhc2UgZWxlbWVudCBzaG93biB3aGVuIGxlZnQgcGFubmluZyBhIGxpc3QgaXRlbS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbGVmdFBhblRtcGwgPSB0aGlzLmxpc3RJdGVtLmxlZnRQYW5uaW5nVGVtcGxhdGVFbGVtZW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2xlZnRQYW5uaW5nVG1wbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBsZWZ0UGFubmluZ1RlbXBsYXRlRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgcmVmZXJlbmNlIHRvIHRoZSB0ZW1wbGF0ZSdzIGJhc2UgZWxlbWVudCBzaG93biB3aGVuIHJpZ2h0IHBhbm5pbmcgYSBsaXN0IGl0ZW0uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHJpZ2h0UGFuVG1wbCA9IHRoaXMubGlzdEl0ZW0ucmlnaHRQYW5uaW5nVGVtcGxhdGVFbGVtZW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3JpZ2h0UGFubmluZ1RtcGwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgcmlnaHRQYW5uaW5nVGVtcGxhdGVFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBsaXN0OiBJZ3hMaXN0QmFzZSxcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGBsaXN0IGl0ZW1gIGlzIGEgaGVhZGVyLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWxpc3QtaXRlbSBbaXNIZWFkZXJdID0gXCJ0cnVlXCI+SGVhZGVyPC9pZ3gtbGlzdC1pdGVtPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNIZWFkZXIgPSAgdGhpcy5saXN0SXRlbS5pc0hlYWRlcjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0hlYWRlcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBgbGlzdCBpdGVtYCBpcyBoaWRkZW4uXG4gICAgICogQnkgZGVmYXVsdCB0aGUgYGhpZGRlbmAgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1saXN0LWl0ZW0gW2hpZGRlbl0gPSBcInRydWVcIj5IaWRkZW4gSXRlbTwvaWd4LWxpc3QtaXRlbT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzSGlkZGVuID0gIHRoaXMubGlzdEl0ZW0uaGlkZGVuO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhpZGRlbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYHJvbGVgIGF0dHJpYnV0ZSBvZiB0aGUgYGxpc3QgaXRlbWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpdGVtUm9sZSA9ICB0aGlzLmxpc3RJdGVtLnJvbGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyBnZXQgcm9sZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIZWFkZXIgPyAnc2VwYXJhdG9yJyA6ICdsaXN0aXRlbSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIG9mIHRoZSBgbGlzdCBpdGVtYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5saXN0SXRlbS5hcmlhTGFiZWwgPSBcIkl0ZW0xXCI7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpdGVtQXJpYUxhYmVsID0gdGhpcy5saXN0SXRlbS5hcmlhTGFiZWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICAgIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGB0b3VjaC1hY3Rpb25gIHN0eWxlIG9mIHRoZSBgbGlzdCBpdGVtYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRvdWNoQWN0aW9uID0gdGhpcy5saXN0SXRlbS50b3VjaEFjdGlvbjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRvdWNoLWFjdGlvbicpXG4gICAgcHVibGljIHRvdWNoQWN0aW9uID0gJ3Bhbi15JztcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGBsaXN0IGl0ZW1gIHNob3VsZCBoYXZlIGhlYWRlciBzdHlsZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGhlYWRlclN0eWxlID0gIHRoaXMubGlzdEl0ZW0uaGVhZGVyU3R5bGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGlzdF9faGVhZGVyJylcbiAgICBnZXQgaGVhZGVyU3R5bGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSGVhZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGlubmVyIHN0eWxlIG9mIHRoZSBgbGlzdCBpdGVtYCBpZiB0aGUgaXRlbSBpcyBub3QgY291bnRlZCBhcyBoZWFkZXIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpbm5lclN0eWxlID0gIHRoaXMubGlzdEl0ZW0uaW5uZXJTdHlsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saXN0X19pdGVtLWJhc2UnKVxuICAgIGdldCBpbm5lclN0eWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNIZWFkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBzdHJpbmcgdmFsdWUgd2hpY2ggZGVzY3JpYmVzIHRoZSBkaXNwbGF5IG1vZGUgb2YgdGhlIGBsaXN0IGl0ZW1gLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNIaWRkZW4gPSB0aGlzLmxpc3RJdGVtLmRpc3BsYXk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgICBnZXQgZGlzcGxheSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWRkZW4gPyAnbm9uZScgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgY2xpY2tlZChldnQpIHtcbiAgICAgICAgdGhpcy5saXN0Lm9uSXRlbUNsaWNrZWQuZW1pdCh7IGl0ZW06IHRoaXMsIGV2ZW50OiBldnQsIGRpcmVjdGlvbjogdGhpcy5sYXN0UGFuRGlyIH0pO1xuICAgICAgICB0aGlzLmxhc3RQYW5EaXIgPSBJZ3hMaXN0UGFuU3RhdGUuTk9ORTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdwYW5zdGFydCcsIFsnJGV2ZW50J10pXG4gICAgcGFuU3RhcnQoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUcnVlKHRoaXMuaXNIZWFkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVHJ1ZSh0aGlzLmxpc3QuYWxsb3dMZWZ0UGFubmluZykgJiYgIXRoaXMuaXNUcnVlKHRoaXMubGlzdC5hbGxvd1JpZ2h0UGFubmluZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3Bhbm1vdmUnLCBbJyRldmVudCddKVxuICAgIHBhbk1vdmUoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUcnVlKHRoaXMuaXNIZWFkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVHJ1ZSh0aGlzLmxpc3QuYWxsb3dMZWZ0UGFubmluZykgJiYgIXRoaXMuaXNUcnVlKHRoaXMubGlzdC5hbGxvd1JpZ2h0UGFubmluZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1Bhbm5pbmdUb0xlZnQgPSBldi5kZWx0YVggPCAwO1xuICAgICAgICBpZiAoaXNQYW5uaW5nVG9MZWZ0ICYmIHRoaXMuaXNUcnVlKHRoaXMubGlzdC5hbGxvd0xlZnRQYW5uaW5nKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93TGVmdFBhblRlbXBsYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnRFbGVtZW50TGVmdChNYXRoLm1heCh0aGlzLm1heExlZnQsIGV2LmRlbHRhWCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1Bhbm5pbmdUb0xlZnQgJiYgdGhpcy5pc1RydWUodGhpcy5saXN0LmFsbG93UmlnaHRQYW5uaW5nKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93UmlnaHRQYW5UZW1wbGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50RWxlbWVudExlZnQoTWF0aC5taW4odGhpcy5tYXhSaWdodCwgZXYuZGVsdGFYKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdwYW5lbmQnLCBbJyRldmVudCddKVxuICAgIHBhbkVuZChldikge1xuICAgICAgICBpZiAodGhpcy5pc1RydWUodGhpcy5pc0hlYWRlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNUcnVlKHRoaXMubGlzdC5hbGxvd0xlZnRQYW5uaW5nKSAmJiAhdGhpcy5pc1RydWUodGhpcy5saXN0LmFsbG93UmlnaHRQYW5uaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlIHRyYW5zbGF0aW9uIG9mZnNldCBvZiB0aGUgY3VycmVudCBsaXN0IGl0ZW0gY29udGVudFxuICAgICAgICBjb25zdCByZWxhdGl2ZU9mZnNldCA9IHRoaXMucGFuT2Zmc2V0O1xuICAgICAgICBjb25zdCB3aWR0aFRyaWdnZXJpbmdHcmlwID0gdGhpcy53aWR0aCAqIHRoaXMubGlzdC5wYW5FbmRUcmlnZ2VyaW5nVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZU9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBubyBwYW5uaW5nIGhhcyBvY2N1cmVkXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaXIgPSByZWxhdGl2ZU9mZnNldCA+IDAgPyBJZ3hMaXN0UGFuU3RhdGUuUklHSFQgOiBJZ3hMaXN0UGFuU3RhdGUuTEVGVDtcbiAgICAgICAgdGhpcy5sYXN0UGFuRGlyID0gZGlyO1xuXG4gICAgICAgIGNvbnN0IG9sZFBhblN0YXRlID0gdGhpcy5fcGFuU3RhdGU7XG4gICAgICAgIGlmIChNYXRoLmFicyhyZWxhdGl2ZU9mZnNldCkgPCB3aWR0aFRyaWdnZXJpbmdHcmlwKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnRFbGVtZW50TGVmdCgwKTtcbiAgICAgICAgICAgIHRoaXMuX3BhblN0YXRlID0gSWd4TGlzdFBhblN0YXRlLk5PTkU7XG4gICAgICAgICAgICB0aGlzLmhpZGVMZWZ0QW5kUmlnaHRQYW5UZW1wbGF0ZXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7IGl0ZW06IHRoaXMsIGRpcmVjdGlvbjogZGlyLCBrZWVwSXRlbTogZmFsc2V9O1xuXG4gICAgICAgIGlmIChkaXIgPT09IElneExpc3RQYW5TdGF0ZS5MRUZUKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3Qub25MZWZ0UGFuLmVtaXQoYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpc3Qub25SaWdodFBhbi5lbWl0KGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3Mua2VlcEl0ZW0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudEVsZW1lbnRMZWZ0KDApO1xuICAgICAgICAgICAgdGhpcy5fcGFuU3RhdGUgPSBJZ3hMaXN0UGFuU3RhdGUuTk9ORTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT09IElneExpc3RQYW5TdGF0ZS5MRUZUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50RWxlbWVudExlZnQodGhpcy5tYXhMZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYW5TdGF0ZSA9IElneExpc3RQYW5TdGF0ZS5MRUZUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRlbnRFbGVtZW50TGVmdCh0aGlzLm1heFJpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYW5TdGF0ZSA9IElneExpc3RQYW5TdGF0ZS5SSUdIVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbGRQYW5TdGF0ZSAhPT0gdGhpcy5fcGFuU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MyID0geyBvbGRTdGF0ZTogb2xkUGFuU3RhdGUsIG5ld1N0YXRlOiB0aGlzLl9wYW5TdGF0ZSwgaXRlbTogdGhpcyB9O1xuICAgICAgICAgICAgdGhpcy5saXN0Lm9uUGFuU3RhdGVDaGFuZ2UuZW1pdChhcmdzMik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlTGVmdEFuZFJpZ2h0UGFuVGVtcGxhdGVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG93TGVmdFBhblRlbXBsYXRlKCkge1xuICAgICAgICB0aGlzLnNldExlZnRBbmRSaWdodFRlbXBsYXRlc1Zpc2liaWxpdHkoJ3Zpc2libGUnLCAnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG93UmlnaHRQYW5UZW1wbGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRMZWZ0QW5kUmlnaHRUZW1wbGF0ZXNWaXNpYmlsaXR5KCdoaWRkZW4nLCAndmlzaWJsZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgaGlkZUxlZnRBbmRSaWdodFBhblRlbXBsYXRlcygpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldExlZnRBbmRSaWdodFRlbXBsYXRlc1Zpc2liaWxpdHkoJ2hpZGRlbicsICdoaWRkZW4nKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNldExlZnRBbmRSaWdodFRlbXBsYXRlc1Zpc2liaWxpdHkobGVmdFZpc2liaWxpdHksIHJpZ2h0VmlzaWJpbGl0eSkge1xuICAgICAgICBpZiAodGhpcy5sZWZ0UGFubmluZ1RlbXBsYXRlRWxlbWVudCAmJiB0aGlzLmxlZnRQYW5uaW5nVGVtcGxhdGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdFBhbm5pbmdUZW1wbGF0ZUVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gbGVmdFZpc2liaWxpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmlnaHRQYW5uaW5nVGVtcGxhdGVFbGVtZW50ICYmIHRoaXMucmlnaHRQYW5uaW5nVGVtcGxhdGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRQYW5uaW5nVGVtcGxhdGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IHJpZ2h0VmlzaWJpbGl0eTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGBwYW5TdGF0ZWAgb2YgYSBgbGlzdCBpdGVtYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGl0ZW1QYW5TdGF0ZSA9ICB0aGlzLmxpc3RJdGVtLnBhblN0YXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcGFuU3RhdGUoKTogSWd4TGlzdFBhblN0YXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhblN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGBpbmRleGAgb2YgYSBgbGlzdCBpdGVtYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGl0ZW1JbmRleCA9ICB0aGlzLmxpc3RJdGVtLmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXggIT09IG51bGwgPyB0aGlzLl9pbmRleCA6IHRoaXMubGlzdC5jaGlsZHJlbi50b0FycmF5KCkuaW5kZXhPZih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgaW5kZXhgIG9mIHRoZSBgbGlzdCBpdGVtYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5saXN0SXRlbS5pbmRleCA9IGluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgaW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pbmRleCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZWxlbWVudCByZWZlcmVuY2UgdG8gdGhlIGxpc3QgaXRlbS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxpc3RJdGVtRWxlbWVudCA9ICB0aGlzLmxpc3RJdGVtLmVsZW1lbnQuXG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSBjb250YWluZXIgd2hpY2ggY29udGFpbnMgdGhlIGxpc3QgaXRlbSdzIGNvbnRlbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsaXN0SXRlbUNvbnRhaW5lciA9ICB0aGlzLmxpc3RJdGVtLmNvbnRlbnRFbGVtZW50LlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29udGVudEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaWd4LWxpc3RfX2l0ZW0tY29udGVudCcpO1xuICAgICAgICByZXR1cm4gKGNhbmRpZGF0ZXMgJiYgY2FuZGlkYXRlcy5sZW5ndGggPiAwKSA/IGNhbmRpZGF0ZXNbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBjb250ZXh0YCBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgYHRlbXBsYXRlIGNvbnRleHRgIGJpbmRpbmcgaW50byB0aGUgYGxpc3QgaXRlbSBjb250YWluZXJgXG4gICAgICogYnkgcHJvdmlkaW5nIHRoZSBgJGltcGxpY2l0YCBkZWNsYXJhdGlvbiB3aGljaCBpcyB0aGUgYElneExpc3RJdGVtQ29tcG9uZW50YCBpdHNlbGYuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsaXN0SXRlbUNvbXBvbmVudCA9IHRoaXMubGlzdEl0ZW0uY29udGV4dDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHdpZHRoIG9mIGEgYGxpc3QgaXRlbWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpdGVtV2lkdGggPSB0aGlzLmxpc3RJdGVtLndpZHRoO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0SXRlbUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgd2lkdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtYXhpbXVtIGxlZnQgcG9zaXRpb24gb2YgdGhlIGBsaXN0IGl0ZW1gLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbWF4TGVmdCA9IHRoaXMubGlzdEl0ZW0ubWF4TGVmdDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1heExlZnQoKSB7XG4gICAgICAgIHJldHVybiAtdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtYXhpbXVtIHJpZ2h0IHBvc2l0aW9uIG9mIHRoZSBgbGlzdCBpdGVtYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG1heFJpZ2h0ID0gdGhpcy5saXN0SXRlbS5tYXhSaWdodDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdEl0ZW1Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1heFJpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNldENvbnRlbnRFbGVtZW50TGVmdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFuT2Zmc2V0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29udGVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHZhbHVlICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1RydWUodmFsdWU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
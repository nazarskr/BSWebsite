/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input, HostBinding, ElementRef, Output, EventEmitter, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { Navigate } from './drop-down.common';
import { DropDownActionKey } from './drop-down.common';
import { DisplayDensityBase, DisplayDensityToken } from '../core/density';
/** @type {?} */
var NEXT_ID = 0;
/**
 * An abstract class, defining a drop-down component, with:
 * Properties for display styles and classes
 * A collection items of type `IgxDropDownItemBase`
 * Properties and methods for navigating (highlighting/focusing) items from the collection
 * Properties and methods for selecting items from the collection
 * @abstract
 */
var IgxDropDownBase = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDropDownBase, _super);
    function IgxDropDownBase(elementRef, cdr, _displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this.elementRef = elementRef;
        _this.cdr = cdr;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._focusedItem = null;
        _this._id = "igx-drop-down-" + NEXT_ID++;
        /**
         * Emitted when item selection is changing, before the selection completes
         *
         * ```html
         * <igx-drop-down (onSelection)='handleSelection()'></igx-drop-down>
         * ```
         */
        _this.onSelection = new EventEmitter();
        /**
         * Gets/Sets the drop down's container max height.
         *
         * ```typescript
         * // get
         * let maxHeight = this.dropdown.maxHeight;
         * ```
         * ```html
         * <!--set-->
         * <igx-drop-down [maxHeight]='200px'></igx-drop-down>
         * ```
         */
        _this.maxHeight = null;
        /**
         * @hidden \@internal
         */
        _this.cssClass = true;
        return _this;
    }
    Object.defineProperty(IgxDropDownBase.prototype, "scrollContainer", {
        /**
         * Get dropdown's html element of it scroll container
         */
        get: /**
         * Get dropdown's html element of it scroll container
         * @protected
         * @return {?}
         */
        function () {
            return this.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownBase.prototype, "items", {
        /**
         * Get all non-header items
         *
         * ```typescript
         * let myDropDownItems = this.dropdown.items;
         * ```
         */
        get: /**
         * Get all non-header items
         *
         * ```typescript
         * let myDropDownItems = this.dropdown.items;
         * ```
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var items = [];
            if (this.children !== undefined) {
                try {
                    for (var _b = tslib_1.__values(this.children.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (!child.isHeader) {
                            items.push(child);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownBase.prototype, "headers", {
        /**
         * Get all header items
         *
         * ```typescript
         * let myDropDownHeaderItems = this.dropdown.headers;
         * ```
         */
        get: /**
         * Get all header items
         *
         * ```typescript
         * let myDropDownHeaderItems = this.dropdown.headers;
         * ```
         * @return {?}
         */
        function () {
            var e_2, _a;
            /** @type {?} */
            var headers = [];
            if (this.children !== undefined) {
                try {
                    for (var _b = tslib_1.__values(this.children.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (child.isHeader) {
                            headers.push(child);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownBase.prototype, "element", {
        /**
         * Get dropdown html element
         *
         * ```typescript
         * let myDropDownElement = this.dropdown.element;
         * ```
         */
        get: /**
         * Get dropdown html element
         *
         * ```typescript
         * let myDropDownElement = this.dropdown.element;
         * ```
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /** Keydown Handler */
    /**
     * Keydown Handler
     * @param {?} key
     * @param {?=} event
     * @return {?}
     */
    IgxDropDownBase.prototype.onItemActionKey = /**
     * Keydown Handler
     * @param {?} key
     * @param {?=} event
     * @return {?}
     */
    function (key, event) {
        switch (key) {
            case DropDownActionKey.ENTER:
            case DropDownActionKey.SPACE:
                this.selectItem(this.focusedItem, event);
                break;
            case DropDownActionKey.ESCAPE:
        }
    };
    /**
     * Emits onSelection with the target item & event
     * @hidden @internal
     * @param newSelection the item selected
     * @param event the event that triggered the call
     */
    /**
     * Emits onSelection with the target item & event
     * @hidden \@internal
     * @param {?=} newSelection the item selected
     * @param {?=} event the event that triggered the call
     * @return {?}
     */
    IgxDropDownBase.prototype.selectItem = /**
     * Emits onSelection with the target item & event
     * @hidden \@internal
     * @param {?=} newSelection the item selected
     * @param {?=} event the event that triggered the call
     * @return {?}
     */
    function (newSelection, event) {
        this.onSelection.emit({
            newSelection: newSelection,
            oldSelection: null,
            cancel: false
        });
    };
    Object.defineProperty(IgxDropDownBase.prototype, "focusedItem", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this._focusedItem;
        },
        /**
         * @hidden @internal
         */
        set: /**
         * @hidden \@internal
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._focusedItem = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} direction
     * @param {?=} currentIndex
     * @return {?}
     */
    IgxDropDownBase.prototype.navigate = /**
     * @protected
     * @param {?} direction
     * @param {?=} currentIndex
     * @return {?}
     */
    function (direction, currentIndex) {
        /** @type {?} */
        var index = -1;
        if (this._focusedItem) {
            index = currentIndex ? currentIndex : this.focusedItem.itemIndex;
        }
        /** @type {?} */
        var newIndex = this.getNearestSiblingFocusableItemIndex(index, direction);
        this.navigateItem(newIndex);
    };
    /**
     * @protected
     * @param {?} startIndex
     * @param {?} direction
     * @return {?}
     */
    IgxDropDownBase.prototype.getNearestSiblingFocusableItemIndex = /**
     * @protected
     * @param {?} startIndex
     * @param {?} direction
     * @return {?}
     */
    function (startIndex, direction) {
        /** @type {?} */
        var index = startIndex;
        /** @type {?} */
        var items = this.items;
        while (items[index + direction] && items[index + direction].disabled) {
            index += direction;
        }
        index += direction;
        if (index >= 0 && index < items.length) {
            return index;
        }
        else {
            return -1;
        }
    };
    /**
     * Navigates to the item on the specified index
     * @param newIndex number - the index of the item in the `items` collection
     */
    /**
     * Navigates to the item on the specified index
     * @param {?} newIndex number - the index of the item in the `items` collection
     * @return {?}
     */
    IgxDropDownBase.prototype.navigateItem = /**
     * Navigates to the item on the specified index
     * @param {?} newIndex number - the index of the item in the `items` collection
     * @return {?}
     */
    function (newIndex) {
        if (newIndex !== -1) {
            /** @type {?} */
            var oldItem = this._focusedItem;
            /** @type {?} */
            var newItem = this.items[newIndex];
            if (oldItem) {
                oldItem.focused = false;
            }
            this.focusedItem = newItem;
            this.scrollToHiddenItem(newItem);
            this.focusedItem.focused = true;
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownBase.prototype.navigateFirst = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.navigate(Navigate.Down, -1);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownBase.prototype.navigateLast = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.navigate(Navigate.Up, this.items.length);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownBase.prototype.navigateNext = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.navigate(Navigate.Down);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownBase.prototype.navigatePrev = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.navigate(Navigate.Up);
    };
    /**
     * @protected
     * @param {?} newItem
     * @return {?}
     */
    IgxDropDownBase.prototype.scrollToHiddenItem = /**
     * @protected
     * @param {?} newItem
     * @return {?}
     */
    function (newItem) {
        /** @type {?} */
        var elementRect = newItem.element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var parentRect = this.scrollContainer.getBoundingClientRect();
        if (parentRect.top > elementRect.top) {
            this.scrollContainer.scrollTop -= (parentRect.top - elementRect.top);
        }
        if (parentRect.bottom < elementRect.bottom) {
            this.scrollContainer.scrollTop += (elementRect.bottom - parentRect.bottom);
        }
    };
    /** @nocollapse */
    IgxDropDownBase.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    IgxDropDownBase.propDecorators = {
        onSelection: [{ type: Output }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        id: [{ type: Input }],
        maxHeight: [{ type: Input }, { type: HostBinding, args: ['style.maxHeight',] }],
        cssClass: [{ type: HostBinding, args: ['class.igx-drop-down',] }]
    };
    return IgxDropDownBase;
}(DisplayDensityBase));
export { IgxDropDownBase };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownBase.prototype._width;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownBase.prototype._height;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownBase.prototype._focusedItem;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownBase.prototype._id;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxDropDownBase.prototype.children;
    /**
     * Emitted when item selection is changing, before the selection completes
     *
     * ```html
     * <igx-drop-down (onSelection)='handleSelection()'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownBase.prototype.onSelection;
    /**
     *  Gets/Sets the width of the drop down
     *
     * ```typescript
     * // get
     * let myDropDownCurrentWidth = this.dropdown.width;
     * ```
     * ```html
     * <!--set-->
     * <igx-drop-down [width]='160px'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownBase.prototype.width;
    /**
     * Gets/Sets the height of the drop down
     *
     * ```typescript
     * // get
     * let myDropDownCurrentHeight = this.dropdown.height;
     * ```
     * ```html
     * <!--set-->
     * <igx-drop-down [height]='400px'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownBase.prototype.height;
    /**
     * Gets/Sets the drop down's id
     *
     * ```typescript
     * // get
     * let myDropDownCurrentId = this.dropdown.id;
     * ```
     * ```html
     * <!--set-->
     * <igx-drop-down [id]='newDropDownId'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownBase.prototype.id;
    /**
     * Gets/Sets the drop down's container max height.
     *
     * ```typescript
     * // get
     * let maxHeight = this.dropdown.maxHeight;
     * ```
     * ```html
     * <!--set-->
     * <igx-drop-down [maxHeight]='200px'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownBase.prototype.maxHeight;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxDropDownBase.prototype.cssClass;
    /**
     * Gets if the dropdown is collapsed
     * @type {?}
     */
    IgxDropDownBase.prototype.collapsed;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownBase.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownBase.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownBase.prototype._displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2Ryb3AtZG93bi9kcm9wLWRvd24uYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQ3ZHLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sb0JBQW9CLENBQUM7QUFFbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUEwQixNQUFNLGlCQUFpQixDQUFDOztJQUU5RixPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7O0FBU2Y7SUFBOEMsMkNBQWtCO0lBd0o1RCx5QkFDYyxVQUFzQixFQUN0QixHQUFzQixFQUNtQixzQkFBOEM7UUFIckcsWUFJUSxrQkFBTSxzQkFBc0IsQ0FBQyxTQUNoQztRQUpTLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ21CLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUF4SjNGLGtCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLFNBQUcsR0FBRyxtQkFBaUIsT0FBTyxFQUFJLENBQUM7Ozs7Ozs7O1FBdUJ0QyxpQkFBVyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7O1FBNkR0RCxlQUFTLEdBQUcsSUFBSSxDQUFDOzs7O1FBTWpCLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBK0RuQixDQUFDO0lBcEpMLHNCQUFjLDRDQUFlO1FBSDdCOztXQUVHOzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7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Q0FBaUI7Ozs7O0lBQ2pCLGtDQUFrQjs7Ozs7SUFDbEIsdUNBQW1DOzs7OztJQUNuQyw4QkFBNkM7Ozs7OztJQWE3QyxtQ0FBZ0Q7Ozs7Ozs7OztJQVNoRCxzQ0FDNkQ7Ozs7Ozs7Ozs7Ozs7O0lBYzdELGdDQUNxQjs7Ozs7Ozs7Ozs7Ozs7SUFjckIsaUNBQ3NCOzs7Ozs7Ozs7Ozs7OztJQWN0Qiw2QkFDa0I7Ozs7Ozs7Ozs7Ozs7O0lBY2xCLG9DQUV3Qjs7Ozs7SUFLeEIsbUNBQ3VCOzs7OztJQXdEdkIsb0NBQW1DOzs7OztJQUcvQixxQ0FBZ0M7Ozs7O0lBQ2hDLDhCQUFnQzs7Ozs7SUFDaEMsaURBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBJbnB1dCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIFF1ZXJ5TGlzdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCwgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXZpZ2F0ZSwgSVNlbGVjdGlvbkV2ZW50QXJncyB9IGZyb20gJy4vZHJvcC1kb3duLmNvbW1vbic7XG5pbXBvcnQgeyBJRHJvcERvd25MaXN0IH0gZnJvbSAnLi9kcm9wLWRvd24uY29tbW9uJztcbmltcG9ydCB7IERyb3BEb3duQWN0aW9uS2V5IH0gZnJvbSAnLi9kcm9wLWRvd24uY29tbW9uJztcbmltcG9ydCB7IElneERyb3BEb3duSXRlbUJhc2UgfSBmcm9tICcuL2Ryb3AtZG93bi1pdGVtLmJhc2UnO1xuaW1wb3J0IHsgRGlzcGxheURlbnNpdHlCYXNlLCBEaXNwbGF5RGVuc2l0eVRva2VuLCBJRGlzcGxheURlbnNpdHlPcHRpb25zIH0gZnJvbSAnLi4vY29yZS9kZW5zaXR5JztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG4vKipcbiAqIEFuIGFic3RyYWN0IGNsYXNzLCBkZWZpbmluZyBhIGRyb3AtZG93biBjb21wb25lbnQsIHdpdGg6XG4gKiBQcm9wZXJ0aWVzIGZvciBkaXNwbGF5IHN0eWxlcyBhbmQgY2xhc3Nlc1xuICogQSBjb2xsZWN0aW9uIGl0ZW1zIG9mIHR5cGUgYElneERyb3BEb3duSXRlbUJhc2VgXG4gKiBQcm9wZXJ0aWVzIGFuZCBtZXRob2RzIGZvciBuYXZpZ2F0aW5nIChoaWdobGlnaHRpbmcvZm9jdXNpbmcpIGl0ZW1zIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAqIFByb3BlcnRpZXMgYW5kIG1ldGhvZHMgZm9yIHNlbGVjdGluZyBpdGVtcyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJZ3hEcm9wRG93bkJhc2UgZXh0ZW5kcyBEaXNwbGF5RGVuc2l0eUJhc2UgaW1wbGVtZW50cyBJRHJvcERvd25MaXN0IHtcbiAgICBwcm90ZWN0ZWQgX3dpZHRoO1xuICAgIHByb3RlY3RlZCBfaGVpZ2h0O1xuICAgIHByb3RlY3RlZCBfZm9jdXNlZEl0ZW06IGFueSA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9pZCA9IGBpZ3gtZHJvcC1kb3duLSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZHJvcGRvd24ncyBodG1sIGVsZW1lbnQgb2YgaXQgc2Nyb2xsIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgc2Nyb2xsQ29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hpbGRyZW46IFF1ZXJ5TGlzdDxJZ3hEcm9wRG93bkl0ZW1CYXNlPjtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBpdGVtIHNlbGVjdGlvbiBpcyBjaGFuZ2luZywgYmVmb3JlIHRoZSBzZWxlY3Rpb24gY29tcGxldGVzXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kcm9wLWRvd24gKG9uU2VsZWN0aW9uKT0naGFuZGxlU2VsZWN0aW9uKCknPjwvaWd4LWRyb3AtZG93bj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPElTZWxlY3Rpb25FdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiAgR2V0cy9TZXRzIHRoZSB3aWR0aCBvZiB0aGUgZHJvcCBkb3duXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15RHJvcERvd25DdXJyZW50V2lkdGggPSB0aGlzLmRyb3Bkb3duLndpZHRoO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1kcm9wLWRvd24gW3dpZHRoXT0nMTYwcHgnPjwvaWd4LWRyb3AtZG93bj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogR2V0cy9TZXRzIHRoZSBoZWlnaHQgb2YgdGhlIGRyb3AgZG93blxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBteURyb3BEb3duQ3VycmVudEhlaWdodCA9IHRoaXMuZHJvcGRvd24uaGVpZ2h0O1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1kcm9wLWRvd24gW2hlaWdodF09JzQwMHB4Jz48L2lneC1kcm9wLWRvd24+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL1NldHMgdGhlIGRyb3AgZG93bidzIGlkXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15RHJvcERvd25DdXJyZW50SWQgPSB0aGlzLmRyb3Bkb3duLmlkO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1kcm9wLWRvd24gW2lkXT0nbmV3RHJvcERvd25JZCc+PC9pZ3gtZHJvcC1kb3duPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL1NldHMgdGhlIGRyb3AgZG93bidzIGNvbnRhaW5lciBtYXggaGVpZ2h0LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBtYXhIZWlnaHQgPSB0aGlzLmRyb3Bkb3duLm1heEhlaWdodDtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtZHJvcC1kb3duIFttYXhIZWlnaHRdPScyMDBweCc+PC9pZ3gtZHJvcC1kb3duPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXhIZWlnaHQnKVxuICAgIHB1YmxpYyBtYXhIZWlnaHQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd24nKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG5vbi1oZWFkZXIgaXRlbXNcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbXlEcm9wRG93bkl0ZW1zID0gdGhpcy5kcm9wZG93bi5pdGVtcztcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGl0ZW1zKCk6IElneERyb3BEb3duSXRlbUJhc2VbXSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zOiBJZ3hEcm9wRG93bkl0ZW1CYXNlW10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSkge1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGQuaXNIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgaGVhZGVyIGl0ZW1zXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG15RHJvcERvd25IZWFkZXJJdGVtcyA9IHRoaXMuZHJvcGRvd24uaGVhZGVycztcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGhlYWRlcnMoKTogSWd4RHJvcERvd25JdGVtQmFzZVtdIHtcbiAgICAgICAgY29uc3QgaGVhZGVyczogSWd4RHJvcERvd25JdGVtQmFzZVtdID0gW107XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbi50b0FycmF5KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaXNIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZHJvcGRvd24gaHRtbCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG15RHJvcERvd25FbGVtZW50ID0gdGhpcy5kcm9wZG93bi5lbGVtZW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaWYgdGhlIGRyb3Bkb3duIGlzIGNvbGxhcHNlZFxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgICAgICBzdXBlcihfZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgLyoqIEtleWRvd24gSGFuZGxlciAqL1xuICAgIHB1YmxpYyBvbkl0ZW1BY3Rpb25LZXkoa2V5OiBEcm9wRG93bkFjdGlvbktleSwgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSBEcm9wRG93bkFjdGlvbktleS5FTlRFUjpcbiAgICAgICAgICAgIGNhc2UgRHJvcERvd25BY3Rpb25LZXkuU1BBQ0U6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHRoaXMuZm9jdXNlZEl0ZW0sIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRHJvcERvd25BY3Rpb25LZXkuRVNDQVBFOlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdHMgb25TZWxlY3Rpb24gd2l0aCB0aGUgdGFyZ2V0IGl0ZW0gJiBldmVudFxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICogQHBhcmFtIG5ld1NlbGVjdGlvbiB0aGUgaXRlbSBzZWxlY3RlZFxuICAgICAqIEBwYXJhbSBldmVudCB0aGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIGNhbGxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0SXRlbShuZXdTZWxlY3Rpb24/OiBJZ3hEcm9wRG93bkl0ZW1CYXNlLCBldmVudD86IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdCh7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24sXG4gICAgICAgICAgICBvbGRTZWxlY3Rpb246IG51bGwsXG4gICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBmb2N1c2VkSXRlbSgpOiBJZ3hEcm9wRG93bkl0ZW1CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWRJdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNldCBmb2N1c2VkSXRlbShpdGVtOiBJZ3hEcm9wRG93bkl0ZW1CYXNlKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbmF2aWdhdGUoZGlyZWN0aW9uOiBOYXZpZ2F0ZSwgY3VycmVudEluZGV4PzogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBpZiAodGhpcy5fZm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gY3VycmVudEluZGV4ID8gY3VycmVudEluZGV4IDogdGhpcy5mb2N1c2VkSXRlbS5pdGVtSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmdldE5lYXJlc3RTaWJsaW5nRm9jdXNhYmxlSXRlbUluZGV4KGluZGV4LCBkaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLm5hdmlnYXRlSXRlbShuZXdJbmRleCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE5lYXJlc3RTaWJsaW5nRm9jdXNhYmxlSXRlbUluZGV4KHN0YXJ0SW5kZXg6IG51bWJlciwgZGlyZWN0aW9uOiBOYXZpZ2F0ZSk6IG51bWJlciB7XG4gICAgICAgIGxldCBpbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgd2hpbGUgKGl0ZW1zW2luZGV4ICsgZGlyZWN0aW9uXSAmJiBpdGVtc1tpbmRleCArIGRpcmVjdGlvbl0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IGRpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ICs9IGRpcmVjdGlvbjtcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byB0aGUgaXRlbSBvbiB0aGUgc3BlY2lmaWVkIGluZGV4XG4gICAgICogQHBhcmFtIG5ld0luZGV4IG51bWJlciAtIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgYGl0ZW1zYCBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlSXRlbShuZXdJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChuZXdJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZEl0ZW0gPSB0aGlzLl9mb2N1c2VkSXRlbTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB0aGlzLml0ZW1zW25ld0luZGV4XTtcbiAgICAgICAgICAgIGlmIChvbGRJdGVtKSB7XG4gICAgICAgICAgICAgICAgb2xkSXRlbS5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJdGVtID0gbmV3SXRlbTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IaWRkZW5JdGVtKG5ld0l0ZW0pO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkSXRlbS5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlRmlyc3QoKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoTmF2aWdhdGUuRG93biwgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlTGFzdCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShOYXZpZ2F0ZS5VcCwgdGhpcy5pdGVtcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlTmV4dCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShOYXZpZ2F0ZS5Eb3duKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZVByZXYoKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoTmF2aWdhdGUuVXApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxUb0hpZGRlbkl0ZW0obmV3SXRlbTogSWd4RHJvcERvd25JdGVtQmFzZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50UmVjdCA9IG5ld0l0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwYXJlbnRSZWN0ID0gdGhpcy5zY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChwYXJlbnRSZWN0LnRvcCA+IGVsZW1lbnRSZWN0LnRvcCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIC09IChwYXJlbnRSZWN0LnRvcCAtIGVsZW1lbnRSZWN0LnRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50UmVjdC5ib3R0b20gPCBlbGVtZW50UmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCArPSAoZWxlbWVudFJlY3QuYm90dG9tIC0gcGFyZW50UmVjdC5ib3R0b20pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
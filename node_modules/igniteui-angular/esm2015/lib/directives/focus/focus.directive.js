/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, NgModule, Optional, Inject, Self } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class IgxFocusDirective {
    /**
     * @param {?} element
     * @param {?=} comp
     */
    constructor(element, comp) {
        this.element = element;
        this.comp = comp;
        this.focusState = true;
    }
    /**
     * Returns the state of the igxFocus.
     * ```typescript
     * \@ViewChild('focusContainer', {read: IgxFocusDirective})
     * public igxFocus: IgxFocusDirective;
     * let isFocusOn = this.igxFocus.focused;
     * ```
     * \@memberof IgxFocusDirective
     * @return {?}
     */
    get focused() {
        return this.focusState;
    }
    /**
     * Sets the state of the igxFocus.
     * ```html
     * <igx-input-group >
     *  <input #focusContainer igxInput [igxFocus]="true"/>
     * </igx-input-group>
     * ```
     * \@memberof IgxFocusDirective
     * @param {?} val
     * @return {?}
     */
    set focused(val) {
        this.focusState = val;
        this.trigger();
    }
    /**
     * Gets the native element of the igxFocus.
     * ```typescript
     * \@ViewChild('focusContainer', {read: IgxFocusDirective})
     * public igxFocus: IgxFocusDirective;
     * let igxFocusNativeElement = this.igxFocus.nativeElement;
     * ```
     * \@memberof IgxFocusDirective
     * @return {?}
     */
    get nativeElement() {
        if (this.comp && this.comp[0] && this.comp[0].getEditElement) {
            return ((/** @type {?} */ (this.comp[0]))).getEditElement();
        }
        return this.element.nativeElement;
    }
    /**
     * Triggers the igxFocus state.
     * ```typescript
     * \@ViewChild('focusContainer', {read: IgxFocusDirective})
     * public igxFocus: IgxFocusDirective;
     * this.igxFocus.trigger();
     * ```
     * \@memberof IgxFocusDirective
     * @return {?}
     */
    trigger() {
        if (this.focusState) {
            requestAnimationFrame(() => this.nativeElement.focus());
        }
    }
}
IgxFocusDirective.decorators = [
    { type: Directive, args: [{
                exportAs: 'igxFocus',
                selector: '[igxFocus]'
            },] }
];
/** @nocollapse */
IgxFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Array, decorators: [{ type: Inject, args: [NG_VALUE_ACCESSOR,] }, { type: Self }, { type: Optional }] }
];
IgxFocusDirective.propDecorators = {
    focused: [{ type: Input, args: ['igxFocus',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxFocusDirective.prototype.focusState;
    /**
     * @type {?}
     * @private
     */
    IgxFocusDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxFocusDirective.prototype.comp;
}
/**
 * @hidden
 */
export class IgxFocusModule {
}
IgxFocusModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxFocusDirective],
                exports: [IgxFocusDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2ZvY3VzL2ZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9uRCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQTZDMUIsWUFBb0IsT0FBbUIsRUFBeUQsSUFBWTtRQUF4RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQXlELFNBQUksR0FBSixJQUFJLENBQVE7UUEzQ3BHLGVBQVUsR0FBRyxJQUFJLENBQUM7SUEyQ3NGLENBQUM7Ozs7Ozs7Ozs7O0lBakNqSCxJQUNJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lBVUQsSUFBSSxPQUFPLENBQUMsR0FBWTtRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7SUFVRCxJQUFJLGFBQWE7UUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUMxRCxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBa0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7Ozs7OztJQVlELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQzs7O1lBL0RKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLFlBQVk7YUFDekI7Ozs7WUFQbUIsVUFBVTt3Q0FxRGdCLE1BQU0sU0FBQyxpQkFBaUIsY0FBRyxJQUFJLFlBQUksUUFBUTs7O3NCQWpDcEYsS0FBSyxTQUFDLFVBQVU7Ozs7Ozs7SUFWakIsdUNBQTBCOzs7OztJQTJDZCxvQ0FBMkI7Ozs7O0lBQUUsaUNBQW1FOzs7OztBQXdCaEgsTUFBTSxPQUFPLGNBQWM7OztZQUoxQixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdNb2R1bGUsIE9wdGlvbmFsLCBJbmplY3QsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRWRpdG9yUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9jb3JlL2VkaXQtcHJvdmlkZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBleHBvcnRBczogJ2lneEZvY3VzJyxcbiAgICBzZWxlY3RvcjogJ1tpZ3hGb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIElneEZvY3VzRGlyZWN0aXZlIHtcblxuICAgIHByaXZhdGUgZm9jdXNTdGF0ZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3RhdGUgb2YgdGhlIGlneEZvY3VzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdmb2N1c0NvbnRhaW5lcicsIHtyZWFkOiBJZ3hGb2N1c0RpcmVjdGl2ZX0pXG4gICAgICogcHVibGljIGlneEZvY3VzOiBJZ3hGb2N1c0RpcmVjdGl2ZTtcbiAgICAgKiBsZXQgaXNGb2N1c09uID0gdGhpcy5pZ3hGb2N1cy5mb2N1c2VkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hGb2N1c0RpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4Rm9jdXMnKVxuICAgIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c1N0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgaWd4Rm9jdXMuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtaW5wdXQtZ3JvdXAgPlxuICAgICAqICA8aW5wdXQgI2ZvY3VzQ29udGFpbmVyIGlneElucHV0IFtpZ3hGb2N1c109XCJ0cnVlXCIvPlxuICAgICAqIDwvaWd4LWlucHV0LWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hGb2N1c0RpcmVjdGl2ZVxuICAgICAqL1xuICAgIHNldCBmb2N1c2VkKHZhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmZvY3VzU3RhdGUgPSB2YWw7XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBuYXRpdmUgZWxlbWVudCBvZiB0aGUgaWd4Rm9jdXMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoJ2ZvY3VzQ29udGFpbmVyJywge3JlYWQ6IElneEZvY3VzRGlyZWN0aXZlfSlcbiAgICAgKiBwdWJsaWMgaWd4Rm9jdXM6IElneEZvY3VzRGlyZWN0aXZlO1xuICAgICAqIGxldCBpZ3hGb2N1c05hdGl2ZUVsZW1lbnQgPSB0aGlzLmlneEZvY3VzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEZvY3VzRGlyZWN0aXZlXG4gICAgICovXG4gICAgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXAgJiYgdGhpcy5jb21wWzBdICYmIHRoaXMuY29tcFswXS5nZXRFZGl0RWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmNvbXBbMF0gYXMgRWRpdG9yUHJvdmlkZXIpLmdldEVkaXRFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgQEluamVjdChOR19WQUxVRV9BQ0NFU1NPUikgQFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbXA/OiBhbnlbXSkgeyB9XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGlneEZvY3VzIHN0YXRlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdmb2N1c0NvbnRhaW5lcicsIHtyZWFkOiBJZ3hGb2N1c0RpcmVjdGl2ZX0pXG4gICAgICogcHVibGljIGlneEZvY3VzOiBJZ3hGb2N1c0RpcmVjdGl2ZTtcbiAgICAgKiB0aGlzLmlneEZvY3VzLnRyaWdnZXIoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Rm9jdXNEaXJlY3RpdmVcbiAgICAgKi9cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c1N0YXRlKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hGb2N1c0RpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneEZvY3VzRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hGb2N1c01vZHVsZSB7IH1cbiJdfQ==
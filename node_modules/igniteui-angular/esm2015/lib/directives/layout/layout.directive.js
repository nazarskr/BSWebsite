/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, NgModule } from '@angular/core';
export class IgxLayoutDirective {
    constructor() {
        /**
         * Sets the default flow direction of the container's children.
         *
         * Defaults to `rows`.
         *
         * ```html
         *  <div
         *   igxLayout
         *   igxLayoutDir="row">
         *    <div igxFlex>1</div>
         *    <div igxFlex>2</div>
         *    <div igxFlex>3</div>
         *  </div>
         * ```
         */
        this.dir = 'row';
        /**
         * Defines the direction flex children are placed in the flex container.
         *
         * When set to `true`, the `rows` direction goes right to left and `columns` goes bottom to top.
         *
         * ```html
         * <div
         *   igxLayout
         *   igxLayoutReverse="true">
         *    <div igxFlex>1</div>
         *    <div igxFlex>2</div>
         *    <div igxFlex>3</div>
         * </div>
         * ```
         */
        this.reverse = false;
        /**
         * By default the immediate children will all try to fit onto one line.
         *
         * The default value `nowrap` sets this behavior.
         *
         * Other accepted values are `wrap` and `wrap-reverse`.
         *
         * ```html
         * <div
         *   igxLayout
         *   igxLayoutDir="row"
         *   igxLayoutWrap="wrap">
         *    <div igxFlex igxFlexGrow="0">1</div>
         *    <div igxFlex igxFlexGrow="0">2</div>
         *    <div igxFlex igxFlexGrow="0">3</div>
         * </div>
         * ```
         */
        this.wrap = 'nowrap';
        /**
         * Defines the alignment along the main axis.
         *
         * Defaults to `flex-start` which packs the children toward the start line.
         *
         * Other possible values are `flex-end`, `center`, `space-between`, `space-around`.
         *
         * ```html
         * <div
         *   igxLayout
         *   igxLayoutDir="column"
         *   igxLayoutJustify="space-between">
         *    <div>1</div>
         *    <div>2</div>
         *    <div>3</div>
         * </div>
         * ```
         */
        this.justify = 'flex-start';
        /**
         * Defines the default behavior for how children are laid out along the corss axis of the current line.
         *
         * Defaults to `flex-start`.
         *
         * Other possible values are `flex-end`, `center`, `baseline`, and `stretch`.
         *
         * ```html
         * <div
         *   igxLayout
         *   igxLayoutDir="column"
         *   igxLayoutItemAlign="start">
         *    <div igxFlex igxFlexGrow="0">1</div>
         *    <div igxFlex igxFlexGrow="0">2</div>
         *    <div igxFlex igxFlexGrow="0">3</div>
         * </div>
         * ```
         */
        this.itemAlign = 'stretch';
        /**
         * @hidden
         */
        this.display = 'flex';
    }
    /**
     * @hidden
     * @return {?}
     */
    get flexwrap() { return this.wrap; }
    /**
     * @hidden
     * @return {?}
     */
    get justifycontent() { return this.justify; }
    /**
     * @hidden
     * @return {?}
     */
    get align() { return this.itemAlign; }
    /**
     * @hidden
     * @return {?}
     */
    get direction() {
        if (this.reverse) {
            return (this.dir === 'row') ? 'row-reverse' : 'column-reverse';
        }
        return (this.dir === 'row') ? 'row' : 'column';
    }
}
IgxLayoutDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxLayout]'
            },] }
];
IgxLayoutDirective.propDecorators = {
    dir: [{ type: Input, args: ['igxLayoutDir',] }],
    reverse: [{ type: Input, args: ['igxLayoutReverse',] }],
    wrap: [{ type: Input, args: ['igxLayoutWrap',] }],
    justify: [{ type: Input, args: ['igxLayoutJustify',] }],
    itemAlign: [{ type: Input, args: ['igxLayoutItemAlign',] }],
    display: [{ type: HostBinding, args: ['style.display',] }],
    flexwrap: [{ type: HostBinding, args: ['style.flex-wrap',] }],
    justifycontent: [{ type: HostBinding, args: ['style.justify-content',] }],
    align: [{ type: HostBinding, args: ['style.align-items',] }],
    direction: [{ type: HostBinding, args: ['style.flex-direction',] }]
};
if (false) {
    /**
     * Sets the default flow direction of the container's children.
     *
     * Defaults to `rows`.
     *
     * ```html
     *  <div
     *   igxLayout
     *   igxLayoutDir="row">
     *    <div igxFlex>1</div>
     *    <div igxFlex>2</div>
     *    <div igxFlex>3</div>
     *  </div>
     * ```
     * @type {?}
     */
    IgxLayoutDirective.prototype.dir;
    /**
     * Defines the direction flex children are placed in the flex container.
     *
     * When set to `true`, the `rows` direction goes right to left and `columns` goes bottom to top.
     *
     * ```html
     * <div
     *   igxLayout
     *   igxLayoutReverse="true">
     *    <div igxFlex>1</div>
     *    <div igxFlex>2</div>
     *    <div igxFlex>3</div>
     * </div>
     * ```
     * @type {?}
     */
    IgxLayoutDirective.prototype.reverse;
    /**
     * By default the immediate children will all try to fit onto one line.
     *
     * The default value `nowrap` sets this behavior.
     *
     * Other accepted values are `wrap` and `wrap-reverse`.
     *
     * ```html
     * <div
     *   igxLayout
     *   igxLayoutDir="row"
     *   igxLayoutWrap="wrap">
     *    <div igxFlex igxFlexGrow="0">1</div>
     *    <div igxFlex igxFlexGrow="0">2</div>
     *    <div igxFlex igxFlexGrow="0">3</div>
     * </div>
     * ```
     * @type {?}
     */
    IgxLayoutDirective.prototype.wrap;
    /**
     * Defines the alignment along the main axis.
     *
     * Defaults to `flex-start` which packs the children toward the start line.
     *
     * Other possible values are `flex-end`, `center`, `space-between`, `space-around`.
     *
     * ```html
     * <div
     *   igxLayout
     *   igxLayoutDir="column"
     *   igxLayoutJustify="space-between">
     *    <div>1</div>
     *    <div>2</div>
     *    <div>3</div>
     * </div>
     * ```
     * @type {?}
     */
    IgxLayoutDirective.prototype.justify;
    /**
     * Defines the default behavior for how children are laid out along the corss axis of the current line.
     *
     * Defaults to `flex-start`.
     *
     * Other possible values are `flex-end`, `center`, `baseline`, and `stretch`.
     *
     * ```html
     * <div
     *   igxLayout
     *   igxLayoutDir="column"
     *   igxLayoutItemAlign="start">
     *    <div igxFlex igxFlexGrow="0">1</div>
     *    <div igxFlex igxFlexGrow="0">2</div>
     *    <div igxFlex igxFlexGrow="0">3</div>
     * </div>
     * ```
     * @type {?}
     */
    IgxLayoutDirective.prototype.itemAlign;
    /**
     * @hidden
     * @type {?}
     */
    IgxLayoutDirective.prototype.display;
}
export class IgxFlexDirective {
    constructor() {
        /**
         * Applies the `grow` attribute to an element that uses the directive.
         *
         * Default value is `1`.
         *
         * ```html
         * <div>
         *    <div igxFlex igxFlexGrow="0">Content1</div>
         *    <div igxFlex igxFlexGrow="1">Content2</div>
         *    <div igxFlex igxFlexGrow="0">Content3</div>
         * </div>
         * ```
         */
        this.grow = 1;
        /**
         * Applies the `shrink` attribute to an element that uses the directive.
         *
         * Default value is `1`.
         *
         * ```html
         * <div>
         *    <div igxFlex igxFlexShrink="1">Content1</div>
         *    <div igxFlex igxFlexShrink="0">Content2</div>
         *    <div igxFlex igxFlexShrink="1">Content3</div>
         * </div>
         * ```
         */
        this.shrink = 1;
        /**
         * Applies the directive to an element.
         *
         * Possible values include `igxFlexGrow`, `igxFlexShrink`, `igxFlexOrder`, `igxFlexBasis`.
         *
         * ```html
         * <div igxFlex>Content</div>
         * ```
         */
        this.flex = '';
        /**
         * Applies the `order` attribute to an element that uses the directive.
         *
         * Default value is `0`.
         *
         * ```html
         * <div>
         *    <div igxFlex igxFlexOrder="1">Content1</div>
         *    <div igxFlex igxFlexOrder="0">Content2</div>
         *    <div igxFlex igxFlexOrder="2">Content3</div>
         * </div>
         * ```
         */
        this.order = 0;
        /**
         * Applies the `flex-basis` attribute to an element that uses the directive.
         *
         * Default value is `auto`.
         *
         * Other possible values include `content`, `max-content`, `min-content`, `fit-content`.
         *
         * ```html
         * <div igxFlex igxFlexBasis="fit-content">Content</div>
         * ```
         */
        this.basis = 'auto';
    }
    /**
     * @hidden
     * @return {?}
     */
    get style() {
        if (this.flex) {
            return `${this.flex}`;
        }
        return `${this.grow} ${this.shrink} ${this.basis}`;
    }
    /**
     * @hidden
     * @return {?}
     */
    get itemorder() {
        return this.order || 0;
    }
}
IgxFlexDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxFlex]'
            },] }
];
IgxFlexDirective.propDecorators = {
    grow: [{ type: Input, args: ['igxFlexGrow',] }],
    shrink: [{ type: Input, args: ['igxFlexShrink',] }],
    flex: [{ type: Input, args: ['igxFlex',] }],
    order: [{ type: Input, args: ['igxFlexOrder',] }],
    basis: [{ type: Input, args: ['igxFlexBasis',] }],
    style: [{ type: HostBinding, args: ['style.flex',] }],
    itemorder: [{ type: HostBinding, args: ['style.order',] }]
};
if (false) {
    /**
     * Applies the `grow` attribute to an element that uses the directive.
     *
     * Default value is `1`.
     *
     * ```html
     * <div>
     *    <div igxFlex igxFlexGrow="0">Content1</div>
     *    <div igxFlex igxFlexGrow="1">Content2</div>
     *    <div igxFlex igxFlexGrow="0">Content3</div>
     * </div>
     * ```
     * @type {?}
     */
    IgxFlexDirective.prototype.grow;
    /**
     * Applies the `shrink` attribute to an element that uses the directive.
     *
     * Default value is `1`.
     *
     * ```html
     * <div>
     *    <div igxFlex igxFlexShrink="1">Content1</div>
     *    <div igxFlex igxFlexShrink="0">Content2</div>
     *    <div igxFlex igxFlexShrink="1">Content3</div>
     * </div>
     * ```
     * @type {?}
     */
    IgxFlexDirective.prototype.shrink;
    /**
     * Applies the directive to an element.
     *
     * Possible values include `igxFlexGrow`, `igxFlexShrink`, `igxFlexOrder`, `igxFlexBasis`.
     *
     * ```html
     * <div igxFlex>Content</div>
     * ```
     * @type {?}
     */
    IgxFlexDirective.prototype.flex;
    /**
     * Applies the `order` attribute to an element that uses the directive.
     *
     * Default value is `0`.
     *
     * ```html
     * <div>
     *    <div igxFlex igxFlexOrder="1">Content1</div>
     *    <div igxFlex igxFlexOrder="0">Content2</div>
     *    <div igxFlex igxFlexOrder="2">Content3</div>
     * </div>
     * ```
     * @type {?}
     */
    IgxFlexDirective.prototype.order;
    /**
     * Applies the `flex-basis` attribute to an element that uses the directive.
     *
     * Default value is `auto`.
     *
     * Other possible values include `content`, `max-content`, `min-content`, `fit-content`.
     *
     * ```html
     * <div igxFlex igxFlexBasis="fit-content">Content</div>
     * ```
     * @type {?}
     */
    IgxFlexDirective.prototype.basis;
}
/**
 * @hidden
 */
export class IgxLayoutModule {
}
IgxLayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxFlexDirective, IgxLayoutDirective],
                exports: [IgxFlexDirective, IgxLayoutDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9sYXlvdXQvbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt4RSxNQUFNLE9BQU8sa0JBQWtCO0lBSC9COzs7Ozs7Ozs7Ozs7Ozs7O1FBbUJrQyxRQUFHLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1FBaUJSLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFvQm5CLFNBQUksR0FBRyxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFvQmIsWUFBTyxHQUFHLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW9CckIsY0FBUyxHQUFHLFNBQVMsQ0FBQzs7OztRQUtyQixZQUFPLEdBQUcsTUFBTSxDQUFDO0lBMkIxRCxDQUFDOzs7OztJQXRCRyxJQUFvQyxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFLcEUsSUFBMEMsY0FBYyxLQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7O0lBS25GLElBQXNDLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7OztJQUt4RSxJQUNJLFNBQVM7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNsRTtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNuRCxDQUFDOzs7WUEvSEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2FBQzFCOzs7a0JBaUJJLEtBQUssU0FBQyxjQUFjO3NCQWlCcEIsS0FBSyxTQUFDLGtCQUFrQjttQkFvQnhCLEtBQUssU0FBQyxlQUFlO3NCQW9CckIsS0FBSyxTQUFDLGtCQUFrQjt3QkFvQnhCLEtBQUssU0FBQyxvQkFBb0I7c0JBSzFCLFdBQVcsU0FBQyxlQUFlO3VCQUszQixXQUFXLFNBQUMsaUJBQWlCOzZCQUs3QixXQUFXLFNBQUMsdUJBQXVCO29CQUtuQyxXQUFXLFNBQUMsbUJBQW1CO3dCQUsvQixXQUFXLFNBQUMsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdEduQyxpQ0FBMEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUIxQyxxQ0FBa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JsRCxrQ0FBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0IvQyxxQ0FBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0J6RCx1Q0FBMEQ7Ozs7O0lBSzFELHFDQUFzRDs7QUFnQzFELE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7Ozs7Ozs7Ozs7Ozs7O1FBa0JpQyxTQUFJLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztRQWVQLFdBQU0sR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7UUFXakIsU0FBSSxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUFlTCxVQUFLLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7UUFhVixVQUFLLEdBQUcsTUFBTSxDQUFDO0lBb0JqRCxDQUFDOzs7OztJQWZHLElBQ0ksS0FBSztRQUNMLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7UUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUtELElBQ0ksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBM0ZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVzthQUN4Qjs7O21CQWdCSSxLQUFLLFNBQUMsYUFBYTtxQkFlbkIsS0FBSyxTQUFDLGVBQWU7bUJBV3JCLEtBQUssU0FBQyxTQUFTO29CQWVmLEtBQUssU0FBQyxjQUFjO29CQWFwQixLQUFLLFNBQUMsY0FBYztvQkFLcEIsV0FBVyxTQUFDLFlBQVk7d0JBV3hCLFdBQVcsU0FBQyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztJQXRFMUIsZ0NBQXNDOzs7Ozs7Ozs7Ozs7Ozs7SUFldEMsa0NBQTBDOzs7Ozs7Ozs7OztJQVcxQyxnQ0FBbUM7Ozs7Ozs7Ozs7Ozs7OztJQWVuQyxpQ0FBd0M7Ozs7Ozs7Ozs7Ozs7SUFheEMsaUNBQTZDOzs7OztBQTZCakQsTUFBTSxPQUFPLGVBQWU7OztZQUozQixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneExheW91dF0nXG59KVxuZXhwb3J0IGNsYXNzIElneExheW91dERpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGVmYXVsdCBmbG93IGRpcmVjdGlvbiBvZiB0aGUgY29udGFpbmVyJ3MgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBEZWZhdWx0cyB0byBgcm93c2AuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxkaXZcbiAgICAgKiAgIGlneExheW91dFxuICAgICAqICAgaWd4TGF5b3V0RGlyPVwicm93XCI+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4PjE8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXg+MjwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleD4zPC9kaXY+XG4gICAgICogIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4TGF5b3V0RGlyJykgcHVibGljIGRpciA9ICdyb3cnO1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgZGlyZWN0aW9uIGZsZXggY2hpbGRyZW4gYXJlIHBsYWNlZCBpbiB0aGUgZmxleCBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBXaGVuIHNldCB0byBgdHJ1ZWAsIHRoZSBgcm93c2AgZGlyZWN0aW9uIGdvZXMgcmlnaHQgdG8gbGVmdCBhbmQgYGNvbHVtbnNgIGdvZXMgYm90dG9tIHRvIHRvcC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hMYXlvdXRcbiAgICAgKiAgIGlneExheW91dFJldmVyc2U9XCJ0cnVlXCI+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4PjE8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXg+MjwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleD4zPC9kaXY+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hMYXlvdXRSZXZlcnNlJykgcHVibGljIHJldmVyc2UgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIGltbWVkaWF0ZSBjaGlsZHJlbiB3aWxsIGFsbCB0cnkgdG8gZml0IG9udG8gb25lIGxpbmUuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBgbm93cmFwYCBzZXRzIHRoaXMgYmVoYXZpb3IuXG4gICAgICpcbiAgICAgKiBPdGhlciBhY2NlcHRlZCB2YWx1ZXMgYXJlIGB3cmFwYCBhbmQgYHdyYXAtcmV2ZXJzZWAuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4TGF5b3V0XG4gICAgICogICBpZ3hMYXlvdXREaXI9XCJyb3dcIlxuICAgICAqICAgaWd4TGF5b3V0V3JhcD1cIndyYXBcIj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleEdyb3c9XCIwXCI+MTwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4R3Jvdz1cIjBcIj4yPC9kaXY+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4IGlneEZsZXhHcm93PVwiMFwiPjM8L2Rpdj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneExheW91dFdyYXAnKSBwdWJsaWMgd3JhcCA9ICdub3dyYXAnO1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgYWxpZ25tZW50IGFsb25nIHRoZSBtYWluIGF4aXMuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0cyB0byBgZmxleC1zdGFydGAgd2hpY2ggcGFja3MgdGhlIGNoaWxkcmVuIHRvd2FyZCB0aGUgc3RhcnQgbGluZS5cbiAgICAgKlxuICAgICAqIE90aGVyIHBvc3NpYmxlIHZhbHVlcyBhcmUgYGZsZXgtZW5kYCwgYGNlbnRlcmAsIGBzcGFjZS1iZXR3ZWVuYCwgYHNwYWNlLWFyb3VuZGAuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4TGF5b3V0XG4gICAgICogICBpZ3hMYXlvdXREaXI9XCJjb2x1bW5cIlxuICAgICAqICAgaWd4TGF5b3V0SnVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgKiAgICA8ZGl2PjE8L2Rpdj5cbiAgICAgKiAgICA8ZGl2PjI8L2Rpdj5cbiAgICAgKiAgICA8ZGl2PjM8L2Rpdj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneExheW91dEp1c3RpZnknKSBwdWJsaWMganVzdGlmeSA9ICdmbGV4LXN0YXJ0JztcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgZm9yIGhvdyBjaGlsZHJlbiBhcmUgbGFpZCBvdXQgYWxvbmcgdGhlIGNvcnNzIGF4aXMgb2YgdGhlIGN1cnJlbnQgbGluZS5cbiAgICAgKlxuICAgICAqIERlZmF1bHRzIHRvIGBmbGV4LXN0YXJ0YC5cbiAgICAgKlxuICAgICAqIE90aGVyIHBvc3NpYmxlIHZhbHVlcyBhcmUgYGZsZXgtZW5kYCwgYGNlbnRlcmAsIGBiYXNlbGluZWAsIGFuZCBgc3RyZXRjaGAuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4TGF5b3V0XG4gICAgICogICBpZ3hMYXlvdXREaXI9XCJjb2x1bW5cIlxuICAgICAqICAgaWd4TGF5b3V0SXRlbUFsaWduPVwic3RhcnRcIj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleEdyb3c9XCIwXCI+MTwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4R3Jvdz1cIjBcIj4yPC9kaXY+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4IGlneEZsZXhHcm93PVwiMFwiPjM8L2Rpdj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneExheW91dEl0ZW1BbGlnbicpIHB1YmxpYyBpdGVtQWxpZ24gPSAnc3RyZXRjaCc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgcHVibGljIGRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4LXdyYXAnKSBnZXQgZmxleHdyYXAoKSB7IHJldHVybiB0aGlzLndyYXA7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmp1c3RpZnktY29udGVudCcpIGdldCBqdXN0aWZ5Y29udGVudCgpIHsgcmV0dXJuIHRoaXMuanVzdGlmeTsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuYWxpZ24taXRlbXMnKSBnZXQgYWxpZ24oKSB7IHJldHVybiB0aGlzLml0ZW1BbGlnbjsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZmxleC1kaXJlY3Rpb24nKVxuICAgIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnJldmVyc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5kaXIgPT09ICdyb3cnKSA/ICdyb3ctcmV2ZXJzZScgOiAnY29sdW1uLXJldmVyc2UnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5kaXIgPT09ICdyb3cnKSA/ICdyb3cnIDogJ2NvbHVtbic7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hGbGV4XSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RmxleERpcmVjdGl2ZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBgZ3Jvd2AgYXR0cmlidXRlIHRvIGFuIGVsZW1lbnQgdGhhdCB1c2VzIHRoZSBkaXJlY3RpdmUuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGAxYC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4R3Jvdz1cIjBcIj5Db250ZW50MTwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4R3Jvdz1cIjFcIj5Db250ZW50MjwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4R3Jvdz1cIjBcIj5Db250ZW50MzwvZGl2PlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4RmxleEdyb3cnKSBwdWJsaWMgZ3JvdyA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBgc2hyaW5rYCBhdHRyaWJ1dGUgdG8gYW4gZWxlbWVudCB0aGF0IHVzZXMgdGhlIGRpcmVjdGl2ZS5cbiAgICAgKlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYDFgLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXY+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4IGlneEZsZXhTaHJpbms9XCIxXCI+Q29udGVudDE8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleFNocmluaz1cIjBcIj5Db250ZW50MjwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4U2hyaW5rPVwiMVwiPkNvbnRlbnQzPC9kaXY+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hGbGV4U2hyaW5rJykgcHVibGljIHNocmluayA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBkaXJlY3RpdmUgdG8gYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlIGBpZ3hGbGV4R3Jvd2AsIGBpZ3hGbGV4U2hyaW5rYCwgYGlneEZsZXhPcmRlcmAsIGBpZ3hGbGV4QmFzaXNgLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgaWd4RmxleD5Db250ZW50PC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hGbGV4JykgcHVibGljIGZsZXggPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGBvcmRlcmAgYXR0cmlidXRlIHRvIGFuIGVsZW1lbnQgdGhhdCB1c2VzIHRoZSBkaXJlY3RpdmUuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGAwYC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4T3JkZXI9XCIxXCI+Q29udGVudDE8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleE9yZGVyPVwiMFwiPkNvbnRlbnQyPC9kaXY+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4IGlneEZsZXhPcmRlcj1cIjJcIj5Db250ZW50MzwvZGl2PlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4RmxleE9yZGVyJykgcHVibGljIG9yZGVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGBmbGV4LWJhc2lzYCBhdHRyaWJ1dGUgdG8gYW4gZWxlbWVudCB0aGF0IHVzZXMgdGhlIGRpcmVjdGl2ZS5cbiAgICAgKlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGF1dG9gLlxuICAgICAqXG4gICAgICogT3RoZXIgcG9zc2libGUgdmFsdWVzIGluY2x1ZGUgYGNvbnRlbnRgLCBgbWF4LWNvbnRlbnRgLCBgbWluLWNvbnRlbnRgLCBgZml0LWNvbnRlbnRgLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgaWd4RmxleCBpZ3hGbGV4QmFzaXM9XCJmaXQtY29udGVudFwiPkNvbnRlbnQ8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEZsZXhCYXNpcycpIHB1YmxpYyBiYXNpcyA9ICdhdXRvJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgnKVxuICAgIGdldCBzdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmxleCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuZmxleH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdyb3d9ICR7dGhpcy5zaHJpbmt9ICR7dGhpcy5iYXNpc31gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9yZGVyJylcbiAgICBnZXQgaXRlbW9yZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlciB8fCAwO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4RmxleERpcmVjdGl2ZSwgSWd4TGF5b3V0RGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4RmxleERpcmVjdGl2ZSwgSWd4TGF5b3V0RGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hMYXlvdXRNb2R1bGUgeyB9XG4iXX0=
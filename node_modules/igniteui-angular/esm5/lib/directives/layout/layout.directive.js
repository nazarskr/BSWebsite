/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, NgModule } from '@angular/core';
var IgxLayoutDirective = /** @class */ (function () {
    function IgxLayoutDirective() {
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
    Object.defineProperty(IgxLayoutDirective.prototype, "flexwrap", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () { return this.wrap; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLayoutDirective.prototype, "justifycontent", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () { return this.justify; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLayoutDirective.prototype, "align", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () { return this.itemAlign; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLayoutDirective.prototype, "direction", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this.reverse) {
                return (this.dir === 'row') ? 'row-reverse' : 'column-reverse';
            }
            return (this.dir === 'row') ? 'row' : 'column';
        },
        enumerable: true,
        configurable: true
    });
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
    return IgxLayoutDirective;
}());
export { IgxLayoutDirective };
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
var IgxFlexDirective = /** @class */ (function () {
    function IgxFlexDirective() {
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
    Object.defineProperty(IgxFlexDirective.prototype, "style", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this.flex) {
                return "" + this.flex;
            }
            return this.grow + " " + this.shrink + " " + this.basis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxFlexDirective.prototype, "itemorder", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.order || 0;
        },
        enumerable: true,
        configurable: true
    });
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
    return IgxFlexDirective;
}());
export { IgxFlexDirective };
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
var IgxLayoutModule = /** @class */ (function () {
    function IgxLayoutModule() {
    }
    IgxLayoutModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxFlexDirective, IgxLayoutDirective],
                    exports: [IgxFlexDirective, IgxLayoutDirective]
                },] }
    ];
    return IgxLayoutModule;
}());
export { IgxLayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9sYXlvdXQvbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RTtJQUFBOzs7Ozs7Ozs7Ozs7Ozs7O1FBbUJrQyxRQUFHLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1FBaUJSLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFvQm5CLFNBQUksR0FBRyxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFvQmIsWUFBTyxHQUFHLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW9CckIsY0FBUyxHQUFHLFNBQVMsQ0FBQzs7OztRQUtyQixZQUFPLEdBQUcsTUFBTSxDQUFDO0lBMkIxRCxDQUFDO0lBdEJHLHNCQUFvQyx3Q0FBUTtRQUg1Qzs7V0FFRzs7Ozs7UUFDSCxjQUFpRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUtwRSxzQkFBMEMsOENBQWM7UUFIeEQ7O1dBRUc7Ozs7O1FBQ0gsY0FBNkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFLbkYsc0JBQXNDLHFDQUFLO1FBSDNDOztXQUVHOzs7OztRQUNILGNBQWdELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBS3hFLHNCQUNJLHlDQUFTO1FBSmI7O1dBRUc7Ozs7O1FBQ0g7WUFFSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7YUFDbEU7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7O2dCQS9ISixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7aUJBQzFCOzs7c0JBaUJJLEtBQUssU0FBQyxjQUFjOzBCQWlCcEIsS0FBSyxTQUFDLGtCQUFrQjt1QkFvQnhCLEtBQUssU0FBQyxlQUFlOzBCQW9CckIsS0FBSyxTQUFDLGtCQUFrQjs0QkFvQnhCLEtBQUssU0FBQyxvQkFBb0I7MEJBSzFCLFdBQVcsU0FBQyxlQUFlOzJCQUszQixXQUFXLFNBQUMsaUJBQWlCO2lDQUs3QixXQUFXLFNBQUMsdUJBQXVCO3dCQUtuQyxXQUFXLFNBQUMsbUJBQW1COzRCQUsvQixXQUFXLFNBQUMsc0JBQXNCOztJQU92Qyx5QkFBQztDQUFBLEFBaElELElBZ0lDO1NBN0hZLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0IzQixpQ0FBMEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUIxQyxxQ0FBa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JsRCxrQ0FBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0IvQyxxQ0FBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0J6RCx1Q0FBMEQ7Ozs7O0lBSzFELHFDQUFzRDs7QUE2QjFEO0lBQUE7Ozs7Ozs7Ozs7Ozs7O1FBa0JpQyxTQUFJLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztRQWVQLFdBQU0sR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7UUFXakIsU0FBSSxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUFlTCxVQUFLLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7UUFhVixVQUFLLEdBQUcsTUFBTSxDQUFDO0lBb0JqRCxDQUFDO0lBZkcsc0JBQ0ksbUNBQUs7UUFKVDs7V0FFRzs7Ozs7UUFDSDtZQUVJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDWCxPQUFPLEtBQUcsSUFBSSxDQUFDLElBQU0sQ0FBQzthQUN6QjtZQUNELE9BQVUsSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsTUFBTSxTQUFJLElBQUksQ0FBQyxLQUFPLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSx1Q0FBUztRQUpiOztXQUVHOzs7OztRQUNIO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTs7Z0JBM0ZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztpQkFDeEI7Ozt1QkFnQkksS0FBSyxTQUFDLGFBQWE7eUJBZW5CLEtBQUssU0FBQyxlQUFlO3VCQVdyQixLQUFLLFNBQUMsU0FBUzt3QkFlZixLQUFLLFNBQUMsY0FBYzt3QkFhcEIsS0FBSyxTQUFDLGNBQWM7d0JBS3BCLFdBQVcsU0FBQyxZQUFZOzRCQVd4QixXQUFXLFNBQUMsYUFBYTs7SUFJOUIsdUJBQUM7Q0FBQSxBQTVGRCxJQTRGQztTQXpGWSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlekIsZ0NBQXNDOzs7Ozs7Ozs7Ozs7Ozs7SUFldEMsa0NBQTBDOzs7Ozs7Ozs7OztJQVcxQyxnQ0FBbUM7Ozs7Ozs7Ozs7Ozs7OztJQWVuQyxpQ0FBd0M7Ozs7Ozs7Ozs7Ozs7SUFheEMsaUNBQTZDOzs7OztBQXlCakQ7SUFBQTtJQUkrQixDQUFDOztnQkFKL0IsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO29CQUNwRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQztpQkFDbEQ7O0lBQzhCLHNCQUFDO0NBQUEsQUFKaEMsSUFJZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hMYXlvdXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hMYXlvdXREaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRlZmF1bHQgZmxvdyBkaXJlY3Rpb24gb2YgdGhlIGNvbnRhaW5lcidzIGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gYHJvd3NgLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8ZGl2XG4gICAgICogICBpZ3hMYXlvdXRcbiAgICAgKiAgIGlneExheW91dERpcj1cInJvd1wiPlxuICAgICAqICAgIDxkaXYgaWd4RmxleD4xPC9kaXY+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4PjI8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXg+MzwvZGl2PlxuICAgICAqICA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneExheW91dERpcicpIHB1YmxpYyBkaXIgPSAncm93JztcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGRpcmVjdGlvbiBmbGV4IGNoaWxkcmVuIGFyZSBwbGFjZWQgaW4gdGhlIGZsZXggY29udGFpbmVyLlxuICAgICAqXG4gICAgICogV2hlbiBzZXQgdG8gYHRydWVgLCB0aGUgYHJvd3NgIGRpcmVjdGlvbiBnb2VzIHJpZ2h0IHRvIGxlZnQgYW5kIGBjb2x1bW5zYCBnb2VzIGJvdHRvbSB0byB0b3AuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4TGF5b3V0XG4gICAgICogICBpZ3hMYXlvdXRSZXZlcnNlPVwidHJ1ZVwiPlxuICAgICAqICAgIDxkaXYgaWd4RmxleD4xPC9kaXY+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4PjI8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXg+MzwvZGl2PlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4TGF5b3V0UmV2ZXJzZScpIHB1YmxpYyByZXZlcnNlID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBpbW1lZGlhdGUgY2hpbGRyZW4gd2lsbCBhbGwgdHJ5IHRvIGZpdCBvbnRvIG9uZSBsaW5lLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgYG5vd3JhcGAgc2V0cyB0aGlzIGJlaGF2aW9yLlxuICAgICAqXG4gICAgICogT3RoZXIgYWNjZXB0ZWQgdmFsdWVzIGFyZSBgd3JhcGAgYW5kIGB3cmFwLXJldmVyc2VgLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXZcbiAgICAgKiAgIGlneExheW91dFxuICAgICAqICAgaWd4TGF5b3V0RGlyPVwicm93XCJcbiAgICAgKiAgIGlneExheW91dFdyYXA9XCJ3cmFwXCI+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4IGlneEZsZXhHcm93PVwiMFwiPjE8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleEdyb3c9XCIwXCI+MjwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4R3Jvdz1cIjBcIj4zPC9kaXY+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hMYXlvdXRXcmFwJykgcHVibGljIHdyYXAgPSAnbm93cmFwJztcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGFsaWdubWVudCBhbG9uZyB0aGUgbWFpbiBheGlzLlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gYGZsZXgtc3RhcnRgIHdoaWNoIHBhY2tzIHRoZSBjaGlsZHJlbiB0b3dhcmQgdGhlIHN0YXJ0IGxpbmUuXG4gICAgICpcbiAgICAgKiBPdGhlciBwb3NzaWJsZSB2YWx1ZXMgYXJlIGBmbGV4LWVuZGAsIGBjZW50ZXJgLCBgc3BhY2UtYmV0d2VlbmAsIGBzcGFjZS1hcm91bmRgLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXZcbiAgICAgKiAgIGlneExheW91dFxuICAgICAqICAgaWd4TGF5b3V0RGlyPVwiY29sdW1uXCJcbiAgICAgKiAgIGlneExheW91dEp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICogICAgPGRpdj4xPC9kaXY+XG4gICAgICogICAgPGRpdj4yPC9kaXY+XG4gICAgICogICAgPGRpdj4zPC9kaXY+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hMYXlvdXRKdXN0aWZ5JykgcHVibGljIGp1c3RpZnkgPSAnZmxleC1zdGFydCc7XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvciBob3cgY2hpbGRyZW4gYXJlIGxhaWQgb3V0IGFsb25nIHRoZSBjb3JzcyBheGlzIG9mIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0cyB0byBgZmxleC1zdGFydGAuXG4gICAgICpcbiAgICAgKiBPdGhlciBwb3NzaWJsZSB2YWx1ZXMgYXJlIGBmbGV4LWVuZGAsIGBjZW50ZXJgLCBgYmFzZWxpbmVgLCBhbmQgYHN0cmV0Y2hgLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXZcbiAgICAgKiAgIGlneExheW91dFxuICAgICAqICAgaWd4TGF5b3V0RGlyPVwiY29sdW1uXCJcbiAgICAgKiAgIGlneExheW91dEl0ZW1BbGlnbj1cInN0YXJ0XCI+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4IGlneEZsZXhHcm93PVwiMFwiPjE8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleEdyb3c9XCIwXCI+MjwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4R3Jvdz1cIjBcIj4zPC9kaXY+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hMYXlvdXRJdGVtQWxpZ24nKSBwdWJsaWMgaXRlbUFsaWduID0gJ3N0cmV0Y2gnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIHB1YmxpYyBkaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZmxleC13cmFwJykgZ2V0IGZsZXh3cmFwKCkgeyByZXR1cm4gdGhpcy53cmFwOyB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5qdXN0aWZ5LWNvbnRlbnQnKSBnZXQganVzdGlmeWNvbnRlbnQoKSB7IHJldHVybiB0aGlzLmp1c3RpZnk7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmFsaWduLWl0ZW1zJykgZ2V0IGFsaWduKCkgeyByZXR1cm4gdGhpcy5pdGVtQWxpZ247IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgtZGlyZWN0aW9uJylcbiAgICBnZXQgZGlyZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5yZXZlcnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZGlyID09PSAncm93JykgPyAncm93LXJldmVyc2UnIDogJ2NvbHVtbi1yZXZlcnNlJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuZGlyID09PSAncm93JykgPyAncm93JyA6ICdjb2x1bW4nO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RmxleF0nXG59KVxuZXhwb3J0IGNsYXNzIElneEZsZXhEaXJlY3RpdmUge1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgYGdyb3dgIGF0dHJpYnV0ZSB0byBhbiBlbGVtZW50IHRoYXQgdXNlcyB0aGUgZGlyZWN0aXZlLlxuICAgICAqXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgMWAuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleEdyb3c9XCIwXCI+Q29udGVudDE8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleEdyb3c9XCIxXCI+Q29udGVudDI8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleEdyb3c9XCIwXCI+Q29udGVudDM8L2Rpdj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEZsZXhHcm93JykgcHVibGljIGdyb3cgPSAxO1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgYHNocmlua2AgYXR0cmlidXRlIHRvIGFuIGVsZW1lbnQgdGhhdCB1c2VzIHRoZSBkaXJlY3RpdmUuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGAxYC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4U2hyaW5rPVwiMVwiPkNvbnRlbnQxPC9kaXY+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4IGlneEZsZXhTaHJpbms9XCIwXCI+Q29udGVudDI8L2Rpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleFNocmluaz1cIjFcIj5Db250ZW50MzwvZGl2PlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4RmxleFNocmluaycpIHB1YmxpYyBzaHJpbmsgPSAxO1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgZGlyZWN0aXZlIHRvIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZSBgaWd4RmxleEdyb3dgLCBgaWd4RmxleFNocmlua2AsIGBpZ3hGbGV4T3JkZXJgLCBgaWd4RmxleEJhc2lzYC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneEZsZXg+Q29udGVudDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4RmxleCcpIHB1YmxpYyBmbGV4ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBgb3JkZXJgIGF0dHJpYnV0ZSB0byBhbiBlbGVtZW50IHRoYXQgdXNlcyB0aGUgZGlyZWN0aXZlLlxuICAgICAqXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgMGAuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdj5cbiAgICAgKiAgICA8ZGl2IGlneEZsZXggaWd4RmxleE9yZGVyPVwiMVwiPkNvbnRlbnQxPC9kaXY+XG4gICAgICogICAgPGRpdiBpZ3hGbGV4IGlneEZsZXhPcmRlcj1cIjBcIj5Db250ZW50MjwvZGl2PlxuICAgICAqICAgIDxkaXYgaWd4RmxleCBpZ3hGbGV4T3JkZXI9XCIyXCI+Q29udGVudDM8L2Rpdj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEZsZXhPcmRlcicpIHB1YmxpYyBvcmRlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBgZmxleC1iYXNpc2AgYXR0cmlidXRlIHRvIGFuIGVsZW1lbnQgdGhhdCB1c2VzIHRoZSBkaXJlY3RpdmUuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBhdXRvYC5cbiAgICAgKlxuICAgICAqIE90aGVyIHBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlIGBjb250ZW50YCwgYG1heC1jb250ZW50YCwgYG1pbi1jb250ZW50YCwgYGZpdC1jb250ZW50YC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneEZsZXggaWd4RmxleEJhc2lzPVwiZml0LWNvbnRlbnRcIj5Db250ZW50PC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hGbGV4QmFzaXMnKSBwdWJsaWMgYmFzaXMgPSAnYXV0byc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4JylcbiAgICBnZXQgc3R5bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmZsZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmZsZXh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5ncm93fSAke3RoaXMuc2hyaW5rfSAke3RoaXMuYmFzaXN9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vcmRlcicpXG4gICAgZ2V0IGl0ZW1vcmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXIgfHwgMDtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneEZsZXhEaXJlY3RpdmUsIElneExheW91dERpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneEZsZXhEaXJlY3RpdmUsIElneExheW91dERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4TGF5b3V0TW9kdWxlIHsgfVxuIl19
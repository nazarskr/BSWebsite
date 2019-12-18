/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, NgModule, Input } from '@angular/core';
/** @enum {string} */
const IgxDividerType = {
    DEFAULT: 'default',
    DASHED: 'dashed',
};
export { IgxDividerType };
/** @type {?} */
let NEXT_ID = 0;
export class IgxDividerDirective {
    constructor() {
        /**
         * Sets/gets the `id` of the divider.
         * If not set, `id` will have value `"igx-divider-0"`;
         * ```html
         * <igx-divider id="my-divider"></igx-divider>
         * ```
         * ```typescript
         * let dividerId =  this.divider.id;
         * ```
         */
        this.id = `igx-divider-${NEXT_ID++}`;
        /**
         * An \@Input property that sets the value of the `inset` attribute.
         * If not provided it will be set to `'0'`.
         * ```html
         * <igx-divider inset="16px"></igx-divider>
         * ```
         */
        this._inset = '0';
        /**
         * An \@Input property that sets the value of `role` attribute.
         * If not the default value of `separator` will be used.
         */
        this.role = 'separator';
        /**
         * Sets the type of the divider. The default value
         * is `default`. The divider can also be `dashed`;
         * ```html
         * <igx-divider type="dashed"></igx-divider>
         * ```
         */
        this.type = IgxDividerType.DEFAULT;
        /**
         * An \@Input that sets the `middle` attribute of the divider.
         * If set to `true` and an `inset` value has been provided,
         * the divider will start shrinking from both ends.
         * ```html
         * <igx-divider [middle]="true"></igx-divider>
         * ```
         */
        this.middle = false;
        /**
         * An \@Input that sets the vertical attribute of the divider.
         * ```html
         * <igx-divider [vertical]="true"></igx-divider>
         * ```
         */
        this.vertical = false;
    }
    /**
     * @return {?}
     */
    get isDashed() {
        return this.type === IgxDividerType.DASHED;
    }
    /**
     * A getter that returns `true` if the type of the divider is `default`;
     * ```typescript
     * const isDefault = this.divider.isDefault;
     * ```
     * @return {?}
     */
    get isDefault() {
        return this.type === IgxDividerType.DEFAULT;
    }
    /**
     * Sets the inset of the divider from the side(s).
     * If the divider attribute `middle` is set to `true`,
     * it will inset the divider on both sides.
     * ```typescript
     * this.divider.inset = '32px';
     * ```
     * @param {?} value
     * @return {?}
     */
    set inset(value) {
        this._inset = value;
    }
    /**
     * Gets the current divider inset in terms of
     * margin representation as applied to the divider.
     * ```typescript
     * const inset = this.divider.inset;
     * ```
     * @return {?}
     */
    get inset() {
        /** @type {?} */
        const baseMargin = '0';
        if (this.middle) {
            if (this.vertical) {
                return `${this._inset} ${baseMargin}`;
            }
            return `${baseMargin} ${this._inset}`;
        }
        else {
            if (this.vertical) {
                return `${this._inset} ${baseMargin} 0 ${baseMargin}`;
            }
            return `${baseMargin} 0 ${baseMargin} ${this._inset}`;
        }
    }
}
IgxDividerDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'igx-divider'
            },] }
];
IgxDividerDirective.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    _inset: [{ type: Input, args: ['inset',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }],
    type: [{ type: HostBinding, args: ['class.igx-divider',] }, { type: Input }],
    isDashed: [{ type: HostBinding, args: ['class.igx-divider--dashed',] }],
    middle: [{ type: HostBinding, args: ['class.igx-divider--inset',] }, { type: Input }],
    vertical: [{ type: HostBinding, args: ['class.igx-divider--vertical',] }, { type: Input }],
    inset: [{ type: HostBinding, args: ['style.margin',] }]
};
if (false) {
    /**
     * Sets/gets the `id` of the divider.
     * If not set, `id` will have value `"igx-divider-0"`;
     * ```html
     * <igx-divider id="my-divider"></igx-divider>
     * ```
     * ```typescript
     * let dividerId =  this.divider.id;
     * ```
     * @type {?}
     */
    IgxDividerDirective.prototype.id;
    /**
     * An \@Input property that sets the value of the `inset` attribute.
     * If not provided it will be set to `'0'`.
     * ```html
     * <igx-divider inset="16px"></igx-divider>
     * ```
     * @type {?}
     * @private
     */
    IgxDividerDirective.prototype._inset;
    /**
     * An \@Input property that sets the value of `role` attribute.
     * If not the default value of `separator` will be used.
     * @type {?}
     */
    IgxDividerDirective.prototype.role;
    /**
     * Sets the type of the divider. The default value
     * is `default`. The divider can also be `dashed`;
     * ```html
     * <igx-divider type="dashed"></igx-divider>
     * ```
     * @type {?}
     */
    IgxDividerDirective.prototype.type;
    /**
     * An \@Input that sets the `middle` attribute of the divider.
     * If set to `true` and an `inset` value has been provided,
     * the divider will start shrinking from both ends.
     * ```html
     * <igx-divider [middle]="true"></igx-divider>
     * ```
     * @type {?}
     */
    IgxDividerDirective.prototype.middle;
    /**
     * An \@Input that sets the vertical attribute of the divider.
     * ```html
     * <igx-divider [vertical]="true"></igx-divider>
     * ```
     * @type {?}
     */
    IgxDividerDirective.prototype.vertical;
}
export class IgxDividerModule {
}
IgxDividerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxDividerDirective],
                exports: [IgxDividerDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZGl2aWRlci9kaXZpZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBR3BFLFNBQVUsU0FBUztJQUNuQixRQUFTLFFBQVE7Ozs7SUFHakIsT0FBTyxHQUFHLENBQUM7QUFNZixNQUFNLE9BQU8sbUJBQW1CO0lBSmhDOzs7Ozs7Ozs7OztRQWlCVyxPQUFFLEdBQUcsZUFBZSxPQUFPLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OztRQVcvQixXQUFNLEdBQUcsR0FBRyxDQUFDOzs7OztRQVFkLFNBQUksR0FBRyxXQUFXLENBQUM7Ozs7Ozs7O1FBV25CLFNBQUksR0FBNEIsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7Ozs7Ozs7O1FBaUJ2RCxXQUFNLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O1FBb0JmLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFxQzVCLENBQUM7Ozs7SUF4RUcsSUFDSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQzs7Ozs7Ozs7SUFvQkQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7Ozs7Ozs7Ozs7SUFvQkQsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7Ozs7Ozs7SUFTRCxJQUFJLEtBQUs7O2NBQ0MsVUFBVSxHQUFHLEdBQUc7UUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQ3pDO1lBQ0QsT0FBTyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDekM7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sVUFBVSxFQUFFLENBQUM7YUFDekQ7WUFDRCxPQUFPLEdBQUcsVUFBVSxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDekQ7SUFDTCxDQUFDOzs7WUF4SEosU0FBUyxTQUFDOztnQkFFUCxRQUFRLEVBQUUsYUFBYTthQUMxQjs7O2lCQVlJLFdBQVcsU0FBQyxTQUFTLGNBQ3JCLEtBQUs7cUJBV0wsS0FBSyxTQUFDLE9BQU87bUJBT2IsV0FBVyxTQUFDLFdBQVcsY0FDdkIsS0FBSzttQkFVTCxXQUFXLFNBQUMsbUJBQW1CLGNBQy9CLEtBQUs7dUJBR0wsV0FBVyxTQUFDLDJCQUEyQjtxQkFhdkMsV0FBVyxTQUFDLDBCQUEwQixjQUN0QyxLQUFLO3VCQW1CTCxXQUFXLFNBQUMsNkJBQTZCLGNBQ3pDLEtBQUs7b0JBV0wsV0FBVyxTQUFDLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0lBL0UzQixpQ0FFdUM7Ozs7Ozs7Ozs7SUFVdkMscUNBQ3FCOzs7Ozs7SUFNckIsbUNBRTBCOzs7Ozs7Ozs7SUFTMUIsbUNBRThEOzs7Ozs7Ozs7O0lBZTlELHFDQUVzQjs7Ozs7Ozs7SUFrQnRCLHVDQUV3Qjs7QUEyQzVCLE1BQU0sT0FBTyxnQkFBZ0I7OztZQUo1QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgTmdNb2R1bGUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIElneERpdmlkZXJUeXBlIHtcbiAgICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAgIERBU0hFRCA9ICdkYXNoZWQnXG59XG5cbmxldCBORVhUX0lEID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnaWd4LWRpdmlkZXInXG59KVxuZXhwb3J0IGNsYXNzIElneERpdmlkZXJEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgZGl2aWRlci5cbiAgICAgKiBJZiBub3Qgc2V0LCBgaWRgIHdpbGwgaGF2ZSB2YWx1ZSBgXCJpZ3gtZGl2aWRlci0wXCJgO1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRpdmlkZXIgaWQ9XCJteS1kaXZpZGVyXCI+PC9pZ3gtZGl2aWRlcj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGRpdmlkZXJJZCA9ICB0aGlzLmRpdmlkZXIuaWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtZGl2aWRlci0ke05FWFRfSUQrK31gO1xuXG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGluc2V0YCBhdHRyaWJ1dGUuXG4gICAgICogSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgc2V0IHRvIGAnMCdgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRpdmlkZXIgaW5zZXQ9XCIxNnB4XCI+PC9pZ3gtZGl2aWRlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2luc2V0JylcbiAgICBwcml2YXRlIF9pbnNldCA9ICcwJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIGByb2xlYCBhdHRyaWJ1dGUuXG4gICAgICogSWYgbm90IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGBzZXBhcmF0b3JgIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm9sZSA9ICdzZXBhcmF0b3InO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdHlwZSBvZiB0aGUgZGl2aWRlci4gVGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgKiBpcyBgZGVmYXVsdGAuIFRoZSBkaXZpZGVyIGNhbiBhbHNvIGJlIGBkYXNoZWRgO1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRpdmlkZXIgdHlwZT1cImRhc2hlZFwiPjwvaWd4LWRpdmlkZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZGl2aWRlcicpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHlwZTogSWd4RGl2aWRlclR5cGUgfCBzdHJpbmcgPSBJZ3hEaXZpZGVyVHlwZS5ERUZBVUxUO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZGl2aWRlci0tZGFzaGVkJylcbiAgICBnZXQgaXNEYXNoZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IElneERpdmlkZXJUeXBlLkRBU0hFRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgdGhhdCBzZXRzIHRoZSBgbWlkZGxlYCBhdHRyaWJ1dGUgb2YgdGhlIGRpdmlkZXIuXG4gICAgICogSWYgc2V0IHRvIGB0cnVlYCBhbmQgYW4gYGluc2V0YCB2YWx1ZSBoYXMgYmVlbiBwcm92aWRlZCxcbiAgICAgKiB0aGUgZGl2aWRlciB3aWxsIHN0YXJ0IHNocmlua2luZyBmcm9tIGJvdGggZW5kcy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kaXZpZGVyIFttaWRkbGVdPVwidHJ1ZVwiPjwvaWd4LWRpdmlkZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZGl2aWRlci0taW5zZXQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1pZGRsZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSBnZXR0ZXIgdGhhdCByZXR1cm5zIGB0cnVlYCBpZiB0aGUgdHlwZSBvZiB0aGUgZGl2aWRlciBpcyBgZGVmYXVsdGA7XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGlzRGVmYXVsdCA9IHRoaXMuZGl2aWRlci5pc0RlZmF1bHQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IGlzRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gSWd4RGl2aWRlclR5cGUuREVGQVVMVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgdGhhdCBzZXRzIHRoZSB2ZXJ0aWNhbCBhdHRyaWJ1dGUgb2YgdGhlIGRpdmlkZXIuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiPjwvaWd4LWRpdmlkZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZGl2aWRlci0tdmVydGljYWwnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZlcnRpY2FsID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpbnNldCBvZiB0aGUgZGl2aWRlciBmcm9tIHRoZSBzaWRlKHMpLlxuICAgICAqIElmIHRoZSBkaXZpZGVyIGF0dHJpYnV0ZSBgbWlkZGxlYCBpcyBzZXQgdG8gYHRydWVgLFxuICAgICAqIGl0IHdpbGwgaW5zZXQgdGhlIGRpdmlkZXIgb24gYm90aCBzaWRlcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5kaXZpZGVyLmluc2V0ID0gJzMycHgnO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJylcbiAgICBzZXQgaW5zZXQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pbnNldCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgZGl2aWRlciBpbnNldCBpbiB0ZXJtcyBvZlxuICAgICAqIG1hcmdpbiByZXByZXNlbnRhdGlvbiBhcyBhcHBsaWVkIHRvIHRoZSBkaXZpZGVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBpbnNldCA9IHRoaXMuZGl2aWRlci5pbnNldDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgaW5zZXQoKSB7XG4gICAgICAgIGNvbnN0IGJhc2VNYXJnaW4gPSAnMCc7XG5cbiAgICAgICAgaWYgKHRoaXMubWlkZGxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLl9pbnNldH0gJHtiYXNlTWFyZ2lufWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7YmFzZU1hcmdpbn0gJHt0aGlzLl9pbnNldH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5faW5zZXR9ICR7YmFzZU1hcmdpbn0gMCAke2Jhc2VNYXJnaW59YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtiYXNlTWFyZ2lufSAwICR7YmFzZU1hcmdpbn0gJHt0aGlzLl9pbnNldH1gO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneERpdmlkZXJEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hEaXZpZGVyRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hEaXZpZGVyTW9kdWxlIHsgfVxuIl19
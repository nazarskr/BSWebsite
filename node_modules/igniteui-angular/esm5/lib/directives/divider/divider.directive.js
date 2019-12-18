/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, NgModule, Input } from '@angular/core';
/** @enum {string} */
var IgxDividerType = {
    DEFAULT: 'default',
    DASHED: 'dashed',
};
export { IgxDividerType };
/** @type {?} */
var NEXT_ID = 0;
var IgxDividerDirective = /** @class */ (function () {
    function IgxDividerDirective() {
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
        this.id = "igx-divider-" + NEXT_ID++;
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
    Object.defineProperty(IgxDividerDirective.prototype, "isDashed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === IgxDividerType.DASHED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDividerDirective.prototype, "isDefault", {
        /**
         * A getter that returns `true` if the type of the divider is `default`;
         * ```typescript
         * const isDefault = this.divider.isDefault;
         * ```
         */
        get: /**
         * A getter that returns `true` if the type of the divider is `default`;
         * ```typescript
         * const isDefault = this.divider.isDefault;
         * ```
         * @return {?}
         */
        function () {
            return this.type === IgxDividerType.DEFAULT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDividerDirective.prototype, "inset", {
        /**
         * Gets the current divider inset in terms of
         * margin representation as applied to the divider.
         * ```typescript
         * const inset = this.divider.inset;
         * ```
         */
        get: /**
         * Gets the current divider inset in terms of
         * margin representation as applied to the divider.
         * ```typescript
         * const inset = this.divider.inset;
         * ```
         * @return {?}
         */
        function () {
            /** @type {?} */
            var baseMargin = '0';
            if (this.middle) {
                if (this.vertical) {
                    return this._inset + " " + baseMargin;
                }
                return baseMargin + " " + this._inset;
            }
            else {
                if (this.vertical) {
                    return this._inset + " " + baseMargin + " 0 " + baseMargin;
                }
                return baseMargin + " 0 " + baseMargin + " " + this._inset;
            }
        },
        /**
         * Sets the inset of the divider from the side(s).
         * If the divider attribute `middle` is set to `true`,
         * it will inset the divider on both sides.
         * ```typescript
         * this.divider.inset = '32px';
         * ```
         */
        set: /**
         * Sets the inset of the divider from the side(s).
         * If the divider attribute `middle` is set to `true`,
         * it will inset the divider on both sides.
         * ```typescript
         * this.divider.inset = '32px';
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._inset = value;
        },
        enumerable: true,
        configurable: true
    });
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
    return IgxDividerDirective;
}());
export { IgxDividerDirective };
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
var IgxDividerModule = /** @class */ (function () {
    function IgxDividerModule() {
    }
    IgxDividerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxDividerDirective],
                    exports: [IgxDividerDirective]
                },] }
    ];
    return IgxDividerModule;
}());
export { IgxDividerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZGl2aWRlci9kaXZpZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBR3BFLFNBQVUsU0FBUztJQUNuQixRQUFTLFFBQVE7Ozs7SUFHakIsT0FBTyxHQUFHLENBQUM7QUFFZjtJQUFBOzs7Ozs7Ozs7OztRQWlCVyxPQUFFLEdBQUcsaUJBQWUsT0FBTyxFQUFJLENBQUM7Ozs7Ozs7O1FBVy9CLFdBQU0sR0FBRyxHQUFHLENBQUM7Ozs7O1FBUWQsU0FBSSxHQUFHLFdBQVcsQ0FBQzs7Ozs7Ozs7UUFXbkIsU0FBSSxHQUE0QixjQUFjLENBQUMsT0FBTyxDQUFDOzs7Ozs7Ozs7UUFpQnZELFdBQU0sR0FBRyxLQUFLLENBQUM7Ozs7Ozs7UUFvQmYsYUFBUSxHQUFHLEtBQUssQ0FBQztJQXFDNUIsQ0FBQztJQXhFRyxzQkFDSSx5Q0FBUTs7OztRQURaO1lBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFvQkQsc0JBQUksMENBQVM7UUFOYjs7Ozs7V0FLRzs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBb0JELHNCQUNJLHNDQUFLO1FBSVQ7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDs7Z0JBQ1UsVUFBVSxHQUFHLEdBQUc7WUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDZixPQUFVLElBQUksQ0FBQyxNQUFNLFNBQUksVUFBWSxDQUFDO2lCQUN6QztnQkFDRCxPQUFVLFVBQVUsU0FBSSxJQUFJLENBQUMsTUFBUSxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDZixPQUFVLElBQUksQ0FBQyxNQUFNLFNBQUksVUFBVSxXQUFNLFVBQVksQ0FBQztpQkFDekQ7Z0JBQ0QsT0FBVSxVQUFVLFdBQU0sVUFBVSxTQUFJLElBQUksQ0FBQyxNQUFRLENBQUM7YUFDekQ7UUFDTCxDQUFDO1FBbENEOzs7Ozs7O1dBT0c7Ozs7Ozs7Ozs7O1FBQ0gsVUFDVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOztnQkFqR0osU0FBUyxTQUFDOztvQkFFUCxRQUFRLEVBQUUsYUFBYTtpQkFDMUI7OztxQkFZSSxXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLO3lCQVdMLEtBQUssU0FBQyxPQUFPO3VCQU9iLFdBQVcsU0FBQyxXQUFXLGNBQ3ZCLEtBQUs7dUJBVUwsV0FBVyxTQUFDLG1CQUFtQixjQUMvQixLQUFLOzJCQUdMLFdBQVcsU0FBQywyQkFBMkI7eUJBYXZDLFdBQVcsU0FBQywwQkFBMEIsY0FDdEMsS0FBSzsyQkFtQkwsV0FBVyxTQUFDLDZCQUE2QixjQUN6QyxLQUFLO3dCQVdMLFdBQVcsU0FBQyxjQUFjOztJQTJCL0IsMEJBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXJIWSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7SUFXNUIsaUNBRXVDOzs7Ozs7Ozs7O0lBVXZDLHFDQUNxQjs7Ozs7O0lBTXJCLG1DQUUwQjs7Ozs7Ozs7O0lBUzFCLG1DQUU4RDs7Ozs7Ozs7OztJQWU5RCxxQ0FFc0I7Ozs7Ozs7O0lBa0J0Qix1Q0FFd0I7O0FBdUM1QjtJQUFBO0lBSWdDLENBQUM7O2dCQUpoQyxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQzs7SUFDK0IsdUJBQUM7Q0FBQSxBQUpqQyxJQUlpQztTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBOZ01vZHVsZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gSWd4RGl2aWRlclR5cGUge1xuICAgIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gICAgREFTSEVEID0gJ2Rhc2hlZCdcbn1cblxubGV0IE5FWFRfSUQgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdpZ3gtZGl2aWRlcidcbn0pXG5leHBvcnQgY2xhc3MgSWd4RGl2aWRlckRpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSBkaXZpZGVyLlxuICAgICAqIElmIG5vdCBzZXQsIGBpZGAgd2lsbCBoYXZlIHZhbHVlIGBcImlneC1kaXZpZGVyLTBcImA7XG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZGl2aWRlciBpZD1cIm15LWRpdmlkZXJcIj48L2lneC1kaXZpZGVyPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZGl2aWRlcklkID0gIHRoaXMuZGl2aWRlci5pZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1kaXZpZGVyLSR7TkVYVF9JRCsrfWA7XG5cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaW5zZXRgIGF0dHJpYnV0ZS5cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBzZXQgdG8gYCcwJ2AuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZGl2aWRlciBpbnNldD1cIjE2cHhcIj48L2lneC1kaXZpZGVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaW5zZXQnKVxuICAgIHByaXZhdGUgX2luc2V0ID0gJzAnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgYHJvbGVgIGF0dHJpYnV0ZS5cbiAgICAgKiBJZiBub3QgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYHNlcGFyYXRvcmAgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByb2xlID0gJ3NlcGFyYXRvcic7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0eXBlIG9mIHRoZSBkaXZpZGVyLiBUaGUgZGVmYXVsdCB2YWx1ZVxuICAgICAqIGlzIGBkZWZhdWx0YC4gVGhlIGRpdmlkZXIgY2FuIGFsc28gYmUgYGRhc2hlZGA7XG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZGl2aWRlciB0eXBlPVwiZGFzaGVkXCI+PC9pZ3gtZGl2aWRlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kaXZpZGVyJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0eXBlOiBJZ3hEaXZpZGVyVHlwZSB8IHN0cmluZyA9IElneERpdmlkZXJUeXBlLkRFRkFVTFQ7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kaXZpZGVyLS1kYXNoZWQnKVxuICAgIGdldCBpc0Rhc2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gSWd4RGl2aWRlclR5cGUuREFTSEVEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCB0aGF0IHNldHMgdGhlIGBtaWRkbGVgIGF0dHJpYnV0ZSBvZiB0aGUgZGl2aWRlci5cbiAgICAgKiBJZiBzZXQgdG8gYHRydWVgIGFuZCBhbiBgaW5zZXRgIHZhbHVlIGhhcyBiZWVuIHByb3ZpZGVkLFxuICAgICAqIHRoZSBkaXZpZGVyIHdpbGwgc3RhcnQgc2hyaW5raW5nIGZyb20gYm90aCBlbmRzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRpdmlkZXIgW21pZGRsZV09XCJ0cnVlXCI+PC9pZ3gtZGl2aWRlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kaXZpZGVyLS1pbnNldCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWlkZGxlID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGdldHRlciB0aGF0IHJldHVybnMgYHRydWVgIGlmIHRoZSB0eXBlIG9mIHRoZSBkaXZpZGVyIGlzIGBkZWZhdWx0YDtcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgaXNEZWZhdWx0ID0gdGhpcy5kaXZpZGVyLmlzRGVmYXVsdDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgaXNEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBJZ3hEaXZpZGVyVHlwZS5ERUZBVUxUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCB0aGF0IHNldHMgdGhlIHZlcnRpY2FsIGF0dHJpYnV0ZSBvZiB0aGUgZGl2aWRlci5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kaXZpZGVyIFt2ZXJ0aWNhbF09XCJ0cnVlXCI+PC9pZ3gtZGl2aWRlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kaXZpZGVyLS12ZXJ0aWNhbCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmVydGljYWwgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluc2V0IG9mIHRoZSBkaXZpZGVyIGZyb20gdGhlIHNpZGUocykuXG4gICAgICogSWYgdGhlIGRpdmlkZXIgYXR0cmlidXRlIGBtaWRkbGVgIGlzIHNldCB0byBgdHJ1ZWAsXG4gICAgICogaXQgd2lsbCBpbnNldCB0aGUgZGl2aWRlciBvbiBib3RoIHNpZGVzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmRpdmlkZXIuaW5zZXQgPSAnMzJweCc7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4nKVxuICAgIHNldCBpbnNldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2luc2V0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBkaXZpZGVyIGluc2V0IGluIHRlcm1zIG9mXG4gICAgICogbWFyZ2luIHJlcHJlc2VudGF0aW9uIGFzIGFwcGxpZWQgdG8gdGhlIGRpdmlkZXIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGluc2V0ID0gdGhpcy5kaXZpZGVyLmluc2V0O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBpbnNldCgpIHtcbiAgICAgICAgY29uc3QgYmFzZU1hcmdpbiA9ICcwJztcblxuICAgICAgICBpZiAodGhpcy5taWRkbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuX2luc2V0fSAke2Jhc2VNYXJnaW59YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtiYXNlTWFyZ2lufSAke3RoaXMuX2luc2V0fWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLl9pbnNldH0gJHtiYXNlTWFyZ2lufSAwICR7YmFzZU1hcmdpbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke2Jhc2VNYXJnaW59IDAgJHtiYXNlTWFyZ2lufSAke3RoaXMuX2luc2V0fWA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4RGl2aWRlckRpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneERpdmlkZXJEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIElneERpdmlkZXJNb2R1bGUgeyB9XG4iXX0=
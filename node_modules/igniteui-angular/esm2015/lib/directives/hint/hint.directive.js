/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
/** @enum {number} */
const IgxHintPosition = {
    START: 0,
    END: 1,
};
IgxHintPosition[IgxHintPosition.START] = 'START';
IgxHintPosition[IgxHintPosition.END] = 'END';
export class IgxHintDirective {
    /**
     * @param {?} _element
     */
    constructor(_element) {
        this._element = _element;
        this._position = IgxHintPosition.START;
        /**
         * Sets/gets whether the hint position is at the start.
         * Default value is `false`.
         * ```typescript
         * \@ViewChild('hint', {read: IgxHintDirective})
         * public igxHint: IgxHintDirective;
         * this.igxHint.isPositionStart = true;
         * ```
         * ```typescript
         * let isHintPositionStart = this.igxHint.isPositionStart;
         * ```
         * \@memberof IgxHintDirective
         */
        this.isPositionStart = false;
        /**
         * Sets/gets whether the hint position is at the end.
         * Default value is `false`.
         * ```typescript
         * \@ViewChild('hint', {read: IgxHintDirective})
         * public igxHint: IgxHintDirective;
         * this.igxHint.isPositionEnd = true;
         * ```
         * ```typescript
         * let isHintPositionEnd = this.igxHint.isPositionEnd;
         * ```
         * \@memberof IgxHintDirective
         */
        this.isPositionEnd = false;
    }
    /**
     * Sets the position of the hint.
     * ```html
     * <igx-input-group>
     *  <input igxInput type="text"/>
     *  <igx-hint #hint [position]="'start'">IgxHint displayed at the start</igx-hint>
     * </igx-input-group>
     * ```
     * \@memberof IgxHintDirective
     * @param {?} value
     * @return {?}
     */
    set position(value) {
        /** @type {?} */
        const position = ((/** @type {?} */ (IgxHintPosition)))[value.toUpperCase()];
        if (position !== undefined) {
            this._position = position;
            this._applyPosition(this._position);
        }
    }
    /**
     * Gets the position of the hint.
     * ```typescript
     * \@ViewChild('hint', {read: IgxHintDirective})
     * public igxHint: IgxHintDirective;
     * let hintPosition =  this.igxHint.position;
     * ```
     * \@memberof IgxHintDirective
     * @return {?}
     */
    get position() {
        return this._position.toString();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this._applyPosition(this._position);
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    _applyPosition(position) {
        this.isPositionStart = this.isPositionEnd = false;
        switch (position) {
            case IgxHintPosition.START:
                this.isPositionStart = true;
                break;
            case IgxHintPosition.END:
                this.isPositionEnd = true;
                break;
            default: break;
        }
    }
}
IgxHintDirective.decorators = [
    { type: Directive, args: [{
                selector: 'igx-hint,[igxHint]'
            },] }
];
/** @nocollapse */
IgxHintDirective.ctorParameters = () => [
    { type: ElementRef }
];
IgxHintDirective.propDecorators = {
    isPositionStart: [{ type: HostBinding, args: ['class.igx-input-group__hint-item--start',] }],
    isPositionEnd: [{ type: HostBinding, args: ['class.igx-input-group__hint-item--end',] }],
    position: [{ type: Input, args: ['position',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxHintDirective.prototype._position;
    /**
     * Sets/gets whether the hint position is at the start.
     * Default value is `false`.
     * ```typescript
     * \@ViewChild('hint', {read: IgxHintDirective})
     * public igxHint: IgxHintDirective;
     * this.igxHint.isPositionStart = true;
     * ```
     * ```typescript
     * let isHintPositionStart = this.igxHint.isPositionStart;
     * ```
     * \@memberof IgxHintDirective
     * @type {?}
     */
    IgxHintDirective.prototype.isPositionStart;
    /**
     * Sets/gets whether the hint position is at the end.
     * Default value is `false`.
     * ```typescript
     * \@ViewChild('hint', {read: IgxHintDirective})
     * public igxHint: IgxHintDirective;
     * this.igxHint.isPositionEnd = true;
     * ```
     * ```typescript
     * let isHintPositionEnd = this.igxHint.isPositionEnd;
     * ```
     * \@memberof IgxHintDirective
     * @type {?}
     */
    IgxHintDirective.prototype.isPositionEnd;
    /**
     * @type {?}
     * @private
     */
    IgxHintDirective.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvaGludC9oaW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0lBRzlFLFFBQUs7SUFDTCxNQUFHOzs7O0FBTVAsTUFBTSxPQUFPLGdCQUFnQjs7OztJQWlDekIsWUFBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQWhDaEMsY0FBUyxHQUFvQixlQUFlLENBQUMsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7OztRQWVwRCxvQkFBZSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUFleEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFHN0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVdELElBQ0ksUUFBUSxDQUFDLEtBQWE7O2NBQ2hCLFFBQVEsR0FBb0IsQ0FBQyxtQkFBQSxlQUFlLEVBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvRSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDOzs7Ozs7Ozs7OztJQVVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUlELFFBQVE7UUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsUUFBeUI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUNsRCxRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssZUFBZSxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixNQUFNO1lBQ1YsS0FBSyxlQUFlLENBQUMsR0FBRztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE1BQU07WUFDVixPQUFPLENBQUMsQ0FBQyxNQUFNO1NBQ2xCO0lBQ0wsQ0FBQzs7O1lBdEZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDOzs7O1lBVG1CLFVBQVU7Ozs4QkF5QnpCLFdBQVcsU0FBQyx5Q0FBeUM7NEJBZXJELFdBQVcsU0FBQyx1Q0FBdUM7dUJBZW5ELEtBQUssU0FBQyxVQUFVOzs7Ozs7O0lBNUNqQixxQ0FBMkQ7Ozs7Ozs7Ozs7Ozs7OztJQWMzRCwyQ0FDK0I7Ozs7Ozs7Ozs7Ozs7OztJQWMvQix5Q0FDNkI7Ozs7O0lBRWpCLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZW51bSBJZ3hIaW50UG9zaXRpb24ge1xuICAgIFNUQVJULFxuICAgIEVORFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2lneC1oaW50LFtpZ3hIaW50XSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4SGludERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IElneEhpbnRQb3NpdGlvbiA9IElneEhpbnRQb3NpdGlvbi5TVEFSVDtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgaGludCBwb3NpdGlvbiBpcyBhdCB0aGUgc3RhcnQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdoaW50Jywge3JlYWQ6IElneEhpbnREaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBpZ3hIaW50OiBJZ3hIaW50RGlyZWN0aXZlO1xuICAgICAqIHRoaXMuaWd4SGludC5pc1Bvc2l0aW9uU3RhcnQgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNIaW50UG9zaXRpb25TdGFydCA9IHRoaXMuaWd4SGludC5pc1Bvc2l0aW9uU3RhcnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpbnREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1pbnB1dC1ncm91cF9faGludC1pdGVtLS1zdGFydCcpXG4gICAgcHVibGljIGlzUG9zaXRpb25TdGFydCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBoaW50IHBvc2l0aW9uIGlzIGF0IHRoZSBlbmQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdoaW50Jywge3JlYWQ6IElneEhpbnREaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBpZ3hIaW50OiBJZ3hIaW50RGlyZWN0aXZlO1xuICAgICAqIHRoaXMuaWd4SGludC5pc1Bvc2l0aW9uRW5kID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzSGludFBvc2l0aW9uRW5kID0gdGhpcy5pZ3hIaW50LmlzUG9zaXRpb25FbmQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpbnREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1pbnB1dC1ncm91cF9faGludC1pdGVtLS1lbmQnKVxuICAgIHB1YmxpYyBpc1Bvc2l0aW9uRW5kID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBoaW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWlucHV0LWdyb3VwPlxuICAgICAqICA8aW5wdXQgaWd4SW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgICogIDxpZ3gtaGludCAjaGludCBbcG9zaXRpb25dPVwiJ3N0YXJ0J1wiPklneEhpbnQgZGlzcGxheWVkIGF0IHRoZSBzdGFydDwvaWd4LWhpbnQ+XG4gICAgICogPC9pZ3gtaW5wdXQtZ3JvdXA+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpbnREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoJ3Bvc2l0aW9uJylcbiAgICBzZXQgcG9zaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBwb3NpdGlvbjogSWd4SGludFBvc2l0aW9uID0gKElneEhpbnRQb3NpdGlvbiBhcyBhbnkpW3ZhbHVlLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5UG9zaXRpb24odGhpcy5fcG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBoaW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdoaW50Jywge3JlYWQ6IElneEhpbnREaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBpZ3hIaW50OiBJZ3hIaW50RGlyZWN0aXZlO1xuICAgICAqIGxldCBoaW50UG9zaXRpb24gPSAgdGhpcy5pZ3hIaW50LnBvc2l0aW9uO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaW50RGlyZWN0aXZlXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2FwcGx5UG9zaXRpb24odGhpcy5fcG9zaXRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FwcGx5UG9zaXRpb24ocG9zaXRpb246IElneEhpbnRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmlzUG9zaXRpb25TdGFydCA9IHRoaXMuaXNQb3NpdGlvbkVuZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIElneEhpbnRQb3NpdGlvbi5TVEFSVDpcbiAgICAgICAgICAgICAgICB0aGlzLmlzUG9zaXRpb25TdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElneEhpbnRQb3NpdGlvbi5FTkQ6XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Bvc2l0aW9uRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
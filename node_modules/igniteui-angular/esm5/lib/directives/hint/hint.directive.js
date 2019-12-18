/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
/** @enum {number} */
var IgxHintPosition = {
    START: 0,
    END: 1,
};
IgxHintPosition[IgxHintPosition.START] = 'START';
IgxHintPosition[IgxHintPosition.END] = 'END';
var IgxHintDirective = /** @class */ (function () {
    function IgxHintDirective(_element) {
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
    Object.defineProperty(IgxHintDirective.prototype, "position", {
        /**
         * Gets the position of the hint.
         * ```typescript
         * @ViewChild('hint', {read: IgxHintDirective})
         * public igxHint: IgxHintDirective;
         * let hintPosition =  this.igxHint.position;
         * ```
         * @memberof IgxHintDirective
         */
        get: /**
         * Gets the position of the hint.
         * ```typescript
         * \@ViewChild('hint', {read: IgxHintDirective})
         * public igxHint: IgxHintDirective;
         * let hintPosition =  this.igxHint.position;
         * ```
         * \@memberof IgxHintDirective
         * @return {?}
         */
        function () {
            return this._position.toString();
        },
        /**
         * Sets the position of the hint.
         * ```html
         * <igx-input-group>
         *  <input igxInput type="text"/>
         *  <igx-hint #hint [position]="'start'">IgxHint displayed at the start</igx-hint>
         * </igx-input-group>
         * ```
         * @memberof IgxHintDirective
         */
        set: /**
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
        function (value) {
            /** @type {?} */
            var position = ((/** @type {?} */ (IgxHintPosition)))[value.toUpperCase()];
            if (position !== undefined) {
                this._position = position;
                this._applyPosition(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxHintDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._applyPosition(this._position);
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    IgxHintDirective.prototype._applyPosition = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
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
    };
    IgxHintDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'igx-hint,[igxHint]'
                },] }
    ];
    /** @nocollapse */
    IgxHintDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IgxHintDirective.propDecorators = {
        isPositionStart: [{ type: HostBinding, args: ['class.igx-input-group__hint-item--start',] }],
        isPositionEnd: [{ type: HostBinding, args: ['class.igx-input-group__hint-item--end',] }],
        position: [{ type: Input, args: ['position',] }]
    };
    return IgxHintDirective;
}());
export { IgxHintDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvaGludC9oaW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0lBRzlFLFFBQUs7SUFDTCxNQUFHOzs7O0FBR1A7SUFvQ0ksMEJBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFoQ2hDLGNBQVMsR0FBb0IsZUFBZSxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUFlcEQsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7O1FBZXhCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBRzdCLENBQUM7SUFXRCxzQkFDSSxzQ0FBUTtRQU9aOzs7Ozs7OztXQVFHOzs7Ozs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLENBQUM7UUE3QkQ7Ozs7Ozs7OztXQVNHOzs7Ozs7Ozs7Ozs7O1FBQ0gsVUFDYSxLQUFhOztnQkFDaEIsUUFBUSxHQUFvQixDQUFDLG1CQUFBLGVBQWUsRUFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9FLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQzs7O09BQUE7SUFhRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBUTs7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8seUNBQWM7Ozs7O0lBQXRCLFVBQXVCLFFBQXlCO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDbEQsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLGVBQWUsQ0FBQyxLQUFLO2dCQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssZUFBZSxDQUFDLEdBQUc7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsT0FBTyxDQUFDLENBQUMsTUFBTTtTQUNsQjtJQUNMLENBQUM7O2dCQXRGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtpQkFDakM7Ozs7Z0JBVG1CLFVBQVU7OztrQ0F5QnpCLFdBQVcsU0FBQyx5Q0FBeUM7Z0NBZXJELFdBQVcsU0FBQyx1Q0FBdUM7MkJBZW5ELEtBQUssU0FBQyxVQUFVOztJQXVDckIsdUJBQUM7Q0FBQSxBQXZGRCxJQXVGQztTQXBGWSxnQkFBZ0I7Ozs7OztJQUN6QixxQ0FBMkQ7Ozs7Ozs7Ozs7Ozs7OztJQWMzRCwyQ0FDK0I7Ozs7Ozs7Ozs7Ozs7OztJQWMvQix5Q0FDNkI7Ozs7O0lBRWpCLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZW51bSBJZ3hIaW50UG9zaXRpb24ge1xuICAgIFNUQVJULFxuICAgIEVORFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2lneC1oaW50LFtpZ3hIaW50XSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4SGludERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IElneEhpbnRQb3NpdGlvbiA9IElneEhpbnRQb3NpdGlvbi5TVEFSVDtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgaGludCBwb3NpdGlvbiBpcyBhdCB0aGUgc3RhcnQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdoaW50Jywge3JlYWQ6IElneEhpbnREaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBpZ3hIaW50OiBJZ3hIaW50RGlyZWN0aXZlO1xuICAgICAqIHRoaXMuaWd4SGludC5pc1Bvc2l0aW9uU3RhcnQgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNIaW50UG9zaXRpb25TdGFydCA9IHRoaXMuaWd4SGludC5pc1Bvc2l0aW9uU3RhcnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpbnREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1pbnB1dC1ncm91cF9faGludC1pdGVtLS1zdGFydCcpXG4gICAgcHVibGljIGlzUG9zaXRpb25TdGFydCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBoaW50IHBvc2l0aW9uIGlzIGF0IHRoZSBlbmQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdoaW50Jywge3JlYWQ6IElneEhpbnREaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBpZ3hIaW50OiBJZ3hIaW50RGlyZWN0aXZlO1xuICAgICAqIHRoaXMuaWd4SGludC5pc1Bvc2l0aW9uRW5kID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzSGludFBvc2l0aW9uRW5kID0gdGhpcy5pZ3hIaW50LmlzUG9zaXRpb25FbmQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpbnREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1pbnB1dC1ncm91cF9faGludC1pdGVtLS1lbmQnKVxuICAgIHB1YmxpYyBpc1Bvc2l0aW9uRW5kID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBoaW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWlucHV0LWdyb3VwPlxuICAgICAqICA8aW5wdXQgaWd4SW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgICogIDxpZ3gtaGludCAjaGludCBbcG9zaXRpb25dPVwiJ3N0YXJ0J1wiPklneEhpbnQgZGlzcGxheWVkIGF0IHRoZSBzdGFydDwvaWd4LWhpbnQ+XG4gICAgICogPC9pZ3gtaW5wdXQtZ3JvdXA+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpbnREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoJ3Bvc2l0aW9uJylcbiAgICBzZXQgcG9zaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBwb3NpdGlvbjogSWd4SGludFBvc2l0aW9uID0gKElneEhpbnRQb3NpdGlvbiBhcyBhbnkpW3ZhbHVlLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5UG9zaXRpb24odGhpcy5fcG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBoaW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdoaW50Jywge3JlYWQ6IElneEhpbnREaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBpZ3hIaW50OiBJZ3hIaW50RGlyZWN0aXZlO1xuICAgICAqIGxldCBoaW50UG9zaXRpb24gPSAgdGhpcy5pZ3hIaW50LnBvc2l0aW9uO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaW50RGlyZWN0aXZlXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2FwcGx5UG9zaXRpb24odGhpcy5fcG9zaXRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FwcGx5UG9zaXRpb24ocG9zaXRpb246IElneEhpbnRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmlzUG9zaXRpb25TdGFydCA9IHRoaXMuaXNQb3NpdGlvbkVuZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIElneEhpbnRQb3NpdGlvbi5TVEFSVDpcbiAgICAgICAgICAgICAgICB0aGlzLmlzUG9zaXRpb25TdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElneEhpbnRQb3NpdGlvbi5FTkQ6XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Bvc2l0aW9uRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
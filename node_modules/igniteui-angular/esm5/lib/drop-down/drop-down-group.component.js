/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
/** @type {?} */
var NEXT_ID = 0;
/**
 * The `<igx-drop-down-item>` is a container intended for row items in
 * a `<igx-drop-down>` container.
 */
var IgxDropDownGroupComponent = /** @class */ (function () {
    function IgxDropDownGroupComponent() {
        this._id = NEXT_ID++;
        /**
         * @hidden \@internal
         */
        this.role = 'group';
        /**
         * @hidden \@internal
         */
        this.groupClass = true;
        /**
         * Sets/gets if the item group is disabled
         *
         * ```typescript
         * const myDropDownGroup: IgxDropDownGroupComponent = this.dropdownGroup;
         * // get
         * ...
         * const groupState: boolean = myDropDownGroup.disabled;
         * ...
         * //set
         * ...
         * myDropDownGroup,disabled = false;
         * ...
         * ```
         *
         * ```html
         * <igx-drop-down-item-group [label]="'My Items'" [disabled]="true">
         *     <igx-drop-down-item *ngFor="let item of items[index]" [value]="item.value">
         *         {{ item.text }}
         *     </igx-drop-down-item>
         * </igx-drop-down-item-group>
         * ```
         *
         * **NOTE:** All items inside of a disabled drop down group will be treated as disabled
         */
        this.disabled = false;
    }
    Object.defineProperty(IgxDropDownGroupComponent.prototype, "labelId", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return "igx-item-group-label-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownGroupComponent.prototype, "labelledBy", {
        get: /**
         * @return {?}
         */
        function () {
            return this.labelId;
        },
        enumerable: true,
        configurable: true
    });
    IgxDropDownGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-drop-down-item-group',
                    template: "\n        <label id=\"{{labelId}}\">{{ label }}</label>\n        <ng-content select=\"igx-drop-down-item\"></ng-content>\n    "
                }] }
    ];
    IgxDropDownGroupComponent.propDecorators = {
        labelledBy: [{ type: HostBinding, args: ["attr.aria-labelledby",] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        groupClass: [{ type: HostBinding, args: ['class.igx-drop-down__group',] }],
        disabled: [{ type: Input }, { type: HostBinding, args: ["attr.aria-disabled",] }, { type: HostBinding, args: ['class.igx-drop-down__group--disabled',] }],
        label: [{ type: Input }]
    };
    return IgxDropDownGroupComponent;
}());
export { IgxDropDownGroupComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxDropDownGroupComponent.prototype._id;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxDropDownGroupComponent.prototype.role;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxDropDownGroupComponent.prototype.groupClass;
    /**
     * Sets/gets if the item group is disabled
     *
     * ```typescript
     * const myDropDownGroup: IgxDropDownGroupComponent = this.dropdownGroup;
     * // get
     * ...
     * const groupState: boolean = myDropDownGroup.disabled;
     * ...
     * //set
     * ...
     * myDropDownGroup,disabled = false;
     * ...
     * ```
     *
     * ```html
     * <igx-drop-down-item-group [label]="'My Items'" [disabled]="true">
     *     <igx-drop-down-item *ngFor="let item of items[index]" [value]="item.value">
     *         {{ item.text }}
     *     </igx-drop-down-item>
     * </igx-drop-down-item-group>
     * ```
     *
     * **NOTE:** All items inside of a disabled drop down group will be treated as disabled
     * @type {?}
     */
    IgxDropDownGroupComponent.prototype.disabled;
    /**
     * Sets/gets the label of the item group
     *
     * ```typescript
     * const myDropDownGroup: IgxDropDownGroupComponent = this.dropdownGroup;
     * // get
     * ...
     * const myLabel: string = myDropDownGroup.label;
     * ...
     * // set
     * ...
     * myDropDownGroup.label = 'My New Label';
     * ...
     * ```
     *
     * ```html
     * <igx-drop-down-item-group [label]="'My new Label'">
     *      ...
     * </igx-drop-down-item-group>
     * ```
     * @type {?}
     */
    IgxDropDownGroupComponent.prototype.label;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZHJvcC1kb3duL2Ryb3AtZG93bi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFMUQsT0FBTyxHQUFHLENBQUM7Ozs7O0FBS2Y7SUFBQTtRQVFZLFFBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQzs7OztRQWtCakIsU0FBSSxHQUFHLE9BQU8sQ0FBQzs7OztRQUlmLGVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBNkJsQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBeUI1QixDQUFDO0lBdkVHLHNCQUFXLDhDQUFPO1FBSGxCOztXQUVHOzs7OztRQUNIO1lBQ0ksT0FBTywwQkFBd0IsSUFBSSxDQUFDLEdBQUssQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUNXLGlEQUFVOzs7O1FBRHJCO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOztnQkFwQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxnSUFHVDtpQkFDSjs7OzZCQVdJLFdBQVcsU0FBQyxzQkFBc0I7dUJBUWxDLFdBQVcsU0FBQyxXQUFXOzZCQUl2QixXQUFXLFNBQUMsNEJBQTRCOzJCQTJCeEMsS0FBSyxZQUNMLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsV0FBVyxTQUFDLHNDQUFzQzt3QkF3QmxELEtBQUs7O0lBRVYsZ0NBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQTdFWSx5QkFBeUI7Ozs7OztJQUNsQyx3Q0FBd0I7Ozs7O0lBaUJ4Qix5Q0FDc0I7Ozs7O0lBR3RCLCtDQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJ6Qiw2Q0FHd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJ4QiwwQ0FDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG4vKipcbiAqIFRoZSBgPGlneC1kcm9wLWRvd24taXRlbT5gIGlzIGEgY29udGFpbmVyIGludGVuZGVkIGZvciByb3cgaXRlbXMgaW5cbiAqIGEgYDxpZ3gtZHJvcC1kb3duPmAgY29udGFpbmVyLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1kcm9wLWRvd24taXRlbS1ncm91cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGxhYmVsIGlkPVwie3tsYWJlbElkfX1cIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImlneC1kcm9wLWRvd24taXRlbVwiPjwvbmctY29udGVudD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIElneERyb3BEb3duR3JvdXBDb21wb25lbnQge1xuICAgIHByaXZhdGUgX2lkID0gTkVYVF9JRCsrO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxhYmVsSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBpZ3gtaXRlbS1ncm91cC1sYWJlbC0ke3RoaXMuX2lkfWA7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKGBhdHRyLmFyaWEtbGFiZWxsZWRieWApXG4gICAgcHVibGljIGdldCBsYWJlbGxlZEJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsSWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAnZ3JvdXAnO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19ncm91cCcpXG4gICAgcHVibGljIGdyb3VwQ2xhc3MgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyBpZiB0aGUgaXRlbSBncm91cCBpcyBkaXNhYmxlZFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15RHJvcERvd25Hcm91cDogSWd4RHJvcERvd25Hcm91cENvbXBvbmVudCA9IHRoaXMuZHJvcGRvd25Hcm91cDtcbiAgICAgKiAvLyBnZXRcbiAgICAgKiAuLi5cbiAgICAgKiBjb25zdCBncm91cFN0YXRlOiBib29sZWFuID0gbXlEcm9wRG93bkdyb3VwLmRpc2FibGVkO1xuICAgICAqIC4uLlxuICAgICAqIC8vc2V0XG4gICAgICogLi4uXG4gICAgICogbXlEcm9wRG93bkdyb3VwLGRpc2FibGVkID0gZmFsc2U7XG4gICAgICogLi4uXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kcm9wLWRvd24taXRlbS1ncm91cCBbbGFiZWxdPVwiJ015IEl0ZW1zJ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCI+XG4gICAgICogICAgIDxpZ3gtZHJvcC1kb3duLWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNbaW5kZXhdXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj5cbiAgICAgKiAgICAgICAgIHt7IGl0ZW0udGV4dCB9fVxuICAgICAqICAgICA8L2lneC1kcm9wLWRvd24taXRlbT5cbiAgICAgKiA8L2lneC1kcm9wLWRvd24taXRlbS1ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqICoqTk9URToqKiBBbGwgaXRlbXMgaW5zaWRlIG9mIGEgZGlzYWJsZWQgZHJvcCBkb3duIGdyb3VwIHdpbGwgYmUgdHJlYXRlZCBhcyBkaXNhYmxlZFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKGBhdHRyLmFyaWEtZGlzYWJsZWRgKVxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWRyb3AtZG93bl9fZ3JvdXAtLWRpc2FibGVkJylcbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgbGFiZWwgb2YgdGhlIGl0ZW0gZ3JvdXBcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteURyb3BEb3duR3JvdXA6IElneERyb3BEb3duR3JvdXBDb21wb25lbnQgPSB0aGlzLmRyb3Bkb3duR3JvdXA7XG4gICAgICogLy8gZ2V0XG4gICAgICogLi4uXG4gICAgICogY29uc3QgbXlMYWJlbDogc3RyaW5nID0gbXlEcm9wRG93bkdyb3VwLmxhYmVsO1xuICAgICAqIC4uLlxuICAgICAqIC8vIHNldFxuICAgICAqIC4uLlxuICAgICAqIG15RHJvcERvd25Hcm91cC5sYWJlbCA9ICdNeSBOZXcgTGFiZWwnO1xuICAgICAqIC4uLlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZHJvcC1kb3duLWl0ZW0tZ3JvdXAgW2xhYmVsXT1cIidNeSBuZXcgTGFiZWwnXCI+XG4gICAgICogICAgICAuLi5cbiAgICAgKiA8L2lneC1kcm9wLWRvd24taXRlbS1ncm91cD5cbiAgICAgKiBgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG59XG4iXX0=
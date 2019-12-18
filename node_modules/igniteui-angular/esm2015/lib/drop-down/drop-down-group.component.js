/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
/** @type {?} */
let NEXT_ID = 0;
/**
 * The `<igx-drop-down-item>` is a container intended for row items in
 * a `<igx-drop-down>` container.
 */
export class IgxDropDownGroupComponent {
    constructor() {
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
    /**
     * @hidden \@internal
     * @return {?}
     */
    get labelId() {
        return `igx-item-group-label-${this._id}`;
    }
    /**
     * @return {?}
     */
    get labelledBy() {
        return this.labelId;
    }
}
IgxDropDownGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-drop-down-item-group',
                template: `
        <label id="{{labelId}}">{{ label }}</label>
        <ng-content select="igx-drop-down-item"></ng-content>
    `
            }] }
];
IgxDropDownGroupComponent.propDecorators = {
    labelledBy: [{ type: HostBinding, args: [`attr.aria-labelledby`,] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    groupClass: [{ type: HostBinding, args: ['class.igx-drop-down__group',] }],
    disabled: [{ type: Input }, { type: HostBinding, args: [`attr.aria-disabled`,] }, { type: HostBinding, args: ['class.igx-drop-down__group--disabled',] }],
    label: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZHJvcC1kb3duL2Ryb3AtZG93bi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFMUQsT0FBTyxHQUFHLENBQUM7Ozs7O0FBWWYsTUFBTSxPQUFPLHlCQUF5QjtJQVB0QztRQVFZLFFBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQzs7OztRQWtCakIsU0FBSSxHQUFHLE9BQU8sQ0FBQzs7OztRQUlmLGVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBNkJsQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBeUI1QixDQUFDOzs7OztJQXZFRyxJQUFXLE9BQU87UUFDZCxPQUFPLHdCQUF3QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELElBQ1csVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7O1lBcEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7OztLQUdUO2FBQ0o7Ozt5QkFXSSxXQUFXLFNBQUMsc0JBQXNCO21CQVFsQyxXQUFXLFNBQUMsV0FBVzt5QkFJdkIsV0FBVyxTQUFDLDRCQUE0Qjt1QkEyQnhDLEtBQUssWUFDTCxXQUFXLFNBQUMsb0JBQW9CLGNBQ2hDLFdBQVcsU0FBQyxzQ0FBc0M7b0JBd0JsRCxLQUFLOzs7Ozs7O0lBMUVOLHdDQUF3Qjs7Ozs7SUFpQnhCLHlDQUNzQjs7Ozs7SUFHdEIsK0NBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQnpCLDZDQUd3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QnhCLDBDQUNxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCBORVhUX0lEID0gMDtcbi8qKlxuICogVGhlIGA8aWd4LWRyb3AtZG93bi1pdGVtPmAgaXMgYSBjb250YWluZXIgaW50ZW5kZWQgZm9yIHJvdyBpdGVtcyBpblxuICogYSBgPGlneC1kcm9wLWRvd24+YCBjb250YWluZXIuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWRyb3AtZG93bi1pdGVtLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bGFiZWwgaWQ9XCJ7e2xhYmVsSWR9fVwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaWd4LWRyb3AtZG93bi1pdGVtXCI+PC9uZy1jb250ZW50PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSWd4RHJvcERvd25Hcm91cENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfaWQgPSBORVhUX0lEKys7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbGFiZWxJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYGlneC1pdGVtLWdyb3VwLWxhYmVsLSR7dGhpcy5faWR9YDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoYGF0dHIuYXJpYS1sYWJlbGxlZGJ5YClcbiAgICBwdWJsaWMgZ2V0IGxhYmVsbGVkQnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWxJZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICdncm91cCc7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2dyb3VwJylcbiAgICBwdWJsaWMgZ3JvdXBDbGFzcyA9IHRydWU7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIGlmIHRoZSBpdGVtIGdyb3VwIGlzIGRpc2FibGVkXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbXlEcm9wRG93bkdyb3VwOiBJZ3hEcm9wRG93bkdyb3VwQ29tcG9uZW50ID0gdGhpcy5kcm9wZG93bkdyb3VwO1xuICAgICAqIC8vIGdldFxuICAgICAqIC4uLlxuICAgICAqIGNvbnN0IGdyb3VwU3RhdGU6IGJvb2xlYW4gPSBteURyb3BEb3duR3JvdXAuZGlzYWJsZWQ7XG4gICAgICogLi4uXG4gICAgICogLy9zZXRcbiAgICAgKiAuLi5cbiAgICAgKiBteURyb3BEb3duR3JvdXAsZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgKiAuLi5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRyb3AtZG93bi1pdGVtLWdyb3VwIFtsYWJlbF09XCInTXkgSXRlbXMnXCIgW2Rpc2FibGVkXT1cInRydWVcIj5cbiAgICAgKiAgICAgPGlneC1kcm9wLWRvd24taXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1tpbmRleF1cIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiPlxuICAgICAqICAgICAgICAge3sgaXRlbS50ZXh0IH19XG4gICAgICogICAgIDwvaWd4LWRyb3AtZG93bi1pdGVtPlxuICAgICAqIDwvaWd4LWRyb3AtZG93bi1pdGVtLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogKipOT1RFOioqIEFsbCBpdGVtcyBpbnNpZGUgb2YgYSBkaXNhYmxlZCBkcm9wIGRvd24gZ3JvdXAgd2lsbCBiZSB0cmVhdGVkIGFzIGRpc2FibGVkXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoYGF0dHIuYXJpYS1kaXNhYmxlZGApXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19ncm91cC0tZGlzYWJsZWQnKVxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBsYWJlbCBvZiB0aGUgaXRlbSBncm91cFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15RHJvcERvd25Hcm91cDogSWd4RHJvcERvd25Hcm91cENvbXBvbmVudCA9IHRoaXMuZHJvcGRvd25Hcm91cDtcbiAgICAgKiAvLyBnZXRcbiAgICAgKiAuLi5cbiAgICAgKiBjb25zdCBteUxhYmVsOiBzdHJpbmcgPSBteURyb3BEb3duR3JvdXAubGFiZWw7XG4gICAgICogLi4uXG4gICAgICogLy8gc2V0XG4gICAgICogLi4uXG4gICAgICogbXlEcm9wRG93bkdyb3VwLmxhYmVsID0gJ015IE5ldyBMYWJlbCc7XG4gICAgICogLi4uXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kcm9wLWRvd24taXRlbS1ncm91cCBbbGFiZWxdPVwiJ015IG5ldyBMYWJlbCdcIj5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqIDwvaWd4LWRyb3AtZG93bi1pdGVtLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbn1cbiJdfQ==
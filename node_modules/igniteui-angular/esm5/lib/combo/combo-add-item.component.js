/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxComboItemComponent } from './combo-item.component';
import { Component } from '@angular/core';
/**
 * @hidden
 */
var IgxComboAddItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxComboAddItemComponent, _super);
    function IgxComboAddItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IgxComboAddItemComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return false;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} event
     * @return {?}
     */
    IgxComboAddItemComponent.prototype.clicked = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.comboAPI.disableTransitions = false;
        this.comboAPI.add_custom_item();
    };
    IgxComboAddItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-combo-add-item',
                    template: '<ng-content></ng-content>',
                    providers: [{ provide: IgxComboItemComponent, useExisting: IgxComboAddItemComponent }]
                }] }
    ];
    return IgxComboAddItemComponent;
}(IgxComboItemComponent));
export { IgxComboAddItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYWRkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby1hZGQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzFDO0lBSzhDLG9EQUFxQjtJQUxuRTs7SUFnQkEsQ0FBQztJQVZHLHNCQUFJLDhDQUFROzs7O1FBQVo7WUFDSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7OztRQUNELFVBQWEsS0FBYztRQUMzQixDQUFDOzs7T0FGQTs7Ozs7SUFJRCwwQ0FBTzs7OztJQUFQLFVBQVEsS0FBTTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Z0JBZkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBQyxDQUFDO2lCQUN4Rjs7SUFZRCwrQkFBQztDQUFBLEFBaEJELENBSzhDLHFCQUFxQixHQVdsRTtTQVhZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElneENvbWJvSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tYm8taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1jb21iby1hZGQtaXRlbScsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IElneENvbWJvSXRlbUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IElneENvbWJvQWRkSXRlbUNvbXBvbmVudH1dXG59KVxuZXhwb3J0IGNsYXNzIElneENvbWJvQWRkSXRlbUNvbXBvbmVudCBleHRlbmRzIElneENvbWJvSXRlbUNvbXBvbmVudCB7XG4gICAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIH1cblxuICAgIGNsaWNrZWQoZXZlbnQ/KSB7XG4gICAgICAgIHRoaXMuY29tYm9BUEkuZGlzYWJsZVRyYW5zaXRpb25zID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tYm9BUEkuYWRkX2N1c3RvbV9pdGVtKCk7XG4gICAgfVxufVxuIl19
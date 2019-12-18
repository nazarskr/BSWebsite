/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxComboItemComponent } from './combo-item.component';
import { Component } from '@angular/core';
/**
 * @hidden
 */
export class IgxComboAddItemComponent extends IgxComboItemComponent {
    /**
     * @return {?}
     */
    get selected() {
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    clicked(event) {
        this.comboAPI.disableTransitions = false;
        this.comboAPI.add_custom_item();
    }
}
IgxComboAddItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-combo-add-item',
                template: '<ng-content></ng-content>',
                providers: [{ provide: IgxComboItemComponent, useExisting: IgxComboAddItemComponent }]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYWRkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby1hZGQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFVMUMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHFCQUFxQjs7OztJQUMvRCxJQUFJLFFBQVE7UUFDUixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBTTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBQyxDQUFDO2FBQ3hGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4Q29tYm9JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21iby1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWNvbWJvLWFkZC1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSWd4Q29tYm9JdGVtQ29tcG9uZW50LCB1c2VFeGlzdGluZzogSWd4Q29tYm9BZGRJdGVtQ29tcG9uZW50fV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29tYm9BZGRJdGVtQ29tcG9uZW50IGV4dGVuZHMgSWd4Q29tYm9JdGVtQ29tcG9uZW50IHtcbiAgICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgfVxuXG4gICAgY2xpY2tlZChldmVudD8pIHtcbiAgICAgICAgdGhpcy5jb21ib0FQSS5kaXNhYmxlVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21ib0FQSS5hZGRfY3VzdG9tX2l0ZW0oKTtcbiAgICB9XG59XG4iXX0=
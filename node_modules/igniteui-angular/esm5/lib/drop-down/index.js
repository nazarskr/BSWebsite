/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { IgxDropDownComponent } from './drop-down.component';
import { IgxDropDownItemComponent } from './drop-down-item.component';
import { IgxDropDownItemNavigationDirective } from './drop-down-navigation.directive';
import { CommonModule } from '@angular/common';
import { IgxToggleModule } from '../directives/toggle/toggle.directive';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxDropDownGroupComponent } from './drop-down-group.component';
export { IgxDropDownComponent } from './drop-down.component';
export { IgxDropDownItemComponent } from './drop-down-item.component';
export { IgxDropDownItemNavigationDirective } from './drop-down-navigation.directive';
export { IgxDropDownBase } from './drop-down.base';
export { IgxDropDownItemBase } from './drop-down-item.base';
export { IgxDropDownGroupComponent } from './drop-down-group.component';
/**
 * @hidden
 */
var IgxDropDownModule = /** @class */ (function () {
    function IgxDropDownModule() {
    }
    IgxDropDownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownGroupComponent,
                        IgxDropDownItemNavigationDirective],
                    exports: [IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownGroupComponent,
                        IgxDropDownItemNavigationDirective],
                    imports: [CommonModule, IgxToggleModule],
                    providers: [IgxSelectionAPIService]
                },] }
    ];
    return IgxDropDownModule;
}());
export { IgxDropDownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2Ryb3AtZG93bi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhFLHFDQUFjLHVCQUF1QixDQUFDO0FBQ3RDLHlDQUFjLDRCQUE0QixDQUFDO0FBRTNDLG1EQUFjLGtDQUFrQyxDQUFDO0FBQ2pELGdDQUFjLGtCQUFrQixDQUFDO0FBQ2pDLG9DQUFjLHVCQUF1QixDQUFDO0FBQ3RDLDBDQUFjLDZCQUE2QixDQUFDOzs7O0FBSzVDO0lBQUE7SUFRaUMsQ0FBQzs7Z0JBUmpDLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUI7d0JBQ3BGLGtDQUFrQyxDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUI7d0JBQy9FLGtDQUFrQyxDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDdEM7O0lBQ2dDLHdCQUFDO0NBQUEsQUFSbEMsSUFRa0M7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wLWRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IElneERyb3BEb3duSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcC1kb3duLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IElneERyb3BEb3duSXRlbU5hdmlnYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3AtZG93bi1uYXZpZ2F0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWd4VG9nZ2xlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4RHJvcERvd25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vZHJvcC1kb3duLWdyb3VwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZHJvcC1kb3duLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Ryb3AtZG93bi1pdGVtLmNvbXBvbmVudCc7XG5leHBvcnQgeyBJU2VsZWN0aW9uRXZlbnRBcmdzLCBJRHJvcERvd25OYXZpZ2F0aW9uRGlyZWN0aXZlLCAgfSBmcm9tICcuL2Ryb3AtZG93bi5jb21tb24nO1xuZXhwb3J0ICogZnJvbSAnLi9kcm9wLWRvd24tbmF2aWdhdGlvbi5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9kcm9wLWRvd24uYmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL2Ryb3AtZG93bi1pdGVtLmJhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kcm9wLWRvd24tZ3JvdXAuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4RHJvcERvd25Db21wb25lbnQsIElneERyb3BEb3duSXRlbUNvbXBvbmVudCwgSWd4RHJvcERvd25Hcm91cENvbXBvbmVudCxcbiAgICAgICAgSWd4RHJvcERvd25JdGVtTmF2aWdhdGlvbkRpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneERyb3BEb3duQ29tcG9uZW50LCBJZ3hEcm9wRG93bkl0ZW1Db21wb25lbnQsIElneERyb3BEb3duR3JvdXBDb21wb25lbnQsXG4gICAgICAgIElneERyb3BEb3duSXRlbU5hdmlnYXRpb25EaXJlY3RpdmVdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElneFRvZ2dsZU1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbSWd4U2VsZWN0aW9uQVBJU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4RHJvcERvd25Nb2R1bGUgeyB9XG4iXX0=
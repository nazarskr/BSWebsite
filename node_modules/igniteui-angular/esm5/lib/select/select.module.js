/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxIconModule } from '../icon/index';
import { IgxDropDownModule } from './../drop-down/index';
import { IgxToggleModule } from './../directives/toggle/toggle.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxInputGroupModule } from '../input-group/input-group.component';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxSelectComponent, IgxSelectToggleIconDirective } from './select.component';
import { IgxSelectItemComponent } from './select-item.component';
import { IgxSelectItemNavigationDirective } from './select-navigation.directive';
import { IgxSelectGroupComponent } from './select-group.component';
/**
 * @hidden
 */
var IgxSelectModule = /** @class */ (function () {
    function IgxSelectModule() {
    }
    IgxSelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxSelectComponent, IgxSelectItemComponent, IgxSelectItemNavigationDirective,
                        IgxSelectToggleIconDirective, IgxSelectGroupComponent],
                    exports: [IgxSelectComponent, IgxSelectItemComponent, IgxSelectItemNavigationDirective,
                        IgxSelectToggleIconDirective, IgxSelectGroupComponent],
                    imports: [IgxRippleModule, CommonModule, IgxInputGroupModule, FormsModule, ReactiveFormsModule,
                        IgxToggleModule, IgxDropDownModule, IgxButtonModule, IgxIconModule],
                    providers: []
                },] }
    ];
    return IgxSelectModule;
}());
export { IgxSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBR25FO0lBQUE7SUFTK0IsQ0FBQzs7Z0JBVC9CLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxnQ0FBZ0M7d0JBQ3ZGLDRCQUE0QixFQUFFLHVCQUF1QixDQUFDO29CQUMxRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxnQ0FBZ0M7d0JBQ2pGLDRCQUE0QixFQUFFLHVCQUF1QixDQUFDO29CQUMzRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxtQkFBbUI7d0JBQzFGLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDO29CQUN2RSxTQUFTLEVBQUUsRUFBRTtpQkFDaEI7O0lBQzhCLHNCQUFDO0NBQUEsQUFUaEMsSUFTZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bk1vZHVsZSB9IGZyb20gJy4vLi4vZHJvcC1kb3duL2luZGV4JztcbmltcG9ydCB7IElneFRvZ2dsZU1vZHVsZSB9IGZyb20gJy4vLi4vZGlyZWN0aXZlcy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hSaXBwbGVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneElucHV0R3JvdXBNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC1ncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IElneFNlbGVjdENvbXBvbmVudCwgSWd4U2VsZWN0VG9nZ2xlSWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U2VsZWN0SXRlbU5hdmlnYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdC1uYXZpZ2F0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3RHcm91cENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWdyb3VwLmNvbXBvbmVudCc7XG5cbi8qKiBAaGlkZGVuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFNlbGVjdENvbXBvbmVudCwgSWd4U2VsZWN0SXRlbUNvbXBvbmVudCwgSWd4U2VsZWN0SXRlbU5hdmlnYXRpb25EaXJlY3RpdmUsXG4gICAgICAgIElneFNlbGVjdFRvZ2dsZUljb25EaXJlY3RpdmUsIElneFNlbGVjdEdyb3VwQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4U2VsZWN0Q29tcG9uZW50LCBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50LCBJZ3hTZWxlY3RJdGVtTmF2aWdhdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgIElneFNlbGVjdFRvZ2dsZUljb25EaXJlY3RpdmUsIElneFNlbGVjdEdyb3VwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbSWd4UmlwcGxlTW9kdWxlLCBDb21tb25Nb2R1bGUsIElneElucHV0R3JvdXBNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBJZ3hUb2dnbGVNb2R1bGUsIElneERyb3BEb3duTW9kdWxlLCBJZ3hCdXR0b25Nb2R1bGUsIElneEljb25Nb2R1bGVdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgSWd4U2VsZWN0TW9kdWxlIHsgfVxuIl19
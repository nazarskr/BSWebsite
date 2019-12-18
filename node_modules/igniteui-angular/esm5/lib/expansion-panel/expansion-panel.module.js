/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxAvatarModule } from '../avatar/avatar.component';
import { IgxIconModule } from '../icon/index';
import { IgxExpansionPanelComponent } from './expansion-panel.component';
import { IgxExpansionPanelHeaderComponent } from './expansion-panel-header.component';
import { IgxExpansionPanelBodyComponent } from './expansion-panel-body.component';
import { IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective } from './expansion-panel.directives';
/**
 * @hidden
 */
var IgxExpansionPanelModule = /** @class */ (function () {
    function IgxExpansionPanelModule() {
    }
    IgxExpansionPanelModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        IgxExpansionPanelComponent,
                        IgxExpansionPanelHeaderComponent,
                        IgxExpansionPanelBodyComponent,
                        IgxExpansionPanelDescriptionDirective,
                        IgxExpansionPanelTitleDirective,
                        IgxExpansionPanelIconDirective
                    ],
                    entryComponents: [],
                    exports: [
                        IgxExpansionPanelComponent,
                        IgxExpansionPanelHeaderComponent,
                        IgxExpansionPanelBodyComponent,
                        IgxExpansionPanelDescriptionDirective,
                        IgxExpansionPanelTitleDirective,
                        IgxExpansionPanelIconDirective
                    ],
                    imports: [
                        CommonModule,
                        IgxRippleModule,
                        IgxIconModule,
                        IgxButtonModule,
                        IgxAvatarModule
                    ]
                },] }
    ];
    return IgxExpansionPanelModule;
}());
export { IgxExpansionPanelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLCtCQUErQixFQUM3RSw4QkFBOEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBS3ZFO0lBQUE7SUE0QkEsQ0FBQzs7Z0JBNUJBLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osMEJBQTBCO3dCQUMxQixnQ0FBZ0M7d0JBQ2hDLDhCQUE4Qjt3QkFDOUIscUNBQXFDO3dCQUNyQywrQkFBK0I7d0JBQy9CLDhCQUE4QjtxQkFDL0I7b0JBQ0QsZUFBZSxFQUFFLEVBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCwwQkFBMEI7d0JBQzFCLGdDQUFnQzt3QkFDaEMsOEJBQThCO3dCQUM5QixxQ0FBcUM7d0JBQ3JDLCtCQUErQjt3QkFDN0IsOEJBQThCO3FCQUNqQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixlQUFlO3FCQUNoQjtpQkFDRjs7SUFFRCw4QkFBQztDQUFBLEFBNUJELElBNEJDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hSaXBwbGVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4QXZhdGFyTW9kdWxlIH0gZnJvbSAnLi4vYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgSWd4RXhwYW5zaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RXhwYW5zaW9uUGFuZWxIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElneEV4cGFuc2lvblBhbmVsQm9keUNvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IElneEV4cGFuc2lvblBhbmVsRGVzY3JpcHRpb25EaXJlY3RpdmUsIElneEV4cGFuc2lvblBhbmVsVGl0bGVEaXJlY3RpdmUsXG4gIElneEV4cGFuc2lvblBhbmVsSWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLmRpcmVjdGl2ZXMnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSWd4RXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXG4gICAgSWd4RXhwYW5zaW9uUGFuZWxIZWFkZXJDb21wb25lbnQsXG4gICAgSWd4RXhwYW5zaW9uUGFuZWxCb2R5Q29tcG9uZW50LFxuICAgIElneEV4cGFuc2lvblBhbmVsRGVzY3JpcHRpb25EaXJlY3RpdmUsXG4gICAgSWd4RXhwYW5zaW9uUGFuZWxUaXRsZURpcmVjdGl2ZSxcbiAgICBJZ3hFeHBhbnNpb25QYW5lbEljb25EaXJlY3RpdmVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJZ3hFeHBhbnNpb25QYW5lbENvbXBvbmVudCxcbiAgICBJZ3hFeHBhbnNpb25QYW5lbEhlYWRlckNvbXBvbmVudCxcbiAgICBJZ3hFeHBhbnNpb25QYW5lbEJvZHlDb21wb25lbnQsXG4gICAgSWd4RXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbkRpcmVjdGl2ZSxcbiAgICBJZ3hFeHBhbnNpb25QYW5lbFRpdGxlRGlyZWN0aXZlLFxuICAgICAgSWd4RXhwYW5zaW9uUGFuZWxJY29uRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSWd4UmlwcGxlTW9kdWxlLFxuICAgIElneEljb25Nb2R1bGUsXG4gICAgSWd4QnV0dG9uTW9kdWxlLFxuICAgIElneEF2YXRhck1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElneEV4cGFuc2lvblBhbmVsTW9kdWxlIHtcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxTreeGridComponent } from './tree-grid.component';
import { IgxTreeGridRowComponent } from './tree-grid-row.component';
import { IgxChipsModule } from '../../chips/chips.module';
import { IgxGridCommonModule } from '../grid-common.module';
import { IgxTreeGridHierarchizingPipe } from './tree-grid.pipes';
import { IgxTreeGridFlatteningPipe, IgxTreeGridSortingPipe, IgxTreeGridPagingPipe, IgxTreeGridTransactionPipe } from './tree-grid.pipes';
import { IgxTreeGridCellComponent } from './tree-cell.component';
import { IgxTreeGridFilteringPipe } from './tree-grid.filtering.pipe';
import { IgxTreeGridSummaryPipe } from './tree-grid.summary.pipe';
import { IgxRowLoadingIndicatorTemplateDirective } from './tree-grid.directives';
import { IgxSelectModule } from '../../select/index';
/**
 * @hidden
 */
var IgxTreeGridModule = /** @class */ (function () {
    function IgxTreeGridModule() {
    }
    IgxTreeGridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        IgxTreeGridComponent,
                        IgxTreeGridRowComponent,
                        IgxTreeGridCellComponent,
                        IgxTreeGridHierarchizingPipe,
                        IgxTreeGridFlatteningPipe,
                        IgxTreeGridSortingPipe,
                        IgxTreeGridFilteringPipe,
                        IgxTreeGridPagingPipe,
                        IgxTreeGridTransactionPipe,
                        IgxTreeGridSummaryPipe,
                        IgxRowLoadingIndicatorTemplateDirective
                    ],
                    exports: [
                        IgxTreeGridComponent,
                        IgxTreeGridRowComponent,
                        IgxTreeGridCellComponent,
                        IgxRowLoadingIndicatorTemplateDirective,
                        IgxGridCommonModule
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        IgxChipsModule,
                        IgxGridCommonModule,
                        IgxSelectModule
                    ]
                },] }
    ];
    return IgxTreeGridModule;
}());
export { IgxTreeGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBS3JEO0lBQUE7SUE4QkEsQ0FBQzs7Z0JBOUJBLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsNEJBQTRCO3dCQUM1Qix5QkFBeUI7d0JBQ3pCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix1Q0FBdUM7cUJBQ3hDO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4Qix1Q0FBdUM7d0JBQ3ZDLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsZUFBZTtxQkFDaEI7aUJBQ0Y7O0lBRUQsd0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQURZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1ncmlkLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q2hpcHNNb2R1bGUgfSBmcm9tICcuLi8uLi9jaGlwcy9jaGlwcy5tb2R1bGUnO1xuaW1wb3J0IHsgSWd4R3JpZENvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2dyaWQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZEhpZXJhcmNoaXppbmdQaXBlIH0gZnJvbSAnLi90cmVlLWdyaWQucGlwZXMnO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWRGbGF0dGVuaW5nUGlwZSwgSWd4VHJlZUdyaWRTb3J0aW5nUGlwZSwgSWd4VHJlZUdyaWRQYWdpbmdQaXBlLCBJZ3hUcmVlR3JpZFRyYW5zYWN0aW9uUGlwZSB9IGZyb20gJy4vdHJlZS1ncmlkLnBpcGVzJztcbmltcG9ydCB7IElneFRyZWVHcmlkQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZEZpbHRlcmluZ1BpcGUgfSBmcm9tICcuL3RyZWUtZ3JpZC5maWx0ZXJpbmcucGlwZSc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZFN1bW1hcnlQaXBlIH0gZnJvbSAnLi90cmVlLWdyaWQuc3VtbWFyeS5waXBlJztcbmltcG9ydCB7IElneFJvd0xvYWRpbmdJbmRpY2F0b3JUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vdHJlZS1ncmlkLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgSWd4U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vc2VsZWN0L2luZGV4JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIElneFRyZWVHcmlkQ29tcG9uZW50LFxuICAgIElneFRyZWVHcmlkUm93Q29tcG9uZW50LFxuICAgIElneFRyZWVHcmlkQ2VsbENvbXBvbmVudCxcbiAgICBJZ3hUcmVlR3JpZEhpZXJhcmNoaXppbmdQaXBlLFxuICAgIElneFRyZWVHcmlkRmxhdHRlbmluZ1BpcGUsXG4gICAgSWd4VHJlZUdyaWRTb3J0aW5nUGlwZSxcbiAgICBJZ3hUcmVlR3JpZEZpbHRlcmluZ1BpcGUsXG4gICAgSWd4VHJlZUdyaWRQYWdpbmdQaXBlLFxuICAgIElneFRyZWVHcmlkVHJhbnNhY3Rpb25QaXBlLFxuICAgIElneFRyZWVHcmlkU3VtbWFyeVBpcGUsXG4gICAgSWd4Um93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJZ3hUcmVlR3JpZENvbXBvbmVudCxcbiAgICBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudCxcbiAgICBJZ3hUcmVlR3JpZENlbGxDb21wb25lbnQsXG4gICAgSWd4Um93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneEdyaWRDb21tb25Nb2R1bGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJZ3hDaGlwc01vZHVsZSxcbiAgICBJZ3hHcmlkQ29tbW9uTW9kdWxlLFxuICAgIElneFNlbGVjdE1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElneFRyZWVHcmlkTW9kdWxlIHtcbn1cbiJdfQ==
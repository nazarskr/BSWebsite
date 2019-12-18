/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { IgxColumnComponent } from '../../column.component';
import { IgxButtonGroupComponent } from '../../../buttonGroup/buttonGroup.component';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
export class IgxExcelStyleSortingComponent {
    constructor() { }
    /**
     * @param {?} sortDirection
     * @return {?}
     */
    onSortButtonClicked(sortDirection) {
        if (this.sortButtonGroup.selectedIndexes.length === 0) {
            if (this.grid.isColumnGrouped(this.column.field)) {
                this.selectButton(sortDirection);
            }
            else {
                this.grid.clearSort(this.column.field);
            }
        }
        else {
            this.grid.sort({ fieldName: this.column.field, dir: sortDirection, ignoreCase: true });
        }
    }
    /**
     * @param {?} sortDirection
     * @return {?}
     */
    selectButton(sortDirection) {
        if (sortDirection === 1) {
            this.sortButtonGroup.selectButton(0);
        }
        else {
            this.sortButtonGroup.selectButton(1);
        }
    }
}
IgxExcelStyleSortingComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-excel-style-sorting',
                template: "<header>\n    {{ grid.resourceStrings.igx_grid_excel_filter_sorting_header }}\n</header>\n<igx-buttongroup #sortButtonGroup [multiSelection]=\"false\">\n    <span tabindex=\"0\" igxButton type=\"button\" [displayDensity]=\"displayDensity\" [attr.data-togglable]=\"true\" (click)=\"onSortButtonClicked(1)\">\n        <igx-icon>arrow_upwards</igx-icon>\n        <span>\n            {{ displayDensity==='compact'?\n            grid.resourceStrings.igx_grid_excel_filter_sorting_asc_short:\n            grid.resourceStrings.igx_grid_excel_filter_sorting_asc  }}\n        </span>\n    </span>\n\n    <span tabindex=\"0\" igxButton type=\"button\" [displayDensity]=\"displayDensity\" [attr.data-togglable]=\"true\" (click)=\"onSortButtonClicked(2)\">\n        <igx-icon>arrow_downwards</igx-icon>\n        <span>\n            {{ displayDensity==='compact'?\n            grid.resourceStrings.igx_grid_excel_filter_sorting_desc_short:\n            grid.resourceStrings.igx_grid_excel_filter_sorting_desc\n         }}\n        </span>\n    </span>\n</igx-buttongroup>\n"
            }] }
];
/** @nocollapse */
IgxExcelStyleSortingComponent.ctorParameters = () => [];
IgxExcelStyleSortingComponent.propDecorators = {
    column: [{ type: Input }],
    grid: [{ type: Input }],
    displayDensity: [{ type: Input }],
    sortButtonGroup: [{ type: ViewChild, args: ['sortButtonGroup', { read: IgxButtonGroupComponent, static: true },] }]
};
if (false) {
    /** @type {?} */
    IgxExcelStyleSortingComponent.prototype.column;
    /** @type {?} */
    IgxExcelStyleSortingComponent.prototype.grid;
    /** @type {?} */
    IgxExcelStyleSortingComponent.prototype.displayDensity;
    /** @type {?} */
    IgxExcelStyleSortingComponent.prototype.sortButtonGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtc29ydGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2ZpbHRlcmluZy9leGNlbC1zdHlsZS9leGNlbC1zdHlsZS1zb3J0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFXdkQsTUFBTSxPQUFPLDZCQUE2QjtJQWN0QyxnQkFBZSxDQUFDOzs7OztJQUVULG1CQUFtQixDQUFDLGFBQWE7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDMUY7SUFDTCxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxhQUFxQjtRQUNyQyxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQzs7O1lBeENKLFNBQVMsU0FBQztnQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsZ2pDQUFtRDthQUN0RDs7Ozs7cUJBR0ksS0FBSzttQkFHTCxLQUFLOzZCQUdMLEtBQUs7OEJBR0wsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFUN0UsK0NBQ2tDOztJQUVsQyw2Q0FDaUI7O0lBRWpCLHVEQUNzQzs7SUFFdEMsd0RBQ2dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgVmlld0NoaWxkLFxuICAgIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2J1dHRvbkdyb3VwL2J1dHRvbkdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVuc2l0eSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1leGNlbC1zdHlsZS1zb3J0aW5nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtc3R5bGUtc29ydGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZVNvcnRpbmdDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBncmlkOiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNwbGF5RGVuc2l0eTogRGlzcGxheURlbnNpdHk7XG5cbiAgICBAVmlld0NoaWxkKCdzb3J0QnV0dG9uR3JvdXAnLCB7IHJlYWQ6IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgc29ydEJ1dHRvbkdyb3VwOiBJZ3hCdXR0b25Hcm91cENvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHB1YmxpYyBvblNvcnRCdXR0b25DbGlja2VkKHNvcnREaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydEJ1dHRvbkdyb3VwLnNlbGVjdGVkSW5kZXhlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuaXNDb2x1bW5Hcm91cGVkKHRoaXMuY29sdW1uLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QnV0dG9uKHNvcnREaXJlY3Rpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuY2xlYXJTb3J0KHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5zb3J0KHsgZmllbGROYW1lOiB0aGlzLmNvbHVtbi5maWVsZCwgZGlyOiBzb3J0RGlyZWN0aW9uLCBpZ25vcmVDYXNlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEJ1dHRvbihzb3J0RGlyZWN0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEJ1dHRvbkdyb3VwLnNlbGVjdEJ1dHRvbigwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEJ1dHRvbkdyb3VwLnNlbGVjdEJ1dHRvbigxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
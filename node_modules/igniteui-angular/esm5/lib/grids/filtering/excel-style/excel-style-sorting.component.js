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
var IgxExcelStyleSortingComponent = /** @class */ (function () {
    function IgxExcelStyleSortingComponent() {
    }
    /**
     * @param {?} sortDirection
     * @return {?}
     */
    IgxExcelStyleSortingComponent.prototype.onSortButtonClicked = /**
     * @param {?} sortDirection
     * @return {?}
     */
    function (sortDirection) {
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
    };
    /**
     * @param {?} sortDirection
     * @return {?}
     */
    IgxExcelStyleSortingComponent.prototype.selectButton = /**
     * @param {?} sortDirection
     * @return {?}
     */
    function (sortDirection) {
        if (sortDirection === 1) {
            this.sortButtonGroup.selectButton(0);
        }
        else {
            this.sortButtonGroup.selectButton(1);
        }
    };
    IgxExcelStyleSortingComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-excel-style-sorting',
                    template: "<header>\n    {{ grid.resourceStrings.igx_grid_excel_filter_sorting_header }}\n</header>\n<igx-buttongroup #sortButtonGroup [multiSelection]=\"false\">\n    <span tabindex=\"0\" igxButton type=\"button\" [displayDensity]=\"displayDensity\" [attr.data-togglable]=\"true\" (click)=\"onSortButtonClicked(1)\">\n        <igx-icon>arrow_upwards</igx-icon>\n        <span>\n            {{ displayDensity==='compact'?\n            grid.resourceStrings.igx_grid_excel_filter_sorting_asc_short:\n            grid.resourceStrings.igx_grid_excel_filter_sorting_asc  }}\n        </span>\n    </span>\n\n    <span tabindex=\"0\" igxButton type=\"button\" [displayDensity]=\"displayDensity\" [attr.data-togglable]=\"true\" (click)=\"onSortButtonClicked(2)\">\n        <igx-icon>arrow_downwards</igx-icon>\n        <span>\n            {{ displayDensity==='compact'?\n            grid.resourceStrings.igx_grid_excel_filter_sorting_desc_short:\n            grid.resourceStrings.igx_grid_excel_filter_sorting_desc\n         }}\n        </span>\n    </span>\n</igx-buttongroup>\n"
                }] }
    ];
    /** @nocollapse */
    IgxExcelStyleSortingComponent.ctorParameters = function () { return []; };
    IgxExcelStyleSortingComponent.propDecorators = {
        column: [{ type: Input }],
        grid: [{ type: Input }],
        displayDensity: [{ type: Input }],
        sortButtonGroup: [{ type: ViewChild, args: ['sortButtonGroup', { read: IgxButtonGroupComponent, static: true },] }]
    };
    return IgxExcelStyleSortingComponent;
}());
export { IgxExcelStyleSortingComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtc29ydGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2ZpbHRlcmluZy9leGNlbC1zdHlsZS9leGNlbC1zdHlsZS1zb3J0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFLdkQ7SUFvQkk7SUFBZSxDQUFDOzs7OztJQUVULDJEQUFtQjs7OztJQUExQixVQUEyQixhQUFhO1FBQ3BDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzFGO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxvREFBWTs7OztJQUFuQixVQUFvQixhQUFxQjtRQUNyQyxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQzs7Z0JBeENKLFNBQVMsU0FBQztvQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsZ2pDQUFtRDtpQkFDdEQ7Ozs7O3lCQUdJLEtBQUs7dUJBR0wsS0FBSztpQ0FHTCxLQUFLO2tDQUdMLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXdCakYsb0NBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQW5DWSw2QkFBNkI7OztJQUV0QywrQ0FDa0M7O0lBRWxDLDZDQUNpQjs7SUFFakIsdURBQ3NDOztJQUV0Qyx3REFDZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBWaWV3Q2hpbGQsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYnV0dG9uR3JvdXAvYnV0dG9uR3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZW5zaXR5JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWV4Y2VsLXN0eWxlLXNvcnRpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1zdHlsZS1zb3J0aW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlU29ydGluZ0NvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdyaWQ6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpc3BsYXlEZW5zaXR5OiBEaXNwbGF5RGVuc2l0eTtcblxuICAgIEBWaWV3Q2hpbGQoJ3NvcnRCdXR0b25Hcm91cCcsIHsgcmVhZDogSWd4QnV0dG9uR3JvdXBDb21wb25lbnQsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBzb3J0QnV0dG9uR3JvdXA6IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgcHVibGljIG9uU29ydEJ1dHRvbkNsaWNrZWQoc29ydERpcmVjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5zb3J0QnV0dG9uR3JvdXAuc2VsZWN0ZWRJbmRleGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC5pc0NvbHVtbkdyb3VwZWQodGhpcy5jb2x1bW4uZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCdXR0b24oc29ydERpcmVjdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5jbGVhclNvcnQodGhpcy5jb2x1bW4uZmllbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkLnNvcnQoeyBmaWVsZE5hbWU6IHRoaXMuY29sdW1uLmZpZWxkLCBkaXI6IHNvcnREaXJlY3Rpb24sIGlnbm9yZUNhc2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0QnV0dG9uKHNvcnREaXJlY3Rpb246IG51bWJlcikge1xuICAgICAgICBpZiAoc29ydERpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zb3J0QnV0dG9uR3JvdXAuc2VsZWN0QnV0dG9uKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3J0QnV0dG9uR3JvdXAuc2VsZWN0QnV0dG9uKDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
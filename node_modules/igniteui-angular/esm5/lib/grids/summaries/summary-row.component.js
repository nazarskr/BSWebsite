/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChildren, QueryList, HostBinding, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IgxSummaryCellComponent } from './summary-cell.component';
import { IgxGridForOfDirective } from '../../directives/for-of/for_of.directive';
import { GridBaseAPIService } from '../api.service';
import { IgxForOfSyncService } from '../../directives/for-of/for_of.sync.service';
var IgxSummaryRowComponent = /** @class */ (function () {
    function IgxSummaryRowComponent(gridAPI, element, cdr) {
        this.gridAPI = gridAPI;
        this.element = element;
        this.cdr = cdr;
        this.firstCellIndentation = -1;
    }
    Object.defineProperty(IgxSummaryRowComponent.prototype, "dataRowIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSummaryRowComponent.prototype, "minHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.summaryService.calcMaxSummaryHeight() - 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxSummaryRowComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    Object.defineProperty(IgxSummaryRowComponent.prototype, "grid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.gridAPI.grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSummaryRowComponent.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} columnName
     * @return {?}
     */
    IgxSummaryRowComponent.prototype.getColumnSummaries = /**
     * @param {?} columnName
     * @return {?}
     */
    function (columnName) {
        if (!this.summaries.get(columnName)) {
            return [];
        }
        return this.summaries.get(columnName);
    };
    Object.defineProperty(IgxSummaryRowComponent.prototype, "pinnedColumns", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.grid.pinnedColumns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSummaryRowComponent.prototype, "unpinnedColumns", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.grid.unpinnedColumns;
        },
        enumerable: true,
        configurable: true
    });
    IgxSummaryRowComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-grid-summary-row',
                    template: "<ng-container *ngIf=\"summaries.size\">\n    <ng-container *ngIf=\"grid.summariesMargin\">\n        <div\n        class=\"igx-grid__summaries-patch\"\n        [style.min-width.px]=\"grid.summariesMargin\"\n        [style.flex-basis.px]=\"grid.summariesMargin\"\n        ></div>\n    </ng-container>\n    <ng-container *ngIf=\"pinnedColumns.length > 0\">\n        <igx-grid-summary-cell *ngFor=\"let col of pinnedColumns | igxNotGrouped\"\n            class=\"igx-grid-summary igx-grid-summary--fw igx-grid-summary--pinned\"\n            [class.igx-grid-summary--cosy]=\"grid.displayDensity === 'cosy'\"\n            [class.igx-grid-summary--compact]=\"grid.displayDensity === 'compact'\"\n            [class.igx-grid-summary--empty]=\"!col.hasSummary\"\n            [class.igx-grid-summary--pinned-last]=\"col.isLastPinned\"\n            [column]=\"col\"\n            [firstCellIndentation]=\"firstCellIndentation\"\n            [rowIndex]=\"index\"\n            [summaryResults]=\"getColumnSummaries(col.field)\"\n            [hasSummary]=\"col.hasSummary\"\n            [density]=\"grid.displayDensity\"\n            [style.max-height.px]=\"minHeight\"\n            [style.min-height.px]=\"minHeight\">\n        </igx-grid-summary-cell>\n    </ng-container>\n    <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxNotGrouped\" [igxForScrollContainer]=\"grid.parentVirtDir\" let-colIndex=\"index\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]=\"grid.unpinnedWidth\" [igxForTrackBy]=\"grid.trackColumnChanges\" [igxForSizePropName]='\"calcPixelWidth\"' #igxDirRef>\n        <igx-grid-summary-cell\n            class=\"igx-grid-summary igx-grid-summary--fw\"\n            [class.igx-grid-summary--cosy]=\"grid.displayDensity === 'cosy'\"\n            [class.igx-grid-summary--compact]=\"grid.displayDensity === 'compact'\"\n            [class.igx-grid-summary--empty]=\"!col.hasSummary\"\n            [column]=\"col\"\n            [rowIndex]=\"index\"\n            [firstCellIndentation]=\"firstCellIndentation\"\n            [summaryResults]=\"getColumnSummaries(col.field)\"\n            [hasSummary]=\"col.hasSummary\"\n            [density]=\"grid.displayDensity\"\n            [style.max-height.px]=\"minHeight\"\n            [style.min-height.px]=\"minHeight\">\n        </igx-grid-summary-cell>\n    </ng-template>\n</ng-container>\n",
                    providers: [IgxForOfSyncService]
                }] }
    ];
    /** @nocollapse */
    IgxSummaryRowComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxSummaryRowComponent.propDecorators = {
        summaries: [{ type: Input }],
        gridID: [{ type: Input }],
        index: [{ type: Input }],
        firstCellIndentation: [{ type: Input }],
        dataRowIndex: [{ type: HostBinding, args: ['attr.data-rowIndex',] }],
        summaryCells: [{ type: ViewChildren, args: [IgxSummaryCellComponent, { read: IgxSummaryCellComponent },] }],
        virtDirRow: [{ type: ViewChild, args: ['igxDirRef', { read: IgxGridForOfDirective, static: false },] }]
    };
    return IgxSummaryRowComponent;
}());
export { IgxSummaryRowComponent };
if (false) {
    /** @type {?} */
    IgxSummaryRowComponent.prototype.summaries;
    /** @type {?} */
    IgxSummaryRowComponent.prototype.gridID;
    /** @type {?} */
    IgxSummaryRowComponent.prototype.index;
    /** @type {?} */
    IgxSummaryRowComponent.prototype.firstCellIndentation;
    /** @type {?} */
    IgxSummaryRowComponent.prototype.summaryCells;
    /**
     * @hidden
     * @type {?}
     */
    IgxSummaryRowComponent.prototype.virtDirRow;
    /** @type {?} */
    IgxSummaryRowComponent.prototype.gridAPI;
    /** @type {?} */
    IgxSummaryRowComponent.prototype.element;
    /** @type {?} */
    IgxSummaryRowComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9zdW1tYXJpZXMvc3VtbWFyeS1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFcEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFHbEY7SUF1Q0ksZ0NBQW1CLE9BQXFFLEVBQ3JFLE9BQW1CLEVBQ25CLEdBQXNCO1FBRnRCLFlBQU8sR0FBUCxPQUFPLENBQThEO1FBQ3JFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF0QmxDLHlCQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBc0JXLENBQUM7SUFwQjdDLHNCQUNJLGdEQUFZOzs7O1FBRGhCO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQVM7Ozs7UUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7Ozs7SUFlTSwwQ0FBUzs7O0lBQWhCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0JBQVcsd0NBQUk7Ozs7UUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpREFBYTs7OztRQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7Ozs7O0lBRU0sbURBQWtCOzs7O0lBQXpCLFVBQTBCLFVBQVU7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFLRCxzQkFBVyxpREFBYTtRQUh4Qjs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyxtREFBZTtRQUgxQjs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7O2dCQTNFSixTQUFTLFNBQUM7b0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHMxRUFBMkM7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNuQzs7OztnQkFaUSxrQkFBa0I7Z0JBUnZCLFVBQVU7Z0JBRVYsaUJBQWlCOzs7NEJBcUJoQixLQUFLO3lCQUdMLEtBQUs7d0JBR0wsS0FBSzt1Q0FHTCxLQUFLOytCQUdMLFdBQVcsU0FBQyxvQkFBb0I7K0JBU2hDLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTs2QkFNdkUsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQXdDMUUsNkJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQXJFWSxzQkFBc0I7OztJQUUvQiwyQ0FDa0Q7O0lBRWxELHdDQUNjOztJQUVkLHVDQUNxQjs7SUFFckIsc0RBQ2lDOztJQVdqQyw4Q0FDd0Q7Ozs7O0lBS3hELDRDQUM4Qzs7SUFFbEMseUNBQTRFOztJQUM1RSx5Q0FBMEI7O0lBQzFCLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIElucHV0LFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgVmlld0NoaWxkLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRG9DaGVja1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFN1bW1hcnlSZXN1bHQgfSBmcm9tICcuL2dyaWQtc3VtbWFyeSc7XG5pbXBvcnQgeyBJZ3hTdW1tYXJ5Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vc3VtbWFyeS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2YuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGb3JPZlN5bmNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLnN5bmMuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtZ3JpZC1zdW1tYXJ5LXJvdycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N1bW1hcnktcm93LmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtJZ3hGb3JPZlN5bmNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hTdW1tYXJ5Um93Q29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjayAge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3VtbWFyaWVzOiBNYXA8c3RyaW5nLCBJZ3hTdW1tYXJ5UmVzdWx0W10+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JpZElEO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZpcnN0Q2VsbEluZGVudGF0aW9uID0gLTE7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1yb3dJbmRleCcpXG4gICAgZ2V0IGRhdGFSb3dJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0IG1pbkhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5zdW1tYXJ5U2VydmljZS5jYWxjTWF4U3VtbWFyeUhlaWdodCgpIC0gMTtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkcmVuKElneFN1bW1hcnlDZWxsQ29tcG9uZW50LCB7IHJlYWQ6IElneFN1bW1hcnlDZWxsQ29tcG9uZW50IH0pXG4gICAgcHVibGljIHN1bW1hcnlDZWxsczogUXVlcnlMaXN0PElneFN1bW1hcnlDZWxsQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdpZ3hEaXJSZWYnLCB7IHJlYWQ6IElneEdyaWRGb3JPZkRpcmVjdGl2ZSwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB2aXJ0RGlyUm93OiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgICAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBwdWJsaWMgbmdEb0NoZWNrKCkge1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29sdW1uU3VtbWFyaWVzKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1bW1hcmllcy5nZXQoY29sdW1uTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdW1tYXJpZXMuZ2V0KGNvbHVtbk5hbWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcGlubmVkQ29sdW1ucygpOiBJZ3hDb2x1bW5Db21wb25lbnRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucGlubmVkQ29sdW1ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCB1bnBpbm5lZENvbHVtbnMoKTogSWd4Q29sdW1uQ29tcG9uZW50W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucztcbiAgICB9XG59XG4iXX0=
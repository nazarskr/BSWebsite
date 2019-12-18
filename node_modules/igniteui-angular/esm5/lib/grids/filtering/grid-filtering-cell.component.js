/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, HostBinding, ElementRef, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { IgxColumnComponent } from '../column.component';
import { IgxChipsAreaComponent, IgxChipComponent } from '../../chips';
import { IgxFilteringService } from './grid-filtering.service';
import { IgxGridNavigationService } from '../grid-navigation.service';
/**
 * @hidden
 */
var IgxGridFilteringCellComponent = /** @class */ (function () {
    function IgxGridFilteringCellComponent(cdr, filteringService, navService) {
        this.cdr = cdr;
        this.filteringService = filteringService;
        this.navService = navService;
        this.baseClass = 'igx-grid__filtering-cell-indicator';
        this.currentTemplate = null;
        this.moreFiltersCount = 0;
        this.cssClass = 'igx-grid__filtering-cell';
        this.filteringService.subscribeToEvents();
    }
    /**
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.filteringService.columnToMoreIconHidden.set(this.column.field, true);
    };
    /**
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateFilterCellArea();
    };
    /**
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.updateFilterCellArea();
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.onTabKeyDown = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (this.isLastElementFocused()) {
            this.filteringService.grid.navigation.navigateNextFilterCell(this.column, eventArgs);
        }
        eventArgs.stopPropagation();
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.onShiftTabKeyDown = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (this.isFirstElementFocused()) {
            this.filteringService.grid.navigation.navigatePrevFilterCell(this.column, eventArgs);
        }
        eventArgs.stopPropagation();
    };
    /**
     * Returns whether a chip with a given index is visible or not.
     */
    /**
     * Returns whether a chip with a given index is visible or not.
     * @param {?} index
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.isChipVisible = /**
     * Returns whether a chip with a given index is visible or not.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var expression = this.expressionsList[index];
        return !!(expression && expression.isVisible);
    };
    /**
     * Updates the filtering cell area.
     */
    /**
     * Updates the filtering cell area.
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.updateFilterCellArea = /**
     * Updates the filtering cell area.
     * @return {?}
     */
    function () {
        this.expressionsList = this.filteringService.getExpressions(this.column.field);
        this.updateVisibleFilters();
    };
    Object.defineProperty(IgxGridFilteringCellComponent.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.column.filterable) {
                this.currentTemplate = null;
                return null;
            }
            if (this.column.filterCellTemplate) {
                this.currentTemplate = this.column.filterCellTemplate;
                return this.column.filterCellTemplate;
            }
            /** @type {?} */
            var expressionTree = this.column.filteringExpressionsTree;
            if (!expressionTree || expressionTree.filteringOperands.length === 0) {
                this.currentTemplate = this.emptyFilter;
                return this.emptyFilter;
            }
            if (this.filteringService.isFilterComplex(this.column.field)) {
                this.currentTemplate = this.complexFilter;
                return this.complexFilter;
            }
            this.currentTemplate = this.defaultFilter;
            return this.defaultFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridFilteringCellComponent.prototype, "context", {
        /**
         * Gets the context passed to the filter template.
         * @memberof IgxGridFilteringCellComponent
         */
        get: /**
         * Gets the context passed to the filter template.
         * \@memberof IgxGridFilteringCellComponent
         * @return {?}
         */
        function () {
            return {
                column: this.column
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Chip clicked event handler.
     */
    /**
     * Chip clicked event handler.
     * @param {?=} expression
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.onChipClicked = /**
     * Chip clicked event handler.
     * @param {?=} expression
     * @return {?}
     */
    function (expression) {
        if (expression) {
            this.expressionsList.forEach(function (item) {
                item.isSelected = (item.expression === expression);
            });
        }
        else if (this.expressionsList.length > 0) {
            this.expressionsList.forEach(function (item) {
                item.isSelected = false;
            });
            this.expressionsList[0].isSelected = true;
        }
        /** @type {?} */
        var index = this.filteringService.unpinnedFilterableColumns.indexOf(this.column);
        if (index >= 0 && !this.isColumnRightVisible(index)) {
            this.filteringService.scrollToFilterCell(this.filteringService.unpinnedFilterableColumns[index], true);
        }
        else if (index >= 0 && !this.isColumnLeftVisible(index)) {
            this.filteringService.scrollToFilterCell(this.filteringService.unpinnedFilterableColumns[index], false);
        }
        this.filteringService.filteredColumn = this.column;
        this.filteringService.isFilterRowVisible = true;
        this.filteringService.selectedExpression = expression;
    };
    /**
     * Chip removed event handler.
     */
    /**
     * Chip removed event handler.
     * @param {?} eventArgs
     * @param {?} item
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.onChipRemoved = /**
     * Chip removed event handler.
     * @param {?} eventArgs
     * @param {?} item
     * @return {?}
     */
    function (eventArgs, item) {
        /** @type {?} */
        var indexToRemove = this.expressionsList.indexOf(item);
        this.removeExpression(indexToRemove);
        this.focusChip();
    };
    /**
     * Clears the filtering.
     */
    /**
     * Clears the filtering.
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.clearFiltering = /**
     * Clears the filtering.
     * @return {?}
     */
    function () {
        this.filteringService.clearFilter(this.column.field);
        this.cdr.detectChanges();
    };
    /**
     * Chip keydown event handler.
     */
    /**
     * Chip keydown event handler.
     * @param {?} eventArgs
     * @param {?=} expression
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.onChipKeyDown = /**
     * Chip keydown event handler.
     * @param {?} eventArgs
     * @param {?=} expression
     * @return {?}
     */
    function (eventArgs, expression) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            eventArgs.preventDefault();
            this.onChipClicked(expression);
        }
    };
    /**
     * Returns the filtering indicator class.
     */
    /**
     * Returns the filtering indicator class.
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.filteringIndicatorClass = /**
     * Returns the filtering indicator class.
     * @return {?}
     */
    function () {
        var _a;
        return _a = {},
            _a[this.baseClass] = !this.isMoreIconHidden(),
            _a[this.baseClass + "--hidden"] = this.isMoreIconHidden(),
            _a;
    };
    /**
     * Focus a chip depending on the current visible template.
     */
    /**
     * Focus a chip depending on the current visible template.
     * @param {?=} focusFirst
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.focusChip = /**
     * Focus a chip depending on the current visible template.
     * @param {?=} focusFirst
     * @return {?}
     */
    function (focusFirst) {
        if (focusFirst === void 0) { focusFirst = false; }
        if (this.currentTemplate === this.defaultFilter) {
            if (focusFirst) {
                this.focusFirstElement();
            }
            else {
                this.focusElement();
            }
        }
        else if (this.currentTemplate === this.emptyFilter) {
            this.ghostChip.elementRef.nativeElement.querySelector(".igx-chip__item").focus();
        }
        else if (this.currentTemplate === this.complexFilter) {
            this.complexChip.elementRef.nativeElement.querySelector(".igx-chip__item").focus();
        }
    };
    /**
     * @private
     * @param {?} indexToRemove
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.removeExpression = /**
     * @private
     * @param {?} indexToRemove
     * @return {?}
     */
    function (indexToRemove) {
        if (indexToRemove === 0 && this.expressionsList.length === 1) {
            this.clearFiltering();
            return;
        }
        this.filteringService.removeExpression(this.column.field, indexToRemove);
        this.updateVisibleFilters();
        this.filteringService.filterInternal(this.column.field);
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.isMoreIconHidden = /**
     * @private
     * @return {?}
     */
    function () {
        return this.filteringService.columnToMoreIconHidden.get(this.column.field);
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.updateVisibleFilters = /**
     * @private
     * @return {?}
     */
    function () {
        this.expressionsList.forEach(function (ex) { return ex.isVisible = true; });
        if (this.moreIcon) {
            this.filteringService.columnToMoreIconHidden.set(this.column.field, true);
        }
        this.cdr.detectChanges();
        if (this.chipsArea && this.expressionsList.length > 1) {
            /** @type {?} */
            var areaWidth = this.chipsArea.element.nativeElement.offsetWidth;
            /** @type {?} */
            var viewWidth = 0;
            /** @type {?} */
            var chipsAreaElements = this.chipsArea.element.nativeElement.children;
            /** @type {?} */
            var visibleChipsCount = 0;
            /** @type {?} */
            var moreIconWidth = this.moreIcon.nativeElement.offsetWidth -
                parseInt(document.defaultView.getComputedStyle(this.moreIcon.nativeElement)['margin-left'], 10);
            for (var index = 0; index < chipsAreaElements.length - 1; index++) {
                if (viewWidth + chipsAreaElements[index].offsetWidth < areaWidth) {
                    viewWidth += chipsAreaElements[index].offsetWidth;
                    if (index % 2 === 0) {
                        visibleChipsCount++;
                    }
                    else {
                        viewWidth += parseInt(document.defaultView.getComputedStyle(chipsAreaElements[index])['margin-left'], 10);
                        viewWidth += parseInt(document.defaultView.getComputedStyle(chipsAreaElements[index])['margin-right'], 10);
                    }
                }
                else {
                    if (index % 2 !== 0 && viewWidth + moreIconWidth > areaWidth) {
                        visibleChipsCount--;
                    }
                    else if (visibleChipsCount > 0 && viewWidth - chipsAreaElements[index - 1].offsetWidth + moreIconWidth > areaWidth) {
                        visibleChipsCount--;
                    }
                    this.moreFiltersCount = this.expressionsList.length - visibleChipsCount;
                    this.filteringService.columnToMoreIconHidden.set(this.column.field, false);
                    break;
                }
            }
            for (var i = visibleChipsCount; i < this.expressionsList.length; i++) {
                this.expressionsList[i].isVisible = false;
            }
            this.cdr.detectChanges();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.isFirstElementFocused = /**
     * @private
     * @return {?}
     */
    function () {
        return !(this.chipsArea && this.chipsArea.chipsList.length > 0 &&
            this.chipsArea.chipsList.first.elementRef.nativeElement.querySelector(".igx-chip__item") !== document.activeElement);
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.isLastElementFocused = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.chipsArea) {
            if (this.isMoreIconHidden() && this.chipsArea.chipsList.last.elementRef.nativeElement.querySelector(".igx-chip__remove") !==
                document.activeElement) {
                return false;
            }
            else if (!this.isMoreIconHidden() && this.moreIcon.nativeElement !== document.activeElement) {
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.focusFirstElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.chipsArea.chipsList.length > 0) {
            this.chipsArea.chipsList.first.elementRef.nativeElement.querySelector(".igx-chip__item").focus();
        }
        else {
            this.moreIcon.nativeElement.focus();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.focusElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.filteringService.shouldFocusNext) {
            if (!this.isMoreIconHidden() && this.chipsArea.chipsList.length === 0) {
                this.moreIcon.nativeElement.focus();
            }
            else {
                this.chipsArea.chipsList.first.elementRef.nativeElement.querySelector(".igx-chip__item").focus();
            }
        }
        else {
            if (!this.isMoreIconHidden()) {
                this.moreIcon.nativeElement.focus();
            }
            else {
                this.chipsArea.chipsList.last.elementRef.nativeElement.querySelector(".igx-chip__remove").focus();
            }
        }
    };
    /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.isColumnRightVisible = /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    function (columnIndex) {
        if (this.filteringService.areAllColumnsInView) {
            return true;
        }
        /** @type {?} */
        var currentColumnRight = 0;
        for (var index = 0; index < this.filteringService.unpinnedColumns.length; index++) {
            currentColumnRight += parseInt(this.filteringService.unpinnedColumns[index].width, 10);
            if (this.filteringService.unpinnedColumns[index] === this.filteringService.unpinnedFilterableColumns[columnIndex]) {
                break;
            }
        }
        /** @type {?} */
        var width = this.filteringService.displayContainerWidth + this.filteringService.displayContainerScrollLeft;
        return currentColumnRight <= width;
    };
    /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    IgxGridFilteringCellComponent.prototype.isColumnLeftVisible = /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    function (columnIndex) {
        if (this.filteringService.areAllColumnsInView) {
            return true;
        }
        /** @type {?} */
        var currentColumnLeft = 0;
        for (var index = 0; index < this.filteringService.unpinnedColumns.length; index++) {
            if (this.filteringService.unpinnedColumns[index] === this.filteringService.unpinnedFilterableColumns[columnIndex]) {
                break;
            }
            currentColumnLeft += parseInt(this.filteringService.unpinnedColumns[index].width, 10);
        }
        return currentColumnLeft >= this.filteringService.displayContainerScrollLeft;
    };
    IgxGridFilteringCellComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-grid-filtering-cell',
                    template: "<ng-template #emptyFilter>\n        <igx-chips-area [attr.draggable]=\"false\" class=\"igx-filtering-chips\">\n            <igx-chip #ghostChip [attr.draggable]=\"false\" (click)=\"onChipClicked()\" (keydown)=\"onChipKeyDown($event)\" [displayDensity]=\"'cosy'\">\n                <igx-icon [attr.draggable]=\"false\" igxPrefix>filter_list</igx-icon>\n                <span [attr.draggable]=\"false\">{{filteringService.grid.resourceStrings.igx_grid_filter}}</span>\n            </igx-chip>\n        </igx-chips-area>\n</ng-template>\n\n<ng-template #defaultFilter>\n    <igx-chips-area #chipsArea class=\"igx-filtering-chips\">\n        <ng-container *ngFor=\"let item of expressionsList; let last = last; let index = index;\" >\n            <igx-chip\n                *ngIf=\"isChipVisible(index)\"\n                [removable]=\"true\"\n                [displayDensity]=\"'cosy'\"\n                (click)=\"onChipClicked(item.expression)\"\n                (keydown)=\"onChipKeyDown($event, item.expression)\"\n                (onRemove)=\"onChipRemoved($event, item)\">\n                <igx-icon igxPrefix\n                    fontSet=\"filtering-icons\"\n                    [name]=\"item.expression.condition.iconName\">\n                </igx-icon>\n                <span #label>\n                    {{filteringService.getChipLabel(item.expression)}}\n                </span>\n            </igx-chip>\n            <span class=\"igx-filtering-chips__connector\" *ngIf=\"!last && isChipVisible(index + 1)\">{{filteringService.getOperatorAsString(item.afterOperator)}}</span>\n        </ng-container>\n        <div #moreIcon [ngClass]=\"filteringIndicatorClass()\" (click)=\"onChipClicked()\" (keydown)=\"onChipKeyDown($event)\" tabindex=\"0\">\n            <igx-icon>filter_list</igx-icon>\n            <igx-badge [value]=\"moreFiltersCount\"></igx-badge>\n        </div>\n    </igx-chips-area>\n</ng-template>\n\n<ng-template #complexFilter>\n    <igx-chip #complexChip [removable]=\"true\" [displayDensity]=\"'cosy'\" (onRemove)=\"clearFiltering()\">\n        <igx-icon igxPrefix>filter_list</igx-icon>\n        <span>{{filteringService.grid.resourceStrings.igx_grid_complex_filter}}</span>\n    </igx-chip>\n</ng-template>\n\n<ng-container *ngTemplateOutlet=\"template; context: context\"></ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IgxGridFilteringCellComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: IgxFilteringService },
        { type: IgxGridNavigationService }
    ]; };
    IgxGridFilteringCellComponent.propDecorators = {
        column: [{ type: Input }],
        emptyFilter: [{ type: ViewChild, args: ['emptyFilter', { read: TemplateRef, static: true },] }],
        defaultFilter: [{ type: ViewChild, args: ['defaultFilter', { read: TemplateRef, static: true },] }],
        complexFilter: [{ type: ViewChild, args: ['complexFilter', { read: TemplateRef, static: true },] }],
        chipsArea: [{ type: ViewChild, args: ['chipsArea', { read: IgxChipsAreaComponent, static: false },] }],
        moreIcon: [{ type: ViewChild, args: ['moreIcon', { read: ElementRef, static: false },] }],
        ghostChip: [{ type: ViewChild, args: ['ghostChip', { read: IgxChipComponent, static: false },] }],
        complexChip: [{ type: ViewChild, args: ['complexChip', { read: IgxChipComponent, static: false },] }],
        cssClass: [{ type: HostBinding, args: ['class.igx-grid__filtering-cell',] }],
        onTabKeyDown: [{ type: HostListener, args: ['keydown.tab', ['$event'],] }],
        onShiftTabKeyDown: [{ type: HostListener, args: ['keydown.shift.tab', ['$event'],] }]
    };
    return IgxGridFilteringCellComponent;
}());
export { IgxGridFilteringCellComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringCellComponent.prototype.baseClass;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringCellComponent.prototype.currentTemplate;
    /** @type {?} */
    IgxGridFilteringCellComponent.prototype.expressionsList;
    /** @type {?} */
    IgxGridFilteringCellComponent.prototype.moreFiltersCount;
    /** @type {?} */
    IgxGridFilteringCellComponent.prototype.column;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringCellComponent.prototype.emptyFilter;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringCellComponent.prototype.defaultFilter;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringCellComponent.prototype.complexFilter;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringCellComponent.prototype.chipsArea;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringCellComponent.prototype.moreIcon;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringCellComponent.prototype.ghostChip;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringCellComponent.prototype.complexChip;
    /** @type {?} */
    IgxGridFilteringCellComponent.prototype.cssClass;
    /** @type {?} */
    IgxGridFilteringCellComponent.prototype.cdr;
    /** @type {?} */
    IgxGridFilteringCellComponent.prototype.filteringService;
    /** @type {?} */
    IgxGridFilteringCellComponent.prototype.navService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1maWx0ZXJpbmctY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2ZpbHRlcmluZy9ncmlkLWZpbHRlcmluZy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUVYLFVBQVUsRUFDVixZQUFZLEVBRVosdUJBQXVCLEVBRTFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXpELE9BQU8sRUFBc0IscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUYsT0FBTyxFQUFFLG1CQUFtQixFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBRTdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBS3RFO0lBeUNJLHVDQUFtQixHQUFzQixFQUFTLGdCQUFxQyxFQUFTLFVBQW9DO1FBQWpILFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBakM1SCxjQUFTLEdBQUcsb0NBQW9DLENBQUM7UUFDakQsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFHeEIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBMkJyQixhQUFRLEdBQUcsMEJBQTBCLENBQUM7UUFHekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGdEQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxL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WSw2QkFBNkI7Ozs7OztJQUV0QyxrREFBeUQ7Ozs7O0lBQ3pELHdEQUErQjs7SUFFL0Isd0RBQXVDOztJQUN2Qyx5REFBNEI7O0lBRTVCLCtDQUNrQzs7Ozs7SUFFbEMsb0RBQ3dDOzs7OztJQUV4QyxzREFDMEM7Ozs7O0lBRTFDLHNEQUMwQzs7Ozs7SUFFMUMsa0RBQzJDOzs7OztJQUUzQyxpREFDK0I7Ozs7O0lBRS9CLGtEQUNzQzs7Ozs7SUFFdEMsb0RBQ3dDOztJQUV4QyxpREFDNkM7O0lBRWpDLDRDQUE2Qjs7SUFBRSx5REFBNEM7O0lBQUUsbURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgT25Jbml0LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIERvQ2hlY2tcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElGaWx0ZXJpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQmFzZUNoaXBFdmVudEFyZ3MsIElneENoaXBzQXJlYUNvbXBvbmVudCwgSWd4Q2hpcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoaXBzJztcbmltcG9ydCB7IElneEZpbHRlcmluZ1NlcnZpY2UsIEV4cHJlc3Npb25VSSB9IGZyb20gJy4vZ3JpZC1maWx0ZXJpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9ncmlkLW5hdmlnYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1ncmlkLWZpbHRlcmluZy1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC1maWx0ZXJpbmctY2VsbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEZpbHRlcmluZ0NlbGxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIERvQ2hlY2sge1xuXG4gICAgcHJpdmF0ZSBiYXNlQ2xhc3MgPSAnaWd4LWdyaWRfX2ZpbHRlcmluZy1jZWxsLWluZGljYXRvcic7XG4gICAgcHJpdmF0ZSBjdXJyZW50VGVtcGxhdGUgPSBudWxsO1xuXG4gICAgcHVibGljIGV4cHJlc3Npb25zTGlzdDogRXhwcmVzc2lvblVJW107XG4gICAgcHVibGljIG1vcmVGaWx0ZXJzQ291bnQgPSAwO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdlbXB0eUZpbHRlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBlbXB0eUZpbHRlcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRGaWx0ZXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEZpbHRlcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbXBsZXhGaWx0ZXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgY29tcGxleEZpbHRlcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NoaXBzQXJlYScsIHsgcmVhZDogSWd4Q2hpcHNBcmVhQ29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGNoaXBzQXJlYTogSWd4Q2hpcHNBcmVhQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnbW9yZUljb24nLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgbW9yZUljb246IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdnaG9zdENoaXAnLCB7IHJlYWQ6IElneENoaXBDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgZ2hvc3RDaGlwOiBJZ3hDaGlwQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnY29tcGxleENoaXAnLCB7IHJlYWQ6IElneENoaXBDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgY29tcGxleENoaXA6IElneENoaXBDb21wb25lbnQ7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkX19maWx0ZXJpbmctY2VsbCcpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1ncmlkX19maWx0ZXJpbmctY2VsbCc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2UsIHB1YmxpYyBuYXZTZXJ2aWNlOiBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnN1YnNjcmliZVRvRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5jb2x1bW5Ub01vcmVJY29uSGlkZGVuLnNldCh0aGlzLmNvbHVtbi5maWVsZCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlckNlbGxBcmVhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJDZWxsQXJlYSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24udGFiJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25UYWJLZXlEb3duKGV2ZW50QXJncykge1xuXG4gICAgICAgIGlmICh0aGlzLmlzTGFzdEVsZW1lbnRGb2N1c2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVOZXh0RmlsdGVyQ2VsbCh0aGlzLmNvbHVtbiwgZXZlbnRBcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudEFyZ3Muc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zaGlmdC50YWInLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblNoaWZ0VGFiS2V5RG93bihldmVudEFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGaXJzdEVsZW1lbnRGb2N1c2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVQcmV2RmlsdGVyQ2VsbCh0aGlzLmNvbHVtbiwgZXZlbnRBcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudEFyZ3Muc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGEgY2hpcCB3aXRoIGEgZ2l2ZW4gaW5kZXggaXMgdmlzaWJsZSBvciBub3QuXG4gICAgICovXG4gICAgcHVibGljIGlzQ2hpcFZpc2libGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uc0xpc3RbaW5kZXhdO1xuICAgICAgICByZXR1cm4gISEoZXhwcmVzc2lvbiAmJiBleHByZXNzaW9uLmlzVmlzaWJsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZmlsdGVyaW5nIGNlbGwgYXJlYS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlRmlsdGVyQ2VsbEFyZWEoKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0ID0gdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmdldEV4cHJlc3Npb25zKHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlRmlsdGVycygpO1xuICAgIH1cblxuICAgIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHVtbi5maWx0ZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5maWx0ZXJDZWxsVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGhpcy5jb2x1bW4uZmlsdGVyQ2VsbFRlbXBsYXRlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmZpbHRlckNlbGxUZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb25UcmVlID0gdGhpcy5jb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICBpZiAoIWV4cHJlc3Npb25UcmVlIHx8IGV4cHJlc3Npb25UcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0aGlzLmVtcHR5RmlsdGVyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlGaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmlzRmlsdGVyQ29tcGxleCh0aGlzLmNvbHVtbi5maWVsZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGhpcy5jb21wbGV4RmlsdGVyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxleEZpbHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGhpcy5kZWZhdWx0RmlsdGVyO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RmlsdGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbnRleHQgcGFzc2VkIHRvIHRoZSBmaWx0ZXIgdGVtcGxhdGUuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpcCBjbGlja2VkIGV2ZW50IGhhbmRsZXIuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hpcENsaWNrZWQoZXhwcmVzc2lvbj86IElGaWx0ZXJpbmdFeHByZXNzaW9uKSB7XG4gICAgICAgIGlmIChleHByZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5pc1NlbGVjdGVkID0gKGl0ZW0uZXhwcmVzc2lvbiA9PT0gZXhwcmVzc2lvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRGaWx0ZXJhYmxlQ29sdW1ucy5pbmRleE9mKHRoaXMuY29sdW1uKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgIXRoaXMuaXNDb2x1bW5SaWdodFZpc2libGUoaW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2Uuc2Nyb2xsVG9GaWx0ZXJDZWxsKHRoaXMuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZEZpbHRlcmFibGVDb2x1bW5zW2luZGV4XSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gMCAmJiAhdGhpcy5pc0NvbHVtbkxlZnRWaXNpYmxlKGluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnNjcm9sbFRvRmlsdGVyQ2VsbCh0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRGaWx0ZXJhYmxlQ29sdW1uc1tpbmRleF0sIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5maWx0ZXJlZENvbHVtbiA9IHRoaXMuY29sdW1uO1xuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuaXNGaWx0ZXJSb3dWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnNlbGVjdGVkRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpcCByZW1vdmVkIGV2ZW50IGhhbmRsZXIuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hpcFJlbW92ZWQoZXZlbnRBcmdzOiBJQmFzZUNoaXBFdmVudEFyZ3MsIGl0ZW06IEV4cHJlc3Npb25VSSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5leHByZXNzaW9uc0xpc3QuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFeHByZXNzaW9uKGluZGV4VG9SZW1vdmUpO1xuICAgICAgICB0aGlzLmZvY3VzQ2hpcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZmlsdGVyaW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhckZpbHRlcmluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmNsZWFyRmlsdGVyKHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaXAga2V5ZG93biBldmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBLZXlEb3duKGV2ZW50QXJnczogS2V5Ym9hcmRFdmVudCwgZXhwcmVzc2lvbj86IElGaWx0ZXJpbmdFeHByZXNzaW9uKSB7XG4gICAgICAgIGlmIChldmVudEFyZ3Mua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMub25DaGlwQ2xpY2tlZChleHByZXNzaW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpbHRlcmluZyBpbmRpY2F0b3IgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIGZpbHRlcmluZ0luZGljYXRvckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW3RoaXMuYmFzZUNsYXNzXTogIXRoaXMuaXNNb3JlSWNvbkhpZGRlbigpLFxuICAgICAgICAgICAgW2Ake3RoaXMuYmFzZUNsYXNzfS0taGlkZGVuYF06IHRoaXMuaXNNb3JlSWNvbkhpZGRlbigpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9jdXMgYSBjaGlwIGRlcGVuZGluZyBvbiB0aGUgY3VycmVudCB2aXNpYmxlIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1c0NoaXAoZm9jdXNGaXJzdDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9PT0gdGhpcy5kZWZhdWx0RmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoZm9jdXNGaXJzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNGaXJzdEVsZW1lbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0VsZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9PT0gdGhpcy5lbXB0eUZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5naG9zdENoaXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pZ3gtY2hpcF9faXRlbWApLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VGVtcGxhdGUgPT09IHRoaXMuY29tcGxleEZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV4Q2hpcC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlneC1jaGlwX19pdGVtYCkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRXhwcmVzc2lvbihpbmRleFRvUmVtb3ZlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPT09IDAgJiYgdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UucmVtb3ZlRXhwcmVzc2lvbih0aGlzLmNvbHVtbi5maWVsZCwgaW5kZXhUb1JlbW92ZSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlRmlsdGVycygpO1xuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZmlsdGVySW50ZXJuYWwodGhpcy5jb2x1bW4uZmllbGQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNNb3JlSWNvbkhpZGRlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyaW5nU2VydmljZS5jb2x1bW5Ub01vcmVJY29uSGlkZGVuLmdldCh0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaXNpYmxlRmlsdGVycygpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3QuZm9yRWFjaCgoZXgpID0+IGV4LmlzVmlzaWJsZSA9IHRydWUpO1xuXG4gICAgICAgIGlmICh0aGlzLm1vcmVJY29uKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuY29sdW1uVG9Nb3JlSWNvbkhpZGRlbi5zZXQodGhpcy5jb2x1bW4uZmllbGQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICBpZiAodGhpcy5jaGlwc0FyZWEgJiYgdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgYXJlYVdpZHRoID0gdGhpcy5jaGlwc0FyZWEuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgbGV0IHZpZXdXaWR0aCA9IDA7XG4gICAgICAgICAgICBjb25zdCBjaGlwc0FyZWFFbGVtZW50cyA9IHRoaXMuY2hpcHNBcmVhLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGxldCB2aXNpYmxlQ2hpcHNDb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtb3JlSWNvbldpZHRoID0gdGhpcy5tb3JlSWNvbi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgICBwYXJzZUludChkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubW9yZUljb24ubmF0aXZlRWxlbWVudClbJ21hcmdpbi1sZWZ0J10sIDEwKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoaXBzQXJlYUVsZW1lbnRzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmlld1dpZHRoICsgY2hpcHNBcmVhRWxlbWVudHNbaW5kZXhdLm9mZnNldFdpZHRoIDwgYXJlYVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdXaWR0aCArPSBjaGlwc0FyZWFFbGVtZW50c1tpbmRleF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVDaGlwc0NvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3V2lkdGggKz0gcGFyc2VJbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjaGlwc0FyZWFFbGVtZW50c1tpbmRleF0pWydtYXJnaW4tbGVmdCddLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3V2lkdGggKz0gcGFyc2VJbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjaGlwc0FyZWFFbGVtZW50c1tpbmRleF0pWydtYXJnaW4tcmlnaHQnXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICUgMiAhPT0gMCAmJiB2aWV3V2lkdGggKyBtb3JlSWNvbldpZHRoID4gYXJlYVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlQ2hpcHNDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZpc2libGVDaGlwc0NvdW50ID4gMCAmJiB2aWV3V2lkdGggLSBjaGlwc0FyZWFFbGVtZW50c1tpbmRleCAtIDFdLm9mZnNldFdpZHRoICsgbW9yZUljb25XaWR0aCA+IGFyZWFXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUNoaXBzQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vcmVGaWx0ZXJzQ291bnQgPSB0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGggLSB2aXNpYmxlQ2hpcHNDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmNvbHVtblRvTW9yZUljb25IaWRkZW4uc2V0KHRoaXMuY29sdW1uLmZpZWxkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZpc2libGVDaGlwc0NvdW50OyBpIDwgdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFtpXS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNGaXJzdEVsZW1lbnRGb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISh0aGlzLmNoaXBzQXJlYSAmJiB0aGlzLmNoaXBzQXJlYS5jaGlwc0xpc3QubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0LmZpcnN0LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaWd4LWNoaXBfX2l0ZW1gKSAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0xhc3RFbGVtZW50Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpcHNBcmVhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vcmVJY29uSGlkZGVuKCkgJiYgdGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0Lmxhc3QuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pZ3gtY2hpcF9fcmVtb3ZlYCkgIT09XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNNb3JlSWNvbkhpZGRlbigpICYmIHRoaXMubW9yZUljb24ubmF0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzRmlyc3RFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hpcHNBcmVhLmNoaXBzTGlzdC5maXJzdC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlneC1jaGlwX19pdGVtYCkuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9yZUljb24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0VsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmluZ1NlcnZpY2Uuc2hvdWxkRm9jdXNOZXh0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3JlSWNvbkhpZGRlbigpICYmIHRoaXMuY2hpcHNBcmVhLmNoaXBzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vcmVJY29uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0LmZpcnN0LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaWd4LWNoaXBfX2l0ZW1gKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW9yZUljb25IaWRkZW4oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9yZUljb24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaXBzQXJlYS5jaGlwc0xpc3QubGFzdC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlneC1jaGlwX19yZW1vdmVgKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0NvbHVtblJpZ2h0VmlzaWJsZShjb2x1bW5JbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmluZ1NlcnZpY2UuYXJlQWxsQ29sdW1uc0luVmlldykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnRDb2x1bW5SaWdodCA9IDA7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRDb2x1bW5zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY3VycmVudENvbHVtblJpZ2h0ICs9IHBhcnNlSW50KHRoaXMuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZENvbHVtbnNbaW5kZXhdLndpZHRoLCAxMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkQ29sdW1uc1tpbmRleF0gPT09IHRoaXMuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZEZpbHRlcmFibGVDb2x1bW5zW2NvbHVtbkluZGV4XSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmRpc3BsYXlDb250YWluZXJXaWR0aCArIHRoaXMuZmlsdGVyaW5nU2VydmljZS5kaXNwbGF5Q29udGFpbmVyU2Nyb2xsTGVmdDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDb2x1bW5SaWdodCA8PSB3aWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQ29sdW1uTGVmdFZpc2libGUoY29sdW1uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmFyZUFsbENvbHVtbnNJblZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50Q29sdW1uTGVmdCA9IDA7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRDb2x1bW5zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZENvbHVtbnNbaW5kZXhdID09PSB0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRGaWx0ZXJhYmxlQ29sdW1uc1tjb2x1bW5JbmRleF0pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRDb2x1bW5MZWZ0ICs9IHBhcnNlSW50KHRoaXMuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZENvbHVtbnNbaW5kZXhdLndpZHRoLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDb2x1bW5MZWZ0ID49IHRoaXMuZmlsdGVyaW5nU2VydmljZS5kaXNwbGF5Q29udGFpbmVyU2Nyb2xsTGVmdDtcbiAgICB9XG59XG4iXX0=
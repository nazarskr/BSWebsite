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
export class IgxGridFilteringCellComponent {
    /**
     * @param {?} cdr
     * @param {?} filteringService
     * @param {?} navService
     */
    constructor(cdr, filteringService, navService) {
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
    ngOnInit() {
        this.filteringService.columnToMoreIconHidden.set(this.column.field, true);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateFilterCellArea();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.updateFilterCellArea();
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onTabKeyDown(eventArgs) {
        if (this.isLastElementFocused()) {
            this.filteringService.grid.navigation.navigateNextFilterCell(this.column, eventArgs);
        }
        eventArgs.stopPropagation();
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onShiftTabKeyDown(eventArgs) {
        if (this.isFirstElementFocused()) {
            this.filteringService.grid.navigation.navigatePrevFilterCell(this.column, eventArgs);
        }
        eventArgs.stopPropagation();
    }
    /**
     * Returns whether a chip with a given index is visible or not.
     * @param {?} index
     * @return {?}
     */
    isChipVisible(index) {
        /** @type {?} */
        const expression = this.expressionsList[index];
        return !!(expression && expression.isVisible);
    }
    /**
     * Updates the filtering cell area.
     * @return {?}
     */
    updateFilterCellArea() {
        this.expressionsList = this.filteringService.getExpressions(this.column.field);
        this.updateVisibleFilters();
    }
    /**
     * @return {?}
     */
    get template() {
        if (!this.column.filterable) {
            this.currentTemplate = null;
            return null;
        }
        if (this.column.filterCellTemplate) {
            this.currentTemplate = this.column.filterCellTemplate;
            return this.column.filterCellTemplate;
        }
        /** @type {?} */
        const expressionTree = this.column.filteringExpressionsTree;
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
    }
    /**
     * Gets the context passed to the filter template.
     * \@memberof IgxGridFilteringCellComponent
     * @return {?}
     */
    get context() {
        return {
            column: this.column
        };
    }
    /**
     * Chip clicked event handler.
     * @param {?=} expression
     * @return {?}
     */
    onChipClicked(expression) {
        if (expression) {
            this.expressionsList.forEach((item) => {
                item.isSelected = (item.expression === expression);
            });
        }
        else if (this.expressionsList.length > 0) {
            this.expressionsList.forEach((item) => {
                item.isSelected = false;
            });
            this.expressionsList[0].isSelected = true;
        }
        /** @type {?} */
        const index = this.filteringService.unpinnedFilterableColumns.indexOf(this.column);
        if (index >= 0 && !this.isColumnRightVisible(index)) {
            this.filteringService.scrollToFilterCell(this.filteringService.unpinnedFilterableColumns[index], true);
        }
        else if (index >= 0 && !this.isColumnLeftVisible(index)) {
            this.filteringService.scrollToFilterCell(this.filteringService.unpinnedFilterableColumns[index], false);
        }
        this.filteringService.filteredColumn = this.column;
        this.filteringService.isFilterRowVisible = true;
        this.filteringService.selectedExpression = expression;
    }
    /**
     * Chip removed event handler.
     * @param {?} eventArgs
     * @param {?} item
     * @return {?}
     */
    onChipRemoved(eventArgs, item) {
        /** @type {?} */
        const indexToRemove = this.expressionsList.indexOf(item);
        this.removeExpression(indexToRemove);
        this.focusChip();
    }
    /**
     * Clears the filtering.
     * @return {?}
     */
    clearFiltering() {
        this.filteringService.clearFilter(this.column.field);
        this.cdr.detectChanges();
    }
    /**
     * Chip keydown event handler.
     * @param {?} eventArgs
     * @param {?=} expression
     * @return {?}
     */
    onChipKeyDown(eventArgs, expression) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            eventArgs.preventDefault();
            this.onChipClicked(expression);
        }
    }
    /**
     * Returns the filtering indicator class.
     * @return {?}
     */
    filteringIndicatorClass() {
        return {
            [this.baseClass]: !this.isMoreIconHidden(),
            [`${this.baseClass}--hidden`]: this.isMoreIconHidden()
        };
    }
    /**
     * Focus a chip depending on the current visible template.
     * @param {?=} focusFirst
     * @return {?}
     */
    focusChip(focusFirst = false) {
        if (this.currentTemplate === this.defaultFilter) {
            if (focusFirst) {
                this.focusFirstElement();
            }
            else {
                this.focusElement();
            }
        }
        else if (this.currentTemplate === this.emptyFilter) {
            this.ghostChip.elementRef.nativeElement.querySelector(`.igx-chip__item`).focus();
        }
        else if (this.currentTemplate === this.complexFilter) {
            this.complexChip.elementRef.nativeElement.querySelector(`.igx-chip__item`).focus();
        }
    }
    /**
     * @private
     * @param {?} indexToRemove
     * @return {?}
     */
    removeExpression(indexToRemove) {
        if (indexToRemove === 0 && this.expressionsList.length === 1) {
            this.clearFiltering();
            return;
        }
        this.filteringService.removeExpression(this.column.field, indexToRemove);
        this.updateVisibleFilters();
        this.filteringService.filterInternal(this.column.field);
    }
    /**
     * @private
     * @return {?}
     */
    isMoreIconHidden() {
        return this.filteringService.columnToMoreIconHidden.get(this.column.field);
    }
    /**
     * @private
     * @return {?}
     */
    updateVisibleFilters() {
        this.expressionsList.forEach((ex) => ex.isVisible = true);
        if (this.moreIcon) {
            this.filteringService.columnToMoreIconHidden.set(this.column.field, true);
        }
        this.cdr.detectChanges();
        if (this.chipsArea && this.expressionsList.length > 1) {
            /** @type {?} */
            const areaWidth = this.chipsArea.element.nativeElement.offsetWidth;
            /** @type {?} */
            let viewWidth = 0;
            /** @type {?} */
            const chipsAreaElements = this.chipsArea.element.nativeElement.children;
            /** @type {?} */
            let visibleChipsCount = 0;
            /** @type {?} */
            const moreIconWidth = this.moreIcon.nativeElement.offsetWidth -
                parseInt(document.defaultView.getComputedStyle(this.moreIcon.nativeElement)['margin-left'], 10);
            for (let index = 0; index < chipsAreaElements.length - 1; index++) {
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
            for (let i = visibleChipsCount; i < this.expressionsList.length; i++) {
                this.expressionsList[i].isVisible = false;
            }
            this.cdr.detectChanges();
        }
    }
    /**
     * @private
     * @return {?}
     */
    isFirstElementFocused() {
        return !(this.chipsArea && this.chipsArea.chipsList.length > 0 &&
            this.chipsArea.chipsList.first.elementRef.nativeElement.querySelector(`.igx-chip__item`) !== document.activeElement);
    }
    /**
     * @private
     * @return {?}
     */
    isLastElementFocused() {
        if (this.chipsArea) {
            if (this.isMoreIconHidden() && this.chipsArea.chipsList.last.elementRef.nativeElement.querySelector(`.igx-chip__remove`) !==
                document.activeElement) {
                return false;
            }
            else if (!this.isMoreIconHidden() && this.moreIcon.nativeElement !== document.activeElement) {
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @return {?}
     */
    focusFirstElement() {
        if (this.chipsArea.chipsList.length > 0) {
            this.chipsArea.chipsList.first.elementRef.nativeElement.querySelector(`.igx-chip__item`).focus();
        }
        else {
            this.moreIcon.nativeElement.focus();
        }
    }
    /**
     * @private
     * @return {?}
     */
    focusElement() {
        if (this.filteringService.shouldFocusNext) {
            if (!this.isMoreIconHidden() && this.chipsArea.chipsList.length === 0) {
                this.moreIcon.nativeElement.focus();
            }
            else {
                this.chipsArea.chipsList.first.elementRef.nativeElement.querySelector(`.igx-chip__item`).focus();
            }
        }
        else {
            if (!this.isMoreIconHidden()) {
                this.moreIcon.nativeElement.focus();
            }
            else {
                this.chipsArea.chipsList.last.elementRef.nativeElement.querySelector(`.igx-chip__remove`).focus();
            }
        }
    }
    /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    isColumnRightVisible(columnIndex) {
        if (this.filteringService.areAllColumnsInView) {
            return true;
        }
        /** @type {?} */
        let currentColumnRight = 0;
        for (let index = 0; index < this.filteringService.unpinnedColumns.length; index++) {
            currentColumnRight += parseInt(this.filteringService.unpinnedColumns[index].width, 10);
            if (this.filteringService.unpinnedColumns[index] === this.filteringService.unpinnedFilterableColumns[columnIndex]) {
                break;
            }
        }
        /** @type {?} */
        const width = this.filteringService.displayContainerWidth + this.filteringService.displayContainerScrollLeft;
        return currentColumnRight <= width;
    }
    /**
     * @private
     * @param {?} columnIndex
     * @return {?}
     */
    isColumnLeftVisible(columnIndex) {
        if (this.filteringService.areAllColumnsInView) {
            return true;
        }
        /** @type {?} */
        let currentColumnLeft = 0;
        for (let index = 0; index < this.filteringService.unpinnedColumns.length; index++) {
            if (this.filteringService.unpinnedColumns[index] === this.filteringService.unpinnedFilterableColumns[columnIndex]) {
                break;
            }
            currentColumnLeft += parseInt(this.filteringService.unpinnedColumns[index].width, 10);
        }
        return currentColumnLeft >= this.filteringService.displayContainerScrollLeft;
    }
}
IgxGridFilteringCellComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-grid-filtering-cell',
                template: "<ng-template #emptyFilter>\n        <igx-chips-area [attr.draggable]=\"false\" class=\"igx-filtering-chips\">\n            <igx-chip #ghostChip [attr.draggable]=\"false\" (click)=\"onChipClicked()\" (keydown)=\"onChipKeyDown($event)\" [displayDensity]=\"'cosy'\">\n                <igx-icon [attr.draggable]=\"false\" igxPrefix>filter_list</igx-icon>\n                <span [attr.draggable]=\"false\">{{filteringService.grid.resourceStrings.igx_grid_filter}}</span>\n            </igx-chip>\n        </igx-chips-area>\n</ng-template>\n\n<ng-template #defaultFilter>\n    <igx-chips-area #chipsArea class=\"igx-filtering-chips\">\n        <ng-container *ngFor=\"let item of expressionsList; let last = last; let index = index;\" >\n            <igx-chip\n                *ngIf=\"isChipVisible(index)\"\n                [removable]=\"true\"\n                [displayDensity]=\"'cosy'\"\n                (click)=\"onChipClicked(item.expression)\"\n                (keydown)=\"onChipKeyDown($event, item.expression)\"\n                (onRemove)=\"onChipRemoved($event, item)\">\n                <igx-icon igxPrefix\n                    fontSet=\"filtering-icons\"\n                    [name]=\"item.expression.condition.iconName\">\n                </igx-icon>\n                <span #label>\n                    {{filteringService.getChipLabel(item.expression)}}\n                </span>\n            </igx-chip>\n            <span class=\"igx-filtering-chips__connector\" *ngIf=\"!last && isChipVisible(index + 1)\">{{filteringService.getOperatorAsString(item.afterOperator)}}</span>\n        </ng-container>\n        <div #moreIcon [ngClass]=\"filteringIndicatorClass()\" (click)=\"onChipClicked()\" (keydown)=\"onChipKeyDown($event)\" tabindex=\"0\">\n            <igx-icon>filter_list</igx-icon>\n            <igx-badge [value]=\"moreFiltersCount\"></igx-badge>\n        </div>\n    </igx-chips-area>\n</ng-template>\n\n<ng-template #complexFilter>\n    <igx-chip #complexChip [removable]=\"true\" [displayDensity]=\"'cosy'\" (onRemove)=\"clearFiltering()\">\n        <igx-icon igxPrefix>filter_list</igx-icon>\n        <span>{{filteringService.grid.resourceStrings.igx_grid_complex_filter}}</span>\n    </igx-chip>\n</ng-template>\n\n<ng-container *ngTemplateOutlet=\"template; context: context\"></ng-container>\n"
            }] }
];
/** @nocollapse */
IgxGridFilteringCellComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: IgxFilteringService },
    { type: IgxGridNavigationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1maWx0ZXJpbmctY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2ZpbHRlcmluZy9ncmlkLWZpbHRlcmluZy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUVYLFVBQVUsRUFDVixZQUFZLEVBRVosdUJBQXVCLEVBRTFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXpELE9BQU8sRUFBc0IscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUYsT0FBTyxFQUFFLG1CQUFtQixFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBRTdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBV3RFLE1BQU0sT0FBTyw2QkFBNkI7Ozs7OztJQW1DdEMsWUFBbUIsR0FBc0IsRUFBUyxnQkFBcUMsRUFBUyxVQUFvQztRQUFqSCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBcUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUEwQjtRQWpDNUgsY0FBUyxHQUFHLG9DQUFvQyxDQUFDO1FBQ2pELG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3hCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQTJCckIsYUFBUSxHQUFHLDBCQUEwQixDQUFDO1FBR3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ1osSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFHTSxZQUFZLENBQUMsU0FBUztRQUV6QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDeEY7UUFDRCxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFHTSxpQkFBaUIsQ0FBQyxTQUFTO1FBQzlCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4RjtRQUNELFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFLTSxhQUFhLENBQUMsS0FBYTs7Y0FDeEIsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUtNLG9CQUFvQjtRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztTQUN6Qzs7Y0FFSyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0I7UUFDM0QsSUFBSSxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDeEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBTUQsSUFBSSxPQUFPO1FBQ1AsT0FBTztZQUNILE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBS00sYUFBYSxDQUFDLFVBQWlDO1FBQ2xELElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUM7WUFDdkQsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzdDOztjQUVLLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEYsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUc7YUFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzRztRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUM7SUFDMUQsQ0FBQzs7Ozs7OztJQUtNLGFBQWEsQ0FBQyxTQUE2QixFQUFFLElBQWtCOztjQUM1RCxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFLTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7SUFLTSxhQUFhLENBQUMsU0FBd0IsRUFBRSxVQUFpQztRQUM1RSxJQUFJLFNBQVMsQ0FBQyxHQUFHLHdCQUFlLEVBQUU7WUFDOUIsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDOzs7OztJQUtNLHVCQUF1QjtRQUMxQixPQUFPO1lBQ0gsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtTQUN6RCxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBS00sU0FBUyxDQUFDLGFBQXNCLEtBQUs7UUFDeEMsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0MsSUFBSSxVQUFVLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEY7YUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEY7SUFDTCxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxhQUFxQjtRQUMxQyxJQUFJLGFBQWEsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRTFELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0U7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2tCQUM3QyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVc7O2dCQUM5RCxTQUFTLEdBQUcsQ0FBQzs7a0JBQ1gsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVE7O2dCQUNuRSxpQkFBaUIsR0FBRyxDQUFDOztrQkFDbkIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVc7Z0JBQ3pELFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRW5HLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMvRCxJQUFJLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxFQUFFO29CQUM5RCxTQUFTLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDO29CQUNsRCxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNqQixpQkFBaUIsRUFBRSxDQUFDO3FCQUN2Qjt5QkFBTTt3QkFDSCxTQUFTLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDMUcsU0FBUyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQzlHO2lCQUNKO3FCQUFNO29CQUNILElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxHQUFHLGFBQWEsR0FBRyxTQUFTLEVBQUU7d0JBQzFELGlCQUFpQixFQUFFLENBQUM7cUJBQ3ZCO3lCQUFNLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLGFBQWEsR0FBRyxTQUFTLEVBQUU7d0JBQ2xILGlCQUFpQixFQUFFLENBQUM7cUJBQ3ZCO29CQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDM0UsTUFBTTtpQkFDVDthQUNKO1lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUM3QztZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDOzs7OztJQUVPLHFCQUFxQjtRQUN6QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3SCxDQUFDOzs7OztJQUVPLG9CQUFvQjtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3BILFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxRQUFRLENBQUMsYUFBYSxFQUFFO2dCQUMzRixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BHO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QztJQUNMLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNoQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3BHO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDckc7U0FDSjtJQUNMLENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLFdBQW1CO1FBQzVDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7O1lBQ0csa0JBQWtCLEdBQUcsQ0FBQztRQUMxQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDL0Usa0JBQWtCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9HLE1BQU07YUFDVDtTQUNKOztjQUNLLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQjtRQUM1RyxPQUFPLGtCQUFrQixJQUFJLEtBQUssQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxXQUFtQjtRQUMzQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNmOztZQUNHLGlCQUFpQixHQUFHLENBQUM7UUFDekIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQy9FLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9HLE1BQU07YUFDVDtZQUNELGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6RjtRQUNELE9BQU8saUJBQWlCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDO0lBQ2pGLENBQUM7OztZQS9VSixTQUFTLFNBQUM7Z0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLHl4RUFBbUQ7YUFDdEQ7Ozs7WUE1QkcsaUJBQWlCO1lBZ0JaLG1CQUFtQjtZQUVuQix3QkFBd0I7OztxQkFtQjVCLEtBQUs7MEJBR0wsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFHNUQsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFHOUQsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFHOUQsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQUdyRSxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUd6RCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MEJBR2hFLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt1QkFHbEUsV0FBVyxTQUFDLGdDQUFnQzsyQkFtQjVDLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBU3RDLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQTFEN0Msa0RBQXlEOzs7OztJQUN6RCx3REFBK0I7O0lBRS9CLHdEQUF1Qzs7SUFDdkMseURBQTRCOztJQUU1QiwrQ0FDa0M7Ozs7O0lBRWxDLG9EQUN3Qzs7Ozs7SUFFeEMsc0RBQzBDOzs7OztJQUUxQyxzREFDMEM7Ozs7O0lBRTFDLGtEQUMyQzs7Ozs7SUFFM0MsaURBQytCOzs7OztJQUUvQixrREFDc0M7Ozs7O0lBRXRDLG9EQUN3Qzs7SUFFeEMsaURBQzZDOztJQUVqQyw0Q0FBNkI7O0lBQUUseURBQTRDOztJQUFFLG1EQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIElucHV0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBIb3N0QmluZGluZyxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIE9uSW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBEb0NoZWNrXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUJhc2VDaGlwRXZlbnRBcmdzLCBJZ3hDaGlwc0FyZWFDb21wb25lbnQsIElneENoaXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jaGlwcyc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLCBFeHByZXNzaW9uVUkgfSBmcm9tICcuL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4R3JpZE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtZ3JpZC1maWx0ZXJpbmctY2VsbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtZmlsdGVyaW5nLWNlbGwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBEb0NoZWNrIHtcblxuICAgIHByaXZhdGUgYmFzZUNsYXNzID0gJ2lneC1ncmlkX19maWx0ZXJpbmctY2VsbC1pbmRpY2F0b3InO1xuICAgIHByaXZhdGUgY3VycmVudFRlbXBsYXRlID0gbnVsbDtcblxuICAgIHB1YmxpYyBleHByZXNzaW9uc0xpc3Q6IEV4cHJlc3Npb25VSVtdO1xuICAgIHB1YmxpYyBtb3JlRmlsdGVyc0NvdW50ID0gMDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnZW1wdHlGaWx0ZXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZW1wdHlGaWx0ZXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RmlsdGVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRGaWx0ZXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdjb21wbGV4RmlsdGVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGNvbXBsZXhGaWx0ZXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdjaGlwc0FyZWEnLCB7IHJlYWQ6IElneENoaXBzQXJlYUNvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBjaGlwc0FyZWE6IElneENoaXBzQXJlYUNvbXBvbmVudDtcblxuICAgIEBWaWV3Q2hpbGQoJ21vcmVJY29uJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIG1vcmVJY29uOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnZ2hvc3RDaGlwJywgeyByZWFkOiBJZ3hDaGlwQ29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGdob3N0Q2hpcDogSWd4Q2hpcENvbXBvbmVudDtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbXBsZXhDaGlwJywgeyByZWFkOiBJZ3hDaGlwQ29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGNvbXBsZXhDaGlwOiBJZ3hDaGlwQ29tcG9uZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZF9fZmlsdGVyaW5nLWNlbGwnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtZ3JpZF9fZmlsdGVyaW5nLWNlbGwnO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBmaWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLCBwdWJsaWMgbmF2U2VydmljZTogSWd4R3JpZE5hdmlnYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuY29sdW1uVG9Nb3JlSWNvbkhpZGRlbi5zZXQodGhpcy5jb2x1bW4uZmllbGQsIHRydWUpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJDZWxsQXJlYSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVyQ2VsbEFyZWEoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnRhYicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uVGFiS2V5RG93bihldmVudEFyZ3MpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0xhc3RFbGVtZW50Rm9jdXNlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZC5uYXZpZ2F0aW9uLm5hdmlnYXRlTmV4dEZpbHRlckNlbGwodGhpcy5jb2x1bW4sIGV2ZW50QXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRBcmdzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc2hpZnQudGFiJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25TaGlmdFRhYktleURvd24oZXZlbnRBcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RFbGVtZW50Rm9jdXNlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZC5uYXZpZ2F0aW9uLm5hdmlnYXRlUHJldkZpbHRlckNlbGwodGhpcy5jb2x1bW4sIGV2ZW50QXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRBcmdzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciBhIGNoaXAgd2l0aCBhIGdpdmVuIGluZGV4IGlzIHZpc2libGUgb3Igbm90LlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NoaXBWaXNpYmxlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0W2luZGV4XTtcbiAgICAgICAgcmV0dXJuICEhKGV4cHJlc3Npb24gJiYgZXhwcmVzc2lvbi5pc1Zpc2libGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGZpbHRlcmluZyBjZWxsIGFyZWEuXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUZpbHRlckNlbGxBcmVhKCkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdCA9IHRoaXMuZmlsdGVyaW5nU2VydmljZS5nZXRFeHByZXNzaW9ucyh0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUZpbHRlcnMoKTtcbiAgICB9XG5cbiAgICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICghdGhpcy5jb2x1bW4uZmlsdGVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZmlsdGVyQ2VsbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuY29sdW1uLmZpbHRlckNlbGxUZW1wbGF0ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5maWx0ZXJDZWxsVGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleHByZXNzaW9uVHJlZSA9IHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZTtcbiAgICAgICAgaWYgKCFleHByZXNzaW9uVHJlZSB8fCBleHByZXNzaW9uVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGhpcy5lbXB0eUZpbHRlcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5RmlsdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nU2VydmljZS5pc0ZpbHRlckNvbXBsZXgodGhpcy5jb2x1bW4uZmllbGQpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuY29tcGxleEZpbHRlcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXhGaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuZGVmYXVsdEZpbHRlcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEZpbHRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb250ZXh0IHBhc3NlZCB0byB0aGUgZmlsdGVyIHRlbXBsYXRlLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkRmlsdGVyaW5nQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sdW1uOiB0aGlzLmNvbHVtblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaXAgY2xpY2tlZCBldmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBDbGlja2VkKGV4cHJlc3Npb24/OiBJRmlsdGVyaW5nRXhwcmVzc2lvbikge1xuICAgICAgICBpZiAoZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNTZWxlY3RlZCA9IChpdGVtLmV4cHJlc3Npb24gPT09IGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFswXS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnMuaW5kZXhPZih0aGlzLmNvbHVtbik7XG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmICF0aGlzLmlzQ29sdW1uUmlnaHRWaXNpYmxlKGluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnNjcm9sbFRvRmlsdGVyQ2VsbCh0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRGaWx0ZXJhYmxlQ29sdW1uc1tpbmRleF0sIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IDAgJiYgIXRoaXMuaXNDb2x1bW5MZWZ0VmlzaWJsZShpbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5zY3JvbGxUb0ZpbHRlckNlbGwodGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnNbaW5kZXhdLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZmlsdGVyZWRDb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmlzRmlsdGVyUm93VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5zZWxlY3RlZEV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaXAgcmVtb3ZlZCBldmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBSZW1vdmVkKGV2ZW50QXJnczogSUJhc2VDaGlwRXZlbnRBcmdzLCBpdGVtOiBFeHByZXNzaW9uVUkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0LmluZGV4T2YoaXRlbSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXhwcmVzc2lvbihpbmRleFRvUmVtb3ZlKTtcbiAgICAgICAgdGhpcy5mb2N1c0NoaXAoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGZpbHRlcmluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXJGaWx0ZXJpbmcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5jbGVhckZpbHRlcih0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGlwIGtleWRvd24gZXZlbnQgaGFuZGxlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25DaGlwS2V5RG93bihldmVudEFyZ3M6IEtleWJvYXJkRXZlbnQsIGV4cHJlc3Npb24/OiBJRmlsdGVyaW5nRXhwcmVzc2lvbikge1xuICAgICAgICBpZiAoZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgICAgZXZlbnRBcmdzLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2hpcENsaWNrZWQoZXhwcmVzc2lvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaWx0ZXJpbmcgaW5kaWNhdG9yIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXJpbmdJbmRpY2F0b3JDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFt0aGlzLmJhc2VDbGFzc106ICF0aGlzLmlzTW9yZUljb25IaWRkZW4oKSxcbiAgICAgICAgICAgIFtgJHt0aGlzLmJhc2VDbGFzc30tLWhpZGRlbmBdOiB0aGlzLmlzTW9yZUljb25IaWRkZW4oKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvY3VzIGEgY2hpcCBkZXBlbmRpbmcgb24gdGhlIGN1cnJlbnQgdmlzaWJsZSB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXNDaGlwKGZvY3VzRmlyc3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGVtcGxhdGUgPT09IHRoaXMuZGVmYXVsdEZpbHRlcikge1xuICAgICAgICAgICAgaWYgKGZvY3VzRmlyc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNFbGVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VGVtcGxhdGUgPT09IHRoaXMuZW1wdHlGaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2hvc3RDaGlwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaWd4LWNoaXBfX2l0ZW1gKS5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRlbXBsYXRlID09PSB0aGlzLmNvbXBsZXhGaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxleENoaXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pZ3gtY2hpcF9faXRlbWApLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV4cHJlc3Npb24oaW5kZXhUb1JlbW92ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpbmRleFRvUmVtb3ZlID09PSAwICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckZpbHRlcmluZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnJlbW92ZUV4cHJlc3Npb24odGhpcy5jb2x1bW4uZmllbGQsIGluZGV4VG9SZW1vdmUpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUZpbHRlcnMoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmZpbHRlckludGVybmFsKHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTW9yZUljb25IaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuY29sdW1uVG9Nb3JlSWNvbkhpZGRlbi5nZXQodGhpcy5jb2x1bW4uZmllbGQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmlzaWJsZUZpbHRlcnMoKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0LmZvckVhY2goKGV4KSA9PiBleC5pc1Zpc2libGUgPSB0cnVlKTtcblxuICAgICAgICBpZiAodGhpcy5tb3JlSWNvbikge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmNvbHVtblRvTW9yZUljb25IaWRkZW4uc2V0KHRoaXMuY29sdW1uLmZpZWxkLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpcHNBcmVhICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWFXaWR0aCA9IHRoaXMuY2hpcHNBcmVhLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGxldCB2aWV3V2lkdGggPSAwO1xuICAgICAgICAgICAgY29uc3QgY2hpcHNBcmVhRWxlbWVudHMgPSB0aGlzLmNoaXBzQXJlYS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XG4gICAgICAgICAgICBsZXQgdmlzaWJsZUNoaXBzQ291bnQgPSAwO1xuICAgICAgICAgICAgY29uc3QgbW9yZUljb25XaWR0aCA9IHRoaXMubW9yZUljb24ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLm1vcmVJY29uLm5hdGl2ZUVsZW1lbnQpWydtYXJnaW4tbGVmdCddLCAxMCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlwc0FyZWFFbGVtZW50cy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdXaWR0aCArIGNoaXBzQXJlYUVsZW1lbnRzW2luZGV4XS5vZmZzZXRXaWR0aCA8IGFyZWFXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB2aWV3V2lkdGggKz0gY2hpcHNBcmVhRWxlbWVudHNbaW5kZXhdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlQ2hpcHNDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlld1dpZHRoICs9IHBhcnNlSW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2hpcHNBcmVhRWxlbWVudHNbaW5kZXhdKVsnbWFyZ2luLWxlZnQnXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlld1dpZHRoICs9IHBhcnNlSW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2hpcHNBcmVhRWxlbWVudHNbaW5kZXhdKVsnbWFyZ2luLXJpZ2h0J10sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAlIDIgIT09IDAgJiYgdmlld1dpZHRoICsgbW9yZUljb25XaWR0aCA+IGFyZWFXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUNoaXBzQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2aXNpYmxlQ2hpcHNDb3VudCA+IDAgJiYgdmlld1dpZHRoIC0gY2hpcHNBcmVhRWxlbWVudHNbaW5kZXggLSAxXS5vZmZzZXRXaWR0aCArIG1vcmVJY29uV2lkdGggPiBhcmVhV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVDaGlwc0NvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3JlRmlsdGVyc0NvdW50ID0gdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoIC0gdmlzaWJsZUNoaXBzQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5jb2x1bW5Ub01vcmVJY29uSGlkZGVuLnNldCh0aGlzLmNvbHVtbi5maWVsZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2aXNpYmxlQ2hpcHNDb3VudDsgaSA8IHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbaV0uaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRmlyc3RFbGVtZW50Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy5jaGlwc0FyZWEgJiYgdGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2hpcHNBcmVhLmNoaXBzTGlzdC5maXJzdC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlneC1jaGlwX19pdGVtYCkgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNMYXN0RWxlbWVudEZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmNoaXBzQXJlYSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3JlSWNvbkhpZGRlbigpICYmIHRoaXMuY2hpcHNBcmVhLmNoaXBzTGlzdC5sYXN0LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaWd4LWNoaXBfX3JlbW92ZWApICE9PVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTW9yZUljb25IaWRkZW4oKSAmJiB0aGlzLm1vcmVJY29uLm5hdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0ZpcnN0RWxlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpcHNBcmVhLmNoaXBzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNoaXBzQXJlYS5jaGlwc0xpc3QuZmlyc3QuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pZ3gtY2hpcF9faXRlbWApLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vcmVJY29uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnNob3VsZEZvY3VzTmV4dCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW9yZUljb25IaWRkZW4oKSAmJiB0aGlzLmNoaXBzQXJlYS5jaGlwc0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3JlSWNvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNBcmVhLmNoaXBzTGlzdC5maXJzdC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlneC1jaGlwX19pdGVtYCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc01vcmVJY29uSGlkZGVuKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vcmVJY29uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0Lmxhc3QuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pZ3gtY2hpcF9fcmVtb3ZlYCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNDb2x1bW5SaWdodFZpc2libGUoY29sdW1uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmFyZUFsbENvbHVtbnNJblZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50Q29sdW1uUmlnaHQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkQ29sdW1ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb2x1bW5SaWdodCArPSBwYXJzZUludCh0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRDb2x1bW5zW2luZGV4XS53aWR0aCwgMTApO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZENvbHVtbnNbaW5kZXhdID09PSB0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRGaWx0ZXJhYmxlQ29sdW1uc1tjb2x1bW5JbmRleF0pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZmlsdGVyaW5nU2VydmljZS5kaXNwbGF5Q29udGFpbmVyV2lkdGggKyB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQ7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q29sdW1uUmlnaHQgPD0gd2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0NvbHVtbkxlZnRWaXNpYmxlKGNvbHVtbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nU2VydmljZS5hcmVBbGxDb2x1bW5zSW5WaWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudENvbHVtbkxlZnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkQ29sdW1ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRDb2x1bW5zW2luZGV4XSA9PT0gdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnNbY29sdW1uSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50Q29sdW1uTGVmdCArPSBwYXJzZUludCh0aGlzLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRDb2x1bW5zW2luZGV4XS53aWR0aCwgMTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50Q29sdW1uTGVmdCA+PSB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQ7XG4gICAgfVxufVxuIl19
import { ChangeDetectorRef, TemplateRef, AfterViewInit, ElementRef, OnInit, DoCheck } from '@angular/core';
import { IgxColumnComponent } from '../column.component';
import { IFilteringExpression } from '../../data-operations/filtering-expression.interface';
import { IBaseChipEventArgs, IgxChipsAreaComponent, IgxChipComponent } from '../../chips';
import { IgxFilteringService, ExpressionUI } from './grid-filtering.service';
import { IgxGridNavigationService } from '../grid-navigation.service';
/**
 * @hidden
 */
export declare class IgxGridFilteringCellComponent implements AfterViewInit, OnInit, DoCheck {
    cdr: ChangeDetectorRef;
    filteringService: IgxFilteringService;
    navService: IgxGridNavigationService;
    private baseClass;
    private currentTemplate;
    expressionsList: ExpressionUI[];
    moreFiltersCount: number;
    column: IgxColumnComponent;
    protected emptyFilter: TemplateRef<any>;
    protected defaultFilter: TemplateRef<any>;
    protected complexFilter: TemplateRef<any>;
    protected chipsArea: IgxChipsAreaComponent;
    protected moreIcon: ElementRef;
    protected ghostChip: IgxChipComponent;
    protected complexChip: IgxChipComponent;
    cssClass: string;
    constructor(cdr: ChangeDetectorRef, filteringService: IgxFilteringService, navService: IgxGridNavigationService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    onTabKeyDown(eventArgs: any): void;
    onShiftTabKeyDown(eventArgs: any): void;
    /**
     * Returns whether a chip with a given index is visible or not.
     */
    isChipVisible(index: number): boolean;
    /**
     * Updates the filtering cell area.
     */
    updateFilterCellArea(): void;
    readonly template: TemplateRef<any>;
    /**
     * Gets the context passed to the filter template.
     * @memberof IgxGridFilteringCellComponent
     */
    readonly context: {
        column: IgxColumnComponent;
    };
    /**
     * Chip clicked event handler.
     */
    onChipClicked(expression?: IFilteringExpression): void;
    /**
     * Chip removed event handler.
     */
    onChipRemoved(eventArgs: IBaseChipEventArgs, item: ExpressionUI): void;
    /**
     * Clears the filtering.
     */
    clearFiltering(): void;
    /**
     * Chip keydown event handler.
     */
    onChipKeyDown(eventArgs: KeyboardEvent, expression?: IFilteringExpression): void;
    /**
     * Returns the filtering indicator class.
     */
    filteringIndicatorClass(): {
        [x: string]: boolean;
    };
    /**
     * Focus a chip depending on the current visible template.
     */
    focusChip(focusFirst?: boolean): void;
    private removeExpression;
    private isMoreIconHidden;
    private updateVisibleFilters;
    private isFirstElementFocused;
    private isLastElementFocused;
    private focusFirstElement;
    private focusElement;
    private isColumnRightVisible;
    private isColumnLeftVisible;
}

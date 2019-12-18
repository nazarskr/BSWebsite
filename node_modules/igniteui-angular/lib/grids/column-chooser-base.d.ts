import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IFilteringExpression } from '../data-operations/filtering-expression.interface';
export declare enum ColumnDisplayOrder {
    Alphabetical = "Alphabetical",
    DisplayOrder = "DisplayOrder"
}
/** @hidden */
export declare abstract class ColumnChooserBase implements OnDestroy {
    cdr: ChangeDetectorRef;
    /**
     * Gets the grid columns that are going to be manipulated.
     * ```typescript
     * let gridColumns = this.columnHidingUI.columns;
     * ```
     * @memberof ColumnChooserBase
     */
    /**
    * Sets the the grid columns that are going to be manipulated.
    * ```html
    * <igx-column-hiding [columns]="grid.columns"></igx-column-hiding>
    * ```
    * @memberof ColumnChooserBase
    */
    columns: any[];
    /**
     * Sets/gets the title of the column chooser.
     * ```typescript
     * let title =  this.columnHidingUI.title;
     * ```
     * @memberof ColumnChooserBase
     */
    /**
    * ```html
    * <igx-column-hiding [title]="'IgxColumnHidingComponent Title'"></igx-column-hiding>
    * ```
    * @memberof ColumnChooserBase
    */
    title: string;
    /**
     * Gets the prompt that is displayed in the filter input.
     * ```typescript
     * let filterColumnsPrompt =  this.columnHidingUI.filterColumnsPrompt;
     * ```
     * @memberof ColumnChooserBase
     */
    /**
    * Sets the prompt that is going to be displayed in the filter input.
    * ```html
    * <igx-column-hiding [filterColumnsPrompt]="'Type here to search'"></igx-column-hiding>
    * ```
    * @memberof ColumnChooserBase
    */
    filterColumnsPrompt: string;
    /**
     * Hides/ shows the filtering columns input from the UI.
     */
    disableFilter: boolean;
    /**
     * Gets the items of the selected columns.
     * ```typescript
     * let columnItems =  this.columnHidingUI.columnItems;
     * ```
     * @memberof ColumnChooserBase
     */
    readonly columnItems: any[];
    /**
     * Gets the value which filters the columns list.
     * ```typescript
     * let filterCriteria =  this.columnHidingUI.filterCriteria;
     * ```
     * @memberof ColumnChooserBase
     */
    /**
    * Sets the value which filters the columns list.
    * ```html
    *  <igx-column-hiding [filterCriteria]="'ID'"></igx-column-hiding>
    * ```
    * @memberof ColumnChooserBase
    */
    filterCriteria: string;
    /**
     * Gets the display order of the columns.
     * ```typescript
     * let columnDisplayOrder  =  this.columnHidingUI.columnDisplayOrder;
     * ```
     * @memberof ColumnChooserBase
     */
    /**
    * Sets the display order of the columns.
    * ```typescript
    * this.columnHidingUI.columnDisplayOrder = ColumnDisplayOrder.Alphabetical;
    * ```
    * @memberof ColumnChooserBase
    */
    columnDisplayOrder: ColumnDisplayOrder;
    /**
     * Access to the columnHidingUI:
     * ```typescript
     * @ViewChild('column-hiding-component')
     *  public columnHidingUI: IgxColumnHidingComponent;
     * ```
     * Sets/gets the max height of the column area.
     * ```typescript
     * let columnsAreaMaxHeight =  this.columnHidingUI.columnsAreaMaxHeight;
     * ```
     *
     * ```html
     * <igx-column-hiding [columnsAreaMaxHeight]="200px"></igx-column-hiding>
     * ```
     * @memberof ColumnChooserBase
     */
    columnsAreaMaxHeight: string;
    /**
     * Sets/Gets the css class selector.
     * By default the value of the `class` attribute is `"igx-column-hiding"`.
     * ```typescript
     * let cssCLass =  this.columnHidingUI.cssClass;
     * ```
     * ```typescript
     * this.columnHidingUI.cssClass = 'column-chooser';
     * ```
     * @memberof ColumnChooserBase
     */
    cssClass: string;
    /**
     *@hidden
     */
    private _currentColumns;
    /**
     *@hidden
     */
    private _gridColumns;
    /**
     *@hidden
     */
    private _rawColumns;
    /**
     *@hidden
     */
    private _columnDisplayOrder;
    /**
     *@hidden
     */
    private _filterCriteria;
    /**
     *@hidden
     */
    private _filterColumnsPrompt;
    /**
     *@hidden
     */
    private _title;
    constructor(cdr: ChangeDetectorRef);
    /**
     *@hidden
     */
    ngOnDestroy(): void;
    /**
     *@hidden
     */
    private createColumnItems;
    /**
     *@hidden
     */
    protected abstract createColumnItem(container: any, column: any): any;
    /**
     *@hidden
     */
    private orderColumns;
    /**
     *@hidden
     */
    protected filter(): void;
    /**
     *@hidden
     */
    protected createFilteringExpression(fieldName: string): IFilteringExpression;
    /**
     *@hidden
     */
    protected clearFiltering(): void;
}

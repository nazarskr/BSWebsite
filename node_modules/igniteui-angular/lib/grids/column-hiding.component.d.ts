import { ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { IColumnVisibilityChangedEventArgs, IgxColumnHidingItemDirective } from './column-hiding-item.directive';
import { ColumnChooserBase } from './column-chooser-base';
export declare class IgxColumnHidingComponent extends ColumnChooserBase implements OnDestroy {
    cdr: ChangeDetectorRef;
    /**
     * Returns a boolean indicating whether the `HIDE ALL` button is disabled.
     * ```html
     * <igx-column-hiding #columnHidingUI
     *     [columns]="grid.columns" [title]="'Column Hiding'">
     * </igx-column-hiding>
     * ```
     * ```typescript
     * @ViewChild("'columnHidingUI'")
     * public columnHiding: IgxColumnHidingComponent;
     * let isHideAlldisabled =  this.columnHiding.disableHideAll;
     * ```
     *@memberof IgxColumnHidingComponent
     */
    readonly disableHideAll: boolean;
    /**
     * Returns a boolean indicating whether the `SHOW ALL` button is disabled.
     * ```typescript
     * let isShowAlldisabled =  this.columnHiding.disableShowAll;
     * ```
     * @memberof IgxColumnHidingComponent
     */
    readonly disableShowAll: boolean;
    /**
     * Sets/gets the text of the button that shows all columns if they are hidden.
     * ```typescript
     * let showAllButtonText =  this.columnHiding.showAllText;
     * ```
     *
     * ```html
     * <igx-column-hiding [showAllText] = "'Show Columns'"></igx-column-hiding>
     * ```
     * @memberof IgxColumnHidingComponent
     */
    showAllText: string;
    /**
     * Sets/gets the text of the button that hides all columns if they are shown.
     * ```typescript
     * let hideAllButtonText =  this.columnHiding.hideAllText;
     * ```
     *
     * ```html
     * <igx-column-hiding [hideAllText] = "'Hide Columns'"></igx-column-hiding>
     * ```
     * @memberof IgxColumnHidingComponent
     */
    hideAllText: string;
    /**
     * An event that is emitted after the columns visibility is changed.
     * Provides references to the `column` and the `newValue` properties as event arguments.
     * ```html
     *  <igx-column-hiding (onColumnVisibilityChanged) = "onColumnVisibilityChanged($event)"></igx-column-hiding>
     * ```
     * @memberof IgxColumnHidingComponent
     */
    onColumnVisibilityChanged: EventEmitter<IColumnVisibilityChangedEventArgs>;
    /**
     * Gets the count of the hidden columns.
     * ```typescript
     * let hiddenColumnsCount =  this.columnHiding.hiddenColumnsCount;
     * ```
     * @memberof IgxColumnHidingComponent
     */
    readonly hiddenColumnsCount: number;
    constructor(cdr: ChangeDetectorRef);
    /**
     *@hidden
     */
    readonly hidableColumns: any[];
    private destroy$;
    /**
     *@hidden
     */
    protected createColumnItem(container: any, column: any): IgxColumnHidingItemDirective;
    /**
     * Shows all columns in the grid.
     * ```typescript
     * this.columnHiding.showAllColumns();
     * ```
     * @memberof IgxColumnHidingComponent
     */
    showAllColumns(): void;
    /**
     * Hides all columns in the grid.
     * ```typescript
     * this.columnHiding.hideAllColumns();
     * ```
     * @memberof IgxColumnHidingComponent
     */
    hideAllColumns(): void;
    /**
     * @hidden
     */
    onVisibilityChanged(args: IColumnVisibilityChangedEventArgs): void;
    /**
     *@hidden
     */
    ngOnDestroy(): void;
}
/**
 * @hidden
 */
export declare class IgxColumnHidingModule {
}

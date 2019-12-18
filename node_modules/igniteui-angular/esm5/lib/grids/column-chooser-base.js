/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HostBinding, Input } from '@angular/core';
import { IgxStringFilteringOperand } from '../data-operations/filtering-condition';
import { FilteringExpressionsTree } from '../data-operations/filtering-expressions-tree';
import { FilteringLogic } from '../data-operations/filtering-expression.interface';
import { FilteringStrategy } from '../data-operations/filtering-strategy';
/** @enum {string} */
var ColumnDisplayOrder = {
    Alphabetical: 'Alphabetical',
    DisplayOrder: 'DisplayOrder',
};
export { ColumnDisplayOrder };
var CustomFilteringStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(CustomFilteringStrategy, _super);
    function CustomFilteringStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    CustomFilteringStrategy.prototype.filter = /**
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    function (data, expressionsTree) {
        var _this = this;
        /** @type {?} */
        var res = [];
        data.forEach(function (item) {
            if (_this.matchRecord(item, (/** @type {?} */ (expressionsTree.filteringOperands[0])))) {
                res.push(item);
            }
            else if (item.column.columnGroup) {
                if (item.column.allChildren.findIndex(function (child) {
                    return _this.matchRecord(child, (/** @type {?} */ (expressionsTree.filteringOperands[1]))) ||
                        _this.matchRecord(child, (/** @type {?} */ (expressionsTree.filteringOperands[2])));
                }) > -1) {
                    res.push(item);
                }
            }
        });
        return res;
    };
    return CustomFilteringStrategy;
}(FilteringStrategy));
/**
 * @hidden
 * @abstract
 */
var ColumnChooserBase = /** @class */ (function () {
    function ColumnChooserBase(cdr) {
        this.cdr = cdr;
        /**
         * Hides/ shows the filtering columns input from the UI.
         */
        this.disableFilter = false;
        /**
         * Access to the columnHidingUI:
         * ```typescript
         * \@ViewChild('column-hiding-component')
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
         * \@memberof ColumnChooserBase
         */
        this.columnsAreaMaxHeight = '100%';
        /**
         * Sets/Gets the css class selector.
         * By default the value of the `class` attribute is `"igx-column-hiding"`.
         * ```typescript
         * let cssCLass =  this.columnHidingUI.cssClass;
         * ```
         * ```typescript
         * this.columnHidingUI.cssClass = 'column-chooser';
         * ```
         * \@memberof ColumnChooserBase
         */
        this.cssClass = 'igx-column-hiding';
        /**
         * @hidden
         */
        this._currentColumns = [];
        /**
         * @hidden
         */
        this._gridColumns = [];
        /**
         * @hidden
         */
        this._rawColumns = [];
        /**
         * @hidden
         */
        this._columnDisplayOrder = ColumnDisplayOrder.DisplayOrder;
        /**
         * @hidden
         */
        this._filterCriteria = '';
        /**
         * @hidden
         */
        this._filterColumnsPrompt = '';
        /**
         * @hidden
         */
        this._title = '';
    }
    Object.defineProperty(ColumnChooserBase.prototype, "columns", {
        /**
         * Gets the grid columns that are going to be manipulated.
         * ```typescript
         * let gridColumns = this.columnHidingUI.columns;
         * ```
         * @memberof ColumnChooserBase
         */
        get: /**
         * Gets the grid columns that are going to be manipulated.
         * ```typescript
         * let gridColumns = this.columnHidingUI.columns;
         * ```
         * \@memberof ColumnChooserBase
         * @return {?}
         */
        function () {
            return this._gridColumns;
        },
        /**
         * Sets the the grid columns that are going to be manipulated.
         * ```html
         * <igx-column-hiding [columns]="grid.columns"></igx-column-hiding>
         * ```
         * @memberof ColumnChooserBase
         */
        set: /**
         * Sets the the grid columns that are going to be manipulated.
         * ```html
         * <igx-column-hiding [columns]="grid.columns"></igx-column-hiding>
         * ```
         * \@memberof ColumnChooserBase
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._gridColumns = value;
                this.createColumnItems();
                if (this.filterCriteria) {
                    this.filter();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnChooserBase.prototype, "title", {
        /**
         * Sets/gets the title of the column chooser.
         * ```typescript
         * let title =  this.columnHidingUI.title;
         * ```
         * @memberof ColumnChooserBase
         */
        get: /**
         * Sets/gets the title of the column chooser.
         * ```typescript
         * let title =  this.columnHidingUI.title;
         * ```
         * \@memberof ColumnChooserBase
         * @return {?}
         */
        function () {
            return this._title;
        },
        /**
         * ```html
         * <igx-column-hiding [title]="'IgxColumnHidingComponent Title'"></igx-column-hiding>
         * ```
         * @memberof ColumnChooserBase
         */
        set: /**
         * ```html
         * <igx-column-hiding [title]="'IgxColumnHidingComponent Title'"></igx-column-hiding>
         * ```
         * \@memberof ColumnChooserBase
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._title = (value) ? value : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnChooserBase.prototype, "filterColumnsPrompt", {
        /**
         * Gets the prompt that is displayed in the filter input.
         * ```typescript
         * let filterColumnsPrompt =  this.columnHidingUI.filterColumnsPrompt;
         * ```
         * @memberof ColumnChooserBase
         */
        get: /**
         * Gets the prompt that is displayed in the filter input.
         * ```typescript
         * let filterColumnsPrompt =  this.columnHidingUI.filterColumnsPrompt;
         * ```
         * \@memberof ColumnChooserBase
         * @return {?}
         */
        function () {
            return this._filterColumnsPrompt;
        },
        /**
         * Sets the prompt that is going to be displayed in the filter input.
         * ```html
         * <igx-column-hiding [filterColumnsPrompt]="'Type here to search'"></igx-column-hiding>
         * ```
         * @memberof ColumnChooserBase
         */
        set: /**
         * Sets the prompt that is going to be displayed in the filter input.
         * ```html
         * <igx-column-hiding [filterColumnsPrompt]="'Type here to search'"></igx-column-hiding>
         * ```
         * \@memberof ColumnChooserBase
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filterColumnsPrompt = (value) ? value : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnChooserBase.prototype, "columnItems", {
        /**
         * Gets the items of the selected columns.
         * ```typescript
         * let columnItems =  this.columnHidingUI.columnItems;
         * ```
         * @memberof ColumnChooserBase
         */
        get: /**
         * Gets the items of the selected columns.
         * ```typescript
         * let columnItems =  this.columnHidingUI.columnItems;
         * ```
         * \@memberof ColumnChooserBase
         * @return {?}
         */
        function () {
            return this._currentColumns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnChooserBase.prototype, "filterCriteria", {
        /**
         * Gets the value which filters the columns list.
         * ```typescript
         * let filterCriteria =  this.columnHidingUI.filterCriteria;
         * ```
         * @memberof ColumnChooserBase
         */
        get: /**
         * Gets the value which filters the columns list.
         * ```typescript
         * let filterCriteria =  this.columnHidingUI.filterCriteria;
         * ```
         * \@memberof ColumnChooserBase
         * @return {?}
         */
        function () {
            return this._filterCriteria;
        },
        /**
         * Sets the value which filters the columns list.
         * ```html
         *  <igx-column-hiding [filterCriteria]="'ID'"></igx-column-hiding>
         * ```
         * @memberof ColumnChooserBase
         */
        set: /**
         * Sets the value which filters the columns list.
         * ```html
         *  <igx-column-hiding [filterCriteria]="'ID'"></igx-column-hiding>
         * ```
         * \@memberof ColumnChooserBase
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value || value.length === 0) {
                this.clearFiltering();
                this._filterCriteria = '';
                this.cdr.detectChanges();
                return;
            }
            else if (this._filterCriteria && this._filterCriteria.length > value.length) {
                this.clearFiltering();
            }
            this._filterCriteria = value;
            this.filter();
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnChooserBase.prototype, "columnDisplayOrder", {
        /**
         * Gets the display order of the columns.
         * ```typescript
         * let columnDisplayOrder  =  this.columnHidingUI.columnDisplayOrder;
         * ```
         * @memberof ColumnChooserBase
         */
        get: /**
         * Gets the display order of the columns.
         * ```typescript
         * let columnDisplayOrder  =  this.columnHidingUI.columnDisplayOrder;
         * ```
         * \@memberof ColumnChooserBase
         * @return {?}
         */
        function () {
            return this._columnDisplayOrder;
        },
        /**
         * Sets the display order of the columns.
         * ```typescript
         * this.columnHidingUI.columnDisplayOrder = ColumnDisplayOrder.Alphabetical;
         * ```
         * @memberof ColumnChooserBase
         */
        set: /**
         * Sets the display order of the columns.
         * ```typescript
         * this.columnHidingUI.columnDisplayOrder = ColumnDisplayOrder.Alphabetical;
         * ```
         * \@memberof ColumnChooserBase
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== undefined) {
                this.orderColumns(value);
                if (this._filterCriteria.length > 0) {
                    this.filter();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ColumnChooserBase.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this._currentColumns), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.valueChanged.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    ColumnChooserBase.prototype.createColumnItems = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._gridColumns.length > 0) {
            this._rawColumns = [];
            this._gridColumns.forEach(function (column) {
                /** @type {?} */
                var item = _this.createColumnItem(_this, column);
                if (item) {
                    _this._rawColumns.push(item);
                }
            });
            this._currentColumns = this._rawColumns.slice(0);
            this.orderColumns(this._columnDisplayOrder);
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    ColumnChooserBase.prototype.orderColumns = /**
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._columnDisplayOrder = value;
        if (value === ColumnDisplayOrder[ColumnDisplayOrder.Alphabetical] ||
            value === ColumnDisplayOrder.Alphabetical) {
            this._currentColumns = this._rawColumns.slice(0).sort(function (current, next) {
                return current.name.toLowerCase().localeCompare(next.name.toLowerCase());
            });
        }
        else {
            this._currentColumns = this._rawColumns;
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    ColumnChooserBase.prototype.filter = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var filteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.Or);
        filteringExpressionsTree.filteringOperands.push(this.createFilteringExpression('name'));
        filteringExpressionsTree.filteringOperands.push(this.createFilteringExpression('field'));
        filteringExpressionsTree.filteringOperands.push(this.createFilteringExpression('header'));
        /** @type {?} */
        var strategy = new CustomFilteringStrategy();
        this._currentColumns = strategy.filter(this._currentColumns, filteringExpressionsTree);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    ColumnChooserBase.prototype.createFilteringExpression = /**
     * @hidden
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        return {
            condition: IgxStringFilteringOperand.instance().condition('contains'),
            fieldName: fieldName,
            ignoreCase: true,
            searchVal: this._filterCriteria
        };
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    ColumnChooserBase.prototype.clearFiltering = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        this.createColumnItems();
    };
    ColumnChooserBase.propDecorators = {
        columns: [{ type: Input }],
        title: [{ type: Input }],
        filterColumnsPrompt: [{ type: Input }],
        disableFilter: [{ type: Input }],
        columnItems: [{ type: Input }],
        filterCriteria: [{ type: Input }],
        columnDisplayOrder: [{ type: Input }],
        columnsAreaMaxHeight: [{ type: Input }],
        cssClass: [{ type: HostBinding, args: ['attr.class',] }]
    };
    return ColumnChooserBase;
}());
export { ColumnChooserBase };
if (false) {
    /**
     * Hides/ shows the filtering columns input from the UI.
     * @type {?}
     */
    ColumnChooserBase.prototype.disableFilter;
    /**
     * Access to the columnHidingUI:
     * ```typescript
     * \@ViewChild('column-hiding-component')
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
     * \@memberof ColumnChooserBase
     * @type {?}
     */
    ColumnChooserBase.prototype.columnsAreaMaxHeight;
    /**
     * Sets/Gets the css class selector.
     * By default the value of the `class` attribute is `"igx-column-hiding"`.
     * ```typescript
     * let cssCLass =  this.columnHidingUI.cssClass;
     * ```
     * ```typescript
     * this.columnHidingUI.cssClass = 'column-chooser';
     * ```
     * \@memberof ColumnChooserBase
     * @type {?}
     */
    ColumnChooserBase.prototype.cssClass;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    ColumnChooserBase.prototype._currentColumns;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    ColumnChooserBase.prototype._gridColumns;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    ColumnChooserBase.prototype._rawColumns;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    ColumnChooserBase.prototype._columnDisplayOrder;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    ColumnChooserBase.prototype._filterCriteria;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    ColumnChooserBase.prototype._filterColumnsPrompt;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    ColumnChooserBase.prototype._title;
    /** @type {?} */
    ColumnChooserBase.prototype.cdr;
    /**
     * @hidden
     * @abstract
     * @protected
     * @param {?} container
     * @param {?} column
     * @return {?}
     */
    ColumnChooserBase.prototype.createColumnItem = function (container, column) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWNob29zZXItYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvY29sdW1uLWNob29zZXItYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBcUIsV0FBVyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQTZCLE1BQU0sK0NBQStDLENBQUM7QUFDcEgsT0FBTyxFQUFFLGNBQWMsRUFBd0IsTUFBTSxtREFBbUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0lBSXRFLGNBQWUsY0FBYztJQUM3QixjQUFlLGNBQWM7OztBQUdqQztJQUFzQyxtREFBaUI7SUFBdkQ7O0lBaUJBLENBQUM7Ozs7OztJQWhCVSx3Q0FBTTs7Ozs7SUFBYixVQUFjLElBQVcsRUFBRSxlQUEwQztRQUFyRSxpQkFlQzs7WUFkUyxHQUFHLEdBQTRCLEVBQUU7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQTJCO1lBQ3JDLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsbUJBQUEsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUF3QixDQUFDLEVBQUU7Z0JBQ3RGLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEI7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO29CQUN4QyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLG1CQUFBLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFD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OztJQXlFbkMsMENBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1RjdCLGlEQUNxQzs7Ozs7Ozs7Ozs7OztJQVlyQyxxQ0FDc0M7Ozs7OztJQUl0Qyw0Q0FBNkI7Ozs7OztJQUk3Qix5Q0FBMEI7Ozs7OztJQUkxQix3Q0FBeUI7Ozs7OztJQUl6QixnREFBOEQ7Ozs7OztJQUk5RCw0Q0FBNkI7Ozs7OztJQUk3QixpREFBa0M7Ozs7OztJQUlsQyxtQ0FBb0I7O0lBRVIsZ0NBQTZCOzs7Ozs7Ozs7SUE2QnpDLGdGQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZCB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctY29uZGl0aW9uJztcbmltcG9ydCB7IEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbnMtdHJlZSc7XG5pbXBvcnQgeyBGaWx0ZXJpbmdMb2dpYywgSUZpbHRlcmluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEZpbHRlcmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBDb2x1bW5DaG9vc2VySXRlbUJhc2UgfSBmcm9tICcuL2NvbHVtbi1jaG9vc2VyLWl0ZW0tYmFzZSc7XG5cbmV4cG9ydCBlbnVtIENvbHVtbkRpc3BsYXlPcmRlciB7XG4gICAgQWxwaGFiZXRpY2FsID0gJ0FscGhhYmV0aWNhbCcsXG4gICAgRGlzcGxheU9yZGVyID0gJ0Rpc3BsYXlPcmRlcidcbn1cblxuY2xhc3MgQ3VzdG9tRmlsdGVyaW5nU3RyYXRlZ3kgZXh0ZW5kcyBGaWx0ZXJpbmdTdHJhdGVneSB7XG4gICAgcHVibGljIGZpbHRlcihkYXRhOiBhbnlbXSwgZXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTogYW55W10ge1xuICAgICAgICBjb25zdCByZXM6IENvbHVtbkNob29zZXJJdGVtQmFzZVtdID0gW107XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbTogQ29sdW1uQ2hvb3Nlckl0ZW1CYXNlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaFJlY29yZChpdGVtLCBleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHNbMF0gYXMgSUZpbHRlcmluZ0V4cHJlc3Npb24pKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY29sdW1uLmNvbHVtbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29sdW1uLmFsbENoaWxkcmVuLmZpbmRJbmRleCgoY2hpbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hSZWNvcmQoY2hpbGQsIGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kc1sxXSBhcyBJRmlsdGVyaW5nRXhwcmVzc2lvbikgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFJlY29yZChjaGlsZCwgZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzWzJdIGFzIElGaWx0ZXJpbmdFeHByZXNzaW9uKSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbHVtbkNob29zZXJCYXNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBncmlkIGNvbHVtbnMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBncmlkQ29sdW1ucyA9IHRoaXMuY29sdW1uSGlkaW5nVUkuY29sdW1ucztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgQ29sdW1uQ2hvb3NlckJhc2VcbiAgICAgKi9cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGNvbHVtbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkQ29sdW1ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGhlIGdyaWQgY29sdW1ucyB0aGF0IGFyZSBnb2luZyB0byBiZSBtYW5pcHVsYXRlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4taGlkaW5nIFtjb2x1bW5zXT1cImdyaWQuY29sdW1uc1wiPjwvaWd4LWNvbHVtbi1oaWRpbmc+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIENvbHVtbkNob29zZXJCYXNlXG4gICAgICovXG4gICAgc2V0IGNvbHVtbnModmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQ29sdW1ucyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5JdGVtcygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyQ3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgdGl0bGUgb2YgdGhlIGNvbHVtbiBjaG9vc2VyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGl0bGUgPSAgdGhpcy5jb2x1bW5IaWRpbmdVSS50aXRsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgQ29sdW1uQ2hvb3NlckJhc2VcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4taGlkaW5nIFt0aXRsZV09XCInSWd4Q29sdW1uSGlkaW5nQ29tcG9uZW50IFRpdGxlJ1wiPjwvaWd4LWNvbHVtbi1oaWRpbmc+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIENvbHVtbkNob29zZXJCYXNlXG4gICAgICovXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gKHZhbHVlKSA/IHZhbHVlIDogJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb21wdCB0aGF0IGlzIGRpc3BsYXllZCBpbiB0aGUgZmlsdGVyIGlucHV0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyQ29sdW1uc1Byb21wdCA9ICB0aGlzLmNvbHVtbkhpZGluZ1VJLmZpbHRlckNvbHVtbnNQcm9tcHQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIENvbHVtbkNob29zZXJCYXNlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZmlsdGVyQ29sdW1uc1Byb21wdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlckNvbHVtbnNQcm9tcHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb21wdCB0aGF0IGlzIGdvaW5nIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgZmlsdGVyIGlucHV0LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbi1oaWRpbmcgW2ZpbHRlckNvbHVtbnNQcm9tcHRdPVwiJ1R5cGUgaGVyZSB0byBzZWFyY2gnXCI+PC9pZ3gtY29sdW1uLWhpZGluZz5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgQ29sdW1uQ2hvb3NlckJhc2VcbiAgICAgKi9cbiAgICBzZXQgZmlsdGVyQ29sdW1uc1Byb21wdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9maWx0ZXJDb2x1bW5zUHJvbXB0ID0gKHZhbHVlKSA/IHZhbHVlIDogJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhpZGVzLyBzaG93cyB0aGUgZmlsdGVyaW5nIGNvbHVtbnMgaW5wdXQgZnJvbSB0aGUgVUkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZUZpbHRlciA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGl0ZW1zIG9mIHRoZSBzZWxlY3RlZCBjb2x1bW5zLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uSXRlbXMgPSAgdGhpcy5jb2x1bW5IaWRpbmdVSS5jb2x1bW5JdGVtcztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgQ29sdW1uQ2hvb3NlckJhc2VcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBjb2x1bW5JdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDb2x1bW5zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSB3aGljaCBmaWx0ZXJzIHRoZSBjb2x1bW5zIGxpc3QuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBmaWx0ZXJDcml0ZXJpYSA9ICB0aGlzLmNvbHVtbkhpZGluZ1VJLmZpbHRlckNyaXRlcmlhO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBDb2x1bW5DaG9vc2VyQmFzZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGZpbHRlckNyaXRlcmlhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyQ3JpdGVyaWE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgd2hpY2ggZmlsdGVycyB0aGUgY29sdW1ucyBsaXN0LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1jb2x1bW4taGlkaW5nIFtmaWx0ZXJDcml0ZXJpYV09XCInSUQnXCI+PC9pZ3gtY29sdW1uLWhpZGluZz5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgQ29sdW1uQ2hvb3NlckJhc2VcbiAgICAgKi9cbiAgICBzZXQgZmlsdGVyQ3JpdGVyaWEodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJGaWx0ZXJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlckNyaXRlcmlhID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmlsdGVyQ3JpdGVyaWEgJiYgdGhpcy5fZmlsdGVyQ3JpdGVyaWEubGVuZ3RoID4gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maWx0ZXJDcml0ZXJpYSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRpc3BsYXkgb3JkZXIgb2YgdGhlIGNvbHVtbnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5EaXNwbGF5T3JkZXIgID0gIHRoaXMuY29sdW1uSGlkaW5nVUkuY29sdW1uRGlzcGxheU9yZGVyO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBDb2x1bW5DaG9vc2VyQmFzZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGNvbHVtbkRpc3BsYXlPcmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbkRpc3BsYXlPcmRlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGlzcGxheSBvcmRlciBvZiB0aGUgY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb2x1bW5IaWRpbmdVSS5jb2x1bW5EaXNwbGF5T3JkZXIgPSBDb2x1bW5EaXNwbGF5T3JkZXIuQWxwaGFiZXRpY2FsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBDb2x1bW5DaG9vc2VyQmFzZVxuICAgICAqL1xuICAgIHNldCBjb2x1bW5EaXNwbGF5T3JkZXIodmFsdWU6IENvbHVtbkRpc3BsYXlPcmRlcikge1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vcmRlckNvbHVtbnModmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbHRlckNyaXRlcmlhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFjY2VzcyB0byB0aGUgY29sdW1uSGlkaW5nVUk6XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoJ2NvbHVtbi1oaWRpbmctY29tcG9uZW50JylcbiAgICAgKiAgcHVibGljIGNvbHVtbkhpZGluZ1VJOiBJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnQ7XG4gICAgICogYGBgXG4gICAgICogU2V0cy9nZXRzIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBjb2x1bW4gYXJlYS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbnNBcmVhTWF4SGVpZ2h0ID0gIHRoaXMuY29sdW1uSGlkaW5nVUkuY29sdW1uc0FyZWFNYXhIZWlnaHQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4taGlkaW5nIFtjb2x1bW5zQXJlYU1heEhlaWdodF09XCIyMDBweFwiPjwvaWd4LWNvbHVtbi1oaWRpbmc+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIENvbHVtbkNob29zZXJCYXNlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sdW1uc0FyZWFNYXhIZWlnaHQgPSAnMTAwJSc7XG4gICAgLyoqXG4gICAgICogU2V0cy9HZXRzIHRoZSBjc3MgY2xhc3Mgc2VsZWN0b3IuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgdmFsdWUgb2YgdGhlIGBjbGFzc2AgYXR0cmlidXRlIGlzIGBcImlneC1jb2x1bW4taGlkaW5nXCJgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY3NzQ0xhc3MgPSAgdGhpcy5jb2x1bW5IaWRpbmdVSS5jc3NDbGFzcztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb2x1bW5IaWRpbmdVSS5jc3NDbGFzcyA9ICdjb2x1bW4tY2hvb3Nlcic7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIENvbHVtbkNob29zZXJCYXNlXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWNvbHVtbi1oaWRpbmcnO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2N1cnJlbnRDb2x1bW5zID0gW107XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ3JpZENvbHVtbnMgPSBbXTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9yYXdDb2x1bW5zID0gW107XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY29sdW1uRGlzcGxheU9yZGVyID0gQ29sdW1uRGlzcGxheU9yZGVyLkRpc3BsYXlPcmRlcjtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9maWx0ZXJDcml0ZXJpYSA9ICcnO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpbHRlckNvbHVtbnNQcm9tcHQgPSAnJztcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF90aXRsZSA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9jdXJyZW50Q29sdW1ucykge1xuICAgICAgICAgICAgaXRlbS52YWx1ZUNoYW5nZWQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbkl0ZW1zKCkge1xuICAgICAgICBpZiAodGhpcy5fZ3JpZENvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fcmF3Q29sdW1ucyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fZ3JpZENvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlQ29sdW1uSXRlbSh0aGlzLCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jhd0NvbHVtbnMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb2x1bW5zID0gdGhpcy5fcmF3Q29sdW1ucy5zbGljZSgwKTtcbiAgICAgICAgICAgIHRoaXMub3JkZXJDb2x1bW5zKHRoaXMuX2NvbHVtbkRpc3BsYXlPcmRlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUNvbHVtbkl0ZW0oY29udGFpbmVyOiBhbnksIGNvbHVtbjogYW55KTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9yZGVyQ29sdW1ucyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2x1bW5EaXNwbGF5T3JkZXIgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDb2x1bW5EaXNwbGF5T3JkZXJbQ29sdW1uRGlzcGxheU9yZGVyLkFscGhhYmV0aWNhbF0gfHxcbiAgICAgICAgICAgIHZhbHVlID09PSBDb2x1bW5EaXNwbGF5T3JkZXIuQWxwaGFiZXRpY2FsKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29sdW1ucyA9IHRoaXMuX3Jhd0NvbHVtbnMuc2xpY2UoMCkuc29ydCgoY3VycmVudCwgbmV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG5leHQubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbHVtbnMgPSB0aGlzLl9yYXdDb2x1bW5zO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuT3IpO1xuICAgICAgICBmaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaCh0aGlzLmNyZWF0ZUZpbHRlcmluZ0V4cHJlc3Npb24oJ25hbWUnKSk7XG4gICAgICAgIGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKHRoaXMuY3JlYXRlRmlsdGVyaW5nRXhwcmVzc2lvbignZmllbGQnKSk7XG4gICAgICAgIGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKHRoaXMuY3JlYXRlRmlsdGVyaW5nRXhwcmVzc2lvbignaGVhZGVyJykpO1xuXG4gICAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gbmV3IEN1c3RvbUZpbHRlcmluZ1N0cmF0ZWd5KCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDb2x1bW5zID0gc3RyYXRlZ3kuZmlsdGVyKHRoaXMuX2N1cnJlbnRDb2x1bW5zLCBmaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRmlsdGVyaW5nRXhwcmVzc2lvbihmaWVsZE5hbWU6IHN0cmluZyk6IElGaWx0ZXJpbmdFeHByZXNzaW9uIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbignY29udGFpbnMnKSxcbiAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICAgICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAgICAgICAgIHNlYXJjaFZhbDogdGhpcy5fZmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNsZWFyRmlsdGVyaW5nKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbkl0ZW1zKCk7XG4gICAgfVxufVxuXG5cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Pipe } from '@angular/core';
import { cloneArray } from '../core/utils';
import { DataUtil } from '../data-operations/data-util';
import { FilteringStrategy } from '../data-operations/filtering-strategy';
import { FilteringExpressionsTree } from '../data-operations/filtering-expressions-tree';
import { IGX_COMBO_COMPONENT } from './combo.common';
/**
 * @hidden
 */
var IgxComboFilteringPipe = /** @class */ (function () {
    function IgxComboFilteringPipe(combo) {
        this.combo = combo;
    }
    /**
     * @param {?} collection
     * @param {?} expressions
     * @param {?} logic
     * @return {?}
     */
    IgxComboFilteringPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} expressions
     * @param {?} logic
     * @return {?}
     */
    function (collection, expressions, logic) {
        /** @type {?} */
        var filteringExpressionsTree = new FilteringExpressionsTree(logic);
        filteringExpressionsTree.filteringOperands = expressions;
        /** @type {?} */
        var state = { expressionsTree: filteringExpressionsTree, strategy: new SimpleFilteringStrategy() };
        state.expressionsTree.filteringOperands = this.combo.filteringExpressions;
        if (!state.expressionsTree.filteringOperands.length) {
            return collection;
        }
        /** @type {?} */
        var result = DataUtil.filter(cloneArray(collection), state);
        return result;
    };
    IgxComboFilteringPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'comboFiltering'
                },] }
    ];
    /** @nocollapse */
    IgxComboFilteringPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_COMBO_COMPONENT,] }] }
    ]; };
    return IgxComboFilteringPipe;
}());
export { IgxComboFilteringPipe };
if (false) {
    /** @type {?} */
    IgxComboFilteringPipe.prototype.combo;
}
/**
 * @hidden
 */
var /**
 * @hidden
 */
SimpleFilteringStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleFilteringStrategy, _super);
    function SimpleFilteringStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} rec
     * @param {?} expr
     * @return {?}
     */
    SimpleFilteringStrategy.prototype.findMatchByExpression = /**
     * @param {?} rec
     * @param {?} expr
     * @return {?}
     */
    function (rec, expr) {
        /** @type {?} */
        var cond = expr.condition;
        /** @type {?} */
        var val = expr.fieldName === undefined ? rec : rec[expr.fieldName];
        return cond.logic(val, expr.searchVal, expr.ignoreCase);
    };
    return SimpleFilteringStrategy;
}(FilteringStrategy));
/**
 * @hidden
 */
export { SimpleFilteringStrategy };
/**
 * @hidden
 */
var IgxComboSortingPipe = /** @class */ (function () {
    function IgxComboSortingPipe() {
    }
    /**
     * @param {?} collection
     * @param {?} expressions
     * @return {?}
     */
    IgxComboSortingPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} expressions
     * @return {?}
     */
    function (collection, expressions) {
        if (!expressions.length) {
            return collection;
        }
        /** @type {?} */
        var result = DataUtil.sort(cloneArray(collection), expressions);
        return result;
    };
    IgxComboSortingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'comboSorting',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxComboSortingPipe.ctorParameters = function () { return []; };
    return IgxComboSortingPipe;
}());
export { IgxComboSortingPipe };
/**
 * @hidden
 */
var IgxComboGroupingPipe = /** @class */ (function () {
    function IgxComboGroupingPipe(combo) {
        this.combo = combo;
    }
    /**
     * @param {?} collection
     * @param {?} groupKey
     * @return {?}
     */
    IgxComboGroupingPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} groupKey
     * @return {?}
     */
    function (collection, groupKey) {
        var _a;
        this.combo.filteredData = collection;
        if ((!groupKey && groupKey !== 0) || !collection.length) {
            return collection;
        }
        /** @type {?} */
        var data = cloneArray(collection);
        /** @type {?} */
        var inserts = 0;
        /** @type {?} */
        var currentHeader = null;
        for (var i = 0; i < collection.length; i++) {
            /** @type {?} */
            var insertFlag = 0;
            if (currentHeader !== collection[i][groupKey]) {
                currentHeader = collection[i][groupKey];
                insertFlag = 1;
            }
            if (insertFlag) {
                data.splice(i + inserts, 0, (_a = {},
                    _a[this.combo.valueKey] = currentHeader,
                    _a[this.combo.groupKey] = currentHeader,
                    _a.isHeader = true,
                    _a));
                inserts++;
            }
        }
        return data;
    };
    IgxComboGroupingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'comboGrouping'
                },] }
    ];
    /** @nocollapse */
    IgxComboGroupingPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_COMBO_COMPONENT,] }] }
    ]; };
    return IgxComboGroupingPipe;
}());
export { IgxComboGroupingPipe };
if (false) {
    /** @type {?} */
    IgxComboGroupingPipe.prototype.combo;
}
/**
 * @hidden
 */
var IgxComboFilterConditionPipe = /** @class */ (function () {
    function IgxComboFilterConditionPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IgxComboFilterConditionPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.split(/(?=[A-Z])/).join(' ');
    };
    IgxComboFilterConditionPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'filterCondition',
                    pure: true
                },] }
    ];
    return IgxComboFilterConditionPipe;
}());
export { IgxComboFilterConditionPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8ucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbWJvL2NvbWJvLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBZ0IsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU1uRTtJQUtJLCtCQUFnRCxLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO0lBQUksQ0FBQzs7Ozs7OztJQUVqRSx5Q0FBUzs7Ozs7O0lBQWhCLFVBQWlCLFVBQWlCLEVBQUUsV0FBbUMsRUFDdEQsS0FBcUI7O1lBQzVCLHdCQUF3QixHQUFJLElBQUksd0JBQXdCLENBQUMsS0FBSyxDQUFDO1FBQ3JFLHdCQUF3QixDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQzs7WUFDbkQsS0FBSyxHQUFvQixFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsSUFBSSx1QkFBdUIsRUFBRSxFQUFDO1FBQ3BILEtBQUssQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztRQUUxRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFDakQsT0FBTyxVQUFVLENBQUM7U0FDckI7O1lBRUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxD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QkFDRixJQUFJLEVBQUUsZUFBZTtpQkFDeEI7Ozs7Z0RBR2dCLE1BQU0sU0FBQyxtQkFBbUI7O0lBMkIzQywyQkFBQztDQUFBLEFBaENELElBZ0NDO1NBN0JZLG9CQUFvQjs7O0lBRWpCLHFDQUF1RDs7Ozs7QUFnQ3ZFO0lBQUE7SUFVQSxDQUFDOzs7OztJQUhVLCtDQUFTOzs7O0lBQWhCLFVBQWlCLEtBQWE7UUFDMUIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFUSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7O0lBT0Qsa0NBQUM7Q0FBQSxBQVZELElBVUM7U0FMWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNsb25lQXJyYXkgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBGaWx0ZXJpbmdMb2dpYywgSUZpbHRlcmluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IElTb3J0aW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9zb3J0aW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IElGaWx0ZXJpbmdTdGF0ZSB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZpbHRlcmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb25zLXRyZWUnO1xuaW1wb3J0IHsgSUdYX0NPTUJPX0NPTVBPTkVOVCwgSWd4Q29tYm9CYXNlIH0gZnJvbSAnLi9jb21iby5jb21tb24nO1xuXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2NvbWJvRmlsdGVyaW5nJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb21ib0ZpbHRlcmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSUdYX0NPTUJPX0NPTVBPTkVOVCkgcHVibGljIGNvbWJvOiBJZ3hDb21ib0Jhc2UpIHsgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBhbnlbXSwgZXhwcmVzc2lvbnM6IElGaWx0ZXJpbmdFeHByZXNzaW9uW10sXG4gICAgICAgICAgICAgICAgICAgICBsb2dpYzogRmlsdGVyaW5nTG9naWMpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlID0gIG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUobG9naWMpO1xuICAgICAgICBmaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMgPSBleHByZXNzaW9ucztcbiAgICAgICAgY29uc3Qgc3RhdGU6IElGaWx0ZXJpbmdTdGF0ZSA9IHsgZXhwcmVzc2lvbnNUcmVlOiBmaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIHN0cmF0ZWd5OiBuZXcgU2ltcGxlRmlsdGVyaW5nU3RyYXRlZ3koKX07XG4gICAgICAgIHN0YXRlLmV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcyA9IHRoaXMuY29tYm8uZmlsdGVyaW5nRXhwcmVzc2lvbnM7XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5leHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IERhdGFVdGlsLmZpbHRlcihjbG9uZUFycmF5KGNvbGxlY3Rpb24pLCBzdGF0ZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUZpbHRlcmluZ1N0cmF0ZWd5IGV4dGVuZHMgRmlsdGVyaW5nU3RyYXRlZ3kge1xuICAgIHB1YmxpYyBmaW5kTWF0Y2hCeUV4cHJlc3Npb24ocmVjOiBvYmplY3QsIGV4cHI6IElGaWx0ZXJpbmdFeHByZXNzaW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbmQgPSBleHByLmNvbmRpdGlvbjtcbiAgICAgICAgY29uc3QgdmFsID0gZXhwci5maWVsZE5hbWUgPT09IHVuZGVmaW5lZCA/IHJlYyA6IHJlY1tleHByLmZpZWxkTmFtZV07XG4gICAgICAgIHJldHVybiBjb25kLmxvZ2ljKHZhbCwgZXhwci5zZWFyY2hWYWwsIGV4cHIuaWdub3JlQ2FzZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdjb21ib1NvcnRpbmcnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29tYm9Tb3J0aW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvbGxlY3Rpb246IGFueVtdLCBleHByZXNzaW9uczogSVNvcnRpbmdFeHByZXNzaW9uIFtdKSB7XG4gICAgICAgIGlmICghZXhwcmVzc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBEYXRhVXRpbC5zb3J0KGNsb25lQXJyYXkoY29sbGVjdGlvbiksIGV4cHJlc3Npb25zKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2NvbWJvR3JvdXBpbmcnXG59KVxuZXhwb3J0IGNsYXNzIElneENvbWJvR3JvdXBpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KElHWF9DT01CT19DT01QT05FTlQpIHB1YmxpYyBjb21ibzogSWd4Q29tYm9CYXNlKSB7IH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY29sbGVjdGlvbjogYW55W10sIGdyb3VwS2V5OiBhbnkpIHtcbiAgICAgICAgdGhpcy5jb21iby5maWx0ZXJlZERhdGEgPSBjb2xsZWN0aW9uO1xuICAgICAgICBpZiAoKCFncm91cEtleSAmJiBncm91cEtleSAhPT0gMCkgfHwgIWNvbGxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gY2xvbmVBcnJheShjb2xsZWN0aW9uKTtcbiAgICAgICAgbGV0IGluc2VydHMgPSAwO1xuICAgICAgICBsZXQgY3VycmVudEhlYWRlciA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGluc2VydEZsYWcgPSAwO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRIZWFkZXIgIT09IGNvbGxlY3Rpb25baV1bZ3JvdXBLZXldKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEhlYWRlciA9IGNvbGxlY3Rpb25baV1bZ3JvdXBLZXldO1xuICAgICAgICAgICAgICAgIGluc2VydEZsYWcgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluc2VydEZsYWcpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpICsgaW5zZXJ0cywgMCwge1xuICAgICAgICAgICAgICAgICAgICBbdGhpcy5jb21iby52YWx1ZUtleV06IGN1cnJlbnRIZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLmNvbWJvLmdyb3VwS2V5XTogY3VycmVudEhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgaXNIZWFkZXI6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpbnNlcnRzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdmaWx0ZXJDb25kaXRpb24nLFxuICAgIHB1cmU6IHRydWVcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hDb21ib0ZpbHRlckNvbmRpdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zcGxpdCgvKD89W0EtWl0pLykuam9pbignICcpO1xuICAgIH1cbn1cbiJdfQ==
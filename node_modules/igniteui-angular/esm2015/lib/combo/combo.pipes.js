/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Pipe } from '@angular/core';
import { cloneArray } from '../core/utils';
import { DataUtil } from '../data-operations/data-util';
import { FilteringStrategy } from '../data-operations/filtering-strategy';
import { FilteringExpressionsTree } from '../data-operations/filtering-expressions-tree';
import { IGX_COMBO_COMPONENT } from './combo.common';
/**
 * @hidden
 */
export class IgxComboFilteringPipe {
    /**
     * @param {?} combo
     */
    constructor(combo) {
        this.combo = combo;
    }
    /**
     * @param {?} collection
     * @param {?} expressions
     * @param {?} logic
     * @return {?}
     */
    transform(collection, expressions, logic) {
        /** @type {?} */
        const filteringExpressionsTree = new FilteringExpressionsTree(logic);
        filteringExpressionsTree.filteringOperands = expressions;
        /** @type {?} */
        const state = { expressionsTree: filteringExpressionsTree, strategy: new SimpleFilteringStrategy() };
        state.expressionsTree.filteringOperands = this.combo.filteringExpressions;
        if (!state.expressionsTree.filteringOperands.length) {
            return collection;
        }
        /** @type {?} */
        const result = DataUtil.filter(cloneArray(collection), state);
        return result;
    }
}
IgxComboFilteringPipe.decorators = [
    { type: Pipe, args: [{
                name: 'comboFiltering'
            },] }
];
/** @nocollapse */
IgxComboFilteringPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_COMBO_COMPONENT,] }] }
];
if (false) {
    /** @type {?} */
    IgxComboFilteringPipe.prototype.combo;
}
/**
 * @hidden
 */
export class SimpleFilteringStrategy extends FilteringStrategy {
    /**
     * @param {?} rec
     * @param {?} expr
     * @return {?}
     */
    findMatchByExpression(rec, expr) {
        /** @type {?} */
        const cond = expr.condition;
        /** @type {?} */
        const val = expr.fieldName === undefined ? rec : rec[expr.fieldName];
        return cond.logic(val, expr.searchVal, expr.ignoreCase);
    }
}
/**
 * @hidden
 */
export class IgxComboSortingPipe {
    constructor() { }
    /**
     * @param {?} collection
     * @param {?} expressions
     * @return {?}
     */
    transform(collection, expressions) {
        if (!expressions.length) {
            return collection;
        }
        /** @type {?} */
        const result = DataUtil.sort(cloneArray(collection), expressions);
        return result;
    }
}
IgxComboSortingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'comboSorting',
                pure: true
            },] }
];
/** @nocollapse */
IgxComboSortingPipe.ctorParameters = () => [];
/**
 * @hidden
 */
export class IgxComboGroupingPipe {
    /**
     * @param {?} combo
     */
    constructor(combo) {
        this.combo = combo;
    }
    /**
     * @param {?} collection
     * @param {?} groupKey
     * @return {?}
     */
    transform(collection, groupKey) {
        this.combo.filteredData = collection;
        if ((!groupKey && groupKey !== 0) || !collection.length) {
            return collection;
        }
        /** @type {?} */
        const data = cloneArray(collection);
        /** @type {?} */
        let inserts = 0;
        /** @type {?} */
        let currentHeader = null;
        for (let i = 0; i < collection.length; i++) {
            /** @type {?} */
            let insertFlag = 0;
            if (currentHeader !== collection[i][groupKey]) {
                currentHeader = collection[i][groupKey];
                insertFlag = 1;
            }
            if (insertFlag) {
                data.splice(i + inserts, 0, {
                    [this.combo.valueKey]: currentHeader,
                    [this.combo.groupKey]: currentHeader,
                    isHeader: true
                });
                inserts++;
            }
        }
        return data;
    }
}
IgxComboGroupingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'comboGrouping'
            },] }
];
/** @nocollapse */
IgxComboGroupingPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_COMBO_COMPONENT,] }] }
];
if (false) {
    /** @type {?} */
    IgxComboGroupingPipe.prototype.combo;
}
/**
 * @hidden
 */
export class IgxComboFilterConditionPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value.split(/(?=[A-Z])/).join(' ');
    }
}
IgxComboFilterConditionPipe.decorators = [
    { type: Pipe, args: [{
                name: 'filterCondition',
                pure: true
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8ucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbWJvL2NvbWJvLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFnQixNQUFNLGdCQUFnQixDQUFDOzs7O0FBU25FLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFOUIsWUFBZ0QsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUFJLENBQUM7Ozs7Ozs7SUFFakUsU0FBUyxDQUFDLFVBQWlCLEVBQUUsV0FBbUMsRUFDdEQsS0FBcUI7O2NBQzVCLHdCQUF3QixHQUFJLElBQUksd0JBQXdCLENBQUMsS0FBSyxDQUFDO1FBQ3JFLHdCQUF3QixDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQzs7Y0FDbkQsS0FBSyxHQUFvQixFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsSUFBSSx1QkFBdUIsRUFBRSxFQUFDO1FBQ3BILEtBQUssQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztRQUUxRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFDakQsT0FBTyxVQUFVLENBQUM7U0FDckI7O2NBRUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMs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SUFFN0IsU0FBUyxDQUFDLEtBQWE7UUFDMUIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7WUFUSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLElBQUk7YUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2xvbmVBcnJheSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgRGF0YVV0aWwgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IEZpbHRlcmluZ0xvZ2ljLCBJRmlsdGVyaW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVNvcnRpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUZpbHRlcmluZ1N0YXRlIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmlsdGVyaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLXN0cmF0ZWd5JztcbmltcG9ydCB7IEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbnMtdHJlZSc7XG5pbXBvcnQgeyBJR1hfQ09NQk9fQ09NUE9ORU5ULCBJZ3hDb21ib0Jhc2UgfSBmcm9tICcuL2NvbWJvLmNvbW1vbic7XG5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnY29tYm9GaWx0ZXJpbmcnXG59KVxuZXhwb3J0IGNsYXNzIElneENvbWJvRmlsdGVyaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChJR1hfQ09NQk9fQ09NUE9ORU5UKSBwdWJsaWMgY29tYm86IElneENvbWJvQmFzZSkgeyB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvbGxlY3Rpb246IGFueVtdLCBleHByZXNzaW9uczogSUZpbHRlcmluZ0V4cHJlc3Npb25bXSxcbiAgICAgICAgICAgICAgICAgICAgIGxvZ2ljOiBGaWx0ZXJpbmdMb2dpYykge1xuICAgICAgICBjb25zdCBmaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgPSAgbmV3IEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZShsb2dpYyk7XG4gICAgICAgIGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcyA9IGV4cHJlc3Npb25zO1xuICAgICAgICBjb25zdCBzdGF0ZTogSUZpbHRlcmluZ1N0YXRlID0geyBleHByZXNzaW9uc1RyZWU6IGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgc3RyYXRlZ3k6IG5ldyBTaW1wbGVGaWx0ZXJpbmdTdHJhdGVneSgpfTtcbiAgICAgICAgc3RhdGUuZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzID0gdGhpcy5jb21iby5maWx0ZXJpbmdFeHByZXNzaW9ucztcblxuICAgICAgICBpZiAoIXN0YXRlLmV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gRGF0YVV0aWwuZmlsdGVyKGNsb25lQXJyYXkoY29sbGVjdGlvbiksIHN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlRmlsdGVyaW5nU3RyYXRlZ3kgZXh0ZW5kcyBGaWx0ZXJpbmdTdHJhdGVneSB7XG4gICAgcHVibGljIGZpbmRNYXRjaEJ5RXhwcmVzc2lvbihyZWM6IG9iamVjdCwgZXhwcjogSUZpbHRlcmluZ0V4cHJlc3Npb24pOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29uZCA9IGV4cHIuY29uZGl0aW9uO1xuICAgICAgICBjb25zdCB2YWwgPSBleHByLmZpZWxkTmFtZSA9PT0gdW5kZWZpbmVkID8gcmVjIDogcmVjW2V4cHIuZmllbGROYW1lXTtcbiAgICAgICAgcmV0dXJuIGNvbmQubG9naWModmFsLCBleHByLnNlYXJjaFZhbCwgZXhwci5pZ25vcmVDYXNlKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2NvbWJvU29ydGluZycsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb21ib1NvcnRpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY29sbGVjdGlvbjogYW55W10sIGV4cHJlc3Npb25zOiBJU29ydGluZ0V4cHJlc3Npb24gW10pIHtcbiAgICAgICAgaWYgKCFleHByZXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IERhdGFVdGlsLnNvcnQoY2xvbmVBcnJheShjb2xsZWN0aW9uKSwgZXhwcmVzc2lvbnMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnY29tYm9Hcm91cGluZydcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29tYm9Hcm91cGluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSUdYX0NPTUJPX0NPTVBPTkVOVCkgcHVibGljIGNvbWJvOiBJZ3hDb21ib0Jhc2UpIHsgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBhbnlbXSwgZ3JvdXBLZXk6IGFueSkge1xuICAgICAgICB0aGlzLmNvbWJvLmZpbHRlcmVkRGF0YSA9IGNvbGxlY3Rpb247XG4gICAgICAgIGlmICgoIWdyb3VwS2V5ICYmIGdyb3VwS2V5ICE9PSAwKSB8fCAhY29sbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjbG9uZUFycmF5KGNvbGxlY3Rpb24pO1xuICAgICAgICBsZXQgaW5zZXJ0cyA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50SGVhZGVyID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5zZXJ0RmxhZyA9IDA7XG4gICAgICAgICAgICBpZiAoY3VycmVudEhlYWRlciAhPT0gY29sbGVjdGlvbltpXVtncm91cEtleV0pIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SGVhZGVyID0gY29sbGVjdGlvbltpXVtncm91cEtleV07XG4gICAgICAgICAgICAgICAgaW5zZXJ0RmxhZyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5zZXJ0RmxhZykge1xuICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGkgKyBpbnNlcnRzLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLmNvbWJvLnZhbHVlS2V5XTogY3VycmVudEhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuY29tYm8uZ3JvdXBLZXldOiBjdXJyZW50SGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGluc2VydHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2ZpbHRlckNvbmRpdGlvbicsXG4gICAgcHVyZTogdHJ1ZVxufSlcblxuZXhwb3J0IGNsYXNzIElneENvbWJvRmlsdGVyQ29uZGl0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oPz1bQS1aXSkvKS5qb2luKCcgJyk7XG4gICAgfVxufVxuIl19
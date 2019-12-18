/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { cloneArray } from '../../core/utils';
import { GridBaseAPIService } from '../api.service';
import { DataUtil } from '../../data-operations/data-util';
/**
 * @hidden
 */
export class IgxGridHierarchicalPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} collection
     * @param {?=} state
     * @param {?=} id
     * @param {?=} primaryKey
     * @param {?=} childKeys
     * @param {?=} pipeTrigger
     * @return {?}
     */
    transform(collection, state = [], id, primaryKey, childKeys, pipeTrigger) {
        if (childKeys.length === 0) {
            return collection;
        }
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        const result = this.addHierarchy(grid, cloneArray(collection), state, primaryKey, childKeys);
        return result;
    }
    /**
     * @template T
     * @param {?} grid
     * @param {?} data
     * @param {?} state
     * @param {?} primaryKey
     * @param {?} childKeys
     * @return {?}
     */
    addHierarchy(grid, data, state, primaryKey, childKeys) {
        /** @type {?} */
        const result = [];
        data.forEach((v) => {
            result.push(v);
            /** @type {?} */
            const childGridsData = {};
            childKeys.forEach((childKey) => {
                /** @type {?} */
                const childData = v[childKey] ? v[childKey] : null;
                childGridsData[childKey] = childData;
            });
            if (grid.isExpanded(v)) {
                result.push({ rowID: primaryKey ? v[primaryKey] : v, childGridsData: childGridsData });
            }
        });
        return result;
    }
}
IgxGridHierarchicalPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridHierarchical',
                pure: true
            },] }
];
/** @nocollapse */
IgxGridHierarchicalPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridHierarchicalPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
export class IgxGridHierarchicalPagingPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} collection
     * @param {?=} page
     * @param {?=} perPage
     * @param {?=} id
     * @param {?=} pipeTrigger
     * @return {?}
     */
    transform(collection, page = 0, perPage = 15, id, pipeTrigger) {
        if (!this.gridAPI.grid.paging) {
            return collection;
        }
        /** @type {?} */
        const state = {
            index: page,
            recordsPerPage: perPage
        };
        /** @type {?} */
        const result = DataUtil.page(cloneArray(collection), state);
        this.gridAPI.grid.pagingState = state;
        return result;
    }
}
IgxGridHierarchicalPagingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridHierarchicalPaging',
                pure: true
            },] }
];
/** @nocollapse */
IgxGridHierarchicalPagingPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridHierarchicalPagingPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2hpZXJhcmNoaWNhbC1ncmlkL2hpZXJhcmNoaWNhbC1ncmlkLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBUzNELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFFaEMsWUFBb0IsT0FBeUQ7UUFBekQsWUFBTyxHQUFQLE9BQU8sQ0FBa0Q7SUFBSSxDQUFDOzs7Ozs7Ozs7O0lBRTNFLFNBQVMsQ0FDWixVQUFlLEVBQ2YsS0FBSyxHQUFHLEVBQUUsRUFDVixFQUFVLEVBQ1YsVUFBZSxFQUNmLFNBQW1CLEVBQ25CLFdBQW1CO1FBRW5CLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxVQUFVLENBQUM7U0FDckI7O2NBQ0ssSUFBSSxHQUFpQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7O2NBQ3RELE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7UUFFNUYsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Ozs7Ozs7OztJQUVNLFlBQVksQ0FBSSxJQUFJLEVBQUUsSUFBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBbUI7O2NBQ3BFLE1BQU0sR0FBRyxFQUFFO1FBRWpCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O2tCQUNULGNBQWMsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7c0JBQ3JCLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDbEQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO2FBQ3pGO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7WUF4Q0osSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLElBQUksRUFBRSxJQUFJO2FBQ2I7Ozs7WUFWUSxrQkFBa0I7Ozs7Ozs7SUFhWCwwQ0FBaUU7Ozs7O0FBNENqRixNQUFNLE9BQU8sNkJBQTZCOzs7O0lBRXRDLFlBQW9CLE9BQXlEO1FBQXpELFlBQU8sR0FBUCxPQUFPLENBQWtEO0lBQUksQ0FBQzs7Ozs7Ozs7O0lBRTNFLFNBQVMsQ0FBQyxVQUFpQixFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFVLEVBQUUsV0FBbUI7UUFFdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixPQUFPLFVBQVUsQ0FBQztTQUNyQjs7Y0FFSyxLQUFLLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLGNBQWMsRUFBRSxPQUFPO1NBQzFCOztjQUVLLE1BQU0sR0FBVSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN0QyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7WUF0QkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLElBQUksRUFBRSxJQUFJO2FBQ2I7Ozs7WUF4RFEsa0JBQWtCOzs7Ozs7O0lBMkRYLGdEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNsb25lQXJyYXkgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVXRpbCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuXG4vKipcbiAqQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2dyaWRIaWVyYXJjaGljYWwnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEhpZXJhcmNoaWNhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQ+KSB7IH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oXG4gICAgICAgIGNvbGxlY3Rpb246IGFueSxcbiAgICAgICAgc3RhdGUgPSBbXSxcbiAgICAgICAgaWQ6IHN0cmluZyxcbiAgICAgICAgcHJpbWFyeUtleTogYW55LFxuICAgICAgICBjaGlsZEtleXM6IHN0cmluZ1tdLFxuICAgICAgICBwaXBlVHJpZ2dlcjogbnVtYmVyXG4gICAgICAgICk6IGFueVtdIHtcbiAgICAgICAgaWYgKGNoaWxkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyaWQ6IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hZGRIaWVyYXJjaHkoZ3JpZCwgY2xvbmVBcnJheShjb2xsZWN0aW9uKSwgc3RhdGUsIHByaW1hcnlLZXksIGNoaWxkS2V5cyk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSGllcmFyY2h5PFQ+KGdyaWQsIGRhdGE6IFRbXSwgc3RhdGUsIHByaW1hcnlLZXksIGNoaWxkS2V5czogc3RyaW5nW10pOiBUW10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBkYXRhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHYpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRHcmlkc0RhdGEgPSB7fTtcbiAgICAgICAgICAgIGNoaWxkS2V5cy5mb3JFYWNoKChjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IHZbY2hpbGRLZXldID8gdltjaGlsZEtleV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGNoaWxkR3JpZHNEYXRhW2NoaWxkS2V5XSA9IGNoaWxkRGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGdyaWQuaXNFeHBhbmRlZCh2KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgcm93SUQ6IHByaW1hcnlLZXkgPyB2W3ByaW1hcnlLZXldIDogdiwgY2hpbGRHcmlkc0RhdGE6IGNoaWxkR3JpZHNEYXRhfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdncmlkSGllcmFyY2hpY2FsUGFnaW5nJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRIaWVyYXJjaGljYWxQYWdpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50PikgeyB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvbGxlY3Rpb246IGFueVtdLCBwYWdlID0gMCwgcGVyUGFnZSA9IDE1LCBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogYW55W10ge1xuXG4gICAgICAgIGlmICghdGhpcy5ncmlkQVBJLmdyaWQucGFnaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgaW5kZXg6IHBhZ2UsXG4gICAgICAgICAgICByZWNvcmRzUGVyUGFnZTogcGVyUGFnZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBEYXRhVXRpbC5wYWdlKGNsb25lQXJyYXkoY29sbGVjdGlvbiksIHN0YXRlKTtcbiAgICAgICAgdGhpcy5ncmlkQVBJLmdyaWQucGFnaW5nU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=
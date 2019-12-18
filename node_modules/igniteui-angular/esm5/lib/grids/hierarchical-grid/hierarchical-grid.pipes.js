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
var IgxGridHierarchicalPipe = /** @class */ (function () {
    function IgxGridHierarchicalPipe(gridAPI) {
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
    IgxGridHierarchicalPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?=} state
     * @param {?=} id
     * @param {?=} primaryKey
     * @param {?=} childKeys
     * @param {?=} pipeTrigger
     * @return {?}
     */
    function (collection, state, id, primaryKey, childKeys, pipeTrigger) {
        if (state === void 0) { state = []; }
        if (childKeys.length === 0) {
            return collection;
        }
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var result = this.addHierarchy(grid, cloneArray(collection), state, primaryKey, childKeys);
        return result;
    };
    /**
     * @template T
     * @param {?} grid
     * @param {?} data
     * @param {?} state
     * @param {?} primaryKey
     * @param {?} childKeys
     * @return {?}
     */
    IgxGridHierarchicalPipe.prototype.addHierarchy = /**
     * @template T
     * @param {?} grid
     * @param {?} data
     * @param {?} state
     * @param {?} primaryKey
     * @param {?} childKeys
     * @return {?}
     */
    function (grid, data, state, primaryKey, childKeys) {
        /** @type {?} */
        var result = [];
        data.forEach(function (v) {
            result.push(v);
            /** @type {?} */
            var childGridsData = {};
            childKeys.forEach(function (childKey) {
                /** @type {?} */
                var childData = v[childKey] ? v[childKey] : null;
                childGridsData[childKey] = childData;
            });
            if (grid.isExpanded(v)) {
                result.push({ rowID: primaryKey ? v[primaryKey] : v, childGridsData: childGridsData });
            }
        });
        return result;
    };
    IgxGridHierarchicalPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gridHierarchical',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxGridHierarchicalPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxGridHierarchicalPipe;
}());
export { IgxGridHierarchicalPipe };
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
var IgxGridHierarchicalPagingPipe = /** @class */ (function () {
    function IgxGridHierarchicalPagingPipe(gridAPI) {
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
    IgxGridHierarchicalPagingPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?=} page
     * @param {?=} perPage
     * @param {?=} id
     * @param {?=} pipeTrigger
     * @return {?}
     */
    function (collection, page, perPage, id, pipeTrigger) {
        if (page === void 0) { page = 0; }
        if (perPage === void 0) { perPage = 15; }
        if (!this.gridAPI.grid.paging) {
            return collection;
        }
        /** @type {?} */
        var state = {
            index: page,
            recordsPerPage: perPage
        };
        /** @type {?} */
        var result = DataUtil.page(cloneArray(collection), state);
        this.gridAPI.grid.pagingState = state;
        return result;
    };
    IgxGridHierarchicalPagingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gridHierarchicalPaging',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxGridHierarchicalPagingPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxGridHierarchicalPagingPipe;
}());
export { IgxGridHierarchicalPagingPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridHierarchicalPagingPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2hpZXJhcmNoaWNhbC1ncmlkL2hpZXJhcmNoaWNhbC1ncmlkLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBSzNEO0lBTUksaUNBQW9CLE9BQXlEO1FBQXpELFlBQU8sR0FBUCxPQUFPLENBQWtEO0lBQUksQ0FBQzs7Ozs7Ozs7OztJQUUzRSwyQ0FBUzs7Ozs7Ozs7O0lBQWhCLFVBQ0ksVUFBZSxFQUNmLEtBQVUsRUFDVixFQUFVLEVBQ1YsVUFBZSxFQUNmLFNBQW1CLEVBQ25CLFdBQW1CO1FBSm5CLHNCQUFBLEVBQUEsVUFBVTtRQU1WLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxVQUFVLENBQUM7U0FDckI7O1lBQ0ssSUFBSSxHQUFpQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7O1lBQ3RELE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7UUFFNUYsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Ozs7Ozs7OztJQUVNLDhDQUFZOzs7Ozs7Ozs7SUFBbkIsVUFBdUIsSUFBSSxFQUFFLElBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQW1COztZQUNwRSxNQUFNLEdBQUcsRUFBRTtRQUVqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUNULGNBQWMsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFROztvQkFDakIsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNsRCxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUM7YUFDekY7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7O2dCQXhDSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBVlEsa0JBQWtCOztJQWdEM0IsOEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXJDWSx1QkFBdUI7Ozs7OztJQUVwQiwwQ0FBaUU7Ozs7O0FBd0NqRjtJQU1JLHVDQUFvQixPQUF5RDtRQUF6RCxZQUFPLEdBQVAsT0FBTyxDQUFrRDtJQUFJLENBQUM7Ozs7Ozs7OztJQUUzRSxpREFBUzs7Ozs7Ozs7SUFBaEIsVUFBaUIsVUFBaUIsRUFBRSxJQUFRLEVBQUUsT0FBWSxFQUFFLEVBQVUsRUFBRSxXQUFtQjtRQUF2RCxxQkFBQSxFQUFBLFFBQVE7UUFBRSx3QkFBQSxFQUFBLFlBQVk7UUFFdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixPQUFPLFVBQVUsQ0FBQztTQUNyQjs7WUFFSyxLQUFLLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLGNBQWMsRUFBRSxPQUFPO1NBQzFCOztZQUVLLE1BQU0sR0FBVSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN0QyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOztnQkF0QkosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSx3QkFBd0I7b0JBQzlCLElBQUksRUFBRSxJQUFJO2lCQUNiOzs7O2dCQXhEUSxrQkFBa0I7O0lBNEUzQixvQ0FBQztDQUFBLEFBdkJELElBdUJDO1NBbkJZLDZCQUE2Qjs7Ozs7O0lBRTFCLGdEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNsb25lQXJyYXkgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVXRpbCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuXG4vKipcbiAqQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2dyaWRIaWVyYXJjaGljYWwnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEhpZXJhcmNoaWNhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQ+KSB7IH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oXG4gICAgICAgIGNvbGxlY3Rpb246IGFueSxcbiAgICAgICAgc3RhdGUgPSBbXSxcbiAgICAgICAgaWQ6IHN0cmluZyxcbiAgICAgICAgcHJpbWFyeUtleTogYW55LFxuICAgICAgICBjaGlsZEtleXM6IHN0cmluZ1tdLFxuICAgICAgICBwaXBlVHJpZ2dlcjogbnVtYmVyXG4gICAgICAgICk6IGFueVtdIHtcbiAgICAgICAgaWYgKGNoaWxkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyaWQ6IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hZGRIaWVyYXJjaHkoZ3JpZCwgY2xvbmVBcnJheShjb2xsZWN0aW9uKSwgc3RhdGUsIHByaW1hcnlLZXksIGNoaWxkS2V5cyk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSGllcmFyY2h5PFQ+KGdyaWQsIGRhdGE6IFRbXSwgc3RhdGUsIHByaW1hcnlLZXksIGNoaWxkS2V5czogc3RyaW5nW10pOiBUW10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBkYXRhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHYpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRHcmlkc0RhdGEgPSB7fTtcbiAgICAgICAgICAgIGNoaWxkS2V5cy5mb3JFYWNoKChjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IHZbY2hpbGRLZXldID8gdltjaGlsZEtleV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGNoaWxkR3JpZHNEYXRhW2NoaWxkS2V5XSA9IGNoaWxkRGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGdyaWQuaXNFeHBhbmRlZCh2KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgcm93SUQ6IHByaW1hcnlLZXkgPyB2W3ByaW1hcnlLZXldIDogdiwgY2hpbGRHcmlkc0RhdGE6IGNoaWxkR3JpZHNEYXRhfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdncmlkSGllcmFyY2hpY2FsUGFnaW5nJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRIaWVyYXJjaGljYWxQYWdpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50PikgeyB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvbGxlY3Rpb246IGFueVtdLCBwYWdlID0gMCwgcGVyUGFnZSA9IDE1LCBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogYW55W10ge1xuXG4gICAgICAgIGlmICghdGhpcy5ncmlkQVBJLmdyaWQucGFnaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgaW5kZXg6IHBhZ2UsXG4gICAgICAgICAgICByZWNvcmRzUGVyUGFnZTogcGVyUGFnZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBEYXRhVXRpbC5wYWdlKGNsb25lQXJyYXkoY29sbGVjdGlvbiksIHN0YXRlKTtcbiAgICAgICAgdGhpcy5ncmlkQVBJLmdyaWQucGFnaW5nU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=
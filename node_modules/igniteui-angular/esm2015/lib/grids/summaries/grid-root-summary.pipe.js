/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
export class IgxSummaryDataPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} id
     * @param {?=} trigger
     * @return {?}
     */
    transform(id, trigger = 0) {
        /** @type {?} */
        const summaryService = this.gridAPI.grid.summaryService;
        return summaryService.calculateSummaries(summaryService.rootSummaryID, this.gridAPI.get_summary_data());
    }
}
IgxSummaryDataPipe.decorators = [
    { type: Pipe, args: [{
                name: 'igxGridSummaryDataPipe',
                pure: true
            },] }
];
/** @nocollapse */
IgxSummaryDataPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxSummaryDataPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1yb290LXN1bW1hcnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvc3VtbWFyaWVzL2dyaWQtcm9vdC1zdW1tYXJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3BELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFFM0IsWUFBb0IsT0FBcUU7UUFBckUsWUFBTyxHQUFQLE9BQU8sQ0FBOEQ7SUFBSSxDQUFDOzs7Ozs7SUFFOUYsU0FBUyxDQUFDLEVBQVUsRUFBRSxVQUFrQixDQUFDOztjQUMvQixjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYztRQUN2RCxPQUFPLGNBQWMsQ0FBQyxrQkFBa0IsQ0FDcEMsY0FBYyxDQUFDLGFBQWEsRUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUNsQyxDQUFDO0lBQ04sQ0FBQzs7O1lBZEosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLElBQUksRUFBRSxJQUFJO2FBQ2I7Ozs7WUFOUSxrQkFBa0I7Ozs7Ozs7SUFTWCxxQ0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdpZ3hHcmlkU3VtbWFyeURhdGFQaXBlJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneFN1bW1hcnlEYXRhUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHsgfVxuXG4gICAgdHJhbnNmb3JtKGlkOiBzdHJpbmcsIHRyaWdnZXI6IG51bWJlciA9IDApIHtcbiAgICAgICAgY29uc3Qgc3VtbWFyeVNlcnZpY2UgPSB0aGlzLmdyaWRBUEkuZ3JpZC5zdW1tYXJ5U2VydmljZTtcbiAgICAgICAgcmV0dXJuIHN1bW1hcnlTZXJ2aWNlLmNhbGN1bGF0ZVN1bW1hcmllcyhcbiAgICAgICAgICAgIHN1bW1hcnlTZXJ2aWNlLnJvb3RTdW1tYXJ5SUQsXG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkuZ2V0X3N1bW1hcnlfZGF0YSgpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19
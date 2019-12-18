/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
var IgxSummaryDataPipe = /** @class */ (function () {
    function IgxSummaryDataPipe(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} id
     * @param {?=} trigger
     * @return {?}
     */
    IgxSummaryDataPipe.prototype.transform = /**
     * @param {?} id
     * @param {?=} trigger
     * @return {?}
     */
    function (id, trigger) {
        if (trigger === void 0) { trigger = 0; }
        /** @type {?} */
        var summaryService = this.gridAPI.grid.summaryService;
        return summaryService.calculateSummaries(summaryService.rootSummaryID, this.gridAPI.get_summary_data());
    };
    IgxSummaryDataPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'igxGridSummaryDataPipe',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxSummaryDataPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxSummaryDataPipe;
}());
export { IgxSummaryDataPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxSummaryDataPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1yb290LXN1bW1hcnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvc3VtbWFyaWVzL2dyaWQtcm9vdC1zdW1tYXJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BEO0lBTUksNEJBQW9CLE9BQXFFO1FBQXJFLFlBQU8sR0FBUCxPQUFPLENBQThEO0lBQUksQ0FBQzs7Ozs7O0lBRTlGLHNDQUFTOzs7OztJQUFULFVBQVUsRUFBVSxFQUFFLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7O1lBQy9CLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjO1FBQ3ZELE9BQU8sY0FBYyxDQUFDLGtCQUFrQixDQUNwQyxjQUFjLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQ2xDLENBQUM7SUFDTixDQUFDOztnQkFkSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLHdCQUF3QjtvQkFDOUIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBTlEsa0JBQWtCOztJQWtCM0IseUJBQUM7Q0FBQSxBQWZELElBZUM7U0FYWSxrQkFBa0I7Ozs7OztJQUVmLHFDQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2lneEdyaWRTdW1tYXJ5RGF0YVBpcGUnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4U3VtbWFyeURhdGFQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikgeyB9XG5cbiAgICB0cmFuc2Zvcm0oaWQ6IHN0cmluZywgdHJpZ2dlcjogbnVtYmVyID0gMCkge1xuICAgICAgICBjb25zdCBzdW1tYXJ5U2VydmljZSA9IHRoaXMuZ3JpZEFQSS5ncmlkLnN1bW1hcnlTZXJ2aWNlO1xuICAgICAgICByZXR1cm4gc3VtbWFyeVNlcnZpY2UuY2FsY3VsYXRlU3VtbWFyaWVzKFxuICAgICAgICAgICAgc3VtbWFyeVNlcnZpY2Uucm9vdFN1bW1hcnlJRCxcbiAgICAgICAgICAgIHRoaXMuZ3JpZEFQSS5nZXRfc3VtbWFyeV9kYXRhKClcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=
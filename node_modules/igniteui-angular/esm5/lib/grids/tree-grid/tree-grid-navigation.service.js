/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxGridNavigationService } from '../grid-navigation.service';
var IgxTreeGridNavigationService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxTreeGridNavigationService, _super);
    function IgxTreeGridNavigationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    IgxTreeGridNavigationService.prototype.getCellSelector = /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    function (visibleIndex, isSummary) {
        if (isSummary === void 0) { isSummary = false; }
        if (isSummary) {
            return 'igx-grid-summary-cell';
        }
        if (visibleIndex === 0) {
            return 'igx-tree-grid-cell';
        }
        return 'igx-grid-cell';
    };
    /**
     * @protected
     * @return {?}
     */
    IgxTreeGridNavigationService.prototype.getRowSelector = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'igx-tree-grid-row';
    };
    return IgxTreeGridNavigationService;
}(IgxGridNavigationService));
export { IgxTreeGridNavigationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLW5hdmlnYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RTtJQUFrRCx3REFBd0I7SUFBMUU7O0lBZUEsQ0FBQzs7Ozs7OztJQWJhLHNEQUFlOzs7Ozs7SUFBekIsVUFBMEIsWUFBcUIsRUFBRSxTQUFpQjtRQUFqQiwwQkFBQSxFQUFBLGlCQUFpQjtRQUM5RCxJQUFJLFNBQVMsRUFBRTtZQUNYLE9BQU8sdUJBQXVCLENBQUM7U0FDbEM7UUFDRCxJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxvQkFBb0IsQ0FBQztTQUMvQjtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRVMscURBQWM7Ozs7SUFBeEI7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFDTCxtQ0FBQztBQUFELENBQUMsQUFmRCxDQUFrRCx3QkFBd0IsR0FlekUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9ncmlkLW5hdmlnYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZE5hdmlnYXRpb25TZXJ2aWNlIGV4dGVuZHMgSWd4R3JpZE5hdmlnYXRpb25TZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBnZXRDZWxsU2VsZWN0b3IodmlzaWJsZUluZGV4PzogbnVtYmVyLCBpc1N1bW1hcnkgPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpc1N1bW1hcnkpIHtcbiAgICAgICAgICAgIHJldHVybiAnaWd4LWdyaWQtc3VtbWFyeS1jZWxsJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2lneC10cmVlLWdyaWQtY2VsbCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpZ3gtZ3JpZC1jZWxsJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Um93U2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnaWd4LXRyZWUtZ3JpZC1yb3cnO1xuICAgIH1cbn1cbiJdfQ==
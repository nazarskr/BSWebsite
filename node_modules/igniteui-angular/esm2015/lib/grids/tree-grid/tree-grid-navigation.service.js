/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxGridNavigationService } from '../grid-navigation.service';
export class IgxTreeGridNavigationService extends IgxGridNavigationService {
    /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    getCellSelector(visibleIndex, isSummary = false) {
        if (isSummary) {
            return 'igx-grid-summary-cell';
        }
        if (visibleIndex === 0) {
            return 'igx-tree-grid-cell';
        }
        return 'igx-grid-cell';
    }
    /**
     * @protected
     * @return {?}
     */
    getRowSelector() {
        return 'igx-tree-grid-row';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLW5hdmlnYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXRFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSx3QkFBd0I7Ozs7Ozs7SUFFNUQsZUFBZSxDQUFDLFlBQXFCLEVBQUUsU0FBUyxHQUFHLEtBQUs7UUFDOUQsSUFBSSxTQUFTLEVBQUU7WUFDWCxPQUFPLHVCQUF1QixDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sb0JBQW9CLENBQUM7U0FDL0I7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVTLGNBQWM7UUFDcEIsT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9ncmlkLW5hdmlnYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZE5hdmlnYXRpb25TZXJ2aWNlIGV4dGVuZHMgSWd4R3JpZE5hdmlnYXRpb25TZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBnZXRDZWxsU2VsZWN0b3IodmlzaWJsZUluZGV4PzogbnVtYmVyLCBpc1N1bW1hcnkgPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpc1N1bW1hcnkpIHtcbiAgICAgICAgICAgIHJldHVybiAnaWd4LWdyaWQtc3VtbWFyeS1jZWxsJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2lneC10cmVlLWdyaWQtY2VsbCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpZ3gtZ3JpZC1jZWxsJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Um93U2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnaWd4LXRyZWUtZ3JpZC1yb3cnO1xuICAgIH1cbn1cbiJdfQ==
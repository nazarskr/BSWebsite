/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const IGX_COMBO_COMPONENT = 'IgxComboComponentToken';
/**
 * @hidden \@internal TODO: Evaluate
 * @record
 */
export function IgxComboBase() { }
if (false) {
    /** @type {?} */
    IgxComboBase.prototype.id;
    /** @type {?} */
    IgxComboBase.prototype.data;
    /** @type {?} */
    IgxComboBase.prototype.valueKey;
    /** @type {?} */
    IgxComboBase.prototype.groupKey;
    /** @type {?} */
    IgxComboBase.prototype.isRemote;
    /** @type {?} */
    IgxComboBase.prototype.filteredData;
    /** @type {?} */
    IgxComboBase.prototype.filteringExpressions;
    /** @type {?} */
    IgxComboBase.prototype.totalItemCount;
    /** @type {?} */
    IgxComboBase.prototype.itemsMaxHeight;
    /** @type {?} */
    IgxComboBase.prototype.itemHeight;
    /** @type {?} */
    IgxComboBase.prototype.searchValue;
    /** @type {?} */
    IgxComboBase.prototype.searchInput;
    /** @type {?} */
    IgxComboBase.prototype.comboInput;
    /** @type {?} */
    IgxComboBase.prototype.onOpened;
    /** @type {?} */
    IgxComboBase.prototype.onOpening;
    /** @type {?} */
    IgxComboBase.prototype.onClosing;
    /** @type {?} */
    IgxComboBase.prototype.onClosed;
    /**
     * @param {?=} opening
     * @return {?}
     */
    IgxComboBase.prototype.focusSearchInput = function (opening) { };
    /**
     * @return {?}
     */
    IgxComboBase.prototype.triggerCheck = function () { };
    /**
     * @return {?}
     */
    IgxComboBase.prototype.addItemToCollection = function () { };
    /**
     * @return {?}
     */
    IgxComboBase.prototype.isAddButtonVisible = function () { };
    /**
     * @param {?=} event
     * @return {?}
     */
    IgxComboBase.prototype.handleInputChange = function (event) { };
    /**
     * @param {?} itemID
     * @return {?}
     */
    IgxComboBase.prototype.isItemSelected = function (itemID) { };
    /**
     * @param {?} itemIDs
     * @param {?=} clearSelection
     * @param {?=} event
     * @return {?}
     */
    IgxComboBase.prototype.selectItems = function (itemIDs, clearSelection, event) { };
    /**
     * @param {?} itemIDs
     * @param {?=} event
     * @return {?}
     */
    IgxComboBase.prototype.deselectItems = function (itemIDs, event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8uY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsd0JBQXdCOzs7OztBQUczRCxrQ0EwQkM7OztJQXpCRywwQkFBVzs7SUFDWCw0QkFBWTs7SUFDWixnQ0FBaUI7O0lBQ2pCLGdDQUFpQjs7SUFDakIsZ0NBQWtCOztJQUNsQixvQ0FBb0I7O0lBQ3BCLDRDQUE2Qzs7SUFDN0Msc0NBQXVCOztJQUN2QixzQ0FBdUI7O0lBQ3ZCLGtDQUFtQjs7SUFDbkIsbUNBQW9COztJQUNwQixtQ0FBMEM7O0lBQzFDLGtDQUF5Qzs7SUFDekMsZ0NBQTZCOztJQUM3QixpQ0FBNkM7O0lBQzdDLGlDQUFvRDs7SUFDcEQsZ0NBQTZCOzs7OztJQUM3QixpRUFBMEM7Ozs7SUFDMUMsc0RBQXFCOzs7O0lBQ3JCLDZEQUE0Qjs7OztJQUM1Qiw0REFBOEI7Ozs7O0lBQzlCLGdFQUF3Qzs7Ozs7SUFDeEMsOERBQXFDOzs7Ozs7O0lBQ3JDLG1GQUEyRTs7Ozs7O0lBQzNFLHFFQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuY2VsYWJsZUV2ZW50QXJncywgQ2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElGaWx0ZXJpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBJR1hfQ09NQk9fQ09NUE9ORU5UID0gJ0lneENvbWJvQ29tcG9uZW50VG9rZW4nO1xuXG4vKiogQGhpZGRlbiBAaW50ZXJuYWwgVE9ETzogRXZhbHVhdGUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSWd4Q29tYm9CYXNlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhdGE6IGFueVtdO1xuICAgIHZhbHVlS2V5OiBzdHJpbmc7XG4gICAgZ3JvdXBLZXk6IHN0cmluZztcbiAgICBpc1JlbW90ZTogYm9vbGVhbjtcbiAgICBmaWx0ZXJlZERhdGE6IGFueVtdO1xuICAgIGZpbHRlcmluZ0V4cHJlc3Npb25zOiBJRmlsdGVyaW5nRXhwcmVzc2lvbltdO1xuICAgIHRvdGFsSXRlbUNvdW50OiBudW1iZXI7XG4gICAgaXRlbXNNYXhIZWlnaHQ6IG51bWJlcjtcbiAgICBpdGVtSGVpZ2h0OiBudW1iZXI7XG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgICBzZWFyY2hJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgICBjb21ib0lucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICAgIG9uT3BlbmVkOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgb25PcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUV2ZW50QXJncz47XG4gICAgb25DbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3M+O1xuICAgIG9uQ2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgZm9jdXNTZWFyY2hJbnB1dChvcGVuaW5nPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgdHJpZ2dlckNoZWNrKCk6IHZvaWQ7XG4gICAgYWRkSXRlbVRvQ29sbGVjdGlvbigpOiB2b2lkO1xuICAgIGlzQWRkQnV0dG9uVmlzaWJsZSgpOiBib29sZWFuO1xuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50Pzogc3RyaW5nKTogdm9pZDtcbiAgICBpc0l0ZW1TZWxlY3RlZChpdGVtSUQ6IGFueSk6IGJvb2xlYW47XG4gICAgc2VsZWN0SXRlbXMoaXRlbUlEczogYW55W10sIGNsZWFyU2VsZWN0aW9uPzogYm9vbGVhbiwgZXZlbnQ/OiBFdmVudCk6IHZvaWQ7XG4gICAgZGVzZWxlY3RJdGVtcyhpdGVtSURzOiBhbnlbXSwgZXZlbnQ/OiBFdmVudCk6IHZvaWQ7XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, TemplateRef, Optional, Inject } from '@angular/core';
import { DisplayDensityBase, DisplayDensityToken } from '../core/density';
/**
 * @record
 */
export function IListChild() { }
if (false) {
    /** @type {?} */
    IListChild.prototype.index;
}
/**
 * @hidden
 * @abstract
 */
var IgxListBase = /** @class */ (function (_super) {
    tslib_1.__extends(IgxListBase, _super);
    function IgxListBase(_displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this._displayDensityOptions = _displayDensityOptions;
        return _this;
    }
    /** @nocollapse */
    IgxListBase.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    return IgxListBase;
}(DisplayDensityBase));
export { IgxListBase };
if (false) {
    /** @type {?} */
    IgxListBase.prototype.onItemClicked;
    /** @type {?} */
    IgxListBase.prototype.allowLeftPanning;
    /** @type {?} */
    IgxListBase.prototype.allowRightPanning;
    /** @type {?} */
    IgxListBase.prototype.panEndTriggeringThreshold;
    /** @type {?} */
    IgxListBase.prototype.onLeftPan;
    /** @type {?} */
    IgxListBase.prototype.onRightPan;
    /** @type {?} */
    IgxListBase.prototype.onPanStateChange;
    /** @type {?} */
    IgxListBase.prototype.children;
    /** @type {?} */
    IgxListBase.prototype.listItemLeftPanningTemplate;
    /** @type {?} */
    IgxListBase.prototype.listItemRightPanningTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxListBase.prototype._displayDensityOptions;
}
/** @enum {number} */
var IgxListPanState = {
    NONE: 0, LEFT: 1, RIGHT: 2,
};
export { IgxListPanState };
IgxListPanState[IgxListPanState.NONE] = 'NONE';
IgxListPanState[IgxListPanState.LEFT] = 'LEFT';
IgxListPanState[IgxListPanState.RIGHT] = 'RIGHT';
var IgxEmptyListTemplateDirective = /** @class */ (function () {
    function IgxEmptyListTemplateDirective(template) {
        this.template = template;
    }
    IgxEmptyListTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxEmptyList]'
                },] }
    ];
    /** @nocollapse */
    IgxEmptyListTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxEmptyListTemplateDirective;
}());
export { IgxEmptyListTemplateDirective };
if (false) {
    /** @type {?} */
    IgxEmptyListTemplateDirective.prototype.template;
}
var IgxDataLoadingTemplateDirective = /** @class */ (function () {
    function IgxDataLoadingTemplateDirective(template) {
        this.template = template;
    }
    IgxDataLoadingTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxDataLoading]'
                },] }
    ];
    /** @nocollapse */
    IgxDataLoadingTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxDataLoadingTemplateDirective;
}());
export { IgxDataLoadingTemplateDirective };
if (false) {
    /** @type {?} */
    IgxDataLoadingTemplateDirective.prototype.template;
}
var IgxListItemLeftPanningTemplateDirective = /** @class */ (function () {
    function IgxListItemLeftPanningTemplateDirective(template) {
        this.template = template;
    }
    IgxListItemLeftPanningTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxListItemLeftPanning]'
                },] }
    ];
    /** @nocollapse */
    IgxListItemLeftPanningTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxListItemLeftPanningTemplateDirective;
}());
export { IgxListItemLeftPanningTemplateDirective };
if (false) {
    /** @type {?} */
    IgxListItemLeftPanningTemplateDirective.prototype.template;
}
var IgxListItemRightPanningTemplateDirective = /** @class */ (function () {
    function IgxListItemRightPanningTemplateDirective(template) {
        this.template = template;
    }
    IgxListItemRightPanningTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxListItemRightPanning]'
                },] }
    ];
    /** @nocollapse */
    IgxListItemRightPanningTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxListItemRightPanningTemplateDirective;
}());
export { IgxListItemRightPanningTemplateDirective };
if (false) {
    /** @type {?} */
    IgxListItemRightPanningTemplateDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21tb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBMkIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFbEcsZ0NBRUM7OztJQURHLDJCQUFjOzs7Ozs7QUFJbEI7SUFBMEMsdUNBQWtCO0lBWXhELHFCQUErRCxzQkFBOEM7UUFBN0csWUFDSSxrQkFBTSxzQkFBc0IsQ0FBQyxTQUNoQztRQUY4RCw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOztJQUU3RyxDQUFDOzs7Z0RBRlksUUFBUSxZQUFJLE1BQU0sU0FBQyxtQkFBbUI7O0lBR3ZELGtCQUFDO0NBQUEsQUFmRCxDQUEwQyxrQkFBa0IsR0FlM0Q7U0FmcUIsV0FBVzs7O0lBQzdCLG9DQUFpQzs7SUFDakMsdUNBQTBCOztJQUMxQix3Q0FBMkI7O0lBQzNCLGdEQUFrQzs7SUFDbEMsZ0NBQTZCOztJQUM3QixpQ0FBOEI7O0lBQzlCLHVDQUFvQzs7SUFDcEMsK0JBQXlCOztJQUN6QixrREFBcUU7O0lBQ3JFLG1EQUF1RTs7Ozs7SUFFM0QsNkNBQWlHOzs7O0lBS25GLE9BQUksRUFBRSxPQUFJLEVBQUUsUUFBSzs7Ozs7O0FBRS9DO0lBSUksdUNBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUksQ0FBQzs7Z0JBSnJELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3Qjs7OztnQkE3Qm1CLFdBQVc7O0lBZ0MvQixvQ0FBQztDQUFBLEFBTEQsSUFLQztTQUZZLDZCQUE2Qjs7O0lBQzFCLGlEQUFpQzs7QUFHakQ7SUFJSSx5Q0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBSSxDQUFDOztnQkFKckQsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9COzs7O2dCQXBDbUIsV0FBVzs7SUF1Qy9CLHNDQUFDO0NBQUEsQUFMRCxJQUtDO1NBRlksK0JBQStCOzs7SUFDNUIsbURBQWlDOztBQUdqRDtJQUlJLGlEQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFJLENBQUM7O2dCQUpyRCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtpQkFDdkM7Ozs7Z0JBM0NtQixXQUFXOztJQThDL0IsOENBQUM7Q0FBQSxBQUxELElBS0M7U0FGWSx1Q0FBdUM7OztJQUNwQywyREFBaUM7O0FBR2pEO0lBSUksa0RBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUksQ0FBQzs7Z0JBSnJELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN4Qzs7OztnQkFsRG1CLFdBQVc7O0lBcUQvQiwrQ0FBQztDQUFBLEFBTEQsSUFLQztTQUZZLHdDQUF3Qzs7O0lBQ3JDLDREQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eUJhc2UsIElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4gfSBmcm9tICcuLi9jb3JlL2RlbnNpdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMaXN0Q2hpbGQge1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWd4TGlzdEJhc2UgZXh0ZW5kcyBEaXNwbGF5RGVuc2l0eUJhc2Uge1xuICAgIG9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFsbG93TGVmdFBhbm5pbmc6IGJvb2xlYW47XG4gICAgYWxsb3dSaWdodFBhbm5pbmc6IGJvb2xlYW47XG4gICAgcGFuRW5kVHJpZ2dlcmluZ1RocmVzaG9sZDogbnVtYmVyO1xuICAgIG9uTGVmdFBhbjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb25SaWdodFBhbjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb25QYW5TdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY2hpbGRyZW46IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIGxpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZTogSWd4TGlzdEl0ZW1MZWZ0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlO1xuICAgIGxpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGU6IElneExpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gSWd4TGlzdFBhblN0YXRlIHsgTk9ORSwgTEVGVCwgUklHSFQgfVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hFbXB0eUxpc3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFbXB0eUxpc3RUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RGF0YUxvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hEYXRhTG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hMaXN0SXRlbUxlZnRQYW5uaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4TGlzdEl0ZW1MZWZ0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hMaXN0SXRlbVJpZ2h0UGFubmluZ10nXG59KVxuZXhwb3J0IGNsYXNzIElneExpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iXX0=
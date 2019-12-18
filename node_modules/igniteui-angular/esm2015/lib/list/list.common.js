/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class IgxListBase extends DisplayDensityBase {
    /**
     * @param {?} _displayDensityOptions
     */
    constructor(_displayDensityOptions) {
        super(_displayDensityOptions);
        this._displayDensityOptions = _displayDensityOptions;
    }
}
/** @nocollapse */
IgxListBase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
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
const IgxListPanState = {
    NONE: 0, LEFT: 1, RIGHT: 2,
};
export { IgxListPanState };
IgxListPanState[IgxListPanState.NONE] = 'NONE';
IgxListPanState[IgxListPanState.LEFT] = 'LEFT';
IgxListPanState[IgxListPanState.RIGHT] = 'RIGHT';
export class IgxEmptyListTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxEmptyListTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxEmptyList]'
            },] }
];
/** @nocollapse */
IgxEmptyListTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxEmptyListTemplateDirective.prototype.template;
}
export class IgxDataLoadingTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxDataLoadingTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxDataLoading]'
            },] }
];
/** @nocollapse */
IgxDataLoadingTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxDataLoadingTemplateDirective.prototype.template;
}
export class IgxListItemLeftPanningTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxListItemLeftPanningTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxListItemLeftPanning]'
            },] }
];
/** @nocollapse */
IgxListItemLeftPanningTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxListItemLeftPanningTemplateDirective.prototype.template;
}
export class IgxListItemRightPanningTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxListItemRightPanningTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxListItemRightPanning]'
            },] }
];
/** @nocollapse */
IgxListItemRightPanningTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxListItemRightPanningTemplateDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21tb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUEyQixRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUVsRyxnQ0FFQzs7O0lBREcsMkJBQWM7Ozs7OztBQUlsQixNQUFNLE9BQWdCLFdBQVksU0FBUSxrQkFBa0I7Ozs7SUFZeEQsWUFBK0Qsc0JBQThDO1FBQ3pHLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRDZCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFFN0csQ0FBQzs7Ozs0Q0FGWSxRQUFRLFlBQUksTUFBTSxTQUFDLG1CQUFtQjs7OztJQVhuRCxvQ0FBaUM7O0lBQ2pDLHVDQUEwQjs7SUFDMUIsd0NBQTJCOztJQUMzQixnREFBa0M7O0lBQ2xDLGdDQUE2Qjs7SUFDN0IsaUNBQThCOztJQUM5Qix1Q0FBb0M7O0lBQ3BDLCtCQUF5Qjs7SUFDekIsa0RBQXFFOztJQUNyRSxtREFBdUU7Ozs7O0lBRTNELDZDQUFpRzs7OztJQUtuRixPQUFJLEVBQUUsT0FBSSxFQUFFLFFBQUs7Ozs7OztBQUsvQyxNQUFNLE9BQU8sNkJBQTZCOzs7O0lBQ3RDLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUksQ0FBQzs7O1lBSnJELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzdCOzs7O1lBN0JtQixXQUFXOzs7O0lBK0JmLGlEQUFpQzs7QUFNakQsTUFBTSxPQUFPLCtCQUErQjs7OztJQUN4QyxZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFJLENBQUM7OztZQUpyRCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjthQUMvQjs7OztZQXBDbUIsV0FBVzs7OztJQXNDZixtREFBaUM7O0FBTWpELE1BQU0sT0FBTyx1Q0FBdUM7Ozs7SUFDaEQsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBSSxDQUFDOzs7WUFKckQsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwwQkFBMEI7YUFDdkM7Ozs7WUEzQ21CLFdBQVc7Ozs7SUE2Q2YsMkRBQWlDOztBQU1qRCxNQUFNLE9BQU8sd0NBQXdDOzs7O0lBQ2pELFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUksQ0FBQzs7O1lBSnJELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3hDOzs7O1lBbERtQixXQUFXOzs7O0lBb0RmLDREQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eUJhc2UsIElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4gfSBmcm9tICcuLi9jb3JlL2RlbnNpdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMaXN0Q2hpbGQge1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWd4TGlzdEJhc2UgZXh0ZW5kcyBEaXNwbGF5RGVuc2l0eUJhc2Uge1xuICAgIG9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFsbG93TGVmdFBhbm5pbmc6IGJvb2xlYW47XG4gICAgYWxsb3dSaWdodFBhbm5pbmc6IGJvb2xlYW47XG4gICAgcGFuRW5kVHJpZ2dlcmluZ1RocmVzaG9sZDogbnVtYmVyO1xuICAgIG9uTGVmdFBhbjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb25SaWdodFBhbjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb25QYW5TdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY2hpbGRyZW46IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIGxpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZTogSWd4TGlzdEl0ZW1MZWZ0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlO1xuICAgIGxpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGU6IElneExpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gSWd4TGlzdFBhblN0YXRlIHsgTk9ORSwgTEVGVCwgUklHSFQgfVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hFbXB0eUxpc3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFbXB0eUxpc3RUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RGF0YUxvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hEYXRhTG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hMaXN0SXRlbUxlZnRQYW5uaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4TGlzdEl0ZW1MZWZ0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hMaXN0SXRlbVJpZ2h0UGFubmluZ10nXG59KVxuZXhwb3J0IGNsYXNzIElneExpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iXX0=
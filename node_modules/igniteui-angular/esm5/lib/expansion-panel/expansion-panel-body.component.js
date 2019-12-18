/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, ElementRef, Input, ChangeDetectorRef, Inject } from '@angular/core';
import { IGX_EXPANSION_PANEL_COMPONENT } from './expansion-panel.common';
var IgxExpansionPanelBodyComponent = /** @class */ (function () {
    function IgxExpansionPanelBodyComponent(panel, element, cdr) {
        this.panel = panel;
        this.element = element;
        this.cdr = cdr;
        this._labelledBy = '';
        this._label = '';
        /**
         * @hidden
         */
        this.cssClass = "igx-expansion-panel__body";
        /**
         * Gets/sets the `role` attribute of the panel body
         * Default is 'region';
         * Get
         * ```typescript
         *  const currentRole = this.panel.body.role;
         * ```
         * Set
         * ```typescript
         *  this.panel.body.role = 'content';
         * ```
         * ```html
         *  <igx-expansion-panel-body [role]="'custom'"></igx-expansion-panel-body>
         * ```
         */
        this.role = 'region';
    }
    Object.defineProperty(IgxExpansionPanelBodyComponent.prototype, "label", {
        /**
         * Gets the `aria-label` attribute of the panel body
         * Defaults to the panel id with '-region' in the end;
         * Get
         * ```typescript
         *  const currentLabel = this.panel.body.label;
         * ```
         */
        get: /**
         * Gets the `aria-label` attribute of the panel body
         * Defaults to the panel id with '-region' in the end;
         * Get
         * ```typescript
         *  const currentLabel = this.panel.body.label;
         * ```
         * @return {?}
         */
        function () {
            return this._label || this.panel.id + '-region';
        },
        /**
         * Sets the `aria-label` attribute of the panel body
         * ```typescript
         *  this.panel.body.label = 'my-custom-label';
         * ```
         * ```html
         *  <igx-expansion-panel-body [label]="'my-custom-label'"></igx-expansion-panel-body>
         * ```
         */
        set: /**
         * Sets the `aria-label` attribute of the panel body
         * ```typescript
         *  this.panel.body.label = 'my-custom-label';
         * ```
         * ```html
         *  <igx-expansion-panel-body [label]="'my-custom-label'"></igx-expansion-panel-body>
         * ```
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._label = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExpansionPanelBodyComponent.prototype, "labelledBy", {
        /**
         * Gets the `aria-labelledby` attribute of the panel body
         * Defaults to the panel header id;
         * Get
         * ```typescript
         *  const currentLabel = this.panel.body.labelledBy;
         * ```
         */
        get: /**
         * Gets the `aria-labelledby` attribute of the panel body
         * Defaults to the panel header id;
         * Get
         * ```typescript
         *  const currentLabel = this.panel.body.labelledBy;
         * ```
         * @return {?}
         */
        function () {
            return this._labelledBy;
        },
        /**
         * Sets the `aria-labelledby` attribute of the panel body
         * ```typescript
         *  this.panel.body.labelledBy = 'my-custom-id';
         * ```
         * ```html
         *  <igx-expansion-panel-body [labelledBy]="'my-custom-id'"></igx-expansion-panel-body>
         * ```
         */
        set: /**
         * Sets the `aria-labelledby` attribute of the panel body
         * ```typescript
         *  this.panel.body.labelledBy = 'my-custom-id';
         * ```
         * ```html
         *  <igx-expansion-panel-body [labelledBy]="'my-custom-id'"></igx-expansion-panel-body>
         * ```
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._labelledBy = val;
        },
        enumerable: true,
        configurable: true
    });
    IgxExpansionPanelBodyComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'igx-expansion-panel-body',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    IgxExpansionPanelBodyComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_EXPANSION_PANEL_COMPONENT,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxExpansionPanelBodyComponent.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.igx-expansion-panel__body',] }],
        label: [{ type: Input }, { type: HostBinding, args: ['attr.aria-label',] }],
        labelledBy: [{ type: Input }, { type: HostBinding, args: ['attr.aria-labelledby',] }],
        role: [{ type: Input }, { type: HostBinding, args: ['attr.role',] }]
    };
    return IgxExpansionPanelBodyComponent;
}());
export { IgxExpansionPanelBodyComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxExpansionPanelBodyComponent.prototype._labelledBy;
    /**
     * @type {?}
     * @private
     */
    IgxExpansionPanelBodyComponent.prototype._label;
    /**
     * @hidden
     * @type {?}
     */
    IgxExpansionPanelBodyComponent.prototype.cssClass;
    /**
     * Gets/sets the `role` attribute of the panel body
     * Default is 'region';
     * Get
     * ```typescript
     *  const currentRole = this.panel.body.role;
     * ```
     * Set
     * ```typescript
     *  this.panel.body.role = 'content';
     * ```
     * ```html
     *  <igx-expansion-panel-body [role]="'custom'"></igx-expansion-panel-body>
     * ```
     * @type {?}
     */
    IgxExpansionPanelBodyComponent.prototype.role;
    /** @type {?} */
    IgxExpansionPanelBodyComponent.prototype.panel;
    /** @type {?} */
    IgxExpansionPanelBodyComponent.prototype.element;
    /** @type {?} */
    IgxExpansionPanelBodyComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQXlCLDZCQUE2QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEc7SUFRSSx3Q0FDa0QsS0FBNEIsRUFDbkUsT0FBbUIsRUFBUyxHQUFzQjtRQURYLFVBQUssR0FBTCxLQUFLLENBQXVCO1FBQ25FLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUpyRCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQUcsRUFBRSxDQUFDOzs7O1FBU2IsYUFBUSxHQUFHLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1FBdUV2QyxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBNUV2QixDQUFDO0lBZUQsc0JBRVcsaURBQUs7UUFWaEI7Ozs7Ozs7V0FPRzs7Ozs7Ozs7OztRQUNIO1lBR0ksT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUNwRCxDQUFDO1FBQ0Q7Ozs7Ozs7O1dBUUc7Ozs7Ozs7Ozs7OztRQUNILFVBQWlCLEdBQVc7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdEIsQ0FBQzs7O09BWkE7SUFzQkQsc0JBRVcsc0RBQVU7UUFWckI7Ozs7Ozs7V0FPRzs7Ozs7Ozs7OztRQUNIO1lBR0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7UUFDRDs7Ozs7Ozs7V0FRRzs7Ozs7Ozs7Ozs7O1FBQ0gsVUFBc0IsR0FBVztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUMzQixDQUFDOzs7T0FaQTs7Z0JBeERKLFNBQVMsU0FBQzs7b0JBRVAsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLDJCQUEyQjtpQkFDeEM7Ozs7Z0RBS1EsTUFBTSxTQUFDLDZCQUE2QjtnQkFaWixVQUFVO2dCQUFTLGlCQUFpQjs7OzJCQWtCaEUsV0FBVyxTQUFDLGlDQUFpQzt3QkFXN0MsS0FBSyxZQUNMLFdBQVcsU0FBQyxpQkFBaUI7NkJBeUI3QixLQUFLLFlBQ0wsV0FBVyxTQUFDLHNCQUFzQjt1QkFnQ2xDLEtBQUssWUFDTCxXQUFXLFNBQUMsV0FBVzs7SUFFNUIscUNBQUM7Q0FBQSxBQXhGRCxJQXdGQztTQW5GWSw4QkFBOEI7Ozs7OztJQUN2QyxxREFBeUI7Ozs7O0lBQ3pCLGdEQUFvQjs7Ozs7SUFRcEIsa0RBQzhDOzs7Ozs7Ozs7Ozs7Ozs7OztJQXFFOUMsOENBRXVCOztJQTlFbkIsK0NBQTBFOztJQUMxRSxpREFBMEI7O0lBQUUsNkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEV4cGFuc2lvblBhbmVsQmFzZSwgSUdYX0VYUEFOU0lPTl9QQU5FTF9DT01QT05FTlQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdpZ3gtZXhwYW5zaW9uLXBhbmVsLWJvZHknLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhwYW5zaW9uUGFuZWxCb2R5Q29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9sYWJlbGxlZEJ5ID0gJyc7XG4gICAgcHJpdmF0ZSBfbGFiZWwgPSAnJztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChJR1hfRVhQQU5TSU9OX1BBTkVMX0NPTVBPTkVOVCkgcHVibGljIHBhbmVsOiBJZ3hFeHBhbnNpb25QYW5lbEJhc2UsXG4gICAgICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZXhwYW5zaW9uLXBhbmVsX19ib2R5JylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSBgaWd4LWV4cGFuc2lvbi1wYW5lbF9fYm9keWA7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIG9mIHRoZSBwYW5lbCBib2R5XG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHBhbmVsIGlkIHdpdGggJy1yZWdpb24nIGluIHRoZSBlbmQ7XG4gICAgICogR2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBjb25zdCBjdXJyZW50TGFiZWwgPSB0aGlzLnBhbmVsLmJvZHkubGFiZWw7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWwgfHwgdGhpcy5wYW5lbC5pZCArICctcmVnaW9uJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvZiB0aGUgcGFuZWwgYm9keVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgdGhpcy5wYW5lbC5ib2R5LmxhYmVsID0gJ215LWN1c3RvbS1sYWJlbCc7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbC1ib2R5IFtsYWJlbF09XCInbXktY3VzdG9tLWxhYmVsJ1wiPjwvaWd4LWV4cGFuc2lvbi1wYW5lbC1ib2R5PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgbGFiZWwodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlIG9mIHRoZSBwYW5lbCBib2R5XG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHBhbmVsIGhlYWRlciBpZDtcbiAgICAgKiBHZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IGN1cnJlbnRMYWJlbCA9IHRoaXMucGFuZWwuYm9keS5sYWJlbGxlZEJ5O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpXG4gICAgcHVibGljIGdldCBsYWJlbGxlZEJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbGxlZEJ5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUgb2YgdGhlIHBhbmVsIGJvZHlcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIHRoaXMucGFuZWwuYm9keS5sYWJlbGxlZEJ5ID0gJ215LWN1c3RvbS1pZCc7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbC1ib2R5IFtsYWJlbGxlZEJ5XT1cIidteS1jdXN0b20taWQnXCI+PC9pZ3gtZXhwYW5zaW9uLXBhbmVsLWJvZHk+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBsYWJlbGxlZEJ5KHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsbGVkQnkgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBgcm9sZWAgYXR0cmlidXRlIG9mIHRoZSBwYW5lbCBib2R5XG4gICAgICogRGVmYXVsdCBpcyAncmVnaW9uJztcbiAgICAgKiBHZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IGN1cnJlbnRSb2xlID0gdGhpcy5wYW5lbC5ib2R5LnJvbGU7XG4gICAgICogYGBgXG4gICAgICogU2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICB0aGlzLnBhbmVsLmJvZHkucm9sZSA9ICdjb250ZW50JztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsLWJvZHkgW3JvbGVdPVwiJ2N1c3RvbSdcIj48L2lneC1leHBhbnNpb24tcGFuZWwtYm9keT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICdyZWdpb24nO1xufVxuIl19
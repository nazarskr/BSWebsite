/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, ElementRef, Input, ChangeDetectorRef, Inject } from '@angular/core';
import { IGX_EXPANSION_PANEL_COMPONENT } from './expansion-panel.common';
export class IgxExpansionPanelBodyComponent {
    /**
     * @param {?} panel
     * @param {?} element
     * @param {?} cdr
     */
    constructor(panel, element, cdr) {
        this.panel = panel;
        this.element = element;
        this.cdr = cdr;
        this._labelledBy = '';
        this._label = '';
        /**
         * @hidden
         */
        this.cssClass = `igx-expansion-panel__body`;
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
    /**
     * Gets the `aria-label` attribute of the panel body
     * Defaults to the panel id with '-region' in the end;
     * Get
     * ```typescript
     *  const currentLabel = this.panel.body.label;
     * ```
     * @return {?}
     */
    get label() {
        return this._label || this.panel.id + '-region';
    }
    /**
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
    set label(val) {
        this._label = val;
    }
    /**
     * Gets the `aria-labelledby` attribute of the panel body
     * Defaults to the panel header id;
     * Get
     * ```typescript
     *  const currentLabel = this.panel.body.labelledBy;
     * ```
     * @return {?}
     */
    get labelledBy() {
        return this._labelledBy;
    }
    /**
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
    set labelledBy(val) {
        this._labelledBy = val;
    }
}
IgxExpansionPanelBodyComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'igx-expansion-panel-body',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
IgxExpansionPanelBodyComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_EXPANSION_PANEL_COMPONENT,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
IgxExpansionPanelBodyComponent.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class.igx-expansion-panel__body',] }],
    label: [{ type: Input }, { type: HostBinding, args: ['attr.aria-label',] }],
    labelledBy: [{ type: Input }, { type: HostBinding, args: ['attr.aria-labelledby',] }],
    role: [{ type: Input }, { type: HostBinding, args: ['attr.role',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQXlCLDZCQUE2QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEcsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7O0lBR3ZDLFlBQ2tELEtBQTRCLEVBQ25FLE9BQW1CLEVBQVMsR0FBc0I7UUFEWCxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUNuRSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFKckQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsV0FBTSxHQUFHLEVBQUUsQ0FBQzs7OztRQVNiLGFBQVEsR0FBRywyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztRQXVFdkMsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQTVFdkIsQ0FBQzs7Ozs7Ozs7OztJQWVELElBRVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFDcEQsQ0FBQzs7Ozs7Ozs7Ozs7O0lBVUQsSUFBVyxLQUFLLENBQUMsR0FBVztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDOzs7Ozs7Ozs7O0lBVUQsSUFFVyxVQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7SUFVRCxJQUFXLFVBQVUsQ0FBQyxHQUFXO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7OztZQXBFSixTQUFTLFNBQUM7O2dCQUVQLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7YUFDeEM7Ozs7NENBS1EsTUFBTSxTQUFDLDZCQUE2QjtZQVpaLFVBQVU7WUFBUyxpQkFBaUI7Ozt1QkFrQmhFLFdBQVcsU0FBQyxpQ0FBaUM7b0JBVzdDLEtBQUssWUFDTCxXQUFXLFNBQUMsaUJBQWlCO3lCQXlCN0IsS0FBSyxZQUNMLFdBQVcsU0FBQyxzQkFBc0I7bUJBZ0NsQyxLQUFLLFlBQ0wsV0FBVyxTQUFDLFdBQVc7Ozs7Ozs7SUFoRnhCLHFEQUF5Qjs7Ozs7SUFDekIsZ0RBQW9COzs7OztJQVFwQixrREFDOEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUU5Qyw4Q0FFdUI7O0lBOUVuQiwrQ0FBMEU7O0lBQzFFLGlEQUEwQjs7SUFBRSw2Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4RXhwYW5zaW9uUGFuZWxCYXNlLCBJR1hfRVhQQU5TSU9OX1BBTkVMX0NPTVBPTkVOVCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLmNvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ2lneC1leHBhbnNpb24tcGFuZWwtYm9keScsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeHBhbnNpb25QYW5lbEJvZHlDb21wb25lbnQge1xuICAgIHByaXZhdGUgX2xhYmVsbGVkQnkgPSAnJztcbiAgICBwcml2YXRlIF9sYWJlbCA9ICcnO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KElHWF9FWFBBTlNJT05fUEFORUxfQ09NUE9ORU5UKSBwdWJsaWMgcGFuZWw6IElneEV4cGFuc2lvblBhbmVsQmFzZSxcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1leHBhbnNpb24tcGFuZWxfX2JvZHknKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9IGBpZ3gtZXhwYW5zaW9uLXBhbmVsX19ib2R5YDtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUgb2YgdGhlIHBhbmVsIGJvZHlcbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgcGFuZWwgaWQgd2l0aCAnLXJlZ2lvbicgaW4gdGhlIGVuZDtcbiAgICAgKiBHZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IGN1cnJlbnRMYWJlbCA9IHRoaXMucGFuZWwuYm9keS5sYWJlbDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsJylcbiAgICBwdWJsaWMgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbCB8fCB0aGlzLnBhbmVsLmlkICsgJy1yZWdpb24nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIG9mIHRoZSBwYW5lbCBib2R5XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICB0aGlzLnBhbmVsLmJvZHkubGFiZWwgPSAnbXktY3VzdG9tLWxhYmVsJztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsLWJvZHkgW2xhYmVsXT1cIidteS1jdXN0b20tbGFiZWwnXCI+PC9pZ3gtZXhwYW5zaW9uLXBhbmVsLWJvZHk+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBsYWJlbCh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUgb2YgdGhlIHBhbmVsIGJvZHlcbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgcGFuZWwgaGVhZGVyIGlkO1xuICAgICAqIEdldFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgY29uc3QgY3VycmVudExhYmVsID0gdGhpcy5wYW5lbC5ib2R5LmxhYmVsbGVkQnk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JylcbiAgICBwdWJsaWMgZ2V0IGxhYmVsbGVkQnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsbGVkQnk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZSBvZiB0aGUgcGFuZWwgYm9keVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgdGhpcy5wYW5lbC5ib2R5LmxhYmVsbGVkQnkgPSAnbXktY3VzdG9tLWlkJztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsLWJvZHkgW2xhYmVsbGVkQnldPVwiJ215LWN1c3RvbS1pZCdcIj48L2lneC1leHBhbnNpb24tcGFuZWwtYm9keT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGxhYmVsbGVkQnkodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbGFiZWxsZWRCeSA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIGByb2xlYCBhdHRyaWJ1dGUgb2YgdGhlIHBhbmVsIGJvZHlcbiAgICAgKiBEZWZhdWx0IGlzICdyZWdpb24nO1xuICAgICAqIEdldFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgY29uc3QgY3VycmVudFJvbGUgPSB0aGlzLnBhbmVsLmJvZHkucm9sZTtcbiAgICAgKiBgYGBcbiAgICAgKiBTZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIHRoaXMucGFuZWwuYm9keS5yb2xlID0gJ2NvbnRlbnQnO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1leHBhbnNpb24tcGFuZWwtYm9keSBbcm9sZV09XCInY3VzdG9tJ1wiPjwvaWd4LWV4cGFuc2lvbi1wYW5lbC1ib2R5PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyByb2xlID0gJ3JlZ2lvbic7XG59XG4iXX0=
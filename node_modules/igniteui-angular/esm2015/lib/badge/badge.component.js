/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, NgModule } from '@angular/core';
import { IgxIconModule } from '../icon/index';
/** @type {?} */
let NEXT_ID = 0;
/** @enum {string} */
const Type = {
    DEFAULT: 'default',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
};
export { Type };
/**
 * **Ignite UI for Angular Badge** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/badge.html)
 *
 * The Ignite UI Badge is used to decorate avatars, navigation menus, or other components in the
 * application when visual notification is needed. They are usually designed as icons with a predefined
 * style to communicate information, success, warnings, or errors.
 *
 * Example:
 * ```html
 * <igx-avatar icon="person" roundShape="true" size="small">
 *   <igx-badge icon="check" type="success" class="badge-style">
 *   </igx-badge>
 * </igx-avatar>
 * ```
 * The `badge-style` class is used to position the badge:
 * ```css
 * .badge-style {
 *   position: absolute;
 *   bottom: -6px;
 *   right:-50px;
 * }
 * ```
 */
export class IgxBadgeComponent {
    constructor() {
        /**
         * An \@Input property that sets the value of the `id` attribute.
         * ```html
         * <igx-badge id="igx-badge-2" icon="check" type="success" class="badge-style"></igx-badge>
         * ```
         */
        this.id = `igx-badge-${NEXT_ID++}`;
        /**
         * An \@Input property controlling the type of the badge.
         * Allowed values are `default`, `info`, `success`, `warning`, `error`.
         * Providing an invalid value won't display a badge.
         * ```html
         * <igx-badge type="success" icon="check" class="badge-style"></igx-badge>
         * ```
         */
        this.type = 'default';
        /**
         * An \@Input property that sets the value to be displayed inside the badge.
         * If an `icon` property is already set the `icon` will be displayed.
         * If neither a `value` nor an `icon` is set the contentent of the badge will be empty.
         * ```html
         * <igx-badge value="11" type="success" class="badge-style"></igx-badge>
         * ```
         */
        this.value = '';
        /**
         * This allows you to set value to role attribute.
         * ```html
         * \@ViewChild("MyBadge", { read: IgxBadgeComponent })
         * public badge: IgxBadgeComponent;
         * //...
         * badge.label = "badge-status";
         * ```
         */
        this.role = 'status';
        /**
         * This allows you to disable igx-badge class. The default it's applied.
         * ```html
         * \@ViewChild("MyBadge", { read: IgxBadgeComponent })
         * public badge: IgxBadgeComponent;
         * //...
         * badge.cssClass = false;
         * ```
         */
        this.cssClass = 'igx-badge';
        /**
         * This allows you to set value to aria-label attribute.
         * ```html
         * \@ViewChild("MyBadge", { read: IgxBadgeComponent })
         * public badge: IgxBadgeComponent;
         * //...
         * badge.label = "icon-badge";
         * ```
         */
        this.label = 'badge';
    }
    /**
     * @hidden
     * Defines a human-readable, accessor, author-localized description for the `type` and the `icon` or `value` of the element.
     * @return {?}
     */
    get roleDescription() {
        /** @type {?} */
        let message;
        // tslint:disable-next-line:prefer-conditional-expression
        if (this.icon) {
            message = this.type + ' type badge with icon type ' + this.icon;
        }
        else if (this.value) {
            message = this.type + ' badge type with value ' + this.value;
        }
        else {
            message = this.type + ' badge type without value';
        }
        return message;
    }
    /**
     * @hidden
     * Method which makes the name of the class more descriptive.
     * This helps the styling of the badges.
     * @return {?}
     */
    setClasses() {
        /** @type {?} */
        let classes = {};
        switch (Type[this.type.toUpperCase()]) {
            case Type.DEFAULT:
                classes = {
                    [`${this.cssClass}__circle--default`]: true
                };
                break;
            case Type.INFO:
                classes = {
                    [`${this.cssClass}__circle--info`]: true
                };
                break;
            case Type.SUCCESS:
                classes = {
                    [`${this.cssClass}__circle--success`]: true
                };
                break;
            case Type.WARNING:
                classes = {
                    [`${this.cssClass}__circle--warning`]: true
                };
                break;
            case Type.ERROR:
                classes = {
                    [`${this.cssClass}__circle--error`]: true
                };
                break;
        }
        return classes;
    }
}
IgxBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-badge',
                template: "<div class=\"igx-badge__circle\" [ngClass]=\"setClasses()\" [attr.aria-roledescription]=\"roleDescription\">\n    <span *ngIf=\"!icon\" class=\"igx-badge__circle-value\">{{value}}</span>\n    <igx-icon *ngIf=\"icon\" fontSet=\"material\">{{icon}}</igx-icon>\n</div>\n"
            }] }
];
IgxBadgeComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }],
    icon: [{ type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    cssClass: [{ type: HostBinding, args: ['class.igx-badge',] }],
    label: [{ type: HostBinding, args: ['attr.aria-label',] }]
};
if (false) {
    /**
     * An \@Input property that sets the value of the `id` attribute.
     * ```html
     * <igx-badge id="igx-badge-2" icon="check" type="success" class="badge-style"></igx-badge>
     * ```
     * @type {?}
     */
    IgxBadgeComponent.prototype.id;
    /**
     * An \@Input property controlling the type of the badge.
     * Allowed values are `default`, `info`, `success`, `warning`, `error`.
     * Providing an invalid value won't display a badge.
     * ```html
     * <igx-badge type="success" icon="check" class="badge-style"></igx-badge>
     * ```
     * @type {?}
     */
    IgxBadgeComponent.prototype.type;
    /**
     * An \@Input property that sets the value to be displayed inside the badge.
     * If an `icon` property is already set the `icon` will be displayed.
     * If neither a `value` nor an `icon` is set the contentent of the badge will be empty.
     * ```html
     * <igx-badge value="11" type="success" class="badge-style"></igx-badge>
     * ```
     * @type {?}
     */
    IgxBadgeComponent.prototype.value;
    /**
     * Set an icon for the badge from the material icons set.
     * Has priority over the `value` property.
     * If neither a `value` nor an `icon` is set the content of the badge will be empty.
     * Providing an invalid value won't display anything.
     * ```html
     * <igx-badge icon="check" type="success" class="badge-style" value="11"></igx-badge>
     * ```
     * @type {?}
     */
    IgxBadgeComponent.prototype.icon;
    /**
     * This allows you to set value to role attribute.
     * ```html
     * \@ViewChild("MyBadge", { read: IgxBadgeComponent })
     * public badge: IgxBadgeComponent;
     * //...
     * badge.label = "badge-status";
     * ```
     * @type {?}
     */
    IgxBadgeComponent.prototype.role;
    /**
     * This allows you to disable igx-badge class. The default it's applied.
     * ```html
     * \@ViewChild("MyBadge", { read: IgxBadgeComponent })
     * public badge: IgxBadgeComponent;
     * //...
     * badge.cssClass = false;
     * ```
     * @type {?}
     */
    IgxBadgeComponent.prototype.cssClass;
    /**
     * This allows you to set value to aria-label attribute.
     * ```html
     * \@ViewChild("MyBadge", { read: IgxBadgeComponent })
     * public badge: IgxBadgeComponent;
     * //...
     * badge.label = "icon-badge";
     * ```
     * @type {?}
     */
    IgxBadgeComponent.prototype.label;
}
/**
 * @hidden
 */
export class IgxBadgeModule {
}
IgxBadgeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxBadgeComponent],
                exports: [IgxBadgeComponent],
                imports: [CommonModule, IgxIconModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBRTFDLE9BQU8sR0FBRyxDQUFDOzs7SUFHWCxTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNO0lBQ2IsU0FBVSxTQUFTO0lBQ25CLFNBQVUsU0FBUztJQUNuQixPQUFRLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCbkIsTUFBTSxPQUFPLGlCQUFpQjtJQUo5Qjs7Ozs7OztRQWNXLE9BQUUsR0FBRyxhQUFhLE9BQU8sRUFBRSxFQUFFLENBQUM7Ozs7Ozs7OztRQVc5QixTQUFJLEdBQWtCLFNBQVMsQ0FBQzs7Ozs7Ozs7O1FBV2hDLFVBQUssR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7UUF3QlgsU0FBSSxHQUFHLFFBQVEsQ0FBQzs7Ozs7Ozs7OztRQVloQixhQUFRLEdBQUcsV0FBVyxDQUFDOzs7Ozs7Ozs7O1FBWXZCLFVBQUssR0FBRyxPQUFPLENBQUM7SUE0RDNCLENBQUM7Ozs7OztJQXRERyxJQUFJLGVBQWU7O1lBQ1gsT0FBTztRQUVYLHlEQUF5RDtRQUN6RCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ25FO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDaEU7YUFBTTtZQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLDJCQUEyQixDQUFDO1NBQ3JEO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7Ozs7OztJQU9NLFVBQVU7O1lBQ1QsT0FBTyxHQUFHLEVBQUU7UUFFaEIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQ2IsT0FBTyxHQUFHO29CQUNOLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxtQkFBbUIsQ0FBQyxFQUFFLElBQUk7aUJBQzlDLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssSUFBSSxDQUFDLElBQUk7Z0JBQ1YsT0FBTyxHQUFHO29CQUNOLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUk7aUJBQzNDLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQ2IsT0FBTyxHQUFHO29CQUNOLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxtQkFBbUIsQ0FBQyxFQUFFLElBQUk7aUJBQzlDLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQ2IsT0FBTyxHQUFHO29CQUNOLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxtQkFBbUIsQ0FBQyxFQUFFLElBQUk7aUJBQzlDLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssSUFBSSxDQUFDLEtBQUs7Z0JBQ1gsT0FBTyxHQUFHO29CQUNOLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxpQkFBaUIsQ0FBQyxFQUFFLElBQUk7aUJBQzVDLENBQUM7Z0JBQ0YsTUFBTTtTQUNiO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7O1lBOUlKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsdVJBQW1DO2FBQ3RDOzs7aUJBU0ksV0FBVyxTQUFDLFNBQVMsY0FDckIsS0FBSzttQkFXTCxLQUFLO29CQVdMLEtBQUs7bUJBWUwsS0FBSzttQkFZTCxXQUFXLFNBQUMsV0FBVzt1QkFZdkIsV0FBVyxTQUFDLGlCQUFpQjtvQkFZN0IsV0FBVyxTQUFDLGlCQUFpQjs7Ozs7Ozs7OztJQXZFOUIsK0JBRXFDOzs7Ozs7Ozs7O0lBVXJDLGlDQUN1Qzs7Ozs7Ozs7OztJQVV2QyxrQ0FDa0I7Ozs7Ozs7Ozs7O0lBV2xCLGlDQUNvQjs7Ozs7Ozs7Ozs7SUFXcEIsaUNBQ3VCOzs7Ozs7Ozs7OztJQVd2QixxQ0FDOEI7Ozs7Ozs7Ozs7O0lBVzlCLGtDQUN1Qjs7Ozs7QUFzRTNCLE1BQU0sT0FBTyxjQUFjOzs7WUFMMUIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG5leHBvcnQgZW51bSBUeXBlIHtcbiAgICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAgIElORk8gPSAnaW5mbycsXG4gICAgU1VDQ0VTUyA9ICdzdWNjZXNzJyxcbiAgICBXQVJOSU5HID0gJ3dhcm5pbmcnLFxuICAgIEVSUk9SID0gJ2Vycm9yJ1xufVxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBCYWRnZSoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9iYWRnZS5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgQmFkZ2UgaXMgdXNlZCB0byBkZWNvcmF0ZSBhdmF0YXJzLCBuYXZpZ2F0aW9uIG1lbnVzLCBvciBvdGhlciBjb21wb25lbnRzIGluIHRoZVxuICogYXBwbGljYXRpb24gd2hlbiB2aXN1YWwgbm90aWZpY2F0aW9uIGlzIG5lZWRlZC4gVGhleSBhcmUgdXN1YWxseSBkZXNpZ25lZCBhcyBpY29ucyB3aXRoIGEgcHJlZGVmaW5lZFxuICogc3R5bGUgdG8gY29tbXVuaWNhdGUgaW5mb3JtYXRpb24sIHN1Y2Nlc3MsIHdhcm5pbmdzLCBvciBlcnJvcnMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIDxpZ3gtYXZhdGFyIGljb249XCJwZXJzb25cIiByb3VuZFNoYXBlPVwidHJ1ZVwiIHNpemU9XCJzbWFsbFwiPlxuICogICA8aWd4LWJhZGdlIGljb249XCJjaGVja1wiIHR5cGU9XCJzdWNjZXNzXCIgY2xhc3M9XCJiYWRnZS1zdHlsZVwiPlxuICogICA8L2lneC1iYWRnZT5cbiAqIDwvaWd4LWF2YXRhcj5cbiAqIGBgYFxuICogVGhlIGBiYWRnZS1zdHlsZWAgY2xhc3MgaXMgdXNlZCB0byBwb3NpdGlvbiB0aGUgYmFkZ2U6XG4gKiBgYGBjc3NcbiAqIC5iYWRnZS1zdHlsZSB7XG4gKiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAqICAgYm90dG9tOiAtNnB4O1xuICogICByaWdodDotNTBweDtcbiAqIH1cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1iYWRnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdiYWRnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4QmFkZ2VDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGlkYCBhdHRyaWJ1dGUuXG4gICAgKiBgYGBodG1sXG4gICAgKjxpZ3gtYmFkZ2UgaWQ9XCJpZ3gtYmFkZ2UtMlwiIGljb249XCJjaGVja1wiIHR5cGU9XCJzdWNjZXNzXCIgY2xhc3M9XCJiYWRnZS1zdHlsZVwiPjwvaWd4LWJhZGdlPlxuICAgICogYGBgXG4gICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1iYWRnZS0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgY29udHJvbGxpbmcgdGhlIHR5cGUgb2YgdGhlIGJhZGdlLlxuICAgICogQWxsb3dlZCB2YWx1ZXMgYXJlIGBkZWZhdWx0YCwgYGluZm9gLCBgc3VjY2Vzc2AsIGB3YXJuaW5nYCwgYGVycm9yYC5cbiAgICAqIFByb3ZpZGluZyBhbiBpbnZhbGlkIHZhbHVlIHdvbid0IGRpc3BsYXkgYSBiYWRnZS5cbiAgICAqIGBgYGh0bWxcbiAgICAqPGlneC1iYWRnZSB0eXBlPVwic3VjY2Vzc1wiIGljb249XCJjaGVja1wiIGNsYXNzPVwiYmFkZ2Utc3R5bGVcIj48L2lneC1iYWRnZT5cbiAgICAqIGBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nIHwgVHlwZSA9ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgdG8gYmUgZGlzcGxheWVkIGluc2lkZSB0aGUgYmFkZ2UuXG4gICAgKiBJZiBhbiBgaWNvbmAgcHJvcGVydHkgaXMgYWxyZWFkeSBzZXQgdGhlIGBpY29uYCB3aWxsIGJlIGRpc3BsYXllZC5cbiAgICAqIElmIG5laXRoZXIgYSBgdmFsdWVgIG5vciBhbiBgaWNvbmAgaXMgc2V0IHRoZSBjb250ZW50ZW50IG9mIHRoZSBiYWRnZSB3aWxsIGJlIGVtcHR5LlxuICAgICogYGBgaHRtbFxuICAgICo8aWd4LWJhZGdlIHZhbHVlPVwiMTFcIiB0eXBlPVwic3VjY2Vzc1wiIGNsYXNzPVwiYmFkZ2Utc3R5bGVcIj48L2lneC1iYWRnZT5cbiAgICAqIGBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWUgPSAnJztcblxuICAgIC8qKlxuICAgICAqIFNldCBhbiBpY29uIGZvciB0aGUgYmFkZ2UgZnJvbSB0aGUgbWF0ZXJpYWwgaWNvbnMgc2V0LlxuICAgICAqIEhhcyBwcmlvcml0eSBvdmVyIHRoZSBgdmFsdWVgIHByb3BlcnR5LlxuICAgICAqIElmIG5laXRoZXIgYSBgdmFsdWVgIG5vciBhbiBgaWNvbmAgaXMgc2V0IHRoZSBjb250ZW50IG9mIHRoZSBiYWRnZSB3aWxsIGJlIGVtcHR5LlxuICAgICAqIFByb3ZpZGluZyBhbiBpbnZhbGlkIHZhbHVlIHdvbid0IGRpc3BsYXkgYW55dGhpbmcuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1iYWRnZSBpY29uPVwiY2hlY2tcIiB0eXBlPVwic3VjY2Vzc1wiIGNsYXNzPVwiYmFkZ2Utc3R5bGVcIiB2YWx1ZT1cIjExXCI+PC9pZ3gtYmFkZ2U+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBhbGxvd3MgeW91IHRvIHNldCB2YWx1ZSB0byByb2xlIGF0dHJpYnV0ZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUJhZGdlXCIsIHsgcmVhZDogSWd4QmFkZ2VDb21wb25lbnQgfSlcbiAgICAgKnB1YmxpYyBiYWRnZTogSWd4QmFkZ2VDb21wb25lbnQ7XG4gICAgICogLy8uLi5cbiAgICAgKmJhZGdlLmxhYmVsID0gXCJiYWRnZS1zdGF0dXNcIjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAnc3RhdHVzJztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgYWxsb3dzIHlvdSB0byBkaXNhYmxlIGlneC1iYWRnZSBjbGFzcy4gVGhlIGRlZmF1bHQgaXQncyBhcHBsaWVkLlxuICAgICAqYGBgaHRtbFxuICAgICAqQFZpZXdDaGlsZChcIk15QmFkZ2VcIiwgeyByZWFkOiBJZ3hCYWRnZUNvbXBvbmVudCB9KVxuICAgICAqcHVibGljIGJhZGdlOiBJZ3hCYWRnZUNvbXBvbmVudDtcbiAgICAgKiAvLy4uLlxuICAgICAqYmFkZ2UuY3NzQ2xhc3MgPSBmYWxzZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1iYWRnZScpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1iYWRnZSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IHZhbHVlIHRvIGFyaWEtbGFiZWwgYXR0cmlidXRlLlxuICAgICAqYGBgaHRtbFxuICAgICAqQFZpZXdDaGlsZChcIk15QmFkZ2VcIiwgeyByZWFkOiBJZ3hCYWRnZUNvbXBvbmVudCB9KVxuICAgICAqcHVibGljIGJhZGdlOiBJZ3hCYWRnZUNvbXBvbmVudDtcbiAgICAgKiAvLy4uLlxuICAgICAqYmFkZ2UubGFiZWwgPSBcImljb24tYmFkZ2VcIjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gICAgcHVibGljIGxhYmVsID0gJ2JhZGdlJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBEZWZpbmVzIGEgaHVtYW4tcmVhZGFibGUsIGFjY2Vzc29yLCBhdXRob3ItbG9jYWxpemVkIGRlc2NyaXB0aW9uIGZvciB0aGUgYHR5cGVgIGFuZCB0aGUgYGljb25gIG9yIGB2YWx1ZWAgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0IHJvbGVEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25kaXRpb25hbC1leHByZXNzaW9uXG4gICAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnR5cGUgKyAnIHR5cGUgYmFkZ2Ugd2l0aCBpY29uIHR5cGUgJyArIHRoaXMuaWNvbjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy50eXBlICsgJyBiYWRnZSB0eXBlIHdpdGggdmFsdWUgJyArIHRoaXMudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy50eXBlICsgJyBiYWRnZSB0eXBlIHdpdGhvdXQgdmFsdWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIE1ldGhvZCB3aGljaCBtYWtlcyB0aGUgbmFtZSBvZiB0aGUgY2xhc3MgbW9yZSBkZXNjcmlwdGl2ZS5cbiAgICAgKiBUaGlzIGhlbHBzIHRoZSBzdHlsaW5nIG9mIHRoZSBiYWRnZXMuXG4gICAgICovXG4gICAgcHVibGljIHNldENsYXNzZXMoKSB7XG4gICAgICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICAgICAgc3dpdGNoIChUeXBlW3RoaXMudHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICAgICAgY2FzZSBUeXBlLkRFRkFVTFQ6XG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3RoaXMuY3NzQ2xhc3N9X19jaXJjbGUtLWRlZmF1bHRgXTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFR5cGUuSU5GTzpcbiAgICAgICAgICAgICAgICBjbGFzc2VzID0ge1xuICAgICAgICAgICAgICAgICAgICBbYCR7dGhpcy5jc3NDbGFzc31fX2NpcmNsZS0taW5mb2BdOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVHlwZS5TVUNDRVNTOlxuICAgICAgICAgICAgICAgIGNsYXNzZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNzc0NsYXNzfV9fY2lyY2xlLS1zdWNjZXNzYF06IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUeXBlLldBUk5JTkc6XG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3RoaXMuY3NzQ2xhc3N9X19jaXJjbGUtLXdhcm5pbmdgXTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFR5cGUuRVJST1I6XG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3RoaXMuY3NzQ2xhc3N9X19jaXJjbGUtLWVycm9yYF06IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneEJhZGdlQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4QmFkZ2VDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElneEljb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneEJhZGdlTW9kdWxlIHtcbn1cbiJdfQ==
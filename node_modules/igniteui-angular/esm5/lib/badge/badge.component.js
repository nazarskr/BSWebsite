/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, NgModule } from '@angular/core';
import { IgxIconModule } from '../icon/index';
/** @type {?} */
var NEXT_ID = 0;
/** @enum {string} */
var Type = {
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
var IgxBadgeComponent = /** @class */ (function () {
    function IgxBadgeComponent() {
        /**
         * An \@Input property that sets the value of the `id` attribute.
         * ```html
         * <igx-badge id="igx-badge-2" icon="check" type="success" class="badge-style"></igx-badge>
         * ```
         */
        this.id = "igx-badge-" + NEXT_ID++;
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
    Object.defineProperty(IgxBadgeComponent.prototype, "roleDescription", {
        /**
         * @hidden
         * Defines a human-readable, accessor, author-localized description for the `type` and the `icon` or `value` of the element.
         */
        get: /**
         * @hidden
         * Defines a human-readable, accessor, author-localized description for the `type` and the `icon` or `value` of the element.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var message;
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * Method which makes the name of the class more descriptive.
     * This helps the styling of the badges.
     */
    /**
     * @hidden
     * Method which makes the name of the class more descriptive.
     * This helps the styling of the badges.
     * @return {?}
     */
    IgxBadgeComponent.prototype.setClasses = /**
     * @hidden
     * Method which makes the name of the class more descriptive.
     * This helps the styling of the badges.
     * @return {?}
     */
    function () {
        var _a, _b, _c, _d, _e;
        /** @type {?} */
        var classes = {};
        switch (Type[this.type.toUpperCase()]) {
            case Type.DEFAULT:
                classes = (_a = {},
                    _a[this.cssClass + "__circle--default"] = true,
                    _a);
                break;
            case Type.INFO:
                classes = (_b = {},
                    _b[this.cssClass + "__circle--info"] = true,
                    _b);
                break;
            case Type.SUCCESS:
                classes = (_c = {},
                    _c[this.cssClass + "__circle--success"] = true,
                    _c);
                break;
            case Type.WARNING:
                classes = (_d = {},
                    _d[this.cssClass + "__circle--warning"] = true,
                    _d);
                break;
            case Type.ERROR:
                classes = (_e = {},
                    _e[this.cssClass + "__circle--error"] = true,
                    _e);
                break;
        }
        return classes;
    };
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
    return IgxBadgeComponent;
}());
export { IgxBadgeComponent };
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
var IgxBadgeModule = /** @class */ (function () {
    function IgxBadgeModule() {
    }
    IgxBadgeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxBadgeComponent],
                    exports: [IgxBadgeComponent],
                    imports: [CommonModule, IgxIconModule]
                },] }
    ];
    return IgxBadgeModule;
}());
export { IgxBadgeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBRTFDLE9BQU8sR0FBRyxDQUFDOzs7SUFHWCxTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNO0lBQ2IsU0FBVSxTQUFTO0lBQ25CLFNBQVUsU0FBUztJQUNuQixPQUFRLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCbkI7SUFBQTs7Ozs7OztRQWNXLE9BQUUsR0FBRyxlQUFhLE9BQU8sRUFBSSxDQUFDOzs7Ozs7Ozs7UUFXOUIsU0FBSSxHQUFrQixTQUFTLENBQUM7Ozs7Ozs7OztRQVdoQyxVQUFLLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7O1FBd0JYLFNBQUksR0FBRyxRQUFRLENBQUM7Ozs7Ozs7Ozs7UUFZaEIsYUFBUSxHQUFHLFdBQVcsQ0FBQzs7Ozs7Ozs7OztRQVl2QixVQUFLLEdBQUcsT0FBTyxDQUFDO0lBNEQzQixDQUFDO0lBdERHLHNCQUFJLDhDQUFlO1FBSm5COzs7V0FHRzs7Ozs7O1FBQ0g7O2dCQUNRLE9BQU87WUFFWCx5REFBeUQ7WUFDekQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLDZCQUE2QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkU7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2hFO2lCQUFNO2dCQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLDJCQUEyQixDQUFDO2FBQ3JEO1lBRUQsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksc0NBQVU7Ozs7OztJQUFqQjs7O1lBQ1EsT0FBTyxHQUFHLEVBQUU7UUFFaEIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQ2IsT0FBTztvQkFDSCxHQUFJLElBQUksQ0FBQyxRQUFRLHNCQUFtQixJQUFHLElBQUk7dUJBQzlDLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssSUFBSSxDQUFDLElBQUk7Z0JBQ1YsT0FBTztvQkFDSCxHQUFJLElBQUksQ0FBQyxRQUFRLG1CQUFnQixJQUFHLElBQUk7dUJBQzNDLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQ2IsT0FBTztvQkFDSCxHQUFJLElBQUksQ0FBQyxRQUFRLHNCQUFtQixJQUFHLElBQUk7dUJBQzlDLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQ2IsT0FBTztvQkFDSCxHQUFJLElBQUksQ0FBQyxRQUFRLHNCQUFtQixJQUFHLElBQUk7dUJBQzlDLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssSUFBSSxDQUFDLEtBQUs7Z0JBQ1gsT0FBTztvQkFDSCxHQUFJLElBQUksQ0FBQyxRQUFRLG9CQUFpQixJQUFHLElBQUk7dUJBQzVDLENBQUM7Z0JBQ0YsTUFBTTtTQUNiO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7Z0JBOUlKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsdVJBQW1DO2lCQUN0Qzs7O3FCQVNJLFdBQVcsU0FBQyxTQUFTLGNBQ3JCLEtBQUs7dUJBV0wsS0FBSzt3QkFXTCxLQUFLO3VCQVlMLEtBQUs7dUJBWUwsV0FBVyxTQUFDLFdBQVc7MkJBWXZCLFdBQVcsU0FBQyxpQkFBaUI7d0JBWTdCLFdBQVcsU0FBQyxpQkFBaUI7O0lBNkRsQyx3QkFBQztDQUFBLEFBaEpELElBZ0pDO1NBNUlZLGlCQUFpQjs7Ozs7Ozs7O0lBUTFCLCtCQUVxQzs7Ozs7Ozs7OztJQVVyQyxpQ0FDdUM7Ozs7Ozs7Ozs7SUFVdkMsa0NBQ2tCOzs7Ozs7Ozs7OztJQVdsQixpQ0FDb0I7Ozs7Ozs7Ozs7O0lBV3BCLGlDQUN1Qjs7Ozs7Ozs7Ozs7SUFXdkIscUNBQzhCOzs7Ozs7Ozs7OztJQVc5QixrQ0FDdUI7Ozs7O0FBaUUzQjtJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztpQkFDekM7O0lBRUQscUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaW5kZXgnO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbmV4cG9ydCBlbnVtIFR5cGUge1xuICAgIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gICAgSU5GTyA9ICdpbmZvJyxcbiAgICBTVUNDRVNTID0gJ3N1Y2Nlc3MnLFxuICAgIFdBUk5JTkcgPSAnd2FybmluZycsXG4gICAgRVJST1IgPSAnZXJyb3InXG59XG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIEJhZGdlKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2JhZGdlLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBCYWRnZSBpcyB1c2VkIHRvIGRlY29yYXRlIGF2YXRhcnMsIG5hdmlnYXRpb24gbWVudXMsIG9yIG90aGVyIGNvbXBvbmVudHMgaW4gdGhlXG4gKiBhcHBsaWNhdGlvbiB3aGVuIHZpc3VhbCBub3RpZmljYXRpb24gaXMgbmVlZGVkLiBUaGV5IGFyZSB1c3VhbGx5IGRlc2lnbmVkIGFzIGljb25zIHdpdGggYSBwcmVkZWZpbmVkXG4gKiBzdHlsZSB0byBjb21tdW5pY2F0ZSBpbmZvcm1hdGlvbiwgc3VjY2Vzcywgd2FybmluZ3MsIG9yIGVycm9ycy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1hdmF0YXIgaWNvbj1cInBlcnNvblwiIHJvdW5kU2hhcGU9XCJ0cnVlXCIgc2l6ZT1cInNtYWxsXCI+XG4gKiAgIDxpZ3gtYmFkZ2UgaWNvbj1cImNoZWNrXCIgdHlwZT1cInN1Y2Nlc3NcIiBjbGFzcz1cImJhZGdlLXN0eWxlXCI+XG4gKiAgIDwvaWd4LWJhZGdlPlxuICogPC9pZ3gtYXZhdGFyPlxuICogYGBgXG4gKiBUaGUgYGJhZGdlLXN0eWxlYCBjbGFzcyBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBiYWRnZTpcbiAqIGBgYGNzc1xuICogLmJhZGdlLXN0eWxlIHtcbiAqICAgcG9zaXRpb246IGFic29sdXRlO1xuICogICBib3R0b206IC02cHg7XG4gKiAgIHJpZ2h0Oi01MHB4O1xuICogfVxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWJhZGdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2JhZGdlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hCYWRnZUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS5cbiAgICAqIGBgYGh0bWxcbiAgICAqPGlneC1iYWRnZSBpZD1cImlneC1iYWRnZS0yXCIgaWNvbj1cImNoZWNrXCIgdHlwZT1cInN1Y2Nlc3NcIiBjbGFzcz1cImJhZGdlLXN0eWxlXCI+PC9pZ3gtYmFkZ2U+XG4gICAgKiBgYGBcbiAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWJhZGdlLSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSBjb250cm9sbGluZyB0aGUgdHlwZSBvZiB0aGUgYmFkZ2UuXG4gICAgKiBBbGxvd2VkIHZhbHVlcyBhcmUgYGRlZmF1bHRgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZXJyb3JgLlxuICAgICogUHJvdmlkaW5nIGFuIGludmFsaWQgdmFsdWUgd29uJ3QgZGlzcGxheSBhIGJhZGdlLlxuICAgICogYGBgaHRtbFxuICAgICo8aWd4LWJhZGdlIHR5cGU9XCJzdWNjZXNzXCIgaWNvbj1cImNoZWNrXCIgY2xhc3M9XCJiYWRnZS1zdHlsZVwiPjwvaWd4LWJhZGdlPlxuICAgICogYGBgXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgfCBUeXBlID0gJ2RlZmF1bHQnO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBiYWRnZS5cbiAgICAqIElmIGFuIGBpY29uYCBwcm9wZXJ0eSBpcyBhbHJlYWR5IHNldCB0aGUgYGljb25gIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICogSWYgbmVpdGhlciBhIGB2YWx1ZWAgbm9yIGFuIGBpY29uYCBpcyBzZXQgdGhlIGNvbnRlbnRlbnQgb2YgdGhlIGJhZGdlIHdpbGwgYmUgZW1wdHkuXG4gICAgKiBgYGBodG1sXG4gICAgKjxpZ3gtYmFkZ2UgdmFsdWU9XCIxMVwiIHR5cGU9XCJzdWNjZXNzXCIgY2xhc3M9XCJiYWRnZS1zdHlsZVwiPjwvaWd4LWJhZGdlPlxuICAgICogYGBgXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGljb24gZm9yIHRoZSBiYWRnZSBmcm9tIHRoZSBtYXRlcmlhbCBpY29ucyBzZXQuXG4gICAgICogSGFzIHByaW9yaXR5IG92ZXIgdGhlIGB2YWx1ZWAgcHJvcGVydHkuXG4gICAgICogSWYgbmVpdGhlciBhIGB2YWx1ZWAgbm9yIGFuIGBpY29uYCBpcyBzZXQgdGhlIGNvbnRlbnQgb2YgdGhlIGJhZGdlIHdpbGwgYmUgZW1wdHkuXG4gICAgICogUHJvdmlkaW5nIGFuIGludmFsaWQgdmFsdWUgd29uJ3QgZGlzcGxheSBhbnl0aGluZy5cbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LWJhZGdlIGljb249XCJjaGVja1wiIHR5cGU9XCJzdWNjZXNzXCIgY2xhc3M9XCJiYWRnZS1zdHlsZVwiIHZhbHVlPVwiMTFcIj48L2lneC1iYWRnZT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IHZhbHVlIHRvIHJvbGUgYXR0cmlidXRlLlxuICAgICAqYGBgaHRtbFxuICAgICAqQFZpZXdDaGlsZChcIk15QmFkZ2VcIiwgeyByZWFkOiBJZ3hCYWRnZUNvbXBvbmVudCB9KVxuICAgICAqcHVibGljIGJhZGdlOiBJZ3hCYWRnZUNvbXBvbmVudDtcbiAgICAgKiAvLy4uLlxuICAgICAqYmFkZ2UubGFiZWwgPSBcImJhZGdlLXN0YXR1c1wiO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICdzdGF0dXMnO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBhbGxvd3MgeW91IHRvIGRpc2FibGUgaWd4LWJhZGdlIGNsYXNzLiBUaGUgZGVmYXVsdCBpdCdzIGFwcGxpZWQuXG4gICAgICpgYGBodG1sXG4gICAgICpAVmlld0NoaWxkKFwiTXlCYWRnZVwiLCB7IHJlYWQ6IElneEJhZGdlQ29tcG9uZW50IH0pXG4gICAgICpwdWJsaWMgYmFkZ2U6IElneEJhZGdlQ29tcG9uZW50O1xuICAgICAqIC8vLi4uXG4gICAgICpiYWRnZS5jc3NDbGFzcyA9IGZhbHNlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWJhZGdlJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWJhZGdlJztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgYWxsb3dzIHlvdSB0byBzZXQgdmFsdWUgdG8gYXJpYS1sYWJlbCBhdHRyaWJ1dGUuXG4gICAgICpgYGBodG1sXG4gICAgICpAVmlld0NoaWxkKFwiTXlCYWRnZVwiLCB7IHJlYWQ6IElneEJhZGdlQ29tcG9uZW50IH0pXG4gICAgICpwdWJsaWMgYmFkZ2U6IElneEJhZGdlQ29tcG9uZW50O1xuICAgICAqIC8vLi4uXG4gICAgICpiYWRnZS5sYWJlbCA9IFwiaWNvbi1iYWRnZVwiO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsJylcbiAgICBwdWJsaWMgbGFiZWwgPSAnYmFkZ2UnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIERlZmluZXMgYSBodW1hbi1yZWFkYWJsZSwgYWNjZXNzb3IsIGF1dGhvci1sb2NhbGl6ZWQgZGVzY3JpcHRpb24gZm9yIHRoZSBgdHlwZWAgYW5kIHRoZSBgaWNvbmAgb3IgYHZhbHVlYCBvZiB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXQgcm9sZURlc2NyaXB0aW9uKCkge1xuICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWNvbmRpdGlvbmFsLWV4cHJlc3Npb25cbiAgICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMudHlwZSArICcgdHlwZSBiYWRnZSB3aXRoIGljb24gdHlwZSAnICsgdGhpcy5pY29uO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnR5cGUgKyAnIGJhZGdlIHR5cGUgd2l0aCB2YWx1ZSAnICsgdGhpcy52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnR5cGUgKyAnIGJhZGdlIHR5cGUgd2l0aG91dCB2YWx1ZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogTWV0aG9kIHdoaWNoIG1ha2VzIHRoZSBuYW1lIG9mIHRoZSBjbGFzcyBtb3JlIGRlc2NyaXB0aXZlLlxuICAgICAqIFRoaXMgaGVscHMgdGhlIHN0eWxpbmcgb2YgdGhlIGJhZGdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0Q2xhc3NlcygpIHtcbiAgICAgICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICBzd2l0Y2ggKFR5cGVbdGhpcy50eXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgICBjYXNlIFR5cGUuREVGQVVMVDpcbiAgICAgICAgICAgICAgICBjbGFzc2VzID0ge1xuICAgICAgICAgICAgICAgICAgICBbYCR7dGhpcy5jc3NDbGFzc31fX2NpcmNsZS0tZGVmYXVsdGBdOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVHlwZS5JTkZPOlxuICAgICAgICAgICAgICAgIGNsYXNzZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNzc0NsYXNzfV9fY2lyY2xlLS1pbmZvYF06IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUeXBlLlNVQ0NFU1M6XG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3RoaXMuY3NzQ2xhc3N9X19jaXJjbGUtLXN1Y2Nlc3NgXTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFR5cGUuV0FSTklORzpcbiAgICAgICAgICAgICAgICBjbGFzc2VzID0ge1xuICAgICAgICAgICAgICAgICAgICBbYCR7dGhpcy5jc3NDbGFzc31fX2NpcmNsZS0td2FybmluZ2BdOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVHlwZS5FUlJPUjpcbiAgICAgICAgICAgICAgICBjbGFzc2VzID0ge1xuICAgICAgICAgICAgICAgICAgICBbYCR7dGhpcy5jc3NDbGFzc31fX2NpcmNsZS0tZXJyb3JgXTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4QmFkZ2VDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtJZ3hCYWRnZUNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWd4SWNvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4QmFkZ2VNb2R1bGUge1xufVxuIl19
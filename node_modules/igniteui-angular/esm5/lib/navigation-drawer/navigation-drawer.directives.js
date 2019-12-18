/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, TemplateRef } from '@angular/core';
var IgxNavDrawerItemDirective = /** @class */ (function () {
    function IgxNavDrawerItemDirective() {
        /**
         * @hidden
         */
        this.active = false;
        /**
         * @hidden
         */
        this.isHeader = false;
        /**
         * @hidden
         */
        this.activeClass = 'igx-nav-drawer__item--active';
    }
    Object.defineProperty(IgxNavDrawerItemDirective.prototype, "defaultCSS", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this.active && !this.isHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavDrawerItemDirective.prototype, "currentCSS", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.active && !this.isHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavDrawerItemDirective.prototype, "headerCSS", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.isHeader;
        },
        enumerable: true,
        configurable: true
    });
    IgxNavDrawerItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxDrawerItem]',
                    exportAs: 'igxDrawerItem'
                },] }
    ];
    IgxNavDrawerItemDirective.propDecorators = {
        active: [{ type: Input, args: ['active',] }],
        isHeader: [{ type: Input, args: ['isHeader',] }],
        defaultCSS: [{ type: HostBinding, args: ['class.igx-nav-drawer__item',] }],
        currentCSS: [{ type: HostBinding, args: ['class.igx-nav-drawer__item--active',] }],
        headerCSS: [{ type: HostBinding, args: ['class.igx-nav-drawer__item--header',] }]
    };
    return IgxNavDrawerItemDirective;
}());
export { IgxNavDrawerItemDirective };
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxNavDrawerItemDirective.prototype.active;
    /**
     * @hidden
     * @type {?}
     */
    IgxNavDrawerItemDirective.prototype.isHeader;
    /**
     * @hidden
     * @type {?}
     */
    IgxNavDrawerItemDirective.prototype.activeClass;
}
var IgxNavDrawerTemplateDirective = /** @class */ (function () {
    function IgxNavDrawerTemplateDirective(template) {
        this.template = template;
    }
    IgxNavDrawerTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxDrawer]'
                },] }
    ];
    /** @nocollapse */
    IgxNavDrawerTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxNavDrawerTemplateDirective;
}());
export { IgxNavDrawerTemplateDirective };
if (false) {
    /** @type {?} */
    IgxNavDrawerTemplateDirective.prototype.template;
}
var IgxNavDrawerMiniTemplateDirective = /** @class */ (function () {
    function IgxNavDrawerMiniTemplateDirective(template) {
        this.template = template;
    }
    IgxNavDrawerMiniTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxDrawerMini]'
                },] }
    ];
    /** @nocollapse */
    IgxNavDrawerMiniTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxNavDrawerMiniTemplateDirective;
}());
export { IgxNavDrawerMiniTemplateDirective };
if (false) {
    /** @type {?} */
    IgxNavDrawerMiniTemplateDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbmF2aWdhdGlvbi1kcmF3ZXIvbmF2aWdhdGlvbi1kcmF3ZXIuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRTtJQUFBOzs7O1FBUzRCLFdBQU0sR0FBRyxLQUFLLENBQUM7Ozs7UUFLYixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBSzNCLGdCQUFXLEdBQUcsOEJBQThCLENBQUM7SUF5QmpFLENBQUM7SUFwQkcsc0JBQ0ksaURBQVU7UUFKZDs7V0FFRzs7Ozs7UUFDSDtZQUVJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLGlEQUFVO1FBSmQ7O1dBRUc7Ozs7O1FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBS0Qsc0JBQ0ksZ0RBQVM7UUFKYjs7V0FFRzs7Ozs7UUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTs7Z0JBM0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtpQkFDNUI7Ozt5QkFNSSxLQUFLLFNBQUMsUUFBUTsyQkFLZCxLQUFLLFNBQUMsVUFBVTs2QkFVaEIsV0FBVyxTQUFDLDRCQUE0Qjs2QkFReEMsV0FBVyxTQUFDLG9DQUFvQzs0QkFRaEQsV0FBVyxTQUFDLG9DQUFvQzs7SUFJckQsZ0NBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXhDWSx5QkFBeUI7Ozs7OztJQUtsQywyQ0FBdUM7Ozs7O0lBS3ZDLDZDQUEyQzs7Ozs7SUFLM0MsZ0RBQTZEOztBQTJCakU7SUFLSSx1Q0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFDNUMsQ0FBQzs7Z0JBTkwsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs7OztnQkFsRHVDLFdBQVc7O0lBdURuRCxvQ0FBQztDQUFBLEFBUEQsSUFPQztTQUpZLDZCQUE2Qjs7O0lBRTFCLGlEQUFpQzs7QUFJakQ7SUFLSSwyQ0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFDNUMsQ0FBQzs7Z0JBTkwsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOzs7O2dCQTNEdUMsV0FBVzs7SUFnRW5ELHdDQUFDO0NBQUEsQUFQRCxJQU9DO1NBSlksaUNBQWlDOzs7SUFFOUIscURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyYXdlckl0ZW1dJyxcbiAgICBleHBvcnRBczogJ2lneERyYXdlckl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIElneE5hdkRyYXdlckl0ZW1EaXJlY3RpdmUge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgnYWN0aXZlJykgcHVibGljIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgnaXNIZWFkZXInKSBwdWJsaWMgaXNIZWFkZXIgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYWN0aXZlQ2xhc3MgPSAnaWd4LW5hdi1kcmF3ZXJfX2l0ZW0tLWFjdGl2ZSc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbmF2LWRyYXdlcl9faXRlbScpXG4gICAgZ2V0IGRlZmF1bHRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5hY3RpdmUgJiYgIXRoaXMuaXNIZWFkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LW5hdi1kcmF3ZXJfX2l0ZW0tLWFjdGl2ZScpXG4gICAgZ2V0IGN1cnJlbnRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZSAmJiAhdGhpcy5pc0hlYWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbmF2LWRyYXdlcl9faXRlbS0taGVhZGVyJylcbiAgICBnZXQgaGVhZGVyQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hlYWRlcjtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyYXdlcl0nXG59KVxuZXhwb3J0IGNsYXNzIElneE5hdkRyYXdlclRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyYXdlck1pbmldJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZEcmF3ZXJNaW5pVGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, TemplateRef } from '@angular/core';
export class IgxNavDrawerItemDirective {
    constructor() {
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
    /**
     * @hidden
     * @return {?}
     */
    get defaultCSS() {
        return !this.active && !this.isHeader;
    }
    /**
     * @hidden
     * @return {?}
     */
    get currentCSS() {
        return this.active && !this.isHeader;
    }
    /**
     * @hidden
     * @return {?}
     */
    get headerCSS() {
        return this.isHeader;
    }
}
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
export class IgxNavDrawerTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxNavDrawerTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxDrawer]'
            },] }
];
/** @nocollapse */
IgxNavDrawerTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxNavDrawerTemplateDirective.prototype.template;
}
export class IgxNavDrawerMiniTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxNavDrawerMiniTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxDrawerMini]'
            },] }
];
/** @nocollapse */
IgxNavDrawerMiniTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxNavDrawerMiniTemplateDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbmF2aWdhdGlvbi1kcmF3ZXIvbmF2aWdhdGlvbi1kcmF3ZXIuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zRSxNQUFNLE9BQU8seUJBQXlCO0lBSnRDOzs7O1FBUzRCLFdBQU0sR0FBRyxLQUFLLENBQUM7Ozs7UUFLYixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBSzNCLGdCQUFXLEdBQUcsOEJBQThCLENBQUM7SUF5QmpFLENBQUM7Ozs7O0lBcEJHLElBQ0ksVUFBVTtRQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUtELElBQ0ksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFLRCxJQUNJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7O1lBM0NKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTthQUM1Qjs7O3FCQU1JLEtBQUssU0FBQyxRQUFRO3VCQUtkLEtBQUssU0FBQyxVQUFVO3lCQVVoQixXQUFXLFNBQUMsNEJBQTRCO3lCQVF4QyxXQUFXLFNBQUMsb0NBQW9DO3dCQVFoRCxXQUFXLFNBQUMsb0NBQW9DOzs7Ozs7O0lBL0JqRCwyQ0FBdUM7Ozs7O0lBS3ZDLDZDQUEyQzs7Ozs7SUFLM0MsZ0RBQTZEOztBQThCakUsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUV0QyxZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUM1QyxDQUFDOzs7WUFOTCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7YUFDMUI7Ozs7WUFsRHVDLFdBQVc7Ozs7SUFxRG5DLGlEQUFpQzs7QUFPakQsTUFBTSxPQUFPLGlDQUFpQzs7OztJQUUxQyxZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUM1QyxDQUFDOzs7WUFOTCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjthQUM5Qjs7OztZQTNEdUMsV0FBVzs7OztJQThEbkMscURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyYXdlckl0ZW1dJyxcbiAgICBleHBvcnRBczogJ2lneERyYXdlckl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIElneE5hdkRyYXdlckl0ZW1EaXJlY3RpdmUge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgnYWN0aXZlJykgcHVibGljIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgnaXNIZWFkZXInKSBwdWJsaWMgaXNIZWFkZXIgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYWN0aXZlQ2xhc3MgPSAnaWd4LW5hdi1kcmF3ZXJfX2l0ZW0tLWFjdGl2ZSc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbmF2LWRyYXdlcl9faXRlbScpXG4gICAgZ2V0IGRlZmF1bHRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5hY3RpdmUgJiYgIXRoaXMuaXNIZWFkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LW5hdi1kcmF3ZXJfX2l0ZW0tLWFjdGl2ZScpXG4gICAgZ2V0IGN1cnJlbnRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZSAmJiAhdGhpcy5pc0hlYWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbmF2LWRyYXdlcl9faXRlbS0taGVhZGVyJylcbiAgICBnZXQgaGVhZGVyQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hlYWRlcjtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyYXdlcl0nXG59KVxuZXhwb3J0IGNsYXNzIElneE5hdkRyYXdlclRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyYXdlck1pbmldJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZEcmF3ZXJNaW5pVGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgIH1cbn1cbiJdfQ==
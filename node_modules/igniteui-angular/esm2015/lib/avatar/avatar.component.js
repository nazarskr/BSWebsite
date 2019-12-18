/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, Input, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { IgxIconModule } from '../icon/index';
/** @type {?} */
let NEXT_ID = 0;
/** @enum {string} */
const Size = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
};
export { Size };
/** @enum {string} */
const AvatarType = {
    DEFAULT: 'default',
    INITIALS: 'initials',
    IMAGE: 'image',
    ICON: 'icon',
};
export { AvatarType };
/**
 * **Ignite UI for Angular Avatar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html)
 *
 * The Ignite UI Avatar provides an easy way to add an avatar icon to your application.  This icon can be an
 * image, someone's initials or a material icon from the google material icon set.
 *
 * Example:
 * ```html
 * <igx-avatar initials="MS" roundShape="true" size="large">
 * </igx-avatar>
 * ```
 */
export class IgxAvatarComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Returns the `aria-label` of the avatar.
         *
         * ```typescript
         * let ariaLabel = this.avatar.ariaLabel;
         * ```
         *
         */
        this.ariaLabel = 'avatar';
        /**
         * Returns the `role` attribute of the avatar.
         *
         * ```typescript
         * let avatarRole = this.avatar.role;
         * ```
         *
         * \@memberof IgxAvatarComponent
         */
        this.role = 'img';
        /**
         * Returns the class of the avatar.
         *
         * ```typescript
         * let avatarCLass =  this.avatar.cssClass;
         * ```
         *
         * \@memberof IgxAvatarComponent
         */
        this.cssClass = 'igx-avatar';
        /**
         * @hidden
         */
        this._size = 'small';
        /**
         * Sets the `id` of the avatar. If not set, the first avatar component will have `id` = `"igx-avatar-0"`.
         *
         * ```html
         * <igx-avatar id="my-first-avatar"></igx-avatar>
         * ```
         *
         * \@memberof IgxAvatarComponent
         */
        this.id = `igx-avatar-${NEXT_ID++}`;
        /**
         * Sets a round shape to the avatar if `roundShape` is `"true"`.
         * By default the shape of the avatar is a square.
         *
         * ```html
         * <igx-avatar roundShape = "true" ></igx-avatar>
         * ```
         *
         * \@memberof IgxAvatarComponent
         */
        this.roundShape = false;
    }
    /**
     * Returns the `size` of the avatar.
     *
     * ```typescript
     * let avatarSize =  this.avatar.size;
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * Sets the `size`  of the avatar.
     * By default the `size` is `"small"`. It can be set to `"medium"` or `"large"`.
     *
     * ```
     * <igx-avatar size="large"></igx-avatar>
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        switch (value) {
            case 'small':
            case 'medium':
            case 'large':
                this._size = value;
                break;
            default:
                this._size = 'small';
        }
    }
    /**
     * Returns the type of the avatar.
     *
     * ```typescript
     * let avatarType = this.avatar.type;
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @return {?}
     */
    get type() {
        if (this.src) {
            return AvatarType.IMAGE;
        }
        if (this.icon) {
            return AvatarType.ICON;
        }
        if (this.initials) {
            return AvatarType.INITIALS;
        }
        return AvatarType.DEFAULT;
    }
    /**
     * Returns the template of the avatar.
     *
     * ```typescript
     * let template = this.avatar.template;
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @return {?}
     */
    get template() {
        switch (this.type) {
            case AvatarType.IMAGE:
                return this.imageTemplate;
            case AvatarType.INITIALS:
                return this.initialsTemplate;
            case AvatarType.ICON:
                return this.iconTemplate;
            default:
                return this.defaultTemplate;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this.roleDescription = this.getRole();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        this.elementRef.nativeElement.classList
            .add(`igx-avatar--${this._size}`, `igx-avatar--${this.type}`);
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    getRole() {
        switch (this.type) {
            case AvatarType.IMAGE:
                return 'image avatar';
            case AvatarType.ICON:
                return 'icon avatar';
            case AvatarType.INITIALS:
                return 'initials avatar';
            default:
                return 'custom avatar';
        }
    }
    /**
     * Returns the url of the `image`.
     *
     * ```typescript
     * let imageSourceUrl = this.avatar.getSrcUrl();
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @return {?}
     */
    getSrcUrl() {
        return `url(${this.src})`;
    }
}
IgxAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-avatar',
                template: "<ng-template #defaultTemplate>\n    <ng-content></ng-content>\n</ng-template>\n\n<ng-template #imageTemplate>\n    <div #image class=\"igx-avatar__image\" [style.backgroundImage]=\"getSrcUrl()\"></div>\n</ng-template>\n\n<ng-template #initialsTemplate>\n    <span>{{initials.substring(0, 2)}}</span>\n</ng-template>\n\n<ng-template #iconTemplate>\n     <igx-icon>{{icon}}</igx-icon>\n</ng-template>\n\n<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n"
            }] }
];
/** @nocollapse */
IgxAvatarComponent.ctorParameters = () => [
    { type: ElementRef }
];
IgxAvatarComponent.propDecorators = {
    image: [{ type: ViewChild, args: ['image', { static: false },] }],
    defaultTemplate: [{ type: ViewChild, args: ['defaultTemplate', { read: TemplateRef, static: true },] }],
    imageTemplate: [{ type: ViewChild, args: ['imageTemplate', { read: TemplateRef, static: true },] }],
    initialsTemplate: [{ type: ViewChild, args: ['initialsTemplate', { read: TemplateRef, static: true },] }],
    iconTemplate: [{ type: ViewChild, args: ['iconTemplate', { read: TemplateRef, static: true },] }],
    ariaLabel: [{ type: HostBinding, args: ['attr.aria-label',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    cssClass: [{ type: HostBinding, args: ['class.igx-avatar',] }],
    roleDescription: [{ type: HostBinding, args: ['attr.aria-roledescription',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    roundShape: [{ type: HostBinding, args: ['class.igx-avatar--rounded',] }, { type: Input }],
    color: [{ type: HostBinding, args: ['style.color',] }, { type: Input }],
    bgColor: [{ type: HostBinding, args: ['style.background',] }, { type: Input }],
    initials: [{ type: Input }],
    icon: [{ type: Input }],
    src: [{ type: Input }],
    size: [{ type: Input }]
};
if (false) {
    /**
     * This is a reference to the avatar `image` element in the DOM.
     *
     * ```typescript
     *  let image =  this.avatar.image;
     * ```
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.image;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxAvatarComponent.prototype.defaultTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxAvatarComponent.prototype.imageTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxAvatarComponent.prototype.initialsTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxAvatarComponent.prototype.iconTemplate;
    /**
     * Returns the `aria-label` of the avatar.
     *
     * ```typescript
     * let ariaLabel = this.avatar.ariaLabel;
     * ```
     *
     * @type {?}
     */
    IgxAvatarComponent.prototype.ariaLabel;
    /**
     * Returns the `role` attribute of the avatar.
     *
     * ```typescript
     * let avatarRole = this.avatar.role;
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.role;
    /**
     * Returns the class of the avatar.
     *
     * ```typescript
     * let avatarCLass =  this.avatar.cssClass;
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.cssClass;
    /**
     * Returns the type of the avatar.
     * The avatar can be: `"initials type avatar"`, `"icon type avatar"` or `"image type avatar"`.
     *
     * ```typescript
     * let avatarDescription = this.avatar.roleDescription;
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.roleDescription;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxAvatarComponent.prototype._size;
    /**
     * Sets the `id` of the avatar. If not set, the first avatar component will have `id` = `"igx-avatar-0"`.
     *
     * ```html
     * <igx-avatar id="my-first-avatar"></igx-avatar>
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.id;
    /**
     * Sets a round shape to the avatar if `roundShape` is `"true"`.
     * By default the shape of the avatar is a square.
     *
     * ```html
     * <igx-avatar roundShape = "true" ></igx-avatar>
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.roundShape;
    /**
     * Sets the avatar's `initials`/`icon` color.
     *
     * ```html
     * <igx-avatar color="blue"></igx-avatar>
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.color;
    /**
     * Sets the background color of the avatar.
     *
     * ```html
     * <igx-avatar bgColor="yellow"></igx-avatar>
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.bgColor;
    /**
     * Sets `initials` to the avatar.
     *
     * ```html
     * <igx-avatar initials="MN"></igx-avatar>
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.initials;
    /**
     * Sets an `icon` to the avatar. All icons from the material icon set are supported.
     *
     * ```html
     * <igx-avatar icon="phone"></igx-avatar>
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.icon;
    /**
     * Sets the `image` source of the avatar.
     *
     * ```html
     * <igx-avatar src="images/picture.jpg"></igx-avatar>
     * ```
     *
     * \@memberof IgxAvatarComponent
     * @type {?}
     */
    IgxAvatarComponent.prototype.src;
    /** @type {?} */
    IgxAvatarComponent.prototype.elementRef;
}
/**
 * @hidden
 */
export class IgxAvatarModule {
}
IgxAvatarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxAvatarComponent],
                exports: [IgxAvatarComponent],
                imports: [CommonModule, IgxIconModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUgsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFFUixXQUFXLEVBQ1gsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBRTFDLE9BQU8sR0FBRyxDQUFDOzs7SUFHWCxPQUFRLE9BQU87SUFDZixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPOzs7OztJQUlmLFNBQVUsU0FBUztJQUNuQixVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBb0JqQixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBMFEzQixZQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZOzs7Ozs7Ozs7UUE1TmxDLGNBQVMsR0FBRyxRQUFRLENBQUM7Ozs7Ozs7Ozs7UUFZckIsU0FBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7OztRQVliLGFBQVEsR0FBRyxZQUFZLENBQUM7Ozs7UUFtQnZCLFVBQUssR0FBa0IsT0FBTyxDQUFDOzs7Ozs7Ozs7O1FBYWhDLE9BQUUsR0FBRyxjQUFjLE9BQU8sRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7O1FBZS9CLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFxSm1CLENBQUM7Ozs7Ozs7Ozs7O0lBMUU5QyxJQUNXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVlELElBQVcsSUFBSSxDQUFDLEtBQW9CO1FB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QkFjTCxXQUFXLFNBQUMsMkJBQTJCLGNBQ3ZDLEtBQUs7b0JBYUwsV0FBVyxTQUFDLGFBQWEsY0FDekIsS0FBSztzQkFhTCxXQUFXLFNBQUMsa0JBQWtCLGNBQzlCLEtBQUs7dUJBWUwsS0FBSzttQkFZTCxLQUFLO2tCQVlMLEtBQUs7bUJBWUwsS0FBSzs7Ozs7Ozs7Ozs7O0lBdExOLG1DQUN5Qjs7Ozs7O0lBS3pCLDZDQUM0Qzs7Ozs7O0lBSzVDLDJDQUMwQzs7Ozs7O0lBSzFDLDhDQUM2Qzs7Ozs7O0lBSzdDLDBDQUN5Qzs7Ozs7Ozs7OztJQVV6Qyx1Q0FDNEI7Ozs7Ozs7Ozs7O0lBVzVCLGtDQUNvQjs7Ozs7Ozs7Ozs7SUFXcEIsc0NBQytCOzs7Ozs7Ozs7Ozs7SUFhL0IsNkNBQytCOzs7Ozs7SUFLL0IsbUNBQXVDOzs7Ozs7Ozs7OztJQVd2QyxnQ0FFc0M7Ozs7Ozs7Ozs7OztJQWF0Qyx3Q0FFMEI7Ozs7Ozs7Ozs7O0lBWTFCLG1DQUVxQjs7Ozs7Ozs7Ozs7SUFZckIscUNBRXVCOzs7Ozs7Ozs7OztJQVd2QixzQ0FDd0I7Ozs7Ozs7Ozs7O0lBV3hCLGtDQUNvQjs7Ozs7Ozs7Ozs7SUFXcEIsaUNBQ21COztJQXFGUCx3Q0FBNkI7Ozs7O0FBdUQ3QyxNQUFNLE9BQU8sZUFBZTs7O1lBTDNCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE9uSW5pdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuZXhwb3J0IGVudW0gU2l6ZSB7XG4gICAgU01BTEwgPSAnc21hbGwnLFxuICAgIE1FRElVTSA9ICdtZWRpdW0nLFxuICAgIExBUkdFID0gJ2xhcmdlJ1xufVxuXG5leHBvcnQgZW51bSBBdmF0YXJUeXBlIHtcbiAgICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAgIElOSVRJQUxTID0gJ2luaXRpYWxzJyxcbiAgICBJTUFHRSA9ICdpbWFnZScsXG4gICAgSUNPTiA9ICdpY29uJ1xufVxuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIEF2YXRhcioqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9hdmF0YXIuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIEF2YXRhciBwcm92aWRlcyBhbiBlYXN5IHdheSB0byBhZGQgYW4gYXZhdGFyIGljb24gdG8geW91ciBhcHBsaWNhdGlvbi4gIFRoaXMgaWNvbiBjYW4gYmUgYW5cbiAqIGltYWdlLCBzb21lb25lJ3MgaW5pdGlhbHMgb3IgYSBtYXRlcmlhbCBpY29uIGZyb20gdGhlIGdvb2dsZSBtYXRlcmlhbCBpY29uIHNldC5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1hdmF0YXIgaW5pdGlhbHM9XCJNU1wiIHJvdW5kU2hhcGU9XCJ0cnVlXCIgc2l6ZT1cImxhcmdlXCI+XG4gKiA8L2lneC1hdmF0YXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtYXZhdGFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2F2YXRhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4QXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIGF2YXRhciBgaW1hZ2VgIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgbGV0IGltYWdlID0gIHRoaXMuYXZhdGFyLmltYWdlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdpbWFnZScsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBpbWFnZTogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdpbWFnZVRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGltYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdpbml0aWFsc1RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGluaXRpYWxzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdpY29uVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgaWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYGFyaWEtbGFiZWxgIG9mIHRoZSBhdmF0YXIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGFyaWFMYWJlbCA9IHRoaXMuYXZhdGFyLmFyaWFMYWJlbDtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsJylcbiAgICBwdWJsaWMgYXJpYUxhYmVsID0gJ2F2YXRhcic7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBgcm9sZWAgYXR0cmlidXRlIG9mIHRoZSBhdmF0YXIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGF2YXRhclJvbGUgPSB0aGlzLmF2YXRhci5yb2xlO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIElneEF2YXRhckNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICdpbWcnO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2xhc3Mgb2YgdGhlIGF2YXRhci5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgYXZhdGFyQ0xhc3MgPSAgdGhpcy5hdmF0YXIuY3NzQ2xhc3M7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSWd4QXZhdGFyQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtYXZhdGFyJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWF2YXRhcic7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBhdmF0YXIuXG4gICAgICogVGhlIGF2YXRhciBjYW4gYmU6IGBcImluaXRpYWxzIHR5cGUgYXZhdGFyXCJgLCBgXCJpY29uIHR5cGUgYXZhdGFyXCJgIG9yIGBcImltYWdlIHR5cGUgYXZhdGFyXCJgLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBhdmF0YXJEZXNjcmlwdGlvbiA9IHRoaXMuYXZhdGFyLnJvbGVEZXNjcmlwdGlvbjtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXJvbGVkZXNjcmlwdGlvbicpXG4gICAgcHVibGljIHJvbGVEZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NpemU6IHN0cmluZyB8IFNpemUgPSAnc21hbGwnO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYGlkYCBvZiB0aGUgYXZhdGFyLiBJZiBub3Qgc2V0LCB0aGUgZmlyc3QgYXZhdGFyIGNvbXBvbmVudCB3aWxsIGhhdmUgYGlkYCA9IGBcImlneC1hdmF0YXItMFwiYC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWF2YXRhciBpZD1cIm15LWZpcnN0LWF2YXRhclwiPjwvaWd4LWF2YXRhcj5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1hdmF0YXItJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIFNldHMgYSByb3VuZCBzaGFwZSB0byB0aGUgYXZhdGFyIGlmIGByb3VuZFNoYXBlYCBpcyBgXCJ0cnVlXCJgLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIHNoYXBlIG9mIHRoZSBhdmF0YXIgaXMgYSBzcXVhcmUuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1hdmF0YXIgcm91bmRTaGFwZSA9IFwidHJ1ZVwiID48L2lneC1hdmF0YXI+XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSWd4QXZhdGFyQ29tcG9uZW50XG4gICAgICovXG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1hdmF0YXItLXJvdW5kZWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvdW5kU2hhcGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGF2YXRhcidzIGBpbml0aWFsc2AvYGljb25gIGNvbG9yLlxuICAgICAqXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWF2YXRhciBjb2xvcj1cImJsdWVcIj48L2lneC1hdmF0YXI+XG4gICAgICpgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuY29sb3InKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBhdmF0YXIuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1hdmF0YXIgYmdDb2xvcj1cInllbGxvd1wiPjwvaWd4LWF2YXRhcj5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYmdDb2xvcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBgaW5pdGlhbHNgIHRvIHRoZSBhdmF0YXIuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1hdmF0YXIgaW5pdGlhbHM9XCJNTlwiPjwvaWd4LWF2YXRhcj5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbml0aWFsczogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBgaWNvbmAgdG8gdGhlIGF2YXRhci4gQWxsIGljb25zIGZyb20gdGhlIG1hdGVyaWFsIGljb24gc2V0IGFyZSBzdXBwb3J0ZWQuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1hdmF0YXIgaWNvbj1cInBob25lXCI+PC9pZ3gtYXZhdGFyPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIElneEF2YXRhckNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGljb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGBpbWFnZWAgc291cmNlIG9mIHRoZSBhdmF0YXIuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1hdmF0YXIgc3JjPVwiaW1hZ2VzL3BpY3R1cmUuanBnXCI+PC9pZ3gtYXZhdGFyPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIElneEF2YXRhckNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNyYzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYHNpemVgIG9mIHRoZSBhdmF0YXIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpsZXQgYXZhdGFyU2l6ZSA9ICB0aGlzLmF2YXRhci5zaXplO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIElneEF2YXRhckNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzaXplKCk6IHN0cmluZyB8IFNpemUge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgc2l6ZWAgIG9mIHRoZSBhdmF0YXIuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgYHNpemVgIGlzIGBcInNtYWxsXCJgLiBJdCBjYW4gYmUgc2V0IHRvIGBcIm1lZGl1bVwiYCBvciBgXCJsYXJnZVwiYC5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIDxpZ3gtYXZhdGFyIHNpemU9XCJsYXJnZVwiPjwvaWd4LWF2YXRhcj5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNpemUodmFsdWU6IHN0cmluZyB8IFNpemUpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAnc21hbGwnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgYXZhdGFyLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBhdmF0YXJUeXBlID0gdGhpcy5hdmF0YXIudHlwZTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdHlwZSgpOiBBdmF0YXJUeXBlIHtcbiAgICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gQXZhdGFyVHlwZS5JTUFHRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgICAgIHJldHVybiBBdmF0YXJUeXBlLklDT047XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbml0aWFscykge1xuICAgICAgICAgICAgcmV0dXJuIEF2YXRhclR5cGUuSU5JVElBTFM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXZhdGFyVHlwZS5ERUZBVUxUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIG9mIHRoZSBhdmF0YXIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRlbXBsYXRlID0gdGhpcy5hdmF0YXIudGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSWd4QXZhdGFyQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBdmF0YXJUeXBlLklNQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlVGVtcGxhdGU7XG4gICAgICAgICAgICBjYXNlIEF2YXRhclR5cGUuSU5JVElBTFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbHNUZW1wbGF0ZTtcbiAgICAgICAgICAgIGNhc2UgQXZhdGFyVHlwZS5JQ09OOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmljb25UZW1wbGF0ZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb2xlRGVzY3JpcHRpb24gPSB0aGlzLmdldFJvbGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RcbiAgICAgICAgICAgIC5hZGQoYGlneC1hdmF0YXItLSR7dGhpcy5fc2l6ZX1gLCBgaWd4LWF2YXRhci0tJHt0aGlzLnR5cGV9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Um9sZSgpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBdmF0YXJUeXBlLklNQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW1hZ2UgYXZhdGFyJztcbiAgICAgICAgICAgIGNhc2UgQXZhdGFyVHlwZS5JQ09OOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaWNvbiBhdmF0YXInO1xuICAgICAgICAgICAgY2FzZSBBdmF0YXJUeXBlLklOSVRJQUxTOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5pdGlhbHMgYXZhdGFyJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjdXN0b20gYXZhdGFyJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVybCBvZiB0aGUgYGltYWdlYC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaW1hZ2VTb3VyY2VVcmwgPSB0aGlzLmF2YXRhci5nZXRTcmNVcmwoKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hBdmF0YXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3JjVXJsKCkge1xuICAgICAgICByZXR1cm4gYHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4QXZhdGFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4QXZhdGFyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJZ3hJY29uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hBdmF0YXJNb2R1bGUgeyB9XG4iXX0=
import { AfterViewInit, ElementRef, OnInit, TemplateRef } from '@angular/core';
export declare enum Size {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export declare enum AvatarType {
    DEFAULT = "default",
    INITIALS = "initials",
    IMAGE = "image",
    ICON = "icon"
}
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
export declare class IgxAvatarComponent implements OnInit, AfterViewInit {
    elementRef: ElementRef;
    /**
     * This is a reference to the avatar `image` element in the DOM.
     *
     * ```typescript
     *  let image =  this.avatar.image;
     * ```
     * @memberof IgxAvatarComponent
     */
    image: ElementRef;
    /**
     *@hidden
     */
    protected defaultTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    protected imageTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    protected initialsTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    protected iconTemplate: TemplateRef<any>;
    /**
     * Returns the `aria-label` of the avatar.
     *
     * ```typescript
     * let ariaLabel = this.avatar.ariaLabel;
     * ```
     *
     */
    ariaLabel: string;
    /**
     * Returns the `role` attribute of the avatar.
     *
     * ```typescript
     * let avatarRole = this.avatar.role;
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    role: string;
    /**
     * Returns the class of the avatar.
     *
     * ```typescript
     * let avatarCLass =  this.avatar.cssClass;
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    cssClass: string;
    /**
     * Returns the type of the avatar.
     * The avatar can be: `"initials type avatar"`, `"icon type avatar"` or `"image type avatar"`.
     *
     * ```typescript
     * let avatarDescription = this.avatar.roleDescription;
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    roleDescription: string;
    /**
     * @hidden
     */
    private _size;
    /**
     * Sets the `id` of the avatar. If not set, the first avatar component will have `id` = `"igx-avatar-0"`.
     *
     * ```html
     * <igx-avatar id="my-first-avatar"></igx-avatar>
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    id: string;
    /**
     * Sets a round shape to the avatar if `roundShape` is `"true"`.
     * By default the shape of the avatar is a square.
     *
     * ```html
     * <igx-avatar roundShape = "true" ></igx-avatar>
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    roundShape: boolean;
    /**
     * Sets the avatar's `initials`/`icon` color.
     *
     *```html
     *<igx-avatar color="blue"></igx-avatar>
     *```
     *
     * @memberof IgxAvatarComponent
     */
    color: string;
    /**
     * Sets the background color of the avatar.
     *
     * ```html
     * <igx-avatar bgColor="yellow"></igx-avatar>
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    bgColor: string;
    /**
     * Sets `initials` to the avatar.
     *
     * ```html
     * <igx-avatar initials="MN"></igx-avatar>
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    initials: string;
    /**
     * Sets an `icon` to the avatar. All icons from the material icon set are supported.
     *
     * ```html
     * <igx-avatar icon="phone"></igx-avatar>
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    icon: string;
    /**
     * Sets the `image` source of the avatar.
     *
     * ```html
     * <igx-avatar src="images/picture.jpg"></igx-avatar>
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    src: string;
    /**
     * Returns the `size` of the avatar.
     *
     * ```typescript
     *let avatarSize =  this.avatar.size;
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    /**
    * Sets the `size`  of the avatar.
    * By default the `size` is `"small"`. It can be set to `"medium"` or `"large"`.
    *
    * ```
    * <igx-avatar size="large"></igx-avatar>
    * ```
    *
    * @memberof IgxAvatarComponent
    */
    size: string | Size;
    /**
     * Returns the type of the avatar.
     *
     * ```typescript
     * let avatarType = this.avatar.type;
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    readonly type: AvatarType;
    /**
     * Returns the template of the avatar.
     *
     * ```typescript
     * let template = this.avatar.template;
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    readonly template: TemplateRef<any>;
    constructor(elementRef: ElementRef);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     *@hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    private getRole;
    /**
     * Returns the url of the `image`.
     *
     * ```typescript
     * let imageSourceUrl = this.avatar.getSrcUrl();
     * ```
     *
     * @memberof IgxAvatarComponent
     */
    getSrcUrl(): string;
}
/**
 * @hidden
 */
export declare class IgxAvatarModule {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, TemplateRef, ViewChild } from '@angular/core';
import { IgxIconService } from './icon.service';
/**
 * **Ignite UI for Angular Icon** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html)
 *
 * The Ignite UI Icon makes it easy for developers to include material design icons directly in their markup. The icons
 * support custom colors and can be marked as active or disabled using the `isActive` property. This will change the appearance
 * of the icon.
 *
 * Example:
 * ```html
 * <igx-icon color="#00ff00" isActive="true">home</igx-icon>
 * ```
 * @type {?}
 */
var NEXT_ID = 0;
var IgxIconComponent = /** @class */ (function () {
    function IgxIconComponent(_el, iconService) {
        this._el = _el;
        this.iconService = iconService;
        /**
         *  This allows you to change the value of `class.igx-icon`. By default it's `igx-icon`.
         * ```typescript
         * \@ViewChild("MyIcon") public icon: IgxIconComponent;
         * constructor(private cdRef:ChangeDetectorRef) {}
         * ngAfterViewInit() {
         *    this.icon.cssClass = "";
         *    this.cdRef.detectChanges();
         * }
         * ```
         */
        this.cssClass = 'igx-icon';
        /**
         *  This allows you to disable the `aria-hidden` attribute. By default it's applied.
         * ```typescript
         * \@ViewChild("MyIcon") public icon: IgxIconComponent;
         * constructor(private cdRef:ChangeDetectorRef) {}
         * ngAfterViewInit() {
         *    this.icon.ariaHidden = false;
         *    this.cdRef.detectChanges();
         * }
         * ```
         */
        this.ariaHidden = true;
        /**
         *  An \@Input property that sets the value of the `id` attribute.
         * ```html
         * <igx-icon id="igx-icon-1" fontSet="material" color="blue" [isActive]="false">settings</igx-icon>
         * ```
         */
        this.id = "igx-icon-" + NEXT_ID++;
        /**
         *  An \@Input property that allows you to disable the `active` property. By default it's applied.
         * ```html
         * <igx-icon [isActive]="false" fontSet="material" color="blue">settings</igx-icon>
         * ```
         */
        this.active = true;
        this.el = _el;
        this.font = this.iconService.defaultFontSet;
        this.iconService.registerFontSetAlias('material', 'material-icons');
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxIconComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.updateIconClass();
    };
    Object.defineProperty(IgxIconComponent.prototype, "getFontSet", {
        /**
         *  An accessor that returns the value of the font property.
         *```typescript
         *@ViewChild("MyIcon")
         *public icon: IgxIconComponent;
         *ngAfterViewInit() {
         *    let iconFont = this.icon.getFontSet;
         * }
         * ```
         */
        get: /**
         *  An accessor that returns the value of the font property.
         * ```typescript
         * \@ViewChild("MyIcon")
         * public icon: IgxIconComponent;
         * ngAfterViewInit() {
         *    let iconFont = this.icon.getFontSet;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.font;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxIconComponent.prototype, "getActive", {
        /**
         *  An accessor that returns the value of the active property.
         *```typescript
         *@ViewChild("MyIcon")
         *public icon: IgxIconComponent;
         *ngAfterViewInit() {
         *    let iconActive = this.icon.getActive;
         * }
         * ```
         */
        get: /**
         *  An accessor that returns the value of the active property.
         * ```typescript
         * \@ViewChild("MyIcon")
         * public icon: IgxIconComponent;
         * ngAfterViewInit() {
         *    let iconActive = this.icon.getActive;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxIconComponent.prototype, "getInactive", {
        /**
         *  An accessor that returns inactive property.
         *```typescript
         *@ViewChild("MyIcon")
         *public icon: IgxIconComponent;
         *ngAfterViewInit() {
         *    let iconActive = this.icon.getInactive;
         * }
         * ```
         */
        get: /**
         *  An accessor that returns inactive property.
         * ```typescript
         * \@ViewChild("MyIcon")
         * public icon: IgxIconComponent;
         * ngAfterViewInit() {
         *    let iconActive = this.icon.getInactive;
         * }
         * ```
         * @return {?}
         */
        function () {
            return !this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxIconComponent.prototype, "getIconColor", {
        /**
         *  An accessor that returns the opposite value of the `iconColor` property.
         *```typescript
         *@ViewChild("MyIcon")
         *public icon: IgxIconComponent;
         *ngAfterViewInit() {
         *    let iconColor = this.icon.getIconColor;
         * }
         * ```
         */
        get: /**
         *  An accessor that returns the opposite value of the `iconColor` property.
         * ```typescript
         * \@ViewChild("MyIcon")
         * public icon: IgxIconComponent;
         * ngAfterViewInit() {
         *    let iconColor = this.icon.getIconColor;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.iconColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxIconComponent.prototype, "getIconName", {
        /**
         *  An accessor that returns the value of the iconName property.
         *```typescript
         *@ViewChild("MyIcon")
         *public icon: IgxIconComponent;
         *ngAfterViewInit() {
         *    let iconName = this.icon.getIconName;
         * }
         * ```
         */
        get: /**
         *  An accessor that returns the value of the iconName property.
         * ```typescript
         * \@ViewChild("MyIcon")
         * public icon: IgxIconComponent;
         * ngAfterViewInit() {
         *    let iconName = this.icon.getIconName;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.iconName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxIconComponent.prototype, "getSvgKey", {
        /**
         *  An accessor that returns the key of the SVG image.
         *  The key consists of the fontSet and the iconName separated by underscore.
         *```typescript
         *@ViewChild("MyIcon")
         *public icon: IgxIconComponent;
         *ngAfterViewInit() {
         *    let svgKey = this.icon.getSvgKey;
         * }
         * ```
         */
        get: /**
         *  An accessor that returns the key of the SVG image.
         *  The key consists of the fontSet and the iconName separated by underscore.
         * ```typescript
         * \@ViewChild("MyIcon")
         * public icon: IgxIconComponent;
         * ngAfterViewInit() {
         *    let svgKey = this.icon.getSvgKey;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (this.iconService.isSvgIconCached(this.iconName, this.font)) {
                return '#' + this.iconService.getSvgIconKey(this.iconName, this.font);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxIconComponent.prototype, "template", {
        /**
         *   An accessor that returns a TemplateRef to explicit, svg or no ligature.
         *```typescript
         *@ViewChild("MyIcon")
         *public icon: IgxIconComponent;
         *ngAfterViewInit() {
         *    let iconTemplate = this.icon.template;
         * }
         * ```
         */
        get: /**
         *   An accessor that returns a TemplateRef to explicit, svg or no ligature.
         * ```typescript
         * \@ViewChild("MyIcon")
         * public icon: IgxIconComponent;
         * ngAfterViewInit() {
         *    let iconTemplate = this.icon.template;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (this.iconName) {
                if (this.iconService.isSvgIconCached(this.iconName, this.font)) {
                    return this.svgImage;
                }
                return this.noLigature;
            }
            return this.explicitLigature;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxIconComponent.prototype.updateIconClass = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var className = this.iconService.fontSetClassName(this.font);
        this.el.nativeElement.classList.add(className);
        if (this.iconName && !this.iconService.isSvgIconCached(this.iconName, this.font)) {
            this.el.nativeElement.classList.add(this.iconName);
        }
    };
    IgxIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-icon',
                    template: "<ng-template #noLigature></ng-template>\n\n<ng-template #explicitLigature>\n    <ng-content></ng-content>\n</ng-template>\n\n<ng-template #svgImage>\n    <svg>\n        <use [attr.href]=\"getSvgKey\"></use>\n    </svg>\n</ng-template>\n\n<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IgxIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: IgxIconService }
    ]; };
    IgxIconComponent.propDecorators = {
        noLigature: [{ type: ViewChild, args: ['noLigature', { read: TemplateRef, static: true },] }],
        explicitLigature: [{ type: ViewChild, args: ['explicitLigature', { read: TemplateRef, static: true },] }],
        svgImage: [{ type: ViewChild, args: ['svgImage', { read: TemplateRef, static: true },] }],
        cssClass: [{ type: HostBinding, args: ['class.igx-icon',] }],
        ariaHidden: [{ type: HostBinding, args: ['attr.aria-hidden',] }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        font: [{ type: Input, args: ['fontSet',] }],
        active: [{ type: Input, args: ['isActive',] }],
        iconColor: [{ type: Input, args: ['color',] }],
        iconName: [{ type: Input, args: ['name',] }],
        getInactive: [{ type: HostBinding, args: ['class.igx-icon--inactive',] }],
        getIconColor: [{ type: HostBinding, args: ['style.color',] }]
    };
    return IgxIconComponent;
}());
export { IgxIconComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxIconComponent.prototype.noLigature;
    /**
     * @type {?}
     * @private
     */
    IgxIconComponent.prototype.explicitLigature;
    /**
     * @type {?}
     * @private
     */
    IgxIconComponent.prototype.svgImage;
    /**
     *  This allows you to change the value of `class.igx-icon`. By default it's `igx-icon`.
     * ```typescript
     * \@ViewChild("MyIcon") public icon: IgxIconComponent;
     * constructor(private cdRef:ChangeDetectorRef) {}
     * ngAfterViewInit() {
     *    this.icon.cssClass = "";
     *    this.cdRef.detectChanges();
     * }
     * ```
     * @type {?}
     */
    IgxIconComponent.prototype.cssClass;
    /**
     *  This allows you to disable the `aria-hidden` attribute. By default it's applied.
     * ```typescript
     * \@ViewChild("MyIcon") public icon: IgxIconComponent;
     * constructor(private cdRef:ChangeDetectorRef) {}
     * ngAfterViewInit() {
     *    this.icon.ariaHidden = false;
     *    this.cdRef.detectChanges();
     * }
     * ```
     * @type {?}
     */
    IgxIconComponent.prototype.ariaHidden;
    /**
     *  An \@Input property that sets the value of the `id` attribute.
     * ```html
     * <igx-icon id="igx-icon-1" fontSet="material" color="blue" [isActive]="false">settings</igx-icon>
     * ```
     * @type {?}
     */
    IgxIconComponent.prototype.id;
    /**
     *  An \@Input property that sets the value of the `fontSet`. By default it's "material".
     * ```html
     * <igx-icon fontSet="material" color="blue" [isActive]="false">settings</igx-icon>
     * ```
     * @type {?}
     */
    IgxIconComponent.prototype.font;
    /**
     *  An \@Input property that allows you to disable the `active` property. By default it's applied.
     * ```html
     * <igx-icon [isActive]="false" fontSet="material" color="blue">settings</igx-icon>
     * ```
     * @type {?}
     */
    IgxIconComponent.prototype.active;
    /**
     *  An \@Input property that allows you to change the `iconColor` of the icon.
     * ```html
     * <igx-icon color="blue" [isActive]="true" fontSet="material">settings</igx-icon>
     * ```
     * @type {?}
     */
    IgxIconComponent.prototype.iconColor;
    /**
     *  An \@Input property that allows you to set the `iconName` of the icon.
     *  The `iconName` can be set using the `name` property.
     * ```html
     * <igx-icon color="blue" [isActive]="true" fontSet="material">question_answer</igx-icon>
     * ```
     * @type {?}
     */
    IgxIconComponent.prototype.iconName;
    /**
     * An ElementRef property of the `igx-icon` component.
     * @type {?}
     */
    IgxIconComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    IgxIconComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    IgxIconComponent.prototype.iconService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQWU1QyxPQUFPLEdBQUcsQ0FBQztBQUVmO0lBK0ZJLDBCQUFvQixHQUFlLEVBQVUsV0FBMkI7UUFBcEQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjs7Ozs7Ozs7Ozs7O1FBcEVqRSxhQUFRLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7UUFjdEIsZUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7OztRQVVsQixPQUFFLEdBQUcsY0FBWSxPQUFPLEVBQUksQ0FBQzs7Ozs7OztRQWtCN0IsV0FBTSxHQUFHLElBQUksQ0FBQztRQTJCakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG1DQUFROzs7O0lBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQVlELHNCQUFJLHdDQUFVO1FBVmQ7Ozs7Ozs7OztXQVNHOzs7Ozs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQVlELHNC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T0FBTzsyQkFVYixLQUFLLFNBQUMsTUFBTTs4QkEyRFosV0FBVyxTQUFDLDBCQUEwQjsrQkFldEMsV0FBVyxTQUFDLGFBQWE7O0lBdUU5Qix1QkFBQztDQUFBLEFBeE9ELElBd09DO1NBbk9ZLGdCQUFnQjs7Ozs7O0lBQ3pCLHNDQUM2Qzs7Ozs7SUFFN0MsNENBQ21EOzs7OztJQUVuRCxvQ0FDMkM7Ozs7Ozs7Ozs7Ozs7SUFhM0Msb0NBQzZCOzs7Ozs7Ozs7Ozs7O0lBYTdCLHNDQUN5Qjs7Ozs7Ozs7SUFRekIsOEJBRW9DOzs7Ozs7OztJQVFwQyxnQ0FDb0I7Ozs7Ozs7O0lBUXBCLGtDQUNxQjs7Ozs7Ozs7SUFRckIscUNBQ3lCOzs7Ozs7Ozs7SUFTekIsb0NBQ3dCOzs7OztJQUt4Qiw4QkFBc0I7Ozs7O0lBRVYsK0JBQXVCOzs7OztJQUFFLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEljb25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIEljb24qKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvaWNvbi5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgSWNvbiBtYWtlcyBpdCBlYXN5IGZvciBkZXZlbG9wZXJzIHRvIGluY2x1ZGUgbWF0ZXJpYWwgZGVzaWduIGljb25zIGRpcmVjdGx5IGluIHRoZWlyIG1hcmt1cC4gVGhlIGljb25zXG4gKiBzdXBwb3J0IGN1c3RvbSBjb2xvcnMgYW5kIGNhbiBiZSBtYXJrZWQgYXMgYWN0aXZlIG9yIGRpc2FibGVkIHVzaW5nIHRoZSBgaXNBY3RpdmVgIHByb3BlcnR5LiBUaGlzIHdpbGwgY2hhbmdlIHRoZSBhcHBlYXJhbmNlXG4gKiBvZiB0aGUgaWNvbi5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1pY29uIGNvbG9yPVwiIzAwZmYwMFwiIGlzQWN0aXZlPVwidHJ1ZVwiPmhvbWU8L2lneC1pY29uPlxuICogYGBgXG4gKi9cbmxldCBORVhUX0lEID0gMDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtaWNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICdpY29uLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoJ25vTGlnYXR1cmUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIG5vTGlnYXR1cmU6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2V4cGxpY2l0TGlnYXR1cmUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIGV4cGxpY2l0TGlnYXR1cmU6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcblxuICAgIEBWaWV3Q2hpbGQoJ3N2Z0ltYWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBzdmdJbWFnZTogVGVtcGxhdGVSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogIFRoaXMgYWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIHZhbHVlIG9mIGBjbGFzcy5pZ3gtaWNvbmAuIEJ5IGRlZmF1bHQgaXQncyBgaWd4LWljb25gLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15SWNvblwiKSBwdWJsaWMgaWNvbjogSWd4SWNvbkNvbXBvbmVudDtcbiAgICAgKmNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6Q2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICogICAgdGhpcy5pY29uLmNzc0NsYXNzID0gXCJcIjtcbiAgICAgKiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1pY29uJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWljb24nO1xuXG4gICAgLyoqXG4gICAgICogIFRoaXMgYWxsb3dzIHlvdSB0byBkaXNhYmxlIHRoZSBgYXJpYS1oaWRkZW5gIGF0dHJpYnV0ZS4gQnkgZGVmYXVsdCBpdCdzIGFwcGxpZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlJY29uXCIpIHB1YmxpYyBpY29uOiBJZ3hJY29uQ29tcG9uZW50O1xuICAgICAqY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjpDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgKiAgICB0aGlzLmljb24uYXJpYUhpZGRlbiA9IGZhbHNlO1xuICAgICAqICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhpZGRlbicpXG4gICAgcHVibGljIGFyaWFIaWRkZW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgKiAgQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBpZGAgYXR0cmlidXRlLlxuICAgICpgYGBodG1sXG4gICAgKjxpZ3gtaWNvbiBpZD1cImlneC1pY29uLTFcIiBmb250U2V0PVwibWF0ZXJpYWxcIiBjb2xvcj1cImJsdWVcIiBbaXNBY3RpdmVdPVwiZmFsc2VcIj5zZXR0aW5nczwvaWd4LWljb24+XG4gICAgKmBgYFxuICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtaWNvbi0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgKiAgQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBmb250U2V0YC4gQnkgZGVmYXVsdCBpdCdzIFwibWF0ZXJpYWxcIi5cbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LWljb24gZm9udFNldD1cIm1hdGVyaWFsXCIgY29sb3I9XCJibHVlXCIgW2lzQWN0aXZlXT1cImZhbHNlXCI+c2V0dGluZ3M8L2lneC1pY29uPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgnZm9udFNldCcpXG4gICAgcHVibGljIGZvbnQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICogIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB5b3UgdG8gZGlzYWJsZSB0aGUgYGFjdGl2ZWAgcHJvcGVydHkuIEJ5IGRlZmF1bHQgaXQncyBhcHBsaWVkLlxuICAgICpgYGBodG1sXG4gICAgKjxpZ3gtaWNvbiBbaXNBY3RpdmVdPVwiZmFsc2VcIiBmb250U2V0PVwibWF0ZXJpYWxcIiBjb2xvcj1cImJsdWVcIj5zZXR0aW5nczwvaWd4LWljb24+XG4gICAgKmBgYFxuICAgICovXG4gICAgQElucHV0KCdpc0FjdGl2ZScpXG4gICAgcHVibGljIGFjdGl2ZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAqICBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBhbGxvd3MgeW91IHRvIGNoYW5nZSB0aGUgYGljb25Db2xvcmAgb2YgdGhlIGljb24uXG4gICAgKmBgYGh0bWxcbiAgICAqPGlneC1pY29uIGNvbG9yPVwiYmx1ZVwiIFtpc0FjdGl2ZV09XCJ0cnVlXCIgZm9udFNldD1cIm1hdGVyaWFsXCI+c2V0dGluZ3M8L2lneC1pY29uPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgnY29sb3InKVxuICAgIHB1YmxpYyBpY29uQ29sb3I6IHN0cmluZztcblxuICAgIC8qKlxuICAgICogIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB5b3UgdG8gc2V0IHRoZSBgaWNvbk5hbWVgIG9mIHRoZSBpY29uLlxuICAgICogIFRoZSBgaWNvbk5hbWVgIGNhbiBiZSBzZXQgdXNpbmcgdGhlIGBuYW1lYCBwcm9wZXJ0eS5cbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LWljb24gY29sb3I9XCJibHVlXCIgW2lzQWN0aXZlXT1cInRydWVcIiBmb250U2V0PVwibWF0ZXJpYWxcIj5xdWVzdGlvbl9hbnN3ZXI8L2lneC1pY29uPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgnbmFtZScpXG4gICAgcHVibGljIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBFbGVtZW50UmVmIHByb3BlcnR5IG9mIHRoZSBgaWd4LWljb25gIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBpY29uU2VydmljZTogSWd4SWNvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5lbCA9IF9lbDtcbiAgICAgICAgdGhpcy5mb250ID0gdGhpcy5pY29uU2VydmljZS5kZWZhdWx0Rm9udFNldDtcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS5yZWdpc3RlckZvbnRTZXRBbGlhcygnbWF0ZXJpYWwnLCAnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEFuIGFjY2Vzc29yIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZvbnQgcHJvcGVydHkuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlJY29uXCIpXG4gICAgICpwdWJsaWMgaWNvbjogSWd4SWNvbkNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgKiAgICBsZXQgaWNvbkZvbnQgPSB0aGlzLmljb24uZ2V0Rm9udFNldDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IGdldEZvbnRTZXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgYWN0aXZlIHByb3BlcnR5LlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15SWNvblwiKVxuICAgICAqcHVibGljIGljb246IElneEljb25Db21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICogICAgbGV0IGljb25BY3RpdmUgPSB0aGlzLmljb24uZ2V0QWN0aXZlO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgZ2V0QWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEFuIGFjY2Vzc29yIHRoYXQgcmV0dXJucyBpbmFjdGl2ZSBwcm9wZXJ0eS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUljb25cIilcbiAgICAgKnB1YmxpYyBpY29uOiBJZ3hJY29uQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAqICAgIGxldCBpY29uQWN0aXZlID0gdGhpcy5pY29uLmdldEluYWN0aXZlO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1pY29uLS1pbmFjdGl2ZScpXG4gICAgZ2V0IGdldEluYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuYWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBBbiBhY2Nlc3NvciB0aGF0IHJldHVybnMgdGhlIG9wcG9zaXRlIHZhbHVlIG9mIHRoZSBgaWNvbkNvbG9yYCBwcm9wZXJ0eS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUljb25cIilcbiAgICAgKnB1YmxpYyBpY29uOiBJZ3hJY29uQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAqICAgIGxldCBpY29uQ29sb3IgPSB0aGlzLmljb24uZ2V0SWNvbkNvbG9yO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmNvbG9yJylcbiAgICBnZXQgZ2V0SWNvbkNvbG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmljb25Db2xvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaWNvbk5hbWUgcHJvcGVydHkuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlJY29uXCIpXG4gICAgICpwdWJsaWMgaWNvbjogSWd4SWNvbkNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgKiAgICBsZXQgaWNvbk5hbWUgPSB0aGlzLmljb24uZ2V0SWNvbk5hbWU7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBnZXRJY29uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uTmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHRoZSBrZXkgb2YgdGhlIFNWRyBpbWFnZS5cbiAgICAgKiAgVGhlIGtleSBjb25zaXN0cyBvZiB0aGUgZm9udFNldCBhbmQgdGhlIGljb25OYW1lIHNlcGFyYXRlZCBieSB1bmRlcnNjb3JlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15SWNvblwiKVxuICAgICAqcHVibGljIGljb246IElneEljb25Db21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICogICAgbGV0IHN2Z0tleSA9IHRoaXMuaWNvbi5nZXRTdmdLZXk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBnZXRTdmdLZXkoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuaWNvblNlcnZpY2UuaXNTdmdJY29uQ2FjaGVkKHRoaXMuaWNvbk5hbWUsIHRoaXMuZm9udCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnIycgKyB0aGlzLmljb25TZXJ2aWNlLmdldFN2Z0ljb25LZXkodGhpcy5pY29uTmFtZSwgdGhpcy5mb250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICAgQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIGEgVGVtcGxhdGVSZWYgdG8gZXhwbGljaXQsIHN2ZyBvciBubyBsaWdhdHVyZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUljb25cIilcbiAgICAgKnB1YmxpYyBpY29uOiBJZ3hJY29uQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAqICAgIGxldCBpY29uVGVtcGxhdGUgPSB0aGlzLmljb24udGVtcGxhdGU7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxIVE1MRWxlbWVudD4ge1xuICAgICAgICBpZiAodGhpcy5pY29uTmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaWNvblNlcnZpY2UuaXNTdmdJY29uQ2FjaGVkKHRoaXMuaWNvbk5hbWUsIHRoaXMuZm9udCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdmdJbWFnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9MaWdhdHVyZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV4cGxpY2l0TGlnYXR1cmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlSWNvbkNsYXNzKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmljb25TZXJ2aWNlLmZvbnRTZXRDbGFzc05hbWUodGhpcy5mb250KTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAodGhpcy5pY29uTmFtZSAmJiAhdGhpcy5pY29uU2VydmljZS5pc1N2Z0ljb25DYWNoZWQodGhpcy5pY29uTmFtZSwgdGhpcy5mb250KSkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5pY29uTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
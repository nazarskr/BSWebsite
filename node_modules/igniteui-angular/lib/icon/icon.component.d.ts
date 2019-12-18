import { ElementRef, OnInit, TemplateRef } from '@angular/core';
import { IgxIconService } from './icon.service';
export declare class IgxIconComponent implements OnInit {
    private _el;
    private iconService;
    private noLigature;
    private explicitLigature;
    private svgImage;
    /**
     *  This allows you to change the value of `class.igx-icon`. By default it's `igx-icon`.
     *```typescript
     *@ViewChild("MyIcon") public icon: IgxIconComponent;
     *constructor(private cdRef:ChangeDetectorRef) {}
     *ngAfterViewInit() {
     *    this.icon.cssClass = "";
     *    this.cdRef.detectChanges();
     *}
     * ```
     */
    cssClass: string;
    /**
     *  This allows you to disable the `aria-hidden` attribute. By default it's applied.
     *```typescript
     *@ViewChild("MyIcon") public icon: IgxIconComponent;
     *constructor(private cdRef:ChangeDetectorRef) {}
     *ngAfterViewInit() {
     *    this.icon.ariaHidden = false;
     *    this.cdRef.detectChanges();
     *}
     * ```
     */
    ariaHidden: boolean;
    /**
    *  An @Input property that sets the value of the `id` attribute.
    *```html
    *<igx-icon id="igx-icon-1" fontSet="material" color="blue" [isActive]="false">settings</igx-icon>
    *```
    */
    id: string;
    /**
    *  An @Input property that sets the value of the `fontSet`. By default it's "material".
    *```html
    *<igx-icon fontSet="material" color="blue" [isActive]="false">settings</igx-icon>
    *```
    */
    font: string;
    /**
    *  An @Input property that allows you to disable the `active` property. By default it's applied.
    *```html
    *<igx-icon [isActive]="false" fontSet="material" color="blue">settings</igx-icon>
    *```
    */
    active: boolean;
    /**
    *  An @Input property that allows you to change the `iconColor` of the icon.
    *```html
    *<igx-icon color="blue" [isActive]="true" fontSet="material">settings</igx-icon>
    *```
    */
    iconColor: string;
    /**
    *  An @Input property that allows you to set the `iconName` of the icon.
    *  The `iconName` can be set using the `name` property.
    *```html
    *<igx-icon color="blue" [isActive]="true" fontSet="material">question_answer</igx-icon>
    *```
    */
    iconName: string;
    /**
     * An ElementRef property of the `igx-icon` component.
     */
    el: ElementRef;
    constructor(_el: ElementRef, iconService: IgxIconService);
    /**
     * @hidden
     */
    ngOnInit(): void;
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
    readonly getFontSet: string;
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
    readonly getActive: boolean;
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
    readonly getInactive: boolean;
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
    readonly getIconColor: string;
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
    readonly getIconName: string;
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
    readonly getSvgKey: string;
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
    readonly template: TemplateRef<HTMLElement>;
    /**
     * @hidden
     */
    private updateIconClass;
}

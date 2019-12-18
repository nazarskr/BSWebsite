import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
export declare class IgxRippleDirective {
    protected builder: AnimationBuilder;
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    private zone;
    /**
     * Sets/gets the ripple target.
     * ```html
     * <div  #rippleContainer class="div-1" igxRipple [igxRippleTarget] = "'.div-1'"></div>
     * ```
     * ```typescript
     * @ViewChild('rippleContainer', {read: IgxRippleDirective})
     * public ripple: IgxRippleDirective;
     * let rippleTarget = this.ripple.rippleTarget;
     * ```
     * Can set the ripple to activate on a child element inside the parent where igxRipple is defined.
     * ```html
     * <div #rippleContainer [igxRippleTarget] = "'#child"'>
     *  <button id="child">Click</button>
     * </div>
     * ```
     * @memberof IgxRippleDirective
     */
    rippleTarget: string;
    /**
     * Sets/gets the ripple color.
     * ```html
     * <button #rippleContainer [igxRipple] = "'red'" ></button>
     * ```
     * ```typescript
     * @ViewChild('rippleContainer', {read: IgxRippleDirective})
     * public ripple: IgxRippleDirective;
     * let rippleColor = this.ripple.rippleColor;
     * ```
     * @memberof IgxRippleDirective
     */
    rippleColor: string;
    /**
     * Sets/gets the ripple duration(in milliseconds).
     * Default value is `600`.
     * ```html
     * <button #rippleContainer igxRipple [igxRippleDuration] = "800"></button>
     * ```
     * ```typescript
     * @ViewChild('rippleContainer', {read: IgxRippleDirective})
     * public ripple: IgxRippleDirective;
     * let rippleDuration = this.ripple.rippleDuration;
     * ```
     * @memberof IgxRippleDirective
     */
    rippleDuration: number;
    /**
     * Enables/disables the ripple to be centered.
     * ```html
     * <button #rippleContainer igxRipple [igxRippleCentered] = "true"></button>
     * ```
     * @memberof IgxRippleDirective
     */
    centered: boolean;
    /**
     * Sets/gets whether the ripple is disabled.
     * Default value is `false`.
     * ```html
     * <button #rippleContainer igxRipple [igxRippleDisabled] = "true"></button>
     * ```
     * ```typescript
     * @ViewChild('rippleContainer', {read: IgxRippleDirective})
     * public ripple: IgxRippleDirective;
     * let isRippleDisabled = this.ripple.rippleDisabled;
     * ```
     * @memberof IgxRippleDirective
     */
    rippleDisabled: boolean;
    protected readonly nativeElement: HTMLElement;
    private rippleElementClass;
    private rippleHostClass;
    private _centered;
    private animationQueue;
    constructor(builder: AnimationBuilder, elementRef: ElementRef, renderer: Renderer2, zone: NgZone);
    /**
     *@hidden
     */
    onMouseDown(event: any): void;
    private setStyles;
    private _ripple;
}
/**
 * @hidden
 */
export declare class IgxRippleModule {
}

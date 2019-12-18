import { ElementRef } from '@angular/core';
export declare class IgxFocusDirective {
    private element;
    private comp?;
    private focusState;
    /**
     * Returns the state of the igxFocus.
     * ```typescript
     * @ViewChild('focusContainer', {read: IgxFocusDirective})
     * public igxFocus: IgxFocusDirective;
     * let isFocusOn = this.igxFocus.focused;
     * ```
     * @memberof IgxFocusDirective
     */
    /**
    * Sets the state of the igxFocus.
    * ```html
    * <igx-input-group >
    *  <input #focusContainer igxInput [igxFocus]="true"/>
    * </igx-input-group>
    * ```
    * @memberof IgxFocusDirective
    */
    focused: boolean;
    /**
     * Gets the native element of the igxFocus.
     * ```typescript
     * @ViewChild('focusContainer', {read: IgxFocusDirective})
     * public igxFocus: IgxFocusDirective;
     * let igxFocusNativeElement = this.igxFocus.nativeElement;
     * ```
     * @memberof IgxFocusDirective
     */
    readonly nativeElement: any;
    constructor(element: ElementRef, comp?: any[]);
    /**
     * Triggers the igxFocus state.
     * ```typescript
     * @ViewChild('focusContainer', {read: IgxFocusDirective})
     * public igxFocus: IgxFocusDirective;
     * this.igxFocus.trigger();
     * ```
     * @memberof IgxFocusDirective
     */
    trigger(): void;
}
/**
 * @hidden
 */
export declare class IgxFocusModule {
}

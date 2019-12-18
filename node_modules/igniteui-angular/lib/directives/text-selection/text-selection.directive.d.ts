import { ElementRef } from '@angular/core';
export declare class IgxTextSelectionDirective {
    private element;
    private selectionState;
    /**
     * Returns whether the input element is selectable through the directive.
     *
     * ```typescript
     * // get
     * @ViewChild('firstName',
     *  {read: IgxTextSelectionDirective})
     * public firstName: IgxTextSelectionDirective;
     *
     * public getFirstNameSelectionStatus() {
     *  return this.firstName.selected;
     * }
     * ```
     */
    /**
    *  Determines whether the input element could be selected through the directive.
    *
    *```html
    * <!--set-->
    * <input
    *   type="text"
    *   id="firstName"
    *   [igxTextSelection]="true">
    * </input>
    *
    * <input
    *   type="text"
    *   id="lastName"
    *   igxTextSelection
    *   [selected]="true">
    * </input>
    * ```
    */
    selected: boolean;
    /**
     * Returns the nativeElement of the element where the directive was applied.
     *
     * ```html
     * <input
     *   type="text"
    *    id="firstName"
     *   igxTextSelection>
     * </input>
     * ```
     *
     * ```typescript
     * @ViewChild('firstName',
     *  {read: IgxTextSelectionDirective})
     * public inputElement: IgxTextSelectionDirective;
     *
     * public getNativeElement() {
     *  return this.inputElement.nativeElement;
     * }
     * ```
     */
    readonly nativeElement: any;
    /**
     * @hidden
     */
    onFocus(): void;
    constructor(element: ElementRef);
    /**
     * Triggers the selection of the element if it is marked as selectable.
     *
     * ```html
     * <input
     *   type="text"
     *   id="firstName"
     *   igxTextSelection>
     * </input>
     * ```
     *
     * ```typescript
     * @ViewChild('firstName',
     *  {read: IgxTextSelectionDirective})
     * public inputElement: IgxTextSelectionDirective;
     *
     * public triggerElementSelection() {
     *  this.inputElement.trigger();
     * }
     * ```
     */
    trigger(): void;
}
/**
 * @hidden
 */
export declare class IgxTextSelectionModule {
}

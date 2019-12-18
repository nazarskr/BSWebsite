/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';
export class IgxTextSelectionDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.selectionState = true;
    }
    /**
     * Returns whether the input element is selectable through the directive.
     *
     * ```typescript
     * // get
     * \@ViewChild('firstName',
     *  {read: IgxTextSelectionDirective})
     * public firstName: IgxTextSelectionDirective;
     *
     * public getFirstNameSelectionStatus() {
     *  return this.firstName.selected;
     * }
     * ```
     * @return {?}
     */
    get selected() {
        return this.selectionState;
    }
    /**
     *  Determines whether the input element could be selected through the directive.
     *
     * ```html
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
     * @param {?} val
     * @return {?}
     */
    set selected(val) {
        this.selectionState = val;
    }
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
     * \@ViewChild('firstName',
     *  {read: IgxTextSelectionDirective})
     * public inputElement: IgxTextSelectionDirective;
     *
     * public getNativeElement() {
     *  return this.inputElement.nativeElement;
     * }
     * ```
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * @hidden
     * @return {?}
     */
    onFocus() {
        this.trigger();
    }
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
     * \@ViewChild('firstName',
     *  {read: IgxTextSelectionDirective})
     * public inputElement: IgxTextSelectionDirective;
     *
     * public triggerElementSelection() {
     *  this.inputElement.trigger();
     * }
     * ```
     * @return {?}
     */
    trigger() {
        if (this.selected && this.nativeElement.value.length) {
            requestAnimationFrame(() => this.nativeElement.setSelectionRange(0, this.nativeElement.value.length));
        }
    }
}
IgxTextSelectionDirective.decorators = [
    { type: Directive, args: [{
                exportAs: 'igxTextSelection',
                selector: '[igxTextSelection]'
            },] }
];
/** @nocollapse */
IgxTextSelectionDirective.ctorParameters = () => [
    { type: ElementRef }
];
IgxTextSelectionDirective.propDecorators = {
    selected: [{ type: Input, args: ['igxTextSelection',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTextSelectionDirective.prototype.selectionState;
    /**
     * @type {?}
     * @private
     */
    IgxTextSelectionDirective.prototype.element;
}
/**
 * @hidden
 */
export class IgxTextSelectionModule {
}
IgxTextSelectionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxTextSelectionDirective],
                exports: [IgxTextSelectionDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1zZWxlY3Rpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RleHQtc2VsZWN0aW9uL3RleHQtc2VsZWN0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNckYsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQStFbEMsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdFL0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7SUE2RWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQTdENUMsSUFDSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkQsSUFBSSxRQUFRLENBQUMsR0FBWTtRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBTUQsT0FBTztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCRCxPQUFPO1FBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNsRCxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3pHO0lBQ0wsQ0FBQzs7O1lBOUdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDOzs7O1lBTG1CLFVBQVU7Ozt1QkF3QnpCLEtBQUssU0FBQyxrQkFBa0I7c0JBd0R4QixZQUFZLFNBQUMsT0FBTzs7Ozs7OztJQXhFckIsbURBQThCOzs7OztJQTZFbEIsNENBQTJCOzs7OztBQXFDM0MsTUFBTSxPQUFPLHNCQUFzQjs7O1lBSmxDLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIGV4cG9ydEFzOiAnaWd4VGV4dFNlbGVjdGlvbicsXG4gICAgc2VsZWN0b3I6ICdbaWd4VGV4dFNlbGVjdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIElneFRleHRTZWxlY3Rpb25EaXJlY3RpdmUge1xuXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb25TdGF0ZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGlucHV0IGVsZW1lbnQgaXMgc2VsZWN0YWJsZSB0aHJvdWdoIHRoZSBkaXJlY3RpdmUuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogQFZpZXdDaGlsZCgnZmlyc3ROYW1lJyxcbiAgICAgKiAge3JlYWQ6IElneFRleHRTZWxlY3Rpb25EaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBmaXJzdE5hbWU6IElneFRleHRTZWxlY3Rpb25EaXJlY3RpdmU7XG4gICAgICpcbiAgICAgKiBwdWJsaWMgZ2V0Rmlyc3ROYW1lU2VsZWN0aW9uU3RhdHVzKCkge1xuICAgICAqICByZXR1cm4gdGhpcy5maXJzdE5hbWUuc2VsZWN0ZWQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4VGV4dFNlbGVjdGlvbicpXG4gICAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25TdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCBlbGVtZW50IGNvdWxkIGJlIHNlbGVjdGVkIHRocm91Z2ggdGhlIGRpcmVjdGl2ZS5cbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8aW5wdXRcbiAgICAgKiAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgKiAgIGlkPVwiZmlyc3ROYW1lXCJcbiAgICAgKiAgIFtpZ3hUZXh0U2VsZWN0aW9uXT1cInRydWVcIj5cbiAgICAgKiA8L2lucHV0PlxuICAgICAqXG4gICAgICogPGlucHV0XG4gICAgICogICB0eXBlPVwidGV4dFwiXG4gICAgICogICBpZD1cImxhc3ROYW1lXCJcbiAgICAgKiAgIGlneFRleHRTZWxlY3Rpb25cbiAgICAgKiAgIFtzZWxlY3RlZF09XCJ0cnVlXCI+XG4gICAgICogPC9pbnB1dD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBzZXQgc2VsZWN0ZWQodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhdGUgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmF0aXZlRWxlbWVudCBvZiB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZGlyZWN0aXZlIHdhcyBhcHBsaWVkLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpbnB1dFxuICAgICAqICAgdHlwZT1cInRleHRcIlxuICAgICogICAgaWQ9XCJmaXJzdE5hbWVcIlxuICAgICAqICAgaWd4VGV4dFNlbGVjdGlvbj5cbiAgICAgKiA8L2lucHV0PlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoJ2ZpcnN0TmFtZScsXG4gICAgICogIHtyZWFkOiBJZ3hUZXh0U2VsZWN0aW9uRGlyZWN0aXZlfSlcbiAgICAgKiBwdWJsaWMgaW5wdXRFbGVtZW50OiBJZ3hUZXh0U2VsZWN0aW9uRGlyZWN0aXZlO1xuICAgICAqXG4gICAgICogcHVibGljIGdldE5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICogIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7IH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHRoZSBzZWxlY3Rpb24gb2YgdGhlIGVsZW1lbnQgaWYgaXQgaXMgbWFya2VkIGFzIHNlbGVjdGFibGUuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0XG4gICAgICogICB0eXBlPVwidGV4dFwiXG4gICAgICogICBpZD1cImZpcnN0TmFtZVwiXG4gICAgICogICBpZ3hUZXh0U2VsZWN0aW9uPlxuICAgICAqIDwvaW5wdXQ+XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZCgnZmlyc3ROYW1lJyxcbiAgICAgKiAge3JlYWQ6IElneFRleHRTZWxlY3Rpb25EaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBpbnB1dEVsZW1lbnQ6IElneFRleHRTZWxlY3Rpb25EaXJlY3RpdmU7XG4gICAgICpcbiAgICAgKiBwdWJsaWMgdHJpZ2dlckVsZW1lbnRTZWxlY3Rpb24oKSB7XG4gICAgICogIHRoaXMuaW5wdXRFbGVtZW50LnRyaWdnZXIoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgdHJpZ2dlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFRleHRTZWxlY3Rpb25EaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hUZXh0U2VsZWN0aW9uRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hUZXh0U2VsZWN0aW9uTW9kdWxlIHsgfVxuIl19
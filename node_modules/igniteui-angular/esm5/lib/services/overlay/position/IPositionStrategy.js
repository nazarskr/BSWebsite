/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay_position.html)
 * Position strategies determine where to display the component in the provided IgxOverlayService.
 * @record
 */
export function IPositionStrategy() { }
if (false) {
    /**
     * PositionSettings to use when position the component in the overlay
     * @type {?}
     */
    IPositionStrategy.prototype.settings;
    /**
     * Position the element based on the PositionStrategy implementing this interface.
     * @param {?} contentElement The HTML element to be positioned
     * @param {?=} size Size of the element
     * @param {?=} document reference to the Document object
     * @param {?=} initialCall should be true if this is the initial call to the method
     * ```typescript
     * settings.positionStrategy.position(content, size, document, true);
     * ```
     * @return {?}
     */
    IPositionStrategy.prototype.position = function (contentElement, size, document, initialCall) { };
    /**
     * Clone the strategy instance.
     * ```typescript
     * settings.positionStrategy.clone();
     * ```
     * @return {?}
     */
    IPositionStrategy.prototype.clone = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBvc2l0aW9uU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL292ZXJsYXkvcG9zaXRpb24vSVBvc2l0aW9uU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsdUNBeUJDOzs7Ozs7SUFyQkcscUNBQTJCOzs7Ozs7Ozs7Ozs7SUFZMUIsa0dBQXFHOzs7Ozs7OztJQVFyRyxvREFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3NpdGlvblNldHRpbmdzLCBTaXplIH0gZnJvbSAnLi8uLi91dGlsaXRpZXMnO1xuXG4vKipcbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9vdmVybGF5X3Bvc2l0aW9uLmh0bWwpXG4gKiBQb3NpdGlvbiBzdHJhdGVnaWVzIGRldGVybWluZSB3aGVyZSB0byBkaXNwbGF5IHRoZSBjb21wb25lbnQgaW4gdGhlIHByb3ZpZGVkIElneE92ZXJsYXlTZXJ2aWNlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvblNldHRpbmdzIHRvIHVzZSB3aGVuIHBvc2l0aW9uIHRoZSBjb21wb25lbnQgaW4gdGhlIG92ZXJsYXlcbiAgICAgKi9cbiAgICBzZXR0aW5nczogUG9zaXRpb25TZXR0aW5ncztcblxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIHRoZSBlbGVtZW50IGJhc2VkIG9uIHRoZSBQb3NpdGlvblN0cmF0ZWd5IGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZS5cbiAgICAgKiBAcGFyYW0gY29udGVudEVsZW1lbnQgVGhlIEhUTUwgZWxlbWVudCB0byBiZSBwb3NpdGlvbmVkXG4gICAgICogQHBhcmFtIHNpemUgU2l6ZSBvZiB0aGUgZWxlbWVudFxuICAgICAqIEBwYXJhbSBkb2N1bWVudCByZWZlcmVuY2UgdG8gdGhlIERvY3VtZW50IG9iamVjdFxuICAgICAqIEBwYXJhbSBpbml0aWFsQ2FsbCBzaG91bGQgYmUgdHJ1ZSBpZiB0aGlzIGlzIHRoZSBpbml0aWFsIGNhbGwgdG8gdGhlIG1ldGhvZFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBzZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnBvc2l0aW9uKGNvbnRlbnQsIHNpemUsIGRvY3VtZW50LCB0cnVlKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICAgcG9zaXRpb24oY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzaXplPzogU2l6ZSwgZG9jdW1lbnQ/OiBEb2N1bWVudCwgaW5pdGlhbENhbGw/OiBib29sZWFuKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIENsb25lIHRoZSBzdHJhdGVneSBpbnN0YW5jZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5jbG9uZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgICBjbG9uZSgpOiBJUG9zaXRpb25TdHJhdGVneTtcbn1cbiJdfQ==
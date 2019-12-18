/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Optional, Self, Input, HostListener, Inject } from '@angular/core';
import { IGX_DROPDOWN_BASE } from './drop-down.common';
import { IgxDropDownBase } from './drop-down.base';
import { DropDownActionKey } from './drop-down.common';
/**
 * Navigation Directive that handles keyboard events on its host and controls a targeted IgxDropDownBase component
 */
var IgxDropDownItemNavigationDirective = /** @class */ (function () {
    function IgxDropDownItemNavigationDirective(dropdown) {
        this.dropdown = dropdown;
        this._target = null;
    }
    Object.defineProperty(IgxDropDownItemNavigationDirective.prototype, "target", {
        /**
         * Gets the target of the navigation directive;
         *
         * ```typescript
         * // Get
         * export class MyComponent {
         *  ...
         *  @ContentChild(IgxDropDownNavigationDirective)
         *  navDirective: IgxDropDownNavigationDirective = null
         *  ...
         *  const navTarget: IgxDropDownBase = navDirective.navTarget
         * }
         * ```
         */
        get: /**
         * Gets the target of the navigation directive;
         *
         * ```typescript
         * // Get
         * export class MyComponent {
         *  ...
         * \@ContentChild(IgxDropDownNavigationDirective)
         *  navDirective: IgxDropDownNavigationDirective = null
         *  ...
         *  const navTarget: IgxDropDownBase = navDirective.navTarget
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._target;
        },
        /**
         * Sets the target of the navigation directive;
         * If no valid target is passed, it falls back to the drop down context
         *
         * ```html
         * <!-- Set -->
         * <input [igxDropDownItemNavigation]="dropdown" />
         * ...
         * <igx-drop-down #dropdown>
         * ...
         * </igx-drop-down>
         * ```
         */
        set: /**
         * Sets the target of the navigation directive;
         * If no valid target is passed, it falls back to the drop down context
         *
         * ```html
         * <!-- Set -->
         * <input [igxDropDownItemNavigation]="dropdown" />
         * ...
         * <igx-drop-down #dropdown>
         * ...
         * </igx-drop-down>
         * ```
         * @param {?} target
         * @return {?}
         */
        function (target) {
            this._target = target ? target : this.dropdown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Captures keydown events and calls the appropriate handlers on the target component
     */
    /**
     * Captures keydown events and calls the appropriate handlers on the target component
     * @param {?} event
     * @return {?}
     */
    IgxDropDownItemNavigationDirective.prototype.handleKeyDown = /**
     * Captures keydown events and calls the appropriate handlers on the target component
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            /** @type {?} */
            var key = event.key.toLowerCase();
            if (!this.target.collapsed) { // If dropdown is opened
                // If dropdown is opened
                /** @type {?} */
                var navKeys = ['esc', 'escape', 'enter', 'space', 'spacebar', ' ',
                    'arrowup', 'up', 'arrowdown', 'down', 'home', 'end'];
                if (navKeys.indexOf(key) === -1) { // If key has appropriate function in DD
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
            }
            else { // If dropdown is closed, do nothing
                return;
            }
            switch (key) {
                case 'esc':
                case 'escape':
                    this.target.onItemActionKey(DropDownActionKey.ESCAPE, event);
                    break;
                case 'enter':
                    this.target.onItemActionKey(DropDownActionKey.ENTER, event);
                    break;
                case 'space':
                case 'spacebar':
                case ' ':
                    this.target.onItemActionKey(DropDownActionKey.SPACE, event);
                    break;
                case 'arrowup':
                case 'up':
                    this.onArrowUpKeyDown();
                    break;
                case 'arrowdown':
                case 'down':
                    this.onArrowDownKeyDown();
                    break;
                case 'home':
                    this.onHomeKeyDown();
                    break;
                case 'end':
                    this.onEndKeyDown();
                    break;
                default:
                    return;
            }
        }
    };
    /**
     * Navigates to previous item
     */
    /**
     * Navigates to previous item
     * @return {?}
     */
    IgxDropDownItemNavigationDirective.prototype.onArrowDownKeyDown = /**
     * Navigates to previous item
     * @return {?}
     */
    function () {
        this.target.navigateNext();
    };
    /**
     * Navigates to previous item
     */
    /**
     * Navigates to previous item
     * @return {?}
     */
    IgxDropDownItemNavigationDirective.prototype.onArrowUpKeyDown = /**
     * Navigates to previous item
     * @return {?}
     */
    function () {
        this.target.navigatePrev();
    };
    /**
     * Navigates to target's last item
     */
    /**
     * Navigates to target's last item
     * @return {?}
     */
    IgxDropDownItemNavigationDirective.prototype.onEndKeyDown = /**
     * Navigates to target's last item
     * @return {?}
     */
    function () {
        this.target.navigateLast();
    };
    /**
     * Navigates to target's first item
     */
    /**
     * Navigates to target's first item
     * @return {?}
     */
    IgxDropDownItemNavigationDirective.prototype.onHomeKeyDown = /**
     * Navigates to target's first item
     * @return {?}
     */
    function () {
        this.target.navigateFirst();
    };
    IgxDropDownItemNavigationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxDropDownItemNavigation]'
                },] }
    ];
    /** @nocollapse */
    IgxDropDownItemNavigationDirective.ctorParameters = function () { return [
        { type: IgxDropDownBase, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [IGX_DROPDOWN_BASE,] }] }
    ]; };
    IgxDropDownItemNavigationDirective.propDecorators = {
        target: [{ type: Input, args: ['igxDropDownItemNavigation',] }],
        handleKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return IgxDropDownItemNavigationDirective;
}());
export { IgxDropDownItemNavigationDirective };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownItemNavigationDirective.prototype._target;
    /** @type {?} */
    IgxDropDownItemNavigationDirective.prototype.dropdown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLW5hdmlnYXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLW5hdmlnYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBS3ZEO0lBT0ksNENBQWtFLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBRmpGLFlBQU8sR0FBb0IsSUFBSSxDQUFDO0lBRXFELENBQUM7SUFnQmhHLHNCQUFJLHNEQUFNO1FBZFY7Ozs7Ozs7Ozs7Ozs7V0FhRzs7Ozs7Ozs7Ozs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7Ozs7Ozs7Ozs7O1dBWUc7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDSCxVQUNXLE1BQXVCO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkQsQ0FBQzs7O09BbEJBO0lBb0JEOztPQUVHOzs7Ozs7SUFFSCwwREFBYTs7Ozs7SUFEYixVQUNjLEtBQW9CO1FBQzlCLElBQUksS0FBSyxFQUFFOztnQkFDRCxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsd0JBQXdCOzs7b0JBQzVDLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRztvQkFDdkUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0JBQ2hELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLHdDQUF3QztvQkFDdkUsT0FBTztpQkFDVjtnQkFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMzQjtpQkFBTSxFQUFFLG9DQUFvQztnQkFDekMsT0FBTzthQUNWO1lBQ0QsUUFBUSxHQUFHLEVBQUU7Z0JBQ1QsS0FBSyxLQUFLLENBQUM7Z0JBQ1gsS0FBSyxRQUFRO29CQUNULElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDN0QsTUFBTTtnQkFDVixLQUFLLE9BQU87b0JBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM1RCxNQUFNO2dCQUNWLEtBQUssT0FBTyxDQUFDO2dCQUNiLEtBQUssVUFBVSxDQUFDO2dCQUNoQixLQUFLLEdBQUc7b0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM1RCxNQUFNO2dCQUNWLEtBQUssU0FBUyxDQUFDO2dCQUNmLEtBQUssSUFBSTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDeEIsTUFBTTtnQkFDVixLQUFLLFdBQVcsQ0FBQztnQkFDakIsS0FBSyxNQUFNO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMxQixNQUFNO2dCQUNWLEtBQUssTUFBTTtvQkFDUCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBQ1YsS0FBSyxLQUFLO29CQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsTUFBTTtnQkFDVjtvQkFDSSxPQUFPO2FBQ2Q7U0FDSjtJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwrREFBa0I7Ozs7SUFBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw2REFBZ0I7Ozs7SUFBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5REFBWTs7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMERBQWE7Ozs7SUFBYjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBMUhKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2lCQUMxQzs7OztnQkFSUSxlQUFlLHVCQWFQLElBQUksWUFBSSxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7O3lCQWlDeEQsS0FBSyxTQUFDLDJCQUEyQjtnQ0FRakMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUEyRXZDLHlDQUFDO0NBQUEsQUEzSEQsSUEySEM7U0F4SFksa0NBQWtDOzs7Ozs7SUFFM0MscURBQTBDOztJQUU5QixzREFBK0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9wdGlvbmFsLCBTZWxmLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElHWF9EUk9QRE9XTl9CQVNFIH0gZnJvbSAnLi9kcm9wLWRvd24uY29tbW9uJztcbmltcG9ydCB7IElEcm9wRG93bk5hdmlnYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3AtZG93bi5jb21tb24nO1xuaW1wb3J0IHsgSWd4RHJvcERvd25CYXNlIH0gZnJvbSAnLi9kcm9wLWRvd24uYmFzZSc7XG5pbXBvcnQgeyBEcm9wRG93bkFjdGlvbktleSB9IGZyb20gJy4vZHJvcC1kb3duLmNvbW1vbic7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBEaXJlY3RpdmUgdGhhdCBoYW5kbGVzIGtleWJvYXJkIGV2ZW50cyBvbiBpdHMgaG9zdCBhbmQgY29udHJvbHMgYSB0YXJnZXRlZCBJZ3hEcm9wRG93bkJhc2UgY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyb3BEb3duSXRlbU5hdmlnYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hEcm9wRG93bkl0ZW1OYXZpZ2F0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgSURyb3BEb3duTmF2aWdhdGlvbkRpcmVjdGl2ZSB7XG5cbiAgICBwcm90ZWN0ZWQgX3RhcmdldDogSWd4RHJvcERvd25CYXNlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKEBTZWxmKCkgQE9wdGlvbmFsKCkgQEluamVjdChJR1hfRFJPUERPV05fQkFTRSkgcHVibGljIGRyb3Bkb3duOiBJZ3hEcm9wRG93bkJhc2UpIHsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdGFyZ2V0IG9mIHRoZSBuYXZpZ2F0aW9uIGRpcmVjdGl2ZTtcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBHZXRcbiAgICAgKiBleHBvcnQgY2xhc3MgTXlDb21wb25lbnQge1xuICAgICAqICAuLi5cbiAgICAgKiAgQENvbnRlbnRDaGlsZChJZ3hEcm9wRG93bk5hdmlnYXRpb25EaXJlY3RpdmUpXG4gICAgICogIG5hdkRpcmVjdGl2ZTogSWd4RHJvcERvd25OYXZpZ2F0aW9uRGlyZWN0aXZlID0gbnVsbFxuICAgICAqICAuLi5cbiAgICAgKiAgY29uc3QgbmF2VGFyZ2V0OiBJZ3hEcm9wRG93bkJhc2UgPSBuYXZEaXJlY3RpdmUubmF2VGFyZ2V0XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKTogSWd4RHJvcERvd25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0YXJnZXQgb2YgdGhlIG5hdmlnYXRpb24gZGlyZWN0aXZlO1xuICAgICAqIElmIG5vIHZhbGlkIHRhcmdldCBpcyBwYXNzZWQsIGl0IGZhbGxzIGJhY2sgdG8gdGhlIGRyb3AgZG93biBjb250ZXh0XG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgLS0+XG4gICAgICogPGlucHV0IFtpZ3hEcm9wRG93bkl0ZW1OYXZpZ2F0aW9uXT1cImRyb3Bkb3duXCIgLz5cbiAgICAgKiAuLi5cbiAgICAgKiA8aWd4LWRyb3AtZG93biAjZHJvcGRvd24+XG4gICAgICogLi4uXG4gICAgICogPC9pZ3gtZHJvcC1kb3duPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4RHJvcERvd25JdGVtTmF2aWdhdGlvbicpXG4gICAgc2V0IHRhcmdldCh0YXJnZXQ6IElneERyb3BEb3duQmFzZSkge1xuICAgICAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQgPyB0YXJnZXQgOiB0aGlzLmRyb3Bkb3duO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhcHR1cmVzIGtleWRvd24gZXZlbnRzIGFuZCBjYWxscyB0aGUgYXBwcm9wcmlhdGUgaGFuZGxlcnMgb24gdGhlIHRhcmdldCBjb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBoYW5kbGVLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmNvbGxhcHNlZCkgeyAvLyBJZiBkcm9wZG93biBpcyBvcGVuZWRcbiAgICAgICAgICAgICAgICBjb25zdCBuYXZLZXlzID0gWydlc2MnLCAnZXNjYXBlJywgJ2VudGVyJywgJ3NwYWNlJywgJ3NwYWNlYmFyJywgJyAnLFxuICAgICAgICAgICAgJ2Fycm93dXAnLCAndXAnLCAnYXJyb3dkb3duJywgJ2Rvd24nLCAnaG9tZScsICdlbmQnXTtcbiAgICAgICAgICAgICAgICBpZiAobmF2S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7IC8vIElmIGtleSBoYXMgYXBwcm9wcmlhdGUgZnVuY3Rpb24gaW4gRERcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gSWYgZHJvcGRvd24gaXMgY2xvc2VkLCBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdlc2MnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VzY2FwZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm9uSXRlbUFjdGlvbktleShEcm9wRG93bkFjdGlvbktleS5FU0NBUEUsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW50ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5vbkl0ZW1BY3Rpb25LZXkoRHJvcERvd25BY3Rpb25LZXkuRU5URVIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNlYmFyJzpcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQub25JdGVtQWN0aW9uS2V5KERyb3BEb3duQWN0aW9uS2V5LlNQQUNFLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Fycm93dXAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFycm93VXBLZXlEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Fycm93ZG93bic6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd0Rvd25LZXlEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSG9tZUtleURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVuZEtleURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIHByZXZpb3VzIGl0ZW1cbiAgICAgKi9cbiAgICBvbkFycm93RG93bktleURvd24oKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0Lm5hdmlnYXRlTmV4dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byBwcmV2aW91cyBpdGVtXG4gICAgICovXG4gICAgb25BcnJvd1VwS2V5RG93bigpIHtcbiAgICAgICAgdGhpcy50YXJnZXQubmF2aWdhdGVQcmV2KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIHRhcmdldCdzIGxhc3QgaXRlbVxuICAgICAqL1xuICAgIG9uRW5kS2V5RG93bigpIHtcbiAgICAgICAgdGhpcy50YXJnZXQubmF2aWdhdGVMYXN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIHRhcmdldCdzIGZpcnN0IGl0ZW1cbiAgICAgKi9cbiAgICBvbkhvbWVLZXlEb3duKCkge1xuICAgICAgICB0aGlzLnRhcmdldC5uYXZpZ2F0ZUZpcnN0KCk7XG4gICAgfVxufVxuIl19
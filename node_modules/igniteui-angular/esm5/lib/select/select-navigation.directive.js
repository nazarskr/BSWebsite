/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxDropDownItemNavigationDirective } from '../drop-down/drop-down-navigation.directive';
import { Directive, Input, HostListener } from '@angular/core';
import { Subscription, timer } from 'rxjs';
/**
 * @hidden \@internal
 */
var IgxSelectItemNavigationDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxSelectItemNavigationDirective, _super);
    function IgxSelectItemNavigationDirective() {
        var _this = _super.call(this, null) || this;
        // tslint:disable:member-ordering
        _this.inputStream = '';
        _this.clearStream$ = Subscription.EMPTY;
        return _this;
    }
    /** Captures keydown events and calls the appropriate handlers on the target component */
    /**
     * Captures keydown events and calls the appropriate handlers on the target component
     * @param {?} event
     * @return {?}
     */
    IgxSelectItemNavigationDirective.prototype.handleKeyDown = /**
     * Captures keydown events and calls the appropriate handlers on the target component
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!event || event.shiftKey) {
            return;
        }
        /** @type {?} */
        var key = event.key.toLowerCase();
        if (event.altKey && (key === 'arrowdown' || key === 'arrowup' || key === 'down' || key === 'up')) {
            this.target.toggle();
            return;
        }
        if (this.target.collapsed) {
            switch (key) {
                case 'space':
                case 'spacebar':
                case ' ':
                case 'enter':
                    event.preventDefault();
                    this.target.open();
                    return;
                case 'arrowdown':
                case 'down':
                    this.target.navigateNext();
                    this.target.selectItem(this.target.focusedItem);
                    event.preventDefault();
                    return;
                case 'arrowup':
                case 'up':
                    this.target.navigatePrev();
                    this.target.selectItem(this.target.focusedItem);
                    event.preventDefault();
                    return;
                default:
                    break;
            }
        }
        _super.prototype.handleKeyDown.call(this, event);
    };
    /** Handle continuous letter typing navigation */
    /**
     * Handle continuous letter typing navigation
     * @param {?} event
     * @return {?}
     */
    IgxSelectItemNavigationDirective.prototype.captureKey = /**
     * Handle continuous letter typing navigation
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // relying only on key, available on all major browsers:
        // https://caniuse.com/#feat=keyboardevent-key (IE/Edge quirk doesn't affect letter typing)
        if (!event || !event.key || event.key.length > 1) {
            // ignore longer keys ('Alt', 'ArrowDown', etc)
            return;
        }
        this.clearStream$.unsubscribe();
        this.clearStream$ = timer(500).subscribe(function () {
            _this.inputStream = '';
        });
        this.inputStream += event.key;
        /** @type {?} */
        var focusedItem = (/** @type {?} */ (this.target.focusedItem));
        // select the item
        if (focusedItem && this.inputStream.length > 1 && focusedItem.itemText.toLowerCase().startsWith(this.inputStream.toLowerCase())) {
            return;
        }
        this.activateItemByText(this.inputStream);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    IgxSelectItemNavigationDirective.prototype.activateItemByText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        /** @type {?} */
        var items = (/** @type {?} */ (this.target.items));
        /** @type {?} */
        var activeItemIndex = items.indexOf((/** @type {?} */ (this.target.focusedItem))) || 0;
        // ^ this is focused OR selected if the dd is closed
        /** @type {?} */
        var nextItem = items.slice(activeItemIndex + 1).find(function (x) { return !x.disabled && (x.itemText.toLowerCase().startsWith(text.toLowerCase())); });
        if (!nextItem) {
            nextItem = items.slice(0, activeItemIndex).find(function (x) { return !x.disabled && (x.itemText.toLowerCase().startsWith(text.toLowerCase())); });
        }
        if (!nextItem) {
            return;
        }
        if (this.target.collapsed) {
            this.target.selectItem(nextItem);
        }
        this.target.navigateItem(items.indexOf(nextItem));
    };
    /**
     * @return {?}
     */
    IgxSelectItemNavigationDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearStream$.unsubscribe();
    };
    IgxSelectItemNavigationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxSelectItemNavigation]'
                },] }
    ];
    /** @nocollapse */
    IgxSelectItemNavigationDirective.ctorParameters = function () { return []; };
    IgxSelectItemNavigationDirective.propDecorators = {
        target: [{ type: Input, args: ['igxSelectItemNavigation',] }],
        captureKey: [{ type: HostListener, args: ['keyup', ['$event'],] }]
    };
    return IgxSelectItemNavigationDirective;
}(IgxDropDownItemNavigationDirective));
export { IgxSelectItemNavigationDirective };
if (false) {
    /** @type {?} */
    IgxSelectItemNavigationDirective.prototype.target;
    /**
     * @type {?}
     * @private
     */
    IgxSelectItemNavigationDirective.prototype.inputStream;
    /**
     * @type {?}
     * @private
     */
    IgxSelectItemNavigationDirective.prototype.clearStream$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW5hdmlnYXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LW5hdmlnYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakcsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBSzNDO0lBR3NELDREQUFrQztJQUtwRjtRQUFBLFlBQWdCLGtCQUFNLElBQUksQ0FBQyxTQUFHOztRQTRDdEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDOztJQTdDYixDQUFDO0lBRTlCLHlGQUF5Rjs7Ozs7O0lBQ3pGLHdEQUFhOzs7OztJQUFiLFVBQWMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQzFCLE9BQU87U0FDVjs7WUFFSyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7UUFDbkMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxLQUFLLFdBQVcsSUFBSSxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN2QixRQUFRLEdBQUcsRUFBRTtnQkFDVCxLQUFLLE9BQU8sQ0FBQztnQkFDYixLQUFLLFVB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QUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBeEUsQ0FBd0UsQ0FBQyxDQUFDO1NBQ2xJO1FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELHNEQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Z0JBckdKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN4Qzs7Ozs7eUJBR0ksS0FBSyxTQUFDLHlCQUF5Qjs2QkFtRC9CLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBOENyQyx1Q0FBQztDQUFBLEFBdEdELENBR3NELGtDQUFrQyxHQW1HdkY7U0FuR1ksZ0NBQWdDOzs7SUFFekMsa0RBQzZCOzs7OztJQThDN0IsdURBQXlCOzs7OztJQUN6Qix3REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hEcm9wRG93bkl0ZW1OYXZpZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vZHJvcC1kb3duL2Ryb3AtZG93bi1uYXZpZ2F0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSWd4U2VsZWN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IElneFNlbGVjdEJhc2UgfSBmcm9tICcuL3NlbGVjdC5jb21tb24nO1xuXG4vKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFNlbGVjdEl0ZW1OYXZpZ2F0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4U2VsZWN0SXRlbU5hdmlnYXRpb25EaXJlY3RpdmUgZXh0ZW5kcyBJZ3hEcm9wRG93bkl0ZW1OYXZpZ2F0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgnaWd4U2VsZWN0SXRlbU5hdmlnYXRpb24nKVxuICAgIHB1YmxpYyB0YXJnZXQ6IElneFNlbGVjdEJhc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIobnVsbCk7IH1cblxuICAgIC8qKiBDYXB0dXJlcyBrZXlkb3duIGV2ZW50cyBhbmQgY2FsbHMgdGhlIGFwcHJvcHJpYXRlIGhhbmRsZXJzIG9uIHRoZSB0YXJnZXQgY29tcG9uZW50ICovXG4gICAgaGFuZGxlS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50IHx8IGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAmJiAoa2V5ID09PSAnYXJyb3dkb3duJyB8fCBrZXkgPT09ICdhcnJvd3VwJyB8fCBrZXkgPT09ICdkb3duJyB8fCBrZXkgPT09ICd1cCcpKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b2dnbGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNlYmFyJzpcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Fycm93ZG93bic6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm5hdmlnYXRlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5zZWxlY3RJdGVtKHRoaXMudGFyZ2V0LmZvY3VzZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Fycm93dXAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQubmF2aWdhdGVQcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdEl0ZW0odGhpcy50YXJnZXQuZm9jdXNlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5oYW5kbGVLZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTptZW1iZXItb3JkZXJpbmdcbiAgICBwcml2YXRlIGlucHV0U3RyZWFtID0gJyc7XG4gICAgcHJpdmF0ZSBjbGVhclN0cmVhbSQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgICAvKiogSGFuZGxlIGNvbnRpbnVvdXMgbGV0dGVyIHR5cGluZyBuYXZpZ2F0aW9uICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBjYXB0dXJlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIHJlbHlpbmcgb25seSBvbiBrZXksIGF2YWlsYWJsZSBvbiBhbGwgbWFqb3IgYnJvd3NlcnM6XG4gICAgICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9a2V5Ym9hcmRldmVudC1rZXkgKElFL0VkZ2UgcXVpcmsgZG9lc24ndCBhZmZlY3QgbGV0dGVyIHR5cGluZylcbiAgICAgICAgaWYgKCFldmVudCB8fCAhZXZlbnQua2V5IHx8IGV2ZW50LmtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgbG9uZ2VyIGtleXMgKCdBbHQnLCAnQXJyb3dEb3duJywgZXRjKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhclN0cmVhbSQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jbGVhclN0cmVhbSQgPSB0aW1lcig1MDApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3RyZWFtID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlucHV0U3RyZWFtICs9IGV2ZW50LmtleTtcbiAgICAgICAgY29uc3QgZm9jdXNlZEl0ZW0gPSB0aGlzLnRhcmdldC5mb2N1c2VkSXRlbSBhcyBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50O1xuXG4gICAgICAgIC8vIHNlbGVjdCB0aGUgaXRlbVxuICAgICAgICBpZiAoZm9jdXNlZEl0ZW0gJiYgdGhpcy5pbnB1dFN0cmVhbS5sZW5ndGggPiAxICYmIGZvY3VzZWRJdGVtLml0ZW1UZXh0LnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0aGlzLmlucHV0U3RyZWFtLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmF0ZUl0ZW1CeVRleHQodGhpcy5pbnB1dFN0cmVhbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdGl2YXRlSXRlbUJ5VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnRhcmdldC5pdGVtcyBhcyBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50W107XG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IGl0ZW1zLmluZGV4T2YodGhpcy50YXJnZXQuZm9jdXNlZEl0ZW0gYXMgSWd4U2VsZWN0SXRlbUNvbXBvbmVudCkgfHwgMDtcbiAgICAgICAgLy8gXiB0aGlzIGlzIGZvY3VzZWQgT1Igc2VsZWN0ZWQgaWYgdGhlIGRkIGlzIGNsb3NlZFxuICAgICAgICBsZXQgbmV4dEl0ZW0gPSBpdGVtcy5zbGljZShhY3RpdmVJdGVtSW5kZXggKyAxKS5maW5kKHggPT4gIXguZGlzYWJsZWQgJiYgKHguaXRlbVRleHQudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQudG9Mb3dlckNhc2UoKSkpKTtcblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICBuZXh0SXRlbSA9IGl0ZW1zLnNsaWNlKDAsIGFjdGl2ZUl0ZW1JbmRleCkuZmluZCh4ID0+ICF4LmRpc2FibGVkICYmICh4Lml0ZW1UZXh0LnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0ZXh0LnRvTG93ZXJDYXNlKCkpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50YXJnZXQuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZWxlY3RJdGVtKG5leHRJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldC5uYXZpZ2F0ZUl0ZW0oaXRlbXMuaW5kZXhPZihuZXh0SXRlbSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyU3RyZWFtJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiJdfQ==
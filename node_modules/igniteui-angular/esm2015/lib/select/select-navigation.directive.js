/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxDropDownItemNavigationDirective } from '../drop-down/drop-down-navigation.directive';
import { Directive, Input, HostListener } from '@angular/core';
import { Subscription, timer } from 'rxjs';
/**
 * @hidden \@internal
 */
export class IgxSelectItemNavigationDirective extends IgxDropDownItemNavigationDirective {
    constructor() {
        super(null);
        // tslint:disable:member-ordering
        this.inputStream = '';
        this.clearStream$ = Subscription.EMPTY;
    }
    /**
     * Captures keydown events and calls the appropriate handlers on the target component
     * @param {?} event
     * @return {?}
     */
    handleKeyDown(event) {
        if (!event || event.shiftKey) {
            return;
        }
        /** @type {?} */
        const key = event.key.toLowerCase();
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
        super.handleKeyDown(event);
    }
    /**
     * Handle continuous letter typing navigation
     * @param {?} event
     * @return {?}
     */
    captureKey(event) {
        // relying only on key, available on all major browsers:
        // https://caniuse.com/#feat=keyboardevent-key (IE/Edge quirk doesn't affect letter typing)
        if (!event || !event.key || event.key.length > 1) {
            // ignore longer keys ('Alt', 'ArrowDown', etc)
            return;
        }
        this.clearStream$.unsubscribe();
        this.clearStream$ = timer(500).subscribe(() => {
            this.inputStream = '';
        });
        this.inputStream += event.key;
        /** @type {?} */
        const focusedItem = (/** @type {?} */ (this.target.focusedItem));
        // select the item
        if (focusedItem && this.inputStream.length > 1 && focusedItem.itemText.toLowerCase().startsWith(this.inputStream.toLowerCase())) {
            return;
        }
        this.activateItemByText(this.inputStream);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    activateItemByText(text) {
        /** @type {?} */
        const items = (/** @type {?} */ (this.target.items));
        /** @type {?} */
        const activeItemIndex = items.indexOf((/** @type {?} */ (this.target.focusedItem))) || 0;
        // ^ this is focused OR selected if the dd is closed
        /** @type {?} */
        let nextItem = items.slice(activeItemIndex + 1).find(x => !x.disabled && (x.itemText.toLowerCase().startsWith(text.toLowerCase())));
        if (!nextItem) {
            nextItem = items.slice(0, activeItemIndex).find(x => !x.disabled && (x.itemText.toLowerCase().startsWith(text.toLowerCase())));
        }
        if (!nextItem) {
            return;
        }
        if (this.target.collapsed) {
            this.target.selectItem(nextItem);
        }
        this.target.navigateItem(items.indexOf(nextItem));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearStream$.unsubscribe();
    }
}
IgxSelectItemNavigationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxSelectItemNavigation]'
            },] }
];
/** @nocollapse */
IgxSelectItemNavigationDirective.ctorParameters = () => [];
IgxSelectItemNavigationDirective.propDecorators = {
    target: [{ type: Input, args: ['igxSelectItemNavigation',] }],
    captureKey: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW5hdmlnYXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LW5hdmlnYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFRM0MsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLGtDQUFrQztJQUtwRjtRQUFnQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBNENwQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUE3Q2IsQ0FBQzs7Ozs7O0lBRzlCLGFBQWEsQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDMUIsT0FBTztTQUNWOztjQUVLLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtRQUNuQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDOUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLFFBQVEsR0FBRyxFQUFFO2dCQUNULEtBQUssT0FBTyxDQUFDO2dCQUNiLEtBQUssVUFBVSxDQUFDO2dCQUNoQixLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLE9BQU87b0JBQ1IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuQixPQUFPO2dCQUNYLEtBQUssV0FBVyxDQUFDO2dCQUNqQixLQUFLLE1BQU07b0JBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDaEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixPQUFPO2dCQUNYLEtBQUssU0FBUyxDQUFDO2dCQUNmLEtBQUssSUFBSTtvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNoRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLE9BQU87Z0JBQ1g7b0JBQ0ksTUFBTTthQUNiO1NBQ0o7UUFFRCxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQVFNLFVBQVUsQ0FBQyxLQUFvQjtRQUNsQyx3REFBd0Q7UUFDeEQsMkZBQTJGO1FBQzNGLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QywrQ0FBK0M7WUFDL0MsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDOztjQUN4QixXQUFXLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQTBCO1FBRXJFLGtCQUFrQjtRQUNsQixJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO1lBQzdILE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxJQUFZOztjQUM1QixLQUFLLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQTRCOztjQUNyRCxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBMEIsQ0FBQyxJQUFJLENBQUM7OztZQUV6RixRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsSTtRQUVELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7WUFyR0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwyQkFBMkI7YUFDeEM7Ozs7O3FCQUdJLEtBQUssU0FBQyx5QkFBeUI7eUJBbUQvQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBbkRqQyxrREFDNkI7Ozs7O0lBOEM3Qix1REFBeUI7Ozs7O0lBQ3pCLHdEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElneERyb3BEb3duSXRlbU5hdmlnYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9kcm9wLWRvd24vZHJvcC1kb3duLW5hdmlnYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U2VsZWN0QmFzZSB9IGZyb20gJy4vc2VsZWN0LmNvbW1vbic7XG5cbi8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4U2VsZWN0SXRlbU5hdmlnYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hTZWxlY3RJdGVtTmF2aWdhdGlvbkRpcmVjdGl2ZSBleHRlbmRzIElneERyb3BEb3duSXRlbU5hdmlnYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCdpZ3hTZWxlY3RJdGVtTmF2aWdhdGlvbicpXG4gICAgcHVibGljIHRhcmdldDogSWd4U2VsZWN0QmFzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlcihudWxsKTsgfVxuXG4gICAgLyoqIENhcHR1cmVzIGtleWRvd24gZXZlbnRzIGFuZCBjYWxscyB0aGUgYXBwcm9wcmlhdGUgaGFuZGxlcnMgb24gdGhlIHRhcmdldCBjb21wb25lbnQgKi9cbiAgICBoYW5kbGVLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQgfHwgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5ICYmIChrZXkgPT09ICdhcnJvd2Rvd24nIHx8IGtleSA9PT0gJ2Fycm93dXAnIHx8IGtleSA9PT0gJ2Rvd24nIHx8IGtleSA9PT0gJ3VwJykpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRvZ2dsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2ViYXInOlxuICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAnYXJyb3dkb3duJzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQubmF2aWdhdGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdEl0ZW0odGhpcy50YXJnZXQuZm9jdXNlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAnYXJyb3d1cCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5uYXZpZ2F0ZVByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2VsZWN0SXRlbSh0aGlzLnRhcmdldC5mb2N1c2VkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmhhbmRsZUtleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlOm1lbWJlci1vcmRlcmluZ1xuICAgIHByaXZhdGUgaW5wdXRTdHJlYW0gPSAnJztcbiAgICBwcml2YXRlIGNsZWFyU3RyZWFtJCA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAgIC8qKiBIYW5kbGUgY29udGludW91cyBsZXR0ZXIgdHlwaW5nIG5hdmlnYXRpb24gKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIGNhcHR1cmVLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8gcmVseWluZyBvbmx5IG9uIGtleSwgYXZhaWxhYmxlIG9uIGFsbCBtYWpvciBicm93c2VyczpcbiAgICAgICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1rZXlib2FyZGV2ZW50LWtleSAoSUUvRWRnZSBxdWlyayBkb2Vzbid0IGFmZmVjdCBsZXR0ZXIgdHlwaW5nKVxuICAgICAgICBpZiAoIWV2ZW50IHx8ICFldmVudC5rZXkgfHwgZXZlbnQua2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBsb25nZXIga2V5cyAoJ0FsdCcsICdBcnJvd0Rvd24nLCBldGMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyU3RyZWFtJC51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNsZWFyU3RyZWFtJCA9IHRpbWVyKDUwMCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdHJlYW0gPSAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW5wdXRTdHJlYW0gKz0gZXZlbnQua2V5O1xuICAgICAgICBjb25zdCBmb2N1c2VkSXRlbSA9IHRoaXMudGFyZ2V0LmZvY3VzZWRJdGVtIGFzIElneFNlbGVjdEl0ZW1Db21wb25lbnQ7XG5cbiAgICAgICAgLy8gc2VsZWN0IHRoZSBpdGVtXG4gICAgICAgIGlmIChmb2N1c2VkSXRlbSAmJiB0aGlzLmlucHV0U3RyZWFtLmxlbmd0aCA+IDEgJiYgZm9jdXNlZEl0ZW0uaXRlbVRleHQudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMuaW5wdXRTdHJlYW0udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2YXRlSXRlbUJ5VGV4dCh0aGlzLmlucHV0U3RyZWFtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0aXZhdGVJdGVtQnlUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMudGFyZ2V0Lml0ZW1zIGFzIElneFNlbGVjdEl0ZW1Db21wb25lbnRbXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gaXRlbXMuaW5kZXhPZih0aGlzLnRhcmdldC5mb2N1c2VkSXRlbSBhcyBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50KSB8fCAwO1xuICAgICAgICAvLyBeIHRoaXMgaXMgZm9jdXNlZCBPUiBzZWxlY3RlZCBpZiB0aGUgZGQgaXMgY2xvc2VkXG4gICAgICAgIGxldCBuZXh0SXRlbSA9IGl0ZW1zLnNsaWNlKGFjdGl2ZUl0ZW1JbmRleCArIDEpLmZpbmQoeCA9PiAheC5kaXNhYmxlZCAmJiAoeC5pdGVtVGV4dC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGV4dC50b0xvd2VyQ2FzZSgpKSkpO1xuXG4gICAgICAgIGlmICghbmV4dEl0ZW0pIHtcbiAgICAgICAgICAgIG5leHRJdGVtID0gaXRlbXMuc2xpY2UoMCwgYWN0aXZlSXRlbUluZGV4KS5maW5kKHggPT4gIXguZGlzYWJsZWQgJiYgKHguaXRlbVRleHQudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQudG9Mb3dlckNhc2UoKSkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV4dEl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdEl0ZW0obmV4dEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0Lm5hdmlnYXRlSXRlbShpdGVtcy5pbmRleE9mKG5leHRJdGVtKSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXJTdHJlYW0kLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIl19
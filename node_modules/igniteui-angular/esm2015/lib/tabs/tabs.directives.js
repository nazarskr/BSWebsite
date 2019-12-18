/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, TemplateRef } from '@angular/core';
import { IgxTabsBase } from './tabs.common';
/** @enum {string} */
const ButtonStyle = {
    VISIBLE: 'visible',
    HIDDEN: 'hidden',
    NOT_DISPLAYED: 'not_displayed',
};
export class IgxRightButtonStyleDirective {
    /**
     * @param {?} tabs
     */
    constructor(tabs) {
        this.tabs = tabs;
    }
    /**
     * @return {?}
     */
    get visibleCSS() {
        return (this.getRightButtonStyle() === ButtonStyle.VISIBLE) ? true : false;
    }
    /**
     * @return {?}
     */
    get hiddenCSS() {
        return (this.getRightButtonStyle() === ButtonStyle.HIDDEN) ? true : false;
    }
    /**
     * @return {?}
     */
    get notDisplayedCSS() {
        return (this.getRightButtonStyle() === ButtonStyle.NOT_DISPLAYED) ? true : false;
    }
    /**
     * @private
     * @return {?}
     */
    getRightButtonStyle() {
        /** @type {?} */
        const viewPortWidth = this.tabs.viewPort.nativeElement.offsetWidth;
        // We use this hacky way to get the width of the itemsContainer,
        // because there is inconsistency in IE we cannot use offsetWidth or scrollOffset.
        /** @type {?} */
        const itemsContainerChildrenCount = this.tabs.itemsContainer.nativeElement.children.length;
        /** @type {?} */
        let itemsContainerWidth = 0;
        if (itemsContainerChildrenCount > 1) {
            /** @type {?} */
            const lastTab = this.tabs.itemsContainer.nativeElement.children[itemsContainerChildrenCount - 2];
            itemsContainerWidth = lastTab.offsetLeft + lastTab.offsetWidth;
        }
        /** @type {?} */
        const headerContainerWidth = this.tabs.headerContainer.nativeElement.offsetWidth;
        /** @type {?} */
        const offset = this.tabs.offset;
        /** @type {?} */
        const total = offset + viewPortWidth;
        // Fix for IE 11, a difference is accumulated from the widths calculations.
        if (itemsContainerWidth - headerContainerWidth <= 1 && offset === 0) {
            return ButtonStyle.NOT_DISPLAYED;
        }
        if (itemsContainerWidth > total) {
            return ButtonStyle.VISIBLE;
        }
        else {
            return ButtonStyle.HIDDEN;
        }
    }
}
IgxRightButtonStyleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxRightButtonStyle]'
            },] }
];
/** @nocollapse */
IgxRightButtonStyleDirective.ctorParameters = () => [
    { type: IgxTabsBase }
];
IgxRightButtonStyleDirective.propDecorators = {
    visibleCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button',] }],
    hiddenCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button--hidden',] }],
    notDisplayedCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button--none',] }]
};
if (false) {
    /** @type {?} */
    IgxRightButtonStyleDirective.prototype.tabs;
}
export class IgxLeftButtonStyleDirective {
    /**
     * @param {?} tabs
     */
    constructor(tabs) {
        this.tabs = tabs;
    }
    /**
     * @return {?}
     */
    get visibleCSS() {
        return (this.getLeftButtonStyle() === ButtonStyle.VISIBLE) ? true : false;
    }
    /**
     * @return {?}
     */
    get hiddenCSS() {
        return (this.getLeftButtonStyle() === ButtonStyle.HIDDEN) ? true : false;
    }
    /**
     * @return {?}
     */
    get notDisplayedCSS() {
        return (this.getLeftButtonStyle() === ButtonStyle.NOT_DISPLAYED) ? true : false;
    }
    /**
     * @private
     * @return {?}
     */
    getLeftButtonStyle() {
        // We use this hacky way to get the width of the itemsContainer,
        // because there is inconsistency in IE we cannot use offsetWidth or scrollOffset.
        /** @type {?} */
        const itemsContainerChildrenCount = this.tabs.itemsContainer.nativeElement.children.length;
        /** @type {?} */
        let itemsContainerWidth = 0;
        if (itemsContainerChildrenCount > 1) {
            /** @type {?} */
            const lastTab = this.tabs.itemsContainer.nativeElement.children[itemsContainerChildrenCount - 2];
            itemsContainerWidth = lastTab.offsetLeft + lastTab.offsetWidth;
        }
        /** @type {?} */
        const headerContainerWidth = this.tabs.headerContainer.nativeElement.offsetWidth;
        /** @type {?} */
        const offset = this.tabs.offset;
        if (offset === 0) {
            // Fix for IE 11, a difference is accumulated from the widths calculations.
            if (itemsContainerWidth - headerContainerWidth <= 1) {
                return ButtonStyle.NOT_DISPLAYED;
            }
            return ButtonStyle.HIDDEN;
        }
        else {
            return ButtonStyle.VISIBLE;
        }
    }
}
IgxLeftButtonStyleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxLeftButtonStyle]'
            },] }
];
/** @nocollapse */
IgxLeftButtonStyleDirective.ctorParameters = () => [
    { type: IgxTabsBase }
];
IgxLeftButtonStyleDirective.propDecorators = {
    visibleCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button',] }],
    hiddenCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button--hidden',] }],
    notDisplayedCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button--none',] }]
};
if (false) {
    /** @type {?} */
    IgxLeftButtonStyleDirective.prototype.tabs;
}
export class IgxTabItemTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxTabItemTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxTab]'
            },] }
];
/** @nocollapse */
IgxTabItemTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxTabItemTemplateDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi90YWJzL3RhYnMuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUd4QyxTQUFVLFNBQVM7SUFDbkIsUUFBUyxRQUFRO0lBQ2pCLGVBQWdCLGVBQWU7O0FBT25DLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFDckMsWUFBbUIsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUNwQyxDQUFDOzs7O0lBRUQsSUFDSSxVQUFVO1FBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0UsQ0FBQzs7OztJQUVELElBQ0ksU0FBUztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlFLENBQUM7Ozs7SUFFRCxJQUNJLGVBQWU7UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNyRixDQUFDOzs7OztJQUVPLG1CQUFtQjs7Y0FDakIsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXOzs7O2NBSTVELDJCQUEyQixHQUFHLElBQUksQ0FBQyxJ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QztZQUNELE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUM3QjthQUFNO1lBQ0gsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQzs7O1lBM0NKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2FBQ25DOzs7O1lBN0RRLFdBQVc7Ozt5QkFtRWYsV0FBVyxTQUFDLCtCQUErQjt3QkFLM0MsV0FBVyxTQUFDLHVDQUF1Qzs4QkFLbkQsV0FBVyxTQUFDLHFDQUFxQzs7OztJQWJ0QywyQ0FBd0I7O0FBNEN4QyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBRXBDLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQzdDLENBQUM7OztZQU5KLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTthQUN2Qjs7OztZQTdHRyxXQUFXOzs7O0lBZ0hDLCtDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4VGFic0Jhc2UgfSBmcm9tICcuL3RhYnMuY29tbW9uJztcblxuZW51bSBCdXR0b25TdHlsZSB7XG4gICAgVklTSUJMRSA9ICd2aXNpYmxlJyxcbiAgICBISURERU4gPSAnaGlkZGVuJyxcbiAgICBOT1RfRElTUExBWUVEID0gJ25vdF9kaXNwbGF5ZWQnXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFJpZ2h0QnV0dG9uU3R5bGVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneFJpZ2h0QnV0dG9uU3R5bGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJzOiBJZ3hUYWJzQmFzZSkge1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRhYnNfX2hlYWRlci1idXR0b24nKVxuICAgIGdldCB2aXNpYmxlQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0UmlnaHRCdXR0b25TdHlsZSgpID09PSBCdXR0b25TdHlsZS5WSVNJQkxFKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10YWJzX19oZWFkZXItYnV0dG9uLS1oaWRkZW4nKVxuICAgIGdldCBoaWRkZW5DU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRSaWdodEJ1dHRvblN0eWxlKCkgPT09IEJ1dHRvblN0eWxlLkhJRERFTikgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGFic19faGVhZGVyLWJ1dHRvbi0tbm9uZScpXG4gICAgZ2V0IG5vdERpc3BsYXllZENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldFJpZ2h0QnV0dG9uU3R5bGUoKSA9PT0gQnV0dG9uU3R5bGUuTk9UX0RJU1BMQVlFRCkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSaWdodEJ1dHRvblN0eWxlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHZpZXdQb3J0V2lkdGggPSB0aGlzLnRhYnMudmlld1BvcnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgICAvLyBXZSB1c2UgdGhpcyBoYWNreSB3YXkgdG8gZ2V0IHRoZSB3aWR0aCBvZiB0aGUgaXRlbXNDb250YWluZXIsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgaXMgaW5jb25zaXN0ZW5jeSBpbiBJRSB3ZSBjYW5ub3QgdXNlIG9mZnNldFdpZHRoIG9yIHNjcm9sbE9mZnNldC5cbiAgICAgICAgY29uc3QgaXRlbXNDb250YWluZXJDaGlsZHJlbkNvdW50ID0gdGhpcy50YWJzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgaXRlbXNDb250YWluZXJXaWR0aCA9IDA7XG4gICAgICAgIGlmIChpdGVtc0NvbnRhaW5lckNoaWxkcmVuQ291bnQgPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0VGFiID0gdGhpcy50YWJzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baXRlbXNDb250YWluZXJDaGlsZHJlbkNvdW50IC0gMl07XG4gICAgICAgICAgICBpdGVtc0NvbnRhaW5lcldpZHRoID0gbGFzdFRhYi5vZmZzZXRMZWZ0ICsgbGFzdFRhYi5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXJXaWR0aCA9IHRoaXMudGFicy5oZWFkZXJDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy50YWJzLm9mZnNldDtcbiAgICAgICAgY29uc3QgdG90YWwgPSBvZmZzZXQgKyB2aWV3UG9ydFdpZHRoO1xuXG4gICAgICAgIC8vIEZpeCBmb3IgSUUgMTEsIGEgZGlmZmVyZW5jZSBpcyBhY2N1bXVsYXRlZCBmcm9tIHRoZSB3aWR0aHMgY2FsY3VsYXRpb25zLlxuICAgICAgICBpZiAoaXRlbXNDb250YWluZXJXaWR0aCAtIGhlYWRlckNvbnRhaW5lcldpZHRoIDw9IDEgJiYgb2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gQnV0dG9uU3R5bGUuTk9UX0RJU1BMQVlFRDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtc0NvbnRhaW5lcldpZHRoID4gdG90YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBCdXR0b25TdHlsZS5WSVNJQkxFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEJ1dHRvblN0eWxlLkhJRERFTjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4TGVmdEJ1dHRvblN0eWxlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hMZWZ0QnV0dG9uU3R5bGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJzOiBJZ3hUYWJzQmFzZSkge1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRhYnNfX2hlYWRlci1idXR0b24nKVxuICAgIGdldCB2aXNpYmxlQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0TGVmdEJ1dHRvblN0eWxlKCkgPT09IEJ1dHRvblN0eWxlLlZJU0lCTEUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRhYnNfX2hlYWRlci1idXR0b24tLWhpZGRlbicpXG4gICAgZ2V0IGhpZGRlbkNTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldExlZnRCdXR0b25TdHlsZSgpID09PSBCdXR0b25TdHlsZS5ISURERU4pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRhYnNfX2hlYWRlci1idXR0b24tLW5vbmUnKVxuICAgIGdldCBub3REaXNwbGF5ZWRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRMZWZ0QnV0dG9uU3R5bGUoKSA9PT0gQnV0dG9uU3R5bGUuTk9UX0RJU1BMQVlFRCkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMZWZ0QnV0dG9uU3R5bGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gV2UgdXNlIHRoaXMgaGFja3kgd2F5IHRvIGdldCB0aGUgd2lkdGggb2YgdGhlIGl0ZW1zQ29udGFpbmVyLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIGlzIGluY29uc2lzdGVuY3kgaW4gSUUgd2UgY2Fubm90IHVzZSBvZmZzZXRXaWR0aCBvciBzY3JvbGxPZmZzZXQuXG4gICAgICAgIGNvbnN0IGl0ZW1zQ29udGFpbmVyQ2hpbGRyZW5Db3VudCA9IHRoaXMudGFicy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgbGV0IGl0ZW1zQ29udGFpbmVyV2lkdGggPSAwO1xuICAgICAgICBpZiAoaXRlbXNDb250YWluZXJDaGlsZHJlbkNvdW50ID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbGFzdFRhYiA9IHRoaXMudGFicy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2l0ZW1zQ29udGFpbmVyQ2hpbGRyZW5Db3VudCAtIDJdO1xuICAgICAgICAgICAgaXRlbXNDb250YWluZXJXaWR0aCA9IGxhc3RUYWIub2Zmc2V0TGVmdCArIGxhc3RUYWIub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyV2lkdGggPSB0aGlzLnRhYnMuaGVhZGVyQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMudGFicy5vZmZzZXQ7XG4gICAgICAgIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgIC8vIEZpeCBmb3IgSUUgMTEsIGEgZGlmZmVyZW5jZSBpcyBhY2N1bXVsYXRlZCBmcm9tIHRoZSB3aWR0aHMgY2FsY3VsYXRpb25zLlxuICAgICAgICAgICAgaWYgKGl0ZW1zQ29udGFpbmVyV2lkdGggLSBoZWFkZXJDb250YWluZXJXaWR0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJ1dHRvblN0eWxlLk5PVF9ESVNQTEFZRUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gQnV0dG9uU3R5bGUuSElEREVOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEJ1dHRvblN0eWxlLlZJU0lCTEU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFRhYl0nXG59KVxuZXhwb3J0IGNsYXNzIElneFRhYkl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, TemplateRef } from '@angular/core';
import { IgxTabsBase } from './tabs.common';
/** @enum {string} */
var ButtonStyle = {
    VISIBLE: 'visible',
    HIDDEN: 'hidden',
    NOT_DISPLAYED: 'not_displayed',
};
var IgxRightButtonStyleDirective = /** @class */ (function () {
    function IgxRightButtonStyleDirective(tabs) {
        this.tabs = tabs;
    }
    Object.defineProperty(IgxRightButtonStyleDirective.prototype, "visibleCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.getRightButtonStyle() === ButtonStyle.VISIBLE) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxRightButtonStyleDirective.prototype, "hiddenCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.getRightButtonStyle() === ButtonStyle.HIDDEN) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxRightButtonStyleDirective.prototype, "notDisplayedCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.getRightButtonStyle() === ButtonStyle.NOT_DISPLAYED) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    IgxRightButtonStyleDirective.prototype.getRightButtonStyle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewPortWidth = this.tabs.viewPort.nativeElement.offsetWidth;
        // We use this hacky way to get the width of the itemsContainer,
        // because there is inconsistency in IE we cannot use offsetWidth or scrollOffset.
        /** @type {?} */
        var itemsContainerChildrenCount = this.tabs.itemsContainer.nativeElement.children.length;
        /** @type {?} */
        var itemsContainerWidth = 0;
        if (itemsContainerChildrenCount > 1) {
            /** @type {?} */
            var lastTab = this.tabs.itemsContainer.nativeElement.children[itemsContainerChildrenCount - 2];
            itemsContainerWidth = lastTab.offsetLeft + lastTab.offsetWidth;
        }
        /** @type {?} */
        var headerContainerWidth = this.tabs.headerContainer.nativeElement.offsetWidth;
        /** @type {?} */
        var offset = this.tabs.offset;
        /** @type {?} */
        var total = offset + viewPortWidth;
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
    };
    IgxRightButtonStyleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxRightButtonStyle]'
                },] }
    ];
    /** @nocollapse */
    IgxRightButtonStyleDirective.ctorParameters = function () { return [
        { type: IgxTabsBase }
    ]; };
    IgxRightButtonStyleDirective.propDecorators = {
        visibleCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button',] }],
        hiddenCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button--hidden',] }],
        notDisplayedCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button--none',] }]
    };
    return IgxRightButtonStyleDirective;
}());
export { IgxRightButtonStyleDirective };
if (false) {
    /** @type {?} */
    IgxRightButtonStyleDirective.prototype.tabs;
}
var IgxLeftButtonStyleDirective = /** @class */ (function () {
    function IgxLeftButtonStyleDirective(tabs) {
        this.tabs = tabs;
    }
    Object.defineProperty(IgxLeftButtonStyleDirective.prototype, "visibleCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.getLeftButtonStyle() === ButtonStyle.VISIBLE) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLeftButtonStyleDirective.prototype, "hiddenCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.getLeftButtonStyle() === ButtonStyle.HIDDEN) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLeftButtonStyleDirective.prototype, "notDisplayedCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.getLeftButtonStyle() === ButtonStyle.NOT_DISPLAYED) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    IgxLeftButtonStyleDirective.prototype.getLeftButtonStyle = /**
     * @private
     * @return {?}
     */
    function () {
        // We use this hacky way to get the width of the itemsContainer,
        // because there is inconsistency in IE we cannot use offsetWidth or scrollOffset.
        /** @type {?} */
        var itemsContainerChildrenCount = this.tabs.itemsContainer.nativeElement.children.length;
        /** @type {?} */
        var itemsContainerWidth = 0;
        if (itemsContainerChildrenCount > 1) {
            /** @type {?} */
            var lastTab = this.tabs.itemsContainer.nativeElement.children[itemsContainerChildrenCount - 2];
            itemsContainerWidth = lastTab.offsetLeft + lastTab.offsetWidth;
        }
        /** @type {?} */
        var headerContainerWidth = this.tabs.headerContainer.nativeElement.offsetWidth;
        /** @type {?} */
        var offset = this.tabs.offset;
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
    };
    IgxLeftButtonStyleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxLeftButtonStyle]'
                },] }
    ];
    /** @nocollapse */
    IgxLeftButtonStyleDirective.ctorParameters = function () { return [
        { type: IgxTabsBase }
    ]; };
    IgxLeftButtonStyleDirective.propDecorators = {
        visibleCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button',] }],
        hiddenCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button--hidden',] }],
        notDisplayedCSS: [{ type: HostBinding, args: ['class.igx-tabs__header-button--none',] }]
    };
    return IgxLeftButtonStyleDirective;
}());
export { IgxLeftButtonStyleDirective };
if (false) {
    /** @type {?} */
    IgxLeftButtonStyleDirective.prototype.tabs;
}
var IgxTabItemTemplateDirective = /** @class */ (function () {
    function IgxTabItemTemplateDirective(template) {
        this.template = template;
    }
    IgxTabItemTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxTab]'
                },] }
    ];
    /** @nocollapse */
    IgxTabItemTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxTabItemTemplateDirective;
}());
export { IgxTabItemTemplateDirective };
if (false) {
    /** @type {?} */
    IgxTabItemTemplateDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi90YWJzL3RhYnMuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUd4QyxTQUFVLFNBQVM7SUFDbkIsUUFBUyxRQUFRO0lBQ2pCLGVBQWdCLGVBQWU7O0FBR25DO0lBS0ksc0NBQW1CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDcEMsQ0FBQztJQUVELHNCQUNJLG9EQUFVOzs7O1FBRGQ7WUFFSSxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRSxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLG1EQUFTOzs7O1FBRGI7WUFFSSxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM5RSxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHlEQUFlOzs7O1FBRG5CO1lBRUksT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckYsQ0FBQzs7O09BQUE7Ozs7O0lBRU8sMERBQW1COzs7O0lBQTNCOztZQUNVLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVzs7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QUFLLENBQUMsRUFBRTtZQUNkLDJFQUEyRTtZQUMzRSxJQUFJLG1CQUFtQixHQUFHLG9CQUFvQixJQUFJLENBQUMsRUFBRTtnQkFDakQsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzdCO2FBQU07WUFDSCxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUM7U0FDOUI7SUFDTCxDQUFDOztnQkEzQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7aUJBQ25DOzs7O2dCQTdEUSxXQUFXOzs7NkJBbUVmLFdBQVcsU0FBQywrQkFBK0I7NEJBSzNDLFdBQVcsU0FBQyx1Q0FBdUM7a0NBS25ELFdBQVcsU0FBQyxxQ0FBcUM7O0lBMEJ0RCxrQ0FBQztDQUFBLEFBNUNELElBNENDO1NBeENZLDJCQUEyQjs7O0lBQ3hCLDJDQUF3Qjs7QUF5Q3hDO0lBS0kscUNBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQzdDLENBQUM7O2dCQU5KLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtpQkFDdkI7Ozs7Z0JBN0dHLFdBQVc7O0lBa0hmLGtDQUFDO0NBQUEsQUFQRCxJQU9DO1NBSlksMkJBQTJCOzs7SUFFeEIsK0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hUYWJzQmFzZSB9IGZyb20gJy4vdGFicy5jb21tb24nO1xuXG5lbnVtIEJ1dHRvblN0eWxlIHtcbiAgICBWSVNJQkxFID0gJ3Zpc2libGUnLFxuICAgIEhJRERFTiA9ICdoaWRkZW4nLFxuICAgIE5PVF9ESVNQTEFZRUQgPSAnbm90X2Rpc3BsYXllZCdcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4UmlnaHRCdXR0b25TdHlsZV0nXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4UmlnaHRCdXR0b25TdHlsZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRhYnM6IElneFRhYnNCYXNlKSB7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGFic19faGVhZGVyLWJ1dHRvbicpXG4gICAgZ2V0IHZpc2libGVDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRSaWdodEJ1dHRvblN0eWxlKCkgPT09IEJ1dHRvblN0eWxlLlZJU0lCTEUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRhYnNfX2hlYWRlci1idXR0b24tLWhpZGRlbicpXG4gICAgZ2V0IGhpZGRlbkNTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldFJpZ2h0QnV0dG9uU3R5bGUoKSA9PT0gQnV0dG9uU3R5bGUuSElEREVOKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10YWJzX19oZWFkZXItYnV0dG9uLS1ub25lJylcbiAgICBnZXQgbm90RGlzcGxheWVkQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0UmlnaHRCdXR0b25TdHlsZSgpID09PSBCdXR0b25TdHlsZS5OT1RfRElTUExBWUVEKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJpZ2h0QnV0dG9uU3R5bGUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgdmlld1BvcnRXaWR0aCA9IHRoaXMudGFicy52aWV3UG9ydC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICAgIC8vIFdlIHVzZSB0aGlzIGhhY2t5IHdheSB0byBnZXQgdGhlIHdpZHRoIG9mIHRoZSBpdGVtc0NvbnRhaW5lcixcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSBpcyBpbmNvbnNpc3RlbmN5IGluIElFIHdlIGNhbm5vdCB1c2Ugb2Zmc2V0V2lkdGggb3Igc2Nyb2xsT2Zmc2V0LlxuICAgICAgICBjb25zdCBpdGVtc0NvbnRhaW5lckNoaWxkcmVuQ291bnQgPSB0aGlzLnRhYnMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGxldCBpdGVtc0NvbnRhaW5lcldpZHRoID0gMDtcbiAgICAgICAgaWYgKGl0ZW1zQ29udGFpbmVyQ2hpbGRyZW5Db3VudCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RUYWIgPSB0aGlzLnRhYnMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpdGVtc0NvbnRhaW5lckNoaWxkcmVuQ291bnQgLSAyXTtcbiAgICAgICAgICAgIGl0ZW1zQ29udGFpbmVyV2lkdGggPSBsYXN0VGFiLm9mZnNldExlZnQgKyBsYXN0VGFiLm9mZnNldFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lcldpZHRoID0gdGhpcy50YWJzLmhlYWRlckNvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnRhYnMub2Zmc2V0O1xuICAgICAgICBjb25zdCB0b3RhbCA9IG9mZnNldCArIHZpZXdQb3J0V2lkdGg7XG5cbiAgICAgICAgLy8gRml4IGZvciBJRSAxMSwgYSBkaWZmZXJlbmNlIGlzIGFjY3VtdWxhdGVkIGZyb20gdGhlIHdpZHRocyBjYWxjdWxhdGlvbnMuXG4gICAgICAgIGlmIChpdGVtc0NvbnRhaW5lcldpZHRoIC0gaGVhZGVyQ29udGFpbmVyV2lkdGggPD0gMSAmJiBvZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBCdXR0b25TdHlsZS5OT1RfRElTUExBWUVEO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW1zQ29udGFpbmVyV2lkdGggPiB0b3RhbCkge1xuICAgICAgICAgICAgcmV0dXJuIEJ1dHRvblN0eWxlLlZJU0lCTEU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gQnV0dG9uU3R5bGUuSElEREVOO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hMZWZ0QnV0dG9uU3R5bGVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneExlZnRCdXR0b25TdHlsZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRhYnM6IElneFRhYnNCYXNlKSB7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGFic19faGVhZGVyLWJ1dHRvbicpXG4gICAgZ2V0IHZpc2libGVDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRMZWZ0QnV0dG9uU3R5bGUoKSA9PT0gQnV0dG9uU3R5bGUuVklTSUJMRSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGFic19faGVhZGVyLWJ1dHRvbi0taGlkZGVuJylcbiAgICBnZXQgaGlkZGVuQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0TGVmdEJ1dHRvblN0eWxlKCkgPT09IEJ1dHRvblN0eWxlLkhJRERFTikgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGFic19faGVhZGVyLWJ1dHRvbi0tbm9uZScpXG4gICAgZ2V0IG5vdERpc3BsYXllZENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldExlZnRCdXR0b25TdHlsZSgpID09PSBCdXR0b25TdHlsZS5OT1RfRElTUExBWUVEKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExlZnRCdXR0b25TdHlsZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBXZSB1c2UgdGhpcyBoYWNreSB3YXkgdG8gZ2V0IHRoZSB3aWR0aCBvZiB0aGUgaXRlbXNDb250YWluZXIsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgaXMgaW5jb25zaXN0ZW5jeSBpbiBJRSB3ZSBjYW5ub3QgdXNlIG9mZnNldFdpZHRoIG9yIHNjcm9sbE9mZnNldC5cbiAgICAgICAgY29uc3QgaXRlbXNDb250YWluZXJDaGlsZHJlbkNvdW50ID0gdGhpcy50YWJzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgaXRlbXNDb250YWluZXJXaWR0aCA9IDA7XG4gICAgICAgIGlmIChpdGVtc0NvbnRhaW5lckNoaWxkcmVuQ291bnQgPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0VGFiID0gdGhpcy50YWJzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baXRlbXNDb250YWluZXJDaGlsZHJlbkNvdW50IC0gMl07XG4gICAgICAgICAgICBpdGVtc0NvbnRhaW5lcldpZHRoID0gbGFzdFRhYi5vZmZzZXRMZWZ0ICsgbGFzdFRhYi5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXJXaWR0aCA9IHRoaXMudGFicy5oZWFkZXJDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy50YWJzLm9mZnNldDtcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gRml4IGZvciBJRSAxMSwgYSBkaWZmZXJlbmNlIGlzIGFjY3VtdWxhdGVkIGZyb20gdGhlIHdpZHRocyBjYWxjdWxhdGlvbnMuXG4gICAgICAgICAgICBpZiAoaXRlbXNDb250YWluZXJXaWR0aCAtIGhlYWRlckNvbnRhaW5lcldpZHRoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQnV0dG9uU3R5bGUuTk9UX0RJU1BMQVlFRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBCdXR0b25TdHlsZS5ISURERU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gQnV0dG9uU3R5bGUuVklTSUJMRTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4VGFiXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4VGFiSXRlbVRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIH1cbn1cbiJdfQ==
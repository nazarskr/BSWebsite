/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, HostBinding, ViewChild, ViewContainerRef } from '@angular/core';
var DisplayContainerComponent = /** @class */ (function () {
    function DisplayContainerComponent(cdr, _viewContainer) {
        this.cdr = cdr;
        this._viewContainer = _viewContainer;
        this.cssClass = 'igx-display-container';
        this.notVirtual = true;
    }
    DisplayContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-display-container',
                    template: "\n        <ng-template\n            #display_container\n            igxScrollInertia\n            [IgxScrollInertiaScrollContainer]=\"scrollContainer\"\n            [IgxScrollInertiaDirection]=\"scrollDirection\">\n        </ng-template>\n    "
                }] }
    ];
    /** @nocollapse */
    DisplayContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ViewContainerRef }
    ]; };
    DisplayContainerComponent.propDecorators = {
        _vcr: [{ type: ViewChild, args: ['display_container', { read: ViewContainerRef, static: true },] }],
        cssClass: [{ type: HostBinding, args: ['class',] }],
        notVirtual: [{ type: HostBinding, args: ['class.igx-display-container--inactive',] }]
    };
    return DisplayContainerComponent;
}());
export { DisplayContainerComponent };
if (false) {
    /** @type {?} */
    DisplayContainerComponent.prototype._vcr;
    /** @type {?} */
    DisplayContainerComponent.prototype.scrollDirection;
    /** @type {?} */
    DisplayContainerComponent.prototype.cssClass;
    /** @type {?} */
    DisplayContainerComponent.prototype.notVirtual;
    /** @type {?} */
    DisplayContainerComponent.prototype.scrollContainer;
    /** @type {?} */
    DisplayContainerComponent.prototype.cdr;
    /** @type {?} */
    DisplayContainerComponent.prototype._viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9yLW9mL2Rpc3BsYXkuY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNuQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQXlCSSxtQ0FBbUIsR0FBc0IsRUFBUyxjQUFnQztRQUEvRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQVAzRSxhQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFHbkMsZUFBVSxHQUFHLElBQUksQ0FBQztJQUk2RCxDQUFDOztnQkF6QjFGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUscVBBT1Q7aUJBQ0o7Ozs7Z0JBakJHLGlCQUFpQjtnQkFJakIsZ0JBQWdCOzs7dUJBZWYsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBS3ZFLFdBQVcsU0FBQyxPQUFPOzZCQUduQixXQUFXLFNBQUMsdUNBQXVDOztJQU14RCxnQ0FBQztDQUFBLEFBMUJELElBMEJDO1NBZlkseUJBQXlCOzs7SUFDbEMseUNBQ1k7O0lBRVosb0RBQStCOztJQUUvQiw2Q0FDMEM7O0lBRTFDLCtDQUN5Qjs7SUFFekIsb0RBQXVCOztJQUVYLHdDQUE2Qjs7SUFBRSxtREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBIb3N0QmluZGluZyxcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtZGlzcGxheS1jb250YWluZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgI2Rpc3BsYXlfY29udGFpbmVyXG4gICAgICAgICAgICBpZ3hTY3JvbGxJbmVydGlhXG4gICAgICAgICAgICBbSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lcl09XCJzY3JvbGxDb250YWluZXJcIlxuICAgICAgICAgICAgW0lneFNjcm9sbEluZXJ0aWFEaXJlY3Rpb25dPVwic2Nyb2xsRGlyZWN0aW9uXCI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBEaXNwbGF5Q29udGFpbmVyQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCdkaXNwbGF5X2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIF92Y3I7XG5cbiAgICBwdWJsaWMgc2Nyb2xsRGlyZWN0aW9uOiBzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWRpc3BsYXktY29udGFpbmVyJztcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWRpc3BsYXktY29udGFpbmVyLS1pbmFjdGl2ZScpXG4gICAgcHVibGljIG5vdFZpcnR1YWwgPSB0cnVlO1xuXG4gICAgcHVibGljIHNjcm9sbENvbnRhaW5lcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxufVxuIl19
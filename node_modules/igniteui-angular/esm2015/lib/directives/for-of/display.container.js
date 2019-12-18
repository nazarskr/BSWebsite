/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, HostBinding, ViewChild, ViewContainerRef } from '@angular/core';
export class DisplayContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} _viewContainer
     */
    constructor(cdr, _viewContainer) {
        this.cdr = cdr;
        this._viewContainer = _viewContainer;
        this.cssClass = 'igx-display-container';
        this.notVirtual = true;
    }
}
DisplayContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-display-container',
                template: `
        <ng-template
            #display_container
            igxScrollInertia
            [IgxScrollInertiaScrollContainer]="scrollContainer"
            [IgxScrollInertiaDirection]="scrollDirection">
        </ng-template>
    `
            }] }
];
/** @nocollapse */
DisplayContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ViewContainerRef }
];
DisplayContainerComponent.propDecorators = {
    _vcr: [{ type: ViewChild, args: ['display_container', { read: ViewContainerRef, static: true },] }],
    cssClass: [{ type: HostBinding, args: ['class',] }],
    notVirtual: [{ type: HostBinding, args: ['class.igx-display-container--inactive',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9yLW9mL2Rpc3BsYXkuY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNuQixNQUFNLGVBQWUsQ0FBQztBQWF2QixNQUFNLE9BQU8seUJBQXlCOzs7OztJQWNsQyxZQUFtQixHQUFzQixFQUFTLGNBQWdDO1FBQS9ELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBUDNFLGFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUduQyxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBSTZELENBQUM7OztZQXpCMUYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7OztLQU9UO2FBQ0o7Ozs7WUFqQkcsaUJBQWlCO1lBSWpCLGdCQUFnQjs7O21CQWVmLFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUt2RSxXQUFXLFNBQUMsT0FBTzt5QkFHbkIsV0FBVyxTQUFDLHVDQUF1Qzs7OztJQVJwRCx5Q0FDWTs7SUFFWixvREFBK0I7O0lBRS9CLDZDQUMwQzs7SUFFMUMsK0NBQ3lCOztJQUV6QixvREFBdUI7O0lBRVgsd0NBQTZCOztJQUFFLG1EQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1kaXNwbGF5LWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgICAjZGlzcGxheV9jb250YWluZXJcbiAgICAgICAgICAgIGlneFNjcm9sbEluZXJ0aWFcbiAgICAgICAgICAgIFtJZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyXT1cInNjcm9sbENvbnRhaW5lclwiXG4gICAgICAgICAgICBbSWd4U2Nyb2xsSW5lcnRpYURpcmVjdGlvbl09XCJzY3JvbGxEaXJlY3Rpb25cIj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIERpc3BsYXlDb250YWluZXJDb21wb25lbnQge1xuICAgIEBWaWV3Q2hpbGQoJ2Rpc3BsYXlfY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgX3ZjcjtcblxuICAgIHB1YmxpYyBzY3JvbGxEaXJlY3Rpb246IHN0cmluZztcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtZGlzcGxheS1jb250YWluZXInO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZGlzcGxheS1jb250YWluZXItLWluYWN0aXZlJylcbiAgICBwdWJsaWMgbm90VmlydHVhbCA9IHRydWU7XG5cbiAgICBwdWJsaWMgc2Nyb2xsQ29udGFpbmVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikgeyB9XG59XG4iXX0=
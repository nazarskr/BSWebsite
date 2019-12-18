/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input, NgModule } from '@angular/core';
import { IgxNavigationService } from './nav.service';
/**
 * Directive that can toggle targets through provided NavigationService.
 *
 * Usage:
 * ```
 * <button igxNavToggle="ID"> Toggle </button>
 * ```
 * Where the `ID` matches the ID of compatible `IToggleView` component.
 */
var IgxNavigationToggleDirective = /** @class */ (function () {
    function IgxNavigationToggleDirective(nav) {
        this.state = nav;
    }
    /**
     * @return {?}
     */
    IgxNavigationToggleDirective.prototype.toggleNavigationDrawer = /**
     * @return {?}
     */
    function () {
        this.state.toggle(this.target, true);
    };
    IgxNavigationToggleDirective.decorators = [
        { type: Directive, args: [{ selector: '[igxNavToggle]' },] }
    ];
    /** @nocollapse */
    IgxNavigationToggleDirective.ctorParameters = function () { return [
        { type: IgxNavigationService }
    ]; };
    IgxNavigationToggleDirective.propDecorators = {
        target: [{ type: Input, args: ['igxNavToggle',] }],
        toggleNavigationDrawer: [{ type: HostListener, args: ['click',] }]
    };
    return IgxNavigationToggleDirective;
}());
export { IgxNavigationToggleDirective };
if (false) {
    /** @type {?} */
    IgxNavigationToggleDirective.prototype.state;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationToggleDirective.prototype.target;
}
/**
 * Directive that can close targets through provided NavigationService.
 *
 * Usage:
 * ```
 * <button igxNavClose="ID"> Close </button>
 * ```
 * Where the `ID` matches the ID of compatible `IToggleView` component.
 */
var IgxNavigationCloseDirective = /** @class */ (function () {
    function IgxNavigationCloseDirective(nav) {
        this.state = nav;
    }
    /**
     * @return {?}
     */
    IgxNavigationCloseDirective.prototype.closeNavigationDrawer = /**
     * @return {?}
     */
    function () {
        this.state.close(this.target, true);
    };
    IgxNavigationCloseDirective.decorators = [
        { type: Directive, args: [{ selector: '[igxNavClose]' },] }
    ];
    /** @nocollapse */
    IgxNavigationCloseDirective.ctorParameters = function () { return [
        { type: IgxNavigationService }
    ]; };
    IgxNavigationCloseDirective.propDecorators = {
        target: [{ type: Input, args: ['igxNavClose',] }],
        closeNavigationDrawer: [{ type: HostListener, args: ['click',] }]
    };
    return IgxNavigationCloseDirective;
}());
export { IgxNavigationCloseDirective };
if (false) {
    /** @type {?} */
    IgxNavigationCloseDirective.prototype.state;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationCloseDirective.prototype.target;
}
/**
 * @hidden
 */
var IgxNavigationModule = /** @class */ (function () {
    function IgxNavigationModule() {
    }
    IgxNavigationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxNavigationCloseDirective, IgxNavigationToggleDirective],
                    exports: [IgxNavigationCloseDirective, IgxNavigationToggleDirective],
                    providers: [IgxNavigationService]
                },] }
    ];
    return IgxNavigationModule;
}());
export { IgxNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9uYXZpZ2F0aW9uL2RpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBV25EO0lBTUksc0NBQVksR0FBeUI7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQzs7OztJQUdNLDZEQUFzQjs7O0lBRDdCO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFiSixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7Z0JBWGpDLG9CQUFvQjs7O3lCQWV2QixLQUFLLFNBQUMsY0FBYzt5Q0FNcEIsWUFBWSxTQUFDLE9BQU87O0lBSXpCLG1DQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksNEJBQTRCOzs7SUFDckMsNkNBQW1DOzs7OztJQUVuQyw4Q0FBc0M7Ozs7Ozs7Ozs7O0FBcUIxQztJQU1JLHFDQUFZLEdBQXlCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFHTSwyREFBcUI7OztJQUQ1QjtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBYkosU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs7OztnQkFwQ2hDLG9CQUFvQjs7O3lCQXdDdkIsS0FBSyxTQUFDLGFBQWE7d0NBTW5CLFlBQVksU0FBQyxPQUFPOztJQUl6QixrQ0FBQztDQUFBLEFBZEQsSUFjQztTQWJZLDJCQUEyQjs7O0lBQ3BDLDRDQUFtQzs7Ozs7SUFFbkMsNkNBQXFDOzs7OztBQWV6QztJQUFBO0lBS2tDLENBQUM7O2dCQUxsQyxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7b0JBQ3pFLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLDRCQUE0QixDQUFDO29CQUNwRSxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDcEM7O0lBQ2lDLDBCQUFDO0NBQUEsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJZ3hOYXZpZ2F0aW9uU2VydmljZX0gZnJvbSAnLi9uYXYuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgY2FuIHRvZ2dsZSB0YXJnZXRzIHRocm91Z2ggcHJvdmlkZWQgTmF2aWdhdGlvblNlcnZpY2UuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIDxidXR0b24gaWd4TmF2VG9nZ2xlPVwiSURcIj4gVG9nZ2xlIDwvYnV0dG9uPlxuICogYGBgXG4gKiBXaGVyZSB0aGUgYElEYCBtYXRjaGVzIHRoZSBJRCBvZiBjb21wYXRpYmxlIGBJVG9nZ2xlVmlld2AgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbaWd4TmF2VG9nZ2xlXScgfSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZpZ2F0aW9uVG9nZ2xlRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgc3RhdGU6IElneE5hdmlnYXRpb25TZXJ2aWNlO1xuXG4gICAgQElucHV0KCdpZ3hOYXZUb2dnbGUnKSBwcml2YXRlIHRhcmdldDtcblxuICAgIGNvbnN0cnVjdG9yKG5hdjogSWd4TmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5hdjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgcHVibGljIHRvZ2dsZU5hdmlnYXRpb25EcmF3ZXIoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlKHRoaXMudGFyZ2V0LCB0cnVlKTtcbiAgICB9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgY2FuIGNsb3NlIHRhcmdldHMgdGhyb3VnaCBwcm92aWRlZCBOYXZpZ2F0aW9uU2VydmljZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogPGJ1dHRvbiBpZ3hOYXZDbG9zZT1cIklEXCI+IENsb3NlIDwvYnV0dG9uPlxuICogYGBgXG4gKiBXaGVyZSB0aGUgYElEYCBtYXRjaGVzIHRoZSBJRCBvZiBjb21wYXRpYmxlIGBJVG9nZ2xlVmlld2AgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbaWd4TmF2Q2xvc2VdJyB9KVxuZXhwb3J0IGNsYXNzIElneE5hdmlnYXRpb25DbG9zZURpcmVjdGl2ZSB7XG4gICAgcHVibGljIHN0YXRlOiBJZ3hOYXZpZ2F0aW9uU2VydmljZTtcblxuICAgIEBJbnB1dCgnaWd4TmF2Q2xvc2UnKSBwcml2YXRlIHRhcmdldDtcblxuICAgIGNvbnN0cnVjdG9yKG5hdjogSWd4TmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5hdjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgcHVibGljIGNsb3NlTmF2aWdhdGlvbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jbG9zZSh0aGlzLnRhcmdldCwgdHJ1ZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hOYXZpZ2F0aW9uQ2xvc2VEaXJlY3RpdmUsIElneE5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hOYXZpZ2F0aW9uQ2xvc2VEaXJlY3RpdmUsIElneE5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmVdLFxuICAgIHByb3ZpZGVyczogW0lneE5hdmlnYXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=
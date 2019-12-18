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
export class IgxNavigationToggleDirective {
    /**
     * @param {?} nav
     */
    constructor(nav) {
        this.state = nav;
    }
    /**
     * @return {?}
     */
    toggleNavigationDrawer() {
        this.state.toggle(this.target, true);
    }
}
IgxNavigationToggleDirective.decorators = [
    { type: Directive, args: [{ selector: '[igxNavToggle]' },] }
];
/** @nocollapse */
IgxNavigationToggleDirective.ctorParameters = () => [
    { type: IgxNavigationService }
];
IgxNavigationToggleDirective.propDecorators = {
    target: [{ type: Input, args: ['igxNavToggle',] }],
    toggleNavigationDrawer: [{ type: HostListener, args: ['click',] }]
};
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
export class IgxNavigationCloseDirective {
    /**
     * @param {?} nav
     */
    constructor(nav) {
        this.state = nav;
    }
    /**
     * @return {?}
     */
    closeNavigationDrawer() {
        this.state.close(this.target, true);
    }
}
IgxNavigationCloseDirective.decorators = [
    { type: Directive, args: [{ selector: '[igxNavClose]' },] }
];
/** @nocollapse */
IgxNavigationCloseDirective.ctorParameters = () => [
    { type: IgxNavigationService }
];
IgxNavigationCloseDirective.propDecorators = {
    target: [{ type: Input, args: ['igxNavClose',] }],
    closeNavigationDrawer: [{ type: HostListener, args: ['click',] }]
};
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
export class IgxNavigationModule {
}
IgxNavigationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxNavigationCloseDirective, IgxNavigationToggleDirective],
                exports: [IgxNavigationCloseDirective, IgxNavigationToggleDirective],
                providers: [IgxNavigationService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9uYXZpZ2F0aW9uL2RpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBWW5ELE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFLckMsWUFBWSxHQUF5QjtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDOzs7O0lBR00sc0JBQXNCO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBYkosU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFOzs7O1lBWGpDLG9CQUFvQjs7O3FCQWV2QixLQUFLLFNBQUMsY0FBYztxQ0FNcEIsWUFBWSxTQUFDLE9BQU87Ozs7SUFSckIsNkNBQW1DOzs7OztJQUVuQyw4Q0FBc0M7Ozs7Ozs7Ozs7O0FBc0IxQyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBS3BDLFlBQVksR0FBeUI7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQzs7OztJQUdNLHFCQUFxQjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQWJKLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7Ozs7WUFwQ2hDLG9CQUFvQjs7O3FCQXdDdkIsS0FBSyxTQUFDLGFBQWE7b0NBTW5CLFlBQVksU0FBQyxPQUFPOzs7O0lBUnJCLDRDQUFtQzs7Ozs7SUFFbkMsNkNBQXFDOzs7OztBQW9CekMsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTC9CLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQztnQkFDekUsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7Z0JBQ3BFLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJZ3hOYXZpZ2F0aW9uU2VydmljZX0gZnJvbSAnLi9uYXYuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgY2FuIHRvZ2dsZSB0YXJnZXRzIHRocm91Z2ggcHJvdmlkZWQgTmF2aWdhdGlvblNlcnZpY2UuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIDxidXR0b24gaWd4TmF2VG9nZ2xlPVwiSURcIj4gVG9nZ2xlIDwvYnV0dG9uPlxuICogYGBgXG4gKiBXaGVyZSB0aGUgYElEYCBtYXRjaGVzIHRoZSBJRCBvZiBjb21wYXRpYmxlIGBJVG9nZ2xlVmlld2AgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbaWd4TmF2VG9nZ2xlXScgfSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZpZ2F0aW9uVG9nZ2xlRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgc3RhdGU6IElneE5hdmlnYXRpb25TZXJ2aWNlO1xuXG4gICAgQElucHV0KCdpZ3hOYXZUb2dnbGUnKSBwcml2YXRlIHRhcmdldDtcblxuICAgIGNvbnN0cnVjdG9yKG5hdjogSWd4TmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5hdjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgcHVibGljIHRvZ2dsZU5hdmlnYXRpb25EcmF3ZXIoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlKHRoaXMudGFyZ2V0LCB0cnVlKTtcbiAgICB9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgY2FuIGNsb3NlIHRhcmdldHMgdGhyb3VnaCBwcm92aWRlZCBOYXZpZ2F0aW9uU2VydmljZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogPGJ1dHRvbiBpZ3hOYXZDbG9zZT1cIklEXCI+IENsb3NlIDwvYnV0dG9uPlxuICogYGBgXG4gKiBXaGVyZSB0aGUgYElEYCBtYXRjaGVzIHRoZSBJRCBvZiBjb21wYXRpYmxlIGBJVG9nZ2xlVmlld2AgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbaWd4TmF2Q2xvc2VdJyB9KVxuZXhwb3J0IGNsYXNzIElneE5hdmlnYXRpb25DbG9zZURpcmVjdGl2ZSB7XG4gICAgcHVibGljIHN0YXRlOiBJZ3hOYXZpZ2F0aW9uU2VydmljZTtcblxuICAgIEBJbnB1dCgnaWd4TmF2Q2xvc2UnKSBwcml2YXRlIHRhcmdldDtcblxuICAgIGNvbnN0cnVjdG9yKG5hdjogSWd4TmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5hdjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgcHVibGljIGNsb3NlTmF2aWdhdGlvbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jbG9zZSh0aGlzLnRhcmdldCwgdHJ1ZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hOYXZpZ2F0aW9uQ2xvc2VEaXJlY3RpdmUsIElneE5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hOYXZpZ2F0aW9uQ2xvc2VEaXJlY3RpdmUsIElneE5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmVdLFxuICAgIHByb3ZpZGVyczogW0lneE5hdmlnYXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=
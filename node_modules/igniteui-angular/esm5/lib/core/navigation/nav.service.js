/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Common service to be injected between components where those implementing common
 * ToggleView interface can register and toggle directives can call their methods.
 * TODO: Track currently active? Events?
 */
var /**
 * Common service to be injected between components where those implementing common
 * ToggleView interface can register and toggle directives can call their methods.
 * TODO: Track currently active? Events?
 */
IgxNavigationService = /** @class */ (function () {
    function IgxNavigationService() {
        this.navs = {};
    }
    /**
     * @param {?} id
     * @param {?} navItem
     * @return {?}
     */
    IgxNavigationService.prototype.add = /**
     * @param {?} id
     * @param {?} navItem
     * @return {?}
     */
    function (id, navItem) {
        this.navs[id] = navItem;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IgxNavigationService.prototype.remove = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        delete this.navs[id];
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IgxNavigationService.prototype.get = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (id) {
            return this.navs[id];
        }
    };
    /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    IgxNavigationService.prototype.toggle = /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    function (id) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.navs[id]) {
            return (_a = this.navs[id]).toggle.apply(_a, tslib_1.__spread(args));
        }
    };
    /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    IgxNavigationService.prototype.open = /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    function (id) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.navs[id]) {
            return (_a = this.navs[id]).open.apply(_a, tslib_1.__spread(args));
        }
    };
    /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    IgxNavigationService.prototype.close = /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    function (id) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.navs[id]) {
            return (_a = this.navs[id]).close.apply(_a, tslib_1.__spread(args));
        }
    };
    return IgxNavigationService;
}());
/**
 * Common service to be injected between components where those implementing common
 * ToggleView interface can register and toggle directives can call their methods.
 * TODO: Track currently active? Events?
 */
export { IgxNavigationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxNavigationService.prototype.navs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmF2aWdhdGlvbi9uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0E7Ozs7OztJQUdJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU0sa0NBQUc7Ozs7O0lBQVYsVUFBVyxFQUFVLEVBQUUsT0FBb0I7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTSxxQ0FBTTs7OztJQUFiLFVBQWMsRUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxrQ0FBRzs7OztJQUFWLFVBQVcsRUFBVTtRQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7Ozs7OztJQUVNLHFDQUFNOzs7OztJQUFiLFVBQWMsRUFBVTs7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDZixPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsTUFBTSw0QkFBSSxJQUFJLEdBQUU7U0FDeEM7SUFDTCxDQUFDOzs7Ozs7SUFDTSxtQ0FBSTs7Ozs7SUFBWCxVQUFZLEVBQVU7O1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLElBQUksNEJBQUksSUFBSSxHQUFFO1NBQ3RDO0lBQ0wsQ0FBQzs7Ozs7O0lBQ00sb0NBQUs7Ozs7O0lBQVosVUFBYSxFQUFVOztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzVCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNmLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQyxLQUFLLDRCQUFJLElBQUksR0FBRTtTQUN2QztJQUNMLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7Ozs7Ozs7Ozs7OztJQW5DRyxvQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVG9nZ2xlVmlldyB9IGZyb20gJy4vSVRvZ2dsZVZpZXcnO1xuXG4vKipcbiAqIENvbW1vbiBzZXJ2aWNlIHRvIGJlIGluamVjdGVkIGJldHdlZW4gY29tcG9uZW50cyB3aGVyZSB0aG9zZSBpbXBsZW1lbnRpbmcgY29tbW9uXG4gKiBUb2dnbGVWaWV3IGludGVyZmFjZSBjYW4gcmVnaXN0ZXIgYW5kIHRvZ2dsZSBkaXJlY3RpdmVzIGNhbiBjYWxsIHRoZWlyIG1ldGhvZHMuXG4gKiBUT0RPOiBUcmFjayBjdXJyZW50bHkgYWN0aXZlPyBFdmVudHM/XG4gKi9cbmV4cG9ydCBjbGFzcyBJZ3hOYXZpZ2F0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBuYXZzOiB7IFtpZDogc3RyaW5nXTogSVRvZ2dsZVZpZXc7IH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYXZzID0ge307XG4gICAgfVxuXG4gICAgcHVibGljIGFkZChpZDogc3RyaW5nLCBuYXZJdGVtOiBJVG9nZ2xlVmlldykge1xuICAgICAgICB0aGlzLm5hdnNbaWRdID0gbmF2SXRlbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubmF2c1tpZF07XG4gICAgfVxuXG4gICAgcHVibGljIGdldChpZDogc3RyaW5nKTogSVRvZ2dsZVZpZXcge1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hdnNbaWRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZShpZDogc3RyaW5nLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdnNbaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXZzW2lkXS50b2dnbGUoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG9wZW4oaWQ6IHN0cmluZywgLi4uYXJncykge1xuICAgICAgICBpZiAodGhpcy5uYXZzW2lkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF2c1tpZF0ub3BlbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgY2xvc2UoaWQ6IHN0cmluZywgLi4uYXJncykge1xuICAgICAgICBpZiAodGhpcy5uYXZzW2lkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF2c1tpZF0uY2xvc2UoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
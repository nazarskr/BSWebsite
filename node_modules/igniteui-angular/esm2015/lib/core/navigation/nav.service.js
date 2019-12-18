/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Common service to be injected between components where those implementing common
 * ToggleView interface can register and toggle directives can call their methods.
 * TODO: Track currently active? Events?
 */
export class IgxNavigationService {
    constructor() {
        this.navs = {};
    }
    /**
     * @param {?} id
     * @param {?} navItem
     * @return {?}
     */
    add(id, navItem) {
        this.navs[id] = navItem;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        delete this.navs[id];
    }
    /**
     * @param {?} id
     * @return {?}
     */
    get(id) {
        if (id) {
            return this.navs[id];
        }
    }
    /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    toggle(id, ...args) {
        if (this.navs[id]) {
            return this.navs[id].toggle(...args);
        }
    }
    /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    open(id, ...args) {
        if (this.navs[id]) {
            return this.navs[id].open(...args);
        }
    }
    /**
     * @param {?} id
     * @param {...?} args
     * @return {?}
     */
    close(id, ...args) {
        if (this.navs[id]) {
            return this.navs[id].close(...args);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxNavigationService.prototype.navs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmF2aWdhdGlvbi9uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxNQUFNLE9BQU8sb0JBQW9CO0lBRzdCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU0sR0FBRyxDQUFDLEVBQVUsRUFBRSxPQUFvQjtRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVNLEdBQUcsQ0FBQyxFQUFVO1FBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLEVBQVUsRUFBRSxHQUFHLElBQUk7UUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQzs7Ozs7O0lBQ00sSUFBSSxDQUFDLEVBQVUsRUFBRSxHQUFHLElBQUk7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQzs7Ozs7O0lBQ00sS0FBSyxDQUFDLEVBQVUsRUFBRSxHQUFHLElBQUk7UUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7SUFuQ0csb0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRvZ2dsZVZpZXcgfSBmcm9tICcuL0lUb2dnbGVWaWV3JztcblxuLyoqXG4gKiBDb21tb24gc2VydmljZSB0byBiZSBpbmplY3RlZCBiZXR3ZWVuIGNvbXBvbmVudHMgd2hlcmUgdGhvc2UgaW1wbGVtZW50aW5nIGNvbW1vblxuICogVG9nZ2xlVmlldyBpbnRlcmZhY2UgY2FuIHJlZ2lzdGVyIGFuZCB0b2dnbGUgZGlyZWN0aXZlcyBjYW4gY2FsbCB0aGVpciBtZXRob2RzLlxuICogVE9ETzogVHJhY2sgY3VycmVudGx5IGFjdGl2ZT8gRXZlbnRzP1xuICovXG5leHBvcnQgY2xhc3MgSWd4TmF2aWdhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgbmF2czogeyBbaWQ6IHN0cmluZ106IElUb2dnbGVWaWV3OyB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmF2cyA9IHt9O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQoaWQ6IHN0cmluZywgbmF2SXRlbTogSVRvZ2dsZVZpZXcpIHtcbiAgICAgICAgdGhpcy5uYXZzW2lkXSA9IG5hdkl0ZW07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm5hdnNbaWRdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoaWQ6IHN0cmluZyk6IElUb2dnbGVWaWV3IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXZzW2lkXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoaWQ6IHN0cmluZywgLi4uYXJncykge1xuICAgICAgICBpZiAodGhpcy5uYXZzW2lkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF2c1tpZF0udG9nZ2xlKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvcGVuKGlkOiBzdHJpbmcsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMubmF2c1tpZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hdnNbaWRdLm9wZW4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNsb3NlKGlkOiBzdHJpbmcsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMubmF2c1tpZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hdnNbaWRdLmNsb3NlKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
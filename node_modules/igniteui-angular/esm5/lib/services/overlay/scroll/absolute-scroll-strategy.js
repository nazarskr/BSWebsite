/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ScrollStrategy } from './scroll-strategy';
/**
 * On scroll reposition the overlay content.
 */
var /**
 * On scroll reposition the overlay content.
 */
AbsoluteScrollStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(AbsoluteScrollStrategy, _super);
    function AbsoluteScrollStrategy(scrollContainer) {
        var _this = _super.call(this, scrollContainer) || this;
        _this._initialized = false;
        _this.onScroll = function () {
            _this._overlayService.repositionAll();
        };
        _this._scrollContainer = scrollContainer;
        return _this;
    }
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @param {?} document
     * @param {?} overlayService
     * @param {?} id
     * @return {?}
     */
    AbsoluteScrollStrategy.prototype.initialize = /**
     * \@inheritdoc
     * @param {?} document
     * @param {?} overlayService
     * @param {?} id
     * @return {?}
     */
    function (document, overlayService, id) {
        if (this._initialized) {
            return;
        }
        this._overlayService = overlayService;
        this._id = id;
        this._document = document;
        this._zone = overlayService.getOverlayById(id).ngZone;
        this._initialized = true;
    };
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @return {?}
     */
    AbsoluteScrollStrategy.prototype.attach = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._zone) {
            this._zone.runOutsideAngular(function () {
                _this.addScrollEventListener();
            });
        }
        else {
            this.addScrollEventListener();
        }
    };
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @return {?}
     */
    AbsoluteScrollStrategy.prototype.detach = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        if (this._scrollContainer) {
            this._scrollContainer.removeEventListener('scroll', this.onScroll, true);
        }
        else {
            this._document.removeEventListener('scroll', this.onScroll, true);
        }
        this._initialized = false;
    };
    /**
     * @private
     * @return {?}
     */
    AbsoluteScrollStrategy.prototype.addScrollEventListener = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._scrollContainer) {
            this._scrollContainer.addEventListener('scroll', this.onScroll, true);
        }
        else {
            this._document.addEventListener('scroll', this.onScroll, true);
        }
    };
    return AbsoluteScrollStrategy;
}(ScrollStrategy));
/**
 * On scroll reposition the overlay content.
 */
export { AbsoluteScrollStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AbsoluteScrollStrategy.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    AbsoluteScrollStrategy.prototype._document;
    /**
     * @type {?}
     * @private
     */
    AbsoluteScrollStrategy.prototype._overlayService;
    /**
     * @type {?}
     * @private
     */
    AbsoluteScrollStrategy.prototype._id;
    /**
     * @type {?}
     * @private
     */
    AbsoluteScrollStrategy.prototype._scrollContainer;
    /**
     * @type {?}
     * @private
     */
    AbsoluteScrollStrategy.prototype._zone;
    /**
     * @type {?}
     * @private
     */
    AbsoluteScrollStrategy.prototype.onScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzb2x1dGUtc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Njcm9sbC9hYnNvbHV0ZS1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFNbkQ7Ozs7SUFBNEMsa0RBQWM7SUFRdEQsZ0NBQVksZUFBNkI7UUFBekMsWUFDSSxrQkFBTSxlQUFlLENBQUMsU0FFekI7UUFWTyxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQXNEckIsY0FBUSxHQUFHO1lBQ2YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUE7UUEvQ0csS0FBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQzs7SUFDNUMsQ0FBQztJQUVELGtCQUFrQjs7Ozs7Ozs7SUFDWCwyQ0FBVTs7Ozs7OztJQUFqQixVQUFrQixRQUFrQixFQUFFLGNBQWlDLEVBQUUsRUFBVTtRQUMvRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxrQkFBa0I7Ozs7O0lBQ1gsdUNBQU07Ozs7SUFBYjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDekIsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCOzs7OztJQUNYLHVDQUFNOzs7O0lBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7OztJQUVPLHVEQUFzQjs7OztJQUE5QjtRQUNJLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFLTCw2QkFBQztBQUFELENBQUMsQUExREQsQ0FBNEMsY0FBYyxHQTBEekQ7Ozs7Ozs7Ozs7SUF6REcsOENBQTZCOzs7OztJQUM3QiwyQ0FBNEI7Ozs7O0lBQzVCLGlEQUEyQzs7Ozs7SUFDM0MscUNBQW9COzs7OztJQUNwQixrREFBc0M7Ozs7O0lBQ3RDLHVDQUFzQjs7Ozs7SUFpRHRCLDBDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4T3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9vdmVybGF5JztcbmltcG9ydCB7IFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi9zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogT24gc2Nyb2xsIHJlcG9zaXRpb24gdGhlIG92ZXJsYXkgY29udGVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFic29sdXRlU2Nyb2xsU3RyYXRlZ3kgZXh0ZW5kcyBTY3JvbGxTdHJhdGVneSB7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmU7XG5cbiAgICBjb25zdHJ1Y3RvcihzY3JvbGxDb250YWluZXI/OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihzY3JvbGxDb250YWluZXIpO1xuICAgICAgICB0aGlzLl9zY3JvbGxDb250YWluZXIgPSBzY3JvbGxDb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHVibGljIGluaXRpYWxpemUoZG9jdW1lbnQ6IERvY3VtZW50LCBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2UsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UgPSBvdmVybGF5U2VydmljZTtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgdGhpcy5fem9uZSA9IG92ZXJsYXlTZXJ2aWNlLmdldE92ZXJsYXlCeUlkKGlkKS5uZ1pvbmU7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgYXR0YWNoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fem9uZSkge1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxFdmVudExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHVibGljIGRldGFjaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5yZXBvc2l0aW9uQWxsKCk7XG4gICAgfVxufVxuIl19
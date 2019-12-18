/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ScrollStrategy } from './scroll-strategy';
/**
 * On scroll reposition the overlay content.
 */
export class AbsoluteScrollStrategy extends ScrollStrategy {
    /**
     * @param {?=} scrollContainer
     */
    constructor(scrollContainer) {
        super(scrollContainer);
        this._initialized = false;
        this.onScroll = () => {
            this._overlayService.repositionAll();
        };
        this._scrollContainer = scrollContainer;
    }
    /**
     * \@inheritdoc
     * @param {?} document
     * @param {?} overlayService
     * @param {?} id
     * @return {?}
     */
    initialize(document, overlayService, id) {
        if (this._initialized) {
            return;
        }
        this._overlayService = overlayService;
        this._id = id;
        this._document = document;
        this._zone = overlayService.getOverlayById(id).ngZone;
        this._initialized = true;
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    attach() {
        if (this._zone) {
            this._zone.runOutsideAngular(() => {
                this.addScrollEventListener();
            });
        }
        else {
            this.addScrollEventListener();
        }
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    detach() {
        if (this._scrollContainer) {
            this._scrollContainer.removeEventListener('scroll', this.onScroll, true);
        }
        else {
            this._document.removeEventListener('scroll', this.onScroll, true);
        }
        this._initialized = false;
    }
    /**
     * @private
     * @return {?}
     */
    addScrollEventListener() {
        if (this._scrollContainer) {
            this._scrollContainer.addEventListener('scroll', this.onScroll, true);
        }
        else {
            this._document.addEventListener('scroll', this.onScroll, true);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzb2x1dGUtc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Njcm9sbC9hYnNvbHV0ZS1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU1uRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsY0FBYzs7OztJQVF0RCxZQUFZLGVBQTZCO1FBQ3JDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQVJuQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQXNEckIsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQTtRQS9DRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7O0lBR00sVUFBVSxDQUFDLFFBQWtCLEVBQUUsY0FBaUMsRUFBRSxFQUFVO1FBQy9FLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFHTSxNQUFNO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQzs7Ozs7SUFHTSxNQUFNO1FBQ1QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTyxzQkFBc0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pFO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztDQUtKOzs7Ozs7SUF6REcsOENBQTZCOzs7OztJQUM3QiwyQ0FBNEI7Ozs7O0lBQzVCLGlEQUEyQzs7Ozs7SUFDM0MscUNBQW9COzs7OztJQUNwQixrREFBc0M7Ozs7O0lBQ3RDLHVDQUFzQjs7Ozs7SUFpRHRCLDBDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4T3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9vdmVybGF5JztcbmltcG9ydCB7IFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi9zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogT24gc2Nyb2xsIHJlcG9zaXRpb24gdGhlIG92ZXJsYXkgY29udGVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFic29sdXRlU2Nyb2xsU3RyYXRlZ3kgZXh0ZW5kcyBTY3JvbGxTdHJhdGVneSB7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmU7XG5cbiAgICBjb25zdHJ1Y3RvcihzY3JvbGxDb250YWluZXI/OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihzY3JvbGxDb250YWluZXIpO1xuICAgICAgICB0aGlzLl9zY3JvbGxDb250YWluZXIgPSBzY3JvbGxDb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHVibGljIGluaXRpYWxpemUoZG9jdW1lbnQ6IERvY3VtZW50LCBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2UsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UgPSBvdmVybGF5U2VydmljZTtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgdGhpcy5fem9uZSA9IG92ZXJsYXlTZXJ2aWNlLmdldE92ZXJsYXlCeUlkKGlkKS5uZ1pvbmU7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgYXR0YWNoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fem9uZSkge1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxFdmVudExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHVibGljIGRldGFjaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5yZXBvc2l0aW9uQWxsKCk7XG4gICAgfVxufVxuIl19
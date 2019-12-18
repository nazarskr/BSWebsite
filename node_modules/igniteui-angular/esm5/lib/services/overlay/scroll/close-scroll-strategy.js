/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ScrollStrategy } from './scroll-strategy';
/**
 * Uses a tolerance and closes the shown component upon scrolling if the tolerance is exceeded
 */
var /**
 * Uses a tolerance and closes the shown component upon scrolling if the tolerance is exceeded
 */
CloseScrollStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(CloseScrollStrategy, _super);
    function CloseScrollStrategy(scrollContainer) {
        var _this = _super.call(this, scrollContainer) || this;
        _this._initialized = false;
        _this.onScroll = function (ev) {
            if (!_this._sourceElement) {
                return;
            }
            _this.cumulativeScrollTop += _this._sourceElement.scrollTop;
            _this.cumulativeScrollLeft += _this._sourceElement.scrollLeft;
            if (Math.abs(_this.cumulativeScrollTop - _this.initialScrollTop) > _this._threshold ||
                Math.abs(_this.cumulativeScrollLeft - _this.initialScrollLeft) > _this._threshold) {
                _this._document.removeEventListener('scroll', _this.onScroll, true);
                _this._overlayService.hide(_this._id);
            }
        };
        _this._scrollContainer = scrollContainer;
        _this._threshold = 10;
        _this.cumulativeScrollTop = 0;
        _this.cumulativeScrollLeft = 0;
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
    CloseScrollStrategy.prototype.initialize = /**
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
        this._initialized = true;
    };
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @return {?}
     */
    CloseScrollStrategy.prototype.attach = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        if (this._scrollContainer) {
            this._scrollContainer.addEventListener('scroll', this.onScroll);
            this._sourceElement = this._scrollContainer;
        }
        else {
            this._document.addEventListener('scroll', this.onScroll);
            if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
                this._sourceElement = (/** @type {?} */ (document.documentElement));
            }
            else if (document.body.scrollHeight > document.body.clientHeight) {
                this._sourceElement = (/** @type {?} */ (document.body));
            }
        }
        if (!this._sourceElement) {
            return;
        }
        this.cumulativeScrollTop = 0;
        this.cumulativeScrollLeft = 0;
        this.initialScrollTop = this._sourceElement.scrollTop;
        this.initialScrollLeft = this._sourceElement.scrollLeft;
    };
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @return {?}
     */
    CloseScrollStrategy.prototype.detach = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        // TODO: check why event listener removes only on first call and remains on each next!!!
        if (this._scrollContainer) {
            this._scrollContainer.removeEventListener('scroll', this.onScroll);
        }
        else {
            this._document.removeEventListener('scroll', this.onScroll);
        }
        this._sourceElement = null;
        this.cumulativeScrollTop = 0;
        this.cumulativeScrollLeft = 0;
        this.initialScrollTop = 0;
        this.initialScrollLeft = 0;
        this._initialized = false;
    };
    return CloseScrollStrategy;
}(ScrollStrategy));
/**
 * Uses a tolerance and closes the shown component upon scrolling if the tolerance is exceeded
 */
export { CloseScrollStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._document;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._overlayService;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._id;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype.initialScrollTop;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype.initialScrollLeft;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype.cumulativeScrollTop;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype.cumulativeScrollLeft;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._threshold;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._sourceElement;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._scrollContainer;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype.onScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2Utc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Njcm9sbC9jbG9zZS1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFLbkQ7Ozs7SUFBeUMsK0NBQWM7SUFhbkQsNkJBQVksZUFBNkI7UUFBekMsWUFDSSxrQkFBTSxlQUFlLENBQUMsU0FLekI7UUFWTyxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQStEckIsY0FBUSxHQUFHLFVBQUMsRUFBUztZQUN6QixJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdEIsT0FBTzthQUNWO1lBRUQsS0FBSSxDQUFDLG1CQUFtQixJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQzFELEtBQUksQ0FBQyxvQkFBb0IsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztZQUU1RCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVO2dCQUM1RSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNoRixLQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkM7UUFDTCxDQUFDLENBQUE7UUF0RUcsS0FBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7O0lBQ2xDLENBQUM7SUFFRCxrQkFBa0I7Ozs7Ozs7O0lBQ1gsd0NBQVU7Ozs7Ozs7SUFBakIsVUFBa0IsUUFBa0IsRUFBRSxjQUFpQyxFQUFFLEVBQVU7UUFDL0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELGtCQUFrQjs7Ozs7SUFDWCxvQ0FBTTs7OztJQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDL0M7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFO2dCQUMvRSxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxlQUFlLEVBQVcsQ0FBQzthQUM3RDtpQkFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQVcsQ0FBQzthQUNsRDtTQUNKO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDNUQsQ0FBQztJQUVELGtCQUFrQjs7Ozs7SUFDWCxvQ0FBTTs7OztJQUFiO1FBQ0ksd0ZBQXdGO1FBQ3hGLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RFO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFnQkwsMEJBQUM7QUFBRCxDQUFDLEFBdEZELENBQXlDLGNBQWMsR0FzRnREOzs7Ozs7Ozs7O0lBckZHLHdDQUE0Qjs7Ozs7SUFDNUIsOENBQTJDOzs7OztJQUMzQyxrQ0FBb0I7Ozs7O0lBQ3BCLCtDQUFpQzs7Ozs7SUFDakMsZ0RBQWtDOzs7OztJQUNsQyxrREFBb0M7Ozs7O0lBQ3BDLG1EQUFxQzs7Ozs7SUFDckMseUNBQTJCOzs7OztJQUMzQiwyQ0FBNkI7Ozs7O0lBQzdCLDZDQUFnQzs7Ozs7SUFDaEMsK0NBQXNDOzs7OztJQTZEdEMsdUNBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hPdmVybGF5U2VydmljZSB9IGZyb20gJy4uL292ZXJsYXknO1xuaW1wb3J0IHsgU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICcuL3Njcm9sbC1zdHJhdGVneSc7XG5cbi8qKlxuICogVXNlcyBhIHRvbGVyYW5jZSBhbmQgY2xvc2VzIHRoZSBzaG93biBjb21wb25lbnQgdXBvbiBzY3JvbGxpbmcgaWYgdGhlIHRvbGVyYW5jZSBpcyBleGNlZWRlZFxuICovXG5leHBvcnQgY2xhc3MgQ2xvc2VTY3JvbGxTdHJhdGVneSBleHRlbmRzIFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpbml0aWFsU2Nyb2xsVG9wOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBpbml0aWFsU2Nyb2xsTGVmdDogbnVtYmVyO1xuICAgIHByaXZhdGUgY3VtdWxhdGl2ZVNjcm9sbFRvcDogbnVtYmVyO1xuICAgIHByaXZhdGUgY3VtdWxhdGl2ZVNjcm9sbExlZnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF90aHJlc2hvbGQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3NvdXJjZUVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHNjcm9sbENvbnRhaW5lcj86IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuX3Njcm9sbENvbnRhaW5lciA9IHNjcm9sbENvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5fdGhyZXNob2xkID0gMTA7XG4gICAgICAgIHRoaXMuY3VtdWxhdGl2ZVNjcm9sbFRvcCA9IDA7XG4gICAgICAgIHRoaXMuY3VtdWxhdGl2ZVNjcm9sbExlZnQgPSAwO1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHB1YmxpYyBpbml0aWFsaXplKGRvY3VtZW50OiBEb2N1bWVudCwgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLCBpZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX292ZXJsYXlTZXJ2aWNlID0gb3ZlcmxheVNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgYXR0YWNoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VFbGVtZW50ID0gdGhpcy5fc2Nyb2xsQ29udGFpbmVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VyY2VFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VyY2VFbGVtZW50ID0gZG9jdW1lbnQuYm9keSBhcyBFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9zb3VyY2VFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1bXVsYXRpdmVTY3JvbGxUb3AgPSAwO1xuICAgICAgICB0aGlzLmN1bXVsYXRpdmVTY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsU2Nyb2xsVG9wID0gdGhpcy5fc291cmNlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjcm9sbExlZnQgPSB0aGlzLl9zb3VyY2VFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHVibGljIGRldGFjaCgpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgd2h5IGV2ZW50IGxpc3RlbmVyIHJlbW92ZXMgb25seSBvbiBmaXJzdCBjYWxsIGFuZCByZW1haW5zIG9uIGVhY2ggbmV4dCEhIVxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VyY2VFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdW11bGF0aXZlU2Nyb2xsVG9wID0gMDtcbiAgICAgICAgdGhpcy5jdW11bGF0aXZlU2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjcm9sbFRvcCA9IDA7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjcm9sbExlZnQgPSAwO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TY3JvbGwgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fc291cmNlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdW11bGF0aXZlU2Nyb2xsVG9wICs9IHRoaXMuX3NvdXJjZUVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICB0aGlzLmN1bXVsYXRpdmVTY3JvbGxMZWZ0ICs9IHRoaXMuX3NvdXJjZUVsZW1lbnQuc2Nyb2xsTGVmdDtcblxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5jdW11bGF0aXZlU2Nyb2xsVG9wIC0gdGhpcy5pbml0aWFsU2Nyb2xsVG9wKSA+IHRoaXMuX3RocmVzaG9sZCB8fFxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy5jdW11bGF0aXZlU2Nyb2xsTGVmdCAtIHRoaXMuaW5pdGlhbFNjcm9sbExlZnQpID4gdGhpcy5fdGhyZXNob2xkKSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlTZXJ2aWNlLmhpZGUodGhpcy5faWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
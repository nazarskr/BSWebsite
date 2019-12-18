/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ScrollStrategy } from './scroll-strategy';
/**
 * Uses a tolerance and closes the shown component upon scrolling if the tolerance is exceeded
 */
export class CloseScrollStrategy extends ScrollStrategy {
    /**
     * @param {?=} scrollContainer
     */
    constructor(scrollContainer) {
        super(scrollContainer);
        this._initialized = false;
        this.onScroll = (ev) => {
            if (!this._sourceElement) {
                return;
            }
            this.cumulativeScrollTop += this._sourceElement.scrollTop;
            this.cumulativeScrollLeft += this._sourceElement.scrollLeft;
            if (Math.abs(this.cumulativeScrollTop - this.initialScrollTop) > this._threshold ||
                Math.abs(this.cumulativeScrollLeft - this.initialScrollLeft) > this._threshold) {
                this._document.removeEventListener('scroll', this.onScroll, true);
                this._overlayService.hide(this._id);
            }
        };
        this._scrollContainer = scrollContainer;
        this._threshold = 10;
        this.cumulativeScrollTop = 0;
        this.cumulativeScrollLeft = 0;
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
        this._initialized = true;
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    attach() {
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
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    detach() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2Utc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Njcm9sbC9jbG9zZS1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtuRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYzs7OztJQWFuRCxZQUFZLGVBQTZCO1FBQ3JDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUxuQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQStEckIsYUFBUSxHQUFHLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3RCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUMxRCxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFFNUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVTtnQkFDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDaEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxDQUFBO1FB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QUE2Qjs7Ozs7SUFDN0IsNkNBQWdDOzs7OztJQUNoQywrQ0FBc0M7Ozs7O0lBNkR0Qyx1Q0FhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElneE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vb3ZlcmxheSc7XG5pbXBvcnQgeyBTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4vc2Nyb2xsLXN0cmF0ZWd5JztcblxuLyoqXG4gKiBVc2VzIGEgdG9sZXJhbmNlIGFuZCBjbG9zZXMgdGhlIHNob3duIGNvbXBvbmVudCB1cG9uIHNjcm9sbGluZyBpZiB0aGUgdG9sZXJhbmNlIGlzIGV4Y2VlZGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG9zZVNjcm9sbFN0cmF0ZWd5IGV4dGVuZHMgU2Nyb2xsU3RyYXRlZ3kge1xuICAgIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcbiAgICBwcml2YXRlIF9vdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGluaXRpYWxTY3JvbGxUb3A6IG51bWJlcjtcbiAgICBwcml2YXRlIGluaXRpYWxTY3JvbGxMZWZ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjdW11bGF0aXZlU2Nyb2xsVG9wOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjdW11bGF0aXZlU2Nyb2xsTGVmdDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfc291cmNlRWxlbWVudDogRWxlbWVudDtcbiAgICBwcml2YXRlIF9zY3JvbGxDb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2Nyb2xsQ29udGFpbmVyPzogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVyO1xuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSAxMDtcbiAgICAgICAgdGhpcy5jdW11bGF0aXZlU2Nyb2xsVG9wID0gMDtcbiAgICAgICAgdGhpcy5jdW11bGF0aXZlU2Nyb2xsTGVmdCA9IDA7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHVibGljIGluaXRpYWxpemUoZG9jdW1lbnQ6IERvY3VtZW50LCBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2UsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UgPSBvdmVybGF5U2VydmljZTtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHB1YmxpYyBhdHRhY2goKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZUVsZW1lbnQgPSB0aGlzLl9zY3JvbGxDb250YWluZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3NvdXJjZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VtdWxhdGl2ZVNjcm9sbFRvcCA9IDA7XG4gICAgICAgIHRoaXMuY3VtdWxhdGl2ZVNjcm9sbExlZnQgPSAwO1xuICAgICAgICB0aGlzLmluaXRpYWxTY3JvbGxUb3AgPSB0aGlzLl9zb3VyY2VFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgdGhpcy5pbml0aWFsU2Nyb2xsTGVmdCA9IHRoaXMuX3NvdXJjZUVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgZGV0YWNoKCk6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBjaGVjayB3aHkgZXZlbnQgbGlzdGVuZXIgcmVtb3ZlcyBvbmx5IG9uIGZpcnN0IGNhbGwgYW5kIHJlbWFpbnMgb24gZWFjaCBuZXh0ISEhXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvdXJjZUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmN1bXVsYXRpdmVTY3JvbGxUb3AgPSAwO1xuICAgICAgICB0aGlzLmN1bXVsYXRpdmVTY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsU2Nyb2xsVG9wID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsU2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNjcm9sbCA9IChldjogRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9zb3VyY2VFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1bXVsYXRpdmVTY3JvbGxUb3AgKz0gdGhpcy5fc291cmNlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHRoaXMuY3VtdWxhdGl2ZVNjcm9sbExlZnQgKz0gdGhpcy5fc291cmNlRWxlbWVudC5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmN1bXVsYXRpdmVTY3JvbGxUb3AgLSB0aGlzLmluaXRpYWxTY3JvbGxUb3ApID4gdGhpcy5fdGhyZXNob2xkIHx8XG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLmN1bXVsYXRpdmVTY3JvbGxMZWZ0IC0gdGhpcy5pbml0aWFsU2Nyb2xsTGVmdCkgPiB0aGlzLl90aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLl9pZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
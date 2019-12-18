/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HorizontalAlignment, Util, VerticalAlignment } from './../utilities';
import { scaleInVerTop, scaleOutVerTop } from '../../../animations/main';
/**
 * Positions the element based on the directions and start point passed in trough PositionSettings.
 * It is possible to either pass a start point or an HTMLElement as a positioning base.
 */
export class ConnectedPositioningStrategy {
    /**
     * @param {?=} settings
     */
    constructor(settings) {
        this._defaultSettings = {
            // default Point(0, 0) in getPointFromPositionsSettings
            target: null,
            horizontalDirection: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            horizontalStartPoint: HorizontalAlignment.Left,
            verticalStartPoint: VerticalAlignment.Bottom,
            openAnimation: scaleInVerTop,
            closeAnimation: scaleOutVerTop,
            minSize: { width: 0, height: 0 }
        };
        this.settings = Object.assign({}, this._defaultSettings, settings);
    }
    /**
     * \@inheritdoc
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    position(contentElement, size, document, initialCall) {
        /** @type {?} */
        const targetRect = Util.getTargetRect(this.settings);
        /** @type {?} */
        const contentElementRect = contentElement.getBoundingClientRect();
        this.setStyle(contentElement, targetRect, contentElementRect);
    }
    /**
     * \@inheritdoc
     * Creates clone of this position strategy
     * @return {?} clone of this position strategy
     */
    clone() {
        return Util.cloneInstance(this);
    }
    /**
     * Sets element's style which effectively positions provided element according
     * to provided position settings
     * @protected
     * @param {?} element Element to position
     * @param {?} targetRect Bounding rectangle of strategy target
     * @param {?} elementRect Bounding rectangle of the element
     * @return {?}
     */
    setStyle(element, targetRect, elementRect) {
        /** @type {?} */
        const startPoint = {
            x: targetRect.right + targetRect.width * this.settings.horizontalStartPoint,
            y: targetRect.bottom + targetRect.height * this.settings.verticalStartPoint,
        };
        /** @type {?} */
        const wrapperRect = element.parentElement.getBoundingClientRect();
        //  clean up styles - if auto position strategy is chosen we may pass here several times
        element.style.right = '';
        element.style.left = '';
        element.style.bottom = '';
        element.style.top = '';
        switch (this.settings.horizontalDirection) {
            case HorizontalAlignment.Left:
                element.style.right = `${Math.round(wrapperRect.right - startPoint.x)}px`;
                break;
            case HorizontalAlignment.Center:
                element.style.left = `${Math.round(startPoint.x - wrapperRect.left - elementRect.width / 2)}px`;
                break;
            case HorizontalAlignment.Right:
                element.style.left = `${Math.round(startPoint.x - wrapperRect.left)}px`;
                break;
        }
        switch (this.settings.verticalDirection) {
            case VerticalAlignment.Top:
                element.style.bottom = `${Math.round(wrapperRect.bottom - startPoint.y)}px`;
                break;
            case VerticalAlignment.Middle:
                element.style.top = `${Math.round(startPoint.y - wrapperRect.top - elementRect.height / 2)}px`;
                break;
            case VerticalAlignment.Bottom:
                element.style.top = `${Math.round(startPoint.y - wrapperRect.top)}px`;
                break;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConnectedPositioningStrategy.prototype._defaultSettings;
    /**
     * \@inheritdoc
     * @type {?}
     */
    ConnectedPositioningStrategy.prototype.settings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGVkLXBvc2l0aW9uaW5nLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uL2Nvbm5lY3RlZC1wb3NpdGlvbmluZy1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLG1CQUFtQixFQUluQixJQUFJLEVBQ0osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNekUsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQWdCdkMsWUFBWSxRQUEyQjtRQWYvQixxQkFBZ0IsR0FBcUI7O1lBRTNDLE1BQU0sRUFBRSxJQUFJO1lBQ1osbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsS0FBSztZQUM5QyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNO1lBQzNDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLElBQUk7WUFDOUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsTUFBTTtZQUM1QyxhQUFhLEVBQUUsYUFBYTtZQUM1QixjQUFjLEVBQUUsY0FBYztZQUM5QixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7U0FDakMsQ0FBQztRQU1BLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7OztJQUdELFFBQVEsQ0FBQyxjQUEyQixFQUFFLElBQVUsRUFBRSxRQUFtQixFQUFFLFdBQXFCOztjQUNwRixVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOztjQUM5QyxrQkFBa0IsR0FB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dGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9JUG9zaXRpb25TdHJhdGVneSc7XG5pbXBvcnQge1xuICBIb3Jpem9udGFsQWxpZ25tZW50LFxuICBQb2ludCxcbiAgUG9zaXRpb25TZXR0aW5ncyxcbiAgU2l6ZSxcbiAgVXRpbCxcbiAgVmVydGljYWxBbGlnbm1lbnRcbn0gZnJvbSAnLi8uLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgc2NhbGVJblZlclRvcCwgc2NhbGVPdXRWZXJUb3AgfSBmcm9tICcuLi8uLi8uLi9hbmltYXRpb25zL21haW4nO1xuXG4vKipcbiAqIFBvc2l0aW9ucyB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgZGlyZWN0aW9ucyBhbmQgc3RhcnQgcG9pbnQgcGFzc2VkIGluIHRyb3VnaCBQb3NpdGlvblNldHRpbmdzLlxuICogSXQgaXMgcG9zc2libGUgdG8gZWl0aGVyIHBhc3MgYSBzdGFydCBwb2ludCBvciBhbiBIVE1MRWxlbWVudCBhcyBhIHBvc2l0aW9uaW5nIGJhc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5IGltcGxlbWVudHMgSVBvc2l0aW9uU3RyYXRlZ3kge1xuICBwcml2YXRlIF9kZWZhdWx0U2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3MgPSB7XG4gICAgLy8gZGVmYXVsdCBQb2ludCgwLCAwKSBpbiBnZXRQb2ludEZyb21Qb3NpdGlvbnNTZXR0aW5nc1xuICAgIHRhcmdldDogbnVsbCxcbiAgICBob3Jpem9udGFsRGlyZWN0aW9uOiBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0LFxuICAgIHZlcnRpY2FsRGlyZWN0aW9uOiBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b20sXG4gICAgaG9yaXpvbnRhbFN0YXJ0UG9pbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuTGVmdCxcbiAgICB2ZXJ0aWNhbFN0YXJ0UG9pbnQ6IFZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbSxcbiAgICBvcGVuQW5pbWF0aW9uOiBzY2FsZUluVmVyVG9wLFxuICAgIGNsb3NlQW5pbWF0aW9uOiBzY2FsZU91dFZlclRvcCxcbiAgICBtaW5TaXplOiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfVxuICB9O1xuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBwdWJsaWMgc2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3M7XG5cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M/OiBQb3NpdGlvblNldHRpbmdzKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHBvc2l0aW9uKGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgc2l6ZTogU2l6ZSwgZG9jdW1lbnQ/OiBEb2N1bWVudCwgaW5pdGlhbENhbGw/OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IFV0aWwuZ2V0VGFyZ2V0UmVjdCh0aGlzLnNldHRpbmdzKTtcbiAgICBjb25zdCBjb250ZW50RWxlbWVudFJlY3QgPSBjb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNldFN0eWxlKGNvbnRlbnRFbGVtZW50LCB0YXJnZXRSZWN0LCBjb250ZW50RWxlbWVudFJlY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0ZG9jXG4gICAqIENyZWF0ZXMgY2xvbmUgb2YgdGhpcyBwb3NpdGlvbiBzdHJhdGVneVxuICAgKiBAcmV0dXJucyBjbG9uZSBvZiB0aGlzIHBvc2l0aW9uIHN0cmF0ZWd5XG4gICAqL1xuICBjbG9uZSgpOiBJUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcmV0dXJuIFV0aWwuY2xvbmVJbnN0YW5jZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGVsZW1lbnQncyBzdHlsZSB3aGljaCBlZmZlY3RpdmVseSBwb3NpdGlvbnMgcHJvdmlkZWQgZWxlbWVudCBhY2NvcmRpbmdcbiAgICogdG8gcHJvdmlkZWQgcG9zaXRpb24gc2V0dGluZ3NcbiAgICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBwb3NpdGlvblxuICAgKiBAcGFyYW0gdGFyZ2V0UmVjdCBCb3VuZGluZyByZWN0YW5nbGUgb2Ygc3RyYXRlZ3kgdGFyZ2V0XG4gICAqIEBwYXJhbSBlbGVtZW50UmVjdCBCb3VuZGluZyByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnRcbiAgICovXG4gIHByb3RlY3RlZCBzZXRTdHlsZShlbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0UmVjdDogQ2xpZW50UmVjdCwgZWxlbWVudFJlY3Q6IENsaWVudFJlY3QpIHtcbiAgICBjb25zdCBzdGFydFBvaW50OiBQb2ludCA9IHtcbiAgICAgIHg6IHRhcmdldFJlY3QucmlnaHQgKyB0YXJnZXRSZWN0LndpZHRoICogdGhpcy5zZXR0aW5ncy5ob3Jpem9udGFsU3RhcnRQb2ludCxcbiAgICAgIHk6IHRhcmdldFJlY3QuYm90dG9tICsgdGFyZ2V0UmVjdC5oZWlnaHQgKiB0aGlzLnNldHRpbmdzLnZlcnRpY2FsU3RhcnRQb2ludCxcbiAgICB9O1xuICAgIGNvbnN0IHdyYXBwZXJSZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gIGNsZWFuIHVwIHN0eWxlcyAtIGlmIGF1dG8gcG9zaXRpb24gc3RyYXRlZ3kgaXMgY2hvc2VuIHdlIG1heSBwYXNzIGhlcmUgc2V2ZXJhbCB0aW1lc1xuICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSAnJztcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnJztcbiAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJyc7XG5cbiAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MuaG9yaXpvbnRhbERpcmVjdGlvbikge1xuICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LkxlZnQ6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSBgJHtNYXRoLnJvdW5kKHdyYXBwZXJSZWN0LnJpZ2h0IC0gc3RhcnRQb2ludC54KX1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjpcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7TWF0aC5yb3VuZChzdGFydFBvaW50LnggLSB3cmFwcGVyUmVjdC5sZWZ0IC0gZWxlbWVudFJlY3Qud2lkdGggLyAyKX1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0OlxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtNYXRoLnJvdW5kKHN0YXJ0UG9pbnQueCAtIHdyYXBwZXJSZWN0LmxlZnQpfXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLnNldHRpbmdzLnZlcnRpY2FsRGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LlRvcDpcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBgJHtNYXRoLnJvdW5kKHdyYXBwZXJSZWN0LmJvdHRvbSAtIHN0YXJ0UG9pbnQueSl9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuTWlkZGxlOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke01hdGgucm91bmQoc3RhcnRQb2ludC55IC0gd3JhcHBlclJlY3QudG9wIC0gZWxlbWVudFJlY3QuaGVpZ2h0IC8gMil9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuQm90dG9tOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke01hdGgucm91bmQoc3RhcnRQb2ludC55IC0gd3JhcHBlclJlY3QudG9wKX1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19
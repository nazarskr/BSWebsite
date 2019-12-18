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
var /**
 * Positions the element based on the directions and start point passed in trough PositionSettings.
 * It is possible to either pass a start point or an HTMLElement as a positioning base.
 */
ConnectedPositioningStrategy = /** @class */ (function () {
    function ConnectedPositioningStrategy(settings) {
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
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    ConnectedPositioningStrategy.prototype.position = /**
     * \@inheritdoc
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    function (contentElement, size, document, initialCall) {
        /** @type {?} */
        var targetRect = Util.getTargetRect(this.settings);
        /** @type {?} */
        var contentElementRect = contentElement.getBoundingClientRect();
        this.setStyle(contentElement, targetRect, contentElementRect);
    };
    /**
     * @inheritdoc
     * Creates clone of this position strategy
     * @returns clone of this position strategy
     */
    /**
     * \@inheritdoc
     * Creates clone of this position strategy
     * @return {?} clone of this position strategy
     */
    ConnectedPositioningStrategy.prototype.clone = /**
     * \@inheritdoc
     * Creates clone of this position strategy
     * @return {?} clone of this position strategy
     */
    function () {
        return Util.cloneInstance(this);
    };
    /**
     * Sets element's style which effectively positions provided element according
     * to provided position settings
     * @param element Element to position
     * @param targetRect Bounding rectangle of strategy target
     * @param elementRect Bounding rectangle of the element
     */
    /**
     * Sets element's style which effectively positions provided element according
     * to provided position settings
     * @protected
     * @param {?} element Element to position
     * @param {?} targetRect Bounding rectangle of strategy target
     * @param {?} elementRect Bounding rectangle of the element
     * @return {?}
     */
    ConnectedPositioningStrategy.prototype.setStyle = /**
     * Sets element's style which effectively positions provided element according
     * to provided position settings
     * @protected
     * @param {?} element Element to position
     * @param {?} targetRect Bounding rectangle of strategy target
     * @param {?} elementRect Bounding rectangle of the element
     * @return {?}
     */
    function (element, targetRect, elementRect) {
        /** @type {?} */
        var startPoint = {
            x: targetRect.right + targetRect.width * this.settings.horizontalStartPoint,
            y: targetRect.bottom + targetRect.height * this.settings.verticalStartPoint,
        };
        /** @type {?} */
        var wrapperRect = element.parentElement.getBoundingClientRect();
        //  clean up styles - if auto position strategy is chosen we may pass here several times
        element.style.right = '';
        element.style.left = '';
        element.style.bottom = '';
        element.style.top = '';
        switch (this.settings.horizontalDirection) {
            case HorizontalAlignment.Left:
                element.style.right = Math.round(wrapperRect.right - startPoint.x) + "px";
                break;
            case HorizontalAlignment.Center:
                element.style.left = Math.round(startPoint.x - wrapperRect.left - elementRect.width / 2) + "px";
                break;
            case HorizontalAlignment.Right:
                element.style.left = Math.round(startPoint.x - wrapperRect.left) + "px";
                break;
        }
        switch (this.settings.verticalDirection) {
            case VerticalAlignment.Top:
                element.style.bottom = Math.round(wrapperRect.bottom - startPoint.y) + "px";
                break;
            case VerticalAlignment.Middle:
                element.style.top = Math.round(startPoint.y - wrapperRect.top - elementRect.height / 2) + "px";
                break;
            case VerticalAlignment.Bottom:
                element.style.top = Math.round(startPoint.y - wrapperRect.top) + "px";
                break;
        }
    };
    return ConnectedPositioningStrategy;
}());
/**
 * Positions the element based on the directions and start point passed in trough PositionSettings.
 * It is possible to either pass a start point or an HTMLElement as a positioning base.
 */
export { ConnectedPositioningStrategy };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGVkLXBvc2l0aW9uaW5nLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uL2Nvbm5lY3RlZC1wb3NpdGlvbmluZy1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLG1CQUFtQixFQUluQixJQUFJLEVBQ0osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNekU7Ozs7O0lBZ0JFLHNDQUFZLFFBQTJCO1FBZi9CLHFCQUFnQixHQUFxQjs7WUFFM0MsTUFBTSxFQUFFLElBQUk7WUFDWixtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO1lBQzlDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLE1BQU07WUFDM0Msb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsSUFBSTtZQUM5QyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNO1lBQzVDLGFBQWEsRUFBRSxhQUFhO1lBQzVCLGNBQWMsRUFBRSxjQUFjO1lBQzlCLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtTQUNqQyxDQUFDO1FBTUEsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELGtCQUFrQjs7Ozs7Ozs7O0lBQ2xCLCtDQUFROzs7Ozs7OztJQUFSLFVBQVMsY0FBMkIsRUFBRSxJQUFVLEVBQUUsUUFBbUIsRUFBRSxXQUFxQjs7WUFDcEYsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7WUFDOUMsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLHFCQUFxQixFQUFFO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7SUFDSCw0Q0FBSzs7Ozs7SUFBTDtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7O0lBQ08sK0NBQVE7Ozs7Ozs7OztJQUFsQixVQUFtQixPQUFvQixFQUFFLFVBQXNCLEVBQUUsV0FBdUI7O1lBQ2hGLFVBQVUsR0FBVTtZQUN4QixDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CO1lBQzNFLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0I7U0FDNUU7O1lBQ0ssV0FBVyxHQUFlLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7UUFFN0Usd0ZBQXdGO1FBQ3hGLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUV2QixRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7WUFDekMsS0FBSyxtQkFBbUIsQ0FBQyxJQUFJO2dCQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFJLENBQUM7Z0JBQzFFLE1BQU07WUFDUixLQUFLLG1CQUFtQixDQUFDLE1BQU07Z0JBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQUksQ0FBQztnQkFDaEcsTUFBTTtZQUNSLEtBQUssbUJBQW1CLENBQUMsS0FBSztnQkFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBSSxDQUFDO2dCQUN4RSxNQUFNO1NBQ1Q7UUFFRCxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDdkMsS0FBSyxpQkFBaUIsQ0FBQyxHQUFHO2dCQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFJLENBQUM7Z0JBQzVFLE1BQU07WUFDUixLQUFLLGlCQUFpQixDQUFDLE1BQU07Z0JBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQUksQ0FBQztnQkFDL0YsTUFBTTtZQUNSLEtBQUssaUJBQWlCLENBQUMsTUFBTTtnQkFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBSSxDQUFDO2dCQUN0RSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBQ0gsbUNBQUM7QUFBRCxDQUFDLEFBaEZELElBZ0ZDOzs7Ozs7Ozs7OztJQS9FQyx3REFVRTs7Ozs7SUFHRixnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJy4vSVBvc2l0aW9uU3RyYXRlZ3knO1xuaW1wb3J0IHtcbiAgSG9yaXpvbnRhbEFsaWdubWVudCxcbiAgUG9pbnQsXG4gIFBvc2l0aW9uU2V0dGluZ3MsXG4gIFNpemUsXG4gIFV0aWwsXG4gIFZlcnRpY2FsQWxpZ25tZW50XG59IGZyb20gJy4vLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IHNjYWxlSW5WZXJUb3AsIHNjYWxlT3V0VmVyVG9wIH0gZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9ucy9tYWluJztcblxuLyoqXG4gKiBQb3NpdGlvbnMgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIGRpcmVjdGlvbnMgYW5kIHN0YXJ0IHBvaW50IHBhc3NlZCBpbiB0cm91Z2ggUG9zaXRpb25TZXR0aW5ncy5cbiAqIEl0IGlzIHBvc3NpYmxlIHRvIGVpdGhlciBwYXNzIGEgc3RhcnQgcG9pbnQgb3IgYW4gSFRNTEVsZW1lbnQgYXMgYSBwb3NpdGlvbmluZyBiYXNlLlxuICovXG5leHBvcnQgY2xhc3MgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSBpbXBsZW1lbnRzIElQb3NpdGlvblN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSBfZGVmYXVsdFNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzID0ge1xuICAgIC8vIGRlZmF1bHQgUG9pbnQoMCwgMCkgaW4gZ2V0UG9pbnRGcm9tUG9zaXRpb25zU2V0dGluZ3NcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgaG9yaXpvbnRhbERpcmVjdGlvbjogSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodCxcbiAgICB2ZXJ0aWNhbERpcmVjdGlvbjogVmVydGljYWxBbGlnbm1lbnQuQm90dG9tLFxuICAgIGhvcml6b250YWxTdGFydFBvaW50OiBIb3Jpem9udGFsQWxpZ25tZW50LkxlZnQsXG4gICAgdmVydGljYWxTdGFydFBvaW50OiBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b20sXG4gICAgb3BlbkFuaW1hdGlvbjogc2NhbGVJblZlclRvcCxcbiAgICBjbG9zZUFuaW1hdGlvbjogc2NhbGVPdXRWZXJUb3AsXG4gICAgbWluU2l6ZTogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH1cbiAgfTtcblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcHVibGljIHNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzPzogUG9zaXRpb25TZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBwb3NpdGlvbihjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIHNpemU6IFNpemUsIGRvY3VtZW50PzogRG9jdW1lbnQsIGluaXRpYWxDYWxsPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldFJlY3QgPSBVdGlsLmdldFRhcmdldFJlY3QodGhpcy5zZXR0aW5ncyk7XG4gICAgY29uc3QgY29udGVudEVsZW1lbnRSZWN0ID0gY29udGVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zZXRTdHlsZShjb250ZW50RWxlbWVudCwgdGFyZ2V0UmVjdCwgY29udGVudEVsZW1lbnRSZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5oZXJpdGRvY1xuICAgKiBDcmVhdGVzIGNsb25lIG9mIHRoaXMgcG9zaXRpb24gc3RyYXRlZ3lcbiAgICogQHJldHVybnMgY2xvbmUgb2YgdGhpcyBwb3NpdGlvbiBzdHJhdGVneVxuICAgKi9cbiAgY2xvbmUoKTogSVBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiBVdGlsLmNsb25lSW5zdGFuY2UodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBlbGVtZW50J3Mgc3R5bGUgd2hpY2ggZWZmZWN0aXZlbHkgcG9zaXRpb25zIHByb3ZpZGVkIGVsZW1lbnQgYWNjb3JkaW5nXG4gICAqIHRvIHByb3ZpZGVkIHBvc2l0aW9uIHNldHRpbmdzXG4gICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gcG9zaXRpb25cbiAgICogQHBhcmFtIHRhcmdldFJlY3QgQm91bmRpbmcgcmVjdGFuZ2xlIG9mIHN0cmF0ZWd5IHRhcmdldFxuICAgKiBAcGFyYW0gZWxlbWVudFJlY3QgQm91bmRpbmcgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0U3R5bGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldFJlY3Q6IENsaWVudFJlY3QsIGVsZW1lbnRSZWN0OiBDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgc3RhcnRQb2ludDogUG9pbnQgPSB7XG4gICAgICB4OiB0YXJnZXRSZWN0LnJpZ2h0ICsgdGFyZ2V0UmVjdC53aWR0aCAqIHRoaXMuc2V0dGluZ3MuaG9yaXpvbnRhbFN0YXJ0UG9pbnQsXG4gICAgICB5OiB0YXJnZXRSZWN0LmJvdHRvbSArIHRhcmdldFJlY3QuaGVpZ2h0ICogdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbFN0YXJ0UG9pbnQsXG4gICAgfTtcbiAgICBjb25zdCB3cmFwcGVyUmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vICBjbGVhbiB1cCBzdHlsZXMgLSBpZiBhdXRvIHBvc2l0aW9uIHN0cmF0ZWd5IGlzIGNob3NlbiB3ZSBtYXkgcGFzcyBoZXJlIHNldmVyYWwgdGltZXNcbiAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSAnJztcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcnO1xuXG4gICAgc3dpdGNoICh0aGlzLnNldHRpbmdzLmhvcml6b250YWxEaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5MZWZ0OlxuICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gYCR7TWF0aC5yb3VuZCh3cmFwcGVyUmVjdC5yaWdodCAtIHN0YXJ0UG9pbnQueCl9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke01hdGgucm91bmQoc3RhcnRQb2ludC54IC0gd3JhcHBlclJlY3QubGVmdCAtIGVsZW1lbnRSZWN0LndpZHRoIC8gMil9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodDpcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7TWF0aC5yb3VuZChzdGFydFBvaW50LnggLSB3cmFwcGVyUmVjdC5sZWZ0KX1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5zZXR0aW5ncy52ZXJ0aWNhbERpcmVjdGlvbikge1xuICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5Ub3A6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gYCR7TWF0aC5yb3VuZCh3cmFwcGVyUmVjdC5ib3R0b20gLSBzdGFydFBvaW50LnkpfXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50Lk1pZGRsZTpcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtNYXRoLnJvdW5kKHN0YXJ0UG9pbnQueSAtIHdyYXBwZXJSZWN0LnRvcCAtIGVsZW1lbnRSZWN0LmhlaWdodCAvIDIpfXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbTpcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtNYXRoLnJvdW5kKHN0YXJ0UG9pbnQueSAtIHdyYXBwZXJSZWN0LnRvcCl9cHhgO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==
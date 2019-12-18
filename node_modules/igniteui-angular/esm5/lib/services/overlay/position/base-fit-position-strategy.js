/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConnectedPositioningStrategy } from './connected-positioning-strategy';
import { Util } from '../utilities';
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseFitPositionStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(BaseFitPositionStrategy, _super);
    function BaseFitPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    BaseFitPositionStrategy.prototype.position = /**
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
        if (initialCall) {
            /** @type {?} */
            var connectedFit = {};
            connectedFit.targetRect = targetRect;
            connectedFit.contentElementRect = contentElementRect;
            this._initialSettings = this._initialSettings || Object.assign({}, this.settings);
            this.settings = Object.assign({}, this._initialSettings);
            connectedFit.viewPortRect = Util.getViewportRect(document);
            this.updateViewPortFit(connectedFit);
            if (!connectedFit.fitHorizontal || !connectedFit.fitVertical) {
                this.fitInViewport(contentElement, connectedFit);
            }
        }
        this.setStyle(contentElement, targetRect, contentElementRect);
    };
    /**
     * Checks if element can fit in viewport and updates provided connectedFit
     * with the result
     * @param connectedFit connectedFit to update
     */
    /**
     * Checks if element can fit in viewport and updates provided connectedFit
     * with the result
     * @protected
     * @param {?} connectedFit connectedFit to update
     * @return {?}
     */
    BaseFitPositionStrategy.prototype.updateViewPortFit = /**
     * Checks if element can fit in viewport and updates provided connectedFit
     * with the result
     * @protected
     * @param {?} connectedFit connectedFit to update
     * @return {?}
     */
    function (connectedFit) {
        connectedFit.left = this.calculateLeft(connectedFit.targetRect, connectedFit.contentElementRect, this.settings.horizontalStartPoint, this.settings.horizontalDirection);
        connectedFit.right = connectedFit.left + connectedFit.contentElementRect.width;
        connectedFit.fitHorizontal =
            connectedFit.viewPortRect.left < connectedFit.left && connectedFit.right < connectedFit.viewPortRect.right;
        connectedFit.top = this.calculateTop(connectedFit.targetRect, connectedFit.contentElementRect, this.settings.verticalStartPoint, this.settings.verticalDirection);
        connectedFit.bottom = connectedFit.top + connectedFit.contentElementRect.height;
        connectedFit.fitVertical =
            connectedFit.viewPortRect.top < connectedFit.top && connectedFit.bottom < connectedFit.viewPortRect.bottom;
    };
    /**
     * Calculates the position of the left border of the element if it gets positioned
     * with provided start point and direction
     * @param targetRect Rectangle of the target where element is attached
     * @param elementRect Rectangle of the element
     * @param startPoint Start point of the target
     * @param direction Direction in which to show the element
     */
    /**
     * Calculates the position of the left border of the element if it gets positioned
     * with provided start point and direction
     * @protected
     * @param {?} targetRect Rectangle of the target where element is attached
     * @param {?} elementRect Rectangle of the element
     * @param {?} startPoint Start point of the target
     * @param {?} direction Direction in which to show the element
     * @return {?}
     */
    BaseFitPositionStrategy.prototype.calculateLeft = /**
     * Calculates the position of the left border of the element if it gets positioned
     * with provided start point and direction
     * @protected
     * @param {?} targetRect Rectangle of the target where element is attached
     * @param {?} elementRect Rectangle of the element
     * @param {?} startPoint Start point of the target
     * @param {?} direction Direction in which to show the element
     * @return {?}
     */
    function (targetRect, elementRect, startPoint, direction) {
        return targetRect.right + targetRect.width * startPoint + elementRect.width * direction;
    };
    /**
     * Calculates the position of the top border of the element if it gets positioned
     * with provided position settings related to the target
     * @param targetRect Rectangle of the target where element is attached
     * @param elementRect Rectangle of the element
     * @param startPoint Start point of the target
     * @param direction Direction in which to show the element
     */
    /**
     * Calculates the position of the top border of the element if it gets positioned
     * with provided position settings related to the target
     * @protected
     * @param {?} targetRect Rectangle of the target where element is attached
     * @param {?} elementRect Rectangle of the element
     * @param {?} startPoint Start point of the target
     * @param {?} direction Direction in which to show the element
     * @return {?}
     */
    BaseFitPositionStrategy.prototype.calculateTop = /**
     * Calculates the position of the top border of the element if it gets positioned
     * with provided position settings related to the target
     * @protected
     * @param {?} targetRect Rectangle of the target where element is attached
     * @param {?} elementRect Rectangle of the element
     * @param {?} startPoint Start point of the target
     * @param {?} direction Direction in which to show the element
     * @return {?}
     */
    function (targetRect, elementRect, startPoint, direction) {
        return targetRect.bottom + targetRect.height * startPoint + elementRect.height * direction;
    };
    return BaseFitPositionStrategy;
}(ConnectedPositioningStrategy));
/**
 * @abstract
 */
export { BaseFitPositionStrategy };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseFitPositionStrategy.prototype._initialSize;
    /**
     * @type {?}
     * @protected
     */
    BaseFitPositionStrategy.prototype._initialSettings;
    /**
     * Fits the element into viewport according to the position settings
     * @abstract
     * @protected
     * @param {?} element element to fit in viewport
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?}
     */
    BaseFitPositionStrategy.prototype.fitInViewport = function (element, connectedFit) { };
}
/**
 * @record
 */
export function ConnectedFit() { }
if (false) {
    /** @type {?|undefined} */
    ConnectedFit.prototype.contentElementRect;
    /** @type {?|undefined} */
    ConnectedFit.prototype.targetRect;
    /** @type {?|undefined} */
    ConnectedFit.prototype.viewPortRect;
    /** @type {?|undefined} */
    ConnectedFit.prototype.fitHorizontal;
    /** @type {?|undefined} */
    ConnectedFit.prototype.fitVertical;
    /** @type {?|undefined} */
    ConnectedFit.prototype.left;
    /** @type {?|undefined} */
    ConnectedFit.prototype.right;
    /** @type {?|undefined} */
    ConnectedFit.prototype.top;
    /** @type {?|undefined} */
    ConnectedFit.prototype.bottom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maXQtcG9zaXRpb24tc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL292ZXJsYXkvcG9zaXRpb24vYmFzZS1maXQtcG9zaXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQWtFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUVwRzs7OztJQUFzRCxtREFBNEI7SUFBbEY7O0lBa0ZBLENBQUM7SUE5RUcsa0JBQWtCOzs7Ozs7Ozs7SUFDbEIsMENBQVE7Ozs7Ozs7O0lBQVIsVUFBUyxjQUEyQixFQUFFLElBQVUsRUFBRSxRQUFtQixFQUFFLFdBQXFCOztZQUNsRixVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOztZQUM5QyxrQkFBa0IsR0FBRyxjQUFjLENBQUMscUJBQXFCLEVBQUU7UUFDakUsSUFBSSxXQUFXLEVBQUU7O2dCQUNQLFlBQVksR0FBaUIsRUFBRTtZQUNyQyxZQUFZLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUNyQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RCxZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDcEQ7U0FDSjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNPLG1EQUFpQjs7Ozs7OztJQUEzQixVQUE0QixZQUEwQjtRQUNsRCxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQ2xDLFlBQVksQ0FBQyxVQUFVLEVBQ3ZCLFlBQVksQ0FBQyxrQkFBa0IsRUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBQy9FLFlBQVksQ0FBQyxhQUFhO1lBQ3RCLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUUvRyxZQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQ2hDLFlBQVksQ0FBQyxVQUFVLEVBQ3ZCLFlBQVksQ0FBQyxrQkFBa0IsRUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1FBQ2hGLFlBQVksQ0FBQyxXQUFXO1lBQ3BCLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUNuSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRzs7Ozs7Ozs7Ozs7SUFDTywrQ0FBYTs7Ozs7Ozs7OztJQUF2QixVQUNJLFVBQXNCLEVBQUUsV0FBdUIsRUFBRSxVQUErQixFQUFFLFNBQThCO1FBQ2hILE9BQU8sVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUM1RixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRzs7Ozs7Ozs7Ozs7SUFDTyw4Q0FBWTs7Ozs7Ozs7OztJQUF0QixVQUNJLFVBQXNCLEVBQUUsV0FBdUIsRUFBRSxVQUE2QixFQUFFLFNBQTRCO1FBQzVHLE9BQU8sVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUMvRixDQUFDO0lBVUwsOEJBQUM7QUFBRCxDQUFDLEFBbEZELENBQXNELDRCQUE0QixHQWtGakY7Ozs7Ozs7Ozs7SUFqRkcsK0NBQTZCOzs7OztJQUM3QixtREFBNkM7Ozs7Ozs7OztJQTZFN0MsdUZBRWdDOzs7OztBQUdwQyxrQ0FVQzs7O0lBVEcsMENBQWdDOztJQUNoQyxrQ0FBd0I7O0lBQ3hCLG9DQUEwQjs7SUFDMUIscUNBQXdCOztJQUN4QixtQ0FBc0I7O0lBQ3RCLDRCQUFjOztJQUNkLDZCQUFlOztJQUNmLDJCQUFhOztJQUNiLDhCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kgfSBmcm9tICcuL2Nvbm5lY3RlZC1wb3NpdGlvbmluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsQWxpZ25tZW50LCBWZXJ0aWNhbEFsaWdubWVudCwgUG9zaXRpb25TZXR0aW5ncywgU2l6ZSwgVXRpbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRml0UG9zaXRpb25TdHJhdGVneSBleHRlbmRzIENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kge1xuICAgIHByb3RlY3RlZCBfaW5pdGlhbFNpemU6IFNpemU7XG4gICAgcHJvdGVjdGVkIF9pbml0aWFsU2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3M7XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwb3NpdGlvbihjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIHNpemU6IFNpemUsIGRvY3VtZW50PzogRG9jdW1lbnQsIGluaXRpYWxDYWxsPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gVXRpbC5nZXRUYXJnZXRSZWN0KHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBjb25zdCBjb250ZW50RWxlbWVudFJlY3QgPSBjb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGluaXRpYWxDYWxsKSB7XG4gICAgICAgICAgICBjb25zdCBjb25uZWN0ZWRGaXQ6IENvbm5lY3RlZEZpdCA9IHt9O1xuICAgICAgICAgICAgY29ubmVjdGVkRml0LnRhcmdldFJlY3QgPSB0YXJnZXRSZWN0O1xuICAgICAgICAgICAgY29ubmVjdGVkRml0LmNvbnRlbnRFbGVtZW50UmVjdCA9IGNvbnRlbnRFbGVtZW50UmVjdDtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxTZXR0aW5ncyA9IHRoaXMuX2luaXRpYWxTZXR0aW5ncyB8fCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9pbml0aWFsU2V0dGluZ3MpO1xuICAgICAgICAgICAgY29ubmVjdGVkRml0LnZpZXdQb3J0UmVjdCA9IFV0aWwuZ2V0Vmlld3BvcnRSZWN0KGRvY3VtZW50KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlld1BvcnRGaXQoY29ubmVjdGVkRml0KTtcbiAgICAgICAgICAgIGlmICghY29ubmVjdGVkRml0LmZpdEhvcml6b250YWwgfHwgIWNvbm5lY3RlZEZpdC5maXRWZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZml0SW5WaWV3cG9ydChjb250ZW50RWxlbWVudCwgY29ubmVjdGVkRml0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0eWxlKGNvbnRlbnRFbGVtZW50LCB0YXJnZXRSZWN0LCBjb250ZW50RWxlbWVudFJlY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBlbGVtZW50IGNhbiBmaXQgaW4gdmlld3BvcnQgYW5kIHVwZGF0ZXMgcHJvdmlkZWQgY29ubmVjdGVkRml0XG4gICAgICogd2l0aCB0aGUgcmVzdWx0XG4gICAgICogQHBhcmFtIGNvbm5lY3RlZEZpdCBjb25uZWN0ZWRGaXQgdG8gdXBkYXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZpZXdQb3J0Rml0KGNvbm5lY3RlZEZpdDogQ29ubmVjdGVkRml0KSB7XG4gICAgICAgIGNvbm5lY3RlZEZpdC5sZWZ0ID0gdGhpcy5jYWxjdWxhdGVMZWZ0KFxuICAgICAgICAgICAgY29ubmVjdGVkRml0LnRhcmdldFJlY3QsXG4gICAgICAgICAgICBjb25uZWN0ZWRGaXQuY29udGVudEVsZW1lbnRSZWN0LFxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5ob3Jpem9udGFsU3RhcnRQb2ludCxcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuaG9yaXpvbnRhbERpcmVjdGlvbik7XG4gICAgICAgIGNvbm5lY3RlZEZpdC5yaWdodCA9IGNvbm5lY3RlZEZpdC5sZWZ0ICsgY29ubmVjdGVkRml0LmNvbnRlbnRFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgICAgY29ubmVjdGVkRml0LmZpdEhvcml6b250YWwgPVxuICAgICAgICAgICAgY29ubmVjdGVkRml0LnZpZXdQb3J0UmVjdC5sZWZ0IDwgY29ubmVjdGVkRml0LmxlZnQgJiYgY29ubmVjdGVkRml0LnJpZ2h0IDwgY29ubmVjdGVkRml0LnZpZXdQb3J0UmVjdC5yaWdodDtcblxuICAgICAgICBjb25uZWN0ZWRGaXQudG9wID0gdGhpcy5jYWxjdWxhdGVUb3AoXG4gICAgICAgICAgICBjb25uZWN0ZWRGaXQudGFyZ2V0UmVjdCxcbiAgICAgICAgICAgIGNvbm5lY3RlZEZpdC5jb250ZW50RWxlbWVudFJlY3QsXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnZlcnRpY2FsU3RhcnRQb2ludCxcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudmVydGljYWxEaXJlY3Rpb24pO1xuICAgICAgICBjb25uZWN0ZWRGaXQuYm90dG9tID0gY29ubmVjdGVkRml0LnRvcCArIGNvbm5lY3RlZEZpdC5jb250ZW50RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICBjb25uZWN0ZWRGaXQuZml0VmVydGljYWwgPVxuICAgICAgICAgICAgY29ubmVjdGVkRml0LnZpZXdQb3J0UmVjdC50b3AgPCBjb25uZWN0ZWRGaXQudG9wICYmIGNvbm5lY3RlZEZpdC5ib3R0b20gPCBjb25uZWN0ZWRGaXQudmlld1BvcnRSZWN0LmJvdHRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGVmdCBib3JkZXIgb2YgdGhlIGVsZW1lbnQgaWYgaXQgZ2V0cyBwb3NpdGlvbmVkXG4gICAgICogd2l0aCBwcm92aWRlZCBzdGFydCBwb2ludCBhbmQgZGlyZWN0aW9uXG4gICAgICogQHBhcmFtIHRhcmdldFJlY3QgUmVjdGFuZ2xlIG9mIHRoZSB0YXJnZXQgd2hlcmUgZWxlbWVudCBpcyBhdHRhY2hlZFxuICAgICAqIEBwYXJhbSBlbGVtZW50UmVjdCBSZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3RhcnRQb2ludCBTdGFydCBwb2ludCBvZiB0aGUgdGFyZ2V0XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBEaXJlY3Rpb24gaW4gd2hpY2ggdG8gc2hvdyB0aGUgZWxlbWVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVMZWZ0KFxuICAgICAgICB0YXJnZXRSZWN0OiBDbGllbnRSZWN0LCBlbGVtZW50UmVjdDogQ2xpZW50UmVjdCwgc3RhcnRQb2ludDogSG9yaXpvbnRhbEFsaWdubWVudCwgZGlyZWN0aW9uOiBIb3Jpem9udGFsQWxpZ25tZW50KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFJlY3QucmlnaHQgKyB0YXJnZXRSZWN0LndpZHRoICogc3RhcnRQb2ludCArIGVsZW1lbnRSZWN0LndpZHRoICogZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSB0b3AgYm9yZGVyIG9mIHRoZSBlbGVtZW50IGlmIGl0IGdldHMgcG9zaXRpb25lZFxuICAgICAqIHdpdGggcHJvdmlkZWQgcG9zaXRpb24gc2V0dGluZ3MgcmVsYXRlZCB0byB0aGUgdGFyZ2V0XG4gICAgICogQHBhcmFtIHRhcmdldFJlY3QgUmVjdGFuZ2xlIG9mIHRoZSB0YXJnZXQgd2hlcmUgZWxlbWVudCBpcyBhdHRhY2hlZFxuICAgICAqIEBwYXJhbSBlbGVtZW50UmVjdCBSZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3RhcnRQb2ludCBTdGFydCBwb2ludCBvZiB0aGUgdGFyZ2V0XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBEaXJlY3Rpb24gaW4gd2hpY2ggdG8gc2hvdyB0aGUgZWxlbWVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVUb3AoXG4gICAgICAgIHRhcmdldFJlY3Q6IENsaWVudFJlY3QsIGVsZW1lbnRSZWN0OiBDbGllbnRSZWN0LCBzdGFydFBvaW50OiBWZXJ0aWNhbEFsaWdubWVudCwgZGlyZWN0aW9uOiBWZXJ0aWNhbEFsaWdubWVudCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0YXJnZXRSZWN0LmJvdHRvbSArIHRhcmdldFJlY3QuaGVpZ2h0ICogc3RhcnRQb2ludCArIGVsZW1lbnRSZWN0LmhlaWdodCAqIGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXRzIHRoZSBlbGVtZW50IGludG8gdmlld3BvcnQgYWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbiBzZXR0aW5nc1xuICAgICAqIEBwYXJhbSBlbGVtZW50IGVsZW1lbnQgdG8gZml0IGluIHZpZXdwb3J0XG4gICAgICogQHBhcmFtIGNvbm5lY3RlZEZpdCBjb25uZWN0ZWRGaXQgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG5lY2Vzc2FyeSBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGZpdEluVmlld3BvcnQoXG4gICAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgICAgICBjb25uZWN0ZWRGaXQ6IENvbm5lY3RlZEZpdCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29ubmVjdGVkRml0IHtcbiAgICBjb250ZW50RWxlbWVudFJlY3Q/OiBDbGllbnRSZWN0O1xuICAgIHRhcmdldFJlY3Q/OiBDbGllbnRSZWN0O1xuICAgIHZpZXdQb3J0UmVjdD86IENsaWVudFJlY3Q7XG4gICAgZml0SG9yaXpvbnRhbD86IGJvb2xlYW47XG4gICAgZml0VmVydGljYWw/OiBib29sZWFuO1xuICAgIGxlZnQ/OiBudW1iZXI7XG4gICAgcmlnaHQ/OiBudW1iZXI7XG4gICAgdG9wPzogbnVtYmVyO1xuICAgIGJvdHRvbT86IG51bWJlcjtcbn1cbiJdfQ==
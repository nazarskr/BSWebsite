/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
/**
 * @hidden
 * @param {?} message
 * @return {?}
 */
export function DeprecateMethod(message) {
    /** @type {?} */
    var isMessageShown = false;
    return function (target, key, descriptor) {
        if (descriptor && descriptor.value) {
            /** @type {?} */
            var originalMethod_1 = descriptor.value;
            descriptor.value = function () {
                /** @type {?} */
                var targetName = typeof target === 'function' ? target.name : target.constructor.name;
                isMessageShown = showMessage(targetName + "." + key + ": " + message, isMessageShown);
                return originalMethod_1.call(this, arguments);
            };
            return descriptor;
        }
    };
}
/**
 * @hidden
 * @param {?} message
 * @return {?}
 */
export function DeprecateProperty(message) {
    return function (target, key) {
        /** @type {?} */
        var isMessageShown = false;
        /** @type {?} */
        var messageToDisplay = target.constructor.name + "." + key + ": " + message;
        // if the target already has the property defined
        /** @type {?} */
        var originalDescriptor = Object.getOwnPropertyDescriptor(target, key);
        if (originalDescriptor) {
            /** @type {?} */
            var getter_1;
            /** @type {?} */
            var setter_1;
            getter_1 = originalDescriptor.get;
            setter_1 = originalDescriptor.set;
            if (getter_1) {
                originalDescriptor.get = function () {
                    isMessageShown = showMessage(messageToDisplay, isMessageShown);
                    return getter_1.call(this);
                };
            }
            if (setter_1) {
                originalDescriptor.set = function (value) {
                    isMessageShown = showMessage(messageToDisplay, isMessageShown);
                    setter_1.call(this, value);
                };
            }
            return originalDescriptor;
        }
        // the target doesn't contain a descriptor for that property, so create one
        // use backing field to set/get the value of the property to ensure there won't be infinite recursive calls
        /** @type {?} */
        var newKey = generateUniqueKey(target, key);
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: true,
            set: function (value) {
                isMessageShown = showMessage(messageToDisplay, isMessageShown);
                this[newKey] = value;
            },
            get: function () {
                isMessageShown = showMessage(messageToDisplay, isMessageShown);
                return this[newKey];
            }
        });
    };
}
/**
 * @hidden
 * @param {?} target
 * @param {?} key
 * @return {?}
 */
function generateUniqueKey(target, key) {
    /** @type {?} */
    var newKey = '_' + key;
    while (target.hasOwnProperty(newKey)) {
        newKey = '_' + newKey;
    }
    return newKey;
}
/**
 * @hidden
 * @param {?} message
 * @param {?} isMessageShown
 * @return {?}
 */
export function showMessage(message, isMessageShown) {
    if (!isMessageShown && isDevMode()) {
        console.warn(message);
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcmVjYXRlRGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9kZXByZWNhdGVEZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFLMUMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUFlOztRQUN2QyxjQUFjLEdBQUcsS0FBSztJQUUxQixPQUFPLFVBQVUsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUE4QjtRQUNyRSxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFOztnQkFDMUIsZ0JBQWMsR0FBRyxVQUFVLENBQUMsS0FBSztZQUV2QyxVQUFVLENBQUMsS0FBSyxHQUFHOztvQkFDVCxVQUFVLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBQ3ZGLGNBQWMsR0FBRyxXQUFXLENBQUksVUFBVSxTQUFJLEdBQUcsVUFBSyxPQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBRWpGLE9BQU8sZ0JBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQztZQUVGLE9BQU8sVUFBVSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQWU7SUFDN0MsT0FBTyxVQUFTLE1BQVcsRUFBRSxHQUFXOztZQUNoQyxjQUFjLEdBQUcsS0FBSzs7WUFDcEIsZ0JBQWdCLEdBQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQUksR0FBRyxVQUFLLE9BQVM7OztZQUdsRSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztRQUN2RSxJQUFJLGtCQUFrQixFQUFFOztnQkFDaEIsUUFBTTs7Z0JBQUUsUUFBTTtZQUNsQixRQUFNLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDO1lBQ2hDLFFBQU0sR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7WUFFaEMsSUFBSSxRQUFNLEVBQUU7Z0JBQ1Isa0JBQWtCLENBQUMsR0FBRyxHQUFHO29CQUNyQixjQUFjLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUMvRCxPQUFPLFFBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQzthQUNMO1lBRUQsSUFBSSxRQUFNLEVBQUU7Z0JBQ1Isa0JBQWtCLENBQUMsR0FBRyxHQUFHLFVBQVUsS0FBSztvQkFDcEMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFDL0QsUUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQzthQUNMO1lBRUQsT0FBTyxrQkFBa0IsQ0FBQztTQUM3Qjs7OztZQUlLLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUMvQixZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsSUFBSTtZQUNoQixHQUFHLEVBQUUsVUFBUyxLQUFLO2dCQUNmLGNBQWMsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQztZQUNELEdBQUcsRUFBRTtnQkFDRCxjQUFjLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7OztBQUtELFNBQVMsaUJBQWlCLENBQUMsTUFBVyxFQUFFLEdBQVc7O1FBQzNDLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRztJQUN0QixPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDekI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDOzs7Ozs7O0FBS0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUFlLEVBQUUsY0FBdUI7SUFDaEUsSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUUsRUFBRTtRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pCO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERlcHJlY2F0ZU1ldGhvZChtZXNzYWdlOiBzdHJpbmcpOiBNZXRob2REZWNvcmF0b3Ige1xuICAgIGxldCBpc01lc3NhZ2VTaG93biA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0TmFtZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicgPyB0YXJnZXQubmFtZSA6IHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgICAgIGlzTWVzc2FnZVNob3duID0gc2hvd01lc3NhZ2UoYCR7dGFyZ2V0TmFtZX0uJHtrZXl9OiAke21lc3NhZ2V9YCwgaXNNZXNzYWdlU2hvd24pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEZXByZWNhdGVQcm9wZXJ0eShtZXNzYWdlOiBzdHJpbmcpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xuICAgICAgICBsZXQgaXNNZXNzYWdlU2hvd24gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZVRvRGlzcGxheSA9IGAke3RhcmdldC5jb25zdHJ1Y3Rvci5uYW1lfS4ke2tleX06ICR7bWVzc2FnZX1gO1xuXG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgYWxyZWFkeSBoYXMgdGhlIHByb3BlcnR5IGRlZmluZWRcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGxldCBnZXR0ZXIsIHNldHRlcjtcbiAgICAgICAgICAgIGdldHRlciA9IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQ7XG4gICAgICAgICAgICBzZXR0ZXIgPSBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0O1xuXG4gICAgICAgICAgICBpZiAoZ2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpc01lc3NhZ2VTaG93biA9IHNob3dNZXNzYWdlKG1lc3NhZ2VUb0Rpc3BsYXksIGlzTWVzc2FnZVNob3duKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWVzc2FnZVNob3duID0gc2hvd01lc3NhZ2UobWVzc2FnZVRvRGlzcGxheSwgaXNNZXNzYWdlU2hvd24pO1xuICAgICAgICAgICAgICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRGVzY3JpcHRvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZSB0YXJnZXQgZG9lc24ndCBjb250YWluIGEgZGVzY3JpcHRvciBmb3IgdGhhdCBwcm9wZXJ0eSwgc28gY3JlYXRlIG9uZVxuICAgICAgICAvLyB1c2UgYmFja2luZyBmaWVsZCB0byBzZXQvZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgdG8gZW5zdXJlIHRoZXJlIHdvbid0IGJlIGluZmluaXRlIHJlY3Vyc2l2ZSBjYWxsc1xuICAgICAgICBjb25zdCBuZXdLZXkgPSBnZW5lcmF0ZVVuaXF1ZUtleSh0YXJnZXQsIGtleSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpc01lc3NhZ2VTaG93biA9IHNob3dNZXNzYWdlKG1lc3NhZ2VUb0Rpc3BsYXksIGlzTWVzc2FnZVNob3duKTtcbiAgICAgICAgICAgICAgICB0aGlzW25ld0tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlzTWVzc2FnZVNob3duID0gc2hvd01lc3NhZ2UobWVzc2FnZVRvRGlzcGxheSwgaXNNZXNzYWdlU2hvd24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW25ld0tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUtleSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBuZXdLZXkgPSAnXycgKyBrZXk7XG4gICAgd2hpbGUgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuZXdLZXkpKSB7XG4gICAgICAgIG5ld0tleSA9ICdfJyArIG5ld0tleTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3S2V5O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgaXNNZXNzYWdlU2hvd246IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAoIWlzTWVzc2FnZVNob3duICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==
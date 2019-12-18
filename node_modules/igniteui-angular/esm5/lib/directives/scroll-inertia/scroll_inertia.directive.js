/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, NgZone, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * @hidden
 */
var IgxScrollInertiaDirective = /** @class */ (function () {
    function IgxScrollInertiaDirective(element, _zone) {
        this.element = element;
        this._zone = _zone;
        this.wheelStep = 50;
        this.inertiaStep = 1.5;
        this.swipeToleranceX = 20;
        this.inertiaDeltaY = 3;
        this.inertiaDeltaX = 2;
        this.inertiaDuration = 0.5;
        this._savedSpeedsX = [];
        this.setPointerCaptureFName = typeof Element.prototype['msSetPointerCapture'] === 'function' ?
            'msSetPointerCapture' :
            'setPointerCapture';
        this.releasePointerCaptureFName = typeof Element.prototype['msReleasePointerCapture'] === 'function' ?
            'msReleasePointerCapture' :
            'releasePointerCapture';
    }
    /**
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            /** @type {?} */
            var targetElem = _this.element.nativeElement.parentElement || _this.element.nativeElement.parentNode;
            targetElem.addEventListener('wheel', function (evt) { _this.onWheel(evt); });
            targetElem.addEventListener('touchstart', function (evt) { _this.onTouchStart(evt); });
            targetElem.addEventListener('touchmove', function (evt) { _this.onTouchMove(evt); });
            targetElem.addEventListener('touchend', function (evt) { _this.onTouchEnd(evt); });
            targetElem.addEventListener('pointerdown', function (evt) { _this.onPointerDown(evt); });
            targetElem.addEventListener('pointerup', function (evt) { _this.onPointerUp(evt); });
            targetElem.addEventListener('MSGestureStart', function (evt) { _this.onMSGestureStart(evt); });
            targetElem.addEventListener('MSGestureChange', function (evt) { _this.onMSGestureChange(evt); });
        });
    };
    /**
    * @hidden
    * Function that is called when scrolling with the mouse wheel or using touchpad
    */
    /**
     * @hidden
     * Function that is called when scrolling with the mouse wheel or using touchpad
     * @protected
     * @param {?} evt
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.onWheel = /**
     * @hidden
     * Function that is called when scrolling with the mouse wheel or using touchpad
     * @protected
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        // if no scrollbar return
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        /** @type {?} */
        var scrollDeltaX;
        /** @type {?} */
        var scrollDeltaY;
        /** @type {?} */
        var scrollStep = this.wheelStep;
        /** @type {?} */
        var minWheelStep = 1 / this.wheelStep;
        this._startX = this.IgxScrollInertiaScrollContainer.scrollLeft;
        this._startY = this.IgxScrollInertiaScrollContainer.scrollTop;
        if (evt.wheelDeltaX) {
            /* Option supported on Chrome, Safari, Opera.
            /* 120 is default for mousewheel on these browsers. Other values are for trackpads */
            scrollDeltaX = -evt.wheelDeltaX / 120;
            if (-minWheelStep < scrollDeltaX && scrollDeltaX < minWheelStep) {
                scrollDeltaX = Math.sign(scrollDeltaX) * minWheelStep;
            }
        }
        else if (evt.deltaX) {
            /* For other browsers that don't provide wheelDelta, use the deltaY to determine direction and pass default values. */
            scrollDeltaX = this.calcAxisCoords(evt.deltaX, -1, 1);
        }
        /** Get delta for the Y axis*/
        if (evt.wheelDeltaY) {
            /* Option supported on Chrome, Safari, Opera.
            /* 120 is default for mousewheel on these browsers. Other values are for trackpads */
            scrollDeltaY = -evt.wheelDeltaY / 120;
            if (-minWheelStep < scrollDeltaY && scrollDeltaY < minWheelStep) {
                scrollDeltaY = Math.sign(scrollDeltaY) * minWheelStep;
            }
        }
        else if (evt.deltaY) {
            /* For other browsers that don't provide wheelDelta, use the deltaY to determine direction and pass default values. */
            scrollDeltaY = this.calcAxisCoords(evt.deltaY, -1, 1);
        }
        if (scrollDeltaX && this.IgxScrollInertiaDirection === 'horizontal') {
            this._scrollToX(this._startX + scrollDeltaX * scrollStep);
            /** @type {?} */
            var curScrollLeft = this.IgxScrollInertiaScrollContainer.scrollLeft;
            /** @type {?} */
            var maxScrollLeft = parseInt(this.IgxScrollInertiaScrollContainer.children[0].style.width, 10);
            if (0 < curScrollLeft && curScrollLeft < maxScrollLeft) {
                // Prevent navigating through pages when scrolling on Mac
                evt.preventDefault();
            }
        }
        else if (scrollDeltaY && this.IgxScrollInertiaDirection === 'vertical') {
            this._scrollToY(this._startY + scrollDeltaY * scrollStep);
            this.preventParentScroll(evt, true);
        }
    };
    /**
     * @hidden
     * When there is still room to scroll up/down prevent the parent elements from scrolling too.
     */
    /**
     * @hidden
     * When there is still room to scroll up/down prevent the parent elements from scrolling too.
     * @protected
     * @param {?} evt
     * @param {?} preventDefault
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.preventParentScroll = /**
     * @hidden
     * When there is still room to scroll up/down prevent the parent elements from scrolling too.
     * @protected
     * @param {?} evt
     * @param {?} preventDefault
     * @return {?}
     */
    function (evt, preventDefault) {
        /** @type {?} */
        var curScrollTop = this.IgxScrollInertiaScrollContainer.scrollTop;
        /** @type {?} */
        var maxScrollTop = this.IgxScrollInertiaScrollContainer.children[0].scrollHeight -
            this.IgxScrollInertiaScrollContainer.offsetHeight;
        if (0 < curScrollTop && curScrollTop < maxScrollTop) {
            if (preventDefault) {
                evt.preventDefault();
            }
            if (evt.stopPropagation) {
                evt.stopPropagation();
            }
        }
    };
    /**
     * @hidden
     * Function that is called the first moment we start interacting with the content on a touch device
     */
    /**
     * @hidden
     * Function that is called the first moment we start interacting with the content on a touch device
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.onTouchStart = /**
     * @hidden
     * Function that is called the first moment we start interacting with the content on a touch device
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (typeof MSGesture === 'function' || !this.IgxScrollInertiaScrollContainer) {
            return false;
        }
        // stops any current ongoing inertia
        cancelAnimationFrame(this._touchInertiaAnimID);
        /** @type {?} */
        var touch = event.touches[0];
        this._startX = this.IgxScrollInertiaScrollContainer.scrollLeft;
        this._startY = this.IgxScrollInertiaScrollContainer.scrollTop;
        this._touchStartX = touch.pageX;
        this._touchStartY = touch.pageY;
        this._lastTouchEnd = new Date().getTime();
        this._lastTouchX = touch.pageX;
        this._lastTouchY = touch.pageY;
        this._savedSpeedsX = [];
        this._savedSpeedsY = [];
        // Vars regarding swipe offset
        this._totalMovedX = 0;
        this._offsetRecorded = false;
        this._offsetDirection = 0;
        this._touchPrevented = false;
        if (this.IgxScrollInertiaDirection === 'vertical') {
            this.preventParentScroll(event, false);
        }
    };
    /**
     * @hidden
     * Function that is called when we need to scroll the content based on touch interactions
     */
    /**
     * @hidden
     * Function that is called when we need to scroll the content based on touch interactions
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.onTouchMove = /**
     * @hidden
     * Function that is called when we need to scroll the content based on touch interactions
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (typeof MSGesture === 'function') {
            this._touchPrevented = false;
            return false;
        }
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        /** @type {?} */
        var touch = event.touches[0];
        /** @type {?} */
        var destX = this._startX + (this._touchStartX - touch.pageX) * Math.sign(this.inertiaStep);
        /** @type {?} */
        var destY = this._startY + (this._touchStartY - touch.pageY) * Math.sign(this.inertiaStep);
        /* Handle complex touchmoves when swipe stops but the toch doesn't end and then a swipe is initiated again */
        /* **********************************************************/
        /** @type {?} */
        var timeFromLastTouch = (new Date().getTime()) - this._lastTouchEnd;
        if (timeFromLastTouch !== 0 && timeFromLastTouch < 100) {
            /** @type {?} */
            var speedX = (this._lastTouchX - touch.pageX) / timeFromLastTouch;
            /** @type {?} */
            var speedY = (this._lastTouchY - touch.pageY) / timeFromLastTouch;
            // Save the last 5 speeds between two touchmoves on X axis
            if (this._savedSpeedsX.length < 5) {
                this._savedSpeedsX.push(speedX);
            }
            else {
                this._savedSpeedsX.shift();
                this._savedSpeedsX.push(speedX);
            }
            // Save the last 5 speeds between two touchmoves on Y axis
            if (this._savedSpeedsY.length < 5) {
                this._savedSpeedsY.push(speedY);
            }
            else {
                this._savedSpeedsY.shift();
                this._savedSpeedsY.push(speedY);
            }
        }
        this._lastTouchEnd = new Date().getTime();
        this._lastMovedX = this._lastTouchX - touch.pageX;
        this._lastMovedY = this._lastTouchY - touch.pageY;
        this._lastTouchX = touch.pageX;
        this._lastTouchY = touch.pageY;
        this._totalMovedX += this._lastMovedX;
        /** @type {?} */
        var scrolledXY;
        /*	Do not scroll using touch untill out of the swipeToleranceX bounds */
        if (Math.abs(this._totalMovedX) < this.swipeToleranceX && !this._offsetRecorded) {
            scrolledXY = this._scrollTo(this._startX, destY);
        }
        else {
            /*	Record the direction the first time we are out of the swipeToleranceX bounds.
            *	That way we know which direction we apply the offset so it doesn't hickup when moving out of the swipeToleranceX bounds */
            if (!this._offsetRecorded) {
                this._offsetDirection = Math.sign(destX - this._startX);
                this._offsetRecorded = true;
            }
            /*	Scroll with offset ammout of swipeToleranceX in the direction we have exited the bounds and
            don't change it after that ever until touchend and again touchstart */
            scrolledXY = this._scrollTo(destX - this._offsetDirection * this.swipeToleranceX, destY);
        }
        if (scrolledXY.x === 0 && scrolledXY.y === 0) {
            this._touchPrevented = true;
        }
        // On Safari preventing the touchmove would prevent default page scroll behaviour even if there is the element doesn't have overflow
        if (this.IgxScrollInertiaDirection === 'vertical') {
            this.preventParentScroll(event, true);
        }
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.onTouchEnd = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (typeof MSGesture === 'function') {
            return;
        }
        /** @type {?} */
        var speedX = 0;
        /** @type {?} */
        var speedY = 0;
        // savedSpeedsX and savedSpeedsY have same length
        for (var i = 0; i < this._savedSpeedsX.length; i++) {
            speedX += this._savedSpeedsX[i];
            speedY += this._savedSpeedsY[i];
        }
        speedX = this._savedSpeedsX.length ? speedX / this._savedSpeedsX.length : 0;
        speedY = this._savedSpeedsX.length ? speedY / this._savedSpeedsY.length : 0;
        // Use the lastMovedX and lastMovedY to determine if the swipe stops without lifting the finger so we don't start inertia
        if ((Math.abs(speedX) > 0.1 || Math.abs(speedY) > 0.1) &&
            (Math.abs(this._lastMovedX) > 2 || Math.abs(this._lastMovedY) > 2)) {
            this._inertiaInit(speedX, speedY);
        }
        if (this.IgxScrollInertiaDirection === 'vertical') {
            this.preventParentScroll(event, false);
        }
    };
    /**
     * @hidden
     * Function that is called when we need to detect touch starting on a touch device on IE/Edge
     */
    /**
     * @hidden
     * Function that is called when we need to detect touch starting on a touch device on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.onPointerDown = /**
     * @hidden
     * Function that is called when we need to detect touch starting on a touch device on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!event || (event.pointerType !== 2 && event.pointerType !== 'touch') ||
            typeof MSGesture !== 'function') {
            return true;
        }
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        // setPointerCaptureFName is the name of the function that is supported
        event.target[this.setPointerCaptureFName](this._pointer = event.pointerId);
        // create gestureObject only one time to prevent overlapping during intertia
        if (!this._gestureObject) {
            this._gestureObject = new MSGesture();
            this._gestureObject.target = this.element.nativeElement.parentElement || this.element.nativeElement.parentNode;
        }
        this._gestureObject.addPointer(this._pointer);
    };
    /**
     * @hidden
     * Function that is called when we need to detect touch ending on a touch device on IE/Edge
     */
    /**
     * @hidden
     * Function that is called when we need to detect touch ending on a touch device on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.onPointerUp = /**
     * @hidden
     * Function that is called when we need to detect touch ending on a touch device on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._pointer) {
            return true;
        }
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        /* releasePointerCaptureFName is the name of the function that is supported */
        event.target[this.releasePointerCaptureFName](this._pointer);
        delete this._pointer;
    };
    /**
     * @hidden
     *  Function that is called when a gesture begins on IE/Edge
     */
    /**
     * @hidden
     *  Function that is called when a gesture begins on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.onMSGestureStart = /**
     * @hidden
     *  Function that is called when a gesture begins on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        this._startX = this.IgxScrollInertiaScrollContainer.scrollLeft;
        this._startY = this.IgxScrollInertiaScrollContainer.scrollTop;
        this._touchStartX = event.screenX;
        this._touchStartY = event.screenY;
        // Vars regarding swipe offset
        this._totalMovedX = 0;
        this._offsetRecorded = false;
        this._offsetDirection = 0;
        return false;
    };
    /**
     * @hidden
     * Function that is called when a we need to scroll based on the gesture performed on IE/Edge
     */
    /**
     * @hidden
     * Function that is called when a we need to scroll based on the gesture performed on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.onMSGestureChange = /**
     * @hidden
     * Function that is called when a we need to scroll based on the gesture performed on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        /** @type {?} */
        var touchPos = event;
        /** @type {?} */
        var destX = this._startX + this._touchStartX - touchPos.screenX;
        /** @type {?} */
        var destY = this._startY + this._touchStartY - touchPos.screenY;
        /* Logic regarding x tolerance to prevent accidental horizontal scrolling when scrolling vertically */
        this._totalMovedX = this._touchStartX - touchPos.screenX;
        if (Math.abs(this._totalMovedX) < this.swipeToleranceX && !this._offsetRecorded) {
            /* Do not scroll horizontally yet while in the tolerance range */
            this._scrollToY(destY);
        }
        else {
            if (!this._offsetRecorded) {
                this._offsetDirection = Math.sign(destX - this._startX);
                this._offsetRecorded = true;
            }
            /* Once the tolerance is exceeded it can be scrolled horizontally */
            this._scrollTo(destX - this._offsetDirection * this.swipeToleranceX, destY);
        }
        return false;
    };
    /**
     * @private
     * @param {?} target
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.calcAxisCoords = /**
     * @private
     * @param {?} target
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function (target, min, max) {
        if (target === undefined || target < min) {
            target = min;
        }
        else if (target > max) {
            target = max;
        }
        return target;
    };
    /**
     * @private
     * @param {?} destX
     * @param {?} destY
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype._scrollTo = /**
     * @private
     * @param {?} destX
     * @param {?} destY
     * @return {?}
     */
    function (destX, destY) {
        /** @type {?} */
        var curPosX = this.IgxScrollInertiaScrollContainer.scrollLeft;
        /** @type {?} */
        var curPosY = this.IgxScrollInertiaScrollContainer.scrollTop;
        // TODO Trigger scrolling event?
        /** @type {?} */
        var scrolledX = this._scrollToX(destX);
        /** @type {?} */
        var scrolledY = this._scrollToY(destY);
        return { x: scrolledX, y: scrolledY };
    };
    /**
     * @private
     * @param {?} dest
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype._scrollToX = /**
     * @private
     * @param {?} dest
     * @return {?}
     */
    function (dest) {
        this.IgxScrollInertiaScrollContainer.scrollLeft = dest;
    };
    /**
     * @private
     * @param {?} dest
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype._scrollToY = /**
     * @private
     * @param {?} dest
     * @return {?}
     */
    function (dest) {
        this.IgxScrollInertiaScrollContainer.scrollTop = dest;
    };
    /**
     * @protected
     * @param {?} speedX
     * @param {?} speedY
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype._inertiaInit = /**
     * @protected
     * @param {?} speedX
     * @param {?} speedY
     * @return {?}
     */
    function (speedX, speedY) {
        var _this = this;
        /** @type {?} */
        var stepModifer = this.inertiaStep;
        /** @type {?} */
        var inertiaDuration = this.inertiaDuration;
        /** @type {?} */
        var x = 0;
        this._nextX = this.IgxScrollInertiaScrollContainer.scrollLeft;
        this._nextY = this.IgxScrollInertiaScrollContainer.scrollTop;
        // Sets timeout until executing next movement iteration of the inertia
        /** @type {?} */
        var inertiaStep = function () {
            if (x > 6) {
                cancelAnimationFrame(_this._touchInertiaAnimID);
                return;
            }
            if (Math.abs(speedX) > Math.abs(speedY)) {
                x += 0.05 / (1 * inertiaDuration);
            }
            else {
                x += 0.05 / (1 * inertiaDuration);
            }
            if (x <= 1) {
                // We use constant quation to determine the offset without speed falloff befor x reaches 1
                if (Math.abs(speedY) <= Math.abs(speedX) * _this.inertiaDeltaY) {
                    _this._nextX += 1 * speedX * 15 * stepModifer;
                }
                if (Math.abs(speedY) >= Math.abs(speedX) * _this.inertiaDeltaX) {
                    _this._nextY += 1 * speedY * 15 * stepModifer;
                }
            }
            else {
                // We use the quation "y = 2 / (x + 0.55) - 0.3" to determine the offset
                if (Math.abs(speedY) <= Math.abs(speedX) * _this.inertiaDeltaY) {
                    _this._nextX += Math.abs(2 / (x + 0.55) - 0.3) * speedX * 15 * stepModifer;
                }
                if (Math.abs(speedY) >= Math.abs(speedX) * _this.inertiaDeltaX) {
                    _this._nextY += Math.abs(2 / (x + 0.55) - 0.3) * speedY * 15 * stepModifer;
                }
            }
            // If we have mixed environment we use the default behaviour. i.e. touchscreen + mouse
            _this._scrollTo(_this._nextX, _this._nextY);
            _this._touchInertiaAnimID = requestAnimationFrame(inertiaStep);
        };
        // Start inertia and continue it recursively
        this._touchInertiaAnimID = requestAnimationFrame(inertiaStep);
    };
    /**
     * @return {?}
     */
    IgxScrollInertiaDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            /** @type {?} */
            var targetElem = _this.element.nativeElement.parentElement || _this.element.nativeElement.parentNode;
            targetElem.removeEventListener('wheel', function (evt) { _this.onWheel(evt); });
            targetElem.removeEventListener('touchstart', function (evt) { _this.onTouchStart(evt); });
            targetElem.removeEventListener('touchmove', function (evt) { _this.onTouchMove(evt); });
            targetElem.removeEventListener('touchend', function (evt) { _this.onTouchEnd(evt); });
            targetElem.removeEventListener('pointerdown', function (evt) { _this.onPointerDown(evt); });
            targetElem.removeEventListener('pointerup', function (evt) { _this.onPointerUp(evt); });
            targetElem.removeEventListener('MSGestureStart', function (evt) { _this.onMSGestureStart(evt); });
            targetElem.removeEventListener('MSGestureChange', function (evt) { _this.onMSGestureChange(evt); });
        });
    };
    IgxScrollInertiaDirective.decorators = [
        { type: Directive, args: [{ selector: '[igxScrollInertia]' },] }
    ];
    /** @nocollapse */
    IgxScrollInertiaDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IgxScrollInertiaDirective.propDecorators = {
        IgxScrollInertiaDirection: [{ type: Input }],
        IgxScrollInertiaScrollContainer: [{ type: Input }],
        wheelStep: [{ type: Input }],
        inertiaStep: [{ type: Input }],
        swipeToleranceX: [{ type: Input }],
        inertiaDeltaY: [{ type: Input }],
        inertiaDeltaX: [{ type: Input }],
        inertiaDuration: [{ type: Input }]
    };
    return IgxScrollInertiaDirective;
}());
export { IgxScrollInertiaDirective };
if (false) {
    /** @type {?} */
    IgxScrollInertiaDirective.prototype.IgxScrollInertiaDirection;
    /** @type {?} */
    IgxScrollInertiaDirective.prototype.IgxScrollInertiaScrollContainer;
    /** @type {?} */
    IgxScrollInertiaDirective.prototype.wheelStep;
    /** @type {?} */
    IgxScrollInertiaDirective.prototype.inertiaStep;
    /** @type {?} */
    IgxScrollInertiaDirective.prototype.swipeToleranceX;
    /** @type {?} */
    IgxScrollInertiaDirective.prototype.inertiaDeltaY;
    /** @type {?} */
    IgxScrollInertiaDirective.prototype.inertiaDeltaX;
    /** @type {?} */
    IgxScrollInertiaDirective.prototype.inertiaDuration;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._touchInertiaAnimID;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._startX;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._startY;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._touchStartX;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._touchStartY;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._lastTouchEnd;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._lastTouchX;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._lastTouchY;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._savedSpeedsX;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._savedSpeedsY;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._totalMovedX;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._offsetRecorded;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._offsetDirection;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._touchPrevented;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._lastMovedX;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._lastMovedY;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._gestureObject;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype.setPointerCaptureFName;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype.releasePointerCaptureFName;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._pointer;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._nextX;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._nextY;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxScrollInertiaDirective.prototype._zone;
}
/**
 * @hidden
 */
var IgxScrollInertiaModule = /** @class */ (function () {
    function IgxScrollInertiaModule() {
    }
    IgxScrollInertiaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxScrollInertiaDirective],
                    exports: [IgxScrollInertiaDirective],
                    imports: [CommonModule]
                },] }
    ];
    return IgxScrollInertiaModule;
}());
export { IgxScrollInertiaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsX2luZXJ0aWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Njcm9sbC1pbmVydGlhL3Njcm9sbF9pbmVydGlhLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBVSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSy9DO0lBR0ksbUNBQW9CLE9BQW1CLEVBQVUsS0FBYTtRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQVd2RCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2YsZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFHbEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFHckIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHbEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHbEIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFVckIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFTbkIsMkJBQXNCLEdBQUcsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEtBQUssVUFBVSxDQUFDLENBQUM7WUFDakcscUJBQXFCLENBQUMsQ0FBQztZQUN2QixtQkFBbUIsQ0FBQztRQUNaLCtCQUEwQixHQUFHLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDO1lBQ3pHLHlCQUF5QixDQUFDLENBQUM7WUFDM0IsdUJBQXVCLENBQUM7SUFoRHhCLENBQUM7Ozs7SUFxREQsNENBQVE7OztJQUFSO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7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Qjs7Ozs7SUFDcEIsZ0RBQW9COzs7OztJQUNwQixrREFBMkI7Ozs7O0lBQzNCLGtEQUFzQjs7Ozs7SUFDdEIsaURBQXFCOzs7OztJQUNyQixvREFBd0I7Ozs7O0lBQ3hCLHFEQUF5Qjs7Ozs7SUFDekIsb0RBQXdCOzs7OztJQUN4QixnREFBb0I7Ozs7O0lBQ3BCLGdEQUFvQjs7Ozs7SUFDcEIsbURBQXVCOzs7OztJQUN2QiwyREFFb0I7Ozs7O0lBQ3BCLCtEQUV3Qjs7Ozs7SUFDeEIsNkNBQWlCOzs7OztJQUNqQiwyQ0FBZTs7Ozs7SUFDZiwyQ0FBZTs7Ozs7SUFyREgsNENBQTJCOzs7OztJQUFFLDBDQUFxQjs7Ozs7QUF5ZWxFO0lBQUE7SUFPQSxDQUFDOztnQkFQQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzFCOztJQUdELDZCQUFDO0NBQUEsQUFQRCxJQU9DO1NBRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgTmdab25lLCBPbkluaXQsIE5nTW9kdWxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbaWd4U2Nyb2xsSW5lcnRpYV0nIH0pXG5leHBvcnQgY2xhc3MgSWd4U2Nyb2xsSW5lcnRpYURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7XG5cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBJZ3hTY3JvbGxJbmVydGlhRGlyZWN0aW9uOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBJZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyOiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3aGVlbFN0ZXAgPSA1MDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZXJ0aWFTdGVwID0gMS41O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3dpcGVUb2xlcmFuY2VYID0gMjA7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmVydGlhRGVsdGFZID0gMztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZXJ0aWFEZWx0YVggPSAyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW5lcnRpYUR1cmF0aW9uID0gMC41O1xuXG4gICAgcHJpdmF0ZSBfdG91Y2hJbmVydGlhQW5pbUlEO1xuICAgIHByaXZhdGUgX3N0YXJ0WDtcbiAgICBwcml2YXRlIF9zdGFydFk7XG4gICAgcHJpdmF0ZSBfdG91Y2hTdGFydFg7XG4gICAgcHJpdmF0ZSBfdG91Y2hTdGFydFk7XG4gICAgcHJpdmF0ZSBfbGFzdFRvdWNoRW5kO1xuICAgIHByaXZhdGUgX2xhc3RUb3VjaFg7XG4gICAgcHJpdmF0ZSBfbGFzdFRvdWNoWTtcbiAgICBwcml2YXRlIF9zYXZlZFNwZWVkc1ggPSBbXTtcbiAgICBwcml2YXRlIF9zYXZlZFNwZWVkc1k7XG4gICAgcHJpdmF0ZSBfdG90YWxNb3ZlZFg7XG4gICAgcHJpdmF0ZSBfb2Zmc2V0UmVjb3JkZWQ7XG4gICAgcHJpdmF0ZSBfb2Zmc2V0RGlyZWN0aW9uO1xuICAgIHByaXZhdGUgX3RvdWNoUHJldmVudGVkO1xuICAgIHByaXZhdGUgX2xhc3RNb3ZlZFg7XG4gICAgcHJpdmF0ZSBfbGFzdE1vdmVkWTtcbiAgICBwcml2YXRlIF9nZXN0dXJlT2JqZWN0O1xuICAgIHByaXZhdGUgc2V0UG9pbnRlckNhcHR1cmVGTmFtZSA9IHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZVsnbXNTZXRQb2ludGVyQ2FwdHVyZSddID09PSAnZnVuY3Rpb24nID9cbiAgICAnbXNTZXRQb2ludGVyQ2FwdHVyZScgOlxuICAgICdzZXRQb2ludGVyQ2FwdHVyZSc7XG4gICAgcHJpdmF0ZSByZWxlYXNlUG9pbnRlckNhcHR1cmVGTmFtZSA9IHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZVsnbXNSZWxlYXNlUG9pbnRlckNhcHR1cmUnXSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgJ21zUmVsZWFzZVBvaW50ZXJDYXB0dXJlJyA6XG4gICAgJ3JlbGVhc2VQb2ludGVyQ2FwdHVyZSc7XG4gICAgcHJpdmF0ZSBfcG9pbnRlcjtcbiAgICBwcml2YXRlIF9uZXh0WDtcbiAgICBwcml2YXRlIF9uZXh0WTtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJyxcbiAgICAgICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uV2hlZWwoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Ub3VjaFN0YXJ0KGV2dCk7IH0pO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLFxuICAgICAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Ub3VjaE1vdmUoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uVG91Y2hFbmQoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJyxcbiAgICAgICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uUG9pbnRlckRvd24oZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsXG4gICAgICAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Qb2ludGVyVXAoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ01TR2VzdHVyZVN0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uTVNHZXN0dXJlU3RhcnQoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ01TR2VzdHVyZUNoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIChldnQpID0+IHsgdGhpcy5vbk1TR2VzdHVyZUNoYW5nZShldnQpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHNjcm9sbGluZyB3aXRoIHRoZSBtb3VzZSB3aGVlbCBvciB1c2luZyB0b3VjaHBhZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbldoZWVsKGV2dCkge1xuICAgICAgICAvLyBpZiBubyBzY3JvbGxiYXIgcmV0dXJuXG4gICAgICAgIGlmICghdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNjcm9sbERlbHRhWDtcbiAgICAgICAgbGV0IHNjcm9sbERlbHRhWTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsU3RlcCA9IHRoaXMud2hlZWxTdGVwO1xuICAgICAgICBjb25zdCBtaW5XaGVlbFN0ZXAgPSAxIC8gdGhpcy53aGVlbFN0ZXA7XG5cbiAgICAgICAgdGhpcy5fc3RhcnRYID0gdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgICAgIHRoaXMuX3N0YXJ0WSA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgICAgICAgaWYgKGV2dC53aGVlbERlbHRhWCkge1xuICAgICAgICAgICAgLyogT3B0aW9uIHN1cHBvcnRlZCBvbiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEuXG4gICAgICAgICAgICAvKiAxMjAgaXMgZGVmYXVsdCBmb3IgbW91c2V3aGVlbCBvbiB0aGVzZSBicm93c2Vycy4gT3RoZXIgdmFsdWVzIGFyZSBmb3IgdHJhY2twYWRzICovXG4gICAgICAgICAgICBzY3JvbGxEZWx0YVggPSAtZXZ0LndoZWVsRGVsdGFYIC8gMTIwO1xuXG4gICAgICAgICAgICBpZiAoLW1pbldoZWVsU3RlcCA8IHNjcm9sbERlbHRhWCAmJiBzY3JvbGxEZWx0YVggPCBtaW5XaGVlbFN0ZXApIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEZWx0YVggPSBNYXRoLnNpZ24oc2Nyb2xsRGVsdGFYKSAqIG1pbldoZWVsU3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldnQuZGVsdGFYKSB7XG4gICAgICAgICAgICAvKiBGb3Igb3RoZXIgYnJvd3NlcnMgdGhhdCBkb24ndCBwcm92aWRlIHdoZWVsRGVsdGEsIHVzZSB0aGUgZGVsdGFZIHRvIGRldGVybWluZSBkaXJlY3Rpb24gYW5kIHBhc3MgZGVmYXVsdCB2YWx1ZXMuICovXG4gICAgICAgICAgICBzY3JvbGxEZWx0YVggPSB0aGlzLmNhbGNBeGlzQ29vcmRzKGV2dC5kZWx0YVgsIC0xLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBHZXQgZGVsdGEgZm9yIHRoZSBZIGF4aXMqL1xuICAgICAgICBpZiAoZXZ0LndoZWVsRGVsdGFZKSB7XG4gICAgICAgICAgICAvKiBPcHRpb24gc3VwcG9ydGVkIG9uIENocm9tZSwgU2FmYXJpLCBPcGVyYS5cbiAgICAgICAgICAgIC8qIDEyMCBpcyBkZWZhdWx0IGZvciBtb3VzZXdoZWVsIG9uIHRoZXNlIGJyb3dzZXJzLiBPdGhlciB2YWx1ZXMgYXJlIGZvciB0cmFja3BhZHMgKi9cbiAgICAgICAgICAgIHNjcm9sbERlbHRhWSA9IC1ldnQud2hlZWxEZWx0YVkgLyAxMjA7XG5cbiAgICAgICAgICAgIGlmICgtbWluV2hlZWxTdGVwIDwgc2Nyb2xsRGVsdGFZICYmIHNjcm9sbERlbHRhWSA8IG1pbldoZWVsU3RlcCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbERlbHRhWSA9IE1hdGguc2lnbihzY3JvbGxEZWx0YVkpICogbWluV2hlZWxTdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2dC5kZWx0YVkpIHtcbiAgICAgICAgICAgIC8qIEZvciBvdGhlciBicm93c2VycyB0aGF0IGRvbid0IHByb3ZpZGUgd2hlZWxEZWx0YSwgdXNlIHRoZSBkZWx0YVkgdG8gZGV0ZXJtaW5lIGRpcmVjdGlvbiBhbmQgcGFzcyBkZWZhdWx0IHZhbHVlcy4gKi9cbiAgICAgICAgICAgIHNjcm9sbERlbHRhWSA9IHRoaXMuY2FsY0F4aXNDb29yZHMoZXZ0LmRlbHRhWSwgLTEsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY3JvbGxEZWx0YVggJiYgdGhpcy5JZ3hTY3JvbGxJbmVydGlhRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvWChcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFggKyBzY3JvbGxEZWx0YVggKiBzY3JvbGxTdGVwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY3VyU2Nyb2xsTGVmdCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsTGVmdCA9IHBhcnNlSW50KHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5jaGlsZHJlblswXS5zdHlsZS53aWR0aCwgMTApO1xuICAgICAgICAgICAgaWYgKDAgPCBjdXJTY3JvbGxMZWZ0ICYmIGN1clNjcm9sbExlZnQgPCBtYXhTY3JvbGxMZWZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBuYXZpZ2F0aW5nIHRocm91Z2ggcGFnZXMgd2hlbiBzY3JvbGxpbmcgb24gTWFjXG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsRGVsdGFZICYmIHRoaXMuSWd4U2Nyb2xsSW5lcnRpYURpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9ZKFxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0WSArIHNjcm9sbERlbHRhWSAqIHNjcm9sbFN0ZXBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnRQYXJlbnRTY3JvbGwoZXZ0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBXaGVuIHRoZXJlIGlzIHN0aWxsIHJvb20gdG8gc2Nyb2xsIHVwL2Rvd24gcHJldmVudCB0aGUgcGFyZW50IGVsZW1lbnRzIGZyb20gc2Nyb2xsaW5nIHRvby5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcHJldmVudFBhcmVudFNjcm9sbChldnQsIHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGNvbnN0IGN1clNjcm9sbFRvcCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IG1heFNjcm9sbFRvcCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5jaGlsZHJlblswXS5zY3JvbGxIZWlnaHQgLVxuICAgICAgICAgICAgdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgaWYgKDAgPCBjdXJTY3JvbGxUb3AgJiYgY3VyU2Nyb2xsVG9wIDwgbWF4U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZ0LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0aGUgZmlyc3QgbW9tZW50IHdlIHN0YXJ0IGludGVyYWN0aW5nIHdpdGggdGhlIGNvbnRlbnQgb24gYSB0b3VjaCBkZXZpY2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgTVNHZXN0dXJlID09PSAnZnVuY3Rpb24nIHx8ICF0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3BzIGFueSBjdXJyZW50IG9uZ29pbmcgaW5lcnRpYVxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl90b3VjaEluZXJ0aWFBbmltSUQpO1xuXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1sgMCBdO1xuXG4gICAgICAgIHRoaXMuX3N0YXJ0WCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIHRoaXMuX3N0YXJ0WSA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgICAgICAgdGhpcy5fdG91Y2hTdGFydFggPSB0b3VjaC5wYWdlWDtcbiAgICAgICAgdGhpcy5fdG91Y2hTdGFydFkgPSB0b3VjaC5wYWdlWTtcblxuICAgICAgICB0aGlzLl9sYXN0VG91Y2hFbmQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5fbGFzdFRvdWNoWCA9IHRvdWNoLnBhZ2VYO1xuICAgICAgICB0aGlzLl9sYXN0VG91Y2hZID0gdG91Y2gucGFnZVk7XG4gICAgICAgIHRoaXMuX3NhdmVkU3BlZWRzWCA9IFtdO1xuICAgICAgICB0aGlzLl9zYXZlZFNwZWVkc1kgPSBbXTtcblxuICAgICAgICAvLyBWYXJzIHJlZ2FyZGluZyBzd2lwZSBvZmZzZXRcbiAgICAgICAgdGhpcy5fdG90YWxNb3ZlZFggPSAwO1xuICAgICAgICB0aGlzLl9vZmZzZXRSZWNvcmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vZmZzZXREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuX3RvdWNoUHJldmVudGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLklneFNjcm9sbEluZXJ0aWFEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudFBhcmVudFNjcm9sbChldmVudCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gd2UgbmVlZCB0byBzY3JvbGwgdGhlIGNvbnRlbnQgYmFzZWQgb24gdG91Y2ggaW50ZXJhY3Rpb25zXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgTVNHZXN0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl90b3VjaFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbIDAgXTtcbiAgICAgICAgY29uc3QgZGVzdFggPSB0aGlzLl9zdGFydFggKyAodGhpcy5fdG91Y2hTdGFydFggLSB0b3VjaC5wYWdlWCkgKiBNYXRoLnNpZ24odGhpcy5pbmVydGlhU3RlcCk7XG4gICAgICAgIGNvbnN0IGRlc3RZID0gdGhpcy5fc3RhcnRZICsgKHRoaXMuX3RvdWNoU3RhcnRZIC0gdG91Y2gucGFnZVkpICogTWF0aC5zaWduKHRoaXMuaW5lcnRpYVN0ZXApO1xuXG4gICAgICAgIC8qIEhhbmRsZSBjb21wbGV4IHRvdWNobW92ZXMgd2hlbiBzd2lwZSBzdG9wcyBidXQgdGhlIHRvY2ggZG9lc24ndCBlbmQgYW5kIHRoZW4gYSBzd2lwZSBpcyBpbml0aWF0ZWQgYWdhaW4gKi9cbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gICAgICAgIGNvbnN0IHRpbWVGcm9tTGFzdFRvdWNoID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAtIHRoaXMuX2xhc3RUb3VjaEVuZDtcbiAgICAgICAgaWYgKHRpbWVGcm9tTGFzdFRvdWNoICE9PSAwICYmIHRpbWVGcm9tTGFzdFRvdWNoIDwgMTAwKSB7XG4gICAgICAgICAgICBjb25zdCBzcGVlZFggPSAodGhpcy5fbGFzdFRvdWNoWCAtIHRvdWNoLnBhZ2VYKSAvIHRpbWVGcm9tTGFzdFRvdWNoO1xuICAgICAgICAgICAgY29uc3Qgc3BlZWRZID0gKHRoaXMuX2xhc3RUb3VjaFkgLSB0b3VjaC5wYWdlWSkgLyB0aW1lRnJvbUxhc3RUb3VjaDtcblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgbGFzdCA1IHNwZWVkcyBiZXR3ZWVuIHR3byB0b3VjaG1vdmVzIG9uIFggYXhpc1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkU3BlZWRzWC5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNYLnB1c2goc3BlZWRYKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNYLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNYLnB1c2goc3BlZWRYKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgbGFzdCA1IHNwZWVkcyBiZXR3ZWVuIHR3byB0b3VjaG1vdmVzIG9uIFkgYXhpc1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkU3BlZWRzWS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNZLnB1c2goc3BlZWRZKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNZLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNZLnB1c2goc3BlZWRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0VG91Y2hFbmQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5fbGFzdE1vdmVkWCA9IHRoaXMuX2xhc3RUb3VjaFggLSB0b3VjaC5wYWdlWDtcbiAgICAgICAgdGhpcy5fbGFzdE1vdmVkWSA9IHRoaXMuX2xhc3RUb3VjaFkgLSB0b3VjaC5wYWdlWTtcbiAgICAgICAgdGhpcy5fbGFzdFRvdWNoWCA9IHRvdWNoLnBhZ2VYO1xuICAgICAgICB0aGlzLl9sYXN0VG91Y2hZID0gdG91Y2gucGFnZVk7XG5cbiAgICAgICAgdGhpcy5fdG90YWxNb3ZlZFggKz0gdGhpcy5fbGFzdE1vdmVkWDtcblxuICAgICAgICBsZXQgc2Nyb2xsZWRYWTsgLy8gT2JqZWN0OiB7eCwgeX1cbiAgICAgICAgLypcdERvIG5vdCBzY3JvbGwgdXNpbmcgdG91Y2ggdW50aWxsIG91dCBvZiB0aGUgc3dpcGVUb2xlcmFuY2VYIGJvdW5kcyAqL1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5fdG90YWxNb3ZlZFgpIDwgdGhpcy5zd2lwZVRvbGVyYW5jZVggJiYgIXRoaXMuX29mZnNldFJlY29yZGVkKSB7XG4gICAgICAgICAgICBzY3JvbGxlZFhZID0gdGhpcy5fc2Nyb2xsVG8odGhpcy5fc3RhcnRYLCBkZXN0WSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKlx0UmVjb3JkIHRoZSBkaXJlY3Rpb24gdGhlIGZpcnN0IHRpbWUgd2UgYXJlIG91dCBvZiB0aGUgc3dpcGVUb2xlcmFuY2VYIGJvdW5kcy5cblx0XHRcdCpcdFRoYXQgd2F5IHdlIGtub3cgd2hpY2ggZGlyZWN0aW9uIHdlIGFwcGx5IHRoZSBvZmZzZXQgc28gaXQgZG9lc24ndCBoaWNrdXAgd2hlbiBtb3Zpbmcgb3V0IG9mIHRoZSBzd2lwZVRvbGVyYW5jZVggYm91bmRzICovXG4gICAgICAgICAgICBpZiAoIXRoaXMuX29mZnNldFJlY29yZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0RGlyZWN0aW9uID0gTWF0aC5zaWduKGRlc3RYIC0gdGhpcy5fc3RhcnRYKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXRSZWNvcmRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qXHRTY3JvbGwgd2l0aCBvZmZzZXQgYW1tb3V0IG9mIHN3aXBlVG9sZXJhbmNlWCBpbiB0aGUgZGlyZWN0aW9uIHdlIGhhdmUgZXhpdGVkIHRoZSBib3VuZHMgYW5kXG4gICAgICAgICAgICBkb24ndCBjaGFuZ2UgaXQgYWZ0ZXIgdGhhdCBldmVyIHVudGlsIHRvdWNoZW5kIGFuZCBhZ2FpbiB0b3VjaHN0YXJ0ICovXG4gICAgICAgICAgICBzY3JvbGxlZFhZID0gdGhpcy5fc2Nyb2xsVG8oZGVzdFggLSB0aGlzLl9vZmZzZXREaXJlY3Rpb24gKiB0aGlzLnN3aXBlVG9sZXJhbmNlWCxcbiAgICAgICAgICAgICAgICBkZXN0WSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2Nyb2xsZWRYWS54ID09PSAwICYmIHNjcm9sbGVkWFkueSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT24gU2FmYXJpIHByZXZlbnRpbmcgdGhlIHRvdWNobW92ZSB3b3VsZCBwcmV2ZW50IGRlZmF1bHQgcGFnZSBzY3JvbGwgYmVoYXZpb3VyIGV2ZW4gaWYgdGhlcmUgaXMgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIG92ZXJmbG93XG4gICAgICAgIGlmICh0aGlzLklneFNjcm9sbEluZXJ0aWFEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudFBhcmVudFNjcm9sbChldmVudCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIE1TR2VzdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGVlZFggPSAwO1xuICAgICAgICBsZXQgc3BlZWRZID0gMDtcblxuICAgICAgICAvLyBzYXZlZFNwZWVkc1ggYW5kIHNhdmVkU3BlZWRzWSBoYXZlIHNhbWUgbGVuZ3RoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2F2ZWRTcGVlZHNYLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzcGVlZFggKz0gdGhpcy5fc2F2ZWRTcGVlZHNYWyBpIF07XG4gICAgICAgICAgICBzcGVlZFkgKz0gdGhpcy5fc2F2ZWRTcGVlZHNZWyBpIF07XG4gICAgICAgIH1cbiAgICAgICAgc3BlZWRYID0gdGhpcy5fc2F2ZWRTcGVlZHNYLmxlbmd0aCA/IHNwZWVkWCAvIHRoaXMuX3NhdmVkU3BlZWRzWC5sZW5ndGggOiAwO1xuICAgICAgICBzcGVlZFkgPSB0aGlzLl9zYXZlZFNwZWVkc1gubGVuZ3RoID8gc3BlZWRZIC8gdGhpcy5fc2F2ZWRTcGVlZHNZLmxlbmd0aCA6IDA7XG5cbiAgICAgICAgIC8vIFVzZSB0aGUgbGFzdE1vdmVkWCBhbmQgbGFzdE1vdmVkWSB0byBkZXRlcm1pbmUgaWYgdGhlIHN3aXBlIHN0b3BzIHdpdGhvdXQgbGlmdGluZyB0aGUgZmluZ2VyIHNvIHdlIGRvbid0IHN0YXJ0IGluZXJ0aWFcbiAgICAgICAgaWYgKChNYXRoLmFicyhzcGVlZFgpID4gMC4xIHx8IE1hdGguYWJzKHNwZWVkWSkgPiAwLjEpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoTWF0aC5hYnModGhpcy5fbGFzdE1vdmVkWCkgPiAyIHx8IE1hdGguYWJzKHRoaXMuX2xhc3RNb3ZlZFkpID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5lcnRpYUluaXQoc3BlZWRYLCBzcGVlZFkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLklneFNjcm9sbEluZXJ0aWFEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudFBhcmVudFNjcm9sbChldmVudCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gd2UgbmVlZCB0byBkZXRlY3QgdG91Y2ggc3RhcnRpbmcgb24gYSB0b3VjaCBkZXZpY2Ugb24gSUUvRWRnZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQgfHwgKGV2ZW50LnBvaW50ZXJUeXBlICE9PSAyICYmIGV2ZW50LnBvaW50ZXJUeXBlICE9PSAndG91Y2gnKSB8fFxuICAgICAgICAgICAgdHlwZW9mIE1TR2VzdHVyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXRQb2ludGVyQ2FwdHVyZUZOYW1lIGlzIHRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGlzIHN1cHBvcnRlZFxuICAgICAgICBldmVudC50YXJnZXRbdGhpcy5zZXRQb2ludGVyQ2FwdHVyZUZOYW1lXSh0aGlzLl9wb2ludGVyID0gZXZlbnQucG9pbnRlcklkKTtcblxuICAgICAgICAvLyBjcmVhdGUgZ2VzdHVyZU9iamVjdCBvbmx5IG9uZSB0aW1lIHRvIHByZXZlbnQgb3ZlcmxhcHBpbmcgZHVyaW5nIGludGVydGlhXG4gICAgICAgIGlmICghdGhpcy5fZ2VzdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5fZ2VzdHVyZU9iamVjdCA9IG5ldyBNU0dlc3R1cmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2dlc3R1cmVPYmplY3QudGFyZ2V0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCB8fCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2dlc3R1cmVPYmplY3QuYWRkUG9pbnRlcih0aGlzLl9wb2ludGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB3ZSBuZWVkIHRvIGRldGVjdCB0b3VjaCBlbmRpbmcgb24gYSB0b3VjaCBkZXZpY2Ugb24gSUUvRWRnZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblBvaW50ZXJVcChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuX3BvaW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyogcmVsZWFzZVBvaW50ZXJDYXB0dXJlRk5hbWUgaXMgdGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgc3VwcG9ydGVkICovXG4gICAgICAgIGV2ZW50LnRhcmdldFsgdGhpcy5yZWxlYXNlUG9pbnRlckNhcHR1cmVGTmFtZSBdKHRoaXMuX3BvaW50ZXIpO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiAgRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBhIGdlc3R1cmUgYmVnaW5zIG9uIElFL0VkZ2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25NU0dlc3R1cmVTdGFydChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXJ0WCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICAgICAgICB0aGlzLl9zdGFydFkgPSB0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wO1xuXG5cbiAgICAgICAgdGhpcy5fdG91Y2hTdGFydFggPSBldmVudC5zY3JlZW5YO1xuICAgICAgICB0aGlzLl90b3VjaFN0YXJ0WSA9IGV2ZW50LnNjcmVlblk7XG5cbiAgICAgICAgLy8gVmFycyByZWdhcmRpbmcgc3dpcGUgb2Zmc2V0XG4gICAgICAgIHRoaXMuX3RvdGFsTW92ZWRYID0gMDtcbiAgICAgICAgdGhpcy5fb2Zmc2V0UmVjb3JkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb2Zmc2V0RGlyZWN0aW9uID0gMDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgd2UgbmVlZCB0byBzY3JvbGwgYmFzZWQgb24gdGhlIGdlc3R1cmUgcGVyZm9ybWVkIG9uIElFL0VkZ2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25NU0dlc3R1cmVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IGV2ZW50LFxuICAgICAgICAgICAgZGVzdFggPSB0aGlzLl9zdGFydFggKyB0aGlzLl90b3VjaFN0YXJ0WCAtIHRvdWNoUG9zLnNjcmVlblgsXG4gICAgICAgICAgICBkZXN0WSA9IHRoaXMuX3N0YXJ0WSArIHRoaXMuX3RvdWNoU3RhcnRZIC0gdG91Y2hQb3Muc2NyZWVuWTtcbiAgICAgICAgLyogTG9naWMgcmVnYXJkaW5nIHggdG9sZXJhbmNlIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBob3Jpem9udGFsIHNjcm9sbGluZyB3aGVuIHNjcm9sbGluZyB2ZXJ0aWNhbGx5ICovXG4gICAgICAgIHRoaXMuX3RvdGFsTW92ZWRYID0gdGhpcy5fdG91Y2hTdGFydFggLSB0b3VjaFBvcy5zY3JlZW5YO1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5fdG90YWxNb3ZlZFgpIDwgdGhpcy5zd2lwZVRvbGVyYW5jZVggJiYgIXRoaXMuX29mZnNldFJlY29yZGVkKSB7XG4gICAgICAgICAgICAvKiBEbyBub3Qgc2Nyb2xsIGhvcml6b250YWxseSB5ZXQgd2hpbGUgaW4gdGhlIHRvbGVyYW5jZSByYW5nZSAqL1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9ZKGRlc3RZKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fb2Zmc2V0UmVjb3JkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXREaXJlY3Rpb24gPSBNYXRoLnNpZ24oZGVzdFggLSB0aGlzLl9zdGFydFgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldFJlY29yZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIE9uY2UgdGhlIHRvbGVyYW5jZSBpcyBleGNlZWRlZCBpdCBjYW4gYmUgc2Nyb2xsZWQgaG9yaXpvbnRhbGx5ICovXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUbyhkZXN0WCAtIHRoaXMuX29mZnNldERpcmVjdGlvbiAqIHRoaXMuc3dpcGVUb2xlcmFuY2VYLCBkZXN0WSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjQXhpc0Nvb3Jkcyh0YXJnZXQsIG1pbiwgbWF4KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPCBtaW4pIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1pbjtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPiBtYXgpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1heDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG8oZGVzdFgsIGRlc3RZKSB7XG4gICAgICAgIGNvbnN0IGN1clBvc1ggPSB0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgY29uc3QgY3VyUG9zWSA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgICAgICAgIC8vIFRPRE8gVHJpZ2dlciBzY3JvbGxpbmcgZXZlbnQ/XG4gICAgICAgIGNvbnN0IHNjcm9sbGVkWCA9IHRoaXMuX3Njcm9sbFRvWChkZXN0WCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbGVkWSA9IHRoaXMuX3Njcm9sbFRvWShkZXN0WSk7XG5cbiAgICAgICAgcmV0dXJuIHsgeDogc2Nyb2xsZWRYLCB5OiBzY3JvbGxlZFkgfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9YKGRlc3QpIHtcbiAgICAgICAgdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPSBkZXN0O1xuICAgIH1cbiAgICBwcml2YXRlIF9zY3JvbGxUb1koZGVzdCkge1xuICAgICAgICB0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gZGVzdDtcbiAgICB9XG5cbiAgIHByb3RlY3RlZCBfaW5lcnRpYUluaXQoc3BlZWRYLCBzcGVlZFkpIHtcbiAgICBjb25zdCBzdGVwTW9kaWZlciA9IHRoaXMuaW5lcnRpYVN0ZXAsXG4gICAgICAgIGluZXJ0aWFEdXJhdGlvbiA9IHRoaXMuaW5lcnRpYUR1cmF0aW9uO1xuICAgIGxldCB4ID0gMDtcbiAgICB0aGlzLl9uZXh0WCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICAgIHRoaXMuX25leHRZID0gdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcDtcblxuICAgIC8vIFNldHMgdGltZW91dCB1bnRpbCBleGVjdXRpbmcgbmV4dCBtb3ZlbWVudCBpdGVyYXRpb24gb2YgdGhlIGluZXJ0aWFcbiAgICBjb25zdCBpbmVydGlhU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHggPiA2KSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl90b3VjaEluZXJ0aWFBbmltSUQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNwZWVkWCkgPiBNYXRoLmFicyhzcGVlZFkpKSB7XG4gICAgICAgICAgICB4ICs9IDAuMDUgLyAoMSAqIGluZXJ0aWFEdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ICs9IDAuMDUgLyAoMSAqIGluZXJ0aWFEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeCA8PSAxKSB7XG4gICAgICAgICAgICAvLyBXZSB1c2UgY29uc3RhbnQgcXVhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG9mZnNldCB3aXRob3V0IHNwZWVkIGZhbGxvZmYgYmVmb3IgeCByZWFjaGVzIDFcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzcGVlZFkpIDw9IE1hdGguYWJzKHNwZWVkWCkgKiB0aGlzLmluZXJ0aWFEZWx0YVkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXh0WCArPSAxICogc3BlZWRYICogMTUgKiBzdGVwTW9kaWZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzcGVlZFkpID49IE1hdGguYWJzKHNwZWVkWCkgKiB0aGlzLmluZXJ0aWFEZWx0YVgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXh0WSArPSAxICogc3BlZWRZICogMTUgKiBzdGVwTW9kaWZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIHVzZSB0aGUgcXVhdGlvbiBcInkgPSAyIC8gKHggKyAwLjU1KSAtIDAuM1wiIHRvIGRldGVybWluZSB0aGUgb2Zmc2V0XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWRZKSA8PSBNYXRoLmFicyhzcGVlZFgpICogdGhpcy5pbmVydGlhRGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmV4dFggKz0gTWF0aC5hYnMoMiAvICh4ICsgMC41NSkgLSAwLjMpICogc3BlZWRYICogMTUgKiBzdGVwTW9kaWZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzcGVlZFkpID49IE1hdGguYWJzKHNwZWVkWCkgKiB0aGlzLmluZXJ0aWFEZWx0YVgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXh0WSArPSBNYXRoLmFicygyIC8gKHggKyAwLjU1KSAtIDAuMykgKiBzcGVlZFkgKiAxNSAqIHN0ZXBNb2RpZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBtaXhlZCBlbnZpcm9ubWVudCB3ZSB1c2UgdGhlIGRlZmF1bHQgYmVoYXZpb3VyLiBpLmUuIHRvdWNoc2NyZWVuICsgbW91c2VcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG8odGhpcy5fbmV4dFgsIHRoaXMuX25leHRZKTtcblxuICAgICAgICB0aGlzLl90b3VjaEluZXJ0aWFBbmltSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaW5lcnRpYVN0ZXApO1xuICAgIH07XG5cbiAgICAvLyBTdGFydCBpbmVydGlhIGFuZCBjb250aW51ZSBpdCByZWN1cnNpdmVseVxuICAgIHRoaXMuX3RvdWNoSW5lcnRpYUFuaW1JRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpbmVydGlhU3RlcCk7XG4gICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCB8fCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsXG4gICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uV2hlZWwoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICAgICAgIChldnQpID0+IHsgdGhpcy5vblRvdWNoU3RhcnQoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsXG4gICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uVG91Y2hNb3ZlKGV2dCk7IH0pO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsXG4gICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uVG91Y2hFbmQoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJyxcbiAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Qb2ludGVyRG93bihldnQpOyB9KTtcbiAgICAgICAgICAgIHRhcmdldEVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJyxcbiAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Qb2ludGVyVXAoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TR2VzdHVyZVN0YXJ0JyxcbiAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25NU0dlc3R1cmVTdGFydChldnQpOyB9KTtcbiAgICAgICAgICAgIHRhcmdldEVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNHZXN0dXJlQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25NU0dlc3R1cmVDaGFuZ2UoZXZ0KTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hTY3JvbGxJbmVydGlhRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4U2Nyb2xsSW5lcnRpYURpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hTY3JvbGxJbmVydGlhTW9kdWxlIHtcbn1cblxuIl19
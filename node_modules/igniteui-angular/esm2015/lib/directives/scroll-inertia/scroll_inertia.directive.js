/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, NgZone, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * @hidden
 */
export class IgxScrollInertiaDirective {
    /**
     * @param {?} element
     * @param {?} _zone
     */
    constructor(element, _zone) {
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
    ngOnInit() {
        this._zone.runOutsideAngular(() => {
            /** @type {?} */
            const targetElem = this.element.nativeElement.parentElement || this.element.nativeElement.parentNode;
            targetElem.addEventListener('wheel', (evt) => { this.onWheel(evt); });
            targetElem.addEventListener('touchstart', (evt) => { this.onTouchStart(evt); });
            targetElem.addEventListener('touchmove', (evt) => { this.onTouchMove(evt); });
            targetElem.addEventListener('touchend', (evt) => { this.onTouchEnd(evt); });
            targetElem.addEventListener('pointerdown', (evt) => { this.onPointerDown(evt); });
            targetElem.addEventListener('pointerup', (evt) => { this.onPointerUp(evt); });
            targetElem.addEventListener('MSGestureStart', (evt) => { this.onMSGestureStart(evt); });
            targetElem.addEventListener('MSGestureChange', (evt) => { this.onMSGestureChange(evt); });
        });
    }
    /**
     * @hidden
     * Function that is called when scrolling with the mouse wheel or using touchpad
     * @protected
     * @param {?} evt
     * @return {?}
     */
    onWheel(evt) {
        // if no scrollbar return
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        /** @type {?} */
        let scrollDeltaX;
        /** @type {?} */
        let scrollDeltaY;
        /** @type {?} */
        const scrollStep = this.wheelStep;
        /** @type {?} */
        const minWheelStep = 1 / this.wheelStep;
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
            const curScrollLeft = this.IgxScrollInertiaScrollContainer.scrollLeft;
            /** @type {?} */
            const maxScrollLeft = parseInt(this.IgxScrollInertiaScrollContainer.children[0].style.width, 10);
            if (0 < curScrollLeft && curScrollLeft < maxScrollLeft) {
                // Prevent navigating through pages when scrolling on Mac
                evt.preventDefault();
            }
        }
        else if (scrollDeltaY && this.IgxScrollInertiaDirection === 'vertical') {
            this._scrollToY(this._startY + scrollDeltaY * scrollStep);
            this.preventParentScroll(evt, true);
        }
    }
    /**
     * @hidden
     * When there is still room to scroll up/down prevent the parent elements from scrolling too.
     * @protected
     * @param {?} evt
     * @param {?} preventDefault
     * @return {?}
     */
    preventParentScroll(evt, preventDefault) {
        /** @type {?} */
        const curScrollTop = this.IgxScrollInertiaScrollContainer.scrollTop;
        /** @type {?} */
        const maxScrollTop = this.IgxScrollInertiaScrollContainer.children[0].scrollHeight -
            this.IgxScrollInertiaScrollContainer.offsetHeight;
        if (0 < curScrollTop && curScrollTop < maxScrollTop) {
            if (preventDefault) {
                evt.preventDefault();
            }
            if (evt.stopPropagation) {
                evt.stopPropagation();
            }
        }
    }
    /**
     * @hidden
     * Function that is called the first moment we start interacting with the content on a touch device
     * @protected
     * @param {?} event
     * @return {?}
     */
    onTouchStart(event) {
        if (typeof MSGesture === 'function' || !this.IgxScrollInertiaScrollContainer) {
            return false;
        }
        // stops any current ongoing inertia
        cancelAnimationFrame(this._touchInertiaAnimID);
        /** @type {?} */
        const touch = event.touches[0];
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
    }
    /**
     * @hidden
     * Function that is called when we need to scroll the content based on touch interactions
     * @protected
     * @param {?} event
     * @return {?}
     */
    onTouchMove(event) {
        if (typeof MSGesture === 'function') {
            this._touchPrevented = false;
            return false;
        }
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        /** @type {?} */
        const touch = event.touches[0];
        /** @type {?} */
        const destX = this._startX + (this._touchStartX - touch.pageX) * Math.sign(this.inertiaStep);
        /** @type {?} */
        const destY = this._startY + (this._touchStartY - touch.pageY) * Math.sign(this.inertiaStep);
        /* Handle complex touchmoves when swipe stops but the toch doesn't end and then a swipe is initiated again */
        /* **********************************************************/
        /** @type {?} */
        const timeFromLastTouch = (new Date().getTime()) - this._lastTouchEnd;
        if (timeFromLastTouch !== 0 && timeFromLastTouch < 100) {
            /** @type {?} */
            const speedX = (this._lastTouchX - touch.pageX) / timeFromLastTouch;
            /** @type {?} */
            const speedY = (this._lastTouchY - touch.pageY) / timeFromLastTouch;
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
        let scrolledXY;
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
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    onTouchEnd(event) {
        if (typeof MSGesture === 'function') {
            return;
        }
        /** @type {?} */
        let speedX = 0;
        /** @type {?} */
        let speedY = 0;
        // savedSpeedsX and savedSpeedsY have same length
        for (let i = 0; i < this._savedSpeedsX.length; i++) {
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
    }
    /**
     * @hidden
     * Function that is called when we need to detect touch starting on a touch device on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    onPointerDown(event) {
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
    }
    /**
     * @hidden
     * Function that is called when we need to detect touch ending on a touch device on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    onPointerUp(event) {
        if (!this._pointer) {
            return true;
        }
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        /* releasePointerCaptureFName is the name of the function that is supported */
        event.target[this.releasePointerCaptureFName](this._pointer);
        delete this._pointer;
    }
    /**
     * @hidden
     *  Function that is called when a gesture begins on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    onMSGestureStart(event) {
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
    }
    /**
     * @hidden
     * Function that is called when a we need to scroll based on the gesture performed on IE/Edge
     * @protected
     * @param {?} event
     * @return {?}
     */
    onMSGestureChange(event) {
        if (!this.IgxScrollInertiaScrollContainer) {
            return;
        }
        /** @type {?} */
        const touchPos = event;
        /** @type {?} */
        const destX = this._startX + this._touchStartX - touchPos.screenX;
        /** @type {?} */
        const destY = this._startY + this._touchStartY - touchPos.screenY;
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
    }
    /**
     * @private
     * @param {?} target
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    calcAxisCoords(target, min, max) {
        if (target === undefined || target < min) {
            target = min;
        }
        else if (target > max) {
            target = max;
        }
        return target;
    }
    /**
     * @private
     * @param {?} destX
     * @param {?} destY
     * @return {?}
     */
    _scrollTo(destX, destY) {
        /** @type {?} */
        const curPosX = this.IgxScrollInertiaScrollContainer.scrollLeft;
        /** @type {?} */
        const curPosY = this.IgxScrollInertiaScrollContainer.scrollTop;
        // TODO Trigger scrolling event?
        /** @type {?} */
        const scrolledX = this._scrollToX(destX);
        /** @type {?} */
        const scrolledY = this._scrollToY(destY);
        return { x: scrolledX, y: scrolledY };
    }
    /**
     * @private
     * @param {?} dest
     * @return {?}
     */
    _scrollToX(dest) {
        this.IgxScrollInertiaScrollContainer.scrollLeft = dest;
    }
    /**
     * @private
     * @param {?} dest
     * @return {?}
     */
    _scrollToY(dest) {
        this.IgxScrollInertiaScrollContainer.scrollTop = dest;
    }
    /**
     * @protected
     * @param {?} speedX
     * @param {?} speedY
     * @return {?}
     */
    _inertiaInit(speedX, speedY) {
        /** @type {?} */
        const stepModifer = this.inertiaStep;
        /** @type {?} */
        const inertiaDuration = this.inertiaDuration;
        /** @type {?} */
        let x = 0;
        this._nextX = this.IgxScrollInertiaScrollContainer.scrollLeft;
        this._nextY = this.IgxScrollInertiaScrollContainer.scrollTop;
        // Sets timeout until executing next movement iteration of the inertia
        /** @type {?} */
        const inertiaStep = () => {
            if (x > 6) {
                cancelAnimationFrame(this._touchInertiaAnimID);
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
                if (Math.abs(speedY) <= Math.abs(speedX) * this.inertiaDeltaY) {
                    this._nextX += 1 * speedX * 15 * stepModifer;
                }
                if (Math.abs(speedY) >= Math.abs(speedX) * this.inertiaDeltaX) {
                    this._nextY += 1 * speedY * 15 * stepModifer;
                }
            }
            else {
                // We use the quation "y = 2 / (x + 0.55) - 0.3" to determine the offset
                if (Math.abs(speedY) <= Math.abs(speedX) * this.inertiaDeltaY) {
                    this._nextX += Math.abs(2 / (x + 0.55) - 0.3) * speedX * 15 * stepModifer;
                }
                if (Math.abs(speedY) >= Math.abs(speedX) * this.inertiaDeltaX) {
                    this._nextY += Math.abs(2 / (x + 0.55) - 0.3) * speedY * 15 * stepModifer;
                }
            }
            // If we have mixed environment we use the default behaviour. i.e. touchscreen + mouse
            this._scrollTo(this._nextX, this._nextY);
            this._touchInertiaAnimID = requestAnimationFrame(inertiaStep);
        };
        // Start inertia and continue it recursively
        this._touchInertiaAnimID = requestAnimationFrame(inertiaStep);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._zone.runOutsideAngular(() => {
            /** @type {?} */
            const targetElem = this.element.nativeElement.parentElement || this.element.nativeElement.parentNode;
            targetElem.removeEventListener('wheel', (evt) => { this.onWheel(evt); });
            targetElem.removeEventListener('touchstart', (evt) => { this.onTouchStart(evt); });
            targetElem.removeEventListener('touchmove', (evt) => { this.onTouchMove(evt); });
            targetElem.removeEventListener('touchend', (evt) => { this.onTouchEnd(evt); });
            targetElem.removeEventListener('pointerdown', (evt) => { this.onPointerDown(evt); });
            targetElem.removeEventListener('pointerup', (evt) => { this.onPointerUp(evt); });
            targetElem.removeEventListener('MSGestureStart', (evt) => { this.onMSGestureStart(evt); });
            targetElem.removeEventListener('MSGestureChange', (evt) => { this.onMSGestureChange(evt); });
        });
    }
}
IgxScrollInertiaDirective.decorators = [
    { type: Directive, args: [{ selector: '[igxScrollInertia]' },] }
];
/** @nocollapse */
IgxScrollInertiaDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
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
export class IgxScrollInertiaModule {
}
IgxScrollInertiaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxScrollInertiaDirective],
                exports: [IgxScrollInertiaDirective],
                imports: [CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsX2luZXJ0aWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Njcm9sbC1pbmVydGlhL3Njcm9sbF9pbmVydGlhLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBVSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBTS9DLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBRWxDLFlBQW9CLE9BQW1CLEVBQVUsS0FBYTtRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQVd2RCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2YsZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFHbEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFHckIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHbEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHbEIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFVckIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFTbkIsMkJBQXNCLEdBQUcsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEtBQUssVUFBVSxDQUFDLENBQUM7WUFDakcscUJBQXFCLENBQUMsQ0FBQztZQUN2QixtQkFBbUIsQ0FBQztRQUNaLCtCQUEwQixHQUFHLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDO1lBQ3pHLHlCQUF5QixDQUFDLENBQUM7WUFDM0IsdUJBQXVCLENBQUM7SUFoRHhCLENBQUM7Ozs7SUFxREQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMs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Qjs7Ozs7SUFDdkIsMkRBRW9COzs7OztJQUNwQiwrREFFd0I7Ozs7O0lBQ3hCLDZDQUFpQjs7Ozs7SUFDakIsMkNBQWU7Ozs7O0lBQ2YsMkNBQWU7Ozs7O0lBckRILDRDQUEyQjs7Ozs7SUFBRSwwQ0FBcUI7Ozs7O0FBK2VsRSxNQUFNLE9BQU8sc0JBQXNCOzs7WUFObEMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgTmdab25lLCBPbkluaXQsIE5nTW9kdWxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbaWd4U2Nyb2xsSW5lcnRpYV0nIH0pXG5leHBvcnQgY2xhc3MgSWd4U2Nyb2xsSW5lcnRpYURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7XG5cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBJZ3hTY3JvbGxJbmVydGlhRGlyZWN0aW9uOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBJZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyOiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3aGVlbFN0ZXAgPSA1MDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZXJ0aWFTdGVwID0gMS41O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3dpcGVUb2xlcmFuY2VYID0gMjA7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmVydGlhRGVsdGFZID0gMztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZXJ0aWFEZWx0YVggPSAyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW5lcnRpYUR1cmF0aW9uID0gMC41O1xuXG4gICAgcHJpdmF0ZSBfdG91Y2hJbmVydGlhQW5pbUlEO1xuICAgIHByaXZhdGUgX3N0YXJ0WDtcbiAgICBwcml2YXRlIF9zdGFydFk7XG4gICAgcHJpdmF0ZSBfdG91Y2hTdGFydFg7XG4gICAgcHJpdmF0ZSBfdG91Y2hTdGFydFk7XG4gICAgcHJpdmF0ZSBfbGFzdFRvdWNoRW5kO1xuICAgIHByaXZhdGUgX2xhc3RUb3VjaFg7XG4gICAgcHJpdmF0ZSBfbGFzdFRvdWNoWTtcbiAgICBwcml2YXRlIF9zYXZlZFNwZWVkc1ggPSBbXTtcbiAgICBwcml2YXRlIF9zYXZlZFNwZWVkc1k7XG4gICAgcHJpdmF0ZSBfdG90YWxNb3ZlZFg7XG4gICAgcHJpdmF0ZSBfb2Zmc2V0UmVjb3JkZWQ7XG4gICAgcHJpdmF0ZSBfb2Zmc2V0RGlyZWN0aW9uO1xuICAgIHByaXZhdGUgX3RvdWNoUHJldmVudGVkO1xuICAgIHByaXZhdGUgX2xhc3RNb3ZlZFg7XG4gICAgcHJpdmF0ZSBfbGFzdE1vdmVkWTtcbiAgICBwcml2YXRlIF9nZXN0dXJlT2JqZWN0O1xuICAgIHByaXZhdGUgc2V0UG9pbnRlckNhcHR1cmVGTmFtZSA9IHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZVsnbXNTZXRQb2ludGVyQ2FwdHVyZSddID09PSAnZnVuY3Rpb24nID9cbiAgICAnbXNTZXRQb2ludGVyQ2FwdHVyZScgOlxuICAgICdzZXRQb2ludGVyQ2FwdHVyZSc7XG4gICAgcHJpdmF0ZSByZWxlYXNlUG9pbnRlckNhcHR1cmVGTmFtZSA9IHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZVsnbXNSZWxlYXNlUG9pbnRlckNhcHR1cmUnXSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgJ21zUmVsZWFzZVBvaW50ZXJDYXB0dXJlJyA6XG4gICAgJ3JlbGVhc2VQb2ludGVyQ2FwdHVyZSc7XG4gICAgcHJpdmF0ZSBfcG9pbnRlcjtcbiAgICBwcml2YXRlIF9uZXh0WDtcbiAgICBwcml2YXRlIF9uZXh0WTtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJyxcbiAgICAgICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uV2hlZWwoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Ub3VjaFN0YXJ0KGV2dCk7IH0pO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLFxuICAgICAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Ub3VjaE1vdmUoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uVG91Y2hFbmQoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJyxcbiAgICAgICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uUG9pbnRlckRvd24oZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsXG4gICAgICAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Qb2ludGVyVXAoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ01TR2VzdHVyZVN0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uTVNHZXN0dXJlU3RhcnQoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ01TR2VzdHVyZUNoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIChldnQpID0+IHsgdGhpcy5vbk1TR2VzdHVyZUNoYW5nZShldnQpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHNjcm9sbGluZyB3aXRoIHRoZSBtb3VzZSB3aGVlbCBvciB1c2luZyB0b3VjaHBhZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbldoZWVsKGV2dCkge1xuICAgICAgICAvLyBpZiBubyBzY3JvbGxiYXIgcmV0dXJuXG4gICAgICAgIGlmICghdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNjcm9sbERlbHRhWDtcbiAgICAgICAgbGV0IHNjcm9sbERlbHRhWTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsU3RlcCA9IHRoaXMud2hlZWxTdGVwO1xuICAgICAgICBjb25zdCBtaW5XaGVlbFN0ZXAgPSAxIC8gdGhpcy53aGVlbFN0ZXA7XG5cbiAgICAgICAgdGhpcy5fc3RhcnRYID0gdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgICAgIHRoaXMuX3N0YXJ0WSA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgICAgICAgaWYgKGV2dC53aGVlbERlbHRhWCkge1xuICAgICAgICAgICAgLyogT3B0aW9uIHN1cHBvcnRlZCBvbiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEuXG4gICAgICAgICAgICAvKiAxMjAgaXMgZGVmYXVsdCBmb3IgbW91c2V3aGVlbCBvbiB0aGVzZSBicm93c2Vycy4gT3RoZXIgdmFsdWVzIGFyZSBmb3IgdHJhY2twYWRzICovXG4gICAgICAgICAgICBzY3JvbGxEZWx0YVggPSAtZXZ0LndoZWVsRGVsdGFYIC8gMTIwO1xuXG4gICAgICAgICAgICBpZiAoLW1pbldoZWVsU3RlcCA8IHNjcm9sbERlbHRhWCAmJiBzY3JvbGxEZWx0YVggPCBtaW5XaGVlbFN0ZXApIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEZWx0YVggPSBNYXRoLnNpZ24oc2Nyb2xsRGVsdGFYKSAqIG1pbldoZWVsU3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldnQuZGVsdGFYKSB7XG4gICAgICAgICAgICAvKiBGb3Igb3RoZXIgYnJvd3NlcnMgdGhhdCBkb24ndCBwcm92aWRlIHdoZWVsRGVsdGEsIHVzZSB0aGUgZGVsdGFZIHRvIGRldGVybWluZSBkaXJlY3Rpb24gYW5kIHBhc3MgZGVmYXVsdCB2YWx1ZXMuICovXG4gICAgICAgICAgICBzY3JvbGxEZWx0YVggPSB0aGlzLmNhbGNBeGlzQ29vcmRzKGV2dC5kZWx0YVgsIC0xLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBHZXQgZGVsdGEgZm9yIHRoZSBZIGF4aXMqL1xuICAgICAgICBpZiAoZXZ0LndoZWVsRGVsdGFZKSB7XG4gICAgICAgICAgICAvKiBPcHRpb24gc3VwcG9ydGVkIG9uIENocm9tZSwgU2FmYXJpLCBPcGVyYS5cbiAgICAgICAgICAgIC8qIDEyMCBpcyBkZWZhdWx0IGZvciBtb3VzZXdoZWVsIG9uIHRoZXNlIGJyb3dzZXJzLiBPdGhlciB2YWx1ZXMgYXJlIGZvciB0cmFja3BhZHMgKi9cbiAgICAgICAgICAgIHNjcm9sbERlbHRhWSA9IC1ldnQud2hlZWxEZWx0YVkgLyAxMjA7XG5cbiAgICAgICAgICAgIGlmICgtbWluV2hlZWxTdGVwIDwgc2Nyb2xsRGVsdGFZICYmIHNjcm9sbERlbHRhWSA8IG1pbldoZWVsU3RlcCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbERlbHRhWSA9IE1hdGguc2lnbihzY3JvbGxEZWx0YVkpICogbWluV2hlZWxTdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2dC5kZWx0YVkpIHtcbiAgICAgICAgICAgIC8qIEZvciBvdGhlciBicm93c2VycyB0aGF0IGRvbid0IHByb3ZpZGUgd2hlZWxEZWx0YSwgdXNlIHRoZSBkZWx0YVkgdG8gZGV0ZXJtaW5lIGRpcmVjdGlvbiBhbmQgcGFzcyBkZWZhdWx0IHZhbHVlcy4gKi9cbiAgICAgICAgICAgIHNjcm9sbERlbHRhWSA9IHRoaXMuY2FsY0F4aXNDb29yZHMoZXZ0LmRlbHRhWSwgLTEsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY3JvbGxEZWx0YVggJiYgdGhpcy5JZ3hTY3JvbGxJbmVydGlhRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvWChcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFggKyBzY3JvbGxEZWx0YVggKiBzY3JvbGxTdGVwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY3VyU2Nyb2xsTGVmdCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsTGVmdCA9IHBhcnNlSW50KHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5jaGlsZHJlblswXS5zdHlsZS53aWR0aCwgMTApO1xuICAgICAgICAgICAgaWYgKDAgPCBjdXJTY3JvbGxMZWZ0ICYmIGN1clNjcm9sbExlZnQgPCBtYXhTY3JvbGxMZWZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBuYXZpZ2F0aW5nIHRocm91Z2ggcGFnZXMgd2hlbiBzY3JvbGxpbmcgb24gTWFjXG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsRGVsdGFZICYmIHRoaXMuSWd4U2Nyb2xsSW5lcnRpYURpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9ZKFxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0WSArIHNjcm9sbERlbHRhWSAqIHNjcm9sbFN0ZXBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnRQYXJlbnRTY3JvbGwoZXZ0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBXaGVuIHRoZXJlIGlzIHN0aWxsIHJvb20gdG8gc2Nyb2xsIHVwL2Rvd24gcHJldmVudCB0aGUgcGFyZW50IGVsZW1lbnRzIGZyb20gc2Nyb2xsaW5nIHRvby5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcHJldmVudFBhcmVudFNjcm9sbChldnQsIHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGNvbnN0IGN1clNjcm9sbFRvcCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IG1heFNjcm9sbFRvcCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5jaGlsZHJlblswXS5zY3JvbGxIZWlnaHQgLVxuICAgICAgICAgICAgdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgaWYgKDAgPCBjdXJTY3JvbGxUb3AgJiYgY3VyU2Nyb2xsVG9wIDwgbWF4U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZ0LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0aGUgZmlyc3QgbW9tZW50IHdlIHN0YXJ0IGludGVyYWN0aW5nIHdpdGggdGhlIGNvbnRlbnQgb24gYSB0b3VjaCBkZXZpY2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgTVNHZXN0dXJlID09PSAnZnVuY3Rpb24nIHx8ICF0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3BzIGFueSBjdXJyZW50IG9uZ29pbmcgaW5lcnRpYVxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl90b3VjaEluZXJ0aWFBbmltSUQpO1xuXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1sgMCBdO1xuXG4gICAgICAgIHRoaXMuX3N0YXJ0WCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIHRoaXMuX3N0YXJ0WSA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgICAgICAgdGhpcy5fdG91Y2hTdGFydFggPSB0b3VjaC5wYWdlWDtcbiAgICAgICAgdGhpcy5fdG91Y2hTdGFydFkgPSB0b3VjaC5wYWdlWTtcblxuICAgICAgICB0aGlzLl9sYXN0VG91Y2hFbmQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5fbGFzdFRvdWNoWCA9IHRvdWNoLnBhZ2VYO1xuICAgICAgICB0aGlzLl9sYXN0VG91Y2hZID0gdG91Y2gucGFnZVk7XG4gICAgICAgIHRoaXMuX3NhdmVkU3BlZWRzWCA9IFtdO1xuICAgICAgICB0aGlzLl9zYXZlZFNwZWVkc1kgPSBbXTtcblxuICAgICAgICAvLyBWYXJzIHJlZ2FyZGluZyBzd2lwZSBvZmZzZXRcbiAgICAgICAgdGhpcy5fdG90YWxNb3ZlZFggPSAwO1xuICAgICAgICB0aGlzLl9vZmZzZXRSZWNvcmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vZmZzZXREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuX3RvdWNoUHJldmVudGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLklneFNjcm9sbEluZXJ0aWFEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudFBhcmVudFNjcm9sbChldmVudCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gd2UgbmVlZCB0byBzY3JvbGwgdGhlIGNvbnRlbnQgYmFzZWQgb24gdG91Y2ggaW50ZXJhY3Rpb25zXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgTVNHZXN0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl90b3VjaFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbIDAgXTtcbiAgICAgICAgY29uc3QgZGVzdFggPSB0aGlzLl9zdGFydFggKyAodGhpcy5fdG91Y2hTdGFydFggLSB0b3VjaC5wYWdlWCkgKiBNYXRoLnNpZ24odGhpcy5pbmVydGlhU3RlcCk7XG4gICAgICAgIGNvbnN0IGRlc3RZID0gdGhpcy5fc3RhcnRZICsgKHRoaXMuX3RvdWNoU3RhcnRZIC0gdG91Y2gucGFnZVkpICogTWF0aC5zaWduKHRoaXMuaW5lcnRpYVN0ZXApO1xuXG4gICAgICAgIC8qIEhhbmRsZSBjb21wbGV4IHRvdWNobW92ZXMgd2hlbiBzd2lwZSBzdG9wcyBidXQgdGhlIHRvY2ggZG9lc24ndCBlbmQgYW5kIHRoZW4gYSBzd2lwZSBpcyBpbml0aWF0ZWQgYWdhaW4gKi9cbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gICAgICAgIGNvbnN0IHRpbWVGcm9tTGFzdFRvdWNoID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAtIHRoaXMuX2xhc3RUb3VjaEVuZDtcbiAgICAgICAgaWYgKHRpbWVGcm9tTGFzdFRvdWNoICE9PSAwICYmIHRpbWVGcm9tTGFzdFRvdWNoIDwgMTAwKSB7XG4gICAgICAgICAgICBjb25zdCBzcGVlZFggPSAodGhpcy5fbGFzdFRvdWNoWCAtIHRvdWNoLnBhZ2VYKSAvIHRpbWVGcm9tTGFzdFRvdWNoO1xuICAgICAgICAgICAgY29uc3Qgc3BlZWRZID0gKHRoaXMuX2xhc3RUb3VjaFkgLSB0b3VjaC5wYWdlWSkgLyB0aW1lRnJvbUxhc3RUb3VjaDtcblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgbGFzdCA1IHNwZWVkcyBiZXR3ZWVuIHR3byB0b3VjaG1vdmVzIG9uIFggYXhpc1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkU3BlZWRzWC5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNYLnB1c2goc3BlZWRYKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNYLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNYLnB1c2goc3BlZWRYKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgbGFzdCA1IHNwZWVkcyBiZXR3ZWVuIHR3byB0b3VjaG1vdmVzIG9uIFkgYXhpc1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkU3BlZWRzWS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNZLnB1c2goc3BlZWRZKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNZLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRTcGVlZHNZLnB1c2goc3BlZWRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0VG91Y2hFbmQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5fbGFzdE1vdmVkWCA9IHRoaXMuX2xhc3RUb3VjaFggLSB0b3VjaC5wYWdlWDtcbiAgICAgICAgdGhpcy5fbGFzdE1vdmVkWSA9IHRoaXMuX2xhc3RUb3VjaFkgLSB0b3VjaC5wYWdlWTtcbiAgICAgICAgdGhpcy5fbGFzdFRvdWNoWCA9IHRvdWNoLnBhZ2VYO1xuICAgICAgICB0aGlzLl9sYXN0VG91Y2hZID0gdG91Y2gucGFnZVk7XG5cbiAgICAgICAgdGhpcy5fdG90YWxNb3ZlZFggKz0gdGhpcy5fbGFzdE1vdmVkWDtcblxuICAgICAgICBsZXQgc2Nyb2xsZWRYWTsgLy8gT2JqZWN0OiB7eCwgeX1cbiAgICAgICAgLypcdERvIG5vdCBzY3JvbGwgdXNpbmcgdG91Y2ggdW50aWxsIG91dCBvZiB0aGUgc3dpcGVUb2xlcmFuY2VYIGJvdW5kcyAqL1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5fdG90YWxNb3ZlZFgpIDwgdGhpcy5zd2lwZVRvbGVyYW5jZVggJiYgIXRoaXMuX29mZnNldFJlY29yZGVkKSB7XG4gICAgICAgICAgICBzY3JvbGxlZFhZID0gdGhpcy5fc2Nyb2xsVG8odGhpcy5fc3RhcnRYLCBkZXN0WSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKlx0UmVjb3JkIHRoZSBkaXJlY3Rpb24gdGhlIGZpcnN0IHRpbWUgd2UgYXJlIG91dCBvZiB0aGUgc3dpcGVUb2xlcmFuY2VYIGJvdW5kcy5cblx0XHRcdCpcdFRoYXQgd2F5IHdlIGtub3cgd2hpY2ggZGlyZWN0aW9uIHdlIGFwcGx5IHRoZSBvZmZzZXQgc28gaXQgZG9lc24ndCBoaWNrdXAgd2hlbiBtb3Zpbmcgb3V0IG9mIHRoZSBzd2lwZVRvbGVyYW5jZVggYm91bmRzICovXG4gICAgICAgICAgICBpZiAoIXRoaXMuX29mZnNldFJlY29yZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0RGlyZWN0aW9uID0gTWF0aC5zaWduKGRlc3RYIC0gdGhpcy5fc3RhcnRYKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXRSZWNvcmRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qXHRTY3JvbGwgd2l0aCBvZmZzZXQgYW1tb3V0IG9mIHN3aXBlVG9sZXJhbmNlWCBpbiB0aGUgZGlyZWN0aW9uIHdlIGhhdmUgZXhpdGVkIHRoZSBib3VuZHMgYW5kXG4gICAgICAgICAgICBkb24ndCBjaGFuZ2UgaXQgYWZ0ZXIgdGhhdCBldmVyIHVudGlsIHRvdWNoZW5kIGFuZCBhZ2FpbiB0b3VjaHN0YXJ0ICovXG4gICAgICAgICAgICBzY3JvbGxlZFhZID0gdGhpcy5fc2Nyb2xsVG8oZGVzdFggLSB0aGlzLl9vZmZzZXREaXJlY3Rpb24gKiB0aGlzLnN3aXBlVG9sZXJhbmNlWCxcbiAgICAgICAgICAgICAgICBkZXN0WSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2Nyb2xsZWRYWS54ID09PSAwICYmIHNjcm9sbGVkWFkueSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT24gU2FmYXJpIHByZXZlbnRpbmcgdGhlIHRvdWNobW92ZSB3b3VsZCBwcmV2ZW50IGRlZmF1bHQgcGFnZSBzY3JvbGwgYmVoYXZpb3VyIGV2ZW4gaWYgdGhlcmUgaXMgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIG92ZXJmbG93XG4gICAgICAgIGlmICh0aGlzLklneFNjcm9sbEluZXJ0aWFEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudFBhcmVudFNjcm9sbChldmVudCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIE1TR2VzdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGVlZFggPSAwO1xuICAgICAgICBsZXQgc3BlZWRZID0gMDtcblxuICAgICAgICAvLyBzYXZlZFNwZWVkc1ggYW5kIHNhdmVkU3BlZWRzWSBoYXZlIHNhbWUgbGVuZ3RoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2F2ZWRTcGVlZHNYLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzcGVlZFggKz0gdGhpcy5fc2F2ZWRTcGVlZHNYWyBpIF07XG4gICAgICAgICAgICBzcGVlZFkgKz0gdGhpcy5fc2F2ZWRTcGVlZHNZWyBpIF07XG4gICAgICAgIH1cbiAgICAgICAgc3BlZWRYID0gdGhpcy5fc2F2ZWRTcGVlZHNYLmxlbmd0aCA/IHNwZWVkWCAvIHRoaXMuX3NhdmVkU3BlZWRzWC5sZW5ndGggOiAwO1xuICAgICAgICBzcGVlZFkgPSB0aGlzLl9zYXZlZFNwZWVkc1gubGVuZ3RoID8gc3BlZWRZIC8gdGhpcy5fc2F2ZWRTcGVlZHNZLmxlbmd0aCA6IDA7XG5cbiAgICAgICAgIC8vIFVzZSB0aGUgbGFzdE1vdmVkWCBhbmQgbGFzdE1vdmVkWSB0byBkZXRlcm1pbmUgaWYgdGhlIHN3aXBlIHN0b3BzIHdpdGhvdXQgbGlmdGluZyB0aGUgZmluZ2VyIHNvIHdlIGRvbid0IHN0YXJ0IGluZXJ0aWFcbiAgICAgICAgaWYgKChNYXRoLmFicyhzcGVlZFgpID4gMC4xIHx8IE1hdGguYWJzKHNwZWVkWSkgPiAwLjEpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoTWF0aC5hYnModGhpcy5fbGFzdE1vdmVkWCkgPiAyIHx8IE1hdGguYWJzKHRoaXMuX2xhc3RNb3ZlZFkpID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5lcnRpYUluaXQoc3BlZWRYLCBzcGVlZFkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLklneFNjcm9sbEluZXJ0aWFEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudFBhcmVudFNjcm9sbChldmVudCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gd2UgbmVlZCB0byBkZXRlY3QgdG91Y2ggc3RhcnRpbmcgb24gYSB0b3VjaCBkZXZpY2Ugb24gSUUvRWRnZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQgfHwgKGV2ZW50LnBvaW50ZXJUeXBlICE9PSAyICYmIGV2ZW50LnBvaW50ZXJUeXBlICE9PSAndG91Y2gnKSB8fFxuICAgICAgICAgICAgdHlwZW9mIE1TR2VzdHVyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXRQb2ludGVyQ2FwdHVyZUZOYW1lIGlzIHRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGlzIHN1cHBvcnRlZFxuICAgICAgICBldmVudC50YXJnZXRbdGhpcy5zZXRQb2ludGVyQ2FwdHVyZUZOYW1lXSh0aGlzLl9wb2ludGVyID0gZXZlbnQucG9pbnRlcklkKTtcblxuICAgICAgICAvLyBjcmVhdGUgZ2VzdHVyZU9iamVjdCBvbmx5IG9uZSB0aW1lIHRvIHByZXZlbnQgb3ZlcmxhcHBpbmcgZHVyaW5nIGludGVydGlhXG4gICAgICAgIGlmICghdGhpcy5fZ2VzdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5fZ2VzdHVyZU9iamVjdCA9IG5ldyBNU0dlc3R1cmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2dlc3R1cmVPYmplY3QudGFyZ2V0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCB8fCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2dlc3R1cmVPYmplY3QuYWRkUG9pbnRlcih0aGlzLl9wb2ludGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB3ZSBuZWVkIHRvIGRldGVjdCB0b3VjaCBlbmRpbmcgb24gYSB0b3VjaCBkZXZpY2Ugb24gSUUvRWRnZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblBvaW50ZXJVcChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuX3BvaW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyogcmVsZWFzZVBvaW50ZXJDYXB0dXJlRk5hbWUgaXMgdGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgc3VwcG9ydGVkICovXG4gICAgICAgIGV2ZW50LnRhcmdldFsgdGhpcy5yZWxlYXNlUG9pbnRlckNhcHR1cmVGTmFtZSBdKHRoaXMuX3BvaW50ZXIpO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiAgRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBhIGdlc3R1cmUgYmVnaW5zIG9uIElFL0VkZ2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25NU0dlc3R1cmVTdGFydChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXJ0WCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICAgICAgICB0aGlzLl9zdGFydFkgPSB0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wO1xuXG5cbiAgICAgICAgdGhpcy5fdG91Y2hTdGFydFggPSBldmVudC5zY3JlZW5YO1xuICAgICAgICB0aGlzLl90b3VjaFN0YXJ0WSA9IGV2ZW50LnNjcmVlblk7XG5cbiAgICAgICAgLy8gVmFycyByZWdhcmRpbmcgc3dpcGUgb2Zmc2V0XG4gICAgICAgIHRoaXMuX3RvdGFsTW92ZWRYID0gMDtcbiAgICAgICAgdGhpcy5fb2Zmc2V0UmVjb3JkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb2Zmc2V0RGlyZWN0aW9uID0gMDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgd2UgbmVlZCB0byBzY3JvbGwgYmFzZWQgb24gdGhlIGdlc3R1cmUgcGVyZm9ybWVkIG9uIElFL0VkZ2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25NU0dlc3R1cmVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IGV2ZW50LFxuICAgICAgICAgICAgZGVzdFggPSB0aGlzLl9zdGFydFggKyB0aGlzLl90b3VjaFN0YXJ0WCAtIHRvdWNoUG9zLnNjcmVlblgsXG4gICAgICAgICAgICBkZXN0WSA9IHRoaXMuX3N0YXJ0WSArIHRoaXMuX3RvdWNoU3RhcnRZIC0gdG91Y2hQb3Muc2NyZWVuWTtcbiAgICAgICAgLyogTG9naWMgcmVnYXJkaW5nIHggdG9sZXJhbmNlIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBob3Jpem9udGFsIHNjcm9sbGluZyB3aGVuIHNjcm9sbGluZyB2ZXJ0aWNhbGx5ICovXG4gICAgICAgIHRoaXMuX3RvdGFsTW92ZWRYID0gdGhpcy5fdG91Y2hTdGFydFggLSB0b3VjaFBvcy5zY3JlZW5YO1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5fdG90YWxNb3ZlZFgpIDwgdGhpcy5zd2lwZVRvbGVyYW5jZVggJiYgIXRoaXMuX29mZnNldFJlY29yZGVkKSB7XG4gICAgICAgICAgICAvKiBEbyBub3Qgc2Nyb2xsIGhvcml6b250YWxseSB5ZXQgd2hpbGUgaW4gdGhlIHRvbGVyYW5jZSByYW5nZSAqL1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9ZKGRlc3RZKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fb2Zmc2V0UmVjb3JkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXREaXJlY3Rpb24gPSBNYXRoLnNpZ24oZGVzdFggLSB0aGlzLl9zdGFydFgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldFJlY29yZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIE9uY2UgdGhlIHRvbGVyYW5jZSBpcyBleGNlZWRlZCBpdCBjYW4gYmUgc2Nyb2xsZWQgaG9yaXpvbnRhbGx5ICovXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUbyhkZXN0WCAtIHRoaXMuX29mZnNldERpcmVjdGlvbiAqIHRoaXMuc3dpcGVUb2xlcmFuY2VYLCBkZXN0WSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjQXhpc0Nvb3Jkcyh0YXJnZXQsIG1pbiwgbWF4KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPCBtaW4pIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1pbjtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPiBtYXgpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1heDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG8oZGVzdFgsIGRlc3RZKSB7XG4gICAgICAgIGNvbnN0IGN1clBvc1ggPSB0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgY29uc3QgY3VyUG9zWSA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgICAgICAgIC8vIFRPRE8gVHJpZ2dlciBzY3JvbGxpbmcgZXZlbnQ/XG4gICAgICAgIGNvbnN0IHNjcm9sbGVkWCA9IHRoaXMuX3Njcm9sbFRvWChkZXN0WCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbGVkWSA9IHRoaXMuX3Njcm9sbFRvWShkZXN0WSk7XG5cbiAgICAgICAgcmV0dXJuIHsgeDogc2Nyb2xsZWRYLCB5OiBzY3JvbGxlZFkgfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9YKGRlc3QpIHtcbiAgICAgICAgdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPSBkZXN0O1xuICAgIH1cbiAgICBwcml2YXRlIF9zY3JvbGxUb1koZGVzdCkge1xuICAgICAgICB0aGlzLklneFNjcm9sbEluZXJ0aWFTY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gZGVzdDtcbiAgICB9XG5cbiAgIHByb3RlY3RlZCBfaW5lcnRpYUluaXQoc3BlZWRYLCBzcGVlZFkpIHtcbiAgICBjb25zdCBzdGVwTW9kaWZlciA9IHRoaXMuaW5lcnRpYVN0ZXAsXG4gICAgICAgIGluZXJ0aWFEdXJhdGlvbiA9IHRoaXMuaW5lcnRpYUR1cmF0aW9uO1xuICAgIGxldCB4ID0gMDtcbiAgICB0aGlzLl9uZXh0WCA9IHRoaXMuSWd4U2Nyb2xsSW5lcnRpYVNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICAgIHRoaXMuX25leHRZID0gdGhpcy5JZ3hTY3JvbGxJbmVydGlhU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcDtcblxuICAgIC8vIFNldHMgdGltZW91dCB1bnRpbCBleGVjdXRpbmcgbmV4dCBtb3ZlbWVudCBpdGVyYXRpb24gb2YgdGhlIGluZXJ0aWFcbiAgICBjb25zdCBpbmVydGlhU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHggPiA2KSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl90b3VjaEluZXJ0aWFBbmltSUQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNwZWVkWCkgPiBNYXRoLmFicyhzcGVlZFkpKSB7XG4gICAgICAgICAgICB4ICs9IDAuMDUgLyAoMSAqIGluZXJ0aWFEdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ICs9IDAuMDUgLyAoMSAqIGluZXJ0aWFEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeCA8PSAxKSB7XG4gICAgICAgICAgICAvLyBXZSB1c2UgY29uc3RhbnQgcXVhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG9mZnNldCB3aXRob3V0IHNwZWVkIGZhbGxvZmYgYmVmb3IgeCByZWFjaGVzIDFcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzcGVlZFkpIDw9IE1hdGguYWJzKHNwZWVkWCkgKiB0aGlzLmluZXJ0aWFEZWx0YVkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXh0WCArPSAxICogc3BlZWRYICogMTUgKiBzdGVwTW9kaWZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzcGVlZFkpID49IE1hdGguYWJzKHNwZWVkWCkgKiB0aGlzLmluZXJ0aWFEZWx0YVgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXh0WSArPSAxICogc3BlZWRZICogMTUgKiBzdGVwTW9kaWZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIHVzZSB0aGUgcXVhdGlvbiBcInkgPSAyIC8gKHggKyAwLjU1KSAtIDAuM1wiIHRvIGRldGVybWluZSB0aGUgb2Zmc2V0XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWRZKSA8PSBNYXRoLmFicyhzcGVlZFgpICogdGhpcy5pbmVydGlhRGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmV4dFggKz0gTWF0aC5hYnMoMiAvICh4ICsgMC41NSkgLSAwLjMpICogc3BlZWRYICogMTUgKiBzdGVwTW9kaWZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzcGVlZFkpID49IE1hdGguYWJzKHNwZWVkWCkgKiB0aGlzLmluZXJ0aWFEZWx0YVgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXh0WSArPSBNYXRoLmFicygyIC8gKHggKyAwLjU1KSAtIDAuMykgKiBzcGVlZFkgKiAxNSAqIHN0ZXBNb2RpZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBtaXhlZCBlbnZpcm9ubWVudCB3ZSB1c2UgdGhlIGRlZmF1bHQgYmVoYXZpb3VyLiBpLmUuIHRvdWNoc2NyZWVuICsgbW91c2VcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG8odGhpcy5fbmV4dFgsIHRoaXMuX25leHRZKTtcblxuICAgICAgICB0aGlzLl90b3VjaEluZXJ0aWFBbmltSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaW5lcnRpYVN0ZXApO1xuICAgIH07XG5cbiAgICAvLyBTdGFydCBpbmVydGlhIGFuZCBjb250aW51ZSBpdCByZWN1cnNpdmVseVxuICAgIHRoaXMuX3RvdWNoSW5lcnRpYUFuaW1JRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpbmVydGlhU3RlcCk7XG4gICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCB8fCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsXG4gICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uV2hlZWwoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICAgICAgIChldnQpID0+IHsgdGhpcy5vblRvdWNoU3RhcnQoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsXG4gICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uVG91Y2hNb3ZlKGV2dCk7IH0pO1xuICAgICAgICAgICAgdGFyZ2V0RWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsXG4gICAgICAgICAgICAgICAgKGV2dCkgPT4geyB0aGlzLm9uVG91Y2hFbmQoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJyxcbiAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Qb2ludGVyRG93bihldnQpOyB9KTtcbiAgICAgICAgICAgIHRhcmdldEVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJyxcbiAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25Qb2ludGVyVXAoZXZ0KTsgfSk7XG4gICAgICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TR2VzdHVyZVN0YXJ0JyxcbiAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25NU0dlc3R1cmVTdGFydChldnQpOyB9KTtcbiAgICAgICAgICAgIHRhcmdldEVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNHZXN0dXJlQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAoZXZ0KSA9PiB7IHRoaXMub25NU0dlc3R1cmVDaGFuZ2UoZXZ0KTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hTY3JvbGxJbmVydGlhRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4U2Nyb2xsSW5lcnRpYURpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hTY3JvbGxJbmVydGlhTW9kdWxlIHtcbn1cblxuIl19
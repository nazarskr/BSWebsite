import { ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
/**
 * @hidden
 */
export declare class IgxScrollInertiaDirective implements OnInit, OnDestroy {
    private element;
    private _zone;
    constructor(element: ElementRef, _zone: NgZone);
    IgxScrollInertiaDirection: string;
    IgxScrollInertiaScrollContainer: any;
    wheelStep: number;
    inertiaStep: number;
    swipeToleranceX: number;
    inertiaDeltaY: number;
    inertiaDeltaX: number;
    inertiaDuration: number;
    private _touchInertiaAnimID;
    private _startX;
    private _startY;
    private _touchStartX;
    private _touchStartY;
    private _lastTouchEnd;
    private _lastTouchX;
    private _lastTouchY;
    private _savedSpeedsX;
    private _savedSpeedsY;
    private _totalMovedX;
    private _offsetRecorded;
    private _offsetDirection;
    private _touchPrevented;
    private _lastMovedX;
    private _lastMovedY;
    private _gestureObject;
    private setPointerCaptureFName;
    private releasePointerCaptureFName;
    private _pointer;
    private _nextX;
    private _nextY;
    ngOnInit(): void;
    /**
    * @hidden
    * Function that is called when scrolling with the mouse wheel or using touchpad
    */
    protected onWheel(evt: any): void;
    /**
     * @hidden
     * When there is still room to scroll up/down prevent the parent elements from scrolling too.
     */
    protected preventParentScroll(evt: any, preventDefault: any): void;
    /**
     * @hidden
     * Function that is called the first moment we start interacting with the content on a touch device
     */
    protected onTouchStart(event: any): boolean;
    /**
     * @hidden
     * Function that is called when we need to scroll the content based on touch interactions
     */
    protected onTouchMove(event: any): boolean;
    protected onTouchEnd(event: any): void;
    /**
     * @hidden
     * Function that is called when we need to detect touch starting on a touch device on IE/Edge
     */
    protected onPointerDown(event: any): boolean;
    /**
     * @hidden
     * Function that is called when we need to detect touch ending on a touch device on IE/Edge
     */
    protected onPointerUp(event: any): boolean;
    /**
     * @hidden
     *  Function that is called when a gesture begins on IE/Edge
     */
    protected onMSGestureStart(event: any): boolean;
    /**
     * @hidden
     * Function that is called when a we need to scroll based on the gesture performed on IE/Edge
     */
    protected onMSGestureChange(event: any): boolean;
    private calcAxisCoords;
    private _scrollTo;
    private _scrollToX;
    private _scrollToY;
    protected _inertiaInit(speedX: any, speedY: any): void;
    ngOnDestroy(): void;
}
/**
 * @hidden
 */
export declare class IgxScrollInertiaModule {
}

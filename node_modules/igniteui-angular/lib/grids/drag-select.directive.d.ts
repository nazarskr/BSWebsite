import { EventEmitter, ElementRef, OnDestroy, NgZone, OnInit } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
export declare enum DragScrollDirection {
    NONE = 0,
    LEFT = 1,
    TOP = 2,
    RIGHT = 3,
    BOTTOM = 4,
    TOPLEFT = 5,
    TOPRIGHT = 6,
    BOTTOMLEFT = 7,
    BOTTOMRIGHT = 8
}
export declare class IgxGridDragSelectDirective implements OnInit, OnDestroy {
    private ref;
    private zone;
    _activeDrag: boolean;
    activeDrag: boolean;
    onDragStop: EventEmitter<boolean>;
    onDragScroll: EventEmitter<DragScrollDirection>;
    readonly nativeElement: HTMLElement;
    readonly clientRect: ClientRect;
    protected end$: Subject<any>;
    protected lastDirection: DragScrollDirection;
    protected _interval$: Observable<any>;
    protected _sub: Subscription;
    constructor(ref: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    startDragSelection: (ev: PointerEvent) => void;
    stopDragSelection: () => void;
    _measureDimensions(x: number, y: number): DragScrollDirection;
    protected unsubscribe(): void;
}

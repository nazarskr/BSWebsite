/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, ElementRef, NgZone } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
/** @enum {number} */
const DragScrollDirection = {
    NONE: 0,
    LEFT: 1,
    TOP: 2,
    RIGHT: 3,
    BOTTOM: 4,
    TOPLEFT: 5,
    TOPRIGHT: 6,
    BOTTOMLEFT: 7,
    BOTTOMRIGHT: 8,
};
export { DragScrollDirection };
DragScrollDirection[DragScrollDirection.NONE] = 'NONE';
DragScrollDirection[DragScrollDirection.LEFT] = 'LEFT';
DragScrollDirection[DragScrollDirection.TOP] = 'TOP';
DragScrollDirection[DragScrollDirection.RIGHT] = 'RIGHT';
DragScrollDirection[DragScrollDirection.BOTTOM] = 'BOTTOM';
DragScrollDirection[DragScrollDirection.TOPLEFT] = 'TOPLEFT';
DragScrollDirection[DragScrollDirection.TOPRIGHT] = 'TOPRIGHT';
DragScrollDirection[DragScrollDirection.BOTTOMLEFT] = 'BOTTOMLEFT';
DragScrollDirection[DragScrollDirection.BOTTOMRIGHT] = 'BOTTOMRIGHT';
export class IgxGridDragSelectDirective {
    /**
     * @param {?} ref
     * @param {?} zone
     */
    constructor(ref, zone) {
        this.ref = ref;
        this.zone = zone;
        this.onDragStop = new EventEmitter();
        this.onDragScroll = new EventEmitter();
        this.end$ = new Subject();
        this.lastDirection = DragScrollDirection.NONE;
        this.startDragSelection = (ev) => {
            if (!this.activeDrag) {
                return;
            }
            /** @type {?} */
            const x = ev.clientX;
            /** @type {?} */
            const y = ev.clientY;
            /** @type {?} */
            const direction = this._measureDimensions(x, y);
            if (direction === this.lastDirection) {
                return;
            }
            this.unsubscribe();
            this._sub = this._interval$.subscribe(() => this.onDragScroll.emit(direction));
            this.lastDirection = direction;
        };
        this.stopDragSelection = () => {
            if (!this.activeDrag) {
                return;
            }
            this.onDragStop.emit(false);
            this.unsubscribe();
            this.lastDirection = DragScrollDirection.NONE;
        };
        this._interval$ = interval(100).pipe(takeUntil(this.end$), filter(() => this.activeDrag));
    }
    /**
     * @return {?}
     */
    get activeDrag() {
        return this._activeDrag;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set activeDrag(val) {
        if (val !== this._activeDrag) {
            this.unsubscribe();
            this._activeDrag = val;
        }
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this.ref.nativeElement;
    }
    /**
     * @return {?}
     */
    get clientRect() {
        return this.nativeElement.getBoundingClientRect();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            this.nativeElement.addEventListener('pointerover', this.startDragSelection);
            this.nativeElement.addEventListener('pointerleave', this.stopDragSelection);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            this.nativeElement.removeEventListener('pointerover', this.startDragSelection);
            this.nativeElement.removeEventListener('pointerleave', this.stopDragSelection);
        });
        this.unsubscribe();
        this.end$.complete();
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    _measureDimensions(x, y) {
        /** @type {?} */
        let direction;
        /** @type {?} */
        const rect = this.clientRect;
        /** @type {?} */
        const RATIO = 0.15;
        /** @type {?} */
        const offsetX = Math.trunc(x - rect.left);
        /** @type {?} */
        const offsetY = Math.trunc(y - rect.top);
        /** @type {?} */
        const left = offsetX <= rect.width * RATIO;
        /** @type {?} */
        const right = offsetX >= rect.width * (1 - RATIO);
        /** @type {?} */
        const top = offsetY <= rect.height * RATIO;
        /** @type {?} */
        const bottom = offsetY >= rect.height * (1 - RATIO);
        if (top && left) {
            direction = DragScrollDirection.TOPLEFT;
        }
        else if (top && right) {
            direction = DragScrollDirection.TOPRIGHT;
        }
        else if (bottom && left) {
            direction = DragScrollDirection.BOTTOMLEFT;
        }
        else if (bottom && right) {
            direction = DragScrollDirection.BOTTOMRIGHT;
        }
        else if (top) {
            direction = DragScrollDirection.TOP;
        }
        else if (bottom) {
            direction = DragScrollDirection.BOTTOM;
        }
        else if (left) {
            direction = DragScrollDirection.LEFT;
        }
        else if (right) {
            direction = DragScrollDirection.RIGHT;
        }
        else {
            direction = DragScrollDirection.NONE;
        }
        return direction;
    }
    /**
     * @protected
     * @return {?}
     */
    unsubscribe() {
        if (this._sub) {
            this._sub.unsubscribe();
        }
    }
}
IgxGridDragSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxGridDragSelect]'
            },] }
];
/** @nocollapse */
IgxGridDragSelectDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
IgxGridDragSelectDirective.propDecorators = {
    activeDrag: [{ type: Input, args: ['igxGridDragSelect',] }],
    onDragStop: [{ type: Output }],
    onDragScroll: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    IgxGridDragSelectDirective.prototype._activeDrag;
    /** @type {?} */
    IgxGridDragSelectDirective.prototype.onDragStop;
    /** @type {?} */
    IgxGridDragSelectDirective.prototype.onDragScroll;
    /**
     * @type {?}
     * @protected
     */
    IgxGridDragSelectDirective.prototype.end$;
    /**
     * @type {?}
     * @protected
     */
    IgxGridDragSelectDirective.prototype.lastDirection;
    /**
     * @type {?}
     * @protected
     */
    IgxGridDragSelectDirective.prototype._interval$;
    /**
     * @type {?}
     * @protected
     */
    IgxGridDragSelectDirective.prototype._sub;
    /** @type {?} */
    IgxGridDragSelectDirective.prototype.startDragSelection;
    /** @type {?} */
    IgxGridDragSelectDirective.prototype.stopDragSelection;
    /**
     * @type {?}
     * @private
     */
    IgxGridDragSelectDirective.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    IgxGridDragSelectDirective.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9kcmFnLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsUUFBUSxFQUE0QixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRy9DLE9BQUk7SUFDSixPQUFJO0lBQ0osTUFBRztJQUNILFFBQUs7SUFDTCxTQUFNO0lBQ04sVUFBTztJQUNQLFdBQVE7SUFDUixhQUFVO0lBQ1YsY0FBVzs7Ozs7Ozs7Ozs7O0FBT2YsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFrQ25DLFlBQW9CLEdBQWUsRUFBVSxJQUFZO1FBQXJDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBbEJ6RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUd6QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBVTdDLFNBQUksR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBNEJuRCx1QkFBa0IsR0FBRyxDQUFDLEVBQWdCLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsT0FBTzthQUNWOztrQkFDSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU87O2tCQUNkLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTzs7a0JBQ2QsU0FBUyxHQUFHLElBQUksQ0FBQyxr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LENBQUM7Ozs7O0lBRVMsV0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQzs7O1lBOUhKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2FBQ2xDOzs7O1lBbkJnRCxVQUFVO1lBQWEsTUFBTTs7O3lCQXVCekUsS0FBSyxTQUFDLG1CQUFtQjt5QkFZekIsTUFBTTsyQkFHTixNQUFNOzs7O0lBakJQLGlEQUFxQjs7SUFjckIsZ0RBQ3lDOztJQUV6QyxrREFDdUQ7Ozs7O0lBVXZELDBDQUFvQzs7Ozs7SUFDcEMsbURBQW1EOzs7OztJQUNuRCxnREFBc0M7Ozs7O0lBQ3RDLDBDQUE2Qjs7SUEwQjdCLHdEQWFDOztJQUVELHVEQU9DOzs7OztJQTlDVyx5Q0FBdUI7Ozs7O0lBQUUsMENBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgTmdab25lLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGludGVydmFsLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBEcmFnU2Nyb2xsRGlyZWN0aW9uIHtcbiAgICBOT05FLFxuICAgIExFRlQsXG4gICAgVE9QLFxuICAgIFJJR0hULFxuICAgIEJPVFRPTSxcbiAgICBUT1BMRUZULFxuICAgIFRPUFJJR0hULFxuICAgIEJPVFRPTUxFRlQsXG4gICAgQk9UVE9NUklHSFRcbn1cblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hHcmlkRHJhZ1NlbGVjdF0nXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWREcmFnU2VsZWN0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIF9hY3RpdmVEcmFnOiBib29sZWFuO1xuXG4gICAgQElucHV0KCdpZ3hHcmlkRHJhZ1NlbGVjdCcpXG4gICAgZ2V0IGFjdGl2ZURyYWcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVEcmFnO1xuICAgIH1cblxuICAgIHNldCBhY3RpdmVEcmFnKHZhbDogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsICE9PSB0aGlzLl9hY3RpdmVEcmFnKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVEcmFnID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgb25EcmFnU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uRHJhZ1Njcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1Njcm9sbERpcmVjdGlvbj4oKTtcblxuICAgIGdldCBuYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IGNsaWVudFJlY3QoKTogQ2xpZW50UmVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGVuZCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcHJvdGVjdGVkIGxhc3REaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLk5PTkU7XG4gICAgcHJvdGVjdGVkIF9pbnRlcnZhbCQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBwcm90ZWN0ZWQgX3N1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMuX2ludGVydmFsJCA9IGludGVydmFsKDEwMCkucGlwZShcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmVuZCQpLFxuICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuYWN0aXZlRHJhZylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyb3ZlcicsIHRoaXMuc3RhcnREcmFnU2VsZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCB0aGlzLnN0b3BEcmFnU2VsZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm92ZXInLCB0aGlzLnN0YXJ0RHJhZ1NlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdGhpcy5zdG9wRHJhZ1NlbGVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuZW5kJC5jb21wbGV0ZSgpO1xuICAgIH1cblxuXG4gICAgc3RhcnREcmFnU2VsZWN0aW9uID0gKGV2OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZURyYWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4ID0gZXYuY2xpZW50WDtcbiAgICAgICAgY29uc3QgeSA9IGV2LmNsaWVudFk7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuX21lYXN1cmVEaW1lbnNpb25zKHgsIHkpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSB0aGlzLmxhc3REaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX3N1YiA9IHRoaXMuX2ludGVydmFsJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkRyYWdTY3JvbGwuZW1pdChkaXJlY3Rpb24pKTtcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHN0b3BEcmFnU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlRHJhZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25EcmFnU3RvcC5lbWl0KGZhbHNlKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLk5PTkU7XG4gICAgfVxuXG4gICAgX21lYXN1cmVEaW1lbnNpb25zKHg6IG51bWJlciwgeTogbnVtYmVyKTogRHJhZ1Njcm9sbERpcmVjdGlvbiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb246IERyYWdTY3JvbGxEaXJlY3Rpb247XG5cbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2xpZW50UmVjdDtcbiAgICAgICAgY29uc3QgUkFUSU8gPSAwLjE1O1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC50cnVuYyh4IC0gcmVjdC5sZWZ0KTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IE1hdGgudHJ1bmMoeSAtIHJlY3QudG9wKTtcblxuICAgICAgICBjb25zdCBsZWZ0ID0gb2Zmc2V0WCA8PSByZWN0LndpZHRoICogUkFUSU87XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gb2Zmc2V0WCA+PSByZWN0LndpZHRoICogKDEgLSBSQVRJTyk7XG4gICAgICAgIGNvbnN0IHRvcCA9IG9mZnNldFkgPD0gcmVjdC5oZWlnaHQgKiBSQVRJTztcbiAgICAgICAgY29uc3QgYm90dG9tID0gb2Zmc2V0WSA+PSByZWN0LmhlaWdodCAqICgxIC0gUkFUSU8pO1xuXG4gICAgICAgIGlmICh0b3AgJiYgbGVmdCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gRHJhZ1Njcm9sbERpcmVjdGlvbi5UT1BMRUZUO1xuICAgICAgICB9IGVsc2UgaWYgKHRvcCAmJiByaWdodCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gRHJhZ1Njcm9sbERpcmVjdGlvbi5UT1BSSUdIVDtcbiAgICAgICAgfSBlbHNlIGlmIChib3R0b20gJiYgbGVmdCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gRHJhZ1Njcm9sbERpcmVjdGlvbi5CT1RUT01MRUZUO1xuICAgICAgICB9IGVsc2UgaWYgKGJvdHRvbSAmJiByaWdodCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gRHJhZ1Njcm9sbERpcmVjdGlvbi5CT1RUT01SSUdIVDtcbiAgICAgICAgfSBlbHNlIGlmICh0b3ApIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IERyYWdTY3JvbGxEaXJlY3Rpb24uVE9QO1xuICAgICAgICB9IGVsc2UgaWYgKGJvdHRvbSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gRHJhZ1Njcm9sbERpcmVjdGlvbi5CT1RUT007XG4gICAgICAgIH0gZWxzZSBpZiAobGVmdCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gRHJhZ1Njcm9sbERpcmVjdGlvbi5MRUZUO1xuICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLlJJR0hUO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gRHJhZ1Njcm9sbERpcmVjdGlvbi5OT05FO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N1Yikge1xuICAgICAgICAgICAgdGhpcy5fc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
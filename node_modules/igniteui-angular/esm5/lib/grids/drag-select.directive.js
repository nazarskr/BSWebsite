/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, ElementRef, NgZone } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
/** @enum {number} */
var DragScrollDirection = {
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
var IgxGridDragSelectDirective = /** @class */ (function () {
    function IgxGridDragSelectDirective(ref, zone) {
        var _this = this;
        this.ref = ref;
        this.zone = zone;
        this.onDragStop = new EventEmitter();
        this.onDragScroll = new EventEmitter();
        this.end$ = new Subject();
        this.lastDirection = DragScrollDirection.NONE;
        this.startDragSelection = function (ev) {
            if (!_this.activeDrag) {
                return;
            }
            /** @type {?} */
            var x = ev.clientX;
            /** @type {?} */
            var y = ev.clientY;
            /** @type {?} */
            var direction = _this._measureDimensions(x, y);
            if (direction === _this.lastDirection) {
                return;
            }
            _this.unsubscribe();
            _this._sub = _this._interval$.subscribe(function () { return _this.onDragScroll.emit(direction); });
            _this.lastDirection = direction;
        };
        this.stopDragSelection = function () {
            if (!_this.activeDrag) {
                return;
            }
            _this.onDragStop.emit(false);
            _this.unsubscribe();
            _this.lastDirection = DragScrollDirection.NONE;
        };
        this._interval$ = interval(100).pipe(takeUntil(this.end$), filter(function () { return _this.activeDrag; }));
    }
    Object.defineProperty(IgxGridDragSelectDirective.prototype, "activeDrag", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeDrag;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this._activeDrag) {
                this.unsubscribe();
                this._activeDrag = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridDragSelectDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ref.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridDragSelectDirective.prototype, "clientRect", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxGridDragSelectDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.nativeElement.addEventListener('pointerover', _this.startDragSelection);
            _this.nativeElement.addEventListener('pointerleave', _this.stopDragSelection);
        });
    };
    /**
     * @return {?}
     */
    IgxGridDragSelectDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.nativeElement.removeEventListener('pointerover', _this.startDragSelection);
            _this.nativeElement.removeEventListener('pointerleave', _this.stopDragSelection);
        });
        this.unsubscribe();
        this.end$.complete();
    };
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    IgxGridDragSelectDirective.prototype._measureDimensions = /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var direction;
        /** @type {?} */
        var rect = this.clientRect;
        /** @type {?} */
        var RATIO = 0.15;
        /** @type {?} */
        var offsetX = Math.trunc(x - rect.left);
        /** @type {?} */
        var offsetY = Math.trunc(y - rect.top);
        /** @type {?} */
        var left = offsetX <= rect.width * RATIO;
        /** @type {?} */
        var right = offsetX >= rect.width * (1 - RATIO);
        /** @type {?} */
        var top = offsetY <= rect.height * RATIO;
        /** @type {?} */
        var bottom = offsetY >= rect.height * (1 - RATIO);
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
    };
    /**
     * @protected
     * @return {?}
     */
    IgxGridDragSelectDirective.prototype.unsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this._sub) {
            this._sub.unsubscribe();
        }
    };
    IgxGridDragSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxGridDragSelect]'
                },] }
    ];
    /** @nocollapse */
    IgxGridDragSelectDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IgxGridDragSelectDirective.propDecorators = {
        activeDrag: [{ type: Input, args: ['igxGridDragSelect',] }],
        onDragStop: [{ type: Output }],
        onDragScroll: [{ type: Output }]
    };
    return IgxGridDragSelectDirective;
}());
export { IgxGridDragSelectDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9kcmFnLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsUUFBUSxFQUE0QixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRy9DLE9BQUk7SUFDSixPQUFJO0lBQ0osTUFBRztJQUNILFFBQUs7SUFDTCxTQUFNO0lBQ04sVUFBTztJQUNQLFdBQVE7SUFDUixhQUFVO0lBQ1YsY0FBVzs7Ozs7Ozs7Ozs7O0FBSWY7SUFxQ0ksb0NBQW9CLEdBQWUsRUFBVSxJQUFZO1FBQXpELGlCQUtDO1FBTG1CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBbEJ6RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUd6QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBVTdDLFNBQUksR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBNEJuRCx1QkFBa0IsR0FBRyxVQUFDLEVBQWdCO1lBQ2xDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNsQixPQUFPO2FBQ1Y7O2dCQUNLLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTzs7Z0JBQ2QsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPOztnQkFDZCxTQUFTLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFB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LENBQUMsSUFBSSxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFFckIsQ0FBQzs7Ozs7SUFFUyxnREFBVzs7OztJQUFyQjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDOztnQkE5SEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2xDOzs7O2dCQW5CZ0QsVUFBVTtnQkFBYSxNQUFNOzs7NkJBdUJ6RSxLQUFLLFNBQUMsbUJBQW1COzZCQVl6QixNQUFNOytCQUdOLE1BQU07O0lBMEdYLGlDQUFDO0NBQUEsQUEvSEQsSUErSEM7U0E1SFksMEJBQTBCOzs7SUFDbkMsaURBQXFCOztJQWNyQixnREFDeUM7O0lBRXpDLGtEQUN1RDs7Ozs7SUFVdkQsMENBQW9DOzs7OztJQUNwQyxtREFBbUQ7Ozs7O0lBQ25ELGdEQUFzQzs7Ozs7SUFDdEMsMENBQTZCOztJQTBCN0Isd0RBYUM7O0lBRUQsdURBT0M7Ozs7O0lBOUNXLHlDQUF1Qjs7Ozs7SUFBRSwwQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBOZ1pvbmUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW50ZXJ2YWwsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIERyYWdTY3JvbGxEaXJlY3Rpb24ge1xuICAgIE5PTkUsXG4gICAgTEVGVCxcbiAgICBUT1AsXG4gICAgUklHSFQsXG4gICAgQk9UVE9NLFxuICAgIFRPUExFRlQsXG4gICAgVE9QUklHSFQsXG4gICAgQk9UVE9NTEVGVCxcbiAgICBCT1RUT01SSUdIVFxufVxuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEdyaWREcmFnU2VsZWN0XSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZERyYWdTZWxlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgX2FjdGl2ZURyYWc6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoJ2lneEdyaWREcmFnU2VsZWN0JylcbiAgICBnZXQgYWN0aXZlRHJhZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURyYWc7XG4gICAgfVxuXG4gICAgc2V0IGFjdGl2ZURyYWcodmFsOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuX2FjdGl2ZURyYWcpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZURyYWcgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBvbkRyYWdTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25EcmFnU2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU2Nyb2xsRGlyZWN0aW9uPigpO1xuXG4gICAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQgY2xpZW50UmVjdCgpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZW5kJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBwcm90ZWN0ZWQgbGFzdERpcmVjdGlvbiA9IERyYWdTY3JvbGxEaXJlY3Rpb24uTk9ORTtcbiAgICBwcm90ZWN0ZWQgX2ludGVydmFsJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHByb3RlY3RlZCBfc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwkID0gaW50ZXJ2YWwoMTAwKS5waXBlKFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZW5kJCksXG4gICAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5hY3RpdmVEcmFnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJvdmVyJywgdGhpcy5zdGFydERyYWdTZWxlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHRoaXMuc3RvcERyYWdTZWxlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyb3ZlcicsIHRoaXMuc3RhcnREcmFnU2VsZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCB0aGlzLnN0b3BEcmFnU2VsZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5lbmQkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG5cbiAgICBzdGFydERyYWdTZWxlY3Rpb24gPSAoZXY6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlRHJhZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBldi5jbGllbnRYO1xuICAgICAgICBjb25zdCB5ID0gZXYuY2xpZW50WTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5fbWVhc3VyZURpbWVuc2lvbnMoeCwgeSk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IHRoaXMubGFzdERpcmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fc3ViID0gdGhpcy5faW50ZXJ2YWwkLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uRHJhZ1Njcm9sbC5lbWl0KGRpcmVjdGlvbikpO1xuICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgc3RvcERyYWdTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVEcmFnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkRyYWdTdG9wLmVtaXQoZmFsc2UpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9IERyYWdTY3JvbGxEaXJlY3Rpb24uTk9ORTtcbiAgICB9XG5cbiAgICBfbWVhc3VyZURpbWVuc2lvbnMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBEcmFnU2Nyb2xsRGlyZWN0aW9uIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogRHJhZ1Njcm9sbERpcmVjdGlvbjtcblxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jbGllbnRSZWN0O1xuICAgICAgICBjb25zdCBSQVRJTyA9IDAuMTU7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBNYXRoLnRydW5jKHggLSByZWN0LmxlZnQpO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gTWF0aC50cnVuYyh5IC0gcmVjdC50b3ApO1xuXG4gICAgICAgIGNvbnN0IGxlZnQgPSBvZmZzZXRYIDw9IHJlY3Qud2lkdGggKiBSQVRJTztcbiAgICAgICAgY29uc3QgcmlnaHQgPSBvZmZzZXRYID49IHJlY3Qud2lkdGggKiAoMSAtIFJBVElPKTtcbiAgICAgICAgY29uc3QgdG9wID0gb2Zmc2V0WSA8PSByZWN0LmhlaWdodCAqIFJBVElPO1xuICAgICAgICBjb25zdCBib3R0b20gPSBvZmZzZXRZID49IHJlY3QuaGVpZ2h0ICogKDEgLSBSQVRJTyk7XG5cbiAgICAgICAgaWYgKHRvcCAmJiBsZWZ0KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLlRPUExFRlQ7XG4gICAgICAgIH0gZWxzZSBpZiAodG9wICYmIHJpZ2h0KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLlRPUFJJR0hUO1xuICAgICAgICB9IGVsc2UgaWYgKGJvdHRvbSAmJiBsZWZ0KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLkJPVFRPTUxFRlQ7XG4gICAgICAgIH0gZWxzZSBpZiAoYm90dG9tICYmIHJpZ2h0KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLkJPVFRPTVJJR0hUO1xuICAgICAgICB9IGVsc2UgaWYgKHRvcCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gRHJhZ1Njcm9sbERpcmVjdGlvbi5UT1A7XG4gICAgICAgIH0gZWxzZSBpZiAoYm90dG9tKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLkJPVFRPTTtcbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLkxFRlQ7XG4gICAgICAgIH0gZWxzZSBpZiAocmlnaHQpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IERyYWdTY3JvbGxEaXJlY3Rpb24uUklHSFQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBEcmFnU2Nyb2xsRGlyZWN0aW9uLk5PTkU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAodGhpcy5fc3ViKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
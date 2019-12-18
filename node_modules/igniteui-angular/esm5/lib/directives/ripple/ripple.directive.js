/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, NgModule, NgZone, Renderer2 } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
var IgxRippleDirective = /** @class */ (function () {
    function IgxRippleDirective(builder, elementRef, renderer, zone) {
        this.builder = builder;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        /**
         * Sets/gets the ripple target.
         * ```html
         * <div  #rippleContainer class="div-1" igxRipple [igxRippleTarget] = "'.div-1'"></div>
         * ```
         * ```typescript
         * \@ViewChild('rippleContainer', {read: IgxRippleDirective})
         * public ripple: IgxRippleDirective;
         * let rippleTarget = this.ripple.rippleTarget;
         * ```
         * Can set the ripple to activate on a child element inside the parent where igxRipple is defined.
         * ```html
         * <div #rippleContainer [igxRippleTarget] = "'#child"'>
         *  <button id="child">Click</button>
         * </div>
         * ```
         * \@memberof IgxRippleDirective
         */
        this.rippleTarget = '';
        /**
         * Sets/gets the ripple duration(in milliseconds).
         * Default value is `600`.
         * ```html
         * <button #rippleContainer igxRipple [igxRippleDuration] = "800"></button>
         * ```
         * ```typescript
         * \@ViewChild('rippleContainer', {read: IgxRippleDirective})
         * public ripple: IgxRippleDirective;
         * let rippleDuration = this.ripple.rippleDuration;
         * ```
         * \@memberof IgxRippleDirective
         */
        this.rippleDuration = 600;
        /**
         * Sets/gets whether the ripple is disabled.
         * Default value is `false`.
         * ```html
         * <button #rippleContainer igxRipple [igxRippleDisabled] = "true"></button>
         * ```
         * ```typescript
         * \@ViewChild('rippleContainer', {read: IgxRippleDirective})
         * public ripple: IgxRippleDirective;
         * let isRippleDisabled = this.ripple.rippleDisabled;
         * ```
         * \@memberof IgxRippleDirective
         */
        this.rippleDisabled = false;
        this.rippleElementClass = 'igx-ripple__inner';
        this.rippleHostClass = 'igx-ripple';
        this._centered = false;
        this.animationQueue = [];
    }
    Object.defineProperty(IgxRippleDirective.prototype, "centered", {
        /**
         * Enables/disables the ripple to be centered.
         * ```html
         * <button #rippleContainer igxRipple [igxRippleCentered] = "true"></button>
         * ```
         * @memberof IgxRippleDirective
         */
        set: /**
         * Enables/disables the ripple to be centered.
         * ```html
         * <button #rippleContainer igxRipple [igxRippleCentered] = "true"></button>
         * ```
         * \@memberof IgxRippleDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._centered = value || this.centered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxRippleDirective.prototype, "nativeElement", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxRippleDirective.prototype.onMouseDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.zone.runOutsideAngular(function () { return _this._ripple(event); });
    };
    /**
     * @private
     * @param {?} rippleElement
     * @param {?} styleParams
     * @return {?}
     */
    IgxRippleDirective.prototype.setStyles = /**
     * @private
     * @param {?} rippleElement
     * @param {?} styleParams
     * @return {?}
     */
    function (rippleElement, styleParams) {
        this.renderer.addClass(rippleElement, this.rippleElementClass);
        this.renderer.setStyle(rippleElement, 'width', styleParams.radius + "px");
        this.renderer.setStyle(rippleElement, 'height', styleParams.radius + "px");
        this.renderer.setStyle(rippleElement, 'top', styleParams.top + "px");
        this.renderer.setStyle(rippleElement, 'left', styleParams.left + "px");
        if (this.rippleColor) {
            this.renderer.setStyle(rippleElement, 'background', this.rippleColor);
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxRippleDirective.prototype._ripple = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.rippleDisabled) {
            return;
        }
        /** @type {?} */
        var target = (this.rippleTarget ? this.nativeElement.querySelector(this.rippleTarget) || this.nativeElement : this.nativeElement);
        /** @type {?} */
        var rectBounds = target.getBoundingClientRect();
        /** @type {?} */
        var radius = Math.max(rectBounds.width, rectBounds.height);
        /** @type {?} */
        var left = event.clientX - rectBounds.left - radius / 2;
        /** @type {?} */
        var top = event.clientY - rectBounds.top - radius / 2;
        if (this._centered) {
            left = top = 0;
        }
        /** @type {?} */
        var dimensions = {
            radius: radius,
            top: top,
            left: left
        };
        /** @type {?} */
        var rippleElement = this.renderer.createElement('span');
        this.setStyles(rippleElement, dimensions);
        this.renderer.addClass(target, this.rippleHostClass);
        this.renderer.appendChild(target, rippleElement);
        /** @type {?} */
        var animation = this.builder.build([
            style({ opacity: 0.5, transform: 'scale(.3)' }),
            animate(this.rippleDuration, style({ opacity: 0, transform: 'scale(2)' }))
        ]).create(rippleElement);
        this.animationQueue.push(animation);
        animation.onDone(function () {
            _this.animationQueue.splice(_this.animationQueue.indexOf(animation), 1);
            target.removeChild(rippleElement);
            if (_this.animationQueue.length < 1) {
                _this.renderer.removeClass(target, _this.rippleHostClass);
            }
        });
        animation.play();
    };
    IgxRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxRipple]'
                },] }
    ];
    /** @nocollapse */
    IgxRippleDirective.ctorParameters = function () { return [
        { type: AnimationBuilder },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    IgxRippleDirective.propDecorators = {
        rippleTarget: [{ type: Input, args: ['igxRippleTarget',] }],
        rippleColor: [{ type: Input, args: ['igxRipple',] }],
        rippleDuration: [{ type: Input, args: ['igxRippleDuration',] }],
        centered: [{ type: Input, args: ['igxRippleCentered',] }],
        rippleDisabled: [{ type: Input, args: ['igxRippleDisabled',] }],
        onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
    };
    return IgxRippleDirective;
}());
export { IgxRippleDirective };
if (false) {
    /**
     * Sets/gets the ripple target.
     * ```html
     * <div  #rippleContainer class="div-1" igxRipple [igxRippleTarget] = "'.div-1'"></div>
     * ```
     * ```typescript
     * \@ViewChild('rippleContainer', {read: IgxRippleDirective})
     * public ripple: IgxRippleDirective;
     * let rippleTarget = this.ripple.rippleTarget;
     * ```
     * Can set the ripple to activate on a child element inside the parent where igxRipple is defined.
     * ```html
     * <div #rippleContainer [igxRippleTarget] = "'#child"'>
     *  <button id="child">Click</button>
     * </div>
     * ```
     * \@memberof IgxRippleDirective
     * @type {?}
     */
    IgxRippleDirective.prototype.rippleTarget;
    /**
     * Sets/gets the ripple color.
     * ```html
     * <button #rippleContainer [igxRipple] = "'red'" ></button>
     * ```
     * ```typescript
     * \@ViewChild('rippleContainer', {read: IgxRippleDirective})
     * public ripple: IgxRippleDirective;
     * let rippleColor = this.ripple.rippleColor;
     * ```
     * \@memberof IgxRippleDirective
     * @type {?}
     */
    IgxRippleDirective.prototype.rippleColor;
    /**
     * Sets/gets the ripple duration(in milliseconds).
     * Default value is `600`.
     * ```html
     * <button #rippleContainer igxRipple [igxRippleDuration] = "800"></button>
     * ```
     * ```typescript
     * \@ViewChild('rippleContainer', {read: IgxRippleDirective})
     * public ripple: IgxRippleDirective;
     * let rippleDuration = this.ripple.rippleDuration;
     * ```
     * \@memberof IgxRippleDirective
     * @type {?}
     */
    IgxRippleDirective.prototype.rippleDuration;
    /**
     * Sets/gets whether the ripple is disabled.
     * Default value is `false`.
     * ```html
     * <button #rippleContainer igxRipple [igxRippleDisabled] = "true"></button>
     * ```
     * ```typescript
     * \@ViewChild('rippleContainer', {read: IgxRippleDirective})
     * public ripple: IgxRippleDirective;
     * let isRippleDisabled = this.ripple.rippleDisabled;
     * ```
     * \@memberof IgxRippleDirective
     * @type {?}
     */
    IgxRippleDirective.prototype.rippleDisabled;
    /**
     * @type {?}
     * @private
     */
    IgxRippleDirective.prototype.rippleElementClass;
    /**
     * @type {?}
     * @private
     */
    IgxRippleDirective.prototype.rippleHostClass;
    /**
     * @type {?}
     * @private
     */
    IgxRippleDirective.prototype._centered;
    /**
     * @type {?}
     * @private
     */
    IgxRippleDirective.prototype.animationQueue;
    /**
     * @type {?}
     * @protected
     */
    IgxRippleDirective.prototype.builder;
    /**
     * @type {?}
     * @protected
     */
    IgxRippleDirective.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxRippleDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    IgxRippleDirective.prototype.zone;
}
/**
 * @hidden
 */
var IgxRippleModule = /** @class */ (function () {
    function IgxRippleModule() {
    }
    IgxRippleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxRippleDirective],
                    exports: [IgxRippleDirective]
                },] }
    ];
    return IgxRippleModule;
}());
export { IgxRippleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZFO0lBd0ZJLDRCQUNjLE9BQXlCLEVBQ3pCLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ3JCLElBQVk7UUFIVixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXJFakIsaUJBQVksR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7O1FBNkJsQixtQkFBYyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUF5QnJCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBTXRCLHVCQUFrQixHQUFHLG1CQUFtQixDQUFDO1FBQ3pDLG9CQUFlLEdBQUcsWUFBWSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFNQSxDQUFDO0lBaEM3QixzQkFBZ0Msd0NBQVE7UUFQeEM7Ozs7OztXQU1HOzs7Ozs7Ozs7O1FBQ0gsVUFBeUMsS0FBYztZQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBaUJELHNCQUFjLDZDQUFhOzs7OztRQUEz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QiwwQ0FDeUI7Ozs7Ozs7Ozs7Ozs7O0lBYXpCLHlDQUMyQjs7Ozs7Ozs7Ozs7Ozs7O0lBYzNCLDRDQUM0Qjs7Ozs7Ozs7Ozs7Ozs7O0lBd0I1Qiw0Q0FDOEI7Ozs7O0lBTTlCLGdEQUFpRDs7Ozs7SUFDakQsNkNBQXVDOzs7OztJQUN2Qyx1Q0FBMEI7Ozs7O0lBQzFCLDRDQUE0Qjs7Ozs7SUFHeEIscUNBQW1DOzs7OztJQUNuQyx3Q0FBZ0M7Ozs7O0lBQ2hDLHNDQUE2Qjs7Ozs7SUFDN0Isa0NBQW9COzs7OztBQXVFNUI7SUFBQTtJQUkrQixDQUFDOztnQkFKL0IsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEM7O0lBQzhCLHNCQUFDO0NBQUEsQUFKaEMsSUFJZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgTmdNb2R1bGUsIE5nWm9uZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hSaXBwbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hSaXBwbGVEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgcmlwcGxlIHRhcmdldC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiAgI3JpcHBsZUNvbnRhaW5lciBjbGFzcz1cImRpdi0xXCIgaWd4UmlwcGxlIFtpZ3hSaXBwbGVUYXJnZXRdID0gXCInLmRpdi0xJ1wiPjwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInLCB7cmVhZDogSWd4UmlwcGxlRGlyZWN0aXZlfSlcbiAgICAgKiBwdWJsaWMgcmlwcGxlOiBJZ3hSaXBwbGVEaXJlY3RpdmU7XG4gICAgICogbGV0IHJpcHBsZVRhcmdldCA9IHRoaXMucmlwcGxlLnJpcHBsZVRhcmdldDtcbiAgICAgKiBgYGBcbiAgICAgKiBDYW4gc2V0IHRoZSByaXBwbGUgdG8gYWN0aXZhdGUgb24gYSBjaGlsZCBlbGVtZW50IGluc2lkZSB0aGUgcGFyZW50IHdoZXJlIGlneFJpcHBsZSBpcyBkZWZpbmVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2ICNyaXBwbGVDb250YWluZXIgW2lneFJpcHBsZVRhcmdldF0gPSBcIicjY2hpbGRcIic+XG4gICAgICogIDxidXR0b24gaWQ9XCJjaGlsZFwiPkNsaWNrPC9idXR0b24+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJpcHBsZURpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4UmlwcGxlVGFyZ2V0JylcbiAgICBwdWJsaWMgcmlwcGxlVGFyZ2V0ID0gJyc7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSByaXBwbGUgY29sb3IuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxidXR0b24gI3JpcHBsZUNvbnRhaW5lciBbaWd4UmlwcGxlXSA9IFwiJ3JlZCdcIiA+PC9idXR0b24+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicsIHtyZWFkOiBJZ3hSaXBwbGVEaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyByaXBwbGU6IElneFJpcHBsZURpcmVjdGl2ZTtcbiAgICAgKiBsZXQgcmlwcGxlQ29sb3IgPSB0aGlzLnJpcHBsZS5yaXBwbGVDb2xvcjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmlwcGxlRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hSaXBwbGUnKVxuICAgIHB1YmxpYyByaXBwbGVDb2xvcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgcmlwcGxlIGR1cmF0aW9uKGluIG1pbGxpc2Vjb25kcykuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgNjAwYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGJ1dHRvbiAjcmlwcGxlQ29udGFpbmVyIGlneFJpcHBsZSBbaWd4UmlwcGxlRHVyYXRpb25dID0gXCI4MDBcIj48L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJywge3JlYWQ6IElneFJpcHBsZURpcmVjdGl2ZX0pXG4gICAgICogcHVibGljIHJpcHBsZTogSWd4UmlwcGxlRGlyZWN0aXZlO1xuICAgICAqIGxldCByaXBwbGVEdXJhdGlvbiA9IHRoaXMucmlwcGxlLnJpcHBsZUR1cmF0aW9uO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSaXBwbGVEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneFJpcHBsZUR1cmF0aW9uJylcbiAgICBwdWJsaWMgcmlwcGxlRHVyYXRpb24gPSA2MDA7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9kaXNhYmxlcyB0aGUgcmlwcGxlIHRvIGJlIGNlbnRlcmVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8YnV0dG9uICNyaXBwbGVDb250YWluZXIgaWd4UmlwcGxlIFtpZ3hSaXBwbGVDZW50ZXJlZF0gPSBcInRydWVcIj48L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmlwcGxlRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hSaXBwbGVDZW50ZXJlZCcpIHNldCBjZW50ZXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9jZW50ZXJlZCA9IHZhbHVlIHx8IHRoaXMuY2VudGVyZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSByaXBwbGUgaXMgZGlzYWJsZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8YnV0dG9uICNyaXBwbGVDb250YWluZXIgaWd4UmlwcGxlIFtpZ3hSaXBwbGVEaXNhYmxlZF0gPSBcInRydWVcIj48L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJywge3JlYWQ6IElneFJpcHBsZURpcmVjdGl2ZX0pXG4gICAgICogcHVibGljIHJpcHBsZTogSWd4UmlwcGxlRGlyZWN0aXZlO1xuICAgICAqIGxldCBpc1JpcHBsZURpc2FibGVkID0gdGhpcy5yaXBwbGUucmlwcGxlRGlzYWJsZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJpcHBsZURpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4UmlwcGxlRGlzYWJsZWQnKVxuICAgIHB1YmxpYyByaXBwbGVEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIGdldCBuYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmlwcGxlRWxlbWVudENsYXNzID0gJ2lneC1yaXBwbGVfX2lubmVyJztcbiAgICBwcml2YXRlIHJpcHBsZUhvc3RDbGFzcyA9ICdpZ3gtcmlwcGxlJztcbiAgICBwcml2YXRlIF9jZW50ZXJlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgYW5pbWF0aW9uUXVldWUgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcbiAgICAgICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX3JpcHBsZShldmVudCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3R5bGVzKHJpcHBsZUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZVBhcmFtczogYW55KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocmlwcGxlRWxlbWVudCwgdGhpcy5yaXBwbGVFbGVtZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZUVsZW1lbnQsICd3aWR0aCcsIGAke3N0eWxlUGFyYW1zLnJhZGl1c31weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZUVsZW1lbnQsICdoZWlnaHQnLCBgJHtzdHlsZVBhcmFtcy5yYWRpdXN9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShyaXBwbGVFbGVtZW50LCAndG9wJywgYCR7c3R5bGVQYXJhbXMudG9wfXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmlwcGxlRWxlbWVudCwgJ2xlZnQnLCBgJHtzdHlsZVBhcmFtcy5sZWZ0fXB4YCk7XG4gICAgICAgIGlmICh0aGlzLnJpcHBsZUNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJpcHBsZUVsZW1lbnQsICdiYWNrZ3JvdW5kJywgdGhpcy5yaXBwbGVDb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9yaXBwbGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucmlwcGxlRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLnJpcHBsZVRhcmdldCA/IHRoaXMubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucmlwcGxlVGFyZ2V0KSB8fCB0aGlzLm5hdGl2ZUVsZW1lbnQgOiB0aGlzLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IHJlY3RCb3VuZHMgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHJlY3RCb3VuZHMud2lkdGgsIHJlY3RCb3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IGxlZnQgPSBldmVudC5jbGllbnRYIC0gcmVjdEJvdW5kcy5sZWZ0IC0gcmFkaXVzIC8gMjtcbiAgICAgICAgbGV0IHRvcCA9IGV2ZW50LmNsaWVudFkgLSByZWN0Qm91bmRzLnRvcCAtIHJhZGl1cyAvIDI7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NlbnRlcmVkKSB7XG4gICAgICAgICAgICBsZWZ0ID0gdG9wID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmlwcGxlRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIHRoaXMuc2V0U3R5bGVzKHJpcHBsZUVsZW1lbnQsIGRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRhcmdldCwgdGhpcy5yaXBwbGVIb3N0Q2xhc3MpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRhcmdldCwgcmlwcGxlRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5idWlsZGVyLmJ1aWxkKFtcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMC41LCB0cmFuc2Zvcm06ICdzY2FsZSguMyknIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSh0aGlzLnJpcHBsZUR1cmF0aW9uLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDIpJyB9KSlcbiAgICAgICAgXSkuY3JlYXRlKHJpcHBsZUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUXVldWUucHVzaChhbmltYXRpb24pO1xuXG4gICAgICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25RdWV1ZS5zcGxpY2UodGhpcy5hbmltYXRpb25RdWV1ZS5pbmRleE9mKGFuaW1hdGlvbiksIDEpO1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHJpcHBsZUVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uUXVldWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGFyZ2V0LCB0aGlzLnJpcHBsZUhvc3RDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XG5cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFJpcHBsZURpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneFJpcHBsZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4UmlwcGxlTW9kdWxlIHsgfVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
/** @type {?} */
let NEXT_ID = 0;
export class IgxLabelDirective {
    constructor() {
        this.defaultClass = true;
        /**
         * @hidden
         */
        this.id = `igx-label-${NEXT_ID++}`;
    }
}
IgxLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxLabel]'
            },] }
];
IgxLabelDirective.propDecorators = {
    defaultClass: [{ type: HostBinding, args: ['class.igx-input-group__label',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }]
};
if (false) {
    /** @type {?} */
    IgxLabelDirective.prototype.defaultClass;
    /**
     * @hidden
     * @type {?}
     */
    IgxLabelDirective.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xhYmVsL2xhYmVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUUxRCxPQUFPLEdBQUcsQ0FBQztBQUtmLE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFLVyxpQkFBWSxHQUFHLElBQUksQ0FBQzs7OztRQU9wQixPQUFFLEdBQUcsYUFBYSxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQ3pDLENBQUM7OztZQWJBLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTthQUN6Qjs7OzJCQUVJLFdBQVcsU0FBQyw4QkFBOEI7aUJBTTFDLFdBQVcsU0FBQyxTQUFTLGNBQ3JCLEtBQUs7Ozs7SUFQTix5Q0FDMkI7Ozs7O0lBSzNCLCtCQUVxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4TGFiZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hMYWJlbERpcmVjdGl2ZSB7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtaW5wdXQtZ3JvdXBfX2xhYmVsJylcbiAgICBwdWJsaWMgZGVmYXVsdENsYXNzID0gdHJ1ZTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1sYWJlbC0ke05FWFRfSUQrK31gO1xufVxuIl19
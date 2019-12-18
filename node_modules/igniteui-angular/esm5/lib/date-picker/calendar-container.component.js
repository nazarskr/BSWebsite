/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { IgxCalendarComponent } from '../calendar';
import { InteractionMode } from '../core/enums';
import { IgxDatePickerActionsDirective } from './date-picker.directives';
/**
 * @hidden
 */
var IgxCalendarContainerComponent = /** @class */ (function () {
    function IgxCalendarContainerComponent() {
        this.mode = InteractionMode.Dialog;
        this.vertical = false;
        this.onClose = new EventEmitter();
        this.onTodaySelection = new EventEmitter();
        this.styleClass = 'igx-date-picker';
    }
    Object.defineProperty(IgxCalendarContainerComponent.prototype, "dropdownCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === InteractionMode.DropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarContainerComponent.prototype, "verticalCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.vertical && this.mode === InteractionMode.Dialog;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    IgxCalendarContainerComponent.prototype.onEscape = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.onClose.emit();
    };
    Object.defineProperty(IgxCalendarContainerComponent.prototype, "isReadonly", {
        /**
         * Returns whether the date-picker is in readonly dialog mode.
         *
         * @hidden
        */
        get: /**
         * Returns whether the date-picker is in readonly dialog mode.
         *
         * @hidden
         * @return {?}
         */
        function () {
            return this.mode === InteractionMode.Dialog;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Emits close event for the calendar.
     */
    /**
     * Emits close event for the calendar.
     * @return {?}
     */
    IgxCalendarContainerComponent.prototype.closeCalendar = /**
     * Emits close event for the calendar.
     * @return {?}
     */
    function () {
        this.onClose.emit();
    };
    /**
    * Emits today selection event for the calendar.
    */
    /**
     * Emits today selection event for the calendar.
     * @return {?}
     */
    IgxCalendarContainerComponent.prototype.triggerTodaySelection = /**
     * Emits today selection event for the calendar.
     * @return {?}
     */
    function () {
        this.onTodaySelection.emit();
    };
    IgxCalendarContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-calendar-container',
                    template: "<ng-template #defaultDatePickerActions>\n    <div *ngIf=\"cancelButtonLabel || todayButtonLabel\" class=\"igx-date-picker__buttons\">\n        <button #closeButton *ngIf=\"cancelButtonLabel\" igxButton=\"flat\" igxRipple (click)=\"closeCalendar()\">\n            {{ cancelButtonLabel }}\n        </button>\n        <button #todayButton *ngIf=\"todayButtonLabel\" igxButton=\"flat\" igxRipple (click)=\"triggerTodaySelection()\">\n            {{ todayButtonLabel }}\n        </button>\n    </div>\n</ng-template>\n<igx-calendar #calendar></igx-calendar>\n<ng-container *ngTemplateOutlet=\"datePickerActions ? datePickerActions.template : defaultDatePickerActions\"></ng-container>\n",
                    styles: [':host {display: block;}']
                }] }
    ];
    IgxCalendarContainerComponent.propDecorators = {
        calendar: [{ type: ViewChild, args: ['calendar', { static: true },] }],
        mode: [{ type: Input }],
        vertical: [{ type: Input }],
        cancelButtonLabel: [{ type: Input }],
        todayButtonLabel: [{ type: Input }],
        datePickerActions: [{ type: Input }],
        onClose: [{ type: Output }],
        onTodaySelection: [{ type: Output }],
        styleClass: [{ type: HostBinding, args: ['class.igx-date-picker',] }],
        dropdownCSS: [{ type: HostBinding, args: ['class.igx-date-picker--dropdown',] }],
        verticalCSS: [{ type: HostBinding, args: ['class.igx-date-picker--vertical',] }],
        onEscape: [{ type: HostListener, args: ['keydown.esc', ['$event'],] }, { type: HostListener, args: ['keydown.alt.arrowup', ['$event'],] }]
    };
    return IgxCalendarContainerComponent;
}());
export { IgxCalendarContainerComponent };
if (false) {
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.calendar;
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.mode;
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.vertical;
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.cancelButtonLabel;
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.todayButtonLabel;
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.datePickerActions;
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.onClose;
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.onTodaySelection;
    /** @type {?} */
    IgxCalendarContainerComponent.prototype.styleClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGF0ZS1waWNrZXIvY2FsZW5kYXItY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUt6RTtJQUFBO1FBVVcsU0FBSSxHQUFvQixlQUFlLENBQUMsTUFBTSxDQUFDO1FBRy9DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFZakIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0IscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0QyxlQUFVLEdBQUcsaUJBQWlCLENBQUM7SUF5QzFDLENBQUM7SUF2Q0csc0JBQ0ksc0RBQVc7Ozs7UUFEZjtZQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksc0RBQVc7Ozs7UUFEZjtZQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7Ozs7O0lBSU0sZ0RBQVE7Ozs7SUFGZixVQUVnQixLQUFLO1FBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFPRCxzQkFBVyxxREFBVTtRQUxyQjs7OztVQUlFOzs7Ozs7O1FBQ0Y7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7OztJQUNJLHFEQUFhOzs7O0lBQXBCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O01BRUU7Ozs7O0lBQ0ssNkRBQXFCOzs7O0lBQTVCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQXZFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtvQkFFbEMscXJCQUFnRDs2QkFEdkMseUJBQXlCO2lCQUVyQzs7OzJCQUVJLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUd0QyxLQUFLOzJCQUdMLEtBQUs7b0NBR0wsS0FBSzttQ0FHTCxLQUFLO29DQUdMLEtBQUs7MEJBR0wsTUFBTTttQ0FHTixNQUFNOzZCQUdOLFdBQVcsU0FBQyx1QkFBdUI7OEJBR25DLFdBQVcsU0FBQyxpQ0FBaUM7OEJBSzdDLFdBQVcsU0FBQyxpQ0FBaUM7MkJBSzdDLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDdEMsWUFBWSxTQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQTRCbkQsb0NBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQW5FWSw2QkFBNkI7OztJQUN0QyxpREFDc0M7O0lBRXRDLDZDQUNzRDs7SUFFdEQsaURBQ3dCOztJQUV4QiwwREFDaUM7O0lBRWpDLHlEQUNnQzs7SUFFaEMsMERBQ3dEOztJQUV4RCxnREFDb0M7O0lBRXBDLHlEQUM2Qzs7SUFFN0MsbURBQ3NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1vZGUgfSBmcm9tICcuLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IElneERhdGVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5kaXJlY3RpdmVzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWNhbGVuZGFyLWNvbnRhaW5lcicsXG4gICAgc3R5bGVzOiBbJzpob3N0IHtkaXNwbGF5OiBibG9jazt9J10sXG4gICAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneENhbGVuZGFyQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCdjYWxlbmRhcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGNhbGVuZGFyOiBJZ3hDYWxlbmRhckNvbXBvbmVudDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1vZGU6IEludGVyYWN0aW9uTW9kZSA9IEludGVyYWN0aW9uTW9kZS5EaWFsb2c7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuY2VsQnV0dG9uTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRvZGF5QnV0dG9uTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRhdGVQaWNrZXJBY3Rpb25zOiBJZ3hEYXRlUGlja2VyQWN0aW9uc0RpcmVjdGl2ZTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVG9kYXlTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kYXRlLXBpY2tlcicpXG4gICAgcHVibGljIHN0eWxlQ2xhc3MgPSAnaWd4LWRhdGUtcGlja2VyJztcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWRhdGUtcGlja2VyLS1kcm9wZG93bicpXG4gICAgZ2V0IGRyb3Bkb3duQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlID09PSBJbnRlcmFjdGlvbk1vZGUuRHJvcERvd247XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZGF0ZS1waWNrZXItLXZlcnRpY2FsJylcbiAgICBnZXQgdmVydGljYWxDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZlcnRpY2FsICYmIHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZztcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hbHQuYXJyb3d1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRXNjYXBlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBkYXRlLXBpY2tlciBpcyBpbiByZWFkb25seSBkaWFsb2cgbW9kZS5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNSZWFkb25seSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBjbG9zZSBldmVudCBmb3IgdGhlIGNhbGVuZGFyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZUNhbGVuZGFyKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogRW1pdHMgdG9kYXkgc2VsZWN0aW9uIGV2ZW50IGZvciB0aGUgY2FsZW5kYXIuXG4gICAgKi9cbiAgICBwdWJsaWMgdHJpZ2dlclRvZGF5U2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLm9uVG9kYXlTZWxlY3Rpb24uZW1pdCgpO1xuICAgIH1cbn1cbiJdfQ==
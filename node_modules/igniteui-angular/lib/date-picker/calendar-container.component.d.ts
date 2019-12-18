import { EventEmitter } from '@angular/core';
import { IgxCalendarComponent } from '../calendar';
import { InteractionMode } from '../core/enums';
import { IgxDatePickerActionsDirective } from './date-picker.directives';
/**
 * @hidden
 */
export declare class IgxCalendarContainerComponent {
    calendar: IgxCalendarComponent;
    mode: InteractionMode;
    vertical: boolean;
    cancelButtonLabel: string;
    todayButtonLabel: string;
    datePickerActions: IgxDatePickerActionsDirective;
    onClose: EventEmitter<{}>;
    onTodaySelection: EventEmitter<{}>;
    styleClass: string;
    readonly dropdownCSS: boolean;
    readonly verticalCSS: boolean;
    onEscape(event: any): void;
    /**
     * Returns whether the date-picker is in readonly dialog mode.
     *
     * @hidden
    */
    readonly isReadonly: boolean;
    /**
     * Emits close event for the calendar.
     */
    closeCalendar(): void;
    /**
    * Emits today selection event for the calendar.
    */
    triggerTodaySelection(): void;
}

import { IgxMonthsViewComponent } from '../months-view/months-view.component';
import { IgxMonthPickerBase } from '../month-picker-base';
import { IgxYearsViewComponent } from '../years-view/years-view.component';
import { IgxDaysViewComponent } from '../days-view/days-view.component';
export declare class IgxMonthPickerComponent extends IgxMonthPickerBase {
    /**
     * Sets/gets the `id` of the month picker.
     * If not set, the `id` will have value `"igx-month-picker-0"`.
     */
    id: string;
    /**
     * The default css class applied to the component.
     *
     * @hidden
     */
    styleClass: boolean;
    /**
     * @hidden
     */
    monthsView: IgxMonthsViewComponent;
    /**
     * @hidden
     */
    dacadeView: IgxYearsViewComponent;
    /**
     * @hidden
     */
    daysView: IgxDaysViewComponent;
    /**
     * @hidden
     */
    yearAction: string;
    /**
     * @hidden
     */
    animationDone(): void;
    /**
     * @hidden
     */
    activeViewDecadeKB(event: any): void;
    /**
     * @hidden
     */
    activeViewDecade(): void;
    /**
     * @hidden
     */
    nextYear(): void;
    /**
     * @hidden
     */
    nextYearKB(event: any): void;
    /**
     * @hidden
     */
    previousYear(): void;
    /**
     * @hidden
     */
    previousYearKB(event: any): void;
    /**
     * @hidden
     */
    selectYear(event: Date): void;
    /**
     * @hidden
     */
    selectMonth(event: Date): void;
    /**
     * Selects a date.
     *```typescript
     * this.monPicker.selectDate(new Date(`2018-06-12`));
     *```
     */
    selectDate(value: Date): Date;
    /**
     * @hidden
     */
    writeValue(value: Date): void;
    /**
     * @hidden
     */
    onKeydownPageUp(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownPageDown(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownHome(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownEnd(event: KeyboardEvent): void;
}

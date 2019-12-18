import { QueryList, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IgxRadioComponent, RadioLabelPosition, IChangeRadioEventArgs } from '../../radio/radio.component';
/**
 * **Ignite UI for Angular Radio Group** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radio_button.html)
 *
 * The Ignite UI Radio Group allows the user to select a single option from an available set of options that are listed side by side.
 *
 * Example:
 * ```html
 * <igx-radio-group name="radioGroup">
 *   <igx-radio *ngFor="let item of ['Foo', 'Bar', 'Baz']" value="{{item}}">
 *      {{item}}
 *   </igx-radio>
 * </igx-radio-group>
 * ```
 */
export declare class IgxRadioGroupDirective implements AfterContentInit, ControlValueAccessor, OnDestroy {
    /**
     * Returns reference to the child radio buttons.
     * ```typescript
     * let radioButtons =  this.radioGroup.radioButtons;
     * ```
     * @memberof IgxRadioGroupDirective
     */
    radioButtons: QueryList<IgxRadioComponent>;
    /**
     * Sets/gets the `value` attribute.
     * ```html
     * <igx-radio-group [value] = "'radioButtonValue'"></igx-radio-group>
     * ```
     * ```typescript
     * let value =  this.radioGroup.value;
     * ```
     * @memberof IgxRadioGroupDirective
     */
    value: any;
    /**
     * Sets/gets the `name` attribute of the radio group component. All child radio buttons inherits this name.
     * ```html
     * <igx-radio-group name = "Radio1"></igx-radio-group>
     *  ```
     * ```typescript
     * let name =  this.radioGroup.name;
     * ```
     * @memberof IgxRadioGroupDirective
     */
    name: string;
    /**
     * Sets/gets whether the radio group is required.
     * If not set, `required` will have value `false`.
     * ```html
     * <igx-radio-group [required] = "true"></igx-radio-group>
     * ```
     * ```typescript
     * let isRequired =  this.radioGroup.required;
     * ```
     * @memberof IgxRadioGroupDirective
     */
    required: boolean;
    /**
     * An @Input property that allows you to disable the radio group. By default it's false.
     * ```html
     * <igx-radio-group [disabled]="true"></igx-radio-group>
     * ```
     * @memberof IgxRadioGroupDirective
     */
    disabled: boolean;
    /**
     * Sets/gets the position of the `label` in the child radio buttons.
     * If not set, `labelPosition` will have value `"after"`.
     * ```html
     * <igx-radio-group labelPosition = "before"></igx-radio-group>
     * ```
     * ```typescript
     * let labelPosition =  this.radioGroup.labelPosition;
     * ```
     * @memberof IgxRadioGroupDirective
     */
    labelPosition: RadioLabelPosition | string;
    /**
     * Sets/gets the selected child radio button.
     * ```typescript
     * let selectedButton = this.radioGroup.selected;
     * this.radioGroup.selected = selectedButton;
     * ```
     * @memberof IgxRadioGroupDirective
     */
    selected: IgxRadioComponent | null;
    /**
     * An event that is emitted after the radio group `value` is changed.
     * Provides references to the selected `IgxRadioComponent` and the `value` property as event arguments.
     * @memberof IgxRadioGroupDirective
     */
    readonly change: EventEmitter<IChangeRadioEventArgs>;
    /**
     *@hidden
     */
    cssClass: string;
    /**
     *@hidden
     */
    private _onChangeCallback;
    /**
     *@hidden
     */
    private _name;
    /**
     *@hidden
     */
    private _value;
    /**
     *@hidden
     */
    private _selected;
    /**
     *@hidden
     */
    private _isInitialized;
    /**
     *@hidden
     */
    private _labelPosition;
    /**
     *@hidden
     */
    private _disabled;
    /**
     *@hidden
     */
    private _required;
    /**
     *@hidden
     */
    private destroy$;
    ngAfterContentInit(): void;
    /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true` and selected property will contain the selected `IgxRadioComponent`.
     * ```typescript
     * this.radioGroup.writeValue('radioButtonValue');
     * ```
     */
    writeValue(value: any): void;
    /**
     *@hidden
     */
    registerOnChange(fn: (_: any) => void): void;
    /**
     *@hidden
     */
    registerOnTouched(fn: () => void): void;
    /**
     *@hidden
     */
    ngOnDestroy(): void;
    /**
     *@hidden
     */
    private _initRadioButtons;
    /**
     *@hidden
     */
    private _selectedRadioButtonChanged;
    /**
     *@hidden
     */
    private _setRadioButtonNames;
    /**
     *@hidden
     */
    private _selectRadioButton;
    /**
     *@hidden
     */
    private _setRadioButtonLabelPosition;
    /**
     *@hidden
     */
    private _disableRadioButtons;
    /**
     *@hidden
     */
    private _setRadioButtonsRequired;
}
/**
 * @hidden
 */
export declare class IgxRadioModule {
}

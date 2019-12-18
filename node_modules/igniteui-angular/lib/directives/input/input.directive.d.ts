import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { IgxInputGroupBase } from '../../input-group/input-group.common';
export declare enum IgxInputState {
    INITIAL = 0,
    VALID = 1,
    INVALID = 2
}
export declare class IgxInputDirective implements AfterViewInit, OnDestroy {
    inputGroup: IgxInputGroupBase;
    protected ngModel: NgModel;
    protected formControl: FormControlName;
    protected element: ElementRef;
    protected cdr: ChangeDetectorRef;
    private _valid;
    private _statusChanges$;
    constructor(inputGroup: IgxInputGroupBase, ngModel: NgModel, formControl: FormControlName, element: ElementRef, cdr: ChangeDetectorRef);
    private readonly ngControl;
    /**
     * Sets the `value` property.
     * ```html
     * <input-group>
     *  <input igxInput #igxInput [value]="'IgxInput Value'">
     * </input-group>
     * ```
     * @memberof IgxInputDirective
     */
    /**
    * Gets the `value` propery.
    * ```typescript
    * @ViewChild('igxInput', {read: IgxInputDirective})
    *  public igxInput: IgxInputDirective;
    * let inputValue = this.igxInput.value;
    * ```
    * @memberof IgxInputDirective
    */
    value: any;
    /**
     * Sets the `disabled` property.
     * ```html
     * <input-group>
     *  <input igxInput #igxInput [disabled]="true">
     * </input-group>
     * ```
     * @memberof IgxInputDirective
     */
    /**
    * Gets the `disabled` property
    * ```typescript
    * @ViewChild('igxInput', {read: IgxInputDirective})
    *  public igxInput: IgxInputDirective;
    * let isDisabled = this.igxInput.disabled;
    * ```
    * @memberof IgxInputDirective
    */
    disabled: boolean;
    /**
     * Sets the `required` property.
     * ```html
     * <input-group>
     *  <input igxInput #igxInput [required]="true">
     * </input-group>
     * ```
     * @memberof IgxInputDirective
     */
    /**
    * Gets whether the igxInput is required.
    * ```typescript
    * let isRequired = this.igxInput.required;
    * ```
    * @memberof IgxInputDirective
    */
    required: boolean;
    /**
     * Sets/gets whether the `"igx-input-group__input"` class is added to the host element.
     * Default value is `false`.
     * ```typescript
     * this.igxInput.isInput = true;
     * ```
     * ```typescript
     * let isCLassAdded = this.igxInput.isInput;
     * ```
     * @memberof IgxInputDirective
     */
    isInput: boolean;
    /**
     * Sets/gets whether the `"class.igx-input-group__textarea"` class is added to the host element.
     * Default value is `false`.
     * ```typescript
     * this.igxInput.isTextArea = true;
     * ```
     * ```typescript
     * let isCLassAdded = this.igxInput.isTextArea;
     * ```
     * @memberof IgxInputDirective
     */
    isTextArea: boolean;
    /**
     *@hidden
     */
    onFocus(event: any): void;
    /**
     *@hidden
     */
    onBlur(event: any): void;
    /**
     *@hidden
     */
    onInput(): void;
    /**
     *@hidden
     */
    ngAfterViewInit(): void;
    /**
     *@hidden
     */
    ngOnDestroy(): void;
    /**
     * Sets a focus on the igxInput.
     * ```typescript
     * this.igxInput.focus();
     * ```
     * @memberof IgxInputDirective
     */
    focus(): void;
    /**
     * Gets the `nativeElement` of the igxInput.
     * ```typescript
     * let igxInputNativeElement = this.igxInput.nativeElement;
     * ```
     * @memberof IgxInputDirective
     */
    readonly nativeElement: any;
    /**
     *@hidden
     */
    protected onStatusChanged(): void;
    /**
     * Gets whether the igxInput has a placeholder.
     * ```typescript
     * let hasPlaceholder = this.igxInput.hasPlaceholder;
     * ```
     * @memberof IgxInputDirective
     */
    readonly hasPlaceholder: any;
    /**
     * Gets the placeholder element of the igxInput.
     * ```typescript
     * let igxInputPlaceholder = this.igxInput.placeholder;
     * ```
     * @memberof IgxInputDirective
     */
    readonly placeholder: any;
    private _hasValidators;
    /**
     * Gets whether the igxInput is focused.
     * ```typescript
     * let isFocused = this.igxInput.focused;
     * ```
     * @memberof IgxInputDirective
     */
    readonly focused: boolean;
    /**
     * Gets the state of the igxInput.
     * ```typescript
     * let igxInputState = this.igxInput.valid;
     * ```
     * @memberof IgxInputDirective
     */
    /**
    * Sets the state of the igxInput.
    * ```typescript
    * this.igxInput.valid = IgxInputState.INVALID;
    * ```
    * @memberof IgxInputDirective
    */
    valid: IgxInputState;
    /**
     * Gets whether the igxInput is valid.
     * ```typescript
     * let valid = this.igxInput.isValid;
     * ```
     * @memberof IgxInputDirective
     */
    readonly isValid: boolean;
    private checkValidity;
}

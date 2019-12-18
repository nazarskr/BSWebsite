export declare enum IgxDividerType {
    DEFAULT = "default",
    DASHED = "dashed"
}
export declare class IgxDividerDirective {
    /**
     * Sets/gets the `id` of the divider.
     * If not set, `id` will have value `"igx-divider-0"`;
     * ```html
     * <igx-divider id="my-divider"></igx-divider>
     * ```
     * ```typescript
     * let dividerId =  this.divider.id;
     * ```
     */
    id: string;
    /**
     * An @Input property that sets the value of the `inset` attribute.
     * If not provided it will be set to `'0'`.
     * ```html
     * <igx-divider inset="16px"></igx-divider>
     * ```
     */
    private _inset;
    /**
     * An @Input property that sets the value of `role` attribute.
     * If not the default value of `separator` will be used.
     */
    role: string;
    /**
     * Sets the type of the divider. The default value
     * is `default`. The divider can also be `dashed`;
     * ```html
     * <igx-divider type="dashed"></igx-divider>
     * ```
     */
    type: IgxDividerType | string;
    readonly isDashed: boolean;
    /**
     * An @Input that sets the `middle` attribute of the divider.
     * If set to `true` and an `inset` value has been provided,
     * the divider will start shrinking from both ends.
     * ```html
     * <igx-divider [middle]="true"></igx-divider>
     * ```
     */
    middle: boolean;
    /**
     * A getter that returns `true` if the type of the divider is `default`;
     * ```typescript
     * const isDefault = this.divider.isDefault;
     * ```
     */
    readonly isDefault: boolean;
    /**
     * An @Input that sets the vertical attribute of the divider.
     * ```html
     * <igx-divider [vertical]="true"></igx-divider>
     * ```
     */
    vertical: boolean;
    /**
     * Sets the inset of the divider from the side(s).
     * If the divider attribute `middle` is set to `true`,
     * it will inset the divider on both sides.
     * ```typescript
     * this.divider.inset = '32px';
     * ```
     */
    /**
    * Gets the current divider inset in terms of
    * margin representation as applied to the divider.
    * ```typescript
    * const inset = this.divider.inset;
    * ```
    */
    inset: string;
}
export declare class IgxDividerModule {
}

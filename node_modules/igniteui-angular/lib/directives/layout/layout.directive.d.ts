export declare class IgxLayoutDirective {
    /**
     * Sets the default flow direction of the container's children.
     *
     * Defaults to `rows`.
     *
     * ```html
     *  <div
     *   igxLayout
     *   igxLayoutDir="row">
     *    <div igxFlex>1</div>
     *    <div igxFlex>2</div>
     *    <div igxFlex>3</div>
     *  </div>
     * ```
     */
    dir: string;
    /**
     * Defines the direction flex children are placed in the flex container.
     *
     * When set to `true`, the `rows` direction goes right to left and `columns` goes bottom to top.
     *
     * ```html
     * <div
     *   igxLayout
     *   igxLayoutReverse="true">
     *    <div igxFlex>1</div>
     *    <div igxFlex>2</div>
     *    <div igxFlex>3</div>
     * </div>
     * ```
     */
    reverse: boolean;
    /**
     * By default the immediate children will all try to fit onto one line.
     *
     * The default value `nowrap` sets this behavior.
     *
     * Other accepted values are `wrap` and `wrap-reverse`.
     *
     * ```html
     * <div
     *   igxLayout
     *   igxLayoutDir="row"
     *   igxLayoutWrap="wrap">
     *    <div igxFlex igxFlexGrow="0">1</div>
     *    <div igxFlex igxFlexGrow="0">2</div>
     *    <div igxFlex igxFlexGrow="0">3</div>
     * </div>
     * ```
     */
    wrap: string;
    /**
     * Defines the alignment along the main axis.
     *
     * Defaults to `flex-start` which packs the children toward the start line.
     *
     * Other possible values are `flex-end`, `center`, `space-between`, `space-around`.
     *
     * ```html
     * <div
     *   igxLayout
     *   igxLayoutDir="column"
     *   igxLayoutJustify="space-between">
     *    <div>1</div>
     *    <div>2</div>
     *    <div>3</div>
     * </div>
     * ```
     */
    justify: string;
    /**
     * Defines the default behavior for how children are laid out along the corss axis of the current line.
     *
     * Defaults to `flex-start`.
     *
     * Other possible values are `flex-end`, `center`, `baseline`, and `stretch`.
     *
     * ```html
     * <div
     *   igxLayout
     *   igxLayoutDir="column"
     *   igxLayoutItemAlign="start">
     *    <div igxFlex igxFlexGrow="0">1</div>
     *    <div igxFlex igxFlexGrow="0">2</div>
     *    <div igxFlex igxFlexGrow="0">3</div>
     * </div>
     * ```
     */
    itemAlign: string;
    /**
     * @hidden
     */
    display: string;
    /**
     * @hidden
     */
    readonly flexwrap: string;
    /**
     * @hidden
     */
    readonly justifycontent: string;
    /**
     * @hidden
     */
    readonly align: string;
    /**
     * @hidden
     */
    readonly direction: "row" | "column" | "row-reverse" | "column-reverse";
}
export declare class IgxFlexDirective {
    /**
     * Applies the `grow` attribute to an element that uses the directive.
     *
     * Default value is `1`.
     *
     * ```html
     * <div>
     *    <div igxFlex igxFlexGrow="0">Content1</div>
     *    <div igxFlex igxFlexGrow="1">Content2</div>
     *    <div igxFlex igxFlexGrow="0">Content3</div>
     * </div>
     * ```
     */
    grow: number;
    /**
     * Applies the `shrink` attribute to an element that uses the directive.
     *
     * Default value is `1`.
     *
     * ```html
     * <div>
     *    <div igxFlex igxFlexShrink="1">Content1</div>
     *    <div igxFlex igxFlexShrink="0">Content2</div>
     *    <div igxFlex igxFlexShrink="1">Content3</div>
     * </div>
     * ```
     */
    shrink: number;
    /**
     * Applies the directive to an element.
     *
     * Possible values include `igxFlexGrow`, `igxFlexShrink`, `igxFlexOrder`, `igxFlexBasis`.
     *
     * ```html
     * <div igxFlex>Content</div>
     * ```
     */
    flex: string;
    /**
     * Applies the `order` attribute to an element that uses the directive.
     *
     * Default value is `0`.
     *
     * ```html
     * <div>
     *    <div igxFlex igxFlexOrder="1">Content1</div>
     *    <div igxFlex igxFlexOrder="0">Content2</div>
     *    <div igxFlex igxFlexOrder="2">Content3</div>
     * </div>
     * ```
     */
    order: number;
    /**
     * Applies the `flex-basis` attribute to an element that uses the directive.
     *
     * Default value is `auto`.
     *
     * Other possible values include `content`, `max-content`, `min-content`, `fit-content`.
     *
     * ```html
     * <div igxFlex igxFlexBasis="fit-content">Content</div>
     * ```
     */
    basis: string;
    /**
     * @hidden
     */
    readonly style: string;
    /**
     * @hidden
     */
    readonly itemorder: number;
}
/**
 * @hidden
 */
export declare class IgxLayoutModule {
}

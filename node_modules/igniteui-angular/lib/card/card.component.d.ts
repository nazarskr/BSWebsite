import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
/**
 * IgxCardMedia is container for the card media section.
 * Use it to wrap images and videos.
 */
export declare class IgxCardMediaDirective {
    /**
     * @hidden
     */
    cssClass: string;
    /**
     * An @Input property that sets the `width` and `min-width` style property
     * of the media container. If not provided it will be set to `auto`.
     * ```html
     * <igx-card-media width="300px"></igx-card-media>
     * ```
     */
    width: string;
    /**
     * An @Input property that sets the `height` style property of the media container.
     * If not provided it will be set to `auto`.
     * ```html
     * <igx-card-media height="50%"></igx-card-media>
     * ```
     */
    height: string;
    /**
     * An @Input property that sets the `role` attribute of the media container.
     */
    role: string;
}
/**
 * IgxCardHeader is container for the card header
 */
export declare class IgxCardHeaderComponent {
    /**
     * @hidden
     */
    cssClass: string;
    /**
     * An @Input property that sets the layout style of the header.
     * By default the header elements(thumbnail and title/subtitle) are aligned horizontally.
     * ```html
     * <igx-card-header [vertical]="true"></igx-card-header>
     * ```
     */
    vertical: boolean;
    /**
     * An @Input property that sets the value of the `role` attribute of the card header.
     * By default the value is set to `header`.
     * ```html
     * <igx-card-header role="header"></igx-card-header>
     * ```
     */
    role: string;
}
/**
 * IgxCardThumbnail is container for the card thumbnail section.
 * Use it to wrap anything you want to be used as a thumbnail.
 */
export declare class IgxCardThumbnailDirective {
}
/**
 * igxCardHeaderTitle is used to denote the header title in a card.
 * Use it to tag text nodes.
 */
export declare class IgxCardHeaderTitleDirective {
    /**
     * @hidden
     */
    cssClass: string;
}
/**
 * igxCardHeaderSubtitle is used to denote the header subtitle in a card.
 * Use it to tag text nodes.
 */
export declare class IgxCardHeaderSubtitleDirective {
    /**
     * @hidden
     */
    cssClass: string;
}
/**
 * IgxCardContent is container for the card content.
 */
export declare class IgxCardContentDirective {
    /**
     * @hidden
     */
    cssClass: string;
}
/**
 * IgxCardFooter is container for the card footer
 */
export declare class IgxCardFooterDirective {
    /**
     * An @Input property that sets the value of the `role` attribute of the card footer.
     * By default the value is set to `footer`.
     * ```html
     * <igx-card-footer role="footer"></igx-card-footer>
     * ```
     */
    role: string;
}
/**
 * **Ignite UI for Angular Card** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html)
 *
 * The Ignite UI Card serves as a container that allows custom content to be organized in an appealing way. There are
 * five sections in a card that you can use to organize your content. These are header, media, content, actions, and footer.
 *
 * Example:
 * ```html
 * <igx-card>
 *   <igx-card-header>
 *     <h3 igxCardHeaderTitle>{{title}}</h3>
 *     <h5 igxCardHeaderSubtitle>{{subtitle}}</h5>
 *   </igx-card-header>
 *   <igx-card-actions>
 *       <button igxButton igxRipple>Share</button>
 *       <button igxButton igxRipple>Play Album</button>
 *   </igx-card-actions>
 * </igx-card>
 * ```
 */
export declare enum IgxCardType {
    DEFAULT = "default",
    OUTLINED = "outlined"
}
export declare class IgxCardComponent {
    /**
     * Sets/gets the `id` of the card.
     * If not set, `id` will have value `"igx-card-0"`;
     * ```html
     * <igx-card id = "my-first-card"></igx-card>
     * ```
     * ```typescript
     * let cardId =  this.card.id;
     * ```
     * @memberof IgxCardComponent
     */
    id: string;
    /**
     * An @Input property that sets the value of the `role` attribute of the card.
     * By default the value is set to `group`.
     * ```html
     * <igx-card role="group"></igx-card>
     * ```
     */
    role: string;
    /**
     * An @Input property that sets the value of the `type` attribute of the card.
     * By default the value is set to `default`. You can make the card use the
     * outlined style by setting the value to `outlined`.
     * ```html
     * <igx-card type="outlined"></igx-card>
     * ```
     */
    type: IgxCardType | string;
    /**
     * A getter which will return true if the card type is `outlined`.
     */
    readonly isOutlinedCard: boolean;
    /**
     * An @Input property that sets the value of the `horizontal` attribute of the card.
     * Setting this to `true` will make the different card sections align horizontally,
     * essentially flipping the card to the side.
     * ```html
     * <igx-card [horizontal]="true"></igx-card>
     * ```
     */
    horizontal: boolean;
}
export declare enum IgxCardActionsLayout {
    DEFAULT = "default",
    JUSTIFY = "justify"
}
/**
 * IgxCardActions is container for the card actions.
 */
export declare class IgxCardActionsComponent implements OnInit, OnChanges {
    card: IgxCardComponent;
    private isVerticalSet;
    constructor(card: IgxCardComponent);
    /**
     * An @Input property that sets the layout style of the actions.
     * By default icons and icon buttons, as well as regular buttons
     * are split into two containers, which are then positioned on both ends
     * of the card-actions area.
     * You can justify the elements in those groups so they are positioned equally
     * from one another taking up all the space available along the card actions axis.
     * ```html
     * <igx-card-actions layout="justify"></igx-card-actions>
     * ```
     */
    layout: IgxCardActionsLayout | string;
    /**
     * An @Input property that sets the vertical attribute of the actions.
     * When set to `true` the actions will be layed out vertically.
     */
    vertical: boolean;
    /**
     * A getter that returns `true` when the layout has been
     * set to `justify`.
     */
    readonly isJustifyLayout: boolean;
    /**
     * An @Input property that sets order of the buttons the actions area.
     * By default all icons/icon buttons are placed at the end of the action
     * area. Any regular buttons(flat, raised) will appear before the icons/icon buttons
     * placed in the actions area.
     * If you want to reverse their positions so that icons appear first, use the `reverse`
     * attribute.
     * ```html
     * <igx-card-actions [reverse]="true"></igx-card-actions>
     * ```
     */
    reverse: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}
/**
 * @hidden
 */
export declare class IgxCardModule {
}

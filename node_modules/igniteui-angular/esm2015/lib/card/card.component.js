/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, Directive, HostBinding, Optional, Inject, Input, NgModule } from '@angular/core';
import { IgxButtonModule } from '../directives/button/button.directive';
/** @type {?} */
let NEXT_ID = 0;
/**
 * IgxCardMedia is container for the card media section.
 * Use it to wrap images and videos.
 */
export class IgxCardMediaDirective {
    constructor() {
        /**
         * @hidden
         */
        this.cssClass = 'igx-card__media';
        /**
         * An \@Input property that sets the `width` and `min-width` style property
         * of the media container. If not provided it will be set to `auto`.
         * ```html
         * <igx-card-media width="300px"></igx-card-media>
         * ```
         */
        this.width = 'auto';
        /**
         * An \@Input property that sets the `height` style property of the media container.
         * If not provided it will be set to `auto`.
         * ```html
         * <igx-card-media height="50%"></igx-card-media>
         * ```
         */
        this.height = 'auto';
        /**
         * An \@Input property that sets the `role` attribute of the media container.
         */
        this.role = 'img';
    }
}
IgxCardMediaDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'igx-card-media'
            },] }
];
IgxCardMediaDirective.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class.igx-card__media',] }],
    width: [{ type: HostBinding, args: ['style.width',] }, { type: HostBinding, args: ['style.min-width',] }, { type: Input }],
    height: [{ type: HostBinding, args: ['style.height',] }, { type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxCardMediaDirective.prototype.cssClass;
    /**
     * An \@Input property that sets the `width` and `min-width` style property
     * of the media container. If not provided it will be set to `auto`.
     * ```html
     * <igx-card-media width="300px"></igx-card-media>
     * ```
     * @type {?}
     */
    IgxCardMediaDirective.prototype.width;
    /**
     * An \@Input property that sets the `height` style property of the media container.
     * If not provided it will be set to `auto`.
     * ```html
     * <igx-card-media height="50%"></igx-card-media>
     * ```
     * @type {?}
     */
    IgxCardMediaDirective.prototype.height;
    /**
     * An \@Input property that sets the `role` attribute of the media container.
     * @type {?}
     */
    IgxCardMediaDirective.prototype.role;
}
/**
 * IgxCardHeader is container for the card header
 */
export class IgxCardHeaderComponent {
    constructor() {
        /**
         * @hidden
         */
        this.cssClass = 'igx-card-header';
        /**
         * An \@Input property that sets the layout style of the header.
         * By default the header elements(thumbnail and title/subtitle) are aligned horizontally.
         * ```html
         * <igx-card-header [vertical]="true"></igx-card-header>
         * ```
         */
        this.vertical = false;
        /**
         * An \@Input property that sets the value of the `role` attribute of the card header.
         * By default the value is set to `header`.
         * ```html
         * <igx-card-header role="header"></igx-card-header>
         * ```
         */
        this.role = 'header';
    }
}
IgxCardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-card-header',
                template: "<div class=\"igx-card-header__thumbnail\">\n    <ng-content select=\"igx-avatar, igx-card-media, [igxCardThumbnail]\"></ng-content>\n</div>\n\n<div class=\"igx-card-header__titles\">\n    <ng-content select=\"\n        [igxCardHeaderTitle],\n        [igxCardHeaderSubtitle],\n        .igx-card-header__title,\n        .igx-card-header__subtitle\">\n    </ng-content>\n</div>\n\n<ng-content></ng-content>\n"
            }] }
];
IgxCardHeaderComponent.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class.igx-card-header',] }],
    vertical: [{ type: HostBinding, args: ['class.igx-card-header--vertical',] }, { type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxCardHeaderComponent.prototype.cssClass;
    /**
     * An \@Input property that sets the layout style of the header.
     * By default the header elements(thumbnail and title/subtitle) are aligned horizontally.
     * ```html
     * <igx-card-header [vertical]="true"></igx-card-header>
     * ```
     * @type {?}
     */
    IgxCardHeaderComponent.prototype.vertical;
    /**
     * An \@Input property that sets the value of the `role` attribute of the card header.
     * By default the value is set to `header`.
     * ```html
     * <igx-card-header role="header"></igx-card-header>
     * ```
     * @type {?}
     */
    IgxCardHeaderComponent.prototype.role;
}
/**
 * IgxCardThumbnail is container for the card thumbnail section.
 * Use it to wrap anything you want to be used as a thumbnail.
 */
export class IgxCardThumbnailDirective {
}
IgxCardThumbnailDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCardThumbnail]'
            },] }
];
/**
 * igxCardHeaderTitle is used to denote the header title in a card.
 * Use it to tag text nodes.
 */
export class IgxCardHeaderTitleDirective {
    constructor() {
        /**
         * @hidden
         */
        this.cssClass = 'igx-card__header__title';
    }
}
IgxCardHeaderTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCardHeaderTitle]'
            },] }
];
IgxCardHeaderTitleDirective.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class.igx-card-header__title',] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxCardHeaderTitleDirective.prototype.cssClass;
}
/**
 * igxCardHeaderSubtitle is used to denote the header subtitle in a card.
 * Use it to tag text nodes.
 */
export class IgxCardHeaderSubtitleDirective {
    constructor() {
        /**
         * @hidden
         */
        this.cssClass = 'igx-card-header__subtitle';
    }
}
IgxCardHeaderSubtitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxCardHeaderSubtitle]'
            },] }
];
IgxCardHeaderSubtitleDirective.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class.igx-card-header__subtitle',] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxCardHeaderSubtitleDirective.prototype.cssClass;
}
/**
 * IgxCardContent is container for the card content.
 */
export class IgxCardContentDirective {
    constructor() {
        /**
         * @hidden
         */
        this.cssClass = 'igx-card-content';
    }
}
IgxCardContentDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'igx-card-content'
            },] }
];
IgxCardContentDirective.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class.igx-card-content',] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxCardContentDirective.prototype.cssClass;
}
/**
 * IgxCardFooter is container for the card footer
 */
export class IgxCardFooterDirective {
    constructor() {
        /**
         * An \@Input property that sets the value of the `role` attribute of the card footer.
         * By default the value is set to `footer`.
         * ```html
         * <igx-card-footer role="footer"></igx-card-footer>
         * ```
         */
        this.role = 'footer';
    }
}
IgxCardFooterDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'igx-card-footer'
            },] }
];
IgxCardFooterDirective.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }]
};
if (false) {
    /**
     * An \@Input property that sets the value of the `role` attribute of the card footer.
     * By default the value is set to `footer`.
     * ```html
     * <igx-card-footer role="footer"></igx-card-footer>
     * ```
     * @type {?}
     */
    IgxCardFooterDirective.prototype.role;
}
/** @enum {string} */
const IgxCardType = {
    DEFAULT: 'default',
    OUTLINED: 'outlined',
};
export { IgxCardType };
export class IgxCardComponent {
    constructor() {
        /**
         * Sets/gets the `id` of the card.
         * If not set, `id` will have value `"igx-card-0"`;
         * ```html
         * <igx-card id = "my-first-card"></igx-card>
         * ```
         * ```typescript
         * let cardId =  this.card.id;
         * ```
         * \@memberof IgxCardComponent
         */
        this.id = `igx-card-${NEXT_ID++}`;
        /**
         * An \@Input property that sets the value of the `role` attribute of the card.
         * By default the value is set to `group`.
         * ```html
         * <igx-card role="group"></igx-card>
         * ```
         */
        this.role = 'group';
        /**
         * An \@Input property that sets the value of the `type` attribute of the card.
         * By default the value is set to `default`. You can make the card use the
         * outlined style by setting the value to `outlined`.
         * ```html
         * <igx-card type="outlined"></igx-card>
         * ```
         */
        this.type = IgxCardType.DEFAULT;
        /**
         * An \@Input property that sets the value of the `horizontal` attribute of the card.
         * Setting this to `true` will make the different card sections align horizontally,
         * essentially flipping the card to the side.
         * ```html
         * <igx-card [horizontal]="true"></igx-card>
         * ```
         */
        this.horizontal = false;
    }
    /**
     * A getter which will return true if the card type is `outlined`.
     * @return {?}
     */
    get isOutlinedCard() {
        return this.type === IgxCardType.OUTLINED;
    }
}
IgxCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-card',
                template: "<ng-container select='igx-card-media'></ng-container>\n\n<ng-container select='igx-card-header'></ng-container>\n<ng-container select='igx-card-content'>\n    <ng-content></ng-content>\n</ng-container>\n\n<ng-container select='igx-card-actions'></ng-container>\n"
            }] }
];
IgxCardComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }],
    type: [{ type: HostBinding, args: ['class.igx-card',] }, { type: Input }],
    isOutlinedCard: [{ type: HostBinding, args: ['class.igx-card--outlined',] }],
    horizontal: [{ type: HostBinding, args: ['class.igx-card--horizontal',] }, { type: Input }]
};
if (false) {
    /**
     * Sets/gets the `id` of the card.
     * If not set, `id` will have value `"igx-card-0"`;
     * ```html
     * <igx-card id = "my-first-card"></igx-card>
     * ```
     * ```typescript
     * let cardId =  this.card.id;
     * ```
     * \@memberof IgxCardComponent
     * @type {?}
     */
    IgxCardComponent.prototype.id;
    /**
     * An \@Input property that sets the value of the `role` attribute of the card.
     * By default the value is set to `group`.
     * ```html
     * <igx-card role="group"></igx-card>
     * ```
     * @type {?}
     */
    IgxCardComponent.prototype.role;
    /**
     * An \@Input property that sets the value of the `type` attribute of the card.
     * By default the value is set to `default`. You can make the card use the
     * outlined style by setting the value to `outlined`.
     * ```html
     * <igx-card type="outlined"></igx-card>
     * ```
     * @type {?}
     */
    IgxCardComponent.prototype.type;
    /**
     * An \@Input property that sets the value of the `horizontal` attribute of the card.
     * Setting this to `true` will make the different card sections align horizontally,
     * essentially flipping the card to the side.
     * ```html
     * <igx-card [horizontal]="true"></igx-card>
     * ```
     * @type {?}
     */
    IgxCardComponent.prototype.horizontal;
}
/** @enum {string} */
const IgxCardActionsLayout = {
    DEFAULT: 'default',
    JUSTIFY: 'justify',
};
export { IgxCardActionsLayout };
/**
 * IgxCardActions is container for the card actions.
 */
export class IgxCardActionsComponent {
    /**
     * @param {?} card
     */
    constructor(card) {
        this.card = card;
        this.isVerticalSet = false;
        /**
         * An \@Input property that sets the layout style of the actions.
         * By default icons and icon buttons, as well as regular buttons
         * are split into two containers, which are then positioned on both ends
         * of the card-actions area.
         * You can justify the elements in those groups so they are positioned equally
         * from one another taking up all the space available along the card actions axis.
         * ```html
         * <igx-card-actions layout="justify"></igx-card-actions>
         * ```
         */
        this.layout = 'default';
        /**
         * An \@Input property that sets order of the buttons the actions area.
         * By default all icons/icon buttons are placed at the end of the action
         * area. Any regular buttons(flat, raised) will appear before the icons/icon buttons
         * placed in the actions area.
         * If you want to reverse their positions so that icons appear first, use the `reverse`
         * attribute.
         * ```html
         * <igx-card-actions [reverse]="true"></igx-card-actions>
         * ```
         */
        this.reverse = false;
    }
    /**
     * A getter that returns `true` when the layout has been
     * set to `justify`.
     * @return {?}
     */
    get isJustifyLayout() {
        return this.layout === IgxCardActionsLayout.JUSTIFY;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const prop in changes) {
            if (prop === 'vertical') {
                this.isVerticalSet = true;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.vertical = !this.isVerticalSet && this.card.horizontal;
    }
}
IgxCardActionsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'igx-card-actions',
                template: "<div class=\"igx-card-actions__icons\">\n    <ng-content select=\"igx-icon, [igxButton='icon']\"></ng-content>\n</div>\n\n<div #buttons class=\"igx-card-actions__buttons\">\n    <ng-content select=\"[igxButton]\"></ng-content>\n</div>\n\n\n<ng-content></ng-content>\n"
            }] }
];
/** @nocollapse */
IgxCardActionsComponent.ctorParameters = () => [
    { type: IgxCardComponent, decorators: [{ type: Optional }, { type: Inject, args: [IgxCardComponent,] }] }
];
IgxCardActionsComponent.propDecorators = {
    layout: [{ type: HostBinding, args: ['class.igx-card-actions',] }, { type: Input }],
    vertical: [{ type: HostBinding, args: ['class.igx-card-actions--vertical',] }, { type: Input }],
    isJustifyLayout: [{ type: HostBinding, args: ['class.igx-card-actions--justify',] }],
    reverse: [{ type: HostBinding, args: ['class.igx-card-actions--reverse',] }, { type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxCardActionsComponent.prototype.isVerticalSet;
    /**
     * An \@Input property that sets the layout style of the actions.
     * By default icons and icon buttons, as well as regular buttons
     * are split into two containers, which are then positioned on both ends
     * of the card-actions area.
     * You can justify the elements in those groups so they are positioned equally
     * from one another taking up all the space available along the card actions axis.
     * ```html
     * <igx-card-actions layout="justify"></igx-card-actions>
     * ```
     * @type {?}
     */
    IgxCardActionsComponent.prototype.layout;
    /**
     * An \@Input property that sets the vertical attribute of the actions.
     * When set to `true` the actions will be layed out vertically.
     * @type {?}
     */
    IgxCardActionsComponent.prototype.vertical;
    /**
     * An \@Input property that sets order of the buttons the actions area.
     * By default all icons/icon buttons are placed at the end of the action
     * area. Any regular buttons(flat, raised) will appear before the icons/icon buttons
     * placed in the actions area.
     * If you want to reverse their positions so that icons appear first, use the `reverse`
     * attribute.
     * ```html
     * <igx-card-actions [reverse]="true"></igx-card-actions>
     * ```
     * @type {?}
     */
    IgxCardActionsComponent.prototype.reverse;
    /** @type {?} */
    IgxCardActionsComponent.prototype.card;
}
/**
 * @hidden
 */
export class IgxCardModule {
}
IgxCardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IgxCardComponent,
                    IgxCardHeaderComponent,
                    IgxCardMediaDirective,
                    IgxCardContentDirective,
                    IgxCardActionsComponent,
                    IgxCardFooterDirective,
                    IgxCardHeaderTitleDirective,
                    IgxCardHeaderSubtitleDirective,
                    IgxCardThumbnailDirective,
                ],
                exports: [
                    IgxCardComponent,
                    IgxCardHeaderComponent,
                    IgxCardMediaDirective,
                    IgxCardContentDirective,
                    IgxCardActionsComponent,
                    IgxCardFooterDirective,
                    IgxCardHeaderTitleDirective,
                    IgxCardHeaderSubtitleDirective,
                    IgxCardThumbnailDirective,
                ],
                imports: [CommonModule, IgxButtonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsUUFBUSxFQUNSLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUlYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7SUFFcEUsT0FBTyxHQUFHLENBQUM7Ozs7O0FBVWYsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQzs7OztRQVNXLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7UUFZN0IsVUFBSyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7UUFXZixXQUFNLEdBQUcsTUFBTSxDQUFDOzs7O1FBT2hCLFNBQUksR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBeENBLFNBQVMsU0FBQzs7Z0JBRVAsUUFBUSxFQUFFLGdCQUFnQjthQUM3Qjs7O3VCQUtJLFdBQVcsU0FBQyx1QkFBdUI7b0JBVW5DLFdBQVcsU0FBQyxhQUFhLGNBQ3pCLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSztxQkFVTCxXQUFXLFNBQUMsY0FBYyxjQUMxQixLQUFLO21CQU1MLFdBQVcsU0FBQyxXQUFXLGNBQ3ZCLEtBQUs7Ozs7Ozs7SUE5Qk4seUNBQ29DOzs7Ozs7Ozs7SUFTcEMsc0NBR3NCOzs7Ozs7Ozs7SUFTdEIsdUNBRXVCOzs7OztJQUt2QixxQ0FFb0I7Ozs7O0FBVXhCLE1BQU0sT0FBTyxzQkFBc0I7SUFKbkM7Ozs7UUFTVyxhQUFRLEdBQUcsaUJBQWlCLENBQUM7Ozs7Ozs7O1FBVzdCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBVWpC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b0JBQzlCLHlCQUF5QjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLDJCQUEyQjtvQkFDM0IsOEJBQThCO29CQUM5Qix5QkFBeUI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIE9wdGlvbmFsLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPbkluaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG4vKipcbiAqIElneENhcmRNZWRpYSBpcyBjb250YWluZXIgZm9yIHRoZSBjYXJkIG1lZGlhIHNlY3Rpb24uXG4gKiBVc2UgaXQgdG8gd3JhcCBpbWFnZXMgYW5kIHZpZGVvcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnaWd4LWNhcmQtbWVkaWEnXG59KVxuZXhwb3J0IGNsYXNzIElneENhcmRNZWRpYURpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhcmRfX21lZGlhJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWNhcmRfX21lZGlhJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGB3aWR0aGAgYW5kIGBtaW4td2lkdGhgIHN0eWxlIHByb3BlcnR5XG4gICAgICogb2YgdGhlIG1lZGlhIGNvbnRhaW5lci4gSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgc2V0IHRvIGBhdXRvYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkLW1lZGlhIHdpZHRoPVwiMzAwcHhcIj48L2lneC1jYXJkLW1lZGlhPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICAgIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3aWR0aCA9ICdhdXRvJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGBoZWlnaHRgIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBtZWRpYSBjb250YWluZXIuXG4gICAgICogSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgc2V0IHRvIGBhdXRvYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkLW1lZGlhIGhlaWdodD1cIjUwJVwiPjwvaWd4LWNhcmQtbWVkaWE+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhlaWdodCA9ICdhdXRvJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGByb2xlYCBhdHRyaWJ1dGUgb2YgdGhlIG1lZGlhIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm9sZSA9ICdpbWcnO1xufVxuXG4vKipcbiAqIElneENhcmRIZWFkZXIgaXMgY29udGFpbmVyIGZvciB0aGUgY2FyZCBoZWFkZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtY2FyZC1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnY2FyZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneENhcmRIZWFkZXJDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLWhlYWRlcicpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1jYXJkLWhlYWRlcic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBsYXlvdXQgc3R5bGUgb2YgdGhlIGhlYWRlci5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBoZWFkZXIgZWxlbWVudHModGh1bWJuYWlsIGFuZCB0aXRsZS9zdWJ0aXRsZSkgYXJlIGFsaWduZWQgaG9yaXpvbnRhbGx5LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcmQtaGVhZGVyIFt2ZXJ0aWNhbF09XCJ0cnVlXCI+PC9pZ3gtY2FyZC1oZWFkZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FyZC1oZWFkZXItLXZlcnRpY2FsJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGByb2xlYCBhdHRyaWJ1dGUgb2YgdGhlIGNhcmQgaGVhZGVyLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIHZhbHVlIGlzIHNldCB0byBgaGVhZGVyYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkLWhlYWRlciByb2xlPVwiaGVhZGVyXCI+PC9pZ3gtY2FyZC1oZWFkZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyByb2xlID0gJ2hlYWRlcic7XG59XG5cbi8qKlxuICogSWd4Q2FyZFRodW1ibmFpbCBpcyBjb250YWluZXIgZm9yIHRoZSBjYXJkIHRodW1ibmFpbCBzZWN0aW9uLlxuICogVXNlIGl0IHRvIHdyYXAgYW55dGhpbmcgeW91IHdhbnQgdG8gYmUgdXNlZCBhcyBhIHRodW1ibmFpbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q2FyZFRodW1ibmFpbF0nXG59KVxuZXhwb3J0IGNsYXNzIElneENhcmRUaHVtYm5haWxEaXJlY3RpdmUgeyB9XG5cbi8qKlxuICogaWd4Q2FyZEhlYWRlclRpdGxlIGlzIHVzZWQgdG8gZGVub3RlIHRoZSBoZWFkZXIgdGl0bGUgaW4gYSBjYXJkLlxuICogVXNlIGl0IHRvIHRhZyB0ZXh0IG5vZGVzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDYXJkSGVhZGVyVGl0bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkSGVhZGVyVGl0bGVEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLWhlYWRlcl9fdGl0bGUnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtY2FyZF9faGVhZGVyX190aXRsZSc7XG59XG5cbi8qKlxuICogaWd4Q2FyZEhlYWRlclN1YnRpdGxlIGlzIHVzZWQgdG8gZGVub3RlIHRoZSBoZWFkZXIgc3VidGl0bGUgaW4gYSBjYXJkLlxuICogVXNlIGl0IHRvIHRhZyB0ZXh0IG5vZGVzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDYXJkSGVhZGVyU3VidGl0bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkSGVhZGVyU3VidGl0bGVEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLWhlYWRlcl9fc3VidGl0bGUnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtY2FyZC1oZWFkZXJfX3N1YnRpdGxlJztcbn1cbi8qKlxuICogSWd4Q2FyZENvbnRlbnQgaXMgY29udGFpbmVyIGZvciB0aGUgY2FyZCBjb250ZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdpZ3gtY2FyZC1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkQ29udGVudERpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhcmQtY29udGVudCcpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1jYXJkLWNvbnRlbnQnO1xufVxuXG4vKipcbiAqIElneENhcmRGb290ZXIgaXMgY29udGFpbmVyIGZvciB0aGUgY2FyZCBmb290ZXJcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnaWd4LWNhcmQtZm9vdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkRm9vdGVyRGlyZWN0aXZlIHtcbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYHJvbGVgIGF0dHJpYnV0ZSBvZiB0aGUgY2FyZCBmb290ZXIuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgdmFsdWUgaXMgc2V0IHRvIGBmb290ZXJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcmQtZm9vdGVyIHJvbGU9XCJmb290ZXJcIj48L2lneC1jYXJkLWZvb3Rlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm9sZSA9ICdmb290ZXInO1xufVxuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIENhcmQqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvY2FyZC5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgQ2FyZCBzZXJ2ZXMgYXMgYSBjb250YWluZXIgdGhhdCBhbGxvd3MgY3VzdG9tIGNvbnRlbnQgdG8gYmUgb3JnYW5pemVkIGluIGFuIGFwcGVhbGluZyB3YXkuIFRoZXJlIGFyZVxuICogZml2ZSBzZWN0aW9ucyBpbiBhIGNhcmQgdGhhdCB5b3UgY2FuIHVzZSB0byBvcmdhbml6ZSB5b3VyIGNvbnRlbnQuIFRoZXNlIGFyZSBoZWFkZXIsIG1lZGlhLCBjb250ZW50LCBhY3Rpb25zLCBhbmQgZm9vdGVyLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWNhcmQ+XG4gKiAgIDxpZ3gtY2FyZC1oZWFkZXI+XG4gKiAgICAgPGgzIGlneENhcmRIZWFkZXJUaXRsZT57e3RpdGxlfX08L2gzPlxuICogICAgIDxoNSBpZ3hDYXJkSGVhZGVyU3VidGl0bGU+e3tzdWJ0aXRsZX19PC9oNT5cbiAqICAgPC9pZ3gtY2FyZC1oZWFkZXI+XG4gKiAgIDxpZ3gtY2FyZC1hY3Rpb25zPlxuICogICAgICAgPGJ1dHRvbiBpZ3hCdXR0b24gaWd4UmlwcGxlPlNoYXJlPC9idXR0b24+XG4gKiAgICAgICA8YnV0dG9uIGlneEJ1dHRvbiBpZ3hSaXBwbGU+UGxheSBBbGJ1bTwvYnV0dG9uPlxuICogICA8L2lneC1jYXJkLWFjdGlvbnM+XG4gKiA8L2lneC1jYXJkPlxuICogYGBgXG4gKi9cblxuZXhwb3J0IGVudW0gSWd4Q2FyZFR5cGUge1xuICAgIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gICAgT1VUTElORUQgPSAnb3V0bGluZWQnXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWNhcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnY2FyZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FyZENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSBjYXJkLlxuICAgICAqIElmIG5vdCBzZXQsIGBpZGAgd2lsbCBoYXZlIHZhbHVlIGBcImlneC1jYXJkLTBcImA7XG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FyZCBpZCA9IFwibXktZmlyc3QtY2FyZFwiPjwvaWd4LWNhcmQ+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjYXJkSWQgPSAgdGhpcy5jYXJkLmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDYXJkQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtY2FyZC0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGByb2xlYCBhdHRyaWJ1dGUgb2YgdGhlIGNhcmQuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgdmFsdWUgaXMgc2V0IHRvIGBncm91cGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FyZCByb2xlPVwiZ3JvdXBcIj48L2lneC1jYXJkPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByb2xlID0gJ2dyb3VwJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgdHlwZWAgYXR0cmlidXRlIG9mIHRoZSBjYXJkLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIHZhbHVlIGlzIHNldCB0byBgZGVmYXVsdGAuIFlvdSBjYW4gbWFrZSB0aGUgY2FyZCB1c2UgdGhlXG4gICAgICogb3V0bGluZWQgc3R5bGUgYnkgc2V0dGluZyB0aGUgdmFsdWUgdG8gYG91dGxpbmVkYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkIHR5cGU9XCJvdXRsaW5lZFwiPjwvaWd4LWNhcmQ+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FyZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHlwZTogSWd4Q2FyZFR5cGUgfCBzdHJpbmcgPSBJZ3hDYXJkVHlwZS5ERUZBVUxUO1xuXG4gICAgLyoqXG4gICAgICogQSBnZXR0ZXIgd2hpY2ggd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgY2FyZCB0eXBlIGlzIGBvdXRsaW5lZGAuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FyZC0tb3V0bGluZWQnKVxuICAgIGdldCBpc091dGxpbmVkQ2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gSWd4Q2FyZFR5cGUuT1VUTElORUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBob3Jpem9udGFsYCBhdHRyaWJ1dGUgb2YgdGhlIGNhcmQuXG4gICAgICogU2V0dGluZyB0aGlzIHRvIGB0cnVlYCB3aWxsIG1ha2UgdGhlIGRpZmZlcmVudCBjYXJkIHNlY3Rpb25zIGFsaWduIGhvcml6b250YWxseSxcbiAgICAgKiBlc3NlbnRpYWxseSBmbGlwcGluZyB0aGUgY2FyZCB0byB0aGUgc2lkZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkIFtob3Jpem9udGFsXT1cInRydWVcIj48L2lneC1jYXJkPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhcmQtLWhvcml6b250YWwnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhvcml6b250YWwgPSBmYWxzZTtcbn1cblxuZXhwb3J0IGVudW0gSWd4Q2FyZEFjdGlvbnNMYXlvdXQge1xuICAgIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gICAgSlVTVElGWSA9ICdqdXN0aWZ5Jyxcbn1cblxuLyoqXG4gKiBJZ3hDYXJkQWN0aW9ucyBpcyBjb250YWluZXIgZm9yIHRoZSBjYXJkIGFjdGlvbnMuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ2lneC1jYXJkLWFjdGlvbnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnY2FyZC1hY3Rpb25zLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIGlzVmVydGljYWxTZXQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoSWd4Q2FyZENvbXBvbmVudCkgcHVibGljIGNhcmQ6IElneENhcmRDb21wb25lbnQpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgbGF5b3V0IHN0eWxlIG9mIHRoZSBhY3Rpb25zLlxuICAgICAqIEJ5IGRlZmF1bHQgaWNvbnMgYW5kIGljb24gYnV0dG9ucywgYXMgd2VsbCBhcyByZWd1bGFyIGJ1dHRvbnNcbiAgICAgKiBhcmUgc3BsaXQgaW50byB0d28gY29udGFpbmVycywgd2hpY2ggYXJlIHRoZW4gcG9zaXRpb25lZCBvbiBib3RoIGVuZHNcbiAgICAgKiBvZiB0aGUgY2FyZC1hY3Rpb25zIGFyZWEuXG4gICAgICogWW91IGNhbiBqdXN0aWZ5IHRoZSBlbGVtZW50cyBpbiB0aG9zZSBncm91cHMgc28gdGhleSBhcmUgcG9zaXRpb25lZCBlcXVhbGx5XG4gICAgICogZnJvbSBvbmUgYW5vdGhlciB0YWtpbmcgdXAgYWxsIHRoZSBzcGFjZSBhdmFpbGFibGUgYWxvbmcgdGhlIGNhcmQgYWN0aW9ucyBheGlzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcmQtYWN0aW9ucyBsYXlvdXQ9XCJqdXN0aWZ5XCI+PC9pZ3gtY2FyZC1hY3Rpb25zPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhcmQtYWN0aW9ucycpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGF5b3V0OiBJZ3hDYXJkQWN0aW9uc0xheW91dCB8IHN0cmluZyA9ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZlcnRpY2FsIGF0dHJpYnV0ZSBvZiB0aGUgYWN0aW9ucy5cbiAgICAgKiBXaGVuIHNldCB0byBgdHJ1ZWAgdGhlIGFjdGlvbnMgd2lsbCBiZSBsYXllZCBvdXQgdmVydGljYWxseS5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLWFjdGlvbnMtLXZlcnRpY2FsJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2ZXJ0aWNhbDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGUgbGF5b3V0IGhhcyBiZWVuXG4gICAgICogc2V0IHRvIGBqdXN0aWZ5YC5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLWFjdGlvbnMtLWp1c3RpZnknKVxuICAgIGdldCBpc0p1c3RpZnlMYXlvdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dCA9PT0gSWd4Q2FyZEFjdGlvbnNMYXlvdXQuSlVTVElGWTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIG9yZGVyIG9mIHRoZSBidXR0b25zIHRoZSBhY3Rpb25zIGFyZWEuXG4gICAgICogQnkgZGVmYXVsdCBhbGwgaWNvbnMvaWNvbiBidXR0b25zIGFyZSBwbGFjZWQgYXQgdGhlIGVuZCBvZiB0aGUgYWN0aW9uXG4gICAgICogYXJlYS4gQW55IHJlZ3VsYXIgYnV0dG9ucyhmbGF0LCByYWlzZWQpIHdpbGwgYXBwZWFyIGJlZm9yZSB0aGUgaWNvbnMvaWNvbiBidXR0b25zXG4gICAgICogcGxhY2VkIGluIHRoZSBhY3Rpb25zIGFyZWEuXG4gICAgICogSWYgeW91IHdhbnQgdG8gcmV2ZXJzZSB0aGVpciBwb3NpdGlvbnMgc28gdGhhdCBpY29ucyBhcHBlYXIgZmlyc3QsIHVzZSB0aGUgYHJldmVyc2VgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcmQtYWN0aW9ucyBbcmV2ZXJzZV09XCJ0cnVlXCI+PC9pZ3gtY2FyZC1hY3Rpb25zPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhcmQtYWN0aW9ucy0tcmV2ZXJzZScpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmV2ZXJzZSA9IGZhbHNlO1xuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgaWYgKHByb3AgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmVydGljYWxTZXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudmVydGljYWwgPSAhdGhpcy5pc1ZlcnRpY2FsU2V0ICYmIHRoaXMuY2FyZC5ob3Jpem9udGFsO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIElneENhcmRDb21wb25lbnQsXG4gICAgICAgIElneENhcmRIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIElneENhcmRNZWRpYURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2FyZENvbnRlbnREaXJlY3RpdmUsXG4gICAgICAgIElneENhcmRBY3Rpb25zQ29tcG9uZW50LFxuICAgICAgICBJZ3hDYXJkRm9vdGVyRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDYXJkSGVhZGVyVGl0bGVEaXJlY3RpdmUsXG4gICAgICAgIElneENhcmRIZWFkZXJTdWJ0aXRsZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2FyZFRodW1ibmFpbERpcmVjdGl2ZSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSWd4Q2FyZENvbXBvbmVudCxcbiAgICAgICAgSWd4Q2FyZEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgSWd4Q2FyZE1lZGlhRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDYXJkQ29udGVudERpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2FyZEFjdGlvbnNDb21wb25lbnQsXG4gICAgICAgIElneENhcmRGb290ZXJEaXJlY3RpdmUsXG4gICAgICAgIElneENhcmRIZWFkZXJUaXRsZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2FyZEhlYWRlclN1YnRpdGxlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDYXJkVGh1bWJuYWlsRGlyZWN0aXZlLFxuICAgIF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWd4QnV0dG9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkTW9kdWxlIHsgfVxuIl19
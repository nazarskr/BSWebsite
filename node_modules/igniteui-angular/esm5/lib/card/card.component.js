/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, Directive, HostBinding, Optional, Inject, Input, NgModule } from '@angular/core';
import { IgxButtonModule } from '../directives/button/button.directive';
/** @type {?} */
var NEXT_ID = 0;
/**
 * IgxCardMedia is container for the card media section.
 * Use it to wrap images and videos.
 */
var IgxCardMediaDirective = /** @class */ (function () {
    function IgxCardMediaDirective() {
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
    return IgxCardMediaDirective;
}());
export { IgxCardMediaDirective };
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
var IgxCardHeaderComponent = /** @class */ (function () {
    function IgxCardHeaderComponent() {
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
    return IgxCardHeaderComponent;
}());
export { IgxCardHeaderComponent };
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
var IgxCardThumbnailDirective = /** @class */ (function () {
    function IgxCardThumbnailDirective() {
    }
    IgxCardThumbnailDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCardThumbnail]'
                },] }
    ];
    return IgxCardThumbnailDirective;
}());
export { IgxCardThumbnailDirective };
/**
 * igxCardHeaderTitle is used to denote the header title in a card.
 * Use it to tag text nodes.
 */
var IgxCardHeaderTitleDirective = /** @class */ (function () {
    function IgxCardHeaderTitleDirective() {
        /**
         * @hidden
         */
        this.cssClass = 'igx-card__header__title';
    }
    IgxCardHeaderTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCardHeaderTitle]'
                },] }
    ];
    IgxCardHeaderTitleDirective.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.igx-card-header__title',] }]
    };
    return IgxCardHeaderTitleDirective;
}());
export { IgxCardHeaderTitleDirective };
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
var IgxCardHeaderSubtitleDirective = /** @class */ (function () {
    function IgxCardHeaderSubtitleDirective() {
        /**
         * @hidden
         */
        this.cssClass = 'igx-card-header__subtitle';
    }
    IgxCardHeaderSubtitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxCardHeaderSubtitle]'
                },] }
    ];
    IgxCardHeaderSubtitleDirective.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.igx-card-header__subtitle',] }]
    };
    return IgxCardHeaderSubtitleDirective;
}());
export { IgxCardHeaderSubtitleDirective };
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
var IgxCardContentDirective = /** @class */ (function () {
    function IgxCardContentDirective() {
        /**
         * @hidden
         */
        this.cssClass = 'igx-card-content';
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
    return IgxCardContentDirective;
}());
export { IgxCardContentDirective };
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
var IgxCardFooterDirective = /** @class */ (function () {
    function IgxCardFooterDirective() {
        /**
         * An \@Input property that sets the value of the `role` attribute of the card footer.
         * By default the value is set to `footer`.
         * ```html
         * <igx-card-footer role="footer"></igx-card-footer>
         * ```
         */
        this.role = 'footer';
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
    return IgxCardFooterDirective;
}());
export { IgxCardFooterDirective };
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
var IgxCardType = {
    DEFAULT: 'default',
    OUTLINED: 'outlined',
};
export { IgxCardType };
var IgxCardComponent = /** @class */ (function () {
    function IgxCardComponent() {
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
        this.id = "igx-card-" + NEXT_ID++;
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
    Object.defineProperty(IgxCardComponent.prototype, "isOutlinedCard", {
        /**
         * A getter which will return true if the card type is `outlined`.
         */
        get: /**
         * A getter which will return true if the card type is `outlined`.
         * @return {?}
         */
        function () {
            return this.type === IgxCardType.OUTLINED;
        },
        enumerable: true,
        configurable: true
    });
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
    return IgxCardComponent;
}());
export { IgxCardComponent };
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
var IgxCardActionsLayout = {
    DEFAULT: 'default',
    JUSTIFY: 'justify',
};
export { IgxCardActionsLayout };
/**
 * IgxCardActions is container for the card actions.
 */
var IgxCardActionsComponent = /** @class */ (function () {
    function IgxCardActionsComponent(card) {
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
    Object.defineProperty(IgxCardActionsComponent.prototype, "isJustifyLayout", {
        /**
         * A getter that returns `true` when the layout has been
         * set to `justify`.
         */
        get: /**
         * A getter that returns `true` when the layout has been
         * set to `justify`.
         * @return {?}
         */
        function () {
            return this.layout === IgxCardActionsLayout.JUSTIFY;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    IgxCardActionsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var prop in changes) {
            if (prop === 'vertical') {
                this.isVerticalSet = true;
            }
        }
    };
    /**
     * @return {?}
     */
    IgxCardActionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.vertical = !this.isVerticalSet && this.card.horizontal;
    };
    IgxCardActionsComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'igx-card-actions',
                    template: "<div class=\"igx-card-actions__icons\">\n    <ng-content select=\"igx-icon, [igxButton='icon']\"></ng-content>\n</div>\n\n<div #buttons class=\"igx-card-actions__buttons\">\n    <ng-content select=\"[igxButton]\"></ng-content>\n</div>\n\n\n<ng-content></ng-content>\n"
                }] }
    ];
    /** @nocollapse */
    IgxCardActionsComponent.ctorParameters = function () { return [
        { type: IgxCardComponent, decorators: [{ type: Optional }, { type: Inject, args: [IgxCardComponent,] }] }
    ]; };
    IgxCardActionsComponent.propDecorators = {
        layout: [{ type: HostBinding, args: ['class.igx-card-actions',] }, { type: Input }],
        vertical: [{ type: HostBinding, args: ['class.igx-card-actions--vertical',] }, { type: Input }],
        isJustifyLayout: [{ type: HostBinding, args: ['class.igx-card-actions--justify',] }],
        reverse: [{ type: HostBinding, args: ['class.igx-card-actions--reverse',] }, { type: Input }]
    };
    return IgxCardActionsComponent;
}());
export { IgxCardActionsComponent };
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
var IgxCardModule = /** @class */ (function () {
    function IgxCardModule() {
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
    return IgxCardModule;
}());
export { IgxCardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsUUFBUSxFQUNSLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUlYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7SUFFcEUsT0FBTyxHQUFHLENBQUM7Ozs7O0FBTWY7SUFBQTs7OztRQVNXLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7UUFZN0IsVUFBSyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7UUFXZixXQUFNLEdBQUcsTUFBTSxDQUFDOzs7O1FBT2hCLFNBQUksR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Z0JBeENBLFNBQVMsU0FBQzs7b0JBRVAsUUFBUSxFQUFFLGdCQUFnQjtpQkFDN0I7OzsyQkFLSSxXQUFXLFNBQUMsdUJBQXVCO3dCQVVuQyxXQUFXLFNBQUMsYUFBYSxjQUN6QixXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7eUJBVUwsV0FBVyxTQUFDLGNBQWMsY0FDMUIsS0FBSzt1QkFNTCxXQUFXLFNBQUMsV0FBVyxjQUN2QixLQUFLOztJQUVWLDRCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FwQ1kscUJBQXFCOzs7Ozs7SUFJOUIseUNBQ29DOzs7Ozs7Ozs7SUFTcEMsc0NBR3NCOzs7Ozs7Ozs7SUFTdEIsdUNBRXVCOzs7OztJQUt2QixxQ0FFb0I7Ozs7O0FBTXhCO0lBQUE7Ozs7UUFTVyxhQUFRLEdBQUcsaUJBQWlCLENBQUM7Ozs7Ozs7O1FBVzdCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBVWpCLFNBQUksR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Z0JBL0JBLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixpYUFBeUM7aUJBQzVDOzs7MkJBS0ksV0FBVyxTQUFDLHVCQUF1QjsyQkFVbkMsV0FBVyxTQUFDLGlDQUFpQyxjQUM3QyxLQUFLO3VCQVVMLFdBQVcsU0FBQyxXQUFXOztJQUU1Qiw2QkFBQztDQUFBLEFBL0JELElBK0JDO1NBM0JZLHNCQUFzQjs7Ozs7O0lBSS9CLDBDQUNvQzs7Ozs7Ozs7O0lBU3BDLDBDQUV3Qjs7Ozs7Ozs7O0lBU3hCLHNDQUN1Qjs7Ozs7O0FBTzNCO0lBQUE7SUFHeUMsQ0FBQzs7Z0JBSHpDLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2lCQUNqQzs7SUFDd0MsZ0NBQUM7Q0FBQSxBQUgxQyxJQUcwQztTQUE3Qix5QkFBeUI7Ozs7O0FBTXRDO0lBQUE7Ozs7UUFRVyxhQUFRLEdBQUcseUJBQXlCLENBQUM7SUFDaEQsQ0FBQzs7Z0JBVEEsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7aUJBQ25DOzs7MkJBS0ksV0FBVyxTQUFDLDhCQUE4Qjs7SUFFL0Msa0NBQUM7Q0FBQSxBQVRELElBU0M7U0FOWSwyQkFBMkI7Ozs7OztJQUlwQywrQ0FDNEM7Ozs7OztBQU9oRDtJQUFBOzs7O1FBUVcsYUFBUSxHQUFHLDJCQUEyQixDQUFDO0lBQ2xELENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO2lCQUN0Qzs7OzJCQUtJLFdBQVcsU0FBQyxpQ0FBaUM7O0lBRWxELHFDQUFDO0NBQUEsQUFURCxJQVNDO1NBTlksOEJBQThCOzs7Ozs7SUFJdkMsa0RBQzhDOzs7OztBQUtsRDtJQUFBOzs7O1FBU1csYUFBUSxHQUFHLGtCQUFrQixDQUFDO0lBQ3pDLENBQUM7O2dCQVZBLFNBQVMsU0FBQzs7b0JBRVAsUUFBUSxFQUFFLGtCQUFrQjtpQkFDL0I7OzsyQkFLSSxXQUFXLFNBQUMsd0JBQXdCOztJQUV6Qyw4QkFBQztDQUFBLEFBVkQsSUFVQztTQU5ZLHVCQUF1Qjs7Ozs7O0lBSWhDLDJDQUNxQzs7Ozs7QUFNekM7SUFBQTs7Ozs7Ozs7UUFjVyxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7O2dCQWZBLFNBQVMsU0FBQzs7b0JBRVAsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUI7Ozt1QkFTSSxXQUFXLFNBQUMsV0FBVyxjQUN2QixLQUFLOztJQUVWLDZCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWFksc0JBQXNCOzs7Ozs7Ozs7O0lBUS9CLHNDQUV1Qjs7OztJQTBCdkIsU0FBVSxTQUFTO0lBQ25CLFVBQVcsVUFBVTs7O0FBR3pCO0lBQUE7Ozs7Ozs7Ozs7OztRQWtCVyxPQUFFLEdBQUcsY0FBWSxPQUFPLEVBQUksQ0FBQzs7Ozs7Ozs7UUFXN0IsU0FBSSxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7O1FBWWYsU0FBSSxHQUF5QixXQUFXLENBQUMsT0FBTyxDQUFDOzs7Ozs7Ozs7UUFvQmpELGVBQVUsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQWhCRyxzQkFDSSw0Q0FBYztRQUpsQjs7V0FFRzs7Ozs7UUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzlDLENBQUM7OztPQUFBOztnQkFqREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixrUkFBa0M7aUJBQ3JDOzs7cUJBYUksV0FBVyxTQUFDLFNBQVMsY0FDckIsS0FBSzt1QkFVTCxXQUFXLFNBQUMsV0FBVyxjQUN2QixLQUFLO3VCQVdMLFdBQVcsU0FBQyxnQkFBZ0IsY0FDNUIsS0FBSztpQ0FNTCxXQUFXLFNBQUMsMEJBQTBCOzZCQWF0QyxXQUFXLFNBQUMsNEJBQTRCLGNBQ3hDLEtBQUs7O0lBRVYsdUJBQUM7Q0FBQSxBQTlERCxJQThEQztTQTFEWSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0lBWXpCLDhCQUVvQzs7Ozs7Ozs7O0lBU3BDLGdDQUVzQjs7Ozs7Ozs7OztJQVV0QixnQ0FFd0Q7Ozs7Ozs7Ozs7SUFrQnhELHNDQUUwQjs7OztJQUkxQixTQUFVLFNBQVM7SUFDbkIsU0FBVSxTQUFTOzs7Ozs7QUFNdkI7SUFRSSxpQ0FBeUQsSUFBc0I7UUFBdEIsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFGdkUsa0JBQWEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7OztRQWlCdkIsV0FBTSxHQUFrQyxTQUFTLENBQUM7Ozs7Ozs7Ozs7OztRQWdDbEQsWUFBTyxHQUFHLEtBQUssQ0FBQztJQS9DNEQsQ0FBQztJQTZCcEYsc0JBQ0ksb0RBQWU7UUFMbkI7OztXQUdHOzs7Ozs7UUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7Ozs7O0lBaUJELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUM5QixLQUFLLElBQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUN4QixJQUFJLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1NBQ0o7SUFDTCxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDaEUsQ0FBQzs7Z0JBbkVKLFNBQVMsU0FBQzs7b0JBRVAsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsdVJBQTBDO2lCQUM3Qzs7OztnQkFJa0UsZ0JBQWdCLHVCQUFsRSxRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjs7O3lCQWEvQyxXQUFXLFNBQUMsd0JBQXdCLGNBQ3BDLEtBQUs7MkJBT0wsV0FBVyxTQUFDLGtDQUFrQyxjQUM5QyxLQUFLO2tDQU9MLFdBQVcsU0FBQyxpQ0FBaUM7MEJBZ0I3QyxXQUFXLFNBQUMsaUNBQWlDLGNBQzdDLEtBQUs7O0lBY1YsOEJBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQS9EWSx1QkFBdUI7Ozs7OztJQUNoQyxnREFBOEI7Ozs7Ozs7Ozs7Ozs7SUFlOUIseUNBRXlEOzs7Ozs7SUFNekQsMkNBRXlCOzs7Ozs7Ozs7Ozs7O0lBc0J6QiwwQ0FFdUI7O0lBL0NYLHVDQUFtRTs7Ozs7QUFpRW5GO0lBQUE7SUF5QjZCLENBQUM7O2dCQXpCN0IsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0QiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIseUJBQXlCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIsMkJBQTJCO3dCQUMzQiw4QkFBOEI7d0JBQzlCLHlCQUF5QjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztpQkFDM0M7O0lBQzRCLG9CQUFDO0NBQUEsQUF6QjlCLElBeUI4QjtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBIb3N0QmluZGluZyxcbiAgICBPcHRpb25hbCxcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25Jbml0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZSc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuLyoqXG4gKiBJZ3hDYXJkTWVkaWEgaXMgY29udGFpbmVyIGZvciB0aGUgY2FyZCBtZWRpYSBzZWN0aW9uLlxuICogVXNlIGl0IHRvIHdyYXAgaW1hZ2VzIGFuZCB2aWRlb3MuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ2lneC1jYXJkLW1lZGlhJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkTWVkaWFEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkX19tZWRpYScpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1jYXJkX19tZWRpYSc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBgd2lkdGhgIGFuZCBgbWluLXdpZHRoYCBzdHlsZSBwcm9wZXJ0eVxuICAgICAqIG9mIHRoZSBtZWRpYSBjb250YWluZXIuIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIHNldCB0byBgYXV0b2AuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FyZC1tZWRpYSB3aWR0aD1cIjMwMHB4XCI+PC9pZ3gtY2FyZC1tZWRpYT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1pbi13aWR0aCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgd2lkdGggPSAnYXV0byc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBgaGVpZ2h0YCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgbWVkaWEgY29udGFpbmVyLlxuICAgICAqIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIHNldCB0byBgYXV0b2AuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FyZC1tZWRpYSBoZWlnaHQ9XCI1MCVcIj48L2lneC1jYXJkLW1lZGlhPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoZWlnaHQgPSAnYXV0byc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBgcm9sZWAgYXR0cmlidXRlIG9mIHRoZSBtZWRpYSBjb250YWluZXIuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvbGUgPSAnaW1nJztcbn1cblxuLyoqXG4gKiBJZ3hDYXJkSGVhZGVyIGlzIGNvbnRhaW5lciBmb3IgdGhlIGNhcmQgaGVhZGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWNhcmQtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NhcmQtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkSGVhZGVyQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FyZC1oZWFkZXInKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtY2FyZC1oZWFkZXInO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgbGF5b3V0IHN0eWxlIG9mIHRoZSBoZWFkZXIuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgaGVhZGVyIGVsZW1lbnRzKHRodW1ibmFpbCBhbmQgdGl0bGUvc3VidGl0bGUpIGFyZSBhbGlnbmVkIGhvcml6b250YWxseS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkLWhlYWRlciBbdmVydGljYWxdPVwidHJ1ZVwiPjwvaWd4LWNhcmQtaGVhZGVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhcmQtaGVhZGVyLS12ZXJ0aWNhbCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmVydGljYWwgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgcm9sZWAgYXR0cmlidXRlIG9mIHRoZSBjYXJkIGhlYWRlci5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBpcyBzZXQgdG8gYGhlYWRlcmAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FyZC1oZWFkZXIgcm9sZT1cImhlYWRlclwiPjwvaWd4LWNhcmQtaGVhZGVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICdoZWFkZXInO1xufVxuXG4vKipcbiAqIElneENhcmRUaHVtYm5haWwgaXMgY29udGFpbmVyIGZvciB0aGUgY2FyZCB0aHVtYm5haWwgc2VjdGlvbi5cbiAqIFVzZSBpdCB0byB3cmFwIGFueXRoaW5nIHlvdSB3YW50IHRvIGJlIHVzZWQgYXMgYSB0aHVtYm5haWwuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneENhcmRUaHVtYm5haWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJkVGh1bWJuYWlsRGlyZWN0aXZlIHsgfVxuXG4vKipcbiAqIGlneENhcmRIZWFkZXJUaXRsZSBpcyB1c2VkIHRvIGRlbm90ZSB0aGUgaGVhZGVyIHRpdGxlIGluIGEgY2FyZC5cbiAqIFVzZSBpdCB0byB0YWcgdGV4dCBub2Rlcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q2FyZEhlYWRlclRpdGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FyZEhlYWRlclRpdGxlRGlyZWN0aXZlIHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FyZC1oZWFkZXJfX3RpdGxlJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWNhcmRfX2hlYWRlcl9fdGl0bGUnO1xufVxuXG4vKipcbiAqIGlneENhcmRIZWFkZXJTdWJ0aXRsZSBpcyB1c2VkIHRvIGRlbm90ZSB0aGUgaGVhZGVyIHN1YnRpdGxlIGluIGEgY2FyZC5cbiAqIFVzZSBpdCB0byB0YWcgdGV4dCBub2Rlcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q2FyZEhlYWRlclN1YnRpdGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FyZEhlYWRlclN1YnRpdGxlRGlyZWN0aXZlIHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FyZC1oZWFkZXJfX3N1YnRpdGxlJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWNhcmQtaGVhZGVyX19zdWJ0aXRsZSc7XG59XG4vKipcbiAqIElneENhcmRDb250ZW50IGlzIGNvbnRhaW5lciBmb3IgdGhlIGNhcmQgY29udGVudC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnaWd4LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FyZENvbnRlbnREaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLWNvbnRlbnQnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtY2FyZC1jb250ZW50Jztcbn1cblxuLyoqXG4gKiBJZ3hDYXJkRm9vdGVyIGlzIGNvbnRhaW5lciBmb3IgdGhlIGNhcmQgZm9vdGVyXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ2lneC1jYXJkLWZvb3Rlcidcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FyZEZvb3RlckRpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGByb2xlYCBhdHRyaWJ1dGUgb2YgdGhlIGNhcmQgZm9vdGVyLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIHZhbHVlIGlzIHNldCB0byBgZm9vdGVyYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkLWZvb3RlciByb2xlPVwiZm9vdGVyXCI+PC9pZ3gtY2FyZC1mb290ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvbGUgPSAnZm9vdGVyJztcbn1cblxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBDYXJkKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2NhcmQuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIENhcmQgc2VydmVzIGFzIGEgY29udGFpbmVyIHRoYXQgYWxsb3dzIGN1c3RvbSBjb250ZW50IHRvIGJlIG9yZ2FuaXplZCBpbiBhbiBhcHBlYWxpbmcgd2F5LiBUaGVyZSBhcmVcbiAqIGZpdmUgc2VjdGlvbnMgaW4gYSBjYXJkIHRoYXQgeW91IGNhbiB1c2UgdG8gb3JnYW5pemUgeW91ciBjb250ZW50LiBUaGVzZSBhcmUgaGVhZGVyLCBtZWRpYSwgY29udGVudCwgYWN0aW9ucywgYW5kIGZvb3Rlci5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1jYXJkPlxuICogICA8aWd4LWNhcmQtaGVhZGVyPlxuICogICAgIDxoMyBpZ3hDYXJkSGVhZGVyVGl0bGU+e3t0aXRsZX19PC9oMz5cbiAqICAgICA8aDUgaWd4Q2FyZEhlYWRlclN1YnRpdGxlPnt7c3VidGl0bGV9fTwvaDU+XG4gKiAgIDwvaWd4LWNhcmQtaGVhZGVyPlxuICogICA8aWd4LWNhcmQtYWN0aW9ucz5cbiAqICAgICAgIDxidXR0b24gaWd4QnV0dG9uIGlneFJpcHBsZT5TaGFyZTwvYnV0dG9uPlxuICogICAgICAgPGJ1dHRvbiBpZ3hCdXR0b24gaWd4UmlwcGxlPlBsYXkgQWxidW08L2J1dHRvbj5cbiAqICAgPC9pZ3gtY2FyZC1hY3Rpb25zPlxuICogPC9pZ3gtY2FyZD5cbiAqIGBgYFxuICovXG5cbmV4cG9ydCBlbnVtIElneENhcmRUeXBlIHtcbiAgICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAgIE9VVExJTkVEID0gJ291dGxpbmVkJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1jYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NhcmQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneENhcmRDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgY2FyZC5cbiAgICAgKiBJZiBub3Qgc2V0LCBgaWRgIHdpbGwgaGF2ZSB2YWx1ZSBgXCJpZ3gtY2FyZC0wXCJgO1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcmQgaWQgPSBcIm15LWZpcnN0LWNhcmRcIj48L2lneC1jYXJkPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2FyZElkID0gIHRoaXMuY2FyZC5pZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2FyZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWNhcmQtJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgcm9sZWAgYXR0cmlidXRlIG9mIHRoZSBjYXJkLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIHZhbHVlIGlzIHNldCB0byBgZ3JvdXBgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcmQgcm9sZT1cImdyb3VwXCI+PC9pZ3gtY2FyZD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm9sZSA9ICdncm91cCc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYHR5cGVgIGF0dHJpYnV0ZSBvZiB0aGUgY2FyZC5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBpcyBzZXQgdG8gYGRlZmF1bHRgLiBZb3UgY2FuIG1ha2UgdGhlIGNhcmQgdXNlIHRoZVxuICAgICAqIG91dGxpbmVkIHN0eWxlIGJ5IHNldHRpbmcgdGhlIHZhbHVlIHRvIGBvdXRsaW5lZGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FyZCB0eXBlPVwib3V0bGluZWRcIj48L2lneC1jYXJkPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhcmQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR5cGU6IElneENhcmRUeXBlIHwgc3RyaW5nID0gSWd4Q2FyZFR5cGUuREVGQVVMVDtcblxuICAgIC8qKlxuICAgICAqIEEgZ2V0dGVyIHdoaWNoIHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIGNhcmQgdHlwZSBpcyBgb3V0bGluZWRgLlxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhcmQtLW91dGxpbmVkJylcbiAgICBnZXQgaXNPdXRsaW5lZENhcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IElneENhcmRUeXBlLk9VVExJTkVEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaG9yaXpvbnRhbGAgYXR0cmlidXRlIG9mIHRoZSBjYXJkLlxuICAgICAqIFNldHRpbmcgdGhpcyB0byBgdHJ1ZWAgd2lsbCBtYWtlIHRoZSBkaWZmZXJlbnQgY2FyZCBzZWN0aW9ucyBhbGlnbiBob3Jpem9udGFsbHksXG4gICAgICogZXNzZW50aWFsbHkgZmxpcHBpbmcgdGhlIGNhcmQgdG8gdGhlIHNpZGUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FyZCBbaG9yaXpvbnRhbF09XCJ0cnVlXCI+PC9pZ3gtY2FyZD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLS1ob3Jpem9udGFsJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBob3Jpem9udGFsID0gZmFsc2U7XG59XG5cbmV4cG9ydCBlbnVtIElneENhcmRBY3Rpb25zTGF5b3V0IHtcbiAgICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAgIEpVU1RJRlkgPSAnanVzdGlmeScsXG59XG5cbi8qKlxuICogSWd4Q2FyZEFjdGlvbnMgaXMgY29udGFpbmVyIGZvciB0aGUgY2FyZCBhY3Rpb25zLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdpZ3gtY2FyZC1hY3Rpb25zJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NhcmQtYWN0aW9ucy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FyZEFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBpc1ZlcnRpY2FsU2V0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KElneENhcmRDb21wb25lbnQpIHB1YmxpYyBjYXJkOiBJZ3hDYXJkQ29tcG9uZW50KSB7IH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGxheW91dCBzdHlsZSBvZiB0aGUgYWN0aW9ucy5cbiAgICAgKiBCeSBkZWZhdWx0IGljb25zIGFuZCBpY29uIGJ1dHRvbnMsIGFzIHdlbGwgYXMgcmVndWxhciBidXR0b25zXG4gICAgICogYXJlIHNwbGl0IGludG8gdHdvIGNvbnRhaW5lcnMsIHdoaWNoIGFyZSB0aGVuIHBvc2l0aW9uZWQgb24gYm90aCBlbmRzXG4gICAgICogb2YgdGhlIGNhcmQtYWN0aW9ucyBhcmVhLlxuICAgICAqIFlvdSBjYW4ganVzdGlmeSB0aGUgZWxlbWVudHMgaW4gdGhvc2UgZ3JvdXBzIHNvIHRoZXkgYXJlIHBvc2l0aW9uZWQgZXF1YWxseVxuICAgICAqIGZyb20gb25lIGFub3RoZXIgdGFraW5nIHVwIGFsbCB0aGUgc3BhY2UgYXZhaWxhYmxlIGFsb25nIHRoZSBjYXJkIGFjdGlvbnMgYXhpcy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkLWFjdGlvbnMgbGF5b3V0PVwianVzdGlmeVwiPjwvaWd4LWNhcmQtYWN0aW9ucz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLWFjdGlvbnMnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGxheW91dDogSWd4Q2FyZEFjdGlvbnNMYXlvdXQgfCBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2ZXJ0aWNhbCBhdHRyaWJ1dGUgb2YgdGhlIGFjdGlvbnMuXG4gICAgICogV2hlbiBzZXQgdG8gYHRydWVgIHRoZSBhY3Rpb25zIHdpbGwgYmUgbGF5ZWQgb3V0IHZlcnRpY2FsbHkuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FyZC1hY3Rpb25zLS12ZXJ0aWNhbCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmVydGljYWw6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBIGdldHRlciB0aGF0IHJldHVybnMgYHRydWVgIHdoZW4gdGhlIGxheW91dCBoYXMgYmVlblxuICAgICAqIHNldCB0byBganVzdGlmeWAuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FyZC1hY3Rpb25zLS1qdXN0aWZ5JylcbiAgICBnZXQgaXNKdXN0aWZ5TGF5b3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQgPT09IElneENhcmRBY3Rpb25zTGF5b3V0LkpVU1RJRlk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyBvcmRlciBvZiB0aGUgYnV0dG9ucyB0aGUgYWN0aW9ucyBhcmVhLlxuICAgICAqIEJ5IGRlZmF1bHQgYWxsIGljb25zL2ljb24gYnV0dG9ucyBhcmUgcGxhY2VkIGF0IHRoZSBlbmQgb2YgdGhlIGFjdGlvblxuICAgICAqIGFyZWEuIEFueSByZWd1bGFyIGJ1dHRvbnMoZmxhdCwgcmFpc2VkKSB3aWxsIGFwcGVhciBiZWZvcmUgdGhlIGljb25zL2ljb24gYnV0dG9uc1xuICAgICAqIHBsYWNlZCBpbiB0aGUgYWN0aW9ucyBhcmVhLlxuICAgICAqIElmIHlvdSB3YW50IHRvIHJldmVyc2UgdGhlaXIgcG9zaXRpb25zIHNvIHRoYXQgaWNvbnMgYXBwZWFyIGZpcnN0LCB1c2UgdGhlIGByZXZlcnNlYFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJkLWFjdGlvbnMgW3JldmVyc2VdPVwidHJ1ZVwiPjwvaWd4LWNhcmQtYWN0aW9ucz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYXJkLWFjdGlvbnMtLXJldmVyc2UnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJldmVyc2UgPSBmYWxzZTtcblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZlcnRpY2FsU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnZlcnRpY2FsID0gIXRoaXMuaXNWZXJ0aWNhbFNldCAmJiB0aGlzLmNhcmQuaG9yaXpvbnRhbDtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBJZ3hDYXJkQ29tcG9uZW50LFxuICAgICAgICBJZ3hDYXJkSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBJZ3hDYXJkTWVkaWFEaXJlY3RpdmUsXG4gICAgICAgIElneENhcmRDb250ZW50RGlyZWN0aXZlLFxuICAgICAgICBJZ3hDYXJkQWN0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgSWd4Q2FyZEZvb3RlckRpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2FyZEhlYWRlclRpdGxlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDYXJkSGVhZGVyU3VidGl0bGVEaXJlY3RpdmUsXG4gICAgICAgIElneENhcmRUaHVtYm5haWxEaXJlY3RpdmUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIElneENhcmRDb21wb25lbnQsXG4gICAgICAgIElneENhcmRIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIElneENhcmRNZWRpYURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2FyZENvbnRlbnREaXJlY3RpdmUsXG4gICAgICAgIElneENhcmRBY3Rpb25zQ29tcG9uZW50LFxuICAgICAgICBJZ3hDYXJkRm9vdGVyRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDYXJkSGVhZGVyVGl0bGVEaXJlY3RpdmUsXG4gICAgICAgIElneENhcmRIZWFkZXJTdWJ0aXRsZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2FyZFRodW1ibmFpbERpcmVjdGl2ZSxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElneEJ1dHRvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2FyZE1vZHVsZSB7IH1cbiJdfQ==
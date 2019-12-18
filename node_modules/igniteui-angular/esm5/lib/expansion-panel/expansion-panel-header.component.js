/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef, HostBinding, HostListener, Input, Host, EventEmitter, Output, ContentChild, Inject } from '@angular/core';
import { IgxExpansionPanelIconDirective } from './expansion-panel.directives';
import { IGX_EXPANSION_PANEL_COMPONENT } from './expansion-panel.common';
/** @enum {string} */
var ICON_POSITION = {
    LEFT: 'left',
    NONE: 'none',
    RIGHT: 'right',
};
export { ICON_POSITION };
var IgxExpansionPanelHeaderComponent = /** @class */ (function () {
    function IgxExpansionPanelHeaderComponent(panel, cdr, elementRef) {
        this.panel = panel;
        this.cdr = cdr;
        this.elementRef = elementRef;
        // properties section
        this._iconTemplate = false;
        /**
         * Sets/gets the `id` of the expansion panel header.
         * ```typescript
         * let panelHeaderId =  this.panel.header.id;
         * ```
         * \@memberof IgxExpansionPanelComponent
         */
        this.id = '';
        /**
         * Gets/sets the `aria-level` attribute of the header
         * Get
         * ```typescript
         *  const currentAriaLevel = this.panel.header.lv;
         * ```
         * Set
         * ```typescript
         *  this.panel.header.lv = '5';
         * ```
         * ```html
         *  <igx-expansion-panel-header [lv]="myCustomLevel"></igx-expansion-panel-header>
         * ```
         */
        this.lv = '3';
        /**
         * Gets/sets the `role` attribute of the header
         * Get
         * ```typescript
         *  const currentRole = this.panel.header.role;
         * ```
         * Set
         * ```typescript
         *  this.panel.header.role = '5';
         * ```
         * ```html
         *  <igx-expansion-panel-header [role]="'custom'"></igx-expansion-panel-header>
         * ```
         */
        this.role = 'heading';
        /**
         * Gets/sets the position of the expansion-panel-header expand/collapse icon
         * Accepts `left`, `right` or `none`
         * ```typescript
         *  const currentIconPosition = this.panel.header.iconPosition;
         * ```
         * Set
         * ```typescript
         *  this.panel.header.iconPosition = 'left';
         * ```
         * ```html
         *  <igx-expansion-panel-header [iconPosition]="'right'"></igx-expansion-panel-header>
         * ```
         */
        this.iconPosition = ICON_POSITION.LEFT;
        /**
         * Emitted whenever a user interacts with the header host
         * ```typescript
         *  handleInteraction(event: IExpansionPanelEventArgs) {
         *  ...
         * }
         * ```
         * ```html
         *  <igx-expansion-panel-header (onInteraction)="handleInteraction($event)">
         *      ...
         *  </igx-expansion-panel-header>
         * ```
         */
        this.onInteraction = new EventEmitter();
        /**
         * @hidden
         */
        this.cssClass = 'igx-expansion-panel__header';
        /**
         * Gets/sets the whether the header is disabled
         * When disabled, the header will not handle user events and will stop their propagation
         *
         * ```typescript
         *  const isDisabled = this.panel.header.disabled;
         * ```
         * Set
         * ```typescript
         *  this.panel.header.disabled = true;
         * ```
         * ```html
         *  <igx-expansion-panel-header [disabled]="true">
         *     ...
         *  </igx-expansion-panel-header>
         * ```
         */
        this.disabled = false;
        this.id = this.panel.id + "-header";
    }
    Object.defineProperty(IgxExpansionPanelHeaderComponent.prototype, "iconTemplate", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._iconTemplate;
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._iconTemplate = (/** @type {?} */ (val));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExpansionPanelHeaderComponent.prototype, "controls", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.panel.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExpansionPanelHeaderComponent.prototype, "isExpanded", {
        /**
        * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this.panel.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * @hidden
    */
    /**
     * @hidden
     * @param {?=} evt
     * @return {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.onAction = /**
     * @hidden
     * @param {?=} evt
     * @return {?}
     */
    function (evt) {
        if (this.disabled) {
            evt.stopPropagation();
            return;
        }
        this.onInteraction.emit({ event: evt, panel: this.panel });
        this.panel.toggle(evt);
        evt.preventDefault();
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.openPanel = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.altKey) {
            this.panel.expand(event);
            this.onInteraction.emit({ event: event, panel: this.panel });
        }
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.closePanel = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.altKey) {
            this.panel.collapse(event);
            this.onInteraction.emit({ event: event, panel: this.panel });
        }
    };
    Object.defineProperty(IgxExpansionPanelHeaderComponent.prototype, "iconPositionClass", {
        /**
        * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            switch (this.iconPosition) {
                case (ICON_POSITION.LEFT):
                    return "igx-expansion-panel__header-icon--start";
                case (ICON_POSITION.RIGHT):
                    return "igx-expansion-panel__header-icon--end";
                case (ICON_POSITION.NONE):
                    return "igx-expansion-panel__header-icon--none";
                default:
                    return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    IgxExpansionPanelHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-expansion-panel-header',
                    template: "<div class=\"igx-expansion-panel__header-inner\" tabindex=\"0\" role=\"button\" [attr.id]=\"id\"\n[attr.aria-disabled]=\"disabled\" [attr.aria-expanded]=\"isExpanded\" [attr.aria-controls]=\"controls\">\n    <div class=\"igx-expansion-panel__title-wrapper\">\n        <ng-content select=\"igx-expansion-panel-title\"></ng-content>\n        <ng-content select=\"igx-expansion-panel-description\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n    <div [class]=\"iconPositionClass\">\n        <ng-content *ngIf=\"iconTemplate\" select=\"igx-expansion-panel-icon\"></ng-content>\n        <igx-icon *ngIf=\"!iconTemplate\" fontSet=\"material\">\n            {{panel.collapsed? 'expand_more':'expand_less'}}\n        </igx-icon>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    IgxExpansionPanelHeaderComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Host }, { type: Inject, args: [IGX_EXPANSION_PANEL_COMPONENT,] }] },
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    IgxExpansionPanelHeaderComponent.propDecorators = {
        iconTemplate: [{ type: ContentChild, args: [IgxExpansionPanelIconDirective, { static: false },] }],
        lv: [{ type: HostBinding, args: ['attr.aria-level',] }, { type: Input }],
        role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }],
        iconPosition: [{ type: Input }],
        onInteraction: [{ type: Output }],
        cssClass: [{ type: HostBinding, args: ['class.igx-expansion-panel__header',] }],
        isExpanded: [{ type: HostBinding, args: ['class.igx-expansion-panel__header--expanded',] }],
        disabled: [{ type: Input }, { type: HostBinding, args: ['class.igx-expansion-panel--disabled',] }],
        onAction: [{ type: HostListener, args: ['keydown.Enter', ['$event'],] }, { type: HostListener, args: ['keydown.Space', ['$event'],] }, { type: HostListener, args: ['keydown.Spacebar', ['$event'],] }, { type: HostListener, args: ['click', ['$event'],] }],
        openPanel: [{ type: HostListener, args: ['keydown.Alt.ArrowDown', ['$event'],] }],
        closePanel: [{ type: HostListener, args: ['keydown.Alt.ArrowUp', ['$event'],] }]
    };
    return IgxExpansionPanelHeaderComponent;
}());
export { IgxExpansionPanelHeaderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxExpansionPanelHeaderComponent.prototype._iconTemplate;
    /**
     * Sets/gets the `id` of the expansion panel header.
     * ```typescript
     * let panelHeaderId =  this.panel.header.id;
     * ```
     * \@memberof IgxExpansionPanelComponent
     * @type {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.id;
    /**
     * Gets/sets the `aria-level` attribute of the header
     * Get
     * ```typescript
     *  const currentAriaLevel = this.panel.header.lv;
     * ```
     * Set
     * ```typescript
     *  this.panel.header.lv = '5';
     * ```
     * ```html
     *  <igx-expansion-panel-header [lv]="myCustomLevel"></igx-expansion-panel-header>
     * ```
     * @type {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.lv;
    /**
     * Gets/sets the `role` attribute of the header
     * Get
     * ```typescript
     *  const currentRole = this.panel.header.role;
     * ```
     * Set
     * ```typescript
     *  this.panel.header.role = '5';
     * ```
     * ```html
     *  <igx-expansion-panel-header [role]="'custom'"></igx-expansion-panel-header>
     * ```
     * @type {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.role;
    /**
     * Gets/sets the position of the expansion-panel-header expand/collapse icon
     * Accepts `left`, `right` or `none`
     * ```typescript
     *  const currentIconPosition = this.panel.header.iconPosition;
     * ```
     * Set
     * ```typescript
     *  this.panel.header.iconPosition = 'left';
     * ```
     * ```html
     *  <igx-expansion-panel-header [iconPosition]="'right'"></igx-expansion-panel-header>
     * ```
     * @type {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.iconPosition;
    /**
     * Emitted whenever a user interacts with the header host
     * ```typescript
     *  handleInteraction(event: IExpansionPanelEventArgs) {
     *  ...
     * }
     * ```
     * ```html
     *  <igx-expansion-panel-header (onInteraction)="handleInteraction($event)">
     *      ...
     *  </igx-expansion-panel-header>
     * ```
     * @type {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.onInteraction;
    /**
     * @hidden
     * @type {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.cssClass;
    /**
     * Gets/sets the whether the header is disabled
     * When disabled, the header will not handle user events and will stop their propagation
     *
     * ```typescript
     *  const isDisabled = this.panel.header.disabled;
     * ```
     * Set
     * ```typescript
     *  this.panel.header.disabled = true;
     * ```
     * ```html
     *  <igx-expansion-panel-header [disabled]="true">
     *     ...
     *  </igx-expansion-panel-header>
     * ```
     * @type {?}
     */
    IgxExpansionPanelHeaderComponent.prototype.disabled;
    /** @type {?} */
    IgxExpansionPanelHeaderComponent.prototype.panel;
    /** @type {?} */
    IgxExpansionPanelHeaderComponent.prototype.cdr;
    /** @type {?} */
    IgxExpansionPanelHeaderComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLElBQUksRUFDSixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUE0Qiw2QkFBNkIsRUFBeUIsTUFBTSwwQkFBMEIsQ0FBQzs7O0lBTXRILE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTtJQUNiLE9BQVEsT0FBTzs7O0FBSW5CO0lBOElJLDBDQUFrRSxLQUE0QixFQUFTLEdBQXNCLEVBQ3JILFVBQXNCO1FBRG9DLFVBQUssR0FBTCxLQUFLLENBQXVCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDckgsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7UUF6SXRCLGtCQUFhLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQVF2QixPQUFFLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7UUFpQ1IsT0FBRSxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1FBa0JULFNBQUksR0FBRyxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7OztRQXdCakIsaUJBQVksR0FBa0IsYUFBYSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUFnQmpELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7Ozs7UUFNNUQsYUFBUSxHQUFHLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWlCLGNBQzdCLEtBQUs7dUJBaUJMLFdBQVcsU0FBQyxXQUFXLGNBQ3ZCLEtBQUs7K0JBd0JMLEtBQUs7Z0NBZ0JMLE1BQU07MkJBTUwsV0FBVyxTQUFDLG1DQUFtQzs2QkFNL0MsV0FBVyxTQUFDLDZDQUE2QzsyQkFzQjFELEtBQUssWUFDTCxXQUFXLFNBQUMscUNBQXFDOzJCQVdoRCxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3hDLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDeEMsWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzNDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBWWpDLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFTL0MsWUFBWSxTQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQXVCcEQsdUNBQUM7Q0FBQSxBQXJNRCxJQXFNQztTQWpNWSxnQ0FBZ0M7Ozs7OztJQUV6Qyx5REFBOEI7Ozs7Ozs7OztJQVE5Qiw4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7OztJQStCZiw4Q0FFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQmhCLGdEQUV3Qjs7Ozs7Ozs7Ozs7Ozs7OztJQXVCeEIsd0RBQ3dEOzs7Ozs7Ozs7Ozs7Ozs7SUFleEQseURBQ29FOzs7OztJQUtuRSxvREFDZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEyQmpELG9EQUV3Qjs7SUFFWixpREFBa0Y7O0lBQUUsK0NBQTZCOztJQUM1SCxzREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBIb3N0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBPdXRwdXQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEV4cGFuc2lvblBhbmVsSWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgSUV4cGFuc2lvblBhbmVsRXZlbnRBcmdzLCBJR1hfRVhQQU5TSU9OX1BBTkVMX0NPTVBPTkVOVCwgSWd4RXhwYW5zaW9uUGFuZWxCYXNlIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwuY29tbW9uJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBlbnVtIElDT05fUE9TSVRJT04ge1xuICAgIExFRlQgPSAnbGVmdCcsXG4gICAgTk9ORSA9ICdub25lJyxcbiAgICBSSUdIVCA9ICdyaWdodCdcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneEV4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50IHtcbiAgICAgLy8gcHJvcGVydGllcyBzZWN0aW9uXG4gICAgcHJpdmF0ZSBfaWNvblRlbXBsYXRlID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSBleHBhbnNpb24gcGFuZWwgaGVhZGVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcGFuZWxIZWFkZXJJZCA9ICB0aGlzLnBhbmVsLmhlYWRlci5pZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhwYW5zaW9uUGFuZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgaWQgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneEV4cGFuc2lvblBhbmVsSWNvbkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHNldCBpY29uVGVtcGxhdGUodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5faWNvblRlbXBsYXRlID0gPGJvb2xlYW4+dmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGljb25UZW1wbGF0ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvblRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgYGFyaWEtbGV2ZWxgIGF0dHJpYnV0ZSBvZiB0aGUgaGVhZGVyXG4gICAgICogR2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBjb25zdCBjdXJyZW50QXJpYUxldmVsID0gdGhpcy5wYW5lbC5oZWFkZXIubHY7XG4gICAgICogYGBgXG4gICAgICogU2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICB0aGlzLnBhbmVsLmhlYWRlci5sdiA9ICc1JztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciBbbHZdPVwibXlDdXN0b21MZXZlbFwiPjwvaWd4LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGV2ZWwnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGx2ID0gJzMnO1xuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBgcm9sZWAgYXR0cmlidXRlIG9mIHRoZSBoZWFkZXJcbiAgICAgKiBHZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IGN1cnJlbnRSb2xlID0gdGhpcy5wYW5lbC5oZWFkZXIucm9sZTtcbiAgICAgKiBgYGBcbiAgICAgKiBTZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIHRoaXMucGFuZWwuaGVhZGVyLnJvbGUgPSAnNSc7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgW3JvbGVdPVwiJ2N1c3RvbSdcIj48L2lneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByb2xlID0gJ2hlYWRpbmcnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29udHJvbHMgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhbmVsLmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgZXhwYW5kL2NvbGxhcHNlIGljb25cbiAgICAgKiBBY2NlcHRzIGBsZWZ0YCwgYHJpZ2h0YCBvciBgbm9uZWBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IGN1cnJlbnRJY29uUG9zaXRpb24gPSB0aGlzLnBhbmVsLmhlYWRlci5pY29uUG9zaXRpb247XG4gICAgICogYGBgXG4gICAgICogU2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICB0aGlzLnBhbmVsLmhlYWRlci5pY29uUG9zaXRpb24gPSAnbGVmdCc7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgW2ljb25Qb3NpdGlvbl09XCIncmlnaHQnXCI+PC9pZ3gtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpY29uUG9zaXRpb246IElDT05fUE9TSVRJT04gPSBJQ09OX1BPU0lUSU9OLkxFRlQ7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW5ldmVyIGEgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgaGVhZGVyIGhvc3RcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGhhbmRsZUludGVyYWN0aW9uKGV2ZW50OiBJRXhwYW5zaW9uUGFuZWxFdmVudEFyZ3MpIHtcbiAgICAgKiAgLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIChvbkludGVyYWN0aW9uKT1cImhhbmRsZUludGVyYWN0aW9uKCRldmVudClcIj5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICA8L2lneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkludGVyYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxJRXhwYW5zaW9uUGFuZWxFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWV4cGFuc2lvbi1wYW5lbF9faGVhZGVyJylcbiAgICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1leHBhbnNpb24tcGFuZWxfX2hlYWRlcic7XG5cbiAgICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1leHBhbnNpb24tcGFuZWxfX2hlYWRlci0tZXhwYW5kZWQnKVxuICAgICBwdWJsaWMgZ2V0IGlzRXhwYW5kZWQgKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnBhbmVsLmNvbGxhcHNlZDtcbiAgICAgICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgd2hldGhlciB0aGUgaGVhZGVyIGlzIGRpc2FibGVkXG4gICAgICogV2hlbiBkaXNhYmxlZCwgdGhlIGhlYWRlciB3aWxsIG5vdCBoYW5kbGUgdXNlciBldmVudHMgYW5kIHdpbGwgc3RvcCB0aGVpciBwcm9wYWdhdGlvblxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5wYW5lbC5oZWFkZXIuZGlzYWJsZWQ7XG4gICAgICogYGBgXG4gICAgICogU2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICB0aGlzLnBhbmVsLmhlYWRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgW2Rpc2FibGVkXT1cInRydWVcIj5cbiAgICAgKiAgICAgLi4uXG4gICAgICogIDwvaWd4LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1leHBhbnNpb24tcGFuZWwtLWRpc2FibGVkJylcbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKEBIb3N0KCkgQEluamVjdChJR1hfRVhQQU5TSU9OX1BBTkVMX0NPTVBPTkVOVCkgcHVibGljIHBhbmVsOiBJZ3hFeHBhbnNpb25QYW5lbEJhc2UsIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgICAgICAgdGhpcy5pZCA9IGAke3RoaXMucGFuZWwuaWR9LWhlYWRlcmA7XG4gICAgIH1cblxuICAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uRW50ZXInLCBbJyRldmVudCddKVxuICAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLlNwYWNlJywgWyckZXZlbnQnXSlcbiAgICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5TcGFjZWJhcicsIFsnJGV2ZW50J10pXG4gICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICAgcHVibGljIG9uQWN0aW9uKGV2dD86IEV2ZW50KSB7XG4gICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5vbkludGVyYWN0aW9uLmVtaXQoeyBldmVudDogZXZ0LCBwYW5lbDogdGhpcy5wYW5lbCB9KTtcbiAgICAgICAgIHRoaXMucGFuZWwudG9nZ2xlKGV2dCk7XG4gICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BbHQuQXJyb3dEb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb3BlblBhbmVsKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWwuZXhwYW5kKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMub25JbnRlcmFjdGlvbi5lbWl0KHsgZXZlbnQ6IGV2ZW50LCBwYW5lbDogdGhpcy5wYW5lbCB9KTtcbiAgICAgICAgfVxuICAgICB9XG5cbiAgICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQWx0LkFycm93VXAnLCBbJyRldmVudCddKVxuICAgICBwdWJsaWMgY2xvc2VQYW5lbChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsLmNvbGxhcHNlKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMub25JbnRlcmFjdGlvbi5lbWl0KHsgZXZlbnQ6IGV2ZW50LCBwYW5lbDogdGhpcy5wYW5lbCB9KTtcbiAgICAgICAgfVxuICAgICB9XG5cbiAgICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgICBwdWJsaWMgZ2V0IGljb25Qb3NpdGlvbkNsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5pY29uUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgKElDT05fUE9TSVRJT04uTEVGVCk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBpZ3gtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXItaWNvbi0tc3RhcnRgO1xuICAgICAgICAgICAgY2FzZSAoSUNPTl9QT1NJVElPTi5SSUdIVCk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBpZ3gtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXItaWNvbi0tZW5kYDtcbiAgICAgICAgICAgIGNhc2UgKElDT05fUE9TSVRJT04uTk9ORSk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBpZ3gtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXItaWNvbi0tbm9uZWA7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICB9XG59XG4iXX0=
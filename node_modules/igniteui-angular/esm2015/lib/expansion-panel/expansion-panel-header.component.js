/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef, HostBinding, HostListener, Input, Host, EventEmitter, Output, ContentChild, Inject } from '@angular/core';
import { IgxExpansionPanelIconDirective } from './expansion-panel.directives';
import { IGX_EXPANSION_PANEL_COMPONENT } from './expansion-panel.common';
/** @enum {string} */
const ICON_POSITION = {
    LEFT: 'left',
    NONE: 'none',
    RIGHT: 'right',
};
export { ICON_POSITION };
export class IgxExpansionPanelHeaderComponent {
    /**
     * @param {?} panel
     * @param {?} cdr
     * @param {?} elementRef
     */
    constructor(panel, cdr, elementRef) {
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
        this.id = `${this.panel.id}-header`;
    }
    /**
     * @hidden
     * @param {?} val
     * @return {?}
     */
    set iconTemplate(val) {
        this._iconTemplate = (/** @type {?} */ (val));
    }
    /**
     * @hidden
     * @return {?}
     */
    get iconTemplate() {
        return this._iconTemplate;
    }
    /**
     * @hidden
     * @return {?}
     */
    get controls() {
        return this.panel.id;
    }
    /**
     * @hidden
     * @return {?}
     */
    get isExpanded() {
        return !this.panel.collapsed;
    }
    /**
     * @hidden
     * @param {?=} evt
     * @return {?}
     */
    onAction(evt) {
        if (this.disabled) {
            evt.stopPropagation();
            return;
        }
        this.onInteraction.emit({ event: evt, panel: this.panel });
        this.panel.toggle(evt);
        evt.preventDefault();
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    openPanel(event) {
        if (event.altKey) {
            this.panel.expand(event);
            this.onInteraction.emit({ event: event, panel: this.panel });
        }
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    closePanel(event) {
        if (event.altKey) {
            this.panel.collapse(event);
            this.onInteraction.emit({ event: event, panel: this.panel });
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    get iconPositionClass() {
        switch (this.iconPosition) {
            case (ICON_POSITION.LEFT):
                return `igx-expansion-panel__header-icon--start`;
            case (ICON_POSITION.RIGHT):
                return `igx-expansion-panel__header-icon--end`;
            case (ICON_POSITION.NONE):
                return `igx-expansion-panel__header-icon--none`;
            default:
                return '';
        }
    }
}
IgxExpansionPanelHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-expansion-panel-header',
                template: "<div class=\"igx-expansion-panel__header-inner\" tabindex=\"0\" role=\"button\" [attr.id]=\"id\"\n[attr.aria-disabled]=\"disabled\" [attr.aria-expanded]=\"isExpanded\" [attr.aria-controls]=\"controls\">\n    <div class=\"igx-expansion-panel__title-wrapper\">\n        <ng-content select=\"igx-expansion-panel-title\"></ng-content>\n        <ng-content select=\"igx-expansion-panel-description\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n    <div [class]=\"iconPositionClass\">\n        <ng-content *ngIf=\"iconTemplate\" select=\"igx-expansion-panel-icon\"></ng-content>\n        <igx-icon *ngIf=\"!iconTemplate\" fontSet=\"material\">\n            {{panel.collapsed? 'expand_more':'expand_less'}}\n        </igx-icon>\n    </div>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxExpansionPanelHeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Host }, { type: Inject, args: [IGX_EXPANSION_PANEL_COMPONENT,] }] },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLElBQUksRUFDSixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUE0Qiw2QkFBNkIsRUFBeUIsTUFBTSwwQkFBMEIsQ0FBQzs7O0lBTXRILE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTtJQUNiLE9BQVEsT0FBTzs7O0FBUW5CLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7OztJQTBJekMsWUFBa0UsS0FBNEIsRUFBUyxHQUFzQixFQUNySCxVQUFzQjtRQURvQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3JILGVBQVUsR0FBVixVQUFVLENBQVk7O1FBekl0QixrQkFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7UUFRdkIsT0FBRSxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1FBaUNSLE9BQUUsR0FBRyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7OztRQWtCVCxTQUFJLEdBQUcsU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7UUF3QmpCLGlCQUFZLEdBQWtCLGFBQWEsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7O1FBZ0JqRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDOzs7O1FBTTVELGFBQVEsR0FBRyw2QkFBNkIs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QkFXaEQsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUN4QyxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3hDLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMzQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQVlqQyxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBUy9DLFlBQVksU0FBQyxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQXhLaEQseURBQThCOzs7Ozs7Ozs7SUFROUIsOENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7SUErQmYsOENBRWdCOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JoQixnREFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QnhCLHdEQUN3RDs7Ozs7Ozs7Ozs7Ozs7O0lBZXhELHlEQUNvRTs7Ozs7SUFLbkUsb0RBQ2dEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkJqRCxvREFFd0I7O0lBRVosaURBQWtGOztJQUFFLCtDQUE2Qjs7SUFDNUgsc0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgSG9zdCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT3V0cHV0LFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hFeHBhbnNpb25QYW5lbEljb25EaXJlY3RpdmUgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IElFeHBhbnNpb25QYW5lbEV2ZW50QXJncywgSUdYX0VYUEFOU0lPTl9QQU5FTF9DT01QT05FTlQsIElneEV4cGFuc2lvblBhbmVsQmFzZSB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLmNvbW1vbic7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZW51bSBJQ09OX1BPU0lUSU9OIHtcbiAgICBMRUZUID0gJ2xlZnQnLFxuICAgIE5PTkUgPSAnbm9uZScsXG4gICAgUklHSFQgPSAncmlnaHQnXG59XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tcGFuZWwtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeHBhbnNpb25QYW5lbEhlYWRlckNvbXBvbmVudCB7XG4gICAgIC8vIHByb3BlcnRpZXMgc2VjdGlvblxuICAgIHByaXZhdGUgX2ljb25UZW1wbGF0ZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgZXhwYW5zaW9uIHBhbmVsIGhlYWRlci5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHBhbmVsSGVhZGVySWQgPSAgdGhpcy5wYW5lbC5oZWFkZXIuaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGlkID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hFeHBhbnNpb25QYW5lbEljb25EaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBzZXQgaWNvblRlbXBsYXRlKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuX2ljb25UZW1wbGF0ZSA9IDxib29sZWFuPnZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBpY29uVGVtcGxhdGUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb25UZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIGBhcmlhLWxldmVsYCBhdHRyaWJ1dGUgb2YgdGhlIGhlYWRlclxuICAgICAqIEdldFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgY29uc3QgY3VycmVudEFyaWFMZXZlbCA9IHRoaXMucGFuZWwuaGVhZGVyLmx2O1xuICAgICAqIGBgYFxuICAgICAqIFNldFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgdGhpcy5wYW5lbC5oZWFkZXIubHYgPSAnNSc7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgW2x2XT1cIm15Q3VzdG9tTGV2ZWxcIj48L2lneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxldmVsJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsdiA9ICczJztcblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgYHJvbGVgIGF0dHJpYnV0ZSBvZiB0aGUgaGVhZGVyXG4gICAgICogR2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBjb25zdCBjdXJyZW50Um9sZSA9IHRoaXMucGFuZWwuaGVhZGVyLnJvbGU7XG4gICAgICogYGBgXG4gICAgICogU2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICB0aGlzLnBhbmVsLmhlYWRlci5yb2xlID0gJzUnO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIFtyb2xlXT1cIidjdXN0b20nXCI+PC9pZ3gtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm9sZSA9ICdoZWFkaW5nJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRyb2xzICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wYW5lbC5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBleHBhbnNpb24tcGFuZWwtaGVhZGVyIGV4cGFuZC9jb2xsYXBzZSBpY29uXG4gICAgICogQWNjZXB0cyBgbGVmdGAsIGByaWdodGAgb3IgYG5vbmVgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBjb25zdCBjdXJyZW50SWNvblBvc2l0aW9uID0gdGhpcy5wYW5lbC5oZWFkZXIuaWNvblBvc2l0aW9uO1xuICAgICAqIGBgYFxuICAgICAqIFNldFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgdGhpcy5wYW5lbC5oZWFkZXIuaWNvblBvc2l0aW9uID0gJ2xlZnQnO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIFtpY29uUG9zaXRpb25dPVwiJ3JpZ2h0J1wiPjwvaWd4LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWNvblBvc2l0aW9uOiBJQ09OX1BPU0lUSU9OID0gSUNPTl9QT1NJVElPTi5MRUZUO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuZXZlciBhIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIGhlYWRlciBob3N0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBoYW5kbGVJbnRlcmFjdGlvbihldmVudDogSUV4cGFuc2lvblBhbmVsRXZlbnRBcmdzKSB7XG4gICAgICogIC4uLlxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAob25JbnRlcmFjdGlvbik9XCJoYW5kbGVJbnRlcmFjdGlvbigkZXZlbnQpXCI+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgPC9pZ3gtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25JbnRlcmFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8SUV4cGFuc2lvblBhbmVsRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1leHBhbnNpb24tcGFuZWxfX2hlYWRlcicpXG4gICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXInO1xuXG4gICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXItLWV4cGFuZGVkJylcbiAgICAgcHVibGljIGdldCBpc0V4cGFuZGVkICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5wYW5lbC5jb2xsYXBzZWQ7XG4gICAgICAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIHdoZXRoZXIgdGhlIGhlYWRlciBpcyBkaXNhYmxlZFxuICAgICAqIFdoZW4gZGlzYWJsZWQsIHRoZSBoZWFkZXIgd2lsbCBub3QgaGFuZGxlIHVzZXIgZXZlbnRzIGFuZCB3aWxsIHN0b3AgdGhlaXIgcHJvcGFnYXRpb25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMucGFuZWwuaGVhZGVyLmRpc2FibGVkO1xuICAgICAqIGBgYFxuICAgICAqIFNldFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgdGhpcy5wYW5lbC5oZWFkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIFtkaXNhYmxlZF09XCJ0cnVlXCI+XG4gICAgICogICAgIC4uLlxuICAgICAqICA8L2lneC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZXhwYW5zaW9uLXBhbmVsLS1kaXNhYmxlZCcpXG4gICAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihASG9zdCgpIEBJbmplY3QoSUdYX0VYUEFOU0lPTl9QQU5FTF9DT01QT05FTlQpIHB1YmxpYyBwYW5lbDogSWd4RXhwYW5zaW9uUGFuZWxCYXNlLCBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgIHRoaXMuaWQgPSBgJHt0aGlzLnBhbmVsLmlkfS1oZWFkZXJgO1xuICAgICB9XG5cbiAgICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkVudGVyJywgWyckZXZlbnQnXSlcbiAgICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5TcGFjZScsIFsnJGV2ZW50J10pXG4gICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uU3BhY2ViYXInLCBbJyRldmVudCddKVxuICAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgIHB1YmxpYyBvbkFjdGlvbihldnQ/OiBFdmVudCkge1xuICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMub25JbnRlcmFjdGlvbi5lbWl0KHsgZXZlbnQ6IGV2dCwgcGFuZWw6IHRoaXMucGFuZWwgfSk7XG4gICAgICAgICB0aGlzLnBhbmVsLnRvZ2dsZShldnQpO1xuICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQWx0LkFycm93RG93bicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9wZW5QYW5lbChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsLmV4cGFuZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLm9uSW50ZXJhY3Rpb24uZW1pdCh7IGV2ZW50OiBldmVudCwgcGFuZWw6IHRoaXMucGFuZWwgfSk7XG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFsdC5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgICAgcHVibGljIGNsb3NlUGFuZWwoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbC5jb2xsYXBzZShldmVudCk7XG4gICAgICAgICAgICB0aGlzLm9uSW50ZXJhY3Rpb24uZW1pdCh7IGV2ZW50OiBldmVudCwgcGFuZWw6IHRoaXMucGFuZWwgfSk7XG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICAgcHVibGljIGdldCBpY29uUG9zaXRpb25DbGFzcygpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaWNvblBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIChJQ09OX1BPU0lUSU9OLkxFRlQpOlxuICAgICAgICAgICAgICAgIHJldHVybiBgaWd4LWV4cGFuc2lvbi1wYW5lbF9faGVhZGVyLWljb24tLXN0YXJ0YDtcbiAgICAgICAgICAgIGNhc2UgKElDT05fUE9TSVRJT04uUklHSFQpOlxuICAgICAgICAgICAgICAgIHJldHVybiBgaWd4LWV4cGFuc2lvbi1wYW5lbF9faGVhZGVyLWljb24tLWVuZGA7XG4gICAgICAgICAgICBjYXNlIChJQ09OX1BPU0lUSU9OLk5PTkUpOlxuICAgICAgICAgICAgICAgIHJldHVybiBgaWd4LWV4cGFuc2lvbi1wYW5lbF9faGVhZGVyLWljb24tLW5vbmVgO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgfVxufVxuIl19
import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { IExpansionPanelEventArgs, IgxExpansionPanelBase } from './expansion-panel.common';
/**
 * @hidden
 */
export declare enum ICON_POSITION {
    LEFT = "left",
    NONE = "none",
    RIGHT = "right"
}
export declare class IgxExpansionPanelHeaderComponent {
    panel: IgxExpansionPanelBase;
    cdr: ChangeDetectorRef;
    elementRef: ElementRef;
    private _iconTemplate;
    /**
     * Sets/gets the `id` of the expansion panel header.
     * ```typescript
     * let panelHeaderId =  this.panel.header.id;
     * ```
     * @memberof IgxExpansionPanelComponent
     */
    id: string;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    iconTemplate: any;
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
    lv: string;
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
    role: string;
    /**
     * @hidden
     */
    readonly controls: string;
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
    iconPosition: ICON_POSITION;
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
    onInteraction: EventEmitter<IExpansionPanelEventArgs>;
    /**
     * @hidden
     */
    cssClass: string;
    /**
    * @hidden
    */
    readonly isExpanded: boolean;
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
    disabled: boolean;
    constructor(panel: IgxExpansionPanelBase, cdr: ChangeDetectorRef, elementRef: ElementRef);
    /**
    * @hidden
    */
    onAction(evt?: Event): void;
    /** @hidden @internal */
    openPanel(event: KeyboardEvent): void;
    /** @hidden @internal */
    closePanel(event: KeyboardEvent): void;
    /**
    * @hidden
    */
    readonly iconPositionClass: string;
}

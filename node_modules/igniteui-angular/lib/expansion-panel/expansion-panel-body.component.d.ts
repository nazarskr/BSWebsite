import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { IgxExpansionPanelBase } from './expansion-panel.common';
export declare class IgxExpansionPanelBodyComponent {
    panel: IgxExpansionPanelBase;
    element: ElementRef;
    cdr: ChangeDetectorRef;
    private _labelledBy;
    private _label;
    constructor(panel: IgxExpansionPanelBase, element: ElementRef, cdr: ChangeDetectorRef);
    /**
     * @hidden
     */
    cssClass: string;
    /**
     * Gets the `aria-label` attribute of the panel body
     * Defaults to the panel id with '-region' in the end;
     * Get
     * ```typescript
     *  const currentLabel = this.panel.body.label;
     * ```
     */
    /**
    * Sets the `aria-label` attribute of the panel body
    * ```typescript
    *  this.panel.body.label = 'my-custom-label';
    * ```
    * ```html
    *  <igx-expansion-panel-body [label]="'my-custom-label'"></igx-expansion-panel-body>
    * ```
    */
    label: string;
    /**
     * Gets the `aria-labelledby` attribute of the panel body
     * Defaults to the panel header id;
     * Get
     * ```typescript
     *  const currentLabel = this.panel.body.labelledBy;
     * ```
     */
    /**
    * Sets the `aria-labelledby` attribute of the panel body
    * ```typescript
    *  this.panel.body.labelledBy = 'my-custom-id';
    * ```
    * ```html
    *  <igx-expansion-panel-body [labelledBy]="'my-custom-id'"></igx-expansion-panel-body>
    * ```
    */
    labelledBy: string;
    /**
     * Gets/sets the `role` attribute of the panel body
     * Default is 'region';
     * Get
     * ```typescript
     *  const currentRole = this.panel.body.role;
     * ```
     * Set
     * ```typescript
     *  this.panel.body.role = 'content';
     * ```
     * ```html
     *  <igx-expansion-panel-body [role]="'custom'"></igx-expansion-panel-body>
     * ```
     */
    role: string;
}

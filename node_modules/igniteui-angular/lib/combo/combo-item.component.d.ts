import { ElementRef, DoCheck } from '@angular/core';
import { IgxDropDownItemComponent } from '../drop-down/drop-down-item.component';
import { IDropDownBase, Navigate } from '../drop-down/drop-down.common';
import { IgxComboAPIService } from './combo.api';
import { IgxSelectionAPIService } from '../core/selection';
/** @hidden */
export declare class IgxComboItemComponent extends IgxDropDownItemComponent implements DoCheck {
    protected comboAPI: IgxComboAPIService;
    protected dropDown: IDropDownBase;
    protected elementRef: ElementRef;
    protected selection: IgxSelectionAPIService;
    /**
     * Gets the height of a list item
     * @hidden
     */
    itemHeight: string;
    /**
     * @hidden
     */
    readonly itemID: any;
    /**
     * @hidden
     */
    readonly comboID: string;
    /**
     * @hidden
     * @internal
     */
    readonly disableTransitions: boolean;
    constructor(comboAPI: IgxComboAPIService, dropDown: IDropDownBase, elementRef: ElementRef, selection: IgxSelectionAPIService);
    /**
     * @hidden
     */
    selected: boolean;
    /**
     * @hidden
     */
    isVisible(direction: Navigate): boolean;
    clicked(event: any): void;
    /**
     * @hidden
     * @internal
     * The event that is prevented is the click on the checkbox label element.
     * That is the only visible element that a user can interact with.
     * The click propagates to the host and the preventDefault is to stop it from
     * switching focus to the input it's base on.
     * The toggle happens in an internal handler in the drop-down on the next task queue cycle.
     */
    disableCheck(event: MouseEvent): void;
    ngDoCheck(): void;
}

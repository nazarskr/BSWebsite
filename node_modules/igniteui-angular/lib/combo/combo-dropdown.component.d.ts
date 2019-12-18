import { ChangeDetectorRef, ElementRef, QueryList, OnDestroy, AfterViewInit } from '@angular/core';
import { IgxComboBase } from './combo.common';
import { IDropDownBase } from '../drop-down/drop-down.common';
import { IgxDropDownComponent } from '../drop-down/drop-down.component';
import { DropDownActionKey } from '../drop-down/drop-down.common';
import { IgxComboAPIService } from './combo.api';
import { IgxDropDownItemBase } from '../drop-down/drop-down-item.base';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxComboItemComponent } from './combo-item.component';
import { IDisplayDensityOptions } from '../core/density';
/** @hidden */
export declare class IgxComboDropDownComponent extends IgxDropDownComponent implements IDropDownBase, OnDestroy, AfterViewInit {
    protected elementRef: ElementRef;
    protected cdr: ChangeDetectorRef;
    protected selection: IgxSelectionAPIService;
    combo: IgxComboBase;
    protected comboAPI: IgxComboAPIService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, selection: IgxSelectionAPIService, combo: IgxComboBase, comboAPI: IgxComboAPIService, _displayDensityOptions: IDisplayDensityOptions);
    protected readonly scrollContainer: any;
    protected readonly isScrolledToLast: boolean;
    protected readonly lastVisibleIndex: number;
    /**
     * @hidden
     * @internal
     */
    children: QueryList<IgxDropDownItemBase>;
    /**
     * @hidden @internal
     */
    onFocus(): void;
    /**
     * @hidden @internal
     */
    onBlur(evt?: any): void;
    /**
     * @hidden @internal
     */
    onToggleOpened(): void;
    /**
     * @hidden
     */
    navigateFirst(): void;
    /**
     * @hidden
     */
    navigatePrev(): void;
    /**
     * @hidden
     */
    navigateNext(): void;
    /**
     * @hidden @internal
     */
    selectItem(item: IgxDropDownItemBase): void;
    private focusAddItemButton;
    protected scrollToHiddenItem(newItem: any): void;
    protected scrollHandler: () => void;
    protected readonly sortedChildren: IgxDropDownItemBase[];
    /**
     * Get all non-header items
     *
     * ```typescript
     * let myDropDownItems = this.dropdown.items;
     * ```
     */
    readonly items: IgxComboItemComponent[];
    /**
     * @hidden @internal
     */
    updateScrollPosition(): void;
    /**
     * @hidden @internal
     */
    onItemActionKey(key: DropDownActionKey): void;
    private handleEnter;
    private handleSpace;
    private isAddItemFocused;
    ngAfterViewInit(): void;
    /**
     *@hidden @internal
     */
    ngOnDestroy(): void;
}

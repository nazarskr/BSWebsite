import { ElementRef, QueryList, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Navigate, ISelectionEventArgs } from './drop-down.common';
import { IDropDownList } from './drop-down.common';
import { DropDownActionKey } from './drop-down.common';
import { IgxDropDownItemBase } from './drop-down-item.base';
import { DisplayDensityBase, IDisplayDensityOptions } from '../core/density';
/**
 * An abstract class, defining a drop-down component, with:
 * Properties for display styles and classes
 * A collection items of type `IgxDropDownItemBase`
 * Properties and methods for navigating (highlighting/focusing) items from the collection
 * Properties and methods for selecting items from the collection
 */
export declare abstract class IgxDropDownBase extends DisplayDensityBase implements IDropDownList {
    protected elementRef: ElementRef;
    protected cdr: ChangeDetectorRef;
    protected _displayDensityOptions: IDisplayDensityOptions;
    protected _width: any;
    protected _height: any;
    protected _focusedItem: any;
    protected _id: string;
    /**
     * Get dropdown's html element of it scroll container
     */
    protected readonly scrollContainer: any;
    /**
     * @hidden
     * @internal
     */
    children: QueryList<IgxDropDownItemBase>;
    /**
     * Emitted when item selection is changing, before the selection completes
     *
     * ```html
     * <igx-drop-down (onSelection)='handleSelection()'></igx-drop-down>
     * ```
     */
    onSelection: EventEmitter<ISelectionEventArgs>;
    /**
     *  Gets/Sets the width of the drop down
     *
     * ```typescript
     * // get
     * let myDropDownCurrentWidth = this.dropdown.width;
     * ```
     * ```html
     * <!--set-->
     * <igx-drop-down [width]='160px'></igx-drop-down>
     * ```
     */
    width: string;
    /**
     * Gets/Sets the height of the drop down
     *
     * ```typescript
     * // get
     * let myDropDownCurrentHeight = this.dropdown.height;
     * ```
     * ```html
     * <!--set-->
     * <igx-drop-down [height]='400px'></igx-drop-down>
     * ```
     */
    height: string;
    /**
     * Gets/Sets the drop down's id
     *
     * ```typescript
     * // get
     * let myDropDownCurrentId = this.dropdown.id;
     * ```
     * ```html
     * <!--set-->
     * <igx-drop-down [id]='newDropDownId'></igx-drop-down>
     * ```
     */
    id: string;
    /**
     * Gets/Sets the drop down's container max height.
     *
     * ```typescript
     * // get
     * let maxHeight = this.dropdown.maxHeight;
     * ```
     * ```html
     * <!--set-->
     * <igx-drop-down [maxHeight]='200px'></igx-drop-down>
     * ```
     */
    maxHeight: any;
    /**
     * @hidden @internal
     */
    cssClass: boolean;
    /**
     * Get all non-header items
     *
     * ```typescript
     * let myDropDownItems = this.dropdown.items;
     * ```
     */
    readonly items: IgxDropDownItemBase[];
    /**
     * Get all header items
     *
     * ```typescript
     * let myDropDownHeaderItems = this.dropdown.headers;
     * ```
     */
    readonly headers: IgxDropDownItemBase[];
    /**
     * Get dropdown html element
     *
     * ```typescript
     * let myDropDownElement = this.dropdown.element;
     * ```
     */
    readonly element: any;
    /**
     * Gets if the dropdown is collapsed
     */
    abstract collapsed: boolean;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, _displayDensityOptions: IDisplayDensityOptions);
    /** Keydown Handler */
    onItemActionKey(key: DropDownActionKey, event?: Event): void;
    /**
     * Emits onSelection with the target item & event
     * @hidden @internal
     * @param newSelection the item selected
     * @param event the event that triggered the call
     */
    selectItem(newSelection?: IgxDropDownItemBase, event?: Event): void;
    /**
     * @hidden @internal
     */
    /**
    * @hidden @internal
    */
    focusedItem: IgxDropDownItemBase;
    protected navigate(direction: Navigate, currentIndex?: number): void;
    protected getNearestSiblingFocusableItemIndex(startIndex: number, direction: Navigate): number;
    /**
     * Navigates to the item on the specified index
     * @param newIndex number - the index of the item in the `items` collection
     */
    navigateItem(newIndex: number): void;
    /**
     * @hidden @internal
     */
    navigateFirst(): void;
    /**
     * @hidden @internal
     */
    navigateLast(): void;
    /**
     * @hidden @internal
     */
    navigateNext(): void;
    /**
     * @hidden @internal
     */
    navigatePrev(): void;
    protected scrollToHiddenItem(newItem: IgxDropDownItemBase): void;
}

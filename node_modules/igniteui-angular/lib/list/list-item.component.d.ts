import { ElementRef, Renderer2 } from '@angular/core';
import { IgxListPanState, IListChild, IgxListBase } from './list.common';
/**
 * The Ignite UI List Item component is a container intended for row items in the Ignite UI for Angular List component.
 *
 * Example:
 * ```html
 * <igx-list>
 *   <igx-list-item isHeader="true">Contacts</igx-list-item>
 *   <igx-list-item *ngFor="let contact of contacts">
 *     <span class="name">{{ contact.name }}</span>
 *     <span class="phone">{{ contact.phone }}</span>
 *   </igx-list-item>
 * </igx-list>
 * ```
 */
export declare class IgxListItemComponent implements IListChild {
    list: IgxListBase;
    private elementRef;
    private _renderer;
    /**
     *@hidden
     */
    private _panState;
    /**
     *@hidden
     */
    private panOffset;
    /**
     * @hidden
     */
    private _index;
    /**
     *@hidden
     */
    private lastPanDir;
    /**
     * Provides a reference to the template's base element shown when left panning a list item.
     * ```typescript
     * const leftPanTmpl = this.listItem.leftPanningTemplateElement;
     * ```
     */
    leftPanningTemplateElement: any;
    /**
     * Provides a reference to the template's base element shown when right panning a list item.
     * ```typescript
     * const rightPanTmpl = this.listItem.rightPanningTemplateElement;
     * ```
     */
    rightPanningTemplateElement: any;
    constructor(list: IgxListBase, elementRef: ElementRef, _renderer: Renderer2);
    /**
     * Sets/gets whether the `list item` is a header.
     * ```html
     * <igx-list-item [isHeader] = "true">Header</igx-list-item>
     * ```
     * ```typescript
     * let isHeader =  this.listItem.isHeader;
     * ```
     * @memberof IgxListItemComponent
     */
    isHeader: boolean;
    /**
     * Sets/gets whether the `list item` is hidden.
     * By default the `hidden` value is `false`.
     * ```html
     * <igx-list-item [hidden] = "true">Hidden Item</igx-list-item>
     * ```
     * ```typescript
     * let isHidden =  this.listItem.hidden;
     * ```
     * @memberof IgxListItemComponent
     */
    hidden: boolean;
    /**
     * Gets the `role` attribute of the `list item`.
     * ```typescript
     * let itemRole =  this.listItem.role;
     * ```
     * @memberof IgxListItemComponent
     */
    readonly role: "separator" | "listitem";
    /**
     * Sets/gets the `aria-label` attribute of the `list item`.
     * ```typescript
     * this.listItem.ariaLabel = "Item1";
     * ```
     * ```typescript
     * let itemAriaLabel = this.listItem.ariaLabel;
     * ```
     * @memberof IgxListItemComponent
     */
    ariaLabel: string;
    /**
     * Gets the `touch-action` style of the `list item`.
     * ```typescript
     * let touchAction = this.listItem.touchAction;
     * ```
     */
    touchAction: string;
    /**
     * Indicates whether `list item` should have header style.
     * ```typescript
     * let headerStyle =  this.listItem.headerStyle;
     * ```
     * @memberof IgxListItemComponent
     */
    readonly headerStyle: boolean;
    /**
     * Applies the inner style of the `list item` if the item is not counted as header.
     * ```typescript
     * let innerStyle =  this.listItem.innerStyle;
     * ```
     * @memberof IgxListItemComponent
     */
    readonly innerStyle: boolean;
    /**
     * Returns string value which describes the display mode of the `list item`.
     * ```typescript
     * let isHidden = this.listItem.display;
     * ```
     * @memberof IgxListItemComponent
     */
    readonly display: string;
    /**
     *@hidden
     */
    clicked(evt: any): void;
    /**
     *@hidden
     */
    panStart(ev: any): void;
    /**
     *@hidden
     */
    panMove(ev: any): void;
    /**
     *@hidden
     */
    panEnd(ev: any): void;
    /**
     *@hidden
     */
    private showLeftPanTemplate;
    /**
     *@hidden
     */
    private showRightPanTemplate;
    /**
     *@hidden
     */
    private hideLeftAndRightPanTemplates;
    /**
     *@hidden
     */
    private setLeftAndRightTemplatesVisibility;
    /**
     * Gets the `panState` of a `list item`.
     * ```typescript
     * let itemPanState =  this.listItem.panState;
     * ```
     * @memberof IgxListItemComponent
     */
    readonly panState: IgxListPanState;
    /**
     * Gets the `index` of a `list item`.
     * ```typescript
     * let itemIndex =  this.listItem.index;
     * ```
     * @memberof IgxListItemComponent
     */
    /**
    * Sets the `index` of the `list item`.
    * ```typescript
    * this.listItem.index = index;
    * ```
    * @memberof IgxListItemComponent
    */
    index: number;
    /**
     * Returns an element reference to the list item.
     * ```typescript
     * let listItemElement =  this.listItem.element.
     * ```
     * @memberof IgxListItemComponent
     */
    readonly element: any;
    /**
     * Returns a reference container which contains the list item's content.
     * ```typescript
     * let listItemContainer =  this.listItem.contentElement.
     * ```
     * @memberof IgxListItemComponent
     */
    readonly contentElement: any;
    /**
     * Returns the `context` object which represents the `template context` binding into the `list item container`
     * by providing the `$implicit` declaration which is the `IgxListItemComponent` itself.
     * ```typescript
     * let listItemComponent = this.listItem.context;
     * ```
     */
    readonly context: any;
    /**
     * Gets the width of a `list item`.
     * ```typescript
     * let itemWidth = this.listItem.width;
     * ```
     * @memberof IgxListItemComponent
     */
    readonly width: any;
    /**
     * Gets the maximum left position of the `list item`.
     * ```typescript
     * let maxLeft = this.listItem.maxLeft;
     * ```
     * @memberof IgxListItemComponent
     */
    readonly maxLeft: number;
    /**
     * Gets the maximum right position of the `list item`.
     * ```typescript
     * let maxRight = this.listItem.maxRight;
     * ```
     * @memberof IgxListItemComponent
     */
    readonly maxRight: any;
    /**
     *@hidden
     */
    private setContentElementLeft;
    /**
     *@hidden
     */
    private isTrue;
}

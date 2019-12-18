import { EventEmitter } from '@angular/core';
/**
 * IgxActionIcon is a container for the action nav icon of the IgxNavbar.
 */
export declare class IgxActionIconDirective {
}
/**
 * **Ignite UI for Angular Navbar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html)
 *
 * The Ignite UI Navbar is most commonly used to provide an app header with a hamburger menu and navigation
 * state such as a "Go Back" button. It also supports other actions represented by icons.
 *
 * Example:
 * ```html
 * <igx-navbar title="Sample App" actionButtonIcon="menu">
 *   <igx-icon>search</igx-icon>
 *   <igx-icon>favorite</igx-icon>
 *   <igx-icon>more_vert</igx-icon>
 * </igx-navbar>
 * ```
 */
export declare class IgxNavbarComponent {
    private static NEXT_ID;
    private isVisible;
    /**
     *An @Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
     *```html
     *<igx-navbar [id]="'igx-navbar-12'" title="Sample App" actionButtonIcon="menu">
     *```
     */
    id: string;
    /**
     *Returns whether the `IgxNavbarComponent` action button is visible, true/false.
     *```typescript
     *@ViewChild("MyChild")
     *public navBar: IgxNavbarComponent;
     *ngAfterViewInit(){
     *    let actionButtonVisibile = this.navBar.isActionButtonVisible;
     *}
     *```
     */
    /**
    *Sets whether the action button of the `IgxNavbarComponent` is visible.
    *```html
    *<igx-navbar [title]="currentView" [isActionButtonVisible]="'false'"></igx-navbar>
    *```
    */
    isActionButtonVisible: boolean;
    /**
     *An @Input property that sets the icon of the `IgxNavbarComponent`.
     *```html
     *<igx-navbar [title]="currentView" actionButtonIcon="arrow_back"></igx-navbar>
     *```
     */
    actionButtonIcon: string;
    /**
     *An @Input property that sets the title of the `IgxNavbarComponent`.
     *```html
     *<igx-navbar title="Sample App" actionButtonIcon="menu">
     *```
     */
    title: string;
    /**
     *The event that will be thrown when the action is executed,
     *provides reference to the `IgxNavbar` component as argument
     *```typescript
     *public actionExc(event){
     *    alert("Action Execute!");
     *}
     * //..
     *```
     *```html
     *<igx-navbar (onAction)="actionExc($event)" title="Sample App" actionButtonIcon="menu">
     *```
     */
    onAction: EventEmitter<IgxNavbarComponent>;
    /**
     *An @Input property that sets the titleId of the `IgxNavbarComponent`. If not set it will be automatically generated.
     *```html
     *<igx-navbar [titleId]="'igx-navbar-7'" title="Sample App" actionButtonIcon="menu">
     *```
     */
    titleId: string;
    /**
     * @hidden
     */
    protected actionIconTemplate: IgxActionIconDirective;
    /**
     *@hidden
     */
    _triggerAction(): void;
}
/**
 * @hidden
 */
export declare class IgxNavbarModule {
}

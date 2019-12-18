import { IDropDownNavigationDirective } from './drop-down.common';
import { IgxDropDownBase } from './drop-down.base';
/**
 * Navigation Directive that handles keyboard events on its host and controls a targeted IgxDropDownBase component
 */
export declare class IgxDropDownItemNavigationDirective implements IDropDownNavigationDirective {
    dropdown: IgxDropDownBase;
    protected _target: IgxDropDownBase;
    constructor(dropdown: IgxDropDownBase);
    /**
     * Gets the target of the navigation directive;
     *
     * ```typescript
     * // Get
     * export class MyComponent {
     *  ...
     *  @ContentChild(IgxDropDownNavigationDirective)
     *  navDirective: IgxDropDownNavigationDirective = null
     *  ...
     *  const navTarget: IgxDropDownBase = navDirective.navTarget
     * }
     * ```
     */
    /**
    * Sets the target of the navigation directive;
    * If no valid target is passed, it falls back to the drop down context
    *
    * ```html
    * <!-- Set -->
    * <input [igxDropDownItemNavigation]="dropdown" />
    * ...
    * <igx-drop-down #dropdown>
    * ...
    * </igx-drop-down>
    * ```
    */
    target: IgxDropDownBase;
    /**
     * Captures keydown events and calls the appropriate handlers on the target component
     */
    handleKeyDown(event: KeyboardEvent): void;
    /**
     * Navigates to previous item
     */
    onArrowDownKeyDown(): void;
    /**
     * Navigates to previous item
     */
    onArrowUpKeyDown(): void;
    /**
     * Navigates to target's last item
     */
    onEndKeyDown(): void;
    /**
     * Navigates to target's first item
     */
    onHomeKeyDown(): void;
}

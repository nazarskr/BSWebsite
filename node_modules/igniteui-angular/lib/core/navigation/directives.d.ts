import { IgxNavigationService } from './nav.service';
/**
 * Directive that can toggle targets through provided NavigationService.
 *
 * Usage:
 * ```
 * <button igxNavToggle="ID"> Toggle </button>
 * ```
 * Where the `ID` matches the ID of compatible `IToggleView` component.
 */
export declare class IgxNavigationToggleDirective {
    state: IgxNavigationService;
    private target;
    constructor(nav: IgxNavigationService);
    toggleNavigationDrawer(): void;
}
/**
 * Directive that can close targets through provided NavigationService.
 *
 * Usage:
 * ```
 * <button igxNavClose="ID"> Close </button>
 * ```
 * Where the `ID` matches the ID of compatible `IToggleView` component.
 */
export declare class IgxNavigationCloseDirective {
    state: IgxNavigationService;
    private target;
    constructor(nav: IgxNavigationService);
    closeNavigationDrawer(): void;
}
/**
 * @hidden
 */
export declare class IgxNavigationModule {
}

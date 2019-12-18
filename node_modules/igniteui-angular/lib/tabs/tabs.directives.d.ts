import { TemplateRef } from '@angular/core';
import { IgxTabsBase } from './tabs.common';
export declare class IgxRightButtonStyleDirective {
    tabs: IgxTabsBase;
    constructor(tabs: IgxTabsBase);
    readonly visibleCSS: boolean;
    readonly hiddenCSS: boolean;
    readonly notDisplayedCSS: boolean;
    private getRightButtonStyle;
}
export declare class IgxLeftButtonStyleDirective {
    tabs: IgxTabsBase;
    constructor(tabs: IgxTabsBase);
    readonly visibleCSS: boolean;
    readonly hiddenCSS: boolean;
    readonly notDisplayedCSS: boolean;
    private getLeftButtonStyle;
}
export declare class IgxTabItemTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}

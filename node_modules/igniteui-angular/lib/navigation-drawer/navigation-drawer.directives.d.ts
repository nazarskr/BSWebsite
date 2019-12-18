import { TemplateRef } from '@angular/core';
export declare class IgxNavDrawerItemDirective {
    /**
     * @hidden
     */
    active: boolean;
    /**
     * @hidden
     */
    isHeader: boolean;
    /**
     * @hidden
     */
    readonly activeClass = "igx-nav-drawer__item--active";
    /**
     * @hidden
     */
    readonly defaultCSS: boolean;
    /**
     * @hidden
     */
    readonly currentCSS: boolean;
    /**
     * @hidden
     */
    readonly headerCSS: boolean;
}
export declare class IgxNavDrawerTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
export declare class IgxNavDrawerMiniTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}

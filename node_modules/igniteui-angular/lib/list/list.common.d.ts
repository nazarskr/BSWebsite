import { TemplateRef, EventEmitter, QueryList } from '@angular/core';
import { DisplayDensityBase, IDisplayDensityOptions } from '../core/density';
export interface IListChild {
    index: number;
}
/** @hidden */
export declare abstract class IgxListBase extends DisplayDensityBase {
    protected _displayDensityOptions: IDisplayDensityOptions;
    onItemClicked: EventEmitter<any>;
    allowLeftPanning: boolean;
    allowRightPanning: boolean;
    panEndTriggeringThreshold: number;
    onLeftPan: EventEmitter<any>;
    onRightPan: EventEmitter<any>;
    onPanStateChange: EventEmitter<any>;
    children: QueryList<any>;
    listItemLeftPanningTemplate: IgxListItemLeftPanningTemplateDirective;
    listItemRightPanningTemplate: IgxListItemRightPanningTemplateDirective;
    constructor(_displayDensityOptions: IDisplayDensityOptions);
}
export declare enum IgxListPanState {
    NONE = 0,
    LEFT = 1,
    RIGHT = 2
}
export declare class IgxEmptyListTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
export declare class IgxDataLoadingTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
export declare class IgxListItemLeftPanningTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
export declare class IgxListItemRightPanningTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}

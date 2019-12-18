import { PipeTransform } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IgxHierarchicalGridComponent } from './hierarchical-grid.component';
/**
 *@hidden
 */
export declare class IgxGridHierarchicalPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxHierarchicalGridComponent>);
    transform(collection: any, state: any[], id: string, primaryKey: any, childKeys: string[], pipeTrigger: number): any[];
    addHierarchy<T>(grid: any, data: T[], state: any, primaryKey: any, childKeys: string[]): T[];
}
/**
 *@hidden
 */
export declare class IgxGridHierarchicalPagingPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxHierarchicalGridComponent>);
    transform(collection: any[], page: number, perPage: number, id: string, pipeTrigger: number): any[];
}

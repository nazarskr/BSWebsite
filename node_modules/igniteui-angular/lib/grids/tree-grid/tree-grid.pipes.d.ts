import { PipeTransform } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { ITreeGridRecord } from './tree-grid.interfaces';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid';
import { ISortingExpression } from '../../data-operations/sorting-expression.interface';
/**
 *@hidden
 */
export declare class IgxTreeGridHierarchizingPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: any[], primaryKey: string, foreignKey: string, childDataKey: string, id: string, pipeTrigger: number): ITreeGridRecord[];
    private getRowID;
    private hierarchizeFlatData;
    private setIndentationLevels;
    private hierarchizeRecursive;
}
/**
 *@hidden
 */
export declare class IgxTreeGridFlatteningPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: ITreeGridRecord[], id: string, expandedLevels: number, expandedStates: Map<any, boolean>, pipeTrigger: number): any[];
    private getFlatDataRecursive;
    private updateNonProcessedRecordExpansion;
}
/** @hidden */
export declare class IgxTreeGridSortingPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(hierarchicalData: ITreeGridRecord[], expressions: ISortingExpression[], id: string, pipeTrigger: number): ITreeGridRecord[];
    private flattenTreeGridRecords;
}
/** @hidden */
export declare class IgxTreeGridPagingPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: ITreeGridRecord[], page: number, perPage: number, id: string, pipeTrigger: number): ITreeGridRecord[];
}
/** @hidden */
export declare class IgxTreeGridTransactionPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: any[], id: string, pipeTrigger: number): any[];
}

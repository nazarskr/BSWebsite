import { IGroupByRecord } from './groupby-record.interface';
import { ISortingExpression, SortingDirection } from './sorting-expression.interface';
import { IGroupingState } from './groupby-state.interface';
import { IGroupByResult } from './grouping-result.interface';
export interface ISortingStrategy {
    sort: (data: any[], fieldName: string, dir: SortingDirection, ignoreCase: boolean, valueResolver: (obj: any, key: string) => any) => any[];
}
export declare class DefaultSortingStrategy implements ISortingStrategy {
    private static _instance;
    protected constructor();
    static instance(): DefaultSortingStrategy;
    sort(data: any[], fieldName: string, dir: SortingDirection, ignoreCase: boolean, valueResolver: (obj: any, key: string) => any): any[];
    compareValues(a: any, b: any): 1 | 0 | -1;
    protected compareObjects(obj1: object, obj2: object, key: string, reverse: number, ignoreCase: boolean, valueResolver: (obj: any, key: string) => any): number;
    protected arraySort(data: any[], compareFn?: any): any[];
}
export declare class IgxSorting {
    sort(data: any[], expressions: ISortingExpression[]): any[];
    private groupedRecordsByExpression;
    private sortDataRecursive;
    protected groupDataRecursive<T>(data: T[], state: IGroupingState, level: number, parent: IGroupByRecord, metadata: IGroupByRecord[], grid?: any, groupsRecords?: any[], fullResult?: IGroupByResult): T[];
    protected getFieldValue(obj: any, key: string): any;
}
export declare class IgxDataRecordSorting extends IgxSorting {
    protected getFieldValue(obj: any, key: string): any;
}

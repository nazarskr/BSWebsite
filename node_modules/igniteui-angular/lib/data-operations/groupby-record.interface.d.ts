import { ISortingExpression } from './sorting-expression.interface';
/**
 * @hidden
 */
export declare class GroupedRecords extends Array<any> {
}
export interface IGroupByRecord {
    expression: ISortingExpression;
    level: number;
    records: GroupedRecords;
    value: any;
    groupParent: IGroupByRecord;
    groups?: IGroupByRecord[];
    height: number;
}

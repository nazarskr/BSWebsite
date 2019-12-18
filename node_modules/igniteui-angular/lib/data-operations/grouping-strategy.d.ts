import { IgxSorting } from './sorting-strategy';
import { IGroupingState } from './groupby-state.interface';
import { IGroupByResult } from './grouping-result.interface';
export declare class IgxGrouping extends IgxSorting {
    groupBy(data: any[], state: IGroupingState, grid?: any, groupsRecords?: any[], fullResult?: IGroupByResult): IGroupByResult;
}

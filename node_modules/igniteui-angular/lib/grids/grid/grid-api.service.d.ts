import { GridBaseAPIService } from '../api.service';
import { IgxGridComponent } from './grid.component';
import { IGroupByRecord } from '../../data-operations/groupby-record.interface';
import { IGroupByExpandState } from '../../data-operations/groupby-expand-state.interface';
import { IGroupingExpression } from '../../data-operations/grouping-expression.interface';
export declare class IgxGridAPIService extends GridBaseAPIService<IgxGridComponent> {
    groupBy(expression: IGroupingExpression): void;
    groupBy_multiple(expressions: IGroupingExpression[]): void;
    clear_groupby(name?: string | Array<string>): void;
    groupBy_get_expanded_for_group(groupRow: IGroupByRecord): IGroupByExpandState;
    groupBy_is_row_in_group(groupRow: IGroupByRecord, rowID: any): boolean;
    groupBy_toggle_group(groupRow: IGroupByRecord): void;
    groupBy_fully_expand_group(groupRow: IGroupByRecord): void;
    protected remove_grouping_expression(fieldName: any): void;
    arrange_sorting_expressions(): void;
    get_groupBy_record_id(gRow: IGroupByRecord): string;
}

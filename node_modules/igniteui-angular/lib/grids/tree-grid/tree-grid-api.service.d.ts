import { GridBaseAPIService } from '../api.service';
import { IgxTreeGridComponent } from './tree-grid.component';
import { ITreeGridRecord } from './tree-grid.interfaces';
import { IgxColumnComponent } from '../column.component';
export declare class IgxTreeGridAPIService extends GridBaseAPIService<IgxTreeGridComponent> {
    get_all_data(transactions?: boolean): any[];
    get_summary_data(): any[];
    expand_row(rowID: any): void;
    collapse_row(rowID: any): void;
    toggle_row_expansion(rowID: any): void;
    trigger_row_expansion_toggle(row: ITreeGridRecord, expanded: boolean, event?: Event, visibleColumnIndex?: any): void;
    expand_path_to_record(record: ITreeGridRecord): void;
    get_row_expansion_state(record: ITreeGridRecord): boolean;
    protected update_row_in_array(value: any, rowID: any, index: number): void;
    should_apply_number_style(column: IgxColumnComponent): boolean;
    deleteRowById(rowID: any): void;
    deleteRowFromData(rowID: any, index: number): void;
    /**
     * Updates related row of provided grid's data source with provided new row value
     * @param grid Grid to update data for
     * @param rowID ID of the row to update
     * @param rowValueInDataSource Initial value of the row as it is in data source
     * @param rowCurrentValue Current value of the row as it is with applied previous transactions
     * @param rowNewValue New value of the row
     */
    protected updateData(grid: IgxTreeGridComponent, rowID: any, rowValueInDataSource: any, rowCurrentValue: any, rowNewValue: {
        [x: string]: any;
    }): void;
    get_selected_children(record: ITreeGridRecord, selectedRowIDs: any[]): void;
    row_deleted_transaction(rowID: any): boolean;
    private row_deleted_parent;
}

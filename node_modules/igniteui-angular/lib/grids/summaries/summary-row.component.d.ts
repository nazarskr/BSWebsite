import { QueryList, ElementRef, ChangeDetectorRef, DoCheck } from '@angular/core';
import { IgxSummaryResult } from './grid-summary';
import { IgxSummaryCellComponent } from './summary-cell.component';
import { IgxGridForOfDirective } from '../../directives/for-of/for_of.directive';
import { GridBaseAPIService } from '../api.service';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid-base.component';
import { IgxColumnComponent } from '../column.component';
export declare class IgxSummaryRowComponent implements DoCheck {
    gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>;
    element: ElementRef;
    cdr: ChangeDetectorRef;
    summaries: Map<string, IgxSummaryResult[]>;
    gridID: any;
    index: number;
    firstCellIndentation: number;
    readonly dataRowIndex: number;
    readonly minHeight: number;
    summaryCells: QueryList<IgxSummaryCellComponent>;
    /**
     * @hidden
     */
    virtDirRow: IgxGridForOfDirective<any>;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, element: ElementRef, cdr: ChangeDetectorRef);
    ngDoCheck(): void;
    readonly grid: IgxGridBaseComponent & IGridDataBindable;
    readonly nativeElement: any;
    getColumnSummaries(columnName: any): IgxSummaryResult[];
    /**
     * @hidden
     */
    readonly pinnedColumns: IgxColumnComponent[];
    /**
     * @hidden
     */
    readonly unpinnedColumns: IgxColumnComponent[];
}

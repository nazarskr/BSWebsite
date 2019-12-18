import { QueryList, ChangeDetectorRef, DoCheck, ElementRef } from '@angular/core';
import { IgxColumnComponent } from './column.component';
import { IgxFilteringService } from './filtering/grid-filtering.service';
import { GridBaseAPIService } from './api.service';
import { IgxGridBaseComponent, IGridDataBindable } from './grid-base.component';
import { IgxColumnResizingService } from './grid-column-resizing.service';
import { IgxGridHeaderComponent } from './grid-header.component';
import { IgxGridFilteringCellComponent } from './filtering/grid-filtering-cell.component';
/**
 * @hidden
 */
export declare class IgxGridHeaderGroupComponent implements DoCheck {
    private cdr;
    gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>;
    element: ElementRef;
    colResizingService: IgxColumnResizingService;
    filteringService: IgxFilteringService;
    readonly gridRowSpan: number;
    readonly gridColumnSpan: number;
    readonly rowEnd: number;
    readonly colEnd: number;
    readonly rowStart: number;
    readonly colStart: number;
    /**
     * Gets the column of the header group.
     * @memberof IgxGridHeaderGroupComponent
     */
    column: IgxColumnComponent;
    /**
     * Gets the `id` of the grid in which the header group is stored.
     * @memberof IgxGridHeaderGroupComponent
     */
    gridID: string;
    /**
     * @hidden
     */
    headerCell: IgxGridHeaderComponent;
    /**
     * @hidden
     */
    filterCell: IgxGridFilteringCellComponent;
    /**
     * @hidden
     */
    children: QueryList<IgxGridHeaderGroupComponent>;
    /**
     * Gets the width of the header group.
     * @memberof IgxGridHeaderGroupComponent
     */
    readonly width: any;
    /**
     * Gets the style classes of the header group.
     * @memberof IgxGridHeaderGroupComponent
     */
    readonly styleClasses: string;
    /**
     * @hidden
     */
    readonly zIndex: number;
    /**
     * Gets the grid of the header group.
     * @memberof IgxGridHeaderGroupComponent
     */
    readonly grid: any;
    /**
     * Gets whether the header group belongs to a column that is filtered.
     * @memberof IgxGridHeaderGroupComponent
     */
    readonly isFiltered: boolean;
    /**
     * Gets whether the header group is stored in the last column in the pinned area.
     * @memberof IgxGridHeaderGroupComponent
     */
    readonly isLastPinned: boolean;
    readonly groupDisplayStyle: string;
    /**
     * Gets whether the header group is stored in a pinned column.
     * @memberof IgxGridHeaderGroupComponent
     */
    readonly isPinned: boolean;
    /**
     * Gets whether the header group belongs to a column that is moved.
     * @memberof IgxGridHeaderGroupComponent
     */
    readonly isHeaderDragged: boolean;
    /**
     * @hidden
     */
    readonly hasLastPinnedChildColumn: boolean;
    /**
     * @hidden
     */
    readonly height: any;
    /**
     * @hidden
     */
    onMouseDown(event: any): void;
    ngDoCheck(): void;
    constructor(cdr: ChangeDetectorRef, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, element: ElementRef, colResizingService: IgxColumnResizingService, filteringService: IgxFilteringService);
}

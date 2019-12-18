import { ChangeDetectorRef, DoCheck, ElementRef, NgZone, OnInit, OnDestroy, NgModuleRef } from '@angular/core';
import { SortingDirection } from '../data-operations/sorting-expression.interface';
import { GridBaseAPIService } from './api.service';
import { IgxColumnComponent } from './column.component';
import { IgxFilteringService } from './filtering/grid-filtering.service';
import { IgxGridBaseComponent, IGridDataBindable } from './grid-base.component';
import { IgxColumnResizingService } from './grid-column-resizing.service';
import { IgxOverlayService } from '../services/overlay/overlay';
/**
 * @hidden
 */
export declare class IgxGridHeaderComponent implements DoCheck, OnInit, OnDestroy {
    gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>;
    colResizingService: IgxColumnResizingService;
    cdr: ChangeDetectorRef;
    elementRef: ElementRef;
    zone: NgZone;
    private _filteringService;
    private _moduleRef;
    private _overlayService;
    private _componentOverlayId;
    private _filterMenuPositionSettings;
    private _filterMenuOverlaySettings;
    private _destroy$;
    column: IgxColumnComponent;
    gridID: string;
    readonly styleClasses: string;
    readonly height: number;
    readonly ascending: boolean;
    readonly descending: boolean;
    readonly sortingIcon: string;
    readonly sorted: boolean;
    readonly filterIconClassName: "igx-excel-filter__icon--filtered" | "igx-excel-filter__icon";
    hostRole: string;
    tabindex: number;
    readonly headerID: string;
    protected sortDirection: SortingDirection;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, colResizingService: IgxColumnResizingService, cdr: ChangeDetectorRef, elementRef: ElementRef, zone: NgZone, _filteringService: IgxFilteringService, _moduleRef: NgModuleRef<any>, _overlayService: IgxOverlayService);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    onFilteringIconClick(event: any): void;
    readonly grid: any;
    protected getSortDirection(): void;
    onSortingIconClick(event: any): void;
    private triggerSort;
    private toggleFilterDropdown;
    private initFilteringSettings;
    private onOverlayOpening;
    private onOverlayClosed;
}

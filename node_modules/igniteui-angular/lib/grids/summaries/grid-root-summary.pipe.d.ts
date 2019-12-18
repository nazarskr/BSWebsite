import { PipeTransform } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid-base.component';
export declare class IgxSummaryDataPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(id: string, trigger?: number): Map<string, any[]>;
}

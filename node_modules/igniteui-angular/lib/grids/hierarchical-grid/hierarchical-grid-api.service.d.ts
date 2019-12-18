import { IgxHierarchicalGridComponent } from './hierarchical-grid.component';
import { IgxRowIslandComponent } from './row-island.component';
import { IPathSegment } from './hierarchical-grid-base.component';
import { IgxGridBaseComponent, GridBaseAPIService, IGridDataBindable } from '../grid';
export declare class IgxHierarchicalGridAPIService extends GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable> {
    protected childRowIslands: Map<string, IgxRowIslandComponent>;
    protected childGrids: Map<string, Map<any, IgxHierarchicalGridComponent>>;
    registerChildRowIsland(rowIsland: IgxRowIslandComponent): void;
    unsetChildRowIsland(rowIsland: IgxRowIslandComponent): void;
    getChildRowIsland(key: string): IgxRowIslandComponent;
    getChildGrid(path: Array<IPathSegment>): any;
    getChildGrids(inDepth?: boolean): any[];
    getParentRowId(childGrid: IgxHierarchicalGridComponent): any;
    registerChildGrid(parentRowID: string | object, rowIslandKey: string, grid: IgxHierarchicalGridComponent): void;
    getChildGridsForRowIsland(rowIslandKey: any): IgxHierarchicalGridComponent[];
    getChildGridByID(rowIslandKey: any, rowID: any): IgxHierarchicalGridComponent;
}

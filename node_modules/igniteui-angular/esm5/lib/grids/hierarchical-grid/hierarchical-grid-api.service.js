/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { GridBaseAPIService } from '../grid';
var IgxHierarchicalGridAPIService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxHierarchicalGridAPIService, _super);
    function IgxHierarchicalGridAPIService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.childRowIslands = new Map();
        _this.childGrids = new Map();
        return _this;
    }
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.registerChildRowIsland = /**
     * @param {?} rowIsland
     * @return {?}
     */
    function (rowIsland) {
        this.childRowIslands.set(rowIsland.key, rowIsland);
        this.destroyMap.set(rowIsland.key, new Subject());
    };
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.unsetChildRowIsland = /**
     * @param {?} rowIsland
     * @return {?}
     */
    function (rowIsland) {
        this.childGrids.delete(rowIsland.key);
        this.childRowIslands.delete(rowIsland.key);
        this.destroyMap.delete(rowIsland.key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.getChildRowIsland = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.childRowIslands.get(key);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.getChildGrid = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var currPath = path;
        /** @type {?} */
        var grid;
        /** @type {?} */
        var pathElem = currPath.shift();
        /** @type {?} */
        var childrenForLayout = this.childGrids.get(pathElem.rowIslandKey);
        if (childrenForLayout) {
            /** @type {?} */
            var childGrid = childrenForLayout.get(pathElem.rowID);
            if (currPath.length === 0) {
                grid = childGrid;
            }
            else {
                grid = childGrid.hgridAPI.getChildGrid(currPath);
            }
        }
        return grid;
    };
    /**
     * @param {?=} inDepth
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.getChildGrids = /**
     * @param {?=} inDepth
     * @return {?}
     */
    function (inDepth) {
        /** @type {?} */
        var allChildren = [];
        this.childGrids.forEach(function (layoutMap) {
            layoutMap.forEach(function (grid) {
                allChildren.push(grid);
                if (inDepth) {
                    /** @type {?} */
                    var children = grid.hgridAPI.getChildGrids(inDepth);
                    children.forEach(function (item) {
                        allChildren.push(item);
                    });
                }
            });
        });
        return allChildren;
    };
    /**
     * @param {?} childGrid
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.getParentRowId = /**
     * @param {?} childGrid
     * @return {?}
     */
    function (childGrid) {
        /** @type {?} */
        var rowID;
        this.childGrids.forEach(function (layoutMap) {
            layoutMap.forEach(function (grid, key) {
                if (grid === childGrid) {
                    rowID = key;
                    return;
                }
            });
        });
        return rowID;
    };
    /**
     * @param {?} parentRowID
     * @param {?} rowIslandKey
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.registerChildGrid = /**
     * @param {?} parentRowID
     * @param {?} rowIslandKey
     * @param {?} grid
     * @return {?}
     */
    function (parentRowID, rowIslandKey, grid) {
        /** @type {?} */
        var childrenForLayout = this.childGrids.get(rowIslandKey);
        if (!childrenForLayout) {
            this.childGrids.set(rowIslandKey, new Map());
            childrenForLayout = this.childGrids.get(rowIslandKey);
        }
        childrenForLayout.set(parentRowID, grid);
    };
    /**
     * @param {?} rowIslandKey
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.getChildGridsForRowIsland = /**
     * @param {?} rowIslandKey
     * @return {?}
     */
    function (rowIslandKey) {
        /** @type {?} */
        var childrenForLayout = this.childGrids.get(rowIslandKey);
        /** @type {?} */
        var children = [];
        if (childrenForLayout) {
            childrenForLayout.forEach(function (child) {
                children.push(child);
            });
        }
        return children;
    };
    /**
     * @param {?} rowIslandKey
     * @param {?} rowID
     * @return {?}
     */
    IgxHierarchicalGridAPIService.prototype.getChildGridByID = /**
     * @param {?} rowIslandKey
     * @param {?} rowID
     * @return {?}
     */
    function (rowIslandKey, rowID) {
        /** @type {?} */
        var childrenForLayout = this.childGrids.get(rowIslandKey);
        return childrenForLayout.get(rowID);
    };
    return IgxHierarchicalGridAPIService;
}(GridBaseAPIService));
export { IgxHierarchicalGridAPIService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridAPIService.prototype.childRowIslands;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridAPIService.prototype.childGrids;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2hpZXJhcmNoaWNhbC1ncmlkL2hpZXJhcmNoaWNhbC1ncmlkLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQXdCLGtCQUFrQixFQUFxQixNQUFNLFNBQVMsQ0FBQztBQUN0RjtJQUFtRCx5REFBNEQ7SUFBL0c7UUFBQSxxRUEwRkM7UUF6RmEscUJBQWUsR0FBdUMsSUFBSSxHQUFHLEVBQWlDLENBQUM7UUFDL0YsZ0JBQVUsR0FDaEIsSUFBSSxHQUFHLEVBQWtELENBQUM7O0lBdUZsRSxDQUFDOzs7OztJQXJGRyw4REFBc0I7Ozs7SUFBdEIsVUFBdUIsU0FBZ0M7UUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksT0FBTyxFQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELDJEQUFtQjs7OztJQUFuQixVQUFvQixTQUFnQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELHlEQUFpQjs7OztJQUFqQixVQUFrQixHQUFXO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxvREFBWTs7OztJQUFaLFVBQWEsSUFBeUI7O1lBQzVCLFFBQVEsR0FBRyxJQUFJOztZQUNqQixJQUFJOztZQUNGLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFOztZQUMzQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3BFLElBQUksaUJBQWlCLEVBQUU7O2dCQUNiLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixJQUFJLEdBQUcsU0FBUyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNILElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwRDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxxREFBYTs7OztJQUFiLFVBQWMsT0FBaUI7O1lBQ3JCLFdBQVcsR0FBRyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUM5QixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDbkIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxPQUFPLEVBQUU7O3dCQUNILFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7b0JBQ3JELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO3dCQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHNEQUFjOzs7O0lBQWQsVUFBZSxTQUF1Qzs7WUFDOUMsS0FBSztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUM5QixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7Z0JBQ3hCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDcEIsS0FBSyxHQUFHLEdBQUcsQ0FBQztvQkFDWixPQUFPO2lCQUNWO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFRCx5REFBaUI7Ozs7OztJQUFqQixVQUFrQixXQUEwQixFQUFFLFlBQW9CLEVBQUUsSUFBa0M7O1lBQzlGLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksR0FBRyxFQUFxQyxDQUFDLENBQUM7WUFDaEYsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekQ7UUFDRCxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsaUVBQXlCOzs7O0lBQXpCLFVBQTBCLFlBQVk7O1lBQzVCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzs7WUFDckQsUUFBUSxHQUFHLEVBQUU7UUFDbkIsSUFBSSxpQkFBaUIsRUFBRTtZQUNuQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFRCx3REFBZ0I7Ozs7O0lBQWhCLFVBQWlCLFlBQVksRUFBRSxLQUFLOztZQUMxQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDM0QsT0FBTyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNMLG9DQUFDO0FBQUQsQ0FBQyxBQTFGRCxDQUFtRCxrQkFBa0IsR0EwRnBFOzs7Ozs7O0lBekZHLHdEQUF5Rzs7Ozs7SUFDekcsbURBQzhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCB9IGZyb20gJy4vaGllcmFyY2hpY2FsLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElneFJvd0lzbGFuZENvbXBvbmVudCB9IGZyb20gJy4vcm93LWlzbGFuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSVBhdGhTZWdtZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgR3JpZEJhc2VBUElTZXJ2aWNlLCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQnO1xuZXhwb3J0IGNsYXNzIElneEhpZXJhcmNoaWNhbEdyaWRBUElTZXJ2aWNlIGV4dGVuZHMgR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+IHtcbiAgICBwcm90ZWN0ZWQgY2hpbGRSb3dJc2xhbmRzOiBNYXA8c3RyaW5nLCBJZ3hSb3dJc2xhbmRDb21wb25lbnQ+ID0gbmV3IE1hcDxzdHJpbmcsIElneFJvd0lzbGFuZENvbXBvbmVudD4oKTtcbiAgICBwcm90ZWN0ZWQgY2hpbGRHcmlkczogIE1hcDxzdHJpbmcsIE1hcDxhbnksIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQ+PiA9XG4gICAgICAgIG5ldyBNYXA8c3RyaW5nLCBNYXA8YW55LCBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50Pj4oKTtcblxuICAgIHJlZ2lzdGVyQ2hpbGRSb3dJc2xhbmQocm93SXNsYW5kOiBJZ3hSb3dJc2xhbmRDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jaGlsZFJvd0lzbGFuZHMuc2V0KHJvd0lzbGFuZC5rZXksIHJvd0lzbGFuZCk7XG4gICAgICAgIHRoaXMuZGVzdHJveU1hcC5zZXQocm93SXNsYW5kLmtleSwgbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKSk7XG4gICAgfVxuXG4gICAgdW5zZXRDaGlsZFJvd0lzbGFuZChyb3dJc2xhbmQ6IElneFJvd0lzbGFuZENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNoaWxkR3JpZHMuZGVsZXRlKHJvd0lzbGFuZC5rZXkpO1xuICAgICAgICB0aGlzLmNoaWxkUm93SXNsYW5kcy5kZWxldGUocm93SXNsYW5kLmtleSk7XG4gICAgICAgIHRoaXMuZGVzdHJveU1hcC5kZWxldGUocm93SXNsYW5kLmtleSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRSb3dJc2xhbmQoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRSb3dJc2xhbmRzLmdldChrZXkpO1xuICAgIH1cblxuICAgIGdldENoaWxkR3JpZChwYXRoOiBBcnJheTxJUGF0aFNlZ21lbnQ+KSB7XG4gICAgICAgIGNvbnN0IGN1cnJQYXRoID0gcGF0aDtcbiAgICAgICAgbGV0IGdyaWQ7XG4gICAgICAgIGNvbnN0IHBhdGhFbGVtID0gY3VyclBhdGguc2hpZnQoKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Gb3JMYXlvdXQgPSB0aGlzLmNoaWxkR3JpZHMuZ2V0KHBhdGhFbGVtLnJvd0lzbGFuZEtleSk7XG4gICAgICAgIGlmIChjaGlsZHJlbkZvckxheW91dCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRHcmlkID0gY2hpbGRyZW5Gb3JMYXlvdXQuZ2V0KHBhdGhFbGVtLnJvd0lEKTtcbiAgICAgICAgICAgIGlmIChjdXJyUGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBncmlkID0gY2hpbGRHcmlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkID0gY2hpbGRHcmlkLmhncmlkQVBJLmdldENoaWxkR3JpZChjdXJyUGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRHcmlkcyhpbkRlcHRoPzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhbGxDaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkR3JpZHMuZm9yRWFjaCgobGF5b3V0TWFwKSA9PiB7XG4gICAgICAgICAgICBsYXlvdXRNYXAuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsbENoaWxkcmVuLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGluRGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBncmlkLmhncmlkQVBJLmdldENoaWxkR3JpZHMoaW5EZXB0aCk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbENoaWxkcmVuLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWxsQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgZ2V0UGFyZW50Um93SWQoY2hpbGRHcmlkOiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50KSB7XG4gICAgICAgIGxldCByb3dJRDtcbiAgICAgICAgdGhpcy5jaGlsZEdyaWRzLmZvckVhY2goKGxheW91dE1hcCkgPT4ge1xuICAgICAgICAgICAgbGF5b3V0TWFwLmZvckVhY2goKGdyaWQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChncmlkID09PSBjaGlsZEdyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93SUQgPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByb3dJRDtcbiAgICB9XG5cbiAgICByZWdpc3RlckNoaWxkR3JpZChwYXJlbnRSb3dJRDogc3RyaW5nfG9iamVjdCwgcm93SXNsYW5kS2V5OiBzdHJpbmcsIGdyaWQ6IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuRm9yTGF5b3V0ID0gdGhpcy5jaGlsZEdyaWRzLmdldChyb3dJc2xhbmRLZXkpO1xuICAgICAgICBpZiAoIWNoaWxkcmVuRm9yTGF5b3V0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkR3JpZHMuc2V0KHJvd0lzbGFuZEtleSwgbmV3IE1hcDxhbnksIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQ+KCkpO1xuICAgICAgICAgICAgY2hpbGRyZW5Gb3JMYXlvdXQgPSB0aGlzLmNoaWxkR3JpZHMuZ2V0KHJvd0lzbGFuZEtleSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW5Gb3JMYXlvdXQuc2V0KHBhcmVudFJvd0lELCBncmlkKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZEdyaWRzRm9yUm93SXNsYW5kKHJvd0lzbGFuZEtleSk6IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnRbXSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuRm9yTGF5b3V0ID0gdGhpcy5jaGlsZEdyaWRzLmdldChyb3dJc2xhbmRLZXkpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgICAgICBpZiAoY2hpbGRyZW5Gb3JMYXlvdXQpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuRm9yTGF5b3V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRHcmlkQnlJRChyb3dJc2xhbmRLZXksIHJvd0lEKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuRm9yTGF5b3V0ID0gdGhpcy5jaGlsZEdyaWRzLmdldChyb3dJc2xhbmRLZXkpO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5Gb3JMYXlvdXQuZ2V0KHJvd0lEKTtcbiAgICB9XG59XG4iXX0=
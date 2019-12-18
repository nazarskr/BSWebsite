import { IgxGridBaseComponent } from './grid-base.component';
import { IgxColumnComponent } from './column.component';
import { IgxGridNavigationService } from './grid-navigation.service';
import { ISelectionNode } from '../core/grid-selection';
export interface IStartNavigationCell {
    rowStart: number;
    colStart: number;
    direction: NavigationDirection;
}
export declare enum NavigationDirection {
    horizontal = "horizontal",
    vertical = "vertical"
}
/** @hidden */
export declare class IgxGridMRLNavigationService extends IgxGridNavigationService {
    private startNavigationCell;
    grid: IgxGridBaseComponent;
    /**
     * @hidden
     * @internal
     */
    setStartNavigationCell(colStart: number, rowStart: number, dir: NavigationDirection): void;
    private applyNavigationCell;
    navigateUp(rowElement: HTMLElement, selectedNode: ISelectionNode): void;
    navigateDown(rowElement: HTMLElement, selectedNode: ISelectionNode): void;
    isColumnRightEdgeVisible(visibleColumnIndex: number): boolean;
    private isParentColumnFullyVisible;
    isColumnLeftEdgeVisible(visibleColumnIndex: number): boolean;
    onKeydownArrowRight(element: HTMLElement, selectedNode: ISelectionNode): void;
    onKeydownArrowLeft(element: HTMLElement, selectedNode: ISelectionNode): void;
    readonly gridOrderedColumns: IgxColumnComponent[];
    performTab(currentRowEl: HTMLElement, selectedNode: ISelectionNode): void;
    protected _moveFocusToCell(currentRowEl: HTMLElement, nextElementColumn: any, row: any, selectedNode: any, dir: any): void;
    performShiftTabKey(currentRowEl: HTMLElement, selectedNode: ISelectionNode): void;
    private focusCellUpFromLayout;
    private focusCellDownFromLayout;
    private focusNextCellFromLayout;
    private focusPrevCellFromLayout;
    onKeydownEnd(rowIndex: number, isSummary?: boolean, cellRowStart?: number): void;
    onKeydownHome(rowIndex: number, isSummary?: boolean, cellRowStart?: number): void;
    protected getColumnLayoutSelector(): string;
    protected getChildColumnScrollPositions(visibleColIndex: number): {
        leftScroll: number;
        rightScroll: number;
    };
    protected getColunmByVisibleIndex(visibleColIndex: number): IgxColumnComponent;
    shouldPerformVerticalScroll(rowIndex: number, visibleColumnIndex: number): boolean;
    readonly verticalDCTopOffset: number;
    private _isGroupRecordAt;
    performVerticalScrollToCell(rowIndex: number, visibleColumnIndex: number, cb?: () => void): void;
    getVerticalScrollPositions(rowIndex: number, visibleColIndex: number): {
        rowTop: number;
        rowBottom: number;
        topOffset: number;
    };
    performHorizontalScrollToCell(rowIndex: number, visibleColumnIndex: number, isSummary?: boolean, cb?: () => void): void;
    protected _focusCell(cellElem: HTMLElement): void;
    goToFirstCell(): void;
    goToLastCell(): void;
}

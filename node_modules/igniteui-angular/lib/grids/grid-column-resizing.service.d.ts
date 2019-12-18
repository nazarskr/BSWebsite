import { NgZone } from '@angular/core';
import { IgxColumnComponent } from './column.component';
/** @hidden */
export declare class IgxColumnResizingService {
    private zone;
    private pinnedMaxWidth;
    /**
     *@hidden
     */
    startResizePos: number;
    /**
     * Indicates that a column is currently being resized.
     */
    isColumnResizing: boolean;
    /**
     *@hidden
     */
    resizeCursor: string;
    /**
     *@hidden
     */
    showResizer: boolean;
    /**
     * The column being resized.
     */
    column: IgxColumnComponent;
    constructor(zone: NgZone);
    /**
     *@hidden
     */
    readonly resizerHeight: number;
    /**
     * Returns the minimal possible width to which the column can be resized.
     */
    readonly restrictResizeMin: number;
    /**
     * Returns the maximal possible width to which the column can be resized.
     */
    readonly restrictResizeMax: number;
    /**
     * Autosizes the column to the longest currently visible cell value, including the header cell.
     * If the column has a predifined maxWidth and the autosized column width will become bigger than it,
     * then the column is sized to its maxWidth.
     * If the column is pinned and the autosized column width will cause the pinned area to become bigger
     * than the maximum allowed pinned area width (80% of the total grid width), autosizing will be deismissed.
     */
    autosizeColumnOnDblClick(): void;
    /**
     * Resizes the column regaridng to the column minWidth and maxWidth.
     */
    resizeColumn(event: MouseEvent): void;
    protected getColMinWidth(column: IgxColumnComponent): number;
    protected getColMaxWidth(column: IgxColumnComponent): number;
    protected resizeColumnLayoutFor(column: IgxColumnComponent, diff: number): void;
}

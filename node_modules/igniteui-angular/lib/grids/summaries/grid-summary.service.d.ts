/** @hidden */
export declare class IgxGridSummaryService {
    protected summaryCacheMap: Map<string, Map<string, any[]>>;
    grid: any;
    rootSummaryID: string;
    summaryHeight: number;
    maxSummariesLenght: number;
    groupingExpressions: any[];
    retriggerRootPipe: number;
    deleteOperation: boolean;
    recalculateSummaries(): void;
    clearSummaryCache(args?: any): void;
    removeSummaries(rowID: any, columnName?: any): void;
    removeSummariesCachePerColumn(columnName: any): void;
    calcMaxSummaryHeight(): number;
    calculateSummaries(rowID: any, data: any): Map<string, any[]>;
    resetSummaryHeight(): void;
    updateSummaryCache(groupingArgs: any): void;
    readonly hasSummarizedColumns: boolean;
    private deleteSummaryCache;
    private getSummaryID;
    private removeAllTreeGridSummaries;
    private removeChildRowSummaries;
    private compareGroupingExpressions;
    private readonly isTreeGrid;
    private readonly isHierarchicalGrid;
}

import { HierarchicalTransaction, HierarchicalState } from './transaction';
import { IgxTransactionService } from './igx-transaction';
/** @experimental @hidden */
export declare class IgxHierarchicalTransactionService<T extends HierarchicalTransaction, S extends HierarchicalState> extends IgxTransactionService<T, S> {
    getAggregatedChanges(mergeChanges: boolean): T[];
    protected updateState(states: Map<any, S>, transaction: T, recordRef?: any): void;
    /**
     * Applies all transactions over the provided data
     * @param data Data source to update
     * @param primaryKey Primary key of the hierarchical data
     * @param childDataKey Kye of child data collection
     * @param id Optional record id to commit transactions for
     */
    commit(data: any[], primaryKey?: any, childDataKey?: any, id?: any): void;
    private clearArraysFromObject;
}

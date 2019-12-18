import { TransactionService, Transaction, State } from './transaction';
import { EventEmitter } from '@angular/core';
export declare class IgxBaseTransactionService<T extends Transaction, S extends State> implements TransactionService<T, S> {
    protected _isPending: boolean;
    protected _pendingTransactions: T[];
    protected _pendingStates: Map<any, S>;
    /**
     * @inheritdoc
     */
    readonly canRedo: boolean;
    /**
     * @inheritdoc
     */
    readonly canUndo: boolean;
    /**
     * @inheritdoc
     */
    readonly enabled: boolean;
    /**
     * @inheritdoc
     */
    onStateUpdate: EventEmitter<void>;
    /**
     * @inheritdoc
     */
    add(transaction: T, recordRef?: any): void;
    /**
     * @inheritdoc
     */
    getTransactionLog(id?: any): T[];
    /**
     * @inheritdoc
     */
    undo(): void;
    /**
     * @inheritdoc
     */
    redo(): void;
    /**
     * @inheritdoc
     */
    getAggregatedChanges(mergeChanges: boolean): T[];
    /**
     * @inheritdoc
     */
    getState(id: any): S;
    /**
     * @inheritdoc
     */
    getAggregatedValue(id: any, mergeChanges: boolean): any;
    /**
     * @inheritdoc
     */
    commit(data: any[], id?: any): void;
    /**
     * @inheritdoc
     */
    clear(id?: any): void;
    /**
     * @inheritdoc
     */
    startPending(): void;
    /**
     * @inheritdoc
     */
    endPending(commit: boolean): void;
    /**
     * Updates the provided states collection according to passed transaction and recordRef
     * @param states States collection to apply the update to
     * @param transaction Transaction to apply to the current state
     * @param recordRef Reference to the value of the record in data source, if any, where transaction should be applied
     */
    protected updateState(states: Map<any, S>, transaction: T, recordRef?: any): void;
    /**
     * Updates the recordRef of the provided state with all the changes in the state. Accepts primitive and object value types
     * @param state State to update value for
     * @returns updated value including all the changes in provided state
     */
    protected updateValue(state: S): any;
    /**
     * Merges second values in first value and the result in empty object. If values are primitive type
     * returns second value if exists, or first value.
     * @param first Value to merge into
     * @param second Value to merge
     */
    protected mergeValues<U>(first: U, second: U): U;
}

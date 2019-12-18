/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TransactionType } from './transaction';
import { IgxBaseTransactionService } from './base-transaction';
import { EventEmitter, Injectable } from '@angular/core';
import { isObject, mergeObjects, cloneValue } from '../../core/utils';
/**
 * @template T, S
 */
export class IgxTransactionService extends IgxBaseTransactionService {
    constructor() {
        super(...arguments);
        this._transactions = [];
        this._redoStack = [];
        this._undoStack = [];
        this._states = new Map();
        /**
         * \@inheritdoc
         */
        this.onStateUpdate = new EventEmitter();
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    get canUndo() {
        return this._undoStack.length > 0;
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    get canRedo() {
        return this._redoStack.length > 0;
    }
    /**
     * \@inheritdoc
     * @param {?} transaction
     * @param {?=} recordRef
     * @return {?}
     */
    add(transaction, recordRef) {
        /** @type {?} */
        const states = this._isPending ? this._pendingStates : this._states;
        this.verifyAddedTransaction(states, transaction, recordRef);
        this.addTransaction(transaction, states, recordRef);
    }
    /**
     * @protected
     * @param {?} transaction
     * @param {?} states
     * @param {?=} recordRef
     * @return {?}
     */
    addTransaction(transaction, states, recordRef) {
        this.updateState(states, transaction, recordRef);
        /** @type {?} */
        const transactions = this._isPending ? this._pendingTransactions : this._transactions;
        transactions.push(transaction);
        if (!this._isPending) {
            this._undoStack.push([{ transaction, recordRef }]);
            this._redoStack = [];
            this.onStateUpdate.emit();
        }
    }
    /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    getTransactionLog(id) {
        if (id !== undefined) {
            return this._transactions.filter(t => t.id === id);
        }
        return [...this._transactions];
    }
    /**
     * \@inheritdoc
     * @param {?} mergeChanges
     * @return {?}
     */
    getAggregatedChanges(mergeChanges) {
        /** @type {?} */
        const result = [];
        this._states.forEach((state, key) => {
            /** @type {?} */
            const value = mergeChanges ? this.mergeValues(state.recordRef, state.value) : state.value;
            result.push((/** @type {?} */ ({ id: key, newValue: value, type: state.type })));
        });
        return result;
    }
    /**
     * \@inheritdoc
     * @param {?} id
     * @param {?=} pending
     * @return {?}
     */
    getState(id, pending = false) {
        return pending ? this._pendingStates.get(id) : this._states.get(id);
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    get enabled() {
        return true;
    }
    /**
     * \@inheritdoc
     * @param {?} id
     * @param {?} mergeChanges
     * @return {?}
     */
    getAggregatedValue(id, mergeChanges) {
        /** @type {?} */
        const state = this._states.get(id);
        /** @type {?} */
        const pendingState = super.getState(id);
        //  if there is no state and there is no pending state return null
        if (!state && !pendingState) {
            return null;
        }
        /** @type {?} */
        const pendingChange = super.getAggregatedValue(id, false);
        /** @type {?} */
        const change = state && state.value;
        /** @type {?} */
        let aggregatedValue = this.mergeValues(change, pendingChange);
        if (mergeChanges) {
            /** @type {?} */
            const originalValue = state ? state.recordRef : pendingState.recordRef;
            aggregatedValue = this.mergeValues(originalValue, aggregatedValue);
        }
        return aggregatedValue;
    }
    /**
     * \@inheritdoc
     * @param {?} commit
     * @return {?}
     */
    endPending(commit) {
        this._isPending = false;
        if (commit) {
            /** @type {?} */
            const actions = [];
            // don't use addTransaction due to custom undo handling
            for (const transaction of this._pendingTransactions) {
                /** @type {?} */
                const pendingState = this._pendingStates.get(transaction.id);
                this._transactions.push(transaction);
                this.updateState(this._states, transaction, pendingState.recordRef);
                actions.push({ transaction, recordRef: pendingState.recordRef });
            }
            this._undoStack.push(actions);
            this._redoStack = [];
            this.onStateUpdate.emit();
        }
        super.endPending(commit);
    }
    /**
     * \@inheritdoc
     * @param {?} data
     * @param {?=} id
     * @return {?}
     */
    commit(data, id) {
        if (id !== undefined) {
            /** @type {?} */
            const state = this.getState(id);
            if (state) {
                this.updateRecord(data, state);
            }
        }
        else {
            this._states.forEach((s) => {
                this.updateRecord(data, s);
            });
        }
        this.clear(id);
    }
    /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    clear(id) {
        if (id !== undefined) {
            this._transactions = this._transactions.filter(t => t.id !== id);
            this._states.delete(id);
            //  Undo stack is an array of actions. Each action is array of transaction like objects
            //  We are going trough all the actions. For each action we are filtering out transactions
            //  with provided id. Finally if any action ends up as empty array we are removing it from
            //  undo stack
            this._undoStack = this._undoStack.map(a => a.filter(t => t.transaction.id !== id)).filter(a => a.length > 0);
        }
        else {
            this._transactions = [];
            this._states.clear();
            this._undoStack = [];
        }
        this._redoStack = [];
        this.onStateUpdate.emit();
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    undo() {
        if (this._undoStack.length <= 0) {
            return;
        }
        /** @type {?} */
        const lastActions = this._undoStack.pop();
        this._transactions.splice(this._transactions.length - lastActions.length);
        this._redoStack.push(lastActions);
        this._states.clear();
        for (const currentActions of this._undoStack) {
            for (const transaction of currentActions) {
                this.updateState(this._states, transaction.transaction, transaction.recordRef);
            }
        }
        this.onStateUpdate.emit();
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    redo() {
        if (this._redoStack.length > 0) {
            /** @type {?} */
            let actions;
            actions = this._redoStack.pop();
            for (const action of actions) {
                this.updateState(this._states, action.transaction, action.recordRef);
                this._transactions.push(action.transaction);
            }
            this._undoStack.push(actions);
            this.onStateUpdate.emit();
        }
    }
    /**
     * Verifies if the passed transaction is correct. If not throws an exception.
     * @protected
     * @param {?} states
     * @param {?} transaction Transaction to be verified
     * @param {?=} recordRef
     * @return {?}
     */
    verifyAddedTransaction(states, transaction, recordRef) {
        /** @type {?} */
        const state = states.get(transaction.id);
        switch (transaction.type) {
            case TransactionType.ADD:
                if (state) {
                    //  cannot add same item twice
                    throw new Error(`Cannot add this transaction. Transaction with id: ${transaction.id} has been already added.`);
                }
                break;
            case TransactionType.DELETE:
            case TransactionType.UPDATE:
                if (state && state.type === TransactionType.DELETE) {
                    //  cannot delete or update deleted items
                    throw new Error(`Cannot add this transaction. Transaction with id: ${transaction.id} has been already deleted.`);
                }
                if (!state && !recordRef && !this._isPending) {
                    //  cannot initially add transaction or delete item with no recordRef
                    throw new Error(`Cannot add this transaction. This is first transaction of type ${transaction.type} ` +
                        `for id ${transaction.id}. For first transaction of this type recordRef is mandatory.`);
                }
                break;
        }
    }
    /**
     * Updates the provided states collection according to passed transaction and recordRef
     * @protected
     * @param {?} states States collection to apply the update to
     * @param {?} transaction Transaction to apply to the current state
     * @param {?=} recordRef Reference to the value of the record in data source, if any, where transaction should be applied
     * @return {?}
     */
    updateState(states, transaction, recordRef) {
        /** @type {?} */
        let state = states.get(transaction.id);
        //  if TransactionType is ADD simply add transaction to states;
        //  if TransactionType is DELETE:
        //    - if there is state with this id of type ADD remove it from the states;
        //    - if there is state with this id of type UPDATE change its type to DELETE;
        //    - if there is no state with this id add transaction to states;
        //  if TransactionType is UPDATE:
        //    - if there is state with this id of type ADD merge new value and state recordRef into state new value
        //    - if there is state with this id of type UPDATE merge new value into state new value
        //    - if there is state with this id and state type is DELETE change its type to UPDATE
        //    - if there is no state with this id add transaction to states;
        if (state) {
            switch (transaction.type) {
                case TransactionType.DELETE:
                    if (state.type === TransactionType.ADD) {
                        states.delete(transaction.id);
                    }
                    else if (state.type === TransactionType.UPDATE) {
                        state.value = transaction.newValue;
                        state.type = TransactionType.DELETE;
                    }
                    break;
                case TransactionType.UPDATE:
                    if (isObject(state.value)) {
                        if (state.type === TransactionType.ADD) {
                            state.value = this.mergeValues(state.value, transaction.newValue);
                        }
                        if (state.type === TransactionType.UPDATE) {
                            mergeObjects(state.value, transaction.newValue);
                        }
                    }
                    else {
                        state.value = transaction.newValue;
                    }
            }
        }
        else {
            state = (/** @type {?} */ ({ value: cloneValue(transaction.newValue), recordRef: recordRef, type: transaction.type }));
            states.set(transaction.id, state);
        }
        //  should not clean pending state. This will happen automatically on endPending call
        if (!this._isPending) {
            this.cleanState(transaction.id, states);
        }
    }
    /**
     * Compares the state with recordRef and clears all duplicated values. If any state ends as
     * empty object removes it from states.
     * @protected
     * @param {?} id
     * @param {?} states
     * @return {?}
     */
    cleanState(id, states) {
        /** @type {?} */
        const state = states.get(id);
        //  do nothing if
        //  there is no state, or
        //  there is no state value (e.g. DELETED transaction), or
        //  there is no recordRef (e.g. ADDED transaction)
        if (state && state.value && state.recordRef) {
            //  if state's value is object compare each key with the ones in recordRef
            //  if values in any key are the same delete it from state's value
            //  if state's value is not object, simply compare with recordRef and remove
            //  the state if they are equal
            if (isObject(state.recordRef)) {
                for (const key of Object.keys(state.value)) {
                    if (JSON.stringify(state.recordRef[key]) === JSON.stringify(state.value[key])) {
                        delete state.value[key];
                    }
                }
                //  if state's value is empty remove the state from the states, only if state is not DELETE type
                if (state.type !== TransactionType.DELETE && Object.keys(state.value).length === 0) {
                    states.delete(id);
                }
            }
            else {
                if (state.recordRef === state.value) {
                    states.delete(id);
                }
            }
        }
    }
    /**
     * Updates state related record in the provided data
     * @protected
     * @param {?} data Data source to update
     * @param {?} state State to update data from
     * @return {?}
     */
    updateRecord(data, state) {
        /** @type {?} */
        const index = data.findIndex(i => JSON.stringify(i) === JSON.stringify(state.recordRef || {}));
        switch (state.type) {
            case TransactionType.ADD:
                data.push(state.value);
                break;
            case TransactionType.DELETE:
                if (0 <= index && index < data.length) {
                    data.splice(index, 1);
                }
                break;
            case TransactionType.UPDATE:
                if (0 <= index && index < data.length) {
                    data[index] = this.updateValue(state);
                }
                break;
        }
    }
}
IgxTransactionService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxTransactionService.prototype._transactions;
    /**
     * @type {?}
     * @protected
     */
    IgxTransactionService.prototype._redoStack;
    /**
     * @type {?}
     * @protected
     */
    IgxTransactionService.prototype._undoStack;
    /**
     * @type {?}
     * @protected
     */
    IgxTransactionService.prototype._states;
    /**
     * \@inheritdoc
     * @type {?}
     */
    IgxTransactionService.prototype.onStateUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWd4LXRyYW5zYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90cmFuc2FjdGlvbi9pZ3gtdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBR3RFLE1BQU0sT0FBTyxxQkFBOEQsU0FBUSx5QkFBK0I7SUFEbEg7O1FBRWMsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUEyQyxFQUFFLENBQUM7UUFDeEQsZUFBVSxHQUEyQyxFQUFFLENBQUM7UUFDeEQsWUFBTyxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDOzs7O1FBbUJwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUErVHBELENBQUM7Ozs7O0lBN1VHLElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBS0QsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7OztJQVVNLEdBQUcsQ0FBQyxXQUFjLEVBQUUsU0FBZTs7Y0FDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ25FLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFN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SyxlQUFlLENBQUMsTUFBTTtnQkFDdkIsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQzs7O1lBdFZKLFVBQVU7Ozs7Ozs7SUFFUCw4Q0FBa0M7Ozs7O0lBQ2xDLDJDQUFrRTs7Ozs7SUFDbEUsMkNBQWtFOzs7OztJQUNsRSx3Q0FBMkM7Ozs7O0lBbUIzQyw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2FjdGlvbiwgU3RhdGUsIFRyYW5zYWN0aW9uVHlwZSB9IGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgSWd4QmFzZVRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gJy4vYmFzZS10cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzT2JqZWN0LCBtZXJnZU9iamVjdHMsIGNsb25lVmFsdWUgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElneFRyYW5zYWN0aW9uU2VydmljZTxUIGV4dGVuZHMgVHJhbnNhY3Rpb24sIFMgZXh0ZW5kcyBTdGF0ZT4gZXh0ZW5kcyBJZ3hCYXNlVHJhbnNhY3Rpb25TZXJ2aWNlPFQsIFM+IHtcbiAgICBwcm90ZWN0ZWQgX3RyYW5zYWN0aW9uczogVFtdID0gW107XG4gICAgcHJvdGVjdGVkIF9yZWRvU3RhY2s6IHsgdHJhbnNhY3Rpb246IFQsIHJlY29yZFJlZjogYW55IH1bXVtdID0gW107XG4gICAgcHJvdGVjdGVkIF91bmRvU3RhY2s6IHsgdHJhbnNhY3Rpb246IFQsIHJlY29yZFJlZjogYW55IH1bXVtdID0gW107XG4gICAgcHJvdGVjdGVkIF9zdGF0ZXM6IE1hcDxhbnksIFM+ID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBnZXQgY2FuVW5kbygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VuZG9TdGFjay5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZ2V0IGNhblJlZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRvU3RhY2subGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBvblN0YXRlVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkKHRyYW5zYWN0aW9uOiBULCByZWNvcmRSZWY/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RhdGVzID0gdGhpcy5faXNQZW5kaW5nID8gdGhpcy5fcGVuZGluZ1N0YXRlcyA6IHRoaXMuX3N0YXRlcztcbiAgICAgICAgdGhpcy52ZXJpZnlBZGRlZFRyYW5zYWN0aW9uKHN0YXRlcywgdHJhbnNhY3Rpb24sIHJlY29yZFJlZik7XG4gICAgICAgIHRoaXMuYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIHN0YXRlcywgcmVjb3JkUmVmKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFQsIHN0YXRlczogTWFwPGFueSwgUz4sIHJlY29yZFJlZj86IGFueSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlcywgdHJhbnNhY3Rpb24sIHJlY29yZFJlZik7XG5cbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gdGhpcy5faXNQZW5kaW5nID8gdGhpcy5fcGVuZGluZ1RyYW5zYWN0aW9ucyA6IHRoaXMuX3RyYW5zYWN0aW9ucztcbiAgICAgICAgdHJhbnNhY3Rpb25zLnB1c2godHJhbnNhY3Rpb24pO1xuXG4gICAgICAgIGlmICghdGhpcy5faXNQZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl91bmRvU3RhY2sucHVzaChbeyB0cmFuc2FjdGlvbiwgcmVjb3JkUmVmIH1dKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZG9TdGFjayA9IFtdO1xuICAgICAgICAgICAgdGhpcy5vblN0YXRlVXBkYXRlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGdldFRyYW5zYWN0aW9uTG9nKGlkPzogYW55KTogVFtdIHtcbiAgICAgICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2FjdGlvbnMuZmlsdGVyKHQgPT4gdC5pZCA9PT0gaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fdHJhbnNhY3Rpb25zXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBZ2dyZWdhdGVkQ2hhbmdlcyhtZXJnZUNoYW5nZXM6IGJvb2xlYW4pOiBUW10ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IFRbXSA9IFtdO1xuICAgICAgICB0aGlzLl9zdGF0ZXMuZm9yRWFjaCgoc3RhdGU6IFMsIGtleTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1lcmdlQ2hhbmdlcyA/IHRoaXMubWVyZ2VWYWx1ZXMoc3RhdGUucmVjb3JkUmVmLCBzdGF0ZS52YWx1ZSkgOiBzdGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgaWQ6IGtleSwgbmV3VmFsdWU6IHZhbHVlLCB0eXBlOiBzdGF0ZS50eXBlIH0gYXMgVCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGdldFN0YXRlKGlkOiBhbnksIHBlbmRpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IFMge1xuICAgICAgICByZXR1cm4gcGVuZGluZyA/IHRoaXMuX3BlbmRpbmdTdGF0ZXMuZ2V0KGlkKSA6IHRoaXMuX3N0YXRlcy5nZXQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBZ2dyZWdhdGVkVmFsdWUoaWQ6IGFueSwgbWVyZ2VDaGFuZ2VzOiBib29sZWFuKTogYW55IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9zdGF0ZXMuZ2V0KGlkKTtcbiAgICAgICAgY29uc3QgcGVuZGluZ1N0YXRlID0gc3VwZXIuZ2V0U3RhdGUoaWQpO1xuXG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBubyBzdGF0ZSBhbmQgdGhlcmUgaXMgbm8gcGVuZGluZyBzdGF0ZSByZXR1cm4gbnVsbFxuICAgICAgICBpZiAoIXN0YXRlICYmICFwZW5kaW5nU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGVuZGluZ0NoYW5nZSA9IHN1cGVyLmdldEFnZ3JlZ2F0ZWRWYWx1ZShpZCwgZmFsc2UpO1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSBzdGF0ZSAmJiBzdGF0ZS52YWx1ZTtcbiAgICAgICAgbGV0IGFnZ3JlZ2F0ZWRWYWx1ZSA9IHRoaXMubWVyZ2VWYWx1ZXMoY2hhbmdlLCBwZW5kaW5nQ2hhbmdlKTtcbiAgICAgICAgaWYgKG1lcmdlQ2hhbmdlcykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHN0YXRlID8gc3RhdGUucmVjb3JkUmVmIDogcGVuZGluZ1N0YXRlLnJlY29yZFJlZjtcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZWRWYWx1ZSA9IHRoaXMubWVyZ2VWYWx1ZXMob3JpZ2luYWxWYWx1ZSwgYWdncmVnYXRlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWdncmVnYXRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGVuZFBlbmRpbmcoY29tbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoY29tbWl0KSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25zOiB7IHRyYW5zYWN0aW9uOiBULCByZWNvcmRSZWY6IGFueSB9W10gPSBbXTtcbiAgICAgICAgICAgIC8vIGRvbid0IHVzZSBhZGRUcmFuc2FjdGlvbiBkdWUgdG8gY3VzdG9tIHVuZG8gaGFuZGxpbmdcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhbnNhY3Rpb24gb2YgdGhpcy5fcGVuZGluZ1RyYW5zYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlbmRpbmdTdGF0ZSA9IHRoaXMuX3BlbmRpbmdTdGF0ZXMuZ2V0KHRyYW5zYWN0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2FjdGlvbnMucHVzaCh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh0aGlzLl9zdGF0ZXMsIHRyYW5zYWN0aW9uLCBwZW5kaW5nU3RhdGUucmVjb3JkUmVmKTtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goeyB0cmFuc2FjdGlvbiwgcmVjb3JkUmVmOiBwZW5kaW5nU3RhdGUucmVjb3JkUmVmIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl91bmRvU3RhY2sucHVzaChhY3Rpb25zKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZG9TdGFjayA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLm9uU3RhdGVVcGRhdGUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmVuZFBlbmRpbmcoY29tbWl0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBjb21taXQoZGF0YTogYW55W10sIGlkPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoaWQpO1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZWNvcmQoZGF0YSwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVzLmZvckVhY2goKHM6IFMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlY29yZChkYXRhLCBzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXIoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKGlkPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2FjdGlvbnMgPSB0aGlzLl90cmFuc2FjdGlvbnMuZmlsdGVyKHQgPT4gdC5pZCAhPT0gaWQpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVzLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICAvLyAgVW5kbyBzdGFjayBpcyBhbiBhcnJheSBvZiBhY3Rpb25zLiBFYWNoIGFjdGlvbiBpcyBhcnJheSBvZiB0cmFuc2FjdGlvbiBsaWtlIG9iamVjdHNcbiAgICAgICAgICAgIC8vICBXZSBhcmUgZ29pbmcgdHJvdWdoIGFsbCB0aGUgYWN0aW9ucy4gRm9yIGVhY2ggYWN0aW9uIHdlIGFyZSBmaWx0ZXJpbmcgb3V0IHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgLy8gIHdpdGggcHJvdmlkZWQgaWQuIEZpbmFsbHkgaWYgYW55IGFjdGlvbiBlbmRzIHVwIGFzIGVtcHR5IGFycmF5IHdlIGFyZSByZW1vdmluZyBpdCBmcm9tXG4gICAgICAgICAgICAvLyAgdW5kbyBzdGFja1xuICAgICAgICAgICAgdGhpcy5fdW5kb1N0YWNrID0gdGhpcy5fdW5kb1N0YWNrLm1hcChhID0+IGEuZmlsdGVyKHQgPT4gdC50cmFuc2FjdGlvbi5pZCAhPT0gaWQpKS5maWx0ZXIoYSA9PiBhLmxlbmd0aCA+IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25zID0gW107XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3VuZG9TdGFjayA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlZG9TdGFjayA9IFtdO1xuICAgICAgICB0aGlzLm9uU3RhdGVVcGRhdGUuZW1pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIHVuZG8oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl91bmRvU3RhY2subGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxhc3RBY3Rpb25zOiB7IHRyYW5zYWN0aW9uOiBULCByZWNvcmRSZWY6IGFueSB9W10gPSB0aGlzLl91bmRvU3RhY2sucG9wKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9ucy5zcGxpY2UodGhpcy5fdHJhbnNhY3Rpb25zLmxlbmd0aCAtIGxhc3RBY3Rpb25zLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuX3JlZG9TdGFjay5wdXNoKGxhc3RBY3Rpb25zKTtcblxuICAgICAgICB0aGlzLl9zdGF0ZXMuY2xlYXIoKTtcbiAgICAgICAgZm9yIChjb25zdCBjdXJyZW50QWN0aW9ucyBvZiB0aGlzLl91bmRvU3RhY2spIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhbnNhY3Rpb24gb2YgY3VycmVudEFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHRoaXMuX3N0YXRlcywgdHJhbnNhY3Rpb24udHJhbnNhY3Rpb24sIHRyYW5zYWN0aW9uLnJlY29yZFJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uU3RhdGVVcGRhdGUuZW1pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIHJlZG8oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9yZWRvU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGFjdGlvbnM6IHsgdHJhbnNhY3Rpb246IFQsIHJlY29yZFJlZjogYW55LCB1c2VJblVuZG8/OiBib29sZWFuIH1bXTtcbiAgICAgICAgICAgIGFjdGlvbnMgPSB0aGlzLl9yZWRvU3RhY2sucG9wKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh0aGlzLl9zdGF0ZXMsIGFjdGlvbi50cmFuc2FjdGlvbiwgYWN0aW9uLnJlY29yZFJlZik7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25zLnB1c2goYWN0aW9uLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdW5kb1N0YWNrLnB1c2goYWN0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLm9uU3RhdGVVcGRhdGUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVyaWZpZXMgaWYgdGhlIHBhc3NlZCB0cmFuc2FjdGlvbiBpcyBjb3JyZWN0LiBJZiBub3QgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gVHJhbnNhY3Rpb24gdG8gYmUgdmVyaWZpZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdmVyaWZ5QWRkZWRUcmFuc2FjdGlvbihzdGF0ZXM6IE1hcDxhbnksIFM+LCB0cmFuc2FjdGlvbjogVCwgcmVjb3JkUmVmPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVzLmdldCh0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgIHN3aXRjaCAodHJhbnNhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUcmFuc2FjdGlvblR5cGUuQUREOlxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2Fubm90IGFkZCBzYW1lIGl0ZW0gdHdpY2VcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYWRkIHRoaXMgdHJhbnNhY3Rpb24uIFRyYW5zYWN0aW9uIHdpdGggaWQ6ICR7dHJhbnNhY3Rpb24uaWR9IGhhcyBiZWVuIGFscmVhZHkgYWRkZWQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2FjdGlvblR5cGUuREVMRVRFOlxuICAgICAgICAgICAgY2FzZSBUcmFuc2FjdGlvblR5cGUuVVBEQVRFOlxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50eXBlID09PSBUcmFuc2FjdGlvblR5cGUuREVMRVRFKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYW5ub3QgZGVsZXRlIG9yIHVwZGF0ZSBkZWxldGVkIGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGFkZCB0aGlzIHRyYW5zYWN0aW9uLiBUcmFuc2FjdGlvbiB3aXRoIGlkOiAke3RyYW5zYWN0aW9uLmlkfSBoYXMgYmVlbiBhbHJlYWR5IGRlbGV0ZWQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc3RhdGUgJiYgIXJlY29yZFJlZiAmJiAhdGhpcy5faXNQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYW5ub3QgaW5pdGlhbGx5IGFkZCB0cmFuc2FjdGlvbiBvciBkZWxldGUgaXRlbSB3aXRoIG5vIHJlY29yZFJlZlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhZGQgdGhpcyB0cmFuc2FjdGlvbi4gVGhpcyBpcyBmaXJzdCB0cmFuc2FjdGlvbiBvZiB0eXBlICR7dHJhbnNhY3Rpb24udHlwZX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgZm9yIGlkICR7dHJhbnNhY3Rpb24uaWR9LiBGb3IgZmlyc3QgdHJhbnNhY3Rpb24gb2YgdGhpcyB0eXBlIHJlY29yZFJlZiBpcyBtYW5kYXRvcnkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcHJvdmlkZWQgc3RhdGVzIGNvbGxlY3Rpb24gYWNjb3JkaW5nIHRvIHBhc3NlZCB0cmFuc2FjdGlvbiBhbmQgcmVjb3JkUmVmXG4gICAgICogQHBhcmFtIHN0YXRlcyBTdGF0ZXMgY29sbGVjdGlvbiB0byBhcHBseSB0aGUgdXBkYXRlIHRvXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uIFRyYW5zYWN0aW9uIHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICogQHBhcmFtIHJlY29yZFJlZiBSZWZlcmVuY2UgdG8gdGhlIHZhbHVlIG9mIHRoZSByZWNvcmQgaW4gZGF0YSBzb3VyY2UsIGlmIGFueSwgd2hlcmUgdHJhbnNhY3Rpb24gc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGVzOiBNYXA8YW55LCBTPiwgdHJhbnNhY3Rpb246IFQsIHJlY29yZFJlZj86IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgc3RhdGUgPSBzdGF0ZXMuZ2V0KHRyYW5zYWN0aW9uLmlkKTtcbiAgICAgICAgLy8gIGlmIFRyYW5zYWN0aW9uVHlwZSBpcyBBREQgc2ltcGx5IGFkZCB0cmFuc2FjdGlvbiB0byBzdGF0ZXM7XG4gICAgICAgIC8vICBpZiBUcmFuc2FjdGlvblR5cGUgaXMgREVMRVRFOlxuICAgICAgICAvLyAgICAtIGlmIHRoZXJlIGlzIHN0YXRlIHdpdGggdGhpcyBpZCBvZiB0eXBlIEFERCByZW1vdmUgaXQgZnJvbSB0aGUgc3RhdGVzO1xuICAgICAgICAvLyAgICAtIGlmIHRoZXJlIGlzIHN0YXRlIHdpdGggdGhpcyBpZCBvZiB0eXBlIFVQREFURSBjaGFuZ2UgaXRzIHR5cGUgdG8gREVMRVRFO1xuICAgICAgICAvLyAgICAtIGlmIHRoZXJlIGlzIG5vIHN0YXRlIHdpdGggdGhpcyBpZCBhZGQgdHJhbnNhY3Rpb24gdG8gc3RhdGVzO1xuICAgICAgICAvLyAgaWYgVHJhbnNhY3Rpb25UeXBlIGlzIFVQREFURTpcbiAgICAgICAgLy8gICAgLSBpZiB0aGVyZSBpcyBzdGF0ZSB3aXRoIHRoaXMgaWQgb2YgdHlwZSBBREQgbWVyZ2UgbmV3IHZhbHVlIGFuZCBzdGF0ZSByZWNvcmRSZWYgaW50byBzdGF0ZSBuZXcgdmFsdWVcbiAgICAgICAgLy8gICAgLSBpZiB0aGVyZSBpcyBzdGF0ZSB3aXRoIHRoaXMgaWQgb2YgdHlwZSBVUERBVEUgbWVyZ2UgbmV3IHZhbHVlIGludG8gc3RhdGUgbmV3IHZhbHVlXG4gICAgICAgIC8vICAgIC0gaWYgdGhlcmUgaXMgc3RhdGUgd2l0aCB0aGlzIGlkIGFuZCBzdGF0ZSB0eXBlIGlzIERFTEVURSBjaGFuZ2UgaXRzIHR5cGUgdG8gVVBEQVRFXG4gICAgICAgIC8vICAgIC0gaWYgdGhlcmUgaXMgbm8gc3RhdGUgd2l0aCB0aGlzIGlkIGFkZCB0cmFuc2FjdGlvbiB0byBzdGF0ZXM7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgc3dpdGNoICh0cmFuc2FjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUcmFuc2FjdGlvblR5cGUuREVMRVRFOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUudHlwZSA9PT0gVHJhbnNhY3Rpb25UeXBlLkFERCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmRlbGV0ZSh0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUudHlwZSA9PT0gVHJhbnNhY3Rpb25UeXBlLlVQREFURSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmFsdWUgPSB0cmFuc2FjdGlvbi5uZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnR5cGUgPSBUcmFuc2FjdGlvblR5cGUuREVMRVRFO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLlVQREFURTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHN0YXRlLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5BREQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS52YWx1ZSA9IHRoaXMubWVyZ2VWYWx1ZXMoc3RhdGUudmFsdWUsIHRyYW5zYWN0aW9uLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50eXBlID09PSBUcmFuc2FjdGlvblR5cGUuVVBEQVRFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VPYmplY3RzKHN0YXRlLnZhbHVlLCB0cmFuc2FjdGlvbi5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS52YWx1ZSA9IHRyYW5zYWN0aW9uLm5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHsgdmFsdWU6IGNsb25lVmFsdWUodHJhbnNhY3Rpb24ubmV3VmFsdWUpLCByZWNvcmRSZWY6IHJlY29yZFJlZiwgdHlwZTogdHJhbnNhY3Rpb24udHlwZSB9IGFzIFM7XG4gICAgICAgICAgICBzdGF0ZXMuc2V0KHRyYW5zYWN0aW9uLmlkLCBzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgc2hvdWxkIG5vdCBjbGVhbiBwZW5kaW5nIHN0YXRlLiBUaGlzIHdpbGwgaGFwcGVuIGF1dG9tYXRpY2FsbHkgb24gZW5kUGVuZGluZyBjYWxsXG4gICAgICAgIGlmICghdGhpcy5faXNQZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuU3RhdGUodHJhbnNhY3Rpb24uaWQsIHN0YXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wYXJlcyB0aGUgc3RhdGUgd2l0aCByZWNvcmRSZWYgYW5kIGNsZWFycyBhbGwgZHVwbGljYXRlZCB2YWx1ZXMuIElmIGFueSBzdGF0ZSBlbmRzIGFzXG4gICAgICogZW1wdHkgb2JqZWN0IHJlbW92ZXMgaXQgZnJvbSBzdGF0ZXMuXG4gICAgICogQHBhcmFtIHN0YXRlIFN0YXRlIHRvIGNsZWFuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNsZWFuU3RhdGUoaWQ6IGFueSwgc3RhdGVzOiBNYXA8YW55LCBTPik6IHZvaWQge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlcy5nZXQoaWQpO1xuICAgICAgICAvLyAgZG8gbm90aGluZyBpZlxuICAgICAgICAvLyAgdGhlcmUgaXMgbm8gc3RhdGUsIG9yXG4gICAgICAgIC8vICB0aGVyZSBpcyBubyBzdGF0ZSB2YWx1ZSAoZS5nLiBERUxFVEVEIHRyYW5zYWN0aW9uKSwgb3JcbiAgICAgICAgLy8gIHRoZXJlIGlzIG5vIHJlY29yZFJlZiAoZS5nLiBBRERFRCB0cmFuc2FjdGlvbilcbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnZhbHVlICYmIHN0YXRlLnJlY29yZFJlZikge1xuICAgICAgICAgICAgLy8gIGlmIHN0YXRlJ3MgdmFsdWUgaXMgb2JqZWN0IGNvbXBhcmUgZWFjaCBrZXkgd2l0aCB0aGUgb25lcyBpbiByZWNvcmRSZWZcbiAgICAgICAgICAgIC8vICBpZiB2YWx1ZXMgaW4gYW55IGtleSBhcmUgdGhlIHNhbWUgZGVsZXRlIGl0IGZyb20gc3RhdGUncyB2YWx1ZVxuICAgICAgICAgICAgLy8gIGlmIHN0YXRlJ3MgdmFsdWUgaXMgbm90IG9iamVjdCwgc2ltcGx5IGNvbXBhcmUgd2l0aCByZWNvcmRSZWYgYW5kIHJlbW92ZVxuICAgICAgICAgICAgLy8gIHRoZSBzdGF0ZSBpZiB0aGV5IGFyZSBlcXVhbFxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHN0YXRlLnJlY29yZFJlZikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzdGF0ZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHN0YXRlLnJlY29yZFJlZltrZXldKSA9PT0gSlNPTi5zdHJpbmdpZnkoc3RhdGUudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS52YWx1ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gIGlmIHN0YXRlJ3MgdmFsdWUgaXMgZW1wdHkgcmVtb3ZlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzdGF0ZXMsIG9ubHkgaWYgc3RhdGUgaXMgbm90IERFTEVURSB0eXBlXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnR5cGUgIT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUgJiYgT2JqZWN0LmtleXMoc3RhdGUudmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuZGVsZXRlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5yZWNvcmRSZWYgPT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5kZWxldGUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgc3RhdGUgcmVsYXRlZCByZWNvcmQgaW4gdGhlIHByb3ZpZGVkIGRhdGFcbiAgICAgKiBAcGFyYW0gZGF0YSBEYXRhIHNvdXJjZSB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0gc3RhdGUgU3RhdGUgdG8gdXBkYXRlIGRhdGEgZnJvbVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVSZWNvcmQoZGF0YTogYW55W10sIHN0YXRlOiBTKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGF0YS5maW5kSW5kZXgoaSA9PiBKU09OLnN0cmluZ2lmeShpKSA9PT0gSlNPTi5zdHJpbmdpZnkoc3RhdGUucmVjb3JkUmVmIHx8IHt9KSk7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUcmFuc2FjdGlvblR5cGUuQUREOlxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChzdGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRyYW5zYWN0aW9uVHlwZS5ERUxFVEU6XG4gICAgICAgICAgICAgICAgaWYgKDAgPD0gaW5kZXggJiYgaW5kZXggPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2FjdGlvblR5cGUuVVBEQVRFOlxuICAgICAgICAgICAgICAgIGlmICgwIDw9IGluZGV4ICYmIGluZGV4IDwgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF0gPSB0aGlzLnVwZGF0ZVZhbHVlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
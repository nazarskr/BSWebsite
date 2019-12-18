/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TransactionType } from './transaction';
import { IgxBaseTransactionService } from './base-transaction';
import { EventEmitter, Injectable } from '@angular/core';
import { isObject, mergeObjects, cloneValue } from '../../core/utils';
/**
 * @template T, S
 */
var IgxTransactionService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxTransactionService, _super);
    function IgxTransactionService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._transactions = [];
        _this._redoStack = [];
        _this._undoStack = [];
        _this._states = new Map();
        /**
         * \@inheritdoc
         */
        _this.onStateUpdate = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IgxTransactionService.prototype, "canUndo", {
        /**
         * @inheritdoc
         */
        get: /**
         * \@inheritdoc
         * @return {?}
         */
        function () {
            return this._undoStack.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTransactionService.prototype, "canRedo", {
        /**
         * @inheritdoc
         */
        get: /**
         * \@inheritdoc
         * @return {?}
         */
        function () {
            return this._redoStack.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} transaction
     * @param {?=} recordRef
     * @return {?}
     */
    IgxTransactionService.prototype.add = /**
     * \@inheritdoc
     * @param {?} transaction
     * @param {?=} recordRef
     * @return {?}
     */
    function (transaction, recordRef) {
        /** @type {?} */
        var states = this._isPending ? this._pendingStates : this._states;
        this.verifyAddedTransaction(states, transaction, recordRef);
        this.addTransaction(transaction, states, recordRef);
    };
    /**
     * @protected
     * @param {?} transaction
     * @param {?} states
     * @param {?=} recordRef
     * @return {?}
     */
    IgxTransactionService.prototype.addTransaction = /**
     * @protected
     * @param {?} transaction
     * @param {?} states
     * @param {?=} recordRef
     * @return {?}
     */
    function (transaction, states, recordRef) {
        this.updateState(states, transaction, recordRef);
        /** @type {?} */
        var transactions = this._isPending ? this._pendingTransactions : this._transactions;
        transactions.push(transaction);
        if (!this._isPending) {
            this._undoStack.push([{ transaction: transaction, recordRef: recordRef }]);
            this._redoStack = [];
            this.onStateUpdate.emit();
        }
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    IgxTransactionService.prototype.getTransactionLog = /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        if (id !== undefined) {
            return this._transactions.filter(function (t) { return t.id === id; });
        }
        return tslib_1.__spread(this._transactions);
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} mergeChanges
     * @return {?}
     */
    IgxTransactionService.prototype.getAggregatedChanges = /**
     * \@inheritdoc
     * @param {?} mergeChanges
     * @return {?}
     */
    function (mergeChanges) {
        var _this = this;
        /** @type {?} */
        var result = [];
        this._states.forEach(function (state, key) {
            /** @type {?} */
            var value = mergeChanges ? _this.mergeValues(state.recordRef, state.value) : state.value;
            result.push((/** @type {?} */ ({ id: key, newValue: value, type: state.type })));
        });
        return result;
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} id
     * @param {?=} pending
     * @return {?}
     */
    IgxTransactionService.prototype.getState = /**
     * \@inheritdoc
     * @param {?} id
     * @param {?=} pending
     * @return {?}
     */
    function (id, pending) {
        if (pending === void 0) { pending = false; }
        return pending ? this._pendingStates.get(id) : this._states.get(id);
    };
    Object.defineProperty(IgxTransactionService.prototype, "enabled", {
        /**
         * @inheritdoc
         */
        get: /**
         * \@inheritdoc
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} id
     * @param {?} mergeChanges
     * @return {?}
     */
    IgxTransactionService.prototype.getAggregatedValue = /**
     * \@inheritdoc
     * @param {?} id
     * @param {?} mergeChanges
     * @return {?}
     */
    function (id, mergeChanges) {
        /** @type {?} */
        var state = this._states.get(id);
        /** @type {?} */
        var pendingState = _super.prototype.getState.call(this, id);
        //  if there is no state and there is no pending state return null
        if (!state && !pendingState) {
            return null;
        }
        /** @type {?} */
        var pendingChange = _super.prototype.getAggregatedValue.call(this, id, false);
        /** @type {?} */
        var change = state && state.value;
        /** @type {?} */
        var aggregatedValue = this.mergeValues(change, pendingChange);
        if (mergeChanges) {
            /** @type {?} */
            var originalValue = state ? state.recordRef : pendingState.recordRef;
            aggregatedValue = this.mergeValues(originalValue, aggregatedValue);
        }
        return aggregatedValue;
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} commit
     * @return {?}
     */
    IgxTransactionService.prototype.endPending = /**
     * \@inheritdoc
     * @param {?} commit
     * @return {?}
     */
    function (commit) {
        var e_1, _a;
        this._isPending = false;
        if (commit) {
            /** @type {?} */
            var actions = [];
            try {
                // don't use addTransaction due to custom undo handling
                for (var _b = tslib_1.__values(this._pendingTransactions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var transaction = _c.value;
                    /** @type {?} */
                    var pendingState = this._pendingStates.get(transaction.id);
                    this._transactions.push(transaction);
                    this.updateState(this._states, transaction, pendingState.recordRef);
                    actions.push({ transaction: transaction, recordRef: pendingState.recordRef });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._undoStack.push(actions);
            this._redoStack = [];
            this.onStateUpdate.emit();
        }
        _super.prototype.endPending.call(this, commit);
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} data
     * @param {?=} id
     * @return {?}
     */
    IgxTransactionService.prototype.commit = /**
     * \@inheritdoc
     * @param {?} data
     * @param {?=} id
     * @return {?}
     */
    function (data, id) {
        var _this = this;
        if (id !== undefined) {
            /** @type {?} */
            var state = this.getState(id);
            if (state) {
                this.updateRecord(data, state);
            }
        }
        else {
            this._states.forEach(function (s) {
                _this.updateRecord(data, s);
            });
        }
        this.clear(id);
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    IgxTransactionService.prototype.clear = /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        if (id !== undefined) {
            this._transactions = this._transactions.filter(function (t) { return t.id !== id; });
            this._states.delete(id);
            //  Undo stack is an array of actions. Each action is array of transaction like objects
            //  We are going trough all the actions. For each action we are filtering out transactions
            //  with provided id. Finally if any action ends up as empty array we are removing it from
            //  undo stack
            this._undoStack = this._undoStack.map(function (a) { return a.filter(function (t) { return t.transaction.id !== id; }); }).filter(function (a) { return a.length > 0; });
        }
        else {
            this._transactions = [];
            this._states.clear();
            this._undoStack = [];
        }
        this._redoStack = [];
        this.onStateUpdate.emit();
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @return {?}
     */
    IgxTransactionService.prototype.undo = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        var e_2, _a, e_3, _b;
        if (this._undoStack.length <= 0) {
            return;
        }
        /** @type {?} */
        var lastActions = this._undoStack.pop();
        this._transactions.splice(this._transactions.length - lastActions.length);
        this._redoStack.push(lastActions);
        this._states.clear();
        try {
            for (var _c = tslib_1.__values(this._undoStack), _d = _c.next(); !_d.done; _d = _c.next()) {
                var currentActions = _d.value;
                try {
                    for (var currentActions_1 = tslib_1.__values(currentActions), currentActions_1_1 = currentActions_1.next(); !currentActions_1_1.done; currentActions_1_1 = currentActions_1.next()) {
                        var transaction = currentActions_1_1.value;
                        this.updateState(this._states, transaction.transaction, transaction.recordRef);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (currentActions_1_1 && !currentActions_1_1.done && (_b = currentActions_1.return)) _b.call(currentActions_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.onStateUpdate.emit();
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @return {?}
     */
    IgxTransactionService.prototype.redo = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        var e_4, _a;
        if (this._redoStack.length > 0) {
            /** @type {?} */
            var actions = void 0;
            actions = this._redoStack.pop();
            try {
                for (var actions_1 = tslib_1.__values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                    var action = actions_1_1.value;
                    this.updateState(this._states, action.transaction, action.recordRef);
                    this._transactions.push(action.transaction);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
            this._undoStack.push(actions);
            this.onStateUpdate.emit();
        }
    };
    /**
     * Verifies if the passed transaction is correct. If not throws an exception.
     * @param transaction Transaction to be verified
     */
    /**
     * Verifies if the passed transaction is correct. If not throws an exception.
     * @protected
     * @param {?} states
     * @param {?} transaction Transaction to be verified
     * @param {?=} recordRef
     * @return {?}
     */
    IgxTransactionService.prototype.verifyAddedTransaction = /**
     * Verifies if the passed transaction is correct. If not throws an exception.
     * @protected
     * @param {?} states
     * @param {?} transaction Transaction to be verified
     * @param {?=} recordRef
     * @return {?}
     */
    function (states, transaction, recordRef) {
        /** @type {?} */
        var state = states.get(transaction.id);
        switch (transaction.type) {
            case TransactionType.ADD:
                if (state) {
                    //  cannot add same item twice
                    throw new Error("Cannot add this transaction. Transaction with id: " + transaction.id + " has been already added.");
                }
                break;
            case TransactionType.DELETE:
            case TransactionType.UPDATE:
                if (state && state.type === TransactionType.DELETE) {
                    //  cannot delete or update deleted items
                    throw new Error("Cannot add this transaction. Transaction with id: " + transaction.id + " has been already deleted.");
                }
                if (!state && !recordRef && !this._isPending) {
                    //  cannot initially add transaction or delete item with no recordRef
                    throw new Error("Cannot add this transaction. This is first transaction of type " + transaction.type + " " +
                        ("for id " + transaction.id + ". For first transaction of this type recordRef is mandatory."));
                }
                break;
        }
    };
    /**
     * Updates the provided states collection according to passed transaction and recordRef
     * @param states States collection to apply the update to
     * @param transaction Transaction to apply to the current state
     * @param recordRef Reference to the value of the record in data source, if any, where transaction should be applied
     */
    /**
     * Updates the provided states collection according to passed transaction and recordRef
     * @protected
     * @param {?} states States collection to apply the update to
     * @param {?} transaction Transaction to apply to the current state
     * @param {?=} recordRef Reference to the value of the record in data source, if any, where transaction should be applied
     * @return {?}
     */
    IgxTransactionService.prototype.updateState = /**
     * Updates the provided states collection according to passed transaction and recordRef
     * @protected
     * @param {?} states States collection to apply the update to
     * @param {?} transaction Transaction to apply to the current state
     * @param {?=} recordRef Reference to the value of the record in data source, if any, where transaction should be applied
     * @return {?}
     */
    function (states, transaction, recordRef) {
        /** @type {?} */
        var state = states.get(transaction.id);
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
    };
    /**
     * Compares the state with recordRef and clears all duplicated values. If any state ends as
     * empty object removes it from states.
     * @param state State to clean
     */
    /**
     * Compares the state with recordRef and clears all duplicated values. If any state ends as
     * empty object removes it from states.
     * @protected
     * @param {?} id
     * @param {?} states
     * @return {?}
     */
    IgxTransactionService.prototype.cleanState = /**
     * Compares the state with recordRef and clears all duplicated values. If any state ends as
     * empty object removes it from states.
     * @protected
     * @param {?} id
     * @param {?} states
     * @return {?}
     */
    function (id, states) {
        var e_5, _a;
        /** @type {?} */
        var state = states.get(id);
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
                try {
                    for (var _b = tslib_1.__values(Object.keys(state.value)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (JSON.stringify(state.recordRef[key]) === JSON.stringify(state.value[key])) {
                            delete state.value[key];
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_5) throw e_5.error; }
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
    };
    /**
     * Updates state related record in the provided data
     * @param data Data source to update
     * @param state State to update data from
     */
    /**
     * Updates state related record in the provided data
     * @protected
     * @param {?} data Data source to update
     * @param {?} state State to update data from
     * @return {?}
     */
    IgxTransactionService.prototype.updateRecord = /**
     * Updates state related record in the provided data
     * @protected
     * @param {?} data Data source to update
     * @param {?} state State to update data from
     * @return {?}
     */
    function (data, state) {
        /** @type {?} */
        var index = data.findIndex(function (i) { return JSON.stringify(i) === JSON.stringify(state.recordRef || {}); });
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
    };
    IgxTransactionService.decorators = [
        { type: Injectable }
    ];
    return IgxTransactionService;
}(IgxBaseTransactionService));
export { IgxTransactionService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWd4LXRyYW5zYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90cmFuc2FjdGlvbi9pZ3gtdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXNCLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUV0RTtJQUNtRixpREFBK0I7SUFEbEg7UUFBQSxxRUF1VkM7UUFyVmEsbUJBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsZ0JBQVUsR0FBMkMsRUFBRSxDQUFDO1FBQ3hELGdCQUFVLEdBQTJDLEVBQUUsQ0FBQztRQUN4RCxhQUFPLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7Ozs7UUFtQnBDLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7SUErVHBELENBQUM7SUE3VUcsc0JBQUksMENBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksMENBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBT0Q7O09BRUc7Ozs7Ozs7SUFDSSxtQ0FBRzs7Ozs7O0lBQVYsVUFBVyxXQUFjLEVBQUUsU0FBZTs7WUFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUks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QU07U0FDYjtJQUNMLENBQUM7O2dCQXRWSixVQUFVOztJQXVWWCw0QkFBQztDQUFBLEFBdlZELENBQ21GLHlCQUF5QixHQXNWM0c7U0F0VlkscUJBQXFCOzs7Ozs7SUFDOUIsOENBQWtDOzs7OztJQUNsQywyQ0FBa0U7Ozs7O0lBQ2xFLDJDQUFrRTs7Ozs7SUFDbEUsd0NBQTJDOzs7OztJQW1CM0MsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFN0YXRlLCBUcmFuc2FjdGlvblR5cGUgfSBmcm9tICcuL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IElneEJhc2VUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuL2Jhc2UtdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc09iamVjdCwgbWVyZ2VPYmplY3RzLCBjbG9uZVZhbHVlIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZ3hUcmFuc2FjdGlvblNlcnZpY2U8VCBleHRlbmRzIFRyYW5zYWN0aW9uLCBTIGV4dGVuZHMgU3RhdGU+IGV4dGVuZHMgSWd4QmFzZVRyYW5zYWN0aW9uU2VydmljZTxULCBTPiB7XG4gICAgcHJvdGVjdGVkIF90cmFuc2FjdGlvbnM6IFRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfcmVkb1N0YWNrOiB7IHRyYW5zYWN0aW9uOiBULCByZWNvcmRSZWY6IGFueSB9W11bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfdW5kb1N0YWNrOiB7IHRyYW5zYWN0aW9uOiBULCByZWNvcmRSZWY6IGFueSB9W11bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfc3RhdGVzOiBNYXA8YW55LCBTPiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZ2V0IGNhblVuZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bmRvU3RhY2subGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGdldCBjYW5SZWRvKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVkb1N0YWNrLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgb25TdGF0ZVVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGFkZCh0cmFuc2FjdGlvbjogVCwgcmVjb3JkUmVmPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuX2lzUGVuZGluZyA/IHRoaXMuX3BlbmRpbmdTdGF0ZXMgOiB0aGlzLl9zdGF0ZXM7XG4gICAgICAgIHRoaXMudmVyaWZ5QWRkZWRUcmFuc2FjdGlvbihzdGF0ZXMsIHRyYW5zYWN0aW9uLCByZWNvcmRSZWYpO1xuICAgICAgICB0aGlzLmFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBzdGF0ZXMsIHJlY29yZFJlZik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBULCBzdGF0ZXM6IE1hcDxhbnksIFM+LCByZWNvcmRSZWY/OiBhbnkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZXMsIHRyYW5zYWN0aW9uLCByZWNvcmRSZWYpO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IHRoaXMuX2lzUGVuZGluZyA/IHRoaXMuX3BlbmRpbmdUcmFuc2FjdGlvbnMgOiB0aGlzLl90cmFuc2FjdGlvbnM7XG4gICAgICAgIHRyYW5zYWN0aW9ucy5wdXNoKHRyYW5zYWN0aW9uKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2lzUGVuZGluZykge1xuICAgICAgICAgICAgdGhpcy5fdW5kb1N0YWNrLnB1c2goW3sgdHJhbnNhY3Rpb24sIHJlY29yZFJlZiB9XSk7XG4gICAgICAgICAgICB0aGlzLl9yZWRvU3RhY2sgPSBbXTtcbiAgICAgICAgICAgIHRoaXMub25TdGF0ZVVwZGF0ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUcmFuc2FjdGlvbkxvZyhpZD86IGFueSk6IFRbXSB7XG4gICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IHQuaWQgPT09IGlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuX3RyYW5zYWN0aW9uc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QWdncmVnYXRlZENoYW5nZXMobWVyZ2VDaGFuZ2VzOiBib29sZWFuKTogVFtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXTtcbiAgICAgICAgdGhpcy5fc3RhdGVzLmZvckVhY2goKHN0YXRlOiBTLCBrZXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtZXJnZUNoYW5nZXMgPyB0aGlzLm1lcmdlVmFsdWVzKHN0YXRlLnJlY29yZFJlZiwgc3RhdGUudmFsdWUpIDogc3RhdGUudmFsdWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGlkOiBrZXksIG5ld1ZhbHVlOiB2YWx1ZSwgdHlwZTogc3RhdGUudHlwZSB9IGFzIFQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdGF0ZShpZDogYW55LCBwZW5kaW5nOiBib29sZWFuID0gZmFsc2UpOiBTIHtcbiAgICAgICAgcmV0dXJuIHBlbmRpbmcgPyB0aGlzLl9wZW5kaW5nU3RhdGVzLmdldChpZCkgOiB0aGlzLl9zdGF0ZXMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QWdncmVnYXRlZFZhbHVlKGlkOiBhbnksIG1lcmdlQ2hhbmdlczogYm9vbGVhbik6IGFueSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fc3RhdGVzLmdldChpZCk7XG4gICAgICAgIGNvbnN0IHBlbmRpbmdTdGF0ZSA9IHN1cGVyLmdldFN0YXRlKGlkKTtcblxuICAgICAgICAvLyAgaWYgdGhlcmUgaXMgbm8gc3RhdGUgYW5kIHRoZXJlIGlzIG5vIHBlbmRpbmcgc3RhdGUgcmV0dXJuIG51bGxcbiAgICAgICAgaWYgKCFzdGF0ZSAmJiAhcGVuZGluZ1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBlbmRpbmdDaGFuZ2UgPSBzdXBlci5nZXRBZ2dyZWdhdGVkVmFsdWUoaWQsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgY2hhbmdlID0gc3RhdGUgJiYgc3RhdGUudmFsdWU7XG4gICAgICAgIGxldCBhZ2dyZWdhdGVkVmFsdWUgPSB0aGlzLm1lcmdlVmFsdWVzKGNoYW5nZSwgcGVuZGluZ0NoYW5nZSk7XG4gICAgICAgIGlmIChtZXJnZUNoYW5nZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBzdGF0ZSA/IHN0YXRlLnJlY29yZFJlZiA6IHBlbmRpbmdTdGF0ZS5yZWNvcmRSZWY7XG4gICAgICAgICAgICBhZ2dyZWdhdGVkVmFsdWUgPSB0aGlzLm1lcmdlVmFsdWVzKG9yaWdpbmFsVmFsdWUsIGFnZ3JlZ2F0ZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBlbmRQZW5kaW5nKGNvbW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNvbW1pdCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uczogeyB0cmFuc2FjdGlvbjogVCwgcmVjb3JkUmVmOiBhbnkgfVtdID0gW107XG4gICAgICAgICAgICAvLyBkb24ndCB1c2UgYWRkVHJhbnNhY3Rpb24gZHVlIHRvIGN1c3RvbSB1bmRvIGhhbmRsaW5nXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYW5zYWN0aW9uIG9mIHRoaXMuX3BlbmRpbmdUcmFuc2FjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nU3RhdGUgPSB0aGlzLl9wZW5kaW5nU3RhdGVzLmdldCh0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25zLnB1c2godHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUodGhpcy5fc3RhdGVzLCB0cmFuc2FjdGlvbiwgcGVuZGluZ1N0YXRlLnJlY29yZFJlZik7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKHsgdHJhbnNhY3Rpb24sIHJlY29yZFJlZjogcGVuZGluZ1N0YXRlLnJlY29yZFJlZiB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdW5kb1N0YWNrLnB1c2goYWN0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9yZWRvU3RhY2sgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5vblN0YXRlVXBkYXRlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5lbmRQZW5kaW5nKGNvbW1pdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgY29tbWl0KGRhdGE6IGFueVtdLCBpZD86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKGlkKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVjb3JkKGRhdGEsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlcy5mb3JFYWNoKChzOiBTKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZWNvcmQoZGF0YSwgcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcihpZD86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25zID0gdGhpcy5fdHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IHQuaWQgIT09IGlkKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlcy5kZWxldGUoaWQpO1xuICAgICAgICAgICAgLy8gIFVuZG8gc3RhY2sgaXMgYW4gYXJyYXkgb2YgYWN0aW9ucy4gRWFjaCBhY3Rpb24gaXMgYXJyYXkgb2YgdHJhbnNhY3Rpb24gbGlrZSBvYmplY3RzXG4gICAgICAgICAgICAvLyAgV2UgYXJlIGdvaW5nIHRyb3VnaCBhbGwgdGhlIGFjdGlvbnMuIEZvciBlYWNoIGFjdGlvbiB3ZSBhcmUgZmlsdGVyaW5nIG91dCB0cmFuc2FjdGlvbnNcbiAgICAgICAgICAgIC8vICB3aXRoIHByb3ZpZGVkIGlkLiBGaW5hbGx5IGlmIGFueSBhY3Rpb24gZW5kcyB1cCBhcyBlbXB0eSBhcnJheSB3ZSBhcmUgcmVtb3ZpbmcgaXQgZnJvbVxuICAgICAgICAgICAgLy8gIHVuZG8gc3RhY2tcbiAgICAgICAgICAgIHRoaXMuX3VuZG9TdGFjayA9IHRoaXMuX3VuZG9TdGFjay5tYXAoYSA9PiBhLmZpbHRlcih0ID0+IHQudHJhbnNhY3Rpb24uaWQgIT09IGlkKSkuZmlsdGVyKGEgPT4gYS5sZW5ndGggPiAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl91bmRvU3RhY2sgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZWRvU3RhY2sgPSBbXTtcbiAgICAgICAgdGhpcy5vblN0YXRlVXBkYXRlLmVtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyB1bmRvKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fdW5kb1N0YWNrLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0QWN0aW9uczogeyB0cmFuc2FjdGlvbjogVCwgcmVjb3JkUmVmOiBhbnkgfVtdID0gdGhpcy5fdW5kb1N0YWNrLnBvcCgpO1xuICAgICAgICB0aGlzLl90cmFuc2FjdGlvbnMuc3BsaWNlKHRoaXMuX3RyYW5zYWN0aW9ucy5sZW5ndGggLSBsYXN0QWN0aW9ucy5sZW5ndGgpO1xuICAgICAgICB0aGlzLl9yZWRvU3RhY2sucHVzaChsYXN0QWN0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fc3RhdGVzLmNsZWFyKCk7XG4gICAgICAgIGZvciAoY29uc3QgY3VycmVudEFjdGlvbnMgb2YgdGhpcy5fdW5kb1N0YWNrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYW5zYWN0aW9uIG9mIGN1cnJlbnRBY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh0aGlzLl9zdGF0ZXMsIHRyYW5zYWN0aW9uLnRyYW5zYWN0aW9uLCB0cmFuc2FjdGlvbi5yZWNvcmRSZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblN0YXRlVXBkYXRlLmVtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyByZWRvKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fcmVkb1N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zOiB7IHRyYW5zYWN0aW9uOiBULCByZWNvcmRSZWY6IGFueSwgdXNlSW5VbmRvPzogYm9vbGVhbiB9W107XG4gICAgICAgICAgICBhY3Rpb25zID0gdGhpcy5fcmVkb1N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhY3Rpb24gb2YgYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUodGhpcy5fc3RhdGVzLCBhY3Rpb24udHJhbnNhY3Rpb24sIGFjdGlvbi5yZWNvcmRSZWYpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9ucy5wdXNoKGFjdGlvbi50cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3VuZG9TdGFjay5wdXNoKGFjdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5vblN0YXRlVXBkYXRlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcmlmaWVzIGlmIHRoZSBwYXNzZWQgdHJhbnNhY3Rpb24gaXMgY29ycmVjdC4gSWYgbm90IHRocm93cyBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uIFRyYW5zYWN0aW9uIHRvIGJlIHZlcmlmaWVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHZlcmlmeUFkZGVkVHJhbnNhY3Rpb24oc3RhdGVzOiBNYXA8YW55LCBTPiwgdHJhbnNhY3Rpb246IFQsIHJlY29yZFJlZj86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlcy5nZXQodHJhbnNhY3Rpb24uaWQpO1xuICAgICAgICBzd2l0Y2ggKHRyYW5zYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLkFERDpcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNhbm5vdCBhZGQgc2FtZSBpdGVtIHR3aWNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGFkZCB0aGlzIHRyYW5zYWN0aW9uLiBUcmFuc2FjdGlvbiB3aXRoIGlkOiAke3RyYW5zYWN0aW9uLmlkfSBoYXMgYmVlbiBhbHJlYWR5IGFkZGVkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLkRFTEVURTpcbiAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLlVQREFURTpcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUudHlwZSA9PT0gVHJhbnNhY3Rpb25UeXBlLkRFTEVURSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2Fubm90IGRlbGV0ZSBvciB1cGRhdGUgZGVsZXRlZCBpdGVtc1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhZGQgdGhpcyB0cmFuc2FjdGlvbi4gVHJhbnNhY3Rpb24gd2l0aCBpZDogJHt0cmFuc2FjdGlvbi5pZH0gaGFzIGJlZW4gYWxyZWFkeSBkZWxldGVkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlICYmICFyZWNvcmRSZWYgJiYgIXRoaXMuX2lzUGVuZGluZykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2Fubm90IGluaXRpYWxseSBhZGQgdHJhbnNhY3Rpb24gb3IgZGVsZXRlIGl0ZW0gd2l0aCBubyByZWNvcmRSZWZcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYWRkIHRoaXMgdHJhbnNhY3Rpb24uIFRoaXMgaXMgZmlyc3QgdHJhbnNhY3Rpb24gb2YgdHlwZSAke3RyYW5zYWN0aW9uLnR5cGV9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZvciBpZCAke3RyYW5zYWN0aW9uLmlkfS4gRm9yIGZpcnN0IHRyYW5zYWN0aW9uIG9mIHRoaXMgdHlwZSByZWNvcmRSZWYgaXMgbWFuZGF0b3J5LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHByb3ZpZGVkIHN0YXRlcyBjb2xsZWN0aW9uIGFjY29yZGluZyB0byBwYXNzZWQgdHJhbnNhY3Rpb24gYW5kIHJlY29yZFJlZlxuICAgICAqIEBwYXJhbSBzdGF0ZXMgU3RhdGVzIGNvbGxlY3Rpb24gdG8gYXBwbHkgdGhlIHVwZGF0ZSB0b1xuICAgICAqIEBwYXJhbSB0cmFuc2FjdGlvbiBUcmFuc2FjdGlvbiB0byBhcHBseSB0byB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAqIEBwYXJhbSByZWNvcmRSZWYgUmVmZXJlbmNlIHRvIHRoZSB2YWx1ZSBvZiB0aGUgcmVjb3JkIGluIGRhdGEgc291cmNlLCBpZiBhbnksIHdoZXJlIHRyYW5zYWN0aW9uIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlczogTWFwPGFueSwgUz4sIHRyYW5zYWN0aW9uOiBULCByZWNvcmRSZWY/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgbGV0IHN0YXRlID0gc3RhdGVzLmdldCh0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgIC8vICBpZiBUcmFuc2FjdGlvblR5cGUgaXMgQUREIHNpbXBseSBhZGQgdHJhbnNhY3Rpb24gdG8gc3RhdGVzO1xuICAgICAgICAvLyAgaWYgVHJhbnNhY3Rpb25UeXBlIGlzIERFTEVURTpcbiAgICAgICAgLy8gICAgLSBpZiB0aGVyZSBpcyBzdGF0ZSB3aXRoIHRoaXMgaWQgb2YgdHlwZSBBREQgcmVtb3ZlIGl0IGZyb20gdGhlIHN0YXRlcztcbiAgICAgICAgLy8gICAgLSBpZiB0aGVyZSBpcyBzdGF0ZSB3aXRoIHRoaXMgaWQgb2YgdHlwZSBVUERBVEUgY2hhbmdlIGl0cyB0eXBlIHRvIERFTEVURTtcbiAgICAgICAgLy8gICAgLSBpZiB0aGVyZSBpcyBubyBzdGF0ZSB3aXRoIHRoaXMgaWQgYWRkIHRyYW5zYWN0aW9uIHRvIHN0YXRlcztcbiAgICAgICAgLy8gIGlmIFRyYW5zYWN0aW9uVHlwZSBpcyBVUERBVEU6XG4gICAgICAgIC8vICAgIC0gaWYgdGhlcmUgaXMgc3RhdGUgd2l0aCB0aGlzIGlkIG9mIHR5cGUgQUREIG1lcmdlIG5ldyB2YWx1ZSBhbmQgc3RhdGUgcmVjb3JkUmVmIGludG8gc3RhdGUgbmV3IHZhbHVlXG4gICAgICAgIC8vICAgIC0gaWYgdGhlcmUgaXMgc3RhdGUgd2l0aCB0aGlzIGlkIG9mIHR5cGUgVVBEQVRFIG1lcmdlIG5ldyB2YWx1ZSBpbnRvIHN0YXRlIG5ldyB2YWx1ZVxuICAgICAgICAvLyAgICAtIGlmIHRoZXJlIGlzIHN0YXRlIHdpdGggdGhpcyBpZCBhbmQgc3RhdGUgdHlwZSBpcyBERUxFVEUgY2hhbmdlIGl0cyB0eXBlIHRvIFVQREFURVxuICAgICAgICAvLyAgICAtIGlmIHRoZXJlIGlzIG5vIHN0YXRlIHdpdGggdGhpcyBpZCBhZGQgdHJhbnNhY3Rpb24gdG8gc3RhdGVzO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJhbnNhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLkRFTEVURTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5BREQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlcy5kZWxldGUodHJhbnNhY3Rpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5VUERBVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gdHJhbnNhY3Rpb24ubmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS50eXBlID0gVHJhbnNhY3Rpb25UeXBlLkRFTEVURTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFRyYW5zYWN0aW9uVHlwZS5VUERBVEU6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09iamVjdChzdGF0ZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50eXBlID09PSBUcmFuc2FjdGlvblR5cGUuQUREKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmFsdWUgPSB0aGlzLm1lcmdlVmFsdWVzKHN0YXRlLnZhbHVlLCB0cmFuc2FjdGlvbi5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUudHlwZSA9PT0gVHJhbnNhY3Rpb25UeXBlLlVQREFURSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlT2JqZWN0cyhzdGF0ZS52YWx1ZSwgdHJhbnNhY3Rpb24ubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmFsdWUgPSB0cmFuc2FjdGlvbi5uZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSB7IHZhbHVlOiBjbG9uZVZhbHVlKHRyYW5zYWN0aW9uLm5ld1ZhbHVlKSwgcmVjb3JkUmVmOiByZWNvcmRSZWYsIHR5cGU6IHRyYW5zYWN0aW9uLnR5cGUgfSBhcyBTO1xuICAgICAgICAgICAgc3RhdGVzLnNldCh0cmFuc2FjdGlvbi5pZCwgc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIHNob3VsZCBub3QgY2xlYW4gcGVuZGluZyBzdGF0ZS4gVGhpcyB3aWxsIGhhcHBlbiBhdXRvbWF0aWNhbGx5IG9uIGVuZFBlbmRpbmcgY2FsbFxuICAgICAgICBpZiAoIXRoaXMuX2lzUGVuZGluZykge1xuICAgICAgICAgICAgdGhpcy5jbGVhblN0YXRlKHRyYW5zYWN0aW9uLmlkLCBzdGF0ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGFyZXMgdGhlIHN0YXRlIHdpdGggcmVjb3JkUmVmIGFuZCBjbGVhcnMgYWxsIGR1cGxpY2F0ZWQgdmFsdWVzLiBJZiBhbnkgc3RhdGUgZW5kcyBhc1xuICAgICAqIGVtcHR5IG9iamVjdCByZW1vdmVzIGl0IGZyb20gc3RhdGVzLlxuICAgICAqIEBwYXJhbSBzdGF0ZSBTdGF0ZSB0byBjbGVhblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjbGVhblN0YXRlKGlkOiBhbnksIHN0YXRlczogTWFwPGFueSwgUz4pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXMuZ2V0KGlkKTtcbiAgICAgICAgLy8gIGRvIG5vdGhpbmcgaWZcbiAgICAgICAgLy8gIHRoZXJlIGlzIG5vIHN0YXRlLCBvclxuICAgICAgICAvLyAgdGhlcmUgaXMgbm8gc3RhdGUgdmFsdWUgKGUuZy4gREVMRVRFRCB0cmFuc2FjdGlvbiksIG9yXG4gICAgICAgIC8vICB0aGVyZSBpcyBubyByZWNvcmRSZWYgKGUuZy4gQURERUQgdHJhbnNhY3Rpb24pXG4gICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS52YWx1ZSAmJiBzdGF0ZS5yZWNvcmRSZWYpIHtcbiAgICAgICAgICAgIC8vICBpZiBzdGF0ZSdzIHZhbHVlIGlzIG9iamVjdCBjb21wYXJlIGVhY2gga2V5IHdpdGggdGhlIG9uZXMgaW4gcmVjb3JkUmVmXG4gICAgICAgICAgICAvLyAgaWYgdmFsdWVzIGluIGFueSBrZXkgYXJlIHRoZSBzYW1lIGRlbGV0ZSBpdCBmcm9tIHN0YXRlJ3MgdmFsdWVcbiAgICAgICAgICAgIC8vICBpZiBzdGF0ZSdzIHZhbHVlIGlzIG5vdCBvYmplY3QsIHNpbXBseSBjb21wYXJlIHdpdGggcmVjb3JkUmVmIGFuZCByZW1vdmVcbiAgICAgICAgICAgIC8vICB0aGUgc3RhdGUgaWYgdGhleSBhcmUgZXF1YWxcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzdGF0ZS5yZWNvcmRSZWYpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc3RhdGUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShzdGF0ZS5yZWNvcmRSZWZba2V5XSkgPT09IEpTT04uc3RyaW5naWZ5KHN0YXRlLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUudmFsdWVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICBpZiBzdGF0ZSdzIHZhbHVlIGlzIGVtcHR5IHJlbW92ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc3RhdGVzLCBvbmx5IGlmIHN0YXRlIGlzIG5vdCBERUxFVEUgdHlwZVxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50eXBlICE9PSBUcmFuc2FjdGlvblR5cGUuREVMRVRFICYmIE9iamVjdC5rZXlzKHN0YXRlLnZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVjb3JkUmVmID09PSBzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuZGVsZXRlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHN0YXRlIHJlbGF0ZWQgcmVjb3JkIGluIHRoZSBwcm92aWRlZCBkYXRhXG4gICAgICogQHBhcmFtIGRhdGEgRGF0YSBzb3VyY2UgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHN0YXRlIFN0YXRlIHRvIHVwZGF0ZSBkYXRhIGZyb21cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUmVjb3JkKGRhdGE6IGFueVtdLCBzdGF0ZTogUykge1xuICAgICAgICBjb25zdCBpbmRleCA9IGRhdGEuZmluZEluZGV4KGkgPT4gSlNPTi5zdHJpbmdpZnkoaSkgPT09IEpTT04uc3RyaW5naWZ5KHN0YXRlLnJlY29yZFJlZiB8fCB7fSkpO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLkFERDpcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goc3RhdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2FjdGlvblR5cGUuREVMRVRFOlxuICAgICAgICAgICAgICAgIGlmICgwIDw9IGluZGV4ICYmIGluZGV4IDwgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLlVQREFURTpcbiAgICAgICAgICAgICAgICBpZiAoMCA8PSBpbmRleCAmJiBpbmRleCA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gdGhpcy51cGRhdGVWYWx1ZShzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
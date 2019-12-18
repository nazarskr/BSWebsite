/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { isObject, mergeObjects, cloneValue } from '../../core/utils';
/**
 * @template T, S
 */
var IgxBaseTransactionService = /** @class */ (function () {
    function IgxBaseTransactionService() {
        this._isPending = false;
        this._pendingTransactions = [];
        this._pendingStates = new Map();
        /**
         * \@inheritdoc
         */
        this.onStateUpdate = new EventEmitter();
    }
    Object.defineProperty(IgxBaseTransactionService.prototype, "canRedo", {
        /**
         * @inheritdoc
         */
        get: /**
         * \@inheritdoc
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxBaseTransactionService.prototype, "canUndo", {
        /**
         * @inheritdoc
         */
        get: /**
         * \@inheritdoc
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxBaseTransactionService.prototype, "enabled", {
        /**
         * @inheritdoc
         */
        get: /**
         * \@inheritdoc
         * @return {?}
         */
        function () {
            return this._isPending;
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
    IgxBaseTransactionService.prototype.add = /**
     * \@inheritdoc
     * @param {?} transaction
     * @param {?=} recordRef
     * @return {?}
     */
    function (transaction, recordRef) {
        if (this._isPending) {
            this.updateState(this._pendingStates, transaction, recordRef);
            this._pendingTransactions.push(transaction);
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
    IgxBaseTransactionService.prototype.getTransactionLog = /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    function (id) { return []; };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @return {?}
     */
    IgxBaseTransactionService.prototype.undo = /**
     * \@inheritdoc
     * @return {?}
     */
    function () { };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @return {?}
     */
    IgxBaseTransactionService.prototype.redo = /**
     * \@inheritdoc
     * @return {?}
     */
    function () { };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} mergeChanges
     * @return {?}
     */
    IgxBaseTransactionService.prototype.getAggregatedChanges = /**
     * \@inheritdoc
     * @param {?} mergeChanges
     * @return {?}
     */
    function (mergeChanges) {
        var _this = this;
        /** @type {?} */
        var result = [];
        this._pendingStates.forEach(function (state, key) {
            /** @type {?} */
            var value = mergeChanges ? _this.getAggregatedValue(key, mergeChanges) : state.value;
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
     * @return {?}
     */
    IgxBaseTransactionService.prototype.getState = /**
     * \@inheritdoc
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this._pendingStates.get(id);
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} id
     * @param {?} mergeChanges
     * @return {?}
     */
    IgxBaseTransactionService.prototype.getAggregatedValue = /**
     * \@inheritdoc
     * @param {?} id
     * @param {?} mergeChanges
     * @return {?}
     */
    function (id, mergeChanges) {
        /** @type {?} */
        var state = this._pendingStates.get(id);
        if (!state) {
            return null;
        }
        if (mergeChanges) {
            return this.updateValue(state);
        }
        return state.value;
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
    IgxBaseTransactionService.prototype.commit = /**
     * \@inheritdoc
     * @param {?} data
     * @param {?=} id
     * @return {?}
     */
    function (data, id) { };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    IgxBaseTransactionService.prototype.clear = /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        this._pendingStates.clear();
        this._pendingTransactions = [];
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @return {?}
     */
    IgxBaseTransactionService.prototype.startPending = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        this._isPending = true;
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?} commit
     * @return {?}
     */
    IgxBaseTransactionService.prototype.endPending = /**
     * \@inheritdoc
     * @param {?} commit
     * @return {?}
     */
    function (commit) {
        this._isPending = false;
        this._pendingStates.clear();
        this._pendingTransactions = [];
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
    IgxBaseTransactionService.prototype.updateState = /**
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
        if (state) {
            if (isObject(state.value)) {
                mergeObjects(state.value, transaction.newValue);
            }
            else {
                state.value = transaction.newValue;
            }
        }
        else {
            state = (/** @type {?} */ ({ value: cloneValue(transaction.newValue), recordRef: recordRef, type: transaction.type }));
            states.set(transaction.id, state);
        }
    };
    /**
     * Updates the recordRef of the provided state with all the changes in the state. Accepts primitive and object value types
     * @param state State to update value for
     * @returns updated value including all the changes in provided state
     */
    /**
     * Updates the recordRef of the provided state with all the changes in the state. Accepts primitive and object value types
     * @protected
     * @param {?} state State to update value for
     * @return {?} updated value including all the changes in provided state
     */
    IgxBaseTransactionService.prototype.updateValue = /**
     * Updates the recordRef of the provided state with all the changes in the state. Accepts primitive and object value types
     * @protected
     * @param {?} state State to update value for
     * @return {?} updated value including all the changes in provided state
     */
    function (state) {
        return this.mergeValues(state.recordRef, state.value);
    };
    /**
     * Merges second values in first value and the result in empty object. If values are primitive type
     * returns second value if exists, or first value.
     * @param first Value to merge into
     * @param second Value to merge
     */
    /**
     * Merges second values in first value and the result in empty object. If values are primitive type
     * returns second value if exists, or first value.
     * @protected
     * @template U
     * @param {?} first Value to merge into
     * @param {?} second Value to merge
     * @return {?}
     */
    IgxBaseTransactionService.prototype.mergeValues = /**
     * Merges second values in first value and the result in empty object. If values are primitive type
     * returns second value if exists, or first value.
     * @protected
     * @template U
     * @param {?} first Value to merge into
     * @param {?} second Value to merge
     * @return {?}
     */
    function (first, second) {
        /** @type {?} */
        var result;
        if (isObject(first) || isObject(second)) {
            result = mergeObjects(mergeObjects({}, first), second);
        }
        else {
            result = second ? second : first;
        }
        return result;
    };
    IgxBaseTransactionService.decorators = [
        { type: Injectable }
    ];
    return IgxBaseTransactionService;
}());
export { IgxBaseTransactionService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxBaseTransactionService.prototype._isPending;
    /**
     * @type {?}
     * @protected
     */
    IgxBaseTransactionService.prototype._pendingTransactions;
    /**
     * @type {?}
     * @protected
     */
    IgxBaseTransactionService.prototype._pendingStates;
    /**
     * \@inheritdoc
     * @type {?}
     */
    IgxBaseTransactionService.prototype.onStateUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10cmFuc2FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdHJhbnNhY3Rpb24vYmFzZS10cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFdEU7SUFBQTtRQUVjLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIseUJBQW9CLEdBQVEsRUFBRSxDQUFDO1FBQy9CLG1CQUFjLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7Ozs7UUEwQjNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQXNJcEQsQ0FBQztJQTNKRyxzQkFBVyw4Q0FBTztRQUhsQjs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsOENBQU87UUFIbEI7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLDhDQUFPO1FBSGxCOztXQUVHOzs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBT0Q7O09BRUc7Ozs7Ozs7SUFDSSx1Q0FBRzs7Ozs7O0lBQVYsVUFBVyxXQUFjLEVBQUUsU0FBZTtRQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0ws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R0FBRyxtQkFBQSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBSyxDQUFDO1lBQ3ZHLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ08sK0NBQVc7Ozs7OztJQUFyQixVQUFzQixLQUFRO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7Ozs7SUFDTywrQ0FBVzs7Ozs7Ozs7O0lBQXJCLFVBQXlCLEtBQVEsRUFBRSxNQUFTOztZQUNwQyxNQUFTO1FBQ2IsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0gsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDcEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOztnQkFuS0osVUFBVTs7SUFvS1gsZ0NBQUM7Q0FBQSxBQXBLRCxJQW9LQztTQW5LWSx5QkFBeUI7Ozs7OztJQUNsQywrQ0FBNkI7Ozs7O0lBQzdCLHlEQUF5Qzs7Ozs7SUFDekMsbURBQWtEOzs7OztJQTBCbEQsa0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlLCBUcmFuc2FjdGlvbiwgU3RhdGUgfSBmcm9tICcuL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNPYmplY3QsIG1lcmdlT2JqZWN0cywgY2xvbmVWYWx1ZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWd4QmFzZVRyYW5zYWN0aW9uU2VydmljZTxUIGV4dGVuZHMgVHJhbnNhY3Rpb24sIFMgZXh0ZW5kcyBTdGF0ZT4gaW1wbGVtZW50cyBUcmFuc2FjdGlvblNlcnZpY2U8VCwgUz4ge1xuICAgIHByb3RlY3RlZCBfaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9wZW5kaW5nVHJhbnNhY3Rpb25zOiBUW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX3BlbmRpbmdTdGF0ZXM6IE1hcDxhbnksIFM+ID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNhblJlZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY2FuVW5kbygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNQZW5kaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIG9uU3RhdGVVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBhZGQodHJhbnNhY3Rpb246IFQsIHJlY29yZFJlZj86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5faXNQZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHRoaXMuX3BlbmRpbmdTdGF0ZXMsIHRyYW5zYWN0aW9uLCByZWNvcmRSZWYpO1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1RyYW5zYWN0aW9ucy5wdXNoKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZ2V0VHJhbnNhY3Rpb25Mb2coaWQ/OiBhbnkpOiBUW10geyByZXR1cm4gW107IH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgdW5kbygpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICByZWRvKCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGdldEFnZ3JlZ2F0ZWRDaGFuZ2VzKG1lcmdlQ2hhbmdlczogYm9vbGVhbik6IFRbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZXMuZm9yRWFjaCgoc3RhdGU6IFMsIGtleTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1lcmdlQ2hhbmdlcyA/IHRoaXMuZ2V0QWdncmVnYXRlZFZhbHVlKGtleSwgbWVyZ2VDaGFuZ2VzKSA6IHN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBpZDoga2V5LCBuZXdWYWx1ZTogdmFsdWUsIHR5cGU6IHN0YXRlLnR5cGUgfSBhcyBUKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RhdGUoaWQ6IGFueSk6IFMge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGVuZGluZ1N0YXRlcy5nZXQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGdldEFnZ3JlZ2F0ZWRWYWx1ZShpZDogYW55LCBtZXJnZUNoYW5nZXM6IGJvb2xlYW4pOiBhbnkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3BlbmRpbmdTdGF0ZXMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmdlQ2hhbmdlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlVmFsdWUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGNvbW1pdChkYXRhOiBhbnlbXSwgaWQ/OiBhbnkpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBjbGVhcihpZD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wZW5kaW5nU3RhdGVzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdUcmFuc2FjdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydFBlbmRpbmcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzUGVuZGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgZW5kUGVuZGluZyhjb21taXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1RyYW5zYWN0aW9ucyA9IFtdO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcHJvdmlkZWQgc3RhdGVzIGNvbGxlY3Rpb24gYWNjb3JkaW5nIHRvIHBhc3NlZCB0cmFuc2FjdGlvbiBhbmQgcmVjb3JkUmVmXG4gICAgICogQHBhcmFtIHN0YXRlcyBTdGF0ZXMgY29sbGVjdGlvbiB0byBhcHBseSB0aGUgdXBkYXRlIHRvXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uIFRyYW5zYWN0aW9uIHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICogQHBhcmFtIHJlY29yZFJlZiBSZWZlcmVuY2UgdG8gdGhlIHZhbHVlIG9mIHRoZSByZWNvcmQgaW4gZGF0YSBzb3VyY2UsIGlmIGFueSwgd2hlcmUgdHJhbnNhY3Rpb24gc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGVzOiBNYXA8YW55LCBTPiwgdHJhbnNhY3Rpb246IFQsIHJlY29yZFJlZj86IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgc3RhdGUgPSBzdGF0ZXMuZ2V0KHRyYW5zYWN0aW9uLmlkKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc3RhdGUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VPYmplY3RzKHN0YXRlLnZhbHVlLCB0cmFuc2FjdGlvbi5uZXdWYWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gdHJhbnNhY3Rpb24ubmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHsgdmFsdWU6IGNsb25lVmFsdWUodHJhbnNhY3Rpb24ubmV3VmFsdWUpLCByZWNvcmRSZWY6IHJlY29yZFJlZiwgdHlwZTogdHJhbnNhY3Rpb24udHlwZSB9IGFzIFM7XG4gICAgICAgICAgICBzdGF0ZXMuc2V0KHRyYW5zYWN0aW9uLmlkLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSByZWNvcmRSZWYgb2YgdGhlIHByb3ZpZGVkIHN0YXRlIHdpdGggYWxsIHRoZSBjaGFuZ2VzIGluIHRoZSBzdGF0ZS4gQWNjZXB0cyBwcmltaXRpdmUgYW5kIG9iamVjdCB2YWx1ZSB0eXBlc1xuICAgICAqIEBwYXJhbSBzdGF0ZSBTdGF0ZSB0byB1cGRhdGUgdmFsdWUgZm9yXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB2YWx1ZSBpbmNsdWRpbmcgYWxsIHRoZSBjaGFuZ2VzIGluIHByb3ZpZGVkIHN0YXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKHN0YXRlOiBTKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lcmdlVmFsdWVzKHN0YXRlLnJlY29yZFJlZiwgc3RhdGUudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBzZWNvbmQgdmFsdWVzIGluIGZpcnN0IHZhbHVlIGFuZCB0aGUgcmVzdWx0IGluIGVtcHR5IG9iamVjdC4gSWYgdmFsdWVzIGFyZSBwcmltaXRpdmUgdHlwZVxuICAgICAqIHJldHVybnMgc2Vjb25kIHZhbHVlIGlmIGV4aXN0cywgb3IgZmlyc3QgdmFsdWUuXG4gICAgICogQHBhcmFtIGZpcnN0IFZhbHVlIHRvIG1lcmdlIGludG9cbiAgICAgKiBAcGFyYW0gc2Vjb25kIFZhbHVlIHRvIG1lcmdlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1lcmdlVmFsdWVzPFU+KGZpcnN0OiBVLCBzZWNvbmQ6IFUpOiBVIHtcbiAgICAgICAgbGV0IHJlc3VsdDogVTtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGZpcnN0KSB8fCBpc09iamVjdChzZWNvbmQpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBtZXJnZU9iamVjdHMobWVyZ2VPYmplY3RzKHt9LCBmaXJzdCksIHNlY29uZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBzZWNvbmQgPyBzZWNvbmQgOiBmaXJzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==
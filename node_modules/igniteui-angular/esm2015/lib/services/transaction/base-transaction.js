/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { isObject, mergeObjects, cloneValue } from '../../core/utils';
/**
 * @template T, S
 */
export class IgxBaseTransactionService {
    constructor() {
        this._isPending = false;
        this._pendingTransactions = [];
        this._pendingStates = new Map();
        /**
         * \@inheritdoc
         */
        this.onStateUpdate = new EventEmitter();
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    get canRedo() {
        return false;
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    get canUndo() {
        return false;
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    get enabled() {
        return this._isPending;
    }
    /**
     * \@inheritdoc
     * @param {?} transaction
     * @param {?=} recordRef
     * @return {?}
     */
    add(transaction, recordRef) {
        if (this._isPending) {
            this.updateState(this._pendingStates, transaction, recordRef);
            this._pendingTransactions.push(transaction);
        }
    }
    /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    getTransactionLog(id) { return []; }
    /**
     * \@inheritdoc
     * @return {?}
     */
    undo() { }
    /**
     * \@inheritdoc
     * @return {?}
     */
    redo() { }
    /**
     * \@inheritdoc
     * @param {?} mergeChanges
     * @return {?}
     */
    getAggregatedChanges(mergeChanges) {
        /** @type {?} */
        const result = [];
        this._pendingStates.forEach((state, key) => {
            /** @type {?} */
            const value = mergeChanges ? this.getAggregatedValue(key, mergeChanges) : state.value;
            result.push((/** @type {?} */ ({ id: key, newValue: value, type: state.type })));
        });
        return result;
    }
    /**
     * \@inheritdoc
     * @param {?} id
     * @return {?}
     */
    getState(id) {
        return this._pendingStates.get(id);
    }
    /**
     * \@inheritdoc
     * @param {?} id
     * @param {?} mergeChanges
     * @return {?}
     */
    getAggregatedValue(id, mergeChanges) {
        /** @type {?} */
        const state = this._pendingStates.get(id);
        if (!state) {
            return null;
        }
        if (mergeChanges) {
            return this.updateValue(state);
        }
        return state.value;
    }
    /**
     * \@inheritdoc
     * @param {?} data
     * @param {?=} id
     * @return {?}
     */
    commit(data, id) { }
    /**
     * \@inheritdoc
     * @param {?=} id
     * @return {?}
     */
    clear(id) {
        this._pendingStates.clear();
        this._pendingTransactions = [];
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    startPending() {
        this._isPending = true;
    }
    /**
     * \@inheritdoc
     * @param {?} commit
     * @return {?}
     */
    endPending(commit) {
        this._isPending = false;
        this._pendingStates.clear();
        this._pendingTransactions = [];
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
    }
    /**
     * Updates the recordRef of the provided state with all the changes in the state. Accepts primitive and object value types
     * @protected
     * @param {?} state State to update value for
     * @return {?} updated value including all the changes in provided state
     */
    updateValue(state) {
        return this.mergeValues(state.recordRef, state.value);
    }
    /**
     * Merges second values in first value and the result in empty object. If values are primitive type
     * returns second value if exists, or first value.
     * @protected
     * @template U
     * @param {?} first Value to merge into
     * @param {?} second Value to merge
     * @return {?}
     */
    mergeValues(first, second) {
        /** @type {?} */
        let result;
        if (isObject(first) || isObject(second)) {
            result = mergeObjects(mergeObjects({}, first), second);
        }
        else {
            result = second ? second : first;
        }
        return result;
    }
}
IgxBaseTransactionService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10cmFuc2FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdHJhbnNhY3Rpb24vYmFzZS10cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHdEUsTUFBTSxPQUFPLHlCQUF5QjtJQUR0QztRQUVjLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIseUJBQW9CLEdBQVEsRUFBRSxDQUFDO1FBQy9CLG1CQUFjLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7Ozs7UUEwQjNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQXNJcEQsQ0FBQzs7Ozs7SUEzSkcsSUFBVyxPQUFPO1FBQ2QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFLRCxJQUFXLE9BQU87UUFDZCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7OztJQUtELElBQVcsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBVU0sR0FBRyxDQUFDLFdBQWMsRUFBRSxTQUFlO1FBQ3RDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDOzs7Ozs7SUFLRCxpQkFBaUIsQ0FBQyxFQUFRLElBQVMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7OztJQUsvQyxJQUFJLEtBQVcs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VyxDQUFJLEtBQVEsRUFBRSxNQUFTOztZQUNwQyxNQUFTO1FBQ2IsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0gsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDcEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7WUFuS0osVUFBVTs7Ozs7OztJQUVQLCtDQUE2Qjs7Ozs7SUFDN0IseURBQXlDOzs7OztJQUN6QyxtREFBa0Q7Ozs7O0lBMEJsRCxrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UsIFRyYW5zYWN0aW9uLCBTdGF0ZSB9IGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc09iamVjdCwgbWVyZ2VPYmplY3RzLCBjbG9uZVZhbHVlIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZ3hCYXNlVHJhbnNhY3Rpb25TZXJ2aWNlPFQgZXh0ZW5kcyBUcmFuc2FjdGlvbiwgUyBleHRlbmRzIFN0YXRlPiBpbXBsZW1lbnRzIFRyYW5zYWN0aW9uU2VydmljZTxULCBTPiB7XG4gICAgcHJvdGVjdGVkIF9pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX3BlbmRpbmdUcmFuc2FjdGlvbnM6IFRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfcGVuZGluZ1N0YXRlczogTWFwPGFueSwgUz4gPSBuZXcgTWFwKCk7XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY2FuUmVkbygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGdldCBjYW5VbmRvKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1BlbmRpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgb25TdGF0ZVVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIGFkZCh0cmFuc2FjdGlvbjogVCwgcmVjb3JkUmVmPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pc1BlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUodGhpcy5fcGVuZGluZ1N0YXRlcywgdHJhbnNhY3Rpb24sIHJlY29yZFJlZik7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nVHJhbnNhY3Rpb25zLnB1c2godHJhbnNhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBnZXRUcmFuc2FjdGlvbkxvZyhpZD86IGFueSk6IFRbXSB7IHJldHVybiBbXTsgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICB1bmRvKCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHJlZG8oKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZ2V0QWdncmVnYXRlZENoYW5nZXMobWVyZ2VDaGFuZ2VzOiBib29sZWFuKTogVFtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlcy5mb3JFYWNoKChzdGF0ZTogUywga2V5OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWVyZ2VDaGFuZ2VzID8gdGhpcy5nZXRBZ2dyZWdhdGVkVmFsdWUoa2V5LCBtZXJnZUNoYW5nZXMpIDogc3RhdGUudmFsdWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGlkOiBrZXksIG5ld1ZhbHVlOiB2YWx1ZSwgdHlwZTogc3RhdGUudHlwZSB9IGFzIFQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdGF0ZShpZDogYW55KTogUyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZW5kaW5nU3RhdGVzLmdldChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QWdncmVnYXRlZFZhbHVlKGlkOiBhbnksIG1lcmdlQ2hhbmdlczogYm9vbGVhbik6IGFueSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fcGVuZGluZ1N0YXRlcy5nZXQoaWQpO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyZ2VDaGFuZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVWYWx1ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgY29tbWl0KGRhdGE6IGFueVtdLCBpZD86IGFueSk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGNsZWFyKGlkPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1RyYW5zYWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0UGVuZGluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNQZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHB1YmxpYyBlbmRQZW5kaW5nKGNvbW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9wZW5kaW5nVHJhbnNhY3Rpb25zID0gW107XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwcm92aWRlZCBzdGF0ZXMgY29sbGVjdGlvbiBhY2NvcmRpbmcgdG8gcGFzc2VkIHRyYW5zYWN0aW9uIGFuZCByZWNvcmRSZWZcbiAgICAgKiBAcGFyYW0gc3RhdGVzIFN0YXRlcyBjb2xsZWN0aW9uIHRvIGFwcGx5IHRoZSB1cGRhdGUgdG9cbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gVHJhbnNhY3Rpb24gdG8gYXBwbHkgdG8gdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgKiBAcGFyYW0gcmVjb3JkUmVmIFJlZmVyZW5jZSB0byB0aGUgdmFsdWUgb2YgdGhlIHJlY29yZCBpbiBkYXRhIHNvdXJjZSwgaWYgYW55LCB3aGVyZSB0cmFuc2FjdGlvbiBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZXM6IE1hcDxhbnksIFM+LCB0cmFuc2FjdGlvbjogVCwgcmVjb3JkUmVmPzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHN0YXRlcy5nZXQodHJhbnNhY3Rpb24uaWQpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzdGF0ZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZU9iamVjdHMoc3RhdGUudmFsdWUsIHRyYW5zYWN0aW9uLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudmFsdWUgPSB0cmFuc2FjdGlvbi5uZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0geyB2YWx1ZTogY2xvbmVWYWx1ZSh0cmFuc2FjdGlvbi5uZXdWYWx1ZSksIHJlY29yZFJlZjogcmVjb3JkUmVmLCB0eXBlOiB0cmFuc2FjdGlvbi50eXBlIH0gYXMgUztcbiAgICAgICAgICAgIHN0YXRlcy5zZXQodHJhbnNhY3Rpb24uaWQsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHJlY29yZFJlZiBvZiB0aGUgcHJvdmlkZWQgc3RhdGUgd2l0aCBhbGwgdGhlIGNoYW5nZXMgaW4gdGhlIHN0YXRlLiBBY2NlcHRzIHByaW1pdGl2ZSBhbmQgb2JqZWN0IHZhbHVlIHR5cGVzXG4gICAgICogQHBhcmFtIHN0YXRlIFN0YXRlIHRvIHVwZGF0ZSB2YWx1ZSBmb3JcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHZhbHVlIGluY2x1ZGluZyBhbGwgdGhlIGNoYW5nZXMgaW4gcHJvdmlkZWQgc3RhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoc3RhdGU6IFMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VWYWx1ZXMoc3RhdGUucmVjb3JkUmVmLCBzdGF0ZS52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2VzIHNlY29uZCB2YWx1ZXMgaW4gZmlyc3QgdmFsdWUgYW5kIHRoZSByZXN1bHQgaW4gZW1wdHkgb2JqZWN0LiBJZiB2YWx1ZXMgYXJlIHByaW1pdGl2ZSB0eXBlXG4gICAgICogcmV0dXJucyBzZWNvbmQgdmFsdWUgaWYgZXhpc3RzLCBvciBmaXJzdCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gZmlyc3QgVmFsdWUgdG8gbWVyZ2UgaW50b1xuICAgICAqIEBwYXJhbSBzZWNvbmQgVmFsdWUgdG8gbWVyZ2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWVyZ2VWYWx1ZXM8VT4oZmlyc3Q6IFUsIHNlY29uZDogVSk6IFUge1xuICAgICAgICBsZXQgcmVzdWx0OiBVO1xuICAgICAgICBpZiAoaXNPYmplY3QoZmlyc3QpIHx8IGlzT2JqZWN0KHNlY29uZCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG1lcmdlT2JqZWN0cyhtZXJnZU9iamVjdHMoe30sIGZpcnN0KSwgc2Vjb25kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHNlY29uZCA/IHNlY29uZCA6IGZpcnN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIl19
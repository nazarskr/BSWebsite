/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const TransactionType = {
    ADD: 'add',
    DELETE: 'delete',
    UPDATE: 'update',
};
export { TransactionType };
/**
 * @record
 */
export function Transaction() { }
if (false) {
    /** @type {?} */
    Transaction.prototype.id;
    /** @type {?} */
    Transaction.prototype.type;
    /** @type {?} */
    Transaction.prototype.newValue;
}
/**
 * \@experimental
 * @hidden
 * @record
 */
export function HierarchicalTransaction() { }
if (false) {
    /** @type {?} */
    HierarchicalTransaction.prototype.path;
}
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.value;
    /** @type {?} */
    State.prototype.recordRef;
    /** @type {?} */
    State.prototype.type;
}
/**
 * \@experimental
 * @hidden
 * @record
 */
export function HierarchicalState() { }
if (false) {
    /** @type {?} */
    HierarchicalState.prototype.path;
}
/**
 * @record
 * @template T, S
 */
export function TransactionService() { }
if (false) {
    /**
     * Returns whether transaction is enabled for this service
     * @type {?}
     */
    TransactionService.prototype.enabled;
    /**
     * Event fired when transaction state has changed - add transaction, commit all transactions, undo and redo
     * @type {?|undefined}
     */
    TransactionService.prototype.onStateUpdate;
    /**
     * \@return if there are any transactions in the Undo stack
     * @type {?}
     */
    TransactionService.prototype.canUndo;
    /**
     * \@return if there are any transactions in the Redo stack
     * @type {?}
     */
    TransactionService.prototype.canRedo;
    /**
     * Adds provided  transaction with recordRef if any
     * @param {?} transaction Transaction to be added
     * @param {?=} recordRef Reference to the value of the record in the data source related to the changed item
     * @return {?}
     */
    TransactionService.prototype.add = function (transaction, recordRef) { };
    /**
     * Returns all recorded transactions in chronological order
     * @param {?=} id Optional record id to get transactions for
     * @return {?} All transaction in the service or for the specified record
     */
    TransactionService.prototype.getTransactionLog = function (id) { };
    /**
     * Remove the last transaction if any
     * @return {?}
     */
    TransactionService.prototype.undo = function () { };
    /**
     * Applies the last undone transaction if any
     * @return {?}
     */
    TransactionService.prototype.redo = function () { };
    /**
     * Returns aggregated changes from all transactions
     * @param {?} mergeChanges If set to true will merge each state's value over relate recordRef
     * and will record resulting value in the related transaction
     * @return {?} Collection of aggregated transactions for each changed record
     */
    TransactionService.prototype.getAggregatedChanges = function (mergeChanges) { };
    /**
     * Returns the state of the record with provided id
     * @param {?} id The id of the record
     * @param {?=} pending Should get pending state
     * @return {?} State of the record if any
     */
    TransactionService.prototype.getState = function (id, pending) { };
    /**
     * Returns value of the required id including all uncommitted changes
     * @param {?} id The id of the record to return value for
     * @param {?} mergeChanges If set to true will merge state's value over relate recordRef
     * and will return merged value
     * @return {?} Value with changes or **null**
     */
    TransactionService.prototype.getAggregatedValue = function (id, mergeChanges) { };
    /**
     * Applies all transactions over the provided data
     * @param {?} data Data source to update
     * @param {?=} id Optional record id to commit transactions for
     * @return {?}
     */
    TransactionService.prototype.commit = function (data, id) { };
    /**
     * Clears all transactions
     * @param {?=} id Optional record id to clear transactions for
     * @return {?}
     */
    TransactionService.prototype.clear = function (id) { };
    /**
     * Starts pending transactions. All transactions passed after call to startPending
     * will not be added to transaction log
     * @return {?}
     */
    TransactionService.prototype.startPending = function () { };
    /**
     * Clears all pending transactions and aggregated pending state. If commit is set to true
     * commits pending states as single transaction
     * @param {?} commit Should commit the pending states
     * @return {?}
     */
    TransactionService.prototype.endPending = function (commit) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdJLEtBQU0sS0FBSztJQUNYLFFBQVMsUUFBUTtJQUNqQixRQUFTLFFBQVE7Ozs7OztBQUdyQixpQ0FJQzs7O0lBSEcseUJBQVE7O0lBQ1IsMkJBQXNCOztJQUN0QiwrQkFBYzs7Ozs7OztBQU9sQiw2Q0FFQzs7O0lBREcsdUNBQVk7Ozs7O0FBR2hCLDJCQUlDOzs7SUFIRyxzQkFBVzs7SUFDWCwwQkFBZTs7SUFDZixxQkFBc0I7Ozs7Ozs7QUFPMUIsdUNBRUM7OztJQURHLGlDQUFZOzs7Ozs7QUFHaEIsd0NBK0ZDOzs7Ozs7SUEzRkcscUNBQTBCOzs7OztJQUsxQiwyQ0FBbUM7Ozs7O0lBS25DLHFDQUFpQjs7Ozs7SUFLakIscUNBQWlCOzs7Ozs7O0lBT2pCLHlFQUEyQzs7Ozs7O0lBTzNDLG1FQUFpQzs7Ozs7SUFLakMsb0RBQWE7Ozs7O0lBS2Isb0RBQWE7Ozs7Ozs7SUFRYixnRkFBaUQ7Ozs7Ozs7SUFRakQsbUVBQXdDOzs7Ozs7OztJQVN4QyxrRkFBd0Q7Ozs7Ozs7SUFPeEQsOERBQW9DOzs7Ozs7SUFNcEMsdURBQXNCOzs7Ozs7SUFNdEIsNERBQXFCOzs7Ozs7O0lBT3JCLGdFQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBUcmFuc2FjdGlvblR5cGUge1xuICAgIEFERCA9ICdhZGQnLFxuICAgIERFTEVURSA9ICdkZWxldGUnLFxuICAgIFVQREFURSA9ICd1cGRhdGUnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICAgIGlkOiBhbnk7XG4gICAgdHlwZTogVHJhbnNhY3Rpb25UeXBlO1xuICAgIG5ld1ZhbHVlOiBhbnk7XG59XG5cbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uIGV4dGVuZHMgVHJhbnNhY3Rpb24ge1xuICAgIHBhdGg6IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICB2YWx1ZTogYW55O1xuICAgIHJlY29yZFJlZjogYW55O1xuICAgIHR5cGU6IFRyYW5zYWN0aW9uVHlwZTtcbn1cblxuLyoqXG4gKiBAZXhwZXJpbWVudGFsXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGllcmFyY2hpY2FsU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG4gICAgcGF0aDogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25TZXJ2aWNlPFQgZXh0ZW5kcyBUcmFuc2FjdGlvbiwgUyBleHRlbmRzIFN0YXRlPiB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRyYW5zYWN0aW9uIGlzIGVuYWJsZWQgZm9yIHRoaXMgc2VydmljZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBmaXJlZCB3aGVuIHRyYW5zYWN0aW9uIHN0YXRlIGhhcyBjaGFuZ2VkIC0gYWRkIHRyYW5zYWN0aW9uLCBjb21taXQgYWxsIHRyYW5zYWN0aW9ucywgdW5kbyBhbmQgcmVkb1xuICAgICAqL1xuICAgIG9uU3RhdGVVcGRhdGU/OiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBpZiB0aGVyZSBhcmUgYW55IHRyYW5zYWN0aW9ucyBpbiB0aGUgVW5kbyBzdGFja1xuICAgICAqL1xuICAgIGNhblVuZG86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBpZiB0aGVyZSBhcmUgYW55IHRyYW5zYWN0aW9ucyBpbiB0aGUgUmVkbyBzdGFja1xuICAgICAqL1xuICAgIGNhblJlZG86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHByb3ZpZGVkICB0cmFuc2FjdGlvbiB3aXRoIHJlY29yZFJlZiBpZiBhbnlcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gVHJhbnNhY3Rpb24gdG8gYmUgYWRkZWRcbiAgICAgKiBAcGFyYW0gcmVjb3JkUmVmIFJlZmVyZW5jZSB0byB0aGUgdmFsdWUgb2YgdGhlIHJlY29yZCBpbiB0aGUgZGF0YSBzb3VyY2UgcmVsYXRlZCB0byB0aGUgY2hhbmdlZCBpdGVtXG4gICAgICovXG4gICAgYWRkKHRyYW5zYWN0aW9uOiBULCByZWNvcmRSZWY/OiBhbnkpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgcmVjb3JkZWQgdHJhbnNhY3Rpb25zIGluIGNocm9ub2xvZ2ljYWwgb3JkZXJcbiAgICAgKiBAcGFyYW0gaWQgT3B0aW9uYWwgcmVjb3JkIGlkIHRvIGdldCB0cmFuc2FjdGlvbnMgZm9yXG4gICAgICogQHJldHVybnMgQWxsIHRyYW5zYWN0aW9uIGluIHRoZSBzZXJ2aWNlIG9yIGZvciB0aGUgc3BlY2lmaWVkIHJlY29yZFxuICAgICAqL1xuICAgIGdldFRyYW5zYWN0aW9uTG9nKGlkPzogYW55KTogVFtdO1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBsYXN0IHRyYW5zYWN0aW9uIGlmIGFueVxuICAgICAqL1xuICAgIHVuZG8oKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGxhc3QgdW5kb25lIHRyYW5zYWN0aW9uIGlmIGFueVxuICAgICAqL1xuICAgIHJlZG8oKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWdncmVnYXRlZCBjaGFuZ2VzIGZyb20gYWxsIHRyYW5zYWN0aW9uc1xuICAgICAqIEBwYXJhbSBtZXJnZUNoYW5nZXMgSWYgc2V0IHRvIHRydWUgd2lsbCBtZXJnZSBlYWNoIHN0YXRlJ3MgdmFsdWUgb3ZlciByZWxhdGUgcmVjb3JkUmVmXG4gICAgICogYW5kIHdpbGwgcmVjb3JkIHJlc3VsdGluZyB2YWx1ZSBpbiB0aGUgcmVsYXRlZCB0cmFuc2FjdGlvblxuICAgICAqIEByZXR1cm5zIENvbGxlY3Rpb24gb2YgYWdncmVnYXRlZCB0cmFuc2FjdGlvbnMgZm9yIGVhY2ggY2hhbmdlZCByZWNvcmRcbiAgICAgKi9cbiAgICBnZXRBZ2dyZWdhdGVkQ2hhbmdlcyhtZXJnZUNoYW5nZXM6IGJvb2xlYW4pOiBUW107XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdGF0ZSBvZiB0aGUgcmVjb3JkIHdpdGggcHJvdmlkZWQgaWRcbiAgICAgKiBAcGFyYW0gaWQgVGhlIGlkIG9mIHRoZSByZWNvcmRcbiAgICAgKiBAcGFyYW0gcGVuZGluZyBTaG91bGQgZ2V0IHBlbmRpbmcgc3RhdGVcbiAgICAgKiBAcmV0dXJucyBTdGF0ZSBvZiB0aGUgcmVjb3JkIGlmIGFueVxuICAgICAqL1xuICAgIGdldFN0YXRlKGlkOiBhbnksIHBlbmRpbmc/OiBib29sZWFuKTogUztcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdmFsdWUgb2YgdGhlIHJlcXVpcmVkIGlkIGluY2x1ZGluZyBhbGwgdW5jb21taXR0ZWQgY2hhbmdlc1xuICAgICAqIEBwYXJhbSBpZCBUaGUgaWQgb2YgdGhlIHJlY29yZCB0byByZXR1cm4gdmFsdWUgZm9yXG4gICAgICogQHBhcmFtIG1lcmdlQ2hhbmdlcyBJZiBzZXQgdG8gdHJ1ZSB3aWxsIG1lcmdlIHN0YXRlJ3MgdmFsdWUgb3ZlciByZWxhdGUgcmVjb3JkUmVmXG4gICAgICogYW5kIHdpbGwgcmV0dXJuIG1lcmdlZCB2YWx1ZVxuICAgICAqIEByZXR1cm5zIFZhbHVlIHdpdGggY2hhbmdlcyBvciAqKm51bGwqKlxuICAgICAqL1xuICAgIGdldEFnZ3JlZ2F0ZWRWYWx1ZShpZDogYW55LCBtZXJnZUNoYW5nZXM6IGJvb2xlYW4pOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGFsbCB0cmFuc2FjdGlvbnMgb3ZlciB0aGUgcHJvdmlkZWQgZGF0YVxuICAgICAqIEBwYXJhbSBkYXRhIERhdGEgc291cmNlIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSBpZCBPcHRpb25hbCByZWNvcmQgaWQgdG8gY29tbWl0IHRyYW5zYWN0aW9ucyBmb3JcbiAgICAgKi9cbiAgICBjb21taXQoZGF0YTogYW55W10sIGlkPzogYW55KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgdHJhbnNhY3Rpb25zXG4gICAgICogQHBhcmFtIGlkIE9wdGlvbmFsIHJlY29yZCBpZCB0byBjbGVhciB0cmFuc2FjdGlvbnMgZm9yXG4gICAgICovXG4gICAgY2xlYXIoaWQ/OiBhbnkpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHBlbmRpbmcgdHJhbnNhY3Rpb25zLiBBbGwgdHJhbnNhY3Rpb25zIHBhc3NlZCBhZnRlciBjYWxsIHRvIHN0YXJ0UGVuZGluZ1xuICAgICAqIHdpbGwgbm90IGJlIGFkZGVkIHRvIHRyYW5zYWN0aW9uIGxvZ1xuICAgICAqL1xuICAgIHN0YXJ0UGVuZGluZygpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBwZW5kaW5nIHRyYW5zYWN0aW9ucyBhbmQgYWdncmVnYXRlZCBwZW5kaW5nIHN0YXRlLiBJZiBjb21taXQgaXMgc2V0IHRvIHRydWVcbiAgICAgKiBjb21taXRzIHBlbmRpbmcgc3RhdGVzIGFzIHNpbmdsZSB0cmFuc2FjdGlvblxuICAgICAqIEBwYXJhbSBjb21taXQgU2hvdWxkIGNvbW1pdCB0aGUgcGVuZGluZyBzdGF0ZXNcbiAgICAgKi9cbiAgICBlbmRQZW5kaW5nKGNvbW1pdDogYm9vbGVhbik6IHZvaWQ7XG59XG4iXX0=
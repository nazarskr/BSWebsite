/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TransactionType } from './transaction';
import { Injectable } from '@angular/core';
import { IgxTransactionService } from './igx-transaction';
import { DataUtil } from '../../data-operations/data-util';
import { cloneValue } from '../../core/utils';
/**
 * \@experimental \@hidden
 * @template T, S
 */
var IgxHierarchicalTransactionService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxHierarchicalTransactionService, _super);
    function IgxHierarchicalTransactionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} mergeChanges
     * @return {?}
     */
    IgxHierarchicalTransactionService.prototype.getAggregatedChanges = /**
     * @param {?} mergeChanges
     * @return {?}
     */
    function (mergeChanges) {
        var _this = this;
        /** @type {?} */
        var result = [];
        this._states.forEach(function (state, key) {
            /** @type {?} */
            var value = mergeChanges ? _this.mergeValues(state.recordRef, state.value) : cloneValue(state.value);
            _this.clearArraysFromObject(value);
            result.push((/** @type {?} */ ({ id: key, path: state.path, newValue: value, type: state.type })));
        });
        return result;
    };
    /**
     * @protected
     * @param {?} states
     * @param {?} transaction
     * @param {?=} recordRef
     * @return {?}
     */
    IgxHierarchicalTransactionService.prototype.updateState = /**
     * @protected
     * @param {?} states
     * @param {?} transaction
     * @param {?=} recordRef
     * @return {?}
     */
    function (states, transaction, recordRef) {
        _super.prototype.updateState.call(this, states, transaction, recordRef);
        //  if transaction has no path, e.g. flat data source, get out
        if (!transaction.path) {
            return;
        }
        /** @type {?} */
        var currentState = states.get(transaction.id);
        if (currentState) {
            currentState.path = transaction.path;
        }
        //  if transaction has path, Hierarchical data source, and it is DELETE
        //  type transaction for all child rows remove ADD states and update
        //  transaction type and value of UPDATE states
        if (transaction.type === TransactionType.DELETE) {
            states.forEach(function (v, k) {
                if (v.path && v.path.indexOf(transaction.id) !== -1) {
                    switch (v.type) {
                        case TransactionType.ADD:
                            states.delete(k);
                            break;
                        case TransactionType.UPDATE:
                            states.get(k).type = TransactionType.DELETE;
                            states.get(k).value = null;
                    }
                }
            });
        }
    };
    /**
     * Applies all transactions over the provided data
     * @param data Data source to update
     * @param primaryKey Primary key of the hierarchical data
     * @param childDataKey Kye of child data collection
     * @param id Optional record id to commit transactions for
     */
    /**
     * Applies all transactions over the provided data
     * @param {?} data Data source to update
     * @param {?=} primaryKey Primary key of the hierarchical data
     * @param {?=} childDataKey Kye of child data collection
     * @param {?=} id Optional record id to commit transactions for
     * @return {?}
     */
    IgxHierarchicalTransactionService.prototype.commit = /**
     * Applies all transactions over the provided data
     * @param {?} data Data source to update
     * @param {?=} primaryKey Primary key of the hierarchical data
     * @param {?=} childDataKey Kye of child data collection
     * @param {?=} id Optional record id to commit transactions for
     * @return {?}
     */
    function (data, primaryKey, childDataKey, id) {
        if (childDataKey !== undefined) {
            /** @type {?} */
            var transactions = this.getAggregatedChanges(true);
            if (id !== undefined) {
                transactions = transactions.filter(function (t) { return t.id === id; });
            }
            DataUtil.mergeHierarchicalTransactions(data, transactions, childDataKey, primaryKey, true);
        }
        else {
            _super.prototype.commit.call(this, data, id);
        }
        this.clear(id);
    };
    //  TODO: remove this method. Force cloning to strip child arrays when needed instead
    //  TODO: remove this method. Force cloning to strip child arrays when needed instead
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    IgxHierarchicalTransactionService.prototype.clearArraysFromObject = 
    //  TODO: remove this method. Force cloning to strip child arrays when needed instead
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var e_1, _a;
        if (obj) {
            try {
                for (var _b = tslib_1.__values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var prop = _c.value;
                    if (Array.isArray(obj[prop])) {
                        delete obj[prop];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    IgxHierarchicalTransactionService.decorators = [
        { type: Injectable }
    ];
    return IgxHierarchicalTransactionService;
}(IgxTransactionService));
export { IgxHierarchicalTransactionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWd4LWhpZXJhcmNoaWNhbC10cmFuc2FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdHJhbnNhY3Rpb24vaWd4LWhpZXJhcmNoaWNhbC10cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBOEMsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFHOUM7SUFFWSw2REFBMkI7SUFGdkM7O0lBNEVBLENBQUM7Ozs7O0lBeEVVLGdFQUFvQjs7OztJQUEzQixVQUE0QixZQUFxQjtRQUFqRCxpQkFRQzs7WUFQUyxNQUFNLEdBQVEsRUFBRTtRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQVEsRUFBRSxHQUFROztnQkFDOUIsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDckcsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBSyxD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M0VZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uLCBIaWVyYXJjaGljYWxTdGF0ZSwgVHJhbnNhY3Rpb25UeXBlIH0gZnJvbSAnLi90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuL2lneC10cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBEYXRhVXRpbCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgY2xvbmVWYWx1ZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuXG4vKiogQGV4cGVyaW1lbnRhbCBAaGlkZGVuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWd4SGllcmFyY2hpY2FsVHJhbnNhY3Rpb25TZXJ2aWNlPFQgZXh0ZW5kcyBIaWVyYXJjaGljYWxUcmFuc2FjdGlvbiwgUyBleHRlbmRzIEhpZXJhcmNoaWNhbFN0YXRlPlxuICAgIGV4dGVuZHMgSWd4VHJhbnNhY3Rpb25TZXJ2aWNlPFQsIFM+IHtcblxuICAgIHB1YmxpYyBnZXRBZ2dyZWdhdGVkQ2hhbmdlcyhtZXJnZUNoYW5nZXM6IGJvb2xlYW4pOiBUW10ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IFRbXSA9IFtdO1xuICAgICAgICB0aGlzLl9zdGF0ZXMuZm9yRWFjaCgoc3RhdGU6IFMsIGtleTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1lcmdlQ2hhbmdlcyA/IHRoaXMubWVyZ2VWYWx1ZXMoc3RhdGUucmVjb3JkUmVmLCBzdGF0ZS52YWx1ZSkgOiBjbG9uZVZhbHVlKHN0YXRlLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBcnJheXNGcm9tT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgaWQ6IGtleSwgcGF0aDogc3RhdGUucGF0aCwgbmV3VmFsdWU6IHZhbHVlLCB0eXBlOiBzdGF0ZS50eXBlIH0gYXMgVCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZXM6IE1hcDxhbnksIFM+LCB0cmFuc2FjdGlvbjogVCwgcmVjb3JkUmVmPzogYW55KTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVN0YXRlKHN0YXRlcywgdHJhbnNhY3Rpb24sIHJlY29yZFJlZik7XG5cbiAgICAgICAgLy8gIGlmIHRyYW5zYWN0aW9uIGhhcyBubyBwYXRoLCBlLmcuIGZsYXQgZGF0YSBzb3VyY2UsIGdldCBvdXRcbiAgICAgICAgaWYgKCF0cmFuc2FjdGlvbi5wYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBzdGF0ZXMuZ2V0KHRyYW5zYWN0aW9uLmlkKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgICAgY3VycmVudFN0YXRlLnBhdGggPSB0cmFuc2FjdGlvbi5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIGlmIHRyYW5zYWN0aW9uIGhhcyBwYXRoLCBIaWVyYXJjaGljYWwgZGF0YSBzb3VyY2UsIGFuZCBpdCBpcyBERUxFVEVcbiAgICAgICAgLy8gIHR5cGUgdHJhbnNhY3Rpb24gZm9yIGFsbCBjaGlsZCByb3dzIHJlbW92ZSBBREQgc3RhdGVzIGFuZCB1cGRhdGVcbiAgICAgICAgLy8gIHRyYW5zYWN0aW9uIHR5cGUgYW5kIHZhbHVlIG9mIFVQREFURSBzdGF0ZXNcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUpIHtcbiAgICAgICAgICAgIHN0YXRlcy5mb3JFYWNoKCh2OiBTLCBrOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodi5wYXRoICYmIHYucGF0aC5pbmRleE9mKHRyYW5zYWN0aW9uLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLkFERDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuZGVsZXRlKGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2FjdGlvblR5cGUuVVBEQVRFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlcy5nZXQoaykudHlwZSA9IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmdldChrKS52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYWxsIHRyYW5zYWN0aW9ucyBvdmVyIHRoZSBwcm92aWRlZCBkYXRhXG4gICAgICogQHBhcmFtIGRhdGEgRGF0YSBzb3VyY2UgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHByaW1hcnlLZXkgUHJpbWFyeSBrZXkgb2YgdGhlIGhpZXJhcmNoaWNhbCBkYXRhXG4gICAgICogQHBhcmFtIGNoaWxkRGF0YUtleSBLeWUgb2YgY2hpbGQgZGF0YSBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIGlkIE9wdGlvbmFsIHJlY29yZCBpZCB0byBjb21taXQgdHJhbnNhY3Rpb25zIGZvclxuICAgICAqL1xuICAgIHB1YmxpYyBjb21taXQoZGF0YTogYW55W10sIHByaW1hcnlLZXk/OiBhbnksIGNoaWxkRGF0YUtleT86IGFueSwgaWQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoaWxkRGF0YUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb25zID0gdGhpcy5nZXRBZ2dyZWdhdGVkQ2hhbmdlcyh0cnVlKTtcbiAgICAgICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IHQuaWQgPT09IGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERhdGFVdGlsLm1lcmdlSGllcmFyY2hpY2FsVHJhbnNhY3Rpb25zKGRhdGEsIHRyYW5zYWN0aW9ucywgY2hpbGREYXRhS2V5LCBwcmltYXJ5S2V5LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbW1pdChkYXRhLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcihpZCk7XG4gICAgfVxuXG4gICAgLy8gIFRPRE86IHJlbW92ZSB0aGlzIG1ldGhvZC4gRm9yY2UgY2xvbmluZyB0byBzdHJpcCBjaGlsZCBhcnJheXMgd2hlbiBuZWVkZWQgaW5zdGVhZFxuICAgIHByaXZhdGUgY2xlYXJBcnJheXNGcm9tT2JqZWN0KG9iajoge30pIHtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=
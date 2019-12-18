/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, ViewChild, TemplateRef, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { IgxColumnComponent } from '../../column.component';
import { IgxFilteringService, ExpressionUI } from '../grid-filtering.service';
import { FilteringLogic } from '../../../data-operations/filtering-expression.interface';
import { DataType } from '../../../data-operations/data-util';
import { IgxStringFilteringOperand, IgxBooleanFilteringOperand, IgxNumberFilteringOperand, IgxDateFilteringOperand } from '../../../data-operations/filtering-condition';
import { IgxToggleDirective } from '../../../directives/toggle/toggle.directive';
import { ConnectedPositioningStrategy, VerticalAlignment, HorizontalAlignment, IgxOverlayService, AbsoluteScrollStrategy } from '../../../services/index';
import { IgxExcelStyleDefaultExpressionComponent } from './excel-style-default-expression.component';
import { IgxExcelStyleDateExpressionComponent } from './excel-style-date-expression.component';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
var IgxExcelStyleCustomDialogComponent = /** @class */ (function () {
    function IgxExcelStyleCustomDialogComponent(cdr) {
        this.cdr = cdr;
        this.expressionsList = new Array();
        this._customDialogPositionSettings = {
            verticalDirection: VerticalAlignment.Middle,
            horizontalDirection: HorizontalAlignment.Center,
            horizontalStartPoint: HorizontalAlignment.Center,
            verticalStartPoint: VerticalAlignment.Middle
        };
        this._customDialogOverlaySettings = {
            closeOnOutsideClick: true,
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy(this._customDialogPositionSettings),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
    /**
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._customDialogOverlaySettings.outlet = this.grid.outlet;
    };
    Object.defineProperty(IgxExcelStyleCustomDialogComponent.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.column.dataType === DataType.Date) {
                return this.dateExpressionTemplate;
            }
            return this.defaultExpressionTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExcelStyleCustomDialogComponent.prototype, "grid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.filteringService.grid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onCustomDialogOpening = /**
     * @return {?}
     */
    function () {
        if (this.selectedOperator) {
            this.createInitialExpressionUIElement();
        }
    };
    /**
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onCustomDialogOpened = /**
     * @return {?}
     */
    function () {
        if (this.expressionComponents.first) {
            this.expressionComponents.first.focus();
        }
    };
    /**
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this._customDialogOverlaySettings.positionStrategy.settings.target =
            this.grid.rootGrid ? this.grid.rootGrid.nativeElement : this.grid.nativeElement;
        this.toggle.open(this._customDialogOverlaySettings);
    };
    /**
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onClearButtonClick = /**
     * @return {?}
     */
    function () {
        this.filteringService.clearFilter(this.column.field);
        this.createInitialExpressionUIElement();
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        if (this.overlayComponentId) {
            this.overlayService.hide(this.overlayComponentId);
        }
    };
    /**
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onApplyButtonClick = /**
     * @return {?}
     */
    function () {
        this.expressionsList = this.expressionsList.filter(function (element) { return element.expression.condition &&
            (element.expression.searchVal || element.expression.searchVal === 0 || element.expression.condition.isUnary); });
        if (this.expressionsList.length > 0) {
            this.expressionsList[0].beforeOperator = null;
            this.expressionsList[this.expressionsList.length - 1].afterOperator = null;
        }
        this.filteringService.filterInternal(this.column.field, this.expressionsList);
        this.closeDialog();
    };
    /**
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onAddButtonClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var exprUI = new ExpressionUI();
        exprUI.expression = {
            condition: null,
            fieldName: this.column.field,
            ignoreCase: this.column.filteringIgnoreCase,
            searchVal: null
        };
        this.expressionsList[this.expressionsList.length - 1].afterOperator = FilteringLogic.And;
        exprUI.beforeOperator = this.expressionsList[this.expressionsList.length - 1].afterOperator;
        this.expressionsList.push(exprUI);
        this.markChildrenForCheck();
        this.scrollToBottom();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onExpressionRemoved = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var indexToRemove = this.expressionsList.indexOf(event);
        if (indexToRemove === 0 && this.expressionsList.length > 1) {
            this.expressionsList[1].beforeOperator = null;
        }
        else if (indexToRemove === this.expressionsList.length - 1) {
            this.expressionsList[indexToRemove - 1].afterOperator = null;
        }
        else {
            this.expressionsList[indexToRemove - 1].afterOperator = this.expressionsList[indexToRemove + 1].beforeOperator;
            this.expressionsList[0].beforeOperator = null;
            this.expressionsList[this.expressionsList.length - 1].afterOperator = null;
        }
        this.expressionsList.splice(indexToRemove, 1);
        this.cdr.detectChanges();
        this.markChildrenForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onLogicOperatorChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var index = this.expressionsList.indexOf(event.target);
        event.target.afterOperator = event.newValue;
        if (index + 1 < this.expressionsList.length) {
            this.expressionsList[index + 1].beforeOperator = event.newValue;
        }
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onKeyDown = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        eventArgs.stopPropagation();
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.onApplyButtonKeyDown = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (eventArgs.key === "Tab" /* TAB */ && !eventArgs.shiftKey) {
            eventArgs.stopPropagation();
            eventArgs.preventDefault();
        }
    };
    /**
     * @private
     * @param {?} conditionName
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.createCondition = /**
     * @private
     * @param {?} conditionName
     * @return {?}
     */
    function (conditionName) {
        switch (this.column.dataType) {
            case DataType.Boolean:
                return IgxBooleanFilteringOperand.instance().condition(conditionName);
            case DataType.Number:
                return IgxNumberFilteringOperand.instance().condition(conditionName);
            case DataType.Date:
                return IgxDateFilteringOperand.instance().condition(conditionName);
            default:
                return IgxStringFilteringOperand.instance().condition(conditionName);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.markChildrenForCheck = /**
     * @private
     * @return {?}
     */
    function () {
        this.expressionComponents.forEach(function (x) { return x.cdr.markForCheck(); });
        this.expressionDateComponents.forEach(function (x) { return x.cdr.markForCheck(); });
    };
    /**
     * @private
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.createInitialExpressionUIElement = /**
     * @private
     * @return {?}
     */
    function () {
        this.expressionsList = [];
        /** @type {?} */
        var firstExprUI = new ExpressionUI();
        firstExprUI.expression = {
            condition: this.createCondition(this.selectedOperator),
            fieldName: this.column.field,
            ignoreCase: this.column.filteringIgnoreCase,
            searchVal: null
        };
        firstExprUI.afterOperator = FilteringLogic.And;
        this.expressionsList.push(firstExprUI);
        /** @type {?} */
        var secondExprUI = new ExpressionUI();
        secondExprUI.expression = {
            condition: null,
            fieldName: this.column.field,
            ignoreCase: this.column.filteringIgnoreCase,
            searchVal: null
        };
        secondExprUI.beforeOperator = FilteringLogic.And;
        this.expressionsList.push(secondExprUI);
    };
    /**
     * @private
     * @return {?}
     */
    IgxExcelStyleCustomDialogComponent.prototype.scrollToBottom = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.expressionsContainer.nativeElement.scrollTop = _this.expressionsContainer.nativeElement.scrollHeight;
        });
    };
    IgxExcelStyleCustomDialogComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-excel-style-custom-dialog',
                    template: "<article #toggle igxToggle\n    class=\"igx-excel-filter__secondary\"\n    [ngClass]=\"{\n        'igx-excel-filter__secondary--cosy': grid.displayDensity === 'cosy',\n        'igx-excel-filter__secondary--compact': grid.displayDensity === 'compact'\n    }\"\n    (keydown)=\"onKeyDown($event)\"\n    (onOpening)=\"onCustomDialogOpening()\"\n    (onOpened)=\"onCustomDialogOpened()\">\n    <header class=\"igx-excel-filter__secondary-header\">\n        <h4 class=\"igx-typography__h6\">\n            {{ grid.resourceStrings.igx_grid_excel_custom_dialog_header }}{{ column.header || column.field }}\n        </h4>\n    </header>\n\n    <article #expressionsContainer class=\"igx-excel-filter__secondary-main\">\n        <ng-container *ngIf=\"column.dataType === 'date'\">\n            <igx-excel-style-date-expression *ngFor=\"let expression of expressionsList;\"\n                class=\"igx-excel-filter__condition\"\n                [expressionUI]=\"expression\"\n                [column]=\"column\"\n                [grid]=\"grid\"\n                [displayDensity]=\"displayDensity\"\n                [expressionsList]=\"expressionsList\"\n                (onExpressionRemoved)=\"onExpressionRemoved($event)\"\n                (onLogicOperatorChanged)=\"onLogicOperatorChanged($event)\">\n            </igx-excel-style-date-expression>\n        </ng-container>\n\n        <ng-container *ngIf=\"column.dataType !== 'date'\">\n            <igx-excel-style-default-expression *ngFor=\"let expression of expressionsList;\"\n                class=\"igx-excel-filter__condition\"\n                [expressionUI]=\"expression\"\n                [column]=\"column\"\n                [grid]=\"grid\"\n                [displayDensity]=\"displayDensity\"\n                [expressionsList]=\"expressionsList\"\n                (onExpressionRemoved)=\"onExpressionRemoved($event)\"\n                (onLogicOperatorChanged)=\"onLogicOperatorChanged($event)\">\n            </igx-excel-style-default-expression>\n        </ng-container>\n\n        <button igxButton [displayDensity]=\"displayDensity\"\n            class=\"igx-excel-filter__add-filter\"\n            (click)=\"onAddButtonClick()\">\n            <igx-icon>add</igx-icon>\n            <span>{{ grid.resourceStrings.igx_grid_excel_custom_dialog_add }}</span>\n        </button>\n    </article>\n\n    <footer class=\"igx-excel-filter__secondary-footer\">\n        <button igxButton [displayDensity]=\"displayDensity\" (click)=\"onClearButtonClick()\">{{ grid.resourceStrings.igx_grid_excel_custom_dialog_clear }}</button>\n\n        <div>\n            <button igxButton [displayDensity]=\"displayDensity\" (click)=\"closeDialog()\">{{ grid.resourceStrings.igx_grid_excel_cancel }}</button>\n            <button igxButton=\"raised\" [displayDensity]=\"displayDensity\" (click)=\"onApplyButtonClick()\" (keydown)=\"onApplyButtonKeyDown($event)\">\n                {{ grid.resourceStrings.igx_grid_excel_apply }}\n            </button>\n        </div>\n    </footer>\n</article>\n"
                }] }
    ];
    /** @nocollapse */
    IgxExcelStyleCustomDialogComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    IgxExcelStyleCustomDialogComponent.propDecorators = {
        expressionsList: [{ type: Input }],
        column: [{ type: Input }],
        selectedOperator: [{ type: Input }],
        filteringService: [{ type: Input }],
        overlayComponentId: [{ type: Input }],
        overlayService: [{ type: Input }],
        displayDensity: [{ type: Input }],
        expressionComponents: [{ type: ViewChildren, args: [IgxExcelStyleDefaultExpressionComponent,] }],
        expressionDateComponents: [{ type: ViewChildren, args: [IgxExcelStyleDateExpressionComponent,] }],
        toggle: [{ type: ViewChild, args: ['toggle', { read: IgxToggleDirective, static: true },] }],
        defaultExpressionTemplate: [{ type: ViewChild, args: ['defaultExpressionTemplate', { read: TemplateRef, static: false },] }],
        dateExpressionTemplate: [{ type: ViewChild, args: ['dateExpressionTemplate', { read: TemplateRef, static: false },] }],
        expressionsContainer: [{ type: ViewChild, args: ['expressionsContainer', { static: true },] }]
    };
    return IgxExcelStyleCustomDialogComponent;
}());
export { IgxExcelStyleCustomDialogComponent };
if (false) {
    /** @type {?} */
    IgxExcelStyleCustomDialogComponent.prototype.expressionsList;
    /**
     * @type {?}
     * @private
     */
    IgxExcelStyleCustomDialogComponent.prototype._customDialogPositionSettings;
    /**
     * @type {?}
     * @private
     */
    IgxExcelStyleCustomDialogComponent.prototype._customDialogOverlaySettings;
    /** @type {?} */
    IgxExcelStyleCustomDialogComponent.prototype.column;
    /** @type {?} */
    IgxExcelStyleCustomDialogComponent.prototype.selectedOperator;
    /** @type {?} */
    IgxExcelStyleCustomDialogComponent.prototype.filteringService;
    /** @type {?} */
    IgxExcelStyleCustomDialogComponent.prototype.overlayComponentId;
    /** @type {?} */
    IgxExcelStyleCustomDialogComponent.prototype.overlayService;
    /** @type {?} */
    IgxExcelStyleCustomDialogComponent.prototype.displayDensity;
    /**
     * @type {?}
     * @private
     */
    IgxExcelStyleCustomDialogComponent.prototype.expressionComponents;
    /**
     * @type {?}
     * @private
     */
    IgxExcelStyleCustomDialogComponent.prototype.expressionDateComponents;
    /** @type {?} */
    IgxExcelStyleCustomDialogComponent.prototype.toggle;
    /**
     * @type {?}
     * @protected
     */
    IgxExcelStyleCustomDialogComponent.prototype.defaultExpressionTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxExcelStyleCustomDialogComponent.prototype.dateExpressionTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxExcelStyleCustomDialogComponent.prototype.expressionsContainer;
    /**
     * @type {?}
     * @private
     */
    IgxExcelStyleCustomDialogComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtY3VzdG9tLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2ZpbHRlcmluZy9leGNlbC1zdHlsZS9leGNlbC1zdHlsZS1jdXN0b20tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sRUFDSCx5QkFBeUIsRUFDekIsMEJBQTBCLEVBQzFCLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDMUIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQ0gsNEJBQTRCLEVBRTVCLGlCQUFpQixFQUVqQixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN6QixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBNkIsdUNBQXVDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVoSSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFLdkQ7SUE2REks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RiwwRUFLRTs7SUFFRixvREFDa0M7O0lBRWxDLDhEQUNnQzs7SUFFaEMsOERBQzZDOztJQUU3QyxnRUFDa0M7O0lBRWxDLDREQUN5Qzs7SUFFekMsNERBQ3NDOzs7OztJQUV0QyxrRUFDaUY7Ozs7O0lBRWpGLHNFQUNrRjs7SUFFbEYsb0RBQ2tDOzs7OztJQUVsQyx1RUFDc0Q7Ozs7O0lBRXRELG9FQUNtRDs7Ozs7SUFFbkQsa0VBQzJDOzs7OztJQUUvQixpREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBJbnB1dCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElneEZpbHRlcmluZ1NlcnZpY2UsIEV4cHJlc3Npb25VSSB9IGZyb20gJy4uL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyaW5nTG9naWMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQge1xuICAgIElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQsXG4gICAgSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQsXG4gICAgSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZFxufSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWNvbmRpdGlvbic7XG5pbXBvcnQgeyBJZ3hUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gICAgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSxcbiAgICBPdmVybGF5U2V0dGluZ3MsXG4gICAgVmVydGljYWxBbGlnbm1lbnQsXG4gICAgUG9zaXRpb25TZXR0aW5ncyxcbiAgICBIb3Jpem9udGFsQWxpZ25tZW50LFxuICAgIElneE92ZXJsYXlTZXJ2aWNlLFxuICAgIEFic29sdXRlU2Nyb2xsU3RyYXRlZ3lcbn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgSUxvZ2ljT3BlcmF0b3JDaGFuZ2VkQXJncywgSWd4RXhjZWxTdHlsZURlZmF1bHRFeHByZXNzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlbC1zdHlsZS1kZWZhdWx0LWV4cHJlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElneEV4Y2VsU3R5bGVEYXRlRXhwcmVzc2lvbkNvbXBvbmVudCB9IGZyb20gJy4vZXhjZWwtc3R5bGUtZGF0ZS1leHByZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVuc2l0eSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1leGNlbC1zdHlsZS1jdXN0b20tZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtc3R5bGUtY3VzdG9tLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZUN1c3RvbURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZXhwcmVzc2lvbnNMaXN0ID0gbmV3IEFycmF5PEV4cHJlc3Npb25VST4oKTtcblxuICAgIHByaXZhdGUgX2N1c3RvbURpYWxvZ1Bvc2l0aW9uU2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3MgPSB7XG4gICAgICAgIHZlcnRpY2FsRGlyZWN0aW9uOiBWZXJ0aWNhbEFsaWdubWVudC5NaWRkbGUsXG4gICAgICAgIGhvcml6b250YWxEaXJlY3Rpb246IEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyLFxuICAgICAgICBob3Jpem9udGFsU3RhcnRQb2ludDogSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXIsXG4gICAgICAgIHZlcnRpY2FsU3RhcnRQb2ludDogVmVydGljYWxBbGlnbm1lbnQuTWlkZGxlXG4gICAgfTtcblxuICAgIHByaXZhdGUgX2N1c3RvbURpYWxvZ092ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0ge1xuICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5KHRoaXMuX2N1c3RvbURpYWxvZ1Bvc2l0aW9uU2V0dGluZ3MpLFxuICAgICAgICBzY3JvbGxTdHJhdGVneTogbmV3IEFic29sdXRlU2Nyb2xsU3RyYXRlZ3koKVxuICAgIH07XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNlbGVjdGVkT3BlcmF0b3I6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2U7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBvdmVybGF5Q29tcG9uZW50SWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG92ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpc3BsYXlEZW5zaXR5OiBEaXNwbGF5RGVuc2l0eTtcblxuICAgIEBWaWV3Q2hpbGRyZW4oSWd4RXhjZWxTdHlsZURlZmF1bHRFeHByZXNzaW9uQ29tcG9uZW50KVxuICAgIHByaXZhdGUgZXhwcmVzc2lvbkNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxJZ3hFeGNlbFN0eWxlRGVmYXVsdEV4cHJlc3Npb25Db21wb25lbnQ+O1xuXG4gICAgQFZpZXdDaGlsZHJlbihJZ3hFeGNlbFN0eWxlRGF0ZUV4cHJlc3Npb25Db21wb25lbnQpXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uRGF0ZUNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxJZ3hFeGNlbFN0eWxlRGF0ZUV4cHJlc3Npb25Db21wb25lbnQ+O1xuXG4gICAgQFZpZXdDaGlsZCgndG9nZ2xlJywgeyByZWFkOiBJZ3hUb2dnbGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0b2dnbGU6IElneFRvZ2dsZURpcmVjdGl2ZTtcblxuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRFeHByZXNzaW9uVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRFeHByZXNzaW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkYXRlRXhwcmVzc2lvblRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBkYXRlRXhwcmVzc2lvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZXhwcmVzc2lvbnNDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBleHByZXNzaW9uc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY3VzdG9tRGlhbG9nT3ZlcmxheVNldHRpbmdzLm91dGxldCA9IHRoaXMuZ3JpZC5vdXRsZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVFeHByZXNzaW9uVGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RXhwcmVzc2lvblRlbXBsYXRlO1xuICAgIH1cblxuICAgIGdldCBncmlkKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DdXN0b21EaWFsb2dPcGVuaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wZXJhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUluaXRpYWxFeHByZXNzaW9uVUlFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DdXN0b21EaWFsb2dPcGVuZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3Npb25Db21wb25lbnRzLmZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25Db21wb25lbnRzLmZpcnN0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpIHtcbiAgICAgICAgdGhpcy5fY3VzdG9tRGlhbG9nT3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID1cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5yb290R3JpZCA/IHRoaXMuZ3JpZC5yb290R3JpZC5uYXRpdmVFbGVtZW50IDogdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMudG9nZ2xlLm9wZW4odGhpcy5fY3VzdG9tRGlhbG9nT3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGVhckJ1dHRvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuY2xlYXJGaWx0ZXIodGhpcy5jb2x1bW4uZmllbGQpO1xuICAgICAgICB0aGlzLmNyZWF0ZUluaXRpYWxFeHByZXNzaW9uVUlFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlDb21wb25lbnRJZCkge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5U2VydmljZS5oaWRlKHRoaXMub3ZlcmxheUNvbXBvbmVudElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkFwcGx5QnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0ID0gdGhpcy5leHByZXNzaW9uc0xpc3QuZmlsdGVyKFxuICAgICAgICAgICAgZWxlbWVudCA9PiBlbGVtZW50LmV4cHJlc3Npb24uY29uZGl0aW9uICYmXG4gICAgICAgICAgICAoZWxlbWVudC5leHByZXNzaW9uLnNlYXJjaFZhbCB8fCBlbGVtZW50LmV4cHJlc3Npb24uc2VhcmNoVmFsID09PSAwIHx8IGVsZW1lbnQuZXhwcmVzc2lvbi5jb25kaXRpb24uaXNVbmFyeSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFswXS5iZWZvcmVPcGVyYXRvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFt0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGggLSAxXS5hZnRlck9wZXJhdG9yID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5maWx0ZXJJbnRlcm5hbCh0aGlzLmNvbHVtbi5maWVsZCwgdGhpcy5leHByZXNzaW9uc0xpc3QpO1xuICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQWRkQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IGV4cHJVSSA9IG5ldyBFeHByZXNzaW9uVUkoKTtcbiAgICAgICAgZXhwclVJLmV4cHJlc3Npb24gPSB7XG4gICAgICAgICAgICBjb25kaXRpb246IG51bGwsXG4gICAgICAgICAgICBmaWVsZE5hbWU6IHRoaXMuY29sdW1uLmZpZWxkLFxuICAgICAgICAgICAgaWdub3JlQ2FzZTogdGhpcy5jb2x1bW4uZmlsdGVyaW5nSWdub3JlQ2FzZSxcbiAgICAgICAgICAgIHNlYXJjaFZhbDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0W3RoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCAtIDFdLmFmdGVyT3BlcmF0b3IgPSBGaWx0ZXJpbmdMb2dpYy5BbmQ7XG4gICAgICAgIGV4cHJVSS5iZWZvcmVPcGVyYXRvciA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0W3RoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCAtIDFdLmFmdGVyT3BlcmF0b3I7XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3QucHVzaChleHByVUkpO1xuXG4gICAgICAgIHRoaXMubWFya0NoaWxkcmVuRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkV4cHJlc3Npb25SZW1vdmVkKGV2ZW50OiBFeHByZXNzaW9uVUkpIHtcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0LmluZGV4T2YoZXZlbnQpO1xuXG4gICAgICAgIGlmIChpbmRleFRvUmVtb3ZlID09PSAwICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0WzFdLmJlZm9yZU9wZXJhdG9yID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleFRvUmVtb3ZlID09PSB0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFtpbmRleFRvUmVtb3ZlIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFtpbmRleFRvUmVtb3ZlIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0W2luZGV4VG9SZW1vdmUgKyAxXS5iZWZvcmVPcGVyYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdLmJlZm9yZU9wZXJhdG9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0W3RoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCAtIDFdLmFmdGVyT3BlcmF0b3IgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3Quc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLm1hcmtDaGlsZHJlbkZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9naWNPcGVyYXRvckNoYW5nZWQoZXZlbnQ6IElMb2dpY09wZXJhdG9yQ2hhbmdlZEFyZ3MpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV4cHJlc3Npb25zTGlzdC5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5hZnRlck9wZXJhdG9yID0gZXZlbnQubmV3VmFsdWU7XG4gICAgICAgIGlmIChpbmRleCArIDEgPCB0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0W2luZGV4ICsgMV0uYmVmb3JlT3BlcmF0b3IgPSBldmVudC5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbktleURvd24oZXZlbnRBcmdzKSB7XG4gICAgICAgIGV2ZW50QXJncy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25BcHBseUJ1dHRvbktleURvd24oZXZlbnRBcmdzKSB7XG4gICAgICAgIGlmIChldmVudEFyZ3Mua2V5ID09PSBLRVlTLlRBQiAmJiAhZXZlbnRBcmdzLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBldmVudEFyZ3Muc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29uZGl0aW9uKGNvbmRpdGlvbk5hbWU6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY29sdW1uLmRhdGFUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLkJvb2xlYW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIElneEJvb2xlYW5GaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCkuY29uZGl0aW9uKGNvbmRpdGlvbk5hbWUpO1xuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5OdW1iZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIElneE51bWJlckZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oY29uZGl0aW9uTmFtZSk7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLkRhdGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCkuY29uZGl0aW9uKGNvbmRpdGlvbk5hbWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbihjb25kaXRpb25OYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya0NoaWxkcmVuRm9yQ2hlY2soKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkNvbXBvbmVudHMuZm9yRWFjaCh4ID0+IHguY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uRGF0ZUNvbXBvbmVudHMuZm9yRWFjaCh4ID0+IHguY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUluaXRpYWxFeHByZXNzaW9uVUlFbGVtZW50KCkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdCA9IFtdO1xuICAgICAgICBjb25zdCBmaXJzdEV4cHJVSSA9IG5ldyBFeHByZXNzaW9uVUkoKTtcblxuICAgICAgICBmaXJzdEV4cHJVSS5leHByZXNzaW9uID0ge1xuICAgICAgICAgICAgY29uZGl0aW9uOiB0aGlzLmNyZWF0ZUNvbmRpdGlvbih0aGlzLnNlbGVjdGVkT3BlcmF0b3IpLFxuICAgICAgICAgICAgZmllbGROYW1lOiB0aGlzLmNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgIGlnbm9yZUNhc2U6IHRoaXMuY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2UsXG4gICAgICAgICAgICBzZWFyY2hWYWw6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgZmlyc3RFeHByVUkuYWZ0ZXJPcGVyYXRvciA9IEZpbHRlcmluZ0xvZ2ljLkFuZDtcblxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdC5wdXNoKGZpcnN0RXhwclVJKTtcblxuICAgICAgICBjb25zdCBzZWNvbmRFeHByVUkgPSBuZXcgRXhwcmVzc2lvblVJKCk7XG4gICAgICAgIHNlY29uZEV4cHJVSS5leHByZXNzaW9uID0ge1xuICAgICAgICAgICAgY29uZGl0aW9uOiBudWxsLFxuICAgICAgICAgICAgZmllbGROYW1lOiB0aGlzLmNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgIGlnbm9yZUNhc2U6IHRoaXMuY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2UsXG4gICAgICAgICAgICBzZWFyY2hWYWw6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBzZWNvbmRFeHByVUkuYmVmb3JlT3BlcmF0b3IgPSBGaWx0ZXJpbmdMb2dpYy5BbmQ7XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3QucHVzaChzZWNvbmRFeHByVUkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5leHByZXNzaW9uc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
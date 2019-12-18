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
export class IgxExcelStyleCustomDialogComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
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
    ngAfterViewInit() {
        this._customDialogOverlaySettings.outlet = this.grid.outlet;
    }
    /**
     * @return {?}
     */
    get template() {
        if (this.column.dataType === DataType.Date) {
            return this.dateExpressionTemplate;
        }
        return this.defaultExpressionTemplate;
    }
    /**
     * @return {?}
     */
    get grid() {
        return this.filteringService.grid;
    }
    /**
     * @return {?}
     */
    onCustomDialogOpening() {
        if (this.selectedOperator) {
            this.createInitialExpressionUIElement();
        }
    }
    /**
     * @return {?}
     */
    onCustomDialogOpened() {
        if (this.expressionComponents.first) {
            this.expressionComponents.first.focus();
        }
    }
    /**
     * @return {?}
     */
    open() {
        this._customDialogOverlaySettings.positionStrategy.settings.target =
            this.grid.rootGrid ? this.grid.rootGrid.nativeElement : this.grid.nativeElement;
        this.toggle.open(this._customDialogOverlaySettings);
    }
    /**
     * @return {?}
     */
    onClearButtonClick() {
        this.filteringService.clearFilter(this.column.field);
        this.createInitialExpressionUIElement();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    closeDialog() {
        if (this.overlayComponentId) {
            this.overlayService.hide(this.overlayComponentId);
        }
    }
    /**
     * @return {?}
     */
    onApplyButtonClick() {
        this.expressionsList = this.expressionsList.filter(element => element.expression.condition &&
            (element.expression.searchVal || element.expression.searchVal === 0 || element.expression.condition.isUnary));
        if (this.expressionsList.length > 0) {
            this.expressionsList[0].beforeOperator = null;
            this.expressionsList[this.expressionsList.length - 1].afterOperator = null;
        }
        this.filteringService.filterInternal(this.column.field, this.expressionsList);
        this.closeDialog();
    }
    /**
     * @return {?}
     */
    onAddButtonClick() {
        /** @type {?} */
        const exprUI = new ExpressionUI();
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onExpressionRemoved(event) {
        /** @type {?} */
        const indexToRemove = this.expressionsList.indexOf(event);
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onLogicOperatorChanged(event) {
        /** @type {?} */
        const index = this.expressionsList.indexOf(event.target);
        event.target.afterOperator = event.newValue;
        if (index + 1 < this.expressionsList.length) {
            this.expressionsList[index + 1].beforeOperator = event.newValue;
        }
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onKeyDown(eventArgs) {
        eventArgs.stopPropagation();
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onApplyButtonKeyDown(eventArgs) {
        if (eventArgs.key === "Tab" /* TAB */ && !eventArgs.shiftKey) {
            eventArgs.stopPropagation();
            eventArgs.preventDefault();
        }
    }
    /**
     * @private
     * @param {?} conditionName
     * @return {?}
     */
    createCondition(conditionName) {
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
    }
    /**
     * @private
     * @return {?}
     */
    markChildrenForCheck() {
        this.expressionComponents.forEach(x => x.cdr.markForCheck());
        this.expressionDateComponents.forEach(x => x.cdr.markForCheck());
    }
    /**
     * @private
     * @return {?}
     */
    createInitialExpressionUIElement() {
        this.expressionsList = [];
        /** @type {?} */
        const firstExprUI = new ExpressionUI();
        firstExprUI.expression = {
            condition: this.createCondition(this.selectedOperator),
            fieldName: this.column.field,
            ignoreCase: this.column.filteringIgnoreCase,
            searchVal: null
        };
        firstExprUI.afterOperator = FilteringLogic.And;
        this.expressionsList.push(firstExprUI);
        /** @type {?} */
        const secondExprUI = new ExpressionUI();
        secondExprUI.expression = {
            condition: null,
            fieldName: this.column.field,
            ignoreCase: this.column.filteringIgnoreCase,
            searchVal: null
        };
        secondExprUI.beforeOperator = FilteringLogic.And;
        this.expressionsList.push(secondExprUI);
    }
    /**
     * @private
     * @return {?}
     */
    scrollToBottom() {
        requestAnimationFrame(() => {
            this.expressionsContainer.nativeElement.scrollTop = this.expressionsContainer.nativeElement.scrollHeight;
        });
    }
}
IgxExcelStyleCustomDialogComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-excel-style-custom-dialog',
                template: "<article #toggle igxToggle\n    class=\"igx-excel-filter__secondary\"\n    [ngClass]=\"{\n        'igx-excel-filter__secondary--cosy': grid.displayDensity === 'cosy',\n        'igx-excel-filter__secondary--compact': grid.displayDensity === 'compact'\n    }\"\n    (keydown)=\"onKeyDown($event)\"\n    (onOpening)=\"onCustomDialogOpening()\"\n    (onOpened)=\"onCustomDialogOpened()\">\n    <header class=\"igx-excel-filter__secondary-header\">\n        <h4 class=\"igx-typography__h6\">\n            {{ grid.resourceStrings.igx_grid_excel_custom_dialog_header }}{{ column.header || column.field }}\n        </h4>\n    </header>\n\n    <article #expressionsContainer class=\"igx-excel-filter__secondary-main\">\n        <ng-container *ngIf=\"column.dataType === 'date'\">\n            <igx-excel-style-date-expression *ngFor=\"let expression of expressionsList;\"\n                class=\"igx-excel-filter__condition\"\n                [expressionUI]=\"expression\"\n                [column]=\"column\"\n                [grid]=\"grid\"\n                [displayDensity]=\"displayDensity\"\n                [expressionsList]=\"expressionsList\"\n                (onExpressionRemoved)=\"onExpressionRemoved($event)\"\n                (onLogicOperatorChanged)=\"onLogicOperatorChanged($event)\">\n            </igx-excel-style-date-expression>\n        </ng-container>\n\n        <ng-container *ngIf=\"column.dataType !== 'date'\">\n            <igx-excel-style-default-expression *ngFor=\"let expression of expressionsList;\"\n                class=\"igx-excel-filter__condition\"\n                [expressionUI]=\"expression\"\n                [column]=\"column\"\n                [grid]=\"grid\"\n                [displayDensity]=\"displayDensity\"\n                [expressionsList]=\"expressionsList\"\n                (onExpressionRemoved)=\"onExpressionRemoved($event)\"\n                (onLogicOperatorChanged)=\"onLogicOperatorChanged($event)\">\n            </igx-excel-style-default-expression>\n        </ng-container>\n\n        <button igxButton [displayDensity]=\"displayDensity\"\n            class=\"igx-excel-filter__add-filter\"\n            (click)=\"onAddButtonClick()\">\n            <igx-icon>add</igx-icon>\n            <span>{{ grid.resourceStrings.igx_grid_excel_custom_dialog_add }}</span>\n        </button>\n    </article>\n\n    <footer class=\"igx-excel-filter__secondary-footer\">\n        <button igxButton [displayDensity]=\"displayDensity\" (click)=\"onClearButtonClick()\">{{ grid.resourceStrings.igx_grid_excel_custom_dialog_clear }}</button>\n\n        <div>\n            <button igxButton [displayDensity]=\"displayDensity\" (click)=\"closeDialog()\">{{ grid.resourceStrings.igx_grid_excel_cancel }}</button>\n            <button igxButton=\"raised\" [displayDensity]=\"displayDensity\" (click)=\"onApplyButtonClick()\" (keydown)=\"onApplyButtonKeyDown($event)\">\n                {{ grid.resourceStrings.igx_grid_excel_apply }}\n            </button>\n        </div>\n    </footer>\n</article>\n"
            }] }
];
/** @nocollapse */
IgxExcelStyleCustomDialogComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtY3VzdG9tLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2ZpbHRlcmluZy9leGNlbC1zdHlsZS9leGNlbC1zdHlsZS1jdXN0b20tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sRUFDSCx5QkFBeUIsRUFDekIsMEJBQTBCLEVBQzFCLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDMUIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQ0gsNEJBQTRCLEVBRTVCLGlCQUFpQixFQUVqQixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN6QixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBNkIsdUNBQXVDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVoSSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFXdkQsTUFBTSxP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cG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIElucHV0LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RmlsdGVyaW5nU2VydmljZSwgRXhwcmVzc2lvblVJIH0gZnJvbSAnLi4vZ3JpZC1maWx0ZXJpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJpbmdMb2dpYyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7XG4gICAgSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hCb29sZWFuRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hOdW1iZXJGaWx0ZXJpbmdPcGVyYW5kLFxuICAgIElneERhdGVGaWx0ZXJpbmdPcGVyYW5kXG59IGZyb20gJy4uLy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctY29uZGl0aW9uJztcbmltcG9ydCB7IElneFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgICBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5LFxuICAgIE92ZXJsYXlTZXR0aW5ncyxcbiAgICBWZXJ0aWNhbEFsaWdubWVudCxcbiAgICBQb3NpdGlvblNldHRpbmdzLFxuICAgIEhvcml6b250YWxBbGlnbm1lbnQsXG4gICAgSWd4T3ZlcmxheVNlcnZpY2UsXG4gICAgQWJzb2x1dGVTY3JvbGxTdHJhdGVneVxufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJTG9naWNPcGVyYXRvckNoYW5nZWRBcmdzLCBJZ3hFeGNlbFN0eWxlRGVmYXVsdEV4cHJlc3Npb25Db21wb25lbnQgfSBmcm9tICcuL2V4Y2VsLXN0eWxlLWRlZmF1bHQtZXhwcmVzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4RXhjZWxTdHlsZURhdGVFeHByZXNzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlbC1zdHlsZS1kYXRlLWV4cHJlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZW5zaXR5JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWV4Y2VsLXN0eWxlLWN1c3RvbS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1zdHlsZS1jdXN0b20tZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlQ3VzdG9tRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBleHByZXNzaW9uc0xpc3QgPSBuZXcgQXJyYXk8RXhwcmVzc2lvblVJPigpO1xuXG4gICAgcHJpdmF0ZSBfY3VzdG9tRGlhbG9nUG9zaXRpb25TZXR0aW5nczogUG9zaXRpb25TZXR0aW5ncyA9IHtcbiAgICAgICAgdmVydGljYWxEaXJlY3Rpb246IFZlcnRpY2FsQWxpZ25tZW50Lk1pZGRsZSxcbiAgICAgICAgaG9yaXpvbnRhbERpcmVjdGlvbjogSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXIsXG4gICAgICAgIGhvcml6b250YWxTdGFydFBvaW50OiBIb3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcixcbiAgICAgICAgdmVydGljYWxTdGFydFBvaW50OiBWZXJ0aWNhbEFsaWdubWVudC5NaWRkbGVcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfY3VzdG9tRGlhbG9nT3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneTogbmV3IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kodGhpcy5fY3VzdG9tRGlhbG9nUG9zaXRpb25TZXR0aW5ncyksXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpXG4gICAgfTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcGVyYXRvcjogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZmlsdGVyaW5nU2VydmljZTogSWd4RmlsdGVyaW5nU2VydmljZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG92ZXJsYXlDb21wb25lbnRJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzcGxheURlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuXG4gICAgQFZpZXdDaGlsZHJlbihJZ3hFeGNlbFN0eWxlRGVmYXVsdEV4cHJlc3Npb25Db21wb25lbnQpXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uQ29tcG9uZW50czogUXVlcnlMaXN0PElneEV4Y2VsU3R5bGVEZWZhdWx0RXhwcmVzc2lvbkNvbXBvbmVudD47XG5cbiAgICBAVmlld0NoaWxkcmVuKElneEV4Y2VsU3R5bGVEYXRlRXhwcmVzc2lvbkNvbXBvbmVudClcbiAgICBwcml2YXRlIGV4cHJlc3Npb25EYXRlQ29tcG9uZW50czogUXVlcnlMaXN0PElneEV4Y2VsU3R5bGVEYXRlRXhwcmVzc2lvbkNvbXBvbmVudD47XG5cbiAgICBAVmlld0NoaWxkKCd0b2dnbGUnLCB7IHJlYWQ6IElneFRvZ2dsZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRvZ2dsZTogSWd4VG9nZ2xlRGlyZWN0aXZlO1xuXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdEV4cHJlc3Npb25UZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEV4cHJlc3Npb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVFeHByZXNzaW9uVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGRhdGVFeHByZXNzaW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdleHByZXNzaW9uc0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGV4cHJlc3Npb25zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jdXN0b21EaWFsb2dPdmVybGF5U2V0dGluZ3Mub3V0bGV0ID0gdGhpcy5ncmlkLm91dGxldDtcbiAgICB9XG5cbiAgICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUV4cHJlc3Npb25UZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRFeHByZXNzaW9uVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGdyaWQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyaW5nU2VydmljZS5ncmlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkN1c3RvbURpYWxvZ09wZW5pbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3BlcmF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cHJlc3Npb25VSUVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkN1c3RvbURpYWxvZ09wZW5lZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2lvbkNvbXBvbmVudHMuZmlyc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbkNvbXBvbmVudHMuZmlyc3QuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCkge1xuICAgICAgICB0aGlzLl9jdXN0b21EaWFsb2dPdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgPVxuICAgICAgICAgICAgdGhpcy5ncmlkLnJvb3RHcmlkID8gdGhpcy5ncmlkLnJvb3RHcmlkLm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmdyaWQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy50b2dnbGUub3Blbih0aGlzLl9jdXN0b21EaWFsb2dPdmVybGF5U2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsZWFyQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5jbGVhckZpbHRlcih0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cHJlc3Npb25VSUVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheUNvbXBvbmVudElkKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLmhpZGUodGhpcy5vdmVybGF5Q29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uQXBwbHlCdXR0b25DbGljaygpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3QgPSB0aGlzLmV4cHJlc3Npb25zTGlzdC5maWx0ZXIoXG4gICAgICAgICAgICBlbGVtZW50ID0+IGVsZW1lbnQuZXhwcmVzc2lvbi5jb25kaXRpb24gJiZcbiAgICAgICAgICAgIChlbGVtZW50LmV4cHJlc3Npb24uc2VhcmNoVmFsIHx8IGVsZW1lbnQuZXhwcmVzc2lvbi5zZWFyY2hWYWwgPT09IDAgfHwgZWxlbWVudC5leHByZXNzaW9uLmNvbmRpdGlvbi5pc1VuYXJ5KSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdLmJlZm9yZU9wZXJhdG9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0W3RoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCAtIDFdLmFmdGVyT3BlcmF0b3IgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmZpbHRlckludGVybmFsKHRoaXMuY29sdW1uLmZpZWxkLCB0aGlzLmV4cHJlc3Npb25zTGlzdCk7XG4gICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25BZGRCdXR0b25DbGljaygpIHtcbiAgICAgICAgY29uc3QgZXhwclVJID0gbmV3IEV4cHJlc3Npb25VSSgpO1xuICAgICAgICBleHByVUkuZXhwcmVzc2lvbiA9IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGZpZWxkTmFtZTogdGhpcy5jb2x1bW4uZmllbGQsXG4gICAgICAgICAgICBpZ25vcmVDYXNlOiB0aGlzLmNvbHVtbi5maWx0ZXJpbmdJZ25vcmVDYXNlLFxuICAgICAgICAgICAgc2VhcmNoVmFsOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IEZpbHRlcmluZ0xvZ2ljLkFuZDtcbiAgICAgICAgZXhwclVJLmJlZm9yZU9wZXJhdG9yID0gdGhpcy5leHByZXNzaW9uc0xpc3RbdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoIC0gMV0uYWZ0ZXJPcGVyYXRvcjtcblxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdC5wdXNoKGV4cHJVSSk7XG5cbiAgICAgICAgdGhpcy5tYXJrQ2hpbGRyZW5Gb3JDaGVjaygpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRXhwcmVzc2lvblJlbW92ZWQoZXZlbnQ6IEV4cHJlc3Npb25VSSkge1xuICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5leHByZXNzaW9uc0xpc3QuaW5kZXhPZihldmVudCk7XG5cbiAgICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPT09IDAgJiYgdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbMV0uYmVmb3JlT3BlcmF0b3IgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4VG9SZW1vdmUgPT09IHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0W2luZGV4VG9SZW1vdmUgLSAxXS5hZnRlck9wZXJhdG9yID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0W2luZGV4VG9SZW1vdmUgLSAxXS5hZnRlck9wZXJhdG9yID0gdGhpcy5leHByZXNzaW9uc0xpc3RbaW5kZXhUb1JlbW92ZSArIDFdLmJlZm9yZU9wZXJhdG9yO1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbMF0uYmVmb3JlT3BlcmF0b3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdC5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG5cbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHRoaXMubWFya0NoaWxkcmVuRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2dpY09wZXJhdG9yQ2hhbmdlZChldmVudDogSUxvZ2ljT3BlcmF0b3JDaGFuZ2VkQXJncykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0LmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmFmdGVyT3BlcmF0b3IgPSBldmVudC5uZXdWYWx1ZTtcbiAgICAgICAgaWYgKGluZGV4ICsgMSA8IHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbaW5kZXggKyAxXS5iZWZvcmVPcGVyYXRvciA9IGV2ZW50Lm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uS2V5RG93bihldmVudEFyZ3MpIHtcbiAgICAgICAgZXZlbnRBcmdzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFwcGx5QnV0dG9uS2V5RG93bihldmVudEFyZ3MpIHtcbiAgICAgICAgaWYgKGV2ZW50QXJncy5rZXkgPT09IEtFWVMuVEFCICYmICFldmVudEFyZ3Muc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50QXJncy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50QXJncy5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb25kaXRpb24oY29uZGl0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb2x1bW4uZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuQm9vbGVhbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oY29uZGl0aW9uTmFtZSk7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbihjb25kaXRpb25OYW1lKTtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuRGF0ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oY29uZGl0aW9uTmFtZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCkuY29uZGl0aW9uKGNvbmRpdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYXJrQ2hpbGRyZW5Gb3JDaGVjaygpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQ29tcG9uZW50cy5mb3JFYWNoKHggPT4geC5jZHIubWFya0ZvckNoZWNrKCkpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25EYXRlQ29tcG9uZW50cy5mb3JFYWNoKHggPT4geC5jZHIubWFya0ZvckNoZWNrKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSW5pdGlhbEV4cHJlc3Npb25VSUVsZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0ID0gW107XG4gICAgICAgIGNvbnN0IGZpcnN0RXhwclVJID0gbmV3IEV4cHJlc3Npb25VSSgpO1xuXG4gICAgICAgIGZpcnN0RXhwclVJLmV4cHJlc3Npb24gPSB7XG4gICAgICAgICAgICBjb25kaXRpb246IHRoaXMuY3JlYXRlQ29uZGl0aW9uKHRoaXMuc2VsZWN0ZWRPcGVyYXRvciksXG4gICAgICAgICAgICBmaWVsZE5hbWU6IHRoaXMuY29sdW1uLmZpZWxkLFxuICAgICAgICAgICAgaWdub3JlQ2FzZTogdGhpcy5jb2x1bW4uZmlsdGVyaW5nSWdub3JlQ2FzZSxcbiAgICAgICAgICAgIHNlYXJjaFZhbDogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBmaXJzdEV4cHJVSS5hZnRlck9wZXJhdG9yID0gRmlsdGVyaW5nTG9naWMuQW5kO1xuXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0LnB1c2goZmlyc3RFeHByVUkpO1xuXG4gICAgICAgIGNvbnN0IHNlY29uZEV4cHJVSSA9IG5ldyBFeHByZXNzaW9uVUkoKTtcbiAgICAgICAgc2Vjb25kRXhwclVJLmV4cHJlc3Npb24gPSB7XG4gICAgICAgICAgICBjb25kaXRpb246IG51bGwsXG4gICAgICAgICAgICBmaWVsZE5hbWU6IHRoaXMuY29sdW1uLmZpZWxkLFxuICAgICAgICAgICAgaWdub3JlQ2FzZTogdGhpcy5jb2x1bW4uZmlsdGVyaW5nSWdub3JlQ2FzZSxcbiAgICAgICAgICAgIHNlYXJjaFZhbDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHNlY29uZEV4cHJVSS5iZWZvcmVPcGVyYXRvciA9IEZpbHRlcmluZ0xvZ2ljLkFuZDtcblxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdC5wdXNoKHNlY29uZEV4cHJVSSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLmV4cHJlc3Npb25zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
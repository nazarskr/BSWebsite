import { ChangeDetectorRef, AfterViewInit, TemplateRef, ElementRef } from '@angular/core';
import { IgxColumnComponent } from '../../column.component';
import { IgxFilteringService, ExpressionUI } from '../grid-filtering.service';
import { IgxToggleDirective } from '../../../directives/toggle/toggle.directive';
import { IgxOverlayService } from '../../../services/index';
import { ILogicOperatorChangedArgs } from './excel-style-default-expression.component';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
export declare class IgxExcelStyleCustomDialogComponent implements AfterViewInit {
    private cdr;
    expressionsList: ExpressionUI[];
    private _customDialogPositionSettings;
    private _customDialogOverlaySettings;
    column: IgxColumnComponent;
    selectedOperator: string;
    filteringService: IgxFilteringService;
    overlayComponentId: string;
    overlayService: IgxOverlayService;
    displayDensity: DisplayDensity;
    private expressionComponents;
    private expressionDateComponents;
    toggle: IgxToggleDirective;
    protected defaultExpressionTemplate: TemplateRef<any>;
    protected dateExpressionTemplate: TemplateRef<any>;
    protected expressionsContainer: ElementRef;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    readonly template: TemplateRef<any>;
    readonly grid: any;
    onCustomDialogOpening(): void;
    onCustomDialogOpened(): void;
    open(): void;
    onClearButtonClick(): void;
    closeDialog(): void;
    onApplyButtonClick(): void;
    onAddButtonClick(): void;
    onExpressionRemoved(event: ExpressionUI): void;
    onLogicOperatorChanged(event: ILogicOperatorChangedArgs): void;
    onKeyDown(eventArgs: any): void;
    onApplyButtonKeyDown(eventArgs: any): void;
    private createCondition;
    private markChildrenForCheck;
    private createInitialExpressionUIElement;
    private scrollToBottom;
}

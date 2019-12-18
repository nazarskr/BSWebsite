import { IgxColumnComponent } from '../../column.component';
import { IgxButtonGroupComponent } from '../../../buttonGroup/buttonGroup.component';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
export declare class IgxExcelStyleSortingComponent {
    column: IgxColumnComponent;
    grid: any;
    displayDensity: DisplayDensity;
    sortButtonGroup: IgxButtonGroupComponent;
    constructor();
    onSortButtonClicked(sortDirection: any): void;
    selectButton(sortDirection: number): void;
}

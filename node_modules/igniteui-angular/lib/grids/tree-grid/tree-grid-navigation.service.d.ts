import { IgxGridNavigationService } from '../grid-navigation.service';
export declare class IgxTreeGridNavigationService extends IgxGridNavigationService {
    protected getCellSelector(visibleIndex?: number, isSummary?: boolean): string;
    protected getRowSelector(): string;
}

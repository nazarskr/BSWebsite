import { IgxDropDownItemNavigationDirective } from '../drop-down/drop-down-navigation.directive';
import { OnDestroy } from '@angular/core';
import { IgxSelectBase } from './select.common';
/** @hidden @internal */
export declare class IgxSelectItemNavigationDirective extends IgxDropDownItemNavigationDirective implements OnDestroy {
    target: IgxSelectBase;
    constructor();
    /** Captures keydown events and calls the appropriate handlers on the target component */
    handleKeyDown(event: KeyboardEvent): void;
    private inputStream;
    private clearStream$;
    /** Handle continuous letter typing navigation */
    captureKey(event: KeyboardEvent): void;
    activateItemByText(text: string): void;
    ngOnDestroy(): void;
}

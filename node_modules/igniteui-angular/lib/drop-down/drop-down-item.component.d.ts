import { DoCheck } from '@angular/core';
import { IgxDropDownItemBase } from './drop-down-item.base';
/**
 * The `<igx-drop-down-item>` is a container intended for row items in
 * a `<igx-drop-down>` container.
 */
export declare class IgxDropDownItemComponent extends IgxDropDownItemBase implements DoCheck {
    /**
     * @inheritdoc
     */
    /**
    * @inheritdoc
    */
    focused: boolean;
    /**
     * @inheritdoc
     */
    /**
    * @inheritdoc
    */
    selected: boolean;
    /**
     * @hidden @internal
     */
    readonly setTabIndex: number;
    /**
     * @hidden @internal
     */
    clicked(event: any): void;
    /**
     * @hidden @internal
     */
    mousedownHandler(event: any): void;
}

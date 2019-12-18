import { IgxOverlayService } from '../overlay';
import { ScrollStrategy } from './scroll-strategy';
/**
 * Empty scroll strategy. Does nothing.
 */
export declare class NoOpScrollStrategy extends ScrollStrategy {
    constructor(scrollContainer?: HTMLElement);
    /** @inheritdoc */
    initialize(document: Document, overlayService: IgxOverlayService, id: string): void;
    /** @inheritdoc */
    attach(): void;
    /** @inheritdoc */
    detach(): void;
}

import { IPositionStrategy } from './IPositionStrategy';
import { PositionSettings, Size } from './../utilities';
/**
 * Positions the element based on the directions and start point passed in trough PositionSettings.
 * It is possible to either pass a start point or an HTMLElement as a positioning base.
 */
export declare class ConnectedPositioningStrategy implements IPositionStrategy {
    private _defaultSettings;
    /** @inheritdoc */
    settings: PositionSettings;
    constructor(settings?: PositionSettings);
    /** @inheritdoc */
    position(contentElement: HTMLElement, size: Size, document?: Document, initialCall?: boolean): void;
    /**
     * @inheritdoc
     * Creates clone of this position strategy
     * @returns clone of this position strategy
     */
    clone(): IPositionStrategy;
    /**
     * Sets element's style which effectively positions provided element according
     * to provided position settings
     * @param element Element to position
     * @param targetRect Bounding rectangle of strategy target
     * @param elementRect Bounding rectangle of the element
     */
    protected setStyle(element: HTMLElement, targetRect: ClientRect, elementRect: ClientRect): void;
}

import { ConnectedPositioningStrategy } from './connected-positioning-strategy';
import { HorizontalAlignment, VerticalAlignment, PositionSettings, Size } from '../utilities';
export declare abstract class BaseFitPositionStrategy extends ConnectedPositioningStrategy {
    protected _initialSize: Size;
    protected _initialSettings: PositionSettings;
    /** @inheritdoc */
    position(contentElement: HTMLElement, size: Size, document?: Document, initialCall?: boolean): void;
    /**
     * Checks if element can fit in viewport and updates provided connectedFit
     * with the result
     * @param connectedFit connectedFit to update
     */
    protected updateViewPortFit(connectedFit: ConnectedFit): void;
    /**
     * Calculates the position of the left border of the element if it gets positioned
     * with provided start point and direction
     * @param targetRect Rectangle of the target where element is attached
     * @param elementRect Rectangle of the element
     * @param startPoint Start point of the target
     * @param direction Direction in which to show the element
     */
    protected calculateLeft(targetRect: ClientRect, elementRect: ClientRect, startPoint: HorizontalAlignment, direction: HorizontalAlignment): number;
    /**
     * Calculates the position of the top border of the element if it gets positioned
     * with provided position settings related to the target
     * @param targetRect Rectangle of the target where element is attached
     * @param elementRect Rectangle of the element
     * @param startPoint Start point of the target
     * @param direction Direction in which to show the element
     */
    protected calculateTop(targetRect: ClientRect, elementRect: ClientRect, startPoint: VerticalAlignment, direction: VerticalAlignment): number;
    /**
     * Fits the element into viewport according to the position settings
     * @param element element to fit in viewport
     * @param connectedFit connectedFit object containing all necessary parameters
     */
    protected abstract fitInViewport(element: HTMLElement, connectedFit: ConnectedFit): any;
}
export interface ConnectedFit {
    contentElementRect?: ClientRect;
    targetRect?: ClientRect;
    viewPortRect?: ClientRect;
    fitHorizontal?: boolean;
    fitVertical?: boolean;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}

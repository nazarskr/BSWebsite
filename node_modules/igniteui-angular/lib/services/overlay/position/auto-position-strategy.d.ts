import { BaseFitPositionStrategy, ConnectedFit } from './base-fit-position-strategy';
/**
 * Positions the element as in **Connected** positioning strategy and re-positions the element in
 * the view port (calculating a different start point) in case the element is partially getting out of view
 */
export declare class AutoPositionStrategy extends BaseFitPositionStrategy {
    /** @inheritdoc */
    protected fitInViewport(element: HTMLElement, connectedFit: ConnectedFit): void;
    /**
     * Checks if element can be flipped without get off the viewport
     * @param connectedFit connectedFit object containing all necessary parameters
     * @returns true if element can be flipped and stain in viewport
     */
    private canFlipHorizontal;
    /**
     * Checks if element can be flipped without get off the viewport
     * @param connectedFit connectedFit object containing all necessary parameters
     * @returns true if element can be flipped and stain in viewport
     */
    private canFlipVertical;
    /**
     * Flips direction and start point of the position settings
     */
    private flipHorizontal;
    /**
     * Flips direction and start point of the position settings
     */
    private flipVertical;
    /**
     * Calculates necessary horizontal push according to provided connectedFit
     * @param connectedFit connectedFit object containing all necessary parameters
     * @returns amount of necessary translation which will push the element into viewport
     */
    private horizontalPush;
    /**
     * Calculates necessary vertical push according to provided connectedFit
     * @param connectedFit connectedFit object containing all necessary parameters
     * @returns amount of necessary translation which will push the element into viewport
     */
    private verticalPush;
}

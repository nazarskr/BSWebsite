import { ElementRef, OnInit } from '@angular/core';
export declare class IgxHintDirective implements OnInit {
    private _element;
    private _position;
    /**
     * Sets/gets whether the hint position is at the start.
     * Default value is `false`.
     * ```typescript
     * @ViewChild('hint', {read: IgxHintDirective})
     * public igxHint: IgxHintDirective;
     * this.igxHint.isPositionStart = true;
     * ```
     * ```typescript
     * let isHintPositionStart = this.igxHint.isPositionStart;
     * ```
     * @memberof IgxHintDirective
     */
    isPositionStart: boolean;
    /**
     * Sets/gets whether the hint position is at the end.
     * Default value is `false`.
     * ```typescript
     * @ViewChild('hint', {read: IgxHintDirective})
     * public igxHint: IgxHintDirective;
     * this.igxHint.isPositionEnd = true;
     * ```
     * ```typescript
     * let isHintPositionEnd = this.igxHint.isPositionEnd;
     * ```
     * @memberof IgxHintDirective
     */
    isPositionEnd: boolean;
    constructor(_element: ElementRef);
    /**
     * Sets the position of the hint.
     * ```html
     * <igx-input-group>
     *  <input igxInput type="text"/>
     *  <igx-hint #hint [position]="'start'">IgxHint displayed at the start</igx-hint>
     * </igx-input-group>
     * ```
     * @memberof IgxHintDirective
     */
    /**
    * Gets the position of the hint.
    * ```typescript
    * @ViewChild('hint', {read: IgxHintDirective})
    * public igxHint: IgxHintDirective;
    * let hintPosition =  this.igxHint.position;
    * ```
    * @memberof IgxHintDirective
    */
    position: string;
    /**
     *@hidden
     */
    ngOnInit(): void;
    private _applyPosition;
}

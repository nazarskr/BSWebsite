/**
 * @hidden
 */
export declare const MASK_FLAGS: string[];
/**
 * @hidden
 */
export declare const KEYS: {
    Ctrl: number;
    Z: number;
    Y: number;
    X: number;
    BACKSPACE: number;
    DELETE: number;
};
/**
 * @hidden
 */
export declare class MaskHelper {
    private _cursor;
    readonly cursor: any;
    data: boolean;
    parseValueByMask(value: any, maskOptions: any, cursor: any): string;
    parseMask(maskOptions: any): string;
    parseValueByMaskOnInit(inputVal: any, maskOptions: any): string;
    restoreValueFromMask(value: any, maskOptions: any): string;
    parseValueByMaskUponSelection(value: any, maskOptions: any, cursor: any, selection: any): string;
    parseValueByMaskUponCopyPaste(value: any, maskOptions: any, cursor: any, clipboardData: any, selection: any): string;
    private validateCharOnPostion;
    private replaceCharAt;
    private insertCharAt;
    private getMaskLiterals;
    private getNonLiteralIndeces;
    private getNonLiteralValues;
}

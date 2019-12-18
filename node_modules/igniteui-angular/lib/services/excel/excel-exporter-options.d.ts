import { IgxExporterOptionsBase } from '../exporter-common/exporter-options-base';
/**
 * Objects of this class are used to configure the Excel exporting process.
 */
export declare class IgxExcelExporterOptions extends IgxExporterOptionsBase {
    private _columnWidth;
    private _rowHeight;
    /**
     * Specifies if column pinning should be ignored. If ignoreColumnsOrder is set to true,
     * this option will always be considered as set to true.
     * ```typescript
     * let ignorePinning = this.exportOptions.ignorePinning;
     * this.exportOptions.ignorePinning = true;
     * ```
     * @memberof IgxExcelExporterOptions
     */
    ignorePinning: boolean;
    /**
     * Specifies whether the exported data should be formatted as Excel table. (True by default)
     * ```typescript
     * let exportAsTable = this.exportOptions.exportAsTable;
     * this.exportOptions.exportAsTable = false;
     * ```
     * @memberof IgxExcelExporterOptions
     */
    exportAsTable: boolean;
    constructor(fileName: string);
    /**
     * Gets the width of the columns in the exported excel file.
     * ```typescript
     * let width = this.exportOptions.columnWidth;
     * ```
     * @memberof IgxExcelExporterOptions
     */
    /**
    * Sets the width of the columns in the exported excel file. If left unspecified or 0,
    * the width of the largest string in the column will be used.
    * ```typescript
    * this.exportOptions.columnWidth = 55;
    * ```
    * @memberof IgxExcelExporterOptions
    */
    columnWidth: number;
    /**
     * Gets the height of the rows in the exported excel file.
     * ```typescript
     * let height = this.exportOptions.rowHeight;
     * ```
     * @memberof IgxExcelExporterOptions
     */
    /**
    * Sets the height of the rows in the exported excel file. If left unspecified or 0,
    * the default height of the excel rows will be used.
    * ```typescript
    * this.exportOptions.rowHeight = 25;
    * ```
    * @memberof IgxExcelExporterOptions
    */
    rowHeight: number;
}

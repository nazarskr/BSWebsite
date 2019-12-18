export declare abstract class IgxExporterOptionsBase {
    protected _fileExtension: string;
    private _fileName;
    /**
     * Specifies whether hidden columns should be exported.
     * ```typescript
     * let ignoreColumnsVisibility = this.exportOptions.ignoreColumnsVisibility;
     * this.exportOptions.ignoreColumnsVisibility = true;
     * ```
     * @memberof IgxExporterOptionsBase
     */
    ignoreColumnsVisibility: boolean;
    /**
     * Specifies whether filtered out rows should be exported.
     * ```typescript
     * let ignoreFiltering = this.exportOptions.ignoreFiltering;
     * this.exportOptions.ignoreFiltering = true;
     * ```
     * @memberof IgxExporterOptionsBase
     */
    ignoreFiltering: boolean;
    /**
     * Specifies if the exporter should ignore the current column order in the IgxGrid.
     * ```typescript
     * let ignoreColumnsOrder = this.exportOptions.ignoreColumnsOrder;
     * this.exportOptions.ignoreColumnsOrder = true;
     * ```
     * @memberof IgxExporterOptionsBase
     */
    ignoreColumnsOrder: boolean;
    /**
     * Specifies whether the exported data should be sorted as in the provided IgxGrid.
     * ```typescript
     * let ignoreSorting = this.exportOptions.ignoreSorting;
     * this.exportOptions.ignoreSorting = true;
     * ```
     * @memberof IgxExporterOptionsBase
     */
    ignoreSorting: boolean;
    constructor(fileName: string, _fileExtension: string);
    private setFileName;
    /**
     * Gets the file name which will be used for the exporting operation.
     * ```typescript
     * let fileName = this.exportOptions.fileName;
     * ```
     * @memberof IgxExporterOptionsBase
     */
    /**
    * Sets the file name which will be used for the exporting operation.
    * ```typescript
    * this.exportOptions.fileName = 'exportedData01';
    * ```
    * @memberof IgxExporterOptionsBase
    */
    fileName: string;
}

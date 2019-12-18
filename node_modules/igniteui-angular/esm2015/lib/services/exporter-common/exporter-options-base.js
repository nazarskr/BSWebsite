/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class IgxExporterOptionsBase {
    /**
     * @param {?} fileName
     * @param {?} _fileExtension
     */
    constructor(fileName, _fileExtension) {
        this._fileExtension = _fileExtension;
        /**
         * Specifies whether hidden columns should be exported.
         * ```typescript
         * let ignoreColumnsVisibility = this.exportOptions.ignoreColumnsVisibility;
         * this.exportOptions.ignoreColumnsVisibility = true;
         * ```
         * \@memberof IgxExporterOptionsBase
         */
        this.ignoreColumnsVisibility = false;
        /**
         * Specifies whether filtered out rows should be exported.
         * ```typescript
         * let ignoreFiltering = this.exportOptions.ignoreFiltering;
         * this.exportOptions.ignoreFiltering = true;
         * ```
         * \@memberof IgxExporterOptionsBase
         */
        this.ignoreFiltering = false;
        /**
         * Specifies if the exporter should ignore the current column order in the IgxGrid.
         * ```typescript
         * let ignoreColumnsOrder = this.exportOptions.ignoreColumnsOrder;
         * this.exportOptions.ignoreColumnsOrder = true;
         * ```
         * \@memberof IgxExporterOptionsBase
         */
        this.ignoreColumnsOrder = false;
        /**
         * Specifies whether the exported data should be sorted as in the provided IgxGrid.
         * ```typescript
         * let ignoreSorting = this.exportOptions.ignoreSorting;
         * this.exportOptions.ignoreSorting = true;
         * ```
         * \@memberof IgxExporterOptionsBase
         */
        this.ignoreSorting = false;
        this.setFileName(fileName);
    }
    /**
     * @private
     * @param {?} fileName
     * @return {?}
     */
    setFileName(fileName) {
        this._fileName = fileName + (fileName.endsWith(this._fileExtension) === false ? this._fileExtension : '');
    }
    /**
     * Gets the file name which will be used for the exporting operation.
     * ```typescript
     * let fileName = this.exportOptions.fileName;
     * ```
     * \@memberof IgxExporterOptionsBase
     * @return {?}
     */
    get fileName() {
        return this._fileName;
    }
    /**
     * Sets the file name which will be used for the exporting operation.
     * ```typescript
     * this.exportOptions.fileName = 'exportedData01';
     * ```
     * \@memberof IgxExporterOptionsBase
     * @param {?} value
     * @return {?}
     */
    set fileName(value) {
        this.setFileName(value);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxExporterOptionsBase.prototype._fileName;
    /**
     * Specifies whether hidden columns should be exported.
     * ```typescript
     * let ignoreColumnsVisibility = this.exportOptions.ignoreColumnsVisibility;
     * this.exportOptions.ignoreColumnsVisibility = true;
     * ```
     * \@memberof IgxExporterOptionsBase
     * @type {?}
     */
    IgxExporterOptionsBase.prototype.ignoreColumnsVisibility;
    /**
     * Specifies whether filtered out rows should be exported.
     * ```typescript
     * let ignoreFiltering = this.exportOptions.ignoreFiltering;
     * this.exportOptions.ignoreFiltering = true;
     * ```
     * \@memberof IgxExporterOptionsBase
     * @type {?}
     */
    IgxExporterOptionsBase.prototype.ignoreFiltering;
    /**
     * Specifies if the exporter should ignore the current column order in the IgxGrid.
     * ```typescript
     * let ignoreColumnsOrder = this.exportOptions.ignoreColumnsOrder;
     * this.exportOptions.ignoreColumnsOrder = true;
     * ```
     * \@memberof IgxExporterOptionsBase
     * @type {?}
     */
    IgxExporterOptionsBase.prototype.ignoreColumnsOrder;
    /**
     * Specifies whether the exported data should be sorted as in the provided IgxGrid.
     * ```typescript
     * let ignoreSorting = this.exportOptions.ignoreSorting;
     * this.exportOptions.ignoreSorting = true;
     * ```
     * \@memberof IgxExporterOptionsBase
     * @type {?}
     */
    IgxExporterOptionsBase.prototype.ignoreSorting;
    /**
     * @type {?}
     * @protected
     */
    IgxExporterOptionsBase.prototype._fileExtension;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0ZXItb3B0aW9ucy1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlci1jb21tb24vZXhwb3J0ZXItb3B0aW9ucy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNLE9BQWdCLHNCQUFzQjs7Ozs7SUEyQ3hDLFlBQVksUUFBZ0IsRUFBWSxjQUFzQjtRQUF0QixtQkFBYyxHQUFkLGNBQWMsQ0FBUTs7Ozs7Ozs7O1FBaEN2RCw0QkFBdUIsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7OztRQVVoQyxvQkFBZSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O1FBVXhCLHVCQUFrQixHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O1FBVTNCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3pCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLFFBQWdCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7Ozs7Ozs7SUFTRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7Ozs7OztJQVNELElBQUksUUFBUSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FFSjs7Ozs7O0lBeEVHLDJDQUEwQjs7Ozs7Ozs7OztJQVUxQix5REFBdUM7Ozs7Ozs7Ozs7SUFVdkMsaURBQStCOzs7Ozs7Ozs7O0lBVS9CLG9EQUFrQzs7Ozs7Ozs7OztJQVVsQywrQ0FBNkI7Ozs7O0lBRUMsZ0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIElneEV4cG9ydGVyT3B0aW9uc0Jhc2Uge1xuICAgIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBoaWRkZW4gY29sdW1ucyBzaG91bGQgYmUgZXhwb3J0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpZ25vcmVDb2x1bW5zVmlzaWJpbGl0eSA9IHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVDb2x1bW5zVmlzaWJpbGl0eTtcbiAgICAgKiB0aGlzLmV4cG9ydE9wdGlvbnMuaWdub3JlQ29sdW1uc1Zpc2liaWxpdHkgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlXG4gICAgICovXG4gICAgcHVibGljIGlnbm9yZUNvbHVtbnNWaXNpYmlsaXR5ID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBmaWx0ZXJlZCBvdXQgcm93cyBzaG91bGQgYmUgZXhwb3J0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpZ25vcmVGaWx0ZXJpbmcgPSB0aGlzLmV4cG9ydE9wdGlvbnMuaWdub3JlRmlsdGVyaW5nO1xuICAgICAqIHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVGaWx0ZXJpbmcgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlXG4gICAgICovXG4gICAgcHVibGljIGlnbm9yZUZpbHRlcmluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIHRoZSBleHBvcnRlciBzaG91bGQgaWdub3JlIHRoZSBjdXJyZW50IGNvbHVtbiBvcmRlciBpbiB0aGUgSWd4R3JpZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlnbm9yZUNvbHVtbnNPcmRlciA9IHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVDb2x1bW5zT3JkZXI7XG4gICAgICogdGhpcy5leHBvcnRPcHRpb25zLmlnbm9yZUNvbHVtbnNPcmRlciA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4cG9ydGVyT3B0aW9uc0Jhc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgaWdub3JlQ29sdW1uc09yZGVyID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZXhwb3J0ZWQgZGF0YSBzaG91bGQgYmUgc29ydGVkIGFzIGluIHRoZSBwcm92aWRlZCBJZ3hHcmlkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaWdub3JlU29ydGluZyA9IHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVTb3J0aW5nO1xuICAgICAqIHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVTb3J0aW5nID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhwb3J0ZXJPcHRpb25zQmFzZVxuICAgICAqL1xuICAgIHB1YmxpYyBpZ25vcmVTb3J0aW5nID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWxlTmFtZTogc3RyaW5nLCBwcm90ZWN0ZWQgX2ZpbGVFeHRlbnNpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldEZpbGVOYW1lKGZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZpbGVOYW1lKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZmlsZU5hbWUgPSBmaWxlTmFtZSArIChmaWxlTmFtZS5lbmRzV2l0aCh0aGlzLl9maWxlRXh0ZW5zaW9uKSA9PT0gZmFsc2UgPyB0aGlzLl9maWxlRXh0ZW5zaW9uIDogJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGZpbGUgbmFtZSB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIHRoZSBleHBvcnRpbmcgb3BlcmF0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsZU5hbWUgPSB0aGlzLmV4cG9ydE9wdGlvbnMuZmlsZU5hbWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4cG9ydGVyT3B0aW9uc0Jhc2VcbiAgICAgKi9cbiAgICBnZXQgZmlsZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlTmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBmaWxlIG5hbWUgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciB0aGUgZXhwb3J0aW5nIG9wZXJhdGlvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5leHBvcnRPcHRpb25zLmZpbGVOYW1lID0gJ2V4cG9ydGVkRGF0YTAxJztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhwb3J0ZXJPcHRpb25zQmFzZVxuICAgICAqL1xuICAgIHNldCBmaWxlTmFtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEZpbGVOYW1lKHZhbHVlKTtcbiAgICB9XG5cbn1cbiJdfQ==
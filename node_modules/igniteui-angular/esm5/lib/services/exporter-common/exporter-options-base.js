/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
IgxExporterOptionsBase = /** @class */ (function () {
    function IgxExporterOptionsBase(fileName, _fileExtension) {
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
    IgxExporterOptionsBase.prototype.setFileName = /**
     * @private
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        this._fileName = fileName + (fileName.endsWith(this._fileExtension) === false ? this._fileExtension : '');
    };
    Object.defineProperty(IgxExporterOptionsBase.prototype, "fileName", {
        /**
         * Gets the file name which will be used for the exporting operation.
         * ```typescript
         * let fileName = this.exportOptions.fileName;
         * ```
         * @memberof IgxExporterOptionsBase
         */
        get: /**
         * Gets the file name which will be used for the exporting operation.
         * ```typescript
         * let fileName = this.exportOptions.fileName;
         * ```
         * \@memberof IgxExporterOptionsBase
         * @return {?}
         */
        function () {
            return this._fileName;
        },
        /**
         * Sets the file name which will be used for the exporting operation.
         * ```typescript
         * this.exportOptions.fileName = 'exportedData01';
         * ```
         * @memberof IgxExporterOptionsBase
         */
        set: /**
         * Sets the file name which will be used for the exporting operation.
         * ```typescript
         * this.exportOptions.fileName = 'exportedData01';
         * ```
         * \@memberof IgxExporterOptionsBase
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setFileName(value);
        },
        enumerable: true,
        configurable: true
    });
    return IgxExporterOptionsBase;
}());
/**
 * @abstract
 */
export { IgxExporterOptionsBase };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0ZXItb3B0aW9ucy1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlci1jb21tb24vZXhwb3J0ZXItb3B0aW9ucy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztJQTJDSSxnQ0FBWSxRQUFnQixFQUFZLGNBQXNCO1FBQXRCLG1CQUFjLEdBQWQsY0FBYyxDQUFROzs7Ozs7Ozs7UUFoQ3ZELDRCQUF1QixHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O1FBVWhDLG9CQUFlLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7UUFVeEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7UUFVM0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyw0Q0FBVzs7Ozs7SUFBbkIsVUFBb0IsUUFBZ0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFTRCxzQkFBSSw0Q0FBUTtRQVBaOzs7Ozs7V0FNRzs7Ozs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQztRQUVEOzs7Ozs7V0FNRzs7Ozs7Ozs7OztRQUNILFVBQWEsS0FBSztZQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BWEE7SUFhTCw2QkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7Ozs7Ozs7Ozs7SUF4RUcsMkNBQTBCOzs7Ozs7Ozs7O0lBVTFCLHlEQUF1Qzs7Ozs7Ozs7OztJQVV2QyxpREFBK0I7Ozs7Ozs7Ozs7SUFVL0Isb0RBQWtDOzs7Ozs7Ozs7O0lBVWxDLCtDQUE2Qjs7Ozs7SUFFQyxnREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgSWd4RXhwb3J0ZXJPcHRpb25zQmFzZSB7XG4gICAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGhpZGRlbiBjb2x1bW5zIHNob3VsZCBiZSBleHBvcnRlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlnbm9yZUNvbHVtbnNWaXNpYmlsaXR5ID0gdGhpcy5leHBvcnRPcHRpb25zLmlnbm9yZUNvbHVtbnNWaXNpYmlsaXR5O1xuICAgICAqIHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVDb2x1bW5zVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4cG9ydGVyT3B0aW9uc0Jhc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgaWdub3JlQ29sdW1uc1Zpc2liaWxpdHkgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGZpbHRlcmVkIG91dCByb3dzIHNob3VsZCBiZSBleHBvcnRlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlnbm9yZUZpbHRlcmluZyA9IHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVGaWx0ZXJpbmc7XG4gICAgICogdGhpcy5leHBvcnRPcHRpb25zLmlnbm9yZUZpbHRlcmluZyA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4cG9ydGVyT3B0aW9uc0Jhc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgaWdub3JlRmlsdGVyaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgaWYgdGhlIGV4cG9ydGVyIHNob3VsZCBpZ25vcmUgdGhlIGN1cnJlbnQgY29sdW1uIG9yZGVyIGluIHRoZSBJZ3hHcmlkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaWdub3JlQ29sdW1uc09yZGVyID0gdGhpcy5leHBvcnRPcHRpb25zLmlnbm9yZUNvbHVtbnNPcmRlcjtcbiAgICAgKiB0aGlzLmV4cG9ydE9wdGlvbnMuaWdub3JlQ29sdW1uc09yZGVyID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhwb3J0ZXJPcHRpb25zQmFzZVxuICAgICAqL1xuICAgIHB1YmxpYyBpZ25vcmVDb2x1bW5zT3JkZXIgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBleHBvcnRlZCBkYXRhIHNob3VsZCBiZSBzb3J0ZWQgYXMgaW4gdGhlIHByb3ZpZGVkIElneEdyaWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpZ25vcmVTb3J0aW5nID0gdGhpcy5leHBvcnRPcHRpb25zLmlnbm9yZVNvcnRpbmc7XG4gICAgICogdGhpcy5leHBvcnRPcHRpb25zLmlnbm9yZVNvcnRpbmcgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlXG4gICAgICovXG4gICAgcHVibGljIGlnbm9yZVNvcnRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lOiBzdHJpbmcsIHByb3RlY3RlZCBfZmlsZUV4dGVuc2lvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0RmlsZU5hbWUoZmlsZU5hbWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RmlsZU5hbWUoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9maWxlTmFtZSA9IGZpbGVOYW1lICsgKGZpbGVOYW1lLmVuZHNXaXRoKHRoaXMuX2ZpbGVFeHRlbnNpb24pID09PSBmYWxzZSA/IHRoaXMuX2ZpbGVFeHRlbnNpb24gOiAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZmlsZSBuYW1lIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgdGhlIGV4cG9ydGluZyBvcGVyYXRpb24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBmaWxlTmFtZSA9IHRoaXMuZXhwb3J0T3B0aW9ucy5maWxlTmFtZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhwb3J0ZXJPcHRpb25zQmFzZVxuICAgICAqL1xuICAgIGdldCBmaWxlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGVOYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGZpbGUgbmFtZSB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIHRoZSBleHBvcnRpbmcgb3BlcmF0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmV4cG9ydE9wdGlvbnMuZmlsZU5hbWUgPSAnZXhwb3J0ZWREYXRhMDEnO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlXG4gICAgICovXG4gICAgc2V0IGZpbGVOYW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RmlsZU5hbWUodmFsdWUpO1xuICAgIH1cblxufVxuIl19
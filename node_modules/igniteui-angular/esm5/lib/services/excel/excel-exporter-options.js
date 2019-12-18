/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxExporterOptionsBase } from '../exporter-common/exporter-options-base';
/**
 * Objects of this class are used to configure the Excel exporting process.
 */
var /**
 * Objects of this class are used to configure the Excel exporting process.
 */
IgxExcelExporterOptions = /** @class */ (function (_super) {
    tslib_1.__extends(IgxExcelExporterOptions, _super);
    function IgxExcelExporterOptions(fileName) {
        var _this = _super.call(this, fileName, '.xlsx') || this;
        /**
         * Specifies if column pinning should be ignored. If ignoreColumnsOrder is set to true,
         * this option will always be considered as set to true.
         * ```typescript
         * let ignorePinning = this.exportOptions.ignorePinning;
         * this.exportOptions.ignorePinning = true;
         * ```
         * \@memberof IgxExcelExporterOptions
         */
        _this.ignorePinning = false;
        /**
         * Specifies whether the exported data should be formatted as Excel table. (True by default)
         * ```typescript
         * let exportAsTable = this.exportOptions.exportAsTable;
         * this.exportOptions.exportAsTable = false;
         * ```
         * \@memberof IgxExcelExporterOptions
         */
        _this.exportAsTable = true;
        return _this;
    }
    Object.defineProperty(IgxExcelExporterOptions.prototype, "columnWidth", {
        /**
         * Gets the width of the columns in the exported excel file.
         * ```typescript
         * let width = this.exportOptions.columnWidth;
         * ```
         * @memberof IgxExcelExporterOptions
         */
        get: /**
         * Gets the width of the columns in the exported excel file.
         * ```typescript
         * let width = this.exportOptions.columnWidth;
         * ```
         * \@memberof IgxExcelExporterOptions
         * @return {?}
         */
        function () {
            return this._columnWidth;
        },
        /**
         * Sets the width of the columns in the exported excel file. If left unspecified or 0,
         * the width of the largest string in the column will be used.
         * ```typescript
         * this.exportOptions.columnWidth = 55;
         * ```
         * @memberof IgxExcelExporterOptions
         */
        set: /**
         * Sets the width of the columns in the exported excel file. If left unspecified or 0,
         * the width of the largest string in the column will be used.
         * ```typescript
         * this.exportOptions.columnWidth = 55;
         * ```
         * \@memberof IgxExcelExporterOptions
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value < 0) {
                throw Error('Invalid value for column width!');
            }
            this._columnWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExcelExporterOptions.prototype, "rowHeight", {
        /**
         * Gets the height of the rows in the exported excel file.
         * ```typescript
         * let height = this.exportOptions.rowHeight;
         * ```
         * @memberof IgxExcelExporterOptions
         */
        get: /**
         * Gets the height of the rows in the exported excel file.
         * ```typescript
         * let height = this.exportOptions.rowHeight;
         * ```
         * \@memberof IgxExcelExporterOptions
         * @return {?}
         */
        function () {
            return this._rowHeight;
        },
        /**
         * Sets the height of the rows in the exported excel file. If left unspecified or 0,
         * the default height of the excel rows will be used.
         * ```typescript
         * this.exportOptions.rowHeight = 25;
         * ```
         * @memberof IgxExcelExporterOptions
         */
        set: /**
         * Sets the height of the rows in the exported excel file. If left unspecified or 0,
         * the default height of the excel rows will be used.
         * ```typescript
         * this.exportOptions.rowHeight = 25;
         * ```
         * \@memberof IgxExcelExporterOptions
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value < 0) {
                throw Error('Invalid value for row height!');
            }
            this._rowHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    return IgxExcelExporterOptions;
}(IgxExporterOptionsBase));
/**
 * Objects of this class are used to configure the Excel exporting process.
 */
export { IgxExcelExporterOptions };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxExcelExporterOptions.prototype._columnWidth;
    /**
     * @type {?}
     * @private
     */
    IgxExcelExporterOptions.prototype._rowHeight;
    /**
     * Specifies if column pinning should be ignored. If ignoreColumnsOrder is set to true,
     * this option will always be considered as set to true.
     * ```typescript
     * let ignorePinning = this.exportOptions.ignorePinning;
     * this.exportOptions.ignorePinning = true;
     * ```
     * \@memberof IgxExcelExporterOptions
     * @type {?}
     */
    IgxExcelExporterOptions.prototype.ignorePinning;
    /**
     * Specifies whether the exported data should be formatted as Excel table. (True by default)
     * ```typescript
     * let exportAsTable = this.exportOptions.exportAsTable;
     * this.exportOptions.exportAsTable = false;
     * ```
     * \@memberof IgxExcelExporterOptions
     * @type {?}
     */
    IgxExcelExporterOptions.prototype.exportAsTable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZXhwb3J0ZXItb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhjZWwvZXhjZWwtZXhwb3J0ZXItb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBS2xGOzs7O0lBQTZDLG1EQUFzQjtJQXlCL0QsaUNBQVksUUFBZ0I7UUFBNUIsWUFDSSxrQkFBTSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQzNCOzs7Ozs7Ozs7O1FBZE0sbUJBQWEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7OztRQVV0QixtQkFBYSxHQUFHLElBQUksQ0FBQzs7SUFJNUIsQ0FBQztJQVNELHNCQUFXLGdEQUFXO1FBUHRCOzs7Ozs7V0FNRzs7Ozs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQztRQUVEOzs7Ozs7O1dBT0c7Ozs7Ozs7Ozs7O1FBQ0gsVUFBdUIsS0FBYTtZQUNoQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNsRDtZQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQWhCQTtJQXlCRCxzQkFBVyw4Q0FBUztRQVBwQjs7Ozs7O1dBTUc7Ozs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7UUFFRDs7Ozs7OztXQU9HOzs7Ozs7Ozs7OztRQUNILFVBQXFCLEtBQWE7WUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7YUFDaEQ7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FoQkE7SUFpQkwsOEJBQUM7QUFBRCxDQUFDLEFBbEZELENBQTZDLHNCQUFzQixHQWtGbEU7Ozs7Ozs7Ozs7SUFqRkcsK0NBQTZCOzs7OztJQUM3Qiw2Q0FBMkI7Ozs7Ozs7Ozs7O0lBVzNCLGdEQUE2Qjs7Ozs7Ozs7OztJQVU3QixnREFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlIH0gZnJvbSAnLi4vZXhwb3J0ZXItY29tbW9uL2V4cG9ydGVyLW9wdGlvbnMtYmFzZSc7XG5cbi8qKlxuICogT2JqZWN0cyBvZiB0aGlzIGNsYXNzIGFyZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgRXhjZWwgZXhwb3J0aW5nIHByb2Nlc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9ucyBleHRlbmRzIElneEV4cG9ydGVyT3B0aW9uc0Jhc2Uge1xuICAgIHByaXZhdGUgX2NvbHVtbldpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcm93SGVpZ2h0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgaWYgY29sdW1uIHBpbm5pbmcgc2hvdWxkIGJlIGlnbm9yZWQuIElmIGlnbm9yZUNvbHVtbnNPcmRlciBpcyBzZXQgdG8gdHJ1ZSxcbiAgICAgKiB0aGlzIG9wdGlvbiB3aWxsIGFsd2F5cyBiZSBjb25zaWRlcmVkIGFzIHNldCB0byB0cnVlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaWdub3JlUGlubmluZyA9IHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVQaW5uaW5nO1xuICAgICAqIHRoaXMuZXhwb3J0T3B0aW9ucy5pZ25vcmVQaW5uaW5nID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnNcbiAgICAgKi9cbiAgICBwdWJsaWMgaWdub3JlUGlubmluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGV4cG9ydGVkIGRhdGEgc2hvdWxkIGJlIGZvcm1hdHRlZCBhcyBFeGNlbCB0YWJsZS4gKFRydWUgYnkgZGVmYXVsdClcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGV4cG9ydEFzVGFibGUgPSB0aGlzLmV4cG9ydE9wdGlvbnMuZXhwb3J0QXNUYWJsZTtcbiAgICAgKiB0aGlzLmV4cG9ydE9wdGlvbnMuZXhwb3J0QXNUYWJsZSA9IGZhbHNlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyBleHBvcnRBc1RhYmxlID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZmlsZU5hbWUsICcueGxzeCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW5zIGluIHRoZSBleHBvcnRlZCBleGNlbCBmaWxlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgd2lkdGggPSB0aGlzLmV4cG9ydE9wdGlvbnMuY29sdW1uV2lkdGg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4Y2VsRXhwb3J0ZXJPcHRpb25zXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb2x1bW5XaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uV2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbnMgaW4gdGhlIGV4cG9ydGVkIGV4Y2VsIGZpbGUuIElmIGxlZnQgdW5zcGVjaWZpZWQgb3IgMCxcbiAgICAgKiB0aGUgd2lkdGggb2YgdGhlIGxhcmdlc3Qgc3RyaW5nIGluIHRoZSBjb2x1bW4gd2lsbCBiZSB1c2VkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmV4cG9ydE9wdGlvbnMuY29sdW1uV2lkdGggPSA1NTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnNcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGNvbHVtbldpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgdmFsdWUgZm9yIGNvbHVtbiB3aWR0aCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbHVtbldpZHRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSByb3dzIGluIHRoZSBleHBvcnRlZCBleGNlbCBmaWxlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaGVpZ2h0ID0gdGhpcy5leHBvcnRPcHRpb25zLnJvd0hlaWdodDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJvd0hlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm93SGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGhlaWdodCBvZiB0aGUgcm93cyBpbiB0aGUgZXhwb3J0ZWQgZXhjZWwgZmlsZS4gSWYgbGVmdCB1bnNwZWNpZmllZCBvciAwLFxuICAgICAqIHRoZSBkZWZhdWx0IGhlaWdodCBvZiB0aGUgZXhjZWwgcm93cyB3aWxsIGJlIHVzZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZXhwb3J0T3B0aW9ucy5yb3dIZWlnaHQgPSAyNTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnNcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHJvd0hlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciByb3cgaGVpZ2h0IScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcm93SGVpZ2h0ID0gdmFsdWU7XG4gICAgfVxufVxuIl19
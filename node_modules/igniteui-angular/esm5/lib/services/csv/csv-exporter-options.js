/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxExporterOptionsBase } from '../exporter-common/exporter-options-base';
/**
 * Objects of this class are used to configure the CSV exporting process.
 */
var /**
 * Objects of this class are used to configure the CSV exporting process.
 */
IgxCsvExporterOptions = /** @class */ (function (_super) {
    tslib_1.__extends(IgxCsvExporterOptions, _super);
    function IgxCsvExporterOptions(fileName, fileType) {
        var _this = _super.call(this, fileName, IgxCsvExporterOptions.getExtensionFromFileType(fileType)) || this;
        _this.setFileType(fileType);
        _this.setDelimiter();
        return _this;
    }
    /**
     * @private
     * @param {?} fType
     * @return {?}
     */
    IgxCsvExporterOptions.getExtensionFromFileType = /**
     * @private
     * @param {?} fType
     * @return {?}
     */
    function (fType) {
        /** @type {?} */
        var extension = '';
        switch (fType) {
            case CsvFileTypes.CSV:
                extension = '.csv';
                break;
            case CsvFileTypes.TSV:
                extension = '.tsv';
                break;
            case CsvFileTypes.TAB:
                extension = '.tab';
                break;
            default:
                throw Error('Unsupported CSV file type!');
        }
        return extension;
    };
    Object.defineProperty(IgxCsvExporterOptions.prototype, "valueDelimiter", {
        /**
         * Gets the value delimiter which will be used for the exporting operation.
         * ```typescript
         * let delimiter = this.exportOptions.valueDelimiter;
         * ```
         * @memberof IgxCsvExporterOptions
         */
        get: /**
         * Gets the value delimiter which will be used for the exporting operation.
         * ```typescript
         * let delimiter = this.exportOptions.valueDelimiter;
         * ```
         * \@memberof IgxCsvExporterOptions
         * @return {?}
         */
        function () {
            return this._valueDelimiter;
        },
        /**
         * Sets a value delimiter which will overwrite the default delimiter of the selected export format.
         * ```typescript
         * this.exportOptions.valueDelimiter = '|';
         * ```
         * @memberof IgxCsvExporterOptions
         */
        set: /**
         * Sets a value delimiter which will overwrite the default delimiter of the selected export format.
         * ```typescript
         * this.exportOptions.valueDelimiter = '|';
         * ```
         * \@memberof IgxCsvExporterOptions
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setDelimiter(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCsvExporterOptions.prototype, "fileType", {
        /**
         * Gets the CSV export format.
         * ```typescript
         * let filetype = this.exportOptions.fileType;
         * ```
         * @memberof IgxCsvExporterOptions
         */
        get: /**
         * Gets the CSV export format.
         * ```typescript
         * let filetype = this.exportOptions.fileType;
         * ```
         * \@memberof IgxCsvExporterOptions
         * @return {?}
         */
        function () {
            return this._fileType;
        },
        /**
         * Sets the CSV export format.
         * ```typescript
         * this.exportOptions.fileType = CsvFileTypes.TAB;
         * ```
         * @memberof IgxCsvExporterOptions
         */
        set: /**
         * Sets the CSV export format.
         * ```typescript
         * this.exportOptions.fileType = CsvFileTypes.TAB;
         * ```
         * \@memberof IgxCsvExporterOptions
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setFileType(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxCsvExporterOptions.prototype.setFileType = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined && value !== null && value !== this._fileType) {
            this._fileType = value;
            /** @type {?} */
            var extension = IgxCsvExporterOptions.getExtensionFromFileType(value);
            if (!this.fileName.endsWith(extension)) {
                /** @type {?} */
                var oldExt = '.' + this.fileName.split('.').pop();
                /** @type {?} */
                var newName = this.fileName.replace(oldExt, extension);
                this._fileExtension = extension;
                this.fileName = newName;
            }
        }
    };
    /**
     * @private
     * @param {?=} value
     * @return {?}
     */
    IgxCsvExporterOptions.prototype.setDelimiter = /**
     * @private
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined && value !== '' && value !== null) {
            this._valueDelimiter = value;
        }
        else {
            switch (this.fileType) {
                case CsvFileTypes.CSV:
                    this._valueDelimiter = ',';
                    break;
                case CsvFileTypes.TSV:
                case CsvFileTypes.TAB:
                    this._valueDelimiter = '\t';
                    break;
            }
        }
    };
    return IgxCsvExporterOptions;
}(IgxExporterOptionsBase));
/**
 * Objects of this class are used to configure the CSV exporting process.
 */
export { IgxCsvExporterOptions };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxCsvExporterOptions.prototype._valueDelimiter;
    /**
     * @type {?}
     * @private
     */
    IgxCsvExporterOptions.prototype._fileType;
}
/** @enum {number} */
var CsvFileTypes = {
    /**
     * Character Separated Values, default separator is "comma", default file extension is .csv
     */
    CSV: 0,
    /**
     * Tab Separated Values, default separator is tab, default file extension is .tsv
     */
    TSV: 1,
    /**
     * Tab Separated Values, default separator is tab, default file extension is .tab
     */
    TAB: 2,
};
export { CsvFileTypes };
CsvFileTypes[CsvFileTypes.CSV] = 'CSV';
CsvFileTypes[CsvFileTypes.TSV] = 'TSV';
CsvFileTypes[CsvFileTypes.TAB] = 'TAB';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Nzdi9jc3YtZXhwb3J0ZXItb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBS2xGOzs7O0lBQTJDLGlEQUFzQjtJQUs3RCwrQkFBWSxRQUFnQixFQUFFLFFBQXNCO1FBQXBELFlBQ0ksa0JBQU0sUUFBUSxFQUFFLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBRzVFO1FBRkcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O0lBQ3hCLENBQUM7Ozs7OztJQUVjLDhDQUF3Qjs7Ozs7SUFBdkMsVUFBd0MsS0FBbUI7O1lBQ25ELFNBQVMsR0FBRyxFQUFFO1FBQ2xCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxZQUFZLENBQUMsR0FBRztnQkFDakIsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLFNBQVMsR0FBRyxNQUFNLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNqQixTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUNuQixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFTRCxzQkFBSSxpREFBYztRQVBsQjs7Ozs7O1dBTUc7Ozs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7Ozs7O1dBTUc7Ozs7Ozs7Ozs7UUFDSCxVQUFtQixLQUFLO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7O09BWEE7SUFvQkQsc0JBQUksMkNBQVE7UUFQWjs7Ozs7O1dBTUc7Ozs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFFRDs7Ozs7O1dBTUc7Ozs7Ozs7Ozs7UUFDSCxVQUFhLEtBQUs7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQVhBOzs7Ozs7SUFhTywyQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBSztRQUNyQixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7Z0JBQ2pCLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7WUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFOztvQkFDOUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7O29CQUM3QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQzNCO1NBQ0o7SUFDTCxDQUFDOzs7Ozs7SUFFTyw0Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBTTtRQUN2QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO2FBQU07WUFDSCxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ25CLEtBQUssWUFBWSxDQUFDLEdBQUc7b0JBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO29CQUMzQixNQUFNO2dCQUNWLEtBQUssWUFBWSxDQUFDLEdBQUcsQ0FBQztnQkFDdEIsS0FBSyxZQUFZLENBQUMsR0FBRztvQkFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7b0JBQzVCLE1BQU07YUFDYjtTQUNKO0lBQ0wsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQXJHRCxDQUEyQyxzQkFBc0IsR0FxR2hFOzs7Ozs7Ozs7O0lBbkdHLGdEQUF3Qjs7Ozs7SUFDeEIsMENBQWtCOzs7O0lBeUdsQjs7T0FFRztJQUNILE1BQUc7SUFDSDs7T0FFRztJQUNILE1BQUc7SUFDSDs7T0FFRztJQUNILE1BQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlIH0gZnJvbSAnLi4vZXhwb3J0ZXItY29tbW9uL2V4cG9ydGVyLW9wdGlvbnMtYmFzZSc7XG5cbi8qKlxuICogT2JqZWN0cyBvZiB0aGlzIGNsYXNzIGFyZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgQ1NWIGV4cG9ydGluZyBwcm9jZXNzLlxuICovXG5leHBvcnQgY2xhc3MgSWd4Q3N2RXhwb3J0ZXJPcHRpb25zIGV4dGVuZHMgSWd4RXhwb3J0ZXJPcHRpb25zQmFzZSB7XG5cbiAgICBwcml2YXRlIF92YWx1ZURlbGltaXRlcjtcbiAgICBwcml2YXRlIF9maWxlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lOiBzdHJpbmcsIGZpbGVUeXBlOiBDc3ZGaWxlVHlwZXMpIHtcbiAgICAgICAgc3VwZXIoZmlsZU5hbWUsIElneENzdkV4cG9ydGVyT3B0aW9ucy5nZXRFeHRlbnNpb25Gcm9tRmlsZVR5cGUoZmlsZVR5cGUpKTtcbiAgICAgICAgdGhpcy5zZXRGaWxlVHlwZShmaWxlVHlwZSk7XG4gICAgICAgIHRoaXMuc2V0RGVsaW1pdGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RXh0ZW5zaW9uRnJvbUZpbGVUeXBlKGZUeXBlOiBDc3ZGaWxlVHlwZXMpIHtcbiAgICAgICAgbGV0IGV4dGVuc2lvbiA9ICcnO1xuICAgICAgICBzd2l0Y2ggKGZUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIENzdkZpbGVUeXBlcy5DU1Y6XG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uID0gJy5jc3YnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDc3ZGaWxlVHlwZXMuVFNWOlxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbiA9ICcudHN2JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ3N2RmlsZVR5cGVzLlRBQjpcbiAgICAgICAgICAgICAgICBleHRlbnNpb24gPSAnLnRhYic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdVbnN1cHBvcnRlZCBDU1YgZmlsZSB0eXBlIScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHRlbnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgZGVsaW1pdGVyIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgdGhlIGV4cG9ydGluZyBvcGVyYXRpb24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBkZWxpbWl0ZXIgPSB0aGlzLmV4cG9ydE9wdGlvbnMudmFsdWVEZWxpbWl0ZXI7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENzdkV4cG9ydGVyT3B0aW9uc1xuICAgICAqL1xuICAgIGdldCB2YWx1ZURlbGltaXRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlRGVsaW1pdGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYSB2YWx1ZSBkZWxpbWl0ZXIgd2hpY2ggd2lsbCBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgZGVsaW1pdGVyIG9mIHRoZSBzZWxlY3RlZCBleHBvcnQgZm9ybWF0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmV4cG9ydE9wdGlvbnMudmFsdWVEZWxpbWl0ZXIgPSAnfCc7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENzdkV4cG9ydGVyT3B0aW9uc1xuICAgICAqL1xuICAgIHNldCB2YWx1ZURlbGltaXRlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldERlbGltaXRlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgQ1NWIGV4cG9ydCBmb3JtYXQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBmaWxldHlwZSA9IHRoaXMuZXhwb3J0T3B0aW9ucy5maWxlVHlwZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q3N2RXhwb3J0ZXJPcHRpb25zXG4gICAgICovXG4gICAgZ2V0IGZpbGVUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZVR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgQ1NWIGV4cG9ydCBmb3JtYXQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZXhwb3J0T3B0aW9ucy5maWxlVHlwZSA9IENzdkZpbGVUeXBlcy5UQUI7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENzdkV4cG9ydGVyT3B0aW9uc1xuICAgICAqL1xuICAgIHNldCBmaWxlVHlwZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEZpbGVUeXBlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZpbGVUeXBlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB0aGlzLl9maWxlVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5fZmlsZVR5cGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IElneENzdkV4cG9ydGVyT3B0aW9ucy5nZXRFeHRlbnNpb25Gcm9tRmlsZVR5cGUodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGVOYW1lLmVuZHNXaXRoKGV4dGVuc2lvbikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRFeHQgPSAnLicgKyB0aGlzLmZpbGVOYW1lLnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IHRoaXMuZmlsZU5hbWUucmVwbGFjZShvbGRFeHQsIGV4dGVuc2lvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsZUV4dGVuc2lvbiA9IGV4dGVuc2lvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVOYW1lID0gbmV3TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVsaW1pdGVyKHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlRGVsaW1pdGVyID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZmlsZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENzdkZpbGVUeXBlcy5DU1Y6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlRGVsaW1pdGVyID0gJywnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENzdkZpbGVUeXBlcy5UU1Y6XG4gICAgICAgICAgICAgICAgY2FzZSBDc3ZGaWxlVHlwZXMuVEFCOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZURlbGltaXRlciA9ICdcXHQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBUaGlzIGVudW1lcmF0aW9uIGlzIHVzZWQgdG8gY29uZmlndXJlIHRoZSBkZWZhdWx0IHZhbHVlIHNlcGFyYXRvclxuICogYXMgd2VsbCBhcyB0aGUgZGVmYXVsdCBmaWxlIGV4dGVuc2lvbiB1c2VkIHdoZW4gcGVyZm9ybWluZyBDU1YgZXhwb3J0aW5nLlxuICovXG5leHBvcnQgZW51bSBDc3ZGaWxlVHlwZXMge1xuICAgIC8qKlxuICAgICAqIENoYXJhY3RlciBTZXBhcmF0ZWQgVmFsdWVzLCBkZWZhdWx0IHNlcGFyYXRvciBpcyBcImNvbW1hXCIsIGRlZmF1bHQgZmlsZSBleHRlbnNpb24gaXMgLmNzdlxuICAgICAqL1xuICAgIENTVixcbiAgICAvKipcbiAgICAgKiBUYWIgU2VwYXJhdGVkIFZhbHVlcywgZGVmYXVsdCBzZXBhcmF0b3IgaXMgdGFiLCBkZWZhdWx0IGZpbGUgZXh0ZW5zaW9uIGlzIC50c3ZcbiAgICAgKi9cbiAgICBUU1YsXG4gICAgLyoqXG4gICAgICogVGFiIFNlcGFyYXRlZCBWYWx1ZXMsIGRlZmF1bHQgc2VwYXJhdG9yIGlzIHRhYiwgZGVmYXVsdCBmaWxlIGV4dGVuc2lvbiBpcyAudGFiXG4gICAgICovXG4gICAgVEFCXG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxExporterOptionsBase } from '../exporter-common/exporter-options-base';
/**
 * Objects of this class are used to configure the Excel exporting process.
 */
export class IgxExcelExporterOptions extends IgxExporterOptionsBase {
    /**
     * @param {?} fileName
     */
    constructor(fileName) {
        super(fileName, '.xlsx');
        /**
         * Specifies if column pinning should be ignored. If ignoreColumnsOrder is set to true,
         * this option will always be considered as set to true.
         * ```typescript
         * let ignorePinning = this.exportOptions.ignorePinning;
         * this.exportOptions.ignorePinning = true;
         * ```
         * \@memberof IgxExcelExporterOptions
         */
        this.ignorePinning = false;
        /**
         * Specifies whether the exported data should be formatted as Excel table. (True by default)
         * ```typescript
         * let exportAsTable = this.exportOptions.exportAsTable;
         * this.exportOptions.exportAsTable = false;
         * ```
         * \@memberof IgxExcelExporterOptions
         */
        this.exportAsTable = true;
    }
    /**
     * Gets the width of the columns in the exported excel file.
     * ```typescript
     * let width = this.exportOptions.columnWidth;
     * ```
     * \@memberof IgxExcelExporterOptions
     * @return {?}
     */
    get columnWidth() {
        return this._columnWidth;
    }
    /**
     * Sets the width of the columns in the exported excel file. If left unspecified or 0,
     * the width of the largest string in the column will be used.
     * ```typescript
     * this.exportOptions.columnWidth = 55;
     * ```
     * \@memberof IgxExcelExporterOptions
     * @param {?} value
     * @return {?}
     */
    set columnWidth(value) {
        if (value < 0) {
            throw Error('Invalid value for column width!');
        }
        this._columnWidth = value;
    }
    /**
     * Gets the height of the rows in the exported excel file.
     * ```typescript
     * let height = this.exportOptions.rowHeight;
     * ```
     * \@memberof IgxExcelExporterOptions
     * @return {?}
     */
    get rowHeight() {
        return this._rowHeight;
    }
    /**
     * Sets the height of the rows in the exported excel file. If left unspecified or 0,
     * the default height of the excel rows will be used.
     * ```typescript
     * this.exportOptions.rowHeight = 25;
     * ```
     * \@memberof IgxExcelExporterOptions
     * @param {?} value
     * @return {?}
     */
    set rowHeight(value) {
        if (value < 0) {
            throw Error('Invalid value for row height!');
        }
        this._rowHeight = value;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZXhwb3J0ZXItb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhjZWwvZXhjZWwtZXhwb3J0ZXItb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFLbEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLHNCQUFzQjs7OztJQXlCL0QsWUFBWSxRQUFnQjtRQUN4QixLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7O1FBYnRCLGtCQUFhLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7UUFVdEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFJNUIsQ0FBQzs7Ozs7Ozs7O0lBU0QsSUFBVyxXQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDOzs7Ozs7Ozs7OztJQVVELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsTUFBTSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7OztJQVNELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7SUFVRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQzlCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNYLE1BQU0sS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0NBQ0o7Ozs7OztJQWpGRywrQ0FBNkI7Ozs7O0lBQzdCLDZDQUEyQjs7Ozs7Ozs7Ozs7SUFXM0IsZ0RBQTZCOzs7Ozs7Ozs7O0lBVTdCLGdEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElneEV4cG9ydGVyT3B0aW9uc0Jhc2UgfSBmcm9tICcuLi9leHBvcnRlci1jb21tb24vZXhwb3J0ZXItb3B0aW9ucy1iYXNlJztcblxuLyoqXG4gKiBPYmplY3RzIG9mIHRoaXMgY2xhc3MgYXJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBFeGNlbCBleHBvcnRpbmcgcHJvY2Vzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIElneEV4Y2VsRXhwb3J0ZXJPcHRpb25zIGV4dGVuZHMgSWd4RXhwb3J0ZXJPcHRpb25zQmFzZSB7XG4gICAgcHJpdmF0ZSBfY29sdW1uV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9yb3dIZWlnaHQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiBjb2x1bW4gcGlubmluZyBzaG91bGQgYmUgaWdub3JlZC4gSWYgaWdub3JlQ29sdW1uc09yZGVyIGlzIHNldCB0byB0cnVlLFxuICAgICAqIHRoaXMgb3B0aW9uIHdpbGwgYWx3YXlzIGJlIGNvbnNpZGVyZWQgYXMgc2V0IHRvIHRydWUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpZ25vcmVQaW5uaW5nID0gdGhpcy5leHBvcnRPcHRpb25zLmlnbm9yZVBpbm5pbmc7XG4gICAgICogdGhpcy5leHBvcnRPcHRpb25zLmlnbm9yZVBpbm5pbmcgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyBpZ25vcmVQaW5uaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZXhwb3J0ZWQgZGF0YSBzaG91bGQgYmUgZm9ybWF0dGVkIGFzIEV4Y2VsIHRhYmxlLiAoVHJ1ZSBieSBkZWZhdWx0KVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZXhwb3J0QXNUYWJsZSA9IHRoaXMuZXhwb3J0T3B0aW9ucy5leHBvcnRBc1RhYmxlO1xuICAgICAqIHRoaXMuZXhwb3J0T3B0aW9ucy5leHBvcnRBc1RhYmxlID0gZmFsc2U7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4Y2VsRXhwb3J0ZXJPcHRpb25zXG4gICAgICovXG4gICAgcHVibGljIGV4cG9ydEFzVGFibGUgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihmaWxlTmFtZSwgJy54bHN4Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbnMgaW4gdGhlIGV4cG9ydGVkIGV4Y2VsIGZpbGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB3aWR0aCA9IHRoaXMuZXhwb3J0T3B0aW9ucy5jb2x1bW5XaWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbHVtbldpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5XaWR0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1ucyBpbiB0aGUgZXhwb3J0ZWQgZXhjZWwgZmlsZS4gSWYgbGVmdCB1bnNwZWNpZmllZCBvciAwLFxuICAgICAqIHRoZSB3aWR0aCBvZiB0aGUgbGFyZ2VzdCBzdHJpbmcgaW4gdGhlIGNvbHVtbiB3aWxsIGJlIHVzZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZXhwb3J0T3B0aW9ucy5jb2x1bW5XaWR0aCA9IDU1O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgY29sdW1uV2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgY29sdW1uIHdpZHRoIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29sdW1uV2lkdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHJvd3MgaW4gdGhlIGV4cG9ydGVkIGV4Y2VsIGZpbGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBoZWlnaHQgPSB0aGlzLmV4cG9ydE9wdGlvbnMucm93SGVpZ2h0O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcm93SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSByb3dzIGluIHRoZSBleHBvcnRlZCBleGNlbCBmaWxlLiBJZiBsZWZ0IHVuc3BlY2lmaWVkIG9yIDAsXG4gICAgICogdGhlIGRlZmF1bHQgaGVpZ2h0IG9mIHRoZSBleGNlbCByb3dzIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5leHBvcnRPcHRpb25zLnJvd0hlaWdodCA9IDI1O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgcm93SGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgdmFsdWUgZm9yIHJvdyBoZWlnaHQhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yb3dIZWlnaHQgPSB2YWx1ZTtcbiAgICB9XG59XG4iXX0=
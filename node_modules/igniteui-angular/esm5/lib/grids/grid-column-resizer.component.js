/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IgxColumnResizingService } from './grid-column-resizing.service';
import { IgxColumnResizerDirective } from './grid.common';
var IgxGridColumnResizerComponent = /** @class */ (function () {
    function IgxGridColumnResizerComponent(colResizingService) {
        this.colResizingService = colResizingService;
    }
    IgxGridColumnResizerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-grid-column-resizer',
                    template: "<div class=\"igx-grid__th-resize-line\"\n    [style.left.px]=\"-99999\" igxResizer\n    [style.height.px]=\"colResizingService.resizerHeight\"\n    [restrictHResizeMax]=\"colResizingService.restrictResizeMax\"\n    [restrictHResizeMin]=\"colResizingService.restrictResizeMin\"\n    (resizeEnd)=\"colResizingService.resizeColumn($event)\">\n</div>"
                }] }
    ];
    /** @nocollapse */
    IgxGridColumnResizerComponent.ctorParameters = function () { return [
        { type: IgxColumnResizingService }
    ]; };
    IgxGridColumnResizerComponent.propDecorators = {
        resizer: [{ type: ViewChild, args: [IgxColumnResizerDirective, { static: true },] }]
    };
    return IgxGridColumnResizerComponent;
}());
export { IgxGridColumnResizerComponent };
if (false) {
    /** @type {?} */
    IgxGridColumnResizerComponent.prototype.resizer;
    /** @type {?} */
    IgxGridColumnResizerComponent.prototype.colResizingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb2x1bW4tcmVzaXplci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQtY29sdW1uLXJlc2l6ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQ7SUFPSSx1Q0FBbUIsa0JBQTRDO1FBQTVDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMEI7SUFBSSxDQUFDOztnQkFQdkUsU0FBUyxTQUFDO29CQUNQLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxzV0FBbUQ7aUJBQ3REOzs7O2dCQVJRLHdCQUF3Qjs7OzBCQVk1QixTQUFTLFNBQUMseUJBQXlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQUUxRCxvQ0FBQztDQUFBLEFBWEQsSUFXQztTQUxZLDZCQUE2Qjs7O0lBR3RDLGdEQUMwQzs7SUFIOUIsMkRBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UgfSBmcm9tICcuL2dyaWQtY29sdW1uLXJlc2l6aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4Q29sdW1uUmVzaXplckRpcmVjdGl2ZSB9IGZyb20gJy4vZ3JpZC5jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1ncmlkLWNvbHVtbi1yZXNpemVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC1jb2x1bW4tcmVzaXplci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZENvbHVtblJlc2l6ZXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2xSZXNpemluZ1NlcnZpY2U6IElneENvbHVtblJlc2l6aW5nU2VydmljZSkgeyB9XG5cbiAgICBAVmlld0NoaWxkKElneENvbHVtblJlc2l6ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHJlc2l6ZXI6IElneENvbHVtblJlc2l6ZXJEaXJlY3RpdmU7XG59XG4iXX0=
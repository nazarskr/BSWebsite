/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Input, NgModule, Output, Pipe, Renderer2 } from '@angular/core';
var IgxFilterOptions = /** @class */ (function () {
    function IgxFilterOptions() {
        // Input text value that will be used as a filtering pattern (matching condition is based on it)
        this.inputValue = '';
    }
    // Function - get value to be tested from the item
    // item - single item of the list to be filtered
    // key - property name of item, which value should be tested
    // Default behavior - returns "key"- named property value of item if key si provided,
    // otherwise textContent of the item's html element
    // Function - get value to be tested from the item
    // item - single item of the list to be filtered
    // key - property name of item, which value should be tested
    // Default behavior - returns "key"- named property value of item if key si provided,
    // otherwise textContent of the item's html element
    /**
     * @param {?} item
     * @param {?} key
     * @return {?}
     */
    IgxFilterOptions.prototype.get_value = 
    // Function - get value to be tested from the item
    // item - single item of the list to be filtered
    // key - property name of item, which value should be tested
    // Default behavior - returns "key"- named property value of item if key si provided,
    // otherwise textContent of the item's html element
    /**
     * @param {?} item
     * @param {?} key
     * @return {?}
     */
    function (item, key) {
        /** @type {?} */
        var result = '';
        if (key && item[key]) {
            result = item[key].toString();
        }
        else if (item.element) {
            if (item.element.nativeElement) {
                result = item.element.nativeElement.textContent.trim();
                // Check if element doesn't return the DOM element directly
            }
            else if (item.element.textContent) {
                result = item.element.textContent.trim();
            }
        }
        return result;
    };
    // Function - formats the original text before matching process
    // Default behavior - returns text to lower case
    // Function - formats the original text before matching process
    // Default behavior - returns text to lower case
    /**
     * @param {?} valueToTest
     * @return {?}
     */
    IgxFilterOptions.prototype.formatter = 
    // Function - formats the original text before matching process
    // Default behavior - returns text to lower case
    /**
     * @param {?} valueToTest
     * @return {?}
     */
    function (valueToTest) {
        return valueToTest.toLowerCase();
    };
    // Function - determines whether the item met the condition
    // valueToTest - text value that should be tested
    // inputValue - text value from input that condition is based on
    // Default behavior - "contains"
    // Function - determines whether the item met the condition
    // valueToTest - text value that should be tested
    // inputValue - text value from input that condition is based on
    // Default behavior - "contains"
    /**
     * @param {?} valueToTest
     * @param {?} inputValue
     * @return {?}
     */
    IgxFilterOptions.prototype.matchFn = 
    // Function - determines whether the item met the condition
    // valueToTest - text value that should be tested
    // inputValue - text value from input that condition is based on
    // Default behavior - "contains"
    /**
     * @param {?} valueToTest
     * @param {?} inputValue
     * @return {?}
     */
    function (valueToTest, inputValue) {
        return valueToTest.indexOf(inputValue && inputValue.toLowerCase() || '') > -1;
    };
    // Function - executed after matching test for every matched item
    // Default behavior - shows the item
    // Function - executed after matching test for every matched item
    // Default behavior - shows the item
    /**
     * @param {?} item
     * @return {?}
     */
    IgxFilterOptions.prototype.metConditionFn = 
    // Function - executed after matching test for every matched item
    // Default behavior - shows the item
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.hasOwnProperty('hidden')) {
            item.hidden = false;
        }
    };
    // Function - executed for every NOT matched item after matching test
    // Default behavior - hides the item
    // Function - executed for every NOT matched item after matching test
    // Default behavior - hides the item
    /**
     * @param {?} item
     * @return {?}
     */
    IgxFilterOptions.prototype.overdueConditionFn = 
    // Function - executed for every NOT matched item after matching test
    // Default behavior - hides the item
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.hasOwnProperty('hidden')) {
            item.hidden = true;
        }
    };
    return IgxFilterOptions;
}());
export { IgxFilterOptions };
if (false) {
    /** @type {?} */
    IgxFilterOptions.prototype.inputValue;
    /** @type {?} */
    IgxFilterOptions.prototype.key;
    /** @type {?} */
    IgxFilterOptions.prototype.items;
}
var IgxFilterDirective = /** @class */ (function () {
    function IgxFilterDirective(element, renderer) {
        this.element = element;
        this.filtering = new EventEmitter(false); // synchronous event emitter
        // synchronous event emitter
        this.filtered = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    IgxFilterDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Detect only changes of input value
        if (changes.filterOptions &&
            changes.filterOptions.currentValue &&
            changes.filterOptions.currentValue.inputValue !== undefined &&
            changes.filterOptions.previousValue &&
            changes.filterOptions.currentValue.inputValue !== changes.filterOptions.previousValue.inputValue) {
            this.filter();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxFilterDirective.prototype.filter = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.filterOptions.items) {
            return;
        }
        /** @type {?} */
        var args = { cancel: false, items: this.filterOptions.items };
        this.filtering.emit(args);
        if (args.cancel) {
            return;
        }
        /** @type {?} */
        var pipe = new IgxFilterPipe();
        /** @type {?} */
        var filtered = pipe.transform(this.filterOptions.items, this.filterOptions);
        this.filtered.emit({ filteredItems: filtered });
    };
    IgxFilterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxFilter]'
                },] }
    ];
    /** @nocollapse */
    IgxFilterDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    IgxFilterDirective.propDecorators = {
        filtering: [{ type: Output }],
        filtered: [{ type: Output }],
        filterOptions: [{ type: Input, args: ['igxFilter',] }]
    };
    return IgxFilterDirective;
}());
export { IgxFilterDirective };
if (false) {
    /** @type {?} */
    IgxFilterDirective.prototype.filtering;
    /** @type {?} */
    IgxFilterDirective.prototype.filtered;
    /** @type {?} */
    IgxFilterDirective.prototype.filterOptions;
    /**
     * @type {?}
     * @private
     */
    IgxFilterDirective.prototype.element;
}
var IgxFilterPipe = /** @class */ (function () {
    function IgxFilterPipe() {
    }
    /**
     * @param {?} items
     * @param {?} options
     * @return {?}
     */
    IgxFilterPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} options
     * @return {?}
     */
    function (items, 
    // options - initial settings of filter functionality
    options) {
        /** @type {?} */
        var result = [];
        if (!items || !items.length || !options) {
            return;
        }
        if (options.items) {
            items = options.items;
        }
        result = items.filter(function (item) {
            /** @type {?} */
            var match = options.matchFn(options.formatter(options.get_value(item, options.key)), options.inputValue);
            if (match) {
                if (options.metConditionFn) {
                    options.metConditionFn(item);
                }
            }
            else {
                if (options.overdueConditionFn) {
                    options.overdueConditionFn(item);
                }
            }
            return match;
        });
        return result;
    };
    IgxFilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'igxFilter',
                    pure: false
                },] }
    ];
    return IgxFilterPipe;
}());
export { IgxFilterPipe };
/**
 * @hidden
 */
var IgxFilterModule = /** @class */ (function () {
    function IgxFilterModule() {
    }
    IgxFilterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxFilterDirective, IgxFilterPipe],
                    exports: [IgxFilterDirective, IgxFilterPipe],
                    imports: [CommonModule]
                },] }
    ];
    return IgxFilterModule;
}());
export { IgxFilterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9maWx0ZXIvZmlsdGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUVSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBQUE7O1FBRVcsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQTJEM0IsQ0FBQztJQW5ERyxrREFBa0Q7SUFDbEQsZ0RBQWdEO0lBQ2hELDREQUE0RDtJQUM1RCxxRkFBcUY7SUFDckYsbURBQW1EOzs7Ozs7Ozs7OztJQUM1QyxvQ0FBUzs7Ozs7Ozs7Ozs7SUFBaEIsVUFBaUIsSUFBUyxFQUFFLEdBQVc7O1lBQy9CLE1BQU0sR0FBRyxFQUFFO1FBRWYsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtnQkFDNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDM0QsMkRBQTJEO2FBQzFEO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ2pDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM1QztTQUNKO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxnREFBZ0Q7Ozs7Ozs7SUFDekMsb0NBQVM7Ozs7Ozs7SUFBaEIsVUFBaUIsV0FBbUI7UUFDaEMsT0FBTyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxpREFBaUQ7SUFDakQsZ0VBQWdFO0lBQ2hFLGdDQUFnQzs7Ozs7Ozs7OztJQUN6QixrQ0FBTzs7Ozs7Ozs7OztJQUFkLFVBQWUsV0FBbUIsRUFBRSxVQUFrQjtRQUNsRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLG9DQUFvQzs7Ozs7OztJQUM3Qix5Q0FBYzs7Ozs7OztJQUFyQixVQUFzQixJQUFTO1FBQzNCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCxxRUFBcUU7SUFDckUsb0NBQW9DOzs7Ozs7O0lBQzdCLDZDQUFrQjs7Ozs7OztJQUF6QixVQUEwQixJQUFTO1FBQy9CLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUE3REQsSUE2REM7Ozs7SUEzREcsc0NBQXVCOztJQUd2QiwrQkFBbUI7O0lBR25CLGlDQUFvQjs7QUF3RHhCO0lBU0ksNEJBQW9CLE9BQW1CLEVBQUUsUUFBbUI7UUFBeEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUx0QixjQUFTLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7O1FBQ2pFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSy9DLENBQUM7Ozs7O0lBRU0sd0NBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBc0I7UUFDckMscUNBQXFDO1FBQ3JDLElBQUksT0FBTyxDQUFDLGFBQWE7WUFDckIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQ2xDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsS0FBSyxTQUFTO1lBQzNELE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYTtZQUNuQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQ2xHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7Ozs7O0lBRU8sbUNBQU07Ozs7SUFBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtZQUMzQixPQUFPO1NBQ1Y7O1lBRUssSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTztTQUNWOztZQUVLLElBQUksR0FBRyxJQUFJLGFBQWEsRUFBRTs7WUFFMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2dCQXZDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7aUJBQzFCOzs7O2dCQTlFRyxVQUFVO2dCQVFWLFNBQVM7Ozs0QkF3RVIsTUFBTTsyQkFDTixNQUFNO2dDQUVOLEtBQUssU0FBQyxXQUFXOztJQWlDdEIseUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXJDWSxrQkFBa0I7OztJQUMzQix1Q0FBcUQ7O0lBQ3JELHNDQUErQzs7SUFFL0MsMkNBQTJEOzs7OztJQUUvQyxxQ0FBMkI7O0FBaUMzQztJQUFBO0lBc0NBLENBQUM7Ozs7OztJQWhDVSxpQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsS0FBWTtJQUNaLHFEQUFxRDtJQUNyRCxPQUF5Qjs7WUFFbEMsTUFBTSxHQUFHLEVBQUU7UUFFZixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDZixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUzs7Z0JBQ3RCLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUUxRyxJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7b0JBQzVCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEM7YUFDSjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Z0JBckNKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLEtBQUs7aUJBQ2Q7O0lBbUNELG9CQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksYUFBYTs7OztBQXNDMUI7SUFBQTtJQU1BLENBQUM7O2dCQU5BLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUM7b0JBQ2pELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztvQkFDNUMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUMxQjs7SUFFRCxzQkFBQztDQUFBLEFBTkQsSUFNQztTQURZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE91dHB1dCxcbiAgICBQaXBlLFxuICAgIFBpcGVUcmFuc2Zvcm0sXG4gICAgUmVuZGVyZXIyLFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hGaWx0ZXJPcHRpb25zIHtcbiAgICAvLyBJbnB1dCB0ZXh0IHZhbHVlIHRoYXQgd2lsbCBiZSB1c2VkIGFzIGEgZmlsdGVyaW5nIHBhdHRlcm4gKG1hdGNoaW5nIGNvbmRpdGlvbiBpcyBiYXNlZCBvbiBpdClcbiAgICBwdWJsaWMgaW5wdXRWYWx1ZSA9ICcnO1xuXG4gICAgLy8gSXRlbSBwcm9wZXJ0eSwgd2hpY2ggdmFsdWUgc2hvdWxkIGJlIHVzZWQgZm9yIGZpbHRlcmluZ1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcblxuICAgIC8vIFJlcHJlc2VudCBpdGVtcyBvZiB0aGUgbGlzdC4gSXQgc2hvdWxkIGJlIHVzZWQgdG8gaGFuZGxlIGRlY2FsYXJhdGV2ZWx5IGRlZmluZWQgd2lkZ2V0c1xuICAgIHB1YmxpYyBpdGVtczogYW55W107XG5cbiAgICAvLyBGdW5jdGlvbiAtIGdldCB2YWx1ZSB0byBiZSB0ZXN0ZWQgZnJvbSB0aGUgaXRlbVxuICAgIC8vIGl0ZW0gLSBzaW5nbGUgaXRlbSBvZiB0aGUgbGlzdCB0byBiZSBmaWx0ZXJlZFxuICAgIC8vIGtleSAtIHByb3BlcnR5IG5hbWUgb2YgaXRlbSwgd2hpY2ggdmFsdWUgc2hvdWxkIGJlIHRlc3RlZFxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgLSByZXR1cm5zIFwia2V5XCItIG5hbWVkIHByb3BlcnR5IHZhbHVlIG9mIGl0ZW0gaWYga2V5IHNpIHByb3ZpZGVkLFxuICAgIC8vIG90aGVyd2lzZSB0ZXh0Q29udGVudCBvZiB0aGUgaXRlbSdzIGh0bWwgZWxlbWVudFxuICAgIHB1YmxpYyBnZXRfdmFsdWUoaXRlbTogYW55LCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcblxuICAgICAgICBpZiAoa2V5ICYmIGl0ZW1ba2V5XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gaXRlbVtrZXldLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5lbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGRvZXNuJ3QgcmV0dXJuIHRoZSBET00gZWxlbWVudCBkaXJlY3RseVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmVsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtLmVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiAtIGZvcm1hdHMgdGhlIG9yaWdpbmFsIHRleHQgYmVmb3JlIG1hdGNoaW5nIHByb2Nlc3NcbiAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIC0gcmV0dXJucyB0ZXh0IHRvIGxvd2VyIGNhc2VcbiAgICBwdWJsaWMgZm9ybWF0dGVyKHZhbHVlVG9UZXN0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsdWVUb1Rlc3QudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiAtIGRldGVybWluZXMgd2hldGhlciB0aGUgaXRlbSBtZXQgdGhlIGNvbmRpdGlvblxuICAgIC8vIHZhbHVlVG9UZXN0IC0gdGV4dCB2YWx1ZSB0aGF0IHNob3VsZCBiZSB0ZXN0ZWRcbiAgICAvLyBpbnB1dFZhbHVlIC0gdGV4dCB2YWx1ZSBmcm9tIGlucHV0IHRoYXQgY29uZGl0aW9uIGlzIGJhc2VkIG9uXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciAtIFwiY29udGFpbnNcIlxuICAgIHB1YmxpYyBtYXRjaEZuKHZhbHVlVG9UZXN0OiBzdHJpbmcsIGlucHV0VmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsdWVUb1Rlc3QuaW5kZXhPZihpbnB1dFZhbHVlICYmIGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSB8fCAnJykgPiAtMTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiAtIGV4ZWN1dGVkIGFmdGVyIG1hdGNoaW5nIHRlc3QgZm9yIGV2ZXJ5IG1hdGNoZWQgaXRlbVxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgLSBzaG93cyB0aGUgaXRlbVxuICAgIHB1YmxpYyBtZXRDb25kaXRpb25GbihpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gLSBleGVjdXRlZCBmb3IgZXZlcnkgTk9UIG1hdGNoZWQgaXRlbSBhZnRlciBtYXRjaGluZyB0ZXN0XG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciAtIGhpZGVzIHRoZSBpdGVtXG4gICAgcHVibGljIG92ZXJkdWVDb25kaXRpb25GbihpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RmlsdGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RmlsdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbHRlcmluZyA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpOyAvLyBzeW5jaHJvbm91cyBldmVudCBlbWl0dGVyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmaWx0ZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgnaWd4RmlsdGVyJykgcHVibGljIGZpbHRlck9wdGlvbnM6IElneEZpbHRlck9wdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICAvLyBEZXRlY3Qgb25seSBjaGFuZ2VzIG9mIGlucHV0IHZhbHVlXG4gICAgICAgIGlmIChjaGFuZ2VzLmZpbHRlck9wdGlvbnMgJiZcbiAgICAgICAgICAgIGNoYW5nZXMuZmlsdGVyT3B0aW9ucy5jdXJyZW50VmFsdWUgJiZcbiAgICAgICAgICAgIGNoYW5nZXMuZmlsdGVyT3B0aW9ucy5jdXJyZW50VmFsdWUuaW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBjaGFuZ2VzLmZpbHRlck9wdGlvbnMucHJldmlvdXNWYWx1ZSAmJlxuICAgICAgICAgICAgY2hhbmdlcy5maWx0ZXJPcHRpb25zLmN1cnJlbnRWYWx1ZS5pbnB1dFZhbHVlICE9PSBjaGFuZ2VzLmZpbHRlck9wdGlvbnMucHJldmlvdXNWYWx1ZS5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJPcHRpb25zLml0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzID0geyBjYW5jZWw6IGZhbHNlLCBpdGVtczogdGhpcy5maWx0ZXJPcHRpb25zLml0ZW1zIH07XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nLmVtaXQoYXJncyk7XG5cbiAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwaXBlID0gbmV3IElneEZpbHRlclBpcGUoKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHBpcGUudHJhbnNmb3JtKHRoaXMuZmlsdGVyT3B0aW9ucy5pdGVtcywgdGhpcy5maWx0ZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZC5lbWl0KHsgZmlsdGVyZWRJdGVtczogZmlsdGVyZWQgfSk7XG4gICAgfVxufVxuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2lneEZpbHRlcicsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHVibGljIHRyYW5zZm9ybShpdGVtczogYW55W10sXG4gICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zIC0gaW5pdGlhbCBzZXR0aW5ncyBvZiBmaWx0ZXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogSWd4RmlsdGVyT3B0aW9ucykge1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBpZiAoIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggfHwgIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLml0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtcyA9IG9wdGlvbnMuaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBpdGVtcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBvcHRpb25zLm1hdGNoRm4ob3B0aW9ucy5mb3JtYXR0ZXIob3B0aW9ucy5nZXRfdmFsdWUoaXRlbSwgb3B0aW9ucy5rZXkpKSwgb3B0aW9ucy5pbnB1dFZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubWV0Q29uZGl0aW9uRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5tZXRDb25kaXRpb25GbihpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm92ZXJkdWVDb25kaXRpb25Gbikge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm92ZXJkdWVDb25kaXRpb25GbihpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneEZpbHRlckRpcmVjdGl2ZSwgSWd4RmlsdGVyUGlwZV0sXG4gICAgZXhwb3J0czogW0lneEZpbHRlckRpcmVjdGl2ZSwgSWd4RmlsdGVyUGlwZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4RmlsdGVyTW9kdWxlIHtcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Input, NgModule, Output, Pipe, Renderer2 } from '@angular/core';
export class IgxFilterOptions {
    constructor() {
        // Input text value that will be used as a filtering pattern (matching condition is based on it)
        this.inputValue = '';
    }
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
    get_value(item, key) {
        /** @type {?} */
        let result = '';
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
    }
    // Function - formats the original text before matching process
    // Default behavior - returns text to lower case
    /**
     * @param {?} valueToTest
     * @return {?}
     */
    formatter(valueToTest) {
        return valueToTest.toLowerCase();
    }
    // Function - determines whether the item met the condition
    // valueToTest - text value that should be tested
    // inputValue - text value from input that condition is based on
    // Default behavior - "contains"
    /**
     * @param {?} valueToTest
     * @param {?} inputValue
     * @return {?}
     */
    matchFn(valueToTest, inputValue) {
        return valueToTest.indexOf(inputValue && inputValue.toLowerCase() || '') > -1;
    }
    // Function - executed after matching test for every matched item
    // Default behavior - shows the item
    /**
     * @param {?} item
     * @return {?}
     */
    metConditionFn(item) {
        if (item.hasOwnProperty('hidden')) {
            item.hidden = false;
        }
    }
    // Function - executed for every NOT matched item after matching test
    // Default behavior - hides the item
    /**
     * @param {?} item
     * @return {?}
     */
    overdueConditionFn(item) {
        if (item.hasOwnProperty('hidden')) {
            item.hidden = true;
        }
    }
}
if (false) {
    /** @type {?} */
    IgxFilterOptions.prototype.inputValue;
    /** @type {?} */
    IgxFilterOptions.prototype.key;
    /** @type {?} */
    IgxFilterOptions.prototype.items;
}
export class IgxFilterDirective {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.filtering = new EventEmitter(false); // synchronous event emitter
        // synchronous event emitter
        this.filtered = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Detect only changes of input value
        if (changes.filterOptions &&
            changes.filterOptions.currentValue &&
            changes.filterOptions.currentValue.inputValue !== undefined &&
            changes.filterOptions.previousValue &&
            changes.filterOptions.currentValue.inputValue !== changes.filterOptions.previousValue.inputValue) {
            this.filter();
        }
    }
    /**
     * @private
     * @return {?}
     */
    filter() {
        if (!this.filterOptions.items) {
            return;
        }
        /** @type {?} */
        const args = { cancel: false, items: this.filterOptions.items };
        this.filtering.emit(args);
        if (args.cancel) {
            return;
        }
        /** @type {?} */
        const pipe = new IgxFilterPipe();
        /** @type {?} */
        const filtered = pipe.transform(this.filterOptions.items, this.filterOptions);
        this.filtered.emit({ filteredItems: filtered });
    }
}
IgxFilterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxFilter]'
            },] }
];
/** @nocollapse */
IgxFilterDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
IgxFilterDirective.propDecorators = {
    filtering: [{ type: Output }],
    filtered: [{ type: Output }],
    filterOptions: [{ type: Input, args: ['igxFilter',] }]
};
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
export class IgxFilterPipe {
    /**
     * @param {?} items
     * @param {?} options
     * @return {?}
     */
    transform(items, 
    // options - initial settings of filter functionality
    options) {
        /** @type {?} */
        let result = [];
        if (!items || !items.length || !options) {
            return;
        }
        if (options.items) {
            items = options.items;
        }
        result = items.filter((item) => {
            /** @type {?} */
            const match = options.matchFn(options.formatter(options.get_value(item, options.key)), options.inputValue);
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
    }
}
IgxFilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'igxFilter',
                pure: false
            },] }
];
/**
 * @hidden
 */
export class IgxFilterModule {
}
IgxFilterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxFilterDirective, IgxFilterPipe],
                exports: [IgxFilterDirective, IgxFilterPipe],
                imports: [CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9maWx0ZXIvZmlsdGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUVSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7O1FBRVcsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQTJEM0IsQ0FBQzs7Ozs7Ozs7Ozs7SUE5Q1UsU0FBUyxDQUFDLElBQVMsRUFBRSxHQUFXOztZQUMvQixNQUFNLEdBQUcsRUFBRTtRQUVmLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7Z0JBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNELDJEQUEyRDthQUMxRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUNqQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFJTSxTQUFTLENBQUMsV0FBbUI7UUFDaEMsT0FBTyxX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Q0FBQyxLQUFLLEVBQUU7WUFDZixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7O2tCQUMxQixLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFFMUcsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFO29CQUN4QixPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoQzthQUNKO2lCQUFNO2dCQUNILElBQUksT0FBTyxDQUFDLGtCQUFrQixFQUFFO29CQUM1QixPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2FBQ0o7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7OztZQXJDSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxLQUFLO2FBQ2Q7Ozs7O0FBNkNELE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE91dHB1dCxcbiAgICBQaXBlLFxuICAgIFBpcGVUcmFuc2Zvcm0sXG4gICAgUmVuZGVyZXIyLFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hGaWx0ZXJPcHRpb25zIHtcbiAgICAvLyBJbnB1dCB0ZXh0IHZhbHVlIHRoYXQgd2lsbCBiZSB1c2VkIGFzIGEgZmlsdGVyaW5nIHBhdHRlcm4gKG1hdGNoaW5nIGNvbmRpdGlvbiBpcyBiYXNlZCBvbiBpdClcbiAgICBwdWJsaWMgaW5wdXRWYWx1ZSA9ICcnO1xuXG4gICAgLy8gSXRlbSBwcm9wZXJ0eSwgd2hpY2ggdmFsdWUgc2hvdWxkIGJlIHVzZWQgZm9yIGZpbHRlcmluZ1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcblxuICAgIC8vIFJlcHJlc2VudCBpdGVtcyBvZiB0aGUgbGlzdC4gSXQgc2hvdWxkIGJlIHVzZWQgdG8gaGFuZGxlIGRlY2FsYXJhdGV2ZWx5IGRlZmluZWQgd2lkZ2V0c1xuICAgIHB1YmxpYyBpdGVtczogYW55W107XG5cbiAgICAvLyBGdW5jdGlvbiAtIGdldCB2YWx1ZSB0byBiZSB0ZXN0ZWQgZnJvbSB0aGUgaXRlbVxuICAgIC8vIGl0ZW0gLSBzaW5nbGUgaXRlbSBvZiB0aGUgbGlzdCB0byBiZSBmaWx0ZXJlZFxuICAgIC8vIGtleSAtIHByb3BlcnR5IG5hbWUgb2YgaXRlbSwgd2hpY2ggdmFsdWUgc2hvdWxkIGJlIHRlc3RlZFxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgLSByZXR1cm5zIFwia2V5XCItIG5hbWVkIHByb3BlcnR5IHZhbHVlIG9mIGl0ZW0gaWYga2V5IHNpIHByb3ZpZGVkLFxuICAgIC8vIG90aGVyd2lzZSB0ZXh0Q29udGVudCBvZiB0aGUgaXRlbSdzIGh0bWwgZWxlbWVudFxuICAgIHB1YmxpYyBnZXRfdmFsdWUoaXRlbTogYW55LCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcblxuICAgICAgICBpZiAoa2V5ICYmIGl0ZW1ba2V5XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gaXRlbVtrZXldLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5lbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGRvZXNuJ3QgcmV0dXJuIHRoZSBET00gZWxlbWVudCBkaXJlY3RseVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmVsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtLmVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiAtIGZvcm1hdHMgdGhlIG9yaWdpbmFsIHRleHQgYmVmb3JlIG1hdGNoaW5nIHByb2Nlc3NcbiAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIC0gcmV0dXJucyB0ZXh0IHRvIGxvd2VyIGNhc2VcbiAgICBwdWJsaWMgZm9ybWF0dGVyKHZhbHVlVG9UZXN0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsdWVUb1Rlc3QudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiAtIGRldGVybWluZXMgd2hldGhlciB0aGUgaXRlbSBtZXQgdGhlIGNvbmRpdGlvblxuICAgIC8vIHZhbHVlVG9UZXN0IC0gdGV4dCB2YWx1ZSB0aGF0IHNob3VsZCBiZSB0ZXN0ZWRcbiAgICAvLyBpbnB1dFZhbHVlIC0gdGV4dCB2YWx1ZSBmcm9tIGlucHV0IHRoYXQgY29uZGl0aW9uIGlzIGJhc2VkIG9uXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciAtIFwiY29udGFpbnNcIlxuICAgIHB1YmxpYyBtYXRjaEZuKHZhbHVlVG9UZXN0OiBzdHJpbmcsIGlucHV0VmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsdWVUb1Rlc3QuaW5kZXhPZihpbnB1dFZhbHVlICYmIGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSB8fCAnJykgPiAtMTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiAtIGV4ZWN1dGVkIGFmdGVyIG1hdGNoaW5nIHRlc3QgZm9yIGV2ZXJ5IG1hdGNoZWQgaXRlbVxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgLSBzaG93cyB0aGUgaXRlbVxuICAgIHB1YmxpYyBtZXRDb25kaXRpb25GbihpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gLSBleGVjdXRlZCBmb3IgZXZlcnkgTk9UIG1hdGNoZWQgaXRlbSBhZnRlciBtYXRjaGluZyB0ZXN0XG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciAtIGhpZGVzIHRoZSBpdGVtXG4gICAgcHVibGljIG92ZXJkdWVDb25kaXRpb25GbihpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RmlsdGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RmlsdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbHRlcmluZyA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpOyAvLyBzeW5jaHJvbm91cyBldmVudCBlbWl0dGVyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmaWx0ZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgnaWd4RmlsdGVyJykgcHVibGljIGZpbHRlck9wdGlvbnM6IElneEZpbHRlck9wdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICAvLyBEZXRlY3Qgb25seSBjaGFuZ2VzIG9mIGlucHV0IHZhbHVlXG4gICAgICAgIGlmIChjaGFuZ2VzLmZpbHRlck9wdGlvbnMgJiZcbiAgICAgICAgICAgIGNoYW5nZXMuZmlsdGVyT3B0aW9ucy5jdXJyZW50VmFsdWUgJiZcbiAgICAgICAgICAgIGNoYW5nZXMuZmlsdGVyT3B0aW9ucy5jdXJyZW50VmFsdWUuaW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBjaGFuZ2VzLmZpbHRlck9wdGlvbnMucHJldmlvdXNWYWx1ZSAmJlxuICAgICAgICAgICAgY2hhbmdlcy5maWx0ZXJPcHRpb25zLmN1cnJlbnRWYWx1ZS5pbnB1dFZhbHVlICE9PSBjaGFuZ2VzLmZpbHRlck9wdGlvbnMucHJldmlvdXNWYWx1ZS5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJPcHRpb25zLml0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzID0geyBjYW5jZWw6IGZhbHNlLCBpdGVtczogdGhpcy5maWx0ZXJPcHRpb25zLml0ZW1zIH07XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nLmVtaXQoYXJncyk7XG5cbiAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwaXBlID0gbmV3IElneEZpbHRlclBpcGUoKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHBpcGUudHJhbnNmb3JtKHRoaXMuZmlsdGVyT3B0aW9ucy5pdGVtcywgdGhpcy5maWx0ZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZC5lbWl0KHsgZmlsdGVyZWRJdGVtczogZmlsdGVyZWQgfSk7XG4gICAgfVxufVxuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2lneEZpbHRlcicsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHVibGljIHRyYW5zZm9ybShpdGVtczogYW55W10sXG4gICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zIC0gaW5pdGlhbCBzZXR0aW5ncyBvZiBmaWx0ZXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogSWd4RmlsdGVyT3B0aW9ucykge1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBpZiAoIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggfHwgIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLml0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtcyA9IG9wdGlvbnMuaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBpdGVtcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBvcHRpb25zLm1hdGNoRm4ob3B0aW9ucy5mb3JtYXR0ZXIob3B0aW9ucy5nZXRfdmFsdWUoaXRlbSwgb3B0aW9ucy5rZXkpKSwgb3B0aW9ucy5pbnB1dFZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubWV0Q29uZGl0aW9uRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5tZXRDb25kaXRpb25GbihpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm92ZXJkdWVDb25kaXRpb25Gbikge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm92ZXJkdWVDb25kaXRpb25GbihpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneEZpbHRlckRpcmVjdGl2ZSwgSWd4RmlsdGVyUGlwZV0sXG4gICAgZXhwb3J0czogW0lneEZpbHRlckRpcmVjdGl2ZSwgSWd4RmlsdGVyUGlwZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4RmlsdGVyTW9kdWxlIHtcbn1cbiJdfQ==
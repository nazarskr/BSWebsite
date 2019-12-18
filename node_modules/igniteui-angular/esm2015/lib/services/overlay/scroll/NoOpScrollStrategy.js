/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ScrollStrategy } from './scroll-strategy';
/**
 * Empty scroll strategy. Does nothing.
 */
export class NoOpScrollStrategy extends ScrollStrategy {
    /**
     * @param {?=} scrollContainer
     */
    constructor(scrollContainer) {
        super(scrollContainer);
    }
    /**
     * \@inheritdoc
     * @param {?} document
     * @param {?} overlayService
     * @param {?} id
     * @return {?}
     */
    initialize(document, overlayService, id) { }
    /**
     * \@inheritdoc
     * @return {?}
     */
    attach() { }
    /**
     * \@inheritdoc
     * @return {?}
     */
    detach() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9PcFNjcm9sbFN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Njcm9sbC9Ob09wU2Nyb2xsU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtuRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBYzs7OztJQUNsRCxZQUFZLGVBQTZCO1FBQ3JDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7OztJQUVNLFVBQVUsQ0FBQyxRQUFrQixFQUFFLGNBQWlDLEVBQUUsRUFBVSxJQUFJLENBQUM7Ozs7O0lBR3hGLE1BQU0sS0FBVyxDQUFDOzs7OztJQUdsQixNQUFNLEtBQVcsQ0FBQztDQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElneE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vb3ZlcmxheSc7XG5pbXBvcnQgeyBTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4vc2Nyb2xsLXN0cmF0ZWd5JztcblxuLyoqXG4gKiBFbXB0eSBzY3JvbGwgc3RyYXRlZ3kuIERvZXMgbm90aGluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vT3BTY3JvbGxTdHJhdGVneSBleHRlbmRzIFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3RvcihzY3JvbGxDb250YWluZXI/OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihzY3JvbGxDb250YWluZXIpO1xuICAgIH1cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZShkb2N1bWVudDogRG9jdW1lbnQsIG92ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZSwgaWQ6IHN0cmluZykgeyB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBhdHRhY2goKTogdm9pZCB7IH1cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGRldGFjaCgpOiB2b2lkIHsgfVxufVxuIl19
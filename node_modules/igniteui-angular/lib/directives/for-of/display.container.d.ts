import { ChangeDetectorRef, ViewContainerRef } from '@angular/core';
export declare class DisplayContainerComponent {
    cdr: ChangeDetectorRef;
    _viewContainer: ViewContainerRef;
    _vcr: any;
    scrollDirection: string;
    cssClass: string;
    notVirtual: boolean;
    scrollContainer: any;
    constructor(cdr: ChangeDetectorRef, _viewContainer: ViewContainerRef);
}

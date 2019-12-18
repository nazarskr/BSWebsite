import { PipeTransform } from '@angular/core';
import { FilteringLogic, IFilteringExpression } from '../data-operations/filtering-expression.interface';
import { ISortingExpression } from '../data-operations/sorting-expression.interface';
import { FilteringStrategy } from '../data-operations/filtering-strategy';
import { IgxComboBase } from './combo.common';
/**
 * @hidden
 */
export declare class IgxComboFilteringPipe implements PipeTransform {
    combo: IgxComboBase;
    constructor(combo: IgxComboBase);
    transform(collection: any[], expressions: IFilteringExpression[], logic: FilteringLogic): any[];
}
/** @hidden */
export declare class SimpleFilteringStrategy extends FilteringStrategy {
    findMatchByExpression(rec: object, expr: IFilteringExpression): boolean;
}
/**
 * @hidden
 */
export declare class IgxComboSortingPipe implements PipeTransform {
    constructor();
    transform(collection: any[], expressions: ISortingExpression[]): any[];
}
/**
 * @hidden
 */
export declare class IgxComboGroupingPipe implements PipeTransform {
    combo: IgxComboBase;
    constructor(combo: IgxComboBase);
    transform(collection: any[], groupKey: any): any[];
}
/**
 * @hidden
 */
export declare class IgxComboFilterConditionPipe implements PipeTransform {
    transform(value: string): string;
}

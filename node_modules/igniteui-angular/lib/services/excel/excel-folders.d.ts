import { ExcelFileTypes, ExcelFolderTypes } from './excel-enums';
import { IExcelFolder } from './excel-interfaces';
import { WorksheetData } from './worksheet-data';
/** @hidden */
export declare class RootExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): ExcelFolderTypes[];
}
/** @hidden */
export declare class RootRelsExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): any[];
}
/** @hidden */
export declare class DocPropsExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): any[];
}
/** @hidden */
export declare class XLExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): ExcelFolderTypes[];
}
/** @hidden */
export declare class XLRelsExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): any[];
}
/** @hidden */
export declare class ThemeExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): any[];
}
/** @hidden */
export declare class WorksheetsExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): ExcelFolderTypes[];
}
/** @hidden */
export declare class TablesExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): any[];
}
/** @hidden */
export declare class WorksheetsRelsExcelFolder implements IExcelFolder {
    readonly folderName: string;
    childFiles(data: WorksheetData): ExcelFileTypes[];
    childFolders(data: WorksheetData): any[];
}

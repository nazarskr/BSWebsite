import { DomSanitizer } from '@angular/platform-browser';
/**
 * **Ignite UI for Angular Icon Service** -
 *
 * The Ignite UI Icon Service makes it easy for developers to include custom SVG images and use them with IgxIconComponent.
 * In addition it could be used to associate a custom class to be applied on IgxIconComponent according to given fontSet.
 *
 * Example:
 * ```typescript
 * this.iconService.registerFontSetAlias('material', 'material-icons');
 * this.iconService.addSvgIcon('aruba', '/assets/svg/country_flags/aruba.svg', 'svg-flags');
 * ```
 */
export declare class IgxIconService {
    private _sanitizer;
    private _document;
    private _fontSet;
    private _fontSetAliases;
    private _svgContainer;
    private _cachedSvgIcons;
    constructor(_sanitizer: DomSanitizer, _document: any);
    /**
     *  Returns the default font set.
     *```typescript
     *   const defaultFontSet = this.iconService.defaultFontSet;
     * ```
     */
    /**
    *  Sets the default font set.
    *```typescript
    *   this.iconService.defaultFontSet = 'svg-flags';
    * ```
    */
    defaultFontSet: string;
    /**
     *  Registers a custom class to be applied to IgxIconComponent for a given fontSet.
     *```typescript
     *   this.iconService.registerFontSetAlias('material', 'material-icons');
     * ```
     */
    registerFontSetAlias(alias: string, className?: string): this;
    /**
     *  Returns the custom class, if any, associated to a given fontSet.
     *```typescript
     *   const fontSetClass = this.iconService.fontSetClassName('material');
     * ```
     */
    fontSetClassName(alias: string): string;
    /**
     *  Adds an SVG image to the cache. SVG source is an url.
     *```typescript
     *   this.iconService.addSvgIcon('aruba', '/assets/svg/country_flags/aruba.svg', 'svg-flags');
     * ```
     */
    addSvgIcon(iconName: string, url: string, fontSet?: string): void;
    /**
     *  Adds an SVG image to the cache. SVG source is its text.
     *```typescript
     *   this.iconService.addSvgIcon('simple', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
     *   <path d="M74 74h54v54H74" /></svg>', 'svg-flags');
     * ```
     */
    addSvgIconFromText(iconName: string, iconText: string, fontSet?: string): void;
    /**
     *  Returns whether a given SVG image is present in the cache.
     *```typescript
     *   const isSvgCached = this.iconService.isSvgIconCached('aruba', 'svg-flags');
     * ```
     */
    isSvgIconCached(iconName: string, fontSet?: string): boolean;
    /**
     *  Returns the key of a cached SVG image.
     *```typescript
     *   const svgIconKey = this.iconService.getSvgIconKey('aruba', 'svg-flags');
     * ```
     */
    getSvgIconKey(iconName: string, fontSet?: string): string;
    /**
     * @hidden
     */
    private fetchSvg;
    /**
     * @hidden
     */
    private cacheSvgIcon;
    /**
     * @hidden
     */
    private ensureSvgContainerCreated;
}

import { AnimationEvent } from '@angular/animations';
import { EventEmitter, NgZone } from '@angular/core';
/**
 * **Ignite UI for Angular Snackbar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/snackbar.html)
 *
 * The Ignite UI Snack Bar provides feedback about an operation with a single-line message, which can
 * include a link to an action such as Undo.
 *
 * Example:
 * ```html
 * <button (click)="snackbar.show()">Send message</button>
 * <div>
 *   <igx-snackbar #snackbar message="Message sent">
 *   </igx-snackbar>
 * </div>
 * ```
 */
export declare class IgxSnackbarComponent {
    private zone;
    /**
     * Sets/gets the `id` of the snackbar.
     * If not set, the `id` of the first snackbar component  will be `"igx-snackbar-0"`;
     * ```html
     * <igx-snackbar id = "Snackbar1"></igx-snackbar>
     * ```
     * ```typescript
     * let snackbarId = this.snackbar.id;
     * ```
     * @memberof IgxSnackbarComponent
     */
    id: string;
    /**
     * Sets/gets the `message` attribute.
     * ```html
     * <igx-snackbar [message] = "'Snackbar Component'"></igx-snackbar>
     * ```
     * ```typescript
     * let message =  this.snackbar.message;
     * ```
     */
    message: string;
    /**
     * Enables/Disables the visibility of the snackbar.
     * If not set, the `isVisible` attribute will have value `false`.
     * ```html
     * <igx-snackbar [isVisible] = "true"></igx-snackbar>
     * ```
     * ```typescript
     * let isVisible =  this.snackbar.isVisible;
     * ```
     */
    isVisible: boolean;
    /**
     * Sets/gets if the snackbar will be automatically hidden after the `displayTime` is over.
     * Default value is `true`.
     * ```html
     * <igx-snackbar [autoHide] = "false"></igx-snackbar>
     * ```
     * ```typescript
     * let autoHide =  this.snackbar.autoHide;
     * ```
     */
    autoHide: boolean;
    /**
     * Sets/gets the duration of time(in milliseconds) in which the snackbar will be visible after it is being shown.
     * Default value is 4000.
     * ```html
     * <igx-snackbar [displayTime] = "2000"></igx-snackbar>
     * ```
     * ```typescript
     * let displayTime = this.snackbar.displayTime;
     * ```
     */
    displayTime: number;
    /**
     * Sets/gets the `actionText` attribute.
     * ```html
     * <igx-snackbar [actionText] = "'Action Text'"></igx-snackbar>
     * ```
     */
    actionText?: string;
    /**
     * An event that will be emitted when the action is executed.
     * Provides reference to the `IgxSnackbarComponent` as an argument.
     * ```html
     * <igx-snackbar (onAction) = "onAction($event)"></igx-snackbar>
     * ```
     */
    onAction: EventEmitter<IgxSnackbarComponent>;
    /**
     * An event that will be emitted when the snackbar animation starts.
     * Provides reference to the `AnimationEvent` interface as an argument.
     * ```html
     * <igx-snackbar (animationStarted) = "animationStarted($event)"></igx-snackbar>
     * ```
     */
    animationStarted: EventEmitter<AnimationEvent>;
    /**
     * An event that will be emitted when the snackbar animation ends.
     * Provides reference to the `AnimationEvent` interface as an argument.
     * ```html
     * <igx-snackbar (animationDone) = "animationDone($event)"></igx-snackbar>
     * ```
     */
    animationDone: EventEmitter<AnimationEvent>;
    /**
     *@hidden
     */
    private timeoutId;
    constructor(zone: NgZone);
    /**
     * Shows the snackbar and hides it after the `displayTime` is over if `autoHide` is set to `true`.
     * ```typescript
     * this.snackbar.show();
     * ```
     */
    show(): void;
    /**
     * Hides the snackbar.
     * ```typescript
     * this.snackbar.hide();
     * ```
     */
    hide(): void;
    /**
     *@hidden
     */
    triggerAction(): void;
    /**
     *@hidden
     * @memberof IgxSnackbarComponent
     */
    snackbarAnimationStarted(evt: AnimationEvent): void;
    /**
     *@hidden
     * @memberof IgxSnackbarComponent
     */
    snackbarAnimationDone(evt: AnimationEvent): void;
}
/**
 * @hidden
 */
export declare class IgxSnackbarModule {
}

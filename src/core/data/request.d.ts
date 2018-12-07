/**
 * @interface
 */
interface IRequesterOptions {
    rejectShortAttempts: number;
    rejectLongAttempts: number;
    rejectShortTimeout: number;
    rejectLongTimeout: number;
}
/**
 * Таймауты
 */
export declare enum RequesterTimeout {
    SHORT = 5000,
    LONG = 60000,
    UPDATE = 60000
}
/**
 * Реализует интерфейс анизотропных обновлений.
 * @author Evgeny Grebennikov
 */
export declare class Request {
    /**
     * @static
     */
    static DEFAULT_SHORT_ATTEMPTS: number;
    /**
     * @static
     */
    static DEFAULT_LONG_ATTEMPTS: number;
    /**
     * @private
     */
    private _rejectShortTimeout;
    /**
     * @private
     */
    private _rejectLongTimeout;
    /**
     * @private
     */
    private _updateTimeout;
    /**
     * @private
     */
    private _rejectShortAttempts;
    /**
     * @private
     */
    private _rejectLongAttempts;
    /**
     * @private
     */
    private _rejectAttempt;
    /**
     * @private
     */
    private _timer;
    /**
     * @constructor
     * @param {IRequesterOptions} options
     */
    constructor(options?: IRequesterOptions);
    /**
     * @param {<T>() => Promise<T>} factory
     * @param {(data: T) => boolean} errorConditional
     * @return {Promise<T>}
     */
    run<T>(factory: <T>() => Promise<T>, errorConditional: (data: T) => boolean): Promise<T>;
    /**
     * @private
     */
    private clearTimer;
    /**
     * Очистка объекта перед удалением
     */
    dispose(): void;
}
export {};

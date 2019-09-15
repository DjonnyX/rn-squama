interface IRequesterOptions {
    rejectShortAttempts?: number;
    rejectLongAttempts?: number;
    rejectShortTimeout?: number;
    rejectLongTimeout?: number;
    updateTimeout?: number;
}

/**
 * Таймауты
 */
export enum RequesterTimeout {
    SHORT = 5000,
    LONG = 60000,
    UPDATE = 60000,
}

/**
 * Реализует интерфейс анизотропных обновлений.
 */
export class Request {

    public static DEFAULT_SHORT_ATTEMPTS: number = 5;

    public static DEFAULT_LONG_ATTEMPTS: number = 1;

    private _rejectShortTimeout: number = RequesterTimeout.SHORT;

    private _rejectLongTimeout: number = RequesterTimeout.LONG;

    private _updateTimeout: number = RequesterTimeout.UPDATE;

    private _rejectShortAttempts: number = Request.DEFAULT_SHORT_ATTEMPTS;

    private _rejectLongAttempts: number = Request.DEFAULT_LONG_ATTEMPTS;

    private _rejectAttempt: number = 0;

    private _timer: number;

    constructor(options?: IRequesterOptions) {
        if (options) {
            if (options.hasOwnProperty("rejectShortAttempts")) this._rejectShortAttempts = options.rejectShortAttempts;
            if (options.hasOwnProperty("rejectLongAttempts")) this._rejectLongAttempts = options.rejectLongAttempts;
            if (options.hasOwnProperty("rejectShortTimeout")) this._rejectShortTimeout = options.rejectShortTimeout;
            if (options.hasOwnProperty("rejectLongTimeout")) this._rejectLongTimeout = options.rejectLongTimeout;
            if (options.hasOwnProperty("updateTimeout")) this._updateTimeout = options.updateTimeout;
        }
    }

    public async run<T>(factory: <T>() => Promise<T>, errorConditional: (data: T) => boolean): Promise<T> {

        const result: T = await factory<T>();

        this.clearTimer();
        const isError: boolean = errorConditional(result);

        let timeout: number;

        if (isError) {
            this._rejectAttempt ++;

            if (this._rejectAttempt <= this._rejectShortAttempts) timeout = this._rejectShortTimeout;
            else if (this._rejectAttempt === this._rejectShortAttempts + this._rejectLongAttempts) timeout = this._rejectLongTimeout;
            else {
                this._rejectAttempt = 0;
                timeout = this._rejectShortTimeout;
            }
        } else  {
            this._rejectAttempt = 0;
            timeout = this._updateTimeout;
        }

        this._timer = setTimeout(() => {
            this.run(factory, errorConditional);
        }, timeout);

        return result;
    }

    private clearTimer(): void {
        if (!this._timer) return;

        clearTimeout(this._timer);
        this._timer = null;
    }

    /**
     * Очистка объекта перед удалением
     */
    public dispose(): void {
        this.clearTimer();
    }
}
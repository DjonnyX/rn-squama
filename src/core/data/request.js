var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Таймауты
 */
export var RequesterTimeout;
(function (RequesterTimeout) {
    RequesterTimeout[RequesterTimeout["SHORT"] = 5000] = "SHORT";
    RequesterTimeout[RequesterTimeout["LONG"] = 60000] = "LONG";
    RequesterTimeout[RequesterTimeout["UPDATE"] = 60000] = "UPDATE";
})(RequesterTimeout || (RequesterTimeout = {}));
/**
 * Реализует интерфейс анизотропных обновлений.
 * @author Evgeny Grebennikov
 */
export class Request {
    /**
     * @constructor
     * @param {IRequesterOptions} options
     */
    constructor(options) {
        /**
         * @private
         */
        this._rejectShortTimeout = RequesterTimeout.SHORT;
        /**
         * @private
         */
        this._rejectLongTimeout = RequesterTimeout.LONG;
        /**
         * @private
         */
        this._updateTimeout = RequesterTimeout.UPDATE;
        /**
         * @private
         */
        this._rejectShortAttempts = Request.DEFAULT_SHORT_ATTEMPTS;
        /**
         * @private
         */
        this._rejectLongAttempts = Request.DEFAULT_LONG_ATTEMPTS;
        /**
         * @private
         */
        this._rejectAttempt = 0;
        if (options) {
            if (options.hasOwnProperty("rejectShortAttempts"))
                this._rejectShortAttempts = options.rejectShortAttempts;
            if (options.hasOwnProperty("rejectLongAttempts"))
                this._rejectLongAttempts = options.rejectLongAttempts;
            if (options.hasOwnProperty("rejectShortTimeout"))
                this._rejectShortTimeout = options.rejectShortTimeout;
            if (options.hasOwnProperty("rejectLongTimeout"))
                this._rejectLongTimeout = options.rejectLongTimeout;
        }
    }
    /**
     * @param {<T>() => Promise<T>} factory
     * @param {(data: T) => boolean} errorConditional
     * @return {Promise<T>}
     */
    run(factory, errorConditional) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield factory();
            this.clearTimer();
            const isError = errorConditional(result);
            let timeout;
            if (isError) {
                this._rejectAttempt++;
                if (this._rejectAttempt <= this._rejectShortAttempts)
                    timeout = this._rejectShortTimeout;
                else if (this._rejectAttempt === this._rejectShortAttempts + this._rejectLongAttempts)
                    timeout = this._rejectLongTimeout;
                else {
                    this._rejectAttempt = 0;
                    timeout = this._updateTimeout;
                }
            }
            this._timer = setTimeout(() => {
                this.run(factory, errorConditional);
            }, timeout);
            return result;
        });
    }
    /**
     * @private
     */
    clearTimer() {
        if (!this._timer)
            return;
        clearTimeout(this._timer);
        this._timer = null;
    }
    /**
     * Очистка объекта перед удалением
     */
    dispose() {
        this.clearTimer();
    }
}
/**
 * @static
 */
Request.DEFAULT_SHORT_ATTEMPTS = 5;
/**
 * @static
 */
Request.DEFAULT_LONG_ATTEMPTS = 1;

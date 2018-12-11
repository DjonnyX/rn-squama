"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const lodash_1 = require("lodash");
/**
 * Базовая сущность стора
 * На изменение сущности можно всегда подписаться
 * @generic
 * @author Evgeny Grebennikov
 */
class StoreEntity {
    /**
     * @constructor
     * @param {T} _state
     */
    constructor(_state, options) {
        this._state = _state;
        /**
         * @private
         */
        this._subscriber = new rxjs_1.Subject();
        this._options = options || StoreEntity.defaultOptions;
    }
    /**
     * @getter
     */
    get subscriber() {
        return this._subscriber;
    }
    /**
     * Принудительно посылает событие на обновление
     */
    updateDirectly() { this._subscriber.next(this._state); }
    /**
     * Задает новое состояние
     * @param {T} newState
     * @returns {T}
     */
    set(newState) {
        if (newState) {
            // нормализация
            const state = Object.assign({}, this._state, newState);
            // глубокое сравнение
            if (!this._options.equal || !lodash_1.default.isEqual(this._state, state)) {
                this._state = state;
                this._subscriber.next(this._state);
            }
        }
        return this._state;
    }
    /**
     * Возвращает состояние
     * @returns {T}
     */
    get() {
        return this._state;
    }
    /**
     * Подписка на изменение
     * @param {(value: T) => void} next
     * @returns {Observable<T>}
     */
    subscribe(next) {
        return this._subscriber.subscribe(next);
    }
    /**
     * очистка объекта
     * вызывать перед удалением
     */
    dispose() {
        this._subscriber.unsubscribe();
        this._subscriber = null;
    }
}
StoreEntity.defaultOptions = {
    equal: true
};
exports.StoreEntity = StoreEntity;

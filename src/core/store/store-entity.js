import { Subject } from "rxjs";
import _ from "lodash";
/**
 * Базовая сущность стора
 * На изменение сущности можно всегда подписаться
 * @generic
 * @author Evgeny Grebennikov
 */
export class StoreEntity {
    /**
     * @constructor
     * @param {T} _state
     */
    constructor(_state, options) {
        this._state = _state;
        /**
         * @private
         */
        this._subscriber = new Subject();
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
            if (!this._options.equal || !_.isEqual(this._state, state)) {
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

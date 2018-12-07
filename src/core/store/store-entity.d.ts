import { Subject, Subscription } from "rxjs";
/**
 * @interface
 * @generic
 */
export interface IBaseState<D> {
    data?: D;
}
/**
 * @interface
 * @generic
 */
export interface IBaseFetchState<D, E> extends IBaseState<D> {
    loading?: boolean;
    error?: E;
}
export interface IStoreEntityOptions {
    equal?: boolean;
}
/**
 * Базовая сущность стора
 * На изменение сущности можно всегда подписаться
 * @generic
 * @author Evgeny Grebennikov
 */
export declare class StoreEntity<T> {
    protected _state: T;
    private static defaultOptions;
    private _options;
    /**
     * @private
     */
    private _subscriber;
    /**
     * @getter
     */
    readonly subscriber: Subject<T>;
    /**
     * @constructor
     * @param {T} _state
     */
    constructor(_state: T, options?: IStoreEntityOptions);
    /**
     * Принудительно посылает событие на обновление
     */
    updateDirectly(): void;
    /**
     * Задает новое состояние
     * @param {T} newState
     * @returns {T}
     */
    set(newState: T): T;
    /**
     * Возвращает состояние
     * @returns {T}
     */
    get(): T;
    /**
     * Подписка на изменение
     * @param {(value: T) => void} next
     * @returns {Observable<T>}
     */
    subscribe(next?: (value: T) => void): Subscription;
    /**
     * очистка объекта
     * вызывать перед удалением
     */
    dispose(): void;
}

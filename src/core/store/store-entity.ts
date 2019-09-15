<<<<<<< HEAD:src/core/store/store-entity.js
import { Subject } from "rxjs";
import _ from "lodash";
export class StoreEntity {
    constructor(_state, options) {
        this._state = _state;
        this._subscriber = new Subject();
        this._options = options || StoreEntity.defaultOptions;
    }
    get subscriber() {
        return this._subscriber.asObservable();
    }
    updateDirectly() { this._subscriber.next(this._state); }
    set(newState) {
        if (newState) {
            const state = Object.assign({}, this._state, newState);
=======
import { Subject, Subscription } from "rxjs";
import _ from "lodash";

export interface IBaseState<D> {
    data?: D;
}

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
 */
export class StoreEntity<T> {

    private static defaultOptions: IStoreEntityOptions = {
        equal: true
    }

    private _options: IStoreEntityOptions;

    private _subscriber: Subject<T> = new Subject();

    public get subscriber(): Subject<T> {
        return this._subscriber;
    }

    constructor(protected _state: T, options?: IStoreEntityOptions) {
        this._options = options || StoreEntity.defaultOptions;
    }

    /**
     * Принудительно посылает событие на обновление
     */
    public updateDirectly(): void { this._subscriber.next(this._state); }

    /**
     * Задает новое состояние
     */
    public set(newState: T): T {
        if (newState) {
            // нормализация
            const state = {...this._state as any, ...newState as any};
            // глубокое сравнение
>>>>>>> master:src/core/store/store-entity.ts
            if (!this._options.equal || !_.isEqual(this._state, state)) {
                this._state = state;
                this._subscriber.next(this._state);
            }
        }
        return this._state;
    }
<<<<<<< HEAD:src/core/store/store-entity.js
    get() {
        return this._state;
    }
    subscribe(next) {
        return this.subscriber.subscribe(next);
    }
    dispose() {
        this._subscriber.unsubscribe();
        this._subscriber = null;
    }
}
StoreEntity.defaultOptions = {
    equal: true
};
=======

    /**
     * Возвращает состояние
     */
    public get(): T {
        return this._state;
    }

    /**
     * Подписка на изменение
     */
    public subscribe(next?: (value: T) => void): Subscription {
        return this._subscriber.subscribe(next);
    }

    /**
     * очистка объекта
     * вызывать перед удалением
     */
    public dispose(): void {
        this._subscriber.unsubscribe();
        this._subscriber = null;
    }
}
>>>>>>> master:src/core/store/store-entity.ts

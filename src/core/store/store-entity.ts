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
            if (!this._options.equal || !_.isEqual(this._state, state)) {
                this._state = state;
                this._subscriber.next(this._state);
            }
        }
        return this._state;
    }

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
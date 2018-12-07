import { StoreEntity } from "./store-entity";
import { Subscription } from "rxjs";
/**
 * Концепция дата-хранилища.
 * Можно подписываться на изменения его сущностей, а также на изменение хранилища в целом.
 * К хранилищу можно привязать дочерние хранилища, тем самым организуя древовидную систему дата-хранилищ.
 * @author Evgeny Grebennikov
 */
export declare class BaseStore {
    /**
     * @private
     */
    private _$subject;
    /**
     * @private
     */
    private _$entities;
    /**
     * @private
     */
    private _$children;
    /**
     * @private
     */
    private _$childrenSubscriptions;
    private _locked;
    /**
     * @constructor
     */
    constructor();
    /**
     * @protected
     */
    protected lock(): void;
    /**
     * @protected
     */
    protected unlock(): void;
    /**
     * @protected
     */
    protected updateDirectly(): void;
    /**
     * Сброс всех значений на значения по-умолчанию.
     * Все обновления проходят в "тихую", для этого конечным действием
     * вызывается <code>this.updateDirectly()</code>, чтобы уполномочить
     * хранилище об изменении.
     */
    setDefault(silentOp?: () => void): void;
    /**
     * Устанавливает сущности хранилища
     * @param {Array<StoreEntity<any>>} data
     */
    protected setEntities(data: Array<StoreEntity<any>>): void;
    /**
     * Устанавливает дочерние хранилища
     * @param {Array<BaseStore>} data
     */
    protected setChildren(data: Array<BaseStore>): void;
    /**
     * Связывает дочерние хранилища
     */
    private bindChildren;
    /**
     * Устанавливаются подписки на сущности хранилища
     */
    private subscribeToEntities;
    /**
     * Очистка сущностей
     */
    private disposeEntities;
    /**
     * Сносит подписки на дочерние хранилища
     */
    private disposeChildren;
    /**
     * Сносит подписки на дочерние хранилища
     */
    private removeChildrenSubscriptions;
    /**
     * Подписаться на изменение общего состояния хранилища
     * @param {(value: any) => void} next
     * @returns {Subscription}
     */
    subscribe(next?: (value: any) => void): Subscription;
    /**
     * Очистка объекта хранилища.
     * Вызывать перед полным удалением
     */
    dispose(): void;
}

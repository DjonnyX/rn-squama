"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
/**
 * Концепция дата-хранилища.
 * Можно подписываться на изменения его сущностей, а также на изменение хранилища в целом.
 * К хранилищу можно привязать дочерние хранилища, тем самым организуя древовидную систему дата-хранилищ.
 * @author Evgeny Grebennikov
 */
class BaseStore {
    /**
     * @constructor
     */
    constructor() {
        /**
         * @private
         */
        this._$subject = new rxjs_1.Subject();
        this._locked = false;
    }
    /**
     * @protected
     */
    lock() { this._locked = true; }
    /**
     * @protected
     */
    unlock() { this._locked = false; }
    /**
     * @protected
     */
    updateDirectly() { this._$subject.next(); }
    /**
     * Сброс всех значений на значения по-умолчанию.
     * Все обновления проходят в "тихую", для этого конечным действием
     * вызывается <code>this.updateDirectly()</code>, чтобы уполномочить
     * хранилище об изменении.
     */
    setDefault(silentOp) {
        this.lock();
        // сбрасываются дочерние хранилища
        if (this._$children) {
            this._$children.forEach(child => {
                child.setDefault();
            });
        }
        if (silentOp)
            silentOp();
        this.unlock();
        this.updateDirectly();
    }
    /**
     * Устанавливает сущности хранилища
     * @param {Array<StoreEntity<any>>} data
     */
    setEntities(data) {
        if (this._$entities)
            throw new Error('Сущности уже были привязаны к хранилещу');
        if (!data)
            return;
        this._$entities = data;
        this.subscribeToEntities();
    }
    /**
     * Устанавливает дочерние хранилища
     * @param {Array<BaseStore>} data
     */
    setChildren(data) {
        if (this._$children)
            throw new Error('Дочерние хранилеща уже были связанны с родительским');
        if (!data)
            return;
        this._$children = data;
        this.bindChildren();
    }
    /**
     * Связывает дочерние хранилища
     */
    bindChildren() {
        this._$childrenSubscriptions = [];
        this._$children.forEach(child => {
            this._$childrenSubscriptions.push(child.subscribe((value) => {
                if (!this._locked)
                    this._$subject.next(value);
            }));
        });
    }
    /**
     * Устанавливаются подписки на сущности хранилища
     */
    subscribeToEntities() {
        this._$entities.forEach(entity => {
            entity.subscribe((value) => {
                this._$subject.next();
            });
        });
    }
    /**
     * Очистка сущностей
     */
    disposeEntities() {
        if (!this._$entities)
            return;
        this._$entities.forEach(entity => {
            entity.dispose();
        });
    }
    /**
     * Сносит подписки на дочерние хранилища
     */
    disposeChildren() {
        if (!this._$childrenSubscriptions)
            return;
        this._$childrenSubscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
        this.removeChildrenSubscriptions();
    }
    /**
     * Сносит подписки на дочерние хранилища
     */
    removeChildrenSubscriptions() {
        if (!this._$children)
            return;
        this._$children.forEach(child => {
            child.dispose();
        });
    }
    /**
     * Подписаться на изменение общего состояния хранилища
     * @param {(value: any) => void} next
     * @returns {Subscription}
     */
    subscribe(next) {
        return this._$subject.subscribe(next);
    }
    /**
     * Очистка объекта хранилища.
     * Вызывать перед полным удалением
     */
    dispose() {
        this.disposeEntities();
        this.disposeChildren();
        this._$subject = null;
    }
}
exports.BaseStore = BaseStore;

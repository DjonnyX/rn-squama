<<<<<<< HEAD:src/core/store/base-store.js
import { Subject } from "rxjs";
export class BaseStore {
    constructor() {
        this._$subject = new Subject();
        this._locked = false;
    }
    lock() { this._locked = true; }
    unlock() { this._locked = false; }
    updateDirectly() { this._$subject.next(); }
    setDefault(silentOp) {
        this.lock();
=======
import { StoreEntity } from "./store-entity";
import { Subject, Subscription } from "rxjs";

/**
 * Концепция дата-хранилища.
 * Можно подписываться на изменения его сущностей, а также на изменение хранилища в целом.
 * К хранилищу можно привязать дочерние хранилища, тем самым организуя древовидную систему дата-хранилищ.
 */
export class BaseStore {

    private _$subject = new Subject<any>();

    private _$entities: Array<StoreEntity<any>>;

    private _$children: Array<BaseStore>;

    private _$childrenSubscriptions: Array<Subscription>;

    private _locked: boolean = false;

    constructor() { }

    protected lock(): void { this._locked = true; }

    protected unlock(): void { this._locked = false; }

    protected updateDirectly(): void { this._$subject.next(); }

    /**
     * Сброс всех значений на значения по-умолчанию.
     * Все обновления проходят в "тихую", для этого конечным действием
     * вызывается <code>this.updateDirectly()</code>, чтобы уполномочить
     * хранилище об изменении.
     */
    public setDefault(silentOp?: () => void) {
        this.lock();

        // сбрасываются дочерние хранилища
>>>>>>> master:src/core/store/base-store.ts
        if (this._$children) {
            this._$children.forEach(child => {
                child.setDefault();
            });
        }
        if (silentOp) silentOp();

        this.unlock();
        this.updateDirectly();
    }
<<<<<<< HEAD:src/core/store/base-store.js
    setEntities(data) {
=======

    /**
     * Устанавливает сущности хранилища
     */
    protected setEntities(data: Array<StoreEntity<any>>): void {
>>>>>>> master:src/core/store/base-store.ts
        if (this._$entities)
            throw new Error('Сущности уже были привязаны к хранилещу');

        if (!data) return;

        this._$entities = data;

        this.subscribeToEntities();
    }
<<<<<<< HEAD:src/core/store/base-store.js
    setChildren(data) {
=======

    /**
     * Устанавливает дочерние хранилища
     */
    protected setChildren(data: Array<BaseStore>): void {
>>>>>>> master:src/core/store/base-store.ts
        if (this._$children)
            throw new Error('Дочерние хранилеща уже были связанны с родительским');

        if (!data) return;

        this._$children = data;

        this.bindChildren();
    }
<<<<<<< HEAD:src/core/store/base-store.js
    bindChildren() {
=======

    /**
     * Связывает дочерние хранилища
     */
    private bindChildren(): void {
>>>>>>> master:src/core/store/base-store.ts
        this._$childrenSubscriptions = [];

        this._$children.forEach(child => {
            this._$childrenSubscriptions.push(
                child.subscribe((value) => {
                    if (!this._locked) this._$subject.next(value);
                })
            );
        });
    }
<<<<<<< HEAD:src/core/store/base-store.js
    subscribeToEntities() {
=======

    /**
     * Устанавливаются подписки на сущности хранилища
     */
    private subscribeToEntities(): void {

>>>>>>> master:src/core/store/base-store.ts
        this._$entities.forEach(entity => {
            entity.subscribe(_ => {
                this._$subject.next();
            })
        });
    }
<<<<<<< HEAD:src/core/store/base-store.js
    disposeEntities() {
        if (!this._$entities)
            return;
=======

    /**
     * Очистка сущностей
     */
    private disposeEntities(): void {
        if (!this._$entities) return;

>>>>>>> master:src/core/store/base-store.ts
        this._$entities.forEach(entity => {
            entity.dispose();
        });
    }
<<<<<<< HEAD:src/core/store/base-store.js
    disposeChildren() {
        if (!this._$childrenSubscriptions)
            return;
=======

    /**
     * Сносит подписки на дочерние хранилища
     */
    private disposeChildren(): void {
        if (!this._$childrenSubscriptions) return;

>>>>>>> master:src/core/store/base-store.ts
        this._$childrenSubscriptions.forEach(subscription => {
            subscription.unsubscribe();
        })

        this.removeChildrenSubscriptions();
    }
<<<<<<< HEAD:src/core/store/base-store.js
    removeChildrenSubscriptions() {
        if (!this._$children)
            return;
=======

    /**
     * Сносит подписки на дочерние хранилища
     */
    private removeChildrenSubscriptions(): void {
        if (!this._$children) return;

>>>>>>> master:src/core/store/base-store.ts
        this._$children.forEach(child => {
            child.dispose();
        })
    }
<<<<<<< HEAD:src/core/store/base-store.js
    subscribe(next) {
        return this._$subject.subscribe(next);
    }
    dispose() {
=======

    /**
     * Подписаться на изменение общего состояния хранилища
     */
    public subscribe(next?: (value: any) => void): Subscription {
        return this._$subject.subscribe(next);
    }

    /**
     * Очистка объекта хранилища.
     * Вызывать перед полным удалением
     */
    public dispose(): void {
>>>>>>> master:src/core/store/base-store.ts
        this.disposeEntities();
        this.disposeChildren();
        this._$subject = null;
    }
<<<<<<< HEAD:src/core/store/base-store.js
}
=======
}
>>>>>>> master:src/core/store/base-store.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Базовый контроллер компонента.
 * По сути это гипертрофированный "reducer"
 * @generic
 * @author Evgeny Grebennikov
 */
class Controller {
    /**
     * @constructor
     * @param {T} _context
     */
    constructor(_context) {
        // начальная инициализация сотояния
        // (this._context as any).state = {};
        this._context = _context;
        this.create();
    }
    /**
     * Тут создаются все подписчики и т.п.
     * @protected
     */
    create() { }
    /**
     * Вызывается, когда компонент смонтирован
     */
    mount() { }
    unmount() { }
    /**
     * Инициализация состояния
     * @param {any} value
     */
    initState(value) {
        this._context.state = (Object.assign({}, this._context.state, {}, value));
    }
    /**
     * Задает новое состояние компонента
     * @param {any} value
     */
    mergeState(value) {
        const state = this._context.state;
        this._context.state = Object.assign({}, state, value);
        this._context.setState(this._context.state);
    }
    /**
     * Очистка объекта
     * Вызывать перед удалением
     */
    dispose() {
        this._context = null;
    }
}
exports.Controller = Controller;
/**
 * @decorator
 * @param constructor
 */
function classDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this._context = "controller";
        }
    };
}
exports.ControllerDecorator = classDecorator;

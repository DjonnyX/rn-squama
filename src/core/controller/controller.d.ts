/**
 * Базовый контроллер компонента.
 * По сути это гипертрофированный "reducer"
 * @generic
 * @author Evgeny Grebennikov
 */
export declare class Controller<T> {
    protected _context: T;
    /**
     * @constructor
     * @param {T} _context
     */
    constructor(_context: T);
    /**
     * Тут создаются все подписчики и т.п.
     * @protected
     */
    protected create(): void;
    /**
     * Вызывается, когда компонент смонтирован
     */
    mount(): void;
    unmount(): void;
    /**
     * Инициализация состояния
     * @param {any} value
     */
    protected initState(value: any): void;
    /**
     * Задает новое состояние компонента
     * @param {any} value
     */
    protected mergeState(value: any): void;
    /**
     * Очистка объекта
     * Вызывать перед удалением
     */
    dispose(): void;
}
/**
 * @decorator
 * @param constructor
 */
declare function classDecorator<T extends {
    new (...args: any[]): {};
}>(constructor: T): {
    new (...args: {}): {
        _context: string;
    };
} & T;
export declare const ControllerDecorator: typeof classDecorator;
export {};

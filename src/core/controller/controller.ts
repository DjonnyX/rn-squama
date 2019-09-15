/**
 * Базовый контроллер компонента.
 */
export class Controller<T> {

    /**
     * @constructor
     * @param {T} _context
     */
    constructor(protected _context: T) {
         // начальная инициализация сотояния
        this.create();
    }

    /**
     * Тут создаются все подписчики и т.п.
     */
    protected create(): void {}

    /**
     * Вызывается, когда компонент смонтирован
     */
    public mount(): void {}

    public unmount(): void {}

    /**
     * Инициализация состояния
     */
    protected initState(value: any): void {
        (this._context as any).state = ({...(this._context as any).state, ...{}, ...value});
    }

    /**
     * Задает новое состояние компонента
     */
    protected mergeState(value: any): void {
        const state = (this._context as any).state;
        (this._context as any).state = {...state, ...value};
        (this._context as any).setState((this._context as any).state);
    }

    /**
     * Очистка объекта
     * Вызывать перед удалением
     */
    public dispose(): void {
        this._context = null;
    }
}

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        _context = "controller"
    }
}

export const ControllerDecorator = classDecorator;
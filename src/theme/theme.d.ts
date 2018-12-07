/**
 * Тема оформления
 * @author Evgeny Grebennikov
 */
export declare class Theme {
    /**
     * Возвращает стиль заданный псевдонимом
     * @param {string | any} name
     * @returns {any}
     */
    static getStyle(name: string | any): any;
    /**
     * @constructor
     */
    constructor();
    /**
     * Пребилд стилей для состояний кнопок
     * @protected
     */
    protected buildButtonStates(): void;
    /**
     * Пребилд стилей
     * @protected
     */
    protected buildStyles(): void;
}

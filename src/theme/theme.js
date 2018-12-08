import { StyleProvider } from './provider';
/**
 * Тема оформления
 * @author Evgeny Grebennikov
 */
export class Theme {
    /**
     * Возвращает стиль заданный псевдонимом
     * @param {string | any} name
     * @returns {any}
     */
    static getStyle(name) {
        return StyleProvider.get(name);
    }
    /**
     * @constructor
     */
    constructor() {
        this.buildButtonStates();
        this.buildStyles();
    }
    /**
     * Пребилд стилей для состояний кнопок
     * @protected
     */
    buildButtonStates() { }
    /**
     * Пребилд стилей
     * @protected
     */
    buildStyles() { }
}

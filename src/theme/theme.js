"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Тема оформления
 * @author Evgeny Grebennikov
 */
class Theme {
    /**
     * @constructor
     */
    constructor() {
        this.buildStyles();
    }
    /**
     * Пребилд стилей
     * @protected
     */
    buildStyles() { }
}
Theme.defaultStyleAlias = "default";
exports.Theme = Theme;

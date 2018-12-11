"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Провайдер стилей
 * Через него добавляются/удаляются/запрашиваются новые стили в тему
 * @singleton
 * @author Evgeny Grebennikov
 */
class StyleProvider {
    static get(alias, name) {
        return StyleProvider._styleNames.get(`${alias}:${name}`);
    }
    static default(controlClass, style) {
        StyleProvider._styleNames.set(`${(controlClass).alias}:default`, style);
    }
    static getDefault(alias) {
        return StyleProvider._styleNames.get(`${alias}:default`);
    }
    static add(controlClass, name, style) {
        StyleProvider._styleNames.set(StyleProvider.formatName(controlClass, name), style);
    }
    static remove(controlClass, name) {
        StyleProvider._styleNames.delete(StyleProvider.formatName(controlClass, name));
    }
    static formatName(controlClass, name) {
        return `${(controlClass).alias}:${name}`;
    }
}
StyleProvider._styleNames = new Map();
exports.StyleProvider = StyleProvider;

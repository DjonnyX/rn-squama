/**
 * Провайдер стилей
 * Через него добавляются/удаляются/запрашиваются новые стили в тему
 * @singleton
 * @author Evgeny Grebennikov
 */
export class StyleProvider {
    static get(name) {
        return StyleProvider._styleNames.get(name);
    }
    static add(name, style) {
        StyleProvider._styleNames.set(name, style);
    }
    static remove(name) {
        StyleProvider._styleNames.delete(name);
    }
}
StyleProvider._styleNames = new Map();

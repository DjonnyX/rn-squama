/**
 * Провайдер стилей
 * Через него добавляются/удаляются/запрашиваются новые стили в тему
 * @singleton
 * @author Evgeny Grebennikov
 */
export declare class StyleProvider {
    private static _styleNames;
    static get(name: string | any): any;
    static add(name: string | any, style: any): void;
    static remove(name: string | any): void;
}

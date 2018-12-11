/**
 * Провайдер стилей
 * Через него добавляются/удаляются/запрашиваются новые стили в тему
 * @singleton
 * @author Evgeny Grebennikov
 */
export declare class StyleProvider {
    private static _styleNames;
    static get(alias: string, name: string): any;
    static default(controlClass: IControlClass, style: any): void;
    static getDefault(alias: string): any;
    static add(controlClass: IControlClass, name: string, style: any): void;
    static remove(controlClass: IControlClass, name: string): void;
    private static formatName;
}
export interface IControlClass {
    alias: string;
}

/// <reference types="react" />
import { Subject } from "rxjs";
import { PopupEventTypes } from "./popup-event-types";
/**
 * Интерфейс событий попап-менагера
 */
interface IPopupManagerEvent {
    type: PopupEventTypes;
    outlet: string;
    renderers: Array<IPopupData>;
}
/**
 * @interface
 */
export interface IPopupData {
    id?: string;
    outlet: string;
    factory: (p: any, i: string | number) => JSX.Element;
}
/**
 * Менеджер попапов
 * @singleton
 */
declare class PopupManager {
    /**
     * Текущий идентификатор попапа
     */
    private _currentPopupId;
    /**
     * @private
     */
    private _events;
    /**
     * @getter
     */
    readonly events: Subject<IPopupManagerEvent>;
    /**
     * Мэп всех текущих попап-компонентов по монтажным областям
     * @private
     */
    private _components;
    /**
     * @private
     */
    private _componentsById;
    /**
     * Херачит компонент в монтажную область с заданным именем
     * Если монтажная область не задана, то нихрена не произойдёт!
     * Возвращает id
     * @param {IPopupData} data
     * @returns {string}
     */
    show(data: IPopupData): string;
    /**
     * Удаление компонента по заданному id
     * @param {string} id
     */
    hide(id: string): void;
    /**
     * @param {IPopupData} data
     * @returns {Array<IPopupData>}
     */
    private addComponent;
    /**
     * @param {IPopupData} data
     * @returns {Array<IPopupData>}
     */
    private removeComponent;
}
/**
 * Менеджер всплывающих объектов (попапов)
 */
export declare const popupManager: PopupManager;
export {};

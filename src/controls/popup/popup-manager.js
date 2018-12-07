import { Subject } from "rxjs";
import { PopupEventTypes } from "./popup-event-types";
/**
 * Менеджер попапов
 * @singleton
 */
class PopupManager {
    constructor() {
        /**
         * Текущий идентификатор попапа
         */
        this._currentPopupId = 0;
        /**
         * @private
         */
        this._events = new Subject();
        /**
         * Мэп всех текущих попап-компонентов по монтажным областям
         * @private
         */
        this._components = new Map();
        /**
         * @private
         */
        this._componentsById = new Map();
    }
    /**
     * @getter
     */
    get events() { return this._events; }
    /**
     * Херачит компонент в монтажную область с заданным именем
     * Если монтажная область не задана, то нихрена не произойдёт!
     * Возвращает id
     * @param {IPopupData} data
     * @returns {string}
     */
    show(data) {
        const renderers = this.addComponent(data);
        this.events.next({ type: PopupEventTypes.SHOW, outlet: data.outlet, renderers: renderers });
        return String(this._currentPopupId);
    }
    /**
     * Удаление компонента по заданному id
     * @param {string} id
     */
    hide(id) {
        const data = this._componentsById.get(id);
        if (!data)
            return;
        const renderers = this.removeComponent(data);
        this.events.next({ type: PopupEventTypes.HIDE, outlet: data.outlet, renderers: renderers });
    }
    /**
     * @param {IPopupData} data
     * @returns {Array<IPopupData>}
     */
    addComponent(data) {
        this._currentPopupId++;
        // Проверка на переполнение
        if (this._currentPopupId === Number.MAX_VALUE)
            this._currentPopupId = 0;
        data.id = String(this._currentPopupId);
        if (!this._components.has(data.outlet))
            this._components.set(data.outlet, []);
        this._componentsById.set(data.id, data);
        const stack = this._components.get(data.outlet);
        stack.push(data);
        return stack;
    }
    /**
     * @param {IPopupData} data
     * @returns {Array<IPopupData>}
     */
    removeComponent(data) {
        let stack;
        if (this._components.has(data.outlet)) {
            stack = this._components.get(data.outlet);
            const index = stack.indexOf(data);
            if (index > -1)
                stack.splice(index, 1);
        }
        if (this._componentsById.has(data.id))
            this._componentsById.delete(data.id);
        return stack;
    }
}
/**
 * Менеджер всплывающих объектов (попапов)
 */
export const popupManager = new PopupManager();

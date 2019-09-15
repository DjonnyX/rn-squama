import { Subject } from "rxjs";
import { PopupEventTypes } from "./popup-event-types";

interface IPopupManagerEvent {
    type: PopupEventTypes;
    outlet: string;
    renderers: Array<IPopupData>;
}

export interface IPopupData {
    id?: string;
    outlet: string;
    factory: (p: any, i: string | number) => JSX.Element;
}

class PopupManager {

    private _currentPopupId: number = 0;

    private _events = new Subject<IPopupManagerEvent>();

    public get events(): Subject<IPopupManagerEvent> { return this._events; }

    private _components: Map<string, Array<IPopupData>> = new Map();

    private _componentsById: Map<string, IPopupData> = new Map();

    public show(data: IPopupData): string {
        const renderers = this.addComponent(data);
        this.events.next({ type: PopupEventTypes.SHOW, outlet: data.outlet, renderers: renderers });
        return String(this._currentPopupId);
    }

    public hide(id: string): void {
        const data: IPopupData = this._componentsById.get(id);
        if (!data) return;

        const renderers = this.removeComponent(data);
        this.events.next({ type: PopupEventTypes.HIDE, outlet: data.outlet, renderers: renderers });
    }

    private addComponent(data: IPopupData): Array<IPopupData> {
        this._currentPopupId++;
        if (this._currentPopupId === Number.MAX_VALUE) this._currentPopupId = 0;

        data.id = String(this._currentPopupId);

        if (!this._components.has(data.outlet)) this._components.set(data.outlet, []);
        this._componentsById.set(data.id, data);

        const stack = this._components.get(data.outlet);
        stack.push(data);

        return stack;
    }

    private removeComponent(data: IPopupData): Array<IPopupData> {
        let stack: Array<IPopupData>;
        if (this._components.has(data.outlet)) {

            stack = this._components.get(data.outlet);
            const index = stack.indexOf(data);

            if (index > -1) stack.splice(index, 1);
        }
        if (this._componentsById.has(data.id)) this._componentsById.delete(data.id);
        return stack;
    }
}

export const popupManager = new PopupManager();
import React from "react";
import { IPopupData } from "./popup-manager";
/**
 * @react-props
 */
export interface IPopupOutletProps {
    name?: string;
    onActive?(): void;
    onDeactive?(): void;
}
/**
 * @react-state
 */
interface IPopupOutletState {
    renderers: Array<IPopupData>;
}
/**
 * Точка монтажа попап-элементов
 * @final
 */
export declare class PopupOutlet extends React.Component<IPopupOutletProps, IPopupOutletState> {
    /**
     * Дефолтовое имя оутлета
     * @static
     */
    static defaultName: string;
    /**
     * @private
     */
    private _name;
    /**
     * имя оутлета
     * @getter
     */
    readonly name: string;
    /**
     * @private
     */
    private _subscription;
    /**
     * @constructor
     * @param {IPopupOutletProps} props
     */
    constructor(props: IPopupOutletProps);
    componentWillMount(): void;
    /**
     * @react
     */
    componentWillUnmount(): void;
    /**
     * @react
     */
    render(): JSX.Element;
}
export {};

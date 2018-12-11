import React from "react";
import { ViewStyle } from "react-native";
/**
 * стили
 */
export interface IAlertStyles {
    overlayTheme?: string;
    footerStyle?: ViewStyle;
    alertWidth?: number;
    alertHeight?: number;
}
/**
 * @react-props
 */
export interface IAlertProps extends IAlertInputProps {
    id?: string;
    key?: string | number;
}
export interface IAlertInputProps {
    style?: IAlertStyles;
    title?: string;
    message?: string;
    buttonCancelLabel?: string;
    buttonSuccessLabel?: string;
    isModal?: boolean;
    onClose?(): void;
    onSuccess?(data?: any): void;
    onCancel?(data?: any): void;
}
/**
 * @class
 * @author Evgeny Grebennikov
 */
export declare class Alert extends React.Component<IAlertProps> {
    /**
     * Отображает alert с заданными параметрами
     * @param {IAlertInputProps} data
     * @returns {string}
     */
    static show(data: IAlertInputProps): string;
    /**
     * стили
     */
    private _styles;
    /**
     * @constructor
     * @param {IAlertProps} props
     */
    constructor(props: IAlertProps);
    /**
     * @react
     * @param {IAlertProps} props
     */
    componentWillReceiveProps(props: IAlertProps): void;
    /**
     * Обновление стилей
     * @protected
     * @param {IAlertProps} props
     */
    protected updateStyles(props: IAlertProps): void;
    /**
     * @protected
     * @param {any} data
     */
    protected onSuccess(data: any): void;
    /**
     * @protected
     */
    protected onClose(): void;
    /**
     * Контент по-умолчанию
     * @returns {JSX.Element}
     */
    protected bodyRenderer(): JSX.Element;
    /**
     * @react
     */
    render(): JSX.Element;
}

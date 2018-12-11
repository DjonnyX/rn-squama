import React from "react";
import { ViewStyle } from "react-native";
/**
 * стили
 */
export interface IOverlayStyle {
    overlayStyle?: ViewStyle;
    viewStyle?: ViewStyle;
}
/**
 * @react-props
 */
export interface IOverlayProps {
    id?: string;
    isModal?: boolean;
    theme?: string;
    style?: IOverlayStyle;
    content?: JSX.Element | string;
    onClose?(id: string): void;
}
/**
 * Базовый попап-элемент
 * @author Evgeny Grebennikov
 */
export declare class Overlay extends React.PureComponent<IOverlayProps> {
    static alias: string;
    /**
     * стили
     */
    protected _styles: IOverlayStyle;
    /**
     * @constructor
     * @param {IOverlayProps} props
     */
    constructor(props: IOverlayProps);
    /**
     * @react
     * @param {IOverlayProps} props
     */
    componentWillReceiveProps(props: IOverlayProps): void;
    /**
     * Закрывает попап
     */
    close(): void;
    /**
     * Обновление стилей
     * @param {IOverlayProps} props
     */
    protected updateStyles(props: IOverlayProps): void;
    /**
     * @param {GestureResponderEvent} e
     */
    private outsidePressHandler;
    /**
     * @react
     */
    render(): JSX.Element;
}

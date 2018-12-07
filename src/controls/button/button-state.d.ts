import React from "react";
import { ViewStyle, TextStyle } from "react-native";
import { ButtonStateThemeAlias } from "../../theme";
/**
 * стили
 */
export interface IButtonStateStyle {
    containerViewStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    touchableStyle?: any;
}
/**
 * @react-props
 */
export interface IButtonStateProps {
    theme?: ButtonStateThemeAlias;
    style?: IButtonStateStyle;
    text?: string;
    onPress?(): void;
    onLongPress?(): void;
    children?: JSX.Element | string;
}
/**
 * Базовая кнопка с одним состоянием
 * @class
 * @author Evgeny Grebennikov
 */
export declare class ButtonState extends React.PureComponent<IButtonStateProps> {
    /**
     * стили
     */
    protected _styles: IButtonStateStyle;
    /**
     * @constructor
     * @param {IButtonStateProps} props
     */
    constructor(props: IButtonStateProps);
    /**
     * @react
     * @param {IButtonStateProps} props
     */
    componentWillReceiveProps(props: IButtonStateProps): void;
    /**
     * @protected
     * @param {IButtonStateProps} props
     */
    protected updateStyles(props: IButtonStateProps): void;
    /**
     * @override
     * @returns {JSX.Element}
     */
    render(): JSX.Element;
    /**
     * @react
     */
    componentWillUnmount(): void;
    /**
     * dispose
     */
    dispose(): void;
}

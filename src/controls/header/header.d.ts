import React from "react";
import { ViewStyle } from "react-native";
/**
 * @interface
 */
export interface IHeaderStyle {
    containerViewStyle?: ViewStyle;
    leftContainerStyle?: ViewStyle;
    centerContainerStyle?: ViewStyle;
    rightContainerStyle?: ViewStyle;
}
/**
 * @interface
 */
export interface IHeaderProps {
    theme?: string;
    style?: IHeaderStyle;
    leftItems?: JSX.Element | string;
    centerItems?: JSX.Element | string;
    rightItems?: JSX.Element | string;
}
/**
 * Базовая кнопка
 * @author Evgeny Grebennikov
 */
export declare class Header extends React.PureComponent<IHeaderProps> {
    static alias: string;
    /**
     * стили
     */
    private _styles;
    /**
     * @constructor
     * @param {IHeaderProps} props
     */
    constructor(props: IHeaderProps);
    /**
     * @react
     * @param {IHeaderProps} props
     */
    componentWillReceiveProps(props: IHeaderProps): void;
    /**
     * @protected
     * @param {IHeaderProps} props
     */
    protected updateStyles(props: IHeaderProps): void;
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
     * очистка объекта
     * вызывать перед удалением
     */
    dispose(): void;
}

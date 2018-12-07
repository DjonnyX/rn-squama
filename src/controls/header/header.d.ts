import React from "react";
import { ViewStyle } from "react-native";
import { HeaderThemeAlias } from "../../theme";
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
    theme?: HeaderThemeAlias;
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

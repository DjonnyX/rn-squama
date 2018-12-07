import React from "react";
import { ViewStyle } from "react-native";
import { ScreenThemeAlias } from "../../theme";
/**
 * стили
 */
export interface IScreenStyle {
    containerStyle: ViewStyle;
    contentContainerStyle: ViewStyle;
}
/**
 * @react-props
 */
export interface IScreenProps {
    content?: JSX.Element;
    outlet?: string;
    style?: IScreenStyle;
    theme?: ScreenThemeAlias;
}
/**
 * @react-state
 */
interface IScreenState {
    isPopupActive: boolean;
}
/**
 * Скрин с монтажной областью для попапов
 * @author Evgeny Grebennikov
 */
export declare class Screen extends React.Component<IScreenProps, IScreenState> {
    /**
     * стили
     */
    protected _styles: IScreenStyle;
    /**
     * @constructor
     * @param props
     */
    constructor(props: IScreenProps);
    /**
     * @protected
     * @param {boolean} val
     */
    protected activeOutlet(val: boolean): void;
    /**
     * @react
     * @param {IScreenProps} props
     */
    componentWillReceiveProps(props: IScreenProps): void;
    /**
     * @protected
     * @param {IScreenProps} props
     */
    protected updateStyles(props: IScreenProps): void;
    /**
     * @react
     * @returns {JSX.Element}
     */
    render(): JSX.Element;
}
export {};

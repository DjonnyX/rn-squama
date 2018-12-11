import React from "react";
import { ViewStyle } from "react-native";
/**
 * стили
 */
export interface IHeadingViewStyle {
    headerStyleName?: string;
    viewStyle?: ViewStyle;
}
/**
 * @react-props
 */
export interface IHeadingViewProps {
    theme?: string;
    style?: IHeadingViewStyle;
    content?: JSX.Element;
    headerLeftItems?: JSX.Element | string;
    headerCenterItems?: JSX.Element | string;
    headerRightItems?: JSX.Element | string;
}
/**
 * Вьюха с заголовком
 * @author Evgeny Grebennikov
 */
export declare class HeadingView extends React.PureComponent<IHeadingViewProps> {
    static alias: string;
    /**
     * стили
     */
    protected _styles: IHeadingViewStyle;
    /**
     * @constructor
     * @param {IHeadingViewProps} props
     */
    constructor(props: IHeadingViewProps);
    /**
     * @react
     * @param {IHeadingViewProps} props
     */
    componentWillReceiveProps(props: IHeadingViewProps): void;
    /**
     * @protected
     * @param {IHeadingViewProps} props
     */
    protected updateStyles(props: IHeadingViewProps): void;
    /**
     * @react
     */
    render(): JSX.Element;
}

import React from "react";
/**
 * стили
 */
export interface IButtonStyle {
    normalStyleName?: string;
    disabledStyleName?: string;
}
/**
 * @react-props
 */
export interface IButtonProps {
    theme?: string;
    style?: IButtonStyle;
    text?: string;
    disabled?: boolean;
    onPress?(): void;
    onLongPress?(): void;
    children?: JSX.Element | string;
}
/**
 * Базовая кнопка
 * @class
 * @author Evgeny Grebennikov
 */
export declare class Button extends React.PureComponent<IButtonProps> {
    static alias: string;
    /**
     * стили
     */
    protected _styles: IButtonStyle;
    /**
     * @constructor
     * @param {IButtonProps} props
     */
    constructor(props: IButtonProps);
    /**
     * @react
     * @param {IButtonProps} props
     */
    componentWillReceiveProps(props: IButtonProps): void;
    /**
     * Обновление стилей
     * @param {IButtonProps} props
     */
    protected updateStyles(props: IButtonProps): void;
    /**
     * @protected
     * @param {boolean} disabled
     * @returns {string}
     */
    protected getStyleNameForState(disabled: boolean): string;
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

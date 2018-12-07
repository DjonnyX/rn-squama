import React from "react";
import { ButtonThemeAlias, ButtonStateThemeAlias } from "../../theme";
/**
 * стили
 */
export interface IButtonStyle {
    normalStyleName?: ButtonStateThemeAlias;
    disabledStyleName?: ButtonStateThemeAlias;
}
/**
 * @react-props
 */
export interface IButtonProps {
    theme?: ButtonThemeAlias;
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
     * @returns {ButtonStateThemeAlias}
     */
    protected getStyleNameForState(disabled: boolean): ButtonStateThemeAlias;
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

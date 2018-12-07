import React from "react";
import { ToggleButtonThemeAlias, ButtonStateThemeAlias } from "../../theme";
/**
 * Интерфейс стилей
 */
export interface IToggleButtonStyle {
    normalStyleName?: ButtonStateThemeAlias;
    checkedStyleName?: ButtonStateThemeAlias;
    disabledStyleName?: ButtonStateThemeAlias;
}
/**
 * @react-props
 */
export interface IToggleButtonProps {
    theme?: ToggleButtonThemeAlias;
    style?: IToggleButtonStyle;
    text?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?(checked: boolean): void;
    children?: JSX.Element | string;
}
/**
 * @react-state
 */
interface IToggleButtonState {
    checked?: boolean;
    disabled?: boolean;
}
/**
 * @author Evgeny Grebennikov
 */
export declare class ToggleButton extends React.Component<IToggleButtonProps, IToggleButtonState> {
    /**
     * стили
     */
    protected _styles: IToggleButtonStyle;
    /**
     * @constructor
     * @param {IToggleButtonProps} props
     */
    constructor(props: IToggleButtonProps);
    /**
     * @react
     * @param {IToggleButtonProps} props
     */
    componentWillReceiveProps(props: IToggleButtonProps): void;
    /**
     * Обновление стилей.
     * Не учитываются сигментированные изменения в теме (для оптимизации)
     * @protected
     * @param {IToggleButtonProps} props
     */
    protected updateStyles(props: IToggleButtonProps): void;
    /**
     * @protected
     * @param {boolean} checked
     * @param {boolean} disabled
     * @returns {ButtonStateThemeAlias}
     */
    protected getStyleNameForState(checked: boolean, disabled: boolean): ButtonStateThemeAlias;
    /**
     * @react
     */
    render(): JSX.Element;
    /**
     * @protected
     */
    protected baseButtonPressHandler(): void;
    /**
     *
     * @param { boolean } value
     */
    private dispatchChanges;
    /**
     * @override
     */
    componentWillUnmount(): void;
    /**
     * dispose
     */
    dispose(): void;
}
export {};

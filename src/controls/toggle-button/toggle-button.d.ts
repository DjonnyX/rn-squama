import React from "react";
/**
 * Интерфейс стилей
 */
export interface IToggleButtonStyle {
    normalStyleName?: string;
    checkedStyleName?: string;
    disabledStyleName?: string;
}
/**
 * @react-props
 */
export interface IToggleButtonProps {
    theme?: string;
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
    static alias: string;
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
     * @returns {string}
     */
    protected getStyleNameForState(checked: boolean, disabled: boolean): string;
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

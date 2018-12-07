import React from "react";
import { ViewStyle } from "react-native";
import { NumericStepperThemeAlias, ButtonThemeAlias } from "../../theme";
/**
 * @react-props
 */
export interface INumericStepperProps extends INumericStepperInputData {
    style?: INumericStepperStyles;
    theme?: NumericStepperThemeAlias;
    onIncrement?(value: number): void;
    onDecrement?(value: number): void;
    onIndicator?(): void;
    incrementText?: string;
    decrementText?: string;
    formatFunction?(value: number): string;
}
/**
 * @react-state
 */
export interface INumericStepperState extends INumericStepperInputData {
}
/**
 * интерфейс стилей
 */
export interface INumericStepperStyles {
    contentViewStyle?: ViewStyle;
    contentViewActiveStyle?: ViewStyle;
    contentViewSelectedStyle?: ViewStyle;
    decrementTheme?: ButtonThemeAlias;
    decrementActiveTheme?: ButtonThemeAlias;
    decrementSelectedTheme?: ButtonThemeAlias;
    incrementTheme?: ButtonThemeAlias;
    incrementActiveTheme?: ButtonThemeAlias;
    incrementSelectedTheme?: ButtonThemeAlias;
    indicatorTheme?: ButtonThemeAlias;
    indicatorActiveTheme?: ButtonThemeAlias;
    indicatorSelectedTheme?: ButtonThemeAlias;
}
/**
 * @interface
 */
interface INumericStepperInputData {
    step?: number;
    disabled?: boolean;
    minValue?: number;
    maxValue?: number;
    value?: number;
}
/**
 * @interface
 */
interface INumericStepperStyle {
    contentViewStyle?: ViewStyle;
    incrementTheme?: ButtonThemeAlias;
    decrementTheme?: ButtonThemeAlias;
    indicatorTheme?: ButtonThemeAlias;
}
/**
 * @class
 * @author Evgeny Grebennikov
 */
export declare class NumericStepper extends React.Component<INumericStepperProps, INumericStepperState> {
    /**
     * минимальное значение
     */
    private static MIN_VALUE;
    /**
     * Максимальное значение
     */
    private static MAX_VALUE;
    /**
     * стили
     */
    protected _styles: INumericStepperStyles;
    /**
     * @getter
     * @type {(v: number) => string}
     */
    protected readonly formatFunction: (v: number) => string;
    /**
     * @constructor
     * @param {INumericStepperProps} props
     */
    constructor(props: INumericStepperProps);
    /**
     * @react
     * @param {INumericStepperProps} props
     */
    componentWillReceiveProps(props: INumericStepperProps): void;
    /**
     * @protected
     * @param {number} value
     * @returns {string}
     */
    protected defaultFormatFunction(value: number): string;
    /**
     * @protected
     */
    protected decrementHandler(): void;
    /**
     * @protected
     */
    protected incrementHandler(): void;
    /**
     * @protected
     */
    protected indicatorPressHandler(): void;
    /**
     * Обновление стилей
     * @param {INumericStepperProps} props
     */
    protected updateStyles(props: INumericStepperProps): void;
    /**
     * @protected
     * @returns {INumericStepperStyle}
     */
    protected getStyleForState(): INumericStepperStyle;
    /**
     * @react
     */
    render(): JSX.Element;
    /**
     * @react
     */
    componentWillUnmount(): void;
    /**
     * @override
     */
    dispose(): void;
}
export {};

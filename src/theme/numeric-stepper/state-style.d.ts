import { TextStyle, ViewStyle } from "react-native";
import { IButtonStateStyle } from "../../controls/button";
/**
 * @author Evgeny Grebennikov
 */
export declare class NumericStepperStateStyles {
    /**
     * минимальная ширина индикатора
     */
    static $INDICATOR_MIN_WIDTH: number;
    /** Первичный стиль пикера */
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonContainerViewStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseButtonTextStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonContainerViewDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonButtonDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonTextDisabledStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static navButtons(): ViewStyle;
    /**
     * Первичный стиль базовой :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIncrementNormal(): IButtonStateStyle;
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIncrementDisabled(): IButtonStateStyle;
    /**
     * Первичный стиль базовой :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDecrementNormal(): IButtonStateStyle;
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDecrementDisabled(): IButtonStateStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    private static primaryBaseIndicatorButtonStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    private static primaryBaseIndicatorTextStyle;
    /**
     * Первичный стиль базовой :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIndicatorNormal(): IButtonStateStyle;
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIndicatorDisabled(): IButtonStateStyle;
}

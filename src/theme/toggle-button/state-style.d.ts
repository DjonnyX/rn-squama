import { TextStyle, ViewStyle } from "react-native";
import { IButtonStateStyle } from "../../controls/button";
/**
 * стили
 * @author Evgeny Grebennikov
 */
export declare class ToggleButtonStateStyles {
    /** Первичный стиль переключателя */
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonContainerViewStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonButtonStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseToggleButtonTextStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonContainerViewDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonButtonDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseToggleButtonTextDisabledStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonContainerViewCheckedStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonButtonCheckedStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseToggleButtonTextCheckedStyle(): TextStyle;
    /**
     * Первичный стиль кнопки-переключателя :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryNormal(): IButtonStateStyle;
    /**
     * Первичный стиль кнопки-переключателя :: Выбранное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryChecked(): IButtonStateStyle;
    /**
     * Первичный стиль кнопки-переключателя :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDisabled(): IButtonStateStyle;
}

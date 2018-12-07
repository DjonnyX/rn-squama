import { TextStyle, ViewStyle } from "react-native";
import { IButtonStateStyle } from "../../controls/button";
/**
 * стили состояний
 * @author Evgeny Grebennikov
 */
export declare class ButtonStateStyles {
    /** Разные переменные **/
    static $BTN_FONT_WEIGHT: any;
    static $BTN_MARGIN_LR: number;
    /**      Базовый стиль кнопки      **/
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonContainerViewStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonButtonStyle(): ViewStyle;
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
     * @returns {TextStyle}
     */
    static baseButtonTextDisabledStyle(): TextStyle;
    /**
     * Первичный стиль кнопки (экстендится в полной мере от базового)
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryNormal(): IButtonStateStyle;
    /**
     * Первичный стиль кнопки (экстендится в полной мере от базового)
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDisabled(): IButtonStateStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static clearButtonContainerViewStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static clearButtonButtonStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static clearButtonTextStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static clearButtonContainerViewDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static clearButtonButtonDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static clearButtonTextDisabledStyle(): TextStyle;
    /**
     * Первичный стиль кнопки Clear
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryClearNormal(): IButtonStateStyle;
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryClearDisabled(): IButtonStateStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonContainerViewNormalStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonButtonNormalStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static largeBaseButtonTextNormalStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonContainerViewDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonButtonDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonTextDisabledStyle(): TextStyle;
    /**
     * Первичный стиль большой кнопки
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryLargeNormal(): IButtonStateStyle;
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryLargeDisabled(): IButtonStateStyle;
    /**
     * DIALOG
     */
    /**
    * @static
    * @returns {ViewStyle}
    */
    static dialogApplyBaseButtonContainerViewNormalStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogApplyBaseButtonButtonNormalStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static dialogApplyBaseButtonTextNormalStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogApplyBaseButtonContainerViewDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogApplyBaseButtonButtonDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogApplyBaseButtonTextDisabledStyle(): TextStyle;
    /**
 * Первичный стиль большой кнопки
 * @static
 * @returns {IButtonStateStyle}
 */
    static dialogApplyNormal(): IButtonStateStyle;
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static dialogApplyDisabled(): IButtonStateStyle;
    /**
    * @static
    * @returns {ViewStyle}
    */
    static dialogCancelBaseButtonContainerViewNormalStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogCancelBaseButtonButtonNormalStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static dialogCancelBaseButtonTextNormalStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogCancelBaseButtonContainerViewDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogCancelBaseButtonButtonDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogCancelBaseButtonTextDisabledStyle(): TextStyle;
    /**
 * Первичный стиль большой кнопки
 * @static
 * @returns {IButtonStateStyle}
 */
    static dialogCancelNormal(): IButtonStateStyle;
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static dialogCancelDisabled(): IButtonStateStyle;
}

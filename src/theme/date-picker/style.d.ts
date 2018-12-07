import { ViewStyle } from "react-native";
import { IDatePickerStyles } from "../../controls/date-picker";
import { IButtonStyle } from "../../controls/button";
/**
 * @author Evgeny Grebennikov
 */
export declare class DatePickerStyles {
    /**
     * Нормальное состояние
     * @static
     * @returns {ViewStyle}
     */
    static primaryContentView(): ViewStyle;
    /**
     * Активное состояние
     * @static
     * @returns {ViewStyle}
     */
    static primaryContentViewActive(): ViewStyle;
    /**
     * Выделенное состояние
     * @static
     * @returns {ViewStyle}
     */
    static primaryContentViewSelected(): ViewStyle;
    /**
     * Первичный стиль DatePicker"a
     * @static
     * @returns {ViewStyle}
     */
    static primaryStyles(): IDatePickerStyles;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIncrement(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIncrementActive(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIncrementSelected(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonDecrement(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonDecrementActive(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonDecrementSelected(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIndicator(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIndicatorActive(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIndicatorSelected(): IButtonStyle;
}

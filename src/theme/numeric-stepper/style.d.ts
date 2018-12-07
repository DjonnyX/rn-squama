import { ViewStyle } from "react-native";
import { INumericStepperStyles } from "../../controls/numeric-stepper";
import { IButtonStyle } from "../../controls/button";
/**
 * стили для NumericStepper
 * @author Evgeny Grebennikov
 */
export declare class NumericStepperStyles {
    /**
     * Базовый стиль контейнера
     * @static
     * @returns {ViewStyle}
     */
    static primaryContentView(): ViewStyle;
    /**
     * инкремент
     * @static
     * @returns {ViewStyle}
     */
    static primaryIncrement(): IButtonStyle;
    /**
     * декремент
     * @static
     * @returns {ViewStyle}
     */
    static primaryDecrement(): IButtonStyle;
    /**
     * индикатор
     * @static
     * @returns {IButtonStyle}
     */
    static primaryIndicator(): IButtonStyle;
    /**
     * Первичный стиль DatePicker"a
     * @static
     * @returns {INumericStepperStyles}
     */
    static primaryStyles(): INumericStepperStyles;
}

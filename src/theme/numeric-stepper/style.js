import { ThemeVars } from "../vars";
import { ButtonThemeAlias } from "../button";
import { ButtonStateThemeAlias } from "../button/state-alias";
/**
 * стили для NumericStepper
 * @author Evgeny Grebennikov
 */
export class NumericStepperStyles {
    /**
     * Базовый стиль контейнера
     * @static
     * @returns {ViewStyle}
     */
    static primaryContentView() {
        return {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
            marginTop: 4,
            marginBottom: 3,
            borderRadius: 0,
            borderColor: ThemeVars.$COLOR_GRAY_300,
            borderWidth: 1,
            backgroundColor: ThemeVars.$COLOR_WHITE
        };
    }
    /**
     * инкремент
     * @static
     * @returns {ViewStyle}
     */
    static primaryIncrement() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_INCREMENT_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_INCREMENT_DISABLED
        };
    }
    /**
     * декремент
     * @static
     * @returns {ViewStyle}
     */
    static primaryDecrement() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_DECREMENT_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_DECREMENT_DISABLED
        };
    }
    /**
     * индикатор
     * @static
     * @returns {IButtonStyle}
     */
    static primaryIndicator() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_INDICATOR_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_INDICATOR_DISABLED
        };
    }
    /**
     * Первичный стиль DatePicker"a
     * @static
     * @returns {INumericStepperStyles}
     */
    static primaryStyles() {
        return {
            contentViewStyle: NumericStepperStyles.primaryContentView(),
            incrementTheme: ButtonThemeAlias.PRIMARY_NUMERIC_STEPPER_INCREMENT,
            decrementTheme: ButtonThemeAlias.PRIMARY_NUMERIC_STEPPER_DECREMENT,
            indicatorTheme: ButtonThemeAlias.PRIMARY_NUMERIC_STEPPER_INDICATOR
        };
    }
}

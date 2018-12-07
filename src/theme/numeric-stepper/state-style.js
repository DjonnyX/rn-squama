import { ThemeVars } from "../vars";
import { ButtonStateStyles } from "../button/state-styles";
/**
 * @author Evgeny Grebennikov
 */
export class NumericStepperStateStyles {
    /** Первичный стиль пикера */
    // ---- Нормальное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonContainerViewStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonContainerViewStyle(), {
            margin: 0,
            borderWidth: 0,
            borderRadius: 0
        });
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), {
            backgroundColor: ThemeVars.$COLOR_TRANSPARENT
        });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseButtonTextStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonTextStyle(), { color: ThemeVars.$PRIMARY_TEXT_COLOR });
    }
    // ---- Неактивное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonContainerViewDisabledStyle() {
        return NumericStepperStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonButtonDisabledStyle() {
        return Object.assign({}, NumericStepperStateStyles.baseButtonStyle(), { backgroundColor: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonTextDisabledStyle() {
        return Object.assign({}, NumericStepperStateStyles.baseButtonTextStyle(), { color: ThemeVars.$COLOR_WHITE });
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static navButtons() {
        return {
            minWidth: 42,
            alignItems: "center"
        };
    }
    //--------------- PRIMARY INCREMENT BUTTON ---------------//
    /**
     * Первичный стиль базовой :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIncrementNormal() {
        return {
            containerViewStyle: NumericStepperStateStyles.baseButtonContainerViewStyle(),
            buttonStyle: Object.assign({}, NumericStepperStateStyles.baseButtonStyle(), NumericStepperStateStyles.navButtons(), {}),
            textStyle: NumericStepperStateStyles.baseButtonTextStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIncrementDisabled() {
        return {
            containerViewStyle: NumericStepperStateStyles.baseButtonContainerViewDisabledStyle(),
            buttonStyle: Object.assign({}, NumericStepperStateStyles.baseButtonButtonDisabledStyle(), NumericStepperStateStyles.navButtons(), {}),
            textStyle: NumericStepperStateStyles.baseButtonTextDisabledStyle()
        };
    }
    //--------------- PRIMARY DECREMENT BUTTON ---------------//
    /**
     * Первичный стиль базовой :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDecrementNormal() {
        return {
            containerViewStyle: NumericStepperStateStyles.baseButtonContainerViewStyle(),
            buttonStyle: Object.assign({}, NumericStepperStateStyles.baseButtonStyle(), NumericStepperStateStyles.navButtons(), {}),
            textStyle: NumericStepperStateStyles.baseButtonTextStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDecrementDisabled() {
        return {
            containerViewStyle: NumericStepperStateStyles.baseButtonContainerViewDisabledStyle(),
            buttonStyle: Object.assign({}, NumericStepperStateStyles.baseButtonButtonDisabledStyle(), NumericStepperStateStyles.navButtons(), {}),
            textStyle: NumericStepperStateStyles.baseButtonTextDisabledStyle()
        };
    }
    //--------------- PRIMARY INDICATOR BUTTON ---------------//
    /**
     * @static
     * @returns {ViewStyle}
     */
    static primaryBaseIndicatorButtonStyle() {
        return {
            minWidth: NumericStepperStateStyles.$INDICATOR_MIN_WIDTH
        };
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static primaryBaseIndicatorTextStyle() {
        return {
            textAlign: "center"
        };
    }
    /**
     * Первичный стиль базовой :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIndicatorNormal() {
        return {
            containerViewStyle: NumericStepperStateStyles.baseButtonContainerViewStyle(),
            buttonStyle: Object.assign({}, NumericStepperStateStyles.baseButtonStyle(), NumericStepperStateStyles.primaryBaseIndicatorButtonStyle()),
            textStyle: Object.assign({}, NumericStepperStateStyles.baseButtonTextStyle(), NumericStepperStateStyles.primaryBaseIndicatorTextStyle())
        };
    }
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIndicatorDisabled() {
        return {
            containerViewStyle: NumericStepperStateStyles.baseButtonContainerViewDisabledStyle(),
            buttonStyle: Object.assign({}, NumericStepperStateStyles.baseButtonButtonDisabledStyle(), NumericStepperStateStyles.primaryBaseIndicatorButtonStyle()),
            textStyle: Object.assign({}, NumericStepperStateStyles.baseButtonTextDisabledStyle(), NumericStepperStateStyles.primaryBaseIndicatorTextStyle())
        };
    }
}
/**
 * минимальная ширина индикатора
 */
NumericStepperStateStyles.$INDICATOR_MIN_WIDTH = 42;

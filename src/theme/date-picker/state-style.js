import { ThemeVars } from "../vars";
import { ButtonStateStyles } from '../button/state-styles';
/**
 * @author Evgeny Grebennikov
 */
export class DatePickerStateStyles {
    /// Нормальное состояние ///
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basePickerButtonContainerViewStyle() {
        return ButtonStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basePickerButtonStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), {
            backgroundColor: ThemeVars.$COLOR_TRANSPARENT
        });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static basePickerButtonTextStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonTextStyle(), { color: ThemeVars.$PRIMARY_TEXT_COLOR });
    }
    /// Неактивное состояние ///
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basePickerButtonContainerViewDisabledStyle() {
        return DatePickerStateStyles.basePickerButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basePickerButtonButtonDisabledStyle() {
        return Object.assign({}, DatePickerStateStyles.basePickerButtonStyle(), { backgroundColor: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static basePickerButtonTextDisabledStyle() {
        return Object.assign({}, DatePickerStateStyles.basePickerButtonTextStyle(), { color: ThemeVars.$COLOR_WHITE });
    }
    /// Активное состояние ///
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basePickerButtonContainerViewActiveStyle() {
        return DatePickerStateStyles.basePickerButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basePickerButtonButtonActiveStyle() {
        return Object.assign({}, DatePickerStateStyles.basePickerButtonStyle(), { backgroundColor: ThemeVars.$COLOR_GREEN_500 });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static basePickerButtonTextActiveStyle() {
        return Object.assign({}, DatePickerStateStyles.basePickerButtonTextStyle(), { color: ThemeVars.$COLOR_WHITE });
    }
    /// Выбранное состояние ///
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basePickerButtonContainerViewSelectedStyle() {
        return DatePickerStateStyles.basePickerButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basePickerButtonButtonSelectedStyle() {
        return Object.assign({}, DatePickerStateStyles.basePickerButtonStyle(), { backgroundColor: ThemeVars.$COLOR_WHITE });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static basePickerButtonTextSelectedStyle() {
        return Object.assign({}, DatePickerStateStyles.basePickerButtonTextStyle(), { color: ThemeVars.$PRIMARY_TEXT_COLOR });
    }
    //------------------- PRIMARY BUTTON -------------------//
    /**
     * Первичный стиль базовой :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryNormal() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewStyle(),
            buttonStyle: DatePickerStateStyles.basePickerButtonStyle(),
            textStyle: DatePickerStateStyles.basePickerButtonTextStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Активное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryActive() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewActiveStyle(),
            buttonStyle: DatePickerStateStyles.basePickerButtonButtonActiveStyle(),
            textStyle: DatePickerStateStyles.basePickerButtonTextActiveStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Выбранное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primarySelected() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewSelectedStyle(),
            buttonStyle: DatePickerStateStyles.basePickerButtonButtonSelectedStyle(),
            textStyle: DatePickerStateStyles.basePickerButtonTextSelectedStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDisabled() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewDisabledStyle(),
            buttonStyle: DatePickerStateStyles.basePickerButtonButtonDisabledStyle(),
            textStyle: DatePickerStateStyles.basePickerButtonTextDisabledStyle()
        };
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
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonStyle(), DatePickerStateStyles.navButtons(), {
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Активное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIncrementActive() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewActiveStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonActiveStyle(), DatePickerStateStyles.navButtons(), {
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextActiveStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Выбранное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIncrementSelected() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewSelectedStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonSelectedStyle(), DatePickerStateStyles.navButtons(), {
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextSelectedStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIncrementDisabled() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewDisabledStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonDisabledStyle(), DatePickerStateStyles.navButtons(), {
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextDisabledStyle()
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
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonStyle(), DatePickerStateStyles.navButtons(), {
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Активное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDecrementActive() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewActiveStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonActiveStyle(), DatePickerStateStyles.navButtons(), {
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextActiveStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Выбранное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDecrementSelected() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewSelectedStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonSelectedStyle(), DatePickerStateStyles.navButtons(), {
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextSelectedStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDecrementDisabled() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewDisabledStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonDisabledStyle(), DatePickerStateStyles.navButtons(), {
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextDisabledStyle()
        };
    }
    //--------------- PRIMARY INDICATOR BUTTON ---------------//
    /**
     * Первичный стиль базовой :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIndicatorNormal() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonStyle(), {
                borderRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Активное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIndicatorActive() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewActiveStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonActiveStyle(), {
                borderRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextActiveStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Выбранное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIndicatorSelected() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewSelectedStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonSelectedStyle(), {
                borderRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextSelectedStyle()
        };
    }
    /**
     * Первичный стиль базовой :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryIndicatorDisabled() {
        return {
            containerViewStyle: DatePickerStateStyles.basePickerButtonContainerViewDisabledStyle(),
            buttonStyle: Object.assign({}, DatePickerStateStyles.basePickerButtonButtonDisabledStyle(), {
                borderRadius: 0
            }),
            textStyle: DatePickerStateStyles.basePickerButtonTextDisabledStyle()
        };
    }
}

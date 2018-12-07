import { ThemeVars } from "../vars";
import { ButtonStateStyles } from "../button/state-styles";
/**
 * стили
 * @author Evgeny Grebennikov
 */
export class ToggleButtonStateStyles {
    /** Первичный стиль переключателя */
    // ---- Нормальное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonContainerViewStyle() {
        return ButtonStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonButtonStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), {
            backgroundColor: ThemeVars.$COLOR_TRANSPARENT,
            borderRadius: ThemeVars.$BORDER_RADIUS_BASE
        });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseToggleButtonTextStyle() {
        return {
            fontWeight: ButtonStateStyles.$BTN_FONT_WEIGHT,
            color: ThemeVars.$PRIMARY_TEXT_COLOR
        };
    }
    // ---- Неактивное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonContainerViewDisabledStyle() {
        return ButtonStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonButtonDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), { backgroundColor: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseToggleButtonTextDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonTextStyle(), { color: ThemeVars.$COLOR_WHITE });
    }
    // ---- Выбранное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonContainerViewCheckedStyle() {
        return ButtonStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseToggleButtonButtonCheckedStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), { backgroundColor: ThemeVars.$COLOR_GREEN_500 });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseToggleButtonTextCheckedStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonTextStyle(), { color: ThemeVars.$COLOR_WHITE });
    }
    /**
     * Первичный стиль кнопки-переключателя :: Нормальное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryNormal() {
        return {
            containerViewStyle: ToggleButtonStateStyles.baseToggleButtonContainerViewStyle(),
            buttonStyle: ToggleButtonStateStyles.baseToggleButtonButtonStyle(),
            textStyle: ToggleButtonStateStyles.baseToggleButtonTextStyle()
        };
    }
    /**
     * Первичный стиль кнопки-переключателя :: Выбранное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryChecked() {
        return {
            containerViewStyle: ToggleButtonStateStyles.baseToggleButtonContainerViewCheckedStyle(),
            buttonStyle: ToggleButtonStateStyles.baseToggleButtonButtonCheckedStyle(),
            textStyle: ToggleButtonStateStyles.baseToggleButtonTextCheckedStyle()
        };
    }
    /**
     * Первичный стиль кнопки-переключателя :: Неактивное состояние
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDisabled() {
        return {
            containerViewStyle: ToggleButtonStateStyles.baseToggleButtonContainerViewDisabledStyle(),
            buttonStyle: ToggleButtonStateStyles.baseToggleButtonButtonDisabledStyle(),
            textStyle: ToggleButtonStateStyles.baseToggleButtonTextDisabledStyle()
        };
    }
}

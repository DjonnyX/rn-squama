import { ThemeVars } from "../vars";
/**
 * стили состояний
 * @author Evgeny Grebennikov
 */
export class ButtonStateStyles {
    /**      Базовый стиль кнопки      **/
    // ---- "Нормальное состояние" ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonContainerViewStyle() {
        return {
            justifyContent: "center",
            alignItems: "stretch",
            margin: -1
        };
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonButtonStyle() {
        return {
            justifyContent: "center",
            alignItems: "stretch",
            padding: 10,
            backgroundColor: ThemeVars.$COLOR_GREEN_500,
            borderRadius: ThemeVars.$BORDER_RADIUS_BASE
        };
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseButtonTextStyle() {
        return {
            fontWeight: ButtonStateStyles.$BTN_FONT_WEIGHT,
            color: ThemeVars.$COLOR_WHITE
        };
    }
    // ---- Неактивное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonContainerViewDisabledStyle() {
        return ButtonStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseButtonButtonDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), { backgroundColor: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static baseButtonTextDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonTextStyle(), { color: ThemeVars.$COLOR_WHITE });
    }
    /**
     * Первичный стиль кнопки (экстендится в полной мере от базового)
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryNormal() {
        return {
            containerViewStyle: ButtonStateStyles.baseButtonContainerViewStyle(),
            buttonStyle: ButtonStateStyles.baseButtonButtonStyle(),
            textStyle: ButtonStateStyles.baseButtonTextStyle()
        };
    }
    /**
     * Первичный стиль кнопки (экстендится в полной мере от базового)
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDisabled() {
        return {
            containerViewStyle: ButtonStateStyles.baseButtonContainerViewDisabledStyle(),
            buttonStyle: ButtonStateStyles.baseButtonButtonDisabledStyle(),
            textStyle: ButtonStateStyles.baseButtonTextDisabledStyle()
        };
    }
    ///--------------- clear ----------------///
    // ------- "Нормальное состояние" ------- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static clearButtonContainerViewStyle() {
        return {
            justifyContent: "center",
            alignItems: "stretch"
        };
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static clearButtonButtonStyle() {
        return {
            justifyContent: "center",
            alignItems: "stretch",
            padding: 10,
            borderRadius: ThemeVars.$BORDER_RADIUS_BASE
        };
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static clearButtonTextStyle() {
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
    static clearButtonContainerViewDisabledStyle() {
        return ButtonStateStyles.clearButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static clearButtonButtonDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.clearButtonButtonStyle(), { backgroundColor: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static clearButtonTextDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.clearButtonTextStyle(), { color: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * Первичный стиль кнопки Clear
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryClearNormal() {
        return {
            containerViewStyle: ButtonStateStyles.clearButtonContainerViewStyle(),
            buttonStyle: ButtonStateStyles.clearButtonButtonStyle(),
            textStyle: ButtonStateStyles.clearButtonTextStyle()
        };
    }
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryClearDisabled() {
        return {
            containerViewStyle: ButtonStateStyles.clearButtonContainerViewDisabledStyle(),
            buttonStyle: ButtonStateStyles.clearButtonButtonDisabledStyle(),
            textStyle: ButtonStateStyles.clearButtonTextDisabledStyle()
        };
    }
    // Большая кнопка
    // ---- Нормальное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonContainerViewNormalStyle() {
        return ButtonStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonButtonNormalStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), {
            paddingLeft: 22,
            paddingRight: 22,
            paddingTop: 16,
            paddingBottom: 16,
            justifyContent: "space-around",
            borderRadius: 0
        });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static largeBaseButtonTextNormalStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonTextStyle(), {
            fontSize: 20,
            color: ThemeVars.$COLOR_WHITE
        });
    }
    // ---- Неактивное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonContainerViewDisabledStyle() {
        return ButtonStateStyles.largeBaseButtonContainerViewNormalStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonButtonDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.largeBaseButtonButtonNormalStyle(), { backgroundColor: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static largeBaseButtonTextDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.largeBaseButtonTextNormalStyle());
    }
    /**
     * Первичный стиль большой кнопки
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryLargeNormal() {
        return {
            containerViewStyle: ButtonStateStyles.largeBaseButtonContainerViewNormalStyle(),
            buttonStyle: ButtonStateStyles.largeBaseButtonButtonNormalStyle(),
            textStyle: ButtonStateStyles.largeBaseButtonTextNormalStyle()
        };
    }
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryLargeDisabled() {
        return {
            containerViewStyle: ButtonStateStyles.largeBaseButtonContainerViewDisabledStyle(),
            buttonStyle: ButtonStateStyles.largeBaseButtonButtonDisabledStyle(),
            textStyle: ButtonStateStyles.largeBaseButtonTextDisabledStyle()
        };
    }
    /**
     * DIALOG
     */
    // APPLY BUTTON
    /**
    * @static
    * @returns {ViewStyle}
    */
    static dialogApplyBaseButtonContainerViewNormalStyle() {
        return ButtonStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogApplyBaseButtonButtonNormalStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), {
            borderRadius: ThemeVars.$BORDER_RADIUS_BASE,
            padding: 16,
            backgroundColor: ThemeVars.$COLOR_GREEN_500
        });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static dialogApplyBaseButtonTextNormalStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonTextStyle(), {
            color: ThemeVars.$COLOR_WHITE
        });
    }
    // ---- Неактивное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogApplyBaseButtonContainerViewDisabledStyle() {
        return ButtonStateStyles.dialogApplyBaseButtonContainerViewNormalStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogApplyBaseButtonButtonDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.dialogApplyBaseButtonButtonNormalStyle(), { backgroundColor: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogApplyBaseButtonTextDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.dialogApplyBaseButtonTextNormalStyle());
    }
    /**
 * Первичный стиль большой кнопки
 * @static
 * @returns {IButtonStateStyle}
 */
    static dialogApplyNormal() {
        return {
            containerViewStyle: ButtonStateStyles.dialogApplyBaseButtonContainerViewNormalStyle(),
            buttonStyle: ButtonStateStyles.dialogApplyBaseButtonButtonNormalStyle(),
            textStyle: ButtonStateStyles.dialogApplyBaseButtonTextNormalStyle()
        };
    }
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static dialogApplyDisabled() {
        return {
            containerViewStyle: ButtonStateStyles.dialogApplyBaseButtonContainerViewDisabledStyle(),
            buttonStyle: ButtonStateStyles.dialogApplyBaseButtonButtonDisabledStyle(),
            textStyle: ButtonStateStyles.dialogApplyBaseButtonTextDisabledStyle()
        };
    }
    // CANCEL BUTTON
    /**
    * @static
    * @returns {ViewStyle}
    */
    static dialogCancelBaseButtonContainerViewNormalStyle() {
        return ButtonStateStyles.baseButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogCancelBaseButtonButtonNormalStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonButtonStyle(), {
            borderRadius: ThemeVars.$BORDER_RADIUS_BASE,
            padding: 16,
            backgroundColor: ThemeVars.$COLOR_RED_500
        });
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static dialogCancelBaseButtonTextNormalStyle() {
        return Object.assign({}, ButtonStateStyles.baseButtonTextStyle(), {
            color: ThemeVars.$COLOR_WHITE
        });
    }
    // ---- Неактивное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogCancelBaseButtonContainerViewDisabledStyle() {
        return ButtonStateStyles.dialogCancelBaseButtonContainerViewNormalStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogCancelBaseButtonButtonDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.dialogCancelBaseButtonButtonNormalStyle(), { backgroundColor: ThemeVars.$COLOR_GRAY_300 });
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static dialogCancelBaseButtonTextDisabledStyle() {
        return Object.assign({}, ButtonStateStyles.dialogCancelBaseButtonTextNormalStyle());
    }
    /**
 * Первичный стиль большой кнопки
 * @static
 * @returns {IButtonStateStyle}
 */
    static dialogCancelNormal() {
        return {
            containerViewStyle: ButtonStateStyles.dialogCancelBaseButtonContainerViewNormalStyle(),
            buttonStyle: ButtonStateStyles.dialogCancelBaseButtonButtonNormalStyle(),
            textStyle: ButtonStateStyles.dialogCancelBaseButtonTextNormalStyle()
        };
    }
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static dialogCancelDisabled() {
        return {
            containerViewStyle: ButtonStateStyles.dialogCancelBaseButtonContainerViewDisabledStyle(),
            buttonStyle: ButtonStateStyles.dialogCancelBaseButtonButtonDisabledStyle(),
            textStyle: ButtonStateStyles.dialogCancelBaseButtonTextDisabledStyle()
        };
    }
}
/** Разные переменные **/
ButtonStateStyles.$BTN_FONT_WEIGHT = "300"; // any, чтобы не ругался. Там enum интерфейс и он не экспортируется..
ButtonStateStyles.$BTN_MARGIN_LR = 4;

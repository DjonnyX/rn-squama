import { ButtonStateStyles } from '../button/state-styles';
import { ThemeVars } from "../vars";
/**
 * @author Evgeny Grebennikov
 */
export class CalendarDayButtonStateStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static normalButtonContainerViewStyle() {
        return {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            alignSelf: "stretch"
        };
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static normalButtonButtonStyle() {
        return {
            margin: -1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 54
        };
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static normalButtonTextStyle() {
        return {
            fontWeight: ButtonStateStyles.$BTN_FONT_WEIGHT,
            color: ThemeVars.$PRIMARY_TEXT_COLOR,
            textAlign: "center",
            fontSize: 12
        };
    }
    // ---- Неактивное состояние ---- //
    /**
     * @static
     * @returns {ViewStyle}
     */
    static normalButtonContainerViewDisabledStyle() {
        return CalendarDayButtonStateStyles.normalButtonContainerViewStyle();
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static normalButtonButtonDisabledStyle() {
        return CalendarDayButtonStateStyles.normalButtonButtonStyle();
    }
    /**
     * @static
     * @returns {TextStyle}
     */
    static normalButtonTextDisabledStyle() {
        return Object.assign({}, CalendarDayButtonStateStyles.normalButtonTextStyle(), { color: 'rgba(0,0,0,.24)' });
    }
    /**
     * Первичный стиль кнопки Normal
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDayNormal() {
        return {
            containerViewStyle: CalendarDayButtonStateStyles.normalButtonContainerViewStyle(),
            buttonStyle: CalendarDayButtonStateStyles.normalButtonButtonStyle(),
            textStyle: CalendarDayButtonStateStyles.normalButtonTextStyle()
        };
    }
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDayDisabled() {
        return {
            containerViewStyle: CalendarDayButtonStateStyles.normalButtonContainerViewDisabledStyle(),
            buttonStyle: CalendarDayButtonStateStyles.normalButtonButtonDisabledStyle(),
            textStyle: CalendarDayButtonStateStyles.normalButtonTextDisabledStyle()
        };
    }
    /**
     * Первичный стиль кнопки Current
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDayCurrent() {
        return {
            containerViewStyle: CalendarDayButtonStateStyles.normalButtonContainerViewStyle(),
            buttonStyle: Object.assign({}, CalendarDayButtonStateStyles.normalButtonButtonStyle(), {
                backgroundColor: ThemeVars.$COLOR_GREEN_300
            }),
            textStyle: Object.assign({}, CalendarDayButtonStateStyles.normalButtonTextStyle(), {
                color: ThemeVars.$COLOR_WHITE
            })
        };
    }
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDayCurrentDisabled() {
        return {
            containerViewStyle: CalendarDayButtonStateStyles.normalButtonContainerViewDisabledStyle(),
            buttonStyle: Object.assign({}, CalendarDayButtonStateStyles.normalButtonButtonDisabledStyle(), {
                backgroundColor: ThemeVars.$COLOR_GREEN_200
            }),
            textStyle: CalendarDayButtonStateStyles.normalButtonTextDisabledStyle()
        };
    }
    /**
     * Первичный стиль кнопки Selected
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDaySelected() {
        return {
            containerViewStyle: CalendarDayButtonStateStyles.normalButtonContainerViewStyle(),
            buttonStyle: Object.assign({}, CalendarDayButtonStateStyles.normalButtonButtonStyle(), {
                backgroundColor: ThemeVars.$COLOR_GREEN_500
            }),
            textStyle: Object.assign({}, CalendarDayButtonStateStyles.normalButtonTextStyle(), {
                color: ThemeVars.$COLOR_WHITE
            })
        };
    }
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDaySelectedDisabled() {
        return {
            containerViewStyle: CalendarDayButtonStateStyles.normalButtonContainerViewDisabledStyle(),
            buttonStyle: Object.assign({}, CalendarDayButtonStateStyles.normalButtonButtonDisabledStyle(), {
                backgroundColor: ThemeVars.$COLOR_GREEN_200
            }),
            textStyle: CalendarDayButtonStateStyles.normalButtonTextDisabledStyle()
        };
    }
}

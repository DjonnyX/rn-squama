import { ThemeVars } from "../vars";
import { ButtonStateThemeAlias } from "../button/state-alias";
import { ButtonThemeAlias } from "../button/alias";
/**
 * @author Evgeny Grebennikov
 */
export class CalendarStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseContainerStyle() {
        return {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch",
            backgroundColor: ThemeVars.$COLOR_WHITE,
            elevation: 7,
            borderRadius: ThemeVars.$BORDER_RADIUS_BASE
        };
    }
    /// DAY ///
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static dayNormal() {
        return {
            normalStyleName: ButtonStateThemeAlias.CALENDAR_DAY_NORMAL_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.CALENDAR_DAY_NORMAL_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static dayCurrent() {
        return {
            normalStyleName: ButtonStateThemeAlias.CALENDAR_DAY_CURRENT_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.CALENDAR_DAY_CURRENT_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static daySelected() {
        return {
            normalStyleName: ButtonStateThemeAlias.CALENDAR_DAY_SELECTED_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.CALENDAR_DAY_SELECTED_DISABLED
        };
    }
    /// COMMON ///
    /**
     * @static
     * @returns {ICalendarStyles}
     */
    static primary() {
        return {
            containerStyle: this.baseContainerStyle(),
            headerMonthStyle: {
                fontSize: ThemeVars.$H3_FONT_SIZE,
                color: ThemeVars.$PRIMARY_TEXT_COLOR
            },
            contentViewStyle: {
                flex: 1,
                flexDirection: "column",
                alignItems: "stretch",
                padding: 20
            },
            weekDaysStyles: {
                containerStyle: {
                    alignItems: 'stretch',
                    flexDirection: 'row',
                },
                dayContainerStyle: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                },
                dayTextStyle: {
                    color: "rgba(0,0,0,0.24)",
                    fontSize: ThemeVars.$M_FONT_SIZE,
                }
            },
            dayStyles: {
                normal: ButtonThemeAlias.CALENDAR_DAY_NORMAL,
                current: ButtonThemeAlias.CALENDAR_DAY_CURRENT,
                selected: ButtonThemeAlias.CALENDAR_DAY_SELECTED
            }
        };
    }
}

import { ButtonThemeAlias } from "../button/alias";
import { ButtonStateThemeAlias } from "../button/state-alias";
import { OverlayThemeAlias } from "../overlay/alias";
import { CalendarThemeAlias } from "../calendar/alias";
/**
 * @author Evgeny Grebennikov
 */
export class DatePickerStyles {
    /**
     * Нормальное состояние
     * @static
     * @returns {ViewStyle}
     */
    static primaryContentView() {
        return {
            justifyContent: "center",
            alignSelf: "center",
            flexDirection: "row"
        };
    }
    /**
     * Активное состояние
     * @static
     * @returns {ViewStyle}
     */
    static primaryContentViewActive() {
        return DatePickerStyles.primaryContentView();
    }
    /**
     * Выделенное состояние
     * @static
     * @returns {ViewStyle}
     */
    static primaryContentViewSelected() {
        return Object.assign({}, DatePickerStyles.primaryContentView(), {
            elevation: 3
        });
    }
    /**
     * Первичный стиль DatePicker"a
     * @static
     * @returns {ViewStyle}
     */
    static primaryStyles() {
        return {
            pickerContentViewStyle: DatePickerStyles.primaryContentView(),
            pickerContentViewActiveStyle: DatePickerStyles.primaryContentViewActive(),
            pickerContentViewSelectedStyle: DatePickerStyles.primaryContentViewSelected(),
            pickerButtonIncrementTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_INCREMENT,
            pickerButtonIncrementActiveTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_INCREMENT_ACTIVE,
            pickerButtonIncrementSelectedTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_INCREMENT_SELECTED,
            pickerButtonDecrementTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_DECREMENT,
            pickerButtonDecrementActiveTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_DECREMENT_ACTIVE,
            pickerButtonDecrementSelectedTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_DECREMENT_SELECTED,
            pickerIndicatorTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_INDICATOR,
            pickerIndicatorActiveTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_INDICATOR_ACTIVE,
            pickerIndicatorSelectedTheme: ButtonThemeAlias.PRIMARY_DATEPICKER_INDICATOR_SELECTED,
            calendarPopupStyles: {
                overlayTheme: OverlayThemeAlias.PRIMARY,
                calendarContainerStyle: {
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center"
                },
                calendarTheme: CalendarThemeAlias.PRIMARY,
                calendarWidth: 780,
                calendarHeight: 464
            }
        };
    }
    //--------------------- Picker Increment ---------------------//
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIncrement() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIncrementActive() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_ACTIVE,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIncrementSelected() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_SELECTED,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_DISABLED
        };
    }
    //--------------------- Picker Decrement ---------------------//
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonDecrement() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonDecrementActive() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_ACTIVE,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonDecrementSelected() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_SELECTED,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_DISABLED
        };
    }
    //--------------------- Picker Indicator ---------------------//
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIndicator() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIndicatorActive() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_ACTIVE,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryPickerButtonIndicatorSelected() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_SELECTED,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_DISABLED
        };
    }
}

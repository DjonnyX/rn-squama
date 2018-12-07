import { StyleProvider } from './provider';
import { ButtonStateThemeAlias } from './button/state-alias';
import { ButtonThemeAlias } from './button/alias';
import { ButtonStyles } from './button/style';
import { HeadingViewThemeAlias } from './heading-view/alias';
import { HeadingViewStyles } from './heading-view/style';
import { ToggleButtonThemeAlias } from './toggle-button/alias';
import { ToggleButtonStyles } from './toggle-button/style';
import { DatePickerThemeAlias } from './date-picker/alias';
import { DatePickerStyles } from './date-picker/style';
import { ButtonStateStyles } from './button/state-styles';
import { ToggleButtonStateStyles } from './toggle-button/state-style';
import { DatePickerStateStyles } from './date-picker/state-style';
import { HeaderThemeAlias } from './header/alias';
import { HeaderStyles } from './header/style';
import { NumericStepperStyles } from './numeric-stepper/style';
import { NumericStepperStateStyles } from './numeric-stepper/state-style';
import { NumericStepperThemeAlias } from './numeric-stepper/alias';
import { OverlayThemeAlias } from './overlay/alias';
import { OverlayStyles } from './overlay/style';
import { ScreenStyles } from './screen/style';
import { ScreenThemeAlias } from './screen/alias';
import { CalendarThemeAlias } from './calendar/alias';
import { CalendarStyles } from './calendar/style';
import { CalendarDayButtonStateStyles } from './calendar/state-style';
/**
 * Тема оформления
 * @author Evgeny Grebennikov
 */
export class Theme {
    /**
     * Возвращает стиль заданный псевдонимом
     * @param {string | any} name
     * @returns {any}
     */
    static getStyle(name) {
        return StyleProvider.get(name);
    }
    /**
     * @constructor
     */
    constructor() {
        this.buildButtonStates();
        this.buildStyles();
    }
    /**
     * Пребилд стилей для состояний кнопок
     * @protected
     */
    buildButtonStates() {
        /** button states */
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_NORMAL, ButtonStateStyles.primaryNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DISABLED, ButtonStateStyles.primaryDisabled());
        /** clear */
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_CLEAR_NORMAL, ButtonStateStyles.primaryClearNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_CLEAR_DISABLED, ButtonStateStyles.primaryClearDisabled());
        /** large */
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_LARGE_NORMAL, ButtonStateStyles.primaryLargeNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_LARGE_DISABLED, ButtonStateStyles.primaryLargeDisabled());
        /** toggle button states */
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_TOGGLE_NORMAL, ToggleButtonStateStyles.primaryNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_TOGGLE_ACTIVE, ToggleButtonStateStyles.primaryChecked());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_TOGGLE_DISABLED, ToggleButtonStateStyles.primaryDisabled());
        /** dialog */
        StyleProvider.add(ButtonStateThemeAlias.DIALOG_APPLY_NORMAL, ButtonStateStyles.dialogApplyNormal());
        StyleProvider.add(ButtonStateThemeAlias.DIALOG_APPLY_DISABLED, ButtonStateStyles.dialogApplyDisabled());
        StyleProvider.add(ButtonStateThemeAlias.DIALOG_CANCEL_NORMAL, ButtonStateStyles.dialogCancelNormal());
        StyleProvider.add(ButtonStateThemeAlias.DIALOG_CANCEL_DISABLED, ButtonStateStyles.dialogCancelDisabled());
        /** numericStepper */
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_DECREMENT_NORMAL, NumericStepperStateStyles.primaryDecrementNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_DECREMENT_DISABLED, NumericStepperStateStyles.primaryDecrementDisabled());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_INCREMENT_NORMAL, NumericStepperStateStyles.primaryIncrementNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_INCREMENT_DISABLED, NumericStepperStateStyles.primaryIncrementDisabled());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_INDICATOR_NORMAL, NumericStepperStateStyles.primaryIndicatorNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_NUMERIC_STEPPER_INDICATOR_DISABLED, NumericStepperStateStyles.primaryIndicatorDisabled());
        /** datePicker */
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_NORMAL, DatePickerStateStyles.primaryDecrementNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_ACTIVE, DatePickerStateStyles.primaryDecrementActive());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_SELECTED, DatePickerStateStyles.primaryDecrementSelected());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_DECREMENT_DISABLED, DatePickerStateStyles.primaryDecrementDisabled());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_NORMAL, DatePickerStateStyles.primaryIncrementNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_ACTIVE, DatePickerStateStyles.primaryIncrementActive());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_SELECTED, DatePickerStateStyles.primaryIncrementSelected());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_INCREMENT_DISABLED, DatePickerStateStyles.primaryIncrementDisabled());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_NORMAL, DatePickerStateStyles.primaryIndicatorNormal());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_ACTIVE, DatePickerStateStyles.primaryIndicatorActive());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_SELECTED, DatePickerStateStyles.primaryIndicatorSelected());
        StyleProvider.add(ButtonStateThemeAlias.PRIMARY_DATEPICKER_INDICATOR_DISABLED, DatePickerStateStyles.primaryIndicatorDisabled());
        /** calendar */
        StyleProvider.add(ButtonStateThemeAlias.CALENDAR_DAY_NORMAL_NORMAL, CalendarDayButtonStateStyles.primaryDayNormal());
        StyleProvider.add(ButtonStateThemeAlias.CALENDAR_DAY_NORMAL_DISABLED, CalendarDayButtonStateStyles.primaryDayDisabled());
        StyleProvider.add(ButtonStateThemeAlias.CALENDAR_DAY_CURRENT_NORMAL, CalendarDayButtonStateStyles.primaryDayCurrent());
        StyleProvider.add(ButtonStateThemeAlias.CALENDAR_DAY_CURRENT_DISABLED, CalendarDayButtonStateStyles.primaryDayCurrentDisabled());
        StyleProvider.add(ButtonStateThemeAlias.CALENDAR_DAY_SELECTED_NORMAL, CalendarDayButtonStateStyles.primaryDaySelected());
        StyleProvider.add(ButtonStateThemeAlias.CALENDAR_DAY_SELECTED_DISABLED, CalendarDayButtonStateStyles.primaryDaySelectedDisabled());
    }
    /**
     * Пребилд стилей
     * @protected
     */
    buildStyles() {
        /** button */
        StyleProvider.add(ButtonThemeAlias.PRIMARY, ButtonStyles.primary());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_CLEAR, ButtonStyles.primaryClear());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_LARGE, ButtonStyles.primaryLarge());
        StyleProvider.add(ButtonThemeAlias.DIALOG_APPLY, ButtonStyles.dialogApply());
        StyleProvider.add(ButtonThemeAlias.DIALOG_CANCEL, ButtonStyles.dialogCancel());
        /** button::numericStepper */
        StyleProvider.add(ButtonThemeAlias.PRIMARY_NUMERIC_STEPPER_INCREMENT, NumericStepperStyles.primaryIncrement());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_NUMERIC_STEPPER_DECREMENT, NumericStepperStyles.primaryDecrement());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_NUMERIC_STEPPER_INDICATOR, NumericStepperStyles.primaryIndicator());
        StyleProvider.add(NumericStepperThemeAlias.PRIMARY, NumericStepperStyles.primaryStyles());
        /** button::datePicker */
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_INCREMENT, DatePickerStyles.primaryPickerButtonIncrement());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_INCREMENT_ACTIVE, DatePickerStyles.primaryPickerButtonIncrementActive());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_INCREMENT_SELECTED, DatePickerStyles.primaryPickerButtonIncrementSelected());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_DECREMENT, DatePickerStyles.primaryPickerButtonDecrement());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_DECREMENT_ACTIVE, DatePickerStyles.primaryPickerButtonDecrementActive());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_DECREMENT_SELECTED, DatePickerStyles.primaryPickerButtonDecrementSelected());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_INDICATOR, DatePickerStyles.primaryPickerButtonIndicator());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_INDICATOR_ACTIVE, DatePickerStyles.primaryPickerButtonIndicatorActive());
        StyleProvider.add(ButtonThemeAlias.PRIMARY_DATEPICKER_INDICATOR_SELECTED, DatePickerStyles.primaryPickerButtonIndicatorSelected());
        /** button::calendar */
        StyleProvider.add(ButtonThemeAlias.CALENDAR_DAY_NORMAL, CalendarStyles.dayNormal());
        StyleProvider.add(ButtonThemeAlias.CALENDAR_DAY_CURRENT, CalendarStyles.dayCurrent());
        StyleProvider.add(ButtonThemeAlias.CALENDAR_DAY_SELECTED, CalendarStyles.daySelected());
        /** toggleButton */
        StyleProvider.add(ToggleButtonThemeAlias.PRIMARY, ToggleButtonStyles.primary());
        /** header */
        StyleProvider.add(HeaderThemeAlias.PRIMARY, HeaderStyles.primary());
        StyleProvider.add(HeaderThemeAlias.PRIMARY_CLEAR, HeaderStyles.primaryClear());
        /** headingView */
        StyleProvider.add(HeadingViewThemeAlias.PRIMARY, HeadingViewStyles.primary());
        StyleProvider.add(HeadingViewThemeAlias.PRIMARY_CLEAR, HeadingViewStyles.primaryClear());
        StyleProvider.add(HeadingViewThemeAlias.PRIMARY_SEPARATED, HeadingViewStyles.primarySeparated());
        /** datePicker */
        StyleProvider.add(DatePickerThemeAlias.PRIMARY, DatePickerStyles.primaryStyles());
        /** Overlay */
        StyleProvider.add(OverlayThemeAlias.PRIMARY, OverlayStyles.primary());
        /** Screen */
        StyleProvider.add(ScreenThemeAlias.BASE, ScreenStyles.base());
        /** Calendar */
        StyleProvider.add(CalendarThemeAlias.PRIMARY, CalendarStyles.primary());
    }
}

import React from "react";
import { ViewStyle } from "react-native";
import { DatePickerThemeAlias, ButtonThemeAlias, OverlayThemeAlias } from "../../theme";
import { ICalendarRangeData, ICalendarPopupStyles, ICalendarPopupInputData } from "../calendar";
/**
 * @react-props
 */
export interface IDatePickerProps extends IDatePickerInputData, ICalendarPopupInputData {
    style?: IDatePickerStyles;
    theme?: DatePickerThemeAlias;
    outlet?: string;
    onClose?(): void;
    onChange?(data: ICalendarRangeData): void;
}
/**
 * @react-state
 */
export interface IDatePickerState extends IDatePickerInputData {
    minDate?: Date;
    maxDate?: Date;
    startDate?: Date;
    endDate?: Date;
}
/**
 * стили
 */
export interface IDatePickerStyles {
    overlayTheme?: OverlayThemeAlias;
    pickerContentViewStyle?: ViewStyle;
    pickerContentViewActiveStyle?: ViewStyle;
    pickerContentViewSelectedStyle?: ViewStyle;
    pickerButtonDecrementTheme?: ButtonThemeAlias;
    pickerButtonDecrementActiveTheme?: ButtonThemeAlias;
    pickerButtonDecrementSelectedTheme?: ButtonThemeAlias;
    pickerButtonIncrementTheme?: ButtonThemeAlias;
    pickerButtonIncrementActiveTheme?: ButtonThemeAlias;
    pickerButtonIncrementSelectedTheme?: ButtonThemeAlias;
    pickerIndicatorTheme?: ButtonThemeAlias;
    pickerIndicatorActiveTheme?: ButtonThemeAlias;
    pickerIndicatorSelectedTheme?: ButtonThemeAlias;
    calendarPopupStyles?: ICalendarPopupStyles;
}
/**
 * @interface
 */
interface IDatePickerInputData {
    opened?: boolean;
    active?: boolean;
    disabled?: boolean;
}
/**
 * @interface
 */
interface IPickerStyle {
    contentViewStyle?: ViewStyle;
    buttonIncrementTheme?: ButtonThemeAlias;
    buttonDecrementTheme?: ButtonThemeAlias;
    buttonIndicatorTheme?: ButtonThemeAlias;
}
/**
 * DatePicker
 * В модуле реализован Single и Range моды.
 * @author Evgeny Grebennikov
 */
export declare class DatePicker extends React.Component<IDatePickerProps, IDatePickerState> {
    /**
     * Кколичество доступных для выбора дней "вперед"
     */
    static DEFAULT_MAX_DATE_LENGTH: number;
    /**
     * Минимальная дата выбора
     */
    protected readonly defaultMinDate: Date;
    /**
     * Максимальная дата выбора
     * @getter
     */
    protected readonly defaultMaxDate: Date;
    /**
     * Значение по-умолчанию для выбранной минимальной даты
     * @getter
     */
    protected readonly defaultStartDate: Date;
    /**
     * Значение по-умолчанию для выбранной максимальной даты
     * @getter
     */
    protected readonly defaultEndDate: Date;
    /**
     * стили
     */
    protected _styles: IDatePickerStyles;
    /**
     * @constructor
     * @param {IDatePickerProps} props
     */
    constructor(props: IDatePickerProps);
    /**
     * @react
     * @param {IDatePickerProps} props
     */
    componentWillReceiveProps(props: IDatePickerProps): void;
    /**
     * @private
     */
    private decrementHandler;
    /**
     * @private
     */
    private incrementHandler;
    /**
     * @private
     */
    private openCalendarHandler;
    /**
     * @private
     */
    private calendarCloseHandler;
    /**
     * @private
     * @param {ICalendarRangeData} data
     */
    private calendarChangeHandler;
    /**
     * @private
     */
    private submitChanges;
    /**
     * @protected
     */
    protected showCalendar(): void;
    /**
     * @protected
     * @param {Date} date
     * @returns {string}
     */
    protected formatDate(date: Date): string;
    /**
     * Обновление стилей
     * @param {IDatePickerProps} props
     */
    protected updateStyles(props: IDatePickerProps): void;
    /**
     * @protected
     * @param {boolean} opened
     * @param {boolean} active
     * @param {boolean} disabled
     * @returns {IPickerStyle}
     */
    protected getStyleForState(opened: boolean, active: boolean, disabled: boolean): IPickerStyle;
    /**
     * @override
     * @returns {JSX.Element}
     */
    render(): JSX.Element;
    /**
     * @react
     */
    componentWillUnmount(): void;
    /**
     * очистка объекта
     * вызывать перед удалением
     */
    dispose(): void;
}
export {};

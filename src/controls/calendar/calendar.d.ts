import React from "react";
import { ViewStyle, TextStyle } from "react-native";
export * from "moment/locale/ru";
import { CalendarThemeAlias, ButtonThemeAlias } from "../../theme";
/**
 * стили
 */
export interface ICalendarStyles {
    containerStyle?: ViewStyle;
    headerMonthStyle?: TextStyle;
    contentViewStyle?: ViewStyle;
    weekDaysStyles?: ICalendarWeekDaysStyles;
    dayStyles?: ICalendarDayStyles;
}
/**
 * @react-props
 */
export interface ICalendarProps {
    style?: ICalendarStyles;
    theme?: CalendarThemeAlias;
    useRange?: boolean;
    newSelection?: boolean;
    index?: number;
    integrate?: boolean;
    rangeConfig?: ICalendarRangeConfig;
    config?: ICalendarConfig;
    width?: number;
    height?: number;
    viewportsNum?: number;
    monthHeaderFormat?: string;
    onSelect?(data: ICalendarRangeData, ins?: boolean): void;
}
/**
 * @interface
 */
export interface ICalendarRangeData {
    startDate?: Date;
    endDate?: Date;
}
/**
 * @interface
 */
interface ICalendarCommonConfig {
    minDate: Date;
    maxDate: Date;
}
/**
 * конфиг для обычного календаря
 */
export interface ICalendarConfig extends ICalendarCommonConfig {
    startDate?: Date;
}
/**
 * конфиг для рэнджа
 */
export interface ICalendarRangeConfig extends ICalendarRangeData, ICalendarCommonConfig {
}
/**
 * @react-state
 */
export interface ICalendarState {
    startDate?: Date;
    endDate?: Date;
    viewDate?: Date;
}
/**
 * Календарь
 * @class
 * @author Evgeny Grebennikov
 */
export declare class Calendar extends React.Component<ICalendarProps, ICalendarState> {
    /**
     * Массив названий дней недели
     */
    protected weekDaysList: string[];
    /**
     * стили
     */
    protected _styles: ICalendarStyles;
    /**
     * регион календаря
     */
    protected _bound: any;
    /**
     * @constructor
     * @param {ICalendarProps} props
     */
    constructor(props: ICalendarProps);
    /**
     * @react
     * @param {ICalendarProps} props
     */
    componentWillReceiveProps(props: ICalendarProps): void;
    /**
     * Обновление стилей
     */
    protected updateStyles(props: ICalendarProps): void;
    /**
     * @protected
     * @returns {string}
     */
    protected formatSelectedMonth(): string;
    /**
     * @protected
     */
    protected toPrevMonth(): void;
    /**
     * @protected
     */
    protected toNextMonth(): void;
    /** isNewSelection */
    private _newSelection?;
    /**
     * @protected
     * @param {Date} date
     * @returns {ICalendarRangeData}
     */
    protected selectionProcessing(date: Date): ICalendarRangeData;
    /**
     * @protected
     * @param {Date} date
     */
    protected selectDate(date: Date): void;
    /**
     * @override
     * @returns {JSX.Element}
     */
    render(): JSX.Element;
}
export declare const normalizeWeekDaysNames: () => string[];
export declare const normalizeDate: (date: Date) => Date;
/**
 * @interface
 */
interface ICalendarDayStyles {
    normal?: ButtonThemeAlias;
    current?: ButtonThemeAlias;
    selected?: ButtonThemeAlias;
}
/**
 * @interface
 */
interface ICalendarWeekDaysStyles {
    containerStyle?: ViewStyle;
    dayContainerStyle?: ViewStyle;
    dayTextStyle?: TextStyle;
}

import React from "react";
import { View, ViewStyle, Text, TouchableWithoutFeedback, TextStyle } from "react-native";
import moment from "moment";
import _ from "lodash";
export * from "moment/locale/ru";

import { StyleProvider, Theme } from "../../theme";
import { HeadingView } from "../heading-view";
import { Button } from "../button";
import { GridLayout } from "../../layout";

/**
 * стили
 */
export interface ICalendarStyles {
    containerStyle?: ViewStyle;
    headerTheme?: string;
    buttonPreviousTheme?: string;
    buttonNextTheme?: string;
    headerMonthStyle?: TextStyle;
    contentViewStyle?: ViewStyle;
    weekDaysStyles?: ICalendarWeekDaysStyles;
    dayStyles?: ICalendarDayStyles;
}

export interface ICalendarProps {
    style?: ICalendarStyles;
    theme?: string;
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

export interface ICalendarRangeData {
    startDate?: Date;
    endDate?: Date;
}

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
export interface ICalendarRangeConfig extends ICalendarRangeData, ICalendarCommonConfig { }

/**
 * @react-state
 */
export interface ICalendarState {
    startDate?: Date;
    endDate?: Date;
    viewDate?: Date;
}

/**
 * Массив названий дней недели
 */
const WEEK_DAYS_NAMES: string[] = moment.weekdaysShort();

/**
 * Дефолтовое форматироваие заголовка
 */
const DEFAULT_MONTH_HEADER_FORMAT: string = "MMMM YYYY";

const ALIAS: string = "Calendar";

/**
 * Календарь
 */
export class Calendar extends React.Component<ICalendarProps, ICalendarState> {

    public static alias: string = ALIAS;
    
    /**
     * Массив названий дней недели
     */
    protected weekDaysList: string[] = normalizeWeekDaysNames();

    /**
     * стили
     */
    protected _styles: ICalendarStyles;

    /**
     * регион календаря
     */
    protected _bound: any = {};

    private _toPrevMonthHandler = () => {
        let { viewDate } = this.state;
        this.setState({ ...this.state, ...{ viewDate: moment(viewDate).subtract(1, "month").toDate() } });
    }

    private _toNextMonthHandler = () => {
        let { viewDate } = this.state;
        this.setState({ ...this.state, ...{ viewDate: moment(viewDate).add(1, "month").toDate() } });
    }

    private _selectDateHandler = (date: Date) => {
        const data = this.selectionProcessing(date);
        if (!this.props.integrate) this.setState({ ...this.state, ...data });
        if (this.props.onSelect) this.props.onSelect(data, this._newSelection);
    }

    private _newSelection?: boolean = false;

    constructor(props: ICalendarProps) {
        super(props);

        if (this.props.width) this._bound.width = this.props.width;
        if (this.props.height) this._bound.height = this.props.height;

        const index = props.index || 0;

        const config = props.useRange ? props.rangeConfig : props.config;

        const startDate = normalizeDate((config as ICalendarRangeData).startDate || new Date());
        const endDate = normalizeDate((config as ICalendarRangeData).endDate || new Date());
        const viewDate = moment(new Date(startDate.getFullYear(), startDate.getMonth(), 1)).add(index, "month").toDate();

        this.state = {
            startDate: startDate,
            endDate: endDate,
            viewDate: viewDate
        }

        this.updateStyles(props);
    }

    componentWillReceiveProps(props: ICalendarProps) {
        if (props.theme !== this.props.theme || props.style !== this.props.style) this.updateStyles(props);

        if (props.hasOwnProperty("newSelection")) this._newSelection = props.newSelection;

        this.setState({ ...this.state, ...props.config, ...props.rangeConfig });
    }

    protected updateStyles(props: ICalendarProps): void {
        let themeStyle: ICalendarStyles = props.theme ? StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!themeStyle) themeStyle = StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию

        this._styles = _.merge({}, themeStyle, props.style, { containerStyle: this._bound });

        const {index} = this.props;
        const {viewportsNum} = this.props;
        if (!viewportsNum || viewportsNum <= 1) return;
        if (index == 0) this._styles.containerStyle.borderTopRightRadius = this._styles.containerStyle.borderBottomRightRadius = 0;
        else this._styles.containerStyle.borderTopLeftRadius = this._styles.containerStyle.borderBottomLeftRadius = 0;
    }

    protected formatSelectedMonth(): string {
        const { viewDate } = this.state;
        return moment(viewDate).format(this.props.monthHeaderFormat || DEFAULT_MONTH_HEADER_FORMAT);
    }

    protected selectionProcessing(date: Date): ICalendarRangeData {
        if (this.props.useRange) {
            this._newSelection = !this._newSelection;
            if (this._newSelection) return { startDate: date, endDate: date };
            else {
                const { startDate } = this.state;
                const st = startDate.getTime();
                const et = date.getTime();
                return { startDate: st < et ? startDate : date, endDate: st > et ? startDate : date };
            }
        } else return { startDate: date };
    }

    public render(): JSX.Element {
        const { startDate, endDate, viewDate } = this.state;

        const daysCollection = this.props.useRange
            ? getCalendarRangeDayCollection(viewDate, this.props.rangeConfig.minDate, this.props.rangeConfig.maxDate, startDate, endDate)
            : getCalendarDayCollection(viewDate, this.props.config.minDate, this.props.config.maxDate, startDate);

        return (
            <TouchableWithoutFeedback>
                <View style={this._styles.containerStyle}>
                    <HeadingView theme={this._styles.headerTheme}
                        headerLeftItems={
                            <Button theme={this._styles.buttonPreviousTheme} text=" < " onPress={ this._toPrevMonthHandler }></Button>
                        }
                        headerCenterItems={
                            <Text style={this._styles.headerMonthStyle}>{this.formatSelectedMonth()}</Text>
                        }
                        headerRightItems={
                            <Button theme={this._styles.buttonNextTheme} text=" > " onPress={this._toNextMonthHandler}></Button>
                        }
                        content={
                            <View style={this._styles.contentViewStyle}>
                                <CalendarWeekDays collection={this.weekDaysList} style={this._styles.weekDaysStyles}></CalendarWeekDays>
                                <GridLayout columns={WEEK_DAYS_NUM} listCollection={daysCollection}
                                    itemFactory={(d, i) => {
                                        return <CalendarDay styles={this._styles.dayStyles} data={d} key={i} onSelect={this._selectDateHandler}></CalendarDay>
                                    }}
                                ></GridLayout>
                            </View>
                        } />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export const normalizeWeekDaysNames = (): Array<string> => {
    let days = Array.from(WEEK_DAYS_NAMES);
    const st = days.splice(0, 1);
    days.push(st[0]);
    return days;
}

export const normalizeDate = (date: Date): Date => {
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/**
 * кол-во ячеек в календаре
 */
const CALENDAR_CELLS = 42;

/**
 * кол-во дней в недели
 */
const WEEK_DAYS_NUM = 7;

const getCalendarRangeDayCollection = (view: Date, minDate: Date, maxDate: Date, startDate: Date, endDate: Date): Array<IDayData> => {
    const days: Array<IDayData> = [];
    const daysInMonth = moment(view).daysInMonth();
    const startOfMonth = moment(view).startOf("month");
    const currentMonth = startOfMonth.month();
    const firstWeekDay = startOfMonth.day();
    const mint = minDate.getTime();
    const maxt = maxDate.getTime();
    const st = startDate.getTime();
    const et = endDate.getTime();

    let leftDays = CALENDAR_CELLS - daysInMonth - firstWeekDay;
    if (leftDays >= WEEK_DAYS_NUM) leftDays -= WEEK_DAYS_NUM;

    const md = startOfMonth.clone();
    md.subtract(leftDays + 1, "day");

    for (let i = 0, l = CALENDAR_CELLS; i < l; i++) {
        md.add(1, "day");

        let type: CalendarDateType;
        const d = md.toDate().getTime();
        if (d >= st && d <= et) type = CalendarDateType.SELECTED;
        else type = CalendarDateType.NORMAL;

        days.push({ date: md.toDate(), type: type, disabled: currentMonth !== md.month() || d < mint || d > maxt });
    }

    return days;
}

const getCalendarDayCollection = (view: Date, minDate: Date, maxDate: Date, startDate: Date): Array<IDayData> => {
    const days: Array<IDayData> = [];
    const daysInMonth = moment(view).daysInMonth();
    const startOfMonth = moment(view).startOf("month");
    const currentMonth = startOfMonth.month();
    const firstWeekDay = startOfMonth.day();
    const mint = minDate.getTime();
    const maxt = maxDate.getTime();
    const st = startDate.getTime();

    let leftDays = CALENDAR_CELLS - daysInMonth - firstWeekDay;
    if (leftDays >= WEEK_DAYS_NUM) leftDays -= WEEK_DAYS_NUM;

    const md = startOfMonth.clone();
    md.subtract(leftDays + 1, "day");

    for (let i = 0, l = CALENDAR_CELLS; i < l; i++) {
        md.add(1, "day");

        let type: CalendarDateType;
        const d = md.toDate().getTime();
        if (d === st) type = CalendarDateType.SELECTED;
        else type = CalendarDateType.NORMAL;

        days.push({ date: md.toDate(), type: type, disabled: currentMonth !== md.month() || d < mint || d > maxt });
    }

    return days;
}

/**
 * типы кнопок (базовые состояния)
 */
enum CalendarDateType {
    NORMAL,
    CURRENT,
    SELECTED
}

interface IDayData {
    date: Date;
    disabled?: boolean;
    type?: CalendarDateType;
}

interface ICalendarDayStyles {
    normal?: string;
    current?: string;
    selected?: string;
}

interface ICalendarDayProps {
    styles?: ICalendarDayStyles;
    data?: IDayData;
    onSelect?(date: Date): void;
}

class CalendarDay extends React.PureComponent<ICalendarDayProps> {

    private _onSelectHandler = () => {
        if (this.props.onSelect) this.props.onSelect(this.props.data.date);
    }

    private _styles: ICalendarDayStyles;

    constructor(props: ICalendarDayProps) {
        super(props);
        this.updateStyles(props);
    }

    componentWillReceiveProps(props: ICalendarDayProps) {
        if (props.styles !== this.props.styles) this.updateStyles(props);
    }

    protected updateStyles(props: ICalendarDayProps): void {
        this._styles = props.styles;
    }

    protected getTheme(type: CalendarDateType): string {
        switch (type) {
            case CalendarDateType.CURRENT: {
                return this._styles.current;
            }
            case CalendarDateType.SELECTED: {
                return this._styles.selected;
            }
            default: {
                return this._styles.normal;
            }
        }
    }

    render() {
        const { data } = this.props;

        let theme: string = this.getTheme(data.type);

        return (
            <Button theme={theme} disabled={data.disabled} text={String(data.date.getDate())} onPress={this._onSelectHandler}></Button>
        )
    }
}

interface ICalendarWeekDaysStyles {
    containerStyle?: ViewStyle;
    dayContainerStyle?: ViewStyle;
    dayTextStyle?: TextStyle;
}

interface ICalendarWeekDaysProps {
    collection?: Array<string>;
    style?: ICalendarWeekDaysStyles;
}

class CalendarWeekDays extends React.PureComponent<ICalendarWeekDaysProps> {

    /**
     * стили
     */
    private _styles: ICalendarWeekDaysStyles;

    constructor(props: ICalendarWeekDaysProps) {
        super(props);

        this.updateStyles(props);
    }

    componentWillReceiveProps(props: ICalendarWeekDaysProps) {
        if (props.style !== this.props.style) this.updateStyles(props);
    }

    /**
     * Обновление стилей
     */
    protected updateStyles(props: ICalendarProps): void {
        this._styles = props.style;
    }

    /**
     * @react
     */
    render() {
        return (<View style={this._styles.containerStyle} >
            {
                this.props.collection.map((dayName, i) => {
                    return <View key={i} style={this._styles.dayContainerStyle}>
                        <Text style={this._styles.dayTextStyle}>{dayName}</Text>
                    </View>
                })
            }
        </View>)
    }
}
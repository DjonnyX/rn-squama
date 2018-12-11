"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const moment_1 = require("moment");
const lodash_1 = require("lodash");
__export(require("moment/locale/ru"));
const theme_1 = require("../../theme");
const heading_view_1 = require("../heading-view");
const button_1 = require("../button");
const layout_1 = require("../../layout");
/**
 * Массив названий дней недели
 */
const WEEK_DAYS_NAMES = moment_1.default.weekdaysShort();
/**
 * Дефолтовое форматироваие заголовка
 */
const DEFAULT_MONTH_HEADER_FORMAT = "MMMM YYYY";
const ALIAS = "Calendar";
/**
 * Календарь
 * @class
 * @author Evgeny Grebennikov
 */
class Calendar extends react_1.default.Component {
    /**
     * @constructor
     * @param {ICalendarProps} props
     */
    constructor(props) {
        super(props);
        /**
         * Массив названий дней недели
         */
        this.weekDaysList = exports.normalizeWeekDaysNames();
        /**
         * регион календаря
         */
        this._bound = {};
        /** isNewSelection */
        this._newSelection = false;
        if (this.props.width)
            this._bound.width = this.props.width;
        if (this.props.height)
            this._bound.height = this.props.height;
        const index = props.index || 0;
        const config = props.useRange ? props.rangeConfig : props.config;
        const startDate = exports.normalizeDate(config.startDate || new Date());
        const endDate = exports.normalizeDate(config.endDate || new Date());
        const viewDate = moment_1.default(new Date(startDate.getFullYear(), startDate.getMonth(), 1)).add(index, "month").toDate();
        this.state = {
            startDate: startDate,
            endDate: endDate,
            viewDate: viewDate
        };
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {ICalendarProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
        if (props.hasOwnProperty("newSelection"))
            this._newSelection = props.newSelection;
        this.setState(Object.assign({}, this.state, props.config, props.rangeConfig));
    }
    /**
     * Обновление стилей
     */
    updateStyles(props) {
        let themeStyle = props.theme ? theme_1.StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!themeStyle)
            themeStyle = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        this._styles = lodash_1.default.merge({}, themeStyle, props.style, { containerStyle: this._bound });
        const { index } = this.props;
        const { viewportsNum } = this.props;
        if (!viewportsNum || viewportsNum <= 1)
            return;
        if (index == 0)
            this._styles.containerStyle.borderTopRightRadius = this._styles.containerStyle.borderBottomRightRadius = 0;
        else
            this._styles.containerStyle.borderTopLeftRadius = this._styles.containerStyle.borderBottomLeftRadius = 0;
    }
    /**
     * @protected
     * @returns {string}
     */
    formatSelectedMonth() {
        const { viewDate } = this.state;
        return moment_1.default(viewDate).format(this.props.monthHeaderFormat || DEFAULT_MONTH_HEADER_FORMAT);
    }
    /**
     * @protected
     */
    toPrevMonth() {
        let { viewDate } = this.state;
        this.setState(Object.assign({}, this.state, { viewDate: moment_1.default(viewDate).subtract(1, "month").toDate() }));
    }
    /**
     * @protected
     */
    toNextMonth() {
        let { viewDate } = this.state;
        this.setState(Object.assign({}, this.state, { viewDate: moment_1.default(viewDate).add(1, "month").toDate() }));
    }
    /**
     * @protected
     * @param {Date} date
     * @returns {ICalendarRangeData}
     */
    selectionProcessing(date) {
        if (this.props.useRange) {
            this._newSelection = !this._newSelection;
            if (this._newSelection)
                return { startDate: date, endDate: date };
            else {
                const { startDate } = this.state;
                const st = startDate.getTime();
                const et = date.getTime();
                return { startDate: st < et ? startDate : date, endDate: st > et ? startDate : date };
            }
        }
        else
            return { startDate: date };
    }
    /**
     * @protected
     * @param {Date} date
     */
    selectDate(date) {
        const data = this.selectionProcessing(date);
        if (!this.props.integrate)
            this.setState(Object.assign({}, this.state, data));
        if (this.props.onSelect)
            this.props.onSelect(data, this._newSelection);
    }
    /**
     * @override
     * @returns {JSX.Element}
     */
    render() {
        const { startDate } = this.state;
        const { endDate } = this.state;
        const { viewDate } = this.state;
        const daysCollection = this.props.useRange
            ? getCalendarRangeDayCollection(viewDate, this.props.rangeConfig.minDate, this.props.rangeConfig.maxDate, startDate, endDate)
            : getCalendarDayCollection(viewDate, this.props.config.minDate, this.props.config.maxDate, startDate);
        return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, null,
            react_1.default.createElement(react_native_1.View, { style: this._styles.containerStyle },
                react_1.default.createElement(heading_view_1.HeadingView, { theme: this._styles.headerTheme, headerLeftItems: react_1.default.createElement(button_1.Button, { theme: this._styles.buttonPreviousTheme, text: " < ", onPress: () => { this.toPrevMonth(); } }), headerCenterItems: react_1.default.createElement(react_native_1.Text, { style: this._styles.headerMonthStyle }, this.formatSelectedMonth()), headerRightItems: react_1.default.createElement(button_1.Button, { theme: this._styles.buttonNextTheme, text: " > ", onPress: () => { this.toNextMonth(); } }), content: react_1.default.createElement(react_native_1.View, { style: this._styles.contentViewStyle },
                        react_1.default.createElement(CalendarWeekDays, { collection: this.weekDaysList, style: this._styles.weekDaysStyles }),
                        react_1.default.createElement(layout_1.GridLayout, { columns: WEEK_DAYS_NUM, listCollection: daysCollection, itemFactory: (d, i) => {
                                return react_1.default.createElement(CalendarDay, { styles: this._styles.dayStyles, data: d, key: i, onSelect: (d) => this.selectDate(d) });
                            } })) }))));
    }
}
Calendar.alias = ALIAS;
exports.Calendar = Calendar;
exports.normalizeWeekDaysNames = () => {
    let days = Array.from(WEEK_DAYS_NAMES);
    const st = days.splice(0, 1);
    days.push(st[0]);
    return days;
};
exports.normalizeDate = (date) => {
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};
/**
 * кол-во ячеек в календаре
 */
const CALENDAR_CELLS = 42;
/**
 * кол-во дней в недели
 */
const WEEK_DAYS_NUM = 7;
/**
 * @param {Date} view
 * @param {Date} minDate
 * @param {Date} maxDate
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {Array<IDayData>}
 */
const getCalendarRangeDayCollection = (view, minDate, maxDate, startDate, endDate) => {
    const days = [];
    const daysInMonth = moment_1.default(view).daysInMonth();
    const startOfMonth = moment_1.default(view).startOf("month");
    const currentMonth = startOfMonth.month();
    const firstWeekDay = startOfMonth.day();
    const mint = minDate.getTime();
    const maxt = maxDate.getTime();
    const st = startDate.getTime();
    const et = endDate.getTime();
    let leftDays = CALENDAR_CELLS - daysInMonth - firstWeekDay;
    if (leftDays >= WEEK_DAYS_NUM)
        leftDays -= WEEK_DAYS_NUM;
    const md = startOfMonth.clone();
    md.subtract(leftDays + 1, "day");
    for (let i = 0, l = CALENDAR_CELLS; i < l; i++) {
        md.add(1, "day");
        let type;
        const d = md.toDate().getTime();
        if (d >= st && d <= et)
            type = CalendarDateType.SELECTED;
        else
            type = CalendarDateType.NORMAL;
        days.push({ date: md.toDate(), type: type, disabled: currentMonth !== md.month() || d < mint || d > maxt });
    }
    return days;
};
/**
 * @param {Date} view
 * @param {Date} minDate
 * @param {Date} maxDate
 * @param {Date} startDate
 * @returns {Array<IDayData>}
 */
const getCalendarDayCollection = (view, minDate, maxDate, startDate) => {
    const days = [];
    const daysInMonth = moment_1.default(view).daysInMonth();
    const startOfMonth = moment_1.default(view).startOf("month");
    const currentMonth = startOfMonth.month();
    const firstWeekDay = startOfMonth.day();
    const mint = minDate.getTime();
    const maxt = maxDate.getTime();
    const st = startDate.getTime();
    let leftDays = CALENDAR_CELLS - daysInMonth - firstWeekDay;
    if (leftDays >= WEEK_DAYS_NUM)
        leftDays -= WEEK_DAYS_NUM;
    const md = startOfMonth.clone();
    md.subtract(leftDays + 1, "day");
    for (let i = 0, l = CALENDAR_CELLS; i < l; i++) {
        md.add(1, "day");
        let type;
        const d = md.toDate().getTime();
        if (d === st)
            type = CalendarDateType.SELECTED;
        else
            type = CalendarDateType.NORMAL;
        days.push({ date: md.toDate(), type: type, disabled: currentMonth !== md.month() || d < mint || d > maxt });
    }
    return days;
};
/**
 * типы кнопок (базовые состояния)
 */
var CalendarDateType;
(function (CalendarDateType) {
    CalendarDateType[CalendarDateType["NORMAL"] = 0] = "NORMAL";
    CalendarDateType[CalendarDateType["CURRENT"] = 1] = "CURRENT";
    CalendarDateType[CalendarDateType["SELECTED"] = 2] = "SELECTED";
})(CalendarDateType || (CalendarDateType = {}));
/**
 * @class
 * @author Evgeny Grebennikov
 */
class CalendarDay extends react_1.default.PureComponent {
    /**
     * @constructor
     * @param {ICalendarDayProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {ICalendarDayProps} props
     */
    componentWillReceiveProps(props) {
        if (props.styles !== this.props.styles)
            this.updateStyles(props);
    }
    /**
     * @protected
     * @param {ICalendarDayProps} props
     */
    updateStyles(props) {
        this._styles = props.styles;
    }
    /**
     * @protected
     */
    onSelect() {
        if (this.props.onSelect)
            this.props.onSelect(this.props.data.date);
    }
    /**
     * @param {CalendarDateType} type
     * @returns {string}
     */
    getTheme(type) {
        switch (type) {
            case CalendarDateType.CURRENT: {
                return this._styles.current;
            }
            case CalendarDateType.SELECTED: {
                return this._styles.selected;
            }
            default: { // CalendarDateType.NORMAL
                return this._styles.normal;
            }
        }
    }
    /**
     * @react
     */
    render() {
        const { data } = this.props;
        let theme = this.getTheme(data.type);
        return (react_1.default.createElement(button_1.Button, { theme: theme, disabled: data.disabled, text: String(data.date.getDate()), onPress: () => {
                this.onSelect();
            } }));
    }
}
/**
 * @class
 * @author Evgeny Grebennikov
 */
class CalendarWeekDays extends react_1.default.PureComponent {
    /**
     * @constructor
     * @param {ICalendarWeekDaysProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {ICalendarWeekDaysProps} props
     */
    componentWillReceiveProps(props) {
        if (props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * Обновление стилей
     * @protected
     * @param {ICalendarProps} props
     */
    updateStyles(props) {
        this._styles = props.style;
    }
    /**
     * @react
     */
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: this._styles.containerStyle }, this.props.collection.map((dayName, i) => {
            return react_1.default.createElement(react_native_1.View, { key: i, style: this._styles.dayContainerStyle },
                react_1.default.createElement(react_native_1.Text, { style: this._styles.dayTextStyle }, dayName));
        })));
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const moment_1 = require("moment");
const lodash_1 = require("lodash");
const theme_1 = require("../../theme");
const button_1 = require("../button");
const popup_1 = require("../popup");
const calendar_1 = require("../calendar");
const ALIAS = "DatePicker";
/**
 * DatePicker
 * В модуле реализован Single и Range моды.
 * @author Evgeny Grebennikov
 */
class DatePicker extends react_1.default.Component {
    /**
     * @constructor
     * @param {IDatePickerProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
        const defaultStateParams = {
            minDate: this.defaultMinDate,
            maxDate: this.defaultMaxDate,
            startDate: this.defaultStartDate,
            endDate: this.defaultEndDate,
            opened: this.props.opened || false,
            active: this.props.active || false,
            disabled: this.props.disabled || false
        };
        this.state = props.useRange ? Object.assign({}, defaultStateParams, props.rangeConfig) : Object.assign({}, defaultStateParams, props.config);
    }
    /**
     * Минимальная дата выбора
     */
    get defaultMinDate() {
        return calendar_1.normalizeDate(new Date());
    }
    /**
     * Максимальная дата выбора
     * @getter
     */
    get defaultMaxDate() {
        const date = calendar_1.normalizeDate(new Date());
        date.setDate(date.getDate() + DatePicker.DEFAULT_MAX_DATE_LENGTH);
        return date;
    }
    /**
     * Значение по-умолчанию для выбранной минимальной даты
     * @getter
     */
    get defaultStartDate() {
        return this.defaultMinDate;
    }
    /**
     * Значение по-умолчанию для выбранной максимальной даты
     * @getter
     */
    get defaultEndDate() {
        return this.defaultMaxDate;
    }
    /**
     * @react
     * @param {IDatePickerProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
        if (props.hasOwnProperty("active"))
            this.state = Object.assign({}, this.state, { active: props.active });
    }
    /**
     * @private
     */
    decrementHandler() {
        const { startDate } = this.state;
        const { minDate } = this.state;
        const s = moment_1.default(startDate).subtract(1, "days").toDate();
        if (s.getTime() <= minDate.getTime())
            return;
        this.state = Object.assign({}, this.state, { startDate: s });
        this.setState(this.state);
        this.submitChanges();
    }
    /**
     * @private
     */
    incrementHandler() {
        const { endDate } = this.state;
        const { maxDate } = this.state;
        const e = moment_1.default(endDate).add(1, "days").toDate();
        if (e.getTime() >= maxDate.getTime())
            return;
        this.state = Object.assign({}, this.state, { endDate: e });
        this.setState(this.state);
        this.submitChanges();
    }
    /**
     * @private
     */
    openCalendarHandler() {
        this.state = Object.assign({}, this.state, { opened: true });
        this.setState(this.state);
        this.showCalendar();
    }
    /**
     * @private
     */
    calendarCloseHandler() {
        this.state = Object.assign({}, this.state, { opened: false });
        this.setState(this.state);
    }
    /**
     * @private
     * @param {ICalendarRangeData} data
     */
    calendarChangeHandler(data) {
        this.state = Object.assign({}, this.state, data);
        this.setState(this.state);
        this.submitChanges();
    }
    /**
     * @private
     */
    submitChanges() {
        const { startDate } = this.state;
        const { endDate } = this.state;
        if (this.props.onChange)
            this.props.onChange({ startDate: startDate, endDate: endDate });
    }
    /**
     * @protected
     */
    showCalendar() {
        popup_1.popupManager.show({
            outlet: this.props.outlet,
            factory: (id, i) => {
                return react_1.default.createElement(calendar_1.CalendarPopup, { id: id, isModal: true, autoComplete: true, numViewports: 2, useRange: this.props.useRange, config: this.props.config, rangeConfig: this.props.rangeConfig, style: this._styles.calendarPopupStyles, onComplete: (data) => { this.calendarChangeHandler(data); }, onClose: () => { this.calendarCloseHandler(); }, key: i });
            }
        });
    }
    /**
     * @protected
     * @param {Date} date
     * @returns {string}
     */
    formatDate(date) {
        return moment_1.default(date).format("DD.MM.YY");
    }
    /**
     * Обновление стилей
     * @param {IDatePickerProps} props
     */
    updateStyles(props) {
        let style = props.theme ? theme_1.StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style)
            style = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        this._styles = lodash_1.default.merge({}, props.style, style);
    }
    /**
     * @protected
     * @param {boolean} opened
     * @param {boolean} active
     * @param {boolean} disabled
     * @returns {IPickerStyle}
     */
    getStyleForState(opened, active, disabled) {
        const result = {};
        if (opened) {
            result.contentViewStyle = this._styles.pickerContentViewSelectedStyle;
            result.buttonIncrementTheme = this._styles.pickerButtonIncrementSelectedTheme;
            result.buttonDecrementTheme = this._styles.pickerButtonDecrementSelectedTheme;
            result.buttonIndicatorTheme = this._styles.pickerIndicatorSelectedTheme;
        }
        else if (active) {
            result.contentViewStyle = this._styles.pickerContentViewActiveStyle;
            result.buttonIncrementTheme = this._styles.pickerButtonIncrementActiveTheme;
            result.buttonDecrementTheme = this._styles.pickerButtonDecrementActiveTheme;
            result.buttonIndicatorTheme = this._styles.pickerIndicatorActiveTheme;
        }
        else {
            result.contentViewStyle = this._styles.pickerContentViewStyle;
            result.buttonIncrementTheme = this._styles.pickerButtonIncrementTheme;
            result.buttonDecrementTheme = this._styles.pickerButtonDecrementTheme;
            result.buttonIndicatorTheme = this._styles.pickerIndicatorTheme;
        }
        return result;
    }
    /**
     * @override
     * @returns {JSX.Element}
     */
    render() {
        const { startDate } = this.state;
        const { endDate } = this.state;
        // const { minDate } = this.state;
        // const { maxDate } = this.state;
        const { opened } = this.state;
        const { active } = this.state;
        const { disabled } = this.state;
        const dateStr = `${this.formatDate(startDate)} - ${this.formatDate(endDate)}`;
        const stateStyle = this.getStyleForState(opened, active, disabled);
        return (react_1.default.createElement(react_native_1.View, { style: this._styles.pickerContentViewStyle },
            react_1.default.createElement(react_native_1.View, { style: stateStyle.contentViewStyle },
                react_1.default.createElement(button_1.Button
                // disabled={startDate.getTime() <= minDate.getTime()}
                , { 
                    // disabled={startDate.getTime() <= minDate.getTime()}
                    text: "<", theme: stateStyle.buttonDecrementTheme, onPress: () => this.decrementHandler() }),
                react_1.default.createElement(button_1.Button, { text: dateStr, theme: stateStyle.buttonIndicatorTheme, onPress: () => this.openCalendarHandler() }),
                react_1.default.createElement(button_1.Button
                // disabled={endDate.getTime() >= maxDate.getTime()}
                , { 
                    // disabled={endDate.getTime() >= maxDate.getTime()}
                    text: ">", theme: stateStyle.buttonIncrementTheme, onPress: () => this.incrementHandler() }))));
    }
    /**
     * @react
     */
    componentWillUnmount() {
        this.dispose();
    }
    /**
     * очистка объекта
     * вызывать перед удалением
     */
    dispose() {
        this._styles = null;
    }
}
DatePicker.alias = ALIAS;
/**
 * Кколичество доступных для выбора дней "вперед"
 */
DatePicker.DEFAULT_MAX_DATE_LENGTH = 30;
exports.DatePicker = DatePicker;

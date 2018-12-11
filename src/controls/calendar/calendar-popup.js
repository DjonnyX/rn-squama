"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const overlay_1 = require("../overlay");
const calendar_1 = require("./calendar");
const popup_1 = require("../popup");
/**
 * @class
 * @author Evgeny Grebennikov
 */
class CalendarPopup extends react_1.default.Component {
    /**
     * @constructor
     * @param {ICalendarPopupProps} props
     */
    constructor(props) {
        super(props);
        /**
         * @private
         */
        this._numViewports = [];
        for (let i = 0, l = props.numViewports || CalendarPopup.defaultNumViewports; i < l; i++) {
            this._numViewports.push(null);
        }
        const { rangeConfig } = props;
        const { config } = props;
        this.state = this.props.useRange ? Object.assign({}, rangeConfig) : Object.assign({}, config);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {ICalendarPopupProps} props
     */
    componentWillReceiveProps(props) {
        if (props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * Обновление стилей
     * @protected
     * @param {ICalendarPopupProps} props
     */
    updateStyles(props) {
        this._styles = Object.assign({}, props.style);
    }
    /**
     * @protected
     * @param {ICalendarRangeData} data
     * @param {boolean} newSelection
     */
    calendarChange(data, newSelection) {
        if (this.props.useRange)
            this.setState(Object.assign({}, this.state, data, { newSelection: newSelection }));
        else
            this.setState(Object.assign({}, this.state, { startDate: data }, { newSelection: newSelection }));
        if ((this.props.autoComplete && this.props.useRange && !newSelection) || (this.props.autoComplete && !this.props.useRange)) {
            this.onComplete(data);
            popup_1.popupManager.hide(this.props.id);
            this.onClose();
        }
    }
    /**
     * @private
     * @returns {JSX.Element}
     */
    calendarRenderer() {
        const width = this._styles.calendarWidth * .5;
        const config = Object.assign({}, this.state);
        const viewportsNum = this._numViewports.length;
        return react_1.default.createElement(react_native_1.View, { style: this._styles.calendarContainerStyle }, this._numViewports.map((v, i) => {
            return react_1.default.createElement(calendar_1.Calendar, { key: i, index: i, newSelection: this.state.newSelection, integrate: true, useRange: this.props.useRange, config: config, rangeConfig: config, width: width, height: this._styles.calendarHeight, viewportsNum: viewportsNum, onSelect: (data, newSelection) => { this.calendarChange(data, newSelection); } });
        }));
    }
    /**
     * @protected
     * @param {ICalendarRangeData} data
     */
    onComplete(data) {
        if (this.props.onComplete)
            this.props.onComplete(data);
    }
    /**
     * @protected
     */
    onClose() {
        if (this.props.onClose)
            this.props.onClose();
    }
    /**
     * @react
     */
    render() {
        return (react_1.default.createElement(overlay_1.Overlay, { id: this.props.id, key: this.props.key, isModal: this.props.isModal, theme: this._styles.overlayTheme, onClose: () => { this.onClose(); }, content: this.calendarRenderer() }));
    }
}
/**
 * дефолтовое зн-е количества вьюпортов
 */
CalendarPopup.defaultNumViewports = 1;
exports.CalendarPopup = CalendarPopup;

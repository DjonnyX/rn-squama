import React from "react";
import { View } from "react-native";
import { Overlay } from "../overlay";
import { Calendar } from "./calendar";
import { popupManager } from "../popup";
/**
 * @class
 * @author Evgeny Grebennikov
 */
export class CalendarPopup extends React.Component {
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
            popupManager.hide(this.props.id);
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
        return <View style={this._styles.calendarContainerStyle}>
            {this._numViewports.map((v, i) => {
            return <Calendar key={i} index={i} newSelection={this.state.newSelection} integrate useRange={this.props.useRange} config={config} rangeConfig={config} width={width} height={this._styles.calendarHeight} viewportsNum={viewportsNum} onSelect={(data, newSelection) => { this.calendarChange(data, newSelection); }}/>;
        })}
        </View>;
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
        return (<Overlay id={this.props.id} key={this.props.key} isModal={this.props.isModal} theme={this._styles.overlayTheme} onClose={() => { this.onClose(); }} content={this.calendarRenderer()}/>);
    }
}
/**
 * дефолтовое зн-е количества вьюпортов
 */
CalendarPopup.defaultNumViewports = 1;

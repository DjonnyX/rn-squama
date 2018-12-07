import React from "react";
import { View } from "react-native";
import { StyleProvider, NumericStepperThemeAlias } from "../../theme";
import { Button } from "../button";
import _ from "lodash";
/**
 * @class
 * @author Evgeny Grebennikov
 */
export class NumericStepper extends React.Component {
    /**
     * @constructor
     * @param {INumericStepperProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
        this.state = {
            disabled: this.props.disabled || false,
            value: this.props.value || 0,
            minValue: this.props.minValue || NumericStepper.MIN_VALUE,
            maxValue: this.props.maxValue || NumericStepper.MAX_VALUE
        };
    }
    /**
     * @getter
     * @type {(v: number) => string}
     */
    get formatFunction() {
        if (this.props.formatFunction)
            return this.props.formatFunction;
        return this.defaultFormatFunction;
    }
    /**
     * @react
     * @param {INumericStepperProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * @protected
     * @param {number} value
     * @returns {string}
     */
    defaultFormatFunction(value) {
        return String(value);
    }
    /**
     * @protected
     */
    decrementHandler() {
        const state = Object.assign({}, this.state);
        if (state.value > this.props.minValue)
            state.value -= this.props.step;
        this.setState(state);
        if (this.props.onDecrement)
            this.props.onDecrement(state.value);
    }
    /**
     * @protected
     */
    incrementHandler() {
        const state = Object.assign({}, this.state);
        if (state.value < this.props.maxValue)
            state.value += this.props.step;
        this.setState(state);
        if (this.props.onIncrement)
            this.props.onIncrement(state.value);
    }
    /**
     * @protected
     */
    indicatorPressHandler() {
        if (this.props.onIndicator)
            this.props.onIndicator();
    }
    /**
     * Обновление стилей
     * @param {INumericStepperProps} props
     */
    updateStyles(props) {
        let style = props.theme ? StyleProvider.get(props.theme) : undefined;
        if (!style)
            style = StyleProvider.get(NumericStepperThemeAlias.PRIMARY); // Стиль по-умолчанию
        this._styles = _.merge({}, props.style, style);
    }
    /**
     * @protected
     * @returns {INumericStepperStyle}
     */
    getStyleForState() {
        const result = {};
        result.contentViewStyle = this._styles.contentViewStyle;
        result.incrementTheme = this._styles.incrementTheme;
        result.decrementTheme = this._styles.decrementTheme;
        result.indicatorTheme = this._styles.indicatorTheme;
        return result;
    }
    /**
     * @react
     */
    render() {
        const { disabled } = this.state;
        const stateStyle = this.getStyleForState();
        return (<View style={stateStyle.contentViewStyle}>
        <Button text={this.props.decrementText} theme={stateStyle.decrementTheme} disabled={disabled} onPress={() => this.decrementHandler()}/>
        <Button text={this.formatFunction(this.state.value)} theme={stateStyle.indicatorTheme} disabled={disabled} onPress={() => this.indicatorPressHandler()}></Button>
        <Button text={this.props.incrementText} disabled={disabled} theme={stateStyle.incrementTheme} onPress={() => this.incrementHandler()}></Button>
      </View>);
    }
    /**
     * @react
     */
    componentWillUnmount() {
        this.dispose();
    }
    /**
     * @override
     */
    dispose() {
        this._styles = null;
    }
}
/**
 * минимальное значение
 */
NumericStepper.MIN_VALUE = Number.MIN_VALUE;
/**
 * Максимальное значение
 */
NumericStepper.MAX_VALUE = Number.MAX_VALUE;

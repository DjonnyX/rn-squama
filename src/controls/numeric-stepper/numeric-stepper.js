"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const button_1 = require("../button");
const lodash_1 = require("lodash");
const ALIAS = "NumericStepper";
/**
 * @class
 * @author Evgeny Grebennikov
 */
class NumericStepper extends react_1.default.Component {
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
        let style = props.theme ? theme_1.StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style)
            style = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        this._styles = lodash_1.default.merge({}, props.style, style);
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
        return (react_1.default.createElement(react_native_1.View, { style: stateStyle.contentViewStyle },
            react_1.default.createElement(button_1.Button, { text: this.props.decrementText, theme: stateStyle.decrementTheme, disabled: disabled, onPress: () => this.decrementHandler() }),
            react_1.default.createElement(button_1.Button, { text: this.formatFunction(this.state.value), theme: stateStyle.indicatorTheme, disabled: disabled, onPress: () => this.indicatorPressHandler() }),
            react_1.default.createElement(button_1.Button, { text: this.props.incrementText, disabled: disabled, theme: stateStyle.incrementTheme, onPress: () => this.incrementHandler() })));
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
NumericStepper.alias = ALIAS;
/**
 * минимальное значение
 */
NumericStepper.MIN_VALUE = Number.MIN_VALUE;
/**
 * Максимальное значение
 */
NumericStepper.MAX_VALUE = Number.MAX_VALUE;
exports.NumericStepper = NumericStepper;

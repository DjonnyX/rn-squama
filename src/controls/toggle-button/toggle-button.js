"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const theme_1 = require("../../theme");
const button_1 = require("../button");
const ALIAS = "ToggleButton";
/**
 * @author Evgeny Grebennikov
 */
class ToggleButton extends react_1.default.Component {
    /**
     * @constructor
     * @param {IToggleButtonProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
        this.state = {
            checked: props.checked,
            disabled: props.disabled
        };
    }
    /**
     * @react
     * @param {IToggleButtonProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
        this.setState(Object.assign({}, this.state, { checked: props.checked, disabled: props.disabled }));
    }
    /**
     * Обновление стилей.
     * Не учитываются сигментированные изменения в теме (для оптимизации)
     * @protected
     * @param {IToggleButtonProps} props
     */
    updateStyles(props) {
        let themeStyle = this.props.theme ? theme_1.StyleProvider.get(ALIAS, this.props.theme) : undefined;
        if (!themeStyle)
            themeStyle = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        const normalStyleName = themeStyle.normalStyleName;
        const checkedStyleName = themeStyle.checkedStyleName;
        const disabledStyleName = themeStyle.disabledStyleName;
        this._styles = {
            normalStyleName: normalStyleName,
            checkedStyleName: checkedStyleName,
            disabledStyleName: disabledStyleName
        };
    }
    /**
     * @protected
     * @param {boolean} checked
     * @param {boolean} disabled
     * @returns {string}
     */
    getStyleNameForState(checked, disabled) {
        if (disabled)
            return this._styles.disabledStyleName;
        if (checked)
            return this._styles.checkedStyleName;
        return this._styles.normalStyleName;
    }
    /**
     * @react
     */
    render() {
        const { checked } = this.state;
        const { disabled } = this.state;
        const stateStyleName = this.getStyleNameForState(checked, disabled);
        return (react_1.default.createElement(button_1.ButtonState, { text: this.props.text, theme: stateStyleName, onPress: () => this.baseButtonPressHandler() }, this.props.children));
    }
    /**
     * @protected
     */
    baseButtonPressHandler() {
        const checked = !this.state.checked;
        this.setState({ checked: checked });
        this.dispatchChanges(checked);
    }
    /**
     *
     * @param { boolean } value
     */
    dispatchChanges(value) {
        this.props.onChange(value);
    }
    /**
     * @override
     */
    componentWillUnmount() {
        this.dispose();
    }
    /**
     * dispose
     */
    dispose() {
        this._styles = null;
    }
}
ToggleButton.alias = ALIAS;
exports.ToggleButton = ToggleButton;

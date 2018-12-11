"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lodash_1 = require("lodash");
const theme_1 = require("../../theme");
const button_state_1 = require("./button-state");
const ALIAS = "Button";
/**
 * Базовая кнопка
 * @class
 * @author Evgeny Grebennikov
 */
class Button extends react_1.default.PureComponent {
    /**
     * @constructor
     * @param {IButtonProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {IButtonProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * Обновление стилей
     * @param {IButtonProps} props
     */
    updateStyles(props) {
        let themeStyle = props.theme ? theme_1.StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!themeStyle)
            themeStyle = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        const normalStyleName = themeStyle.normalStyleName;
        const disabledStyleName = themeStyle.disabledStyleName;
        this._styles = lodash_1.default.merge({}, {
            normalStyleName: normalStyleName,
            disabledStyleName: disabledStyleName
        }, props.style);
    }
    /**
     * @protected
     * @param {boolean} disabled
     * @returns {string}
     */
    getStyleNameForState(disabled) {
        return disabled ? this._styles.disabledStyleName : this._styles.normalStyleName;
    }
    /**
     * @override
     * @returns {JSX.Element}
     */
    render() {
        const { disabled } = this.props;
        const stateStyleName = this.getStyleNameForState(disabled);
        let attr = {};
        if (!disabled && this.props.onPress !== null)
            attr.onPress = () => { this.props.onPress(); };
        if (!disabled && this.props.onLongPress !== null)
            attr.onLongPress = () => { this.props.onLongPress; };
        return react_1.default.createElement(button_state_1.ButtonState, Object.assign({ text: this.props.text, theme: stateStyleName, children: this.props.children }, attr));
    }
    /**
     * @react
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
Button.alias = ALIAS;
exports.Button = Button;

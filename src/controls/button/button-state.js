"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const lodash_1 = require("lodash");
const theme_1 = require("../../theme");
const ALIAS = "ButtonState";
/**
 * Базовая кнопка с одним состоянием
 * @class
 * @author Evgeny Grebennikov
 */
class ButtonState extends react_1.default.PureComponent {
    /**
     * @constructor
     * @param {IButtonStateProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {IButtonStateProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * @protected
     * @param {IButtonStateProps} props
     */
    updateStyles(props) {
        let style = props.theme ? theme_1.StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style)
            style = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        this._styles = lodash_1.default.merge({}, style, props.style);
    }
    /**
     * @override
     * @returns {JSX.Element}
     */
    render() {
        let attr = {};
        if (this.props.onPress)
            attr.onPress = this.props.onPress;
        if (this.props.onLongPress)
            attr.onLongPress = this.props.onLongPress;
        return (react_1.default.createElement(react_native_1.View, { style: this._styles.containerViewStyle },
            react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({}, attr),
                react_1.default.createElement(react_native_1.View, { style: this._styles.buttonStyle },
                    this.props.text ? react_1.default.createElement(react_native_1.Text, { allowFontScaling: false, style: this._styles.textStyle },
                        this.props.text,
                        this.props.children) : undefined,
                    this.props.children ? this.props.children : undefined))));
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
ButtonState.alias = ALIAS;
exports.ButtonState = ButtonState;

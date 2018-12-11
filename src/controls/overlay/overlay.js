"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const popup_1 = require("../popup");
const lodash_1 = require("lodash");
const ALIAS = "Overlay";
/**
 * Базовый попап-элемент
 * @author Evgeny Grebennikov
 */
class Overlay extends react_1.default.PureComponent {
    /**
     * @constructor
     * @param {IOverlayProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {IOverlayProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * Закрывает попап
     */
    close() {
        popup_1.popupManager.hide(this.props.id);
        if (this.props.onClose)
            this.props.onClose(this.props.id);
    }
    /**
     * Обновление стилей
     * @param {IOverlayProps} props
     */
    updateStyles(props) {
        let style = props.theme ? theme_1.StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style)
            style = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        this._styles = lodash_1.default.merge({}, style, props.style);
    }
    /**
     * @param {GestureResponderEvent} e
     */
    outsidePressHandler(e) {
        if (this.props.isModal)
            this.close();
    }
    /**
     * @react
     */
    render() {
        return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: (event) => { this.outsidePressHandler(event); } },
            react_1.default.createElement(react_native_1.View, { style: this._styles.overlayStyle },
                react_1.default.createElement(react_native_1.View, { style: this._styles.viewStyle }, this.props.content))));
    }
}
Overlay.alias = ALIAS;
exports.Overlay = Overlay;

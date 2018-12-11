"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const overlay_1 = require("../overlay");
const popup_1 = require("../popup");
const button_1 = require("../button");
/**
 * @class
 * @author Evgeny Grebennikov
 */
class Alert extends react_1.default.Component {
    /**
     * Отображает alert с заданными параметрами
     * @param {IAlertInputProps} data
     * @returns {string}
     */
    static show(data) {
        return popup_1.popupManager.show({
            outlet: popup_1.PopupOutlet.defaultName,
            factory: (id, i) => {
                return react_1.default.createElement(Alert, Object.assign({}, Object.assign({}, data, { id: id, key: i })));
            }
        });
    }
    /**
     * @constructor
     * @param {IAlertProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {IAlertProps} props
     */
    componentWillReceiveProps(props) {
        if (props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * Обновление стилей
     * @protected
     * @param {IAlertProps} props
     */
    updateStyles(props) {
        this._styles = Object.assign({}, props.style);
    }
    /**
     * @protected
     * @param {any} data
     */
    onSuccess(data) {
        if (this.props.onSuccess)
            this.props.onSuccess(data);
    }
    /**
     * @protected
     */
    onClose() {
        if (this.props.onClose)
            this.props.onClose();
    }
    /**
     * Контент по-умолчанию
     * @returns {JSX.Element}
     */
    bodyRenderer() {
        const { title } = this.props;
        const { message } = this.props;
        return react_1.default.createElement(react_native_1.View, null,
            title ? react_1.default.createElement(react_native_1.Text, null, title) : undefined,
            message ? react_1.default.createElement(react_native_1.Text, null, message) : undefined);
    }
    /**
     * @react
     */
    render() {
        const { buttonCancelLabel } = this.props;
        const { buttonSuccessLabel } = this.props;
        return (react_1.default.createElement(overlay_1.Overlay, { id: this.props.id, key: this.props.key, isModal: this.props.isModal, theme: this._styles.overlayTheme, onClose: () => { this.onClose(); }, content: react_1.default.createElement(react_native_1.View, null,
                this.bodyRenderer(),
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(button_1.Button, { text: buttonCancelLabel }),
                    react_1.default.createElement(button_1.Button, { text: buttonSuccessLabel }))) }));
    }
}
exports.Alert = Alert;

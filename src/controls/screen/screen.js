"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const lodash_1 = require("lodash");
const popup_1 = require("../popup");
const theme_1 = require("../../theme");
const ALIAS = "Screen";
/**
 * Скрин с монтажной областью для попапов
 * @author Evgeny Grebennikov
 */
class Screen extends react_1.default.Component {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            isPopupActive: false
        };
        this.updateStyles(props);
    }
    /**
     * @protected
     * @param {boolean} val
     */
    activeOutlet(val) {
        this.setState(Object.assign({}, this.state, { isPopupActive: val }));
    }
    /**
     * @react
     * @param {IScreenProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * @protected
     * @param {IScreenProps} props
     */
    updateStyles(props) {
        let style = props.theme ? theme_1.StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style)
            style = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        this._styles = lodash_1.default.merge({}, style, props.style);
    }
    /**
     * @react
     * @returns {JSX.Element}
     */
    render() {
        const popupOutletName = this.props.outlet || popup_1.PopupOutlet.defaultName;
        const { isPopupActive } = this.state;
        return (react_1.default.createElement(react_native_1.View, { style: this._styles.containerStyle },
            react_1.default.createElement(react_native_1.View, { pointerEvents: isPopupActive ? "none" : "auto", style: this._styles.contentContainerStyle }, this.props.content),
            react_1.default.createElement(popup_1.PopupOutlet, { name: popupOutletName, onActive: () => { this.activeOutlet(true); }, onDeactive: () => { this.activeOutlet(false); } })));
    }
}
Screen.alias = ALIAS;
exports.Screen = Screen;

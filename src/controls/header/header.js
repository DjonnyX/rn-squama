"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const lodash_1 = require("lodash");
const theme_1 = require("../../theme");
const ALIAS = "Header";
/**
 * Базовая кнопка
 * @author Evgeny Grebennikov
 */
class Header extends react_1.default.PureComponent {
    /**
     * @constructor
     * @param {IHeaderProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {IHeaderProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * @protected
     * @param {IHeaderProps} props
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
        return (react_1.default.createElement(react_native_1.View, { style: this._styles.containerViewStyle },
            this.props.leftItems ? react_1.default.createElement(react_native_1.View, { style: this._styles.leftContainerStyle }, this.props.leftItems) : undefined,
            this.props.centerItems ? react_1.default.createElement(react_native_1.View, { style: this._styles.centerContainerStyle }, this.props.centerItems) : undefined,
            this.props.rightItems ? react_1.default.createElement(react_native_1.View, { style: this._styles.rightContainerStyle }, this.props.rightItems) : undefined));
    }
    /**
     * @react
     */
    componentWillUnmount() {
        this.dispose();
    }
    /**
     * очистка объекта
     * вызывать перед удалением
     */
    dispose() {
        this._styles = null;
    }
}
Header.alias = ALIAS;
exports.Header = Header;

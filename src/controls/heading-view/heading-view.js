"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const header_1 = require("../header");
const lodash_1 = require("lodash");
const ALIAS = "HeadingView";
/**
 * Вьюха с заголовком
 * @author Evgeny Grebennikov
 */
class HeadingView extends react_1.default.PureComponent {
    /**
     * @constructor
     * @param {IHeadingViewProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {IHeadingViewProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * @protected
     * @param {IHeadingViewProps} props
     */
    updateStyles(props) {
        let style = props.theme ? theme_1.StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style)
            style = theme_1.StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию
        this._styles = lodash_1.default.merge({}, style, props.style);
    }
    /**
     * @react
     */
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: this._styles.viewStyle },
            react_1.default.createElement(header_1.Header, { leftItems: this.props.headerLeftItems, centerItems: this.props.headerCenterItems, rightItems: this.props.headerRightItems, theme: this._styles.headerStyleName }),
            this.props.content));
    }
}
HeadingView.alias = ALIAS;
exports.HeadingView = HeadingView;

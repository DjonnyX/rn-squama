import React from "react";
import { View } from "react-native";
import _ from "lodash";
import { StyleProvider, HeaderThemeAlias } from "../../theme";
/**
 * Базовая кнопка
 * @author Evgeny Grebennikov
 */
export class Header extends React.PureComponent {
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
        let style = props.theme ? StyleProvider.get(props.theme) : undefined;
        if (!style)
            style = StyleProvider.get(HeaderThemeAlias.PRIMARY); // Стиль по-умолчанию
        this._styles = _.merge({}, style, props.style);
    }
    /**
     * @override
     * @returns {JSX.Element}
     */
    render() {
        return (<View style={this._styles.containerViewStyle}>
            {this.props.leftItems ? <View style={this._styles.leftContainerStyle}>{this.props.leftItems}</View> : undefined}
            {this.props.centerItems ? <View style={this._styles.centerContainerStyle}>{this.props.centerItems}</View> : undefined}
            {this.props.rightItems ? <View style={this._styles.rightContainerStyle}>{this.props.rightItems}</View> : undefined}
        </View>);
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

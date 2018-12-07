import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import _ from "lodash";
import { StyleProvider, ButtonStateThemeAlias } from "../../theme";
/**
 * Базовая кнопка с одним состоянием
 * @class
 * @author Evgeny Grebennikov
 */
export class ButtonState extends React.PureComponent {
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
        let style = props.theme ? StyleProvider.get(props.theme) : undefined;
        if (!style)
            style = StyleProvider.get(ButtonStateThemeAlias.PRIMARY_NORMAL); // Стиль по-умолчанию
        this._styles = _.merge({}, style, props.style);
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
        return (<View style={this._styles.containerViewStyle}>
            <TouchableOpacity {...attr}>
                <View style={this._styles.buttonStyle}>
                    {this.props.text ? <Text allowFontScaling={false} style={this._styles.textStyle}>{this.props.text}{this.props.children}</Text> : undefined}
                    {this.props.children ? this.props.children : undefined}
                </View>
            </TouchableOpacity>
        </View>);
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

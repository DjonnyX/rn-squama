import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { StyleProvider, OverlayThemeAlias } from "../../theme";
import { popupManager } from "../popup";
import _ from "lodash";
/**
 * Базовый попап-элемент
 * @author Evgeny Grebennikov
 */
export class Overlay extends React.PureComponent {
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
        popupManager.hide(this.props.id);
        if (this.props.onClose)
            this.props.onClose(this.props.id);
    }
    /**
     * Обновление стилей
     * @param {IOverlayProps} props
     */
    updateStyles(props) {
        let style = props.theme ? StyleProvider.get(props.theme) : undefined;
        if (!style)
            style = StyleProvider.get(OverlayThemeAlias.PRIMARY); // Стиль по-умолчанию
        this._styles = _.merge({}, style, props.style);
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
        return (<TouchableWithoutFeedback onPress={(event) => { this.outsidePressHandler(event); }}>
                <View style={this._styles.overlayStyle}>
                    <View style={this._styles.viewStyle}>
                        {this.props.content}
                    </View>
                </View>
            </TouchableWithoutFeedback>);
    }
}

import React from "react";
import { View } from "react-native";
import _ from "lodash";
import { PopupOutlet } from "../popup";
import { StyleProvider, ScreenThemeAlias } from "../../theme";
/**
 * Скрин с монтажной областью для попапов
 * @author Evgeny Grebennikov
 */
export class Screen extends React.Component {
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
        let style = props.theme ? StyleProvider.get(props.theme) : undefined;
        if (!style)
            style = StyleProvider.get(ScreenThemeAlias.BASE); // Стиль по-умолчанию
        this._styles = _.merge({}, style, props.style);
    }
    /**
     * @react
     * @returns {JSX.Element}
     */
    render() {
        const popupOutletName = this.props.outlet || PopupOutlet.defaultName;
        const { isPopupActive } = this.state;
        return (<View style={this._styles.containerStyle}>
                <View pointerEvents={isPopupActive ? "none" : "auto"} style={this._styles.contentContainerStyle}>
                    {this.props.content}
                </View>
                <PopupOutlet name={popupOutletName} onActive={() => { this.activeOutlet(true); }} onDeactive={() => { this.activeOutlet(false); }}></PopupOutlet>
            </View>);
    }
}

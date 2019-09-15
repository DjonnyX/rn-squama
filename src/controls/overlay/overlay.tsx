import React from "react";
import { View, ViewStyle, TouchableWithoutFeedback, GestureResponderEvent } from "react-native";
import { StyleProvider, Theme } from "../../theme";
import { popupManager } from "../popup";
import _ from "lodash";

export interface IOverlayStyle {
    overlayStyle?: ViewStyle;
    viewStyle?: ViewStyle;
}

export interface IOverlayProps {
    id?: string;
    isModal?: boolean;
    theme?: string;
    style?: IOverlayStyle;
    content?: JSX.Element | string;
    onClose?(id: string): void;
}

const ALIAS: string = "Overlay";

export class Overlay extends React.PureComponent<IOverlayProps> {

    public static alias: string = ALIAS;

    protected _styles: IOverlayStyle;

    private _outsidePressHandler = (e: GestureResponderEvent) => {
        if (this.props.isModal) this.close();
    }

    constructor(props: IOverlayProps) {
        super(props);

        this.updateStyles(props);
    }

    componentWillReceiveProps(props: IOverlayProps) {
        if (props.theme !== this.props.theme || props.style !== this.props.style) this.updateStyles(props);
    }

    public close(): void {
        popupManager.hide(this.props.id);
        if (this.props.onClose) this.props.onClose(this.props.id);
    }

    protected updateStyles(props: IOverlayProps): void {

        let style: IOverlayStyle = props.theme ? StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style) style = StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию

        this._styles = _.merge({}, style, props.style);
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={ this._outsidePressHandler }>
                <View
                    style={this._styles.overlayStyle} >
                    <View
                        style={this._styles.viewStyle} >
                        {this.props.content}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
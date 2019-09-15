import React from "react";
import { View, Text, ViewStyle, TextStyle, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import _ from "lodash";
import { StyleProvider, Theme } from "../../theme";

export interface IButtonStateStyle {
    containerViewStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    touchableStyle?: any;
}

export interface IButtonStateProps {
    theme?: string;
    style?: IButtonStateStyle;
    text?: string;
    onPress?(): void;
    onLongPress?(): void;
    children?: JSX.Element | string;
}

const ALIAS: string = "ButtonState";

/**
 * Базовая кнопка с одним состоянием
 */
export class ButtonState extends React.PureComponent<IButtonStateProps> {

    public static alias: string = ALIAS;

    protected _styles: IButtonStateStyle;

    constructor(props: IButtonStateProps) {
        super(props);

        this.updateStyles(props);
    }

    componentWillReceiveProps(props: IButtonStateProps) {
        if (props.theme !== this.props.theme || props.style !== this.props.style) this.updateStyles(props);
    }

    protected updateStyles(props: IButtonStateProps): void {
        let style: IButtonStateStyle = props.theme ? StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style) style = StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию

        this._styles = _.merge({}, style, props.style);
    }

    private _onPressHandler = () => {
        if (this.props.onPress) this.props.onPress();
    }

    private _onLongPressHandler = () => {
        if (this.props.onPress) this.props.onLongPress();
    }

    public render(): JSX.Element {
        return (<View style={this._styles.containerViewStyle}>
            <TouchableOpacity
                onPress={this._onPressHandler}
                onLongPress={this._onLongPressHandler}>
                <View style={this._styles.buttonStyle}>
                    {
                        this.props.text ? <Text allowFontScaling={false} style={this._styles.textStyle}>{this.props.text}{this.props.children}</Text> : undefined
                    }
                    {
                        this.props.children ? this.props.children : undefined
                    }
                </View>
            </TouchableOpacity>
        </View>
        );
    }

    componentWillUnmount() {
        this.dispose();
    }

    public dispose(): void {
        this._styles = null;
    }
}
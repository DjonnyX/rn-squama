import React from "react";
import { View, ViewStyle } from "react-native";
import _ from "lodash";
import { StyleProvider, Theme } from "../../theme";

export interface IHeaderStyle {
    containerViewStyle?: ViewStyle;
    leftContainerStyle?: ViewStyle;
    centerContainerStyle?: ViewStyle;
    rightContainerStyle?: ViewStyle;
}

export interface IHeaderProps {
    theme?: string;
    style?: IHeaderStyle;
    leftItems?: JSX.Element | string;
    centerItems?: JSX.Element | string;
    rightItems?: JSX.Element | string;
}

const ALIAS: string = "Header";

export class Header extends React.PureComponent<IHeaderProps> {

    public static alias: string = ALIAS;
 
    private _styles: IHeaderStyle;

    constructor(props: IHeaderProps) {
        super(props);

        this.updateStyles(props);
    }

    componentWillReceiveProps(props: IHeaderProps) {
        if (props.theme !== this.props.theme || props.style !== this.props.style) this.updateStyles(props);
    }

    protected updateStyles(props: IHeaderProps): void {

        let style: IHeaderStyle = props.theme ? StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style) style = StyleProvider.getDefault(ALIAS);

        this._styles = _.merge({}, style, props.style);
    }

    public render(): JSX.Element {
        return (<View style={this._styles.containerViewStyle}>
            {this.props.leftItems ? <View style={this._styles.leftContainerStyle}>{this.props.leftItems}</View> : undefined}
            {this.props.centerItems ? <View style={this._styles.centerContainerStyle}>{this.props.centerItems}</View> : undefined}
            {this.props.rightItems ? <View style={this._styles.rightContainerStyle}>{this.props.rightItems}</View> : undefined}
        </View>
        );
    }

    componentWillUnmount(): void {
        this.dispose();
    }

    public dispose(): void {
        this._styles = null;
    }
}
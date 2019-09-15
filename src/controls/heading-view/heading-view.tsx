import React from "react";
import { ViewStyle, View } from "react-native";
import { StyleProvider, Theme } from "../../theme";
import { Header } from "../header";
import _ from "lodash";

export interface IHeadingViewStyle {
    headerStyleName?: string;
    viewStyle?: ViewStyle;
}

export interface IHeadingViewProps {
    theme?: string;
    style?: IHeadingViewStyle;
    content?: JSX.Element;
    headerLeftItems?: JSX.Element | string;
    headerCenterItems?: JSX.Element | string;
    headerRightItems?: JSX.Element | string;
}

const ALIAS: string = "HeadingView";

export class HeadingView extends React.PureComponent<IHeadingViewProps> {

    public static alias: string = ALIAS;

    protected _styles: IHeadingViewStyle;

    constructor(props: IHeadingViewProps) {
        super(props);

        this.updateStyles(props);
    }

    componentWillReceiveProps(props: IHeadingViewProps) {
        if (props.theme !== this.props.theme || props.style !== this.props.style) this.updateStyles(props);
    }

    protected updateStyles(props: IHeadingViewProps): void {

        let style: IHeadingViewStyle = props.theme ? StyleProvider.get(ALIAS, props.theme) : undefined;
        if (!style) style = StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию

        this._styles = _.merge({}, style, props.style);
    }

    render() {
        return (
            <View style={this._styles.viewStyle}>
                <Header
                    leftItems={this.props.headerLeftItems}
                    centerItems={this.props.headerCenterItems}
                    rightItems={this.props.headerRightItems}
                    theme={this._styles.headerStyleName}>
                </Header>
                {this.props.content}
            </View>
        );
    }
}
import React from "react";
import { View } from "react-native";
import { StyleProvider, HeadingViewThemeAlias } from "../../theme";
import { Header } from "../header";
import _ from "lodash";
/**
 * Вьюха с заголовком
 * @author Evgeny Grebennikov
 */
export class HeadingView extends React.PureComponent {
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
        let style = props.theme ? StyleProvider.get(props.theme) : undefined;
        if (!style)
            style = StyleProvider.get(HeadingViewThemeAlias.PRIMARY); // Стиль по-умолчанию
        this._styles = _.merge({}, style, props.style);
    }
    /**
     * @react
     */
    render() {
        return (<View style={this._styles.viewStyle}>
                <Header leftItems={this.props.headerLeftItems} centerItems={this.props.headerCenterItems} rightItems={this.props.headerRightItems} theme={this._styles.headerStyleName}>
                </Header>
                {this.props.content}
            </View>);
    }
}

import React from "react";
import { View, ViewStyle, Alert } from "react-native";
import _ from "lodash";
import { PopupOutlet } from "../popup";
import { StyleProvider, Theme } from "../../theme";

export interface IScreenStyle {
  containerStyle: ViewStyle;
  contentContainerStyle: ViewStyle;
}

export interface IScreenProps {
  content?: JSX.Element;
  outlet?: string;
  style?: IScreenStyle;
  theme?: string;
}

interface IScreenState {
  isPopupActive: boolean;
}

const ALIAS: string = "Screen";

export class Screen extends React.Component<IScreenProps, IScreenState> {
  public static alias: string = ALIAS;

  protected _styles: IScreenStyle;

  private _onActivePopupHandler = () => {
    this.activeOutlet(true);
  };

  private _onDeactivePopupHandler = () => {
    this.activeOutlet(false);
  };

  constructor(props: IScreenProps) {
    super(props);

    this.state = {
      isPopupActive: false
    };

    this.updateStyles(props);
  }

  protected activeOutlet(val: boolean): void {
    this.setState({ ...this.state, ...{ isPopupActive: val } });
  }

  componentWillReceiveProps(props: IScreenProps) {
    if (props.theme !== this.props.theme || props.style !== this.props.style)
      this.updateStyles(props);
  }

  protected updateStyles(props: IScreenProps): void {
    let style: IScreenStyle = props.theme
      ? StyleProvider.get(ALIAS, props.theme)
      : undefined;
    if (!style) style = StyleProvider.getDefault(ALIAS);

    this._styles = _.merge({}, style, props.style);
  }

  render() {
    const popupOutletName: string =
      this.props.outlet || PopupOutlet.defaultName;

    const { isPopupActive } = this.state;

    return (
      <View style={this._styles.containerStyle}>
        <View
          pointerEvents={isPopupActive ? "none" : "auto"}
          style={this._styles.contentContainerStyle}
        >
          {this.props.content}
        </View>
        <PopupOutlet
          name={popupOutletName}
          onActive={this._onActivePopupHandler}
          onDeactive={this._onDeactivePopupHandler}
        />
      </View>
    );
  }
}

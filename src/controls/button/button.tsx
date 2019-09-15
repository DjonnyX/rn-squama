import React from "react";
import _ from "lodash";
import { StyleProvider, Theme } from "../../theme";
import { ButtonState } from "./button-state";

/**
 * стили
 */
export interface IButtonStyle {
  normalStyleName?: string;
  disabledStyleName?: string;
}

export interface IButtonProps {
  theme?: string;
  style?: IButtonStyle;
  text?: string;
  disabled?: boolean;
  onPress?(): void;
  onLongPress?(): void;
  children?: JSX.Element | string;
}

const ALIAS: string = "Button";

/**
 * Базовая кнопка
 */
export class Button extends React.PureComponent<IButtonProps> {
  public static alias: string = ALIAS;

  /**
   * стили
   */
  protected _styles: IButtonStyle;

  constructor(props: IButtonProps) {
    super(props);

    this.updateStyles(props);
  }

  componentWillReceiveProps(props: IButtonProps) {
    if (props.theme !== this.props.theme || props.style !== this.props.style)
      this.updateStyles(props);
  }

  /**
   * Обновление стилей
   */
  protected updateStyles(props: IButtonProps): void {
    let themeStyle: IButtonStyle = props.theme
      ? StyleProvider.get(ALIAS, props.theme)
      : undefined;
    if (!themeStyle) themeStyle = StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию

    const normalStyleName = themeStyle.normalStyleName;
    const disabledStyleName = themeStyle.disabledStyleName;

    this._styles = _.merge(
      {},
      {
        normalStyleName: normalStyleName,
        disabledStyleName: disabledStyleName
      },
      props.style
    );
  }

  protected getStyleNameForState(disabled: boolean): string {
    return disabled
      ? this._styles.disabledStyleName
      : this._styles.normalStyleName;
  }

  public render(): JSX.Element {
    const { disabled } = this.props;

    const stateStyleName = this.getStyleNameForState(disabled);

    return (
      <ButtonState
        text={this.props.text}
        theme={stateStyleName}
        children={this.props.children}
        onPress={this.props.onPress}
        onLongPress={this.props.onLongPress}
      />
    );
  }

  componentWillUnmount() {
    this.dispose();
  }

  public dispose(): void {
    this._styles = null;
  }
}

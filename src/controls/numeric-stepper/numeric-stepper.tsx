import React from "react";
import { ViewStyle, View } from "react-native";
import { StyleProvider, Theme } from "../../theme";
import { Button } from "../button";
import _ from "lodash";

export interface INumericStepperProps extends INumericStepperInputData {
  style?: INumericStepperStyles;
  theme?: string;
  onIncrement?(value: number): void;
  onDecrement?(value: number): void;
  onIndicator?(): void;
  incrementText?: string;
  decrementText?: string;
  formatFunction?(value: number): string;
}

export interface INumericStepperState extends INumericStepperInputData {}

export interface INumericStepperStyles {
  contentViewStyle?: ViewStyle;
  contentViewActiveStyle?: ViewStyle;
  contentViewSelectedStyle?: ViewStyle;
  decrementTheme?: string;
  decrementActiveTheme?: string;
  decrementSelectedTheme?: string;
  incrementTheme?: string;
  incrementActiveTheme?: string;
  incrementSelectedTheme?: string;
  indicatorTheme?: string;
  indicatorActiveTheme?: string;
  indicatorSelectedTheme?: string;
}

interface INumericStepperInputData {
  step?: number;
  disabled?: boolean;
  minValue?: number;
  maxValue?: number;
  value?: number;
}

interface INumericStepperStyle {
  contentViewStyle?: ViewStyle;
  incrementTheme?: string;
  decrementTheme?: string;
  indicatorTheme?: string;
}

const ALIAS: string = "NumericStepper";

export class NumericStepper extends React.Component<
  INumericStepperProps,
  INumericStepperState
> {
  private _decrementHandler(): void {
    const state = { ...this.state };
    if (state.value > this.props.minValue) state.value -= this.props.step;
    this.setState(state);
    if (this.props.onDecrement) this.props.onDecrement(state.value);
  }

  private _incrementHandler = () => {
    const state = { ...this.state };
    if (state.value < this.props.maxValue) state.value += this.props.step;

    this.setState(state);

    if (this.props.onIncrement) this.props.onIncrement(state.value);
  };

  private _indicatorPressHandler() {
    if (this.props.onIndicator) this.props.onIndicator();
  }

  public static alias: string = ALIAS;

  private static MIN_VALUE: number = Number.MIN_VALUE;

  private static MAX_VALUE: number = Number.MAX_VALUE;

  protected _styles: INumericStepperStyles;

  protected get formatFunction(): (v: number) => string {
    if (this.props.formatFunction) return this.props.formatFunction;
    return this.defaultFormatFunction;
  }

  constructor(props: INumericStepperProps) {
    super(props);

    this.updateStyles(props);

    this.state = {
      disabled: this.props.disabled || false,
      value: this.props.value || 0,
      minValue: this.props.minValue || NumericStepper.MIN_VALUE,
      maxValue: this.props.maxValue || NumericStepper.MAX_VALUE
    };
  }

  componentWillReceiveProps(props: INumericStepperProps) {
    if (props.theme !== this.props.theme || props.style !== this.props.style)
      this.updateStyles(props);
  }

  protected defaultFormatFunction(value: number): string {
    return String(value);
  }

  protected updateStyles(props: INumericStepperProps): void {
    let style: INumericStepperStyles = props.theme
      ? StyleProvider.get(ALIAS, props.theme)
      : undefined;
    if (!style) style = StyleProvider.getDefault(ALIAS);

    this._styles = _.merge({}, props.style, style);
  }

  protected getStyleForState(): INumericStepperStyle {
    const result: INumericStepperStyle = {};
    result.contentViewStyle = this._styles.contentViewStyle;
    result.incrementTheme = this._styles.incrementTheme;
    result.decrementTheme = this._styles.decrementTheme;
    result.indicatorTheme = this._styles.indicatorTheme;

    return result;
  }

  render() {
    const { disabled } = this.state;
    const stateStyle: INumericStepperStyle = this.getStyleForState();

    return (
      <View style={stateStyle.contentViewStyle}>
        <Button
          text={this.props.decrementText}
          theme={stateStyle.decrementTheme}
          disabled={disabled}
          onPress={this._decrementHandler}
        />
        <Button
          text={this.formatFunction(this.state.value)}
          theme={stateStyle.indicatorTheme}
          disabled={disabled}
          onPress={this._indicatorPressHandler}
        />
        <Button
          text={this.props.incrementText}
          disabled={disabled}
          theme={stateStyle.incrementTheme}
          onPress={this._incrementHandler}
        />
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

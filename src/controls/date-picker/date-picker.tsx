import React from "react";
import { ViewStyle, View } from "react-native";
import moment from "moment";
import _ from "lodash";
import { StyleProvider } from "../../theme";
import { Button } from "../button";
import { popupManager } from "../popup";
import {
  normalizeDate,
  ICalendarRangeData,
  CalendarPopup,
  ICalendarPopupStyles,
  ICalendarPopupInputData
} from "../calendar";

export interface IDatePickerProps
  extends IDatePickerInputData,
    ICalendarPopupInputData {
  style?: IDatePickerStyles;
  theme?: string;
  outlet?: string;
  onClose?(): void;
  onChange?(data: ICalendarRangeData): void;
}

export interface IDatePickerState extends IDatePickerInputData {
  minDate?: Date;
  maxDate?: Date;
  startDate?: Date;
  endDate?: Date;
}

export interface IDatePickerStyles {
  overlayTheme?: string;
  pickerContentViewStyle?: ViewStyle;
  pickerContentViewActiveStyle?: ViewStyle;
  pickerContentViewSelectedStyle?: ViewStyle;
  pickerButtonDecrementTheme?: string;
  pickerButtonDecrementActiveTheme?: string;
  pickerButtonDecrementSelectedTheme?: string;
  pickerButtonIncrementTheme?: string;
  pickerButtonIncrementActiveTheme?: string;
  pickerButtonIncrementSelectedTheme?: string;
  pickerIndicatorTheme?: string;
  pickerIndicatorActiveTheme?: string;
  pickerIndicatorSelectedTheme?: string;
  calendarPopupStyles?: ICalendarPopupStyles;
}

interface IDatePickerInputData {
  opened?: boolean;
  active?: boolean;
  disabled?: boolean;
}

interface IPickerStyle {
  contentViewStyle?: ViewStyle;
  buttonIncrementTheme?: string;
  buttonDecrementTheme?: string;
  buttonIndicatorTheme?: string;
}

const ALIAS: string = "DatePicker";

export class DatePicker extends React.Component<
  IDatePickerProps,
  IDatePickerState
> {
  public static alias: string = ALIAS;

  public static DEFAULT_MAX_DATE_LENGTH: number = 30;

  protected get defaultMinDate(): Date {
    return normalizeDate(new Date());
  }

  protected get defaultMaxDate(): Date {
    const date = normalizeDate(new Date());
    date.setDate(date.getDate() + DatePicker.DEFAULT_MAX_DATE_LENGTH);
    return date;
  }

  protected get defaultStartDate(): Date {
    return this.defaultMinDate;
  }

  protected get defaultEndDate(): Date {
    return this.defaultMaxDate;
  }

  protected _styles: IDatePickerStyles;

  constructor(props: IDatePickerProps) {
    super(props);

    this.updateStyles(props);

    const defaultStateParams: IDatePickerState = {
      minDate: this.defaultMinDate,
      maxDate: this.defaultMaxDate,
      startDate: this.defaultStartDate,
      endDate: this.defaultEndDate,
      opened: this.props.opened || false,
      active: this.props.active || false,
      disabled: this.props.disabled || false
    };

    this.state = props.useRange
      ? { ...defaultStateParams, ...props.rangeConfig }
      : { ...defaultStateParams, ...props.config };
  }

  componentWillReceiveProps(props: IDatePickerProps) {
    if (props.theme !== this.props.theme || props.style !== this.props.style)
      this.updateStyles(props);
    if (props.hasOwnProperty("active"))
      this.state = { ...this.state, ...{ active: props.active } };
  }

  private _decrementHandler = () => {
    const { startDate, minDate } = this.state;

    const s = moment(startDate)
      .subtract(1, "days")
      .toDate();
    if (s.getTime() <= minDate.getTime()) return;

    this.setState({ ...this.state, ...{ startDate: s } });

    this._submitChanges();
  };

  private _incrementHandler = () => {
    const { endDate, maxDate } = this.state;

    const e = moment(endDate)
      .add(1, "days")
      .toDate();
    if (e.getTime() >= maxDate.getTime()) return;

    this.setState({ ...this.state, ...{ endDate: e } });

    this._submitChanges();
  };

  private _openCalendarHandler = () => {
    this.setState({ ...this.state, ...{ opened: true } });
    this.showCalendar();
  };

  private _calendarCloseHandler = () => {
    this.setState({ ...this.state, ...{ opened: false } });
  };

  private _calendarChangeHandler = (data: ICalendarRangeData) => {
    this.setState({ ...this.state, ...data });

    this._submitChanges();
  };

  private _submitChanges = () => {
    const { startDate, endDate } = this.state;
    if (this.props.onChange)
      this.props.onChange({ startDate: startDate, endDate: endDate });
  };

  protected showCalendar(): void {
    popupManager.show({
      outlet: this.props.outlet,
      factory: (id, i) => {
        return (
          <CalendarPopup
            id={id}
            isModal
            autoComplete
            numViewports={2}
            useRange={this.props.useRange}
            config={this.props.config}
            rangeConfig={this.props.rangeConfig}
            style={this._styles.calendarPopupStyles}
            onComplete={this._calendarChangeHandler}
            onClose={this._calendarCloseHandler}
            key={i}
          />
        );
      }
    });
  }

  protected formatDate(date: Date): string {
    return moment(date).format("DD.MM.YY");
  }

  protected updateStyles(props: IDatePickerProps): void {
    let style: IDatePickerStyles = props.theme
      ? StyleProvider.get(ALIAS, props.theme)
      : undefined;
    if (!style) style = StyleProvider.getDefault(ALIAS);

    this._styles = _.merge({}, props.style, style);
  }

  protected getStyleForState(
    opened: boolean,
    active: boolean,
    disabled: boolean
  ): IPickerStyle {
    const result: IPickerStyle = {};
    if (opened) {
      result.contentViewStyle = this._styles.pickerContentViewSelectedStyle;
      result.buttonIncrementTheme = this._styles.pickerButtonIncrementSelectedTheme;
      result.buttonDecrementTheme = this._styles.pickerButtonDecrementSelectedTheme;
      result.buttonIndicatorTheme = this._styles.pickerIndicatorSelectedTheme;
    } else if (active) {
      result.contentViewStyle = this._styles.pickerContentViewActiveStyle;
      result.buttonIncrementTheme = this._styles.pickerButtonIncrementActiveTheme;
      result.buttonDecrementTheme = this._styles.pickerButtonDecrementActiveTheme;
      result.buttonIndicatorTheme = this._styles.pickerIndicatorActiveTheme;
    } else {
      result.contentViewStyle = this._styles.pickerContentViewStyle;
      result.buttonIncrementTheme = this._styles.pickerButtonIncrementTheme;
      result.buttonDecrementTheme = this._styles.pickerButtonDecrementTheme;
      result.buttonIndicatorTheme = this._styles.pickerIndicatorTheme;
    }

    return result;
  }

  public render(): JSX.Element {
    const { startDate, endDate, opened, active, disabled } = this.state;

    const dateStr = `${this.formatDate(startDate)} - ${this.formatDate(
      endDate
    )}`;

    const stateStyle: IPickerStyle = this.getStyleForState(
      opened,
      active,
      disabled
    );

    return (
      <View style={this._styles.pickerContentViewStyle}>
        <View style={stateStyle.contentViewStyle}>
          <Button
            // disabled={startDate.getTime() <= minDate.getTime()}
            text="<"
            theme={stateStyle.buttonDecrementTheme}
            onPress={this._decrementHandler}
          />
          <Button
            text={dateStr}
            theme={stateStyle.buttonIndicatorTheme}
            onPress={this._openCalendarHandler}
          />
          <Button
            // disabled={endDate.getTime() >= maxDate.getTime()}
            text=">"
            theme={stateStyle.buttonIncrementTheme}
            onPress={this._incrementHandler}
          />
        </View>
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

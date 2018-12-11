import React from "react";
import { ViewStyle } from "react-native";
import { ICalendarRangeData, ICalendarRangeConfig, ICalendarConfig } from "./calendar";
/**
 * стили
 */
export interface ICalendarPopupStyles {
    overlayTheme?: string;
    calendarContainerStyle?: ViewStyle;
    calendarTheme?: string;
    calendarWidth?: number;
    calendarHeight?: number;
}
/**
 * @interface
 */
export interface ICalendarPopupInputData {
    useRange?: boolean;
    rangeConfig?: ICalendarRangeConfig;
    config?: ICalendarConfig;
    autoComplete?: boolean;
    numViewports?: number;
}
/**
 * @react-props
 */
export interface ICalendarPopupProps extends ICalendarPopupInputData {
    style?: ICalendarPopupStyles;
    id?: string;
    key?: string | number;
    isModal?: boolean;
    onClose?(): void;
    onComplete?(data: ICalendarRangeData): void;
}
/**
 * @react-state
 */
export interface ICalendarPopupState extends ICalendarConfig, ICalendarRangeConfig {
    newSelection?: boolean;
}
/**
 * @class
 * @author Evgeny Grebennikov
 */
export declare class CalendarPopup extends React.Component<ICalendarPopupProps, ICalendarPopupState> {
    /**
     * дефолтовое зн-е количества вьюпортов
     */
    static defaultNumViewports: number;
    /**
     * @private
     */
    private _numViewports;
    /**
     * стили
     */
    private _styles;
    /**
     * @constructor
     * @param {ICalendarPopupProps} props
     */
    constructor(props: ICalendarPopupProps);
    /**
     * @react
     * @param {ICalendarPopupProps} props
     */
    componentWillReceiveProps(props: ICalendarPopupProps): void;
    /**
     * Обновление стилей
     * @protected
     * @param {ICalendarPopupProps} props
     */
    protected updateStyles(props: ICalendarPopupProps): void;
    /**
     * @protected
     * @param {ICalendarRangeData} data
     * @param {boolean} newSelection
     */
    protected calendarChange(data: ICalendarRangeData, newSelection: boolean): void;
    /**
     * @private
     * @returns {JSX.Element}
     */
    private calendarRenderer;
    /**
     * @protected
     * @param {ICalendarRangeData} data
     */
    protected onComplete(data: ICalendarRangeData): void;
    /**
     * @protected
     */
    protected onClose(): void;
    /**
     * @react
     */
    render(): JSX.Element;
}

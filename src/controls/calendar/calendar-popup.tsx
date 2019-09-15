import React from "react";
import { ViewStyle, View } from "react-native";
import { Overlay } from "../overlay";
import { ICalendarRangeData, ICalendarRangeConfig, ICalendarConfig, Calendar } from "./calendar";
import { popupManager } from "../popup";

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

export interface ICalendarPopupInputData {
    useRange?: boolean;
    rangeConfig?: ICalendarRangeConfig;
    config?: ICalendarConfig;
    autoComplete?: boolean;
    numViewports?: number;
}

export interface ICalendarPopupProps extends ICalendarPopupInputData {
    style?: ICalendarPopupStyles;
    id?: string;
    key?: string | number;
    isModal?: boolean;
    onClose?(): void;
    onComplete?(data: ICalendarRangeData): void;
}

export interface ICalendarPopupState extends ICalendarConfig, ICalendarRangeConfig {
    newSelection?: boolean;
}

export class CalendarPopup extends React.Component<ICalendarPopupProps, ICalendarPopupState> {

    /**
     * дефолтовое зн-е количества вьюпортов 
     */
    public static defaultNumViewports: number = 1;

    private _numViewports: null[] = [];

    /**
     * стили
     */
    private _styles: ICalendarPopupStyles;

    private _onCloseHandler(): void {
        if (this.props.onClose) this.props.onClose();
    }

    constructor(props: ICalendarPopupProps) {
        super(props);

        for (let i = 0, l = props.numViewports || CalendarPopup.defaultNumViewports; i < l; i++) {
            this._numViewports.push(null);
        }

        const { rangeConfig } = props;
        const { config } = props;

        this.state = this.props.useRange ? { ...{}, ...rangeConfig } : { ...{}, ...config }
        this.updateStyles(props);
    }

    componentWillReceiveProps(props: ICalendarPopupProps) {
        if (props.style !== this.props.style) this.updateStyles(props);
    }

    /**
     * Обновление стилей
     */
    protected updateStyles(props: ICalendarPopupProps): void {
        this._styles = { ...props.style };
    }

    protected calendarChange(data: ICalendarRangeData, newSelection: boolean): void {
        if (this.props.useRange) this.setState({ ...this.state, ...data as ICalendarRangeConfig, ...{ newSelection: newSelection } });
        else this.setState({ ...this.state, ...{ startDate: data as Date }, ...{ newSelection: newSelection } });

        if ((this.props.autoComplete && this.props.useRange && !newSelection) || (this.props.autoComplete && !this.props.useRange)) {
            this.onComplete(data);
            popupManager.hide(this.props.id);
            this._onCloseHandler();
        }
    }

    private calendarRenderer(): JSX.Element {
        const width = this._styles.calendarWidth * .5;

        const config = { ...this.state };

        const viewportsNum = this._numViewports.length;
        return <View style={this._styles.calendarContainerStyle}>
            {
                this._numViewports.map((v, i) => {
                    return <Calendar key={i} index={i} newSelection={this.state.newSelection} integrate
                        useRange={this.props.useRange} config={config} rangeConfig={config}
                        width={width} height={this._styles.calendarHeight} viewportsNum={viewportsNum}
                        onSelect={(data, newSelection) => { this.calendarChange(data, newSelection) }} />
                })
            }
        </View>;
    }

    protected onComplete(data: ICalendarRangeData): void {
        if (this.props.onComplete) this.props.onComplete(data);
    }

    render() {
        return (<Overlay
            id={this.props.id}
            key={this.props.key}
            isModal={this.props.isModal}
            theme={this._styles.overlayTheme}
            onClose={this._onCloseHandler}
            content={
                this.calendarRenderer()
            } />
        );
    }
}
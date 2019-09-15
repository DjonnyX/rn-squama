import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { Overlay } from "../overlay";
import { popupManager, PopupOutlet } from "../popup";
import { Button } from "../button";

export interface IAlertStyles {
    overlayTheme?: string;
    footerStyle?: ViewStyle;
    alertWidth?: number;
    alertHeight?: number;
}

export interface IAlertProps extends IAlertInputProps {
    id?: string;
    key?: string | number;
}

export interface IAlertInputProps {
    style?: IAlertStyles;
    title?: string;
    message?: string;
    buttonCancelLabel?: string;
    buttonSuccessLabel?: string;
    isModal?: boolean;
    onClose?(): void;
    onSuccess?(data?: any): void;
    onCancel?(data?: any): void;
}

export class Alert extends React.Component<IAlertProps> {

    protected _onSuccessHandler(data: any): void {
        if (this.props.onSuccess) this.props.onSuccess(data);
    }

    private _onCloseHandler(): void {
        if (this.props.onClose) this.props.onClose();
    }

    /**
     * Отображает alert с заданными параметрами
     */
    static show(data: IAlertInputProps) {
        return popupManager.show({
            outlet: PopupOutlet.defaultName,
            factory: (id, i) => {
                return <Alert {...{ ...data, ...{ id: id, key: i } }} />
            }
        });
    }

    private _styles: IAlertStyles;

    constructor(props: IAlertProps) {
        super(props);

        this.updateStyles(props);
    }

    componentWillReceiveProps(props: IAlertProps) {
        if (props.style !== this.props.style) this.updateStyles(props);
    }

    /**
     * Обновление стилей
     */
    protected updateStyles(props: IAlertProps): void {
        this._styles = { ...props.style };
    }

    /**
     * Контент по-умолчанию
     */
    protected bodyRenderer(): JSX.Element {
        const { title } = this.props;
        const { message } = this.props;
        return <View>
            {title ? <Text>{title}</Text> : undefined}
            {message ? <Text>{message}</Text> : undefined}
        </View>
    }

    render() {
        const { buttonCancelLabel } = this.props;
        const { buttonSuccessLabel } = this.props;
        return (<Overlay
            id={this.props.id}
            key={this.props.key}
            isModal={this.props.isModal}
            theme={this._styles.overlayTheme}
            onClose={ this._onCloseHandler}
            content={
                <View>
                    {this.bodyRenderer()}
                    <View>
                        <Button text={buttonCancelLabel} />
                        <Button text={buttonSuccessLabel} />
                    </View>
                </View>
            } />
        );
    }
}
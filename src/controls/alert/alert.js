import React from "react";
import { View, Text } from "react-native";
import { Overlay } from "../overlay";
import { popupManager, PopupOutlet } from "../popup";
import { Button } from "../button";
/**
 * @class
 * @author Evgeny Grebennikov
 */
export class Alert extends React.Component {
    /**
     * Отображает alert с заданными параметрами
     * @param {IAlertInputProps} data
     * @returns {string}
     */
    static show(data) {
        return popupManager.show({
            outlet: PopupOutlet.defaultName,
            factory: (id, i) => {
                return <Alert {...Object.assign({}, data, { id: id, key: i })}/>;
            }
        });
    }
    /**
     * @constructor
     * @param {IAlertProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {IAlertProps} props
     */
    componentWillReceiveProps(props) {
        if (props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * Обновление стилей
     * @protected
     * @param {IAlertProps} props
     */
    updateStyles(props) {
        this._styles = Object.assign({}, props.style);
    }
    /**
     * @protected
     * @param {any} data
     */
    onSuccess(data) {
        if (this.props.onSuccess)
            this.props.onSuccess(data);
    }
    /**
     * @protected
     */
    onClose() {
        if (this.props.onClose)
            this.props.onClose();
    }
    /**
     * Контент по-умолчанию
     * @returns {JSX.Element}
     */
    bodyRenderer() {
        const { title } = this.props;
        const { message } = this.props;
        return <View>
            {title ? <Text>{title}</Text> : undefined}
            {message ? <Text>{message}</Text> : undefined}
        </View>;
    }
    /**
     * @react
     */
    render() {
        const { buttonCancelLabel } = this.props;
        const { buttonSuccessLabel } = this.props;
        return (<Overlay id={this.props.id} key={this.props.key} isModal={this.props.isModal} theme={this._styles.overlayTheme} onClose={() => { this.onClose(); }} content={<View>
                    {this.bodyRenderer()}
                    <View>
                        <Button text={buttonCancelLabel}/>
                        <Button text={buttonSuccessLabel}/>
                    </View>
                </View>}/>);
    }
}

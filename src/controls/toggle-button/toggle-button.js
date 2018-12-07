import React from "react";
import { StyleProvider, ToggleButtonThemeAlias, ButtonStateThemeAlias } from "../../theme";
import { ButtonState } from "../button";
/**
 * @author Evgeny Grebennikov
 */
export class ToggleButton extends React.Component {
    /**
     * @constructor
     * @param {IToggleButtonProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
        this.state = {
            checked: props.checked,
            disabled: props.disabled
        };
    }
    /**
     * @react
     * @param {IToggleButtonProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
        this.setState(Object.assign({}, this.state, { checked: props.checked, disabled: props.disabled }));
    }
    /**
     * Обновление стилей.
     * Не учитываются сигментированные изменения в теме (для оптимизации)
     * @protected
     * @param {IToggleButtonProps} props
     */
    updateStyles(props) {
        let themeStyle = this.props.theme ? StyleProvider.get(this.props.theme) : undefined;
        if (!themeStyle)
            themeStyle = StyleProvider.get(ToggleButtonThemeAlias.PRIMARY); // Стиль по-умолчанию
        const normalStyleName = themeStyle ? themeStyle.normalStyleName : ButtonStateThemeAlias.PRIMARY_TOGGLE_NORMAL;
        const checkedStyleName = themeStyle ? themeStyle.checkedStyleName : ButtonStateThemeAlias.PRIMARY_TOGGLE_ACTIVE;
        const disabledStyleName = themeStyle ? themeStyle.disabledStyleName : ButtonStateThemeAlias.PRIMARY_TOGGLE_DISABLED;
        this._styles = {
            normalStyleName: normalStyleName,
            checkedStyleName: checkedStyleName,
            disabledStyleName: disabledStyleName
        };
    }
    /**
     * @protected
     * @param {boolean} checked
     * @param {boolean} disabled
     * @returns {ButtonStateThemeAlias}
     */
    getStyleNameForState(checked, disabled) {
        if (disabled)
            return this._styles.disabledStyleName;
        if (checked)
            return this._styles.checkedStyleName;
        return this._styles.normalStyleName;
    }
    /**
     * @react
     */
    render() {
        const { checked } = this.state;
        const { disabled } = this.state;
        const stateStyleName = this.getStyleNameForState(checked, disabled);
        return (<ButtonState text={this.props.text} theme={stateStyleName} onPress={() => this.baseButtonPressHandler()}>
            {this.props.children}
        </ButtonState>);
    }
    /**
     * @protected
     */
    baseButtonPressHandler() {
        const checked = !this.state.checked;
        this.setState({ checked: checked });
        this.dispatchChanges(checked);
    }
    /**
     *
     * @param { boolean } value
     */
    dispatchChanges(value) {
        this.props.onChange(value);
    }
    /**
     * @override
     */
    componentWillUnmount() {
        this.dispose();
    }
    /**
     * dispose
     */
    dispose() {
        this._styles = null;
    }
}

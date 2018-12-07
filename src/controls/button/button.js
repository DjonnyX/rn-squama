import React from "react";
import _ from "lodash";
import { StyleProvider, ButtonThemeAlias, ButtonStateThemeAlias } from "../../theme";
import { ButtonState } from "./button-state";
/**
 * Базовая кнопка
 * @class
 * @author Evgeny Grebennikov
 */
export class Button extends React.PureComponent {
    /**
     * @constructor
     * @param {IButtonProps} props
     */
    constructor(props) {
        super(props);
        this.updateStyles(props);
    }
    /**
     * @react
     * @param {IButtonProps} props
     */
    componentWillReceiveProps(props) {
        if (props.theme !== this.props.theme || props.style !== this.props.style)
            this.updateStyles(props);
    }
    /**
     * Обновление стилей
     * @param {IButtonProps} props
     */
    updateStyles(props) {
        let themeStyle = props.theme ? StyleProvider.get(props.theme) : undefined;
        if (!themeStyle)
            themeStyle = StyleProvider.get(ButtonThemeAlias.PRIMARY); // Стиль по-умолчанию
        const normalStyleName = themeStyle ? themeStyle.normalStyleName : ButtonStateThemeAlias.PRIMARY_NORMAL;
        const disabledStyleName = themeStyle ? themeStyle.disabledStyleName : ButtonStateThemeAlias.PRIMARY_DISABLED;
        this._styles = _.merge({}, {
            normalStyleName: normalStyleName,
            disabledStyleName: disabledStyleName
        }, props.style);
    }
    /**
     * @protected
     * @param {boolean} disabled
     * @returns {ButtonStateThemeAlias}
     */
    getStyleNameForState(disabled) {
        return disabled ? this._styles.disabledStyleName : this._styles.normalStyleName;
    }
    /**
     * @override
     * @returns {JSX.Element}
     */
    render() {
        const { disabled } = this.props;
        const stateStyleName = this.getStyleNameForState(disabled);
        let attr = {};
        if (!disabled && this.props.onPress !== null)
            attr.onPress = () => { this.props.onPress(); };
        if (!disabled && this.props.onLongPress !== null)
            attr.onLongPress = () => { this.props.onLongPress; };
        return <ButtonState text={this.props.text} theme={stateStyleName} children={this.props.children} {...attr}></ButtonState>;
    }
    /**
     * @react
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

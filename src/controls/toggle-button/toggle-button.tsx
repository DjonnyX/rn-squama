import React from "react";
import { StyleProvider, Theme } from "../../theme";
import { ButtonState } from "../button";

export interface IToggleButtonStyle {
    normalStyleName?: string;
    checkedStyleName?: string;
    disabledStyleName?: string;
}

export interface IToggleButtonProps {
    theme?: string;
    style?: IToggleButtonStyle;
    text?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?(checked: boolean): void;
    children?: JSX.Element | string;
}

interface IToggleButtonState {
    checked?: boolean;
    disabled?: boolean;
}

const ALIAS: string = "ToggleButton";

export class ToggleButton extends React.Component<IToggleButtonProps, IToggleButtonState> {

    public static alias: string = ALIAS;

    protected _styles: IToggleButtonStyle;

    private _baseButtonPressHandler = () => {
        const checked = !this.state.checked;

        this.setState({...this.state, checked: checked });

        this.dispatchChanges(checked);
    }

    constructor(props: IToggleButtonProps) {
        super(props);

        this.updateStyles(props);

        this.state = {
            checked: props.checked,
            disabled: props.disabled
        }
    }

    componentWillReceiveProps(props: IToggleButtonProps) {
        if (props.theme !== this.props.theme || props.style !== this.props.style) this.updateStyles(props);
        this.setState({ ...this.state, ...{ checked: props.checked, disabled: props.disabled } });
    }

    protected updateStyles(props: IToggleButtonProps): void {
        let themeStyle: IToggleButtonStyle = this.props.theme ? StyleProvider.get(ALIAS, this.props.theme) : undefined;
        if (!themeStyle) themeStyle = StyleProvider.getDefault(ALIAS); // Стиль по-умолчанию

        const normalStyleName = themeStyle.normalStyleName;
        const checkedStyleName = themeStyle.checkedStyleName;
        const disabledStyleName = themeStyle.disabledStyleName;

        this._styles = {
            normalStyleName: normalStyleName,
            checkedStyleName: checkedStyleName,
            disabledStyleName: disabledStyleName
        }
    }

    protected getStyleNameForState(checked: boolean, disabled: boolean): string {
        if (disabled) return this._styles.disabledStyleName;
        if (checked) return this._styles.checkedStyleName;
        return this._styles.normalStyleName;
    }

    render() {
        const { checked } = this.state;
        const { disabled } = this.state;

        const stateStyleName = this.getStyleNameForState(checked, disabled);

        return (<ButtonState text={this.props.text}
            theme={stateStyleName} onPress={this._baseButtonPressHandler}>
            {this.props.children}
        </ButtonState>);
    }

    private dispatchChanges(value: boolean): void {
        this.props.onChange(value);
    }

    public componentWillUnmount() {
        this.dispose();
    }

    public dispose(): void {
        this._styles = null;
    }
}
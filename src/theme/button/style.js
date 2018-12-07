import { ButtonStateThemeAlias } from "./state-alias";
/**
 * стили
 * @author Evgeny Grebennikov
 */
export class ButtonStyles {
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primary() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryClear() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_CLEAR_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_CLEAR_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static primaryLarge() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_LARGE_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_LARGE_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static dialogApply() {
        return {
            normalStyleName: ButtonStateThemeAlias.DIALOG_APPLY_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.DIALOG_APPLY_DISABLED
        };
    }
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static dialogCancel() {
        return {
            normalStyleName: ButtonStateThemeAlias.DIALOG_CANCEL_NORMAL,
            disabledStyleName: ButtonStateThemeAlias.DIALOG_CANCEL_DISABLED
        };
    }
}

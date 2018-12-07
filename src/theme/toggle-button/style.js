import { ButtonStateThemeAlias } from '../button/state-alias';
/**
 * стили для ToggleButton
 * @author Evgeny Grebennikov
 */
export class ToggleButtonStyles {
    /**
     * @static
     * @returns {IToggleButtonStyle}
     */
    static primary() {
        return {
            normalStyleName: ButtonStateThemeAlias.PRIMARY_TOGGLE_NORMAL,
            checkedStyleName: ButtonStateThemeAlias.PRIMARY_TOGGLE_ACTIVE,
            disabledStyleName: ButtonStateThemeAlias.PRIMARY_TOGGLE_DISABLED
        };
    }
}

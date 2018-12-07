import { ThemeVars } from "../vars";
import { HeaderThemeAlias } from "../header/alias";
/**
 * стили для HeadingView
 * @author Evgeny Grebennikov
 */
export class HeadingViewStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseContainerViewStyle() {
        return {
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch",
            backgroundColor: ThemeVars.$COLOR_WHITE
        };
    }
    /**
     * @static
     * @returns {IHeadingViewStyle}
     */
    static primary() {
        return {
            headerStyleName: HeaderThemeAlias.PRIMARY,
            viewStyle: HeadingViewStyles.baseContainerViewStyle()
        };
    }
    /**
     * @static
     * @returns {IHeadingViewStyle}
     */
    static primaryClear() {
        return {
            headerStyleName: HeaderThemeAlias.PRIMARY_CLEAR,
            viewStyle: Object.assign({}, HeadingViewStyles.baseContainerViewStyle(), { backgroundColor: "none" })
        };
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseSeparatedContainerViewStyle() {
        return Object.assign({}, HeadingViewStyles.baseContainerViewStyle(), {
            backgroundColor: ThemeVars.$COLOR_WHITE,
            borderRightWidth: ThemeVars.$SEP_HEADER_WEIGHT,
            borderRightColor: ThemeVars.$COLOR_GRAY_300
        });
    }
    /**
     * @static
     * @returns {IHeadingViewStyle}
     */
    static primarySeparated() {
        return {
            headerStyleName: HeaderThemeAlias.PRIMARY,
            viewStyle: HeadingViewStyles.baseSeparatedContainerViewStyle()
        };
    }
}

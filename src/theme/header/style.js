import { ThemeVars } from "../vars";
/**
 * стили для Header
 * @author Evgeny Grebennikov
 */
export class HeaderStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseContentViewStyle() {
        return {
            minHeight: 69,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: ThemeVars.$PRIMARY_BACKGROUND_COLOR,
            borderBottomWidth: ThemeVars.$SEP_HEADER_WEIGHT,
            borderBottomColor: ThemeVars.$COLOR_GRAY_300
        };
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseItemContainerStyle() {
        return {
            flex: 1,
            padding: 10,
            justifyContent: "flex-start",
            alignItems: "baseline"
        };
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseLeftContainerStyle() {
        return Object.assign({}, HeaderStyles.baseItemContainerStyle(), {
            alignItems: "flex-start"
        });
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseCenterContainerStyle() {
        return Object.assign({}, HeaderStyles.baseItemContainerStyle(), {
            flex: 3,
            alignItems: "center"
        });
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseRightContainerStyle() {
        return Object.assign({}, HeaderStyles.baseItemContainerStyle(), {
            alignItems: "flex-end"
        });
    }
    /**
     * @static
     * @returns {IHeaderStyle}
     */
    static primary() {
        return {
            containerViewStyle: HeaderStyles.baseContentViewStyle(),
            leftContainerStyle: HeaderStyles.baseLeftContainerStyle(),
            rightContainerStyle: HeaderStyles.baseRightContainerStyle(),
            centerContainerStyle: HeaderStyles.baseCenterContainerStyle()
        };
    }
    /**
     * @static
     * @returns {IHeaderStyle}
     */
    static primaryClear() {
        return {
            containerViewStyle: Object.assign({}, HeaderStyles.baseContentViewStyle(), {
                borderBottomWidth: 0,
                backgroundColor: 'none'
            }),
            leftContainerStyle: HeaderStyles.baseLeftContainerStyle(),
            rightContainerStyle: HeaderStyles.baseRightContainerStyle(),
            centerContainerStyle: HeaderStyles.baseCenterContainerStyle()
        };
    }
}

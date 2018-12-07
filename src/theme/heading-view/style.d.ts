import { ViewStyle } from "react-native";
import { IHeadingViewStyle } from "../../controls/heading-view";
/**
 * стили для HeadingView
 * @author Evgeny Grebennikov
 */
export declare class HeadingViewStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseContainerViewStyle(): ViewStyle;
    /**
     * @static
     * @returns {IHeadingViewStyle}
     */
    static primary(): IHeadingViewStyle;
    /**
     * @static
     * @returns {IHeadingViewStyle}
     */
    static primaryClear(): IHeadingViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseSeparatedContainerViewStyle(): ViewStyle;
    /**
     * @static
     * @returns {IHeadingViewStyle}
     */
    static primarySeparated(): IHeadingViewStyle;
}

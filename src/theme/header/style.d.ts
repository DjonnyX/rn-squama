import { ViewStyle } from "react-native";
import { IHeaderStyle } from "../../controls/header";
/**
 * стили для Header
 * @author Evgeny Grebennikov
 */
export declare class HeaderStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseContentViewStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseItemContainerStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseLeftContainerStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseCenterContainerStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseRightContainerStyle(): ViewStyle;
    /**
     * @static
     * @returns {IHeaderStyle}
     */
    static primary(): IHeaderStyle;
    /**
     * @static
     * @returns {IHeaderStyle}
     */
    static primaryClear(): IHeaderStyle;
}

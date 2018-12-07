import { ViewStyle } from "react-native";
import { ICalendarStyles } from "../../controls/calendar";
import { IButtonStyle } from "../../controls/button";
/**
 * @author Evgeny Grebennikov
 */
export declare class CalendarStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseContainerStyle(): ViewStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static dayNormal(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static dayCurrent(): IButtonStyle;
    /**
     * @static
     * @returns {IButtonStyle}
     */
    static daySelected(): IButtonStyle;
    /**
     * @static
     * @returns {ICalendarStyles}
     */
    static primary(): ICalendarStyles;
}

import { TextStyle, ViewStyle } from 'react-native';
import { IButtonStateStyle } from '../../controls/button';
/**
 * @author Evgeny Grebennikov
 */
export declare class CalendarDayButtonStateStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static normalButtonContainerViewStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static normalButtonButtonStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static normalButtonTextStyle(): TextStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static normalButtonContainerViewDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {ViewStyle}
     */
    static normalButtonButtonDisabledStyle(): ViewStyle;
    /**
     * @static
     * @returns {TextStyle}
     */
    static normalButtonTextDisabledStyle(): TextStyle;
    /**
     * Первичный стиль кнопки Normal
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDayNormal(): IButtonStateStyle;
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDayDisabled(): IButtonStateStyle;
    /**
     * Первичный стиль кнопки Current
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDayCurrent(): IButtonStateStyle;
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDayCurrentDisabled(): IButtonStateStyle;
    /**
     * Первичный стиль кнопки Selected
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDaySelected(): IButtonStateStyle;
    /**
     * @static
     * @returns {IButtonStateStyle}
     */
    static primaryDaySelectedDisabled(): IButtonStateStyle;
}

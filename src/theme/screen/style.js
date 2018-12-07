/**
 * стили для Screen
 * @author Evgeny Grebennikov
 */
export class ScreenStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static basContainerStyle() {
        return {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
        };
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseContentContainerStyle() {
        return {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
        };
    }
    /**
     * @static
     * @returns {IScreenStyle}
     */
    static base() {
        return {
            containerStyle: ScreenStyles.basContainerStyle(),
            contentContainerStyle: ScreenStyles.baseContentContainerStyle()
        };
    }
}

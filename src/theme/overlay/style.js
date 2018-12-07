/**
 * стили для Overlay
 * @author Evgeny Grebennikov
 */
export class OverlayStyles {
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseOverlayStyle() {
        return {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,.34)"
        };
    }
    /**
     * @static
     * @returns {ViewStyle}
     */
    static baseOverlayViewStyle() {
        return {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 40
        };
    }
    /**
     * @static
     * @returns {IOverlayStyle}
     */
    static primary() {
        return {
            overlayStyle: OverlayStyles.baseOverlayStyle(),
            viewStyle: OverlayStyles.baseOverlayViewStyle()
        };
    }
}

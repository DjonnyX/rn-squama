"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const popup_manager_1 = require("./popup-manager");
const popup_event_types_1 = require("./popup-event-types");
/**
 * Точка монтажа попап-элементов
 * @final
 */
class PopupOutlet extends react_1.default.Component {
    /**
     * @constructor
     * @param {IPopupOutletProps} props
     */
    constructor(props) {
        super(props);
        this._name = props.name || PopupOutlet.defaultName;
        this.state = {
            renderers: null
        };
    }
    /**
     * имя оутлета
     * @getter
     */
    get name() { return this._name; }
    componentWillMount() {
        this._subscription = popup_manager_1.popupManager.events.subscribe((e) => {
            const outlet = e.outlet || PopupOutlet.defaultName;
            if (outlet === this._name) {
                switch (e.type) {
                    case popup_event_types_1.PopupEventTypes.SHOW:
                    case popup_event_types_1.PopupEventTypes.HIDE:
                        const renderers = e.renderers;
                        if (renderers && renderers.length > 0) {
                            if (this.props.onActive)
                                this.props.onActive();
                        }
                        else if (this.props.onDeactive)
                            this.props.onDeactive();
                        this.setState(Object.assign({}, this.state, { renderers: renderers }));
                        break;
                }
            }
        });
    }
    /**
     * @react
     */
    componentWillUnmount() {
        this._subscription.unsubscribe();
    }
    /**
     * @react
     */
    render() {
        const { renderers } = this.state;
        const dimensions = react_native_1.Dimensions.get("window");
        return (react_1.default.createElement(react_native_1.View, { style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: dimensions.width,
                height: dimensions.height,
                justifyContent: "center",
                alignItems: "center"
            } }, renderers
            ? renderers.map((v, i) => {
                return v.factory(v.id, v.id);
            })
            : undefined));
    }
}
/**
 * Дефолтовое имя оутлета
 * @static
 */
PopupOutlet.defaultName = "root";
exports.PopupOutlet = PopupOutlet;

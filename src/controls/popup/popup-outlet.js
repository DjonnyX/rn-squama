import React from "react";
import { View, Dimensions } from "react-native";
import { popupManager } from "./popup-manager";
import { PopupEventTypes } from "./popup-event-types";
/**
 * Точка монтажа попап-элементов
 * @final
 */
export class PopupOutlet extends React.Component {
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
        this._subscription = popupManager.events.subscribe((e) => {
            const outlet = e.outlet || PopupOutlet.defaultName;
            if (outlet === this._name) {
                switch (e.type) {
                    case PopupEventTypes.SHOW:
                    case PopupEventTypes.HIDE:
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
        const dimensions = Dimensions.get("window");
        return (<View style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: dimensions.width,
            height: dimensions.height,
            justifyContent: "center",
            alignItems: "center"
        }}>
                {renderers
            ? renderers.map((v, i) => {
                return v.factory(v.id, v.id);
            })
            : undefined}
            </View>);
    }
}
/**
 * Дефолтовое имя оутлета
 * @static
 */
PopupOutlet.defaultName = "root";

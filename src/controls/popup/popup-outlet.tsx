import React from "react";
import { View, Dimensions } from "react-native";
import { Subscription } from "rxjs";
import { popupManager, IPopupData } from "./popup-manager";
import { PopupEventTypes } from "./popup-event-types";

export interface IPopupOutletProps {
    name?: string;
    onActive?(): void;
    onDeactive?(): void;
}

interface IPopupOutletState {
    renderers: Array<IPopupData>;
}

export class PopupOutlet extends React.Component<IPopupOutletProps, IPopupOutletState> {

    public static defaultName: string = "root";

    private _name: string;

    public get name(): string { return this._name; }

    private _subscription: Subscription;

    constructor(props: IPopupOutletProps) {
        super(props);

        this._name = props.name || PopupOutlet.defaultName;

        this.state = {
            renderers: null
        };
    }

    componentWillMount() {
        this._subscription = popupManager.events.subscribe((e) => {
            const outlet = e.outlet || PopupOutlet.defaultName;
            if (outlet === this._name) {
                switch (e.type) {
                    case PopupEventTypes.SHOW:
                    case PopupEventTypes.HIDE:
                        const renderers = e.renderers;
                        if (renderers && renderers.length > 0) {
                            if (this.props.onActive) this.props.onActive();
                        } else if (this.props.onDeactive) this.props.onDeactive();
                        this.setState({...this.state, ...{ renderers: renderers }});
                        break;
                }
            }
        })
    }

    componentWillUnmount() {
        this._subscription.unsubscribe();
    }

    render() {
        const { renderers } = this.state;

        const dimensions = Dimensions.get("window");
        
        return (
            <View style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: dimensions.width,
                height: dimensions.height,
                justifyContent: "center",
                alignItems: "center"
            }}>
                {
                    renderers
                        ? renderers.map(v => {
                            return v.factory(v.id, v.id);
                        })
                        : undefined
                }
            </View>
        );
    }
}
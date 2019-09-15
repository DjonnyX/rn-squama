import React from "react";
import { ViewStyle, View, StyleSheet } from "react-native";
import { ToggleButton } from "../toggle-button";
import { Button } from "../button";

export interface IButtonGroupProps {
    onChange?: (selectedIndex: number) => void; // Событие пуляет массив выбранных элементов (если это toggle), если нет то массив макс. с одним элементом
    containerViewStyle?: ViewStyle; // Стиль основного контейнера (группа)
    itemRendererType?: ButtonGroupTypes;
    listCollection?: Array<IButtonGroupCollectionItem>;
    selectedIndex?: number;
}

export interface IButtonGroupCollectionItem {
    key?: any;
    selected?: boolean;
    theme?: string;
    text?: string;
}

/**
 * типы используемых кнопок
 */
export enum ButtonGroupTypes {
    SIMPLE,
    TOGGLE
}

const ALIAS: string = "ButtonGroup";

export class ButtonGroup extends React.Component<IButtonGroupProps, any> {

    public static alias: string = ALIAS;

    protected _collection: Array<IButtonGroupCollectionItem> = [];

    /**
     * дефолтовый стиль
     */
    private _defaultStyle = StyleSheet.create({
        viewStyle: {
            justifyContent: "center",
            alignSelf: "center",
            flexDirection: "row"
        }
    });

    constructor(props: IButtonGroupProps) {
        super(props);

        const actualSelectedIndex = this.composCollection(props.listCollection || [], props.selectedIndex);

        this.state = {
            selectedIndex: actualSelectedIndex
        }

        this._onChange = this._onChange.bind(this);
    }

    /**
     * Сопоставляет коллекцию заданных элементов с коллекцией выбранных, биндит, валидирует
     * и возвращает актуальный список выбранных элементов
     */
    private composCollection(collection: Array<IButtonGroupCollectionItem>,
        selectedIndex: number): number {
        let actualCollection = collection.map(a => ({ ...a }));
        let actualSelectedIndex: number = -1;
        if (selectedIndex < actualCollection.length && actualCollection[selectedIndex]) {
            actualCollection[selectedIndex].selected = true;
            actualSelectedIndex = selectedIndex;
        }
        this._collection = actualCollection;
        return actualSelectedIndex;
    }

    componentWillReceiveProps(props: IButtonGroupProps) {
        this.setState({ selectedIndex: props.selectedIndex })
    }

    /**
     * Хэндлер на изменение
     */
    private _onChange = (selectedIndex: number) => {
        this.props.onChange(selectedIndex);
    }

    public render(): JSX.Element {
        const itemRendererType = this.props.itemRendererType;
        return (<View style={this._defaultStyle.viewStyle}>
            {
                this._collection.map((item, i) => (
                    this.itemRendererFactory(itemRendererType, item, i)
                ))
            }
        </View>);
    }

    protected itemRendererFactory(instanceType: ButtonGroupTypes, props: IButtonGroupCollectionItem, index: number): JSX.Element {
        switch (instanceType) {
            case ButtonGroupTypes.SIMPLE:
                return <Button theme={props.theme} text={props.text} onPress={() => { this._select(index) }}></Button>;
            case ButtonGroupTypes.TOGGLE:
                const checked: boolean = this.state.selectedIndex === index;
                return <ToggleButton key={index} checked={checked} theme={props.theme} text={props.text} onChange={_ => { this._select(index) }}></ToggleButton>;
            default:
                return undefined;
        }
    }

    protected _select(index: number) {
        this.setState({ selectedIndex: index });
        this._onChange(index);
    }

    componentWillUnmount(): void {
        this.dispose();
    }

    public dispose(): void {
        this._collection = null;
        this._onChange = null;
    }
}
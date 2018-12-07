import React from "react";
import { View, StyleSheet } from "react-native";
import { ToggleButton } from "../toggle-button";
import { Button } from "../button";
/**
 * типы используемых кнопок
 */
export var ButtonGroupTypes;
(function (ButtonGroupTypes) {
    ButtonGroupTypes[ButtonGroupTypes["SIMPLE"] = 0] = "SIMPLE";
    ButtonGroupTypes[ButtonGroupTypes["TOGGLE"] = 1] = "TOGGLE";
})(ButtonGroupTypes || (ButtonGroupTypes = {}));
/**
 * ButtonGroup
 * @class
 * @author Evgeny Grebennikov
 */
export class ButtonGroup extends React.Component {
    /**
     * @constructor
     * @param {IButtonGroupProps} props
     */
    constructor(props) {
        super(props);
        /**
         * @protected
         */
        this._collection = [];
        /**
         * дефолтовый стиль
         */
        this._defaultStyle = StyleSheet.create({
            viewStyle: {
                justifyContent: "center",
                alignSelf: "center",
                flexDirection: "row"
            }
        });
        const actualSelectedIndex = this.composCollection(props.listCollection || [], props.selectedIndex);
        this.state = {
            selectedIndex: actualSelectedIndex
        };
        this._onChange = this._onChange.bind(this);
    }
    /**
     * Сопоставляет коллекцию заданных элементов с коллекцией выбранных, биндит, валидирует
     * и возвращает актуальный список выбранных элементов
     * @param {Array<IButtonGroupCollectionItem>} collection
     * @param {Array<string | number>} selectedIndexes
     * @return {Array<string | number>}
     */
    composCollection(collection, selectedIndex) {
        let actualCollection = collection.map(a => (Object.assign({}, a)));
        let actualSelectedIndex = -1;
        if (selectedIndex < actualCollection.length && actualCollection[selectedIndex]) {
            actualCollection[selectedIndex].selected = true;
            actualSelectedIndex = selectedIndex;
        }
        this._collection = actualCollection;
        return actualSelectedIndex;
    }
    /**
     * @react
     * @param {IButtonGroupProps} props
     */
    componentWillReceiveProps(props) {
        this.setState({ selectedIndex: props.selectedIndex });
    }
    /**
     * Хэндлер на изменение
     * @param {Array<number>} value
     */
    _onChange(selectedIndex) {
        this.props.onChange(selectedIndex);
    }
    /**
     * @override
     * @returns {JSX.Element}
     */
    render() {
        const itemRendererType = this.props.itemRendererType;
        return (<View style={this._defaultStyle.viewStyle}>
            {this._collection.map((item, i) => (this.itemRendererFactory(itemRendererType, item, i)))}
        </View>);
    }
    /**
     * @protected
     * @param {ButtonGroupTypes} instanceType
     * @param {IButtonGroupCollectionItem} props
     * @param {number} index
     * @returns {JSX.Element}
     */
    itemRendererFactory(instanceType, props, index) {
        switch (instanceType) {
            case ButtonGroupTypes.SIMPLE:
                return <Button theme={props.theme} text={props.text} onPress={() => { this._select(index); }}></Button>;
            case ButtonGroupTypes.TOGGLE:
                const checked = this.state.selectedIndex === index;
                return <ToggleButton key={index} checked={checked} theme={props.theme} text={props.text} onChange={(value) => { this._select(index); }}></ToggleButton>;
            default:
                return undefined;
        }
    }
    /**
     * @protected
     * @param {number} index
     */
    _select(index) {
        this.setState({ selectedIndex: index });
        this._onChange(index);
    }
    /**
     * @react
     */
    componentWillUnmount() {
        this.dispose();
    }
    /**
     * dispose
     */
    dispose() {
        this._collection = null;
        this._onChange = null;
    }
}

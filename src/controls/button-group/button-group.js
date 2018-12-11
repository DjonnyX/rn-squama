"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const toggle_button_1 = require("../toggle-button");
const button_1 = require("../button");
/**
 * типы используемых кнопок
 */
var ButtonGroupTypes;
(function (ButtonGroupTypes) {
    ButtonGroupTypes[ButtonGroupTypes["SIMPLE"] = 0] = "SIMPLE";
    ButtonGroupTypes[ButtonGroupTypes["TOGGLE"] = 1] = "TOGGLE";
})(ButtonGroupTypes = exports.ButtonGroupTypes || (exports.ButtonGroupTypes = {}));
const ALIAS = "ButtonGroup";
/**
 * ButtonGroup
 * @class
 * @author Evgeny Grebennikov
 */
class ButtonGroup extends react_1.default.Component {
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
        this._defaultStyle = react_native_1.StyleSheet.create({
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
        return (react_1.default.createElement(react_native_1.View, { style: this._defaultStyle.viewStyle }, this._collection.map((item, i) => (this.itemRendererFactory(itemRendererType, item, i)))));
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
                return react_1.default.createElement(button_1.Button, { theme: props.theme, text: props.text, onPress: () => { this._select(index); } });
            case ButtonGroupTypes.TOGGLE:
                const checked = this.state.selectedIndex === index;
                return react_1.default.createElement(toggle_button_1.ToggleButton, { key: index, checked: checked, theme: props.theme, text: props.text, onChange: (value) => { this._select(index); } });
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
ButtonGroup.alias = ALIAS;
exports.ButtonGroup = ButtonGroup;

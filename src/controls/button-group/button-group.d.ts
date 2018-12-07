import React from "react";
import { ViewStyle } from "react-native";
import { ButtonThemeAlias, ToggleButtonThemeAlias } from "../../theme";
/**
 * @react-props
 */
export interface IButtonGroupProps {
    onChange?: (selectedIndex: number) => void;
    containerViewStyle?: ViewStyle;
    itemRendererType?: ButtonGroupTypes;
    listCollection?: Array<IButtonGroupCollectionItem>;
    selectedIndex?: number;
}
/**
 * @interface
 */
export interface IButtonGroupCollectionItem {
    key?: any;
    selected?: boolean;
    theme?: ButtonThemeAlias | ToggleButtonThemeAlias;
    text?: string;
}
/**
 * типы используемых кнопок
 */
export declare enum ButtonGroupTypes {
    SIMPLE = 0,
    TOGGLE = 1
}
/**
 * ButtonGroup
 * @class
 * @author Evgeny Grebennikov
 */
export declare class ButtonGroup extends React.Component<IButtonGroupProps, any> {
    /**
     * @protected
     */
    protected _collection: Array<IButtonGroupCollectionItem>;
    /**
     * дефолтовый стиль
     */
    private _defaultStyle;
    /**
     * @constructor
     * @param {IButtonGroupProps} props
     */
    constructor(props: IButtonGroupProps);
    /**
     * Сопоставляет коллекцию заданных элементов с коллекцией выбранных, биндит, валидирует
     * и возвращает актуальный список выбранных элементов
     * @param {Array<IButtonGroupCollectionItem>} collection
     * @param {Array<string | number>} selectedIndexes
     * @return {Array<string | number>}
     */
    private composCollection;
    /**
     * @react
     * @param {IButtonGroupProps} props
     */
    componentWillReceiveProps(props: IButtonGroupProps): void;
    /**
     * Хэндлер на изменение
     * @param {Array<number>} value
     */
    protected _onChange(selectedIndex: number): void;
    /**
     * @override
     * @returns {JSX.Element}
     */
    render(): JSX.Element;
    /**
     * @protected
     * @param {ButtonGroupTypes} instanceType
     * @param {IButtonGroupCollectionItem} props
     * @param {number} index
     * @returns {JSX.Element}
     */
    protected itemRendererFactory(instanceType: ButtonGroupTypes, props: IButtonGroupCollectionItem, index: number): JSX.Element;
    /**
     * @protected
     * @param {number} index
     */
    protected _select(index: number): void;
    /**
     * @react
     */
    componentWillUnmount(): void;
    /**
     * dispose
     */
    dispose(): void;
}

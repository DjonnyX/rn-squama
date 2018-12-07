import React from "react";
import { ViewStyle } from "react-native";
/**
 * @react-props
 */
export interface IGridLayoutProps {
    listCollection: any;
    itemFactory: (data: any, index: number) => JSX.Element;
    /** Дата всегда будет пустой! */
    emptyItemFactory?: (data: any, index: number) => JSX.Element;
    columns?: number;
    rowHeight?: number;
    children?: Array<JSX.Element>;
    style?: ViewStyle;
}
/**
 * стиль контейнера
 */
export declare const GRID_LIST_ROW_STYLE: ViewStyle;
/**
 * грид
 * @author Evgeny Grebennikov
 */
export declare class GridLayout extends React.PureComponent<IGridLayoutProps> {
    /**
     * @constructor
     * @param {IGridLayoutProps} props
     */
    constructor(props: IGridLayoutProps);
    /**
     * @param {(data: any, index: number) => JSX.Element} factory
     * @param {any} data
     * @param {number} index
     * @returns {JSX.Element}
     */
    protected itemRendererFactory(factory: (data: any, index: number) => JSX.Element, data: any, index: number): JSX.Element;
    /**
     * @override
     * @returns {JSX.Element}
     */
    render(): JSX.Element;
}

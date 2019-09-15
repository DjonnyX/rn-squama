import React from "react";
import { View, ViewStyle } from "react-native";
import _ from "lodash";

export interface IGridLayoutProps {
    listCollection: any;
    itemFactory: (data: any, index: number) => JSX.Element;
    emptyItemFactory?: (data: any, index: number) => JSX.Element; // Это для пустых ячеек
    columns?: number;
    rowHeight?: number;
    children?: Array<JSX.Element>;
    style?: ViewStyle;
}

/**
 * стиль контейнера
 */
export const GRID_LIST_ROW_STYLE: ViewStyle = {
    alignItems: "stretch",
    flexDirection: "row",
    flex: 1
}

/**
 * дефолтовый стиль
 */
const defaultStyle: ViewStyle = { flex: 1, flexDirection: "column", alignItems: "stretch" };

export class GridLayout extends React.PureComponent<IGridLayoutProps> {

    constructor(props: IGridLayoutProps) {
        super(props);
    }

    protected itemRendererFactory(factory: (data: any, index: number) => JSX.Element, data: any, index: number): JSX.Element {
        return factory ? factory(data, index) : undefined;
    }

    public render(): JSX.Element {
        const itemFactory = this.props.itemFactory;
        const emptyItemFactory = this.props.emptyItemFactory;
        const listCollection = this.props.listCollection;
        const columns = this.props.columns;
        const style = _.merge(defaultStyle, this.props.style);

        const groups = [];
        // Тут нужно над оптимизацией подумать
        if (listCollection && listCollection.length > 0) {
            let columnIndex = 0;
            let items = [];
            let currentGroup = items;
            groups.push(currentGroup);
            for (let i = 0, l = listCollection.length; i < l; i++) {
                const item = listCollection[i];
                columnIndex += 1;

                if (columnIndex > columns) {
                    const newItems = [];
                    items = newItems;
                    const newGroup = items;
                    currentGroup = newGroup;
                    groups.push(newGroup);
                    columnIndex = 1;
                }
                items.push(item);

                // else нельзя использовать т.к. <code>columnIndex = 1;</code> в последней строке
                if (columnIndex <= columns) {
                    // Добавляется пустая ячейка в конец массива, если это необходимо
                    const nextIndex = i + 1;
                    if (nextIndex === l) {
                        while (columnIndex + 1 <= columns) {
                            columnIndex++;
                            items.push(null);
                        }
                    }
                }
            };
        }

        return (
            <View style={style}>{
                groups.map((items, i) => {
                    return <View style={GRID_LIST_ROW_STYLE} key={i} >
                        {
                            items.map((item, j) => {
                                return this.itemRendererFactory(!item ? emptyItemFactory : itemFactory, item, j);
                            })
                        }
                    </View >
                })
            }</View>
        )
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const lodash_1 = require("lodash");
/**
 * стиль контейнера
 */
exports.GRID_LIST_ROW_STYLE = {
    alignItems: "stretch",
    flexDirection: "row",
    flex: 1
};
/**
 * дефолтовый стиль
 */
const defaultStyle = { flex: 1, flexDirection: "column", alignItems: "stretch" };
/**
 * грид
 * @author Evgeny Grebennikov
 */
class GridLayout extends react_1.default.PureComponent {
    /**
     * @constructor
     * @param {IGridLayoutProps} props
     */
    constructor(props) {
        super(props);
    }
    /**
     * @param {(data: any, index: number) => JSX.Element} factory
     * @param {any} data
     * @param {number} index
     * @returns {JSX.Element}
     */
    itemRendererFactory(factory, data, index) {
        return factory ? factory(data, index) : undefined;
    }
    /**
     * @override
     * @returns {JSX.Element}
     */
    render() {
        const itemFactory = this.props.itemFactory;
        const emptyItemFactory = this.props.emptyItemFactory;
        const listCollection = this.props.listCollection;
        const columns = this.props.columns;
        const style = lodash_1.default.merge(defaultStyle, this.props.style);
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
            }
            ;
        }
        return (react_1.default.createElement(react_native_1.View, { style: style }, groups.map((items, i) => {
            return react_1.default.createElement(react_native_1.View, { style: exports.GRID_LIST_ROW_STYLE, key: i }, items.map((item, j) => {
                return this.itemRendererFactory(!item ? emptyItemFactory : itemFactory, item, j);
            }));
        })));
    }
}
exports.GridLayout = GridLayout;

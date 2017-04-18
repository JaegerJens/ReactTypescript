import {Action} from "redux";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface AppState {
    hello: HelloProps;
    tree: TreeWidget;
}

export interface TreeList extends Array<TreeItem> {};

export interface TreeWidget {
    title: string;
    data: TreeList;
}

export interface TreeItem {
    id: number;
    name: string;
    isExpanded: boolean;
    children?: TreeList;
}

export interface SwitchExpandAction {
    (item: TreeItem, isEnabled: boolean): void
}

export interface TreeActions {
    switchExpand: SwitchExpandAction
}

export interface TreeExpandAction extends Action {
    type: "TREE_SWITCHEXPAND",
    item: TreeItem,
    isExpanded: boolean;
}

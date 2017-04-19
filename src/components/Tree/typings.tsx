import {Action} from "redux";

export interface TreeWidget {
    title: string;
    data: TreeItem[];
}

export interface TreeItem {
    id: number;
    level: number;
    parent?: number;
    name: string;
    isExpanded: boolean;
}

export interface SwitchExpandAction {
    (item: TreeItem, isEnabled: boolean): TreeExpandAction
}

export interface TreeActions {
    switchExpand: SwitchExpandAction
}

export interface TreeExpandAction extends Action {
    type: "TREE_SWITCHEXPAND",
    item: TreeItem,
    isExpanded: boolean;
}

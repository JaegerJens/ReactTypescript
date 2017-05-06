import {ChangeEventHandler} from "react";
import {Action} from "redux";
import {TreeItem} from "./tree";

export interface SwitchExpandAction {
    (item: TreeItem, isEnabled: boolean): TreeExpandAction;
}

export interface TreeActions {
    switchExpand: SwitchExpandAction;
}

export const TREE_SWITCHEXPAND_ACTION = "TREE_SWITCHEXPAND";

export interface TreeExpandAction extends Action {
    type: "TREE_SWITCHEXPAND";
    item: TreeItem;
    isExpanded: boolean;
}
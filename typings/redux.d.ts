import {ChangeEventHandler} from "react";
import {Action} from "redux";
import {TreeItem} from "./tree";

export interface SwitchExpandAction {
    (item: TreeItem, isEnabled: boolean): TreeExpandAction;
}

export interface TreeActions {
    switchExpand: SwitchExpandAction;
}

export interface TreeExpandAction extends Action {
    type: string;
    item: TreeItem;
    isExpanded: boolean;
}
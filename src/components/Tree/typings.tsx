import {ChangeEventHandler} from "react";
import {Action} from "redux";

export interface TreeWidget {
    title: string;
    data: TreeItem[];
}

export interface TreeItem {
    id: number;
    level: number;
    parentId?: number;
    parentIndex?: number;
    childrenIndex?: number[];
    name: string;
    isExpanded: boolean;
    icon: string;
}

export interface SwitchExpandAction {
    (item: TreeItem, isEnabled: boolean): TreeExpandAction;
}

export interface TreeActions {
    switchExpand: SwitchExpandAction;
}

export interface ExpandButtonProps {
    isExpanded: boolean;
    eventHandler: ChangeEventHandler<any>;
}

export interface TreeElementProps {
    data: TreeItem[];
    item: TreeItem;
    expandHandler: SwitchExpandAction;
}

export interface AwesomeIconProps {
    name: string;
}

export const TREE_SWITCHEXPAND_ACTION = "TREE_SWITCHEXPAND";

export interface TreeExpandAction extends Action {
    type: "TREE_SWITCHEXPAND";
    item: TreeItem;
    isExpanded: boolean;
}

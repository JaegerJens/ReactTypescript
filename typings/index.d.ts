import { ChangeEventHandler } from "react";
import { TreeItem } from "./tree";
import { SwitchExpandAction } from "./redux";

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
    color: string;
}

export interface ObjectStyle {
    icon: string;
    color: string;
}

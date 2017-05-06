import { Action, Dispatch } from "redux";
import { SwitchExpandAction, TreeExpandAction } from "../../../typings/redux";
import { TreeItem } from "../../../typings/tree";

export const TREE_SWITCHEXPAND_ACTION = "TREE_SWITCHEXPAND";

const expandAction: SwitchExpandAction = (item: TreeItem, isEnabled: boolean): TreeExpandAction => {
    const resultItem: TreeExpandAction = {
        type: TREE_SWITCHEXPAND_ACTION,
        item,
        isExpanded: isEnabled
    };
    return resultItem;
};

export {expandAction};

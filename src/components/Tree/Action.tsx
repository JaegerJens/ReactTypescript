import { Action, Dispatch } from "redux";
import { SwitchExpandAction, TreeExpandAction } from "../../../typings/redux.d";
import { TreeItem } from "../../../typings/tree.d";

export const TREE_SWITCHEXPAND_ACTION = "TREE_SWITCHEXPAND";

const expandAction: SwitchExpandAction = (item: TreeItem, isEnabled: boolean): TreeExpandAction => {
    const resultItem = {
        type: TREE_SWITCHEXPAND_ACTION,
        item,
        isExpanded: isEnabled
    };
    console.log(resultItem);
    return resultItem;
};

export {expandAction};

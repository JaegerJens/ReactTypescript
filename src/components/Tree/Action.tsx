import {Action, Dispatch} from "redux";
import { SwitchExpandAction, TREE_SWITCHEXPAND_ACTION, TreeExpandAction } from "../../../typings/redux.d";
import { TreeItem } from "../../../typings/tree.d";

const expandAction: SwitchExpandAction = (item: TreeItem, isEnabled: boolean): TreeExpandAction => {
    return {
        type: TREE_SWITCHEXPAND_ACTION,
        item,
        isExpanded: isEnabled
    };
};

export {expandAction};

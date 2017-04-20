import {AppState, } from  "../../typings"
import {SwitchExpandAction, TreeItem, TreeActions, TreeExpandAction, TREE_SWITCHEXPAND_ACTION} from "./typings";
import {Action, Dispatch} from "redux";

const expandAction: SwitchExpandAction = (item: TreeItem, isEnabled: boolean): TreeExpandAction => {
    return {
        type: TREE_SWITCHEXPAND_ACTION,
        item: item,
        isExpanded: isEnabled
    };
};


export {expandAction};
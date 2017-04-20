import {Action, Reducer} from "redux";
import {TreeWidget, TreeItem, TreeExpandAction, TREE_SWITCHEXPAND_ACTION} from "./typings"
import {initialState}  from "../../store/initialState"
import TreeUtil from "./util"

const reducerName = "tree epxand reducer";

const reduceExpand: Reducer<TreeWidget> = (state: TreeWidget = initialState.tree, action: Action): TreeWidget => {
    switch(action.type) {
        case TREE_SWITCHEXPAND_ACTION:
            let expandAction = action as TreeExpandAction;
            let switchedItem : TreeItem = {
                ...expandAction.item,
                isExpanded: expandAction.isExpanded
            };
            console.log(reducerName, TREE_SWITCHEXPAND_ACTION, expandAction, switchedItem);
            return {
                ...state,
                data: TreeUtil.replaceTreeItem(state.data, switchedItem)
            };
        default:
            console.log(reducerName, state, action);
    }
    return state;
};

export {reduceExpand};

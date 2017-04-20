import {Action, Reducer} from "redux";
import {TreeWidget, TreeItem, TreeExpandAction, TREE_SWITCHEXPAND_ACTION} from "./typings"
import {initialState}  from "../../store/initialState"

const reduceExpand: Reducer<TreeWidget> = (state: TreeWidget = initialState.tree, action: Action): TreeWidget => {
    console.log("expandReducer", state, action);
    switch(action.type) {
        case TREE_SWITCHEXPAND_ACTION:
            let expandAction = action as TreeExpandAction;
            let switchedItem : TreeItem = {
                ...expandAction.item,
                isExpanded: expandAction.isExpanded
            };
            console.log(TREE_SWITCHEXPAND_ACTION, expandAction, switchedItem);
    }
    return state;
};

export {reduceExpand};

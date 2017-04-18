import {Action, Reducer} from "redux";
import {TreeWidget} from "../../typings"
import {initialState}  from "../../store/initialState"

const reduceExpand: Reducer<TreeWidget> = (state: TreeWidget = initialState.tree, action: Action): TreeWidget => {
    console.log(state, action);
    return state;
};

export {reduceExpand};

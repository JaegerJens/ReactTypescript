import {Action} from "redux";
import {TreeWidget} from "../../typings"
import {initialState}  from "../../store/initialState"
import {SwitchExpand} from "./Action"

const reduce = (state: TreeWidget = initialState.tree, action: Action) => {
    console.log(state, action);
    switch(action.type) {
        case SwitchExpand.type: {
            
        }
        default:
            return state;
    }
};

export default reduce;

import {AppState, SwitchExpandAction, TreeItem, TreeActions, TreeExpandAction} from  "../../typings"
import {Tree} from "./Component"
import {Dispatch} from "redux";
import {connect} from "react-redux"

const mapStateToProps = (state: AppState) => state.tree;

const mapDispatchToProps = (dispatch: Dispatch<any>): TreeActions => {
    const expand: SwitchExpandAction = (item: TreeItem, isEnabled: boolean) => {
        let action: TreeExpandAction = {
            type: "TREE_SWITCHEXPAND",
            item: item,
            isExpanded: isEnabled
        }
        dispatch(action);
    };
    return {
        switchExpand: expand
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
import {AppState} from  "../../typings"
import {SwitchExpandAction, TreeItem, TreeActions, TreeExpandAction} from "./typings"
import {Tree} from "./Component";
import {expandAction} from "./Action";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: AppState) => state.tree;

const mapDispatchToProps = (dispatch: Dispatch<any>): TreeActions => {
    return {
        switchExpand: (item: TreeItem, isExpanded: boolean) => dispatch(expandAction(item, isExpanded))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
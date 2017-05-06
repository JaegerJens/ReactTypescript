import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../../typings/model";
import { TreeActions } from "../../../typings/redux";
import { TreeItem } from "../../../typings/tree";
import { expandAction } from "./Action";
import { Tree } from "./Component";

const mapStateToProps = (state: AppState) => state.tree;

const mapDispatchToProps = (dispatch: Dispatch<any>): TreeActions => {
    return {
        switchExpand: (item: TreeItem, isExpanded: boolean) => dispatch(expandAction(item, isExpanded))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tree);

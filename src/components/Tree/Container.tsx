import {AppState, TreeItem, TreeActions} from  "../../typings"
import {Tree} from "./Component"
import {SwitchExpand} from "./Action"
import {Dispatch} from "redux";
import {connect} from "react-redux"

const mapStateToProps = (state: AppState) => state.tree;

const switchExpandCreator = (item: TreeItem, isEnabled: boolean) => new SwitchExpand(item.id, isEnabled);

const mapDispatchToProps = (dispatch: Dispatch<any>): TreeActions => ({
    switchExpand: switchExpandCreator
});

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
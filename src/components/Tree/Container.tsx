import {AppState} from  "../../typings"
import {Tree} from "./Component"
import {connect} from "react-redux"

const mapStateToProps = (state: AppState) => state.tree;

export default connect(mapStateToProps)(Tree);
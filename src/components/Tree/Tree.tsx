import * as React from "react";
import {AppState, TreeWidget} from  "../../typings"
import {connect} from "react-redux";

const Tree = (props: TreeWidget) => <h1>TreeWidget</h1>;

const mapStateToProps = (state: AppState) => state.tree;

export default connect(mapStateToProps)(Tree);
    
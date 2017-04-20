import * as React from "react";
import {AppState, HelloProps} from "../../typings";
import {connect} from "react-redux";
import Tree from "../Tree/Container";

const Hello = ({compiler, framework}: HelloProps) => <div>
        <h1><i className="fa fa-heart" /> for {compiler} and {framework}!</h1>
        <Tree />
    </div>;

const mapStateToProps = (state:AppState) => state.hello;

export default connect(mapStateToProps)(Hello);

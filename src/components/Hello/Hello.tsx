import * as React from "react";
import {AppState, HelloProps} from "../../typings";
import {connect} from "react-redux";
import Tree from "../Tree/Tree";

const Hello = (props: HelloProps) => <div>
        <h1>Hello from {props.compiler} and {props.framework}!</h1>
        <Tree />
    </div>;

const mapStateToProps = (state:AppState) => state.hello;

export default connect(mapStateToProps)(Hello);

import * as React from "react";
import {AppState, HelloProps} from "../typings";
import {connect} from "react-redux";

const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

const mapStateToProps = (state:AppState) => state.hello;

export default connect(mapStateToProps)(Hello);

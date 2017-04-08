import * as React from "react";
import {HelloProps} from "../typings"

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

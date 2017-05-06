import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Hello from "./components/Hello/Hello";
import TreeUtil from "./components/Tree/util";
import configureStore from "./store/configureStore";
import { initialState } from "./store/initialState";

require("file-loader?name=index.html!./index.html");
require("font-awesome/css/font-awesome.min.css");

const store = configureStore(initialState);

const App = () => (
    <Provider store={store}>
        <Hello />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("example"));

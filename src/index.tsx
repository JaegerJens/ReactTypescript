import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {initialState} from "./store/initialState";
import configureStore from "./store/configureStore";
import Hello from "./components/Hello/Hello";
import TreeUtil from "./components/Tree/util";

require("file-loader?name=index.html!./index.html");
require('font-awesome/css/font-awesome.css');

let treeData = initialState.tree.data;
TreeUtil.recalcParentIndex(treeData);
TreeUtil.recalcChildrenMap(treeData);
console.log("tree data", treeData);

const store = configureStore(initialState);

const App = () => (
    <Provider store={store}>
        <Hello />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("example"));
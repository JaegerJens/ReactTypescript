import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {initialState} from "./store/initialState";
import configureStore from "./store/configureStore";
import Hello from "./components/Hello/Hello";

require("file-loader?name=index.html!./index.html");

const store = configureStore(initialState);

const App = () => (
    <Provider store={store}>
        <Hello />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("example"));
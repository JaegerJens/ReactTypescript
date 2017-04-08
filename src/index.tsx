import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {initialState} from "./initialState";
import configureStore from "./configureStore";
import { Hello } from "./components/Hello";

const store = configureStore(initialState);

const App = () => (
    <Provider store={store}>
        <Hello compiler="typescript" framework="React" />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("example"));
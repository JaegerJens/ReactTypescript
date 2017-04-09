import {createStore, Action} from "redux";
import {AppState} from "../typings"

export default (initialState : AppState) => {

    const reducer = (state : AppState, action: Action) : AppState => state;

    const store = createStore(reducer, initialState);

    return store;
}
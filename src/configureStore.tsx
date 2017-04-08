import {createStore} from "redux";
import {AppState, ActionType} from "./typings"

export default (initialState : AppState) => {

    const reducer = (state : AppState, action: ActionType) : AppState => state;

    const store = createStore(reducer, initialState);

    return store;
}
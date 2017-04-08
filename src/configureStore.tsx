import {createStore} from "redux";

interface AppState {
    counter: number
}

interface ActionType {
    type: string
}

export default (initialState : AppState) => {

    const reducer = (state : AppState, action: ActionType) : AppState => state;

    const store = createStore(reducer, initialState);

    return store;
}
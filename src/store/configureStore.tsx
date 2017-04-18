import {combineReducers, createStore, Action, Reducer, ReducersMapObject} from "redux";
import {reduceExpand} from "../components/Tree/Reducer"
import {initialState} from "./initialState";
import {AppState} from "../typings"

const logReducer: Reducer<any> = (state: any = initialState, action: any) => {
    console.log("logReducer", state, action);
    return state;
};

const reducerMap: ReducersMapObject = {
    hello: logReducer,
    tree: reduceExpand
};

const reducer = combineReducers<AppState>(reducerMap);

export default (initialState : AppState) => {
    const store = createStore(reducer, initialState);
    return store;
}
import { Action, combineReducers, createStore, Reducer, ReducersMapObject } from "redux";
import { AppState } from "../../typings/model";
import { reduceExpand } from "../components/Tree/Reducer";
import { initialState } from "./initialState";

const logReducer: Reducer<any> = (state: any = initialState, action: any) => {
    console.log("logReducer", state, action);
    return state;
};

const reducerMap: ReducersMapObject = {
    hello: logReducer,
    tree: reduceExpand
};

const reducer = combineReducers<AppState>(reducerMap);

export default (initialState: AppState) => {
    const store = createStore(reducer, initialState);
    return store;
};

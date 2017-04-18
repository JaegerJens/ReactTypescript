import {combineReducers, createStore, Action, ReducersMapObject} from "redux";
import {reduceExpand} from "../components/Tree/Reducer"
import {AppState} from "../typings"


const reducerMap: ReducersMapObject = {
    tree: reduceExpand
};

const reducer = combineReducers<AppState>(reducerMap);

export default (initialState : AppState) => {

    const store = createStore(reducer, initialState);

    return store;
}
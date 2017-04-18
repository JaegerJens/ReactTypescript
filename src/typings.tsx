import {TreeWidget} from "./components/Tree/typings";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface AppState {
    hello: HelloProps;
    tree: TreeWidget;
}

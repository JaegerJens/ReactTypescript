import {TreeItem} from "./tree"

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface AppState {
    hello: HelloProps;
    tree: TreeWidget;
}

export interface TreeWidget {
    title: string;
    data: TreeItem[];
}
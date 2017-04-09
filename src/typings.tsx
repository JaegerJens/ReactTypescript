export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface AppState {
    hello: HelloProps;
    tree: TreeWidget;
}

export interface TreeList extends Array<TreeItem> {};

export interface TreeWidget {
    data: TreeList;
}

export interface TreeItem {
    id: number;
    name: string;
    children?: TreeList;
}

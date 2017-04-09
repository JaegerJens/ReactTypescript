export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface AppState {
    hello: HelloProps;
    tree: TreeWidget;
}

export interface TreeWidget {
    data: Array<TreeItem>;
}

export interface TreeItem {
    id: number;
    name: string;
    children?: Array<TreeItem>;
}

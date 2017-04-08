export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface AppState {
    hello: HelloProps
}

export interface ActionType {
    type: string
}
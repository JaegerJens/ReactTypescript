import {AppState, TreeItem} from "../typings";

const extedorin : TreeItem = {
    id: 1,
    name: "Extedorin",
    children: [
        {
            id: 10000,
            name: "0000"
        }, {
            id: 10001,
            name: "0001"
        }, {
            id: 10002,
            name: "0002"
        }
    ]
};


export const initialState : AppState = {
    hello: {
        compiler: "Typescript 2.2",
        framework: "React 15.5"
    },
    tree: {
        data: [extedorin]
    }
}
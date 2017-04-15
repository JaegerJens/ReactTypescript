import {AppState, TreeItem} from "../typings";

const extedorin : TreeItem = {
    id: 1,
    name: "Extedorin",
    children: [
        {
            id: 10000,
            name: "0000",
            children: [
                {id: 100001, name: "m1"},
                {id: 100002, name: "m2"},
                {id: 100003, name: "m3"},
                {id: 100004, name: "m4"},
                {id: 100005, name: "m5"}
            ]
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
        compiler: "Typescript 2.3",
        framework: "React 15.5"
    },
    tree: {
        title: "Tree Widget",
        data: [extedorin]
    }
}
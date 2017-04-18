import {AppState} from "../typings";
import {TreeItem} from "../components/Tree/typings"

const extedorin : TreeItem = {
    id: 1,
    name: "Extedorin",
    isExpanded: true,
    children: [
        {
            id: 10000,
            name: "0000",
            isExpanded: true,
            children: [
                {id: 100001, name: "m1", isExpanded: false},
                {id: 100002, name: "m2", isExpanded: false},
                {id: 100003, name: "m3", isExpanded: true},
                {id: 100004, name: "m4", isExpanded: false},
                {id: 100005, name: "m5", isExpanded: false}
            ]
        }, {
            id: 10001,
            name: "0001",
            isExpanded: false
        }, {
            id: 10002,
            name: "0002",
            isExpanded: false
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
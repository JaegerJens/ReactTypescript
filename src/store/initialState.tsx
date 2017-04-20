import {AppState} from "../typings";
import {TreeItem} from "../components/Tree/typings"

const extedorin : TreeItem[] = [
    {
        id: 1,
        level: 0,
        name: "Extedorin",
        objectType: "dossier",
        isExpanded: true
    }, {
        id: 2,
        level: 1,
        parentId: 1,
        name: "0000",
        objectType: "sequence",
        isExpanded: true,
    }, {
        id: 3,
        level: 2,
        parentId: 2,
        name: "m1",
        objectType: "section",
        isExpanded: false
    }, {
        id: 4,
        level: 2,
        parentId: 2,
        name: "m2",
        objectType: "section",
        isExpanded: false
    }, {
        id: 5,
        name: "m3",
        objectType: "section",
        level: 2,
        parentId: 2,
        isExpanded: true
    }, {
        id: 6,
        name: "m4",
        objectType: "section",
        level: 2,
        parentId: 2,
        isExpanded: false
    }, {
        id: 7,
        name: "m5",
        objectType: "section",
        level: 2,
        parentId: 2,
        isExpanded: false
    }, {
        id: 8,
        name: "0001",
        objectType: "sequence",
        level: 1,
        parentId: 1,
        isExpanded: false
    }, {
        id: 9,
        name: "0002",
        objectType: "sequence",
        level: 1,
        parentId: 1,
        isExpanded: false
    }
];

export const initialState : AppState = {
    hello: {
        compiler: "Typescript 2.3",
        framework: "React 15.5"
    },
    tree: {
        title: "Tree Widget",
        data: extedorin
    }
}
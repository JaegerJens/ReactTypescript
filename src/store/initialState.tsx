import { AppState } from "../../typings/model";
import { objTypes, TreeItem } from "../../typings/tree";

const extedorin: TreeItem[] = [
    {
        id: 1,
        level: 0,
        name: "Extedorin",
        objectType: objTypes.dossier,
        isExpanded: true
    }, {
        id: 2,
        level: 1,
        parentId: 1,
        name: "0000",
        objectType: objTypes.sequence,
        isExpanded: true
    }, {
        id: 3,
        level: 2,
        parentId: 2,
        name: "m1",
        objectType: objTypes.section,
        isExpanded: true
    }, {
        id: 4,
        level: 2,
        parentId: 2,
        name: "m2",
        objectType: objTypes.section,
        isExpanded: false
    }, {
        id: 5,
        name: "m3",
        objectType: objTypes.section,
        level: 2,
        parentId: 2,
        isExpanded: true
    }, {
        id: 6,
        name: "m4",
        objectType: objTypes.section,
        level: 2,
        parentId: 2,
        isExpanded: false
    }, {
        id: 7,
        name: "m5",
        objectType: objTypes.section,
        level: 2,
        parentId: 2,
        isExpanded: false
    }, {
        id: 8,
        name: "0001",
        objectType: objTypes.sequence,
        level: 1,
        parentId: 1,
        isExpanded: false
    }, {
        id: 9,
        name: "0002",
        objectType: objTypes.sequence,
        level: 1,
        parentId: 1,
        isExpanded: false
    }, {
        id: 10,
        name: "cover-letter",
        objectType: objTypes.leaf,
        level: 3,
        parentId: 3,
        isExpanded: false
    }
];

export const initialState: AppState = {
    hello: {
        compiler: "Typescript 2.4",
        framework: "React 15.6"
    },
    tree: {
        title: "Tree Widget",
        data: extedorin
    }
};

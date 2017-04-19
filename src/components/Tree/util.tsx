import {TreeWidget, TreeItem} from "./typings"

const util = {
    getChildren: (data: TreeItem[], parentId: number): TreeItem[] => {
        return data.filter(elem => elem.parent === parentId);
    },
    getRoot: (data: TreeItem[]): TreeItem => {
        return data.filter(elem => !elem.parent)[0];
    }
};

export default util;
import {TreeWidget, TreeItem} from "./typings"

const getRoot = (data: TreeItem[]): TreeItem => {
    if (!data || data.length < 1)
        return null;
    let first = data[0];
    if (!first.parentId)
        return first;
    
    let entriesWithoutParents = data.filter(elem => !elem.parentId);
    if (entriesWithoutParents.length == 1)
        return entriesWithoutParents[0];
    throw "too few or too many roots";
}

const getChildrenWithFullsearch = (data: TreeItem[], parentId: number): TreeItem[] => {
    return data.filter(elem => elem.parentId === parentId);
};

const computeParentIndex = (data: TreeItem[]) => {
    // map TreeItem.id -> array index
    let map = new Map();
    for(let i=0; i<data.length; i++) {
        let item = data[i];
        map.set(item.id, i);

        if (!item.parentId)
            continue;

        let parentIndex = map.get(item.parentId);
        item.parentIndex = parentIndex;
    }
}

const computeChildIndex = (data: TreeItem[]) => {
    // map TreeItem.id -> array index
    let idMap = new Map();

    // parent id => list of child index
    let childMap = new Map();

    for(let i=0; i<data.length; i++) {
        let item = data[i];
        idMap.set(item.id, i);

        if (!item.parentId)
            continue;

        if (!childMap.has(item.parentId)) {
            childMap.set(item.parentId, [])
        }

        let childList = childMap.get(item.parentId);
        childList.push(i);
    }

    // set TreeItem.childrenIndex
    childMap.forEach( (childrenIndexList, k) => {
        if (childrenIndexList.length < 1)
            return;

        let children: number[] = [];
        for(let p=0; p<childrenIndexList.length; p++) {
            let childIndex = childrenIndexList[p];
            children.push(childIndex);
        }

        let parent = data[idMap.get(k)];
        parent.childrenIndex = children;
    });
}

const util = {
    recalcParentIndex: computeParentIndex,
    recalcChildrenMap: computeChildIndex,
    getChildren: getChildrenWithFullsearch,
    getRoot: getRoot
};

export default util;
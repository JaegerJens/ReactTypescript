import { TreeItem } from "../../../typings/tree.d";

const getRoot = (data: TreeItem[]): TreeItem => {
    if (!data || data.length < 1)
        return null;
    const first = data[0];
    if (!first.parentId)
        return first;

    let entriesWithoutParents = data.filter(elem => !elem.parentId);
    if (entriesWithoutParents.length == 1)
        return entriesWithoutParents[0];
    throw new Error("too few or too many roots");
};

const getChildrenWithFullsearch = (data: TreeItem[], parentId: number): TreeItem[] => {
    return data.filter(elem => elem.parentId === parentId);
};

const computeParentIndex = (data: TreeItem[]) => {
    // map TreeItem.id -> array index
    const map = new Map();
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        map.set(item.id, i);

        if (!item.parentId)
            continue;

        const parentIndex = map.get(item.parentId);
        item.parentIndex = parentIndex;
    }
}

const computeChildIndex = (data: TreeItem[]) => {
    // map TreeItem.id -> array index
    const idMap = new Map();

    // parent id => list of child index
    const childMap = new Map();

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        idMap.set(item.id, i);

        if (!item.parentId)
            continue;

        if (!childMap.has(item.parentId)) {
            childMap.set(item.parentId, []);
        }

        const childList = childMap.get(item.parentId);
        childList.push(i);
    }

    // set TreeItem.childrenIndex
    childMap.forEach( (childrenIndexList, k) => {
        if (childrenIndexList.length < 1)
            return;

        const children: number[] = [];
        for(let p = 0; p < childrenIndexList.length; p++) {
            const childIndex = childrenIndexList[p];
            children.push(childIndex);
        }

        const parent = data[idMap.get(k)];
        parent.childrenIndex = children;
    });
}

const findIndex = (data: TreeItem[], search: TreeItem): number => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === search.id) {
            return i;
        }
    }
    return -1;
};

const replaceTreeItem = (source: TreeItem[], replacement: TreeItem): TreeItem[] => {
    const pos = findIndex(source, replacement);
    if (pos < 0) {
        console.error("Item not found", replacement);
        return source;
    }

    const result: TreeItem[] = [...source];
    result.splice(pos, 1, replacement);
    return result;
};

const util = {
    recalcParentIndex: computeParentIndex,
    recalcChildrenMap: computeChildIndex,
    getChildren: getChildrenWithFullsearch,
    replaceTreeItem,
    getRoot
};

export default util;
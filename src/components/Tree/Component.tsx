import * as React from "react";
import {AppState} from  "../../typings"
import {SwitchExpandAction, TreeActions, TreeWidget, TreeItem} from "./typings"
import {connect} from "react-redux";
require("./style.css");
const treeStyle = "tree";

const getChildren = (data: TreeItem[], parentId: number): TreeItem[] => {
    return data.filter(elem => elem.parent === parentId);
}

const getRoot = (data: TreeItem[]): TreeItem => {
    return data.filter(elem => !elem.parent)[0];
}

const showItem = (data: TreeItem[], item: TreeItem, switchExpand: SwitchExpandAction): JSX.Element =>{

    const eventHandler = (event:any) => switchExpand(item, !item.isExpanded);

    let children = getChildren(data, item.id);
    let showChildren: boolean = !!children && item.isExpanded;

    return <div>
        <input type="checkbox"
            name="isExpanded"
            checked={item.isExpanded}
            onChange={eventHandler}/>
        <span>{item.name}</span>
        {showChildren && children.map(child => (<ul>{showItem(data, child, switchExpand)}</ul>))}
    </div>;
} 

const Tree = ({title, data, switchExpand}: TreeWidget & TreeActions) =>{
    let root = getRoot(data);
    return <div>
        <h2>{title}</h2>
        <div className="tree">
            <ul>{showItem(data, root, switchExpand)}</ul>
        </div>
    </div>;
} 

export {Tree};
import * as React from "react";
import Util from "./util"
import {ExpandButtonProps, SwitchExpandAction, TreeActions, TreeWidget, TreeItem} from "./typings"
import {connect} from "react-redux";
require("./style.css");
const treeStyle = "tree";

const ExpandButton = ({isExpanded, eventHandler}: ExpandButtonProps): JSX.Element => {
    return <input type="checkbox" name="isExpanded"
                  checked={isExpanded} onChange={eventHandler}/>;
}

const showItem = (data: TreeItem[], item: TreeItem, switchExpand: SwitchExpandAction): JSX.Element =>{

    const eventHandler = (event:any) => switchExpand(item, !item.isExpanded);
    const children = Util.getChildren(data, item.id);
    const showChildren: boolean = !!children && item.isExpanded;

    return <li key={item.id}>
        <ExpandButton isExpanded={item.isExpanded} eventHandler={eventHandler}/>
        <span>{item.name}</span>
        {showChildren && <ul>{children.map(child => showItem(data, child, switchExpand))}</ul>}
    </li>;
} 

const Tree = ({title, data, switchExpand}: TreeWidget & TreeActions) =>{
    let root = Util.getRoot(data);
    return <div>
        <h2>{title}</h2>
        <div className="tree">
            <ul>{showItem(data, root, switchExpand)}</ul>
        </div>
    </div>;
} 

export {Tree};
import * as React from "react";
import {AppState} from  "../../typings"
import {SwitchExpandAction, TreeActions, TreeWidget, TreeItem} from "./typings"
import {connect} from "react-redux";
require("./style.css");
const treeStyle = "tree";

const showItem = (item: TreeItem, switchExpand: SwitchExpandAction): JSX.Element =>{

    const eventHandler = (event:any) => switchExpand(item, !item.isExpanded);

    return <div>
        <input type="checkbox"
            name="isExpanded"
            checked={item.isExpanded}
            onChange={eventHandler}/>
        <span>{item.name}</span>
    </div>;
} 

const Tree = ({title, data, switchExpand}: TreeWidget & TreeActions) =>{
    return <div>
        <h2>{title}</h2>
        <div className="tree">
            <ul>{data.map(e => showItem(e, switchExpand))}</ul>
        </div>
    </div>;
} 

export {Tree};
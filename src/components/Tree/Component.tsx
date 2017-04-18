import * as React from "react";
import {AppState, SwitchExpandAction, TreeActions, TreeWidget, TreeList, TreeItem} from  "../../typings"
import {connect} from "react-redux";
require("./style.css");
const treeStyle = "tree";

const showItem = (item: TreeItem, switchExpand: SwitchExpandAction): JSX.Element => <div>
        <input type="checkbox"
            name="isExpanded"
            checked={item.isExpanded}
            onChange={event => switchExpand}/>
        <span>{item.name}</span>
        {item.children && item.isExpanded && (<ul>{listChildren(item.children, switchExpand)}</ul>)}
    </div>;

const listChildren = (children: TreeList, switchExpand: SwitchExpandAction): JSX.Element[] =>
    children.map((entry) => <li key={entry.id}>{showItem(entry, switchExpand)}</li>);

const Tree = ({title, data, switchExpand}: TreeWidget & TreeActions) => <div>
        <h2>{title}</h2>
        <div className="tree">
            <ul>{listChildren(data, switchExpand)}</ul>
        </div>
    </div>;

export {Tree};
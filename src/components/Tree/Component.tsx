import * as React from "react";
import {AppState, TreeWidget, TreeList, TreeItem} from  "../../typings"
import {connect} from "react-redux";
require("./style.css");
const treeStyle = "tree";

const showItem = ({name, children, isExpanded, id}: TreeItem): JSX.Element => <div>
        <input type="checkbox" name="isExpanded" checked={isExpanded}/>
        <span>{name}</span>
        {children && isExpanded && (<ul>{listChildren(children)}</ul>)}
    </div>;

const listChildren = (children: TreeList): JSX.Element[] =>
    children.map((entry) => <li key={entry.id}>{showItem(entry)}</li>);

const Tree = ({title, data}: TreeWidget) => <div>
        <h2>{title}</h2>
        <div className="tree">
            <ul>{listChildren(data)}</ul>
        </div>
    </div>;

export {Tree};
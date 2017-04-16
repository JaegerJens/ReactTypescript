import * as React from "react";
import {AppState, TreeWidget, TreeList, TreeItem} from  "../../typings"
import {connect} from "react-redux";

const showItem = ({name, children, isExpanded, id}: TreeItem): JSX.Element => <div>
        <input type="checkbox" name="isExpanded" checked={isExpanded}/>
        <span>{name}</span>
        {children && isExpanded && (<ul>{listChildren(children)}</ul>)}
    </div>;

const listChildren = (children: TreeList): JSX.Element[] =>
    children.map((entry) => <li key={entry.id}>{showItem(entry)}</li>);

const Tree = ({title, data}: TreeWidget) => <div>
        <h2>{title}</h2>
        <ul>{listChildren(data)}</ul>
    </div>;

const mapStateToProps = (state: AppState) => state.tree;

export default connect(mapStateToProps)(Tree);

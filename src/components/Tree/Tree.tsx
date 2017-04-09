import * as React from "react";
import {AppState, TreeWidget, TreeList, TreeItem} from  "../../typings"
import {connect} from "react-redux";

const showItem = (item: TreeItem): JSX.Element => <div>
        <p>{item.name}</p>
        {item.children && (<ul>{listChildren(item.children)}</ul>)}
    </div>;

const listChildren = (children: TreeList): JSX.Element[] =>
    children.map((entry) => <li key={entry.id}>{showItem(entry)}</li>);

const Tree = (props: TreeWidget) => <div>
        <h1>TreeWidget</h1>
        <ul>{listChildren(props.data)}</ul>
    </div>;

const mapStateToProps = (state: AppState) => state.tree;

export default connect(mapStateToProps)(Tree);
    
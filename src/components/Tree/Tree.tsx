import * as React from "react";
import {AppState, TreeWidget, TreeList} from  "../../typings"
import {connect} from "react-redux";


const listChildren = (children: TreeList) =>
    children.map((entry) => <li key={entry.id}>{entry.name}</li>);

const Tree = (props: TreeWidget) => <div>
        <h1>TreeWidget</h1>
        <ul>
            {listChildren(props.data)}
        </ul>
    </div>;

const mapStateToProps = (state: AppState) => state.tree;

export default connect(mapStateToProps)(Tree);
    
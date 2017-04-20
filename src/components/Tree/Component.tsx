import * as React from "react";
import Util from "./util"
import {AwesomeIconProps, ExpandButtonProps, TreeElementProps, SwitchExpandAction, TreeActions, TreeWidget, TreeItem} from "./typings"
import {connect} from "react-redux";
require("./style.css");
const treeStyle = "tree";

const ExpandButton = ({isExpanded, eventHandler}: ExpandButtonProps): JSX.Element => {
    return <input type="checkbox" name="isExpanded"
                  checked={isExpanded} onChange={eventHandler}/>;
}

const AwesomeIcon = ({name}: AwesomeIconProps): JSX.Element => {
    const cssClass = `fa fa-${name}`;
    return <i className={cssClass}/>;
}

const TreeElement = ({data, item, expandHandler}: TreeElementProps): JSX.Element => {
    const eventHandler = (event:any) => expandHandler(item, !item.isExpanded);
    const children = Util.getChildren(data, item.id);
    const hasChildren: boolean = !!children && children.length > 0;
    const showChildren: boolean = hasChildren && item.isExpanded;

    return <li key={item.id}>
        {hasChildren && <ExpandButton isExpanded={item.isExpanded} eventHandler={eventHandler}/> }
        <span><AwesomeIcon name={item.icon}/> {item.name}</span>
        {showChildren && <ul>{children.map(child => <TreeElement key={child.id} data={data} item={child} expandHandler={expandHandler} />)}</ul>}
    </li>;
}

const Tree = ({title, data, switchExpand}: TreeWidget & TreeActions) =>{
    let root = Util.getRoot(data);
    return <div>
        <h2>{title}</h2>
        <div className="tree">
            <ul><TreeElement data={data} item={root} expandHandler={switchExpand} /></ul>
        </div>
    </div>;
} 

export {Tree};
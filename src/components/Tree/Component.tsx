import * as React from "react";
import Util from "./util"
import {AwesomeIconProps, ObjectStyle, ExpandButtonProps, TreeElementProps, SwitchExpandAction, TreeActions, TreeWidget, TreeItem} from "./typings"
import {connect} from "react-redux";
require("./style.css");
const treeStyle = "tree";
const iconColor = "green";

const AwesomeIcon = ({name, color}: AwesomeIconProps): JSX.Element => {
    const style = {
        color: color
    };
    const cssClass = `fa fa-${name}`;
    return <i className={cssClass} style={style}/>;
}

const displayObject = (item: TreeItem): ObjectStyle => {
    switch(item.objectType) {
        case "dossier":
            return {
                icon: "envelope",
                color: "red"
            };
        case "sequence":
            return {
                icon: "folder",
                color: "green"
            };
        case "section":
            return {
                icon: "sticky-note-o",
                color: "yellow"
            };
        default:
            throw `unknown object type ${item.objectType}`
    }
}

const TreeElement = ({data, item, expandHandler}: TreeElementProps): JSX.Element => {
    const eventHandler = (event:any) => expandHandler(item, !item.isExpanded);
    const children = Util.getChildren(data, item.id);
    const style = displayObject(item);
    const hasChildren: boolean = !!children && children.length > 0;
    const showChildren: boolean = hasChildren && item.isExpanded;

    return <li key={item.id}>
        <span onClick={eventHandler}>
            <AwesomeIcon name={style.icon} color={style.color} /> &nbsp;
            {item.name} &nbsp;
            {hasChildren && !showChildren && <AwesomeIcon name="expand" color="grey" /> }
        </span>
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
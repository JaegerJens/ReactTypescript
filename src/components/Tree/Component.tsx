import * as React from "react";
import { connect } from "react-redux";
import { ObjectStyle, TreeElementProps } from "../../../typings/index";
import { TreeWidget } from "../../../typings/model";
import { TreeActions } from "../../../typings/redux";
import { objTypes, TreeItem } from "../../../typings/tree";
import AwesomeIcon from "../Awesome/Component";
import Util from "./util";
require("./style.css");

const displayObject = (item: TreeItem): ObjectStyle => {
    switch (item.objectType) {
        case objTypes.dossier:
            return {
                icon: "envelope",
                color: "brown"
            };
        case objTypes.sequence:
            return {
                icon: "circle",
                color: "green"
            };
        case objTypes.section:
            return {
                icon: "folder-open",
                color: "yellow"
            };
        case objTypes.leaf:
            return {
                icon: "file",
                color: "orange"
            };
        default:
            throw new Error(`unknown object type ${item.objectType}`);
    }
};

const TreeElement = ({data, item, expandHandler}: TreeElementProps): JSX.Element => {
    const eventHandler = (event: any) => expandHandler(item, !item.isExpanded);
    const children = Util.getChildren(data, item.id);
    const style = displayObject(item);
    const hasChildren: boolean = !!children && children.length > 0;
    const showChildren: boolean = hasChildren && item.isExpanded;
    const isLeaf: boolean = item.objectType === objTypes.leaf;

    return <li key={item.id}>
        <span onClick={eventHandler}>
            <AwesomeIcon name={style.icon} color={style.color} /> &nbsp;
            {item.name} &nbsp;
            {isLeaf && <AwesomeIcon name="external-link" color={style.color} /> }
            {hasChildren && !showChildren && <AwesomeIcon name="expand" color="grey" /> }
        </span>
        {showChildren &&
            <ul>{
                children.map(
                    (child) => <TreeElement
                                    key={child.id}
                                    data={data}
                                    item={child}
                                    expandHandler={expandHandler} />)
            }</ul>}
    </li>;
};

const Tree = ({title, data, switchExpand}: TreeWidget & TreeActions) => {
    const root = Util.getRoot(data);
    return <div>
        <h2>{title}</h2>
        <div className="tree">
            <ul><TreeElement data={data} item={root} expandHandler={switchExpand} /></ul>
        </div>
    </div>;
};

export {Tree};

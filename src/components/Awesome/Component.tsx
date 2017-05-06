import * as React from "react";
import { AwesomeIconProps } from "../../../typings/index";

const AwesomeIcon = ({name, color}: AwesomeIconProps): JSX.Element => {
    const style = {
        color
    };
    const cssClass = `fa fa-${name}`;
    return <span className={cssClass} style={style}/>;
};

export default AwesomeIcon;

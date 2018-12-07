import React from "react";
import SvgIcon from "react-native-svg-icon";
import svgs from "./svgs";
export const Icon = (props) => {
    return <SvgIcon {...props} svgs={svgs}/>;
};

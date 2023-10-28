import React from "react";
import { Text } from "react-native";


export default function AppText(props) {

    const fontFamily = props.bold ? { fontFamily: "ProductSans-Bold" } : { fontFamily: "ProductSans-Regular" };

    return <Text {...props} style={[fontFamily,{color:'white'}, props.style]} >{props.children}</Text>
}
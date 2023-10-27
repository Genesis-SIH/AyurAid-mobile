import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./text";
import { Colors } from "../utils";
import { ShadowStyles } from "../config";


const commonButtonStyle = {
    marginTop: 15,
    padding: 10,
    alignItems: "center", 
    justifyContent: "center",
    width:'100%'
}

export function RoundButton(props) {

    const buttonType = props.outline ? { backgroundColor: "transparent", borderWidth: 1, borderColor: Colors.primary } : { backgroundColor: Colors.primary,borderWidth: 1, borderColor: Colors.primary }
    const showShadow = props.enableShadow ? ShadowStyles.micShadow : {}


    return (
        <TouchableOpacity onPress={props.onPress} {...props} style={[buttonType,commonButtonStyle,showShadow,{ borderRadius: 50, padding: 10, alignItems: "center", justifyContent: "center",width:'100%' }, props.style]}>
            <AppText bold={props.boldTitle} style={{ color: props.outline ? Colors.primary : "white",fontSize:18 }}>{props.title}</AppText>
        </TouchableOpacity>
    )
}


export function FlatButton(props) {

    const buttonType = props.outline ? { backgroundColor: "transparent", borderWidth: 1, borderColor: Colors.primary } : { backgroundColor: Colors.primary,borderWidth: 1, borderColor: Colors.primary }
    const showShadow = props.enableShadow ? ShadowStyles.micShadow : {}

    return (
        <TouchableOpacity onPress={props.onPress}  {...props} style={[buttonType,commonButtonStyle,showShadow,{ borderRadius: 8,}, props.style]}>
            <AppText bold={props.boldTitle} style={{ color: props.outline ? Colors.primary : "white",fontSize:18 }}>{props.title}</AppText>
        </TouchableOpacity>
    )
}




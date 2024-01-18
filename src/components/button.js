import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./text";
import { Colors } from "../utils";
import Ionicons from "react-native-vector-icons/Ionicons";

const commonButtonStyle = {
  marginTop: 15,
  padding: 10,
  alignItems: "center",
  width: "100%",
  width: 350,
  flexDirection: "row",
  justifyContent: "space-between",
};
const commonButtonStyle1 = {
  marginTop: 15,
  padding: 10,
  alignItems: "center",
  width: "100%",
  width: 350,
  flexDirection: "row",
  justifyContent: "center",
};

export function RoundButton(props) {
  const buttonType = props.outline
    ? {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: Colors.primary,
      }
    : {
        backgroundColor: Colors.primary,
        borderWidth: 1,
        borderColor: Colors.primary,
      };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      {...props}
      style={[
        buttonType,
        commonButtonStyle,
        {
          borderRadius: 50,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        },
        props.style,
      ]}
    >
      <AppText
        bold={props.boldTitle}
        style={{
          color: props.outline ? Colors.primary : "white",
          fontSize: 18,
        }}
      >
        {props.title}
      </AppText>
    </TouchableOpacity>
  );
}

export function FlatButton(props) {
  const buttonType = props.outline
    ? {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: Colors.primary,
      }
    : {
        backgroundColor: Colors.primary,
        borderWidth: 1,
        borderColor: Colors.primary,
      };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      {...props}
      style={[buttonType, commonButtonStyle1, { borderRadius: 8 }, props.style]}
    >
      <AppText
        bold={props.boldTitle}
        style={{
          color: props.outline ? Colors.primary : "white",
          fontSize: 18,
        }}
      >
        {props.title}
      </AppText>
    </TouchableOpacity>
  );
}
export function OutlinButton(props) {
  const buttonType = props.outline
    ? {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: Colors.primary,
      }
    : {
        backgroundColor: Colors.primary,
        borderWidth: 1,
        borderColor: Colors.primary,
      };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      {...props}
      style={[buttonType, commonButtonStyle, { borderRadius: 8 }, props.style]}
    >
      <AppText
        bold={props.boldTitle}
        style={{
          color: props.outline ? Colors.primary : "white",
          fontSize: 18,
        }}
      >
        {props.title}
      </AppText>

      <Ionicons
        name="checkmark-done-circle-sharp"
        size={30}
        color={props.selectLanguage ? Colors.primary : Colors.colorBlack}
      />
    </TouchableOpacity>
  );
}


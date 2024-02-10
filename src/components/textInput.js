import React from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./text";
import { Colors } from "../utils";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AppTextInput(props) {
  const [isSecure, setIsSecure] = React.useState(true);

  if (props.rightElement) {
    return (
      <View style={{ width: "100%", marginBottom: 20 }}>
        <AppText style={{ color: Colors.primary, marginBottom: 2 }}>
          {props.label}
        </AppText>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 8,
            paddingRight: 10,
            backgroundColor: Colors.seconday,
          }}
        >
          <TextInput
            placeholderTextColor={"grey"}
            {...props}
       
            style={[styles.input, { width: "90%" }, props.style]}
          />
          {props.rightElement}
        </View>
      </View>
    );
  }

  if (props?.type == "password") {
    return (
      <View style={{ width: "100%", marginBottom: 20 }}>
        <AppText style={{ color: Colors.primary, marginBottom: 2 }}>
          {props.label}
        </AppText>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 8,
            paddingRight: 10,
            backgroundColor: Colors.seconday,
          }}
        >
          <TextInput
            secureTextEntry={isSecure}
            placeholderTextColor={"grey"}
            {...props}
            style={[styles.input, { width: "90%" }, props.style]}
          />
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
            <MaterialCommunityIcons
              name={!isSecure ? "eye-off" : "eye"}
              size={22}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={[{ width: "100%", marginBottom: 20 },props.containerStyle]}>
      <AppText style={{ color: Colors.primary, marginBottom: 2 }}>
        {props.label}
      </AppText>
      <TextInput
      
        placeholderTextColor={"grey"}
        {...props}
        style={[styles.input, props.style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.seconday,
    padding: 10,
    width: "100%",
    borderRadius: 8,
    fontSize: 14,
    color: "white",
    paddingVertical: 10,
  },
});

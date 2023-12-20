// RadioButton.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({ label, value, onValueChange }) => {
  return (
    <TouchableOpacity onPress={() => onValueChange(!value)}>
      <View style={styles.container}>
        <View style={[styles.radioButton, { backgroundColor: value ? "#0BC9A7" : "#fff" }]} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0BC9A7",
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: "#fff",
  },
});

export default RadioButton;

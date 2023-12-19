// QndaScreen.js
import React, { useState } from "react";
import { Alert, View } from "react-native";

import { useRoute } from "@react-navigation/core";
import {
  AppTextInput,
  RadioButton,
  FlatButton,
  AppText,
  LoadingModal,
} from "../../components";
import { Colors, Routes } from "../../utils";
import { ApiCollection } from "../../config";
import axios from "axios";

const QndaScreen = ({ route, navigation }) => {
  const { data } = route.params;
  const [isDiabetes, setIsDiabetes] = useState(false);
  const [heartRate, setHeartRate] = useState("");
  const [isHighBP, setIsHighBP] = useState(false);
  const [lungs, setLungs] = useState("");
  const [liver, setLiver] = useState("");
  const [allergies, setAllergies] = useState("");
  const [bmi, setBMI] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    const allergiesArray = allergies
      .split(",")
      .map((allergy) => allergy.trim());
    setIsLoading(true);
    const newData = {
      isDiabetes,
      heart: heartRate,
      isHighBP,
      lungs,
      liver,
      allergies: allergiesArray,
      bmi,
    };
    const data1 = { ...data, ...newData };
    console.log(data1);
    await axios
      .post(ApiCollection.authController.signup, data1)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        Alert.alert("Success", "Account created successfully");
        navigation.navigate(Routes.onBoarding.loginScreen);
      })
      .catch((err) => {
        setIsLoading(false);
        Alert.alert("Register Error", err.response.data.message);
      });
    setIsLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 20,
      }}
    >
      <LoadingModal modalVisible={isLoading} />
      <AppText
        bold={true}
        style={{
          fontSize: 30,
          color: Colors.primary,
        }}
      >
        {" "}
        Q/A Form
      </AppText>
      <RadioButton
        label="Do you have diabetes?"
        value={isDiabetes}
        onValueChange={setIsDiabetes}
      />
      <AppTextInput
        label="Heart Rate"
        placeholder="Enter heart rate"
        onChangeText={setHeartRate}
      />
      <RadioButton
        label="Do you have high blood pressure?"
        value={isHighBP}
        onValueChange={setIsHighBP}
      />
      <AppTextInput
        label="Lungs"
        placeholder="Enter lung condition"
        onChangeText={setLungs}
      />
      <AppTextInput
        label="Liver"
        placeholder="Enter liver condition"
        onChangeText={setLiver}
      />
      <AppTextInput
        label="Allergies (comma-separated)"
        placeholder="e.g., pollen, dust"
        onChangeText={setAllergies}
      />
      <AppTextInput label="BMI" placeholder="Enter BMI" onChangeText={setBMI} />

      {/* Add more fields as needed */}

      <FlatButton
        title="Register"
        onPress={handleRegister}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
};

export default QndaScreen;

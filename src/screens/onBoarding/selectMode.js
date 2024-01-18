import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Colors, Routes } from "../../utils";
import { LoadingModal } from "react-native-loading-modal";
import { AppText, FlatButton } from "../../components";
import axios from "axios";
import { ApiCollection } from "../../config";

function SelectMode({ route, navigation }) {
  let { data } = route.params;
  data = {
    ...data,
    role: "practitioner",
  };
  const [isLoading, setIsLoading] = useState(false);

  console.log(data);
  const onContinueUser = async () => {
    navigation.navigate(Routes.onBoarding.QandA, {
      data: data,
    });
  };
  const onContinuePractitioner = async () => {
    setIsLoading(true);
    await axios
      .post(ApiCollection.authController.signup, data)
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
    <View style={styles.container}>
      <LoadingModal modalVisible={isLoading} />
      <AppText
        bold={true}
        style={{
          fontSize: 45,
          color: Colors.primary,

          paddingBottom: 200,
          paddingTop: 50,
        }}
      >
        Choose Role
      </AppText>

      <FlatButton
        title="Normal user"
        onPress={onContinueUser}
        style={{
          width: "90%",
        }}
      />

      <FlatButton
        title="Student/Practitioner"
        onPress={onContinuePractitioner}
        style={{
          width: "90%",
        }}
      />
    </View>
  );
}

export default SelectMode;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

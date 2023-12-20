import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Colors, Routes } from "../../utils";

import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import { AppText, AppTextInput, FlatButton } from "../../components";

import Logo from "../../images/logo/logo.png";
import axios from "axios";
import { ApiCollection } from "../../config";
import LoadingModal from "../../components/loadingmodal";
import { useTranslation } from "../../hooks/translation";

function RegisterScreen({ navigation }) {
  const translation = useTranslation();

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onContinue = async () => {
    if (fullName == "") {
      Alert.alert("Register Error", "Please enter your full name");
      return;
    }

    if (email == "") {
      Alert.alert("Register Error", "Please enter your email");
      return;
    }

    if (dob == "") {
      Alert.alert("Register Error", "Please enter your date of birth");
      return;
    }

    if (country == "") {
      Alert.alert("Register Error", "Please enter your country");
      return;
    }

    if (password == "") {
      Alert.alert("Register Error", "Please enter your password");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Register Error",
        "Password and confirm password does not match"
      );
      return;
    }

    const data = {
      username: email.split("@")[0],
      email: email,
      password: password,
      fullName: fullName,
      dob: dob,
      country: country,
    };
    navigation.navigate(Routes.onBoarding.SelectMode, {
      data: data,
    });
    setIsLoading(true);
    // await axios
    //   .post(ApiCollection.authController.signup, data)
    //   .then((res) => {
    //     setIsLoading(false);
    //     console.log(res.data);
    //     Alert.alert("Success", "Account created successfully");
    //     navigation.navigate(Routes.onBoarding.loginScreen);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     Alert.alert("Register Error", err.response.data.message);
    //   });
  };

  const onAlready = () => {
    navigation.navigate(Routes.onBoarding.loginScreen);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        style={styles.gradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 188, 139, 0.2)"]}
      >
        <View
          style={{
            width: "90%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50, marginBottom: 10 }}
            contentFit="cover"
            source={Logo}
          />

          <AppText
            bold
            style={{ color: Colors.primary, fontSize: 30, marginBottom: 30 }}
          >
            {translation.t("Create Account !")}
          </AppText>
          <AppTextInput
            label={translation.t("Full Name")}
            placeholder="Ex - John Doe"
            onChangeText={(text) => setFullName(text)}
          />
          <AppTextInput
            label={translation.t("Email")}
            placeholder="Ex - some@gmail.com"
            onChangeText={(text) => setEmail(text)}
          />
          <AppTextInput
            label={translation.t("Date Of Birth")}
            placeholder="Ex - 03 / 03 /2003"
            onChangeText={(text) => setDob(text)}
          />
          <AppTextInput
            label={translation.t("Country")}
            placeholder="Ex - India"
            onChangeText={(text) => setCountry(text)}
          />
          <AppTextInput
            type={"password"}
            label={translation.t("Password")}
            placeholder="*****"
            onChangeText={(text) => setPassword(text)}
          />
          <AppTextInput
            type={"password"}
            label={translation.t("Confirim Password")}
            placeholder="****"
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <FlatButton
            title={translation.t("Continue")}
            onPress={onContinue}
            style={{
              width: "100%",
            }}
          />

          <TouchableOpacity style={{ marginTop: 30 }} onPress={onAlready}>
            <AppText style={{ fontSize: 15 }}>
              {translation.t("Already have an Account ? Login !")}
            </AppText>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 50,
  },
});

export default RegisterScreen;

import { Image } from "expo-image";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppText, AppTextInput, FlatButton } from "../../components";
import Forget from "../../images/custom/forget.png";
import { Colors, Routes } from "../../utils";
import { LoadingModal } from "../../components";
import axios from "axios";
import { ApiCollection } from "../../config";
import { useTranslation } from "../../hooks/translation";

function ForgetPassword({ navigation }) {
  const translation = useTranslation();

  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const onLogin = () => {
    navigation.goBack();
  };

  const onReset = async () => {
    if (email == "") {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }

    setIsLoading(true);
    await axios
      .post(ApiCollection.authController.forgetPassword, { identity: email })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        Alert.alert(
          "Success",
          "Password reset link has been sent to your email address"
        );
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.data);
        Alert.alert("Error", err.response.data.message);
      });
  };
  return (
    <View style={styles.container}>
      <LoadingModal modalVisible={isLoading} />
      <LinearGradient
        style={styles.gradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 188, 139, 0.2)"]}
      >
        <View
          style={{
            width: "80%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 100, width: 100, marginBottom: 10 }}
            contentFit="cover"
            source={Forget}
          />

          <AppText
            bold
            style={{ color: Colors.primary, fontSize: 30, marginBottom: 30 }}
          >
            {translation.t("Forget Password")}
          </AppText>
          <AppTextInput
            label={translation.t("Email")}
            placeholder="Enter Email id"
            onChangeText={(text) => setEmail(text)}
          />

          <FlatButton
            enableShadow={true}
            title={translation.t("Continue")}
            onPress={onReset}
            style={{ width: "100%" }}
          />

          <TouchableOpacity style={{ marginTop: 30 }}>
            <AppText style={{ fontSize: 15 }} onPress={onLogin}>
              {translation.t("Back to Login")} !
            </AppText>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default ForgetPassword;

import { Image } from "expo-image";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import { AppText, AppTextInput, FlatButton } from "../../components";
import Forget from "../../images/custom/forget.png";
import { Colors, Routes } from "../../utils";
function ForgetPassword({navigation}) {

    const onRegister = () => {
        navigation.navigate(Routes.onBoarding.registerScreen)
      }
    const onReset = () => {
        navigation.navigate(Routes.onBoarding.ResetScreen)
      }
  return (
    <View style={styles.container}>
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
            style={{ width: 50, height: 150,width:100, marginBottom: 10 }}
            contentFit="cover"
            source={Forget}
          />

          <AppText
            bold
            style={{ color: Colors.primary, fontSize: 30, marginBottom: 30 }}
          >
           Forget Password
          </AppText>
          <AppTextInput label="Email" placeholder="Enter Email id" />

          <FlatButton enableShadow={true} title="Continue" onPress={onReset} />

          <TouchableOpacity style={{ marginTop: 30 }} >
            <AppText style={{ fontSize: 15 }} onPress={onRegister}>
              Don’t have an Account ? Create Now !
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

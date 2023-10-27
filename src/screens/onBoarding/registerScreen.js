import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Colors, Routes } from "../../utils";

import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import {
  AppText,
  AppTextInput,
  FlatButton,
  RoundButton,
} from "../../components";

import Logo from "../../images/logo/logo.png";
function RegisterScreen({navigation}) {

    const onAlready=()=>{
        navigation.navigate(Routes.onBoarding.loginScreen)
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
            style={{ width: 50, height: 50, marginBottom: 10 }}
            contentFit="cover"
            source={Logo}
          />

          <AppText
            bold
            style={{ color: Colors.primary, fontSize: 30, marginBottom: 30 }}
          >
            Create Account !
          </AppText>
          <AppTextInput label="Full Name" placeholder="Enter your Full Name" />
          <AppTextInput label="Username" placeholder="Enter your Username" />
          <AppTextInput label="Email" placeholder="Enter your Email" />
          <AppTextInput label="Date Of Birth" placeholder="Enter your Date Of Birth" />
          <AppTextInput label="Country" placeholder="Enter your Country" />
          <FlatButton title="REGISTER" />

          <TouchableOpacity style={{ marginTop: 30 }} onPress={onAlready}>
            <AppText style={{ color: "white", fontSize: 15 }}>
            Already have an Account ? Login !
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

export default RegisterScreen;

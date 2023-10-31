import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Colors, Routes } from "../../utils";

import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import {
  AppText,
  AppTextInput,
  FlatButton,
  RoundButton,
} from "../../components";

import Logo from "../../images/logo/logo.png";
function RegisterScreen({ navigation }) {

  const onAlready = () => {
    navigation.navigate(Routes.onBoarding.loginScreen)
  }
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
            Create Account !
          </AppText>
          <AppTextInput label="Full Name" placeholder="Ex - John Doe" />
          <AppTextInput label="Username" placeholder="Ex - johndoe" />
          <AppTextInput label="Email" placeholder="Ex - some@gmail.com" />
          <AppTextInput label="Date Of Birth" placeholder="Ex - 03 / 03 /2003" />
          <AppTextInput label="Country" placeholder="Ex - India" />
          <FlatButton title="REGISTER" />

          <TouchableOpacity style={{ marginTop: 30 }} onPress={onAlready}>
            <AppText style={{ fontSize: 15 }}>
              Already have an Account ? Login !
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

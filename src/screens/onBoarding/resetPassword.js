import * as React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Colors, Routes } from "../../utils";
import {
  AppText,
  AppTextInput,
  FlatButton,
  RoundButton,
} from "../../components";
import Reset from "../../images/custom/reset.png";
function ResetPassword({ navigation }) {
  const onRegister = () => {
    navigation.navigate(Routes.onBoarding.registerScreen);
  };
  const onReset = () => {
    navigation.navigate(Routes.onBoarding.welcomeScreen);
  };
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
            style={{ width: 50, height: 130, width: 100, marginBottom: 5 }}
            contentFit="cover"
            source={Reset}
          />

          <AppText
            bold
            style={{ color: Colors.primary, fontSize: 30, marginBottom: 18 }}
          >
            Reset Password
          </AppText>
          <AppTextInput label="Old Password" placeholder="Old Password" />
          <AppTextInput label="New Password" placeholder="Your New Password" />
          <AppTextInput
            label="Confirm Password"
            placeholder="Your Confirm Password"
          />

          <FlatButton
            enableShadow={true}
            title="Reset"
            onPress={onReset}
            style={{
              width: 300,
            }}
          />
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

export default ResetPassword;

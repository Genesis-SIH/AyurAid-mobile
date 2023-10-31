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
import Logo from "../../images/logo/logo.png";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/features/userSlice";

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const onRegister = () => {
    navigation.navigate(Routes.onBoarding.registerScreen)
  }

  const onLoginPress = () => {
    const user = {
      name: 'John Doe',
      email: '',
      id: '1234567890',
      profilePic: ''
    }
    dispatch(setActiveUser({ userToken: '1234567890', loggedIn: true, user: user }))
    navigation.replace(Routes.main.tag)
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
            Welcome Back
          </AppText>
          <AppTextInput label="Username" placeholder="Ex- johndoe" />
          <AppTextInput label="Password" placeholder="Your Password" />

          <FlatButton enableShadow={true} title="LOGIN" onPress={onLoginPress} />

          <TouchableOpacity style={{ marginTop: 30 }} onPress={onRegister}>
            <AppText style={{  fontSize: 15 }}>
              Don’t have an Account ? Create Now !
            </AppText>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

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

export default LoginScreen;

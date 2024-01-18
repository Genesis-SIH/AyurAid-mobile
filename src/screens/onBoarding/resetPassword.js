import * as React from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Colors, Routes } from "../../utils";
import {
  AppText,
  AppTextInput,
  FlatButton,
  LoadingModal,
  RoundButton,
} from "../../components";
import Reset from "../../images/custom/reset.png";
import { useAxios } from "../../hooks/axios/useAxios";
import { ApiCollection } from "../../config";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/features/userSlice";

function ResetPassword({ navigation }) {
  const axios = useAxios();
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const onRegister = () => {
    navigation.navigate(Routes.onBoarding.registerScreen);
  };

  const handleReset = async () => {
    try {
      setLoading(true);

      if (newPassword !== confirmPassword) {
        // New and confirm passwords do not match
        // Display an error message or handle it as needed
        Alert.alert(
          "check Error",
          "check new password match to confimr password"
        );
        console.log("New and confirm passwords do not match");
        setLoading(false);
        return;
      }

      const res = await axios.post(
        ApiCollection.authController.updatePassword,
        {
          newPassword: newPassword,
          currentPassword: oldPassword,
        }
      );

      // dispatch(
      //   setActiveUser({
      //     userToken: res.data.data.token,
      //     loggedIn: true,
      //     user: res.data.data.user,
      //   })
      // );

      console.log(res.data.data);

      // Handle status 400
      if (res.status === 200) {
        // Display an error message or handle it as needed
        Alert.alert("Password Change", res.data.message);
        console.log(res.data.message);
        setLoading(false);
        navigation.navigate(Routes.main.settingScreen);
        return;
      }

      setLoading(false);

      // Here, you can handle the logic for password reset
      // For simplicity, I'm just navigating back to the welcome screen.
    } catch (error) {
      if (error.response.status === 400) {
        // Display an error message or handle it as needed
        Alert.alert("Update Error", error.response.data.message);
        console.log(error.response.data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LoadingModal modalVisible={loading} />
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

          <AppTextInput
            label="Old Password"
            placeholder="Old Password"
            value={oldPassword}
            onChangeText={setOldPassword}
            secureTextEntry
          />

          <AppTextInput
            label="New Password"
            placeholder="Your New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />

          <AppTextInput
            label="Confirm Password"
            placeholder="Your Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <FlatButton
            enableShadow={true}
            title="Reset"
            onPress={handleReset}
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

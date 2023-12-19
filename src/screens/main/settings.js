import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Border, Colors, Routes } from "../../utils";
import GreenGradient from "../../images/gradients/green.jpeg";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTranslation } from "../../hooks/translation";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/features/userSlice";
import { User } from "../../redux/store/useStore";
import { AppText } from "../../components";

const settingsOptions = [
  {
    label: "Edit Profile",
    description: "Edit and update your profile",
    icon: <FontAwesome5 name="edit" size={40} color="white" />,
    onPress: (navigation) => navigation.navigate(Routes.main.editProfileScreen),
  },
  {
    label: "Change Language",
    description:
      "Customize your app language preference and connect with a global community",
    icon: <FontAwesome5 name="language" size={40} color="white" />,
    onPress: (navigation) => navigation.navigate(Routes.main.languages),
  },
  {
    label: "Clear Chat",
    description:
      "Manage your chat history and customize chat-related preferences",
    icon: <Ionicons name="chatbox-ellipses-outline" size={40} color="white" />,
    onPress: (navigation) => navigation.navigate(Routes.onBoarding.ResetScreen),
  },
  {
    label: "Reset Password",
    description: "Reset your password here..",
    icon: <MaterialCommunityIcons name="lock-reset" size={40} color="white" />,
    onPress: (navigation) => navigation.navigate(Routes.onBoarding.ResetScreen),
  },
];

function Settings({ navigation }) {
  const user = User();
  const translation = useTranslation();
  const dispatch = useDispatch();

  return (
    <View>
      <View style={styles.profileScreenChild}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => option.onPress(navigation || dispatch)}
            style={{
              marginTop: 20,
              width: "90%",
              height: 120,
              backgroundColor: "green",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image
              source={GreenGradient}
              style={{ width: "100%", height: "100%" }}
            />
            <View
              style={{
                position: "absolute",
                paddingHorizontal: 20,
                width: "100%",
                height: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ width: "70%" }}>
                <AppText bold style={{ color: "white", fontSize: 20 }}>
                  {option.label}
                </AppText>
                <AppText
                  style={{ color: "white", fontSize: 14, marginTop: 10 }}
                >
                  {option.description}
                </AppText>
              </View>
              {option.icon}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 100, // Adjust this value to control the bottom padding
  },
  container: {
    paddingTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  profile: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  top: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileScreenChild: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dosageCardLayout1: {
    borderRadius: Border.br_3xs,
  },
});

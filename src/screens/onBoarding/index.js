import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../utils";
import WelcomScreen from "./welcomScreen";
import LoginScreen from "./loginScreen";
import RegisterScreen from "./registerScreen";
import ForgetPassword from "./forgetPassword";
import ResetPassword from "./resetPassword";
import QndaScreen from "./qndaScreen";
import SelectMode from "./selectMode";

const OnBoardingStack = createNativeStackNavigator();

export default function OnBoardingNavigator() {
  return (
    <OnBoardingStack.Navigator
      initialRouteName={Routes.onBoarding.welcomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <OnBoardingStack.Screen
        name={Routes.onBoarding.welcomeScreen}
        component={WelcomScreen}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name={Routes.onBoarding.loginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name={Routes.onBoarding.registerScreen}
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name={Routes.onBoarding.ForgetScreen}
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name={Routes.onBoarding.ResetScreen}
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name={Routes.onBoarding.QandA}
        component={QndaScreen}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name={Routes.onBoarding.SelectMode}
        component={SelectMode}
        options={{ headerShown: false }}
      />
    </OnBoardingStack.Navigator>
  );
}

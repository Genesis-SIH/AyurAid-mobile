import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../utils";
import WelcomScreen from "./welcomScreen";
import LoginScreen from "./loginScreen";

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
        </OnBoardingStack.Navigator>
    )
}
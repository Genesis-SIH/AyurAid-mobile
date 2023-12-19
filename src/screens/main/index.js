import React from "react";
import { View, Image, Platform, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors, Routes } from "../../utils";
import ChatScreen from "./homeScreen";
import { AppText } from "../../components";
import { User } from "../../redux/store/useStore";
import IngredientShop from "./ingShop";
import IonIcons from "react-native-vector-icons/Ionicons";
import ProfileScreen from "./profileScreen";
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../../redux/features/userSlice";
import Header from "../../components/header";
import { BottomSheet } from "../../components/bottomsheet";
import DosageStackNavigator from "./dosageStack";
import BlogStackNavigator from "./blogStack";
import Settings from "./settings";
import EditProfile from "./editProfile";
import Languges from "./languges";
import ResetPassword from "../onBoarding/resetPassword";
import Encyclopedia from "./encyclopedia";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
  const dispatch = useDispatch();
  const user = User();

  const bottomSheetRef = React.useRef(null);

  return (
    <MainStack.Navigator
      initialRouteName={Routes.main.chatScreen}
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen
        name={Routes.main.chatScreen}
        component={ChatScreen}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTitle: "",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
          headerLeft: () => (
            <View
              style={{
                marginLeft: 10,
                marginTop: Platform.OS == "ios" ? -10 : 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
                }}
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
              <View style={{ marginLeft: 10 }}>
                <AppText
                  style={{ color: "lightgrey", fontSize: 14, marginBottom: 0 }}
                >
                  👋🏻 Hey,
                </AppText>
                <AppText style={{ fontSize: 18, color: Colors.primary }}>
                  {user?.name}
                </AppText>
              </View>
            </View>
          ),
        })}
      />

      <MainStack.Screen
        name={Routes.main.shopScreen}
        component={IngredientShop}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Ingredient Shop",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <>
              <Header
                title="Ingredient Shop"
                rightElemnt={
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => bottomSheetRef?.current?.open()}
                  >
                    <IonIcons name="help-circle" size={28} color="white" />
                  </TouchableOpacity>
                }
              />
              <BottomSheet
                ref={bottomSheetRef}
                height={400}
                heading="What is Shop ?"
              >
                <View style={{ marginVertical: 10, padding: 10 }}>
                  <AppText style={{ color: "lightgrey" }}>
                    In our ingredient shop you can buy all ingredients for your
                    recipes recommended by our App.
                  </AppText>
                  <AppText style={{ color: "lightgrey", marginTop: 15 }}>
                    We have a wide range of ingredients from different brands
                    and stores, so you can choose the best for you.
                  </AppText>
                </View>
              </BottomSheet>
            </>
          ),
        })}
      />

      <MainStack.Screen
        name={Routes.main.profileScreen}
        component={ProfileScreen}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Profile",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <Header
              title="Profile"
              rightElemnt={
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    dispatch(setUserLogOutState());
                    navigation.replace(Routes.onBoarding.tag);
                  }}
                >
                  <IonIcons name="exit-outline" size={28} color="white" />
                </TouchableOpacity>
              }
            />
          ),
        })}
      />
      <MainStack.Screen
        name={Routes.main.settingScreen}
        component={Settings}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Settings",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <Header
              title="Settings"
              // rightElemnt={
              //   <TouchableOpacity
              //     style={{ marginRight: 10 }}
              //     onPress={() => {
              //       dispatch(setUserLogOutState());
              //       navigation.replace(Routes.onBoarding.tag);
              //     }}
              //   >
              //     <IonIcons name="exit-outline" size={28} color="white" />
              //   </TouchableOpacity>
              // }
            />
          ),
        })}
      />
      <MainStack.Screen
        name={Routes.main.editProfileScreen}
        component={EditProfile}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Edit Profile",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <Header
              title="Edit Profile"
              // rightElemnt={
              //   <TouchableOpacity
              //     style={{ marginRight: 10 }}
              //     onPress={() => {
              //       dispatch(setUserLogOutState());
              //       navigation.replace(Routes.onBoarding.tag);
              //     }}
              //   >
              //     <IonIcons name="exit-outline" size={28} color="white" />
              //   </TouchableOpacity>
              // }
            />
          ),
        })}
      />
      <MainStack.Screen
        name={Routes.main.languages}
        component={Languges}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Languages",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <Header
              title="Languages"
              // rightElemnt={
              //   <TouchableOpacity
              //     style={{ marginRight: 10 }}
              //     onPress={() => {
              //       dispatch(setUserLogOutState());
              //       navigation.replace(Routes.onBoarding.tag);
              //     }}
              //   >
              //     <IonIcons name="exit-outline" size={28} color="white" />
              //   </TouchableOpacity>
              // }
            />
          ),
        })}
      />
      <MainStack.Screen
        name={Routes.main.encyclopedia}
        component={Encyclopedia}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Encyclopedia",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <Header
              title="Encyclopedia"
              // rightElemnt={
              //   <TouchableOpacity
              //     style={{ marginRight: 10 }}
              //     onPress={() => {
              //       dispatch(setUserLogOutState());
              //       navigation.replace(Routes.onBoarding.tag);
              //     }}
              //   >
              //     <IonIcons name="exit-outline" size={28} color="white" />
              //   </TouchableOpacity>
              // }
            />
          ),
        })}
      />

      <MainStack.Screen
        name={Routes.main.dosageStack.tag}
        component={DosageStackNavigator}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />

      <MainStack.Screen
        name={Routes.onBoarding.ResetScreen}
        component={ResetPassword}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Reset Password",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <Header
              title="Reset Password"
              // rightElemnt={
              //   <TouchableOpacity
              //     style={{ marginRight: 10 }}
              //     onPress={() => {
              //       dispatch(setUserLogOutState());
              //       navigation.replace(Routes.onBoarding.tag);
              //     }}
              //   >
              //     <IonIcons name="exit-outline" size={28} color="white" />
              //   </TouchableOpacity>
              // }
            />
          ),
        })}
      />
      <MainStack.Screen
        name={Routes.main.blogStack.tag}
        component={BlogStackNavigator}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
    </MainStack.Navigator>
  );
}

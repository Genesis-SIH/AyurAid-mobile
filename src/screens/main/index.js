import React from "react";
import { View, Image, Platform, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors, Routes } from "../../utils";
import ChatScreen from "./homeScreen";
import { AppText } from "../../components";
import { User } from "../../redux/store/useStore";
import IngredientShop from "./ingShop";
import { LinearGradient } from "expo-linear-gradient";
import IonIcons from "react-native-vector-icons/Ionicons";
import ProfileScreen from "./profileScreen";
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../../redux/features/userSlice";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
    const dispatch =useDispatch();
  const user = User();

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
                  {user.name}
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
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              colors={["transparent", "#0008", "#0009", Colors.seconday]}
              locations={[0, 0.3, 0.2, 0.9]}
              style={{
                width: "100%",
                padding: 10,
                paddingTop: 60,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name="chevron-back" size={28} color="white" />
              </TouchableOpacity>
              <AppText style={{ fontSize: 18, textAlign: "center" }}>
                Ingredient Shop
              </AppText>
              <IonIcons name="help-circle" size={28} color="white" />
            </LinearGradient>
          ),
        })}
      />

      <MainStack.Screen
        name={Routes.main.profileScreen}
        component={ProfileScreen}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Ingredient Shop",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              colors={["transparent", "#0008", "#0009", Colors.seconday]}
              locations={[0, 0.1, 0.2, 0.9]}
              style={{
                width: "100%",
                padding: 10,
                paddingTop: 60,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name="chevron-back" size={28} color="white" />
              </TouchableOpacity>
              <AppText style={{ fontSize: 18, textAlign: "center" }}>
                Profile
              </AppText>
              <TouchableOpacity onPress={()=>{
                 dispatch(setUserLogOutState())
                 navigation.navigate(Routes.onBoarding.welcomeScreen)

              }}>
                <IonIcons name="exit" size={30} color="white" />
              </TouchableOpacity>
            </LinearGradient>
          ),
        })}
      />
    </MainStack.Navigator>
  );
}

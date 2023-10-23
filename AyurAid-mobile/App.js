import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import { useState } from 'react';
import { useFonts } from 'expo-font';
import WelcomScreen from './Screens/WelcomScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  
  
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <NavigationContainer>
    {hideSplashScreen ? (
      <Stack.Navigator
      initialRouteName="WelcomScreen"
      screenOptions={{ headerShown: false }}
      >
      <Stack.Screen
        name="WelcomScreen"
        component={WelcomScreen}
        options={{ headerShown: false }}
      />
        {/* <Stack.Screen
          name="SuggestChat"
          component={SuggestChat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vector3"
          component={Vector3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Keyboard1"
          component={Keyboard1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MIc"
          component={MIc}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DosageDetailScreen"
          component={DosageDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShoppingScreen"
          component={ShoppingScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    ) : null}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

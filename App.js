
import { Image, LogBox, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from 'react-query';
import { useFonts } from 'expo-font';
import SplashImage from './assets/splash.png'
import OnBoardingNavigator from './src/screens/onBoarding';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import { Routes } from './src/utils';
import MainStackNavigator from './src/screens/main';
import { LoggedIn } from './src/redux/store/useStore';
import { AppText } from './src/components';
import axios from 'axios';
import { useEffect } from 'react';
import { ApiCollection, config } from './src/config';


const AppStack = createNativeStackNavigator();

const AppNavigator = () => {


  LogBox.ignoreAllLogs(true)

  const loggedIn = LoggedIn()


  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'black',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <AppStack.Navigator
        initialRouteName={loggedIn ? Routes.main.tag : Routes.onBoarding.tag}
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen
          name={Routes.onBoarding.tag}
          component={OnBoardingNavigator}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name={Routes.main.tag}
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />

      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const queryClient = new QueryClient();

export default function App() {



  

  axios.get(ApiCollection.ai.wakeup)
    .then(res => {
      console.log(res.data);
      // setAiServerStarted(true)
    })
    .catch(err => {
      console.log(res.data);
      // setAiServerStarted(true)
    })

  axios.get(config.apiHeadProd)
    .then(res => {
      console.log(res.data);
      // setAiServerStarted(true)
    })
    .catch(err => {
      console.log(res.data);
      // setAiServerStarted(true)
    })

  const [fontsLoaded, error] = useFonts({
    "ProductSans-Regular": require("./src/utils/fonts/productSans/productSans.ttf"),
    "ProductSans-Bold": require("./src/utils/fonts/productSans/productSansBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return (
      <View style={{ width: '100%', height: '100%', flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={SplashImage} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
      </View>
    )
  }

  // if (!aiServerStarted) {
  //   return (
  //     <View style={{ width: '100%', height: '100%', flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
  //       <Image source={SplashImage} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
  //     </View>
  //   )
  // }

  let persistor = persistStore(store);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <AppNavigator />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

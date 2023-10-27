
import {  Image, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import SplashImage from './assets/splash.png'
import OnBoardingNavigator from './src/screens/onBoarding';

const AppNavigator = () => {

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
      <OnBoardingNavigator/>
    </NavigationContainer>
  );
}

export default function App() {
  

  const [fontsLoaded, error] = useFonts({
    "ProductSans-Regular": require("./src/utils/fonts/productSans/productSans.ttf"),
    "ProductSans-Bold": require("./src/utils/fonts/productSans/productSansBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return (
      <View style={{width:'100%',height:'100%',flex:1,backgroundColor:'black'}}>
        <Image source={SplashImage} />
      </View>
    )
  }

  return (
    <AppNavigator/>
  );
}

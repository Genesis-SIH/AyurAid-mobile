
import {  Image, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import SplashImage from './assets/splash.png'
import OnBoardingNavigator from './src/screens/onBoarding';

const AppNavigator = () => {


  return (
    <NavigationContainer>
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

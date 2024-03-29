import * as React from "react";
import { StyleSheet, TextInput, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import {Colors, Routes } from "../../utils";
import { AppText,RoundButton } from "../../components";
import Logo from '../../images/logo/logo.png'
import { useTranslation } from "../../hooks/translation";


const WelcomScreen = ({navigation}) => {

  const translation = useTranslation()

  const onGetStarted = () => {
    navigation.navigate(Routes.onBoarding.loginScreen)
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 188, 139, 0.2)"]}
      >
        <View style={{ width: '80%', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{width:80,height:80,marginBottom:10}}
            contentFit="cover"
            source={Logo}
          />

          <AppText style={{ color: Colors.primary, fontSize: 35, marginBottom: 15 }}>AyurAid</AppText>
          <AppText style={{fontSize: 15, textAlign: 'center' }}>
            {translation.t('Bridging Ayurveda and Modern Healthcare for Personalized Well-being')}
          </AppText>
        </View>

        <RoundButton  
          title='GET STARTED' 
          boldTitle={true}  
          style={{position:'absolute',bottom:70,width:'80%'}}
          onPress={onGetStarted}
          />

      </LinearGradient>
    </View>
  );
};

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
    flex: 1
  }
});

export default WelcomScreen;

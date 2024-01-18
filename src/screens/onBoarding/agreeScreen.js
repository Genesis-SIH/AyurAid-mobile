import * as React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Colors, Routes } from "../../utils";
import { AppText, RoundButton } from "../../components";
import Logo from '../../images/logo/logo.png'
import { useTranslation } from "../../hooks/translation";
import LottieView from "lottie-react-native";
import { User } from "../../redux/store/useStore";


const AgreeScreen = ({ navigation }) => {

  const translation = useTranslation()
  const user = User()

  const onAgree = () => {
    navigation.replace(Routes.main.tag)
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 188, 139, 0.2)"]}
      >
        <View style={{ width: '90%', padding: 10,marginBottom:70, justifyContent: 'center', alignItems: 'center' }}>
          <LottieView
            style={{ width: 150, height: 150 }}
            source={require("../../utils/lottie/botLoading.json")}
            autoPlay
            loop
          />
          <AppText style={{ color: Colors.primary, fontSize: 25, marginBottom: 15 }}>Hello {user.fullName} !</AppText>
          <AppText style={{ fontSize: 15,marginTop:15, textAlign: 'justify' }}>
            I am your AyurBuddy and I am here to help you find the right Ayurvedic medicine for you using Ayurvedic books and papers.
          </AppText>

          <AppText style={{ fontSize: 15,marginTop:20, textAlign: 'justify' }}>
            Currently we have limited number of books to learn from, but I will keep learning and improving myself. So I might not be able to answer all your questions right now, but I will try my best.
          </AppText>

          
        </View>

        <RoundButton
          title='I Understand'
          boldTitle={true}
          style={{ position: 'absolute', bottom: 70, width: '80%' }}
          onPress={onAgree}
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

export default AgreeScreen;

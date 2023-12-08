import * as React from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Colors, Routes } from "../../utils";
import {
  AppText,
  AppTextInput,
  FlatButton,
  RoundButton,
} from "../../components";
import Logo from "../../images/logo/logo.png";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/features/userSlice";
import axios from "axios";
import LoadingModal from "../../components/loadingmodal";
import { ApiCollection } from "../../config";

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const onRegister = () => {
    navigation.navigate(Routes.onBoarding.registerScreen)
  }
  const onForget = () => {
    navigation.navigate(Routes.onBoarding.ForgetScreen)
  }

  const onLoginPress = async() => {

    if(username == '' || password == ''){
      Alert.alert('Login Error', 'Please fill all the fields')
      return
    }

    setIsLoading(true)
    const data = {
      identity: username,
      password: password
    }

    await axios.post(ApiCollection.authController.login, data)
      .then((res) => {
        setIsLoading(false)
        console.log(res.data)
        // const user = {
        //   name: res.data.data.name,
        //   email: res.data.data.email,
        //   id: res.data.data.id,
        //   profilePic: res.data.data.profilePic
        // }
        // dispatch(setActiveUser({ userToken: res.data.data.token, loggedIn: true, user: user }))
        // navigation.replace(Routes.main.tag)
      })
      .catch((err) => {
        setIsLoading(false)
        Alert.alert('Login Error', err.response.data.message)
      })

  }


  return (
    <View style={styles.container}>
      <LoadingModal modalVisible={isLoading} />
      <LinearGradient
        style={styles.gradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 188, 139, 0.2)"]}
      >
        <View
          style={{
            width: "80%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50, marginBottom: 10 }}
            contentFit="cover"
            source={Logo}
          />

          <AppText
            bold
            style={{ color: Colors.primary, fontSize: 30, marginBottom: 30 }}
          >
            Welcome Back
          </AppText>
          <AppTextInput label="Username" placeholder="Ex- johndoe" onChangeText={(text) => setUsername(text)}/>
          <AppTextInput type='password' label="Password" placeholder="Your Password" onChangeText={(text) => setPassword(text)}/>
          <TouchableOpacity style={{ marginTop: 30 }} onPress={onForget}>
            <AppText style={{  fontSize: 15 }}>
             Forget password?
            </AppText>
          </TouchableOpacity>

          <FlatButton enableShadow={true} title="LOGIN" onPress={onLoginPress} />

          <TouchableOpacity style={{ marginTop: 30 }} onPress={onRegister}>
            <AppText style={{  fontSize: 15 }}>
              Don’t have an Account ? Create Now !
            </AppText>
          </TouchableOpacity>
        </View>
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
    flex: 1,
  },
});

export default LoginScreen;

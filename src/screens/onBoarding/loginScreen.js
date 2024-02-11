import * as React from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
import { useTranslation } from "../../hooks/translation";
import { FirstTimeLogin } from "../../redux/store/useStore";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const translation = useTranslation();
  const isFirstTimeLogin = FirstTimeLogin()

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onRegister = () => {
    navigation.navigate(Routes.onBoarding.registerScreen);
  };
  const onForget = () => {
    navigation.navigate(Routes.onBoarding.ForgetScreen);
  };

  const onLoginPress = async () => {
    // const user = {
    //   name: 'Aman Kumar',
    //   email: 'suyashvash@gmail.com',
    //   id: '123',
    //   profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'
    // }
    // dispatch(setActiveUser({ userToken: 'res.data.data.token', loggedIn: true, user: user }))
    // navigation.replace(Routes.main.tag)

    if (username == "" || password == "") {
      Alert.alert("Login Error", "Please fill all the fields");
      return;
    }

    setIsLoading(true);
    const data = {
      identity: username,
      password: password,
    };

    console.log(data);

    await axios
      .post(ApiCollection.authController.login, data)
      .then((res) => {
        setIsLoading(false);
        const user = {
          fullName: res.data.data.fullname,
          email: res.data.data.email,
          _id: res.data.data.id,
          token: res.data.data.token,
          profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU',
        };

        dispatch(
          setActiveUser({
            userToken: res.data.data.token,
            loggedIn: true,
            user: user,
          })
        );
        if(isFirstTimeLogin){
          navigation.navigate(Routes.onBoarding.agreeScreen)
        }
        else{
          navigation.replace(Routes.main.tag);
        }
        
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.data);
        Alert.alert("Login Error", err.response.data.message);
      });
  };

  const onDemoPress = () => {
    setUsername("suyashvashishtha@gmail.com");
    setPassword("Suyash@2003");
  };

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
            width: "90%",
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
            {translation.t("Welcome Back")}
          </AppText>
          <AppTextInput
            value={username}
            label="Email"
            placeholder="Ex- johndoe@gmail.com"
            onChangeText={(text) => setUsername(text)}
          />
          <AppTextInput
            value={password}
            type="password"
            label="Password"
            placeholder="Your Password"
            onChangeText={(text) => setPassword(text)}
          />

          {/* <TouchableOpacity style={{ marginTop: 30 }} onPress={onDemoPress}>
            <AppText style={{ fontSize: 20, color: "grey" }}>
              Tap to Demo Login
            </AppText>
          </TouchableOpacity> */}

          <TouchableOpacity style={{ marginTop: 30 }} onPress={onForget}>
            <AppText style={{ fontSize: 15 }}>
              {translation.t("Forget password")}?
            </AppText>
          </TouchableOpacity>

          <FlatButton
            enableShadow={true}
            title={translation.t("LOGIN")}
            onPress={onLoginPress}
            style={{
              width: "100%",
            }}
          />

          <TouchableOpacity style={{ marginTop: 30 }} onPress={onRegister}>
            <AppText style={{ fontSize: 15 }}>
              {translation.t("Don’t have an Account ? Create Now")} !
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

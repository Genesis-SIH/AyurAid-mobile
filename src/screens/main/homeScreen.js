import * as React from "react";
import {
  Dimensions,
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors, Routes } from "../../utils";
import { ApiCollection, ShadowStyles, ayurvedicIngredients } from "../../config";
import { AppText, AppTextInput } from "../../components";
import { ChatSeed } from "../../utils/db/seeds";
import * as Speech from "expo-speech";
import Voice from "@react-native-voice/voice";
import DeviceInfo from "react-native-device-info";
import Clipboard from "@react-native-clipboard/clipboard";
import { useAxios } from "../../hooks/axios/useAxios";
import { useTranslation } from "../../hooks/translation";
import { User } from "../../redux/store/useStore";
import LottieView from 'lottie-react-native';
import { config } from "../../config";

export default function ChatScreen({ navigation }) {
  const axios = useAxios("ai");
  const scrollViewRef = React.useRef();
  const translation = useTranslation();
  const user = User()


  const [isListening, setIsListening] = React.useState(false)
  const [responseLoading, setResponseLoading] = React.useState(false)
  const [results, setResults] = React.useState([]);
  const [text, setText] = React.useState('')
  const [mode, setMode] = React.useState('voice')
  const [chats, setChats] = React.useState([])
  const [isSpeaking, setIsSpeaking] = React.useState(false)


  const [chatLoading, setChatLoading] = React.useState(false)

  React.useEffect(() => {
    const getChats = async () => {
      setChatLoading(true)
      let chats = await axios.post(ApiCollection.ai.getChats, { "chatId": user.id })
        .then((response) => {
          setChatLoading(false)
          setChats([...response.data.chats])
        })
        .catch((error) => {
          setChatLoading(false)
          setChats([
            {
              id: new Date().getTime(),
              text: 'Hey there ! Start by asking me a question 👋🏻',
              type: 'bot',
              timestamp: new Date().getTime(),
              data: null,
            }
          ])
          console.log(error.response.data)
        })



    }
    getChats()
  }, [])



  const micScaleValue = React.useRef(new Animated.Value(1)).current;
  const micOpacityValue = React.useRef(new Animated.Value(0)).current;
  const sideBtnScaleValue = React.useRef(new Animated.Value(1)).current;

  const animationConfig = (value) => {
    return {
      toValue: value,
      duration: 500,
      useNativeDriver: true,
    };
  };

  const listeningOnEffect = () => {
    Animated.timing(micScaleValue, animationConfig(2)).start();
    Animated.timing(micOpacityValue, animationConfig(1)).start();
    Animated.timing(sideBtnScaleValue, animationConfig(0.8)).start();
  };

  const listeningOffEffect = () => {
    Animated.timing(micScaleValue, animationConfig(1)).start();
    Animated.timing(micOpacityValue, animationConfig(0)).start();
    Animated.timing(sideBtnScaleValue, animationConfig(1)).start();
  };

  React.useEffect(() => {
    function onSpeechResults(e) {
      setResults(e.value ?? []);

      if (e?.value?.length > 0) {
        let message = {
          text: e.value[0],
          type: 'user',
          timestamp: new Date().getTime(),
          id: new Date().getTime()
        }
        setText('')
        askChatBot(message)

      } else {
        Alert.alert('Voice Recognition Failed', 'Sorry, We could not recognize your voice. Please try again')
      }

    }
    function onSpeechError(e) {
      console.error(e);
    }
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    return function cleanup() {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  async function toggleListening() {
    if (await DeviceInfo.isEmulator()) {
      alert("Voice Recognition is not supported on Emulator");
      return;
    }

    if (Voice.isAvailable() == false) {
      alert("Voice Recognition is not supported on this device");
      return;
    }

    if (Voice.getSpeechRecognitionServices().length == 0) {
      alert("Voice Recognition is not supported on this device");
      return;
    }

    try {
      if (isListening) {
        setIsListening(false);
        await Voice.stop();
        listeningOffEffect();
      } else {
        setResults([]);
        listeningOnEffect();
        setIsListening(true);
        await Voice.start("en-US");
      }
    } catch (e) {
      console.error(e);
    }
  }

  const askChatBot = async (userMessage) => {
    setResponseLoading(true)
    console.log(userMessage)
    await axios.post(ApiCollection.ai.askChatbot, { prompt: userMessage.text, "chatId": user?.id })
      .then((response) => {
        console.log(response.data)
        let botMessage = {
          text: response.data.answer,
          type: 'bot',
          timestamp: new Date().getTime(),
          data: null
        }

        let temp = chats.splice(0)
        temp.push(userMessage)
        temp.push(botMessage)

        setChats(temp)

        setResponseLoading(false)
      })
      .catch((error) => {
        console.log(error.response.data)
        setResponseLoading(false)
        Alert.alert('Error', 'Something went wrong. Please try again')
      })
  }


  const onKeyboardPress = () => {
    setMode("text");
  };

  const onSmallMicPress = () => {
    setMode("voice");
  };

  const onSendTextMessage = () => {
    let message = {
      text: text,
      type: "user",
      timestamp: new Date().getTime(),
      id: new Date().getTime(),
    };
    setText("");
    askChatBot(message);
  };

  const startSpeech = (data) => {
    setIsSpeaking(true);
    Speech.speak(data);
  };

  const stopSpeech = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  const copyToClipboard = (data) => {
    Clipboard.setString(data);
  };

  const openShop = (data) => {
    navigation.navigate(Routes.main.shopScreen, { data: data });
  };

  const getIngredients = (string) => {
    let temp = []
    let brokenString = string.split(' ')
    brokenString.forEach(word => {
      ayurvedicIngredients.forEach(ingredient => {
        if (word.toLowerCase() == ingredient.toLowerCase()) {
          temp.push(ingredient)
        }
      })
    })

    return temp
  }


  const getSource = (string) => {
    let sour = string.split('SOURCES:')[1]
    if (sour) {
      if (sour.includes('by')) {
        let b = sour.split('by')
        if (b[0]) {
          if(b[0].includes('"')){
            return b[0].split('"')[1]
          }else{
            return b[0].trim()
          }
       
        }
      } else {
        return sour.split('"')[1]
      }

    }
  }

  const getSourceLink = (string) => {
    config.books.forEach(book => {
      if (book.bookName.toLowerCase() == string.toLowerCase()) {
        Linking.openURL(book.url)
        return
      }else{
        console.log(string)
        console.warn(config.books[6].bookName);
      }
    })
  }

  return (
    <View style={styles.container}>

      {!chatLoading ?
        chats &&
          chats.length > 0 ?
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            contentContainerStyle={{ paddingVertical: 20, paddingBottom: 110, width: Dimensions.get('screen').width * 0.9 }}>
            {
              chats.map((chat, index) => (

                chat.type == 'bot' ?
                  <View key={chat.id}>
                    <View style={{ alignSelf: 'flex-start', maxWidth: '80%', backgroundColor: Colors.seconday, borderRadius: 10, padding: 14, marginVertical: 10 }}>
                      <AppText style={{ fontSize: Platform.OS == 'ios' ? 16 : 14, lineHeight: 24 }}>{chat.text}</AppText>

                      {
                        getSource(chat.text) !== undefined &&
                        <View style={{ padding: 10, marginVertical: 10, marginTop: 15, backgroundColor: Colors.darkGreen, borderRadius: 10 }}>
                          <AppText bold style={{ fontSize: 14, lineHeight: 24 }}>{('Trust Factor')}</AppText>

                          <View style={{ marginTop: 10, flexDirection: 'column', alignItems: 'flex-start' }}>
                            <AppText style={{ fontSize: 14, lineHeight: 24 }}>{translation.t('Source')}: {getSource(chat.text)}</AppText>
                            <TouchableOpacity onPress={() => getSourceLink(getSource(chat.text))} style={{ backgroundColor: Colors.primary, padding: 5, paddingHorizontal: 10, borderRadius: 5, marginVertical: 10 }}>
                              <AppText>View Book</AppText>
                            </TouchableOpacity>
                          </View>
                        </View>
                      }

                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => copyToClipboard(chat.text)} style={{ padding: 8, paddingHorizontal: 12, marginVertical: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.darkGreen, borderRadius: 10 }}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FontAwesome name="copy" size={16} color="white" />
                            <AppText style={{ marginLeft: 12, fontSize: 12, lineHeight: 24 }}>{translation.t('Copy')}</AppText>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => isSpeaking ? stopSpeech() : startSpeech(chat.text)} style={{ padding: 8, paddingHorizontal: 12, marginVertical: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.darkGreen, borderRadius: 10 }}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FontAwesome name={isSpeaking ? "stop" : "play"} size={14} color="white" />
                            <AppText style={{ marginLeft: 12, fontSize: 12, lineHeight: 24 }}>{translation.t(isSpeaking ? 'Stop' : 'Play')}</AppText>
                          </View>
                        </TouchableOpacity>
                      </View>

                    </View>
                    {getIngredients(chat.text).length>0 &&
                      <View key={chat.id + 99923} style={{ marginTop: 1, alignSelf: 'flex-start', maxWidth: '80%', backgroundColor: Colors.seconday, borderRadius: 10, padding: 14, marginVertical: 10 }}>
                        <AppText style={{ fontSize: Platform.OS == 'ios' ? 16 : 14, lineHeight: 24 }}>You can buy the ingredients here !</AppText>

                        <TouchableOpacity onPress={() => openShop(getIngredients(chat.text))} style={{ padding: 10, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.darkGreen, borderRadius: 10 }}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FontAwesome name="shopping-cart" size={20} color="white" />
                            <AppText style={{ marginLeft: 12, fontSize: 14, lineHeight: 24 }}>View Shop</AppText>
                          </View>

                          <FontAwesome name="caret-right" size={24} color="white" />
                        </TouchableOpacity>
                      </View>
                    }
                  </View>
                  :
                  <View key={chat.id + 223123132123} style={{ alignSelf: 'flex-end', maxWidth: '70%', backgroundColor: Colors.primary, borderRadius: 10, padding: 10, marginVertical: 10 }}>
                    <AppText style={{ fontSize: Platform.OS == 'ios' ? 16 : 14 }}>{chat.text}</AppText>
                  </View>
              ))}

            {
              responseLoading &&
              <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 20 }}>
                <LottieView style={{ width: 50, height: 50 }} source={require('../../utils/lottie/leafLoading.json')} autoPlay loop />
                <AppText style={{ color: 'grey', fontSize: 16, textAlign: 'center', width: '80%' }}>
                  Generating response ...
                </AppText>
              </View>
            }
          </ScrollView>
          :
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '90%', marginBottom: 70 }}>
            <AppText style={{ fontSize: 30 }}>👋🏻</AppText>
            <AppText
              bold
              style={{ color: Colors.primary, fontSize: 18, marginVertical: 10 }}
            >
              {translation.t('Welcome to the AyurAid')}
            </AppText>
            <AppText style={{ color: 'grey', fontSize: 13, textAlign: 'center', width: '80%' }}>
              {translation.t('Start Typing Or use our Voice Based commands to get started')}
            </AppText>
          </View>
        :
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '90%', marginBottom: 70 }}>
          <LottieView style={{ width: 150, height: 150 }} source={require('../../utils/lottie/botLoading.json')} autoPlay loop />
          <AppText style={{ color: 'grey', fontSize: 16, textAlign: 'center', width: '80%' }}>
            Fetching your chats ...
          </AppText>
        </View>

      }

      {mode == "voice" ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["transparent", "#0008", "#0009", Colors.seconday]}
          locations={[0, 0.3, 0.2, 0.9]}
          style={styles.bottomPanelVoice}
        >
          <TouchableOpacity
            style={{ transform: [{ scale: sideBtnScaleValue }] }}
            onPress={() => navigation.navigate(Routes.main.profileScreen)}
          >
            <FontAwesome5
              solid
              name={"user"}
              size={28}
              color={isListening ? Colors.seconday : Colors.primary}
            />
          </TouchableOpacity>

          <Animated.Image
            source={require("../../images/custom/listShadow.png")}
            style={{
              width: 85,
              height: 85,
              resizeMode: "contain",
              position: "absolute",
              left: "43%",
              bottom: Platform.OS == "ios" ? 35 : 10,
              transform: [{ scale: micScaleValue }],
              opacity: micOpacityValue,
            }}
          />
          <View>
            <TouchableOpacity
              onPress={toggleListening}
              style={[styles.micButtonBig, ShadowStyles.micShadow]}
            >
              <FontAwesome5
                solid
                name={"microphone"}
                size={28}
                color={"white"}
              />
            </TouchableOpacity>
            {isListening && (
              <AppText
                style={{
                  fontSize: 14,
                  width: "100%",
                  position: "absolute",
                  bottom: -20,
                }}
              >
                {translation.t("Listening")}..
              </AppText>
            )}
          </View>

          <TouchableOpacity
            style={{ transform: [{ scale: sideBtnScaleValue }] }}
            onPress={onKeyboardPress}
          >
            <FontAwesome5
              solid
              name={"keyboard"}
              size={28}
              color={isListening ? Colors.seconday : Colors.primary}
            />
          </TouchableOpacity>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["transparent", "#0008", "#0009", Colors.seconday]}
          locations={[0, 0.3, 0.2, 0.9]}
          style={styles.bottomPanelText}
        >
          <TouchableOpacity
            onPress={onSmallMicPress}
            style={[styles.micButtonSmall]}
          >
            <FontAwesome5 solid name={"microphone"} size={18} color={"white"} />
          </TouchableOpacity>

          <TextInput
            value={text}
            onChangeText={(text) => setText(text)}
            placeholderTextColor={"lightgrey"}
            placeholder="Enter message...."
            style={styles.input}
          />
          {!responseLoading ? (
            <TouchableOpacity
              disabled={text == ""}
              onPress={onSendTextMessage}
              style={{ marginRight: 10 }}
            >
              <FontAwesome
                solid
                name={"send"}
                size={20}
                color={text == "" ? "grey" : "white"}
              />
            </TouchableOpacity>
          ) : (
            <View>
              <ActivityIndicator size={"small"} color={Colors.primary} />
            </View>
          )}
        </LinearGradient>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomPanelVoice: {
    position: "absolute",
    bottom: 0,
    padding: 15,
    paddingTop: 20,
    paddingBottom: Platform.OS == "ios" ? 50 : 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  micButtonBig: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPanelText: {
    position: "absolute",
    bottom: 0,
    padding: 15,
    paddingTop: 20,
    paddingBottom: Platform.OS == "ios" ? 40 : 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  micButtonSmall: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#006B4F",
    padding: 5,
    paddingVertical: Platform.OS == "ios" ? 10 : 5,
    width: "70%",
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "white",
  },
});

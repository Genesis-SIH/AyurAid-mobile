import * as React from "react";
import { Dimensions, Animated, Image, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../utils";
import { ShadowStyles } from "../../config";
import { AppText, AppTextInput } from "../../components";


export default function ChatScreen({ navigation }) {

    const micScaleValue = React.useRef(new Animated.Value(1)).current;
    const micOpacityValue = React.useRef(new Animated.Value(0)).current;
    const sideBtnScaleValue = React.useRef(new Animated.Value(1)).current;

    const animationConfig = (value) => {
        return {
            toValue: value,
            duration: 500,
            useNativeDriver: true,
        }
    }

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

    const chatSeed = [
        {
            id: 1123123,
            text: 'Hi, I am AyurAid. How can I help you?',
            type: 'bot',
            timestamp: new Date().getTime(),
            data: null,
        },
        {
            id: 3333,
            text: 'I am not feeling well I am not feeling well I am not feeling well I am not feeling wellI am not feeling well',
            type: 'user',
            timestamp: new Date().getTime(),
            data: null,
        },
        {
            id: 2323988873,
            text: 'Sure, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum. Sed tristique scelerisque enim. Quisque malesuada, tellus a finibus vestibulum, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum.',
            type: 'bot',
            timestamp: new Date().getTime(),
            data: null,
        },
        {
            id: 1778232,
            text: 'I am not feeling well I am not feeling well I am not feeling well I am not feeling wellI am not feeling well',
            type: 'user',
            timestamp: new Date().getTime(),
            data: null,
        },
        {
            id: 13352333,
            text: 'Sure, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum. Sed tristique scelerisque enim. Quisque malesuada, tellus a finibus vestibulum, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum.',
            type: 'bot',
            timestamp: new Date().getTime(),
            data: null,
        },
        {
            id: 4442677,
            text: 'I am not feeling well I am not feeling well I am not feeling well I am not feeling wellI am not feeling well',
            type: 'user',
            timestamp: new Date().getTime(),
            data: null,
        },
        {
            id: 3454563256786,
            text: 'Sure, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum. Sed tristique scelerisque enim. Quisque malesuada, tellus a finibus vestibulum, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum.',
            type: 'bot',
            timestamp: new Date().getTime(),
            data: null,
        },
        {
            id: 266785463586,
            text: 'I am not feeling well I am not feeling well I am not feeling well I am not feeling wellI am not feeling well',
            type: 'user',
            timestamp: new Date().getTime(),
            data: null,
        },
        {
            id: 37898789,
            text: 'Sure, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum. Sed tristique scelerisque enim. Quisque malesuada, tellus a finibus vestibulum, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum.',
            type: 'bot',
            timestamp: new Date().getTime(),
            data: null,
        },

    ]

    const [isListening, setIsListening] = React.useState(false)
    const [isGenerating, setIsGenerating] = React.useState(false)
    const [text, setText] = React.useState('')
    const [mode, setMode] = React.useState('voice')
    const [chats, setChats] = React.useState(chatSeed)


    const onKeyboardPress = () => {
        setMode('text')
    }

    const onSmallMicPress = () => {
        setMode('voice')
    }

    const onSendMessage = () => {
        let message = {
            text: text,
            type: 'user',
            timestamp: new Date().getTime()
        }

        setChats([...chats, message])
        setText('')
    }

    const onStartMicPress = () => {
        listeningOnEffect()
        setIsListening(!isListening)
        setTimeout(() => {
            setIsListening(false)
            listeningOffEffect()
        }, 2000);
    }

    return (
        <View style={styles.container}>

            {chats &&
                chats.length > 0 ?
                <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingBottom: 180, width: Dimensions.get('screen').width * 0.9 }}>
                    {chats.map((chat, index) => (
                        chat.type == 'bot' ?
                            <View key={chat.id} style={{ alignSelf: 'flex-start', maxWidth: '80%', backgroundColor: Colors.seconday, borderRadius: 10, padding: 14, marginVertical: 10 }}>
                                <AppText style={{ color: 'white', fontSize: Platform.OS == 'ios' ? 16 : 14, lineHeight: 24 }}>{chat.text}</AppText>
                            </View>
                            :
                            <View key={chat.id} style={{ alignSelf: 'flex-end', maxWidth: '70%', backgroundColor: Colors.primary, borderRadius: 10, padding: 10, marginVertical: 10 }}>
                                <AppText style={{ color: 'white', fontSize: Platform.OS == 'ios' ? 16 : 14 }}>{chat.text}</AppText>
                            </View>
                    ))}
                </ScrollView>
                :
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '90%', marginBottom: 70 }}>
                    <AppText style={{ fontSize: 30 }}>👋🏻</AppText>
                    <AppText
                        bold
                        style={{ color: Colors.primary, fontSize: 18, marginVertical: 10 }}
                    >
                        Welcome to AyurAid !
                    </AppText>
                    <AppText style={{ color: 'grey', fontSize: 13, textAlign: 'center', width: '80%' }}>
                        Start Typing Or use our Voice Based commands to get started
                    </AppText>
                </View>

            }


            {
                mode == 'voice' ?
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["transparent", "#0008", "#0009", Colors.seconday]}
                        locations={[0, 0.3, 0.2, 0.9]}
                        style={styles.bottomPanelVoice}
                    >

                        <TouchableOpacity style={{ transform: [{ scale: sideBtnScaleValue }] }} >
                            <FontAwesome5 solid name={'user'} size={28} color={isListening ? Colors.seconday : Colors.primary} />
                        </TouchableOpacity>

                        <Animated.Image source={require('../../images/custom/listShadow.png')} style={{ width: 85, height: 85, resizeMode: 'contain', position: 'absolute', left: '43%', bottom: Platform.OS == 'ios' ? 35 : 10, transform: [{ scale: micScaleValue }], opacity: micOpacityValue }} />
                        <View >
                            <TouchableOpacity disabled={isListening} onPress={onStartMicPress} style={[styles.micButtonBig, ShadowStyles.micShadow,]}>
                                <FontAwesome5 solid name={'microphone'} size={28} color={'white'} />
                            </TouchableOpacity>
                            {
                                isListening &&
                                <AppText style={{ color: 'white', fontSize: 14, width: '100%', position: 'absolute', bottom: -20 }}>Listening..</AppText>
                            }

                        </View>

                        <TouchableOpacity style={{ transform: [{ scale: sideBtnScaleValue }] }} onPress={onKeyboardPress} >
                            <FontAwesome5 solid name={'keyboard'} size={28} color={isListening ? Colors.seconday : Colors.primary} />
                        </TouchableOpacity>

                    </LinearGradient>

                    :
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["transparent", "#0008", "#0009", Colors.seconday]}
                        locations={[0, 0.3, 0.2, 0.9]}
                        style={styles.bottomPanelText}
                    >

                        <TouchableOpacity onPress={onSmallMicPress} style={[styles.micButtonSmall]}>
                            <FontAwesome5 solid name={'microphone'} size={18} color={'white'} />
                        </TouchableOpacity>

                        <TextInput onChangeText={(text) => setText(text)} placeholderTextColor={'lightgrey'} placeholder="Enter message...." style={styles.input} />

                        <TouchableOpacity disabled={text == ''} onPress={onSendMessage} style={{ marginRight: 10 }}>
                            <FontAwesome solid name={'send'} size={20} color={text == '' ? 'grey' : 'white'} />
                        </TouchableOpacity>

                    </LinearGradient>

            }






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
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomPanelVoice: {
        position: 'absolute',
        bottom: 0,
        padding: 15,
        paddingTop: 20,
        paddingBottom: Platform.OS == 'ios' ? 50 : 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,

    },

    micButtonBig: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomPanelText: {
        position: 'absolute',
        bottom: 0,
        padding: 15,
        paddingTop: 25,
        paddingBottom: Platform.OS == 'ios' ? 40 : 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    micButtonSmall: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#006B4F',
        padding: 5,
        paddingVertical: Platform.OS == 'ios' ? 10 : 5,
        width: '70%',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'white',

    }
});

import * as React from "react";
import { Dimensions, Image, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../utils";
import { ShadowStyles } from "../../config";
import { AppText, AppTextInput } from "../../components";


export default function ChatScreen({ navigation }) {

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
        setIsListening(!isListening)
        setTimeout(() => {
            setIsListening(false)
        }, 1000);
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

                        locations={[0, 1]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 4.8 }}
                        colors={["black", Colors.primary]}
                        style={styles.bottomPanelVoice}
                    >

                        <TouchableOpacity>
                            <FontAwesome5 solid name={'user'} size={28} color={isListening ? Colors.seconday : Colors.primary} />
                        </TouchableOpacity>
                        {
                            isListening &&
                            // <View style={[{ width: 150, height: 150, backgroundColor: '#0000', borderRadius: 100, alignItems: 'center', position: 'absolute', left: '33%', bottom: -10 }, ShadowStyles.micShadow]} />
                            <Image source={require('../../images/custom/listShadow.png')} style={{ width: 170, height: 170, resizeMode: 'contain', position: 'absolute', left: '30%', bottom: Platform.OS == 'ios' ? -10 : -20 }} />
                        }

                        <View >
                            <TouchableOpacity onPress={onStartMicPress} style={[styles.micButtonBig, ShadowStyles.micShadow, { marginTop: 20 }]}>
                                <FontAwesome5 solid name={'microphone'} size={28} color={'white'} />
                            </TouchableOpacity>
                            {
                                isListening ?
                                    <AppText style={{ color: 'white', fontSize: 14, marginTop: 10 }}>Listening...</AppText>
                                    :
                                    <AppText style={{ color: 'white', fontSize: 14, marginTop: 10 }}></AppText>
                            }

                        </View>

                        <TouchableOpacity onPress={onKeyboardPress}>
                            <FontAwesome5 solid name={'keyboard'} size={28} color={isListening ? Colors.seconday : Colors.primary} />
                        </TouchableOpacity>

                    </LinearGradient>

                    :
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 4.8 }}
                        colors={["#00000", "black", Colors.primary]}
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
        paddingTop: 0,
        paddingBottom: Platform.OS == 'ios' ? 20 : 0,
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
        bottom: Platform.OS == 'ios' ? 10 : 5,
        padding: 15,
        paddingTop: 0,
        paddingBottom: Platform.OS == 'ios' ? 20 : 10,
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

import * as React from "react";
import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../utils";
import { ShadowStyles } from "../../config";
import { AppText, AppTextInput } from "../../components";


export default function ChatScreen({ navigation }) {

    const [isListening, setIsListening] = React.useState(false)
    const [text, setText] = React.useState('')
    const [mode, setMode] = React.useState('voice')
    const [chats, setChats] = React.useState([])


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

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.gradient}
                locations={[0, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 4.8 }}
                colors={["black", Colors.primary]}
            >


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

                {
                    mode == 'voice' ?
                        <View style={styles.bottomPanelVoice}>
                            <TouchableOpacity>
                                <FontAwesome5 solid name={'user'} size={28} color={Colors.primary} />
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.micButtonBig, ShadowStyles.micShadow]}>
                                <FontAwesome5 solid name={'microphone'} size={28} color={'white'} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onKeyboardPress}>
                                <FontAwesome5 solid name={'keyboard'} size={28} color={Colors.primary} />
                            </TouchableOpacity>

                        </View>

                        :
                        <View style={styles.bottomPanelText}>
                            <TouchableOpacity onPress={onSmallMicPress} style={[styles.micButtonSmall]}>
                                <FontAwesome5 solid name={'microphone'} size={18} color={'white'} />
                            </TouchableOpacity>

                            <TextInput onChangeText={(text) => setText(text)} placeholderTextColor={'lightgrey'} placeholder="Enter message...." style={styles.input} />

                            <TouchableOpacity disabled={text==''} onPress={onSendMessage} style={{ marginRight: 10 }}>
                                <FontAwesome solid name={'send'} size={20} color={ text=='' ? 'grey' : 'white'} />
                            </TouchableOpacity>

                        </View>

                }




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
    },
    bottomPanelVoice: {
        position: 'absolute',
        bottom: Platform.OS == 'ios' ? 10 : 0,
        padding: 15,
        paddingBottom: Platform.OS == 'ios' ? 20 : 10,
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
        backgroundColor: Colors.primaryBg,
        bottom: Platform.OS == 'ios' ? 10 : 5,
        padding: 15,
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

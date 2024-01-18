


import Voice, {
    SpeechResultsEvent,
    SpeechErrorEvent,
  } from "@react-native-voice/voice";


  export default function MicButton(){


    return(
        <>
        <Animated.Image source={require('../../images/custom/listShadow.png')} style={{ width: 85, height: 85, resizeMode: 'contain', position: 'absolute', left: '43%', bottom: Platform.OS == 'ios' ? 35 : 10, transform: [{ scale: micScaleValue }], opacity: micOpacityValue }} />
                        <View >
                            <TouchableOpacity disabled={isListening} onPress={onStartMicPress} style={[styles.micButtonBig, ShadowStyles.micShadow,]}>
                                <FontAwesome5 solid name={'microphone'} size={28} color={'white'} />
                            </TouchableOpacity>
                            {
                                isListening &&
                                <AppText style={{ fontSize: 14, width: '100%', position: 'absolute', bottom: -20 }}>Listening..</AppText>
                            }

                        </View>
        </>
    )
  }
import { StyleSheet } from "react-native";
import { Colors } from "../utils";


 const ShadowStylesIos = StyleSheet.create({
    micShadow:{
        shadowOffset: { width: 0, height: 0 },
        shadowColor: Colors.primary,
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 30,
    }
})

const ShadowStylesAndroid = StyleSheet.create({
    micShadow:{
        // elevation: 10,
        // width: 90,
        // borderRadius: 50,
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 90,
        // shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: Colors.primary,
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    }
})


export const ShadowStyles = Platform.OS === 'ios' ? ShadowStylesIos : ShadowStylesAndroid
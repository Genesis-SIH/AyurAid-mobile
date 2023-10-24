import React from "react";
import { TextInput, View ,StyleSheet} from "react-native";
import AppText from "./text";
import { Colors } from "../utils";


export default function AppTextInput(props) {

    return (
        <View style={{ width: '100%', marginVertical: 10,marginBottom:20 }}>
            <AppText style={{ color: Colors.primary, marginBottom: 5 }}>{props.label}</AppText>
            <TextInput placeholderTextColor={'grey'} {...props} style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{ 
        backgroundColor: Colors.seconday,   
        padding: 10,
        width:'100%',
        borderRadius: 5,
        fontSize: 16,
        color: 'white', 
        paddingVertical: 10,

    }
})
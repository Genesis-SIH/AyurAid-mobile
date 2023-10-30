import React from "react";
import { View ,StyleSheet} from "react-native";
import { AppText } from "../../components";




export default function DosageDetailScreen() {

    return (
        <View style={styles.container}>
            <AppText>DosageDetailScreen</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    }
})
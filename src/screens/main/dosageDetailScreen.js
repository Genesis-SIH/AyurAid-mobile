import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { AppText } from "../../components";
import { Colors } from "../../utils";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



export default function DosageDetailScreen() {

    return (
        <ScrollView contentContainerStyle={{paddingBottom:50}}>
            <View style={{ width: Dimensions.get('screen').width, padding: 20 }}>
                <AppText bold style={{ fontSize: 16 }}>Duration</AppText>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <View style={{ width: '70%' }}>
                        <View style={{ width: '100%', padding: 3, borderRadius: 10, backgroundColor: 'white' }} />
                        <View style={{ width: '70%', padding: 3, borderRadius: 10, backgroundColor: Colors.primary, position: 'absolute' }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <AppText style={{ fontSize: 22, marginRight: 5 }}>03/05</AppText>
                        <AppText>Days</AppText>
                    </View>

                </View>
            </View>


            <View style={{ width: Dimensions.get('screen').width, padding: 20 }}>

                <AppText bold style={{ fontSize: 16, marginBottom: 15 }}>Medication</AppText>
                <AppText style={{ fontSize: Platform.OS == 'ios' ? 16 : 14, lineHeight: 24, color: 'lightgrey' }}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum. Sed tristique scelerisque enim. Quisque malesuada, tellus a finibus vestibulum, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis leo, tincidunt sed sapien a, venenatis euismod ipsum. Sed tristique scelerisque enim. Quisque malesuada, tellus a finibus vestibulum,
                </AppText>
            </View>

            <View style={{ width: Dimensions.get('screen').width, padding: 20 }}>
                <AppText bold style={{ fontSize: 16, marginBottom: 15 }}>Dosage Tracker</AppText>
                {[1, 2, 3, 4, 5, 6, 7].map((data) => (
                    <View style={{ width: '100%', marginBottom: 10, borderRadius: 8, padding: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.seconday }}>
                        <MaterialCommunityIcons name="checkbox-marked-circle" size={30} color={Colors.primary} />
                        <View style={{ marginLeft: 20 }}>
                            <AppText bold style={{ fontSize: 16 }}>Day 1</AppText>
                            <AppText style={{ fontSize: 14, color: Colors.primary, marginTop: 5 }}>2 times per day</AppText>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}


import React from "react";
import { View,Image, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors, Routes } from "../../utils";
import ChatScreen from "./homeScreen";
import { AppText } from "../../components";
import { User } from "../../redux/store/useStore";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {

    const user = User()

    return (
        <MainStack.Navigator
            initialRouteName={Routes.main.chatScreen}
            screenOptions={{ headerShown: false }}
        >
            <MainStack.Screen
                name={Routes.main.chatScreen}
                component={ChatScreen}
                options={({ route, navigation }) => ({ 
                    headerShown: true ,
                    headerTitle: '',
                    headerTintColor:'white',
                    headerStyle:{
                        backgroundColor:'black'
                    },
                    headerLeft: () => (
                        <View style={{marginLeft:10,marginTop: Platform.OS=='ios' ? -10 : 20,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingBottom:10}}>
                            <Image source={{uri:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'}} style={{width:40,height:40,borderRadius:50}} />
                            <View style={{marginLeft:10}}>
                                <AppText style={{color:'lightgrey',fontSize:14,marginBottom: 0}}>👋🏻 Hey,</AppText>
                                <AppText style={{color:'white',fontSize:18,color:Colors.primary}}>{user.name}</AppText>
                            </View>
                        </View>
                    )
                    
                })}

            />

        </MainStack.Navigator>
    )
}
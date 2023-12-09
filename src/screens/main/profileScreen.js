import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { AppText } from "../../components";
import { Border, Colors, Routes } from "../../utils";
import DosageCard from "../../components/dosageCard";
import { DosageSeed } from "../../utils/db/seeds";
import { User } from "../../redux/store/useStore";
import GreenGradient from "../../images/gradients/green.jpeg";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function ProfileScreen({navigation}) {
  const [dosages, setDosages] = useState(DosageSeed);
  const user = User();



  const openDosageTracker =()=>{
    navigation.navigate(Routes.main.dosageStack.tag)
  }

  const openBlogs =()=>{
    navigation.navigate(Routes.main.blogStack.tag)
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View>
            <Image
              style={styles.profile}
              contentFit="cover"
              source={{
                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
              }}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <AppText style={{ fontSize: 25, color: Colors.primary }}>{user.name}</AppText>

            <TouchableOpacity style={{ marginTop: 10 }}>
              <AppText style={{ color: "lightgrey", fontSize: 14, marginBottom: 0 }}>Edit Profile</AppText>

            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.profileScreenChild}>

          <TouchableOpacity onPress={openDosageTracker} style={{ marginTop: 20,width: '90%', height: 120, backgroundColor: 'green', borderRadius: 10, overflow: 'hidden' }}>
            <Image source={GreenGradient} style={{ width: '100%', height: '100%' }} />
            <View style={{ position: 'absolute',paddingHorizontal:20,  width: '100%', height: '100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
              <View style={{width:'70%'}}>
                <AppText bold style={{ color: 'white', fontSize: 20 }}>Dosage Tracker</AppText>
                <AppText style={{ color: 'white', fontSize: 14,marginTop:10 }}>Manage and track you dosages and medications</AppText>
              </View>

              <FontAwesome5 name="capsules" size={40} color="white" />

            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={openBlogs} style={{ marginTop: 20,width: '90%', height: 120, backgroundColor: 'green', borderRadius: 10, overflow: 'hidden' }}>
            <Image source={GreenGradient} style={{ width: '100%', height: '100%' }} />
            <View style={{ position: 'absolute',paddingHorizontal:20,  width: '100%', height: '100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
              <View style={{width:'70%'}}>
                <AppText bold style={{ color: 'white', fontSize: 20 }}>Ayurveda Blogs</AppText>
                <AppText style={{ color: 'white', fontSize: 14,marginTop:10 }}>Explore the world of research and community of Ayurveda enthusiast</AppText>
              </View>

              <FontAwesome5 name="book-open" size={40} color="white" />

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 20,width: '90%', height: 120, backgroundColor: 'green', borderRadius: 10, overflow: 'hidden' }}>
            <Image source={GreenGradient} style={{ width: '100%', height: '100%' }} />
            <View style={{ position: 'absolute',paddingHorizontal:20,  width: '100%', height: '100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
              <View style={{width:'70%'}}>
                <AppText bold style={{ color: 'white', fontSize: 20 }}>Settings</AppText>
                <AppText style={{ color: 'white', fontSize: 14,marginTop:10 }}>Set your preferences and settings for the app</AppText>
              </View>

              <FontAwesome name="gear" size={40} color="white" />

            </View>
          </TouchableOpacity>

          

        </View>

      </View>
    </ScrollView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  scrollViewContent: {

    paddingBottom: 100, // Adjust this value to control the bottom padding
  },
  container: {
    paddingTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  profile: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  top: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  },
  profileScreenChild: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dosageCardLayout1: {
    borderRadius: Border.br_3xs,
  },
});

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { AppText } from "../../components";
import { Border, Colors } from "../../utils";
import DosageCard from "../../components/dosageCard";
import { DosageSeed } from "../../utils/db/seeds";
import { User } from "../../redux/store/useStore";

function ProfileScreen() {
    const user = User();
  return (
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
          <View>
            <AppText style={{ fontSize: 25, color: Colors.primary }}>
              {user.name}
            </AppText>
          </View>
          <View>
            <AppText
              style={{ color: "lightgrey", fontSize: 14, marginBottom: 0 }}
            >
              Edit Profile
            </AppText>
          </View>
        </View>

        <View style={[styles.profileScreenChild, styles.dosageCardLayout1]}>
          <AppText style={{ color: "lightgrey", fontSize: 19, margin: 20 }}>
            My Medication
          </AppText>

          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {DosageSeed.map((data) => (
              <View style={{ marginBottom: 25 }}>
                <DosageCard
                  key={data.id}
                  title={data.title}
                  consumeDays={data.consumedDays}
                  totalDays={data.totalDays}
                />
              </View>
            ))}
          </ScrollView>
        </View>

    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    margin: 5,
    paddingBottom: 25, // Adjust this value to control the bottom padding
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
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
    marginTop: -510,
  },
  profileScreenChild: {
    top: 170,
    backgroundColor: Colors.colorGray_300,
    height: "100%",
    width: "95%",
    position: "absolute",
  },
  dosageCardLayout1: {
    borderRadius: Border.br_3xs,
  },
});

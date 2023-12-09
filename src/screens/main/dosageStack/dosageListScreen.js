import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { AppText } from "../../../components";
import { Border, Colors } from "../../../utils";
import DosageCard from "../../../components/dosageCard";
import { DosageSeed } from "../../../utils/db/seeds";
import { User } from "../../../redux/store/useStore";

function DosageListScreen() {
  const [dosages, setDosages] = useState(DosageSeed);
  const user = User();
  return (
    <ScrollView contentContainerStyle={styles.container}>


      {dosages.map((data) => (
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
  );
}

export default DosageListScreen;

const styles = StyleSheet.create({

  container: {
    backgroundColor: "black",
    width:'95%',
    paddingTop:40,
    paddingBottom:60,
    alignItems: "center",
    justifyContent: "center",
  },


});

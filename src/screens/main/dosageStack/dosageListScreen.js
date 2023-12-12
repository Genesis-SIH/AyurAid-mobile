import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import DosageCard from "../../../components/dosageCard";

import { useGetMyDosages } from "../../../hooks/reactQuery/dosageTracker/useGetMyDosages";

function DosageListScreen() {
  const { isLoading, data: dosages } = useGetMyDosages();

  return !isLoading ? (
    <ScrollView contentContainerStyle={styles.container}>
      {[dosages].map((data) => (
        <View style={{ marginBottom: 25 }}>
          <DosageCard
            key={data._id}
            title={data.description}
            consumeDays={data.frequency}
            totalDays={data.duration}
            description={data.description}
            timing={data.timing}
          />
        </View>
      ))}
    </ScrollView>
  ) : (
    <ActivityIndicator color={Colors.primary} size={"large"} />
  );
}

export default DosageListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "95%",
    paddingTop: 40,
    paddingBottom: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

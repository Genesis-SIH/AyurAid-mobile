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
import { Colors } from "../../../utils";
import LottieView from "lottie-react-native";
import { AppText } from "../../../components";

function DosageListScreen() {
  const { isLoading, data: dosages } = useGetMyDosages();

  return !isLoading ? (
    <ScrollView contentContainerStyle={styles.container}>
      {dosages && dosages.length > 0 ? (
        dosages.map((data) => (
          <View style={{ marginBottom: 25 }} key={parseInt(data._id)}>
            <DosageCard
              title={data.title}
              consumeDays={data.frequency}
              totalDays={data.duration}
              description={data.description}
              timing={data.timing}
              data={data}
            />
          </View>
        ))
      ) : (
        <View
          style={{
            marginTop: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>No Dosages right now !</Text>
        </View>
      )}
    </ScrollView>
  ) : (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', flex: 1, height: 500 }}>
      <LottieView style={{ width: 50, height: 50 }} source={require('../../../utils/lottie/leafLoading.json')} autoPlay loop />
      <AppText style={{ color: 'grey', fontSize: 16, textAlign: 'center', width: '80%' }}>
        Fetching Dosages...
      </AppText>
    </View>
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

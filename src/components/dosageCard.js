import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Border, Colors, Routes } from "../utils";
import AppText from "./text";
import ProgressCircle from "react-native-progress-circle";
import { useNavigation } from "@react-navigation/core";

function DosageCard({ title, totalDays,  data }) {
  const navigation = useNavigation();

  const markedSlots = data.slots.filter((slot) => slot.isCompleted === true);
  const completedDays = Math.ceil(markedSlots?.length/data?.frequency);

  const onDosagePress = () => {
    navigation.navigate(Routes.main.dosageStack.dosageDetailScreen, {
      data,
    });
  };

  return (
    <TouchableOpacity onPress={onDosagePress} style={styles.card}>
      <View>
        <AppText style={styles.diseaseText}>{title}</AppText>
        <AppText
          style={{
            fontSize: 12,
            color: Colors.primary,
            margin: 10,
            marginTop: 15,
          }}
        >
          Duration
        </AppText>
        <View style={styles.time}>
          <AppText
            style={{
              fontSize: 25,
              marginLeft: 10,
            }}
          >
            {completedDays} / {totalDays}
          </AppText>
          <AppText
            style={{
              fontSize: 12,
              top: 12,
              marginLeft: 5,
            }}
          >
            days
          </AppText>
        </View>
      </View>
      <View style={styles.circleContainer}>
        <ProgressCircle
          percent={(completedDays / totalDays)*100}
          radius={25}
          borderWidth={5}
          color="#00BC8B"
          bgColor={Colors.seconday}
        >
          <AppText style={{ fontSize: 12, color: "white" }}>{(completedDays / totalDays)*100}%</AppText>
        </ProgressCircle>
      </View>
    </TouchableOpacity>
  );
}

export default DosageCard;

const styles = StyleSheet.create({
  circleContainer: {
    marginLeft: "25%",
    margin: "8%",
  },
  diseaseText: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.colorDarkslategray_100,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginLeft: "3.7%",
    width: Dimensions.get("screen").width * 0.93,
  },
  time: {
    flexDirection: "row",
  },
});

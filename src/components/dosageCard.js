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

function DosageCard({ title, consumeDays, totalDays, description, timing }) {
  const navigation = useNavigation();
  const [slots, setSlots] = useState([]);
  const [filter, setFilter] = useState();
  const [filterNumber, setFilterNumber] = useState("");
  const [tracker, setTracker] = useState();
  useEffect(() => {
    const generateSlots = () => {
      let temp = [];
      for (let index = 0; index < totalDays; index++) {
        timing.forEach((item) => {
          if (index === 4) {
            let slot = {
              //testing
              slotId: "123",
              title: `Day ${index + 1}`,
              subTitle: `Time - ${item}`,
              isCompleted: true,
            };
            temp.push(slot);
          } else {
            let slot = {
              slotId: "123",
              title: `Day ${index + 1}`,
              subTitle: `Time - ${item}`,
              isCompleted: true,
            };
            temp.push(slot);
          }
        });
      }

      setSlots(temp);
    };

    generateSlots();
  }, []);

  useEffect(() => {
    const filteredSlots = slots.filter((slot) => slot.isCompleted);
    setFilter(filteredSlots);
    setFilterNumber(filteredSlots.length / 2);
    setTracker((filteredSlots.length / 2 / totalDays) * 100);
    console.log((filteredSlots.length / 2 / totalDays) * 100);
  }, [slots]);
  const onDosagePress = () => {
    const data = {
      title: title,
      frequency: consumeDays,
      duration: totalDays,
      description: description,
      timing: timing,
    };
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
            0{filterNumber} / 0{totalDays}
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
          percent={tracker}
          radius={25}
          borderWidth={5}
          color="#00BC8B"
          bgColor={Colors.seconday}
        >
          <AppText style={{ fontSize: 12, color: "white" }}>{tracker}%</AppText>
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
    borderRadius: Border.br_3xs,
    height: 112,
    marginLeft: "3.7%",
    width: Dimensions.get("screen").width * 0.93,
  },
  time: {
    flexDirection: "row",
  },
});

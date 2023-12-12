import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { AppText } from "../../../components";
import { Colors } from "../../../utils";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, usePara } from "react";
export default function DosageDetailScreen({ route }) {
  const [slots, setSlots] = useState([]);
  const [filter, setFilter] = useState();
  const [filterNumber, setFilterNumber] = useState("");
  const [tracker, setTracker] = useState("");
  const { data } = route.params;

  useEffect(() => {
    const generateSlots = () => {
      let temp = [];
      for (let index = 0; index < data.duration; index++) {
        data.timing.forEach((item) => {
         
          if(index===4){
            let slot = { //testing
              slotId: "123",
              title: `Day ${index + 1}`,
              subTitle: `Time - ${item}`,
              isCompleted: false,
            };
            temp.push(slot);
          }else{
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
  }, [data]);

  useEffect(() => {
    const filteredSlots = slots.filter((slot) => slot.isCompleted);
    setFilter(filteredSlots);
    setFilterNumber(filteredSlots.length / 2);
    setTracker((filteredSlots.length / 2 / data.duration) * 100);
    console.log((filteredSlots.length / 2 / data.duration) * 100);
  }, [slots]);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
      <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
        <AppText bold style={{ fontSize: 16 }}>
          Duration
        </AppText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ width: "70%" }}>
            <View
              style={{
                width: "100%",
                padding: 3,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            />
            <View
              style={{
                width: `${tracker}%`,
                padding: 3,
                borderRadius: 10,
                backgroundColor: Colors.primary,
                position: "absolute",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <AppText style={{ fontSize: 22, marginRight: 5 }}>
              0{filterNumber}/0{data.duration}
            </AppText>
            <AppText>Days</AppText>
          </View>
        </View>
      </View>

      <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
        <AppText bold style={{ fontSize: 16, marginBottom: 15 }}>
          Medication
        </AppText>
        <AppText
          style={{
            fontSize: Platform.OS == "ios" ? 16 : 14,
            lineHeight: 24,
            color: "lightgrey",
          }}
        >
          {data.description}
        </AppText>
      </View>

      <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
        <AppText bold style={{ fontSize: 16, marginBottom: 15 }}>
          Dosage Tracker
        </AppText>
        {slots.map((data) => (
          <View
            style={{
              width: "100%",
              marginBottom: 10,
              borderRadius: 8,
              padding: 10,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: Colors.seconday,
            }}
          >
            <Ionicons
              name="checkmark-done-circle-sharp"
              size={30}
              color={data.isCompleted ? Colors.primary : Colors.colorBlack}
            />
            <View style={{ marginLeft: 20 }}>
              <AppText bold style={{ fontSize: 16 }}>
                {data.title}
              </AppText>
              <AppText
                style={{ fontSize: 14, color: Colors.primary, marginTop: 5 }}
              >
                {data.subTitle}
              </AppText>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

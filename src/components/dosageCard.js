import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Border, Colors } from "../utils";
import AppText from "./text";

import ProgressCircle from "react-native-progress-circle";
function DosageCard({title,consumeDays,totalDays}) {
  return (
    <View style={styles.card}>
      <View >
        <AppText style={styles.diseaseText}>{title}</AppText>
        <AppText
          style={{fontSize: 12,color: Colors.primary,margin: 10,marginTop: 15,          }}
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
          03 / 05
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
          percent={70}
          radius={25}
          borderWidth={5}
          color="#00BC8B"
          bgColor={Colors.seconday}
        >
          <AppText style={{ fontSize: 12,color:'white' }}>{"30%"}</AppText>
        </ProgressCircle>
      </View>
    </View>
  );
}

export default DosageCard;

const styles = StyleSheet.create({
    circleContainer:{
     marginLeft:'25%',
     margin:"8%",
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
    flexDirection:'row',
    backgroundColor: Colors.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    height: 112,
    marginLeft: '3.7%',
    width: "93%",
  },
  time: {
    flexDirection: "row",
  },
});

import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Utils/GlobalStyles";

const WelcomScreen = () => {
  return (
    <View style={styles.welcomScreen}>
      <LinearGradient
        style={styles.bottomGradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 188, 139, 0.2)"]}
      />
      <Text style={styles.ayuraid}>AyurAid</Text>
      <Text style={[styles.bridgingAyurvedaAnd, styles.getStartedFlexBox]}>
        Bridging Ayurveda and Modern Healthcare for Personalized Well-being
      </Text>
      <View style={styles.welcomScreenChild}>
        <Text style={[styles.getStarted, styles.getStartedFlexBox]}>
          GET STARTED
        </Text>
      </View>
      <Image
        style={styles.t21Icon}
        contentFit="cover"
        source={require("../assets/t2-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  bottomGradient: {
    top: 422,
    left: 0,
    width: 390,
    height: 422,
    backgroundColor: "transparent",
    position: "absolute",
  },
  ayuraid: {
    top: 330,
    left: 134,
    fontSize: 36,
    color: Color.colorMediumseagreen,
    textAlign: "left",
    width: 129,
    height: 38,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  bridgingAyurvedaAnd: {
    marginLeft: -143,
    top: 389,
    left: "50%",
    fontSize: FontSize.size_mini,
    width: 293,
    height: 33,
    fontFamily: FontFamily.robotoRegular,
  },
  welcomScreenChild: {
    top: "90%",
    alignItems:'center',
    marginLeft:40,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorMediumseagreen,
    shadowColor: "rgba(0, 188, 139, 0.42)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    width: 287,
    height: 51,
    position: "absolute",
  },
  getStarted: {
    top: "20%",
    marginLeft:40,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    width: 221,
    height: 23,
  },
  t21Icon: {
    top: 238,
    left: 158,
    width: 75,
    height: 82,
    position: "absolute",
  },
  welcomScreen: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default WelcomScreen;

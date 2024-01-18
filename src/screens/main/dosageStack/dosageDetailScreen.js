import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import { AppText, LoadingModal } from "../../../components";
import { Colors } from "../../../utils";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useGetDosageDetail } from "../../../hooks/reactQuery/dosageTracker/useGetDosageDetail";
import { useAxios } from "../../../hooks/axios/useAxios";
import { ApiCollection } from "../../../config";
import { useQueryClient } from "react-query";
import LottieView from "lottie-react-native";



export default function DosageDetailScreen({ route }) {

  const { isLoading: isDosageLoading, data: dosage } = useGetDosageDetail(route.params.data._id)
  const axios = useAxios()
  const queryClient = useQueryClient()

  const markedSlots = dosage?.slots.filter((slot) => slot.isCompleted === true);
  const completedDays = Math.ceil(markedSlots?.length / dosage?.frequency);
  const percentage = (completedDays / dosage?.duration) * 100;

  const [isLoading, setIsLoading] = useState(false)

  const markSlotCompleted = async (slotId) => {
    setIsLoading(true)
    await axios.patch(ApiCollection.dosage.markCompleted, { dosageID: dosage._id, slotID: slotId, isCompleted: true })
      .then((res) => {
        setIsLoading(false)
        queryClient.invalidateQueries(`${ApiCollection.dosage.getDosage}/${dosage._id}`)
        queryClient.invalidateQueries(ApiCollection.dosage.myDosages)


      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err.response.data)
        Alert.alert("Error", "Something went wrong")
      })
  }

  return (
    !isDosageLoading ?
      dosage &&
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <LoadingModal modalVisible={isLoading} />
        <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
          <AppText bold style={{ fontSize: 16, marginBottom: 15, color: Colors.primary }}>
            Title
          </AppText>
          <AppText
            style={{
              fontSize: Platform.OS == "ios" ? 16 : 14,
              lineHeight: 24,
              color: "lightgrey",
            }}
          >
            {dosage.title}
          </AppText>
        </View>

        <View style={{ width: Dimensions.get("screen").width, padding: 20, paddingTop: 0 }}>
          <AppText bold style={{ fontSize: 16, marginBottom: 15, color: Colors.primary }}>
            Medication
          </AppText>
          <AppText
            style={{
              fontSize: Platform.OS == "ios" ? 16 : 14,
              lineHeight: 24,
              color: "lightgrey",
            }}
          >
            {dosage.description}
          </AppText>
        </View>

        <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
          <AppText bold style={{ fontSize: 16, color: Colors.primary }}>
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
                  width: `${percentage}%`,
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
                {completedDays}/{dosage.duration}
              </AppText>
              <AppText>Days</AppText>
            </View>
          </View>
        </View>



        <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
          <AppText bold style={{ fontSize: 16, marginBottom: 15, color: Colors.primary }}>
            Dosage Tracker
          </AppText>
          {dosage.slots?.map((slot) => (
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
              <TouchableOpacity disabled={slot.isCompleted} onPress={() => markSlotCompleted(slot._id)}>
                <Ionicons
                  name="checkmark-done-circle-sharp"
                  size={30}
                  color={slot.isCompleted ? Colors.primary : Colors.colorBlack}
                />
              </TouchableOpacity>

              <View style={{ marginLeft: 20 }}>
                <AppText bold style={{ fontSize: 16 }}>
                  {slot.title}
                </AppText>
                <AppText
                  style={{ fontSize: 14, color: Colors.primary, marginTop: 5 }}
                >
                  {slot.subTitle}
                </AppText>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      :
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', flex: 1 }}>
        <LottieView style={{ width: 50, height: 50 }} source={require('../../../utils/lottie/leafLoading.json')} autoPlay loop />
        <AppText style={{ color: 'grey', fontSize: 16, textAlign: 'center', width: '80%' }}>
          Searching for Dosage...
        </AppText>
      </View>
  );
}

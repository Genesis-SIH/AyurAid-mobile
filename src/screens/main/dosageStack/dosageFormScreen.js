import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { AppText, AppTextInput, FlatButton, LoadingModal } from "../../../components";
import { useAxios } from "../../../hooks/axios/useAxios";
import { Routes } from "../../../utils";
import { ApiCollection } from "../../../config";
import { useQueryClient } from "react-query";

function DosageForm({ navigation}) {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState();
  const [timings, setTimings] = useState("");
  const [medication, setMedication] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSlots = (duration, timing) => {
    let temp = []
    for (let index = 0; index < duration; index++) {
      timing.forEach(item => {
        let slot = {
          slotId: '123',
          title: `Day ${index + 1}`,
          subTitle: `Time - ${item}`,
          isCompleted: false,
        }
        temp.push(slot)
      })
    }

    return temp
  }


  const handleSubmission = async () => {

    const timingsArray = timings.split(",").map((time) => time.trim());
    const freq = parseInt(frequency);

    if(freq !== timingsArray.length){
      Alert.alert('Error', 'Frequency should be less than or equal to number of timings')
      return
    }

    const body = {
      title: title,
      duration: duration,
      frequency: freq,
      description: medication,
      timing: timingsArray,
      slots: generateSlots(duration, timingsArray)
    }

    await axios.post(ApiCollection.dosage.addDosage, body)
      .then(res => {
        setLoading(false)
        queryClient.invalidateQueries(ApiCollection.dosage.myDosages)
        Alert.alert('Success', 'Dosage added successfully')
        navigation.goBack()
      })
      .catch(err => {
        setLoading(false)
        Alert.alert('Error', err.message)
        console.log(err.response.data)
      })

  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}
    >
      <LoadingModal modalVisible={loading} />
      <View style={styles.container}>
        <AppTextInput
          label="Title"
          placeholder="Ex- cough"
          style={styles.title}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <View style={styles.rowContainer}>
          <AppTextInput
            label="Duration (in days)"
            placeholder="5"
            style={[styles.input, { flex: 2 }]}
            value={duration}
            onChangeText={(text) => setDuration(text)}
          />
          <AppTextInput
            label="Frequency (dosage/day)"
            placeholder="2"
            style={[styles.input, { flex: 2 }]}
            value={frequency}
            onChangeText={(text) => setFrequency(text)}
          />
        </View>
        <AppTextInput
          label="Timings ( Comma separated )"
          placeholder="5am,9pm"
          style={styles.title}
          value={timings}
          onChangeText={(text) => setTimings(text)}
        />
        <AppTextInput
          label="Medication"
          placeholder="description..."
          style={styles.description}
          value={medication}
          onChangeText={(text) => setMedication(text)}
        />
      </View>

      <FlatButton
        enableShadow={true}
        title="Submit"
        onPress={()=>handleSubmission()}
      />
    </ScrollView>
  );
}

export default DosageForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    width: "100%",
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
    marginLeft: "18%",
  },
  input: {
    flex: 1,
    marginRight: 10,
    width: "63%",
  },
  description: {
    height: 170,
  },
});

import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AppText, AppTextInput, FlatButton } from "../../../components";
import { useAxios } from "../../../hooks/axios/useAxios";
import { Routes } from "../../../utils";
import { ApiCollection } from "../../../config";

function DosageForm() {
  const axios = useAxios();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState();
  const [timings, setTimings] = useState("");
  const [medication, setMedication] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmission = async ({ navigation }) => {
    // Handle the submission logic here using the state values

    const timingsArray = timings.split(",").map((time) => time.trim());
    console.log(timingsArray);
    const freq = parseInt(frequency);
    setLoading(true);
    console.log("Submitted values:", {
      title,
      duration,
      frequency,
      timings,
      medication,
    });

    try {
      const res = await axios.post(ApiCollection.dosage.addDosage, {
        duration: duration,
        frequency: freq,
        description: medication,
        timing: timingsArray,
      });
      setLoading(false);
      console.log(res.data);
      navigation.navigate(Routes.main.dosageStack.dosageListScreen);
    } catch (error) {
      console.log(error);
    }
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
        onPress={handleSubmission}
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

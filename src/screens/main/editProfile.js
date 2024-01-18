import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Alert,
} from "react-native";
import {
  AppText,
  AppTextInput,
  FlatButton,
  LoadingModal,
} from "../../components";
import { User } from "../../redux/store/useStore";
import { Border, Colors, Routes } from "../../utils";
import axios from "axios";
import { useAxios } from "../../hooks/axios/useAxios";
import { OutlinButton } from "../../components/button";
import * as ImagePicker from "expo-image-picker";
import Entypo from "react-native-vector-icons/Entypo";
import { setActiveUser } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { ApiCollection } from "../../config";
import { useUserData } from "../../hooks/reactQuery/user/useUserData";
import { useQueryClient } from "react-query";


function EditProfile({ navigation }) {

  const { data: user } = useUserData(
    (data) => {
      console.warn(data);
      setName(data.fullName);
      setCountry(data.country);
      setDob(data.dob);
      setLoading(false)
    },
    (err) => {
      console.warn(err);
      setLoading(false)
    }
  );
  const dispatch = useDispatch();
  const queryClient = useQueryClient()
  const user1 = User();

  useEffect(() => {
    // Request permission to access the camera roll
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access camera roll was denied");
      }
    })();
  }, []);
  const axios = useAxios();


  const handleSubmission = async () => {

    if(name ==""){
      Alert.alert("Edit Profile","Name cannot be empty")
      return
    }

    if(dob ==""){
      Alert.alert("Edit Profile","Date of birth cannot be empty")
      return
    }

    if(country ==""){
      Alert.alert("Edit Profile","Country cannot be empty")
      return
    }



    try {
      setLoading(true);

      const res = await axios.patch(
        ApiCollection.user.updateUser,
        {
          fullName: name,
          dob: dob,
          country: country,
          profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU',
        }
      );
      setName(res.data.data.updatedUser.fullName);
      setCountry(res.data.data.updatedUser.country);
      setDob(res.data.data.updatedUser.dob);
      queryClient.invalidateQueries(ApiCollection.user.getUser)
      // dispatch(
      //   setActiveUser({
      //     userToken: user1.token,
      //     loggedIn: true,
      //     user: res.data.data.updatedUser,
      //   })
      // );
      setLoading(false);
      navigation.navigate(Routes.main.profileScreen);
    } catch (error) {
      console.log(error);
    }
  };

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LoadingModal modalVisible={loading} />
      <View style={styles.top}>
        <Image
          style={styles.profile}
          contentFit="cover"
          source={{
            uri: user.profileImage,
          }}
        />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <AppText style={{ fontSize: 25, color: Colors.primary }}>
            {name}
          </AppText>
        </View>
      </View>

      <View style={styles.bellowContainer}>
        <View style={styles.container}>
          <AppTextInput
            label="Name"
            placeholder="Ex - John Doe"
            style={styles.title}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <View style={styles.rowContainer}>
            <AppTextInput
              label="Date of Birth"
              placeholder="DD-MM-YYYY"
              style={[styles.input, { flex: 2 }]}
              value={dob}
              onChangeText={(text) => setDob(text)}
            />
            <AppTextInput
              label="Country"
              placeholder="Ex- India"
              style={[styles.input, { flex: 2 }]}
              value={country}
              onChangeText={(text) => setCountry(text)}
            />
          </View>
          <View style={{ width: '100%', marginTop: 20 }}>
            <AppText
              style={{ color: Colors.primary, marginBottom: 2, fontSize: 15 }}
            >
              E-mail
            </AppText>
            <AppText style={{ fontSize: 20 }}>{user.email}</AppText>
          </View>
          {/* <AppTextInput
            label="Medication"
            placeholder="description..."
            style={styles.description}
            value={medication}
            onChangeText={(text) => setMedication(text)}
          /> */}
        </View>
        <FlatButton
          enableShadow={true}
          title="Update"
          onPress={() => handleSubmission()}
        />
      </View>
    </ScrollView>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100, // Adjust this value to control the bottom padding
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
    height: "30%",
    marginTop: 10,
  },

  input: {
    marginRight: 10,
    width: "63%",
  },
  description: {
    height: 170,
  },
  container: {
    paddingTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  top: {
    marginTop:50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileScreenChild: {
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
});

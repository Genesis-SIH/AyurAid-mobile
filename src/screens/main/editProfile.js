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
function EditProfile({ navigation }) {
  const dispatch = useDispatch();
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
  const convertImageToBase64 = async (imageUri) => {
    try {
      console.log("Fetching image from:", imageUri);

      const response = await fetch(imageUri);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();

      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result.split(",")[1];
          resolve(base64data);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error converting image to base64:", error);
      throw error;
    }
  };

  const selectImageFromGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log("Selected Image URI:", result.assets[0].uri);
        const base64Image = await convertImageToBase64(result.assets[0].uri);

        setSelectedImage({ uri: result.uri, base64: base64Image });
      }
    } catch (error) {
      console.error("ImagePicker Error:", error);
    }
  };

  const handleSubmission = async () => {
    try {
      setLoading(true);

      const res = await axios.patch(
        "https://backend2114.azurewebsites.net/api/user/update/",
        {
          fullName: name,
          dob: dob,
          country: country,
          profileImage: selectedImage.base64,
        }
      );
      setName(res.data.data.updatedUser.fullName);
      setCountry(res.data.data.updatedUser.country);
      setDob(res.data.data.updatedUser.dob);
      console.log(res.data.data.updatedUser);

      dispatch(
        setActiveUser({
          userToken: user1.token,
          loggedIn: true,
          user: res.data.data.updatedUser,
        })
      );
      setLoading(false);
      navigation.navigate(Routes.main.profileScreen);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      await axios
        .get("https://backend2114.azurewebsites.net/api/user/user")
        .then((res) => {
          setName(res.data.data.user.fullName);
          setDob(res.data.data.user.dob);
          setCountry(res.data.data.user.country);
          setSelectedImage({ base64: res.data.data.user.profileImage });
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    getUserData();
  }, []);
  const user = User();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LoadingModal modalVisible={loading} />
      <View style={styles.top}>
        <View>
          {selectedImage && (
            <Image
              style={styles.profile}
              contentFit="cover"
              source={{
                uri: `data:image/jpeg;base64,${selectedImage.base64}`,
              }}
            />
          )}
          <Entypo
            name="edit"
            onPress={selectImageFromGallery}
            style={{
              color: "#00BC8B",
              top: -30,
              left: 65,
            }}
            size={24}
            color="#00BC8B"
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: -20,
          }}
        >
          <AppText style={{ fontSize: 25, color: Colors.primary }}>
            {user.fullName}
          </AppText>
        </View>
      </View>

      <View style={styles.bellowContainer}>
        <View style={styles.container}>
          <AppTextInput
            label="Name"
            placeholder="name"
            style={styles.title}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <View style={styles.rowContainer}>
            <AppTextInput
              label="Date of Birth"
              placeholder="5"
              style={[styles.input, { flex: 2 }]}
              value={dob}
              onChangeText={(text) => setDob(text)}
            />
            <AppTextInput
              label="Country"
              placeholder="2"
              style={[styles.input, { flex: 2 }]}
              value={country}
              onChangeText={(text) => setCountry(text)}
            />
          </View>
          <View style={{ marginLeft: -180, marginTop: 20 }}>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileScreenChild: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

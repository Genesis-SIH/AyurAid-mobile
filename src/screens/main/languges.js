import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ApiCollection, config } from "../../config";
import { OutlinButton } from "../../components/button";
import { Language } from "../../redux/store/useStore";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/features/userSlice";
import { useQueryClient } from "react-query";
function Languges() {

    const dispatch = useDispatch()
    const selectedLang = Language()
    const queryClient = useQueryClient()

    const changeLanguage = (code) => {
        dispatch(setLanguage(code));
        queryClient.invalidateQueries(ApiCollection.blogs.allBlogs)
      };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {config.languages.map((item) => (
        <OutlinButton
          outline={true}
          selectLanguage={item.code==selectedLang}
          enableShadow={true}
          title={item.name}
          onPress={() => changeLanguage(item.code)}
          style={styles.outlineStyle}
        />
      ))}
    </ScrollView>
  );
}

export default Languges;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 100, // Adjust this value to control the bottom padding
    flex: 1,

    alignItems: "center",
  },
});

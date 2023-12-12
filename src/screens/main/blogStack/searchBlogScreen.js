import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AppText, AppTextInput } from "../../../components";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors, Routes } from "../../../utils";
import { useGetAllBlogs, useSearchBlog } from "../../../hooks/reactQuery/blogs";

export default function SearchBlogScreen({ navigation }) {
  const [searchText, setSearchText] = React.useState("");

  const { isLoading, data } = useGetAllBlogs();

  const url =
    "https://images.livemint.com/img/2022/05/08/1600x900/AJNH1I2U_1607526728718_1607526733019_1652004533234.jpg";

  const openBlog = (blog) => {
    navigation.navigate(Routes.main.blogStack.blogDetailScreen, { blog: blog });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <AppTextInput
        label="Search Topic"
        placeholder="Cough blogs..."
        onChangeText={(text) => setSearchText(text)}
        rightElement={
          <FontAwesome name="search" size={22} color={Colors.primary} />
        }
      />
      {!isLoading ? (
        data?.length > 0 ? (
          data.map((blog, index) => (
            <TouchableOpacity
              style={styles.blogResult}
              onPress={() => openBlog(blog)}
            >
              <Image
                source={{ uri: `data:image/png;base64,${blog.image}` }}
                style={{ width: 60, height: 60, borderRadius: 5 }}
              />
              <View
                style={{
                  marginLeft: 15,
                  width: "75%",
                  alignItems: "flex-start",
                }}
              >
                <AppText
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  bold
                  style={{ fontSize: 16, marginBottom: 8 }}
                >
                  {blog.title}
                </AppText>
                <AppText
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  style={{ color: "grey" }}
                >
                  {blog.description}
                </AppText>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={{ paddingTop: 20 }}>
            <AppText>No blogs found</AppText>
          </View>
        )
      ) : (
        <View style={{ paddingTop: 20 }}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  blogResult: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingBottom: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
});

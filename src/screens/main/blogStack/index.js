import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../../utils";
import Header from "../../../components/header";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import SearchBlogScreen from "./searchBlogScreen";
import BlogDetailScreen from "./blogDetailScreen";

const BlogStack = createNativeStackNavigator();

export default function BlogStackNavigator() {
  return (
    <BlogStack.Navigator
      initialRouteName={Routes.main.blogStack.searchScreen}
      screenOptions={{ headerShown: false }}
    >
      <BlogStack.Screen
        name={Routes.main.blogStack.searchScreen}
        component={SearchBlogScreen}
        options={({ route, navigation }) => ({
          headerShown: true,
          header: () => <Header title="" />,
        })}
      />

      <BlogStack.Screen
        name={Routes.main.blogStack.blogDetailScreen}
        component={BlogDetailScreen}
        options={({ route, navigation }) => ({
          headerShown: true,
          header: () => <Header title="" />,
        })}
      />
    </BlogStack.Navigator>
  );
}

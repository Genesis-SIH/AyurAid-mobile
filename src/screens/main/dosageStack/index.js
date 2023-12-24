import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../../utils";
import DosageListScreen from "./dosageListScreen";
import DosageDetailScreen from "./dosageDetailScreen";
import Header from "../../../components/header";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import DosageForm from "./dosageFormScreen";

const DosageStack = createNativeStackNavigator();

export default function DosageStackNavigator({ navigation }) {
  const dosageForm = () => {
    navigation.navigate(Routes.main.dosageStack.dosageForm);
  };
  return (
    <DosageStack.Navigator
      initialRouteName={Routes.main.dosageStack.dosageListScreen}
      screenOptions={{ headerShown: false }}
    >
      <DosageStack.Screen
        name={Routes.main.dosageStack.dosageListScreen}
        component={DosageListScreen}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Dosage Tracker",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <Header
              title="Dosage Tracker"
              rightElemnt={
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={dosageForm}
                >
                  <AntDesign name="plus" size={28} color="white" />
                </TouchableOpacity>
              }
            />
          ),
        })}
      />
      <DosageStack.Screen
        name={Routes.main.dosageStack.dosageForm}
        component={DosageForm}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Dosage Tracker",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => (
            <Header
              title="Dosage Form"
              rightElemnt={
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={dosageForm}
                ></TouchableOpacity>
              }
            />
          ),
        })}
      />
      <DosageStack.Screen
        name={Routes.main.dosageStack.dosageDetailScreen}
        component={DosageDetailScreen}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Dosage Detail",
          headerStyle: {
            backgroundColor: "black",
          },
          header: () => <Header title="Dosage" />,
        })}
      />
    </DosageStack.Navigator>
  );
}

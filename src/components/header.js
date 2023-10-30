import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import AppText from "./text";
import { Colors } from "../utils";
import { useNavigation } from "@react-navigation/core";

export default function Header(props) {

    const navigation = useNavigation()

    return (
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={["transparent", "#0008", "#0009", Colors.seconday]}
            locations={[0, 0.1, 0.2, 0.9]}
            style={{
                width: "100%",
                padding: 10,
                paddingTop: 50,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
            <AppText style={{ fontSize: 18, textAlign: "center" }}>
                {props.title}
            </AppText>
            {props.rightElemnt ? props.rightElemnt : <View></View>}

        </LinearGradient>
    )
}
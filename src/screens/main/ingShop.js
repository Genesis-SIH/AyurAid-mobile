import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppText } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../utils";



export default function IngredientShop({ route, navigation }) {

    const ingredients = route.params.data.ingredients

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                ingredients.map((item, index) => (
                    <View key={item.id} style={styles.card}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <AppText bold style={{ fontSize: 16, color: Colors.primary }}>{item.name}</AppText>
                            <AppText bold style={{ fontSize: 16, color: Colors.primary }}>{item.dosage}</AppText>
                        </View>

                        <ScrollView horizontal style={{ marginTop: 20 }}>

                            {item.links.map((linkRef, index) => (
                                <TouchableOpacity key={item.id + "#" + linkRef.id} onPress={()=>Linking.openURL(linkRef.url)} style={{ width: 140, height: 140, borderRadius: 10, overflow: 'hidden', marginRight: 15 }}>
                                    <Image source={{ uri: linkRef.image }} style={{ width: '100%', height: '100%' }} />
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}
                                        colors={["transparent", "#0005", "black"]}
                                        locations={[0, 0.3, 1]}
                                        style={{ position: 'absolute', width: '100%', height: '100%', padding: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}
                                    >
                                        {
                                            linkRef.icon ?
                                                <Image source={linkRef.icon} style={{ width: 18, height: 18,borderRadius:2 }} />
                                                :
                                                <FontAwesome name="shopping-cart" size={18} color="white" />
                                        }
                                       
                                        <AppText style={{ marginLeft: 12, fontSize: 14 }}>{linkRef.name}</AppText>
                                    </LinearGradient>
                                </TouchableOpacity>
                            ))}

                        </ScrollView>
                    </View>
                ))
            }



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "black",
        paddingVertical:30,
        paddingBottom:80
    },
    card: {
        width: "90%",
        padding: 20,
        backgroundColor: "#121212",
        borderRadius: 20,
        elevation: 10,
        marginBottom: 20
    }
})
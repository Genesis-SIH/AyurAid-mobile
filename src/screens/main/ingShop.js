import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppText } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../utils";
import { useEffect, useState } from "react";



export default function IngredientShop({ route, navigation }) {

   

    useEffect(() => {
        let temp = []
        let ing = new Set(route.params.data)

        ing.forEach((item, index) => {
            temp.push(generateShopData(item))
        })

        setIngredients(temp)

    }, [])
  
    const [ingredients, setIngredients] = useState([])

    const generateShopData = (name) => {
        return data ={
            id: new Date().getTime(),
            name: name,
            dosage: "",
            links: [
                {
                    id: 1,
                    name: "Amazon",
                    url: `https://www.amazon.in/s?k=${name}&crid=2QW8WY2Z7RZQK&sprefix=${name}%2Caps%2C298&ref=nb_sb_ss_ts-doa-p_1_7`,
                    image: "https://images-na.ssl-images-amazon.com/images/I/51QXU%2Bq%2B2RL._SL1000_.jpg",
                    icon: require("../../images/shop/icons/amazon.png")
                },
                {
                    id: 2,
                    name: "Flipkart",
                    url: `https://www.flipkart.com/search?q=${name}&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off`,
                    image: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/fruit-dry-fruit-nut/p/8/4/1-gokhru-gokshura-powder-100-pure-organic-herbal-powder-100gm-original-imafk5zgjzgjgq2h.jpeg?q=70",
                    icon: require("../../images/shop/icons/flipkart.png")
                },
                {
                    id: 3,
                    name: "1mg",
                    url: `https://www.1mg.com/search/all?name=${name}`,
                    image: "https://www.1mg.com/images/1mg-logo.png",
                    icon: require("../../images/shop/icons/1mg.png")
                },
                {
                    id: 4,
                    name: "BigBasket",
                    url: `https://www.bigbasket.com/ps/?q=${name}`,
                    image: "https://www.bigbasket.com/media/uploads/banner_images/2006_ayurveda_380.jpg",
                    icon: require("../../images/shop/icons/bigbasket.webp")
                },
                {
                    id: 5,
                    name: "Netmeds",
                    url: `https://www.netmeds.com/catalogsearch/result?q=${name}`,
                    image: "https://www.netmeds.com/images/logo_v1.svg",
                    icon: require("../../images/shop/icons/netmeds.jpeg")
                },
            ]
        }
    }

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
                                <TouchableOpacity key={item.id + "#" + linkRef.id} onPress={() => Linking.openURL(linkRef.url)} style={{ width: 100, height: 100, borderRadius: 10, overflow: 'hidden', marginRight: 15 }}>
                                    <Image source={linkRef.icon} style={{ width: '100%', height: '100%' }} />
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}
                                        colors={["transparent", "#0005", "black"]}
                                        locations={[0, 0.3, 1]}
                                        style={{ position: 'absolute', width: '100%', height: '100%', padding: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}
                                    >
                                        {
                                            linkRef.icon ?
                                                <Image source={linkRef.icon} style={{ width: 18, height: 18, borderRadius: 2 }} />
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
        paddingVertical: 30,
        paddingBottom: 80
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
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { AppText } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../images/logo/logo.png";
import { Colors } from "../../utils";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AboutUsScreen() {

    const developer = [
        {
            id: 0,
            name: 'Suyash Vashishtha',
            role: 'Team Lead',
            icon: 'logo-react',
            mail: 'suyashvashishtha@gmail.com'
        },
        {
            id: 4,
            name: 'Vishal Rawat',
            role: 'Mobile Developer',
            icon: 'logo-react',
            mail: ''
        },
        {
            id: 1,
            name: 'Anirudh Kabra',
            role: 'AI Developer',
            icon: 'logo-python',
            mail: ''
        },
        {
            id: 5,
            name: 'Shreshtha Suri',
            role: 'Python Developer',
            icon: 'logo-python',
            mail: ''
        },
        {
            id: 2,
            name: 'Shruti Sharma',
            role: 'Backend Developer',
            icon: 'logo-nodejs',
            mail: ''
        },
        {
            id: 3,
            name: 'Aditya Bhatnagar',
            role: 'Backend Developer',
            icon: 'logo-nodejs',
            mail: ''
        },



    ]

    return (

        <LinearGradient
            style={styles.gradient}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 188, 139, 0.2)"]}
        >
            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={{
                        width: "90%",
                        padding: 20,
                        marginTop: '10%',
                        marginBottom: 40,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        style={{ width: 80, height: 80, marginBottom: 10 }}
                        contentFit="cover"
                        source={Logo}
                    />

                    <AppText
                        bold
                        style={{ color: Colors.primary, fontSize: 30, marginBottom: 10 }}
                    >
                        Ayur-Aid
                    </AppText>
                    <AppText style={{ fontSize: 15, textAlign: 'center', color: 'lightgrey' }}>
                        {('Bridging Ayurveda and Modern Healthcare for Personalized Well-being')}
                    </AppText>



                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center',marginBottom:50 }}>


                    <AppText
                        bold
                        style={{ color: Colors.primary, fontSize: 20, marginBottom: 20 }}
                    >
                        Meet the Developers
                    </AppText>
                    <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        {
                            developer.map(dev => (
                                <View
                                    style={{
                                        width: 160,
                                        height: 160,
                                        marginBottom: 15,
                                        borderRadius: 8,
                                        padding: 10,
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingVertical: 15,
                                        borderColor: Colors.primary,
                                        borderWidth: 1,
                                    }}
                                >
                               
                                    <Ionicons
                                        name={dev.icon}
                                        size={35}
                                        color={Colors.primary}
                                    />


                                    <AppText bold style={{ fontSize: 14, width: '100%', textAlign: 'center', marginTop: 15 }}>
                                        {dev.name}
                                    </AppText>
                                    <AppText
                                        style={{ fontSize: 12, color: Colors.primary, marginTop: 5, width: '100%', textAlign: 'center' }}
                                    >
                                        {dev.role}
                                    </AppText>
                                </View>

                            ))
                        }
                    </View>


                </View>
            </ScrollView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    gradient: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
});
import React from "react";
import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { AppText, AppTextInput } from "../../../components";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors, Routes } from "../../../utils";


export default function SearchBlogScreen({ navigation }) {


    const [searchText, setSearchText] = React.useState('')

    const url = "https://images.livemint.com/img/2022/05/08/1600x900/AJNH1I2U_1607526728718_1607526733019_1652004533234.jpg"

    const openBlog = () => {
        navigation.navigate(Routes.main.blogStack.blogDetailScreen)
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>

            <AppTextInput
                label="Search Topic"
                placeholder="Cough blogs..."
                onChangeText={(text) => setSearchText(text)}
                rightElement={<FontAwesome name="search" size={22} color={Colors.primary} />}
            />
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <TouchableOpacity style={styles.blogResult} onPress={openBlog}>
                        <Image source={{ uri: url }} style={{ width: 60, height: 60, borderRadius: 5 }} />
                        <View style={{ marginLeft: 15, width: '75%', alignItems: 'flex-start' }}>
                            <AppText ellipsizeMode="tail" numberOfLines={1} bold style={{ fontSize: 16, marginBottom: 8 }}>Best home remedies for Cough</AppText>
                            <AppText ellipsizeMode="tail" numberOfLines={2} style={{ color: 'grey' }}>Coughing is a reflex action of the body to clear the airways of mucus and irritants such as dust, smoke, or pollutants. It is a common symptom of many respiratory diseases and conditions.</AppText>
                        </View>
                    </TouchableOpacity>

                ))
            }




        </ScrollView>
    );
}

const styles = StyleSheet.create({
    blogResult: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        paddingBottom: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        marginTop: 10

    }
})
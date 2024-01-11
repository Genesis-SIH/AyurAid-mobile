import React from "react";
import { View, ScrollView, Image, ActivityIndicator } from "react-native";
import { AppText } from "../../../components";
import { Colors } from "../../../utils";
import App from "../../../../App";
import { useGetBlogById } from "../../../hooks/reactQuery/blogs";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";



export default function BlogDetailScreen({ route, navigation }) {

    const blogId = route.params.blog._id

    const { isLoading, data: blog } = useGetBlogById(blogId)
    console.log(blog)



    return (
        !isLoading ?
            blog &&
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <Image source={{ uri: blog.image }} style={{ width: '100%', height: 200, borderRadius: 0 }} />
                <LinearGradient
                    style={{
                        position: "absolute",
                        height: 200,
                        padding: 10,
                        width: "100%",
                        alignItems: "flex-start",
                        justifyContent: "flex-end",
                        flex: 1,
                    }}
                    locations={[0, 1]}
                    colors={["rgba(0, 0, 0, 0)", "black"]}
                >
                    <AppText bold style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>{blog.title}</AppText>
                    <AppText style={{ color: 'grey', fontSize: 14 }}>Date Posted - {blog.publishDate}</AppText>
                </LinearGradient>

                <View style={{ padding: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        {
                            [blog.tag].map((item, index) => (
                                <View style={{ padding: 5, backgroundColor: Colors.seconday, borderRadius: 5, marginBottom: 10, marginRight: 5 }}>
                                    <AppText style={{ color: 'white', fontSize: 13 }}>#{item}</AppText>
                                </View>
                            ))
                        }
                    </View>

                    <View style={{ width: '100%', marginTop: 20 }}>
                        <AppText>{blog.description}</AppText>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                        <Image source={{ uri: blog.authorImage }} style={{ width: 30, height: 30, borderRadius: 50 }} />
                        <View style={{ marginLeft: 10 }}>
                            <AppText style={{ color: 'grey', fontSize: 14, marginTop: 5 }}>By,</AppText>
                            <AppText style={{ color: Colors.primary, fontSize: 16 }}>{blog.authorName}</AppText>
                        </View>

                    </View>
                </View>



            </ScrollView>
            :
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', flex: 1 }}>
                <LottieView style={{ width: 50, height: 50 }} source={require('../../../utils/lottie/leafLoading.json')} autoPlay loop />
                <AppText style={{ color: 'grey', fontSize: 16, textAlign: 'center', width: '80%' }}>
                    Loading..
                </AppText>
            </View>

    )
}
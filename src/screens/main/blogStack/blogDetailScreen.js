import React from "react";
import { View, ScrollView, Image } from "react-native";
import { AppText } from "../../../components";
import { Colors } from "../../../utils";
import App from "../../../../App";



export default function BlogDetailScreen(props) {

    const url = "https://images.livemint.com/img/2022/05/08/1600x900/AJNH1I2U_1607526728718_1607526733019_1652004533234.jpg"


    return (

        <ScrollView contentContainerStyle={{paddingBottom:50}}>
            <View style={{ width: '95%', padding: 10,paddingLeft:20 }}>
                <AppText bold style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>Best home remedies for Cough</AppText>
                <AppText style={{ color: 'grey', fontSize: 14, marginBottom: 10 }}>Date Posted - 12/03/2012</AppText>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                    {
                        [1, 2, 3, 4, 5].map((item, index) => (
                            <View style={{ padding: 5, backgroundColor: Colors.seconday, borderRadius: 5, marginBottom: 10, marginRight: 5 }}>
                                <AppText style={{ color: 'white', fontSize: 13 }}>#cough</AppText>
                            </View>
                        ))
                    }
                </View>

                <View style={{ width: '100%',marginTop:20 }}>
                    <AppText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra lacus et eros molestie vestibulum. Praesent maximus, tellus eget mattis hendrerit, ipsum ligula volutpat justo, sed congue erat quam at nibh. Pellentesque maximus, arcu eu scelerisque faucibus, quam nulla venenatis nulla, vel aliquam neque odio a nunc. Suspendisse vitae mollis ligula. Praesent placerat cursus orci quis faucibus. Quisque luctus pellentesque nibh dictum volutpat. In porttitor finibus tortor, at ornare ex tincidunt eget. Morbi eu lacinia ipsum.
                        Phasellus ornare augue at fringilla interdum. Etiam maximus dapibus lobortis. Duis bibendum nulla nec tincidunt tincidunt. Sed imperdiet erat at dapibus accumsan. Quisque at lacus mi. Sed sed interdum massa, eget venenatis orci. Ut a neque quis sapien porttitor facilisis ac id nisi.
                        Proin ut feugiat diam. Etiam hendrerit magna ac tellus aliquet fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at tincidunt mauris. Sed non felis fringilla, imperdiet risus a, volutpat mauris. Maecenas maximus tempus libero ac fringilla. Nunc non mi a quam malesuada blandit ut non elit. Nunc in congue libero. Nam id libero egestas dui cursus vehicula sit amet vitae velit. Maecenas leo turpis, commodo nec odio eget, sagittis scelerisque velit.
                    </AppText>

                    
                    

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                    <Image source={{ uri: url }} style={{ width: 30, height: 30, borderRadius: 50 }} />
                    <View style={{ marginLeft: 10 }}>
                        <AppText style={{ color: 'grey', fontSize: 14, marginTop: 5 }}>By,</AppText>
                        <AppText style={{ color: Colors.primary, fontSize: 16 }}>Suyash Vashishtha</AppText>
                    </View>

                </View>

            </View>
        </ScrollView>

    )
}
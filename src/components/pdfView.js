import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors } from "../utils";
import { Col, Row, Grid } from "react-native-flexbox-grid";
import Pdf from "react-native-pdf";
import AppText from "./text";

function PdfView({ uri, book, author }) {
   
  const handleOpenPdf = (uri) => {
    Linking.openURL(uri);
  };
  const [pages, setPages] = useState();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={{
          width: 150,
          height: 200,
          borderRadius: 10,
          overflow: "hidden",
        }}
        onPress={() => handleOpenPdf(uri)}
      >
        <Pdf
        
          trustAllCerts={false}
          source={{
            uri: uri,
            cache: true,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            setPages(numberOfPages);
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />

        <View
          style={[
            styles.pdf,
            {
              position: "absolute",
              backgroundColor: "transparent",
              justifyContent: "flex-end",
            },
          ]}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              justifyContent: "flex-end",
              width: "100%",
              padding: 10,
              backgroundColor: Colors.seconday,
            }}
          >
            <AppText bold numberOfLines={2} style={{marginBottom:10}}>{book}</AppText>
            <AppText style={{ fontSize: 12, marginTop: 5,color:Colors.primary }}>
              By- {author}
            </AppText>
            <AppText style={{ fontSize: 12, marginTop: 5 ,color:Colors.primary}}>
              No.pages- {pages}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>

      {/* <Grid>
        <Row size={50}>
          <Col sm={6}>
            <Pdf source={{ uri: pdfUris[0], cache: true }} />
          </Col>
          <Col sm={6}>
            <Pdf source={{ uri: pdfUris[0], cache: true }} />
          </Col>
        </Row>
        <Row size={50}>
          <Col sm={6}>
            <Pdf source={{ uri: pdfUris[0], cache: true }} />
          </Col>
          <Col sm={6}>
            <Pdf source={{ uri: pdfUris[0], cache: true }} />
          </Col>
        </Row>
      </Grid> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    marginLeft: 10,
  },
  pdf: {
    width: "100%",
    height: "100%",
    backgroundColor:'grey'
  },
});

export default PdfView;

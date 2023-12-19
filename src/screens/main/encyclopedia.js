import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Pdf from "react-native-pdf";

function Encyclopedia() {
  return (
    <View style={styles.container}>
      <Pdf
        source={{ uri: "http://www.pdf995.com/samples/pdf.pdf", cache: true }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        trustAllCerts={true}
      />
    </View>
  );
}

export default Encyclopedia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

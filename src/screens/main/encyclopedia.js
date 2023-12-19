import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PdfView from "../../components/pdfView";
import axios from "axios";

const pdfs = [
  {
    id: 1,
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    author: "Author 1",
    book: "Book 1",
  },
  {
    id: 2,
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    author: "Author 2",
    book: "Book 2",
  },
  {
    id: 3,
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    author: "Author 3",
    book: "Book 3",
  },
  {
    id: 4,
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    author: "Author 4",
    book: "Book 4",
  },
];

function Encyclopedia() {
  const folderId =
    "0BzHqSP5JtkQafnpiR2xBazFYSHFjRV96bzRRT2ZxN3VsaXFUSXF3bXdEbmpoamhpMXFfZ0U";
  const apiKey = "AIzaSyCCMX7nNARMmCdSpquczCA__aW0Y-qiDAk";
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const getFiles = async () => {
      // https://drive.google.com/drive/folders/0BzHqSP5JtkQafnpiR2xBazFYSHFjRV96bzRRT2ZxN3VsaXFUSXF3bXdEbmpoamhpMXFfZ0U?resourcekey=0-lK5Y_bEl1ylQ6uM-eGYicw&usp=drive_link
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`
        );
        setFiles(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    getFiles();
  }, [folderId, apiKey]);
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < pdfs.length; i += 2) {
      const pdfsInRow = pdfs.slice(i, i + 2);
      rows.push(
        <View style={styles.row} key={i}>
          {pdfsInRow.map((item) => (
            <PdfView
              key={item.id}
              uri={item.uri}
              author={item.author}
              book={item.book}
            />
          ))}
        </View>
      );
    }
    return rows;
  };

  return <View style={styles.container}>{renderRows()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default Encyclopedia;

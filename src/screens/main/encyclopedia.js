import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PdfView from "../../components/pdfView";
import axios from "axios";
import { encode as base64Encode } from "base-64";

function generateRandomAyurvedaName() {
  const authors = [
    "Dr. Vasant Lad",
    "Dr. David Frawley",
    "Dr. Robert Svoboda",
    "Maya Tiwari",
  ];

  const books = [
    "The Complete Book of Ayurvedic Home Remedies",
    "Ayurveda: The Science of Self-Healing",
    "Prakriti: Your Ayurvedic Constitution",
    "The Ayurveda Bible",
  ];

  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomBook = books[Math.floor(Math.random() * books.length)];

  return { author: randomAuthor, book: randomBook };
}

function Encyclopedia() {
  const cloudName = "dcufd9un6"; // Replace with your Cloudinary cloud name
  const apiKey = "919742514733152"; // Replace with your Cloudinary API key
  const apiSecret = "y_PDMOw75GkwjfBu6p1X7qLWwiI"; // Replace with your Cloudinary API secret
  const folderName = "pdfs"; // Replace with the folder name you want to fetch

  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const credentials = `${apiKey}:${apiSecret}`;
        const encodedCredentials = base64Encode(credentials);

        const response = await axios.get(
          `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=${folderName}`,
          {
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
            },
          }
        );

        setResources(response.data.resources);
  
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, [cloudName, apiKey, apiSecret, folderName]);

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < resources.length; i += 2) {
      const pdfsInRow = resources.slice(i, i + 2);
      rows.push(
        <View style={styles.row} key={i}>
          {pdfsInRow.map((item) => {
            const randomNames = generateRandomAyurvedaName();
            return (
              <PdfView
                key={item.public_id}
                uri={item.url}
                author={randomNames.author}
                book={randomNames.book}
              />
            );
          })}
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

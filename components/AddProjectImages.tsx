import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://via.placeholder.com/400x300" // Main Image URL
  );

  const thumbnails = [
    "https://via.placeholder.com/150x150?text=Image+1",
    "https://via.placeholder.com/150x150?text=Image+2",
    "https://via.placeholder.com/150x150?text=Image+3",
  ];

  const handleImagePress = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
   
    <ScrollView contentContainerStyle={styles.container}>
      {/* Main Image */}
      <Image source={  require("./download.jpg") } style={styles.mainImage} />

      {/* Thumbnails Row */}
      <View style={styles.thumbnailRow}>
        {thumbnails.map((thumb, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(thumb)}
            style={styles.thumbnailWrapper}
          >
            <Image source={{ uri: thumb }} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}

        {/* Add More Button */}
        <TouchableOpacity style={styles.addMoreButton}>
          <Text style={styles.addMoreText}>Add More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    marginLeft:20 , 
    marginRight:20 ,
    borderRadius:10 ,   
    alignItems: "center",
    height:"90%" ,  
    padding: 20,
    backgroundColor: "#fff", // White background
  },
  mainImage: {
    width: "80%", // Full width for responsiveness
    height: width * 0.3, // Maintain aspect ratio
    borderRadius: 12,
    marginBottom: 10,
    resizeMode: "cover",
  },
  thumbnailRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap", // Wrap thumbnails to the next row
    gap: 5,
  },
  thumbnailWrapper: {
    width: width * 0.28, // Thumbnails take ~28% of screen width
    height: width * 0.28,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
    margin: 5,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  addMoreButton: {
    width: width * 0.28,
    height: width * 0.28,
    borderWidth: 2,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#f5f5f5",
  },
  addMoreText: {
    color: "#555",
    fontSize: 14,
    textAlign: "center",
  },
});

export default ImageGallery;

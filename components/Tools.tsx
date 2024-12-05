import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

// Get the screen width for responsive adjustments
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        {/* Card 1 */}
        <View style={[styles.card, { borderColor: "#8B5CF6" }]}>
          <View style={[styles.iconBackground, { backgroundColor: "#EAE2FA" }]}>
            <Image
              source={require("./chatgpt.png")} // Replace with your icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.title}>ChatGPT</Text>
          <Text style={styles.subtitle}>Most trusted</Text>
        </View>

        {/* Card 2 */}
        <View style={[styles.card, { borderColor: "#60A5FA" }]}>
          <View style={[styles.iconBackground, { backgroundColor: "#E0F2FE" }]}>
            <Image
              source={require("./gemini.png")} // Replace with your icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.title}>Gemini</Text>
          <Text style={styles.subtitle}>Most Powerful</Text>
        </View>

        {/* Card 3 */}
        <View style={[styles.card, { borderColor: "#86EFAC" }]}>
          <View style={[styles.iconBackground, { backgroundColor: "#DCFCE7" }]}>
            <Image
              source={require("./image.png")} // Replace with your icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.title}>Nimotron</Text>
          <Text style={styles.subtitle}>Most Easy</Text>
        </View>

        {/* Card 4 */}
        <View style={[styles.card, { borderColor: "#F59E0B" }]}>
          <View style={[styles.iconBackground, { backgroundColor: "#FEF3C7" }]}>
            <Image
              source={require("./chatgpt.png")} // Replace with your icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.title}>Zeta</Text>
          <Text style={styles.subtitle}>Highly Rated</Text>
        </View>

        {/* Card 5 */}
        <View style={[styles.card, { borderColor: "#F87171" }]}>
          <View style={[styles.iconBackground]}>
            <Image
              source={require("./gemini.png")} // Replace with your icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.title}>Aurora</Text>
          <Text style={styles.subtitle}>Most Loved</Text>
        </View>

        {/* Card 6 */}
        <View style={[styles.card, { borderColor: "#4ADE80" }]}>
          <View style={[styles.iconBackground, { backgroundColor: "#D1FAE5" }]}>
            <Image
              source={require("./image.png")} // Replace with your icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.title}>Flora</Text>
          <Text style={styles.subtitle}>Eco-Friendly</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: "#F9FAFB", // Light background
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Wraps into rows for multiple cards
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    width: width * 0.90, // Card width is 28% of the screen width, allowing 3 cards per row
    aspectRatio: 1, // Ensures card is square
    borderWidth: 2,  
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
  },
  iconBackground: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular background
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    overflow: "hidden", // Ensures image stays inside the circle
  },
  icon: {
    width: "100%", // Full width of the container
    height: "100%", // Full height of the container
    resizeMode: "contain", // Adjusts image proportionally
  },
  title: {
    fontSize: 16, // Slightly smaller title for mobile screens
    fontWeight: "600",
    color: "#1F2937",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 12, // Smaller subtitle for mobile screens
    color: "#6B7280",
    marginTop: 2,
    textAlign: "center", // Centered subtitle
  },
});

export default App;

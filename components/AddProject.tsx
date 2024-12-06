import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView } from "react-native";
import BudgetDistribution from "./Budget";
import ImageGallery from "./AddProjectImages";
import ResourceForm from "./Requirements";
import MobileDropdownScreen from "./AddProjectLastPart";

// Get screen width for responsive design
const { width } = Dimensions.get("window");

const ProjectInfoForm = () => {
  return (
    <ScrollView>
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Project Information</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Project Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title here..."
          placeholderTextColor="#A0A0A0"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Project Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write Description..."
          placeholderTextColor="#A0A0A0"
          multiline
          numberOfLines={4}
        />
      </View>
     
    </ScrollView>
    <BudgetDistribution />
    <ImageGallery />
    <ResourceForm />
    <MobileDropdownScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    height:"60%" , 
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Shadow for Android
    margin: 10,
    width: width * 0.9, // 90% of the screen width
    alignSelf: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#333333",
    width: "100%", // Full width of parent container
  },
  textArea: {
    height: 95,
    textAlignVertical: "top", // Ensures multiline input starts at the top
  },
});

export default ProjectInfoForm;

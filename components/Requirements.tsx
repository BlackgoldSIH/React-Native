import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const ResourceForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Requirements</Text>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select Resource</Text>
          <TouchableOpacity style={styles.dropdown}>
            <TextInput
              placeholder="Search Resources"
              style={styles.input}
              editable={false}
              pointerEvents="none" // Makes the input behave like a dropdown
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Resource Type</Text>
          <TouchableOpacity style={styles.dropdown}>
            <TextInput
              placeholder="Search Type"
              style={styles.input}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select Resource</Text>
          <TouchableOpacity style={styles.dropdown}>
            <TextInput
              placeholder="Search Resources"
              style={styles.input}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Resource Type</Text>
          <TouchableOpacity style={styles.dropdown}>
            <TextInput
              placeholder="Search Type"
              style={styles.input}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff", // Light background
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    bottom:30 , 
    shadowRadius: 4,
    elevation: 2,
    width: "90%",
    alignSelf: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  inputGroup: {
    width: "48%",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    fontSize: 14,
    color: "#888",
  },
});

export default ResourceForm;

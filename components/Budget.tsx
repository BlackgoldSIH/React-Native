import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

// Get screen dimensions for responsive design
const { width } = Dimensions.get("window");

const BudgetDistribution = () => {
  const [discountType, setDiscountType] = useState(""); // Selected discount type
  const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility

  const discountOptions = ["Percentage", "Flat Amount", "Buy One Get One"];

  const handleSelectOption = (option:any) => {
    setDiscountType(option);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Budget Distribution</Text>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Total Estimate</Text>
          <TextInput
            style={styles.input}
            placeholder="15000"
            keyboardType="numeric"
            placeholderTextColor="#A0A0A0"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Minimum Estimate</Text>
          <TextInput
            style={styles.input}
            placeholder="10000"
            keyboardType="numeric"
            placeholderTextColor="#A0A0A0"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Discount Price</Text>
          <TextInput
            style={styles.input}
            placeholder="12000"
            keyboardType="numeric"
            placeholderTextColor="#A0A0A0"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Discount Type</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.dropdownText}>
              {discountType || "Discount Type"}
            </Text>
          </TouchableOpacity>

          {dropdownVisible && (
            <View style={styles.dropdownOptions}>
              <FlatList
                data={discountOptions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelectOption(item)}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    padding: 20,
    marginTop:10 , 
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
    margin: 10,
    width: width * 0.9, // 90% of screen width
    alignSelf: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputGroup: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 14,
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
    width: "100%",
  },
  dropdown: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: 14,
    color:  "#A0A0A0",
  },
  dropdownOptions: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    zIndex: 10, // Ensure it appears above everything else
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  optionText: {
    fontSize: 14,
    color: "#333333",
  },
});

export default BudgetDistribution;

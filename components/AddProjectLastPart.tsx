import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const Dropdown = ({ label, placeholder, options, onSelect }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value:any) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLabel}>{label}</Text>
      <TouchableOpacity
        style={styles.dropdownInput}
        onPress={() => setIsOpen((prev) => !prev)}
      >
        <Text style={{ color: selectedValue ? "#000" : "#999" }}>
          {selectedValue || placeholder}
        </Text>
        <Text style={styles.dropdownArrow}>{isOpen ? "▲" : "▼"}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownOptions}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const DropdownScreen = () => {
  const handleDomainSelect = (value:any) => {
    console.log("Selected Domain:", value);
  };

  const handleKeywordsSelect = (value:any) => {
    console.log("Selected Keyword:", value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Category</Text>
      <Dropdown
        label="Project Domain"
        placeholder="Select Domain"
        options={["Finance", "Healthcare", "Education", "Technology"]}
        onSelect={handleDomainSelect}
      />
      <Dropdown
        label="Add Keywords"
        placeholder="Search Keywords"
        options={["AI", "Blockchain", "Cloud Computing", "IoT"]}
        onSelect={handleKeywordsSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "#fff",
    marginRight:15 , 
    marginLeft:15 , 
    bottom:5 , 
    borderRadius:9 , 
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444",
    marginBottom: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
  },
  dropdownInput: {
    height: 48,
    borderRadius: 8,
    backgroundColor: "#EFEFEF",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  dropdownArrow: {
    fontSize: 16,
    color: "#444",
  },
  dropdownOptions: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    marginTop: 5,
    maxHeight: 150, // Limit height for better scrolling experience
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  optionText: {
    fontSize: 16,
    color: "#444",
  },
});

export default DropdownScreen;

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // To use the dropdown icon

const SubmissionHistory = () => {
  const [checkedItems, setCheckedItems] = useState({});

  // Sample data
  const submissions = [
    { id: "1", title: "Project 1", status: "Reviewed" },
    { id: "2", title: "Project 2", status: "Pending" },
    { id: "3", title: "Project 2", status: "In-Review" },
    { id: "4", title: "Project 2", status: "Pending" },
    { id: "5", title: "Project 2", status: "Reviewed" },
    { id: "6", title: "Project 2", status: "In-Review" },
  ];

  // Toggle the checkbox
  const handleCheck = (id:any) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderStatus = (status:any) => {
    let statusStyle;
    switch (status) {
      case "Reviewed":
        statusStyle = styles.reviewed;
        break;
      case "Pending":
        statusStyle = styles.pending;
        break;
      case "In-Review":
        statusStyle = styles.inReview;
        break;
      default:
        statusStyle = {};
    }
    return <Text style={[styles.statusText, statusStyle]}>{status}</Text>;
  };

  const renderItem = ({ item }:any) => (
    <View style={styles.row}>
      <Text style={styles.titleText}>{item.title}</Text>
      {renderStatus(item.status)}
      <TouchableOpacity
        style={[
          styles.checkbox,
          checkedItems[item.id] && styles.checkboxChecked,
        ]}
        onPress={() => handleCheck(item.id)}
      >
        {checkedItems[item.id] && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Title</Text>
        <TouchableOpacity style={styles.dropdownIcon}>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={submissions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius:10 , 
    marginTop:18
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  dropdownIcon: {
    padding: 8,
  },
  listContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  titleText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  reviewed: {
    color: "green",
  },
  pending: {
    color: "orange",
  },
  inReview: {
    color: "blue",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "green",
    borderColor: "green",
  },
  checkmark: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SubmissionHistory;

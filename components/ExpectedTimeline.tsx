import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const ExpectedTimeline = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        <Text style={styles.header}>Expense Timeline</Text>
        <ScrollView contentContainerStyle={styles.timeline}>
          <TimelineItem
            title="Title 1"
            description="Description of the Process and any key points"
            status="Completed"
            statusColor="green"
          />
          <TimelineItem
            title="Title 2"
            description="Description of the Process and any key points"
            status="Processing"
            statusColor="cyan"
          />
          <TimelineItem
            title="Title 3"
            description="Description of the Process and any key points"
            status="Pending"
            statusColor="orange"
          />
          <TimelineItem
            title="Title 4"
            description="Description of the Process and any key points"
            status="Pending"
            statusColor="orange"
          />
        </ScrollView>
      </View>
    </View>
  );
};

const TimelineItem = ({ title, description, status, statusColor }:any) => {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.circle} />
      <View style={styles.line} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#D1D3C2",
   marginLeft:"75%" , 
  },
  timelineContainer: {
    position: "absolute",
    top: 20,
    right: screenWidth * 0,
    width: "90%",
    marginRight:10 , 
    backgroundColor: "#DAD0DF",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  timeline: {
    flexDirection: "column",
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#888888",
    marginRight: 10,
    marginTop: 5,
  },
  line: {
    width: 2,
    height: 80,
    backgroundColor: "#888888",
    position: "absolute",
    left: 5,
    top: 20,
  },
  content: {
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default ExpectedTimeline;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskBar = ({ task, state, progress, color }) => {
  return (
    <View style={styles.taskRow}>
      {/* Task Title */}
      <Text style={styles.taskTitle}>{task}</Text>

      {/* Progress Bar */}
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: `${progress}%`, backgroundColor: color }]}>
          <Text style={styles.barText}>{state}</Text>
        </View>
      </View>
    </View>
  );
};

const TaskProgressChart = () => {
  const tasks = [
    { task: "Task 1", state: "Pending", progress: 40, color: "#E67E22" },
    { task: "Task 2", state: "Reviewing", progress: 60, color: "#3498DB" },
    { task: "Task 3", state: "In Queue", progress: 50, color: "#E74C3C" },
    { task: "Task 4", state: "Almost Done", progress: 80, color: "#2ECC71" },
    { task: "Task 5", state: "Success", progress: 30, color: "#7F8C8D" },
  ];

  return (
    <View style={styles.container}>
      {/* Task Rows */}
      {tasks.map((item, index) => (
        <TaskBar
          key={index}
          task={item.task}
          state={item.state}
          progress={item.progress}
          color={item.color}
        />
      ))}

      {/* Percentage Axis */}
      <View style={styles.axisRow}>
        {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
          <Text key={value} style={styles.axisText}>
            {value}
          </Text>
        ))}
      </View>
      <Text style={styles.axisLabel}>Progress (%)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius:10 , 
    marginTop:10 , 
    marginBottom:10 , 
    padding: 16,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  taskTitle: {
    width: 60, // Fixed width for task labels
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },
  barContainer: {
    flex: 1,
    height: 30,
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 8,
  },
  bar: {
    height: "100%",
    justifyContent: "center",
    borderRadius: 5,
    paddingLeft: 8,
  },
  barText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  axisRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  axisText: {
    color: "#000",
    fontSize: 12,
  },
  axisLabel: {
    color: "#000",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});

export default TaskProgressChart;

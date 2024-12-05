import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const TotalWorkLog = () => {
  const strokeWidth = 10;
  const radius = 60;
  const size = radius * 2 + strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const progress = 70; // Example percentage (70% filled)

  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Total WorkLog</Text>
      <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E8E6FF"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#6C63FF"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotates to start from the top
          />
        </Svg>
        <View style={styles.centerContent}>
          <Text style={styles.statisticsLabel}>Statistics</Text>
          <Text style={styles.statisticsValue}>5w: 2d</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C2C2C",
    marginBottom: 10,
  },
  centerContent: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  statisticsLabel: {
    fontSize: 14,
    color: "#B3B3B3",
    marginBottom: 4,
  },
  statisticsValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C2C2C",
  },
});

export default TotalWorkLog;

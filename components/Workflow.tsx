import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import TotalWorkLog from "./WorkflowDate";
import TaskProgressChart from "./Tasks";

const ProjectCard = ({ title, id, description, imageSrc, checked, onToggle }:any) => (
  <View style={styles.card}>
    <TouchableOpacity onPress={onToggle} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.tick}>✔</Text>}
      </View>
    </TouchableOpacity>
    <Image source={{ uri: imageSrc }} style={styles.image} />
    <Text style={styles.projectTitle}>{title}</Text>
    <Text style={styles.projectId}>#{id}</Text>
    <Text style={styles.description}>{description}</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>View Tasks</Text>
    </TouchableOpacity>
  </View>
);

const ProjectList = () => {
  const [projects, setProjects] = useState([
    {
      title: "Project Title 1",
      id: "402235",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "https://via.placeholder.com/150",
      checked: false,
    },
    {
      title: "Project Title 2",
      id: "402236",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "https://via.placeholder.com/150",
      checked: true,
    },
    {
      title: "Project Title 3",
      id: "402237",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "https://via.placeholder.com/150",
      checked: false,
    },
    {
      title: "Project Title 4",
      id: "402238",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "https://via.placeholder.com/150",
      checked: false,
    },
  ]);

  const toggleCheckbox = (index:any) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, i) =>
        i === index ? { ...project, checked: !project.checked } : project
      )
    );
  };

  const { width } = useWindowDimensions();
  const isMobile = width < 480;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.grid, isMobile && styles.mobileGrid]}>
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            id={item.id}
            description={item.description}
            imageSrc={item.imageSrc}
            checked={item.checked}
            onToggle={() => toggleCheckbox(index)}
          />
        ))}
      </View>
      <TotalWorkLog />
      <TaskProgressChart />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f7f7f7",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  mobileGrid: {
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    width: "100%",
    marginRight: "2%",
    marginLeft: "0%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
    position: "relative",
  },
  checkboxContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    transition: "background-color 0.2s ease",
  },
  checked: {
    backgroundColor: "#333",
  },
  tick: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: "90%",
    height: 150,
    borderRadius: 8,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  projectId: {
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 12,
    color: "#777",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProjectList;

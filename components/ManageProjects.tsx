import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// Dummy project data
const projects = [
  {
    id: 1,
    name: 'Project Apollo',
    description:
      'Aiming to land humans on Mars by 2040. Focused on space exploration.',
    status: 'In Progress',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Project Titan',
    description:
      'Researching the moons of Saturn for potential human colonization.',
    status: 'Completed',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Project Horizon',
    description:
      'Developing the next-gen AI technology for solving global problems.',
    status: 'Pending',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Project Quantum',
    description:
      'Exploring quantum computing and its potential for revolutionizing industries.',
    status: 'In Progress',
    image: 'https://via.placeholder.com/150',
  },
];

const ManageProjects = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Manage Projects</Text>

      {projects.map((project) => (
        <View style={styles.projectCard} key={project.id}>
          <Image source={{ uri: project.image }} style={styles.projectImage} />
          <View style={styles.projectDetails}>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            <Text style={[styles.projectStatus, getStatusStyle(project.status)]}>
              {project.status}
            </Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

// Helper function to determine the status style
const getStatusStyle = (status: string) => {
  switch (status) {
    case 'In Progress':
      return styles.inProgress;
    case 'Completed':
      return styles.completed;
    case 'Pending':
      return styles.pending;
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  projectImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  projectDetails: {
    flex: 1,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  projectDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  projectStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inProgress: {
    color: '#ff9800',
  },
  completed: {
    color: '#4caf50',
  },
  pending: {
    color: '#f44336',
  },
  editButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ManageProjects;

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

// Get device width and height
const { width, height } = Dimensions.get('window');

// Dummy project data
const projects = [
  {
    id: 1,
    name: 'Project Apollo',
    description:
      'Aiming to land humans on Mars by 2040. Focused on space exploration.',
    status: 'In Progress',
    image: '../assets/images/icon.png',
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
const getStatusStyle = (status:any) => {
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch', // Ensure items stretch across the full width
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: height * 0.02,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginHorizontal: width * 0.02, // Small horizontal margin for aesthetics
    marginBottom: height * 0.02 , 
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.04,
  },
  projectImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 8,
    marginRight: width * 0.04,
  },
  projectDetails: {
    flex: 1,
  },
  projectName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
  },
  projectDescription: {
    fontSize: width * 0.04,
    color: '#555',
    marginVertical: height * 0.005,
  },
  projectStatus: {
    fontSize: width * 0.04,
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
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
});

export default ManageProjects;

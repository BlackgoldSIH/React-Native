import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const ManageResearchers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [researchers, setResearchers] = useState([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      field: 'Astrophysics',
      image: 'https://via.placeholder.com/100',
      tasks: ['Analyze Data', 'Write Report'],
    },
    {
      id: '2',
      name: 'Dr. Alan Walker',
      field: 'AI Research',
      image: 'https://via.placeholder.com/100',
      tasks: ['Develop Model', 'Evaluate Dataset'],
    },
    {
      id: '3',
      name: 'Dr. Emma Watson',
      field: 'Biotechnology',
      image: 'https://via.placeholder.com/100',
      tasks: ['Conduct Experiments', 'Draft Research Paper'],
    },
  ]);

  const handleAssignTask = (id) => {
    // Logic to assign a new task to a researcher
    alert(`Task assigned to researcher with ID: ${id}`);
  };

  const handleSendMessage = (id) => {
    // Logic to send a message to a researcher
    alert(`Message sent to researcher with ID: ${id}`);
  };

  const filteredResearchers = researchers.filter((researcher) =>
    researcher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderResearcher = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.field}>Field: {item.field}</Text>
        <Text style={styles.tasks}>
          Tasks: {item.tasks.join(', ')}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAssignTask(item.id)}
          >
            <Text style={styles.buttonText}>Assign Task</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => handleSendMessage(item.id)}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>
              Message
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Manage Researchers</Text>
      <Text style={styles.subheader}>
        View researcher details, assign tasks, and send messages.
      </Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search Researchers..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Researcher List */}
      <FlatList
        data={filteredResearchers}
        keyExtractor={(item) => item.id}
        renderItem={renderResearcher}
        contentContainerStyle={styles.list}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  field: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  tasks: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  secondaryButtonText: {
    color: '#007BFF',
  },
});

export default ManageResearchers;

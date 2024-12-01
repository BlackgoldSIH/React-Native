import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const data = [
    { id: '1', title: 'Project 1', status: 'Reviewed' },
    { id: '2', title: 'Project 2', status: 'Pending' },
    { id: '3', title: 'Project 2', status: 'In-Review' },
    { id: '4', title: 'Project 2', status: 'Pending' },
    { id: '5', title: 'Project 2', status: 'Reviewed' },
  ];

  const comments = [
    {
      id: '1',
      projectId: '#402235',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      duration: '00:30:00',
    },
    {
        id: '2',
        projectId: '#402235',
        startDate: '25/3/2023',
        endDate: '25/3/2023',
        duration: '00:30:00',
      },
      // Add more items here as needed
    ];
  
    const renderSubmission = ({ item }) => (
      <View style={styles.submissionItem}>
        <Text style={styles.projectTitle}>{item.title}</Text>
        <Text style={[styles.status, getStatusStyle(item.status)]}>{item.status}</Text>
      </View>
    );
  
    const renderComment = ({ item }) => (
      <View style={styles.commentItem}>
        <Text style={styles.commentText}>
          Admin comments regarding the project with ID shown below {item.projectId}
        </Text>
        <Text style={styles.commentText}>Start Date: {item.startDate}</Text>
        <Text style={styles.commentText}>End Date: {item.endDate}</Text>
        <Text style={styles.commentText}>Duration: {item.duration}</Text>
      </View>
    );
    const getStatusStyle = (status) => {
        switch (status) {
          case 'Reviewed':
            return { color: 'green' };
          case 'Pending':
            return { color: 'red' };
          case 'In-Review':
            return { color: 'orange' };
          default:
            return { color: 'black' };
        }
      };
    
      return (
        <View style={styles.container}>
          {/* Submit Revision Section */}
          <View style={styles.submitSection}>
            <Text style={styles.sectionTitle}>Submit Revision</Text>
            <TextInput
              style={styles.input}
              placeholder="Write your response..."
              multiline
            />
  <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Submission History */}
      <Text style={styles.sectionTitle}>Submission History</Text>
      <FlatList
        data={data}
        renderItem={renderSubmission}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      {/* Admin Comments */}
      <Text style={styles.sectionTitle}>Admin Comments</Text>
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  submitSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 16,
  },
  submissionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
},
projectTitle: {
  fontSize: 16,
  fontWeight: 'bold',
},
status: {
  fontSize: 16,
  fontWeight: 'bold',
},
commentItem: {
  padding: 8,
  backgroundColor: '#fff',
  borderRadius: 8,
  marginBottom: 8,
  borderWidth: 1,
  borderColor: '#ddd',
},
commentText: {
  fontSize: 14,
  marginBottom: 4,
},
});

export default App;      
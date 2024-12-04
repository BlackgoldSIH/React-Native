import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity , ScrollView } from 'react-native';
import SubmitRevision from './FeedbackUpload';
 

const AdminComments = () => {
  // Dummy data with selection state
  const [data, setData] = useState(
    Array(4)
      .fill(null)
      .map((_, index) => ({
        id: `402235-${index}`,
        title: 'Admin comments regarding the project with ID shown below',
        openedDays: '10 days ago',
        startDate: '25/3/2024',
        endDate: '25/3/2024',
        duration: '00:30:00',
        isSelected: false,
      }))
  );

  const toggleCheckbox = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item
    );
    setData(updatedData);
  };

  const renderItem = ({ item }) => (

    <View style={styles.card}>
      {/* Checkbox */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => toggleCheckbox(item.id)}
      >
        <View style={[styles.checkbox, item.isSelected && styles.checkboxSelected]}>
          {item.isSelected && <Text style={styles.tickMark}>✓</Text>}
        </View>
      </TouchableOpacity>

      {/* Main Content */}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subText}>
          <Text style={styles.link}>#{item.id}</Text> Opened {item.openedDays} by Admin
        </Text>
        <View style={styles.infoRow}>
          <View style={styles.statusContainer}>
            <Text style={styles.statusCanceled}>Canceled</Text>
            <Text style={styles.statusCompleted}>Completed</Text>
          </View>
          <View style={styles.dateContainer}>
            <View style={styles.dateItem}>
              <Text style={styles.dateLabel}>Start Date</Text>
              <Text style={styles.dateValue}>{item.startDate}</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.dateLabel}>End Date</Text>
              <Text style={styles.dateValue}>{item.endDate}</Text>
            </View>
          </View>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>{item.duration}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView>
    <View style={styles.container}>
      <View><Text style={{marginTop:5 , marginBottom:5  , fontWeight:"400" , fontSize:15 , marginRight:3}}>Admin Comments {'>'}</Text></View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
     
    </View>
    <View>
      <SubmitRevision />
    </View>
    </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checkboxContainer: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  tickMark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
  link: {
    color: '#007bff',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  statusContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  statusCanceled: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 12,
    marginRight: 8,
  },
  statusCompleted: {
    backgroundColor: '#d4edda',
    color: '#155724',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 12,
  },
  dateContainer: {
    flex: 2,
    flexDirection:"row", 
    gap:10 , 
  },
  dateItem: {
    marginBottom: 4,
  },
  dateLabel: {
    fontSize: 12,
    color: '#666',
  },
  dateValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  durationContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  durationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
  },
});

export default AdminComments;

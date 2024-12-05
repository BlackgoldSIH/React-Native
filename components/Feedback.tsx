import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import SubmitRevision from './FeedbackUpload';
import SubmissionHistory from './FeebackLastSection';

const AdminComments = () => {
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

  const toggleCheckbox = (id:any) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item
    );
    setData(updatedData);
  };

  const renderItem = ({ item }:any) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => toggleCheckbox(item.id)}
        >
          <View style={[styles.checkbox, item.isSelected && styles.checkboxSelected]}>
            {item.isSelected && <Text style={styles.tickMark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
      </View>
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
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Admin Comments {'>'}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.submitContainer}>
        <SubmitRevision />
      </View>
      <View>
        <SubmissionHistory />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
  headerText: {
    marginVertical: 10,
    fontWeight: '500',
    fontSize: 16,
    color: '#333',
  },
  list: {
    paddingBottom: 16,
  },
  card: {
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  subText: {
    fontSize: 13,
    color: '#666',
    marginVertical: 4,
  },
  link: {
    color: '#007bff',
  },
  infoRow: {
    marginTop: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  statusCanceled: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: 6,
    borderRadius: 4,
    fontSize: 12,
    marginRight: 8,
  },
  statusCompleted: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: 6,
    borderRadius: 4,
    fontSize: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateItem: {
    flex: 1,
    marginRight: 8,
  },
  dateLabel: {
    fontSize: 12,
    color: '#666',
  },
  dateValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  durationContainer: {
    alignItems: 'flex-end',
  },
  durationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
  },
  submitContainer: {
    marginTop: 16,
  },
});

export default AdminComments;

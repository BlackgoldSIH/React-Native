import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import  Icon  from '@expo/vector-icons/MaterialIcons'; 

const SubmittedReports = () => {
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const reportsPerPage = 5;

  // Sample data for reports
  const reportsData = [
    {
      id: 1,
      title: 'Report Title',
      start: '30 min ago',
      end: '15 Jan 2025',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Report Title 2',
      start: '2 days ago',
      end: '20 Dec 2024',
      status: 'In Review',
    },
    {
      id: 3,
      title: 'Report Title 4',
      start: '08 Aug 2024',
      end: '21 Nov 2024',
      status: 'Approved',
    },
    {
      id: 4,
      title: 'Report Title 5',
      start: '08 Aug 2024',
      end: '21 Nov 2024',
      status: 'Declined',
    },
    {
      id: 5,
      title: 'Report Title 6',
      start: '08 Aug 2024',
      end: '21 Nov 2024',
      status: 'Approved',
    },
    {
      id: 6,
      title: 'Report Title 7',
      start: '08 Aug 2024',
      end: '21 Nov 2024',
      status: 'Deadline Today',
    },
    // Add more reports as needed
  ];

  // Pagination logic
  const totalPages = Math.ceil(reportsData.length / reportsPerPage);
  const startIndex = (currentPage - 1) * reportsPerPage;
  const endIndex = startIndex + reportsPerPage;
  const currentReports = reportsData.slice(startIndex, endIndex);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return styles.statusPending;
      case 'In Review':
        return styles.statusInReview;
      case 'Approved':
        return styles.statusApproved;
      case 'Declined':
        return styles.statusDeclined;
      case 'Deadline Today':
        return styles.statusDeadlineToday;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Submitted Reports</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter-list" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Table Headers */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Title</Text>
        <Text style={styles.tableHeaderText}>Start</Text>
        <Text style={styles.tableHeaderText}>End (Expected)</Text>
        <Text style={styles.tableHeaderText}>Status</Text>
        <Text style={styles.tableHeaderText}>Action</Text>
      </View>

      {/* List of Reports */}
      <FlatList
        data={currentReports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.reportRow}>
            <Text style={styles.reportText}>{item.title}</Text>
            <Text style={styles.reportText}>{item.start}</Text>
            <Text style={styles.reportText}>{item.end}</Text>
            <View style={getStatusStyle(item.status)}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <View style={styles.actionIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="visibility" size={20} color="#4caf50" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="delete" size={20} color="#f44336" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        <TouchableOpacity
          disabled={currentPage === 1}
          onPress={() => setCurrentPage(currentPage - 1)}
          style={styles.pageButton}
        >
          <Text style={styles.pageButtonText}>{'<'}</Text>
        </TouchableOpacity>
        {[...Array(totalPages)].map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentPage(index + 1)}
            style={[
              styles.pageButton,
              currentPage === index + 1 && styles.activePageButton,
            ]}
          >
            <Text
              style={[
                styles.pageButtonText,
                currentPage === index + 1 && styles.activePageButtonText,
              ]}
            >
              {index + 1}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          disabled={currentPage === totalPages}
          onPress={() => setCurrentPage(currentPage + 1)}
          style={styles.pageButton}
        >
          <Text style={styles.pageButtonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  },
  reportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  reportText: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  iconButton: {
    padding: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  pageButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  pageButtonText: {
    fontSize: 14,
  },
  activePageButton: {
    backgroundColor: '#007bff',
  },
  activePageButtonText: {
    color: '#fff',
  },
  statusPending: {
    backgroundColor: '#ffc107',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusInReview: {
    backgroundColor: '#17a2b8',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusApproved: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusDeclined: {
    backgroundColor: '#dc3545',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusDeadlineToday: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default SubmittedReports;

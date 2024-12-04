import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Picker,
  Dimensions, // Dropdown-like component
} from "react-native";

const App = () => {

    const files = [
        { id: "1", name: "Project 1.pdf", size: "25 MB", modified: "2025/12/16", permission: "Investigator", color: "#4CAF50" },
        { id: "2", name: "Invoice Nov 17.doc", size: "16 MB", modified: "2025/12/16", permission: "View Only", color: "#FFC107" },
        { id: "3", name: "Screenshot 22.jpg", size: "155 KB", modified: "2025/12/16", permission: "Investigator", color: "#4CAF50" },
        { id: "4", name: "abc.txt", size: "157 KB", modified: "2025/12/16", permission: "Admin", color: "#F44336" },
        { id: "5", name: "Landing Page.html", size: "197 KB", modified: "2025/12/16", permission: "Admin", color: "#F44336" },
        { id: "6", name: "Styles.css", size: "1 GB", modified: "2025/12/16", permission: "Investigator", color: "#4CAF50" },
        { id: "7", name: "CheatSheet.txt", size: "889 KB", modified: "2025/12/16", permission: "View Only", color: "#FFC107" },
      ];
    
      const renderFileItem = ({ item }) => (
        <View style={styles.fileRow}>
          <View style={styles.fileInfo}>
            <Text style={styles.fileName}>{item.name}</Text>
            <Text style={styles.fileSize}>{item.size}</Text>
          </View>
          <Text style={styles.fileModified}>{item.modified}</Text>
          <View style={[styles.permissionBadge, { backgroundColor: item.color }]}>
            <Text style={styles.permissionText}>{item.permission}</Text>
          </View>
          <TouchableOpacity style={styles.actionsButton}>
            <Text style={styles.actionsText}>⋮</Text>
          </TouchableOpacity>
        </View>
      );
    

    const forms = [
        { id: "1", title: "Form 1", status: "Completed", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", download: "Download" },
        { id: "2", title: "Form 1", status: "Completed", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", download: "Download" },
        { id: "3", title: "Form 1", status: "Completed", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", download: "Download" },
        { id: "4", title: "Form 1", status: "Completed", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", download: "Download" },
      ];
    
      const renderIte = ({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.status}>{item.status}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <TouchableOpacity>
            <Text style={styles.downloadLink}>{item.download}</Text>
          </TouchableOpacity>
        </View>
      );
    
    

    const data = [
        { id: '1', title: 'Report Title', startDate: '30 min ago', endDate: '15 Jan 2025', status: 'Pending', statusColor: '#FFC107' },
        { id: '2', title: 'Report Title 2', startDate: '2 days ago', endDate: '20 Dec 2024', status: 'In Review', statusColor: '#00BCD4' },
        { id: '3', title: 'Report Title 3', startDate: '1 week ago', endDate: '1 Dec 2024', status: 'Discarded', statusColor: '#F44336' },
        { id: '4', title: 'Report Title 4', startDate: '08 Aug 2024', endDate: '21 Nov 2024', status: 'Approved', statusColor: '#4CAF50' },
        { id: '5', title: 'Report Title 5', startDate: '30 Jul 2024', endDate: 'Deadline Today', status: 'Approved', statusColor: '#4CAF50' },
      ];
    
      const renderItem = ({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.title}</Text>
          <Text style={styles.cell}>{item.startDate}</Text>
          <Text style={styles.cell}>{item.endDate}</Text>
          <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>👁</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🗑</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    
    
  const [selectedPage, setSelectedPage] = useState("Document Repository");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const dummyReports = [
    { title: "Report 1", status: "Pending" },
    { title: "Report 2", status: "In Review" },
    { title: "Report 3", status: "Approved" },
  ];

  const handleFileUpload = () => {
    Alert.alert(
      "File Upload",
      "Simulated file upload action.",
      [
        {
          text: "Upload",
          onPress: () => {
            const newFile = {
              name: `File_${uploadedFiles.length + 1}.txt`,
              size: `${(Math.random() * 100).toFixed(2)} KB`,
            };
            setUploadedFiles([...uploadedFiles, newFile]);
          },
        },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  const renderPageContent = () => {
    switch (selectedPage) {
      case "Submitted Reports":
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Submitted Reports</Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              ListHeaderComponent={() => (
                <View style={styles.headerRow}>
                  <Text style={styles.headerCell}>Title</Text>
                  <Text style={styles.headerCell}>Start Date</Text>
                  <Text style={styles.headerCell}>End Date (Expected)</Text>
                  <Text style={styles.headerCell}>Status</Text>
                  <Text style={styles.headerCell}>Action</Text>
                </View>
              )}
            />
          </View>
        );
      case "Document Repository":
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Public Files (81 Total)</Text>
            <FlatList
              data={files}
              keyExtractor={(item) => item.id}
              renderItem={renderFileItem}
              contentContainerStyle={styles.fileList}
            />
            <View style={styles.detailsPanel}>
              <Text style={styles.detailsTitle}>File Details</Text>
              <Text style={styles.detailsText}>accounts.txt</Text>
              <Text style={styles.detailsText}>Modified: 24/10/2024</Text>
      
              <Text style={styles.detailsTitle}>File Overview</Text>
              <Text style={styles.detailsText}>Total Reviews: 198</Text>
              <Text style={styles.detailsText}>Responses: 16</Text>
              <Text style={styles.detailsText}>Comments: 11</Text>
              <Text style={styles.detailsText}>Reapplied: 87</Text>
              <Text style={styles.detailsText}>Delete: 2</Text>
            </View>
          </View>
      
        );
      case "Required Forms":
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Required Forms</Text>
            <FlatList
              data={forms}
              keyExtractor={(item) => item.id}
              renderItem={renderIte}
              numColumns={2} // Creates a grid with 2 columns
              contentContainerStyle={styles.grid}
            />
          </View>
      
        );
      default:
        return <Text>Page not found!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Navigation */}
      <Picker
        selectedValue={selectedPage}
        style={styles.dropdown}
        onValueChange={(itemValue) => setSelectedPage(itemValue)}
      >
        <Picker.Item label="Document Repository" value="Document Repository" />
        <Picker.Item label="Submitted Reports" value="Submitted Reports" />
        <Picker.Item label="Required Forms" value="Required Forms" />
      </Picker>

      {/* Page Content */}
      <View style={styles.pageContent}>{renderPageContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:15 , 
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  grid: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    maxWidth: Dimensions.get("window").width / 2 - 24, // Ensures two columns
  },
  fileList: {
    flex: 3,
    paddingHorizontal: 16,
  },
  fileRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  fileInfo: {
    flex: 2,
  },
  fileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  fileSize: {
    fontSize: 12,
    color: "#757575",
  },
  fileModified: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
  },
  permissionBadge: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: "center",
  },
  permissionText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  actionsButton: {
    flex: 0.5,
    alignItems: "center",
  },
  actionsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#757575",
  },
  detailsPanel: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    borderLeftWidth: 1,
    borderLeftColor: "#e0e0e0",
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  statusContainer: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  status: {
    color: "#4CAF50",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 12,
  },
  downloadLink: {
    color: "#F44336",
    fontSize: 14,
    fontWeight: "bold",
  },

  headerCell: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
  statusBadge: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.5,
  },
  iconButton: {
    marginHorizontal: 4,
  },
  iconText: {
    fontSize: 16,
  },

  dropdown: {
    height: 35,
    borderRadius:9 , 
    width: "25%",
    borderColor: "#007AFF",
    borderWidth: 1,
    backgroundColor: "#F9F9F9",
    marginVertical: 10,
  },
  pageContent: {
    flex: 1,
    padding: 15,
  },
  pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadButton: {
    width: "90%",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  fileName: {
    fontSize: 14,
    color: "#4B4B4B",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 6,
    width: "100%",
  },
  reportItem: {
    padding: 15,
    backgroundColor: "#E8E8E8",
    marginBottom: 10,
    borderRadius: 8,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formText: {
    fontSize: 16,
    color: "#333",
  },
});

export default App;

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';

const SubmitRevision = () => {
  const [response, setResponse] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelectionWeb = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      Alert.alert('File Selected', file.name);
    }
  };

  const handleSubmit = () => {
    if (!response || !selectedFile) {
      Alert.alert('Error', 'Please write a response and upload a file.');
      return;
    }
    Alert.alert('Submitted Successfully', `Response: ${response}\nFile: ${selectedFile.name}`);
    setResponse('');
    setSelectedFile(null);
  };

  return (
    <View style={{ marginLeft:10}}><Text style={{fontWeight:"400" , fontSize:15 , marginBottom:15 , marginRight:3 }}>Submit Revision {'>'}</Text> 
    <ScrollView contentContainerStyle={styles.container}>
    
      {/* Write Response */}
      <View style={{display:"flex" , flexDirection:"row" , gap : 30 }}> 
      <View style={styles.responseSection}>
        <Text style={styles.sectionTitle}>Write your response</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Write a message..."
          value={response}
          onChangeText={setResponse}
          multiline
        />
      </View>

      {/* Upload File */}
      <View style={styles.uploadSection}>
        <Text style={styles.sectionTitle}>Upload Files</Text>
        {Platform.OS === 'web' ? (
          <input type="file" onChange={handleFileSelectionWeb} style={styles.fileInput} />
        ) : (
          <TouchableOpacity style={styles.uploadBox}>
            {selectedFile ? (
              <Text style={styles.fileName}>{selectedFile.name}</Text>
            ) : (
              <Text style={styles.uploadPlaceholder}>Choose a file or drag & drop it here</Text>
            )}
          </TouchableOpacity>
        )}
        <Text style={styles.supportedFormats}>JPEG, PNG, PDG, and MP4 formats, up to 50 GB</Text>
      </View> 
      </View> 

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor:"#fff" ,
  },
  responseSection: {
    marginBottom: 24,
    width:"75%" , 
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    height: 100,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
    textAlignVertical: 'top',
  },
  uploadSection: {
    marginBottom: 24,
  },
  uploadBox: {
    height: 100,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlaceholder: {
    fontSize: 14,
    color: '#888',
  },
  fileName: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  supportedFormats: {
    marginTop: 8,
    fontSize: 12,
    color: '#888',
  },
  submitButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 8,
    width:"25%" , 
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  fileInput: {
    marginVertical: 10,
    padding: 8,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    fontSize: 14,
    borderColor: '#ddd',
  },
});

export default SubmitRevision;

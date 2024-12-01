import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';

const HelpPage = () => {
  const [question, setQuestion] = useState('');
  const [feedback, setFeedback] = useState('');
  const [faqExpanded, setFaqExpanded] = useState<string | null>(null);

  const handleSubmitQuestion = () => {
    if (question.trim() === '') {
      Alert.alert('Error', 'Please enter a question.');
    } else {
      Alert.alert('Success', 'Your question has been submitted.');
      setQuestion('');
    }
  };

  const handleSubmitFeedback = () => {
    if (feedback.trim() === '') {
      Alert.alert('Error', 'Please provide feedback.');
    } else {
      Alert.alert('Thank You!', 'Your feedback has been submitted.');
      setFeedback('');
    }
  };

  const faqData = [
    { id: '1', question: 'How to reset my password?', answer: 'Go to settings > Account > Reset Password.' },
    { id: '2', question: 'How to contact customer support?', answer: 'You can email us at support@example.com.' },
    { id: '3', question: 'How to delete my account?', answer: 'Go to settings > Account > Delete Account.' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>Help Center</Text>
      <Text style={styles.subheader}>
        Need help? Ask your questions, explore FAQs, or give us feedback.
      </Text>

      {/* Ask a Question Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ask a Question</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your question here..."
          placeholderTextColor="#aaa"
          value={question}
          onChangeText={setQuestion}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmitQuestion}>
          <Text style={styles.buttonText}>Submit Question</Text>
        </TouchableOpacity>
      </View>

      {/* Feedback Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Give Feedback</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Type your feedback here..."
          placeholderTextColor="#aaa"
          value={feedback}
          onChangeText={setFeedback}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmitFeedback}>
          <Text style={styles.buttonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </View>

      {/* FAQs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQs</Text>
        <FlatList
          data={faqData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.faqItem}
              onPress={() =>
                setFaqExpanded((prev) => (prev === item.id ? null : item.id))
              }
            >
              <Text style={styles.faqQuestion}>{item.question}</Text>
              {faqExpanded === item.id && (
                <Text style={styles.faqAnswer}>{item.answer}</Text>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
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
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  faqItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    marginLeft: 10,
  },
});

export default HelpPage;

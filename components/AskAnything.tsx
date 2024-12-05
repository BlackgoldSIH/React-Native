import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

const questions = [
  { id: 1, question: 'How to upload a file through the panel?' },
  { id: 2, question: 'Process for audit.' },
  { id: 3, question: 'How to find out current expenses with all details?' },
  { id: 4, question: 'Final review checklist' },
];

const AskAnything = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionSelect = (question:any) => {
    setSelectedQuestion(question);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Hello, <Text style={styles.headerHighlight}>Investigator!</Text>
        </Text>
        <Text style={styles.headerSubtitle}>How can I help you today?</Text>
      </View>

      {/* Question Cards */}
      <ScrollView horizontal style={styles.cards} showsHorizontalScrollIndicator={false}>
        {questions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => handleQuestionSelect(item.question)}
          >
            <Text style={styles.cardText}>{item.question}</Text>
            <FontAwesome5 name="globe" size={20} color="#9b9bff" style={styles.cardIcon} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Chat Response */}
      {selectedQuestion && (
        <View style={styles.chatResponse}>
          <View style={styles.question}>
            <View style={styles.bubble}>
              <Text style={styles.bubbleText}>Q</Text>
            </View>
            <Text style={styles.questionText}>{selectedQuestion}</Text>
          </View>
          <View style={styles.answer}>
            <FontAwesome5 name="star" size={20} color="#7b4bff" style={styles.starIcon} />
            <Text style={styles.answerText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        </View>
      )}

      {/* Typing Box */}
      <View style={styles.typingBox}>
        <TextInput
          style={styles.inputBox}
          placeholder="Start typing here..."
          placeholderTextColor="#A0A0A0"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6fc',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    color: '#7b4bff',
    textAlign: 'center',
  },
  headerHighlight: {
    color: '#4c52ff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#9b9b9b',
    textAlign: 'center',
  },
  cards: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f8f8ff',
    padding: 15,
    borderRadius: 10,
    width: screenWidth * 0.8, // 80% of screen width
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardIcon: {
    marginTop: 10,
  },
  chatResponse: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bubble: {
    width: 30,
    height: 30,
    backgroundColor: '#4c52ff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  bubbleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
  },
  answer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  starIcon: {
    marginRight: 10,
  },
  answerText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  typingBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  inputBox: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
});

export default AskAnything;

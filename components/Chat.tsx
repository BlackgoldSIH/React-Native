import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import  Icon  from '@expo/vector-icons/Ionicons';

const ChatScreen = () => {
  const chatData = [
    {
      id: 1,
      name: 'CMPDI',
      recentMessage: 'Recent Message',
      messages: [
        { id: 1, type: 'text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '11:09 PM' },
        { id: 2, type: 'text', content: 'Dolor mollis leo proin turpis eu hac.', time: '12:15 AM' },
        { id: 3, type: 'audio', content: '0:06 sec', time: '12:20 AM' },
      ],
    },
    {
      id: 2,
      name: 'Co-Investigator 1',
      recentMessage: 'Recent Message',
      messages: [],
    },
    {
      id: 3,
      name: 'Co-Investigator 2',
      recentMessage: 'Recent Message',
      messages: [],
    },
  ];

  const [activeChat, setActiveChat] = useState(chatData[0]); // Default to first chat
  const [messageInput, setMessageInput] = useState('');

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>Inbox</Text>
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.chatItem,
                activeChat.id === item.id && styles.chatItemActive,
              ]}
              onPress={() => setActiveChat(item)}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.name[0]}</Text>
              </View>
              <View>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatMessage}>{item.recentMessage}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Chat Area */}
      <View style={styles.chatArea}>
        {/* Header */}
        <View style={styles.chatHeader}>
          <Text style={styles.chatTitle}>{activeChat.name}</Text>
          <Text style={styles.chatSubtitle}>Help & Support</Text>
        </View>

        {/* Messages */}
        <ScrollView style={styles.messageArea}>
          {activeChat.messages.length === 0 ? (
            <Text style={styles.noMessages}>No messages yet</Text>
          ) : (
            activeChat.messages.map((message) => (
              <View
                key={message.id}
                style={[
                  styles.messageBubble,
                  message.type === 'audio' ? styles.audioMessage : styles.textMessage,
                ]}
              >
                <Text
                  style={[
                    styles.messageContent,
                    message.type === 'audio' && styles.audioText,
                  ]}
                >
                  {message.content}
                </Text>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
            ))
          )}
        </ScrollView>

        {/* Input Box */}
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={messageInput}
            onChangeText={setMessageInput}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Icon name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
  },
  sidebar: {
    width: '30%',
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  chatItemActive: {
    backgroundColor: '#e0e0e0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#001f3f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    color: '#888',
  },
  chatArea: {
    flex: 1,
    flexDirection: 'column',
  },
  chatHeader: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatSubtitle: {
    color: '#888',
  },
  messageArea: {
    flex: 1,
    padding: 10,
  },
  noMessages: {
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  textMessage: {
    backgroundColor: '#fff',
  },
  audioMessage: {
    backgroundColor: '#001f3f',
  },
  messageContent: {
    fontSize: 14,
  },
  audioText: {
    color: '#fff',
  },
  messageTime: {
    fontSize: 10,
    color: '#888',
    textAlign: 'right',
  },
  inputArea: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#001f3f',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;

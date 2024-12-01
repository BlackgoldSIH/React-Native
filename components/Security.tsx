import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';

const SecurityPage = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Security Settings</Text>
      </View>

      {/* Password Management */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Password Management</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Two-Factor Authentication */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Two-Factor Authentication (2FA)</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Enable 2FA</Text>
          <Switch value={twoFactorEnabled} onValueChange={toggleTwoFactor} />
        </View>
        <Text style={styles.note}>
          Add an extra layer of security to your account by enabling two-factor authentication.
        </Text>
      </View>

      {/* Active Sessions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Sessions</Text>
        <Text style={styles.text}>Manage devices currently logged into your account.</Text>
        <View style={styles.sessionCard}>
          <Text style={styles.sessionText}>Device: iPhone 13</Text>
          <Text style={styles.sessionText}>Location: Mumbai, India</Text>
          <Text style={styles.sessionText}>Last Active: 2 hours ago</Text>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sessionCard}>
          <Text style={styles.sessionText}>Device: MacBook Pro</Text>
          <Text style={styles.sessionText}>Location: New York, USA</Text>
          <Text style={styles.sessionText}>Last Active: 3 days ago</Text>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Login from Chrome on Windows</Text>
          <Text style={styles.activityTimestamp}>Today, 10:30 AM</Text>
        </View>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Password Changed</Text>
          <Text style={styles.activityTimestamp}>Yesterday, 5:00 PM</Text>
        </View>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Login from Safari on Mac</Text>
          <Text style={styles.activityTimestamp}>2 days ago, 9:15 PM</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#4f4fdb',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  actionButton: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e6e6ff',
    alignItems: 'center',
  },
  actionText: {
    color: '#4f4fdb',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  note: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  sessionCard: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sessionText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  logoutButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activityItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activityText: {
    fontSize: 16,
    color: '#333',
  },
  activityTimestamp: {
    fontSize: 12,
    color: '#777',
  },
});

export default SecurityPage;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Manage Linked Accounts</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Customize Notification Preferences</Text>
        </TouchableOpacity>
      </View>

      {/* Privacy */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Manage Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Blocked Accounts</Text>
        </TouchableOpacity>
      </View>

      {/* General */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Enable Dark Mode</Text>
          <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Language: English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>App Version: 1.0.0</Text>
        </TouchableOpacity>
      </View>

      {/* Support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Report a Problem</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
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
  logoutSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  logoutButton: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SettingsPage;

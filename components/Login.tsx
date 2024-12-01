import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

const LoginPageSplitScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      Alert.alert('Login Success', `Welcome, ${username}!`);
    }
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-In', 'Google Sign-In clicked!');
  };

  return (
    <View style={styles.container}>
      {/* Left Side - Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "components\logo.png" }} // Replace with your own image URL
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Right Side - Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.header}>Login</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Google Sign-In Button */}
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Admin Login Link */}
        <TouchableOpacity onPress={() => Alert.alert('Admin Login')}>
          <Text style={styles.adminLink}>Admin Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#DB4437',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  adminLink: {
    fontSize: 14,
    color: '#2196F3',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginPageSplitScreen;

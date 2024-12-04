import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import ManageProjects from "./ManageProjects";

const { width } = Dimensions.get("window");

export default function AminLogin() {
  const [currentPage, setCurrentPage] = useState(''); // Default Page
  const navigatToPage = (page:any) => {
    setCurrentPage(page);
    switch(page) {
      case "Manage Projects" : 
         return <ManageProjects />
    } 
       
   // toggleDrawer(); // Close the drawer after navigation
  };
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      {width > 768 && (
        <View style={styles.logoSection}>
          <Image
            source={require("./logo.png")} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      )}

      {/* Form Section */}
      <View style={styles.formSection}>
        <Text style={styles.title}>Admin Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText} onPress={() => navigatToPage("Manage Projects")}>Login</Text>
        </TouchableOpacity>
        <View style={styles.links}>
          <Text style={styles.linkText}>
            Are you an Investigator?{" "}
            <Text
              style={styles.link}
              onPress={() => alert("Admin Login clicked")}
            >
              Investigator Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: width > 768 ? "row" : "column",
    backgroundColor: "#fafafa",
  },
  logoSection: {
    flex: 1,
    backgroundColor: "#464655",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "60%",
    height: "40%",
  },
  formSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#111",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  links: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  link: {
    color: "#3897f0",
    fontWeight: "bold",
  },
});

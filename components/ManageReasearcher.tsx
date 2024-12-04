import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [createdDate, setCreatedDate] = useState("20/04/2023");
  const [department, setDepartment] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  return (
    <View style={styles.container}>
        <View><Text style={{fontWeight:"400" , fontSize:15 , marginBottom:15 , marginRight:3 }}>Add Researcher {'>'}</Text></View>
      {/* Row 1 */}
      <View style={{backgroundColor:"#fff" , height:350 , padding:10}}>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
        </View>
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile</Text>
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
            placeholder="Mobile"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Created Date</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              value={createdDate}
              onChangeText={setCreatedDate}
              placeholder="Date"
              placeholderTextColor="#aaa"
            />
            <Text style={styles.icon}>📅</Text>
          </View>
        </View>
      </View>

      {/* Row 3 */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Department</Text>
          <TextInput
            style={styles.input}
            value={department}
            onChangeText={setDepartment}
            placeholder="Department Name"
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Created By</Text>
          <TextInput
            style={styles.input}
            value={createdBy}
            onChangeText={setCreatedBy}
            placeholder="Admin Name"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add the Research</Text>
      </TouchableOpacity>
      </View>

      
      <View><Text style={{fontWeight:"400" , fontSize:15 , marginBottom:15 , marginRight:3 , marginTop:9}}>Researchers {'>'}</Text></View>
      <View style={styles.card}>
      {/* Profile Image */}
      <Image
        source={require("./download.jpg")} 
        style={styles.profileImage}
      />

      {/* User Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Naman Arora</Text>
        <Text style={styles.department}>Department Name</Text>
      </View>

      {/* Metadata */}
      <View style={styles.metaContainer}>
        <Text style={styles.metaText}>20/04/2023</Text>
        <Text style={styles.metaText}>
          <Text style={styles.label}>Admin:</Text> Admin Name
        </Text>
        <Text style={styles.metaText}>
          <Text style={styles.label}>Approval Status:</Text>{" "}
          <Text style={styles.status}>Pending</Text>
        </Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(247, 247, 247, 1.00)",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    color: "#000",
    backgroundColor: "#f9f9f9",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingRight: 10,
    backgroundColor: "#f9f9f9",
  },
  icon: {
    fontSize: 18,
    color: "#555",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "black",
    width:"25%" , 
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  department: {
    fontSize: 14,
    color: "#666",
  },
  metaContainer: {
    alignItems: "flex-end",
  },
  metaText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  status: {
    color: "orange",
    fontWeight: "600",
  },

});

export default UserForm;

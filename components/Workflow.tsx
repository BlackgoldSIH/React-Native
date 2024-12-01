import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const projects = [
    { id: '1', title: 'Project Title 1', description: 'Detailed project overview goes here.' },
    { id: '2', title: 'Project Title 2', description: 'Detailed project overview goes here.' },
    { id: '3', title: 'Project Title 3', description: 'Detailed project overview goes here.' },
  ];

  const tasks = [
    { id: '1', title: 'Task 1', status: 'Pending', color: '#FF6B6B' },
    { id: '2', title: 'Task 2', status: 'Reviewing', color: '#4D96FF' },
    { id: '3', title: 'Task 3', status: 'In Queue', color: '#FFC107' },
  ];

  const budgetData = [
    { category: 'Design', allocated: 2000, spent: 1800 },
    { category: 'Development', allocated: 5000, spent: 4200 },
    { category: 'Marketing', allocated: 1500, spent: 1200 },
  ];

  const calendarData = [
    { date: '1 Dec', task: 'Meeting' },
    { date: '3 Dec', task: 'Deadline for project submission' },
    { date: '5 Dec', task: 'Review tasks' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Text style={styles.headerSubtitle}>Manage your projects and tasks efficiently</Text>
      </View>

      {/* Projects Section */}
      <Text style={styles.sectionTitle}>Projects</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.projectsContainer}>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Tasks</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Tasks Section */}
      <Text style={styles.sectionTitle}>Project Tasks</Text>
      {tasks.map((task) => (
        <View key={task.id} style={styles.taskCard}>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <View style={[styles.status, { backgroundColor: task.color }]}>
            <Text style={styles.statusText}>{task.status}</Text>
          </View>
        </View>
      ))}

      {/* Worklog & Calendar Section */}
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>Total WorkLog</Text>
          <View style={styles.circularPlaceholder}>
            <Text >5w: 2d</Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>Calendar</Text>
          <FlatList
            data={calendarData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.calendarItem}>
                <Text style={styles.calendarDate}>{item.date}</Text>
                <Text style={styles.calendarTask}>{item.task}</Text>
              </View>
            )}
          />
        </View>
      </View>

      {/* Budget Utilization & Graphs */}
      <Text style={styles.sectionTitle}>Budget Utilization</Text>
      {budgetData.map((budget, index) => (
        <View key={index} style={styles.budgetRow}>
          <Text style={styles.budgetCategory}>{budget.category}</Text>
          <View style={styles.budgetBar}>
            <View
              style={{
                width: `${(budget.spent / budget.allocated) * 100}%` , 
                backgroundColor: '#4CAF50',
                height: '100%',
              }}
            />
          </View>
          <Text style={styles.budgetText}>
            ${budget.spent}/${budget.allocated}
          </Text>
        </View>
      ))}

      {/* Expected Timeline Graph */}
      <Text style={styles.sectionTitle}>Expected Timeline</Text>
      <View style={styles.rectangularPlaceholder}>
        <Text>Timeline Graph Placeholder</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 16,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 12,
  },
  projectsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  projectCard: {
    width: 220,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 4,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  status: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  circularPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  budgetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  budgetCategory: {
    width: '25%',
    fontSize: 14,
    fontWeight: 'bold',
  },
  budgetBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  budgetText: {
    width: '25%',
    textAlign: 'right',
    fontSize: 14,
  },
  calendarItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  calendarDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  calendarTask: {
    fontSize: 14,
    color: '#666',
  },
  rectangularPlaceholder: {
    height: 100,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 12,
  },
});

export default App;
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const TrackFinance = () => {
  const screenWidth = Dimensions.get('window').width;

  // Dummy data
  const summary = {
    income: 8000,
    expenses: 4500,
    savings: 3500,
  };

  const lineChartData = [1000, 2000, 3000, 4000, 6000, 8000];

  const categories = [
    { name: 'Food', amount: 1500, color: '#FF6F61' },
    { name: 'Transport', amount: 800, color: '#4CAF50' },
    { name: 'Shopping', amount: 1200, color: '#2196F3' },
    { name: 'Entertainment', amount: 1000, color: '#FFC107' },
  ];

  const transactions = [
    { id: 1, name: 'Grocery', amount: -50, date: '01 Dec 2024' },
    { id: 2, name: 'Salary', amount: 8000, date: '30 Nov 2024' },
    { id: 3, name: 'Taxi', amount: -20, date: '29 Nov 2024' },
    { id: 4, name: 'Dining Out', amount: -60, date: '28 Nov 2024' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Track Finance</Text>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={[styles.card, { backgroundColor: '#e8f5e9' }]}>
          <Text style={styles.cardLabel}>Income</Text>
          <Text style={styles.cardValue}>${summary.income}</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#ffebee' }]}>
          <Text style={styles.cardLabel}>Expenses</Text>
          <Text style={styles.cardValue}>${summary.expenses}</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#e3f2fd' }]}>
          <Text style={styles.cardLabel}>Savings</Text>
          <Text style={styles.cardValue}>${summary.savings}</Text>
        </View>
      </View>

      {/* Line Chart */}
      <Text style={styles.sectionTitle}>Income Trend</Text>
      <View style={styles.lineChart}>
        {lineChartData.map((value, index) => {
          const height = (value / Math.max(...lineChartData)) * 150;
          return (
            <View
              key={index}
              style={[styles.lineChartPoint, { bottom: height }]}
            />
          );
        })}
        <View style={styles.lineConnector}>
          {lineChartData.map((value, index) => {
            if (index < lineChartData.length - 1) {
              return (
                <View
                  key={index}
                  style={[
                    styles.line,
                    {
                      height: 2,
                      left: index * (screenWidth / lineChartData.length),
                    },
                  ]}
                />
              );
            }
          })}
        </View>
      </View>

      {/* Category Breakdown */}
      <Text style={styles.sectionTitle}>Expenses by Category</Text>
      {categories.map((category, index) => (
        <View style={styles.categoryRow} key={index}>
          <View
            style={[styles.categoryColor, { backgroundColor: category.color }]}
          />
          <Text style={styles.categoryText}>{category.name}</Text>
          <Text style={styles.categoryAmount}>${category.amount}</Text>
        </View>
      ))}

      {/* Transaction History */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      {transactions.map((transaction) => (
        <View style={styles.transactionRow} key={transaction.id}>
          <Text style={styles.transactionName}>{transaction.name}</Text>
          <Text
            style={[
              styles.transactionAmount,
              {
                color: transaction.amount < 0 ? '#f44336' : '#4caf50',
              },
            ]}
          >
            ${transaction.amount}
          </Text>
          <Text style={styles.transactionDate}>{transaction.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    elevation: 2,
  },
  cardLabel: {
    fontSize: 14,
    color: '#555',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  lineChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 200,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    position: 'relative',
  },
  lineChartPoint: {
    width: 8,
    height: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    position: 'absolute',
    marginLeft: 8,
  },
  line: {
    width: 2,
    backgroundColor: '#4CAF50',
    position: 'absolute',
    bottom: 0,
  },
  lineConnector: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  categoryRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  categoryColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  categoryAmount: {
    fontSize: 16,
    color: '#333',
  },
  transactionRow: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  transactionDate: {
    fontSize: 14,
    color: '#777',
    flex: 1,
  },
});

export default TrackFinance;

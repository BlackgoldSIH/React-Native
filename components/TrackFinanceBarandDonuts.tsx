import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Text as SvgText, Circle } from 'react-native-svg';

const TrackFinanceCharts = () => {
  // Bar Chart Component
  const BarChart = () => {
    const data = [10, 30, 20, 25, 50, 15, 60, 40, 35, 30, 45, 40];
    const maxValue = 60; // Adjust the max value for the chart scaling

    return (
      <View style={styles.barChartContainer}>
        <View style={styles.barHeader}>
          <Text style={styles.barTitle}>Work Done</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Monthly</Text>
          </View>
        </View>
        <View style={styles.barChart}>
          {data.map((value, index) => (
            <Svg key={index} height="100" width="20">
              <Rect
                x="0"
                y={100 - (value / maxValue) * 100}
                width="16"
                height={(value / maxValue) * 100}
                fill={index === 6 ? '#888888' : '#DAD0DF'}
              />
              {index === 6 && (
                <>
                  <Circle cx="8" cy={100 - (value / maxValue) * 100} r="4" fill="#DAD0DF" />
                  <SvgText x="0" y="85" fill="#AAA" fontSize="12">
                    ₹2216
                  </SvgText>
                </>
              )}
            </Svg>
          ))}
        </View>
        <View style={styles.barLabels}>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((label, index) => (
            <Text key={index} style={styles.label}>
              {label}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  // Donut Chart Component
  const DonutChart = () => {
    const segments = [
      { value: 40, color: '#F8E6B7' }, // Daily Expense
      { value: 20, color: '#DAD0DF' }, // Profit
      { value: 15, color: '#888888' }, // Tax
    ];
    const total = 75;
    let cumulativeValue = 0;

    return (
      <View style={styles.donutChartContainer}>
        <View style={styles.donutHeader}>
          <Text style={styles.donutTitle}>Budget Utilization</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Dec</Text>
          </View>
        </View>
        <Svg height="120" width="120">
          {segments.map((segment, index) => {
            const startAngle = (cumulativeValue / total) * 360;
            cumulativeValue += segment.value;
            const endAngle = (cumulativeValue / total) * 360;

            return (
              <Circle
                key={index}
                cx="60"
                cy="60"
                r="50"
                stroke={segment.color}
                strokeWidth="15"
                strokeDasharray={`${endAngle - startAngle} ${360 - (endAngle - startAngle)}`}
                strokeDashoffset={25 + startAngle}
                fill="none"
                rotation="90"
                origin="60, 60"
              />
            );
          })}
        </Svg>
        <View style={styles.donutCenter}>
          <Text style={styles.donutTotal}>82,62 INR</Text>
          <Text style={styles.donutInfo}>Total</Text>
        </View>
      </View>
    );
  };

  // Combined Layout
  return (
    <View style={styles.container}>
      <BarChart />
      <DonutChart />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 20,
    display:"flex" , 
    flexDirection:"row" , 
    gap:40 , 
    marginTop:3 , 
  },
  dropdown: {
    backgroundColor: '#2D2D3C',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dropdownText: {
    color: '#AAA',
    fontSize: 14,
  },
  // Bar Chart Styles
  barChartContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    width:"50%" , 
  },
  barHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  barTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  barChart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
  },
  barLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  label: {
    color: '#AAA',
    fontSize: 12,
  },
  // Donut Chart Styles
  donutChartContainer: {
    backgroundColor: '#2D2D3C',
    borderRadius: 15,
    padding: 20,
  },
  donutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  donutTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  donutCenter: {
    position: 'absolute',
    top: 110,
    left: 30,
    width:"40%" , 
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutTotal: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  donutInfo: {
    color: '#AAA',
    fontSize: 14,
  },
});

export default TrackFinanceCharts;

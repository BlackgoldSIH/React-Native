import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import TrackFinanceCharts from './TrackFinanceBarandDonuts'; // Assumes this file exists
import ExpectedTimeline from './ExpectedTimeline'; // Assumes this file exists

const { width } = Dimensions.get('window'); // Get the screen width

const StatsCard = ({ title, value, change, color, graphPath, dotColor }) => {
  return (
    <View style={[styles.card, width < 400 && responsiveStyles.card]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, width < 400 && responsiveStyles.value]}>
        {value}
      </Text>
      <Text style={[styles.change, { color }]}>
        &#8599; {change} from last month
      </Text>
      <Svg height="50" width="100" style={styles.graph}>
        <Path d={graphPath} stroke={color} strokeWidth="2" fill="none" />
        <Circle cx="90" cy="25" r="4" fill={dotColor} />
      </Svg>
    </View>
  );
};

const App = () => {
  const isSmallScreen = width < 400; // Small screen if width is less than 400

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View
        style={[
          styles.container,
          isSmallScreen && responsiveStyles.container,
        ]}
      >
        {/* Stats Cards */}
        <StatsCard
          title="Total Projects"
          value="500"
          change="+2.5"
          color="#90EE90"
          dotColor="#90EE90"
          graphPath="M10 30 Q 30 10, 50 20 T 90 25"
        />
        <StatsCard
          title="Total Spending"
          value="₹36,672"
          change="+3.5"
          color="#FFB6C1"
          dotColor="#FFB6C1"
          graphPath="M10 40 Q 30 20, 50 30 T 90 20"
        />
        <StatsCard
          title="To Achieve"
          value="₹291,912"
          change="+4.5"
          color="#FFD700"
          dotColor="#FFD700"
          graphPath="M10 35 Q 30 25, 50 30 T 90 30"
        />
      </View>

      {/* Graph Section */}
      <View
        style={[
          styles.container2,
          isSmallScreen && responsiveStyles.container2,
        ]}
      >
        <TrackFinanceCharts />
      </View>

      {/* Timeline Section */}
       <ExpectedTimeline />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: '#f7f7f7',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  container2: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  timeline: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height:"100%" , 
    paddingVertical: 10,
    borderRadius: 15,
  },
  card: {
    backgroundColor: '#2D2D3C',
    borderRadius: 15,
    width: '30%',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    color: '#AAA',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  value: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  change: {
    fontSize: 12,
    marginTop: 5,
  },
  graph: {
    marginTop: 10,
  },
});

const responsiveStyles = StyleSheet.create({
  value: {
    fontSize: 20,
  },
  card: {
    width: '100%',
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  timeline: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default App;

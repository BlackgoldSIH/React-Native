import React from 'react';
import { View, Text, StyleSheet, Dimensions , ScrollView} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import TrackFinanceCharts from './TrackFinanceBarandDonuts';
import ExpectedTimeline from './ExpectedTimeline';


const { width } = Dimensions.get('window'); // Get the screen width

const StatsCard = ({ title, value, change, color, graphPath, dotColor }: any) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
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
  return (
    <ScrollView>
      <ExpectedTimeline />
      <View style={styles.container}>
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
      <View style={styles.container2}>
        <TrackFinanceCharts />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginLeft: 5,
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap in smaller screens
    justifyContent: 'space-around',
    width:"75%" , 
  },
  container2: {
    width: '100%', // Full width on mobile
    borderRadius: 19,
    gap: 5,
    marginTop: 5,
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#2D2D3C',
    borderRadius: 15,
    width: '100%', // Full width on small screens
    maxWidth: 300, // Max width for large screens
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20, // Add spacing between cards on smaller screens
  },
  title: {
    color: '#AAA',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  value: {
    color: '#FFF',
    fontSize: 24, // Adjust font size for better mobile readability
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

// Media query for handling responsiveness
const isSmallScreen = width < 400; // Small screen if width is less than 400

// Adjust styles based on screen size
const responsiveStyles = StyleSheet.create({
  value: {
    fontSize: isSmallScreen ? 20 : 28, // Smaller font size for small screens
  },
  card: {
    width: isSmallScreen ? '100%' : '30%', // Full width for small screens, 3 per row for larger ones
  },
  container: {
    flexDirection: isSmallScreen ? 'column' : 'row', // Stack vertically on small screens
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default App;

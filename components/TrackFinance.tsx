import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import TrackFinanceCharts from './TrackFinanceBarandDonuts';
import ExpectedTimeline from './ExpectedTimeline';

const StatsCard = ({ title, value, change, color, graphPath, dotColor }:any) => {
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
     <>
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
    <View style = { styles.container2}>
    <TrackFinanceCharts />
    </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'space-around',
    gap:5 , 
    marginLeft:5 , 
    alignItems: 'center',
    paddingVertical: 20, 
    display:"flex" , 
    flexDirection:"row" ,
  },
  container2:{ 
 // flex: 1,
 width:"50%" , 
 borderRadius:19 , 
 // justifyContent: 'space-around',
 gap:5 , 
 marginLeft:5 , 
 marginTop:5 , 
 alignItems: 'center',
 paddingVertical: 20, 
 display:"flex" , 
 flexDirection:"row" ,
  }, 
  card: {
    backgroundColor: '#2D2D3C',
    borderRadius: 15, 
    width: '25%',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    color: '#AAA',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  value: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  change: {
    fontSize: 14,
    marginTop: 5,
  },
  graph: {
    marginTop: 10,
  },
});

export default App;

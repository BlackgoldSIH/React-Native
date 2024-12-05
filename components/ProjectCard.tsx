import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const CustomCircularProgress = ({ value, primaryColor = '#111', secondaryColor = '#4caf50' }) => {
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Total circumference of the circle
  const strokeDashoffset = circumference - (value / 100) * circumference; // Offset for progress

  return (
    <View style={styles.circularProgressContainer}>
      <Svg width="120" height="120">
        {/* Background circle */}
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke={primaryColor}
          strokeWidth="10"
          fill="none"
        />
        {/* Progress circle */}
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke={secondaryColor}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)" // Rotates circle to start at the top
        />
        {/* Text displaying the progress percentage */}
        <SvgText
          x="60"
          y="60"
          textAnchor="middle"
          fontSize="16"
          fill={secondaryColor}
          dy=".3em"
        >
          {`${value}%`}
        </SvgText>
      </Svg>
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/2618/79a3/4948b66945cef0bd697df23daca00775?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qRqOqWxUUE1OaAcV6hY-Kh7TvGLjBM6DVw~yBichlVEdgOAmwfhMUKPOQrKkzxMFrLqeliPiI~R1xCfahptIduyC4~NvqQoQm-QcyfNC9D~ot2aF2Vuo88tlQtGT2chGkWXpx~DQ3Yb4Q0Xy0syek7zB92NRAzpbPqg6eKX4gED0ENeyU0tDWNVlBBCdc5eXhZwtxaSe6UnwmxHeHKj-1zXbcDtPh9KIBQ7rFTwVM-OgzOnRJkGt~Bu0WtPH3nZozeaZCNAS5sBgZU5LtBEqfdxtzRCQScHiX4m8XfQe8qnTF2rFVg7-VIUfCbQM2QNfyglLJykn-pdUz9lInt7L1w__' }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.productTitle}>Product Title 1</Text>
            <Text style={styles.productId}>ID: 32565432</Text>
          </View>
          <View style={styles.processingTag}>
            <Text style={styles.processingText}>Processing</Text>
          </View>
        </View>
        <View style={styles.dateAndCircle}>
          <View>
            <Text style={styles.dateText}>
              Start Date: <Text style={styles.dateValue}>15 Nov 2024</Text>
            </Text>
            <Text style={styles.dateText}>
              End Date: <Text style={styles.dateValue}>15 Jan 2025</Text>
            </Text>
          </View>
          <CustomCircularProgress value={75} />
        </View>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Summary</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProjectCards = () => {
  return (
    <ScrollView contentContainerStyle={styles.cardsContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    gap: 20,
  },
  card: {
    width: "100%",
    marginRight:15 , 
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 170,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productId: {
    fontSize: 12,
    color: 'gray',
  },
  processingTag: {
    backgroundColor: '#e46e196e',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  processingText: {
    fontSize: 12,
    color: '#E46E19',
  },
  dateAndCircle: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
  },
  dateValue: {
    color: 'gray',
  },
  circularProgressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    marginTop: 20,
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProjectCards;

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import JSONTree from 'react-native-json-tree'
import Dimensions from 'react-dimensions'
import {
  BarChart,
} from "react-native-chart-kit";
function LocationOverviewView(props) {
  let locationsData = props.locations.toJS();
  let locations = [];
  for (const [key, value] of Object.entries(locationsData)) {
    let { popularTimes, ...locationData } = value;
    let location = {
      ...locationData, chart: {
        labels: ['Mon.', 'Dien.', 'Mittw.', 'Donn.', 'Freit.', 'Sam.', 'Sonn.'],
        datasets: [{
          data: [sum(popularTimes.monday),
          sum(popularTimes.tuesday),
          sum(popularTimes.wednesday),
          sum(popularTimes.thursday),
          sum(popularTimes.friday),
          sum(popularTimes.saturday),
          sum(popularTimes.sunday),
          ]
        }
        ]
      }
    }
    locations.push(location);

  }
  console.log(locations);

  function sum(arr) {
    var sum = 0;
    for (var index = 0; index < arr.length; index++) {
      sum += arr[index];
    }
    return sum;
  }

  const locationItems = locations.map((location) =>
    <View>
      <Text>{location.id}</Text>
      <Text>{location.name}</Text>
      <Text>{location.address}</Text>
      <BarChart
        data={location.chart}
        width={350} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          decimalPlaces: 0
        }}

      />
    </View>
  );


  return (
    <ScrollView>{locationItems}</ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
export default LocationOverviewView;
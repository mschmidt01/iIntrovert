import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function LocationOverviewView(props) {
  if (typeof props.locations != "undefined" && props.locations.size === 0) {
    return null;
  }
  return(
    <View style={styles.container}>
        {[...props.locations.values()].reverse().map(location => (
          <View>
          <Text>------------------------</Text>
         <Text>{location.name}</Text>
         <Text>{location.address}</Text>
         <Text>{location.type}</Text>
         <Text>{location.isFavorite}</Text>
         <Text>{location.rating}</Text>
         <Text>{location.popularTimes}</Text>
         <Text>{location.coordinates}</Text>
         <Text>{location.country}</Text>
         <Text>------------------------</Text>
         </View>
        ))}
 
      </View>
 
  ) 
  return null;
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
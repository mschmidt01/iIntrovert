import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import JSONTree from 'react-native-json-tree';

function LocationOverviewView(props) {
  if (typeof props.locations != "undefined" && props.locations.size === 0) {
    return null;
  }
  return(
    <View style={styles.container}>
          <JSONTree data={props.locations} />
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
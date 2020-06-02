import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function LocationOverviewView(props) {
  if (props.locations.size === 0) {
    return null;
  }
  return(
    <View style={styles.container}>
        <FlatList
          data={props.locations}
            renderItem={({item}) => <Text style={styles.item}>{item.id}{item.name}{item.address}]</Text>}
        />
      </View>
 
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
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function LocationMapView() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      try{
        let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let mapRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setMapRegion(mapRegion)
      }
      catch(error){
        let status = Location.getProviderStatusAsync()
        if(!(await status).locationServicesEnabled){
          alert("Enable Location Services")
        }
      }
      
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation
        followsUserLocation
        initialRegion={mapRegion}>
        	<Marker
	          coordinate={{ latitude: 50.6949711, longitude: 8.3024121 }}
	          title={"Netto Filiale"}
	          description={"Supermarkt"}
           />
      </MapView>

      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
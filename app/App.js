import React, { useEffect } from 'react';
import AppContainer from './containers/AppContainer';
import LocationActions from './data/location/LocationActions';
import Constants from 'expo-constants';

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:6981`;

export default function App() {

  useEffect(() => {
    getLocations();
  });
  async function getLocations(){
    fetch(uri + "/locations")
    .then((resp) => resp.json())
    .then(function(data) {
      data.forEach(element => {
        LocationActions.addLocation(element)
        });
    }).catch((error) => {
      console.error(error);
    });
  }
  
  return (
    < AppContainer/>
  );
}



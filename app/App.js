import React from 'react';
import AppContainer from './containers/AppContainer';
import LocationActions from './data/location/LocationActions';
import Constants from 'expo-constants';

const { manifest } = Constants;
console.log(manifest)
const uri = `http://${manifest.debuggerHost.split(':').shift()}:6981`;

export default function App() {
  return (
    < AppContainer/>
  );
}
  fetch(uri + "/locations")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    data.forEach(element => {
      LocationActions.addLocation(element)
      });
  }).catch((error) => {
    console.error(error);
  });

import React from 'react';
import AppContainer from './containers/AppContainer';
import LocationActions from './data/location/LocationActions';


export default function App() {
  return (
    < AppContainer/>
  );
}
  fetch("http://localhost:9000/locations")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    data.forEach(element => {
      LocationActions.addLocation(element)
      });
  });

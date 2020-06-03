import React from 'react';
import AppContainer from './containers/AppContainer';
import LocationActions from './data/location/LocationActions';


export default function App() {
  return (
    < AppContainer/>
  );
}

let location1 = {
  id: 0,
  name: 'THM',
  address: "Wilhelm-Leuschner-Straße 13, 61169 Friedberg (Hessen)",
  type: 'Hochschule',
  isFavorite: true,
  coordinates: '48.354870,10.979690',
  rating: 5.0,
  popularTimes: [],
}

let location2 = {
  id: 1,
  name: 'ALDI SÜD',
  address: "Bahnhofstraße 66, 35390 Gießen ",
  type: 'Supermarkt',
  isFavorite: true,
  coordinates: '41.354870,9.979690',
  rating: 10.0,
  popularTimes: [],
}


LocationActions.addLocation(location1);
LocationActions.addLocation(location2);
import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import NewAppointment from './NewAppointment';
import LocationOverviewView from './LocationOverviewView';

const Drawer = createDrawerNavigator();

function HabitScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Keine Gewohnheiten!</Text>
      <Button
        onPress={() => navigation.navigate('Tätigkeiten')}
        title="Go back home"
      />
    </View>
  );
}

function FavoriteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Keine Favoriten!</Text>
      <Button
        onPress={() => navigation.navigate('Tätigkeiten')}
        title="Go back home"
      />
    </View>
  );
}

export default function Appview(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"  {...props} >
        <Drawer.Screen name="Home" component={HomeScreen}  {...props} />
        <Drawer.Screen name="Gewohnheiten" component={HabitScreen}  {...props} />
        <Drawer.Screen name="Favoriten" component={FavoriteScreen} {...props}  />      
        </Drawer.Navigator>
    </NavigationContainer>
  );
}  

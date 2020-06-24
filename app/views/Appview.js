import React,{ useState} from "react"
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import {
  Button,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import LoginView from './LoginView';
import RegisterUserView from './RegisterUserView';
//const LocationsContext = React.createContext('locations');

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

  const { locations } = props.locations;
  const { user } = props.user;
  var signedIn = true;
  //const [count, setCount] = useState(0);

  console.log("Appview",props);

 //setSignedIn()
    return (
      <NavigationContainer>

      {signedIn ? (
        <Drawer.Navigator initialRouteName="Home"  >
        <Drawer.Screen name="Home" >
          {props => <HomeScreen {...props} locations={locations} />}
        </Drawer.Screen>
        <Drawer.Screen name="Gewohnheiten" component={HabitScreen}  {...props} />
        <Drawer.Screen name="Favoriten" component={FavoriteScreen} {...props} />
      </Drawer.Navigator>
      ) : (
       
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView}  user={user}/>
         <Stack.Screen name="Register" component={RegisterUserView} /> 
        </Stack.Navigator>
      )}
        
      </NavigationContainer>
    );
  }

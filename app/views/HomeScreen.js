import React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewAppointment from './NewAppointment.js';
import SettingScreen from './Settings.js';
import LocationOverviewView from './LocationOverviewView';
import  LocationMapView  from './LocationMapView'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import { Dimensions } from 'react-native';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function ActivitiesScreen( props) {
  const { locations } = props;
  const navigation = props.navigation;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>

        <LocationOverviewView locations={locations} />

        <TouchableOpacity
          onPress={() => navigation.navigate('Neuer Termin')}
          style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function MapScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LocationMapView></LocationMapView>
    </SafeAreaView>
  );
}

function CalendarScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height - 100 ; // TODO: subtract header height!!!!
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
       <Calendar style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: windowHeight,
          width: windowWidth,
      }}></Calendar>
        <TouchableOpacity
          onPress={() => navigation.navigate('Neuer Termin')}
          style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function ActivitiesStackScreen(props) {
  const  locations  = props.locations;
  const navigation = props.navigation;
  return (
    <Stack.Navigator>
      <Stack.Screen  name="iIntrovert"   title="Activities"  options={{
            title: 'iIntrovert',
            headerStyle: { backgroundColor: '#8a2be2' },
            headerTintColor: '#fff',
            headerLeft: () => (
              <MaterialCommunityIcons
                name="menu"
                size={30}
                color="#fff"
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <MaterialCommunityIcons
                name="dots-vertical"
                size={30}
                color="#fff"
                onPress={() => navigation.navigate('Settings')}
              />
            ),
          
            }} > 
            {props => <ActivitiesScreen {...props} locations={locations}/>} 
            </Stack.Screen>

      <Stack.Screen name="Neuer Termin" component={NewAppointment} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}

function MapStackScreen({navigation}) {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="iIntrovert"
        title="Maps"
        component={MapScreen}
        options={{
          title: 'iIntrovert',
          headerStyle: { backgroundColor: '#8a2be2' },
          headerTintColor: '#fff',
          headerLeft: () => (
            <MaterialCommunityIcons
              name="menu"
              size={30}
              color="#fff"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#fff"
              onPress={() => navigation.navigate('Settings')}
            />
          ),
        }}
      />
      
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}

function CalendarStackScreen({navigation}) {
return (
    <Stack.Navigator>
      <Stack.Screen
        name="iIntrovert"
        title="Calendar"
        component={CalendarScreen}
        options={{
          title: 'iIntrovert',
          headerStyle: { backgroundColor: '#8a2be2' },
          headerTintColor: '#fff',
          headerLeft: () => (
            <MaterialCommunityIcons
              name="menu"
              size={30}
              color="#fff"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#fff"
              onPress={() => navigation.navigate('Settings')}
            />
          ),
        }}
      />
      <Stack.Screen name="Neuer Termin" component={NewAppointment} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen(props) {
  const { locations } = props;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Tätigkeiten') {
            iconName = focused ? 'star-box' : 'star-box-outline';
          }
          if (route.name === 'Maps') {
            iconName = focused ? 'map-marker' : 'map-marker-outline';
          }
          if (route.name === 'Kalender') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#8a2be2',
            },
      }}>
      <Tab.Screen name="Tätigkeiten">
      {props => <ActivitiesStackScreen {...props}  locations={locations} />}
      </Tab.Screen>
      <Tab.Screen name="Maps" component={MapStackScreen} />
      <Tab.Screen name="Kalender" component={CalendarStackScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: 'blueviolet',
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 40,
    color: 'white',
  },
});

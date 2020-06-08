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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function ActivitiesScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>

        <LocationOverviewView {...props} />

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
      <View style={styles.screen}>
        <Text>Welcome to Maps!</Text>
      </View>
    </SafeAreaView>
  );
}

function CalendarScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Text>Welcome to Calendar!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Neuer Termin')}
          style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function ActivitiesStackScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="iIntrovert"
        title="Activities"
        component={ActivitiesScreen}
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

function HomeScreen() {
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
      <Tab.Screen name="Tätigkeiten" component={ActivitiesStackScreen} />
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

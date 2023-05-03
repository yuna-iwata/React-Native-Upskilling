import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreatePixelArt from './views/CreatePixelArtStack/CreatePixelArt';
import HomeScreen from './views/HomeScreen';
import ProfileScreen from './views/ProfileScreen';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
              tabBarShowLabel: false,
              tabBarStyle: {backgroundColor: 'black'},
              tabBarIcon: () => (
                <Feather name="home" style={{color: 'white', fontSize: 30}} />
              ),
            }}
          />
          <Tab.Screen
            name="Create"
            component={CreatePixelArt}
            options={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
              tabBarShowLabel: false,
              tabBarStyle: {backgroundColor: 'black'},
              tabBarIcon: () => (
                <Octicons
                  name="diff-added"
                  style={{color: 'white', fontSize: 30}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
              tabBarShowLabel: false,
              tabBarStyle: {backgroundColor: 'black'},
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

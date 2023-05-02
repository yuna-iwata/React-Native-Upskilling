import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreatePixelArt from './views/CreatePixelArtStack/CreatePixelArt';
import HomeScreen from './views/HomeScreen';
import ProfileScreen from './views/ProfileScreen';

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
              headerTintColor: 'white', // <-- set the text color to white
              tabBarStyle: {backgroundColor: 'black'},
            }}
          />
          <Tab.Screen
            name="Create"
            component={CreatePixelArt}
            options={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white', // <-- set the text color to white
              tabBarStyle: {backgroundColor: 'black'},
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white', // <-- set the text color to white
              tabBarStyle: {backgroundColor: 'black'},
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

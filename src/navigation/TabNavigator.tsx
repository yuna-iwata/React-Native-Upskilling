import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import HomeScreen from '../views/HomeScreenStack/HomeScreen';
import ProfileScreen from '../views/ProfileScreenStack/ProfileScreen';
import ProfilePic from '../data/profilepic.png';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import CreatePixelArtStackNav from '../views/CreatePixelArtStack/CreatePixelArtStackNav';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const profilePicWidth = 30;
  return (
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
        component={CreatePixelArtStackNav}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerShown: false,
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
          tabBarIcon: () => (
            <Image
              source={ProfilePic}
              style={{
                width: profilePicWidth,
                height: profilePicWidth,
                borderRadius: profilePicWidth / 2,
                borderWidth: 1,
                borderColor: 'white',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

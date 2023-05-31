import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeStackNav from '../views/HomeScreenStack/HomeStackNav';
import ProfilePic from '../data/profilepic.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePixelArtStackNav from '../views/CreatePixelArtStack/CreatePixelArtStackNav';
import ProfileStackNav from '../views/ProfileScreenStack/ProfileStackNav';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const profilePicWidth = 30;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'ios-home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'CreateStack') {
            iconName = focused ? 'ios-create' : 'ios-create-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'ProfileStack') {
            return (
              <Image
                source={ProfilePic}
                style={{
                  width: profilePicWidth,
                  height: profilePicWidth,
                  borderRadius: profilePicWidth / 2,
                  borderWidth: 1,
                  borderColor: focused ? 'white' : 'black',
                }}
              />
            );
          }
        },
        tabBarActiveTintColor: '#4F46E5',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNav}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerShown: false,
          headerTintColor: 'white',
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'black'},
        }}
      />
      <Tab.Screen
        name="CreateStack"
        component={CreatePixelArtStackNav}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerShown: false,
          headerTintColor: 'white',
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'black'},
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNav}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerShown: false,
          headerTintColor: 'white',
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'black'},
        }}
      />
    </Tab.Navigator>
  );
}

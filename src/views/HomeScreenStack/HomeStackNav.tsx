import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import HomePost from './HomePost';
import HomeScreen from './HomeScreen';
import {TouchedPixels} from '../../types';

export type HomeStackParamList = {
  Home: undefined;
  Post: {
    gridSize: number;
    touchedPixels: TouchedPixels;
    title: string;
    likes: string;
    comments: string;
  };
};

export type HomeStackProps = StackScreenProps<HomeStackParamList, 'Home'>;

export type PostStackProps = StackScreenProps<HomeStackParamList, 'Post'>;

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: 'Feed',
        }}
      />
      <Stack.Screen
        name="Post"
        component={HomePost}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: 'Post',
        }}
      />
    </Stack.Navigator>
  );
}

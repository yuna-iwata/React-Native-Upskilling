import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import ViewPost from './ViewPost';
import HomeScreen from './HomeScreen';
import {TouchedPixels} from '../../types';

export type HomeStackParamList = {
  Home: undefined;
  ViewPost: {
    gridSize: number;
    touchedPixels: TouchedPixels;
    title: string;
    likes: string;
    comments: string;
  };
};

export type HomeStackProps = StackScreenProps<HomeStackParamList, 'Home'>;

export type PostStackProps = StackScreenProps<HomeStackParamList, 'ViewPost'>;

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStackNav({navigation}: HomeStackProps) {
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
        name="ViewPost"
        component={ViewPost}
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

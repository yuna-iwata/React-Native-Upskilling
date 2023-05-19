import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import CreatePixelArt from './CreatePixelArt';
import PostPixelArt from './PostPixelArt';
import {TouchedPixels} from '../../types';
import {ProfileStackParamList} from '../ProfileScreenStack/ProfileStackNav';

export type CreatePixelArtStackParamList = {
  Create: undefined;
  Post: {
    touchedPixels: TouchedPixels;
    setTouchedPixels: React.Dispatch<React.SetStateAction<TouchedPixels>>;
    gridSize: number;
  };
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type CreatePixelArtProps = StackScreenProps<
  CreatePixelArtStackParamList,
  'Create'
>;

export type PostPixelArtProps = StackScreenProps<
  CreatePixelArtStackParamList,
  'Post'
>;

const Stack = createStackNavigator<CreatePixelArtStackParamList>();

export default function CreatePixelArtStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Create"
        component={CreatePixelArt}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: 'Create',
          headerRight: () => <Button title="next" />,
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostPixelArt}
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

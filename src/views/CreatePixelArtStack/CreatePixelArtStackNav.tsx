import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import CreatePixelArt from './CreatePixelArt';
import PostPixelArt from './PostPixelArt';
import {TouchedPixels} from '../../types';

type CreatePixelArtStackParamList = {
  Create: undefined;
  Post: {
    touchedPixels: TouchedPixels;
    gridSize: number;
  };
};

export type CreatePixelArtProps = StackScreenProps<
  CreatePixelArtStackParamList,
  'Create',
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

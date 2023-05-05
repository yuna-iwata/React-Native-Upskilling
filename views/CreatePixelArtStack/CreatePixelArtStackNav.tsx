import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import CreatePixelArt from './CreatePixelArt';
import PostPixelArt from './PostPixelArt';

const Stack = createStackNavigator();

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
          headerTitle: 'Post', // add this line
        }}
      />
    </Stack.Navigator>
  );
}

import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import ProfileScreen from './ProfileScreen';
import ProfilePost from './ProfilePost';
import {useAuthContext} from '../../contexts/UserAuthContext';
import {TouchedPixels} from '../../types';

type ProfileStackParamList = {
  Profile: {
    touchedPixels: null | TouchedPixels;
    newArtGridSize: null | number;
    postTitle: null | string;
  };
  Post: undefined;
};

export type ProfileStackProps = StackScreenProps<
  ProfileStackParamList,
  'Profile',
  'Post'
>;

const Stack = createStackNavigator<ProfileStackParamList>();

export default function ProfileStackNav({navigation}: ProfileStackProps) {
  const {logOut} = useAuthContext();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{
          touchedPixels: null,
          newArtGridSize: null,
          postTitle: null,
        }}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: 'Profile',
          headerRight: () => (
            <Button
              title="log out"
              onPress={async () => {
                await logOut();
                navigation.reset({routes: [{name: 'LoginStack'}]});
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Post"
        component={ProfilePost}
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

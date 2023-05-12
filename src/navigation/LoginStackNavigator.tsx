import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import LoginScreen from '../views/UserLoginStack/LoginScreen';
import {UserAuthContext} from '../contexts/UserAuthContext';
import {useContext, useEffect} from 'react';

type LoginStackParamList = {
  LoginStack: undefined;
  App: undefined;
};

export type LoginProps = StackScreenProps<
  LoginStackParamList,
  'LoginStack',
  'App'
>;

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginStackNav() {
  const {loggedIn, appLoaded} = useContext(UserAuthContext);
  if (!appLoaded) {
    return null;
  }
  return (
    <Stack.Navigator initialRouteName={loggedIn ? 'App' : 'LoginStack'}>
      <Stack.Screen name="LoginStack" component={LoginScreen} />
      <Stack.Screen name="App" component={TabNavigator} />
    </Stack.Navigator>
  );
}

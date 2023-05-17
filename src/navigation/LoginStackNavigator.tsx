import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import LoginScreen from '../views/UserLoginStack/LoginScreen';
import {useAuthContext} from '../contexts/UserAuthContext';

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
  const {appLoaded, isLoggedIn} = useAuthContext();
  if (!appLoaded) {
    return null;
  }
  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? 'App' : 'LoginStack'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginStack" component={LoginScreen} />
      <Stack.Screen name="App" component={TabNavigator} />
    </Stack.Navigator>
  );
}

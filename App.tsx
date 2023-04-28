import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePixelArt from './views/CreatePixelArt';

function HomeScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Create Pixel Art"
        onPress={() => navigation.navigate('Create Pixel Art')}
      />
      <Text style={{margin: 10}}>Chosen Colour: {route.params?.color}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Create Pixel Art" component={CreatePixelArt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

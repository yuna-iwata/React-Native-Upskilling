import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './src/navigation/TabNavigator';
import {UserAuthProvider} from './src/contexts/UserAuthContext';
import LoginStackNav from './src/navigation/LoginStackNavigator';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <UserAuthProvider>
        <NavigationContainer>
          {/* <TabNavigator /> */}
          <LoginStackNav />
        </NavigationContainer>
      </UserAuthProvider>
    </GestureHandlerRootView>
  );
}

export default App;

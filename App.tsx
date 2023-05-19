import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {UserAuthProvider} from './src/contexts/UserAuthContext';
import {PostProvider} from './src/contexts/PostContext';
import LoginStackNav from './src/navigation/LoginStackNavigator';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PostProvider>
        <UserAuthProvider>
          <NavigationContainer>
            <LoginStackNav />
          </NavigationContainer>
        </UserAuthProvider>
      </PostProvider>
    </GestureHandlerRootView>
  );
}

export default App;

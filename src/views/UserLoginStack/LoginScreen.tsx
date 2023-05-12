import {Text, Button, View} from 'react-native';
import {UserAuthContext} from '../../contexts/UserAuthContext';
import React, {useContext} from 'react';

export default function LoginScreen() {
  const {setLoggedIn} = useContext(UserAuthContext);

  return (
    <View>
      <Text>login</Text>
      <Button
        title="Log In"
        onPress={() => {
          setLoggedIn(true);
        }}
      />
    </View>
  );
}

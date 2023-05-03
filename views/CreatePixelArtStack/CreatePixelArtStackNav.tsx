import {createStackNavigator} from '@react-navigation/stack';

import CreatePixelArt from './CreatePixelArt';
import PostPixelArt from './PostPixelArt';

const Stack = createStackNavigator();

export default function CreatePixelArtStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Create"
        component={CreatePixelArt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Post"
        component={PostPixelArt}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

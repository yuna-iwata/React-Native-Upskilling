import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import DrawingPanel from '../../components/DrawingPanel';

export default function CreatePixelArt({navigation, route}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  });

  const [touchedPixels, setTouchedPixels] = useState([]);
  return (
    <View style={[styles.container]}>
      <DrawingPanel
        touchedPixels={touchedPixels}
        setTouchedPixels={setTouchedPixels}></DrawingPanel>
      <Button title="clear" onPress={() => setTouchedPixels([])}></Button>
      <Button
        title="next"
        onPress={() =>
          navigation.navigate('Post', {
            postData: touchedPixels,
          })
        }></Button>
    </View>
  );
}

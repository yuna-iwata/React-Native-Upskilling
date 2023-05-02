import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DrawingPanel from '../components/DrawingPanel';

export default function CreatePixelArt() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  });

  const [color, setColor] = useState('#ffffff');
  const [touchedPixels, setTouchedPixels] = useState([]);
  return (
    <View style={[styles.container]}>
      <DrawingPanel
        touchedPixels={touchedPixels}
        setTouchedPixels={setTouchedPixels}></DrawingPanel>
      <Button title="clear" onPress={() => setTouchedPixels([])}></Button>
    </View>
  );
}

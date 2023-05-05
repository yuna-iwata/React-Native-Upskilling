import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import DrawingPanel from '../../components/DrawingPanel';

export default function CreatePixelArt({navigation}: any) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  });

  const [touchedPixels, setTouchedPixels] = useState([]);
  const gridSize = 15;
  return (
    <View style={[styles.container]}>
      <DrawingPanel
        touchedPixels={touchedPixels}
        setTouchedPixels={setTouchedPixels}
        gridSize={gridSize}
      />
      <Button title="clear" onPress={() => setTouchedPixels([])} />
      <Button
        title="next"
        onPress={() =>
          navigation.navigate('Post', {
            postData: touchedPixels,
            gridSize: gridSize,
          })
        }
      />
    </View>
  );
}

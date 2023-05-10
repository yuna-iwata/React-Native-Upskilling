import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import DrawingPanel from '../../components/DrawingPanel';
import {TouchedPixels} from '../../types';
import {CreatePixelArtProps} from './CreatePixelArtStackNav';

export default function CreatePixelArt({navigation}: CreatePixelArtProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  });

  const [touchedPixels, setTouchedPixels] = useState<TouchedPixels>([]);
  const gridSize = 15;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() =>
            navigation.navigate('Post', {
              touchedPixels: touchedPixels,
              gridSize: gridSize,
            })
          }
          title="next"
        />
      ),
    });
  }, [navigation, touchedPixels]);

  return (
    <View style={[styles.container]}>
      <DrawingPanel
        touchedPixels={touchedPixels}
        setTouchedPixels={setTouchedPixels}
        gridSize={gridSize}
      />
      <Button title="clear" onPress={() => setTouchedPixels([])} />
    </View>
  );
}

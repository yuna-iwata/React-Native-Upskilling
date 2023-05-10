import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import DrawingPanel from '../../components/DrawingPanel';
import {TouchedPixels} from '../../types';
import {CreatePixelArtProps} from './CreatePixelArtStackNav';
import ColourBox from '../../components/ColourBox';

export default function CreatePixelArt({navigation}: CreatePixelArtProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    colourContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: '8%',
      justifyContent: 'space-between',
    },
  });

  const [touchedPixels, setTouchedPixels] = useState<TouchedPixels>([]);
  const gridSize = 15;
  const [selectedColours, setSelectedColours] = useState([
    '#9E4242',
    '#9E5842',
    '#9E9542',
    '#429E4B',
    '#42789E',
    '#70429E',
    '#9E4279',
  ]);

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
      <View style={[styles.colourContainer, {marginTop: '5%'}]}>
        {selectedColours.map(colour => {
          return <ColourBox colour={colour} />;
        })}
      </View>
      <Button title="clear" onPress={() => setTouchedPixels([])} />
    </View>
  );
}

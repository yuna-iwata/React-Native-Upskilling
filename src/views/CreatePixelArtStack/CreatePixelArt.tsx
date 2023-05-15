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

  const gridSize = 15;
  const generateEmptyGrid = (length: number) => {
    const emptyArray = Array.from({length}, (_, i) => []);
    emptyArray.forEach(item => {
      for (let i = 0; i < length; i++) {
        item.push({pixelColour: 'black'});
      }
    });

    return emptyArray;
  };
  const emptyGrid = generateEmptyGrid(gridSize);
  const [touchedPixels, setTouchedPixels] = useState(emptyGrid);
  const [colourPalette, setColourPalette] = useState([
    '#9E4242',
    '#9E5842',
    '#9E9542',
    '#429E4B',
    '#42789E',
    '#70429E',
    '#9E4279',
  ]);
  const [selectedColour, setSelectedColour] = useState('#fff');

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
        gridSize={gridSize}
        selectedColour={selectedColour}
        touchedPixels={touchedPixels}
        setTouchedPixels={setTouchedPixels}
      />
      <View style={[styles.colourContainer, {marginTop: '5%'}]}>
        {colourPalette.map(colour => {
          return (
            <ColourBox colour={colour} setSelectedColour={setSelectedColour} />
          );
        })}
      </View>
      <Button title="clear" onPress={() => setTouchedPixels(emptyGrid)} />
    </View>
  );
}

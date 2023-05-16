import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import DrawingPanel from '../../components/DrawingPanel';
import {TouchedPixels} from '../../types';
import {CreatePixelArtProps} from './CreatePixelArtStackNav';
import ColourBox from '../../components/ColourBox';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreatePixelArt({navigation}: CreatePixelArtProps) {
  const screenWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    toolContainer: {
      flexDirection: 'row',
      height: '7%',
      borderRadius: 3,
      marginTop: '5%',
      margin: '2%',
      padding: '2%',
      alignItems: 'center',
      gap: screenWidth * 0.07,
      backgroundColor: '#1a1a1a',
    },
    colourContainer: {
      margin: '2%',
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
        item.push({pixelColour: 'transparent'});
      }
    });

    return emptyArray;
  };
  const emptyGrid = generateEmptyGrid(gridSize);
  const [touchedPixels, setTouchedPixels] = useState<TouchedPixels>(emptyGrid);
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
  const [rubberSelected, setRubberSelected] = useState(false);
  const [pencilSelected, setPencilSelected] = useState(false);

  const rubberHandler = () => {
    setRubberSelected(!rubberSelected);
    setPencilSelected(false);
  };
  const pencilHandler = () => {
    setPencilSelected(!pencilSelected);
    setRubberSelected(false);
  };

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
        pencilSelected={pencilSelected}
        rubberSelected={rubberSelected}
      />
      <View style={styles.toolContainer}>
        <TouchableOpacity onPress={() => pencilHandler()}>
          <MaterialCommunityIcons
            name={pencilSelected ? 'pencil' : 'pencil-outline'}
            style={{color: 'white', fontSize: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => rubberHandler()}>
          <MaterialCommunityIcons
            name={rubberSelected ? 'eraser-variant' : 'eraser'}
            style={{color: 'white', fontSize: 30}}
          />
        </TouchableOpacity>
      </View>
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

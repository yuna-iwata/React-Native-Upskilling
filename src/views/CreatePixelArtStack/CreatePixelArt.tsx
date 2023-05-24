import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import DrawingPanel from '../../components/DrawingPanel';
import {TouchedPixels} from '../../types';
import {CreatePixelArtProps} from './CreatePixelArtStackNav';
import ColourBox from '../../components/ColourBox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorPicker, {
  Panel1,
  HueSlider,
  Swatches,
} from 'reanimated-color-picker';

export const generateEmptyGrid = (length: number) => {
  const emptyArray: TouchedPixels = Array.from({length}, (_, i) => []);
  emptyArray.forEach(item => {
    for (let i = 0; i < length; i++) {
      item.push({pixelColour: 'transparent'});
    }
  });

  return emptyArray;
};

export default function CreatePixelArt({navigation}: CreatePixelArtProps) {
  const screenWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'flex-start',
    },
    optionContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: '4%',
    },
    toolContainer: {
      flexDirection: 'row',
      height: '16%',
      borderRadius: 3,
      padding: '2%',
      alignItems: 'center',
      gap: screenWidth * 0.07,
      backgroundColor: '#1a1a1a',
    },
    colourContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: '20%',
      justifyContent: 'space-between',
      marginTop: '2%',
      backgroundColor: '#1a1a1a',
      paddingLeft: '2%',
      paddingRight: '2%',
    },
    colourPickerContainer: {
      marginTop: '2%',
      paddingTop: '3%',
      backgroundColor: '#1a1a1a',
      height: '78%',
    },
    colourPicker: {
      paddingLeft: '2%',
      paddingRight: '2%',
    },
  });

  const gridSize = 15;
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
  const [pencilSelected, setPencilSelected] = useState(true);

  const rubberHandler = () => {
    setRubberSelected(!rubberSelected);
    setPencilSelected(false);
  };
  const pencilHandler = () => {
    setPencilSelected(!pencilSelected);
    setRubberSelected(false);
  };

  const onSelectColor = ({hex}) => {
    // do something with the selected color.
    setSelectedColour(hex);
    console.log(hex);
  };

  const clearArtAlert = () =>
    Alert.alert('', 'Are you sure you want to clear your artwork?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => setTouchedPixels(emptyGrid)},
    ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() =>
            navigation.navigate('Post', {
              touchedPixels: touchedPixels,
              setTouchedPixels: setTouchedPixels,
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
      <View style={styles.optionContainer}>
        <View style={styles.toolContainer}>
          <TouchableOpacity onPress={() => pencilHandler()}>
            <MaterialCommunityIcons
              name={pencilSelected ? 'pencil' : 'pencil-outline'}
              style={{color: 'white', fontSize: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => rubberHandler()}>
            <MaterialCommunityIcons
              name={rubberSelected ? 'eraser-variant' : 'eraser'}
              style={{color: 'white', fontSize: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => clearArtAlert()}>
            <MaterialCommunityIcons
              name={'trash-can-outline'}
              style={{color: 'white', fontSize: 25}}
            />
          </TouchableOpacity>
        </View>
        {/* <ScrollView style={styles.colourPickerContainer}> */}
        <View style={styles.colourPickerContainer}>
          <ColorPicker onComplete={onSelectColor}>
            <View style={styles.colourPicker}>
              <Swatches
                colors={[
                  '#9E4242',
                  '#9E5842',
                  '#9E9542',
                  '#429E4B',
                  '#42789E',
                  '#70429E',
                  '#9E4279',
                ]}
                swatchStyle={{borderRadius: 3}}
                style={{marginBottom: -5}}
              />
              <Panel1 style={{height: 150}} />
            </View>
          </ColorPicker>
        </View>
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

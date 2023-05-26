import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Pressable,
  Modal,
  Text,
} from 'react-native';
import DrawingPanel from '../../components/DrawingPanel';
import {TouchedPixels} from '../../types';
import {CreatePixelArtProps} from './CreatePixelArtStackNav';
import ColourBox from '../../components/ColourBox';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorPicker, {
  Panel1,
  HueSlider,
  Swatches,
} from 'reanimated-color-picker';
import {ScrollView} from 'react-native-gesture-handler';

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
  const screenHeight = Dimensions.get('window').height;
  const styles = StyleSheet.create({
    modalView: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [
        {translateX: -screenWidth / 4},
        {translateY: -screenHeight / 8},
      ],
      backgroundColor: 'rgba(252,151,187, 0.8)',
      borderRadius: 10,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      width: screenWidth / 2,
      height: screenHeight / 4,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    scrollPicker: {
      width: screenWidth / 4,
    },
    closeButton: {
      position: 'absolute',
      bottom: '40%',
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      alignSelf: 'center',
      backgroundColor: '#fff',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
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
    text: {
      color: 'white',
    },
  });

  //const gridSize = 15;
  const [gridSize, setGridSize] = useState(15);
  const [emptyGrid, setEmptyGrid] = useState(generateEmptyGrid(gridSize));
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
  const [modalVisible, setModalVisible] = useState(false);

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

  const gridHandler = () => {
    setModalVisible(true);
  };

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
    <View style={styles.container}>
      <View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.text}>grid size</Text>
            <ScrollView style={styles.scrollPicker}>
              <ScrollPicker
                dataSource={['10', '15', '20', '30']}
                selectedIndex={1}
                renderItem={(data, index) => {
                  return <Text>{data}</Text>;
                }}
                onValueChange={(data, selectedIndex) => {
                  //slightly hacky - could be improved in future
                  if (gridSize < Number(data)) {
                    const newEmptyGrid = generateEmptyGrid(data);
                    setTouchedPixels(newEmptyGrid);
                    setGridSize(data);
                  } else if (gridSize > Number(data)) {
                    setGridSize(data);
                    const newEmptyGrid = generateEmptyGrid(data);
                    setTouchedPixels(newEmptyGrid);
                  }
                }}
                wrapperHeight={80}
                wrapperColor="#FFFFFF"
                itemHeight={50}
                highlightColor="#d8d8d8"
                highlightBorderWidth={2}
              />
            </ScrollView>
          </View>
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <Text style={{color: '#707070', fontWeight: 'bold'}}>close</Text>
          </Pressable>
        </Modal>
      </View>
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
          <TouchableOpacity onPress={() => gridHandler()}>
            <MaterialCommunityIcons
              name={'view-grid-outline'}
              style={{color: 'white', fontSize: 25}}
            />
          </TouchableOpacity>
        </View>
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
      </View>
    </View>
  );
}

import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import CreatePixelArtStackNav from '../views/CreatePixelArtStack/CreatePixelArtStackNav';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import {create} from 'react-test-renderer';
import ColourBox from './ColourBox';

const Pixel = ({
  width,
  pixelColour,
  index,
  selectedColour,
  pixelGrid,
  touchedPixels,
  setTouchedPixels,
}) => {
  const [newPixelColour, setNewPixelColour] = useState(pixelColour);
  function applyColour() {
    const newPixelGrid = [...touchedPixels];
    newPixelGrid[index[0]][index[1]].pixelColour = selectedColour;
    setTouchedPixels(newPixelGrid);
  }

  useEffect(() => {
    setNewPixelColour(touchedPixels[index[0]][index[1]].pixelColour);
  }, [touchedPixels]);

  return (
    <TouchableWithoutFeedback delayPressOut={0} onPress={applyColour}>
      <View
        style={{
          width: width,
          height: width,
          borderWidth: 0.25,
          borderColor: '#404040',
          backgroundColor: newPixelColour,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default function DrawingPanel({
  gridSize,
  selectedColour,
  touchedPixels,
  setTouchedPixels,
}) {
  const gridWidth = Dimensions.get('window').width;
  const pixelWidth = gridWidth / gridSize;
  const panGesture = Gesture.Pan()
    .onStart(() => {
      console.log('start');
    })
    .onUpdate(e => {
      const xPos = e.x;
      const yPos = e.y;
      const col = Math.floor(xPos / pixelWidth);
      const row = Math.floor(yPos / pixelWidth);
      const newPixel = [row, col];

      if (touchedPixels[row][col].pixelColour !== selectedColour) {
        const newPixelGrid = [...touchedPixels];
        newPixelGrid[row][col].pixelColour = selectedColour;
        setTouchedPixels(newPixelGrid);
      }
    })
    .onEnd(() => {
      console.log('end');
    });
  const createPixelGrid = () => {
    const rows = [];
    for (let i = 0; i < gridSize; i++) {
      const pixels = [];
      for (let j = 0; j < gridSize; j++) {
        let pixelColour = touchedPixels[i][j].pixelColour;
        pixels.push(
          <Pixel
            width={pixelWidth}
            pixelColour={pixelColour}
            selectedColour={selectedColour}
            index={[i, j]}
            touchedPixels={touchedPixels}
            setTouchedPixels={setTouchedPixels}
          />,
        );
      }
      rows.push(
        <View
          key={`row-${i}`}
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          {pixels}
        </View>,
      );
    }
    return rows;
  };
  const grid = createPixelGrid();
  return (
    <GestureDetector gesture={panGesture}>
      <View
        style={{
          aspectRatio: 1,
          width: '100%',
          backgroundColor: 'black',
        }}>
        {grid}
      </View>
    </GestureDetector>
  );
}

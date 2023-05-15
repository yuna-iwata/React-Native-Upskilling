import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import CreatePixelArtStackNav from '../views/CreatePixelArtStack/CreatePixelArtStackNav';
import {create} from 'react-test-renderer';

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
    setNewPixelColour(selectedColour);
    const newPixelGrid = [...touchedPixels];
    newPixelGrid[index[0]][index[1]].pixelColour = selectedColour;
    setTouchedPixels(newPixelGrid);
    console.log(touchedPixels);
  }

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
const generateEmptyGrid = (length: number) => {
  const emptyArray = Array.from({length}, (_, i) => []);
  emptyArray.forEach(item => {
    for (let i = 0; i < length; i++) {
      item.push({pixelColour: 'black'});
    }
  });

  return emptyArray;
};

export default function DrawingPanelTwo({
  gridSize,
  selectedColour,
  touchedPixels,
  setTouchedPixels,
}) {
  const pixelGrid = generateEmptyGrid(gridSize);
  useEffect(() => {
    setTouchedPixels(pixelGrid);
  }, []);

  const createPixelGrid = () => {
    const rows = [];
    const gridWidth = Dimensions.get('window').width;
    const pixelWidth = gridWidth / gridSize;

    for (let i = 0; i < gridSize; i++) {
      const pixels = [];
      for (let j = 0; j < gridSize; j++) {
        let pixelColour = pixelGrid[i][j].pixelColour;
        pixels.push(
          <Pixel
            width={pixelWidth}
            pixelColour={pixelColour}
            selectedColour={selectedColour}
            index={[i, j]}
            pixelGrid={pixelGrid}
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
    <View
      style={{
        aspectRatio: 1,
        width: '100%',
        backgroundColor: 'black',
      }}>
      {grid}
    </View>
  );
}

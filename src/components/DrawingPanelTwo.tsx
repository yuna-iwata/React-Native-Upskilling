import React from 'react';
import {View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {create} from 'react-test-renderer';

const Pixel = ({width, pixelColour}) => {
  return (
    <TouchableWithoutFeedback delayPressOut={0}>
      <View
        style={{
          width: width,
          height: width,
          borderWidth: 0.25,
          borderColor: '#404040',
          backgroundColor: pixelColour,
        }}
      />
    </TouchableWithoutFeedback>
  );
};
const generateEmptyGrid = (length: number) => {
  const emptyArray = Array.from({length}, (_, i) => []);
  emptyArray.forEach(item => {
    for (let i = 0; i < length; i++) {
      item.push({pixelColour: 'pink'});
    }
  });

  return emptyArray;
};

export default function DrawingPanelTwo({gridSize}) {
  const pixelGrid = generateEmptyGrid(gridSize);

  const createPixelGrid = () => {
    const rows = [];
    const gridWidth = Dimensions.get('window').width;
    const pixelWidth = gridWidth / gridSize;

    for (let i = 0; i < gridSize; i++) {
      const pixels = [];
      for (let j = 0; j < gridSize; j++) {
        let pixelColour = pixelGrid[i][j].pixelColour;
        pixels.push(<Pixel width={pixelWidth} pixelColour={pixelColour} />);
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
  return (
    <View
      style={{
        aspectRatio: 1,
        width: '100%',
        backgroundColor: 'black',
      }}>
      {createPixelGrid()}
    </View>
  );
}

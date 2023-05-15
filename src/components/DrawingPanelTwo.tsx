import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

const Pixel = () => {
  return (
    <TouchableWithoutFeedback delayPressOut={0} onPress={applyColor}>
      <View
        style={{
          width: width,
          height: height,
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
      item.push({selectedColour: 'black'});
    }
  });

  return emptyArray;
};

export default function DrawingPanelTwo({gridSize}) {
  const pixelGrid = generateEmptyGrid(gridSize);
  return (
    <View
      style={{
        aspectRatio: 1,
        width: '100%',
        backgroundColor: 'black',
      }}></View>
  );
}

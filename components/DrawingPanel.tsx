import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

function Pixel({width}) {
  const [pixelColor, setPixelColor] = useState('black');
  function applyColor() {
    setPixelColor('#fff');
    console.log('clicked');
  }

  return (
    <TouchableWithoutFeedback delayPressOut={0} onPress={applyColor}>
      <View
        style={{
          width: `${width}%`,
          borderWidth: 0.25,
          borderColor: '#404040',
          backgroundColor: pixelColor,
        }}
      />
    </TouchableWithoutFeedback>
  );
}

export default function DrawingPanel() {
  const gridSize = 15;
  const width = (1 / gridSize) * 100;
  console.log(width);

  const rows = [];

  for (let i = 0; i < gridSize; i++) {
    const pixels = [];

    for (let j = 0; j < gridSize; j++) {
      pixels.push(<Pixel width={width} key={`${i}-${j}`} />);
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
  return (
    <View
      style={{
        aspectRatio: 1,
        width: '100%',
        borderWidth: 2,
        borderColor: '#222222',
        backgroundColor: 'black',
      }}>
      {rows}
    </View>
  );
}

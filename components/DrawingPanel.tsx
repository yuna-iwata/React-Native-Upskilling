import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

function Pixel({width, touched, index, setTouchedPixels}) {
  const [pixelColor, setPixelColor] = useState(touched ? '#fff' : 'black');

  useEffect(() => {
    setPixelColor(touched ? '#fff' : 'black');
  }, [touched]);

  function applyColor() {
    setPixelColor('#fff');
    setTouchedPixels(prev => [...prev, index]);
  }

  return (
    <TouchableWithoutFeedback delayPressOut={0} onPress={applyColor}>
      <View
        style={{
          width: width,
          borderWidth: 0.25,
          borderColor: '#404040',
          backgroundColor: pixelColor,
        }}
      />
    </TouchableWithoutFeedback>
  );
}

export default function DrawingPanel({touchedPixels, setTouchedPixels}) {
  const windowWidth = Dimensions.get('window').width;
  const gridSize = 15;
  const pixelWidth = windowWidth / gridSize;
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

      if (!touchedPixels.some(p => p[0] === row && p[1] === col)) {
        setTouchedPixels(prev => [...prev, newPixel]);
      }
    })
    .onEnd(() => {
      console.log('end');
    });

  const rows = [];
  console.log(touchedPixels);

  for (let i = 0; i < gridSize; i++) {
    const pixels = [];

    for (let j = 0; j < gridSize; j++) {
      const touched = touchedPixels.some(
        elem => elem[0] === i && elem[1] === j,
      );
      pixels.push(
        <Pixel
          width={pixelWidth}
          touched={touched}
          setTouchedPixels={setTouchedPixels}
          index={[i, j]}
          key={`${i}-${j}`}
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

  return (
    <GestureDetector gesture={panGesture}>
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
    </GestureDetector>
  );
}

import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import {TouchedPixels} from '../types';

interface PixelProps {
  width: number;
  height: number;
  touched: boolean;
  index: number[];
  setTouchedPixels: React.Dispatch<React.SetStateAction<TouchedPixels>>;
}

const Pixel: React.FC<PixelProps> = ({
  width,
  height,
  touched,
  index,
  setTouchedPixels,
  selectedColour,
}) => {
  const [pixelColor, setPixelColor] = useState(touched ? '#fff' : 'black');

  useEffect(() => {
    setPixelColor(touched ? '#fff' : 'black');
  }, [touched]);

  function applyColor() {
    setPixelColor(selectedColour);
    setTouchedPixels(prev => [...prev, index] as TouchedPixels);
  }

  return (
    <TouchableWithoutFeedback delayPressOut={0} onPress={applyColor}>
      <View
        style={{
          width: width,
          height: height,
          borderWidth: 0.25,
          borderColor: '#404040',
          backgroundColor: pixelColor,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

interface CreateGridProps {
  gridSize: number;
  gridWidth: number;
  touchedPixels: TouchedPixels;
  setTouchedPixels: React.Dispatch<React.SetStateAction<TouchedPixels>>;
}

function createGrid({
  gridSize,
  gridWidth,
  touchedPixels,
  setTouchedPixels,
  selectedColour,
}: CreateGridProps) {
  const rows = [];
  const pixelWidth = gridWidth / gridSize;
  for (let i = 0; i < gridSize; i++) {
    const pixels = [];

    for (let j = 0; j < gridSize; j++) {
      const touched = touchedPixels.some(
        elem => elem[0] === i && elem[1] === j,
      );
      pixels.push(
        <Pixel
          width={pixelWidth}
          height={pixelWidth}
          touched={touched}
          setTouchedPixels={setTouchedPixels}
          selectedColour={selectedColour}
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
  return rows;
}

export default function DrawingPanel({
  touchedPixels,
  setTouchedPixels,
  gridSize,
  selectedColour,
}: {
  touchedPixels: TouchedPixels;
  setTouchedPixels: React.Dispatch<React.SetStateAction<TouchedPixels>>;
  gridSize: number;
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

      if (!touchedPixels.some(p => p[0] === row && p[1] === col)) {
        setTouchedPixels(prev => [...prev, newPixel] as TouchedPixels);
      }
    })
    .onEnd(() => {
      console.log('end');
    });

  const grid = createGrid({
    gridSize,
    gridWidth,
    touchedPixels,
    setTouchedPixels,
    selectedColour,
  });

  console.log(touchedPixels);

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

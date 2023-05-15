import React, {useEffect} from 'react';
import {View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import {TouchedPixels} from '../types';

interface PixelProps {
  width: number;
  height: number;
  touched: boolean;
  index: number[];
  setTouchedPixels: React.Dispatch<React.SetStateAction<TouchedPixels>>;
  pixelColour: string;
  touchedPixels: TouchedPixels;
  selectedColour: string;
}

const Pixel: React.FC<PixelProps> = ({
  width,
  height,
  touched,
  index,
  setTouchedPixels,
  pixelColour,
  touchedPixels,
  selectedColour,
}) => {
  useEffect(() => {}, [touched, pixelColour]);

  function applyColor() {
    if (touched) {
      const modifyColour = touchedPixels.map(item => {
        if (
          item.pixelIndex[0] === index[0] &&
          item.pixelIndex[1] === index[1]
        ) {
          return {...item, colour: selectedColour};
        }
        return item;
      });
      setTouchedPixels(modifyColour);
    }
    setTouchedPixels(
      prev =>
        [...prev, {pixelIndex: index, colour: selectedColour}] as TouchedPixels,
    );
  }

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

interface CreateGridProps {
  gridSize: number;
  gridWidth: number;
  touchedPixels: TouchedPixels;
  setTouchedPixels: React.Dispatch<React.SetStateAction<TouchedPixels>>;
  selectedColour: string;
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
      const touchedPixelsIndex = touchedPixels.map(item => {
        return item.pixelIndex;
      });
      const touched = touchedPixelsIndex.some(
        elem => elem[0] === i && elem[1] === j,
      );
      let index = touchedPixels.findIndex(
        item => item.pixelIndex[0] === i && item.pixelIndex[1] === j,
      );
      let pixelColour = index !== -1 ? touchedPixels[index].colour : 'black';

      pixels.push(
        <Pixel
          width={pixelWidth}
          height={pixelWidth}
          setTouchedPixels={setTouchedPixels}
          touched={touched}
          touchedPixels={touchedPixels}
          pixelColour={pixelColour}
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
  selectedColour: string;
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

      const touchedPixelsIndex = touchedPixels.map(item => {
        return item.pixelIndex;
      });

      if (!touchedPixelsIndex.some(p => p[0] === row && p[1] === col)) {
        setTouchedPixels(
          prev =>
            [
              ...prev,
              {pixelIndex: newPixel, colour: selectedColour},
            ] as TouchedPixels,
        );
      } else if (touchedPixelsIndex.some(p => p[0] === row && p[1] === col)) {
        const modifiedColour = touchedPixels.map(item => {
          if (item.pixelIndex[0] === row && item.pixelIndex[1] === col) {
            return {...item, colour: selectedColour};
          }
          return item;
        });
        setTouchedPixels(modifiedColour);
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

import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import {TouchedPixels} from '../types';

interface PixelProps {
  width: number;
  pixelColour: string;
  index: [number, number];
  selectedColour: string;
  touchedPixels: TouchedPixels;
  setTouchedPixels: React.Dispatch<React.SetStateAction<TouchedPixels>>;
  pencilSelected: boolean;
  rubberSelected: boolean;
}

const Pixel: React.FC<PixelProps> = ({
  width,
  pixelColour,
  index,
  selectedColour,
  touchedPixels,
  setTouchedPixels,
  pencilSelected,
  rubberSelected,
}) => {
  const [newPixelColour, setNewPixelColour] = useState(pixelColour);
  function applyColour() {
    if (pencilSelected) {
      const newPixelGrid = [...touchedPixels];
      newPixelGrid[index[0]][index[1]].pixelColour = selectedColour;
      setTouchedPixels(newPixelGrid);
    } else if (rubberSelected) {
      const newPixelGrid = [...touchedPixels];
      newPixelGrid[index[0]][index[1]].pixelColour = 'transparent';
      setTouchedPixels(newPixelGrid);
    }
  }

  useEffect(() => {
    setNewPixelColour(touchedPixels[index[0]][index[1]].pixelColour);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  pencilSelected,
  rubberSelected,
}: {
  gridSize: number;
  selectedColour: string;
  touchedPixels: TouchedPixels;
  setTouchedPixels: React.Dispatch<React.SetStateAction<TouchedPixels>>;
  pencilSelected: boolean;
  rubberSelected: boolean;
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

      if (pencilSelected) {
        if (touchedPixels[row][col].pixelColour !== selectedColour) {
          const newPixelGrid = [...touchedPixels];
          newPixelGrid[row][col].pixelColour = selectedColour;
          setTouchedPixels(newPixelGrid);
        }
      } else if (rubberSelected) {
        if (touchedPixels[row][col].pixelColour !== 'transparent') {
          const newPixelGrid = [...touchedPixels];
          newPixelGrid[row][col].pixelColour = 'transparent';
          setTouchedPixels(newPixelGrid);
        }
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
            pencilSelected={pencilSelected}
            rubberSelected={rubberSelected}
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
